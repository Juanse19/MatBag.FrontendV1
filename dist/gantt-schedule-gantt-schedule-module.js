(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gantt-schedule-gantt-schedule-module"],{

/***/ "./src/app/pages/gantt-schedule/gantt-schedule-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/gantt-schedule/gantt-schedule-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: GanttScheduleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GanttScheduleRoutingModule", function() { return GanttScheduleRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _gantt_schedule_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gantt-schedule.component */ "./src/app/pages/gantt-schedule/gantt-schedule.component.ts");
/* harmony import */ var _schedulergantt_schedulergantt_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./schedulergantt/schedulergantt.component */ "./src/app/pages/gantt-schedule/schedulergantt/schedulergantt.component.ts");
/* harmony import */ var _scheduler_scheduler_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scheduler/scheduler.component */ "./src/app/pages/gantt-schedule/scheduler/scheduler.component.ts");




// import { SchedulerSitaComponent } from './scheduler-sita/scheduler-sita.component';



var routes = [
    {
        path: '',
        component: _gantt_schedule_component__WEBPACK_IMPORTED_MODULE_2__["GanttScheduleComponent"],
        children: [
            {
                path: '',
                component: _schedulergantt_schedulergantt_component__WEBPACK_IMPORTED_MODULE_3__["SchedulerganttComponent"],
            },
            // {
            //   path: 'SchedulerPalmerola',
            //   component: SchedulerSitaComponent,
            // },
            {
                path: 'SchedulerPia',
                component: _scheduler_scheduler_component__WEBPACK_IMPORTED_MODULE_4__["SchedulerComponent"],
            },
        ]
    }
];
var GanttScheduleRoutingModule = /** @class */ (function () {
    function GanttScheduleRoutingModule() {
    }
    GanttScheduleRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GanttScheduleRoutingModule });
    GanttScheduleRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GanttScheduleRoutingModule_Factory(t) { return new (t || GanttScheduleRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return GanttScheduleRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GanttScheduleRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GanttScheduleRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/gantt-schedule/gantt-schedule.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/gantt-schedule/gantt-schedule.component.ts ***!
  \******************************************************************/
/*! exports provided: GanttScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GanttScheduleComponent", function() { return GanttScheduleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");



var GanttScheduleComponent = /** @class */ (function () {
    function GanttScheduleComponent() {
    }
    GanttScheduleComponent.prototype.ngOnInit = function () { };
    GanttScheduleComponent.ɵfac = function GanttScheduleComponent_Factory(t) { return new (t || GanttScheduleComponent)(); };
    GanttScheduleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GanttScheduleComponent, selectors: [["ngx-gantt"]], decls: 1, vars: 0, template: function GanttScheduleComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
    return GanttScheduleComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GanttScheduleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "ngx-gantt",
                template: "\n      <router-outlet> </router-outlet>\n    ",
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/gantt-schedule/gantt-schedule.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/gantt-schedule/gantt-schedule.module.ts ***!
  \***************************************************************/
/*! exports provided: GanttScheduleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GanttScheduleModule", function() { return GanttScheduleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _gantt_schedule_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gantt-schedule-routing.module */ "./src/app/pages/gantt-schedule/gantt-schedule-routing.module.ts");
/* harmony import */ var _gantt_schedule_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gantt-schedule.component */ "./src/app/pages/gantt-schedule/gantt-schedule.component.ts");
/* harmony import */ var _syncfusion_ej2_angular_gantt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @syncfusion/ej2-angular-gantt */ "./node_modules/@syncfusion/ej2-angular-gantt/__ivy_ngcc__/@syncfusion/ej2-angular-gantt.es5.js");
/* harmony import */ var _schedulergantt_schedulergantt_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./schedulergantt/schedulergantt.component */ "./src/app/pages/gantt-schedule/schedulergantt/schedulergantt.component.ts");
/* harmony import */ var _scheduler_scheduler_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scheduler/scheduler.component */ "./src/app/pages/gantt-schedule/scheduler/scheduler.component.ts");







// import { SchedulerSitaComponent } from './scheduler-sita/scheduler-sita.component';


