import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'capstone';
 
  ngOnInit() {
    window.sessionStorage.setItem('authenticated', '0');
    console.log("Initialized the page");
  }
}
