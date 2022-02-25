import { Component, OnInit } from '@angular/core';

import { LocalDataSource } from 'ng2-smart-table';
import { ApiGetService } from '../../../@core/backend/common/api/apiGet.services';
import { HttpService } from '../../../@core/backend/common/api/http.service';
import { takeWhile } from 'rxjs/operators';
import { NbAccessChecker } from '@nebular/security';
import { interval } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GridComponent, PageSettingsModel, FilterSettingsModel, ToolbarItems, CommandModel } from '@syncfusion/ej2-angular-grids';
import { ResizeService } from '@syncfusion/ej2-angular-grids';

export interface ams {
      Id: number,
      Flight_Notification_Type: string,
      Flight_Notification_RegisterTime: string,
      Flight_FlightId_FlightKind: string,
      Flight_FlightId_AirlineDesignator_IATA: string,
      Flight_FlightId_FlightNumber: string,
      Flight_FlightId_ScheduledDate: string,
      Flight_FlightState_ScheduledTime: string,
      Flight_FlightState_AircraftType_AircraftTypeId_AircraftTypeCode_IATA: string,
      Flight_FlightState_AircraftType_AircraftTypeId_AircraftTypeCode_ICAO: string,
      Flight_FlightState_Aircraft_AircraftId_Registration: string,
      Flight_FlightState_Route_ViaPoints_RouteViaPoint_sequenceNumber: string,
      Flight_FlightState_Route_ViaPoints_RouteViaPoint_AirportCode_IATA: string,
      Flight_FlightState_Route_ViaPoints_RouteViaPoint_AirportCode_ICAO: string,
      Flight_FlightState_propertyName_FlightUniqueID: string,
      Flight_FlightState_ChuteSlots_ChuteSlot_propertyName_StartTime: string,
      Flight_FlightState_ChuteSlots_ChuteSlot_propertyName_EndTime: string,
      Flight_FlightState_ChuteSlots_ChuteSlot_propertyName_Category: string,
      Flight_FlightState_ChuteSlots_ChuteSlot_Chute_propertyName_Name: string,
      Flight_FlightChanges_Change_propertyName_Chutes_OldValue: string,
      Flight_FlightChanges_Change_propertyName_Chutes_NewValue: string,
      Flight_FlightChanges_Change_ChuteSlotsChange_OldValue_ChuteSlot_StartTime: string,
      Flight_FlightChanges_Change_ChuteSlotsChange_OldValue_ChuteSlot_EndTime: string,
      Flight_FlightChanges_Change_ChuteSlotsChange_NewValue_ChuteSlot_StartTime: string,
      Flight_FlightChanges_Change_ChuteSlotsChange_NewValue_ChuteSlot_EndTime: string,
}

@Component({
  selector: 'ngx-message-ams',
  templateUrl: './message-ams.component.html',
  styleUrls: ['./message-ams.component.scss'],
  providers: [ResizeService]
})
export class MessageAMSComponent implements OnInit {
 
  ams = [];

  public amsData: ams[] = [];

  public pageSettings: PageSettingsModel;

  public filterOptions: FilterSettingsModel;

  private alive = true;

  public loading: boolean;
  
  public showCloseIcon: Boolean = this.alive ;

  public toolbarOptions: ToolbarItems[];

  public toolbar: ToolbarItems[] | object;

  // public toolbalopr: ToolbarItems[] | object;

  public commands: CommandModel[];

  public editSettings: Object;  

  public header: string;
  

  constructor(
    public apiGetComp: ApiGetService,
    private http: HttpClient,
    private api: HttpService
    ) {
      this.loading = true;
    }

  ngOnInit(): void {
    this.chargeDataAMS()
    this.toolbarOptions = ['ColumnChooser'];
    this.pageSettings = { pageSize: 10 };
      this.filterOptions = {
      type: 'Menu',
   }
  }

  chargeDataAMS() {
    this.http.get(this.api.apiUrlNode1 + '/api/notificationAMS')
    .pipe(takeWhile(() => this.alive))
    .subscribe((res: any) => {
    //   if (res.length === 0) {
    //     res = [{
    //       Id: 0,
    //       Flight_Notification_Type:0,
    //       Flight_Notification_RegisterTime:0,
    //       Flight_FlightId_FlightKind:0,
    //       Flight_FlightId_AirlineDesignator_IATA:0,
    //       Flight_FlightId_FlightNumber:0,
    //       Flight_FlightId_ScheduledDate:0,
    //       Flight_FlightState_ScheduledTime:0,
    //       Flight_FlightState_AircraftType_AircraftTypeId_AircraftTypeCode_IATA:0,
    //       Flight_FlightState_AircraftType_AircraftTypeId_AircraftTypeCode_ICAO:0,
    //       Flight_FlightState_Aircraft_AircraftId_Registration:0,
    //       Flight_FlightState_Route_ViaPoints_RouteViaPoint_sequenceNumber:0,
    //       Flight_FlightState_Route_ViaPoints_RouteViaPoint_AirportCode_IATA:0,
    //       Flight_FlightState_Route_ViaPoints_RouteViaPoint_AirportCode_ICAO:0,
    //       Flight_FlightState_propertyName_FlightUniqueID:0,
    //       Flight_FlightState_ChuteSlots_ChuteSlot_propertyName_StartTime:0,
    //       Flight_FlightState_ChuteSlots_ChuteSlot_propertyName_EndTime:0,
    //       Flight_FlightState_ChuteSlots_ChuteSlot_propertyName_Category:0,
    //       Flight_FlightState_ChuteSlots_ChuteSlot_Chute_propertyName_Name:0,
    //       Flight_FlightChanges_Change_propertyName_Chutes_OldValue:0,
    //       Flight_FlightChanges_Change_propertyName_Chutes_NewValue:0,
    //       Flight_FlightChanges_Change_ChuteSlotsChange_OldValue_ChuteSlot_StartTime:0,
    //       Flight_FlightChanges_Change_ChuteSlotsChange_OldValue_ChuteSlot_EndTime:0,
    //       Flight_FlightChanges_Change_ChuteSlotsChange_NewValue_ChuteSlot_StartTime:0,
    //       Flight_FlightChanges_Change_ChuteSlotsChange_NewValue_ChuteSlot_EndTime:0,
    // }]
    
      
    //   this.amsData = res;
    //   console.log('amsData: ', this.amsData);
    //   this.loading = false;
    //   } else {
    //   console.log('testData: ', res);
    //   this.loading = false;
    //   this.amsData = res;
    //   }
    this.amsData = res;
    this.loading = false;
    });
    const contador = interval(40000)
    contador.subscribe((n) => {
      this.http.get(this.api.apiUrlNode1 + '/api/notificationAMS')
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any) => {
        this.amsData = res;
        this.loading = false;
      });
    });
  }

  ngOnDestroy() {
    this.alive = false;
  }

}
