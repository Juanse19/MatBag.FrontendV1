(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["analytics-analytics-module"],{

/***/ "./src/app/pages/analytics/analytics-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/analytics/analytics-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: AnalyticsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsRoutingModule", function() { return AnalyticsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _analytics_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./analytics.component */ "./src/app/pages/analytics/analytics.component.ts");
/* harmony import */ var _ocupacion_ocupacion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ocupacion/ocupacion.component */ "./src/app/pages/analytics/ocupacion/ocupacion.component.ts");
/* harmony import */ var _ordenes_ordenes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ordenes/ordenes.component */ "./src/app/pages/analytics/ordenes/ordenes.component.ts");
/* harmony import */ var _ordenes_no_wips_ordenes_no_wips_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ordenes-no-wips/ordenes-no-wips.component */ "./src/app/pages/analytics/ordenes-no-wips/ordenes-no-wips.component.ts");
/* harmony import */ var _predictivo_predictivo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./predictivo/predictivo.component */ "./src/app/pages/analytics/predictivo/predictivo.component.ts");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reports/reports.component */ "./src/app/pages/analytics/reports/reports.component.ts");










var routes = [{
        path: '',
        component: _analytics_component__WEBPACK_IMPORTED_MODULE_2__["AnalyticsComponent"],
        children: [
            {
                path: 'ocupacion',
                component: _ocupacion_ocupacion_component__WEBPACK_IMPORTED_MODULE_3__["OcupacionComponent"],
            },
            {
                path: 'ordenes',
                component: _ordenes_ordenes_component__WEBPACK_IMPORTED_MODULE_4__["OrdenesComponent"],
            },
            {
                path: 'ordenesNotWips',
                component: _ordenes_no_wips_ordenes_no_wips_component__WEBPACK_IMPORTED_MODULE_5__["OrdenesNoWipsComponent"],
            },
            {
                path: 'predictivo',
                component: _predictivo_predictivo_component__WEBPACK_IMPORTED_MODULE_6__["PredictivoComponent"],
            },
            {
                path: 'reportes',
                component: _reports_reports_component__WEBPACK_IMPORTED_MODULE_7__["ReportsComponent"],
            },
        ],
    }];
var AnalyticsRoutingModule = /** @class */ (function () {
    function AnalyticsRoutingModule() {
    }
    AnalyticsRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: AnalyticsRoutingModule });
    AnalyticsRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function AnalyticsRoutingModule_Factory(t) { return new (t || AnalyticsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AnalyticsRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AnalyticsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AnalyticsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/analytics/analytics.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/analytics/analytics.component.ts ***!
  \********************************************************/
/*! exports provided: AnalyticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsComponent", function() { return AnalyticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");



var AnalyticsComponent = /** @class */ (function () {
    function AnalyticsComponent() {
    }
    AnalyticsComponent.prototype.ngOnInit = function () {
    };
    AnalyticsComponent.??fac = function AnalyticsComponent_Factory(t) { return new (t || AnalyticsComponent)(); };
    AnalyticsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AnalyticsComponent, selectors: [["ngx-analytics"]], decls: 1, vars: 0, template: function AnalyticsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
    return AnalyticsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AnalyticsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-analytics',
                template: "<router-outlet></router-outlet>",
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/analytics/analytics.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/analytics/analytics.module.ts ***!
  \*****************************************************/
/*! exports provided: AnalyticsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsModule", function() { return AnalyticsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");
/* harmony import */ var _analytics_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./analytics-routing.module */ "./src/app/pages/analytics/analytics-routing.module.ts");
/* harmony import */ var _predictivo_predictivo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./predictivo/predictivo.component */ "./src/app/pages/analytics/predictivo/predictivo.component.ts");
/* harmony import */ var _ocupacion_ocupacion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ocupacion/ocupacion.component */ "./src/app/pages/analytics/ocupacion/ocupacion.component.ts");
/* harmony import */ var _ordenes_no_wips_ordenes_no_wips_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ordenes-no-wips/ordenes-no-wips.component */ "./src/app/pages/analytics/ordenes-no-wips/ordenes-no-wips.component.ts");
/* harmony import */ var _ordenes_ordenes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ordenes/ordenes.component */ "./src/app/pages/analytics/ordenes/ordenes.component.ts");
/* harmony import */ var _analytics_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./analytics.component */ "./src/app/pages/analytics/analytics.component.ts");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/__ivy_ngcc__/fesm2015/ng2-smart-table.js");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./reports/reports.component */ "./src/app/pages/analytics/reports/reports.component.ts");













var AnalyticsModule = /** @class */ (function () {
    function AnalyticsModule() {
    }
    AnalyticsModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: AnalyticsModule });
    AnalyticsModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function AnalyticsModule_Factory(t) { return new (t || AnalyticsModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _analytics_routing_module__WEBPACK_IMPORTED_MODULE_3__["AnalyticsRoutingModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__["Ng2SmartTableModule"],
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_10__["ThemeModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbUserModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbTabsetModule"],
            ]] });
    return AnalyticsModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AnalyticsModule, { declarations: [_predictivo_predictivo_component__WEBPACK_IMPORTED_MODULE_4__["PredictivoComponent"], _ocupacion_ocupacion_component__WEBPACK_IMPORTED_MODULE_5__["OcupacionComponent"], _ordenes_no_wips_ordenes_no_wips_component__WEBPACK_IMPORTED_MODULE_6__["OrdenesNoWipsComponent"], _ordenes_ordenes_component__WEBPACK_IMPORTED_MODULE_7__["OrdenesComponent"], _analytics_component__WEBPACK_IMPORTED_MODULE_8__["AnalyticsComponent"], _reports_reports_component__WEBPACK_IMPORTED_MODULE_11__["ReportsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _analytics_routing_module__WEBPACK_IMPORTED_MODULE_3__["AnalyticsRoutingModule"],
        ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__["Ng2SmartTableModule"],
        _theme_theme_module__WEBPACK_IMPORTED_MODULE_10__["ThemeModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbUserModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbTabsetModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AnalyticsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_predictivo_predictivo_component__WEBPACK_IMPORTED_MODULE_4__["PredictivoComponent"], _ocupacion_ocupacion_component__WEBPACK_IMPORTED_MODULE_5__["OcupacionComponent"], _ordenes_no_wips_ordenes_no_wips_component__WEBPACK_IMPORTED_MODULE_6__["OrdenesNoWipsComponent"], _ordenes_ordenes_component__WEBPACK_IMPORTED_MODULE_7__["OrdenesComponent"], _analytics_component__WEBPACK_IMPORTED_MODULE_8__["AnalyticsComponent"], _reports_reports_component__WEBPACK_IMPORTED_MODULE_11__["ReportsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _analytics_routing_module__WEBPACK_IMPORTED_MODULE_3__["AnalyticsRoutingModule"],
                    ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__["Ng2SmartTableModule"],
                    _theme_theme_module__WEBPACK_IMPORTED_MODULE_10__["ThemeModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbUserModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbTabsetModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/analytics/ocupacion/ocupacion.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/analytics/ocupacion/ocupacion.component.ts ***!
  \******************************************************************/
/*! exports provided: OcupacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OcupacionComponent", function() { return OcupacionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/__ivy_ngcc__/fesm2015/ng2-smart-table.js");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");










var OcupacionComponent = /** @class */ (function () {
    function OcupacionComponent(apiGetComp, api) {
        this.apiGetComp = apiGetComp;
        this.api = api;
        /** Table de ocupacion del sistema */
        this.settings1 = {
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
        this.source1 = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["LocalDataSource"]();
        this.ChargeReportOcupation();
    }
    OcupacionComponent.prototype.ngOnInit = function () {
    };
    OcupacionComponent.prototype.ChargeReportOcupation = function () {
        var _this = this;
        this.apiGetComp.GetJson(this.api.apiUrlMatbox + '/Reports/GeReportOcupation').subscribe(function (res) {
            //REPORTOCUPATION=res;
            // console.log("Report Ocupacion:", res);
            _this.ReportOcupation = res;
            _this.source1.load(res);
        });
        var contador = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(60000);
        contador.subscribe(function (n) {
            _this.apiGetComp.GetJson(_this.api.apiUrlMatbox + '/Reports/GeReportOcupation').subscribe(function (res) {
                //REPORTOCUPATION=res;
                _this.ReportOcupation = res;
                _this.source1.load(res);
            });
        });
    };
    OcupacionComponent.??fac = function OcupacionComponent_Factory(t) { return new (t || OcupacionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_3__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"])); };
    OcupacionComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: OcupacionComponent, selectors: [["ngx-ocupacion"]], decls: 5, vars: 2, consts: [[1, "example-smart-table", 3, "settings", "source"]], template: function OcupacionComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " Ocupaci\u00F3n del sistema ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "ng2-smart-table", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("settings", ctx.settings1)("source", ctx.source1);
        } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardBodyComponent"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["Ng2SmartTableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FuYWx5dGljcy9vY3VwYWNpb24vb2N1cGFjaW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return OcupacionComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](OcupacionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-ocupacion',
                templateUrl: './ocupacion.component.html',
                styleUrls: ['./ocupacion.component.scss']
            }]
    }], function () { return [{ type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_3__["ApiGetService"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/analytics/ordenes-no-wips/ordenes-no-wips.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/analytics/ordenes-no-wips/ordenes-no-wips.component.ts ***!
  \******************************************************************************/
/*! exports provided: OrdenesNoWipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdenesNoWipsComponent", function() { return OrdenesNoWipsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/__ivy_ngcc__/fesm2015/ng2-smart-table.js");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");










var OrdenesNoWipsComponent = /** @class */ (function () {
    function OrdenesNoWipsComponent(apiGetComp, api) {
        this.apiGetComp = apiGetComp;
        this.api = api;
        /** Table de ordenes que no encajan en los wips */
        this.settings2 = {
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
                    filter: false,
                    hide: true,
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
                    title: 'Diferencia tama??o',
                    type: 'number',
                    filter: false,
                },
            },
        };
        this.source2 = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["LocalDataSource"]();
        this.ChargeOrdersnotwip();
    }
    OrdenesNoWipsComponent.prototype.ngOnInit = function () {
    };
    OrdenesNoWipsComponent.prototype.ChargeOrdersnotwip = function () {
        var _this = this;
        this.apiGetComp.GetJson(this.api.apiUrlMatbox + '/Reports/GetnotwipList').subscribe(function (res) {
            //REPORTOCUPATION=res;
            // console.log("Report notwipList:", res);
            _this.ReportOrdersnotwip = res;
            _this.source2.load(res);
        });
        var contador = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(30000);
        contador.subscribe(function (n) {
            _this.apiGetComp.GetJson(_this.api.apiUrlMatbox + '/Reports/GetnotwipList').subscribe(function (res) {
                //REPORTOCUPATION=res;
                _this.ReportOrdersnotwip = res;
                _this.source2.load(res);
            });
        });
    };
    OrdenesNoWipsComponent.??fac = function OrdenesNoWipsComponent_Factory(t) { return new (t || OrdenesNoWipsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_3__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"])); };
    OrdenesNoWipsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: OrdenesNoWipsComponent, selectors: [["ngx-ordenes-no-wips"]], decls: 5, vars: 2, consts: [[1, "example-smart-table", 3, "settings", "source"]], template: function OrdenesNoWipsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " Ordenes que no se pueden trasportar en el wip ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "ng2-smart-table", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("settings", ctx.settings2)("source", ctx.source2);
        } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardBodyComponent"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["Ng2SmartTableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FuYWx5dGljcy9vcmRlbmVzLW5vLXdpcHMvb3JkZW5lcy1uby13aXBzLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return OrdenesNoWipsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](OrdenesNoWipsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-ordenes-no-wips',
                templateUrl: './ordenes-no-wips.component.html',
                styleUrls: ['./ordenes-no-wips.component.scss']
            }]
    }], function () { return [{ type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_3__["ApiGetService"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/analytics/ordenes/ordenes.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/analytics/ordenes/ordenes.component.ts ***!
  \**************************************************************/
/*! exports provided: OrdenesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdenesComponent", function() { return OrdenesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/__ivy_ngcc__/fesm2015/ng2-smart-table.js");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");










var OrdenesComponent = /** @class */ (function () {
    function OrdenesComponent(apiGetComp, api) {
        this.apiGetComp = apiGetComp;
        this.api = api;
        /** Table de Ordenes */
        this.settings = {
            actions: false,
            columns: {
                id: {
                    title: 'ID',
                    type: 'number',
                    filter: false,
                    hide: true,
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
                cutsNumberTotal: {
                    title: 'N?? cortes Total',
                    type: 'number',
                    filter: false,
                },
                currenCouts: {
                    title: 'Arrumes Salida Corrugador',
                    type: 'number',
                    filter: false,
                },
                ordenesMachineCount: {
                    title: 'Arrumes Entrada Maquina',
                    type: 'number',
                    filter: false,
                },
                diference: {
                    title: 'Pendientes por Atender',
                    type: 'number',
                    filter: false,
                },
            },
        };
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["LocalDataSource"]();
        this.ChargeReportOrdens();
    }
    OrdenesComponent.prototype.ngOnInit = function () {
    };
    OrdenesComponent.prototype.ChargeReportOrdens = function () {
        var _this = this;
        this.apiGetComp.GetJson(this.api.apiUrlMatbox + '/Reports/GetReportOrdersList').subscribe(function (res) {
            //REPORTOCUPATION=res;
            console.log("Report Total Ordenes:", res);
            _this.ReportOrdens = res;
            _this.source.load(res);
        });
        var contador = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(60000);
        contador.subscribe(function (n) {
            _this.apiGetComp.GetJson(_this.api.apiUrlMatbox + '/Reports/GetReportOrdersList').subscribe(function (res) {
                //REPORTOCUPATION=res;
                _this.ReportOrdens = res;
                _this.source.load(res);
            });
        });
    };
    OrdenesComponent.??fac = function OrdenesComponent_Factory(t) { return new (t || OrdenesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_3__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"])); };
    OrdenesComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: OrdenesComponent, selectors: [["ngx-ordenes"]], decls: 5, vars: 2, consts: [[1, "example-smart-table", 3, "settings", "source"]], template: function OrdenesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " Ordenes ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "ng2-smart-table", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("settings", ctx.settings)("source", ctx.ReportOrdens);
        } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardBodyComponent"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["Ng2SmartTableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FuYWx5dGljcy9vcmRlbmVzL29yZGVuZXMuY29tcG9uZW50LnNjc3MifQ== */"] });
    return OrdenesComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](OrdenesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-ordenes',
                templateUrl: './ordenes.component.html',
                styleUrls: ['./ordenes.component.scss']
            }]
    }], function () { return [{ type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_3__["ApiGetService"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/analytics/predictivo/predictivo.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/analytics/predictivo/predictivo.component.ts ***!
  \********************************************************************/
/*! exports provided: PredictivoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictivoComponent", function() { return PredictivoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/__ivy_ngcc__/fesm2015/ng2-smart-table.js");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");










var PredictivoComponent = /** @class */ (function () {
    function PredictivoComponent(apiGetComp, api) {
        this.apiGetComp = apiGetComp;
        this.api = api;
        this.settings3 = {
            actions: false,
            columns: {
                // Maquina: {
                //   title: 'Maquina',
                //   type: 'string',
                //   filter: false,
                //   hide: true,
                // },
                maquina: {
                    title: 'Maquina',
                    type: 'string',
                    filter: false,
                },
                metrosPor10MinCorrugador: {
                    title: 'MetrosPor10MinCorrugador',
                    type: 'number',
                    filter: false,
                },
                metrosPor10MinMaquina: {
                    title: 'MetrosPor10MinMaquina',
                    type: 'number',
                    filter: false,
                },
                capacidadWip: {
                    title: 'CapacidadWip',
                    type: 'number',
                    filter: false,
                },
                ocupacionActual: {
                    title: 'OcupacionActual',
                    type: 'number',
                    filter: false,
                },
                anchoTotalAruumeOrden: {
                    title: 'AnchoTotalAruumeOrden',
                    type: 'number',
                    filter: false,
                },
                ocupacionPredictiva: {
                    title: 'OcupacionPredictiva',
                    type: 'number',
                    filter: false,
                },
                tiempoDetencionCorrugador: {
                    title: 'TiempoDetencionCorrugador',
                    type: 'number',
                    filter: false,
                },
                duracionDetencion: {
                    title: 'DuracionDetencion',
                    type: 'number',
                    filter: false,
                },
            },
        };
        this.source3 = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["LocalDataSource"]();
        this.ChargePredictive();
    }
    PredictivoComponent.prototype.ngOnInit = function () {
    };
    PredictivoComponent.prototype.ChargePredictive = function () {
        var _this = this;
        this.apiGetComp.GetJson(this.api.apiUrlMatbox + '/Reports/GetPredictiveList').subscribe(function (res) {
            //REPORTOCUPATION=res;
            // console.log("Report Predictive:", res);
            _this.GetPredictive = res;
            _this.source3.load(res);
        });
        var contador = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(30000);
        contador.subscribe(function (n) {
            _this.apiGetComp.GetJson(_this.api.apiUrlMatbox + '/Reports/GetPredictiveList').subscribe(function (res) {
                //REPORTOCUPATION=res;
                _this.GetPredictive = res;
                _this.source3.load(res);
            });
        });
    };
    PredictivoComponent.??fac = function PredictivoComponent_Factory(t) { return new (t || PredictivoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_3__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"])); };
    PredictivoComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: PredictivoComponent, selectors: [["ngx-predictivo"]], decls: 5, vars: 2, consts: [[1, "example-smart-table", 3, "settings", "source"]], template: function PredictivoComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " Predictivo ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "ng2-smart-table", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("settings", ctx.settings3)("source", ctx.GetPredictive);
        } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardBodyComponent"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["Ng2SmartTableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FuYWx5dGljcy9wcmVkaWN0aXZvL3ByZWRpY3Rpdm8uY29tcG9uZW50LnNjc3MifQ== */"] });
    return PredictivoComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PredictivoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-predictivo',
                templateUrl: './predictivo.component.html',
                styleUrls: ['./predictivo.component.scss']
            }]
    }], function () { return [{ type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_3__["ApiGetService"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/analytics/reports/reports.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/analytics/reports/reports.component.ts ***!
  \**************************************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var ReportsComponent = /** @class */ (function () {
    function ReportsComponent() {
    }
    ReportsComponent.prototype.ngOnInit = function () {
    };
    ReportsComponent.??fac = function ReportsComponent_Factory(t) { return new (t || ReportsComponent)(); };
    ReportsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ReportsComponent, selectors: [["ngx-reports"]], decls: 2, vars: 0, template: function ReportsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "reports works!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FuYWx5dGljcy9yZXBvcnRzL3JlcG9ydHMuY29tcG9uZW50LnNjc3MifQ== */"] });
    return ReportsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ReportsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-reports',
                templateUrl: './reports.component.html',
                styleUrls: ['./reports.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=analytics-analytics-module.js.map