import { NgModule } from '@angular/core';
import { SchedulerViewComponent } from './components/scheduler-view/scheduler-view.component';
import { SchedulerRoutingModule } from './scheduler-routing.module';

@NgModule({
    declarations: [
        SchedulerViewComponent    
    ], 
    imports: [
        SchedulerRoutingModule
    ]

})
export class SchedulerModule {}