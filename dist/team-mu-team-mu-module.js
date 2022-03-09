(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["team-mu-team-mu-module"],{

/***/ "./src/app/pages/zone-teams/team-mu/mu1.1/mu1.1.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-mu/mu1.1/mu1.1.component.ts ***!
  \*******************************************************************/
/*! exports provided: Mu1_1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mu1_1Component", function() { return Mu1_1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-angular-circulargauge */ "./node_modules/@syncfusion/ej2-angular-circulargauge/__ivy_ngcc__/@syncfusion/ej2-angular-circulargauge.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");















var _c0 = ["gaugeMU1_1M02"];
var Mu1_1Component = /** @class */ (function () {
    function Mu1_1Component(http, api, apiGetComp, decimalPipe) {
        this.http = http;
        this.api = api;
        this.apiGetComp = apiGetComp;
        this.decimalPipe = decimalPipe;
        this.alive = true;
        this.TeamMU1_1M02 = {
            MU1_1M02_VelocidadActualMotor: 0,
            MU1_1M02_CorrienteActualMotor: 0,
            MU1_1M02_PotenciaActualMotor: 0,
            MU1_1M02_TorqueActualMotor: 0,
            MU1_1M02_KWh: 0,
            MU1_1M02_voltaje: 0
        };
        this.velocidadMU1_1M02 = 0;
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
    Mu1_1Component.prototype.ngOnInit = function () {
        this.changeMU1_1M02();
        // this.dataSF1()
    };
    Mu1_1Component.prototype.gauge = function () {
        if (document.getElementById('sample-data')) {
            var value1 = this.velocidadMU1_1M02;
            this.osr1_1.axes[0].pointers[0].animation.enable = true;
            this.osr1_1.setPointerValue(0, 0, value1);
            this.osr1_1.setAnnotationValue(0, 0, this.osr1_1.axes[0].annotations[0].content);
        }
        else {
            clearInterval(this.tooltipInterval1);
        }
    };
    Mu1_1Component.prototype.test = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-data')) {
                var value1 = _this.velocidadMU1_1M02;
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 1000);
    };
    Mu1_1Component.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-dataMU1_1M02')) {
                var value1 = _this.velocidadMU1_1M02;
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
    Mu1_1Component.prototype.changeMU1_1M02 = function () {
        var _this = this;
        this.apiGetComp.GetJson(this.api.apiUrlNode1 + '/MU1_1M02')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('No hay data MU1_1M02');
                res.MU1_1M02_VelocidadActualMotor = 0;
                res.MU1_1M02_CorrienteActualMotor = 0;
                res.MU1_1M02_PotenciaActualMotor = 0;
                res.MU1_1M02_KWh = 0;
            }
            else {
                _this.TeamMU1_1M02 = res;
                // this.dataSF1_1 = TeamSF1_1
                _this.velocidadMU1_1M02 = (_b = (_a = _this.TeamMU1_1M02) === null || _a === void 0 ? void 0 : _a.MU1_1M02_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        });
    };
    Mu1_1Component.prototype.dataMU1_1M02 = function () {
        var _this = this;
        if (this.intervalSubscriptionItems) {
            this.intervalSubscriptionItems.unsubscribe();
        }
        this.intervalSubscriptionItems = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(3000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.apiGetComp.GetJson(_this.api.apiUrlNode1 + '/MU1_1M02'); }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('no hay data MU1_1M02');
                res.MU1_1M02_VelocidadActualMotor = 0;
                res.MU1_1M02_CorrienteActualMotor = 0;
                res.MU1_1M02_PotenciaActualMotor = 0;
                res.MU1_1M02_KWh = 0;
            }
            else {
                _this.TeamMU1_1M02 = res;
                // this.dataSF1_1 = TeamSF1_1
                _this.velocidadMU1_1M02 = (_b = (_a = _this.TeamMU1_1M02) === null || _a === void 0 ? void 0 : _a.MU1_1M02_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        }, function (error) { return (console.log(error)); }, function () { return console.log('Error..!'); });
    };
    Mu1_1Component.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    Mu1_1Component.ɵfac = function Mu1_1Component_Factory(t) { return new (t || Mu1_1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"])); };
    Mu1_1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Mu1_1Component, selectors: [["ngx-mu1_1"]], viewQuery: function Mu1_1Component_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.osr1_1 = _t.first);
        } }, decls: 28, vars: 12, consts: [["id", "sample-dataMU1_1M02", 2, "display", "block", "height", "150px"], ["gaugeMU1_1M02", ""], ["startAngle", "260", "endAngle", "100", 3, "majorTicks", "minorTicks", "labelStyle", "lineStyle", "ranges", "pointers"], ["angle", "180", "radius", "30%", "zIndex", "1", 3, "content"], [2, "margin-left", "23%", "margin-top", "-0%", "padding-top", "-40px", "padding-block-start", "-98px"], [2, "padding", "0.5625em 0.625em", "margin-top", "-0.10rem"], [2, "padding", "0.5625em 0.625em", "margin-top", "-1.9rem"]], template: function Mu1_1Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " MU1_1M02 ");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("  ", ctx.TeamMU1_1M02 == null ? null : ctx.TeamMU1_1M02.MU1_1M02_CorrienteActualMotor, "  \u00A0 A");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("   ", ctx.TeamMU1_1M02 == null ? null : ctx.TeamMU1_1M02.MU1_1M02_PotenciaActualMotor, " \u00A0 W");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", ctx.TeamMU1_1M02 == null ? null : ctx.TeamMU1_1M02.MU1_1M02_voltaje, "   VAC ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 10, ctx.TeamMU1_1M02 == null ? null : ctx.TeamMU1_1M02.MU1_1M02_KWh), "  \u00A0 kwh ");
        } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["CircularGaugeComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxesDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxisDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationsDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3pvbmUtdGVhbXMvdGVhbS1tdS9tdTEuMS9tdTEuMS5jb21wb25lbnQuc2NzcyJ9 */"] });
    return Mu1_1Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Mu1_1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-mu1_1',
                templateUrl: './mu1.1.component.html',
                styleUrls: ['./mu1.1.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"] }]; }, { osr1_1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gaugeMU1_1M02']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/zone-teams/team-mu/mu1.2/mu1.2.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-mu/mu1.2/mu1.2.component.ts ***!
  \*******************************************************************/
