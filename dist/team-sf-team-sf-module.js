(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["team-sf-team-sf-module"],{

/***/ "./src/app/pages/zone-teams/team-sf/sf1.10/sf1.10.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-sf/sf1.10/sf1.10.component.ts ***!
  \*********************************************************************/
/*! exports provided: Sf1_10Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sf1_10Component", function() { return Sf1_10Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-angular-circulargauge */ "./node_modules/@syncfusion/ej2-angular-circulargauge/__ivy_ngcc__/@syncfusion/ej2-angular-circulargauge.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");















var _c0 = ["gaugeSF1_10"];
var Sf1_10Component = /** @class */ (function () {
    function Sf1_10Component(http, api, apiGetComp, decimalPipe) {
        this.http = http;
        this.api = api;
        this.apiGetComp = apiGetComp;
        this.decimalPipe = decimalPipe;
        this.alive = true;
        this.TeamSF1_10 = {
            SF1_10_VelocidadActualMotor: 0,
            SF1_10_CorrienteActualMotor: 0,
            SF1_10_PotenciaActualMotor: 0,
            SF1_10_TorqueActualMotor: 0,
            SF1_10_KWh: 0,
            SF1_10_voltaje: 0
        };
        this.velocidadSF1_10 = 0;
        // custom code end
        this.majorTicks = { width: 0 };
        this.lineStyle = { width: 0 };
        this.minorTicks = { width: 0 };
        //Initializing LabelStyle
        this.labelStyle = { font: { size: '0' } };
        //Initializing Annotation
        this.annotation = "<div id='templateWrap'>" +
            "<div class='fontDes' style='width: 16px;height: 16px;margin-top: 4px;'>${pointers[0].value} rpm</div></div></div>";
        this.annotation2 = "<div class='fontDes1'>Germany</div>";
        this.annotation3 = "<div class='fontDes1'>USA</div>";
        this.annotation4 = "<div class='fontDes1'>UK</div>";
        this.annotation5 = "<div id='templateWrap'>" +
            "<div class='fontDes'>${pointers[0].value}%</div></div></div>";
        // public annotation6: string = `<div id='templateWrap'><div class='fontDes3'>cantidad ${this.dataSF1_1?.SF1_1_VelocidadActualMotor}</div></div></div>`;
        this.germanyAnnotation = [{
                content: "<div id='templateWrap'>"
                    + "<img style='width: 16px;height: 16px;margin-top: 4px;' src='./assets/circular-gauge/images/positive.png' />"
                    + "<div style='float: right;color: #424242;font-size: 10px;'>${pointers[0].value}%</div></div></div>",
                angle: 180,
                radius: '130%'
            }, {
                content: '<div style="color:#9E9E9E;font-size:16px;font-family:Roboto">Germany</div>',
                angle: 180,
                radius: '65%'
            }];
        //Color gauge
        this.ranges = [{
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
        this.pointers2 = [{
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
    }
    Sf1_10Component.prototype.ngOnInit = function () {
        this.changeSF1_10();
        // this.dataSF1()
    };
    Sf1_10Component.prototype.gauge = function () {
        if (document.getElementById('sample-data')) {
            var value1 = this.velocidadSF1_10;
            this.osr1_1.axes[0].pointers[0].animation.enable = true;
            this.osr1_1.setPointerValue(0, 0, value1);
            this.osr1_1.setAnnotationValue(0, 0, this.osr1_1.axes[0].annotations[0].content);
        }
        else {
            clearInterval(this.tooltipInterval1);
        }
    };
    Sf1_10Component.prototype.test = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-data')) {
                var value1 = _this.velocidadSF1_10;
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 1000);
    };
    Sf1_10Component.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-dataSF1_10')) {
                var value1 = _this.velocidadSF1_10;
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
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                // this.usa.axes[0].pointers[0].animation.enable = true;
                // this.uk.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                // this.usa.setPointerValue(0, 0, value2);
                // this.uk.setPointerValue(0, 0, value3);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
                // this.usa.setAnnotationValue(0, 0, this.usa.axes[0].annotations[0].content);
                // this.uk.setAnnotationValue(0, 0, this.uk.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 2000);
    };
    Sf1_10Component.prototype.changeSF1_10 = function () {
        var _this = this;
        this.apiGetComp.GetJson(this.api.apiUrlNode1 + '/SF1_10')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('No hay data SF1_10');
                res.SF1_10_VelocidadActualMotor = 0;
                res.SF1_10_CorrienteActualMotor = 0;
                res.SF1_10_PotenciaActualMotor = 0;
                res.SF1_10_KWh = 0;
            }
            else {
                _this.TeamSF1_10 = res;
                // this.dataSF1_1 = TeamSF1_1
                // this.velocidadSF1_10 = this.decimalPipe.transform(this.TeamSF1_10?.SF1_10_VelocidadActualMotor) ?? 0;
                // console.log('SF1_1:', this.TeamSF1_10);
                _this.velocidadSF1_10 = (_b = (_a = _this.TeamSF1_10) === null || _a === void 0 ? void 0 : _a.SF1_10_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        });
    };
    Sf1_10Component.prototype.dataSF1_10 = function () {
        var _this = this;
        if (this.intervalSubscriptionItems) {
            this.intervalSubscriptionItems.unsubscribe();
        }
        this.intervalSubscriptionItems = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(3000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.apiGetComp.GetJson(_this.api.apiUrlNode1 + '/SF1_10'); }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('no hay data SF1_10');
                res.SF1_10_VelocidadActualMotor = 0;
                res.SF1_10_CorrienteActualMotor = 0;
                res.SF1_10_PotenciaActualMotor = 0;
                res.SF1_10_KWh = 0;
            }
            else {
                _this.TeamSF1_10 = res;
                // this.dataSF1_1 = TeamSF1_1
                _this.velocidadSF1_10 = (_b = (_a = _this.TeamSF1_10) === null || _a === void 0 ? void 0 : _a.SF1_10_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        }, function (error) { return (console.log(error)); }, function () { return console.log('Error..!'); });
    };
    Sf1_10Component.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    Sf1_10Component.ɵfac = function Sf1_10Component_Factory(t) { return new (t || Sf1_10Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"])); };
    Sf1_10Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Sf1_10Component, selectors: [["ngx-sf1_10"]], viewQuery: function Sf1_10Component_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.osr1_1 = _t.first);
        } }, decls: 28, vars: 12, consts: [["id", "sample-dataSF1_10", 2, "display", "block", "height", "150px"], ["gaugeSF1_10", ""], ["startAngle", "260", "endAngle", "100", 3, "majorTicks", "minorTicks", "labelStyle", "lineStyle", "ranges", "pointers"], ["angle", "180", "radius", "30%", "zIndex", "1", 3, "content"], [2, "margin-left", "23%", "margin-top", "-0%", "padding-top", "-40px", "padding-block-start", "-98px"], [2, "padding", "0.5625em 0.625em", "margin-top", "-0.10rem"], [2, "padding", "0.5625em 0.625em", "margin-top", "-1.9rem"]], template: function Sf1_10Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " SF1_10 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ejs-circulargauge", 0, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "e-axes");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "e-axis", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "e-annotations");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "e-annotation", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "pre", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Corriente:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Potencia:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Voltaje:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Consumo:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("majorTicks", ctx.majorTicks)("labelStyle", ctx.labelStyle)("lineStyle", ctx.lineStyle)("ranges", ctx.ranges)("pointers", ctx.pointers2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx.annotation);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("  ", ctx.TeamSF1_10 == null ? null : ctx.TeamSF1_10.SF1_10_CorrienteActualMotor, "  \u00A0 A");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("   ", ctx.TeamSF1_10 == null ? null : ctx.TeamSF1_10.SF1_10_PotenciaActualMotor, " \u00A0 W");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", ctx.TeamSF1_10 == null ? null : ctx.TeamSF1_10.SF1_10_voltaje, "   VAC ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 10, ctx.TeamSF1_10 == null ? null : ctx.TeamSF1_10.SF1_10_KWh), "  \u00A0 kwh ");
        } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["CircularGaugeComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxesDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxisDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationsDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3pvbmUtdGVhbXMvdGVhbS1zZi9zZjEuMTAvc2YxLjEwLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return Sf1_10Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Sf1_10Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-sf1_10',
                templateUrl: './sf1.10.component.html',
                styleUrls: ['./sf1.10.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"] }]; }, { osr1_1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gaugeSF1_10']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/zone-teams/team-sf/sf1.11/sf1.11.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-sf/sf1.11/sf1.11.component.ts ***!
  \*********************************************************************/
/*! exports provided: Sf1_11Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sf1_11Component", function() { return Sf1_11Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-angular-circulargauge */ "./node_modules/@syncfusion/ej2-angular-circulargauge/__ivy_ngcc__/@syncfusion/ej2-angular-circulargauge.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");















var _c0 = ["gaugeSF1_11"];
var Sf1_11Component = /** @class */ (function () {
    function Sf1_11Component(http, api, apiGetComp, decimalPipe) {
        this.http = http;
        this.api = api;
        this.apiGetComp = apiGetComp;
        this.decimalPipe = decimalPipe;
        this.alive = true;
        this.TeamSF1_11 = {
            SF1_11_VelocidadActualMotor: 0,
            SF1_11_CorrienteActualMotor: 0,
            SF1_11_PotenciaActualMotor: 0,
            SF1_11_TorqueActualMotor: 0,
            SF1_11_KWh: 0,
            SF1_11_voltaje: 0
        };
        this.velocidadSF1_11 = 0;
        // custom code end
        this.majorTicks = { width: 0 };
        this.lineStyle = { width: 0 };
        this.minorTicks = { width: 0 };
        //Initializing LabelStyle
        this.labelStyle = { font: { size: '0' } };
        //Initializing Annotation
        this.annotation = "<div id='templateWrap'>" +
            "<div class='fontDes' style='width: 16px;height: 16px;margin-top: 4px;'>${pointers[0].value} rpm</div></div></div>";
        this.annotation2 = "<div class='fontDes1'>Germany</div>";
        this.annotation3 = "<div class='fontDes1'>USA</div>";
        this.annotation4 = "<div class='fontDes1'>UK</div>";
        this.annotation5 = "<div id='templateWrap'>" +
            "<div class='fontDes'>${pointers[0].value}%</div></div></div>";
        // public annotation6: string = `<div id='templateWrap'><div class='fontDes3'>cantidad ${this.dataSF1_1?.SF1_1_VelocidadActualMotor}</div></div></div>`;
        this.germanyAnnotation = [{
                content: "<div id='templateWrap'>"
                    + "<img style='width: 16px;height: 16px;margin-top: 4px;' src='./assets/circular-gauge/images/positive.png' />"
                    + "<div style='float: right;color: #424242;font-size: 10px;'>${pointers[0].value}%</div></div></div>",
                angle: 180,
                radius: '130%'
            }, {
                content: '<div style="color:#9E9E9E;font-size:16px;font-family:Roboto">Germany</div>',
                angle: 180,
                radius: '65%'
            }];
        //Color gauge
        this.ranges = [{
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
        this.pointers2 = [{
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
    }
    Sf1_11Component.prototype.ngOnInit = function () {
        this.changeSF1_11();
        // this.dataSF1()
    };
    Sf1_11Component.prototype.gauge = function () {
        if (document.getElementById('sample-data')) {
            var value1 = this.velocidadSF1_11;
            this.osr1_1.axes[0].pointers[0].animation.enable = true;
            this.osr1_1.setPointerValue(0, 0, value1);
            this.osr1_1.setAnnotationValue(0, 0, this.osr1_1.axes[0].annotations[0].content);
        }
        else {
            clearInterval(this.tooltipInterval1);
        }
    };
    Sf1_11Component.prototype.test = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-data')) {
                var value1 = _this.velocidadSF1_11;
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 1000);
    };
    Sf1_11Component.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-dataSF1_11')) {
                var value1 = _this.velocidadSF1_11;
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
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                // this.usa.axes[0].pointers[0].animation.enable = true;
                // this.uk.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                // this.usa.setPointerValue(0, 0, value2);
                // this.uk.setPointerValue(0, 0, value3);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
                // this.usa.setAnnotationValue(0, 0, this.usa.axes[0].annotations[0].content);
                // this.uk.setAnnotationValue(0, 0, this.uk.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 2000);
    };
    Sf1_11Component.prototype.changeSF1_11 = function () {
        var _this = this;
        this.apiGetComp.GetJson(this.api.apiUrlNode1 + '/SF1_11')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('No hay data SF1_11');
                res.SF1_11_VelocidadActualMotor = 0;
                res.SF1_11_CorrienteActualMotor = 0;
                res.SF1_11_PotenciaActualMotor = 0;
                res.SF1_11_KWh = 0;
            }
            else {
                _this.TeamSF1_11 = res;
                // this.dataSF1_1 = TeamSF1_1
                // this.velocidadSF1_11 = this.decimalPipe.transform(this.TeamSF1_11?.SF1_11_VelocidadActualMotor) ?? 0;
                // console.log('SF1_1:', this.TeamSF1_11);
                _this.velocidadSF1_11 = (_b = (_a = _this.TeamSF1_11) === null || _a === void 0 ? void 0 : _a.SF1_11_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        });
    };
    Sf1_11Component.prototype.dataSF1_11 = function () {
        var _this = this;
        if (this.intervalSubscriptionItems) {
            this.intervalSubscriptionItems.unsubscribe();
        }
        this.intervalSubscriptionItems = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(3000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.apiGetComp.GetJson(_this.api.apiUrlNode1 + '/SF1_11'); }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('no hay data SF1_11');
                res.SF1_11_VelocidadActualMotor = 0;
                res.SF1_11_CorrienteActualMotor = 0;
                res.SF1_11_PotenciaActualMotor = 0;
                res.SF1_11_KWh = 0;
            }
            else {
                _this.TeamSF1_11 = res;
                // this.dataSF1_1 = TeamSF1_1
                _this.velocidadSF1_11 = (_b = (_a = _this.TeamSF1_11) === null || _a === void 0 ? void 0 : _a.SF1_11_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        }, function (error) { return (console.log(error)); }, function () { return console.log('Error..!'); });
    };
    Sf1_11Component.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    Sf1_11Component.ɵfac = function Sf1_11Component_Factory(t) { return new (t || Sf1_11Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"])); };
    Sf1_11Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Sf1_11Component, selectors: [["ngx-sf1_11"]], viewQuery: function Sf1_11Component_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.osr1_1 = _t.first);
        } }, decls: 28, vars: 12, consts: [["id", "sample-dataSF1_11", 2, "display", "block", "height", "150px"], ["gaugeSF1_11", ""], ["startAngle", "260", "endAngle", "100", 3, "majorTicks", "minorTicks", "labelStyle", "lineStyle", "ranges", "pointers"], ["angle", "180", "radius", "30%", "zIndex", "1", 3, "content"], [2, "margin-left", "23%", "margin-top", "-0%", "padding-top", "-40px", "padding-block-start", "-98px"], [2, "padding", "0.5625em 0.625em", "margin-top", "-0.10rem"], [2, "padding", "0.5625em 0.625em", "margin-top", "-1.9rem"]], template: function Sf1_11Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " SF1_11 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ejs-circulargauge", 0, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "e-axes");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "e-axis", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "e-annotations");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "e-annotation", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "pre", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Corriente:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Potencia:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Voltaje:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Consumo:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("majorTicks", ctx.majorTicks)("labelStyle", ctx.labelStyle)("lineStyle", ctx.lineStyle)("ranges", ctx.ranges)("pointers", ctx.pointers2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx.annotation);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("  ", ctx.TeamSF1_11 == null ? null : ctx.TeamSF1_11.SF1_11_CorrienteActualMotor, "  \u00A0 A");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("   ", ctx.TeamSF1_11 == null ? null : ctx.TeamSF1_11.SF1_11_PotenciaActualMotor, " \u00A0 W");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", ctx.TeamSF1_11 == null ? null : ctx.TeamSF1_11.SF1_11_voltaje, "   VAC ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 10, ctx.TeamSF1_11 == null ? null : ctx.TeamSF1_11.SF1_11_KWh), "  \u00A0 kwh ");
        } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["CircularGaugeComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxesDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxisDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationsDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3pvbmUtdGVhbXMvdGVhbS1zZi9zZjEuMTEvc2YxLjExLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return Sf1_11Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Sf1_11Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-sf1_11',
                templateUrl: './sf1.11.component.html',
                styleUrls: ['./sf1.11.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"] }]; }, { osr1_1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gaugeSF1_11']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/zone-teams/team-sf/sf1.12/sf1.12.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-sf/sf1.12/sf1.12.component.ts ***!
  \*********************************************************************/
/*! exports provided: Sf1_12Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sf1_12Component", function() { return Sf1_12Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-angular-circulargauge */ "./node_modules/@syncfusion/ej2-angular-circulargauge/__ivy_ngcc__/@syncfusion/ej2-angular-circulargauge.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");















var _c0 = ["gaugeSF1_12"];
var Sf1_12Component = /** @class */ (function () {
    function Sf1_12Component(http, api, apiGetComp, decimalPipe) {
        this.http = http;
        this.api = api;
        this.apiGetComp = apiGetComp;
        this.decimalPipe = decimalPipe;
        this.alive = true;
        this.TeamSF1_12 = {
            SF1_12_VelocidadActualMotor: 0,
            SF1_12_CorrienteActualMotor: 0,
            SF1_12_PotenciaActualMotor: 0,
            SF1_12_TorqueActualMotor: 0,
            SF1_12_KWh: 0,
            SF1_12_voltaje: 0
        };
        this.velocidadSF1_12 = 0;
        // custom code end
        this.majorTicks = { width: 0 };
        this.lineStyle = { width: 0 };
        this.minorTicks = { width: 0 };
        //Initializing LabelStyle
        this.labelStyle = { font: { size: '0' } };
        //Initializing Annotation
        this.annotation = "<div id='templateWrap'>" +
            "<div class='fontDes' style='width: 16px;height: 16px;margin-top: 4px;'>${pointers[0].value} rpm</div></div></div>";
        this.annotation2 = "<div class='fontDes1'>Germany</div>";
        this.annotation3 = "<div class='fontDes1'>USA</div>";
        this.annotation4 = "<div class='fontDes1'>UK</div>";
        this.annotation5 = "<div id='templateWrap'>" +
            "<div class='fontDes'>${pointers[0].value}%</div></div></div>";
        // public annotation6: string = `<div id='templateWrap'><div class='fontDes3'>cantidad ${this.dataSF1_1?.SF1_1_VelocidadActualMotor}</div></div></div>`;
        this.germanyAnnotation = [{
                content: "<div id='templateWrap'>"
                    + "<img style='width: 16px;height: 16px;margin-top: 4px;' src='./assets/circular-gauge/images/positive.png' />"
                    + "<div style='float: right;color: #424242;font-size: 10px;'>${pointers[0].value}%</div></div></div>",
                angle: 180,
                radius: '130%'
            }, {
                content: '<div style="color:#9E9E9E;font-size:16px;font-family:Roboto">Germany</div>',
                angle: 180,
                radius: '65%'
            }];
        //Color gauge
        this.ranges = [{
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
        this.pointers2 = [{
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
    }
    Sf1_12Component.prototype.ngOnInit = function () {
        this.changeSF1_12();
        // this.dataSF1()
    };
    Sf1_12Component.prototype.gauge = function () {
        if (document.getElementById('sample-data')) {
            var value1 = this.velocidadSF1_12;
            this.osr1_1.axes[0].pointers[0].animation.enable = true;
            this.osr1_1.setPointerValue(0, 0, value1);
            this.osr1_1.setAnnotationValue(0, 0, this.osr1_1.axes[0].annotations[0].content);
        }
        else {
            clearInterval(this.tooltipInterval1);
        }
    };
    Sf1_12Component.prototype.test = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-data')) {
                var value1 = _this.velocidadSF1_12;
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 1000);
    };
    Sf1_12Component.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-dataSF1_12')) {
                var value1 = _this.velocidadSF1_12;
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
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                // this.usa.axes[0].pointers[0].animation.enable = true;
                // this.uk.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                // this.usa.setPointerValue(0, 0, value2);
                // this.uk.setPointerValue(0, 0, value3);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
                // this.usa.setAnnotationValue(0, 0, this.usa.axes[0].annotations[0].content);
                // this.uk.setAnnotationValue(0, 0, this.uk.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 2000);
    };
    Sf1_12Component.prototype.changeSF1_12 = function () {
        var _this = this;
        this.apiGetComp.GetJson(this.api.apiUrlNode1 + '/SF1_12')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('No hay data SF1_12');
                res.SF1_12_VelocidadActualMotor = 0;
                res.SF1_12_CorrienteActualMotor = 0;
                res.SF1_12_PotenciaActualMotor = 0;
                res.SF1_12_KWh = 0;
            }
            else {
                _this.TeamSF1_12 = res;
                // this.dataSF1_1 = TeamSF1_1
                // this.velocidadSF1_12 = this.decimalPipe.transform(this.TeamSF1_12?.SF1_12_VelocidadActualMotor) ?? 0;
                // console.log('SF1_1:', this.TeamSF1_12);
                _this.velocidadSF1_12 = (_b = (_a = _this.TeamSF1_12) === null || _a === void 0 ? void 0 : _a.SF1_12_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        });
    };
    Sf1_12Component.prototype.dataSF1_12 = function () {
        var _this = this;
        if (this.intervalSubscriptionItems) {
            this.intervalSubscriptionItems.unsubscribe();
        }
        this.intervalSubscriptionItems = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(3000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.apiGetComp.GetJson(_this.api.apiUrlNode1 + '/SF1_12'); }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('no hay data SF1_12');
                res.SF1_12_VelocidadActualMotor = 0;
                res.SF1_12_CorrienteActualMotor = 0;
                res.SF1_12_PotenciaActualMotor = 0;
                res.SF1_12_KWh = 0;
            }
            else {
                _this.TeamSF1_12 = res;
                // this.dataSF1_1 = TeamSF1_1
                _this.velocidadSF1_12 = (_b = (_a = _this.TeamSF1_12) === null || _a === void 0 ? void 0 : _a.SF1_12_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        }, function (error) { return (console.log(error)); }, function () { return console.log('Error..!'); });
    };
    Sf1_12Component.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    Sf1_12Component.ɵfac = function Sf1_12Component_Factory(t) { return new (t || Sf1_12Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"])); };
    Sf1_12Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Sf1_12Component, selectors: [["ngx-sf1_12"]], viewQuery: function Sf1_12Component_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.osr1_1 = _t.first);
        } }, decls: 28, vars: 12, consts: [["id", "sample-dataSF1_12", 2, "display", "block", "height", "150px"], ["gaugeSF1_12", ""], ["startAngle", "260", "endAngle", "100", 3, "majorTicks", "minorTicks", "labelStyle", "lineStyle", "ranges", "pointers"], ["angle", "180", "radius", "30%", "zIndex", "1", 3, "content"], [2, "margin-left", "23%", "margin-top", "-0%", "padding-top", "-40px", "padding-block-start", "-98px"], [2, "padding", "0.5625em 0.625em", "margin-top", "-0.10rem"], [2, "padding", "0.5625em 0.625em", "margin-top", "-1.9rem"]], template: function Sf1_12Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " SF1_12 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ejs-circulargauge", 0, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "e-axes");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "e-axis", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "e-annotations");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "e-annotation", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "pre", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Corriente:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Potencia:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Voltaje:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Consumo:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("majorTicks", ctx.majorTicks)("labelStyle", ctx.labelStyle)("lineStyle", ctx.lineStyle)("ranges", ctx.ranges)("pointers", ctx.pointers2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx.annotation);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("  ", ctx.TeamSF1_12 == null ? null : ctx.TeamSF1_12.SF1_12_CorrienteActualMotor, "  \u00A0 A");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("   ", ctx.TeamSF1_12 == null ? null : ctx.TeamSF1_12.SF1_12_PotenciaActualMotor, " \u00A0 W");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", ctx.TeamSF1_12 == null ? null : ctx.TeamSF1_12.SF1_12_voltaje, "   VAC ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 10, ctx.TeamSF1_12 == null ? null : ctx.TeamSF1_12.SF1_12_KWh), "  \u00A0 kwh ");
        } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["CircularGaugeComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxesDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxisDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationsDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3pvbmUtdGVhbXMvdGVhbS1zZi9zZjEuMTIvc2YxLjEyLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return Sf1_12Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Sf1_12Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-sf1_12',
                templateUrl: './sf1.12.component.html',
                styleUrls: ['./sf1.12.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"] }]; }, { osr1_1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gaugeSF1_12']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/zone-teams/team-sf/sf1.4/sf1.4.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-sf/sf1.4/sf1.4.component.ts ***!
  \*******************************************************************/
/*! exports provided: Sf1_4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sf1_4Component", function() { return Sf1_4Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-angular-circulargauge */ "./node_modules/@syncfusion/ej2-angular-circulargauge/__ivy_ngcc__/@syncfusion/ej2-angular-circulargauge.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");















var _c0 = ["gaugeSf1_4"];
var Sf1_4Component = /** @class */ (function () {
    function Sf1_4Component(http, api, apiGetComp, decimalPipe) {
        this.http = http;
        this.api = api;
        this.apiGetComp = apiGetComp;
        this.decimalPipe = decimalPipe;
        this.alive = true;
        this.TeamSF1_4 = {
            SF1_4_VelocidadActualMotor: 0,
            SF1_4_CorrienteActualMotor: 0,
            SF1_4_PotenciaActualMotor: 0,
            SF1_4_TorqueActualMotor: 0,
            SF1_4_KWh: 0,
            SF1_4_voltaje: 0
        };
        this.velocidadSF1_4 = 0;
        // custom code end
        this.majorTicks = { width: 0 };
        this.lineStyle = { width: 0 };
        this.minorTicks = { width: 0 };
        //Initializing LabelStyle
        this.labelStyle = { font: { size: '0' } };
        //Initializing Annotation
        this.annotation = "<div id='templateWrap'>" +
            "<div class='fontDes' style='width: 16px;height: 16px;margin-top: 4px;'>${pointers[0].value} rpm</div></div></div>";
        this.annotation2 = "<div class='fontDes1'>Germany</div>";
        this.annotation3 = "<div class='fontDes1'>USA</div>";
        this.annotation4 = "<div class='fontDes1'>UK</div>";
        this.annotation5 = "<div id='templateWrap'>" +
            "<div class='fontDes'>${pointers[0].value}%</div></div></div>";
        // public annotation6: string = `<div id='templateWrap'><div class='fontDes3'>cantidad ${this.dataSF1_1?.SF1_1_VelocidadActualMotor}</div></div></div>`;
        this.germanyAnnotation = [{
                content: "<div id='templateWrap'>"
                    + "<img style='width: 16px;height: 16px;margin-top: 4px;' src='./assets/circular-gauge/images/positive.png' />"
                    + "<div style='float: right;color: #424242;font-size: 10px;'>${pointers[0].value}%</div></div></div>",
                angle: 180,
                radius: '130%'
            }, {
                content: '<div style="color:#9E9E9E;font-size:16px;font-family:Roboto">Germany</div>',
                angle: 180,
                radius: '65%'
            }];
        //Color gauge
        this.ranges = [{
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
        this.pointers2 = [{
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
    }
    Sf1_4Component.prototype.ngOnInit = function () {
        this.changeSF1_4();
        // this.dataSF1()
    };
    Sf1_4Component.prototype.gauge = function () {
        if (document.getElementById('sample-data')) {
            var value1 = this.velocidadSF1_4;
            this.osr1_1.axes[0].pointers[0].animation.enable = true;
            this.osr1_1.setPointerValue(0, 0, value1);
            this.osr1_1.setAnnotationValue(0, 0, this.osr1_1.axes[0].annotations[0].content);
        }
        else {
            clearInterval(this.tooltipInterval1);
        }
    };
    Sf1_4Component.prototype.test = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-data')) {
                var value1 = _this.velocidadSF1_4;
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 1000);
    };
    Sf1_4Component.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-dataSF1_4')) {
                var value1 = _this.velocidadSF1_4;
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
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                // this.usa.axes[0].pointers[0].animation.enable = true;
                // this.uk.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                // this.usa.setPointerValue(0, 0, value2);
                // this.uk.setPointerValue(0, 0, value3);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
                // this.usa.setAnnotationValue(0, 0, this.usa.axes[0].annotations[0].content);
                // this.uk.setAnnotationValue(0, 0, this.uk.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 2000);
    };
    Sf1_4Component.prototype.changeSF1_4 = function () {
        var _this = this;
        this.apiGetComp.GetJson(this.api.apiUrlNode1 + '/SF1_4')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('No hay data SF1_4');
                res.SF1_4_VelocidadActualMotor = 0;
                res.SF1_4_CorrienteActualMotor = 0;
                res.SF1_4_PotenciaActualMotor = 0;
                res.SF1_4_KWh = 0;
            }
            else {
                _this.TeamSF1_4 = res;
                // this.dataSF1_1 = TeamSF1_1
                // this.velocidadSF1_4 = this.decimalPipe.transform(this.TeamSF1_4?.SF1_4_VelocidadActualMotor) ?? 0;
                // console.log('SF1_1:', this.TeamSF1_4);
                _this.velocidadSF1_4 = (_b = (_a = _this.TeamSF1_4) === null || _a === void 0 ? void 0 : _a.SF1_4_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        });
    };
    Sf1_4Component.prototype.dataSF1_4 = function () {
        var _this = this;
        if (this.intervalSubscriptionItems) {
            this.intervalSubscriptionItems.unsubscribe();
        }
        this.intervalSubscriptionItems = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(3000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.apiGetComp.GetJson(_this.api.apiUrlNode1 + '/SF1_4'); }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('no hay data SF1_4');
                res.SF1_4_VelocidadActualMotor = 0;
                res.SF1_4_CorrienteActualMotor = 0;
                res.SF1_4_PotenciaActualMotor = 0;
                res.SF1_4_KWh = 0;
            }
            else {
                _this.TeamSF1_4 = res;
                // this.dataSF1_1 = TeamSF1_1
                _this.velocidadSF1_4 = (_b = (_a = _this.TeamSF1_4) === null || _a === void 0 ? void 0 : _a.SF1_4_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        }, function (error) { return (console.log(error)); }, function () { return console.log('Error..!'); });
    };
    Sf1_4Component.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    Sf1_4Component.ɵfac = function Sf1_4Component_Factory(t) { return new (t || Sf1_4Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"])); };
    Sf1_4Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Sf1_4Component, selectors: [["ngx-sf1_4"]], viewQuery: function Sf1_4Component_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.osr1_1 = _t.first);
        } }, decls: 28, vars: 13, consts: [["id", "sample-dataSF1_4", 2, "display", "block", "height", "150px"], ["gaugeSf1_4", ""], ["startAngle", "260", "endAngle", "100", 3, "majorTicks", "minorTicks", "labelStyle", "lineStyle", "ranges", "pointers"], ["angle", "180", "radius", "30%", "zIndex", "1", 3, "content"], [2, "margin-left", "23%", "margin-top", "-0%", "padding-top", "-40px", "padding-block-start", "-98px"], [2, "padding", "0.5625em 0.625em", "margin-top", "-0.10rem"], [2, "padding", "0.5625em 0.625em", "margin-top", "-1.9rem"]], template: function Sf1_4Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " SF1_4 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ejs-circulargauge", 0, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "e-axes");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "e-axis", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "e-annotations");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "e-annotation", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "pre", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Corriente:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Potencia:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Voltaje:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Consumo:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("majorTicks", ctx.majorTicks)("minorTicks", ctx.minorTicks)("labelStyle", ctx.labelStyle)("lineStyle", ctx.lineStyle)("ranges", ctx.ranges)("pointers", ctx.pointers2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx.annotation);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("  ", ctx.TeamSF1_4 == null ? null : ctx.TeamSF1_4.SF1_4_CorrienteActualMotor, "  \u00A0 A");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("   ", ctx.TeamSF1_4 == null ? null : ctx.TeamSF1_4.SF1_4_PotenciaActualMotor, " \u00A0 W");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", ctx.TeamSF1_4 == null ? null : ctx.TeamSF1_4.SF1_4_voltaje, "   VAC ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 11, ctx.TeamSF1_4 == null ? null : ctx.TeamSF1_4.SF1_4_KWh), "  \u00A0 kwh ");
        } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["CircularGaugeComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxesDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxisDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationsDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3pvbmUtdGVhbXMvdGVhbS1zZi9zZjEuNC9zZjEuNC5jb21wb25lbnQuc2NzcyJ9 */"] });
    return Sf1_4Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Sf1_4Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-sf1_4',
                templateUrl: './sf1.4.component.html',
                styleUrls: ['./sf1.4.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"] }]; }, { osr1_1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gaugeSf1_4']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/zone-teams/team-sf/sf1.5/sf1.5.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-sf/sf1.5/sf1.5.component.ts ***!
  \*******************************************************************/
/*! exports provided: Sf1_5Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sf1_5Component", function() { return Sf1_5Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-angular-circulargauge */ "./node_modules/@syncfusion/ej2-angular-circulargauge/__ivy_ngcc__/@syncfusion/ej2-angular-circulargauge.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");















var _c0 = ["gaugeSF1_5"];
var Sf1_5Component = /** @class */ (function () {
    function Sf1_5Component(http, api, apiGetComp, decimalPipe) {
        this.http = http;
        this.api = api;
        this.apiGetComp = apiGetComp;
        this.decimalPipe = decimalPipe;
        this.alive = true;
        this.TeamSF1_5 = {
            SF1_5_VelocidadActualMotor: 0,
            SF1_5_CorrienteActualMotor: 0,
            SF1_5_PotenciaActualMotor: 0,
            SF1_5_TorqueActualMotor: 0,
            SF1_5_KWh: 0,
            SF1_5_voltaje: 0
        };
        this.velocidadSF1_5 = 0;
        // custom code end
        this.majorTicks = { width: 0 };
        this.lineStyle = { width: 0 };
        this.minorTicks = { width: 0 };
        //Initializing LabelStyle
        this.labelStyle = { font: { size: '0' } };
        //Initializing Annotation
        this.annotation = "<div id='templateWrap'>" +
            "<div class='fontDes' style='width: 16px;height: 16px;margin-top: 4px;'>${pointers[0].value} rpm</div></div></div>";
        this.annotation2 = "<div class='fontDes1'>Germany</div>";
        this.annotation3 = "<div class='fontDes1'>USA</div>";
        this.annotation4 = "<div class='fontDes1'>UK</div>";
        this.annotation5 = "<div id='templateWrap'>" +
            "<div class='fontDes'>${pointers[0].value}%</div></div></div>";
        // public annotation6: string = `<div id='templateWrap'><div class='fontDes3'>cantidad ${this.dataSF1_1?.SF1_1_VelocidadActualMotor}</div></div></div>`;
        this.germanyAnnotation = [{
                content: "<div id='templateWrap'>"
                    + "<img style='width: 16px;height: 16px;margin-top: 4px;' src='./assets/circular-gauge/images/positive.png' />"
                    + "<div style='float: right;color: #424242;font-size: 10px;'>${pointers[0].value}%</div></div></div>",
                angle: 180,
                radius: '130%'
            }, {
                content: '<div style="color:#9E9E9E;font-size:16px;font-family:Roboto">Germany</div>',
                angle: 180,
                radius: '65%'
            }];
        //Color gauge
        this.ranges = [{
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
        this.pointers2 = [{
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
    }
    Sf1_5Component.prototype.ngOnInit = function () {
        this.changeSF1_5();
        // this.dataSF1()
    };
    Sf1_5Component.prototype.gauge = function () {
        if (document.getElementById('sample-data')) {
            var value1 = this.velocidadSF1_5;
            this.osr1_1.axes[0].pointers[0].animation.enable = true;
            this.osr1_1.setPointerValue(0, 0, value1);
            this.osr1_1.setAnnotationValue(0, 0, this.osr1_1.axes[0].annotations[0].content);
        }
        else {
            clearInterval(this.tooltipInterval1);
        }
    };
    Sf1_5Component.prototype.test = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-data')) {
                var value1 = _this.velocidadSF1_5;
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 1000);
    };
    Sf1_5Component.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-dataSF1_5')) {
                var value1 = _this.velocidadSF1_5;
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
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                // this.usa.axes[0].pointers[0].animation.enable = true;
                // this.uk.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                // this.usa.setPointerValue(0, 0, value2);
                // this.uk.setPointerValue(0, 0, value3);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
                // this.usa.setAnnotationValue(0, 0, this.usa.axes[0].annotations[0].content);
                // this.uk.setAnnotationValue(0, 0, this.uk.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 2000);
    };
    Sf1_5Component.prototype.changeSF1_5 = function () {
        var _this = this;
        this.apiGetComp.GetJson(this.api.apiUrlNode1 + '/SF1_5')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('No hay data SF1_5');
                res.SF1_5_VelocidadActualMotor = 0;
                res.SF1_5_CorrienteActualMotor = 0;
                res.SF1_5_PotenciaActualMotor = 0;
                res.SF1_5_KWh = 0;
            }
            else {
                _this.TeamSF1_5 = res;
                // this.dataSF1_1 = TeamSF1_1
                // this.velocidadSF1_5 = this.decimalPipe.transform(this.TeamSF1_5?.SF1_5_VelocidadActualMotor) ?? 0;
                // console.log('SF1_1:', this.TeamSF1_5);
                _this.velocidadSF1_5 = (_b = (_a = _this.TeamSF1_5) === null || _a === void 0 ? void 0 : _a.SF1_5_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        });
    };
    Sf1_5Component.prototype.dataSF1_5 = function () {
        var _this = this;
        if (this.intervalSubscriptionItems) {
            this.intervalSubscriptionItems.unsubscribe();
        }
        this.intervalSubscriptionItems = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(3000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.apiGetComp.GetJson(_this.api.apiUrlNode1 + '/SF1_5'); }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('no hay data SF1_5');
                res.SF1_5_VelocidadActualMotor = 0;
                res.SF1_5_CorrienteActualMotor = 0;
                res.SF1_5_PotenciaActualMotor = 0;
                res.SF1_5_KWh = 0;
            }
            else {
                _this.TeamSF1_5 = res;
                // this.dataSF1_1 = TeamSF1_1
                _this.velocidadSF1_5 = (_b = (_a = _this.TeamSF1_5) === null || _a === void 0 ? void 0 : _a.SF1_5_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        }, function (error) { return (console.log(error)); }, function () { return console.log('Error..!'); });
    };
    Sf1_5Component.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    Sf1_5Component.ɵfac = function Sf1_5Component_Factory(t) { return new (t || Sf1_5Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"])); };
    Sf1_5Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Sf1_5Component, selectors: [["ngx-sf1_5"]], viewQuery: function Sf1_5Component_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.osr1_1 = _t.first);
        } }, decls: 28, vars: 13, consts: [["id", "sample-dataSF1_5", 2, "display", "block", "height", "150px"], ["gaugeSF1_5", ""], ["startAngle", "260", "endAngle", "100", 3, "majorTicks", "minorTicks", "labelStyle", "lineStyle", "ranges", "pointers"], ["angle", "180", "radius", "30%", "zIndex", "1", 3, "content"], [2, "margin-left", "23%", "margin-top", "-0%", "padding-top", "-40px", "padding-block-start", "-98px"], [2, "padding", "0.5625em 0.625em", "margin-top", "-0.10rem"], [2, "padding", "0.5625em 0.625em", "margin-top", "-1.9rem"]], template: function Sf1_5Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " SF1_5 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ejs-circulargauge", 0, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "e-axes");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "e-axis", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "e-annotations");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "e-annotation", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "pre", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Corriente:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Potencia:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Voltaje:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Consumo:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("majorTicks", ctx.majorTicks)("minorTicks", ctx.minorTicks)("labelStyle", ctx.labelStyle)("lineStyle", ctx.lineStyle)("ranges", ctx.ranges)("pointers", ctx.pointers2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx.annotation);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("  ", ctx.TeamSF1_5 == null ? null : ctx.TeamSF1_5.SF1_5_CorrienteActualMotor, "  \u00A0 A");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("   ", ctx.TeamSF1_5 == null ? null : ctx.TeamSF1_5.SF1_5_PotenciaActualMotor, " \u00A0 W");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", ctx.TeamSF1_5 == null ? null : ctx.TeamSF1_5.SF1_5_voltaje, "   VAC ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 11, ctx.TeamSF1_5 == null ? null : ctx.TeamSF1_5.SF1_5_KWh), "  \u00A0 kwh ");
        } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["CircularGaugeComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxesDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxisDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationsDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3pvbmUtdGVhbXMvdGVhbS1zZi9zZjEuNS9zZjEuNS5jb21wb25lbnQuc2NzcyJ9 */"] });
    return Sf1_5Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Sf1_5Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-sf1_5',
                templateUrl: './sf1.5.component.html',
                styleUrls: ['./sf1.5.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"] }]; }, { osr1_1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gaugeSF1_5']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/zone-teams/team-sf/sf1.6/sf1.6.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-sf/sf1.6/sf1.6.component.ts ***!
  \*******************************************************************/
/*! exports provided: Sf1_6Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sf1_6Component", function() { return Sf1_6Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-angular-circulargauge */ "./node_modules/@syncfusion/ej2-angular-circulargauge/__ivy_ngcc__/@syncfusion/ej2-angular-circulargauge.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");















var _c0 = ["gaugeSF1_6"];
var Sf1_6Component = /** @class */ (function () {
    function Sf1_6Component(http, api, apiGetComp, decimalPipe) {
        this.http = http;
        this.api = api;
        this.apiGetComp = apiGetComp;
        this.decimalPipe = decimalPipe;
        this.alive = true;
        this.TeamSF1_6 = {
            SF1_6_VelocidadActualMotor: 0,
            SF1_6_CorrienteActualMotor: 0,
            SF1_6_PotenciaActualMotor: 0,
            SF1_6_TorqueActualMotor: 0,
            SF1_6_KWh: 0,
            SF1_6_voltaje: 0
        };
        this.velocidadSF1_6 = 0;
        // custom code end
        this.majorTicks = { width: 0 };
        this.lineStyle = { width: 0 };
        this.minorTicks = { width: 0 };
        //Initializing LabelStyle
        this.labelStyle = { font: { size: '0' } };
        //Initializing Annotation
        this.annotation = "<div id='templateWrap'>" +
            "<div class='fontDes' style='width: 16px;height: 16px;margin-top: 4px;'>${pointers[0].value} rpm</div></div></div>";
        this.annotation2 = "<div class='fontDes1'>Germany</div>";
        this.annotation3 = "<div class='fontDes1'>USA</div>";
        this.annotation4 = "<div class='fontDes1'>UK</div>";
        this.annotation5 = "<div id='templateWrap'>" +
            "<div class='fontDes'>${pointers[0].value}%</div></div></div>";
        // public annotation6: string = `<div id='templateWrap'><div class='fontDes3'>cantidad ${this.dataSF1_1?.SF1_1_VelocidadActualMotor}</div></div></div>`;
        this.germanyAnnotation = [{
                content: "<div id='templateWrap'>"
                    + "<img style='width: 16px;height: 16px;margin-top: 4px;' src='./assets/circular-gauge/images/positive.png' />"
                    + "<div style='float: right;color: #424242;font-size: 10px;'>${pointers[0].value}%</div></div></div>",
                angle: 180,
                radius: '130%'
            }, {
                content: '<div style="color:#9E9E9E;font-size:16px;font-family:Roboto">Germany</div>',
                angle: 180,
                radius: '65%'
            }];
        //Color gauge
        this.ranges = [{
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
        this.pointers2 = [{
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
    }
    Sf1_6Component.prototype.ngOnInit = function () {
        this.changeSF1_6();
        // this.dataSF1()
    };
    Sf1_6Component.prototype.gauge = function () {
        if (document.getElementById('sample-data')) {
            var value1 = this.velocidadSF1_6;
            this.osr1_1.axes[0].pointers[0].animation.enable = true;
            this.osr1_1.setPointerValue(0, 0, value1);
            this.osr1_1.setAnnotationValue(0, 0, this.osr1_1.axes[0].annotations[0].content);
        }
        else {
            clearInterval(this.tooltipInterval1);
        }
    };
    Sf1_6Component.prototype.test = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-data')) {
                var value1 = _this.velocidadSF1_6;
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 1000);
    };
    Sf1_6Component.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-dataSF1_6')) {
                var value1 = _this.velocidadSF1_6;
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
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                // this.usa.axes[0].pointers[0].animation.enable = true;
                // this.uk.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                // this.usa.setPointerValue(0, 0, value2);
                // this.uk.setPointerValue(0, 0, value3);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
                // this.usa.setAnnotationValue(0, 0, this.usa.axes[0].annotations[0].content);
                // this.uk.setAnnotationValue(0, 0, this.uk.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 2000);
    };
    Sf1_6Component.prototype.changeSF1_6 = function () {
        var _this = this;
        this.apiGetComp.GetJson(this.api.apiUrlNode1 + '/SF1_6')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('No hay data SF1_6');
                res.SF1_6_VelocidadActualMotor = 0;
                res.SF1_6_CorrienteActualMotor = 0;
                res.SF1_6_PotenciaActualMotor = 0;
                res.SF1_6_KWh = 0;
            }
            else {
                _this.TeamSF1_6 = res;
                // this.dataSF1_1 = TeamSF1_1
                // this.velocidadSF1_6 = this.decimalPipe.transform(this.TeamSF1_6?.SF1_6_VelocidadActualMotor) ?? 0;
                // console.log('SF1_1:', this.TeamSF1_6);
                _this.velocidadSF1_6 = (_b = (_a = _this.TeamSF1_6) === null || _a === void 0 ? void 0 : _a.SF1_6_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        });
    };
    Sf1_6Component.prototype.dataSF1_6 = function () {
        var _this = this;
        if (this.intervalSubscriptionItems) {
            this.intervalSubscriptionItems.unsubscribe();
        }
        this.intervalSubscriptionItems = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(3000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.apiGetComp.GetJson(_this.api.apiUrlNode1 + '/SF1_6'); }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('no hay data SF1_6');
                res.SF1_6_VelocidadActualMotor = 0;
                res.SF1_6_CorrienteActualMotor = 0;
                res.SF1_6_PotenciaActualMotor = 0;
                res.SF1_6_KWh = 0;
            }
            else {
                _this.TeamSF1_6 = res;
                // this.dataSF1_1 = TeamSF1_1
                _this.velocidadSF1_6 = (_b = (_a = _this.TeamSF1_6) === null || _a === void 0 ? void 0 : _a.SF1_6_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        }, function (error) { return (console.log(error)); }, function () { return console.log('Error..!'); });
    };
    Sf1_6Component.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    Sf1_6Component.ɵfac = function Sf1_6Component_Factory(t) { return new (t || Sf1_6Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"])); };
    Sf1_6Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Sf1_6Component, selectors: [["ngx-sf1_6"]], viewQuery: function Sf1_6Component_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.osr1_1 = _t.first);
        } }, decls: 28, vars: 13, consts: [["id", "sample-dataSF1_6", 2, "display", "block", "height", "150px"], ["gaugeSF1_6", ""], ["startAngle", "260", "endAngle", "100", 3, "majorTicks", "minorTicks", "labelStyle", "lineStyle", "ranges", "pointers"], ["angle", "180", "radius", "30%", "zIndex", "1", 3, "content"], [2, "margin-left", "23%", "margin-top", "-0%", "padding-top", "-40px", "padding-block-start", "-98px"], [2, "padding", "0.5625em 0.625em", "margin-top", "-0.10rem"], [2, "padding", "0.5625em 0.625em", "margin-top", "-1.9rem"]], template: function Sf1_6Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " SF1_6 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ejs-circulargauge", 0, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "e-axes");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "e-axis", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "e-annotations");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "e-annotation", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "pre", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Corriente:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Potencia:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Voltaje:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Consumo:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("majorTicks", ctx.majorTicks)("minorTicks", ctx.minorTicks)("labelStyle", ctx.labelStyle)("lineStyle", ctx.lineStyle)("ranges", ctx.ranges)("pointers", ctx.pointers2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx.annotation);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("  ", ctx.TeamSF1_6 == null ? null : ctx.TeamSF1_6.SF1_6_CorrienteActualMotor, "  \u00A0 A");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("   ", ctx.TeamSF1_6 == null ? null : ctx.TeamSF1_6.SF1_6_PotenciaActualMotor, " \u00A0 W");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", ctx.TeamSF1_6 == null ? null : ctx.TeamSF1_6.SF1_6_voltaje, "   VAC ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 11, ctx.TeamSF1_6 == null ? null : ctx.TeamSF1_6.SF1_6_KWh), "  \u00A0 kwh ");
        } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["CircularGaugeComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxesDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxisDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationsDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3pvbmUtdGVhbXMvdGVhbS1zZi9zZjEuNi9zZjEuNi5jb21wb25lbnQuc2NzcyJ9 */"] });
    return Sf1_6Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Sf1_6Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-sf1_6',
                templateUrl: './sf1.6.component.html',
                styleUrls: ['./sf1.6.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"] }]; }, { osr1_1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gaugeSF1_6']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/zone-teams/team-sf/sf1.7/sf1.7.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-sf/sf1.7/sf1.7.component.ts ***!
  \*******************************************************************/
/*! exports provided: Sf1_7Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sf1_7Component", function() { return Sf1_7Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-angular-circulargauge */ "./node_modules/@syncfusion/ej2-angular-circulargauge/__ivy_ngcc__/@syncfusion/ej2-angular-circulargauge.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");















var _c0 = ["gaugeSF1_7"];
var Sf1_7Component = /** @class */ (function () {
    function Sf1_7Component(http, api, apiGetComp, decimalPipe) {
        this.http = http;
        this.api = api;
        this.apiGetComp = apiGetComp;
        this.decimalPipe = decimalPipe;
        this.alive = true;
        this.TeamSF1_7 = {
            SF1_7_VelocidadActualMotor: 0,
            SF1_7_CorrienteActualMotor: 0,
            SF1_7_PotenciaActualMotor: 0,
            SF1_7_TorqueActualMotor: 0,
            SF1_7_KWh: 0,
            SF1_7_voltaje: 0
        };
        this.velocidadSF1_7 = 0;
        // custom code end
        this.majorTicks = { width: 0 };
        this.lineStyle = { width: 0 };
        this.minorTicks = { width: 0 };
        //Initializing LabelStyle
        this.labelStyle = { font: { size: '0' } };
        //Initializing Annotation
        this.annotation = "<div id='templateWrap'>" +
            "<div class='fontDes' style='width: 16px;height: 16px;margin-top: 4px;'>${pointers[0].value} rpm</div></div></div>";
        this.annotation2 = "<div class='fontDes1'>Germany</div>";
        this.annotation3 = "<div class='fontDes1'>USA</div>";
        this.annotation4 = "<div class='fontDes1'>UK</div>";
        this.annotation5 = "<div id='templateWrap'>" +
            "<div class='fontDes'>${pointers[0].value}%</div></div></div>";
        // public annotation6: string = `<div id='templateWrap'><div class='fontDes3'>cantidad ${this.dataSF1_1?.SF1_1_VelocidadActualMotor}</div></div></div>`;
        this.germanyAnnotation = [{
                content: "<div id='templateWrap'>"
                    + "<img style='width: 16px;height: 16px;margin-top: 4px;' src='./assets/circular-gauge/images/positive.png' />"
                    + "<div style='float: right;color: #424242;font-size: 10px;'>${pointers[0].value}%</div></div></div>",
                angle: 180,
                radius: '130%'
            }, {
                content: '<div style="color:#9E9E9E;font-size:16px;font-family:Roboto">Germany</div>',
                angle: 180,
                radius: '65%'
            }];
        //Color gauge
        this.ranges = [{
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
        this.pointers2 = [{
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
    }
    Sf1_7Component.prototype.ngOnInit = function () {
        this.changeSF1_7();
        // this.dataSF1()
    };
    Sf1_7Component.prototype.gauge = function () {
        if (document.getElementById('sample-data')) {
            var value1 = this.velocidadSF1_7;
            this.osr1_1.axes[0].pointers[0].animation.enable = true;
            this.osr1_1.setPointerValue(0, 0, value1);
            this.osr1_1.setAnnotationValue(0, 0, this.osr1_1.axes[0].annotations[0].content);
        }
        else {
            clearInterval(this.tooltipInterval1);
        }
    };
    Sf1_7Component.prototype.test = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-data')) {
                var value1 = _this.velocidadSF1_7;
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 1000);
    };
    Sf1_7Component.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-dataSF1_7')) {
                var value1 = _this.velocidadSF1_7;
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
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                // this.usa.axes[0].pointers[0].animation.enable = true;
                // this.uk.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                // this.usa.setPointerValue(0, 0, value2);
                // this.uk.setPointerValue(0, 0, value3);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
                // this.usa.setAnnotationValue(0, 0, this.usa.axes[0].annotations[0].content);
                // this.uk.setAnnotationValue(0, 0, this.uk.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 2000);
    };
    Sf1_7Component.prototype.changeSF1_7 = function () {
        var _this = this;
        this.apiGetComp.GetJson(this.api.apiUrlNode1 + '/SF1_7')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('No hay data SF1_7');
                res.SF1_7_VelocidadActualMotor = 0;
                res.SF1_7_CorrienteActualMotor = 0;
                res.SF1_7_PotenciaActualMotor = 0;
                res.SF1_7_KWh = 0;
            }
            else {
                _this.TeamSF1_7 = res;
                // this.dataSF1_1 = TeamSF1_1
                _this.velocidadSF1_7 = (_b = (_a = _this.TeamSF1_7) === null || _a === void 0 ? void 0 : _a.SF1_7_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        });
    };
    Sf1_7Component.prototype.dataSF1_7 = function () {
        var _this = this;
        if (this.intervalSubscriptionItems) {
            this.intervalSubscriptionItems.unsubscribe();
        }
        this.intervalSubscriptionItems = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(3000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.apiGetComp.GetJson(_this.api.apiUrlNode1 + '/SF1_7'); }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('no hay data SF1_7');
                res.SF1_7_VelocidadActualMotor = 0;
                res.SF1_7_CorrienteActualMotor = 0;
                res.SF1_7_PotenciaActualMotor = 0;
                res.SF1_7_KWh = 0;
            }
            else {
                _this.TeamSF1_7 = res;
                // this.dataSF1_1 = TeamSF1_1
                _this.velocidadSF1_7 = (_b = (_a = _this.TeamSF1_7) === null || _a === void 0 ? void 0 : _a.SF1_7_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        }, function (error) { return (console.log(error)); }, function () { return console.log('Error..!'); });
    };
    Sf1_7Component.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    Sf1_7Component.ɵfac = function Sf1_7Component_Factory(t) { return new (t || Sf1_7Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"])); };
    Sf1_7Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Sf1_7Component, selectors: [["ngx-sf1_7"]], viewQuery: function Sf1_7Component_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.osr1_1 = _t.first);
        } }, decls: 28, vars: 12, consts: [["id", "sample-dataSF1_7", 2, "display", "block", "height", "150px"], ["gaugeSF1_7", ""], ["startAngle", "260", "endAngle", "100", 3, "majorTicks", "minorTicks", "labelStyle", "lineStyle", "ranges", "pointers"], ["angle", "180", "radius", "30%", "zIndex", "1", 3, "content"], [2, "margin-left", "23%", "margin-top", "-0%", "padding-top", "-40px", "padding-block-start", "-98px"], [2, "padding", "0.5625em 0.625em", "margin-top", "-0.10rem"], [2, "padding", "0.5625em 0.625em", "margin-top", "-1.9rem"]], template: function Sf1_7Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " SF1_7 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ejs-circulargauge", 0, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "e-axes");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "e-axis", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "e-annotations");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "e-annotation", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "pre", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Corriente:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Potencia:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Voltaje:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Consumo:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("majorTicks", ctx.majorTicks)("labelStyle", ctx.labelStyle)("lineStyle", ctx.lineStyle)("ranges", ctx.ranges)("pointers", ctx.pointers2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx.annotation);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("  ", ctx.TeamSF1_7 == null ? null : ctx.TeamSF1_7.SF1_7_CorrienteActualMotor, "  \u00A0 A");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("   ", ctx.TeamSF1_7 == null ? null : ctx.TeamSF1_7.SF1_7_PotenciaActualMotor, " \u00A0 W");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", ctx.TeamSF1_7 == null ? null : ctx.TeamSF1_7.SF1_7_voltaje, "   VAC ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 10, ctx.TeamSF1_7 == null ? null : ctx.TeamSF1_7.SF1_7_KWh), "  \u00A0 kwh ");
        } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["CircularGaugeComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxesDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxisDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationsDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3pvbmUtdGVhbXMvdGVhbS1zZi9zZjEuNy9zZjEuNy5jb21wb25lbnQuc2NzcyJ9 */"] });
    return Sf1_7Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Sf1_7Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-sf1_7',
                templateUrl: './sf1.7.component.html',
                styleUrls: ['./sf1.7.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"] }]; }, { osr1_1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gaugeSF1_7']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/zone-teams/team-sf/sf1.8/sf1.8.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-sf/sf1.8/sf1.8.component.ts ***!
  \*******************************************************************/
/*! exports provided: Sf1_8Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sf1_8Component", function() { return Sf1_8Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-angular-circulargauge */ "./node_modules/@syncfusion/ej2-angular-circulargauge/__ivy_ngcc__/@syncfusion/ej2-angular-circulargauge.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");















var _c0 = ["gaugeSF1_8"];
var Sf1_8Component = /** @class */ (function () {
    function Sf1_8Component(http, api, apiGetComp, decimalPipe) {
        this.http = http;
        this.api = api;
        this.apiGetComp = apiGetComp;
        this.decimalPipe = decimalPipe;
        this.alive = true;
        this.TeamSF1_8 = {
            SF1_8_VelocidadActualMotor: 0,
            SF1_8_CorrienteActualMotor: 0,
            SF1_8_PotenciaActualMotor: 0,
            SF1_8_TorqueActualMotor: 0,
            SF1_8_KWh: 0,
            SF1_8_voltaje: 0
        };
        this.velocidadSF1_8 = 0;
        // custom code end
        this.majorTicks = { width: 0 };
        this.lineStyle = { width: 0 };
        this.minorTicks = { width: 0 };
        //Initializing LabelStyle
        this.labelStyle = { font: { size: '0' } };
        //Initializing Annotation
        this.annotation = "<div id='templateWrap'>" +
            "<div class='fontDes' style='width: 16px;height: 16px;margin-top: 4px;'>${pointers[0].value} rpm</div></div></div>";
        this.annotation2 = "<div class='fontDes1'>Germany</div>";
        this.annotation3 = "<div class='fontDes1'>USA</div>";
        this.annotation4 = "<div class='fontDes1'>UK</div>";
        this.annotation5 = "<div id='templateWrap'>" +
            "<div class='fontDes'>${pointers[0].value}%</div></div></div>";
        // public annotation6: string = `<div id='templateWrap'><div class='fontDes3'>cantidad ${this.dataSF1_1?.SF1_1_VelocidadActualMotor}</div></div></div>`;
        this.germanyAnnotation = [{
                content: "<div id='templateWrap'>"
                    + "<img style='width: 16px;height: 16px;margin-top: 4px;' src='./assets/circular-gauge/images/positive.png' />"
                    + "<div style='float: right;color: #424242;font-size: 10px;'>${pointers[0].value}%</div></div></div>",
                angle: 180,
                radius: '130%'
            }, {
                content: '<div style="color:#9E9E9E;font-size:16px;font-family:Roboto">Germany</div>',
                angle: 180,
                radius: '65%'
            }];
        //Color gauge
        this.ranges = [{
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
        this.pointers2 = [{
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
    }
    Sf1_8Component.prototype.ngOnInit = function () {
        this.changeSF1_8();
        // this.dataSF1()
    };
    Sf1_8Component.prototype.gauge = function () {
        if (document.getElementById('sample-data')) {
            var value1 = this.velocidadSF1_8;
            this.osr1_1.axes[0].pointers[0].animation.enable = true;
            this.osr1_1.setPointerValue(0, 0, value1);
            this.osr1_1.setAnnotationValue(0, 0, this.osr1_1.axes[0].annotations[0].content);
        }
        else {
            clearInterval(this.tooltipInterval1);
        }
    };
    Sf1_8Component.prototype.test = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-data')) {
                var value1 = _this.velocidadSF1_8;
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 1000);
    };
    Sf1_8Component.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-dataSF1_8')) {
                var value1 = _this.velocidadSF1_8;
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
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                // this.usa.axes[0].pointers[0].animation.enable = true;
                // this.uk.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                // this.usa.setPointerValue(0, 0, value2);
                // this.uk.setPointerValue(0, 0, value3);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
                // this.usa.setAnnotationValue(0, 0, this.usa.axes[0].annotations[0].content);
                // this.uk.setAnnotationValue(0, 0, this.uk.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 2000);
    };
    Sf1_8Component.prototype.changeSF1_8 = function () {
        var _this = this;
        this.apiGetComp.GetJson(this.api.apiUrlNode1 + '/SF1_8')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('No hay data SF1_8');
                res.SF1_8_VelocidadActualMotor = 0;
                res.SF1_8_CorrienteActualMotor = 0;
                res.SF1_8_PotenciaActualMotor = 0;
                res.SF1_8_KWh = 0;
            }
            else {
                _this.TeamSF1_8 = res;
                // this.dataSF1_1 = TeamSF1_1
                // this.velocidadSF1_8 = this.decimalPipe.transform(this.TeamSF1_8?.SF1_8_VelocidadActualMotor) ?? 0;
                // console.log('SF1_1:', this.TeamSF1_8);
                _this.velocidadSF1_8 = (_b = (_a = _this.TeamSF1_8) === null || _a === void 0 ? void 0 : _a.SF1_8_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        });
    };
    Sf1_8Component.prototype.dataSF1_8 = function () {
        var _this = this;
        if (this.intervalSubscriptionItems) {
            this.intervalSubscriptionItems.unsubscribe();
        }
        this.intervalSubscriptionItems = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(3000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.apiGetComp.GetJson(_this.api.apiUrlNode1 + '/SF1_8'); }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('no hay data SF1_8');
                res.SF1_8_VelocidadActualMotor = 0;
                res.SF1_8_CorrienteActualMotor = 0;
                res.SF1_8_PotenciaActualMotor = 0;
                res.SF1_8_KWh = 0;
            }
            else {
                _this.TeamSF1_8 = res;
                // this.dataSF1_1 = TeamSF1_1
                _this.velocidadSF1_8 = (_b = (_a = _this.TeamSF1_8) === null || _a === void 0 ? void 0 : _a.SF1_8_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        }, function (error) { return (console.log(error)); }, function () { return console.log('Error..!'); });
    };
    Sf1_8Component.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    Sf1_8Component.ɵfac = function Sf1_8Component_Factory(t) { return new (t || Sf1_8Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"])); };
    Sf1_8Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Sf1_8Component, selectors: [["ngx-sf1_8"]], viewQuery: function Sf1_8Component_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.osr1_1 = _t.first);
        } }, decls: 28, vars: 12, consts: [["id", "sample-dataSF1_8", 2, "display", "block", "height", "150px"], ["gaugeSF1_8", ""], ["startAngle", "260", "endAngle", "100", 3, "majorTicks", "minorTicks", "labelStyle", "lineStyle", "ranges", "pointers"], ["angle", "180", "radius", "30%", "zIndex", "1", 3, "content"], [2, "margin-left", "23%", "margin-top", "-0%", "padding-top", "-40px", "padding-block-start", "-98px"], [2, "padding", "0.5625em 0.625em", "margin-top", "-0.10rem"], [2, "padding", "0.5625em 0.625em", "margin-top", "-1.9rem"]], template: function Sf1_8Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " SF1_8 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ejs-circulargauge", 0, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "e-axes");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "e-axis", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "e-annotations");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "e-annotation", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "pre", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Corriente:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Potencia:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Voltaje:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Consumo:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("majorTicks", ctx.majorTicks)("labelStyle", ctx.labelStyle)("lineStyle", ctx.lineStyle)("ranges", ctx.ranges)("pointers", ctx.pointers2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx.annotation);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("  ", ctx.TeamSF1_8 == null ? null : ctx.TeamSF1_8.SF1_8_CorrienteActualMotor, "  \u00A0 A");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("   ", ctx.TeamSF1_8 == null ? null : ctx.TeamSF1_8.SF1_8_PotenciaActualMotor, " \u00A0 W");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", ctx.TeamSF1_8 == null ? null : ctx.TeamSF1_8.SF1_8_voltaje, "   VAC ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 10, ctx.TeamSF1_8 == null ? null : ctx.TeamSF1_8.SF1_8_KWh), "  \u00A0 kwh ");
        } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["CircularGaugeComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxesDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxisDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationsDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3pvbmUtdGVhbXMvdGVhbS1zZi9zZjEuOC9zZjEuOC5jb21wb25lbnQuc2NzcyJ9 */"] });
    return Sf1_8Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Sf1_8Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-sf1_8',
                templateUrl: './sf1.8.component.html',
                styleUrls: ['./sf1.8.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"] }]; }, { osr1_1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gaugeSF1_8']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/zone-teams/team-sf/sf1.9/sf1.9.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-sf/sf1.9/sf1.9.component.ts ***!
  \*******************************************************************/
/*! exports provided: Sf1_9Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sf1_9Component", function() { return Sf1_9Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-angular-circulargauge */ "./node_modules/@syncfusion/ej2-angular-circulargauge/__ivy_ngcc__/@syncfusion/ej2-angular-circulargauge.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");















var _c0 = ["gaugeSF1_9"];
var Sf1_9Component = /** @class */ (function () {
    function Sf1_9Component(http, api, apiGetComp, decimalPipe) {
        this.http = http;
        this.api = api;
        this.apiGetComp = apiGetComp;
        this.decimalPipe = decimalPipe;
        this.alive = true;
        this.TeamSF1_9 = {
            SF1_9_VelocidadActualMotor: 0,
            SF1_9_CorrienteActualMotor: 0,
            SF1_9_PotenciaActualMotor: 0,
            SF1_9_TorqueActualMotor: 0,
            SF1_9_KWh: 0,
            SF1_9_voltaje: 0
        };
        this.velocidadSF1_9 = 0;
        // custom code end
        this.majorTicks = { width: 0 };
        this.lineStyle = { width: 0 };
        this.minorTicks = { width: 0 };
        //Initializing LabelStyle
        this.labelStyle = { font: { size: '0' } };
        //Initializing Annotation
        this.annotation = "<div id='templateWrap'>" +
            "<div class='fontDes' style='width: 16px;height: 16px;margin-top: 4px;'>${pointers[0].value} rpm</div></div></div>";
        this.annotation2 = "<div class='fontDes1'>Germany</div>";
        this.annotation3 = "<div class='fontDes1'>USA</div>";
        this.annotation4 = "<div class='fontDes1'>UK</div>";
        this.annotation5 = "<div id='templateWrap'>" +
            "<div class='fontDes'>${pointers[0].value}%</div></div></div>";
        // public annotation6: string = `<div id='templateWrap'><div class='fontDes3'>cantidad ${this.dataSF1_1?.SF1_1_VelocidadActualMotor}</div></div></div>`;
        this.germanyAnnotation = [{
                content: "<div id='templateWrap'>"
                    + "<img style='width: 16px;height: 16px;margin-top: 4px;' src='./assets/circular-gauge/images/positive.png' />"
                    + "<div style='float: right;color: #424242;font-size: 10px;'>${pointers[0].value}%</div></div></div>",
                angle: 180,
                radius: '130%'
            }, {
                content: '<div style="color:#9E9E9E;font-size:16px;font-family:Roboto">Germany</div>',
                angle: 180,
                radius: '65%'
            }];
        //Color gauge
        this.ranges = [{
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
        this.pointers2 = [{
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
    }
    Sf1_9Component.prototype.ngOnInit = function () {
        this.changeSF1_9();
        // this.dataSF1()
    };
    Sf1_9Component.prototype.gauge = function () {
        if (document.getElementById('sample-data')) {
            var value1 = this.velocidadSF1_9;
            this.osr1_1.axes[0].pointers[0].animation.enable = true;
            this.osr1_1.setPointerValue(0, 0, value1);
            this.osr1_1.setAnnotationValue(0, 0, this.osr1_1.axes[0].annotations[0].content);
        }
        else {
            clearInterval(this.tooltipInterval1);
        }
    };
    Sf1_9Component.prototype.test = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-data')) {
                var value1 = _this.velocidadSF1_9;
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 1000);
    };
    Sf1_9Component.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-dataSF1_9')) {
                var value1 = _this.velocidadSF1_9;
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
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                // this.usa.axes[0].pointers[0].animation.enable = true;
                // this.uk.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                // this.usa.setPointerValue(0, 0, value2);
                // this.uk.setPointerValue(0, 0, value3);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
                // this.usa.setAnnotationValue(0, 0, this.usa.axes[0].annotations[0].content);
                // this.uk.setAnnotationValue(0, 0, this.uk.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 2000);
    };
    Sf1_9Component.prototype.changeSF1_9 = function () {
        var _this = this;
        this.apiGetComp.GetJson(this.api.apiUrlNode1 + '/SF1_9')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('No hay data SF1_9');
                res.SF1_9_VelocidadActualMotor = 0;
                res.SF1_9_CorrienteActualMotor = 0;
                res.SF1_9_PotenciaActualMotor = 0;
                res.SF1_9_KWh = 0;
            }
            else {
                _this.TeamSF1_9 = res;
                // this.dataSF1_1 = TeamSF1_1
                _this.velocidadSF1_9 = (_b = (_a = _this.TeamSF1_9) === null || _a === void 0 ? void 0 : _a.SF1_9_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        });
    };
    Sf1_9Component.prototype.dataSF1_9 = function () {
        var _this = this;
        if (this.intervalSubscriptionItems) {
            this.intervalSubscriptionItems.unsubscribe();
        }
        this.intervalSubscriptionItems = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(3000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.apiGetComp.GetJson(_this.api.apiUrlNode1 + '/SF1_9'); }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('no hay data SF1_9');
                res.SF1_9_VelocidadActualMotor = 0;
                res.SF1_9_CorrienteActualMotor = 0;
                res.SF1_9_PotenciaActualMotor = 0;
                res.SF1_9_KWh = 0;
            }
            else {
                _this.TeamSF1_9 = res;
                // this.dataSF1_1 = TeamSF1_1
                _this.velocidadSF1_9 = (_b = (_a = _this.TeamSF1_9) === null || _a === void 0 ? void 0 : _a.SF1_9_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        }, function (error) { return (console.log(error)); }, function () { return console.log('Error..!'); });
    };
    Sf1_9Component.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    Sf1_9Component.ɵfac = function Sf1_9Component_Factory(t) { return new (t || Sf1_9Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"])); };
    Sf1_9Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Sf1_9Component, selectors: [["ngx-sf1_9"]], viewQuery: function Sf1_9Component_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.osr1_1 = _t.first);
        } }, decls: 28, vars: 12, consts: [["id", "sample-dataSF1_9", 2, "display", "block", "height", "150px"], ["gaugeSF1_9", ""], ["startAngle", "260", "endAngle", "100", 3, "majorTicks", "minorTicks", "labelStyle", "lineStyle", "ranges", "pointers"], ["angle", "180", "radius", "30%", "zIndex", "1", 3, "content"], [2, "margin-left", "23%", "margin-top", "-0%", "padding-top", "-40px", "padding-block-start", "-98px"], [2, "padding", "0.5625em 0.625em", "margin-top", "-0.10rem"], [2, "padding", "0.5625em 0.625em", "margin-top", "-1.9rem"]], template: function Sf1_9Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " SF1_9 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ejs-circulargauge", 0, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "e-axes");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "e-axis", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "e-annotations");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "e-annotation", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "pre", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Corriente:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Potencia:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Voltaje:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Consumo:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("majorTicks", ctx.majorTicks)("labelStyle", ctx.labelStyle)("lineStyle", ctx.lineStyle)("ranges", ctx.ranges)("pointers", ctx.pointers2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx.annotation);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("  ", ctx.TeamSF1_9 == null ? null : ctx.TeamSF1_9.SF1_9_CorrienteActualMotor, "  \u00A0 A");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("   ", ctx.TeamSF1_9 == null ? null : ctx.TeamSF1_9.SF1_9_PotenciaActualMotor, " \u00A0 W");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", ctx.TeamSF1_9 == null ? null : ctx.TeamSF1_9.SF1_9_voltaje, "   VAC ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 10, ctx.TeamSF1_9 == null ? null : ctx.TeamSF1_9.SF1_9_KWh), "  \u00A0 kwh ");
        } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["CircularGaugeComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxesDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxisDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationsDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3pvbmUtdGVhbXMvdGVhbS1zZi9zZjEuOS9zZjEuOS5jb21wb25lbnQuc2NzcyJ9 */"] });
    return Sf1_9Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Sf1_9Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-sf1_9',
                templateUrl: './sf1.9.component.html',
                styleUrls: ['./sf1.9.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"] }]; }, { osr1_1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gaugeSF1_9']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/zone-teams/team-sf/sf1/sf1.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-sf/sf1/sf1.component.ts ***!
  \***************************************************************/
/*! exports provided: Sf1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sf1Component", function() { return Sf1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var Sf1Component = /** @class */ (function () {
    function Sf1Component() {
    }
    Sf1Component.prototype.ngOnInit = function () {
    };
    Sf1Component.ɵfac = function Sf1Component_Factory(t) { return new (t || Sf1Component)(); };
    Sf1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Sf1Component, selectors: [["ngx-sf1"]], decls: 2, vars: 0, template: function Sf1Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sf1 works!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3pvbmUtdGVhbXMvdGVhbS1zZi9zZjEvc2YxLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return Sf1Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Sf1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-sf1',
                templateUrl: './sf1.component.html',
                styleUrls: ['./sf1.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/zone-teams/team-sf/sf3.10/sf3.10.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-sf/sf3.10/sf3.10.component.ts ***!
  \*********************************************************************/
/*! exports provided: Sf3_10Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sf3_10Component", function() { return Sf3_10Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-angular-circulargauge */ "./node_modules/@syncfusion/ej2-angular-circulargauge/__ivy_ngcc__/@syncfusion/ej2-angular-circulargauge.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");















var _c0 = ["gaugeSF3_10"];
var Sf3_10Component = /** @class */ (function () {
    function Sf3_10Component(http, api, apiGetComp, decimalPipe) {
        this.http = http;
        this.api = api;
        this.apiGetComp = apiGetComp;
        this.decimalPipe = decimalPipe;
        this.alive = true;
        this.TeamSF3_10 = {
            SF3_10_VelocidadActualMotor: 0,
            SF3_10_CorrienteActualMotor: 0,
            SF3_10_PotenciaActualMotor: 0,
            SF3_10_TorqueActualMotor: 0,
            SF3_10_KWh: 0,
            SF3_10_voltaje: 0
        };
        this.velocidadSF3_10 = 0;
        // custom code end
        this.majorTicks = { width: 0 };
        this.lineStyle = { width: 0 };
        this.minorTicks = { width: 0 };
        //Initializing LabelStyle
        this.labelStyle = { font: { size: '0' } };
        //Initializing Annotation
        this.annotation = "<div id='templateWrap'>" +
            "<div class='fontDes' style='width: 16px;height: 16px;margin-top: 4px;'>${pointers[0].value} rpm</div></div></div>";
        this.annotation2 = "<div class='fontDes1'>Germany</div>";
        this.annotation3 = "<div class='fontDes1'>USA</div>";
        this.annotation4 = "<div class='fontDes1'>UK</div>";
        this.annotation5 = "<div id='templateWrap'>" +
            "<div class='fontDes'>${pointers[0].value}%</div></div></div>";
        // public annotation6: string = `<div id='templateWrap'><div class='fontDes3'>cantidad ${this.dataSF1_1?.SF1_1_VelocidadActualMotor}</div></div></div>`;
        this.germanyAnnotation = [{
                content: "<div id='templateWrap'>"
                    + "<img style='width: 16px;height: 16px;margin-top: 4px;' src='./assets/circular-gauge/images/positive.png' />"
                    + "<div style='float: right;color: #424242;font-size: 10px;'>${pointers[0].value}%</div></div></div>",
                angle: 180,
                radius: '130%'
            }, {
                content: '<div style="color:#9E9E9E;font-size:16px;font-family:Roboto">Germany</div>',
                angle: 180,
                radius: '65%'
            }];
        //Color gauge
        this.ranges = [{
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
        this.pointers2 = [{
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
    }
    Sf3_10Component.prototype.ngOnInit = function () {
        this.changeSF3_10();
        this.dataSF3_10();
    };
    Sf3_10Component.prototype.gauge = function () {
        if (document.getElementById('sample-data')) {
            var value1 = this.velocidadSF3_10;
            this.osr1_1.axes[0].pointers[0].animation.enable = true;
            this.osr1_1.setPointerValue(0, 0, value1);
            this.osr1_1.setAnnotationValue(0, 0, this.osr1_1.axes[0].annotations[0].content);
        }
        else {
            clearInterval(this.tooltipInterval1);
        }
    };
    Sf3_10Component.prototype.test = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-data')) {
                var value1 = _this.velocidadSF3_10;
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 1000);
    };
    Sf3_10Component.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-dataSF3_10')) {
                var value1 = _this.velocidadSF3_10;
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
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                // this.usa.axes[0].pointers[0].animation.enable = true;
                // this.uk.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                // this.usa.setPointerValue(0, 0, value2);
                // this.uk.setPointerValue(0, 0, value3);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
                // this.usa.setAnnotationValue(0, 0, this.usa.axes[0].annotations[0].content);
                // this.uk.setAnnotationValue(0, 0, this.uk.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 2000);
    };
    Sf3_10Component.prototype.changeSF3_10 = function () {
        var _this = this;
        this.apiGetComp.GetJson(this.api.apiUrlNode1 + '/SF3_10')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('No hay data SF3_10');
                res.SF3_10_VelocidadActualMotor = 0;
                res.SF3_10_CorrienteActualMotor = 0;
                res.SF3_10_PotenciaActualMotor = 0;
                res.SF3_10_KWh = 0;
            }
            else {
                _this.TeamSF3_10 = res;
                // this.dataSF1_1 = TeamSF1_1
                // this.velocidadSF3_10 = this.decimalPipe.transform(this.TeamSF3_10?.SF3_10_VelocidadActualMotor) ?? 0;
                // console.log('SF1_1:', this.TeamSF3_10);
                _this.velocidadSF3_10 = (_b = (_a = _this.TeamSF3_10) === null || _a === void 0 ? void 0 : _a.SF3_10_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        });
    };
    Sf3_10Component.prototype.dataSF3_10 = function () {
        var _this = this;
        if (this.intervalSubscriptionItems) {
            this.intervalSubscriptionItems.unsubscribe();
        }
        this.intervalSubscriptionItems = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(10000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.apiGetComp.GetJson(_this.api.apiUrlNode1 + '/SF3_10'); }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('no hay data SF3_10');
                res.SF3_10_VelocidadActualMotor = 0;
                res.SF3_10_CorrienteActualMotor = 0;
                res.SF3_10_PotenciaActualMotor = 0;
                res.SF3_10_KWh = 0;
            }
            else {
                _this.TeamSF3_10 = res;
                // this.dataSF1_1 = TeamSF1_1
                _this.velocidadSF3_10 = (_b = (_a = _this.TeamSF3_10) === null || _a === void 0 ? void 0 : _a.SF3_10_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        }, function (error) { return (console.log(error)); }, function () { return console.log('Error..!'); });
    };
    Sf3_10Component.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    Sf3_10Component.ɵfac = function Sf3_10Component_Factory(t) { return new (t || Sf3_10Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"])); };
    Sf3_10Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Sf3_10Component, selectors: [["ngx-sf3_10"]], viewQuery: function Sf3_10Component_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.osr1_1 = _t.first);
        } }, decls: 28, vars: 12, consts: [["id", "sample-dataSF3_10", 2, "display", "block", "height", "150px"], ["gaugeSF3_10", ""], ["startAngle", "260", "endAngle", "100", 3, "majorTicks", "minorTicks", "labelStyle", "lineStyle", "ranges", "pointers"], ["angle", "180", "radius", "30%", "zIndex", "1", 3, "content"], [2, "margin-left", "23%", "margin-top", "-0%", "padding-top", "-40px", "padding-block-start", "-98px"], [2, "padding", "0.5625em 0.625em", "margin-top", "-0.10rem"], [2, "padding", "0.5625em 0.625em", "margin-top", "-1.9rem"]], template: function Sf3_10Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " SF3_10 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ejs-circulargauge", 0, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "e-axes");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "e-axis", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "e-annotations");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "e-annotation", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "pre", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Corriente:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Potencia:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Voltaje:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Consumo:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("majorTicks", ctx.majorTicks)("labelStyle", ctx.labelStyle)("lineStyle", ctx.lineStyle)("ranges", ctx.ranges)("pointers", ctx.pointers2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx.annotation);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("  ", ctx.TeamSF3_10 == null ? null : ctx.TeamSF3_10.SF3_10_CorrienteActualMotor, "  \u00A0 A");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("   ", ctx.TeamSF3_10 == null ? null : ctx.TeamSF3_10.SF3_10_PotenciaActualMotor, " \u00A0 W");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", ctx.TeamSF3_10 == null ? null : ctx.TeamSF3_10.SF3_10_voltaje, "   VAC ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 10, ctx.TeamSF3_10 == null ? null : ctx.TeamSF3_10.SF3_10_KWh), "  \u00A0 kwh ");
        } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["CircularGaugeComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxesDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxisDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationsDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3pvbmUtdGVhbXMvdGVhbS1zZi9zZjMuMTAvc2YzLjEwLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return Sf3_10Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Sf3_10Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-sf3_10',
                templateUrl: './sf3.10.component.html',
                styleUrls: ['./sf3.10.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"] }]; }, { osr1_1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gaugeSF3_10']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/zone-teams/team-sf/sf3.11/sf3.11.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-sf/sf3.11/sf3.11.component.ts ***!
  \*********************************************************************/
/*! exports provided: Sf3_11Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sf3_11Component", function() { return Sf3_11Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-angular-circulargauge */ "./node_modules/@syncfusion/ej2-angular-circulargauge/__ivy_ngcc__/@syncfusion/ej2-angular-circulargauge.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");















