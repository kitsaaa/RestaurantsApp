import { AbstractType, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/services/User';
import { UsersService } from 'src/app/services/users.service';

var mongoObjectId = function () {
  var timestamp = (new Date().getTime() / 1000 | 0).toString(16);
  return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function() {
      return (Math.random() * 16 | 0).toString(16);
  }).toLowerCase(); 
};


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  type: string = "password";
  isText: Boolean = false;
  eyeIcon: string = "fa-eye-slash"
  signUpForm!: FormGroup;
  user: IUser = new IUser();
  constructor(private formBuilder : FormBuilder, private _usersService: UsersService, private _router: Router) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      ConfirmPassword: ['', Validators.required]
    },
    {
      validators: this.MustMatch('password', 'ConfirmPassword')
    }
    )
  }
  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password"
  }

  get f(){
    return this.signUpForm.controls
  }

  MustMatch(password:any, ConfirmPassword:any){
    return(fg:FormGroup)=>{
      const passwordctrl = fg.controls[password];
      const Confrimpasswordctrl = fg.controls[ConfirmPassword];
      

      if(passwordctrl.value != Confrimpasswordctrl.value){
        Confrimpasswordctrl.setErrors({MustMatch: true});
        console.log("inside if")
      }
      else{
        Confrimpasswordctrl.setErrors(null);
      }
    }
  }

  onSubmit() {
    this.user._id = mongoObjectId();

    this.user.email = this.signUpForm.value.email;
    this.user.firstname = this.signUpForm.value.firstName;
    this.user.lastname = this.signUpForm.value.lastName;
    this.user.password = this.signUpForm.value.password;
    this.user.usertype = 2;
    this._usersService.newPost(this.user).subscribe(data => {
      this._router.navigate(['/login']);
    })
    console.log(this.user)
  }
}