/*! exports provided: Mu1_2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mu1_2Component", function() { return Mu1_2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-angular-circulargauge */ "./node_modules/@syncfusion/ej2-angular-circulargauge/__ivy_ngcc__/@syncfusion/ej2-angular-circulargauge.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");















var _c0 = ["gaugeMU1_2"];
var Mu1_2Component = /** @class */ (function () {
    function Mu1_2Component(http, api, apiGetComp, decimalPipe) {
        this.http = http;
        this.api = api;
        this.apiGetComp = apiGetComp;
        this.decimalPipe = decimalPipe;
        this.alive = true;
        this.TeamMU1_2 = {
            MU1_2_VelocidadActualMotor: 0,
            MU1_2_CorrienteActualMotor: 0,
            MU1_2_PotenciaActualMotor: 0,
            MU1_2_TorqueActualMotor: 0,
            MU1_2_KWh: 0,
            MU1_2_voltaje: 0
        };
        this.velocidadMU1_2 = 0;
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
    Mu1_2Component.prototype.ngOnInit = function () {
        this.changeMU1_2();
        // this.dataSF1()
    };
    Mu1_2Component.prototype.gauge = function () {
        if (document.getElementById('sample-data')) {
            var value1 = this.velocidadMU1_2;
            this.osr1_1.axes[0].pointers[0].animation.enable = true;
            this.osr1_1.setPointerValue(0, 0, value1);
            this.osr1_1.setAnnotationValue(0, 0, this.osr1_1.axes[0].annotations[0].content);
        }
        else {
            clearInterval(this.tooltipInterval1);
        }
    };
    Mu1_2Component.prototype.test = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-data')) {
                var value1 = _this.velocidadMU1_2;
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 1000);
    };
    Mu1_2Component.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-dataMU1_2')) {
                var value1 = _this.velocidadMU1_2;
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
    Mu1_2Component.prototype.changeMU1_2 = function () {
        var _this = this;
        this.apiGetComp.GetJson(this.api.apiUrlNode1 + '/MU1_2')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('No hay data MU1_2');
                res.MU1_2_VelocidadActualMotor = 0;
                res.MU1_2_CorrienteActualMotor = 0;
                res.MU1_2_PotenciaActualMotor = 0;
                res.MU1_2_KWh = 0;
            }
            else {
                _this.TeamMU1_2 = res;
                // this.dataSF1_1 = TeamSF1_1
                _this.velocidadMU1_2 = (_b = (_a = _this.TeamMU1_2) === null || _a === void 0 ? void 0 : _a.MU1_2_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        });
    };
    Mu1_2Component.prototype.dataMU1_2 = function () {
        var _this = this;
        if (this.intervalSubscriptionItems) {
            this.intervalSubscriptionItems.unsubscribe();
        }
        this.intervalSubscriptionItems = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(3000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.apiGetComp.GetJson(_this.api.apiUrlNode1 + '/MU1_2'); }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('no hay data MU1_2');
                res.MU1_2_VelocidadActualMotor = 0;
                res.MU1_2_CorrienteActualMotor = 0;
                res.MU1_2_PotenciaActualMotor = 0;
                res.MU1_2_KWh = 0;
            }
            else {
                _this.TeamMU1_2 = res;
                // this.dataSF1_1 = TeamSF1_1
                _this.velocidadMU1_2 = (_b = (_a = _this.TeamMU1_2) === null || _a === void 0 ? void 0 : _a.MU1_2_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        }, function (error) { return (console.log(error)); }, function () { return console.log('Error..!'); });
    };
    Mu1_2Component.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    Mu1_2Component.ɵfac = function Mu1_2Component_Factory(t) { return new (t || Mu1_2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"])); };
    Mu1_2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Mu1_2Component, selectors: [["ngx-mu1_2"]], viewQuery: function Mu1_2Component_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.osr1_1 = _t.first);
        } }, decls: 28, vars: 12, consts: [["id", "sample-dataMU1_2", 2, "display", "block", "height", "150px"], ["gaugeMU1_2", ""], ["startAngle", "260", "endAngle", "100", 3, "majorTicks", "minorTicks", "labelStyle", "lineStyle", "ranges", "pointers"], ["angle", "180", "radius", "30%", "zIndex", "1", 3, "content"], [2, "margin-left", "23%", "margin-top", "-0%", "padding-top", "-40px", "padding-block-start", "-98px"], [2, "padding", "0.5625em 0.625em", "margin-top", "-0.10rem"], [2, "padding", "0.5625em 0.625em", "margin-top", "-1.9rem"]], template: function Mu1_2Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " MU1_2 ");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("  ", ctx.TeamMU1_2 == null ? null : ctx.TeamMU1_2.MU1_2_CorrienteActualMotor, "  \u00A0 A");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("   ", ctx.TeamMU1_2 == null ? null : ctx.TeamMU1_2.MU1_2_PotenciaActualMotor, " \u00A0 W");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", ctx.TeamMU1_2 == null ? null : ctx.TeamMU1_2.MU1_2_voltaje, "   VAC ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 10, ctx.TeamMU1_2 == null ? null : ctx.TeamMU1_2.MU1_2_KWh), "  \u00A0 kwh ");
        } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["CircularGaugeComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxesDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxisDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationsDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3pvbmUtdGVhbXMvdGVhbS1tdS9tdTEuMi9tdTEuMi5jb21wb25lbnQuc2NzcyJ9 */"] });
    return Mu1_2Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Mu1_2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-mu1_2',
                templateUrl: './mu1.2.component.html',
                styleUrls: ['./mu1.2.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"] }]; }, { osr1_1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gaugeMU1_2']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/zone-teams/team-mu/mu1.3/mu1.3.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-mu/mu1.3/mu1.3.component.ts ***!
  \*******************************************************************/
