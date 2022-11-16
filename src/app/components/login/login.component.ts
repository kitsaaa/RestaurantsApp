import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input()
  loginError: string;
  wrongUser: boolean = false;
  users: any;
  
  type: string = "password";
  isText: Boolean = false;
  eyeIcon: string = "fa-eye-slash";
  loginForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private _usersService: UsersService, private _router: Router) { 
    this.loginError = 'Wrong username or password';
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password"
  }

  onLogin(usernameVal: string, passwordVal: string) {

    let matchFound = false;
    this._usersService.getPosts(1).subscribe(data => {
      console.log(data[0].email)
      for (let i = 0; i < data.length; i++) {
        if (usernameVal == data[i].email && passwordVal == data[i].password) {
          matchFound = true;
          this.wrongUser= false;
          console.log("Match was found");
          if (data[i].usertype == 1) {
            this._router.navigate(['/dashboard']);
          }
          else if (data[i].usertype == 2) {
            this._router.navigate(['/home']);
          }
          
        }
        else{
          this.wrongUser= true;
        }
      }
    })
      
  }
}