var _c0 = ["gaugeSF3_11"];
var Sf3_11Component = /** @class */ (function () {
    function Sf3_11Component(http, api, apiGetComp, decimalPipe) {
        this.http = http;
        this.api = api;
        this.apiGetComp = apiGetComp;
        this.decimalPipe = decimalPipe;
        this.alive = true;
        this.TeamSF3_11 = {
            SF3_11_VelocidadActualMotor: 0,
            SF3_11_CorrienteActualMotor: 0,
            SF3_11_PotenciaActualMotor: 0,
            SF3_11_TorqueActualMotor: 0,
            SF3_11_KWh: 0,
            SF3_11_voltaje: 0
        };
        this.velocidadSF3_11 = 0;
        // custom code end
        this.majorTicks = { width: 0 };
        this.lineStyle = { width: 0 };
        this.minorTicks = { width: 0 };
        //Initializing LabelStyle
        this.labelStyle = { font: { size: '0' } };
        //Initializing Annotation
        this.annotation = "<div id='templateWrap'>" +
            "<div class='fontDes' style='width: 16px;height: 16px;margin-top: 4px;'>${pointers[0].value} rpm</div></div></div>";
        this.annotation2 = "<div class='fontDes1'>Germany</div>";
        this.annotation3 = "<div class='fontDes1'>USA</div>";
        this.annotation4 = "<div class='fontDes1'>UK</div>";
        this.annotation5 = "<div id='templateWrap'>" +
            "<div class='fontDes'>${pointers[0].value}%</div></div></div>";
        // public annotation6: string = `<div id='templateWrap'><div class='fontDes3'>cantidad ${this.dataSF1_1?.SF1_1_VelocidadActualMotor}</div></div></div>`;
        this.germanyAnnotation = [{
                content: "<div id='templateWrap'>"
                    + "<img style='width: 16px;height: 16px;margin-top: 4px;' src='./assets/circular-gauge/images/positive.png' />"
                    + "<div style='float: right;color: #424242;font-size: 10px;'>${pointers[0].value}%</div></div></div>",
                angle: 180,
                radius: '130%'
            }, {
                content: '<div style="color:#9E9E9E;font-size:16px;font-family:Roboto">Germany</div>',
                angle: 180,
                radius: '65%'
            }];
        //Color gauge
        this.ranges = [{
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
        this.pointers2 = [{
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
    }
    Sf3_11Component.prototype.ngOnInit = function () {
        this.changeSF3_11();
        this.dataSF3_11();
    };
    Sf3_11Component.prototype.gauge = function () {
        if (document.getElementById('sample-data')) {
            var value1 = this.velocidadSF3_11;
            this.osr1_1.axes[0].pointers[0].animation.enable = true;
            this.osr1_1.setPointerValue(0, 0, value1);
            this.osr1_1.setAnnotationValue(0, 0, this.osr1_1.axes[0].annotations[0].content);
        }
        else {
            clearInterval(this.tooltipInterval1);
        }
    };
    Sf3_11Component.prototype.test = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-data')) {
                var value1 = _this.velocidadSF3_11;
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 1000);
    };
    Sf3_11Component.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-dataSF3_11')) {
                var value1 = _this.velocidadSF3_11;
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
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                // this.usa.axes[0].pointers[0].animation.enable = true;
                // this.uk.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                // this.usa.setPointerValue(0, 0, value2);
                // this.uk.setPointerValue(0, 0, value3);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
                // this.usa.setAnnotationValue(0, 0, this.usa.axes[0].annotations[0].content);
                // this.uk.setAnnotationValue(0, 0, this.uk.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 2000);
    };
    Sf3_11Component.prototype.changeSF3_11 = function () {
        var _this = this;
        this.apiGetComp.GetJson(this.api.apiUrlNode1 + '/SF3_11')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('No hay data SF3_11');
                res.SF3_11_VelocidadActualMotor = 0;
                res.SF3_11_CorrienteActualMotor = 0;
                res.SF3_11_PotenciaActualMotor = 0;
                res.SF3_11_KWh = 0;
            }
            else {
                _this.TeamSF3_11 = res;
                // this.dataSF1_1 = TeamSF1_1
                // this.velocidadSF3_11 = this.decimalPipe.transform(this.TeamSF3_11?.SF3_11_VelocidadActualMotor) ?? 0;
                // console.log('SF1_1:', this.TeamSF3_11);
                _this.velocidadSF3_11 = (_b = (_a = _this.TeamSF3_11) === null || _a === void 0 ? void 0 : _a.SF3_11_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        });
    };
    Sf3_11Component.prototype.dataSF3_11 = function () {
        var _this = this;
        if (this.intervalSubscriptionItems) {
            this.intervalSubscriptionItems.unsubscribe();
        }
        this.intervalSubscriptionItems = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(10000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.apiGetComp.GetJson(_this.api.apiUrlNode1 + '/SF3_11'); }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('no hay data SF3_11');
                res.SF3_11_VelocidadActualMotor = 0;
                res.SF3_11_CorrienteActualMotor = 0;
                res.SF3_11_PotenciaActualMotor = 0;
                res.SF3_11_KWh = 0;
            }
            else {
                _this.TeamSF3_11 = res;
                // this.dataSF1_1 = TeamSF1_1
                _this.velocidadSF3_11 = (_b = (_a = _this.TeamSF3_11) === null || _a === void 0 ? void 0 : _a.SF3_11_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        }, function (error) { return (console.log(error)); }, function () { return console.log('Error..!'); });
    };
    Sf3_11Component.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    Sf3_11Component.ɵfac = function Sf3_11Component_Factory(t) { return new (t || Sf3_11Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"])); };
    Sf3_11Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Sf3_11Component, selectors: [["ngx-sf3_11"]], viewQuery: function Sf3_11Component_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.osr1_1 = _t.first);
        } }, decls: 28, vars: 12, consts: [["id", "sample-dataSF3_11", 2, "display", "block", "height", "150px"], ["gaugeSF3_11", ""], ["startAngle", "260", "endAngle", "100", 3, "majorTicks", "minorTicks", "labelStyle", "lineStyle", "ranges", "pointers"], ["angle", "180", "radius", "30%", "zIndex", "1", 3, "content"], [2, "margin-left", "23%", "margin-top", "-0%", "padding-top", "-40px", "padding-block-start", "-98px"], [2, "padding", "0.5625em 0.625em", "margin-top", "-0.10rem"], [2, "padding", "0.5625em 0.625em", "margin-top", "-1.9rem"]], template: function Sf3_11Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " SF3_11 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ejs-circulargauge", 0, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "e-axes");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "e-axis", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "e-annotations");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "e-annotation", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "pre", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Corriente:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Potencia:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Voltaje:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Consumo:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("majorTicks", ctx.majorTicks)("labelStyle", ctx.labelStyle)("lineStyle", ctx.lineStyle)("ranges", ctx.ranges)("pointers", ctx.pointers2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx.annotation);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("  ", ctx.TeamSF3_11 == null ? null : ctx.TeamSF3_11.SF3_11_CorrienteActualMotor, "  \u00A0 A");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("   ", ctx.TeamSF3_11 == null ? null : ctx.TeamSF3_11.SF3_11_PotenciaActualMotor, " \u00A0 W");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", ctx.TeamSF3_11 == null ? null : ctx.TeamSF3_11.SF3_11_voltaje, "   VAC ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 10, ctx.TeamSF3_11 == null ? null : ctx.TeamSF3_11.SF3_11_KWh), "  \u00A0 kwh ");
        } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["CircularGaugeComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxesDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxisDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationsDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3pvbmUtdGVhbXMvdGVhbS1zZi9zZjMuMTEvc2YzLjExLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return Sf3_11Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Sf3_11Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-sf3_11',
                templateUrl: './sf3.11.component.html',
                styleUrls: ['./sf3.11.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"] }]; }, { osr1_1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gaugeSF3_11']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/zone-teams/team-sf/sf3.4/sf3.4.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-sf/sf3.4/sf3.4.component.ts ***!
  \*******************************************************************/
/*! exports provided: Sf3_4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sf3_4Component", function() { return Sf3_4Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-angular-circulargauge */ "./node_modules/@syncfusion/ej2-angular-circulargauge/__ivy_ngcc__/@syncfusion/ej2-angular-circulargauge.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");















var _c0 = ["gaugeSF3_4"];
var Sf3_4Component = /** @class */ (function () {
    function Sf3_4Component(http, api, apiGetComp, decimalPipe) {
        this.http = http;
        this.api = api;
        this.apiGetComp = apiGetComp;
        this.decimalPipe = decimalPipe;
        this.alive = true;
        this.TeamSF3_4 = {
            SF3_4_VelocidadActualMotor: 0,
            SF3_4_CorrienteActualMotor: 0,
            SF3_4_PotenciaActualMotor: 0,
            SF3_4_TorqueActualMotor: 0,
            SF3_4_KWh: 0,
            SF3_4_voltaje: 0
        };
        this.velocidadSF3_4 = 0;
        // custom code end
        this.majorTicks = { width: 0 };
        this.lineStyle = { width: 0 };
        this.minorTicks = { width: 0 };
        //Initializing LabelStyle
        this.labelStyle = { font: { size: '0' } };
        //Initializing Annotation
        this.annotation = "<div id='templateWrap'>" +
            "<div class='fontDes' style='width: 16px;height: 16px;margin-top: 4px;'>${pointers[0].value} rpm</div></div></div>";
        this.annotation2 = "<div class='fontDes1'>Germany</div>";
        this.annotation3 = "<div class='fontDes1'>USA</div>";
        this.annotation4 = "<div class='fontDes1'>UK</div>";
        this.annotation5 = "<div id='templateWrap'>" +
            "<div class='fontDes'>${pointers[0].value}%</div></div></div>";
        // public annotation6: string = `<div id='templateWrap'><div class='fontDes3'>cantidad ${this.dataSF1_1?.SF1_1_VelocidadActualMotor}</div></div></div>`;
        this.germanyAnnotation = [{
                content: "<div id='templateWrap'>"
                    + "<img style='width: 16px;height: 16px;margin-top: 4px;' src='./assets/circular-gauge/images/positive.png' />"
                    + "<div style='float: right;color: #424242;font-size: 10px;'>${pointers[0].value}%</div></div></div>",
                angle: 180,
                radius: '130%'
            }, {
                content: '<div style="color:#9E9E9E;font-size:16px;font-family:Roboto">Germany</div>',
                angle: 180,
                radius: '65%'
            }];
        //Color gauge
        this.ranges = [{
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
        this.pointers2 = [{
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
    }
    Sf3_4Component.prototype.ngOnInit = function () {
        this.changeSF3_4();
        // this.dataSF1()
    };
    Sf3_4Component.prototype.gauge = function () {
        if (document.getElementById('sample-data')) {
            var value1 = this.velocidadSF3_4;
            this.osr1_1.axes[0].pointers[0].animation.enable = true;
            this.osr1_1.setPointerValue(0, 0, value1);
            this.osr1_1.setAnnotationValue(0, 0, this.osr1_1.axes[0].annotations[0].content);
        }
        else {
            clearInterval(this.tooltipInterval1);
        }
    };
    Sf3_4Component.prototype.test = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-data')) {
                var value1 = _this.velocidadSF3_4;
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 1000);
    };
    Sf3_4Component.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-dataSF3_4')) {
                var value1 = _this.velocidadSF3_4;
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
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                // this.usa.axes[0].pointers[0].animation.enable = true;
                // this.uk.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                // this.usa.setPointerValue(0, 0, value2);
                // this.uk.setPointerValue(0, 0, value3);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
                // this.usa.setAnnotationValue(0, 0, this.usa.axes[0].annotations[0].content);
                // this.uk.setAnnotationValue(0, 0, this.uk.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 2000);
    };
    Sf3_4Component.prototype.changeSF3_4 = function () {
        var _this = this;
        this.apiGetComp.GetJson(this.api.apiUrlNode1 + '/SF3_4')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('No hay data SF3_4');
                res.SF3_4_VelocidadActualMotor = 0;
                res.SF3_4_CorrienteActualMotor = 0;
                res.SF3_4_PotenciaActualMotor = 0;
                res.SF3_4_KWh = 0;
            }
            else {
                _this.TeamSF3_4 = res;
                // this.dataSF1_1 = TeamSF1_1
                // this.velocidadSF3_4 = this.decimalPipe.transform(this.TeamSF3_4?.SF3_4_VelocidadActualMotor) ?? 0;
                // console.log('SF1_1:', this.TeamSF3_4);
                _this.velocidadSF3_4 = (_b = (_a = _this.TeamSF3_4) === null || _a === void 0 ? void 0 : _a.SF3_4_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        });
    };
    Sf3_4Component.prototype.dataSF3_4 = function () {
        var _this = this;
        if (this.intervalSubscriptionItems) {
            this.intervalSubscriptionItems.unsubscribe();
        }
        this.intervalSubscriptionItems = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(3000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.apiGetComp.GetJson(_this.api.apiUrlNode1 + '/SF3_4'); }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('no hay data SF3_4');
                res.SF3_4_VelocidadActualMotor = 0;
                res.SF3_4_CorrienteActualMotor = 0;
                res.SF3_4_PotenciaActualMotor = 0;
                res.SF3_4_KWh = 0;
            }
            else {
                _this.TeamSF3_4 = res;
                // this.dataSF1_1 = TeamSF1_1
                _this.velocidadSF3_4 = (_b = (_a = _this.TeamSF3_4) === null || _a === void 0 ? void 0 : _a.SF3_4_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        }, function (error) { return (console.log(error)); }, function () { return console.log('Error..!'); });
    };
    Sf3_4Component.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    Sf3_4Component.ɵfac = function Sf3_4Component_Factory(t) { return new (t || Sf3_4Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"])); };
    Sf3_4Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Sf3_4Component, selectors: [["ngx-sf3_4"]], viewQuery: function Sf3_4Component_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.osr1_1 = _t.first);
        } }, decls: 28, vars: 12, consts: [["id", "sample-dataSF3_4", 2, "display", "block", "height", "150px"], ["gaugeSF3_4", ""], ["startAngle", "260", "endAngle", "100", 3, "majorTicks", "minorTicks", "labelStyle", "lineStyle", "ranges", "pointers"], ["angle", "180", "radius", "30%", "zIndex", "1", 3, "content"], [2, "margin-left", "23%", "margin-top", "-0%", "padding-top", "-40px", "padding-block-start", "-98px"], [2, "padding", "0.5625em 0.625em", "margin-top", "-0.10rem"], [2, "padding", "0.5625em 0.625em", "margin-top", "-1.9rem"]], template: function Sf3_4Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " SF3_4 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ejs-circulargauge", 0, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "e-axes");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "e-axis", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "e-annotations");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "e-annotation", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "pre", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Corriente:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Potencia:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Voltaje:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Consumo:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("majorTicks", ctx.majorTicks)("labelStyle", ctx.labelStyle)("lineStyle", ctx.lineStyle)("ranges", ctx.ranges)("pointers", ctx.pointers2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx.annotation);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("  ", ctx.TeamSF3_4 == null ? null : ctx.TeamSF3_4.SF3_4_CorrienteActualMotor, "  \u00A0 A");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("   ", ctx.TeamSF3_4 == null ? null : ctx.TeamSF3_4.SF3_4_PotenciaActualMotor, " \u00A0 W");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", ctx.TeamSF3_4 == null ? null : ctx.TeamSF3_4.SF3_4_voltaje, "   VAC ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 10, ctx.TeamSF3_4 == null ? null : ctx.TeamSF3_4.SF3_4_KWh), "  \u00A0 kwh ");
        } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["CircularGaugeComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxesDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxisDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationsDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3pvbmUtdGVhbXMvdGVhbS1zZi9zZjMuNC9zZjMuNC5jb21wb25lbnQuc2NzcyJ9 */"] });
    return Sf3_4Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Sf3_4Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-sf3_4',
                templateUrl: './sf3.4.component.html',
                styleUrls: ['./sf3.4.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"] }]; }, { osr1_1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gaugeSF3_4']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/zone-teams/team-sf/sf3.5/sf3.5.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-sf/sf3.5/sf3.5.component.ts ***!
  \*******************************************************************/
/*! exports provided: Sf3_5Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sf3_5Component", function() { return Sf3_5Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-angular-circulargauge */ "./node_modules/@syncfusion/ej2-angular-circulargauge/__ivy_ngcc__/@syncfusion/ej2-angular-circulargauge.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");















