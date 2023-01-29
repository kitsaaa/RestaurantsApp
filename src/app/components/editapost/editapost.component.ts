import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editapost',
  templateUrl: './editapost.component.html',
  styleUrls: ['./editapost.component.css']
})
export class EditapostComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  //   if (window.sessionStorage.getItem('authenticated') === 'false')
  //     this._router.navigate(['/login']);
 }

}
