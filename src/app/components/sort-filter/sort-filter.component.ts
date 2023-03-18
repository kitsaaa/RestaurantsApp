import { Component, OnInit, EventEmitter, Output } from '@angular/core';

interface Post{
  name: string;
  date: string;
}
@Component({
  selector: 'app-sort-filter',
  templateUrl: './sort-filter.component.html',
  styleUrls: ['./sort-filter.component.css']
})

export class SortFilterComponent implements OnInit {
  @Output() sortChanged = new EventEmitter<string>();
  selectedSort: string = '';
  sortOpts: any = ['Name', 'Date']
  constructor() { }

  ngOnInit(): void {
    
  }


  onSortChange(sortOption: string) {
    this.sortChanged.emit(sortOption);
  }
  radioChangeHandler(event: any){
    this.selectedSort = event.target.value;
    this.onSortChange(this.selectedSort);
}
}
