import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SchedulerService } from '../../services/scheduler.service';

@Component({
  selector: 'app-scheduler-view',
  templateUrl: './scheduler-view.component.html',
  styleUrls: ['./scheduler-view.component.scss'],
})
export class SchedulerViewComponent implements OnInit {
  size: NzButtonSize = 'large';
  destroyed$ = new Subject<void>();

  constructor(private schedulerService: SchedulerService) {}

  ngOnInit(): void {
    this.getClasses();
  }

  panels = [
    {
      active: false,
      name: 'View details',
      disabled: false,
    },
  ];

  weekdayArray = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  classes: any = [];

  schedulerArrayGroup = {};

  getClasses(): void {
    this.schedulerService
      .getClasses()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((data) => {
        const schedulerArray = data;
        const result = _.mapValues(_.groupBy(schedulerArray, 'weekday'));
        this.classes = result;
      });
  }

  groupBy(arr: any, property: any) {
    return arr.reduce(function (memo: any, x: any) {
      if (!memo[x[property]]) {
        memo[x[property]] = [];
      }
      memo[x[property]].push(x);
      return memo;
    }, {});
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }
}
