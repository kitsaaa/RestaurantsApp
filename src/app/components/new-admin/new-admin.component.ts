import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-admin',
  templateUrl: './new-admin.component.html',
  styleUrls: ['./new-admin.component.css']
})
export class NewAdminComponent implements OnInit {

     // class properties
     lName:string =""
     fName:string =""
     email:string = ""
     password:string = ""

  constructor() { }

  ngOnInit(): void {
  }

  submitPressed()
  {
  
  }
    cancelPressed()
    {
  
    }

}
