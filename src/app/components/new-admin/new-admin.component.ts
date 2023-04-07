import { Component, OnInit } from '@angular/core';
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
  selector: 'app-new-admin',
  templateUrl: './new-admin.component.html',
  styleUrls: ['./new-admin.component.css']
})
export class NewAdminComponent implements OnInit {

  newUser: IUser = new IUser();

     // class properties
     lName:string =""
     fName:string =""
     email:string = ""
     password:string = ""

  constructor(private _usersService: UsersService, private _router: Router) { }

  ngOnInit(): void {
    if (window.sessionStorage.getItem('authenticated') != '1')
      this._router.navigate(['/login']);
  }

  submitPressed()
  {
    this.newUser._id = mongoObjectId();
    this.newUser.email = this.email;
    this.newUser.firstname = this.fName;
    this.newUser.lastname = this.lName;
    this.newUser.password = this.password;
    this.newUser.usertype = 1;
    this._usersService.newPost(this.newUser).subscribe(data => {
      this._router.navigate(['/dashboard']);
    })
  }
  cancelPressed()
  {
    this._router.navigate(['/dashboard']);
  }

}