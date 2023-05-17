import { NgModule } from '@angular/core';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { SchedulerViewComponent } from './components/scheduler-view/scheduler-view.component';
import { SchedulerRoutingModule } from './scheduler-routing.module';

@NgModule({
    declarations: [
        SchedulerViewComponent    
    ], 
    imports: [
        SchedulerRoutingModule,
        NzGridModule,
        NzCollapseModule,
        NzPageHeaderModule
    ]

})
export class SchedulerModule {}