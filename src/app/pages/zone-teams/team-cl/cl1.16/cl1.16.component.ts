import { Component, Injectable, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { HttpService } from '../../../../@core/backend/common/api/http.service';
import { HttpClient } from '@angular/common/http';
import { ILoadedEventArgs, IPointerDragEventArgs, ITooltipRenderEventArgs, GaugeTheme } from '@syncfusion/ej2-circulargauge';
import { CircularGaugeComponent } from '@syncfusion/ej2-angular-circulargauge';
import { switchMap, takeWhile } from 'rxjs/operators';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import {ApiGetService} from '../../../../@core/backend/common/api/apiGet.services';
import { interval, Subscription } from 'rxjs';
import { DecimalPipe } from '@angular/common';

export interface CL1_16 {
  CL1_16_VelocidadActualMotor: number,
  CL1_16_CorrienteActualMotor: number,
  CL1_16_PotenciaActualMotor: number,
  CL1_16_TorqueActualMotor: number,
  CL1_16_KWh: number,
  CL1_16_voltaje: number
}

@Component({
  selector: 'ngx-cl1_16',
  templateUrl: './cl1.16.component.html',
  styleUrls: ['./cl1.16.component.scss']
})
export class Cl1_16Component implements OnInit {

  private alive=true;

  public TeamCL1_16: CL1_16 = {
    CL1_16_VelocidadActualMotor: 0,
    CL1_16_CorrienteActualMotor: 0,
    CL1_16_PotenciaActualMotor: 0,
    CL1_16_TorqueActualMotor: 0,
    CL1_16_KWh: 0,
    CL1_16_voltaje: 0
  }

  public velocidadCL1_16: any = 0;
  intervalSubscriptionItems?: Subscription;

  @ViewChild('gaugeCL1_16')
    public osr1_1: CircularGaugeComponent;

   // custom code end
public majorTicks: Object = { width: 0 };
public lineStyle: Object = { width: 0 };
public minorTicks: Object = { width: 0 };
//Initializing LabelStyle
public labelStyle: Object = { font: { size: '0' } };
//Initializing Annotation
public annotation: string = "<div id='templateWrap'>" +
"<div class='fontDes' style='width: 16px;height: 16px;margin-top: 4px;'>${pointers[0].value} rpm</div></div></div>";
public annotation2: string = "<div class='fontDes1'>Germany</div>"
public annotation3: string = "<div class='fontDes1'>USA</div>"
public annotation4: string = "<div class='fontDes1'>UK</div>"
public annotation5: string = "<div id='templateWrap'>" +
"<div class='fontDes'>${pointers[0].value}%</div></div></div>";
// public annotation6: string = `<div id='templateWrap'><div class='fontDes3'>cantidad ${this.dataSF1_1?.SF1_1_VelocidadActualMotor}</div></div></div>`;


public germanyAnnotation: Object[] = [{
    content:  "<div id='templateWrap'>"
    +"<img style='width: 16px;height: 16px;margin-top: 4px;' src='./assets/circular-gauge/images/positive.png' />" 
    + "<div style='float: right;color: #424242;font-size: 10px;'>${pointers[0].value}%</div></div></div>",
    angle: 180,
    radius: '130%'
}, {
    content: '<div style="color:#9E9E9E;font-size:16px;font-family:Roboto">Germany</div>',
    angle: 180,
    radius: '65%'
}];


 //Color gauge
 public ranges: Object = [{
  start: 0, end: 40,
  startWidth: 15, endWidth: 15,
  color: '#30B32D'
}, 
{
  start: 40, end: 70,
  startWidth: 15, endWidth: 15,
  color: '#FFDD00'
}, 
{
  start: 70, end: 100,
  startWidth: 15, endWidth: 15,
  color: '#F03E3E'
}
];

public pointers2: Object = [{
  value: 0, radius: '60%',
  animation: { enable: false },
  pointerWidth: 5,
  cap: {
      radius: 6,
      border: { width: 0 }
  },
  needleTail: {
      length: '25%'
  }
}];

public tooltipInterval1: number;

  constructor( 
    private http: HttpClient,
    private api: HttpService,
    private apiGetComp: ApiGetService,
    private decimalPipe: DecimalPipe,
    ) { }

  ngOnInit(): void {
    this.changeCL1_16();
    // this.dataSF1()
  }

  gauge(){
    if (document.getElementById('sample-data')) {
      let value1: number = this.velocidadCL1_16;

      this.osr1_1.axes[0].pointers[0].animation.enable = true;
     
      this.osr1_1.setPointerValue(0, 0, value1);
      this.osr1_1.setAnnotationValue(0, 0, this.osr1_1.axes[0].annotations[0].content);
  } else {
      clearInterval(this.tooltipInterval1);
  }
  }

  test(){
    this.tooltipInterval1 = window.setInterval(

      (): void => {
          if (document.getElementById('sample-data')) {
              let value1: number = this.velocidadCL1_16;

              this.osr1_1.axes[0].pointers[0].animation.enable = true;
             
              this.osr1_1.setPointerValue(0, 0, value1);
              this.osr1_1.setAnnotationValue(0, 0, this.osr1_1.axes[0].annotations[0].content);
          } else {
              clearInterval(this.tooltipInterval1);
          }
      },
      1000);
  }

  ngAfterViewInit(): void {
  

    this.tooltipInterval1 = window.setInterval(

        (): void => {
            if (document.getElementById('sample-dataCL1_16')) {
                let value1: number = this.velocidadCL1_16;
                // let value2: number = this.velocidadSf1_2;
                // let value3: number = this.velocidadSf3_1;
                // let gridData1: number = 4 * value1;
                // let gridData2: number = 6 * value2;
                // let gridData3: number = 7 * value3;
                // let orderData: Object[] = [
                //     {
                //         'Country': 'Germany',
                //         'Sales': 500,
                //         'Target': 400,
                //         'vsTarget': gridData1
                //     }, {
                //         'Country': 'USA',
                //         'Sales': 1000,
                //         'Target': 600,
                //         'vsTarget': gridData2
                //     }, {
                //         'Country': 'UK',
                //         'Sales': 600,
                //         'Target': 700,
                //         'vsTarget': -gridData3
                //     }
                // ];

                // this.grid.dataSource = orderData;
                // this.grid.refresh();

                this.osr1_1.axes[0].pointers[0].animation.enable = true;
                // this.usa.axes[0].pointers[0].animation.enable = true;
                // this.uk.axes[0].pointers[0].animation.enable = true;
                this.osr1_1.setPointerValue(0, 0, value1);
                // this.usa.setPointerValue(0, 0, value2);
                // this.uk.setPointerValue(0, 0, value3);
                this.osr1_1.setAnnotationValue(0, 0, this.osr1_1.axes[0].annotations[0].content);
                // this.usa.setAnnotationValue(0, 0, this.usa.axes[0].annotations[0].content);
                // this.uk.setAnnotationValue(0, 0, this.uk.axes[0].annotations[0].content);
            } else {
                clearInterval(this.tooltipInterval1);
            }
        },
        2000);
}


  changeCL1_16() {
    this.apiGetComp.GetJson(this.api.apiUrlNode1 + '/api/CL1_16')
    .pipe(takeWhile(() => this.alive))
    .subscribe((res: any)=>{
      if (JSON.stringify(res)=='{}') {
        console.log('No hay data CL1_16');
        res.CL1_16_VelocidadActualMotor = 0;
        res.CL1_16_CorrienteActualMotor = 0;
        res.CL1_16_PotenciaActualMotor = 0;
        res.CL1_16_KWh = 0;
      } else {
      this.TeamCL1_16 = res[0]
      // this.dataSF1_1 = TeamSF1_1
      // this.velocidadCL1_16 = this.decimalPipe.transform(this.TeamCL1_16?.CL1_16_VelocidadActualMotor) ?? 0;
      // console.log('SF1_1:', this.TeamCL1_16);
      this.velocidadCL1_16 = this.TeamCL1_16?.CL1_16_VelocidadActualMotor ?? 0;
    }
    this.dataCL1_16();
    });
  }

  dataCL1_16(){
    if (this.intervalSubscriptionItems) {
      this.intervalSubscriptionItems.unsubscribe();
    }

    this.intervalSubscriptionItems = interval(3000)
    .pipe(
      takeWhile(() => this.alive),
      switchMap( () => this.apiGetComp.GetJson(this.api.apiUrlNode1 + '/api/CL1_16'))
    )
    .subscribe((res: any) => {
      if (JSON.stringify(res)=='{}') {
            console.log('no hay data CL1_16');
            res.CL1_16_VelocidadActualMotor = 0;
            res.CL1_16_CorrienteActualMotor = 0;
            res.CL1_16_PotenciaActualMotor = 0;
            res.CL1_16_KWh = 0;
          } else {
            this.TeamCL1_16 = res[0]
            // this.dataSF1_1 = TeamSF1_1
            this.velocidadCL1_16 = this.TeamCL1_16?.CL1_16_VelocidadActualMotor ?? 0;
          }

    },(error) => (console.log(error)),
    () => console.log('Error..!' ),
  );
  }

  ngOnDestroy(): void {
    this.alive = false;
  }

}
