import { Component, OnInit, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.css']
})
export class MediaListComponent implements OnInit {
  currentPage: number = 1;
  itemsPerPage: number = 5;
  @Input("mediaCollection") mediaCollection: any[];
  pageChange: EventEmitter<String> = new EventEmitter();
  constructor() { 
    this.pageChange.subscribe(res=>{
      this.currentPage = res
    })
  }
  ngOnInit(): void {
  }
  
 
}
