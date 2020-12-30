import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: {name} = {name: "Admin"}
  showOptions = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleOptions() {
    this.showOptions = !this.showOptions;
  }
}
