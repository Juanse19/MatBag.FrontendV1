import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SitaComponent } from './sita.component';
import { SitaMessageComponent } from './sita-message/sita-message.component';

const routes: Routes = [{
  path: '',
  component: SitaComponent,
  children: [
    {
      path: 'SitaMessage',
      component: SitaMessageComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SitaRoutingModule { }