var GanttScheduleModule = /** @class */ (function () {
    function GanttScheduleModule() {
    }
    GanttScheduleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GanttScheduleModule });
    GanttScheduleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GanttScheduleModule_Factory(t) { return new (t || GanttScheduleModule)(); }, providers: [_syncfusion_ej2_angular_gantt__WEBPACK_IMPORTED_MODULE_4__["EditService"], _syncfusion_ej2_angular_gantt__WEBPACK_IMPORTED_MODULE_4__["FilterService"], _syncfusion_ej2_angular_gantt__WEBPACK_IMPORTED_MODULE_4__["SortService"], _syncfusion_ej2_angular_gantt__WEBPACK_IMPORTED_MODULE_4__["SelectionService"], _syncfusion_ej2_angular_gantt__WEBPACK_IMPORTED_MODULE_4__["ToolbarService"], _syncfusion_ej2_angular_gantt__WEBPACK_IMPORTED_MODULE_4__["DayMarkersService"]], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _gantt_schedule_routing_module__WEBPACK_IMPORTED_MODULE_2__["GanttScheduleRoutingModule"],
                _syncfusion_ej2_angular_gantt__WEBPACK_IMPORTED_MODULE_4__["GanttAllModule"],
            ]] });
    return GanttScheduleModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GanttScheduleModule, { declarations: [_gantt_schedule_component__WEBPACK_IMPORTED_MODULE_3__["GanttScheduleComponent"], _schedulergantt_schedulergantt_component__WEBPACK_IMPORTED_MODULE_5__["SchedulerganttComponent"], _scheduler_scheduler_component__WEBPACK_IMPORTED_MODULE_6__["SchedulerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _gantt_schedule_routing_module__WEBPACK_IMPORTED_MODULE_2__["GanttScheduleRoutingModule"],
        _syncfusion_ej2_angular_gantt__WEBPACK_IMPORTED_MODULE_4__["GanttAllModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GanttScheduleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_gantt_schedule_component__WEBPACK_IMPORTED_MODULE_3__["GanttScheduleComponent"], _schedulergantt_schedulergantt_component__WEBPACK_IMPORTED_MODULE_5__["SchedulerganttComponent"], _scheduler_scheduler_component__WEBPACK_IMPORTED_MODULE_6__["SchedulerComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _gantt_schedule_routing_module__WEBPACK_IMPORTED_MODULE_2__["GanttScheduleRoutingModule"],
                    _syncfusion_ej2_angular_gantt__WEBPACK_IMPORTED_MODULE_4__["GanttAllModule"],
                ],
                providers: [_syncfusion_ej2_angular_gantt__WEBPACK_IMPORTED_MODULE_4__["EditService"], _syncfusion_ej2_angular_gantt__WEBPACK_IMPORTED_MODULE_4__["FilterService"], _syncfusion_ej2_angular_gantt__WEBPACK_IMPORTED_MODULE_4__["SortService"], _syncfusion_ej2_angular_gantt__WEBPACK_IMPORTED_MODULE_4__["SelectionService"], _syncfusion_ej2_angular_gantt__WEBPACK_IMPORTED_MODULE_4__["ToolbarService"], _syncfusion_ej2_angular_gantt__WEBPACK_IMPORTED_MODULE_4__["DayMarkersService"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/gantt-schedule/scheduler/scheduler.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/gantt-schedule/scheduler/scheduler.component.ts ***!
  \***********************************************************************/
/*! exports provided: SchedulerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulerComponent", function() { return SchedulerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");
/* harmony import */ var _conveyor_scheduler_window_form_window_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../conveyor/scheduler/window-form/window-form.component */ "./src/app/pages/conveyor/scheduler/window-form/window-form.component.ts");
/* harmony import */ var _syncfusion_ej2_angular_gantt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @syncfusion/ej2-angular-gantt */ "./node_modules/@syncfusion/ej2-angular-gantt/__ivy_ngcc__/@syncfusion/ej2-angular-gantt.es5.js");












var GANTTLIST;
var SchedulerComponent = /** @class */ (function () {
    function SchedulerComponent(http, api, windowService) {
        this.http = http;
        this.api = api;
        this.windowService = windowService;
        this.alive = true;
        this.ganttData = [];
        this.ganttSheduData = GANTTLIST;
        this.ChargeSchedulerData();
    }
    SchedulerComponent.prototype.ngOnInit = function () {
        // this.ChargeSchedulerGantt();
        this.data = [
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
            { TaskID: 29, TaskName: 'Include feedback', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: '28ss', Indicators: [
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
        ];
        ;
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
            { field: "StartTime", headerText: "Fecha", format: { format: 'dd/MM/yyyy', type: 'date' } },
            { field: "EndTime", headerText: "Fecha End", format: { format: 'dd/MM/yyyy', type: 'date' } },
        ];
        this.splitterSettings = {
            position: "40%",
        };
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
    };
    SchedulerComponent.prototype.openWindowForm = function () {
        this.windowService.open(_conveyor_scheduler_window_form_window_form_component__WEBPACK_IMPORTED_MODULE_6__["WindowFormComponent"], { title: "" });
    };
    SchedulerComponent.prototype.toolbarClick = function (args) {
        if (args.item.text === 'Click') {
            console.log('Data');
        }
        this.openWindowForm();
    };
    ;
    SchedulerComponent.prototype.onActionComplete = function (args) {
        if (args.requestType == "filterafteropen" && (args.columnName === "StartDate" || args.columnName === "EndDate")) {
            args.filterModel.dlgDiv.querySelector('.e-datetimepicker').ej2_instances[0].min = new Date(1969, 5, 1);
            args.filterModel.dlgDiv.querySelector('.e-datetimepicker').ej2_instances[0].max = new Date(1969, 8, 30);
            args.filterModel.dlgDiv.querySelector('.e-datetimepicker').ej2_instances[0].showTodayButton = false;
            args.filterModel.dlgDiv.querySelector('.e-datetimepicker').ej2_instances[0].dataBind();
        }
    };
    SchedulerComponent.prototype.ChargeSchedulerGantt = function () {
        var _this = this;
        if (this.intervalSubscriptionScheduleGantt) {
            this.intervalSubscriptionScheduleGantt.unsubscribe();
        }
        this.intervalSubscriptionScheduleGantt = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(10000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () {
            return _this.http.get(_this.api.apiUrlNode1 + "/resourceDataGantt");
        }))
            .subscribe(function (res) {
            // GANTTLIST = res
            // this.ganttSheduData = GANTTLIST;
            _this.ganttData = res;
            console.log("ShedulerganttData:", _this.ganttData);
            // this.ganttData = res;
            // console.log("ganttData:", this.ganttData);
        });
    };
    SchedulerComponent.prototype.ChargeSchedulerData = function () {
        var _this = this;
        this.http
            .get(this.api.apiUrlNode1 + "/resourceDataGantt")
            .subscribe(function (res) {
            // GANTTLIST = res
            // this.ganttSheduData = GANTTLIST;
            _this.ganttData = res;
            _this.ChargeSchedulerGantt();
            // console.log("ganttDataSheduler:", this.ganttData);
        });
    };
    SchedulerComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    SchedulerComponent.ɵfac = function SchedulerComponent_Factory(t) { return new (t || SchedulerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbWindowService"])); };
    SchedulerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SchedulerComponent, selectors: [["ngx-scheduler"]], decls: 4, vars: 15, consts: [["ejs-button", "", "status", "info", "nbButton", "", 1, "btn", "btn-primary", 3, "click"], [1, "control-section"], ["id", "ganttDefault", "height", "430px", "durationUnit", "Hour", "dateFormat", "dd-MM-yyyy hh:mm a", "height", "70%", 3, "dataSource", "taskFields", "columns", "dayWorkingTime", "treeColumnIndex", "includeWeekend", "timelineSettings", "labelSettings", "highlightWeekends", "gridLines", "allowSelection", "allowFiltering", "allowSorting", "allowResizing", "splitterSettings", "actionComplete", "toolbarClick"]], template: function SchedulerComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SchedulerComponent_Template_button_click_0_listener() { return ctx.openWindowForm(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Agregar ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ejs-gantt", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("actionComplete", function SchedulerComponent_Template_ejs_gantt_actionComplete_3_listener($event) { return ctx.onActionComplete($event); })("toolbarClick", function SchedulerComponent_Template_ejs_gantt_toolbarClick_3_listener($event) { return ctx.toolbarClick($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.ganttData)("taskFields", ctx.taskSettings)("columns", ctx.columns)("dayWorkingTime", ctx.dayWorkingTime)("treeColumnIndex", 1)("includeWeekend", true)("timelineSettings", ctx.timelineSettings)("labelSettings", ctx.labelSettings)("highlightWeekends", true)("gridLines", ctx.gridLines)("allowSelection", true)("allowFiltering", true)("allowSorting", true)("allowResizing", true)("splitterSettings", ctx.splitterSettings);
        } }, directives: [_syncfusion_ej2_angular_gantt__WEBPACK_IMPORTED_MODULE_7__["GanttComponent"]], encapsulation: 2 });
    SchedulerComponent.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SchedulerComponent, factory: SchedulerComponent.ɵfac, providedIn: 'root' });
    return SchedulerComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SchedulerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-scheduler',
                templateUrl: './scheduler.component.html',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbWindowService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/gantt-schedule/schedulergantt/schedulergantt.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/gantt-schedule/schedulergantt/schedulergantt.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SchedulerganttComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulerganttComponent", function() { return SchedulerganttComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");
/* harmony import */ var _conveyor_scheduler_window_form_window_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../conveyor/scheduler/window-form/window-form.component */ "./src/app/pages/conveyor/scheduler/window-form/window-form.component.ts");
/* harmony import */ var _syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @syncfusion/ej2-buttons */ "./node_modules/@syncfusion/ej2-buttons/index.js");
/* harmony import */ var _syncfusion_ej2_dropdowns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @syncfusion/ej2-dropdowns */ "./node_modules/@syncfusion/ej2-dropdowns/index.js");
/* harmony import */ var _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @syncfusion/ej2-angular-calendars */ "./node_modules/@syncfusion/ej2-angular-calendars/__ivy_ngcc__/@syncfusion/ej2-angular-calendars.es5.js");
/* harmony import */ var _syncfusion_ej2_inputs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @syncfusion/ej2-inputs */ "./node_modules/@syncfusion/ej2-inputs/index.js");
/* harmony import */ var _syncfusion_ej2_angular_gantt__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @syncfusion/ej2-angular-gantt */ "./node_modules/@syncfusion/ej2-angular-gantt/__ivy_ngcc__/@syncfusion/ej2-angular-gantt.es5.js");
















