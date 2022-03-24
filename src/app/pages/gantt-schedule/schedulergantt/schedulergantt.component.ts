import { Component, ElementRef, Injectable, OnInit, ViewChild } from '@angular/core';
import { interval, Subscription } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { ApiGetService } from "../../../@core/backend/common/api/apiGet.services";
import { HttpService } from "../../../@core/backend/common/api/http.service";
import { switchMap, takeWhile } from "rxjs/operators";
import { NbWindowService } from '@nebular/theme';
import { ClickEventArgs } from "@syncfusion/ej2-navigations";
import { WindowFormComponent } from '../../conveyor/scheduler/window-form/window-form.component';
import { CheckBox } from '@syncfusion/ej2-buttons';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { DatePicker, DateTimePicker } from '@syncfusion/ej2-angular-calendars';
import { MaskedTextBox, NumericTextBox, TextBox } from '@syncfusion/ej2-inputs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { EmitType } from '@syncfusion/ej2-base';
import { WindowsSchedulerComponent } from './../windows-scheduler/windows-scheduler.component';

interface gantt {
  Id?: number;
  taskName?: string;
  Subject?: string;
  IATA?: string;
  StartTime?: string;
  EndTime?: string;
  make?: string;
  taskID?: string;
}

let GANTTLIST: gantt[];

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'ngx-schedulergantt',
  templateUrl: './schedulergantt.component.html',
  styleUrls: ['./schedulergantt.component.scss']
})

export class SchedulerganttComponent implements OnInit {

 
    public taskSettings: object;
  public columns: object[];
  public splitterSettings: object;
  public toolbar: object;
  public editSettings: object;
  public gridLines: string;
  public editDialogFields: object[];
  public labelSettings: object;
  public timelineSettings: object;
  // public timezoneValue: string = 'UTC-06:00';
  public dayWorkingTime: object[];
    intervalSubscriptionScheduleGantt: Subscription;
    private alive = true;
    public ganttData: gantt[] = [];
    public ganttSheduData = GANTTLIST;
    public orderForm: FormGroup;
    mostrar: Boolean;
  public showCloseIcon: Boolean = true;
  enctexto: string;

  @ViewChild('ejDialogTX') ejDialogTX: DialogComponent;
  @ViewChild('container', { read: ElementRef, static: true }) container: ElementRef;
  @ViewChild(WindowsSchedulerComponent, { static: true }) public dialog: WindowsSchedulerComponent;
  @ViewChild(WindowsSchedulerComponent, { static: true }) public dialog1: WindowsSchedulerComponent;

  get Subject() { return this.orderForm.get('Subject')}
  get taskName() { return this.orderForm.get('taskName')}
  get make() { return this.orderForm.get('make')}
  get IATA() { return this.orderForm.get('IATA')}
  get StartTime() { return this.orderForm.get('StartTime')}
  get EndTime() { return this.orderForm.get('EndTime')}
  

    public divElement: any;
    public inputs = {
       booleanedit: CheckBox,
       dropdownedit: DropDownList,
       datepickeredit: DatePicker,
       datetimepickeredit: DateTimePicker,
       maskededit: MaskedTextBox,
       numericedit: NumericTextBox,
       stringedit: TextBox
    };

  constructor(private http: HttpClient,
    private api: HttpService,
    private windowService: NbWindowService,
    public dialogWindows: WindowsSchedulerComponent,
    public apiGetComp: ApiGetService,) { 
      this.ChargeSchedulerData();
     }

     public targetElement: HTMLElement;
    public visible: Boolean = true;
    public hidden: Boolean = false;
    public position: object={ X: 'left', Y: 'top' };
    public initialPage: Object;

  ngOnInit(): void {
    this.taskSettings = {
      id: "Id",
      name: "taskName",
      startDate: "StartTime",
      endDate: "EndTime",
      duration: "Duration",
      progress: "Progress",
      datam: "make",
      dataI: "IATA",
      dependency: "Predecessor",
      child: "Children",
    };

    this.orderForm = new FormGroup({
      Id: new FormControl,
      Subject: new FormControl(),
      taskName: new FormControl()
   });

    this.editSettings = {
      allowAdding: true,
      allowEditing: false,
      allowDeleting: true,
      allowTaskbarEditing: true,
      showDeleteConfirmDialog: true
  };
  // this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel'];
  this.toolbar = ['Add', 'Update', 'Delete', 'Cancel'];
    
    this.columns = [
      { field: "Id", visible: false },
      { field: "taskID", headerText: "taskID", width: "120" },
      { field: "make", headerText: "MU", width: "120" },
      { field: "Subject", headerText: "Vuelo", width: "120" },
      { field: "taskName", headerText: "Aerolinea", width: "120" },
      { field: "IATA", headerText: "IATA", width: "120" },
      { field: "StartTime", headerText: "STD", format: { format: 'dd-MM-yyyy hh:mm a', type: 'date'} },
      { field: "EndTime", headerText: "ETD", format: { format: 'dd-MM-yyyy hh:mm a', type: 'date'} },
    ];

    this.splitterSettings = {
      position: "40%",
    }
  //   this.splitterSettings = {
  //     columnIndex: 3
  // };


    this.labelSettings = {
        leftLabel: 'taskName',
    };

    this.gridLines = 'Both';

    this.timelineSettings = {
      timelineUnitSize: 70,
      topTier: {
        unit: "Day",
        format: "MMM, dd, yyyy, hh, mm",
      },
      bottomTier: {
        unit: "Hour",
        format: "hh:mm a",
      },
    };
    this.dayWorkingTime = [{ from: 0, to: 24 }];
  }
  