/*! exports provided: Mu1_3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mu1_3Component", function() { return Mu1_3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-angular-circulargauge */ "./node_modules/@syncfusion/ej2-angular-circulargauge/__ivy_ngcc__/@syncfusion/ej2-angular-circulargauge.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");















var _c0 = ["gaugeMU1_3"];
var Mu1_3Component = /** @class */ (function () {
    function Mu1_3Component(http, api, apiGetComp, decimalPipe) {
        this.http = http;
        this.api = api;
        this.apiGetComp = apiGetComp;
        this.decimalPipe = decimalPipe;
        this.alive = true;
        this.TeamMU1_3 = {
            MU1_3_VelocidadActualMotor: 0,
            MU1_3_CorrienteActualMotor: 0,
            MU1_3_PotenciaActualMotor: 0,
            MU1_3_TorqueActualMotor: 0,
            MU1_3_KWh: 0,
            MU1_3_voltaje: 0
        };
        this.velocidadMU1_3 = 0;
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
    Mu1_3Component.prototype.ngOnInit = function () {
        this.changeMU1_3();
        // this.dataSF1()
    };
    Mu1_3Component.prototype.gauge = function () {
        if (document.getElementById('sample-data')) {
            var value1 = this.velocidadMU1_3;
            this.osr1_1.axes[0].pointers[0].animation.enable = true;
            this.osr1_1.setPointerValue(0, 0, value1);
            this.osr1_1.setAnnotationValue(0, 0, this.osr1_1.axes[0].annotations[0].content);
        }
        else {
            clearInterval(this.tooltipInterval1);
        }
    };
    Mu1_3Component.prototype.test = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-data')) {
                var value1 = _this.velocidadMU1_3;
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 1000);
    };
    Mu1_3Component.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-dataMU1_3')) {
                var value1 = _this.velocidadMU1_3;
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
    Mu1_3Component.prototype.changeMU1_3 = function () {
        var _this = this;
        this.apiGetComp.GetJson(this.api.apiUrlNode1 + '/MU1_3')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('No hay data MU1_3');
                res.MU1_3_VelocidadActualMotor = 0;
                res.MU1_3_CorrienteActualMotor = 0;
                res.MU1_3_PotenciaActualMotor = 0;
                res.MU1_3_KWh = 0;
            }
            else {
                _this.TeamMU1_3 = res;
                // this.dataSF1_1 = TeamSF1_1
                _this.velocidadMU1_3 = (_b = (_a = _this.TeamMU1_3) === null || _a === void 0 ? void 0 : _a.MU1_3_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        });
    };
    Mu1_3Component.prototype.dataMU1_3 = function () {
        var _this = this;
        if (this.intervalSubscriptionItems) {
            this.intervalSubscriptionItems.unsubscribe();
        }
        this.intervalSubscriptionItems = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(3000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.apiGetComp.GetJson(_this.api.apiUrlNode1 + '/MU1_3'); }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('no hay data MU1_3');
                res.MU1_3_VelocidadActualMotor = 0;
                res.MU1_3_CorrienteActualMotor = 0;
                res.MU1_3_PotenciaActualMotor = 0;
                res.MU1_3_KWh = 0;
            }
            else {
                _this.TeamMU1_3 = res;
                // this.dataSF1_1 = TeamSF1_1
                _this.velocidadMU1_3 = (_b = (_a = _this.TeamMU1_3) === null || _a === void 0 ? void 0 : _a.MU1_3_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        }, function (error) { return (console.log(error)); }, function () { return console.log('Error..!'); });
    };
    Mu1_3Component.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    Mu1_3Component.ɵfac = function Mu1_3Component_Factory(t) { return new (t || Mu1_3Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"])); };
    Mu1_3Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Mu1_3Component, selectors: [["ngx-mu1_3"]], viewQuery: function Mu1_3Component_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.osr1_1 = _t.first);
        } }, decls: 28, vars: 12, consts: [["id", "sample-dataMU1_3", 2, "display", "block", "height", "150px"], ["gaugeMU1_3", ""], ["startAngle", "260", "endAngle", "100", 3, "majorTicks", "minorTicks", "labelStyle", "lineStyle", "ranges", "pointers"], ["angle", "180", "radius", "30%", "zIndex", "1", 3, "content"], [2, "margin-left", "23%", "margin-top", "-0%", "padding-top", "-40px", "padding-block-start", "-98px"], [2, "padding", "0.5625em 0.625em", "margin-top", "-0.10rem"], [2, "padding", "0.5625em 0.625em", "margin-top", "-1.9rem"]], template: function Mu1_3Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " MU1_3 ");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("  ", ctx.TeamMU1_3 == null ? null : ctx.TeamMU1_3.MU1_3_CorrienteActualMotor, "  \u00A0 A");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("   ", ctx.TeamMU1_3 == null ? null : ctx.TeamMU1_3.MU1_3_PotenciaActualMotor, " \u00A0 W");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", ctx.TeamMU1_3 == null ? null : ctx.TeamMU1_3.MU1_3_voltaje, "   VAC ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 10, ctx.TeamMU1_3 == null ? null : ctx.TeamMU1_3.MU1_3_KWh), "  \u00A0 kwh ");
        } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["CircularGaugeComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxesDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxisDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationsDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3pvbmUtdGVhbXMvdGVhbS1tdS9tdTEuMy9tdTEuMy5jb21wb25lbnQuc2NzcyJ9 */"] });
    return Mu1_3Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Mu1_3Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-mu1_3',
                templateUrl: './mu1.3.component.html',
                styleUrls: ['./mu1.3.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"] }]; }, { osr1_1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gaugeMU1_3']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/zone-teams/team-mu/mu1.4/mu1.4.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-mu/mu1.4/mu1.4.component.ts ***!
  \*******************************************************************/
/*! exports provided: Mu1_4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mu1_4Component", function() { return Mu1_4Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-angular-circulargauge */ "./node_modules/@syncfusion/ej2-angular-circulargauge/__ivy_ngcc__/@syncfusion/ej2-angular-circulargauge.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");















var _c0 = ["gaugeMU1_4"];
var Mu1_4Component = /** @class */ (function () {
    function Mu1_4Component(http, api, apiGetComp, decimalPipe) {
        this.http = http;
        this.api = api;
        this.apiGetComp = apiGetComp;
        this.decimalPipe = decimalPipe;
        this.alive = true;
        this.TeamMU1_4 = {
            MU1_4_VelocidadActualMotor: 0,
            MU1_4_CorrienteActualMotor: 0,
            MU1_4_PotenciaActualMotor: 0,
            MU1_4_TorqueActualMotor: 0,
            MU1_4_KWh: 0,
            MU1_4_voltaje: 0
        };
        this.velocidadMU1_4 = 0;
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
    Mu1_4Component.prototype.ngOnInit = function () {
        this.changeMU1_4();
        // this.dataSF1()
    };
    Mu1_4Component.prototype.gauge = function () {
        if (document.getElementById('sample-data')) {
            var value1 = this.velocidadMU1_4;
            this.osr1_1.axes[0].pointers[0].animation.enable = true;
            this.osr1_1.setPointerValue(0, 0, value1);
            this.osr1_1.setAnnotationValue(0, 0, this.osr1_1.axes[0].annotations[0].content);
        }
        else {
            clearInterval(this.tooltipInterval1);
        }
    };
    Mu1_4Component.prototype.test = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-data')) {
                var value1 = _this.velocidadMU1_4;
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 1000);
    };
    Mu1_4Component.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-dataMU1_4')) {
                var value1 = _this.velocidadMU1_4;
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
    Mu1_4Component.prototype.changeMU1_4 = function () {
        var _this = this;
        this.apiGetComp.GetJson(this.api.apiUrlNode1 + '/MU1_4')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('No hay data MU1_4');
                res.MU1_4_VelocidadActualMotor = 0;
                res.MU1_4_CorrienteActualMotor = 0;
                res.MU1_4_PotenciaActualMotor = 0;
                res.MU1_4_KWh = 0;
            }
            else {
                _this.TeamMU1_4 = res;
                // this.dataSF1_1 = TeamSF1_1
                _this.velocidadMU1_4 = (_b = (_a = _this.TeamMU1_4) === null || _a === void 0 ? void 0 : _a.MU1_4_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        });
    };
    Mu1_4Component.prototype.dataMU1_4 = function () {
        var _this = this;
        if (this.intervalSubscriptionItems) {
            this.intervalSubscriptionItems.unsubscribe();
        }
        this.intervalSubscriptionItems = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(3000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.apiGetComp.GetJson(_this.api.apiUrlNode1 + '/MU1_4'); }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('no hay data MU1_4');
                res.MU1_4_VelocidadActualMotor = 0;
                res.MU1_4_CorrienteActualMotor = 0;
                res.MU1_4_PotenciaActualMotor = 0;
                res.MU1_4_KWh = 0;
            }
            else {
                _this.TeamMU1_4 = res;
                // this.dataSF1_1 = TeamSF1_1
                _this.velocidadMU1_4 = (_b = (_a = _this.TeamMU1_4) === null || _a === void 0 ? void 0 : _a.MU1_4_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        }, function (error) { return (console.log(error)); }, function () { return console.log('Error..!'); });
    };
    Mu1_4Component.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    Mu1_4Component.ɵfac = function Mu1_4Component_Factory(t) { return new (t || Mu1_4Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"])); };
    Mu1_4Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Mu1_4Component, selectors: [["ngx-mu1_4"]], viewQuery: function Mu1_4Component_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.osr1_1 = _t.first);
        } }, decls: 28, vars: 12, consts: [["id", "sample-dataMU1_4", 2, "display", "block", "height", "150px"], ["gaugeMU1_4", ""], ["startAngle", "260", "endAngle", "100", 3, "majorTicks", "minorTicks", "labelStyle", "lineStyle", "ranges", "pointers"], ["angle", "180", "radius", "30%", "zIndex", "1", 3, "content"], [2, "margin-left", "23%", "margin-top", "-0%", "padding-top", "-40px", "padding-block-start", "-98px"], [2, "padding", "0.5625em 0.625em", "margin-top", "-0.10rem"], [2, "padding", "0.5625em 0.625em", "margin-top", "-1.9rem"]], template: function Mu1_4Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " MU1_4 ");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("  ", ctx.TeamMU1_4 == null ? null : ctx.TeamMU1_4.MU1_4_CorrienteActualMotor, "  \u00A0 A");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("   ", ctx.TeamMU1_4 == null ? null : ctx.TeamMU1_4.MU1_4_PotenciaActualMotor, " \u00A0 W");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", ctx.TeamMU1_4 == null ? null : ctx.TeamMU1_4.MU1_4_voltaje, "   VAC ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 10, ctx.TeamMU1_4 == null ? null : ctx.TeamMU1_4.MU1_4_KWh), "  \u00A0 kwh ");
        } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["CircularGaugeComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxesDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxisDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationsDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3pvbmUtdGVhbXMvdGVhbS1tdS9tdTEuNC9tdTEuNC5jb21wb25lbnQuc2NzcyJ9 */"] });
    return Mu1_4Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Mu1_4Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-mu1_4',
                templateUrl: './mu1.4.component.html',
                styleUrls: ['./mu1.4.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"] }]; }, { osr1_1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gaugeMU1_4']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/zone-teams/team-mu/mu1.5/mu1.5.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-mu/mu1.5/mu1.5.component.ts ***!
  \*******************************************************************/
