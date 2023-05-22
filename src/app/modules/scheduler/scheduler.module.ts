import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzSelectModule } from 'ng-zorro-antd/select';
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
        NzDividerModule,
        NzIconModule,
        NzSelectModule,
        FormsModule
    ]

})
export class SchedulerModule {}