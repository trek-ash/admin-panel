import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort-options',
  templateUrl: './sort-options.component.html',
  styleUrls: ['./sort-options.component.css']
})
export class SortOptionsComponent implements OnInit {
  selectedDate
  selectedLocation
  showLocation = false
  topCities = ["Delhi", "Mumbai", "Gurgaon", "Banglore"]

  constructor() { }

  ngOnInit(): void {
  }

  onDateSelect(e) {
    console.log(e);
    
  }

  toggleShowLocation() {
    this.showLocation = !this.showLocation
  }
}
