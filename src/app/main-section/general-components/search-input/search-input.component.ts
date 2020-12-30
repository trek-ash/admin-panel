import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {
  @Output() onSearch = new EventEmitter();
  searchText: String = "";
  constructor() { }

  ngOnInit(): void {
  }

  onSearchExecution()  {
    this.onSearch.emit(this.searchText)
  }

  onKeyPress(e) {
    if(e.keyCode == 13)
      this.onSearchExecution()
    
  }
}
