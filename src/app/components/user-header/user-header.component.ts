import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logoutClicked() {
    window.localStorage.setItem('authenticated', '0');
    window.localStorage.setItem('currentUser', '')
    window.localStorage.setItem('currentUserID', '');
  }

}
