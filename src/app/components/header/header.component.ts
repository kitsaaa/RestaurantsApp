import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  dashboardClicked() {
    this._router.navigate(['/dashboard']);


  }

  logoutClicked() {
    window.sessionStorage.setItem('authenticated', '0');
    window.sessionStorage.setItem('currentUser', '')
    window.sessionStorage.setItem('currentUserID', '');
  }
}
