import { AbstractType, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  constructor(private formBuilder : FormBuilder) { }

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
}
