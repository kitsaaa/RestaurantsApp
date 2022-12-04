import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
    if (window.sessionStorage.getItem('authenticated') === 'false')
      this._router.navigate(['/login']);
  }

}