/*! exports provided: Mu1_5Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mu1_5Component", function() { return Mu1_5Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-angular-circulargauge */ "./node_modules/@syncfusion/ej2-angular-circulargauge/__ivy_ngcc__/@syncfusion/ej2-angular-circulargauge.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");















var _c0 = ["gaugeMU1_5M01"];
var Mu1_5Component = /** @class */ (function () {
    function Mu1_5Component(http, api, apiGetComp, decimalPipe) {
        this.http = http;
        this.api = api;
        this.apiGetComp = apiGetComp;
        this.decimalPipe = decimalPipe;
        this.alive = true;
        this.TeamMU1_5M01 = {
            MU1_5M01_VelocidadActualMotor: 0,
            MU1_5M01_CorrienteActualMotor: 0,
            MU1_5M01_PotenciaActualMotor: 0,
            MU1_5M01_TorqueActualMotor: 0,
            MU1_5M01_KWh: 0,
            MU1_5M01_voltaje: 0
        };
        this.velocidadMU1_5M01 = 0;
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
    Mu1_5Component.prototype.ngOnInit = function () {
        this.changeMU1_5M01();
        // this.dataSF1()
    };
    Mu1_5Component.prototype.gauge = function () {
        if (document.getElementById('sample-data')) {
            var value1 = this.velocidadMU1_5M01;
            this.osr1_1.axes[0].pointers[0].animation.enable = true;
            this.osr1_1.setPointerValue(0, 0, value1);
            this.osr1_1.setAnnotationValue(0, 0, this.osr1_1.axes[0].annotations[0].content);
        }
        else {
            clearInterval(this.tooltipInterval1);
        }
    };
    Mu1_5Component.prototype.test = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-data')) {
                var value1 = _this.velocidadMU1_5M01;
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 1000);
    };
    Mu1_5Component.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-dataMU1_5M01')) {
                var value1 = _this.velocidadMU1_5M01;
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
    Mu1_5Component.prototype.changeMU1_5M01 = function () {
        var _this = this;
        this.apiGetComp.GetJson(this.api.apiUrlNode1 + '/MU1_5M01')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('No hay data MU1_5M01');
                res.MU1_5M01_VelocidadActualMotor = 0;
                res.MU1_5M01_CorrienteActualMotor = 0;
                res.MU1_5M01_PotenciaActualMotor = 0;
                res.MU1_5M01_KWh = 0;
            }
            else {
                _this.TeamMU1_5M01 = res;
                // this.dataSF1_1 = TeamSF1_1
                // this.velocidadMU1_5M01 = this.decimalPipe.transform(this.TeamMU1_5M01?.MU1_5M01_VelocidadActualMotor) ?? 0;
                // console.log('SF1_1:', this.TeamMU1_5M01);
                _this.velocidadMU1_5M01 = (_b = (_a = _this.TeamMU1_5M01) === null || _a === void 0 ? void 0 : _a.MU1_5M01_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        });
    };
    Mu1_5Component.prototype.dataMU1_5M01 = function () {
        var _this = this;
        if (this.intervalSubscriptionItems) {
            this.intervalSubscriptionItems.unsubscribe();
        }
        this.intervalSubscriptionItems = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(3000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.apiGetComp.GetJson(_this.api.apiUrlNode1 + '/MU1_5M01'); }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('no hay data MU1_5M01');
                res.MU1_5M01_VelocidadActualMotor = 0;
                res.MU1_5M01_CorrienteActualMotor = 0;
                res.MU1_5M01_PotenciaActualMotor = 0;
                res.MU1_5M01_KWh = 0;
            }
            else {
                _this.TeamMU1_5M01 = res;
                // this.dataSF1_1 = TeamSF1_1
                _this.velocidadMU1_5M01 = (_b = (_a = _this.TeamMU1_5M01) === null || _a === void 0 ? void 0 : _a.MU1_5M01_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        }, function (error) { return (console.log(error)); }, function () { return console.log('Error..!'); });
    };
    Mu1_5Component.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    Mu1_5Component.ɵfac = function Mu1_5Component_Factory(t) { return new (t || Mu1_5Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"])); };
    Mu1_5Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Mu1_5Component, selectors: [["ngx-mu1_5"]], viewQuery: function Mu1_5Component_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.osr1_1 = _t.first);
        } }, decls: 28, vars: 12, consts: [["id", "sample-dataMU1_5M01", 2, "display", "block", "height", "150px"], ["gaugeMU1_5M01", ""], ["startAngle", "260", "endAngle", "100", 3, "majorTicks", "minorTicks", "labelStyle", "lineStyle", "ranges", "pointers"], ["angle", "180", "radius", "30%", "zIndex", "1", 3, "content"], [2, "margin-left", "23%", "margin-top", "-0%", "padding-top", "-40px", "padding-block-start", "-98px"], [2, "padding", "0.5625em 0.625em", "margin-top", "-0.10rem"], [2, "padding", "0.5625em 0.625em", "margin-top", "-1.9rem"]], template: function Mu1_5Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " MU1_5M01 ");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("  ", ctx.TeamMU1_5M01 == null ? null : ctx.TeamMU1_5M01.MU1_5M01_CorrienteActualMotor, "  \u00A0 A");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("   ", ctx.TeamMU1_5M01 == null ? null : ctx.TeamMU1_5M01.MU1_5M01_PotenciaActualMotor, " \u00A0 W");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", ctx.TeamMU1_5M01 == null ? null : ctx.TeamMU1_5M01.MU1_5M01_voltaje, "   VAC ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 10, ctx.TeamMU1_5M01 == null ? null : ctx.TeamMU1_5M01.MU1_5M01_KWh), "  \u00A0 kwh ");
        } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["CircularGaugeComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxesDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxisDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationsDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3pvbmUtdGVhbXMvdGVhbS1tdS9tdTEuNS9tdTEuNS5jb21wb25lbnQuc2NzcyJ9 */"] });
    return Mu1_5Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Mu1_5Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-mu1_5',
                templateUrl: './mu1.5.component.html',
                styleUrls: ['./mu1.5.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"] }]; }, { osr1_1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gaugeMU1_5M01']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/zone-teams/team-mu/team-mu-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-mu/team-mu-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: TeamMURoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamMURoutingModule", function() { return TeamMURoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _team_mu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./team-mu.component */ "./src/app/pages/zone-teams/team-mu/team-mu.component.ts");





