import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort-filter',
  templateUrl: './sort-filter.component.html',
  styleUrls: ['./sort-filter.component.css']
})
export class SortFilterComponent implements OnInit {
  selectedSort: string = '';
  sortOpts: any = ['Name', 'Date']
  constructor() { }

  ngOnInit(): void {
  }
  radioChangeHandler(event: any){
    this.selectedSort = event.target.value;
}
}
