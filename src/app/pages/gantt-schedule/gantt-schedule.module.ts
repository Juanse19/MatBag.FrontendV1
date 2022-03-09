import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbInputModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule,
  NbSpinnerModule,
  NbDatepickerModule,
  NbCheckboxModule,
} from "@nebular/theme";

import { GanttScheduleRoutingModule } from './gantt-schedule-routing.module';
import { GanttScheduleComponent } from './gantt-schedule.component';
import { GanttAllModule } from '@syncfusion/ej2-angular-gantt';
import { SchedulerganttComponent } from './schedulergantt/schedulergantt.component';
import { EditService , FilterService, SortService, SelectionService, ToolbarService, 
         DayMarkersService } from '@syncfusion/ej2-angular-gantt';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
// import { SchedulerSitaComponent } from './scheduler-sita/scheduler-sita.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { DialogModule } from '@syncfusion/ej2-angular-popups';


@NgModule({
  declarations: [GanttScheduleComponent, SchedulerganttComponent,  SchedulerComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NbInputModule,
    NbTabsetModule,
    NbUserModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NbSpinnerModule,
    NbDatepickerModule,
    NbCheckboxModule,
    GanttScheduleRoutingModule,
    GanttAllModule,
    DialogModule,
  ],
  providers: [ EditService , FilterService, SortService, SelectionService,ToolbarService,DayMarkersService ]
})
export class GanttScheduleModule { }
