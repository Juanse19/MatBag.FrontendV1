import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ZoneTeamsComponent } from './zone-teams.component';
import { SfcComponent } from './sfc/sfc.component';

const routes: Routes = [
  {
    path: '',
    component: ZoneTeamsComponent,
    children: [
    {
      path: 'sfc',
      component: SfcComponent,
    },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZoneTeamsRoutingModule { }
