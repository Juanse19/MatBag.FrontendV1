/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { AuthModule } from './@auth/auth.module';
// import { ScheduleAllModule, RecurrenceEditorAllModule, DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService } from '@syncfusion/ej2-angular-schedule';
// import { GridModule } from '@syncfusion/ej2-angular-grids';
// import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { BoldReportDesignerModule  } from '@boldreports/angular-reporting-components';
// Report viewer
import '@boldreports/javascript-reporting-controls/Scripts/bold.report-viewer.min';
// Report Designer
import '@boldreports/javascript-reporting-controls/Scripts/bold.report-designer.min';

// data-visualization
import '@boldreports/javascript-reporting-controls/Scripts/data-visualization/ej.bulletgraph.min';
import '@boldreports/javascript-reporting-controls/Scripts/data-visualization/ej.chart.min';

import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    // ScheduleAllModule,
    // GridModule, 
    // DialogModule,
    // RecurrenceEditorAllModule,

    AuthModule.forRoot(),

    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    BoldReportDesignerModule,
  ],
  bootstrap: [AppComponent],
  // providers: [DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService],
})
export class AppModule {
}
