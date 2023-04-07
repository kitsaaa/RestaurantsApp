import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
    if (window.sessionStorage.getItem('authenticated') != '1') {
      console.log('not auth')

      this._router.navigate(['/login']);
    }
  }

}
