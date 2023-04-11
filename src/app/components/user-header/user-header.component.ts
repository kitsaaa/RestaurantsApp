import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  logoutClicked() {
    window.localStorage.setItem('authenticated', '0');
    window.localStorage.setItem('currentUser', '')
    window.localStorage.setItem('currentUserID', '');
  }

  homeClicked() {
    this._router.navigate(['/home']);
  }

}
