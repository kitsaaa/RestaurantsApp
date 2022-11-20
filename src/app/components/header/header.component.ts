import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _router: Router) { }

  onLogoutClicked() {
    window.sessionStorage.setItem('authenticated','false');
    this._router.navigate(['/home']);
  }

  ngOnInit(): void {
  }

}
