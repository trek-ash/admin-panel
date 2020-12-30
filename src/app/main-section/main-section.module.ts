import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MainSectionRoutingModule } from './main-section-routing.module';
import { PicOfTheDayComponent } from './pic-of-the-day/pic-of-the-day.component';
import { UsedCamerasComponent } from './used-cameras/used-cameras.component';
import { MediaListComponent } from './general-components/media-list/media-list.component';
import { MediaDetailComponent } from './general-components/media-list/media-detail/media-detail.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchInputComponent } from './general-components/search-input/search-input.component';
import { SortOptionsComponent } from './general-components/sort-options/sort-options.component';
import { StatusUpdateComponent } from './modals/status-update/status-update.component';
import { ThankYouComponent } from './modals/thank-you/thank-you.component';


@NgModule({
  declarations: [PicOfTheDayComponent, UsedCamerasComponent, MediaListComponent, MediaDetailComponent, SearchInputComponent, SortOptionsComponent, StatusUpdateComponent, ThankYouComponent],
  imports: [
    CommonModule,
    MainSectionRoutingModule,
    NgxPaginationModule,
    FormsModule,

    NgbModule
  ]
})
export class MainSectionModule { }
