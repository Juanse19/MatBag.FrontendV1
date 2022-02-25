import { Component, Inject, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { extend, isNullOrUndefined } from '@syncfusion/ej2-base';
import {
  ScheduleComponent, ActionEventArgs, PopupOpenEventArgs, EventRenderedArgs, RenderCellEventArgs, DragAndDropService,
  TimelineViewsService, GroupModel, EventSettingsModel, ResizeService, TimeScaleModel, WorkHoursModel, View
} from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'ngx-scheduler-sita',
  templateUrl: './scheduler-sita.component.html',
  styleUrls: ['./scheduler-sita.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [TimelineViewsService, ResizeService, DragAndDropService]
})
export class SchedulerSitaComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {
  }

}
