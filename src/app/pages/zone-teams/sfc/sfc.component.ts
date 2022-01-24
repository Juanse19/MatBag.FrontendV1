import { Component, OnInit, ViewEncapsulation, ViewChild, Input } from '@angular/core';
import { HttpService } from '../../../@core/backend/common/api/http.service';
import { HttpClient } from '@angular/common/http';
import { ILoadedEventArgs, IPointerDragEventArgs, ITooltipRenderEventArgs, GaugeTheme } from '@syncfusion/ej2-circulargauge';
import { CircularGaugeComponent } from '@syncfusion/ej2-angular-circulargauge';
import { takeWhile } from 'rxjs/operators';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import {ApiGetService} from '../../../@core/backend/common/api/apiGet.services';
// import { SF1_1, SF1_2, SF3_1 } from './models/sfcTeams.model';

interface team {
  SF1_1_Bloqueado: boolean,
SF1_1_SemiautomaticoMotor: boolean,
SF1_1_ManualForwardMotor: boolean,
SF1_1_ManualReverseMotor: boolean,
SF1_1_ResetHorometro: boolean,
SF1_1_ResetContadorMaletas: boolean,
SF1_1_Estado: number,
SF1_1_NumeroAlarma: number,
SF1_1_NumeroFalla: number,
SF1_1_HorasOperacion: number,
SF1_1_MinutosOperacion: number,
SF1_1_SegundosOperacion: number,
SF1_1_ContadorMaletas: number,
SF1_1_SetVelocidadModoAutoMotor: number,
SF1_1_SetVelocidadModoManualMotor: number,
SF1_1_VelocidadActualMotor: number,
SF1_1_CorrienteActualMotor: number,
SF1_1_PotenciaActualMotor: number,
SF1_1_TorqueActualMotor: number,
SF1_1_KWh: number,
}

let TEA: team

export interface SF1_1 {
  SF1_1_VelocidadActualMotor: number,
  SF1_1_CorrienteActualMotor: number,
  SF1_1_PotenciaActualMotor: number,
  SF1_1_TorqueActualMotor: number,
  SF1_1_KWh: number
}

export interface SF1_2 {
  SF1_2_VelocidadActualMotor: number,
  SF1_2_CorrienteActualMotor: number,
  SF1_2_PotenciaActualMotor: number,
  SF1_2_TorqueActualMotor: number,
  SF1_2_KWh: number
}

export interface SF3_1 {
  SF3_1_VelocidadActualMotor: number,
  SF3_1_CorrienteActualMotor: number,
  SF3_1_PotenciaActualMotor: number,
  SF3_1_TorqueActualMotor: number,
  SF3_1_KWh: number
}

let TeamSF1_1: SF1_1;
let TeamSF1_2: SF1_2;

let TeamSF3_1: SF3_1;

