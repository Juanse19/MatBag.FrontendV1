import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from "@angular/common";

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

import { TeamMURoutingModule } from './team-mu-routing.module';
import { TeamMUComponent } from './team-mu.component';
import { CircularGaugeAllModule } from "@syncfusion/ej2-angular-circulargauge";


@NgModule({
  declarations: [TeamMUComponent],
  imports: [
    CommonModule,
    TeamMURoutingModule,
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
    CircularGaugeAllModule,
  ]
})
export class TeamMUModule { }
