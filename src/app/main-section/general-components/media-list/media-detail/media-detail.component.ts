import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StatusUpdateComponent } from 'src/app/main-section/modals/status-update/status-update.component';

@Component({
  selector: 'app-media-detail',
  templateUrl: './media-detail.component.html',
  styleUrls: ['./media-detail.component.css']
})
export class MediaDetailComponent implements OnInit {
  @Input('mediaDetails') mediaDetails;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  updateStatus(status)  {
    const modalRef = this.modalService.open(StatusUpdateComponent, { centered: true });
    modalRef.componentInstance.status = status;
  }
}
