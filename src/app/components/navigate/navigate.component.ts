import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent implements OnInit {
  opened = false;
  constructor(private _router: Router) { }

  addAdmin() {
    this._router.navigate(['/dashboard/addadmin']);
  }

  addPost() {
    this._router.navigate(['/dashboard/addpost']);
  }

  ngOnInit(): void {
  }

}