var routes = [
    {
        path: '',
        component: _team_mu_component__WEBPACK_IMPORTED_MODULE_2__["TeamMUComponent"],
        children: [
        // {
        //   path: 'sfc',
        //   component: SfcComponent,
        // },
        ]
    }
];
var TeamMURoutingModule = /** @class */ (function () {
    function TeamMURoutingModule() {
    }
    TeamMURoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TeamMURoutingModule });
    TeamMURoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TeamMURoutingModule_Factory(t) { return new (t || TeamMURoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return TeamMURoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TeamMURoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamMURoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/zone-teams/team-mu/team-mu.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-mu/team-mu.component.ts ***!
  \***************************************************************/
/*! exports provided: TeamMUComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamMUComponent", function() { return TeamMUComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");
/* harmony import */ var _mu1_1_mu1_1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mu1.1/mu1.1.component */ "./src/app/pages/zone-teams/team-mu/mu1.1/mu1.1.component.ts");
/* harmony import */ var _mu1_2_mu1_2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mu1.2/mu1.2.component */ "./src/app/pages/zone-teams/team-mu/mu1.2/mu1.2.component.ts");
/* harmony import */ var _mu1_3_mu1_3_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mu1.3/mu1.3.component */ "./src/app/pages/zone-teams/team-mu/mu1.3/mu1.3.component.ts");
/* harmony import */ var _mu1_4_mu1_4_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mu1.4/mu1.4.component */ "./src/app/pages/zone-teams/team-mu/mu1.4/mu1.4.component.ts");
/* harmony import */ var _mu1_5_mu1_5_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mu1.5/mu1.5.component */ "./src/app/pages/zone-teams/team-mu/mu1.5/mu1.5.component.ts");