@Component({
  selector: 'ngx-sfc',
  templateUrl: './sfc.component.html',
  styleUrls: ['./sfc.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SfcComponent implements OnInit {

  teaLista = TEA; 
  dataSF1_1 = TeamSF1_1
  dataSF1_2 = TeamSF1_2
  dataSF3_1 = TeamSF3_1
  public consumeteam: team[]=[]; 
  private alive=true;
  public consumo;
  public values?: number = 0;
  public velocidadSf1_1: number = 0;
  public velocidadSf1_2: number = 0;
  public velocidadSf3_1: number = 0;

    @ViewChild('gauge1')
    public germany: CircularGaugeComponent;
    @ViewChild('gauge2')
    public usa: CircularGaugeComponent;
    @ViewChild('gauge3')
    public uk: CircularGaugeComponent;
    @ViewChild('grid1')
    public sf: CircularGaugeComponent;
    @ViewChild('team')


    public grid: GridComponent;
    // custom code start
    public load(args: ILoadedEventArgs): void {
        let selectedTheme: string = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.gauge.theme = <GaugeTheme>(selectedTheme.charAt(0).toUpperCase() +
        selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i,  'Contrast');
    }
    // custom code end
    public majorTicks: Object = { width: 0 };
    public lineStyle: Object = { width: 0 };
    public minorTicks: Object = { width: 0 };
    //Initializing LabelStyle
    public labelStyle: Object = { font: { size: '0' } };
    //Initializing Annotation
    public annotation1: string = "<div id='templateWrap'>" +
    "<div class='fontDes' style='width: 16px;height: 16px;margin-top: 4px;'>${pointers[0].value}%</div></div></div>";
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
    public usaAnnotation: Object[] = [{
        content:  "<div id='templateWrap'>"
        +"<img style='width: 16px;height: 16px;margin-top: 4px;' src='./assets/circular-gauge/images/positive.png' />" 
        + "<div style='float: right;color: #424242;font-size: 20px;'>${pointers[0].value}%</div></div></div>",
        angle: 180,
        radius: '30%'
    }, {
        content: '<div style="color:#9E9E9E;font-size:16px;font-family:Roboto">USA</div>',
        angle: 180,
        radius: '65%'
    }];
    public ukAnnotation: Object[] = [{
        content:  "<div id='templateWrap'>"
        +"<img style='width: 16px;height: 16px;margin-top: 4px;' src='./assets/circular-gauge/images/negative.png' />" 
        + "<div style='float: right;color: #424242;font-size: 20px;'>${pointers[0].value}%</div></div></div>",
        angle: 180,
        radius: '30%'
    }, {
        content: '<div style="color:#9E9E9E;font-size:16px;font-family:Roboto">UK</div>',
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

    public pointers1: Object = [{
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
    public pointers3: Object = [{
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

    public data: Object[] = [];

    public tooltipInterval1: number;


  constructor(
    private http: HttpClient,
      private api: HttpService,
      private apiGetComp: ApiGetService,
  ) { 
    
    
    
   }

  ngOnInit(): void {
    // this.consumeSf1();
    this.changeSF1_1();
    this.changeSF1_2();
    this.changeSF3_1();
  //   this.data = [
  //     {
  //         'Country': 'Germany',
  //         'Sales': 500,
  //         'Target': 400,
  //         'vsTarget': 300
  //     }, {
  //         'Country': 'USA',
  //         'Sales': 1000,
  //         'Target': 600,
  //         'vsTarget': 360
  //     }, {
  //         'Country': 'UK',
  //         'Sales': 600,
  //         'Target': 700,
  //         'vsTarget': -100
  //     }
  // ];
  }  

  public consumeSf1(){
    this.http.get(this.api.apiUrlNode1 + '/api/sf11')
    .pipe(takeWhile(() => this.alive))
    .subscribe((res: any)=>{
      TEA = res
      this.teaLista = TEA
      this.values = res.SF1_1_SetVelocidadModoAutoMotor;
      console.log('value', this.values);
      this.consumo = this.teaLista.SF1_1_SetVelocidadModoAutoMotor;
    });

    this.http.get(this.api.apiUrlNode1 + '/CCP1_CCP2_RT?Zona=SF1_1_')
    .pipe(takeWhile(() => this.alive))
    .subscribe((res: any)=>{
      TeamSF1_1 = res
      this.dataSF1_1 = TeamSF1_1
      this.velocidadSf1_1 = res.SF1_1_CorrienteActualMotor;
      console.log('SF1:', this.dataSF1_1.SF1_1_VelocidadActualMotor);
      
    });
    
  }

  changeSF1_1() {
    this.apiGetComp.GetJson(this.api.apiUrlNode1 + '/CCP1_CCP2_RT?Zona=SF1_1_')
    .pipe(takeWhile(() => this.alive))
    .subscribe((res: any)=>{
      TeamSF1_1 = res
      this.dataSF1_1 = TeamSF1_1
      this.velocidadSf1_1 = res.SF1_1_VelocidadActualMotor;
      console.log('SF1_1:', this.dataSF1_1.SF1_1_VelocidadActualMotor);
      
    });
  }

  changeSF1_2() {
    this.http.get(this.api.apiUrlNode1 + '/CCP1_CCP2_RT?Zona=SF1_2_')
    .pipe(takeWhile(() => this.alive))
    .subscribe((res: any)=>{
      TeamSF1_2 = res
      this.dataSF1_2 = TeamSF1_2
      this.velocidadSf1_2 = res.SF1_2_VelocidadActualMotor;
      console.log('dataSF1_2', this.dataSF1_2);
    });
  }

  changeSF3_1() {
    this.apiGetComp.GetJson(this.api.apiUrlNode1 + '/CCP1_CCP2_RT?Zona=SF3_1_')
    .pipe(takeWhile(() => this.alive))
    .subscribe((res: any)=>{
      TeamSF3_1 = res
      this.dataSF3_1 = TeamSF3_1
      this.velocidadSf3_1 = res.SF3_1_KWh;
      console.log('dataSF3_1', this.dataSF3_1);
    });
  }

 
  ngAfterViewInit(): void {
  

    this.tooltipInterval1 = window.setInterval(

        (): void => {
            if (document.getElementById('sample-data')) {
                let value1: number = this.velocidadSf1_1;
                let value2: number = this.velocidadSf1_2;
                let value3: number = this.velocidadSf3_1;
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

                this.germany.axes[0].pointers[0].animation.enable = true;
                this.usa.axes[0].pointers[0].animation.enable = true;
                this.uk.axes[0].pointers[0].animation.enable = true;
                this.germany.setPointerValue(0, 0, value1);
                this.usa.setPointerValue(0, 0, value2);
                this.uk.setPointerValue(0, 0, value3);
                this.germany.setAnnotationValue(0, 0, this.germany.axes[0].annotations[0].content);
                this.usa.setAnnotationValue(0, 0, this.usa.axes[0].annotations[0].content);
                this.uk.setAnnotationValue(0, 0, this.uk.axes[0].annotations[0].content);
            } else {
                clearInterval(this.tooltipInterval1);
            }
        },
        2000);
}

ngOnDestroy(): void {
  this.alive = false;
}


}
