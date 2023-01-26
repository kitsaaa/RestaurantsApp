import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectedSort: string = '';
  sortOpts: any = ['Name', 'Date']
  constructor() { }

  ngOnInit(): void {
  }
  radioChangeHandler(event: any){
    this.selectedSort = event.target.value;
}
}
