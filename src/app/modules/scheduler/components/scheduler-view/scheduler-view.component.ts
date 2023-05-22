import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { NzSelectSizeType } from 'ng-zorro-antd/select';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DeeplinkService } from '../../services/deeplink.service';
import { SchedulerService } from '../../services/scheduler.service';

@Component({
  selector: 'app-scheduler-view',
  templateUrl: './scheduler-view.component.html',
  styleUrls: ['./scheduler-view.component.scss'],
})
export class SchedulerViewComponent implements OnInit {
  size: NzButtonSize = 'large';
  destroyed$ = new Subject<void>();

  sizeSelect: NzSelectSizeType = 'large';

  constructor(
    private schedulerService: SchedulerService,
    private deeplinkService: DeeplinkService
  ) {}

  ngOnInit(): void {
    this.getClasses();
  }

  expandIconPosition: 'left' | 'right' = 'left';

  collapse = [
    {
      active: false,
      name: 'Find a Class',
      disabled: false,
    },
  ];

  panels = [
    {
      active: false,
      name: 'View details',
      disabled: false,
    },
  ];

  classesFilter: any = [];

  instructorsFilter: any = [];

  weekdayArray = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  classes: any = [];

  schedulerArrayWithoutChange: any = [];

  schedulerArrayGroup = {};

  getClasses(): void {
    this.schedulerService
      .getClasses()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((data: any) => {
        const schedulerArray = data;
        this.schedulerArrayWithoutChange = data;

        const classes = data.map((t: { classTitle: any }) => t.classTitle);
        const instructors = data.map((t: { instructor: any }) => t.instructor);

        this.classesFilter = classes.filter((element: any, index: any) => {
          return classes.indexOf(element) === index;
        });

        this.instructorsFilter = instructors.filter(
          (element: any, index: any) => {
            return instructors.indexOf(element) === index;
          }
        );

        const result = _.mapValues(_.groupBy(schedulerArray, 'weekday'));
        this.classes = result;
      });
  }

  handleGoToLink(id: string) {
    this.deeplinkService.deeplink(id);
  }

  claseObj: any = {};

  changeClasses(classes: any) {
    this.claseObj = classes;

    let schedulerArray;

    if (classes) {
      schedulerArray = this.getMatches(
        classes,
        this.schedulerArrayWithoutChange
      );
    } else {
      schedulerArray = this.schedulerArrayWithoutChange;
    }

    const result = _.mapValues(_.groupBy(schedulerArray, 'weekday'));
    this.classes = result;
  }

  getMatches(classTitle: any, array: any[]) {
    return array.filter(
      (el: { classTitle: any }) => el.classTitle === classTitle
    );
  }
}
