import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
    SchedulerViewComponent
} from "./components/scheduler-view/scheduler-view.component";

const routes: Routes = [
  {
    path: '',
    component: SchedulerViewComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class SchedulerRoutingModule { }
