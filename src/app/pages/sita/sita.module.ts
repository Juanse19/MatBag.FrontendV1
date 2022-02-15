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

import { ThemeModule } from '../../@theme/theme.module'; 

import { SitaRoutingModule } from './sita-routing.module';
import { SitaMessageComponent } from './sita-message/sita-message.component';
import { SitaComponent } from './sita.component';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';


@NgModule({
  declarations: [SitaComponent, SitaMessageComponent],
  imports: [
    CommonModule,
    SitaRoutingModule,
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
    ThemeModule,
    GridModule,
    DropDownListAllModule,
    ToolbarModule,
    DateTimePickerModule,
    DropDownListModule,
    DatePickerModule,
  ],
  providers: [PageService,
    SortService,
    FilterService,
    GroupService],
})
export class SitaModule { }
