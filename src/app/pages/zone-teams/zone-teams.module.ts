import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
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

import { ZoneTeamsRoutingModule } from "./zone-teams-routing.module";
import { ZoneTeamsComponent } from "./zone-teams.component";
import { SfcComponent } from "./sfc/sfc.component";

@NgModule({
  declarations: [ZoneTeamsComponent, SfcComponent],
  imports: [
    CommonModule,
    ZoneTeamsRoutingModule,
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
  ],
})
export class ZoneTeamsModule {}