var TeamMUComponent = /** @class */ (function () {
    function TeamMUComponent(http, router, api) {
        this.http = http;
        this.router = router;
        this.api = api;
        this.alive = true;
    }
    TeamMUComponent.prototype.ngOnInit = function () { };
    TeamMUComponent.prototype.back = function () {
        this.router.navigate(["/pages/conveyor/energyZone"]);
        return false;
    };
    TeamMUComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    TeamMUComponent.ɵfac = function TeamMUComponent_Factory(t) { return new (t || TeamMUComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"])); };
    TeamMUComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeamMUComponent, selectors: [["ngx-teamAL"]], decls: 21, vars: 0, consts: [[1, "navigation"], ["href", "#", "aria-label", "Back", 1, "link", "back-link", 3, "click"], ["icon", "arrow-back"], [1, "h"], [1, "col-sm-12"], [1, "row"], [1, "col-sm-3"]], template: function TeamMUComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamMUComponent_Template_a_click_4_listener() { return ctx.back(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nb-icon", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "MAKE UP");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "ngx-mu1_1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "ngx-mu1_2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "ngx-mu1_3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "ngx-mu1_4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "ngx-mu1_5");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardBodyComponent"], _mu1_1_mu1_1_component__WEBPACK_IMPORTED_MODULE_5__["Mu1_1Component"], _mu1_2_mu1_2_component__WEBPACK_IMPORTED_MODULE_6__["Mu1_2Component"], _mu1_3_mu1_3_component__WEBPACK_IMPORTED_MODULE_7__["Mu1_3Component"], _mu1_4_mu1_4_component__WEBPACK_IMPORTED_MODULE_8__["Mu1_4Component"], _mu1_5_mu1_5_component__WEBPACK_IMPORTED_MODULE_9__["Mu1_5Component"]], styles: [".contenedor[_ngcontent-%COMP%] {\n            position: relative;\n            display: inline-block;\n            text-align: center;\n          }\n\n          .centrado[_ngcontent-%COMP%] {\n            position: absolute;\n            font-size: 10px;\n            font-family: cursive;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n          }\n          .h[_ngcontent-%COMP%] {\n            margin: -1.8rem 0.19rem 0rem 2.7rem;\n          }"] });
    return TeamMUComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamMUComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "ngx-teamAL",
                template: "\n    <router-outlet>\n      <nb-card>\n        <nb-card-header>\n          <nav class=\"navigation\">\n            <a\n              href=\"#\"\n              (click)=\"back()\"\n              class=\"link back-link\"\n              aria-label=\"Back\"\n            >\n              <nb-icon icon=\"arrow-back\"></nb-icon>\n            </a>\n            <h5 class=\"h\">MAKE UP</h5>\n          </nav>\n        </nb-card-header>\n        <!-- <nb-card-body>\n          <div class=\"contenedor\">\n            <img\n              src=\"./assets/img/construction.gif\"\n              class=\"align-self-center\"\n              width=\"100%\"\n              height=\"80%\"\n              style=\"margin-top: -140px; margin-left: 128px\"\n            />\n            <div class=\"centrado\">\n              <font size=\"4\">Sitio en Construcci\u00F3n</font>\n            </div>\n          </div>\n        </nb-card-body> -->\n\n        <nb-card-body>\n            <div class=\"col-sm-12\">\n              <div class=\"row\">\n                <div class=\"col-sm-3\">\n                  <ngx-mu1_1></ngx-mu1_1>\n                </div>\n                <div class=\"col-sm-3\">\n                  <ngx-mu1_2></ngx-mu1_2>\n                </div>\n                <div class=\"col-sm-3\">\n                  <ngx-mu1_3></ngx-mu1_3>\n                </div>\n                <div class=\"col-sm-3\">\n                  <ngx-mu1_4></ngx-mu1_4>\n                </div>\n                <div class=\"col-sm-3\">\n                  <ngx-mu1_5></ngx-mu1_5>\n                </div>\n              </div>\n            </div>\n        </nb-card-body>\n\n        <style>\n          .contenedor {\n            position: relative;\n            display: inline-block;\n            text-align: center;\n          }\n\n          .centrado {\n            position: absolute;\n            font-size: 10px;\n            font-family: cursive;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n          }\n          .h {\n            margin: -1.8rem 0.19rem 0rem 2.7rem;\n          }\n        </style>\n      </nb-card>\n    </router-outlet>\n  ",
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/zone-teams/team-mu/team-mu.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-mu/team-mu.module.ts ***!
  \************************************************************/
/*! exports provided: TeamMUModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamMUModule", function() { return TeamMUModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");
/* harmony import */ var _team_mu_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./team-mu-routing.module */ "./src/app/pages/zone-teams/team-mu/team-mu-routing.module.ts");
/* harmony import */ var _team_mu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./team-mu.component */ "./src/app/pages/zone-teams/team-mu/team-mu.component.ts");
/* harmony import */ var _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @syncfusion/ej2-angular-circulargauge */ "./node_modules/@syncfusion/ej2-angular-circulargauge/__ivy_ngcc__/@syncfusion/ej2-angular-circulargauge.es5.js");
/* harmony import */ var _mu1_1_mu1_1_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mu1.1/mu1.1.component */ "./src/app/pages/zone-teams/team-mu/mu1.1/mu1.1.component.ts");
/* harmony import */ var _mu1_2_mu1_2_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mu1.2/mu1.2.component */ "./src/app/pages/zone-teams/team-mu/mu1.2/mu1.2.component.ts");
/* harmony import */ var _mu1_3_mu1_3_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mu1.3/mu1.3.component */ "./src/app/pages/zone-teams/team-mu/mu1.3/mu1.3.component.ts");
/* harmony import */ var _mu1_4_mu1_4_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mu1.4/mu1.4.component */ "./src/app/pages/zone-teams/team-mu/mu1.4/mu1.4.component.ts");
/* harmony import */ var _mu1_5_mu1_5_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mu1.5/mu1.5.component */ "./src/app/pages/zone-teams/team-mu/mu1.5/mu1.5.component.ts");