  // Initialize the Dialog component's target element.
public initilaizeTarget: EmitType<object> = () => {
  this.targetElement = this.container.nativeElement.parentElement;
    }

    public hideDialog: EmitType<object> = () =>  {
      this.ejDialogTX.hide();
  }

    public buttons: Object = [
    {
        'click': this.hideDialog.bind(this),
        // Accessing button component properties by buttonModel property
          buttonModel: {
          content: 'OK',
          isPrimary: true
        }
    }
    ];  

  openWindowForm() {
    this.windowService.open(WindowFormComponent, { title: `` });
  }

  public openWindow(){
    // debugger
    this.dialog.opendevice1();
  }

  createFormGroup(data: gantt): FormGroup {
    return new FormGroup({
      // Id: new FormControl(data.Id, Validators.required),
      Subject: new FormControl(data.Subject, Validators.required),
      taskName: new FormControl(data.taskName, Validators.required)

    });
}

  loadUser(id?) {
    debugger
      this.orderForm.setValue({
        id: this.ganttSheduData[0].Id ? this.ganttSheduData[0].Id : '',
        role: this.ganttSheduData[0].Subject ? this.ganttSheduData[0].Subject : '',
        firstName: this.ganttSheduData[0].taskName ? this.ganttSheduData[0].taskName : '',
      });
    
    }

  public actionBegin(args) {
    if (args.requestType === "beforeOpenAddDialog" ) {
      console.log('args Open', args.cancel = true);
      this.openWindowForm();
    } else if (args.requestType === "beforeOpenEditDialog"){
      args.cancel = true;
      this.enctexto = args.rowData.taskData.Subject;
          this.ejDialogTX.show();
          this.orderForm.setValue({
            Id: args.rowData.taskData.Id ? args.rowData.taskData.Id : '',
            Subject: args.rowData.taskData.Subject ? args.rowData.taskData.Subject : '',
            taskName: args.rowData.taskData.taskName ? args.rowData.taskData.taskName : '',
          });
      console.log('args Open edit', args);
    }
};
  

actionComplete(args) {
  if (( args.requestType === 'save')) {
    console.log('Se guardo');
  } else if (args.requestType === 'delete'){
    console.log('Args', args);
    console.log('Eliminado', args.data[0].taskData.Id);
    console.log('Delete');
    var respons = 
            {
            Id: args.data[0].taskData.Id
            };
      this.apiGetComp.GetJson(this.api.apiUrlNode1 + '/api/deleteFlight?Id=' + args.data[0].taskData.Id)
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any) => {
        console.log('Se envió');
        
      })
  }
}

actionBegin2(args) {
  if (( args.requestType === 'Add')) {
    console.log('Deletess');
  }
}

  public toolbarClick(args: ClickEventArgs): void {
    if (args.item.text === 'Click') {
      console.log('Data');
        }
        this.openWindowForm();
      };

  public ChargeSchedulerGantt() {
    if (this.intervalSubscriptionScheduleGantt) {
      this.intervalSubscriptionScheduleGantt.unsubscribe();
    }

    this.intervalSubscriptionScheduleGantt = interval(20000)
      .pipe(
        takeWhile(() => this.alive),
        switchMap(() =>
          this.http.get(this.api.apiUrlNode1 + "/resourceDataGantt")
        )
      )
      .subscribe((res: any) => {
        // GANTTLIST = res
        // this.ganttSheduData = GANTTLIST;
        this.ganttData = res;
        console.log("ShedulerganttData:", this.ganttData);
        // this.ganttData = res;
        // console.log("ganttData:", this.ganttData);
      });
  }

  ChargeSchedulerData() {
    this.http
      .get(this.api.apiUrlNode1 + "/resourceDataGantt")
      .subscribe((res: any) => {
        // GANTTLIST = res
        // this.ganttSheduData = GANTTLIST;
        this.ganttData = res;
        this.ChargeSchedulerGantt();
        console.log("ganttDataSheduler:", this.ganttData);
      });
    
      
  }

  ngOnDestroy() {
    this.alive = false;
  }

}
