import { NgModule } from "@angular/core";
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
  
import { TeamALRoutingModule } from "./team-al-routing.module";
import { TeamALComponent } from "./team-al.component";
import { CircularGaugeAllModule } from "@syncfusion/ej2-angular-circulargauge";

@NgModule({
  declarations: [TeamALComponent],
  imports: [
    CommonModule,
    TeamALRoutingModule,
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
  ],
})
export class TeamALModule {}