var TeamMUModule = /** @class */ (function () {
    function TeamMUModule() {
    }
    TeamMUModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TeamMUModule });
    TeamMUModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TeamMUModule_Factory(t) { return new (t || TeamMUModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _team_mu_routing_module__WEBPACK_IMPORTED_MODULE_3__["TeamMURoutingModule"],
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
                _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_5__["CircularGaugeAllModule"],
            ]] });
    return TeamMUModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TeamMUModule, { declarations: [_team_mu_component__WEBPACK_IMPORTED_MODULE_4__["TeamMUComponent"], _mu1_1_mu1_1_component__WEBPACK_IMPORTED_MODULE_6__["Mu1_1Component"], _mu1_2_mu1_2_component__WEBPACK_IMPORTED_MODULE_7__["Mu1_2Component"], _mu1_3_mu1_3_component__WEBPACK_IMPORTED_MODULE_8__["Mu1_3Component"], _mu1_4_mu1_4_component__WEBPACK_IMPORTED_MODULE_9__["Mu1_4Component"], _mu1_5_mu1_5_component__WEBPACK_IMPORTED_MODULE_10__["Mu1_5Component"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _team_mu_routing_module__WEBPACK_IMPORTED_MODULE_3__["TeamMURoutingModule"],
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
        _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_5__["CircularGaugeAllModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamMUModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_team_mu_component__WEBPACK_IMPORTED_MODULE_4__["TeamMUComponent"], _mu1_1_mu1_1_component__WEBPACK_IMPORTED_MODULE_6__["Mu1_1Component"], _mu1_2_mu1_2_component__WEBPACK_IMPORTED_MODULE_7__["Mu1_2Component"], _mu1_3_mu1_3_component__WEBPACK_IMPORTED_MODULE_8__["Mu1_3Component"], _mu1_4_mu1_4_component__WEBPACK_IMPORTED_MODULE_9__["Mu1_4Component"], _mu1_5_mu1_5_component__WEBPACK_IMPORTED_MODULE_10__["Mu1_5Component"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _team_mu_routing_module__WEBPACK_IMPORTED_MODULE_3__["TeamMURoutingModule"],
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
                    _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_5__["CircularGaugeAllModule"],
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=team-mu-team-mu-module.js.map