var _c0 = ["gaugeSF3_5"];
var Sf3_5Component = /** @class */ (function () {
    function Sf3_5Component(http, api, apiGetComp, decimalPipe) {
        this.http = http;
        this.api = api;
        this.apiGetComp = apiGetComp;
        this.decimalPipe = decimalPipe;
        this.alive = true;
        this.TeamSF3_5 = {
            SF3_5_VelocidadActualMotor: 0,
            SF3_5_CorrienteActualMotor: 0,
            SF3_5_PotenciaActualMotor: 0,
            SF3_5_TorqueActualMotor: 0,
            SF3_5_KWh: 0,
            SF3_5_voltaje: 0
        };
        this.velocidadSF3_5 = 0;
        // custom code end
        this.majorTicks = { width: 0 };
        this.lineStyle = { width: 0 };
        this.minorTicks = { width: 0 };
        //Initializing LabelStyle
        this.labelStyle = { font: { size: '0' } };
        //Initializing Annotation
        this.annotation = "<div id='templateWrap'>" +
            "<div class='fontDes' style='width: 16px;height: 16px;margin-top: 4px;'>${pointers[0].value} rpm</div></div></div>";
        this.annotation2 = "<div class='fontDes1'>Germany</div>";
        this.annotation3 = "<div class='fontDes1'>USA</div>";
        this.annotation4 = "<div class='fontDes1'>UK</div>";
        this.annotation5 = "<div id='templateWrap'>" +
            "<div class='fontDes'>${pointers[0].value}%</div></div></div>";
        // public annotation6: string = `<div id='templateWrap'><div class='fontDes3'>cantidad ${this.dataSF1_1?.SF1_1_VelocidadActualMotor}</div></div></div>`;
        this.germanyAnnotation = [{
                content: "<div id='templateWrap'>"
                    + "<img style='width: 16px;height: 16px;margin-top: 4px;' src='./assets/circular-gauge/images/positive.png' />"
                    + "<div style='float: right;color: #424242;font-size: 10px;'>${pointers[0].value}%</div></div></div>",
                angle: 180,
                radius: '130%'
            }, {
                content: '<div style="color:#9E9E9E;font-size:16px;font-family:Roboto">Germany</div>',
                angle: 180,
                radius: '65%'
            }];
        //Color gauge
        this.ranges = [{
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
        this.pointers2 = [{
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
    }
    Sf3_5Component.prototype.ngOnInit = function () {
        this.changeSF3_5();
        // this.dataSF1()
    };
    Sf3_5Component.prototype.gauge = function () {
        if (document.getElementById('sample-data')) {
            var value1 = this.velocidadSF3_5;
            this.osr1_1.axes[0].pointers[0].animation.enable = true;
            this.osr1_1.setPointerValue(0, 0, value1);
            this.osr1_1.setAnnotationValue(0, 0, this.osr1_1.axes[0].annotations[0].content);
        }
        else {
            clearInterval(this.tooltipInterval1);
        }
    };
    Sf3_5Component.prototype.test = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-data')) {
                var value1 = _this.velocidadSF3_5;
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 1000);
    };
    Sf3_5Component.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-dataSF3_5')) {
                var value1 = _this.velocidadSF3_5;
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
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                // this.usa.axes[0].pointers[0].animation.enable = true;
                // this.uk.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                // this.usa.setPointerValue(0, 0, value2);
                // this.uk.setPointerValue(0, 0, value3);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
                // this.usa.setAnnotationValue(0, 0, this.usa.axes[0].annotations[0].content);
                // this.uk.setAnnotationValue(0, 0, this.uk.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 2000);
    };
    Sf3_5Component.prototype.changeSF3_5 = function () {
        var _this = this;
        this.apiGetComp.GetJson(this.api.apiUrlNode1 + '/SF3_5')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('No hay data SF3_5');
                res.SF3_5_VelocidadActualMotor = 0;
                res.SF3_5_CorrienteActualMotor = 0;
                res.SF3_5_PotenciaActualMotor = 0;
                res.SF3_5_KWh = 0;
            }
            else {
                _this.TeamSF3_5 = res;
                // this.dataSF1_1 = TeamSF1_1
                // this.velocidadSF3_5 = this.decimalPipe.transform(this.TeamSF3_5?.SF3_5_VelocidadActualMotor) ?? 0;
                // console.log('SF1_1:', this.TeamSF3_5);
                _this.velocidadSF3_5 = (_b = (_a = _this.TeamSF3_5) === null || _a === void 0 ? void 0 : _a.SF3_5_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        });
    };
    Sf3_5Component.prototype.dataSF3_5 = function () {
        var _this = this;
        if (this.intervalSubscriptionItems) {
            this.intervalSubscriptionItems.unsubscribe();
        }
        this.intervalSubscriptionItems = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(3000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.apiGetComp.GetJson(_this.api.apiUrlNode1 + '/SF3_5'); }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('no hay data SF3_5');
                res.SF3_5_VelocidadActualMotor = 0;
                res.SF3_5_CorrienteActualMotor = 0;
                res.SF3_5_PotenciaActualMotor = 0;
                res.SF3_5_KWh = 0;
            }
            else {
                _this.TeamSF3_5 = res;
                // this.dataSF1_1 = TeamSF1_1
                _this.velocidadSF3_5 = (_b = (_a = _this.TeamSF3_5) === null || _a === void 0 ? void 0 : _a.SF3_5_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        }, function (error) { return (console.log(error)); }, function () { return console.log('Error..!'); });
    };
    Sf3_5Component.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    Sf3_5Component.ɵfac = function Sf3_5Component_Factory(t) { return new (t || Sf3_5Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"])); };
    Sf3_5Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Sf3_5Component, selectors: [["ngx-sf3_5"]], viewQuery: function Sf3_5Component_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.osr1_1 = _t.first);
        } }, decls: 28, vars: 12, consts: [["id", "sample-dataSF3_5", 2, "display", "block", "height", "150px"], ["gaugeSF3_5", ""], ["startAngle", "260", "endAngle", "100", 3, "majorTicks", "minorTicks", "labelStyle", "lineStyle", "ranges", "pointers"], ["angle", "180", "radius", "30%", "zIndex", "1", 3, "content"], [2, "margin-left", "23%", "margin-top", "-0%", "padding-top", "-40px", "padding-block-start", "-98px"], [2, "padding", "0.5625em 0.625em", "margin-top", "-0.10rem"], [2, "padding", "0.5625em 0.625em", "margin-top", "-1.9rem"]], template: function Sf3_5Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " SF3_5 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ejs-circulargauge", 0, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "e-axes");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "e-axis", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "e-annotations");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "e-annotation", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "pre", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Corriente:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Potencia:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Voltaje:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Consumo:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("majorTicks", ctx.majorTicks)("labelStyle", ctx.labelStyle)("lineStyle", ctx.lineStyle)("ranges", ctx.ranges)("pointers", ctx.pointers2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx.annotation);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("  ", ctx.TeamSF3_5 == null ? null : ctx.TeamSF3_5.SF3_5_CorrienteActualMotor, "  \u00A0 A");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("   ", ctx.TeamSF3_5 == null ? null : ctx.TeamSF3_5.SF3_5_PotenciaActualMotor, " \u00A0 W");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", ctx.TeamSF3_5 == null ? null : ctx.TeamSF3_5.SF3_5_voltaje, "   VAC ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 10, ctx.TeamSF3_5 == null ? null : ctx.TeamSF3_5.SF3_5_KWh), "  \u00A0 kwh ");
        } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["CircularGaugeComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxesDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxisDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationsDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3pvbmUtdGVhbXMvdGVhbS1zZi9zZjMuNS9zZjMuNS5jb21wb25lbnQuc2NzcyJ9 */"] });
    return Sf3_5Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Sf3_5Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-sf3_5',
                templateUrl: './sf3.5.component.html',
                styleUrls: ['./sf3.5.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"] }]; }, { osr1_1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gaugeSF3_5']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/zone-teams/team-sf/sf3.6/sf3.6.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-sf/sf3.6/sf3.6.component.ts ***!
  \*******************************************************************/
/*! exports provided: Sf3_6Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sf3_6Component", function() { return Sf3_6Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-angular-circulargauge */ "./node_modules/@syncfusion/ej2-angular-circulargauge/__ivy_ngcc__/@syncfusion/ej2-angular-circulargauge.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");















var _c0 = ["gaugeSF3_6"];
var Sf3_6Component = /** @class */ (function () {
    function Sf3_6Component(http, api, apiGetComp, decimalPipe) {
        this.http = http;
        this.api = api;
        this.apiGetComp = apiGetComp;
        this.decimalPipe = decimalPipe;
        this.alive = true;
        this.TeamSF3_6 = {
            SF3_6_VelocidadActualMotor: 0,
            SF3_6_CorrienteActualMotor: 0,
            SF3_6_PotenciaActualMotor: 0,
            SF3_6_TorqueActualMotor: 0,
            SF3_6_KWh: 0,
            SF3_6_voltaje: 0
        };
        this.velocidadSF3_6 = 0;
        // custom code end
        this.majorTicks = { width: 0 };
        this.lineStyle = { width: 0 };
        this.minorTicks = { width: 0 };
        //Initializing LabelStyle
        this.labelStyle = { font: { size: '0' } };
        //Initializing Annotation
        this.annotation = "<div id='templateWrap'>" +
            "<div class='fontDes' style='width: 16px;height: 16px;margin-top: 4px;'>${pointers[0].value} rpm</div></div></div>";
        this.annotation2 = "<div class='fontDes1'>Germany</div>";
        this.annotation3 = "<div class='fontDes1'>USA</div>";
        this.annotation4 = "<div class='fontDes1'>UK</div>";
        this.annotation5 = "<div id='templateWrap'>" +
            "<div class='fontDes'>${pointers[0].value}%</div></div></div>";
        // public annotation6: string = `<div id='templateWrap'><div class='fontDes3'>cantidad ${this.dataSF1_1?.SF1_1_VelocidadActualMotor}</div></div></div>`;
        this.germanyAnnotation = [{
                content: "<div id='templateWrap'>"
                    + "<img style='width: 16px;height: 16px;margin-top: 4px;' src='./assets/circular-gauge/images/positive.png' />"
                    + "<div style='float: right;color: #424242;font-size: 10px;'>${pointers[0].value}%</div></div></div>",
                angle: 180,
                radius: '130%'
            }, {
                content: '<div style="color:#9E9E9E;font-size:16px;font-family:Roboto">Germany</div>',
                angle: 180,
                radius: '65%'
            }];
        //Color gauge
        this.ranges = [{
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
        this.pointers2 = [{
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
    }
    Sf3_6Component.prototype.ngOnInit = function () {
        this.changeSF3_6();
        // this.dataSF1()
    };
    Sf3_6Component.prototype.gauge = function () {
        if (document.getElementById('sample-data')) {
            var value1 = this.velocidadSF3_6;
            this.osr1_1.axes[0].pointers[0].animation.enable = true;
            this.osr1_1.setPointerValue(0, 0, value1);
            this.osr1_1.setAnnotationValue(0, 0, this.osr1_1.axes[0].annotations[0].content);
        }
        else {
            clearInterval(this.tooltipInterval1);
        }
    };
    Sf3_6Component.prototype.test = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-data')) {
                var value1 = _this.velocidadSF3_6;
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 1000);
    };
    Sf3_6Component.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-dataSF3_6')) {
                var value1 = _this.velocidadSF3_6;
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
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                // this.usa.axes[0].pointers[0].animation.enable = true;
                // this.uk.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                // this.usa.setPointerValue(0, 0, value2);
                // this.uk.setPointerValue(0, 0, value3);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
                // this.usa.setAnnotationValue(0, 0, this.usa.axes[0].annotations[0].content);
                // this.uk.setAnnotationValue(0, 0, this.uk.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 2000);
    };
    Sf3_6Component.prototype.changeSF3_6 = function () {
        var _this = this;
        this.apiGetComp.GetJson(this.api.apiUrlNode1 + '/SF3_6')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('No hay data SF3_6');
                res.SF3_6_VelocidadActualMotor = 0;
                res.SF3_6_CorrienteActualMotor = 0;
                res.SF3_6_PotenciaActualMotor = 0;
                res.SF3_6_KWh = 0;
            }
            else {
                _this.TeamSF3_6 = res;
                // this.dataSF1_1 = TeamSF1_1
                // this.velocidadSF3_6 = this.decimalPipe.transform(this.TeamSF3_6?.SF3_6_VelocidadActualMotor) ?? 0;
                // console.log('SF1_1:', this.TeamSF3_6);
                _this.velocidadSF3_6 = (_b = (_a = _this.TeamSF3_6) === null || _a === void 0 ? void 0 : _a.SF3_6_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        });
    };
    Sf3_6Component.prototype.dataSF3_6 = function () {
        var _this = this;
        if (this.intervalSubscriptionItems) {
            this.intervalSubscriptionItems.unsubscribe();
        }
        this.intervalSubscriptionItems = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(3000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.apiGetComp.GetJson(_this.api.apiUrlNode1 + '/SF3_6'); }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('no hay data SF3_6');
                res.SF3_6_VelocidadActualMotor = 0;
                res.SF3_6_CorrienteActualMotor = 0;
                res.SF3_6_PotenciaActualMotor = 0;
                res.SF3_6_KWh = 0;
            }
            else {
                _this.TeamSF3_6 = res;
                // this.dataSF1_1 = TeamSF1_1
                _this.velocidadSF3_6 = (_b = (_a = _this.TeamSF3_6) === null || _a === void 0 ? void 0 : _a.SF3_6_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        }, function (error) { return (console.log(error)); }, function () { return console.log('Error..!'); });
    };
    Sf3_6Component.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    Sf3_6Component.ɵfac = function Sf3_6Component_Factory(t) { return new (t || Sf3_6Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"])); };
    Sf3_6Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Sf3_6Component, selectors: [["ngx-sf3_6"]], viewQuery: function Sf3_6Component_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.osr1_1 = _t.first);
        } }, decls: 28, vars: 12, consts: [["id", "sample-dataSF3_6", 2, "display", "block", "height", "150px"], ["gaugeSF3_6", ""], ["startAngle", "260", "endAngle", "100", 3, "majorTicks", "minorTicks", "labelStyle", "lineStyle", "ranges", "pointers"], ["angle", "180", "radius", "30%", "zIndex", "1", 3, "content"], [2, "margin-left", "23%", "margin-top", "-0%", "padding-top", "-40px", "padding-block-start", "-98px"], [2, "padding", "0.5625em 0.625em", "margin-top", "-0.10rem"], [2, "padding", "0.5625em 0.625em", "margin-top", "-1.9rem"]], template: function Sf3_6Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " SF3_6 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ejs-circulargauge", 0, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "e-axes");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "e-axis", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "e-annotations");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "e-annotation", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "pre", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Corriente:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Potencia:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Voltaje:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Consumo:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("majorTicks", ctx.majorTicks)("labelStyle", ctx.labelStyle)("lineStyle", ctx.lineStyle)("ranges", ctx.ranges)("pointers", ctx.pointers2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx.annotation);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("  ", ctx.TeamSF3_6 == null ? null : ctx.TeamSF3_6.SF3_6_CorrienteActualMotor, "  \u00A0 A");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("   ", ctx.TeamSF3_6 == null ? null : ctx.TeamSF3_6.SF3_6_PotenciaActualMotor, " \u00A0 W");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", ctx.TeamSF3_6 == null ? null : ctx.TeamSF3_6.SF3_6_voltaje, "   VAC ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 10, ctx.TeamSF3_6 == null ? null : ctx.TeamSF3_6.SF3_6_KWh), "  \u00A0 kwh ");
        } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["CircularGaugeComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxesDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxisDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationsDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3pvbmUtdGVhbXMvdGVhbS1zZi9zZjMuNi9zZjMuNi5jb21wb25lbnQuc2NzcyJ9 */"] });
    return Sf3_6Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Sf3_6Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-sf3_6',
                templateUrl: './sf3.6.component.html',
                styleUrls: ['./sf3.6.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"] }]; }, { osr1_1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gaugeSF3_6']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/zone-teams/team-sf/sf3.7/sf3.7.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-sf/sf3.7/sf3.7.component.ts ***!
  \*******************************************************************/
/*! exports provided: Sf3_7Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sf3_7Component", function() { return Sf3_7Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-angular-circulargauge */ "./node_modules/@syncfusion/ej2-angular-circulargauge/__ivy_ngcc__/@syncfusion/ej2-angular-circulargauge.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");















var _c0 = ["gaugeSF3_7"];
var Sf3_7Component = /** @class */ (function () {
    function Sf3_7Component(http, api, apiGetComp, decimalPipe) {
        this.http = http;
        this.api = api;
        this.apiGetComp = apiGetComp;
        this.decimalPipe = decimalPipe;
        this.alive = true;
        this.TeamSF3_7 = {
            SF3_7_VelocidadActualMotor: 0,
            SF3_7_CorrienteActualMotor: 0,
            SF3_7_PotenciaActualMotor: 0,
            SF3_7_TorqueActualMotor: 0,
            SF3_7_KWh: 0,
            SF3_7_voltaje: 0
        };
        this.velocidadSF3_7 = 0;
        // custom code end
        this.majorTicks = { width: 0 };
        this.lineStyle = { width: 0 };
        this.minorTicks = { width: 0 };
        //Initializing LabelStyle
        this.labelStyle = { font: { size: '0' } };
        //Initializing Annotation
        this.annotation = "<div id='templateWrap'>" +
            "<div class='fontDes' style='width: 16px;height: 16px;margin-top: 4px;'>${pointers[0].value} rpm</div></div></div>";
        this.annotation2 = "<div class='fontDes1'>Germany</div>";
        this.annotation3 = "<div class='fontDes1'>USA</div>";
        this.annotation4 = "<div class='fontDes1'>UK</div>";
        this.annotation5 = "<div id='templateWrap'>" +
            "<div class='fontDes'>${pointers[0].value}%</div></div></div>";
        // public annotation6: string = `<div id='templateWrap'><div class='fontDes3'>cantidad ${this.dataSF1_1?.SF1_1_VelocidadActualMotor}</div></div></div>`;
        this.germanyAnnotation = [{
                content: "<div id='templateWrap'>"
                    + "<img style='width: 16px;height: 16px;margin-top: 4px;' src='./assets/circular-gauge/images/positive.png' />"
                    + "<div style='float: right;color: #424242;font-size: 10px;'>${pointers[0].value}%</div></div></div>",
                angle: 180,
                radius: '130%'
            }, {
                content: '<div style="color:#9E9E9E;font-size:16px;font-family:Roboto">Germany</div>',
                angle: 180,
                radius: '65%'
            }];
        //Color gauge
        this.ranges = [{
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
        this.pointers2 = [{
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
    }
    Sf3_7Component.prototype.ngOnInit = function () {
        this.changeSF3_7();
        // this.dataSF1()
    };
    Sf3_7Component.prototype.gauge = function () {
        if (document.getElementById('sample-data')) {
            var value1 = this.velocidadSF3_7;
            this.osr1_1.axes[0].pointers[0].animation.enable = true;
            this.osr1_1.setPointerValue(0, 0, value1);
            this.osr1_1.setAnnotationValue(0, 0, this.osr1_1.axes[0].annotations[0].content);
        }
        else {
            clearInterval(this.tooltipInterval1);
        }
    };
    Sf3_7Component.prototype.test = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-data')) {
                var value1 = _this.velocidadSF3_7;
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 1000);
    };
    Sf3_7Component.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-dataSF3_7')) {
                var value1 = _this.velocidadSF3_7;
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
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                // this.usa.axes[0].pointers[0].animation.enable = true;
                // this.uk.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                // this.usa.setPointerValue(0, 0, value2);
                // this.uk.setPointerValue(0, 0, value3);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
                // this.usa.setAnnotationValue(0, 0, this.usa.axes[0].annotations[0].content);
                // this.uk.setAnnotationValue(0, 0, this.uk.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 2000);
    };
    Sf3_7Component.prototype.changeSF3_7 = function () {
        var _this = this;
        this.apiGetComp.GetJson(this.api.apiUrlNode1 + '/SF3_7')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('No hay data SF3_7');
                res.SF3_7_VelocidadActualMotor = 0;
                res.SF3_7_CorrienteActualMotor = 0;
                res.SF3_7_PotenciaActualMotor = 0;
                res.SF3_7_KWh = 0;
            }
            else {
                _this.TeamSF3_7 = res;
                // this.dataSF1_1 = TeamSF1_1
                // this.velocidadSF3_7 = this.decimalPipe.transform(this.TeamSF3_7?.SF3_7_VelocidadActualMotor) ?? 0;
                // console.log('SF1_1:', this.TeamSF3_7);
                _this.velocidadSF3_7 = (_b = (_a = _this.TeamSF3_7) === null || _a === void 0 ? void 0 : _a.SF3_7_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        });
    };
    Sf3_7Component.prototype.dataSF3_7 = function () {
        var _this = this;
        if (this.intervalSubscriptionItems) {
            this.intervalSubscriptionItems.unsubscribe();
        }
        this.intervalSubscriptionItems = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(3000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.apiGetComp.GetJson(_this.api.apiUrlNode1 + '/SF3_7'); }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('no hay data SF3_7');
                res.SF3_7_VelocidadActualMotor = 0;
                res.SF3_7_CorrienteActualMotor = 0;
                res.SF3_7_PotenciaActualMotor = 0;
                res.SF3_7_KWh = 0;
            }
            else {
                _this.TeamSF3_7 = res;
                // this.dataSF1_1 = TeamSF1_1
                _this.velocidadSF3_7 = (_b = (_a = _this.TeamSF3_7) === null || _a === void 0 ? void 0 : _a.SF3_7_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        }, function (error) { return (console.log(error)); }, function () { return console.log('Error..!'); });
    };
    Sf3_7Component.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    Sf3_7Component.ɵfac = function Sf3_7Component_Factory(t) { return new (t || Sf3_7Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"])); };
    Sf3_7Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Sf3_7Component, selectors: [["ngx-sf3_7"]], viewQuery: function Sf3_7Component_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.osr1_1 = _t.first);
        } }, decls: 28, vars: 12, consts: [["id", "sample-dataSF3_7", 2, "display", "block", "height", "150px"], ["gaugeSF3_7", ""], ["startAngle", "260", "endAngle", "100", 3, "majorTicks", "minorTicks", "labelStyle", "lineStyle", "ranges", "pointers"], ["angle", "180", "radius", "30%", "zIndex", "1", 3, "content"], [2, "margin-left", "23%", "margin-top", "-0%", "padding-top", "-40px", "padding-block-start", "-98px"], [2, "padding", "0.5625em 0.625em", "margin-top", "-0.10rem"], [2, "padding", "0.5625em 0.625em", "margin-top", "-1.9rem"]], template: function Sf3_7Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " SF3_7 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ejs-circulargauge", 0, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "e-axes");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "e-axis", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "e-annotations");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "e-annotation", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "pre", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Corriente:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Potencia:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Voltaje:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Consumo:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("majorTicks", ctx.majorTicks)("labelStyle", ctx.labelStyle)("lineStyle", ctx.lineStyle)("ranges", ctx.ranges)("pointers", ctx.pointers2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx.annotation);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("  ", ctx.TeamSF3_7 == null ? null : ctx.TeamSF3_7.SF3_7_CorrienteActualMotor, "  \u00A0 A");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("   ", ctx.TeamSF3_7 == null ? null : ctx.TeamSF3_7.SF3_7_PotenciaActualMotor, " \u00A0 W");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", ctx.TeamSF3_7 == null ? null : ctx.TeamSF3_7.SF3_7_voltaje, "   VAC ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 10, ctx.TeamSF3_7 == null ? null : ctx.TeamSF3_7.SF3_7_KWh), "  \u00A0 kwh ");
        } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["CircularGaugeComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxesDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxisDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationsDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3pvbmUtdGVhbXMvdGVhbS1zZi9zZjMuNy9zZjMuNy5jb21wb25lbnQuc2NzcyJ9 */"] });
    return Sf3_7Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Sf3_7Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-sf3_7',
                templateUrl: './sf3.7.component.html',
                styleUrls: ['./sf3.7.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"] }]; }, { osr1_1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gaugeSF3_7']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/zone-teams/team-sf/sf3.8/sf3.8.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-sf/sf3.8/sf3.8.component.ts ***!
  \*******************************************************************/
/*! exports provided: Sf3_8Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sf3_8Component", function() { return Sf3_8Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-angular-circulargauge */ "./node_modules/@syncfusion/ej2-angular-circulargauge/__ivy_ngcc__/@syncfusion/ej2-angular-circulargauge.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");















var _c0 = ["gaugeSF3_8"];
var Sf3_8Component = /** @class */ (function () {
    function Sf3_8Component(http, api, apiGetComp, decimalPipe) {
        this.http = http;
        this.api = api;
        this.apiGetComp = apiGetComp;
        this.decimalPipe = decimalPipe;
        this.alive = true;
        this.TeamSF3_8 = {
            SF3_8_VelocidadActualMotor: 0,
            SF3_8_CorrienteActualMotor: 0,
            SF3_8_PotenciaActualMotor: 0,
            SF3_8_TorqueActualMotor: 0,
            SF3_8_KWh: 0,
            SF3_8_voltaje: 0
        };
        this.velocidadSF3_8 = 0;
        // custom code end
        this.majorTicks = { width: 0 };
        this.lineStyle = { width: 0 };
        this.minorTicks = { width: 0 };
        //Initializing LabelStyle
        this.labelStyle = { font: { size: '0' } };
        //Initializing Annotation
        this.annotation = "<div id='templateWrap'>" +
            "<div class='fontDes' style='width: 16px;height: 16px;margin-top: 4px;'>${pointers[0].value} rpm</div></div></div>";
        this.annotation2 = "<div class='fontDes1'>Germany</div>";
        this.annotation3 = "<div class='fontDes1'>USA</div>";
        this.annotation4 = "<div class='fontDes1'>UK</div>";
        this.annotation5 = "<div id='templateWrap'>" +
            "<div class='fontDes'>${pointers[0].value}%</div></div></div>";
        // public annotation6: string = `<div id='templateWrap'><div class='fontDes3'>cantidad ${this.dataSF1_1?.SF1_1_VelocidadActualMotor}</div></div></div>`;
        this.germanyAnnotation = [{
                content: "<div id='templateWrap'>"
                    + "<img style='width: 16px;height: 16px;margin-top: 4px;' src='./assets/circular-gauge/images/positive.png' />"
                    + "<div style='float: right;color: #424242;font-size: 10px;'>${pointers[0].value}%</div></div></div>",
                angle: 180,
                radius: '130%'
            }, {
                content: '<div style="color:#9E9E9E;font-size:16px;font-family:Roboto">Germany</div>',
                angle: 180,
                radius: '65%'
            }];
        //Color gauge
        this.ranges = [{
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
        this.pointers2 = [{
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
    }
    Sf3_8Component.prototype.ngOnInit = function () {
        this.changeSF3_8();
        this.dataSF3_8();
    };
    Sf3_8Component.prototype.gauge = function () {
        if (document.getElementById('sample-data')) {
            var value1 = this.velocidadSF3_8;
            this.osr1_1.axes[0].pointers[0].animation.enable = true;
            this.osr1_1.setPointerValue(0, 0, value1);
            this.osr1_1.setAnnotationValue(0, 0, this.osr1_1.axes[0].annotations[0].content);
        }
        else {
            clearInterval(this.tooltipInterval1);
        }
    };
    Sf3_8Component.prototype.test = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-data')) {
                var value1 = _this.velocidadSF3_8;
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 1000);
    };
    Sf3_8Component.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-dataSF3_8')) {
                var value1 = _this.velocidadSF3_8;
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
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                // this.usa.axes[0].pointers[0].animation.enable = true;
                // this.uk.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                // this.usa.setPointerValue(0, 0, value2);
                // this.uk.setPointerValue(0, 0, value3);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
                // this.usa.setAnnotationValue(0, 0, this.usa.axes[0].annotations[0].content);
                // this.uk.setAnnotationValue(0, 0, this.uk.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 2000);
    };
    Sf3_8Component.prototype.changeSF3_8 = function () {
        var _this = this;
        this.apiGetComp.GetJson(this.api.apiUrlNode1 + '/SF3_8')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('No hay data SF3_8');
                res.SF3_8_VelocidadActualMotor = 0;
                res.SF3_8_CorrienteActualMotor = 0;
                res.SF3_8_PotenciaActualMotor = 0;
                res.SF3_8_KWh = 0;
            }
            else {
                _this.TeamSF3_8 = res;
                // this.dataSF1_1 = TeamSF1_1
                // this.velocidadSF3_8 = this.decimalPipe.transform(this.TeamSF3_8?.SF3_8_VelocidadActualMotor) ?? 0;
                // console.log('SF1_1:', this.TeamSF3_8);
                _this.velocidadSF3_8 = (_b = (_a = _this.TeamSF3_8) === null || _a === void 0 ? void 0 : _a.SF3_8_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        });
    };
    Sf3_8Component.prototype.dataSF3_8 = function () {
        var _this = this;
        if (this.intervalSubscriptionItems) {
            this.intervalSubscriptionItems.unsubscribe();
        }
        this.intervalSubscriptionItems = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(10000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.apiGetComp.GetJson(_this.api.apiUrlNode1 + '/SF3_8'); }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('no hay data SF3_8');
                res.SF3_8_VelocidadActualMotor = 0;
                res.SF3_8_CorrienteActualMotor = 0;
                res.SF3_8_PotenciaActualMotor = 0;
                res.SF3_8_KWh = 0;
            }
            else {
                _this.TeamSF3_8 = res;
                // this.dataSF1_1 = TeamSF1_1
                _this.velocidadSF3_8 = (_b = (_a = _this.TeamSF3_8) === null || _a === void 0 ? void 0 : _a.SF3_8_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        }, function (error) { return (console.log(error)); }, function () { return console.log('Error..!'); });
    };
    Sf3_8Component.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    Sf3_8Component.ɵfac = function Sf3_8Component_Factory(t) { return new (t || Sf3_8Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"])); };
    Sf3_8Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Sf3_8Component, selectors: [["ngx-sf3_8"]], viewQuery: function Sf3_8Component_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.osr1_1 = _t.first);
        } }, decls: 28, vars: 12, consts: [["id", "sample-dataSF3_8", 2, "display", "block", "height", "150px"], ["gaugeSF3_8", ""], ["startAngle", "260", "endAngle", "100", 3, "majorTicks", "minorTicks", "labelStyle", "lineStyle", "ranges", "pointers"], ["angle", "180", "radius", "30%", "zIndex", "1", 3, "content"], [2, "margin-left", "23%", "margin-top", "-0%", "padding-top", "-40px", "padding-block-start", "-98px"], [2, "padding", "0.5625em 0.625em", "margin-top", "-0.10rem"], [2, "padding", "0.5625em 0.625em", "margin-top", "-1.9rem"]], template: function Sf3_8Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " SF3_8 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ejs-circulargauge", 0, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "e-axes");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "e-axis", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "e-annotations");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "e-annotation", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "pre", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Corriente:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Potencia:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Voltaje:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Consumo:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("majorTicks", ctx.majorTicks)("labelStyle", ctx.labelStyle)("lineStyle", ctx.lineStyle)("ranges", ctx.ranges)("pointers", ctx.pointers2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx.annotation);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("  ", ctx.TeamSF3_8 == null ? null : ctx.TeamSF3_8.SF3_8_CorrienteActualMotor, "  \u00A0 A");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("   ", ctx.TeamSF3_8 == null ? null : ctx.TeamSF3_8.SF3_8_PotenciaActualMotor, " \u00A0 W");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", ctx.TeamSF3_8 == null ? null : ctx.TeamSF3_8.SF3_8_voltaje, "   VAC ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 10, ctx.TeamSF3_8 == null ? null : ctx.TeamSF3_8.SF3_8_KWh), "  \u00A0 kwh ");
        } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["CircularGaugeComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxesDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxisDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationsDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3pvbmUtdGVhbXMvdGVhbS1zZi9zZjMuOC9zZjMuOC5jb21wb25lbnQuc2NzcyJ9 */"] });
    return Sf3_8Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Sf3_8Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-sf3_8',
                templateUrl: './sf3.8.component.html',
                styleUrls: ['./sf3.8.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"] }]; }, { osr1_1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gaugeSF3_8']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/zone-teams/team-sf/sf3.9/sf3.9.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-sf/sf3.9/sf3.9.component.ts ***!
  \*******************************************************************/
/*! exports provided: Sf3_9Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sf3_9Component", function() { return Sf3_9Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-angular-circulargauge */ "./node_modules/@syncfusion/ej2-angular-circulargauge/__ivy_ngcc__/@syncfusion/ej2-angular-circulargauge.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");















var _c0 = ["gaugeSF3_9"];
var Sf3_9Component = /** @class */ (function () {
    function Sf3_9Component(http, api, apiGetComp, decimalPipe) {
        this.http = http;
        this.api = api;
        this.apiGetComp = apiGetComp;
        this.decimalPipe = decimalPipe;
        this.alive = true;
        this.TeamSF3_9 = {
            SF3_9_VelocidadActualMotor: 0,
            SF3_9_CorrienteActualMotor: 0,
            SF3_9_PotenciaActualMotor: 0,
            SF3_9_TorqueActualMotor: 0,
            SF3_9_KWh: 0,
            SF3_9_voltaje: 0
        };
        this.velocidadSF3_9 = 0;
        // custom code end
        this.majorTicks = { width: 0 };
        this.lineStyle = { width: 0 };
        this.minorTicks = { width: 0 };
        //Initializing LabelStyle
        this.labelStyle = { font: { size: '0' } };
        //Initializing Annotation
        this.annotation = "<div id='templateWrap'>" +
            "<div class='fontDes' style='width: 16px;height: 16px;margin-top: 4px;'>${pointers[0].value} rpm</div></div></div>";
        this.annotation2 = "<div class='fontDes1'>Germany</div>";
        this.annotation3 = "<div class='fontDes1'>USA</div>";
        this.annotation4 = "<div class='fontDes1'>UK</div>";
        this.annotation5 = "<div id='templateWrap'>" +
            "<div class='fontDes'>${pointers[0].value}%</div></div></div>";
        // public annotation6: string = `<div id='templateWrap'><div class='fontDes3'>cantidad ${this.dataSF1_1?.SF1_1_VelocidadActualMotor}</div></div></div>`;
        this.germanyAnnotation = [{
                content: "<div id='templateWrap'>"
                    + "<img style='width: 16px;height: 16px;margin-top: 4px;' src='./assets/circular-gauge/images/positive.png' />"
                    + "<div style='float: right;color: #424242;font-size: 10px;'>${pointers[0].value}%</div></div></div>",
                angle: 180,
                radius: '130%'
            }, {
                content: '<div style="color:#9E9E9E;font-size:16px;font-family:Roboto">Germany</div>',
                angle: 180,
                radius: '65%'
            }];
        //Color gauge
        this.ranges = [{
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
        this.pointers2 = [{
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
    }
    Sf3_9Component.prototype.ngOnInit = function () {
        this.changeSF3_9();
        this.dataSF3_9();
    };
    Sf3_9Component.prototype.gauge = function () {
        if (document.getElementById('sample-data')) {
            var value1 = this.velocidadSF3_9;
            this.osr1_1.axes[0].pointers[0].animation.enable = true;
            this.osr1_1.setPointerValue(0, 0, value1);
            this.osr1_1.setAnnotationValue(0, 0, this.osr1_1.axes[0].annotations[0].content);
        }
        else {
            clearInterval(this.tooltipInterval1);
        }
    };
    Sf3_9Component.prototype.test = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-data')) {
                var value1 = _this.velocidadSF3_9;
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 1000);
    };
    Sf3_9Component.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-dataSF3_9')) {
                var value1 = _this.velocidadSF3_9;
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
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                // this.usa.axes[0].pointers[0].animation.enable = true;
                // this.uk.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                // this.usa.setPointerValue(0, 0, value2);
                // this.uk.setPointerValue(0, 0, value3);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
                // this.usa.setAnnotationValue(0, 0, this.usa.axes[0].annotations[0].content);
                // this.uk.setAnnotationValue(0, 0, this.uk.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 2000);
    };
    Sf3_9Component.prototype.changeSF3_9 = function () {
        var _this = this;
        this.apiGetComp.GetJson(this.api.apiUrlNode1 + '/SF3_9')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('No hay data SF3_9');
                res.SF3_9_VelocidadActualMotor = 0;
                res.SF3_9_CorrienteActualMotor = 0;
                res.SF3_9_PotenciaActualMotor = 0;
                res.SF3_9_KWh = 0;
            }
            else {
                _this.TeamSF3_9 = res;
                // this.dataSF1_1 = TeamSF1_1
                // this.velocidadSF3_9 = this.decimalPipe.transform(this.TeamSF3_9?.SF3_9_VelocidadActualMotor) ?? 0;
                // console.log('SF1_1:', this.TeamSF3_9);
                _this.velocidadSF3_9 = (_b = (_a = _this.TeamSF3_9) === null || _a === void 0 ? void 0 : _a.SF3_9_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        });
    };
    Sf3_9Component.prototype.dataSF3_9 = function () {
        var _this = this;
        if (this.intervalSubscriptionItems) {
            this.intervalSubscriptionItems.unsubscribe();
        }
        this.intervalSubscriptionItems = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(10000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.apiGetComp.GetJson(_this.api.apiUrlNode1 + '/SF3_9'); }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('no hay data SF3_9');
                res.SF3_9_VelocidadActualMotor = 0;
                res.SF3_9_CorrienteActualMotor = 0;
                res.SF3_9_PotenciaActualMotor = 0;
                res.SF3_9_KWh = 0;
            }
            else {
                _this.TeamSF3_9 = res;
                // this.dataSF1_1 = TeamSF1_1
                _this.velocidadSF3_9 = (_b = (_a = _this.TeamSF3_9) === null || _a === void 0 ? void 0 : _a.SF3_9_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        }, function (error) { return (console.log(error)); }, function () { return console.log('Error..!'); });
    };
    Sf3_9Component.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    Sf3_9Component.ɵfac = function Sf3_9Component_Factory(t) { return new (t || Sf3_9Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"])); };
    Sf3_9Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Sf3_9Component, selectors: [["ngx-sf3_9"]], viewQuery: function Sf3_9Component_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.osr1_1 = _t.first);
        } }, decls: 28, vars: 12, consts: [["id", "sample-dataSF3_9", 2, "display", "block", "height", "150px"], ["gaugeSF3_9", ""], ["startAngle", "260", "endAngle", "100", 3, "majorTicks", "minorTicks", "labelStyle", "lineStyle", "ranges", "pointers"], ["angle", "180", "radius", "30%", "zIndex", "1", 3, "content"], [2, "margin-left", "23%", "margin-top", "-0%", "padding-top", "-40px", "padding-block-start", "-98px"], [2, "padding", "0.5625em 0.625em", "margin-top", "-0.10rem"], [2, "padding", "0.5625em 0.625em", "margin-top", "-1.9rem"]], template: function Sf3_9Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " SF3_9 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ejs-circulargauge", 0, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "e-axes");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "e-axis", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "e-annotations");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "e-annotation", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "pre", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Corriente:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Potencia:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Voltaje:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Consumo:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("majorTicks", ctx.majorTicks)("labelStyle", ctx.labelStyle)("lineStyle", ctx.lineStyle)("ranges", ctx.ranges)("pointers", ctx.pointers2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx.annotation);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("  ", ctx.TeamSF3_9 == null ? null : ctx.TeamSF3_9.SF3_9_CorrienteActualMotor, "  \u00A0 A");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("   ", ctx.TeamSF3_9 == null ? null : ctx.TeamSF3_9.SF3_9_PotenciaActualMotor, " \u00A0 W");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", ctx.TeamSF3_9 == null ? null : ctx.TeamSF3_9.SF3_9_voltaje, "   VAC ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 10, ctx.TeamSF3_9 == null ? null : ctx.TeamSF3_9.SF3_9_KWh), "  \u00A0 kwh ");
        } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["CircularGaugeComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxesDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxisDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationsDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3pvbmUtdGVhbXMvdGVhbS1zZi9zZjMuOS9zZjMuOS5jb21wb25lbnQuc2NzcyJ9 */"] });
    return Sf3_9Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Sf3_9Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-sf3_9',
                templateUrl: './sf3.9.component.html',
                styleUrls: ['./sf3.9.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"] }]; }, { osr1_1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gaugeSF3_9']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/zone-teams/team-sf/team-sf-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-sf/team-sf-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: TeamSFRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamSFRoutingModule", function() { return TeamSFRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _team_sf_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./team-sf.component */ "./src/app/pages/zone-teams/team-sf/team-sf.component.ts");





var routes = [
    {
        path: '',
        component: _team_sf_component__WEBPACK_IMPORTED_MODULE_2__["TeamSfComponent"],
        children: [
        // {
        //   path: 'sfc',
        //   component: SfcComponent,
        // },
        ]
    }
];
var TeamSFRoutingModule = /** @class */ (function () {
    function TeamSFRoutingModule() {
    }
    TeamSFRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TeamSFRoutingModule });
    TeamSFRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TeamSFRoutingModule_Factory(t) { return new (t || TeamSFRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return TeamSFRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TeamSFRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamSFRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/zone-teams/team-sf/team-sf.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-sf/team-sf.component.ts ***!
  \***************************************************************/
/*! exports provided: TeamSfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamSfComponent", function() { return TeamSfComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");
/* harmony import */ var _sf1_4_sf1_4_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sf1.4/sf1.4.component */ "./src/app/pages/zone-teams/team-sf/sf1.4/sf1.4.component.ts");
/* harmony import */ var _sf1_5_sf1_5_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sf1.5/sf1.5.component */ "./src/app/pages/zone-teams/team-sf/sf1.5/sf1.5.component.ts");
/* harmony import */ var _sf1_6_sf1_6_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sf1.6/sf1.6.component */ "./src/app/pages/zone-teams/team-sf/sf1.6/sf1.6.component.ts");
/* harmony import */ var _sf1_7_sf1_7_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sf1.7/sf1.7.component */ "./src/app/pages/zone-teams/team-sf/sf1.7/sf1.7.component.ts");
/* harmony import */ var _sf1_8_sf1_8_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sf1.8/sf1.8.component */ "./src/app/pages/zone-teams/team-sf/sf1.8/sf1.8.component.ts");
/* harmony import */ var _sf1_9_sf1_9_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sf1.9/sf1.9.component */ "./src/app/pages/zone-teams/team-sf/sf1.9/sf1.9.component.ts");
/* harmony import */ var _sf1_10_sf1_10_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sf1.10/sf1.10.component */ "./src/app/pages/zone-teams/team-sf/sf1.10/sf1.10.component.ts");
/* harmony import */ var _sf1_11_sf1_11_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sf1.11/sf1.11.component */ "./src/app/pages/zone-teams/team-sf/sf1.11/sf1.11.component.ts");
/* harmony import */ var _sf1_12_sf1_12_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sf1.12/sf1.12.component */ "./src/app/pages/zone-teams/team-sf/sf1.12/sf1.12.component.ts");
/* harmony import */ var _sf3_4_sf3_4_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sf3.4/sf3.4.component */ "./src/app/pages/zone-teams/team-sf/sf3.4/sf3.4.component.ts");
/* harmony import */ var _sf3_5_sf3_5_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sf3.5/sf3.5.component */ "./src/app/pages/zone-teams/team-sf/sf3.5/sf3.5.component.ts");
/* harmony import */ var _sf3_6_sf3_6_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./sf3.6/sf3.6.component */ "./src/app/pages/zone-teams/team-sf/sf3.6/sf3.6.component.ts");
/* harmony import */ var _sf3_7_sf3_7_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sf3.7/sf3.7.component */ "./src/app/pages/zone-teams/team-sf/sf3.7/sf3.7.component.ts");
/* harmony import */ var _sf3_8_sf3_8_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./sf3.8/sf3.8.component */ "./src/app/pages/zone-teams/team-sf/sf3.8/sf3.8.component.ts");
/* harmony import */ var _sf3_9_sf3_9_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./sf3.9/sf3.9.component */ "./src/app/pages/zone-teams/team-sf/sf3.9/sf3.9.component.ts");
/* harmony import */ var _sf3_10_sf3_10_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./sf3.10/sf3.10.component */ "./src/app/pages/zone-teams/team-sf/sf3.10/sf3.10.component.ts");
/* harmony import */ var _sf3_11_sf3_11_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./sf3.11/sf3.11.component */ "./src/app/pages/zone-teams/team-sf/sf3.11/sf3.11.component.ts");


























var TeamSfComponent = /** @class */ (function () {
    function TeamSfComponent(http, router, api) {
        this.http = http;
        this.router = router;
        this.api = api;
        this.alive = true;
    }
    TeamSfComponent.prototype.ngOnInit = function () { };
    TeamSfComponent.prototype.back = function () {
        this.router.navigate(["/pages/conveyor/energyZone"]);
        return false;
    };
    TeamSfComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    TeamSfComponent.ɵfac = function TeamSfComponent_Factory(t) { return new (t || TeamSfComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"])); };
    TeamSfComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeamSfComponent, selectors: [["ngx-teamSf"]], decls: 45, vars: 0, consts: [[1, "navigation"], ["href", "#", "aria-label", "Back", 1, "link", "back-link", 3, "click"], ["icon", "arrow-back"], [1, "h"], [1, "col-sm-12"], [1, "row"], [1, "col-sm-3"]], template: function TeamSfComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamSfComponent_Template_a_click_4_listener() { return ctx.back(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nb-icon", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "SECURITY FEED");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "ngx-sf1_4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "ngx-sf1_5");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "ngx-sf1_6");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "ngx-sf1_7");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "ngx-sf1_8");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "ngx-sf1_9");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "ngx-sf1_10");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "ngx-sf1_11");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "ngx-sf1_12");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "ngx-sf3_4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "ngx-sf3_5");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "ngx-sf3_6");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "ngx-sf3_7");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "ngx-sf3_8");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "ngx-sf3_9");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "ngx-sf3_10");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "ngx-sf3_11");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardBodyComponent"], _sf1_4_sf1_4_component__WEBPACK_IMPORTED_MODULE_5__["Sf1_4Component"], _sf1_5_sf1_5_component__WEBPACK_IMPORTED_MODULE_6__["Sf1_5Component"], _sf1_6_sf1_6_component__WEBPACK_IMPORTED_MODULE_7__["Sf1_6Component"], _sf1_7_sf1_7_component__WEBPACK_IMPORTED_MODULE_8__["Sf1_7Component"], _sf1_8_sf1_8_component__WEBPACK_IMPORTED_MODULE_9__["Sf1_8Component"], _sf1_9_sf1_9_component__WEBPACK_IMPORTED_MODULE_10__["Sf1_9Component"], _sf1_10_sf1_10_component__WEBPACK_IMPORTED_MODULE_11__["Sf1_10Component"], _sf1_11_sf1_11_component__WEBPACK_IMPORTED_MODULE_12__["Sf1_11Component"], _sf1_12_sf1_12_component__WEBPACK_IMPORTED_MODULE_13__["Sf1_12Component"], _sf3_4_sf3_4_component__WEBPACK_IMPORTED_MODULE_14__["Sf3_4Component"], _sf3_5_sf3_5_component__WEBPACK_IMPORTED_MODULE_15__["Sf3_5Component"], _sf3_6_sf3_6_component__WEBPACK_IMPORTED_MODULE_16__["Sf3_6Component"], _sf3_7_sf3_7_component__WEBPACK_IMPORTED_MODULE_17__["Sf3_7Component"], _sf3_8_sf3_8_component__WEBPACK_IMPORTED_MODULE_18__["Sf3_8Component"], _sf3_9_sf3_9_component__WEBPACK_IMPORTED_MODULE_19__["Sf3_9Component"], _sf3_10_sf3_10_component__WEBPACK_IMPORTED_MODULE_20__["Sf3_10Component"], _sf3_11_sf3_11_component__WEBPACK_IMPORTED_MODULE_21__["Sf3_11Component"]], styles: [".contenedor[_ngcontent-%COMP%] {\n            position: relative;\n            display: inline-block;\n            text-align: center;\n          }\n\n          .centrado[_ngcontent-%COMP%] {\n            position: absolute;\n            font-size: 10px;\n            font-family: cursive;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n          }\n\n          .h[_ngcontent-%COMP%] {\n            margin: -1.8rem 0.19rem 0rem 2.7rem;\n          }"] });
    return TeamSfComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamSfComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "ngx-teamSf",
                template: "\n    <router-outlet>\n      <nb-card>\n        <nb-card-header>\n          <nav class=\"navigation\">\n            <a\n              href=\"#\"\n              (click)=\"back()\"\n              class=\"link back-link\"\n              aria-label=\"Back\"\n            >\n              <nb-icon icon=\"arrow-back\"></nb-icon>\n            </a>\n            <h5 class=\"h\">SECURITY FEED</h5>\n          </nav>\n        </nb-card-header>\n        <!-- <nb-card-body>\n          <div class=\"contenedor\">\n            <img\n              src=\"./assets/img/construction.gif\"\n              class=\"align-self-center\"\n              width=\"100%\"\n              height=\"80%\"\n              style=\"margin-top: -140px; margin-left: 128px\"\n            />\n            <div class=\"centrado\">\n              <font size=\"4\">Sitio en Construcci\u00F3n</font>\n            </div>\n          </div>\n        </nb-card-body> -->\n\n          <nb-card-body>\n            <div class=\"col-sm-12\">\n              <div class=\"row\">\n                <div class=\"col-sm-3\">\n                  <ngx-sf1_4></ngx-sf1_4>\n                </div>\n                <div class=\"col-sm-3\">\n                  <ngx-sf1_5></ngx-sf1_5>\n                </div>\n                <div class=\"col-sm-3\">\n                  <ngx-sf1_6></ngx-sf1_6>\n                </div>\n                <div class=\"col-sm-3\">\n                  <ngx-sf1_7></ngx-sf1_7>\n                </div>\n                <div class=\"col-sm-3\">\n                  <ngx-sf1_8></ngx-sf1_8>\n                </div>\n                <div class=\"col-sm-3\">\n                  <ngx-sf1_9></ngx-sf1_9>\n                </div>\n                <div class=\"col-sm-3\">\n                  <ngx-sf1_10></ngx-sf1_10>\n                </div>\n                <div class=\"col-sm-3\">\n                  <ngx-sf1_11></ngx-sf1_11>\n                </div>\n                <div class=\"col-sm-3\">\n                  <ngx-sf1_12></ngx-sf1_12>\n                </div>\n                \n                <div class=\"col-sm-3\">\n                  <ngx-sf3_4></ngx-sf3_4>\n                </div>\n                <div class=\"col-sm-3\">\n                  <ngx-sf3_5></ngx-sf3_5>\n                </div>\n                <div class=\"col-sm-3\">\n                  <ngx-sf3_6></ngx-sf3_6>\n                </div>\n                <div class=\"col-sm-3\">\n                  <ngx-sf3_7></ngx-sf3_7>\n                </div>\n                <div class=\"col-sm-3\">\n                  <ngx-sf3_8></ngx-sf3_8>\n                </div>\n                <div class=\"col-sm-3\">\n                  <ngx-sf3_9></ngx-sf3_9>\n                </div>\n                <div class=\"col-sm-3\">\n                  <ngx-sf3_10></ngx-sf3_10>\n                </div>\n                <div class=\"col-sm-3\">\n                  <ngx-sf3_11></ngx-sf3_11>\n                </div>\n              </div>\n            </div>\n          </nb-card-body>\n        \n\n        <style>\n          .contenedor {\n            position: relative;\n            display: inline-block;\n            text-align: center;\n          }\n\n          .centrado {\n            position: absolute;\n            font-size: 10px;\n            font-family: cursive;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n          }\n\n          .h {\n            margin: -1.8rem 0.19rem 0rem 2.7rem;\n          }\n        </style>\n      </nb-card>\n    </router-outlet>\n  ",
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/zone-teams/team-sf/team-sf.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-sf/team-sf.module.ts ***!
  \************************************************************/
/*! exports provided: TeamSFModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamSFModule", function() { return TeamSFModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");
/* harmony import */ var _team_sf_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./team-sf-routing.module */ "./src/app/pages/zone-teams/team-sf/team-sf-routing.module.ts");
/* harmony import */ var _team_sf_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./team-sf.component */ "./src/app/pages/zone-teams/team-sf/team-sf.component.ts");
/* harmony import */ var _sf1_sf1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sf1/sf1.component */ "./src/app/pages/zone-teams/team-sf/sf1/sf1.component.ts");
/* harmony import */ var _sf1_4_sf1_4_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sf1.4/sf1.4.component */ "./src/app/pages/zone-teams/team-sf/sf1.4/sf1.4.component.ts");
/* harmony import */ var _sf1_5_sf1_5_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sf1.5/sf1.5.component */ "./src/app/pages/zone-teams/team-sf/sf1.5/sf1.5.component.ts");
/* harmony import */ var _sf1_6_sf1_6_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sf1.6/sf1.6.component */ "./src/app/pages/zone-teams/team-sf/sf1.6/sf1.6.component.ts");
/* harmony import */ var _sf1_7_sf1_7_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sf1.7/sf1.7.component */ "./src/app/pages/zone-teams/team-sf/sf1.7/sf1.7.component.ts");
/* harmony import */ var _sf1_8_sf1_8_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sf1.8/sf1.8.component */ "./src/app/pages/zone-teams/team-sf/sf1.8/sf1.8.component.ts");
/* harmony import */ var _sf1_9_sf1_9_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sf1.9/sf1.9.component */ "./src/app/pages/zone-teams/team-sf/sf1.9/sf1.9.component.ts");
/* harmony import */ var _sf1_10_sf1_10_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sf1.10/sf1.10.component */ "./src/app/pages/zone-teams/team-sf/sf1.10/sf1.10.component.ts");
/* harmony import */ var _sf1_11_sf1_11_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sf1.11/sf1.11.component */ "./src/app/pages/zone-teams/team-sf/sf1.11/sf1.11.component.ts");
/* harmony import */ var _sf1_12_sf1_12_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sf1.12/sf1.12.component */ "./src/app/pages/zone-teams/team-sf/sf1.12/sf1.12.component.ts");
/* harmony import */ var _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @syncfusion/ej2-angular-circulargauge */ "./node_modules/@syncfusion/ej2-angular-circulargauge/__ivy_ngcc__/@syncfusion/ej2-angular-circulargauge.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sf3_4_sf3_4_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sf3.4/sf3.4.component */ "./src/app/pages/zone-teams/team-sf/sf3.4/sf3.4.component.ts");
/* harmony import */ var _sf3_5_sf3_5_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./sf3.5/sf3.5.component */ "./src/app/pages/zone-teams/team-sf/sf3.5/sf3.5.component.ts");
/* harmony import */ var _sf3_6_sf3_6_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./sf3.6/sf3.6.component */ "./src/app/pages/zone-teams/team-sf/sf3.6/sf3.6.component.ts");
/* harmony import */ var _sf3_7_sf3_7_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./sf3.7/sf3.7.component */ "./src/app/pages/zone-teams/team-sf/sf3.7/sf3.7.component.ts");
/* harmony import */ var _sf3_8_sf3_8_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./sf3.8/sf3.8.component */ "./src/app/pages/zone-teams/team-sf/sf3.8/sf3.8.component.ts");
/* harmony import */ var _sf3_9_sf3_9_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./sf3.9/sf3.9.component */ "./src/app/pages/zone-teams/team-sf/sf3.9/sf3.9.component.ts");
/* harmony import */ var _sf3_10_sf3_10_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./sf3.10/sf3.10.component */ "./src/app/pages/zone-teams/team-sf/sf3.10/sf3.10.component.ts");
/* harmony import */ var _sf3_11_sf3_11_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./sf3.11/sf3.11.component */ "./src/app/pages/zone-teams/team-sf/sf3.11/sf3.11.component.ts");


























var TeamSFModule = /** @class */ (function () {
    function TeamSFModule() {
    }
    TeamSFModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TeamSFModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]] });
    TeamSFModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TeamSFModule_Factory(t) { return new (t || TeamSFModule)(); }, providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _team_sf_routing_module__WEBPACK_IMPORTED_MODULE_3__["TeamSFRoutingModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbActionsModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbInputModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbTabsetModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbUserModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbRadioModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSelectModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbListModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSpinnerModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDatepickerModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCheckboxModule"],
                _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_15__["CircularGaugeAllModule"],
            ]] });
    return TeamSFModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TeamSFModule, { declarations: [_team_sf_component__WEBPACK_IMPORTED_MODULE_4__["TeamSfComponent"], _sf1_sf1_component__WEBPACK_IMPORTED_MODULE_5__["Sf1Component"], _sf1_4_sf1_4_component__WEBPACK_IMPORTED_MODULE_6__["Sf1_4Component"], _sf1_5_sf1_5_component__WEBPACK_IMPORTED_MODULE_7__["Sf1_5Component"], _sf1_6_sf1_6_component__WEBPACK_IMPORTED_MODULE_8__["Sf1_6Component"], _sf1_7_sf1_7_component__WEBPACK_IMPORTED_MODULE_9__["Sf1_7Component"],
        _sf1_8_sf1_8_component__WEBPACK_IMPORTED_MODULE_10__["Sf1_8Component"], _sf1_9_sf1_9_component__WEBPACK_IMPORTED_MODULE_11__["Sf1_9Component"], _sf1_10_sf1_10_component__WEBPACK_IMPORTED_MODULE_12__["Sf1_10Component"], _sf1_11_sf1_11_component__WEBPACK_IMPORTED_MODULE_13__["Sf1_11Component"], _sf1_12_sf1_12_component__WEBPACK_IMPORTED_MODULE_14__["Sf1_12Component"], _sf3_4_sf3_4_component__WEBPACK_IMPORTED_MODULE_17__["Sf3_4Component"],
        _sf3_5_sf3_5_component__WEBPACK_IMPORTED_MODULE_18__["Sf3_5Component"], _sf3_6_sf3_6_component__WEBPACK_IMPORTED_MODULE_19__["Sf3_6Component"], _sf3_7_sf3_7_component__WEBPACK_IMPORTED_MODULE_20__["Sf3_7Component"], _sf3_8_sf3_8_component__WEBPACK_IMPORTED_MODULE_21__["Sf3_8Component"], _sf3_9_sf3_9_component__WEBPACK_IMPORTED_MODULE_22__["Sf3_9Component"], _sf3_10_sf3_10_component__WEBPACK_IMPORTED_MODULE_23__["Sf3_10Component"], _sf3_11_sf3_11_component__WEBPACK_IMPORTED_MODULE_24__["Sf3_11Component"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _team_sf_routing_module__WEBPACK_IMPORTED_MODULE_3__["TeamSFRoutingModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbActionsModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbInputModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbTabsetModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbUserModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbRadioModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSelectModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbListModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSpinnerModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDatepickerModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCheckboxModule"],
        _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_15__["CircularGaugeAllModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamSFModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_team_sf_component__WEBPACK_IMPORTED_MODULE_4__["TeamSfComponent"], _sf1_sf1_component__WEBPACK_IMPORTED_MODULE_5__["Sf1Component"], _sf1_4_sf1_4_component__WEBPACK_IMPORTED_MODULE_6__["Sf1_4Component"], _sf1_5_sf1_5_component__WEBPACK_IMPORTED_MODULE_7__["Sf1_5Component"], _sf1_6_sf1_6_component__WEBPACK_IMPORTED_MODULE_8__["Sf1_6Component"], _sf1_7_sf1_7_component__WEBPACK_IMPORTED_MODULE_9__["Sf1_7Component"],
                    _sf1_8_sf1_8_component__WEBPACK_IMPORTED_MODULE_10__["Sf1_8Component"], _sf1_9_sf1_9_component__WEBPACK_IMPORTED_MODULE_11__["Sf1_9Component"], _sf1_10_sf1_10_component__WEBPACK_IMPORTED_MODULE_12__["Sf1_10Component"], _sf1_11_sf1_11_component__WEBPACK_IMPORTED_MODULE_13__["Sf1_11Component"], _sf1_12_sf1_12_component__WEBPACK_IMPORTED_MODULE_14__["Sf1_12Component"], _sf3_4_sf3_4_component__WEBPACK_IMPORTED_MODULE_17__["Sf3_4Component"],
                    _sf3_5_sf3_5_component__WEBPACK_IMPORTED_MODULE_18__["Sf3_5Component"], _sf3_6_sf3_6_component__WEBPACK_IMPORTED_MODULE_19__["Sf3_6Component"], _sf3_7_sf3_7_component__WEBPACK_IMPORTED_MODULE_20__["Sf3_7Component"], _sf3_8_sf3_8_component__WEBPACK_IMPORTED_MODULE_21__["Sf3_8Component"], _sf3_9_sf3_9_component__WEBPACK_IMPORTED_MODULE_22__["Sf3_9Component"], _sf3_10_sf3_10_component__WEBPACK_IMPORTED_MODULE_23__["Sf3_10Component"], _sf3_11_sf3_11_component__WEBPACK_IMPORTED_MODULE_24__["Sf3_11Component"],],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _team_sf_routing_module__WEBPACK_IMPORTED_MODULE_3__["TeamSFRoutingModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbActionsModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbInputModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbTabsetModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbUserModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbRadioModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSelectModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbListModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSpinnerModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDatepickerModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCheckboxModule"],
                    _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_15__["CircularGaugeAllModule"],
                ],
                providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=team-sf-team-sf-module.js.map