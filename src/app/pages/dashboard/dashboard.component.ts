/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { Component, OnDestroy } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { interval } from 'rxjs';
import { SolarData, SolarEnergyStatistics } from '../../@core/interfaces/iot/solar';
import { Device, DevicesData } from '../../@core/interfaces/iot/devices';
import { LocalDataSource } from 'ng2-smart-table';
import { ApiGetService } from '../../@core/backend/common/api/apiGet.services';
import { HttpService } from '../../@core/backend/common/api/http.service';

interface ReportOcupation {
  id: number;
  name: string;
  totalOcupated: number;
  CurrentOcupated: number;
  Available: number;
  PercOcupation: number;

}

interface Ordersnotwip {
  orderId: number;
  batch: number;
  order: string;
  cutsLength: number;
  cutsWidth: number;
  anchoWip: string;
  target: string;
  wIP: string;
  sizeDifference: number;
}


// let REPORTOCUPATION: ReportOcupation[] = [


// ];
@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnDestroy {

  /** Table de ocupacion del sistema */
  settings = {
    actions: false,
    columns: {
      id: {
        title: 'ID',
        type: 'number',
        filter: false,
        hide: true,

      },
      name: {
        title: 'Nombre',
        type: 'string',
        filter: false,
      },
      totalOcupated: {
        title: 'Capacidad Total (mt)',
        type: 'number',
        filter: false,
      },
      currentOcupated: {
        title: 'Ocupados (mt)',
        type: 'number',
        filter: false,
      },
      available: {
        title: 'Disponible (mt)',
        type: 'number',
        filter: false,
      },
      percOcupation: {
        title: '%Ocupacion',
        type: 'number',
        filter: false,
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  public ReportOcupation: ReportOcupation[];

  /** Table de ordenes que no encajan en los wips */
  setting = {
    actions: false,
    columns: {
      // id: {
      //   title: 'ID',
      //   type: 'number',
      //   filter:false,
      //   hide:true,

      // },
      orderId: {
        title: 'OrderId',
        type: 'number',
        filter:false,
        hide:true,
      },
      batch: {
        title: 'Batch',
        type: 'number',
        filter: false,
      },
      order: {
        title: 'Orden',
        type: 'string',
        filter: false,
      },
      cutsLength: {
        title: 'Longitud cortes',
        type: 'number',
        filter: false,
      },
      cutsWidth: {
        title: 'Ancho corte',
        type: 'number',
        filter: false,
      },
      anchoWip: {
        title: 'Ancho Wip',
        type: 'string',
        filter: false,
      },
      target: {
        title: 'Target',
        type: 'string',
        filter: false,
      },
      wip: {
        title: 'Wip',
        type: 'string',
        filter: false,
      },
      sizeDifference: {
        title: 'Diferencia tamaño',
        type: 'number',
        filter: false,
      },
    },
  };

  sources: LocalDataSource = new LocalDataSource();
  public ReportOrdersnotwip: Ordersnotwip[];


  private alive = true;

  solarValue: SolarEnergyStatistics;

  devices: Device[];

  constructor(private devicesService: DevicesData,
    private solarService: SolarData,
    public apiGetComp: ApiGetService,
    private api: HttpService,
  ) {
    this.ChargeReportOcupation();
    
    this.ChargeOrdersnotwip();

    this.alive;
    
    // this.devicesService.list()
    //   .pipe(takeWhile(() => this.alive))
    //   .subscribe(data => {
    //     this.devices = data.filter(x => x.settings);
    //   });


    // this.solarService.getSolarData()
    //   .pipe(takeWhile(() => this.alive))
    //   .subscribe((data) => {
    //     this.solarValue = data;
    //   });
  }

  // changeDeviceStatus(device: Device, isOn: boolean) {
  //   device.isOn = isOn;
  //   this.devicesService.edit(device)
  //     .pipe(takeWhile(() => this.alive))
  //     .subscribe();
  // }

  ngOnDestroy() {
    this.alive = false;
  }

  ChargeReportOcupation() {
    this.apiGetComp.GetJson(this.api.apiUrlMatbox + '/Reports/GeReportOcupation').subscribe((res: any) => {
      //REPORTOCUPATION=res;
      console.log("Report Ocupacion:", res);
      
      this.ReportOcupation = res;
      this.source.load(res);
    });
    const contador = interval(60000)
    contador.subscribe((n) => {
      this.apiGetComp.GetJson(this.api.apiUrlMatbox + '/Reports/GeReportOcupation').subscribe((res: any) => {
        //REPORTOCUPATION=res;
        this.ReportOcupation = res;
        this.source.load(res);
      });
    });

  }

  ChargeOrdersnotwip() {
    this.apiGetComp.GetJson(this.api.apiUrlMatbox + '/Reports/GetnotwipList').subscribe((res: any) => {
      //REPORTOCUPATION=res;
      console.log("Report notwipList:", res);
      
      this.ReportOrdersnotwip = res;
      this.source.load(res);
    });
    const contador = interval(30000)
    contador.subscribe((n) => {
      this.apiGetComp.GetJson(this.api.apiUrlMatbox + '/Reports/GetnotwipList').subscribe((res: any) => {
        //REPORTOCUPATION=res;
        this.ReportOrdersnotwip = res;
        this.source.load(res);
      });
    });

  }
}