var GANTTLIST;
var SchedulerganttComponent = /** @class */ (function () {
    function SchedulerganttComponent(http, api, windowService) {
        this.http = http;
        this.api = api;
        this.windowService = windowService;
        this.alive = true;
        this.ganttData = [];
        this.ganttSheduData = GANTTLIST;
        this.inputs = {
            booleanedit: _syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_7__["CheckBox"],
            dropdownedit: _syncfusion_ej2_dropdowns__WEBPACK_IMPORTED_MODULE_8__["DropDownList"],
            datepickeredit: _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_9__["DatePicker"],
            datetimepickeredit: _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_9__["DateTimePicker"],
            maskededit: _syncfusion_ej2_inputs__WEBPACK_IMPORTED_MODULE_10__["MaskedTextBox"],
            numericedit: _syncfusion_ej2_inputs__WEBPACK_IMPORTED_MODULE_10__["NumericTextBox"],
            stringedit: _syncfusion_ej2_inputs__WEBPACK_IMPORTED_MODULE_10__["TextBox"]
        };
        this.ChargeSchedulerData();
    }
    SchedulerganttComponent.prototype.ngOnInit = function () {
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
        this.editSettings = {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true,
            allowTaskbarEditing: true,
            showDeleteConfirmDialog: true
        };
        this.toolbar = [{ text: "Agregar", cssClass: 'e-icons e-add', tooltipText: "Add", id: "Add" }, 'Edit', 'Update', 'Delete', 'Cancel'];
        this.columns = [
            { field: "taskID", visible: false },
            { field: "make", headerText: "MU", width: "120" },
            { field: "Subject", headerText: "Vuelo", width: "120" },
            { field: "IATA", headerText: "IATA", width: "120" },
            { field: "StartTime", headerText: "Fecha", format: { format: 'dd/MM/yyyy', type: 'date' } },
            { field: "EndTime", headerText: "Fecha End", format: { format: 'dd/MM/yyyy', type: 'date' } },
        ];
        this.splitterSettings = {
            position: "40%",
        };
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
    };
    SchedulerganttComponent.prototype.openWindowForm = function () {
        this.windowService.open(_conveyor_scheduler_window_form_window_form_component__WEBPACK_IMPORTED_MODULE_6__["WindowFormComponent"], { title: "" });
    };
    SchedulerganttComponent.prototype.actionBegin = function (args) {
        if (args.requestType === "beforeOpenAddDialog") {
            console.log('args Open', args.cancel = true);
            this.openWindowForm();
        }
        else if (args.requestType === "beforeOpenEditDialog") {
            console.log('args Open edit', args);
        }
    };
    ;
    SchedulerganttComponent.prototype.actionComplete = function (args) {
        if ((args.requestType === 'save')) {
            console.log('Se guardo');
        }
        else if (args.requestType === 'delete') {
            console.log('Args', args);
            console.log('Eliminado', args.data[0].taskID);
            console.log('Delete');
        }
    };
    SchedulerganttComponent.prototype.actionBegin1 = function (args) {
        if ((args.requestType === 'delete')) {
            console.log('Deletess');
        }
    };
    SchedulerganttComponent.prototype.toolbarClick = function (args) {
        if (args.item.text === 'Click') {
            console.log('Data');
        }
        this.openWindowForm();
    };
    ;
    SchedulerganttComponent.prototype.ChargeSchedulerGantt = function () {
        var _this = this;
        if (this.intervalSubscriptionScheduleGantt) {
            this.intervalSubscriptionScheduleGantt.unsubscribe();
        }
        this.intervalSubscriptionScheduleGantt = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(20000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () {
            return _this.http.get(_this.api.apiUrlNode1 + "/resourceDataGantt");
        }))
            .subscribe(function (res) {
            // GANTTLIST = res
            // this.ganttSheduData = GANTTLIST;
            _this.ganttData = res;
            console.log("ShedulerganttData:", _this.ganttData);
            // this.ganttData = res;
            // console.log("ganttData:", this.ganttData);
        });
    };
    SchedulerganttComponent.prototype.ChargeSchedulerData = function () {
        var _this = this;
        this.http
            .get(this.api.apiUrlNode1 + "/resourceDataGantt")
            .subscribe(function (res) {
            // GANTTLIST = res
            // this.ganttSheduData = GANTTLIST;
            _this.ganttData = res;
            _this.ChargeSchedulerGantt();
            // console.log("ganttDataSheduler:", this.ganttData);
        });
    };
    SchedulerganttComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    SchedulerganttComponent.ɵfac = function SchedulerganttComponent_Factory(t) { return new (t || SchedulerganttComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbWindowService"])); };
    SchedulerganttComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SchedulerganttComponent, selectors: [["ngx-schedulergantt"]], decls: 4, vars: 16, consts: [["ejs-button", "", "status", "info", "nbButton", "", 1, "btn", "btn-primary", 3, "click"], [1, "control-section"], ["id", "ganttDefault", "height", "430px", "durationUnit", "Hour", "dateFormat", "dd-MM-yyyy hh:mm a", "height", "70%", 3, "dataSource", "taskFields", "columns", "dayWorkingTime", "treeColumnIndex", "includeWeekend", "timelineSettings", "labelSettings", "highlightWeekends", "gridLines", "allowFiltering", "allowSorting", "allowResizing", "splitterSettings", "editSettings", "toolbar", "actionBegin", "actionComplete"]], template: function SchedulerganttComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SchedulerganttComponent_Template_button_click_0_listener() { return ctx.openWindowForm(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Agregar ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ejs-gantt", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("actionBegin", function SchedulerganttComponent_Template_ejs_gantt_actionBegin_3_listener($event) { return ctx.actionBegin($event); })("actionComplete", function SchedulerganttComponent_Template_ejs_gantt_actionComplete_3_listener($event) { return ctx.actionComplete($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.ganttData)("taskFields", ctx.taskSettings)("columns", ctx.columns)("dayWorkingTime", ctx.dayWorkingTime)("treeColumnIndex", 1)("includeWeekend", true)("timelineSettings", ctx.timelineSettings)("labelSettings", ctx.labelSettings)("highlightWeekends", true)("gridLines", ctx.gridLines)("allowFiltering", true)("allowSorting", true)("allowResizing", true)("splitterSettings", ctx.splitterSettings)("editSettings", ctx.editSettings)("toolbar", ctx.toolbar);
        } }, directives: [_syncfusion_ej2_angular_gantt__WEBPACK_IMPORTED_MODULE_11__["GanttComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dhbnR0LXNjaGVkdWxlL3NjaGVkdWxlcmdhbnR0L3NjaGVkdWxlcmdhbnR0LmNvbXBvbmVudC5zY3NzIn0= */"] });
    SchedulerganttComponent.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SchedulerganttComponent, factory: SchedulerganttComponent.ɵfac, providedIn: 'root' });
    return SchedulerganttComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SchedulerganttComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-schedulergantt',
                templateUrl: './schedulergantt.component.html',
                styleUrls: ['./schedulergantt.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbWindowService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=gantt-schedule-gantt-schedule-module.js.map