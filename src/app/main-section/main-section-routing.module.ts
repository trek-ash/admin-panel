import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PicOfTheDayComponent } from './pic-of-the-day/pic-of-the-day.component';
import { UsedCamerasComponent } from './used-cameras/used-cameras.component';

const routes: Routes = [
  { path: '', redirectTo: 'pic-of-the-day'},
  { path: 'pic-of-the-day', component: PicOfTheDayComponent },
  { path: 'used-cameras', component: UsedCamerasComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainSectionRoutingModule { }
