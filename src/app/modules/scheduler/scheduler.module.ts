import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzListModule } from 'ng-zorro-antd/list';
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
        NzPageHeaderModule,
        NzListModule,
        CommonModule,
        NzButtonModule,
        NzDividerModule
    ]

})
export class SchedulerModule {}