import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GanttScheduleComponent } from './gantt-schedule.component';
import { SchedulerganttComponent } from './schedulergantt/schedulergantt.component';
// import { SchedulerSitaComponent } from './scheduler-sita/scheduler-sita.component';
import { SchedulerComponent } from './scheduler/scheduler.component';

const routes: Routes = [
  {
    path: '',
    component: GanttScheduleComponent,
    children: [
    {
      path: '',
      component: SchedulerganttComponent,
    },
    // {
    //   path: 'SchedulerPalmerola',
    //   component: SchedulerSitaComponent,
    // },
    {
      path: 'SchedulerPia',
      component: SchedulerComponent,
    },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GanttScheduleRoutingModule { }
