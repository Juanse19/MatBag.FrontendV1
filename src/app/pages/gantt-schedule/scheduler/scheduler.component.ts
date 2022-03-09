import { Component, Injectable, OnInit } from '@angular/core';
import { interval, Subscription } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { ApiGetService } from "../../../@core/backend/common/api/apiGet.services";
import { HttpService } from "../../../@core/backend/common/api/http.service";
import { switchMap, takeWhile } from "rxjs/operators";
import { NbWindowService } from '@nebular/theme';
import { ClickEventArgs } from "@syncfusion/ej2-navigations";
import { WindowFormComponent } from '../../conveyor/scheduler/window-form/window-form.component';

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
  selector: 'ngx-scheduler',
  templateUrl: './scheduler.component.html',
  // styleUrls: ['./scheduler.component.scss']
})

export class SchedulerComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private api: HttpService,
    private windowService: NbWindowService) {
      this.ChargeSchedulerData();
     }

    public data: object[];
    public projectStartDate: Date;
    public projectEndDate: Date;
    public taskSettings: object;
  public resourceFields: object;
  public columns: object[];
  public splitterSettings: object;
  public toolbar: object[];
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

    public ngOnInit(): void {
      // this.ChargeSchedulerGantt();
        this.data =  [
          {
              TaskID: 1,
              TaskName: 'Product concept',
              StartDate: new Date('04/02/2019'),
              EndDate: new Date('04/21/2019'),
              subtasks: [
                  { TaskID: 2, TaskName: 'Defining the product and its usage', StartDate: new Date('04/02/2019'), Duration: 3, Progress: 30 },
                  { TaskID: 3, TaskName: 'Defining target audience', StartDate: new Date('04/02/2019'), Duration: 3 },
                  {
                      TaskID: 4, TaskName: 'Prepare product sketch and notes', StartDate: new Date('04/02/2019'), Duration: 2,
                      Predecessor: '2', Progress: 30
                  },
              ]
          },
          {
              TaskID: 5, TaskName: 'Concept approval', StartDate: new Date('04/02/2019'), Duration: 0, Predecessor: '3,4',
              Indicators: [
                  {
                      'date': '04/10/2019',
                      'name': 'Design Phase',
                      'tooltip': 'Design phase completed',
                      'iconClass': 'okIcon e-icons'
                  }
              ]
          },
          {
              TaskID: 6,
              TaskName: 'Market research',
              StartDate: new Date('04/02/2019'),
              EndDate: new Date('04/21/2019'),
              subtasks: [
                  {
                      TaskID: 7,
                      TaskName: 'Demand analysis',
                      StartDate: new Date('04/04/2019'),
                      EndDate: new Date('04/21/2019'),
                      subtasks: [
                          {
                              TaskID: 8, TaskName: 'Customer strength', StartDate: new Date('04/04/2019'), Duration: 4,
                              Predecessor: '5', Progress: 30
                          },
                          { TaskID: 9, TaskName: 'Market opportunity analysis', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: '5' }
                      ]
                  },
                  {
                      TaskID: 10, TaskName: 'Competitor analysis', StartDate: new Date('04/04/2019'), Duration: 4,
                      Predecessor: '7, 8', Progress: 30
                  },
                  { TaskID: 11, TaskName: 'Product strength analsysis', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: '9' },
                  {
                      TaskID: 12, TaskName: 'Research complete', StartDate: new Date('04/04/2019'), Duration: 0, Predecessor: '10',
                      Indicators: [
                          {
                              'date': '04/20/2019',
                              'name': 'Research completed',
                              'tooltip': 'Research completed',
                              'iconClass': 'description e-icons'
                          }
                      ]
                  }
              ]
          },
          {
              TaskID: 13,
              TaskName: 'Product design and development',
              StartDate: new Date('04/04/2019'),
              EndDate: new Date('04/21/2019'),
              subtasks: [
                  {
                      TaskID: 14, TaskName: 'Functionality design', StartDate: new Date('04/04/2019'),
                      Duration: 3, Progress: 30, Predecessor: '12'
                  },
                  { TaskID: 15, TaskName: 'Quality design', StartDate: new Date('04/04/2019'), Duration: 3, Predecessor: '12' },
                  { TaskID: 16, TaskName: 'Define reliability', StartDate: new Date('04/04/2019'), Duration: 2, Progress: 30, Predecessor: '15' },
                  { TaskID: 17, TaskName: 'Identifying raw materials', StartDate: new Date('04/04/2019'), Duration: 2, Predecessor: '15' },
                  {
                      TaskID: 18,
                      TaskName: 'Define cost plan',
                      StartDate: new Date('04/04/2019'),
                      EndDate: new Date('04/21/2019'),
                      subtasks: [
                          {
                              TaskID: 19, TaskName: 'Manufacturing cost', StartDate: new Date('04/04/2019'),
                              Duration: 2, Progress: 30, Predecessor: '17'
                          },
                          { TaskID: 20, TaskName: 'Selling cost', StartDate: new Date('04/04/2019'), Duration: 2, Predecessor: '17' }
                      ]
                  },
                  {
                      TaskID: 21,
                      TaskName: 'Development of the final design',
                      StartDate: new Date('04/04/2019'),
                      EndDate: new Date('04/21/2019'),
                      subtasks: [
                          {
                              TaskID: 22, TaskName: 'Defining dimensions and package volume', StartDate: new Date('04/04/2019'),
                              Duration: 2, Progress: 30, Predecessor: '19,20'
                          },
                          {
                              TaskID: 23, TaskName: 'Develop design to meet industry standards', StartDate: new Date('04/04/2019'),
                              Duration: 2, Predecessor: '22'
                          },
                          { TaskID: 24, TaskName: 'Include all the details', StartDate: new Date('04/04/2019'), Duration: 3, Predecessor: '23' }
                      ]
                  },
                  {
                      TaskID: 25, TaskName: 'CAD computer-aided design', StartDate: new Date('04/04/2019'),
                      Duration: 3, Progress: 30, Predecessor: '24'
                  },
                  { TaskID: 26, TaskName: 'CAM computer-aided manufacturing', StartDate: new Date('04/04/2019'), Duration: 3, Predecessor: '25' },
                  {
                      TaskID: 27, TaskName: 'Design complete', StartDate: new Date('04/04/2019'), Duration: 0, Predecessor: '26'               
                  }
      
              ]
          },
          { TaskID: 28, TaskName: 'Prototype testing', StartDate: new Date('04/04/2019'), Duration: 4, Progress: 30, Predecessor: '27' },
          { TaskID: 29, TaskName: 'Include feedback', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: '28ss',  Indicators: [
              {
                  'date': '05/24/2019',
                  'name': 'Production phase',
                  'tooltip': 'Production phase completed',
                  'iconClass': 'okIcon e-icons'
              }
          ], },
          { TaskID: 30, TaskName: 'Manufacturing', StartDate: new Date('04/04/2019'), Duration: 5, Progress: 30, Predecessor: '28,29' },
          { TaskID: 31, TaskName: 'Assembling materials to finsihed goods', StartDate: new Date('04/04/2019'), Duration: 5, Predecessor: '30' },
          {
              TaskID: 32,
              TaskName: 'Feedback and testing',
              StartDate: new Date('04/04/2019'),
              EndDate: new Date('04/21/2019'),
              subtasks: [
                  {
                      TaskID: 33, TaskName: 'Internal testing and feedback', StartDate: new Date('04/04/2019'),
                      Duration: 3, Progress: 45, Predecessor: '31'
                  },
                  {
                      TaskID: 34, TaskName: 'Customer testing and feedback', StartDate: new Date('04/04/2019'),
                      Duration: 3, Progress: 50, Predecessor: '33'
                  }
              ]
          },
          {
              TaskID: 35,
              TaskName: 'Final product development',
              StartDate: new Date('04/04/2019'),
              EndDate: new Date('04/21/2019'),
              subtasks: [
                  {
                      TaskID: 36, TaskName: 'Important improvements', StartDate: new Date('04/04/2019'),
                      Duration: 4, Progress: 30, Predecessor: '34'
                  },
                  {
                      TaskID: 37, TaskName: 'Address any unforeseen issues', StartDate: new Date('04/04/2019'),
                      Duration: 4, Progress: 30, Predecessor: '36ss',
                      Indicators: [
                          {
                              'date': '06/21/2019',
                              'name': 'Sales and marketing',
                              'tooltip': 'Sales and marketing',
                              'iconClass': 'description e-icons'
                          }
                      ],
                  }
              ]
          },
          {
              TaskID: 38,
              TaskName: 'Final product',
              StartDate: new Date('04/04/2019'),
              EndDate: new Date('04/21/2019'),
              subtasks: [
                  { TaskID: 39, TaskName: 'Branding product', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: '37' },
                  {
                      TaskID: 40, TaskName: 'Marketing and presales', StartDate: new Date('04/04/2019'),
                      Duration: 4, Progress: 30, Predecessor: '39'
                  }
              ]
          }
      ];;
        // this.taskSettings = {
        //     id: 'TaskID',
        //     name: 'TaskName',
        //     startDate: 'StartDate',
        //     endDate: 'EndDate',
        //     duration: 'Duration',
        //     progress: 'Progress',
        //     datam: "make",
        //     dependency: 'Predecessor',
        //     child: 'subtasks'
        // };

        this.taskSettings = {
          id: "taskID",
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
        
        this.columns = [
          { field: "taskID", visible: false },
          { field: "make", headerText: "MU", width: "120" },
          { field: "Subject", headerText: "Vuelo", width: "120" },
          { field: "IATA", headerText: "IATA", width: "120" },
          { field: "StartTime", headerText: "Fecha", format: { format: 'dd/MM/yyyy', type: 'date'} },
          { field: "EndTime", headerText: "Fecha End", format: { format: 'dd/MM/yyyy', type: 'date'} },
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
            format: "MMM, dd, yyyy",
          },
          bottomTier: {
            unit: "Hour",
            format: "hh:mm a",
          },
        };
        this.dayWorkingTime = [{ from: 0, to: 24 }];
      
        // this.toolbar = [{ text: "Agregar", cssClass: 'e-icons e-add', tooltipText: "Click", id: "Click" }];
        // this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'Indent', 'Outdent'];
        this.toolbar = [{ text: "Agregar", cssClass: 'e-icons e-add', tooltipText: "Click", id: "Click" }];
    }

    openWindowForm() {
      this.windowService.open(WindowFormComponent, { title: `` });
    }
    
    public toolbarClick(args: ClickEventArgs): void {
      if (args.item.text === 'Click') {
        console.log('Data');
          }
          
          
          this.openWindowForm();
          
        };

        public onActionComplete(args: any): void {
          if (args.requestType == "filterafteropen" && (args.columnName === "StartDate" || args.columnName === "EndDate")) {
              args.filterModel.dlgDiv.querySelector('.e-datetimepicker').ej2_instances[0].min = new Date(1969, 5, 1);
              args.filterModel.dlgDiv.querySelector('.e-datetimepicker').ej2_instances[0].max = new Date(1969, 8, 30);
              args.filterModel.dlgDiv.querySelector('.e-datetimepicker').ej2_instances[0].showTodayButton = false;
              args.filterModel.dlgDiv.querySelector('.e-datetimepicker').ej2_instances[0].dataBind();
          }
      }

    public ChargeSchedulerGantt() {
      if (this.intervalSubscriptionScheduleGantt) {
        this.intervalSubscriptionScheduleGantt.unsubscribe();
      }
  
      this.intervalSubscriptionScheduleGantt = interval(10000)
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
          // console.log("ganttDataSheduler:", this.ganttData);
        });
      
        
    }

    ngOnDestroy() {
      this.alive = false;
    }

}
