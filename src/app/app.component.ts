import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'capstone';

  ngOnInit() {
    window.sessionStorage.setItem('authenticated', 'false');
    console.log("Initialized the page");
  }
}
