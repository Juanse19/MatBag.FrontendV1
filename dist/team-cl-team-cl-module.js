(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["team-cl-team-cl-module"],{

/***/ "./src/app/pages/zone-teams/team-cl/cl1.1/cl1.1.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-cl/cl1.1/cl1.1.component.ts ***!
  \*******************************************************************/
/*! exports provided: Cl1_1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cl1_1Component", function() { return Cl1_1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-angular-circulargauge */ "./node_modules/@syncfusion/ej2-angular-circulargauge/__ivy_ngcc__/@syncfusion/ej2-angular-circulargauge.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");















var _c0 = ["gaugeCL1_1"];
var Cl1_1Component = /** @class */ (function () {
    function Cl1_1Component(http, api, apiGetComp, decimalPipe) {
        this.http = http;
        this.api = api;
        this.apiGetComp = apiGetComp;
        this.decimalPipe = decimalPipe;
        this.alive = true;
        this.TeamCL1_1 = {
            CL1_1_VelocidadActualMotor: 0,
            CL1_1_CorrienteActualMotor: 0,
            CL1_1_PotenciaActualMotor: 0,
            CL1_1_TorqueActualMotor: 0,
            CL1_1_KWh: 0,
            CL1_1_voltaje: 0
        };
        this.velocidadCL1_1 = 0;
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
    Cl1_1Component.prototype.ngOnInit = function () {
        this.changeCL1_1();
        // this.dataSF1()
    };
    Cl1_1Component.prototype.gauge = function () {
        if (document.getElementById('sample-data')) {
            var value1 = this.velocidadCL1_1;
            this.osr1_1.axes[0].pointers[0].animation.enable = true;
            this.osr1_1.setPointerValue(0, 0, value1);
            this.osr1_1.setAnnotationValue(0, 0, this.osr1_1.axes[0].annotations[0].content);
        }
        else {
            clearInterval(this.tooltipInterval1);
        }
    };
    Cl1_1Component.prototype.test = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-data')) {
                var value1 = _this.velocidadCL1_1;
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 1000);
    };
    Cl1_1Component.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-dataCL1_1')) {
                var value1 = _this.velocidadCL1_1;
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
    Cl1_1Component.prototype.changeCL1_1 = function () {
        var _this = this;
        this.apiGetComp.GetJson(this.api.apiUrlNode1 + '/api/CL1_1')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('No hay data CL1_1');
                res.CL1_1_VelocidadActualMotor = 0;
                res.CL1_1_CorrienteActualMotor = 0;
                res.CL1_1_PotenciaActualMotor = 0;
                res.CL1_1_KWh = 0;
            }
            else {
                _this.TeamCL1_1 = res[0];
                // this.dataSF1_1 = TeamSF1_1
                // this.velocidadCL1_1 = this.decimalPipe.transform(this.TeamCL1_1?.CL1_1_VelocidadActualMotor) ?? 0;
                // console.log('SF1_1:', this.TeamCL1_1);
                _this.velocidadCL1_1 = (_b = (_a = _this.TeamCL1_1) === null || _a === void 0 ? void 0 : _a.CL1_1_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
            _this.dataCL1_1();
        });
    };
    Cl1_1Component.prototype.dataCL1_1 = function () {
        var _this = this;
        if (this.intervalSubscriptionItems) {
            this.intervalSubscriptionItems.unsubscribe();
        }
        this.intervalSubscriptionItems = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(3000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.apiGetComp.GetJson(_this.api.apiUrlNode1 + '/api/CL1_1'); }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('no hay data CL1_1');
                res.CL1_1_VelocidadActualMotor = 0;
                res.CL1_1_CorrienteActualMotor = 0;
                res.CL1_1_PotenciaActualMotor = 0;
                res.CL1_1_KWh = 0;
            }
            else {
                _this.TeamCL1_1 = res[0];
                // this.dataSF1_1 = TeamSF1_1
                _this.velocidadCL1_1 = (_b = (_a = _this.TeamCL1_1) === null || _a === void 0 ? void 0 : _a.CL1_1_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        }, function (error) { return (console.log(error)); }, function () { return console.log('Error..!'); });
    };
    Cl1_1Component.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    Cl1_1Component.ɵfac = function Cl1_1Component_Factory(t) { return new (t || Cl1_1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"])); };
    Cl1_1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Cl1_1Component, selectors: [["ngx-cl1_1"]], viewQuery: function Cl1_1Component_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.osr1_1 = _t.first);
        } }, decls: 29, vars: 14, consts: [["id", "sample-dataCL1_1", 2, "display", "block", "height", "150px"], ["gaugeCL1_1", ""], ["startAngle", "260", "endAngle", "100", 3, "majorTicks", "minorTicks", "labelStyle", "lineStyle", "ranges", "pointers"], ["angle", "180", "radius", "30%", "zIndex", "1", 3, "content"], [2, "margin-left", "23%", "margin-top", "-0%", "padding-top", "-40px", "padding-block-start", "-98px"], [2, "padding", "0.5625em 0.625em", "margin-top", "-0.10rem"], [2, "padding", "0.5625em 0.625em", "margin-top", "-1.9rem"]], template: function Cl1_1Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " CL1_1 ");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Consumo:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "number");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("  ", ctx.TeamCL1_1 == null ? null : ctx.TeamCL1_1.CL1_1_CorrienteActualMotor, "  \u00A0 A");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("   ", ctx.TeamCL1_1 == null ? null : ctx.TeamCL1_1.CL1_1_PotenciaActualMotor, " \u00A0 W");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 10, ctx.TeamCL1_1 == null ? null : ctx.TeamCL1_1.CL1_1_voltaje), "   VAC ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 12, ctx.TeamCL1_1 == null ? null : ctx.TeamCL1_1.CL1_1_KWh), "  \u00A0 kwh ");
        } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["CircularGaugeComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxesDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxisDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationsDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3pvbmUtdGVhbXMvdGVhbS1jbC9jbDEuMS9jbDEuMS5jb21wb25lbnQuc2NzcyJ9 */"] });
    return Cl1_1Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Cl1_1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-cl1_1',
                templateUrl: './cl1.1.component.html',
                styleUrls: ['./cl1.1.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"] }]; }, { osr1_1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gaugeCL1_1']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/zone-teams/team-cl/cl1.10/cl1.10.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-cl/cl1.10/cl1.10.component.ts ***!
  \*********************************************************************/
/*! exports provided: Cl1_10Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cl1_10Component", function() { return Cl1_10Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-angular-circulargauge */ "./node_modules/@syncfusion/ej2-angular-circulargauge/__ivy_ngcc__/@syncfusion/ej2-angular-circulargauge.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");















var _c0 = ["gaugeCL1_10"];
var Cl1_10Component = /** @class */ (function () {
    function Cl1_10Component(http, api, apiGetComp, decimalPipe) {
        this.http = http;
        this.api = api;
        this.apiGetComp = apiGetComp;
        this.decimalPipe = decimalPipe;
        this.alive = true;
        this.TeamCL1_10 = {
            CL1_10_VelocidadActualMotor: 0,
            CL1_10_CorrienteActualMotor: 0,
            CL1_10_PotenciaActualMotor: 0,
            CL1_10_TorqueActualMotor: 0,
            CL1_10_KWh: 0,
            CL1_10_voltaje: 0
        };
        this.velocidadCL1_10 = 0;
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
    Cl1_10Component.prototype.ngOnInit = function () {
        this.changeCL1_10();
        // this.dataSF1()
    };
    Cl1_10Component.prototype.gauge = function () {
        if (document.getElementById('sample-data')) {
            var value1 = this.velocidadCL1_10;
            this.osr1_1.axes[0].pointers[0].animation.enable = true;
            this.osr1_1.setPointerValue(0, 0, value1);
            this.osr1_1.setAnnotationValue(0, 0, this.osr1_1.axes[0].annotations[0].content);
        }
        else {
            clearInterval(this.tooltipInterval1);
        }
    };
    Cl1_10Component.prototype.test = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-data')) {
                var value1 = _this.velocidadCL1_10;
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 1000);
    };
    Cl1_10Component.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-dataCL1_10')) {
                var value1 = _this.velocidadCL1_10;
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
    Cl1_10Component.prototype.changeCL1_10 = function () {
        var _this = this;
        this.apiGetComp.GetJson(this.api.apiUrlNode1 + '/api/CL1_10')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('No hay data CL1_10');
                res.CL1_10_VelocidadActualMotor = 0;
                res.CL1_10_CorrienteActualMotor = 0;
                res.CL1_10_PotenciaActualMotor = 0;
                res.CL1_10_KWh = 0;
            }
            else {
                _this.TeamCL1_10 = res[0];
                // this.dataSF1_1 = TeamSF1_1
                // this.velocidadCL1_10 = this.decimalPipe.transform(this.TeamCL1_10?.CL1_10_VelocidadActualMotor) ?? 0;
                // console.log('SF1_1:', this.TeamCL1_10);
                _this.velocidadCL1_10 = (_b = (_a = _this.TeamCL1_10) === null || _a === void 0 ? void 0 : _a.CL1_10_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
            _this.dataCL1_10();
        });
    };
    Cl1_10Component.prototype.dataCL1_10 = function () {
        var _this = this;
        if (this.intervalSubscriptionItems) {
            this.intervalSubscriptionItems.unsubscribe();
        }
        this.intervalSubscriptionItems = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(3000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.apiGetComp.GetJson(_this.api.apiUrlNode1 + '/api/CL1_10'); }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('no hay data CL1_10');
                res.CL1_10_VelocidadActualMotor = 0;
                res.CL1_10_CorrienteActualMotor = 0;
                res.CL1_10_PotenciaActualMotor = 0;
                res.CL1_10_KWh = 0;
            }
            else {
                _this.TeamCL1_10 = res[0];
                // this.dataSF1_1 = TeamSF1_1
                _this.velocidadCL1_10 = (_b = (_a = _this.TeamCL1_10) === null || _a === void 0 ? void 0 : _a.CL1_10_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        }, function (error) { return (console.log(error)); }, function () { return console.log('Error..!'); });
    };
    Cl1_10Component.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    Cl1_10Component.ɵfac = function Cl1_10Component_Factory(t) { return new (t || Cl1_10Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"])); };
    Cl1_10Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Cl1_10Component, selectors: [["ngx-cl1_10"]], viewQuery: function Cl1_10Component_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.osr1_1 = _t.first);
        } }, decls: 29, vars: 14, consts: [["id", "sample-dataCL1_10", 2, "display", "block", "height", "150px"], ["gaugeCL1_10", ""], ["startAngle", "260", "endAngle", "100", 3, "majorTicks", "minorTicks", "labelStyle", "lineStyle", "ranges", "pointers"], ["angle", "180", "radius", "30%", "zIndex", "1", 3, "content"], [2, "margin-left", "23%", "margin-top", "-0%", "padding-top", "-40px", "padding-block-start", "-98px"], [2, "padding", "0.5625em 0.625em", "margin-top", "-0.10rem"], [2, "padding", "0.5625em 0.625em", "margin-top", "-1.9rem"]], template: function Cl1_10Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " CL1_10 ");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Consumo:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "number");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("  ", ctx.TeamCL1_10 == null ? null : ctx.TeamCL1_10.CL1_10_CorrienteActualMotor, "  \u00A0 A");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("   ", ctx.TeamCL1_10 == null ? null : ctx.TeamCL1_10.CL1_10_PotenciaActualMotor, " \u00A0 W");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 10, ctx.TeamCL1_10 == null ? null : ctx.TeamCL1_10.CL1_10_voltaje), "   VAC ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 12, ctx.TeamCL1_10 == null ? null : ctx.TeamCL1_10.CL1_10_KWh), "  \u00A0 kwh ");
        } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["CircularGaugeComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxesDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxisDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationsDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3pvbmUtdGVhbXMvdGVhbS1jbC9jbDEuMTAvY2wxLjEwLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return Cl1_10Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Cl1_10Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-cl1_10',
                templateUrl: './cl1.10.component.html',
                styleUrls: ['./cl1.10.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"] }]; }, { osr1_1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gaugeCL1_10']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/zone-teams/team-cl/cl1.11/cl1.11.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-cl/cl1.11/cl1.11.component.ts ***!
  \*********************************************************************/
/*! exports provided: Cl1_11Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cl1_11Component", function() { return Cl1_11Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-angular-circulargauge */ "./node_modules/@syncfusion/ej2-angular-circulargauge/__ivy_ngcc__/@syncfusion/ej2-angular-circulargauge.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");















var _c0 = ["gaugeCL1_11"];
var Cl1_11Component = /** @class */ (function () {
    function Cl1_11Component(http, api, apiGetComp, decimalPipe) {
        this.http = http;
        this.api = api;
        this.apiGetComp = apiGetComp;
        this.decimalPipe = decimalPipe;
        this.alive = true;
        this.TeamCL1_11 = {
            CL1_11_VelocidadActualMotor: 0,
            CL1_11_CorrienteActualMotor: 0,
            CL1_11_PotenciaActualMotor: 0,
            CL1_11_TorqueActualMotor: 0,
            CL1_11_KWh: 0,
            CL1_11_voltaje: 0
        };
        this.velocidadCL1_11 = 0;
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
    Cl1_11Component.prototype.ngOnInit = function () {
        this.changeCL1_11();
        // this.dataSF1()
    };
    Cl1_11Component.prototype.gauge = function () {
        if (document.getElementById('sample-data')) {
            var value1 = this.velocidadCL1_11;
            this.osr1_1.axes[0].pointers[0].animation.enable = true;
            this.osr1_1.setPointerValue(0, 0, value1);
            this.osr1_1.setAnnotationValue(0, 0, this.osr1_1.axes[0].annotations[0].content);
        }
        else {
            clearInterval(this.tooltipInterval1);
        }
    };
    Cl1_11Component.prototype.test = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-data')) {
                var value1 = _this.velocidadCL1_11;
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 1000);
    };
    Cl1_11Component.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-dataCL1_11')) {
                var value1 = _this.velocidadCL1_11;
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
    Cl1_11Component.prototype.changeCL1_11 = function () {
        var _this = this;
        this.apiGetComp.GetJson(this.api.apiUrlNode1 + '/api/CL1_11')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('No hay data CL1_11');
                res.CL1_11_VelocidadActualMotor = 0;
                res.CL1_11_CorrienteActualMotor = 0;
                res.CL1_11_PotenciaActualMotor = 0;
                res.CL1_11_KWh = 0;
            }
            else {
                _this.TeamCL1_11 = res[0];
                // this.dataSF1_1 = TeamSF1_1
                // this.velocidadCL1_11 = this.decimalPipe.transform(this.TeamCL1_11?.CL1_11_VelocidadActualMotor) ?? 0;
                // console.log('SF1_1:', this.TeamCL1_11);
                _this.velocidadCL1_11 = (_b = (_a = _this.TeamCL1_11) === null || _a === void 0 ? void 0 : _a.CL1_11_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
            _this.dataCL1_11();
        });
    };
    Cl1_11Component.prototype.dataCL1_11 = function () {
        var _this = this;
        if (this.intervalSubscriptionItems) {
            this.intervalSubscriptionItems.unsubscribe();
        }
        this.intervalSubscriptionItems = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(3000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.apiGetComp.GetJson(_this.api.apiUrlNode1 + '/api/CL1_11'); }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('no hay data CL1_11');
                res.CL1_11_VelocidadActualMotor = 0;
                res.CL1_11_CorrienteActualMotor = 0;
                res.CL1_11_PotenciaActualMotor = 0;
                res.CL1_11_KWh = 0;
            }
            else {
                _this.TeamCL1_11 = res[0];
                // this.dataSF1_1 = TeamSF1_1
                _this.velocidadCL1_11 = (_b = (_a = _this.TeamCL1_11) === null || _a === void 0 ? void 0 : _a.CL1_11_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        }, function (error) { return (console.log(error)); }, function () { return console.log('Error..!'); });
    };
    Cl1_11Component.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    Cl1_11Component.ɵfac = function Cl1_11Component_Factory(t) { return new (t || Cl1_11Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"])); };
    Cl1_11Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Cl1_11Component, selectors: [["ngx-cl1_11"]], viewQuery: function Cl1_11Component_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.osr1_1 = _t.first);
        } }, decls: 29, vars: 14, consts: [["id", "sample-dataCL1_11", 2, "display", "block", "height", "150px"], ["gaugeCL1_11", ""], ["startAngle", "260", "endAngle", "100", 3, "majorTicks", "minorTicks", "labelStyle", "lineStyle", "ranges", "pointers"], ["angle", "180", "radius", "30%", "zIndex", "1", 3, "content"], [2, "margin-left", "23%", "margin-top", "-0%", "padding-top", "-40px", "padding-block-start", "-98px"], [2, "padding", "0.5625em 0.625em", "margin-top", "-0.10rem"], [2, "padding", "0.5625em 0.625em", "margin-top", "-1.9rem"]], template: function Cl1_11Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " CL1_11 ");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Consumo:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "number");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("  ", ctx.TeamCL1_11 == null ? null : ctx.TeamCL1_11.CL1_11_CorrienteActualMotor, "  \u00A0 A");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("   ", ctx.TeamCL1_11 == null ? null : ctx.TeamCL1_11.CL1_11_PotenciaActualMotor, " \u00A0 W");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 10, ctx.TeamCL1_11 == null ? null : ctx.TeamCL1_11.CL1_11_voltaje), "   VAC ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 12, ctx.TeamCL1_11 == null ? null : ctx.TeamCL1_11.CL1_11_KWh), "  \u00A0 kwh ");
        } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["CircularGaugeComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxesDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxisDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationsDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3pvbmUtdGVhbXMvdGVhbS1jbC9jbDEuMTEvY2wxLjExLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return Cl1_11Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Cl1_11Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-cl1_11',
                templateUrl: './cl1.11.component.html',
                styleUrls: ['./cl1.11.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"] }]; }, { osr1_1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gaugeCL1_11']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/zone-teams/team-cl/cl1.12/cl1.12.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-cl/cl1.12/cl1.12.component.ts ***!
  \*********************************************************************/
/*! exports provided: Cl1_12Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cl1_12Component", function() { return Cl1_12Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-angular-circulargauge */ "./node_modules/@syncfusion/ej2-angular-circulargauge/__ivy_ngcc__/@syncfusion/ej2-angular-circulargauge.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");















var _c0 = ["gaugeCL1_12"];
var Cl1_12Component = /** @class */ (function () {
    function Cl1_12Component(http, api, apiGetComp, decimalPipe) {
        this.http = http;
        this.api = api;
        this.apiGetComp = apiGetComp;
        this.decimalPipe = decimalPipe;
        this.alive = true;
        this.TeamCL1_12 = {
            CL1_12_VelocidadActualMotor: 0,
            CL1_12_CorrienteActualMotor: 0,
            CL1_12_PotenciaActualMotor: 0,
            CL1_12_TorqueActualMotor: 0,
            CL1_12_KWh: 0,
            CL1_12_voltaje: 0
        };
        this.velocidadCL1_12 = 0;
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
    Cl1_12Component.prototype.ngOnInit = function () {
        this.changeCL1_12();
        // this.dataSF1()
    };
    Cl1_12Component.prototype.gauge = function () {
        if (document.getElementById('sample-data')) {
            var value1 = this.velocidadCL1_12;
            this.osr1_1.axes[0].pointers[0].animation.enable = true;
            this.osr1_1.setPointerValue(0, 0, value1);
            this.osr1_1.setAnnotationValue(0, 0, this.osr1_1.axes[0].annotations[0].content);
        }
        else {
            clearInterval(this.tooltipInterval1);
        }
    };
    Cl1_12Component.prototype.test = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-data')) {
                var value1 = _this.velocidadCL1_12;
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 1000);
    };
    Cl1_12Component.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-dataCL1_12')) {
                var value1 = _this.velocidadCL1_12;
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
    Cl1_12Component.prototype.changeCL1_12 = function () {
        var _this = this;
        this.apiGetComp.GetJson(this.api.apiUrlNode1 + '/api/CL1_12')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('No hay data CL1_12');
                res.CL1_12_VelocidadActualMotor = 0;
                res.CL1_12_CorrienteActualMotor = 0;
                res.CL1_12_PotenciaActualMotor = 0;
                res.CL1_12_KWh = 0;
            }
            else {
                _this.TeamCL1_12 = res[0];
                // this.dataSF1_1 = TeamSF1_1
                // this.velocidadCL1_12 = this.decimalPipe.transform(this.TeamCL1_12?.CL1_12_VelocidadActualMotor) ?? 0;
                // console.log('SF1_1:', this.TeamCL1_12);
                _this.velocidadCL1_12 = (_b = (_a = _this.TeamCL1_12) === null || _a === void 0 ? void 0 : _a.CL1_12_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
            _this.dataCL1_12();
        });
    };
    Cl1_12Component.prototype.dataCL1_12 = function () {
        var _this = this;
        if (this.intervalSubscriptionItems) {
            this.intervalSubscriptionItems.unsubscribe();
        }
        this.intervalSubscriptionItems = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(3000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.apiGetComp.GetJson(_this.api.apiUrlNode1 + '/api/CL1_12'); }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('no hay data CL1_12');
                res.CL1_12_VelocidadActualMotor = 0;
                res.CL1_12_CorrienteActualMotor = 0;
                res.CL1_12_PotenciaActualMotor = 0;
                res.CL1_12_KWh = 0;
            }
            else {
                _this.TeamCL1_12 = res[0];
                // this.dataSF1_1 = TeamSF1_1
                _this.velocidadCL1_12 = (_b = (_a = _this.TeamCL1_12) === null || _a === void 0 ? void 0 : _a.CL1_12_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        }, function (error) { return (console.log(error)); }, function () { return console.log('Error..!'); });
    };
    Cl1_12Component.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    Cl1_12Component.ɵfac = function Cl1_12Component_Factory(t) { return new (t || Cl1_12Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"])); };
    Cl1_12Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Cl1_12Component, selectors: [["ngx-cl1_12"]], viewQuery: function Cl1_12Component_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.osr1_1 = _t.first);
        } }, decls: 29, vars: 14, consts: [["id", "sample-dataCL1_12", 2, "display", "block", "height", "150px"], ["gaugeCL1_12", ""], ["startAngle", "260", "endAngle", "100", 3, "majorTicks", "minorTicks", "labelStyle", "lineStyle", "ranges", "pointers"], ["angle", "180", "radius", "30%", "zIndex", "1", 3, "content"], [2, "margin-left", "23%", "margin-top", "-0%", "padding-top", "-40px", "padding-block-start", "-98px"], [2, "padding", "0.5625em 0.625em", "margin-top", "-0.10rem"], [2, "padding", "0.5625em 0.625em", "margin-top", "-1.9rem"]], template: function Cl1_12Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " CL1_12 ");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Consumo:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "number");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("  ", ctx.TeamCL1_12 == null ? null : ctx.TeamCL1_12.CL1_12_CorrienteActualMotor, "  \u00A0 A");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("   ", ctx.TeamCL1_12 == null ? null : ctx.TeamCL1_12.CL1_12_PotenciaActualMotor, " \u00A0 W");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 10, ctx.TeamCL1_12 == null ? null : ctx.TeamCL1_12.CL1_12_voltaje), "   VAC ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 12, ctx.TeamCL1_12 == null ? null : ctx.TeamCL1_12.CL1_12_KWh), "  \u00A0 kwh ");
        } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["CircularGaugeComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxesDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxisDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationsDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3pvbmUtdGVhbXMvdGVhbS1jbC9jbDEuMTIvY2wxLjEyLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return Cl1_12Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Cl1_12Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-cl1_12',
                templateUrl: './cl1.12.component.html',
                styleUrls: ['./cl1.12.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"] }]; }, { osr1_1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gaugeCL1_12']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/zone-teams/team-cl/cl1.13/cl1.13.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-cl/cl1.13/cl1.13.component.ts ***!
  \*********************************************************************/
/*! exports provided: Cl1_13Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cl1_13Component", function() { return Cl1_13Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-angular-circulargauge */ "./node_modules/@syncfusion/ej2-angular-circulargauge/__ivy_ngcc__/@syncfusion/ej2-angular-circulargauge.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");















var _c0 = ["gaugeCL1_13"];
var Cl1_13Component = /** @class */ (function () {
    function Cl1_13Component(http, api, apiGetComp, decimalPipe) {
        this.http = http;
        this.api = api;
        this.apiGetComp = apiGetComp;
        this.decimalPipe = decimalPipe;
        this.alive = true;
        this.TeamCL1_13 = {
            CL1_13_VelocidadActualMotor: 0,
            CL1_13_CorrienteActualMotor: 0,
            CL1_13_PotenciaActualMotor: 0,
            CL1_13_TorqueActualMotor: 0,
            CL1_13_KWh: 0,
            CL1_13_voltaje: 0
        };
        this.velocidadCL1_13 = 0;
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
    Cl1_13Component.prototype.ngOnInit = function () {
        this.changeCL1_13();
        // this.dataSF1()
    };
    Cl1_13Component.prototype.gauge = function () {
        if (document.getElementById('sample-data')) {
            var value1 = this.velocidadCL1_13;
            this.osr1_1.axes[0].pointers[0].animation.enable = true;
            this.osr1_1.setPointerValue(0, 0, value1);
            this.osr1_1.setAnnotationValue(0, 0, this.osr1_1.axes[0].annotations[0].content);
        }
        else {
            clearInterval(this.tooltipInterval1);
        }
    };
    Cl1_13Component.prototype.test = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-data')) {
                var value1 = _this.velocidadCL1_13;
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 1000);
    };
    Cl1_13Component.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-dataCL1_13')) {
                var value1 = _this.velocidadCL1_13;
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
    Cl1_13Component.prototype.changeCL1_13 = function () {
        var _this = this;
        this.apiGetComp.GetJson(this.api.apiUrlNode1 + '/api/CL1_13')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('No hay data CL1_13');
                res.CL1_13_VelocidadActualMotor = 0;
                res.CL1_13_CorrienteActualMotor = 0;
                res.CL1_13_PotenciaActualMotor = 0;
                res.CL1_13_KWh = 0;
            }
            else {
                _this.TeamCL1_13 = res[0];
                // this.dataSF1_1 = TeamSF1_1
                // this.velocidadCL1_13 = this.decimalPipe.transform(this.TeamCL1_13?.CL1_13_VelocidadActualMotor) ?? 0;
                // console.log('SF1_1:', this.TeamCL1_13);
                _this.velocidadCL1_13 = (_b = (_a = _this.TeamCL1_13) === null || _a === void 0 ? void 0 : _a.CL1_13_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
            _this.dataCL1_13();
        });
    };
    Cl1_13Component.prototype.dataCL1_13 = function () {
        var _this = this;
        if (this.intervalSubscriptionItems) {
            this.intervalSubscriptionItems.unsubscribe();
        }
        this.intervalSubscriptionItems = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(3000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.apiGetComp.GetJson(_this.api.apiUrlNode1 + '/api/CL1_13'); }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('no hay data CL1_13');
                res.CL1_13_VelocidadActualMotor = 0;
                res.CL1_13_CorrienteActualMotor = 0;
                res.CL1_13_PotenciaActualMotor = 0;
                res.CL1_13_KWh = 0;
            }
            else {
                _this.TeamCL1_13 = res[0];
                // this.dataSF1_1 = TeamSF1_1
                _this.velocidadCL1_13 = (_b = (_a = _this.TeamCL1_13) === null || _a === void 0 ? void 0 : _a.CL1_13_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        }, function (error) { return (console.log(error)); }, function () { return console.log('Error..!'); });
    };
    Cl1_13Component.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    Cl1_13Component.ɵfac = function Cl1_13Component_Factory(t) { return new (t || Cl1_13Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"])); };
    Cl1_13Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Cl1_13Component, selectors: [["ngx-cl1_13"]], viewQuery: function Cl1_13Component_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.osr1_1 = _t.first);
        } }, decls: 29, vars: 14, consts: [["id", "sample-dataCL1_13", 2, "display", "block", "height", "150px"], ["gaugeCL1_13", ""], ["startAngle", "260", "endAngle", "100", 3, "majorTicks", "minorTicks", "labelStyle", "lineStyle", "ranges", "pointers"], ["angle", "180", "radius", "30%", "zIndex", "1", 3, "content"], [2, "margin-left", "23%", "margin-top", "-0%", "padding-top", "-40px", "padding-block-start", "-98px"], [2, "padding", "0.5625em 0.625em", "margin-top", "-0.10rem"], [2, "padding", "0.5625em 0.625em", "margin-top", "-1.9rem"]], template: function Cl1_13Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " CL1_13 ");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Consumo:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "number");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("  ", ctx.TeamCL1_13 == null ? null : ctx.TeamCL1_13.CL1_13_CorrienteActualMotor, "  \u00A0 A");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("   ", ctx.TeamCL1_13 == null ? null : ctx.TeamCL1_13.CL1_13_PotenciaActualMotor, " \u00A0 W");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 10, ctx.TeamCL1_13 == null ? null : ctx.TeamCL1_13.CL1_13_voltaje), "   VAC ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 12, ctx.TeamCL1_13 == null ? null : ctx.TeamCL1_13.CL1_13_KWh), "  \u00A0 kwh ");
        } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["CircularGaugeComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxesDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxisDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationsDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3pvbmUtdGVhbXMvdGVhbS1jbC9jbDEuMTMvY2wxLjEzLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return Cl1_13Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Cl1_13Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-cl1_13',
                templateUrl: './cl1.13.component.html',
                styleUrls: ['./cl1.13.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"] }]; }, { osr1_1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gaugeCL1_13']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/zone-teams/team-cl/cl1.14/cl1.14.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-cl/cl1.14/cl1.14.component.ts ***!
  \*********************************************************************/
/*! exports provided: Cl1_14Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cl1_14Component", function() { return Cl1_14Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-angular-circulargauge */ "./node_modules/@syncfusion/ej2-angular-circulargauge/__ivy_ngcc__/@syncfusion/ej2-angular-circulargauge.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");















var _c0 = ["gaugeCL1_14"];
var Cl1_14Component = /** @class */ (function () {
    function Cl1_14Component(http, api, apiGetComp, decimalPipe) {
        this.http = http;
        this.api = api;
        this.apiGetComp = apiGetComp;
        this.decimalPipe = decimalPipe;
        this.alive = true;
        this.TeamCL1_14 = {
            CL1_14_VelocidadActualMotor: 0,
            CL1_14_CorrienteActualMotor: 0,
            CL1_14_PotenciaActualMotor: 0,
            CL1_14_TorqueActualMotor: 0,
            CL1_14_KWh: 0,
            CL1_14_voltaje: 0
        };
        this.velocidadCL1_14 = 0;
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
    Cl1_14Component.prototype.ngOnInit = function () {
        this.changeCL1_14();
        // this.dataSF1()
    };
    Cl1_14Component.prototype.gauge = function () {
        if (document.getElementById('sample-data')) {
            var value1 = this.velocidadCL1_14;
            this.osr1_1.axes[0].pointers[0].animation.enable = true;
            this.osr1_1.setPointerValue(0, 0, value1);
            this.osr1_1.setAnnotationValue(0, 0, this.osr1_1.axes[0].annotations[0].content);
        }
        else {
            clearInterval(this.tooltipInterval1);
        }
    };
    Cl1_14Component.prototype.test = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-data')) {
                var value1 = _this.velocidadCL1_14;
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 1000);
    };
    Cl1_14Component.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-dataCL1_14')) {
                var value1 = _this.velocidadCL1_14;
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
    Cl1_14Component.prototype.changeCL1_14 = function () {
        var _this = this;
        this.apiGetComp.GetJson(this.api.apiUrlNode1 + '/CL1_14')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('No hay data CL1_14');
                res.CL1_14_VelocidadActualMotor = 0;
                res.CL1_14_CorrienteActualMotor = 0;
                res.CL1_14_PotenciaActualMotor = 0;
                res.CL1_14_KWh = 0;
            }
            else {
                _this.TeamCL1_14 = res;
                // this.dataSF1_1 = TeamSF1_1
                // this.velocidadCL1_14 = this.decimalPipe.transform(this.TeamCL1_14?.CL1_14_VelocidadActualMotor) ?? 0;
                // console.log('SF1_1:', this.TeamCL1_14);
                _this.velocidadCL1_14 = (_b = (_a = _this.TeamCL1_14) === null || _a === void 0 ? void 0 : _a.CL1_14_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        });
    };
    Cl1_14Component.prototype.dataCL1_14 = function () {
        var _this = this;
        if (this.intervalSubscriptionItems) {
            this.intervalSubscriptionItems.unsubscribe();
        }
        this.intervalSubscriptionItems = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(3000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.apiGetComp.GetJson(_this.api.apiUrlNode1 + '/CL1_14'); }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('no hay data CL1_14');
                res.CL1_14_VelocidadActualMotor = 0;
                res.CL1_14_CorrienteActualMotor = 0;
                res.CL1_14_PotenciaActualMotor = 0;
                res.CL1_14_KWh = 0;
            }
            else {
                _this.TeamCL1_14 = res;
                // this.dataSF1_1 = TeamSF1_1
                _this.velocidadCL1_14 = (_b = (_a = _this.TeamCL1_14) === null || _a === void 0 ? void 0 : _a.CL1_14_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        }, function (error) { return (console.log(error)); }, function () { return console.log('Error..!'); });
    };
    Cl1_14Component.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    Cl1_14Component.ɵfac = function Cl1_14Component_Factory(t) { return new (t || Cl1_14Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"])); };
    Cl1_14Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Cl1_14Component, selectors: [["ngx-cl1_14"]], viewQuery: function Cl1_14Component_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.osr1_1 = _t.first);
        } }, decls: 28, vars: 12, consts: [["id", "sample-dataCL1_14", 2, "display", "block", "height", "150px"], ["gaugeCL1_14", ""], ["startAngle", "260", "endAngle", "100", 3, "majorTicks", "minorTicks", "labelStyle", "lineStyle", "ranges", "pointers"], ["angle", "180", "radius", "30%", "zIndex", "1", 3, "content"], [2, "margin-left", "23%", "margin-top", "-0%", "padding-top", "-40px", "padding-block-start", "-98px"], [2, "padding", "0.5625em 0.625em", "margin-top", "-0.10rem"], [2, "padding", "0.5625em 0.625em", "margin-top", "-1.9rem"]], template: function Cl1_14Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " CL1_14 ");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("  ", ctx.TeamCL1_14 == null ? null : ctx.TeamCL1_14.CL1_14_CorrienteActualMotor, "  \u00A0 A");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("   ", ctx.TeamCL1_14 == null ? null : ctx.TeamCL1_14.CL1_14_PotenciaActualMotor, " \u00A0 W");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", ctx.TeamCL1_14 == null ? null : ctx.TeamCL1_14.CL1_14_voltaje, "   VAC ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 10, ctx.TeamCL1_14 == null ? null : ctx.TeamCL1_14.CL1_14_KWh), "  \u00A0 kwh ");
        } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["CircularGaugeComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxesDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxisDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationsDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3pvbmUtdGVhbXMvdGVhbS1jbC9jbDEuMTQvY2wxLjE0LmNvbXBvbmVudC5zY3NzIn0= */"] });
    return Cl1_14Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Cl1_14Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-cl1_14',
                templateUrl: './cl1.14.component.html',
                styleUrls: ['./cl1.14.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"] }]; }, { osr1_1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gaugeCL1_14']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/zone-teams/team-cl/cl1.15/cl1.15.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-cl/cl1.15/cl1.15.component.ts ***!
  \*********************************************************************/
/*! exports provided: Cl1_15Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cl1_15Component", function() { return Cl1_15Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-angular-circulargauge */ "./node_modules/@syncfusion/ej2-angular-circulargauge/__ivy_ngcc__/@syncfusion/ej2-angular-circulargauge.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");















var _c0 = ["gaugeCL1_15"];
var Cl1_15Component = /** @class */ (function () {
    function Cl1_15Component(http, api, apiGetComp, decimalPipe) {
        this.http = http;
        this.api = api;
        this.apiGetComp = apiGetComp;
        this.decimalPipe = decimalPipe;
        this.alive = true;
        this.TeamCL1_15 = {
            CL1_15_VelocidadActualMotor: 0,
            CL1_15_CorrienteActualMotor: 0,
            CL1_15_PotenciaActualMotor: 0,
            CL1_15_TorqueActualMotor: 0,
            CL1_15_KWh: 0,
            CL1_15_voltaje: 0
        };
        this.velocidadCL1_15 = 0;
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
    Cl1_15Component.prototype.ngOnInit = function () {
        this.changeCL1_15();
        // this.dataSF1()
    };
    Cl1_15Component.prototype.gauge = function () {
        if (document.getElementById('sample-data')) {
            var value1 = this.velocidadCL1_15;
            this.osr1_1.axes[0].pointers[0].animation.enable = true;
            this.osr1_1.setPointerValue(0, 0, value1);
            this.osr1_1.setAnnotationValue(0, 0, this.osr1_1.axes[0].annotations[0].content);
        }
        else {
            clearInterval(this.tooltipInterval1);
        }
    };
    Cl1_15Component.prototype.test = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-data')) {
                var value1 = _this.velocidadCL1_15;
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 1000);
    };
    Cl1_15Component.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-dataCL1_15')) {
                var value1 = _this.velocidadCL1_15;
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
    Cl1_15Component.prototype.changeCL1_15 = function () {
        var _this = this;
        this.apiGetComp.GetJson(this.api.apiUrlNode1 + '/api/CL1_15')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('No hay data CL1_15');
                res.CL1_15_VelocidadActualMotor = 0;
                res.CL1_15_CorrienteActualMotor = 0;
                res.CL1_15_PotenciaActualMotor = 0;
                res.CL1_15_KWh = 0;
            }
            else {
                _this.TeamCL1_15 = res[0];
                // this.dataSF1_1 = TeamSF1_1
                // this.velocidadCL1_15 = this.decimalPipe.transform(this.TeamCL1_15?.CL1_15_VelocidadActualMotor) ?? 0;
                // console.log('SF1_1:', this.TeamCL1_15);
                _this.velocidadCL1_15 = (_b = (_a = _this.TeamCL1_15) === null || _a === void 0 ? void 0 : _a.CL1_15_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
            _this.dataCL1_15();
        });
    };
    Cl1_15Component.prototype.dataCL1_15 = function () {
        var _this = this;
        if (this.intervalSubscriptionItems) {
            this.intervalSubscriptionItems.unsubscribe();
        }
        this.intervalSubscriptionItems = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(3000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.apiGetComp.GetJson(_this.api.apiUrlNode1 + '/api/CL1_15'); }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('no hay data CL1_15');
                res.CL1_15_VelocidadActualMotor = 0;
                res.CL1_15_CorrienteActualMotor = 0;
                res.CL1_15_PotenciaActualMotor = 0;
                res.CL1_15_KWh = 0;
            }
            else {
                _this.TeamCL1_15 = res[0];
                // this.dataSF1_1 = TeamSF1_1
                _this.velocidadCL1_15 = (_b = (_a = _this.TeamCL1_15) === null || _a === void 0 ? void 0 : _a.CL1_15_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        }, function (error) { return (console.log(error)); }, function () { return console.log('Error..!'); });
    };
    Cl1_15Component.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    Cl1_15Component.ɵfac = function Cl1_15Component_Factory(t) { return new (t || Cl1_15Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"])); };
    Cl1_15Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Cl1_15Component, selectors: [["ngx-cl1_15"]], viewQuery: function Cl1_15Component_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.osr1_1 = _t.first);
        } }, decls: 29, vars: 14, consts: [["id", "sample-dataCL1_15", 2, "display", "block", "height", "150px"], ["gaugeCL1_15", ""], ["startAngle", "260", "endAngle", "100", 3, "majorTicks", "minorTicks", "labelStyle", "lineStyle", "ranges", "pointers"], ["angle", "180", "radius", "30%", "zIndex", "1", 3, "content"], [2, "margin-left", "23%", "margin-top", "-0%", "padding-top", "-40px", "padding-block-start", "-98px"], [2, "padding", "0.5625em 0.625em", "margin-top", "-0.10rem"], [2, "padding", "0.5625em 0.625em", "margin-top", "-1.9rem"]], template: function Cl1_15Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " CL1_15 ");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Consumo:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "number");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("  ", ctx.TeamCL1_15 == null ? null : ctx.TeamCL1_15.CL1_15_CorrienteActualMotor, "  \u00A0 A");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("   ", ctx.TeamCL1_15 == null ? null : ctx.TeamCL1_15.CL1_15_PotenciaActualMotor, " \u00A0 W");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 10, ctx.TeamCL1_15 == null ? null : ctx.TeamCL1_15.CL1_15_voltaje), "   VAC ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 12, ctx.TeamCL1_15 == null ? null : ctx.TeamCL1_15.CL1_15_KWh), "  \u00A0 kwh ");
        } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["CircularGaugeComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxesDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxisDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationsDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3pvbmUtdGVhbXMvdGVhbS1jbC9jbDEuMTUvY2wxLjE1LmNvbXBvbmVudC5zY3NzIn0= */"] });
    return Cl1_15Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Cl1_15Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-cl1_15',
                templateUrl: './cl1.15.component.html',
                styleUrls: ['./cl1.15.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"] }]; }, { osr1_1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gaugeCL1_15']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/zone-teams/team-cl/cl1.16/cl1.16.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-cl/cl1.16/cl1.16.component.ts ***!
  \*********************************************************************/
/*! exports provided: Cl1_16Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cl1_16Component", function() { return Cl1_16Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-angular-circulargauge */ "./node_modules/@syncfusion/ej2-angular-circulargauge/__ivy_ngcc__/@syncfusion/ej2-angular-circulargauge.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");















var _c0 = ["gaugeCL1_16"];
var Cl1_16Component = /** @class */ (function () {
    function Cl1_16Component(http, api, apiGetComp, decimalPipe) {
        this.http = http;
        this.api = api;
        this.apiGetComp = apiGetComp;
        this.decimalPipe = decimalPipe;
        this.alive = true;
        this.TeamCL1_16 = {
            CL1_16_VelocidadActualMotor: 0,
            CL1_16_CorrienteActualMotor: 0,
            CL1_16_PotenciaActualMotor: 0,
            CL1_16_TorqueActualMotor: 0,
            CL1_16_KWh: 0,
            CL1_16_voltaje: 0
        };
        this.velocidadCL1_16 = 0;
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
    Cl1_16Component.prototype.ngOnInit = function () {
        this.changeCL1_16();
        // this.dataSF1()
    };
    Cl1_16Component.prototype.gauge = function () {
        if (document.getElementById('sample-data')) {
            var value1 = this.velocidadCL1_16;
            this.osr1_1.axes[0].pointers[0].animation.enable = true;
            this.osr1_1.setPointerValue(0, 0, value1);
            this.osr1_1.setAnnotationValue(0, 0, this.osr1_1.axes[0].annotations[0].content);
        }
        else {
            clearInterval(this.tooltipInterval1);
        }
    };
    Cl1_16Component.prototype.test = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-data')) {
                var value1 = _this.velocidadCL1_16;
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 1000);
    };
    Cl1_16Component.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-dataCL1_16')) {
                var value1 = _this.velocidadCL1_16;
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
    Cl1_16Component.prototype.changeCL1_16 = function () {
        var _this = this;
        this.apiGetComp.GetJson(this.api.apiUrlNode1 + '/api/CL1_16')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('No hay data CL1_16');
                res.CL1_16_VelocidadActualMotor = 0;
                res.CL1_16_CorrienteActualMotor = 0;
                res.CL1_16_PotenciaActualMotor = 0;
                res.CL1_16_KWh = 0;
            }
            else {
                _this.TeamCL1_16 = res[0];
                // this.dataSF1_1 = TeamSF1_1
                // this.velocidadCL1_16 = this.decimalPipe.transform(this.TeamCL1_16?.CL1_16_VelocidadActualMotor) ?? 0;
                // console.log('SF1_1:', this.TeamCL1_16);
                _this.velocidadCL1_16 = (_b = (_a = _this.TeamCL1_16) === null || _a === void 0 ? void 0 : _a.CL1_16_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
            _this.dataCL1_16();
        });
    };
    Cl1_16Component.prototype.dataCL1_16 = function () {
        var _this = this;
        if (this.intervalSubscriptionItems) {
            this.intervalSubscriptionItems.unsubscribe();
        }
        this.intervalSubscriptionItems = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(3000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.apiGetComp.GetJson(_this.api.apiUrlNode1 + '/api/CL1_16'); }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('no hay data CL1_16');
                res.CL1_16_VelocidadActualMotor = 0;
                res.CL1_16_CorrienteActualMotor = 0;
                res.CL1_16_PotenciaActualMotor = 0;
                res.CL1_16_KWh = 0;
            }
            else {
                _this.TeamCL1_16 = res[0];
                // this.dataSF1_1 = TeamSF1_1
                _this.velocidadCL1_16 = (_b = (_a = _this.TeamCL1_16) === null || _a === void 0 ? void 0 : _a.CL1_16_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        }, function (error) { return (console.log(error)); }, function () { return console.log('Error..!'); });
    };
    Cl1_16Component.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    Cl1_16Component.ɵfac = function Cl1_16Component_Factory(t) { return new (t || Cl1_16Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"])); };
    Cl1_16Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Cl1_16Component, selectors: [["ngx-cl1_16"]], viewQuery: function Cl1_16Component_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.osr1_1 = _t.first);
        } }, decls: 29, vars: 14, consts: [["id", "sample-dataCL1_16", 2, "display", "block", "height", "150px"], ["gaugeCL1_16", ""], ["startAngle", "260", "endAngle", "100", 3, "majorTicks", "minorTicks", "labelStyle", "lineStyle", "ranges", "pointers"], ["angle", "180", "radius", "30%", "zIndex", "1", 3, "content"], [2, "margin-left", "23%", "margin-top", "-0%", "padding-top", "-40px", "padding-block-start", "-98px"], [2, "padding", "0.5625em 0.625em", "margin-top", "-0.10rem"], [2, "padding", "0.5625em 0.625em", "margin-top", "-1.9rem"]], template: function Cl1_16Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " CL1_16 ");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Consumo:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "number");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("  ", ctx.TeamCL1_16 == null ? null : ctx.TeamCL1_16.CL1_16_CorrienteActualMotor, "  \u00A0 A");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("   ", ctx.TeamCL1_16 == null ? null : ctx.TeamCL1_16.CL1_16_PotenciaActualMotor, " \u00A0 W");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 10, ctx.TeamCL1_16 == null ? null : ctx.TeamCL1_16.CL1_16_voltaje), "   VAC ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 12, ctx.TeamCL1_16 == null ? null : ctx.TeamCL1_16.CL1_16_KWh), "  \u00A0 kwh ");
        } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["CircularGaugeComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxesDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxisDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationsDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3pvbmUtdGVhbXMvdGVhbS1jbC9jbDEuMTYvY2wxLjE2LmNvbXBvbmVudC5zY3NzIn0= */"] });
    return Cl1_16Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Cl1_16Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-cl1_16',
                templateUrl: './cl1.16.component.html',
                styleUrls: ['./cl1.16.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"] }]; }, { osr1_1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gaugeCL1_16']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/zone-teams/team-cl/cl1.17/cl1.17.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-cl/cl1.17/cl1.17.component.ts ***!
  \*********************************************************************/
/*! exports provided: Cl1_17Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cl1_17Component", function() { return Cl1_17Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-angular-circulargauge */ "./node_modules/@syncfusion/ej2-angular-circulargauge/__ivy_ngcc__/@syncfusion/ej2-angular-circulargauge.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");















var _c0 = ["gaugeCL1_17"];
var Cl1_17Component = /** @class */ (function () {
    function Cl1_17Component(http, api, apiGetComp, decimalPipe) {
        this.http = http;
        this.api = api;
        this.apiGetComp = apiGetComp;
        this.decimalPipe = decimalPipe;
        this.alive = true;
        this.TeamCL1_17 = {
            CL1_17_VelocidadActualMotor: 0,
            CL1_17_CorrienteActualMotor: 0,
            CL1_17_PotenciaActualMotor: 0,
            CL1_17_TorqueActualMotor: 0,
            CL1_17_KWh: 0,
            CL1_17_voltaje: 0
        };
        this.velocidadCL1_17 = 0;
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
    Cl1_17Component.prototype.ngOnInit = function () {
        this.changeCL1_17();
        // this.dataSF1()
    };
    Cl1_17Component.prototype.gauge = function () {
        if (document.getElementById('sample-data')) {
            var value1 = this.velocidadCL1_17;
            this.osr1_1.axes[0].pointers[0].animation.enable = true;
            this.osr1_1.setPointerValue(0, 0, value1);
            this.osr1_1.setAnnotationValue(0, 0, this.osr1_1.axes[0].annotations[0].content);
        }
        else {
            clearInterval(this.tooltipInterval1);
        }
    };
    Cl1_17Component.prototype.test = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-data')) {
                var value1 = _this.velocidadCL1_17;
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 1000);
    };
    Cl1_17Component.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-dataCL1_17')) {
                var value1 = _this.velocidadCL1_17;
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
    Cl1_17Component.prototype.changeCL1_17 = function () {
        var _this = this;
        this.apiGetComp.GetJson(this.api.apiUrlNode1 + '/api/CL1_17')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('No hay data CL1_17');
                res.CL1_17_VelocidadActualMotor = 0;
                res.CL1_17_CorrienteActualMotor = 0;
                res.CL1_17_PotenciaActualMotor = 0;
                res.CL1_17_KWh = 0;
            }
            else {
                _this.TeamCL1_17 = res[0];
                // this.dataSF1_1 = TeamSF1_1
                // this.velocidadCL1_17 = this.decimalPipe.transform(this.TeamCL1_17?.CL1_17_VelocidadActualMotor) ?? 0;
                // console.log('SF1_1:', this.TeamCL1_17);
                _this.velocidadCL1_17 = (_b = (_a = _this.TeamCL1_17) === null || _a === void 0 ? void 0 : _a.CL1_17_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
            _this.dataCL1_17();
        });
    };
    Cl1_17Component.prototype.dataCL1_17 = function () {
        var _this = this;
        if (this.intervalSubscriptionItems) {
            this.intervalSubscriptionItems.unsubscribe();
        }
        this.intervalSubscriptionItems = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(3000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.apiGetComp.GetJson(_this.api.apiUrlNode1 + '/api/CL1_17'); }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('no hay data CL1_17');
                res.CL1_17_VelocidadActualMotor = 0;
                res.CL1_17_CorrienteActualMotor = 0;
                res.CL1_17_PotenciaActualMotor = 0;
                res.CL1_17_KWh = 0;
            }
            else {
                _this.TeamCL1_17 = res[0];
                // this.dataSF1_1 = TeamSF1_1
                _this.velocidadCL1_17 = (_b = (_a = _this.TeamCL1_17) === null || _a === void 0 ? void 0 : _a.CL1_17_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        }, function (error) { return (console.log(error)); }, function () { return console.log('Error..!'); });
    };
    Cl1_17Component.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    Cl1_17Component.ɵfac = function Cl1_17Component_Factory(t) { return new (t || Cl1_17Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"])); };
    Cl1_17Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Cl1_17Component, selectors: [["ngx-cl1_17"]], viewQuery: function Cl1_17Component_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.osr1_1 = _t.first);
        } }, decls: 29, vars: 14, consts: [["id", "sample-dataCL1_17", 2, "display", "block", "height", "150px"], ["gaugeCL1_17", ""], ["startAngle", "260", "endAngle", "100", 3, "majorTicks", "minorTicks", "labelStyle", "lineStyle", "ranges", "pointers"], ["angle", "180", "radius", "30%", "zIndex", "1", 3, "content"], [2, "margin-left", "23%", "margin-top", "-0%", "padding-top", "-40px", "padding-block-start", "-98px"], [2, "padding", "0.5625em 0.625em", "margin-top", "-0.10rem"], [2, "padding", "0.5625em 0.625em", "margin-top", "-1.9rem"]], template: function Cl1_17Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " CL1_17 ");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Consumo:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "number");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("  ", ctx.TeamCL1_17 == null ? null : ctx.TeamCL1_17.CL1_17_CorrienteActualMotor, "  \u00A0 A");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("   ", ctx.TeamCL1_17 == null ? null : ctx.TeamCL1_17.CL1_17_PotenciaActualMotor, " \u00A0 W");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 10, ctx.TeamCL1_17 == null ? null : ctx.TeamCL1_17.CL1_17_voltaje), "   VAC ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 12, ctx.TeamCL1_17 == null ? null : ctx.TeamCL1_17.CL1_17_KWh), "  \u00A0 kwh ");
        } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["CircularGaugeComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxesDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxisDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationsDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3pvbmUtdGVhbXMvdGVhbS1jbC9jbDEuMTcvY2wxLjE3LmNvbXBvbmVudC5zY3NzIn0= */"] });
    return Cl1_17Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Cl1_17Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-cl1_17',
                templateUrl: './cl1.17.component.html',
                styleUrls: ['./cl1.17.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"] }]; }, { osr1_1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gaugeCL1_17']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/zone-teams/team-cl/cl1.18/cl1.18.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-cl/cl1.18/cl1.18.component.ts ***!
  \*********************************************************************/
/*! exports provided: Cl1_18Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cl1_18Component", function() { return Cl1_18Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-angular-circulargauge */ "./node_modules/@syncfusion/ej2-angular-circulargauge/__ivy_ngcc__/@syncfusion/ej2-angular-circulargauge.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");















var _c0 = ["gaugeCL1_18"];
var Cl1_18Component = /** @class */ (function () {
    function Cl1_18Component(http, api, apiGetComp, decimalPipe) {
        this.http = http;
        this.api = api;
        this.apiGetComp = apiGetComp;
        this.decimalPipe = decimalPipe;
        this.alive = true;
        this.TeamCL1_18 = {
            CL1_18_VelocidadActualMotor: 0,
            CL1_18_CorrienteActualMotor: 0,
            CL1_18_PotenciaActualMotor: 0,
            CL1_18_TorqueActualMotor: 0,
            CL1_18_KWh: 0,
            CL1_18_voltaje: 0
        };
        this.velocidadCL1_18 = 0;
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
    Cl1_18Component.prototype.ngOnInit = function () {
        this.changeCL1_18();
        // this.dataSF1()
    };
    Cl1_18Component.prototype.gauge = function () {
        if (document.getElementById('sample-data')) {
            var value1 = this.velocidadCL1_18;
            this.osr1_1.axes[0].pointers[0].animation.enable = true;
            this.osr1_1.setPointerValue(0, 0, value1);
            this.osr1_1.setAnnotationValue(0, 0, this.osr1_1.axes[0].annotations[0].content);
        }
        else {
            clearInterval(this.tooltipInterval1);
        }
    };
    Cl1_18Component.prototype.test = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-data')) {
                var value1 = _this.velocidadCL1_18;
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 1000);
    };
    Cl1_18Component.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-dataCL1_18')) {
                var value1 = _this.velocidadCL1_18;
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
    Cl1_18Component.prototype.changeCL1_18 = function () {
        var _this = this;
        this.apiGetComp.GetJson(this.api.apiUrlNode1 + '/api/CL1_18')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('No hay data CL1_18');
                res.CL1_18_VelocidadActualMotor = 0;
                res.CL1_18_CorrienteActualMotor = 0;
                res.CL1_18_PotenciaActualMotor = 0;
                res.CL1_18_KWh = 0;
            }
            else {
                _this.TeamCL1_18 = res[0];
                // this.dataSF1_1 = TeamSF1_1
                // this.velocidadCL1_18 = this.decimalPipe.transform(this.TeamCL1_18?.CL1_18_VelocidadActualMotor) ?? 0;
                // console.log('SF1_1:', this.TeamCL1_18);
                _this.velocidadCL1_18 = (_b = (_a = _this.TeamCL1_18) === null || _a === void 0 ? void 0 : _a.CL1_18_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
            _this.dataCL1_18();
        });
    };
    Cl1_18Component.prototype.dataCL1_18 = function () {
        var _this = this;
        if (this.intervalSubscriptionItems) {
            this.intervalSubscriptionItems.unsubscribe();
        }
        this.intervalSubscriptionItems = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(3000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.apiGetComp.GetJson(_this.api.apiUrlNode1 + '/api/CL1_18'); }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('no hay data CL1_18');
                res.CL1_18_VelocidadActualMotor = 0;
                res.CL1_18_CorrienteActualMotor = 0;
                res.CL1_18_PotenciaActualMotor = 0;
                res.CL1_18_KWh = 0;
            }
            else {
                _this.TeamCL1_18 = res[0];
                // this.dataSF1_1 = TeamSF1_1
                _this.velocidadCL1_18 = (_b = (_a = _this.TeamCL1_18) === null || _a === void 0 ? void 0 : _a.CL1_18_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        }, function (error) { return (console.log(error)); }, function () { return console.log('Error..!'); });
    };
    Cl1_18Component.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    Cl1_18Component.ɵfac = function Cl1_18Component_Factory(t) { return new (t || Cl1_18Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"])); };
    Cl1_18Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Cl1_18Component, selectors: [["ngx-cl1_18"]], viewQuery: function Cl1_18Component_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.osr1_1 = _t.first);
        } }, decls: 29, vars: 14, consts: [["id", "sample-dataCL1_18", 2, "display", "block", "height", "150px"], ["gaugeCL1_18", ""], ["startAngle", "260", "endAngle", "100", 3, "majorTicks", "minorTicks", "labelStyle", "lineStyle", "ranges", "pointers"], ["angle", "180", "radius", "30%", "zIndex", "1", 3, "content"], [2, "margin-left", "23%", "margin-top", "-0%", "padding-top", "-40px", "padding-block-start", "-98px"], [2, "padding", "0.5625em 0.625em", "margin-top", "-0.10rem"], [2, "padding", "0.5625em 0.625em", "margin-top", "-1.9rem"]], template: function Cl1_18Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " CL1_18 ");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Consumo:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "number");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("  ", ctx.TeamCL1_18 == null ? null : ctx.TeamCL1_18.CL1_18_CorrienteActualMotor, "  \u00A0 A");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("   ", ctx.TeamCL1_18 == null ? null : ctx.TeamCL1_18.CL1_18_PotenciaActualMotor, " \u00A0 W");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 10, ctx.TeamCL1_18 == null ? null : ctx.TeamCL1_18.CL1_18_voltaje), "   VAC ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 12, ctx.TeamCL1_18 == null ? null : ctx.TeamCL1_18.CL1_18_KWh), "  \u00A0 kwh ");
        } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["CircularGaugeComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxesDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxisDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationsDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3pvbmUtdGVhbXMvdGVhbS1jbC9jbDEuMTgvY2wxLjE4LmNvbXBvbmVudC5zY3NzIn0= */"] });
    return Cl1_18Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Cl1_18Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-cl1_18',
                templateUrl: './cl1.18.component.html',
                styleUrls: ['./cl1.18.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"] }]; }, { osr1_1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gaugeCL1_18']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/zone-teams/team-cl/cl1.2/cl1.2.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-cl/cl1.2/cl1.2.component.ts ***!
  \*******************************************************************/
/*! exports provided: Cl1_2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cl1_2Component", function() { return Cl1_2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-angular-circulargauge */ "./node_modules/@syncfusion/ej2-angular-circulargauge/__ivy_ngcc__/@syncfusion/ej2-angular-circulargauge.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");















var _c0 = ["gaugeCL1_2"];
var Cl1_2Component = /** @class */ (function () {
    function Cl1_2Component(http, api, apiGetComp, decimalPipe) {
        this.http = http;
        this.api = api;
        this.apiGetComp = apiGetComp;
        this.decimalPipe = decimalPipe;
        this.alive = true;
        this.TeamCL1_2 = {
            CL1_2_VelocidadActualMotor: 0,
            CL1_2_CorrienteActualMotor: 0,
            CL1_2_PotenciaActualMotor: 0,
            CL1_2_TorqueActualMotor: 0,
            CL1_2_KWh: 0,
            CL1_2_voltaje: 0
        };
        this.velocidadCL1_2 = 0;
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
    Cl1_2Component.prototype.ngOnInit = function () {
        this.changeCL1_2();
        // this.dataSF1()
    };
    Cl1_2Component.prototype.gauge = function () {
        if (document.getElementById('sample-data')) {
            var value1 = this.velocidadCL1_2;
            this.osr1_1.axes[0].pointers[0].animation.enable = true;
            this.osr1_1.setPointerValue(0, 0, value1);
            this.osr1_1.setAnnotationValue(0, 0, this.osr1_1.axes[0].annotations[0].content);
        }
        else {
            clearInterval(this.tooltipInterval1);
        }
    };
    Cl1_2Component.prototype.test = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-data')) {
                var value1 = _this.velocidadCL1_2;
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 1000);
    };
    Cl1_2Component.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-dataCL1_2')) {
                var value1 = _this.velocidadCL1_2;
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
    Cl1_2Component.prototype.changeCL1_2 = function () {
        var _this = this;
        this.apiGetComp.GetJson(this.api.apiUrlNode1 + '/api/CL1_2')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('No hay data CL1_2');
                res.CL1_2_VelocidadActualMotor = 0;
                res.CL1_2_CorrienteActualMotor = 0;
                res.CL1_2_PotenciaActualMotor = 0;
                res.CL1_2_KWh = 0;
            }
            else {
                _this.TeamCL1_2 = res[0];
                // this.dataSF1_1 = TeamSF1_1
                // this.velocidadCL1_2 = this.decimalPipe.transform(this.TeamCL1_2?.CL1_2_VelocidadActualMotor) ?? 0;
                // console.log('SF1_1:', this.TeamCL1_2);
                _this.velocidadCL1_2 = (_b = (_a = _this.TeamCL1_2) === null || _a === void 0 ? void 0 : _a.CL1_2_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
            _this.dataCL1_2();
        });
    };
    Cl1_2Component.prototype.dataCL1_2 = function () {
        var _this = this;
        if (this.intervalSubscriptionItems) {
            this.intervalSubscriptionItems.unsubscribe();
        }
        this.intervalSubscriptionItems = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(3000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.apiGetComp.GetJson(_this.api.apiUrlNode1 + '/api/CL1_2'); }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('no hay data CL1_2');
                res.CL1_2_VelocidadActualMotor = 0;
                res.CL1_2_CorrienteActualMotor = 0;
                res.CL1_2_PotenciaActualMotor = 0;
                res.CL1_2_KWh = 0;
            }
            else {
                _this.TeamCL1_2 = res[0];
                // this.dataSF1_1 = TeamSF1_1
                _this.velocidadCL1_2 = (_b = (_a = _this.TeamCL1_2) === null || _a === void 0 ? void 0 : _a.CL1_2_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        }, function (error) { return (console.log(error)); }, function () { return console.log('Error..!'); });
    };
    Cl1_2Component.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    Cl1_2Component.ɵfac = function Cl1_2Component_Factory(t) { return new (t || Cl1_2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"])); };
    Cl1_2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Cl1_2Component, selectors: [["ngx-cl1_2"]], viewQuery: function Cl1_2Component_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.osr1_1 = _t.first);
        } }, decls: 29, vars: 14, consts: [["id", "sample-dataCL1_2", 2, "display", "block", "height", "150px"], ["gaugeCL1_2", ""], ["startAngle", "260", "endAngle", "100", 3, "majorTicks", "minorTicks", "labelStyle", "lineStyle", "ranges", "pointers"], ["angle", "180", "radius", "30%", "zIndex", "1", 3, "content"], [2, "margin-left", "23%", "margin-top", "-0%", "padding-top", "-40px", "padding-block-start", "-98px"], [2, "padding", "0.5625em 0.625em", "margin-top", "-0.10rem"], [2, "padding", "0.5625em 0.625em", "margin-top", "-1.9rem"]], template: function Cl1_2Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " CL1_2 ");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Consumo:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "number");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("  ", ctx.TeamCL1_2 == null ? null : ctx.TeamCL1_2.CL1_2_CorrienteActualMotor, "  \u00A0 A");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("   ", ctx.TeamCL1_2 == null ? null : ctx.TeamCL1_2.CL1_2_PotenciaActualMotor, " \u00A0 W");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 10, ctx.TeamCL1_2 == null ? null : ctx.TeamCL1_2.CL1_2_voltaje), "   VAC ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 12, ctx.TeamCL1_2 == null ? null : ctx.TeamCL1_2.CL1_2_KWh), "  \u00A0 kwh ");
        } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["CircularGaugeComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxesDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxisDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationsDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3pvbmUtdGVhbXMvdGVhbS1jbC9jbDEuMi9jbDEuMi5jb21wb25lbnQuc2NzcyJ9 */"] });
    return Cl1_2Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Cl1_2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-cl1_2',
                templateUrl: './cl1.2.component.html',
                styleUrls: ['./cl1.2.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"] }]; }, { osr1_1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gaugeCL1_2']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/zone-teams/team-cl/cl1.3/cl1.3.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-cl/cl1.3/cl1.3.component.ts ***!
  \*******************************************************************/
/*! exports provided: Cl1_3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cl1_3Component", function() { return Cl1_3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-angular-circulargauge */ "./node_modules/@syncfusion/ej2-angular-circulargauge/__ivy_ngcc__/@syncfusion/ej2-angular-circulargauge.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");















var _c0 = ["gaugeCL1_3"];
var Cl1_3Component = /** @class */ (function () {
    function Cl1_3Component(http, api, apiGetComp, decimalPipe) {
        this.http = http;
        this.api = api;
        this.apiGetComp = apiGetComp;
        this.decimalPipe = decimalPipe;
        this.alive = true;
        this.TeamCL1_3 = {
            CL1_3_VelocidadActualMotor: 0,
            CL1_3_CorrienteActualMotor: 0,
            CL1_3_PotenciaActualMotor: 0,
            CL1_3_TorqueActualMotor: 0,
            CL1_3_KWh: 0,
            CL1_3_voltaje: 0
        };
        this.velocidadCL1_3 = 0;
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
    Cl1_3Component.prototype.ngOnInit = function () {
        this.changeCL1_3();
        // this.dataSF1()
    };
    Cl1_3Component.prototype.gauge = function () {
        if (document.getElementById('sample-data')) {
            var value1 = this.velocidadCL1_3;
            this.osr1_1.axes[0].pointers[0].animation.enable = true;
            this.osr1_1.setPointerValue(0, 0, value1);
            this.osr1_1.setAnnotationValue(0, 0, this.osr1_1.axes[0].annotations[0].content);
        }
        else {
            clearInterval(this.tooltipInterval1);
        }
    };
    Cl1_3Component.prototype.test = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-data')) {
                var value1 = _this.velocidadCL1_3;
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 1000);
    };
    Cl1_3Component.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-dataCL1_3')) {
                var value1 = _this.velocidadCL1_3;
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
    Cl1_3Component.prototype.changeCL1_3 = function () {
        var _this = this;
        this.apiGetComp.GetJson(this.api.apiUrlNode1 + '/api/CL1_3')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('No hay data CL1_3');
                res.CL1_3_VelocidadActualMotor = 0;
                res.CL1_3_CorrienteActualMotor = 0;
                res.CL1_3_PotenciaActualMotor = 0;
                res.CL1_3_KWh = 0;
            }
            else {
                _this.TeamCL1_3 = res[0];
                // this.dataSF1_1 = TeamSF1_1
                // this.velocidadCL1_3 = this.decimalPipe.transform(this.TeamCL1_3?.CL1_3_VelocidadActualMotor) ?? 0;
                // console.log('SF1_1:', this.TeamCL1_3);
                _this.velocidadCL1_3 = (_b = (_a = _this.TeamCL1_3) === null || _a === void 0 ? void 0 : _a.CL1_3_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
            _this.dataCL1_3();
        });
    };
    Cl1_3Component.prototype.dataCL1_3 = function () {
        var _this = this;
        if (this.intervalSubscriptionItems) {
            this.intervalSubscriptionItems.unsubscribe();
        }
        this.intervalSubscriptionItems = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(3000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.apiGetComp.GetJson(_this.api.apiUrlNode1 + '/api/CL1_3'); }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('no hay data CL1_3');
                res.CL1_3_VelocidadActualMotor = 0;
                res.CL1_3_CorrienteActualMotor = 0;
                res.CL1_3_PotenciaActualMotor = 0;
                res.CL1_3_KWh = 0;
            }
            else {
                _this.TeamCL1_3 = res[0];
                // this.dataSF1_1 = TeamSF1_1
                _this.velocidadCL1_3 = (_b = (_a = _this.TeamCL1_3) === null || _a === void 0 ? void 0 : _a.CL1_3_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        }, function (error) { return (console.log(error)); }, function () { return console.log('Error..!'); });
    };
    Cl1_3Component.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    Cl1_3Component.ɵfac = function Cl1_3Component_Factory(t) { return new (t || Cl1_3Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"])); };
    Cl1_3Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Cl1_3Component, selectors: [["ngx-cl1_3"]], viewQuery: function Cl1_3Component_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.osr1_1 = _t.first);
        } }, decls: 29, vars: 14, consts: [["id", "sample-dataCL1_3", 2, "display", "block", "height", "150px"], ["gaugeCL1_3", ""], ["startAngle", "260", "endAngle", "100", 3, "majorTicks", "minorTicks", "labelStyle", "lineStyle", "ranges", "pointers"], ["angle", "180", "radius", "30%", "zIndex", "1", 3, "content"], [2, "margin-left", "23%", "margin-top", "-0%", "padding-top", "-40px", "padding-block-start", "-98px"], [2, "padding", "0.5625em 0.625em", "margin-top", "-0.10rem"], [2, "padding", "0.5625em 0.625em", "margin-top", "-1.9rem"]], template: function Cl1_3Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " CL1_3 ");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Consumo:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "number");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("  ", ctx.TeamCL1_3 == null ? null : ctx.TeamCL1_3.CL1_3_CorrienteActualMotor, "  \u00A0 A");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("   ", ctx.TeamCL1_3 == null ? null : ctx.TeamCL1_3.CL1_3_PotenciaActualMotor, " \u00A0 W");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 10, ctx.TeamCL1_3 == null ? null : ctx.TeamCL1_3.CL1_3_voltaje), "   VAC ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 12, ctx.TeamCL1_3 == null ? null : ctx.TeamCL1_3.CL1_3_KWh), "  \u00A0 kwh ");
        } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["CircularGaugeComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxesDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxisDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationsDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3pvbmUtdGVhbXMvdGVhbS1jbC9jbDEuMy9jbDEuMy5jb21wb25lbnQuc2NzcyJ9 */"] });
    return Cl1_3Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Cl1_3Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-cl1_3',
                templateUrl: './cl1.3.component.html',
                styleUrls: ['./cl1.3.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"] }]; }, { osr1_1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gaugeCL1_3']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/zone-teams/team-cl/cl1.4/cl1.4.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-cl/cl1.4/cl1.4.component.ts ***!
  \*******************************************************************/
/*! exports provided: Cl1_4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cl1_4Component", function() { return Cl1_4Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-angular-circulargauge */ "./node_modules/@syncfusion/ej2-angular-circulargauge/__ivy_ngcc__/@syncfusion/ej2-angular-circulargauge.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");















var _c0 = ["gaugeCL1_4"];
var Cl1_4Component = /** @class */ (function () {
    function Cl1_4Component(http, api, apiGetComp, decimalPipe) {
        this.http = http;
        this.api = api;
        this.apiGetComp = apiGetComp;
        this.decimalPipe = decimalPipe;
        this.alive = true;
        this.TeamCL1_4 = {
            CL1_4_VelocidadActualMotor: 0,
            CL1_4_CorrienteActualMotor: 0,
            CL1_4_PotenciaActualMotor: 0,
            CL1_4_TorqueActualMotor: 0,
            CL1_4_KWh: 0,
            CL1_4_voltaje: 0
        };
        this.velocidadCL1_4 = 0;
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
    Cl1_4Component.prototype.ngOnInit = function () {
        this.changeCL1_4();
        // this.dataSF1()
    };
    Cl1_4Component.prototype.gauge = function () {
        if (document.getElementById('sample-data')) {
            var value1 = this.velocidadCL1_4;
            this.osr1_1.axes[0].pointers[0].animation.enable = true;
            this.osr1_1.setPointerValue(0, 0, value1);
            this.osr1_1.setAnnotationValue(0, 0, this.osr1_1.axes[0].annotations[0].content);
        }
        else {
            clearInterval(this.tooltipInterval1);
        }
    };
    Cl1_4Component.prototype.test = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-data')) {
                var value1 = _this.velocidadCL1_4;
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 1000);
    };
    Cl1_4Component.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-dataCL1_4')) {
                var value1 = _this.velocidadCL1_4;
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
    Cl1_4Component.prototype.changeCL1_4 = function () {
        var _this = this;
        this.apiGetComp.GetJson(this.api.apiUrlNode1 + '/api/CL1_4')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('No hay data CL1_4');
                res.CL1_4_VelocidadActualMotor = 0;
                res.CL1_4_CorrienteActualMotor = 0;
                res.CL1_4_PotenciaActualMotor = 0;
                res.CL1_4_KWh = 0;
            }
            else {
                _this.TeamCL1_4 = res[0];
                // this.dataSF1_1 = TeamSF1_1
                // this.velocidadCL1_4 = this.decimalPipe.transform(this.TeamCL1_4?.CL1_4_VelocidadActualMotor) ?? 0;
                // console.log('SF1_1:', this.TeamCL1_4);
                _this.velocidadCL1_4 = (_b = (_a = _this.TeamCL1_4) === null || _a === void 0 ? void 0 : _a.CL1_4_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
            _this.dataCL1_4();
        });
    };
    Cl1_4Component.prototype.dataCL1_4 = function () {
        var _this = this;
        if (this.intervalSubscriptionItems) {
            this.intervalSubscriptionItems.unsubscribe();
        }
        this.intervalSubscriptionItems = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(3000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.apiGetComp.GetJson(_this.api.apiUrlNode1 + '/api/CL1_4'); }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('no hay data CL1_4');
                res.CL1_4_VelocidadActualMotor = 0;
                res.CL1_4_CorrienteActualMotor = 0;
                res.CL1_4_PotenciaActualMotor = 0;
                res.CL1_4_KWh = 0;
            }
            else {
                _this.TeamCL1_4 = res[0];
                // this.dataSF1_1 = TeamSF1_1
                _this.velocidadCL1_4 = (_b = (_a = _this.TeamCL1_4) === null || _a === void 0 ? void 0 : _a.CL1_4_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        }, function (error) { return (console.log(error)); }, function () { return console.log('Error..!'); });
    };
    Cl1_4Component.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    Cl1_4Component.ɵfac = function Cl1_4Component_Factory(t) { return new (t || Cl1_4Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"])); };
    Cl1_4Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Cl1_4Component, selectors: [["ngx-cl1_4"]], viewQuery: function Cl1_4Component_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.osr1_1 = _t.first);
        } }, decls: 29, vars: 14, consts: [["id", "sample-dataCL1_4", 2, "display", "block", "height", "150px"], ["gaugeCL1_4", ""], ["startAngle", "260", "endAngle", "100", 3, "majorTicks", "minorTicks", "labelStyle", "lineStyle", "ranges", "pointers"], ["angle", "180", "radius", "30%", "zIndex", "1", 3, "content"], [2, "margin-left", "23%", "margin-top", "-0%", "padding-top", "-40px", "padding-block-start", "-98px"], [2, "padding", "0.5625em 0.625em", "margin-top", "-0.10rem"], [2, "padding", "0.5625em 0.625em", "margin-top", "-1.9rem"]], template: function Cl1_4Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " CL1_4 ");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Consumo:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "number");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("  ", ctx.TeamCL1_4 == null ? null : ctx.TeamCL1_4.CL1_4_CorrienteActualMotor, "  \u00A0 A");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("   ", ctx.TeamCL1_4 == null ? null : ctx.TeamCL1_4.CL1_4_PotenciaActualMotor, " \u00A0 W");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 10, ctx.TeamCL1_4 == null ? null : ctx.TeamCL1_4.CL1_4_voltaje), "   VAC ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 12, ctx.TeamCL1_4 == null ? null : ctx.TeamCL1_4.CL1_4_KWh), "  \u00A0 kwh ");
        } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["CircularGaugeComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxesDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxisDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationsDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3pvbmUtdGVhbXMvdGVhbS1jbC9jbDEuNC9jbDEuNC5jb21wb25lbnQuc2NzcyJ9 */"] });
    return Cl1_4Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Cl1_4Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-cl1_4',
                templateUrl: './cl1.4.component.html',
                styleUrls: ['./cl1.4.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"] }]; }, { osr1_1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gaugeCL1_4']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/zone-teams/team-cl/cl1.5/cl1.5.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-cl/cl1.5/cl1.5.component.ts ***!
  \*******************************************************************/
/*! exports provided: Cl1_5Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cl1_5Component", function() { return Cl1_5Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-angular-circulargauge */ "./node_modules/@syncfusion/ej2-angular-circulargauge/__ivy_ngcc__/@syncfusion/ej2-angular-circulargauge.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");















var _c0 = ["gaugeCL1_5"];
var Cl1_5Component = /** @class */ (function () {
    function Cl1_5Component(http, api, apiGetComp, decimalPipe) {
        this.http = http;
        this.api = api;
        this.apiGetComp = apiGetComp;
        this.decimalPipe = decimalPipe;
        this.alive = true;
        this.TeamCL1_5 = {
            CL1_5_VelocidadActualMotor: 0,
            CL1_5_CorrienteActualMotor: 0,
            CL1_5_PotenciaActualMotor: 0,
            CL1_5_TorqueActualMotor: 0,
            CL1_5_KWh: 0,
            CL1_5_voltaje: 0
        };
        this.velocidadCL1_5 = 0;
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
    Cl1_5Component.prototype.ngOnInit = function () {
        this.changeCL1_5();
        // this.dataSF1()
    };
    Cl1_5Component.prototype.gauge = function () {
        if (document.getElementById('sample-data')) {
            var value1 = this.velocidadCL1_5;
            this.osr1_1.axes[0].pointers[0].animation.enable = true;
            this.osr1_1.setPointerValue(0, 0, value1);
            this.osr1_1.setAnnotationValue(0, 0, this.osr1_1.axes[0].annotations[0].content);
        }
        else {
            clearInterval(this.tooltipInterval1);
        }
    };
    Cl1_5Component.prototype.test = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-data')) {
                var value1 = _this.velocidadCL1_5;
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 1000);
    };
    Cl1_5Component.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-dataCL1_5')) {
                var value1 = _this.velocidadCL1_5;
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
    Cl1_5Component.prototype.changeCL1_5 = function () {
        var _this = this;
        this.apiGetComp.GetJson(this.api.apiUrlNode1 + '/api/CL1_5')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('No hay data CL1_5');
                res.CL1_5_VelocidadActualMotor = 0;
                res.CL1_5_CorrienteActualMotor = 0;
                res.CL1_5_PotenciaActualMotor = 0;
                res.CL1_5_KWh = 0;
            }
            else {
                _this.TeamCL1_5 = res[0];
                // this.dataSF1_1 = TeamSF1_1
                // this.velocidadCL1_5 = this.decimalPipe.transform(this.TeamCL1_5?.CL1_5_VelocidadActualMotor) ?? 0;
                // console.log('SF1_1:', this.TeamCL1_5);
                _this.velocidadCL1_5 = (_b = (_a = _this.TeamCL1_5) === null || _a === void 0 ? void 0 : _a.CL1_5_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
            _this.dataCL1_5();
        });
    };
    Cl1_5Component.prototype.dataCL1_5 = function () {
        var _this = this;
        if (this.intervalSubscriptionItems) {
            this.intervalSubscriptionItems.unsubscribe();
        }
        this.intervalSubscriptionItems = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(3000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.apiGetComp.GetJson(_this.api.apiUrlNode1 + '/api/CL1_5'); }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('no hay data CL1_5');
                res.CL1_5_VelocidadActualMotor = 0;
                res.CL1_5_CorrienteActualMotor = 0;
                res.CL1_5_PotenciaActualMotor = 0;
                res.CL1_5_KWh = 0;
            }
            else {
                _this.TeamCL1_5 = res[0];
                // this.dataSF1_1 = TeamSF1_1
                _this.velocidadCL1_5 = (_b = (_a = _this.TeamCL1_5) === null || _a === void 0 ? void 0 : _a.CL1_5_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        }, function (error) { return (console.log(error)); }, function () { return console.log('Error..!'); });
    };
    Cl1_5Component.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    Cl1_5Component.ɵfac = function Cl1_5Component_Factory(t) { return new (t || Cl1_5Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"])); };
    Cl1_5Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Cl1_5Component, selectors: [["ngx-cl1_5"]], viewQuery: function Cl1_5Component_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.osr1_1 = _t.first);
        } }, decls: 29, vars: 14, consts: [["id", "sample-dataCL1_5", 2, "display", "block", "height", "150px"], ["gaugeCL1_5", ""], ["startAngle", "260", "endAngle", "100", 3, "majorTicks", "minorTicks", "labelStyle", "lineStyle", "ranges", "pointers"], ["angle", "180", "radius", "30%", "zIndex", "1", 3, "content"], [2, "margin-left", "23%", "margin-top", "-0%", "padding-top", "-40px", "padding-block-start", "-98px"], [2, "padding", "0.5625em 0.625em", "margin-top", "-0.10rem"], [2, "padding", "0.5625em 0.625em", "margin-top", "-1.9rem"]], template: function Cl1_5Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " CL1_5 ");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Consumo:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "number");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("  ", ctx.TeamCL1_5 == null ? null : ctx.TeamCL1_5.CL1_5_CorrienteActualMotor, "  \u00A0 A");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("   ", ctx.TeamCL1_5 == null ? null : ctx.TeamCL1_5.CL1_5_PotenciaActualMotor, " \u00A0 W");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 10, ctx.TeamCL1_5 == null ? null : ctx.TeamCL1_5.CL1_5_voltaje), "   VAC ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 12, ctx.TeamCL1_5 == null ? null : ctx.TeamCL1_5.CL1_5_KWh), "  \u00A0 kwh ");
        } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["CircularGaugeComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxesDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxisDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationsDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3pvbmUtdGVhbXMvdGVhbS1jbC9jbDEuNS9jbDEuNS5jb21wb25lbnQuc2NzcyJ9 */"] });
    return Cl1_5Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Cl1_5Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-cl1_5',
                templateUrl: './cl1.5.component.html',
                styleUrls: ['./cl1.5.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"] }]; }, { osr1_1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gaugeCL1_5']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/zone-teams/team-cl/cl1.6/cl1.6.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-cl/cl1.6/cl1.6.component.ts ***!
  \*******************************************************************/
/*! exports provided: Cl1_6Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cl1_6Component", function() { return Cl1_6Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-angular-circulargauge */ "./node_modules/@syncfusion/ej2-angular-circulargauge/__ivy_ngcc__/@syncfusion/ej2-angular-circulargauge.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");















var _c0 = ["gaugeCL1_6"];
var Cl1_6Component = /** @class */ (function () {
    function Cl1_6Component(http, api, apiGetComp, decimalPipe) {
        this.http = http;
        this.api = api;
        this.apiGetComp = apiGetComp;
        this.decimalPipe = decimalPipe;
        this.alive = true;
        this.TeamCL1_6 = {
            CL1_6_VelocidadActualMotor: 0,
            CL1_6_CorrienteActualMotor: 0,
            CL1_6_PotenciaActualMotor: 0,
            CL1_6_TorqueActualMotor: 0,
            CL1_6_KWh: 0,
            CL1_6_voltaje: 0
        };
        this.velocidadCL1_6 = 0;
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
    Cl1_6Component.prototype.ngOnInit = function () {
        this.changeCL1_6();
        // this.dataSF1()
    };
    Cl1_6Component.prototype.gauge = function () {
        if (document.getElementById('sample-data')) {
            var value1 = this.velocidadCL1_6;
            this.osr1_1.axes[0].pointers[0].animation.enable = true;
            this.osr1_1.setPointerValue(0, 0, value1);
            this.osr1_1.setAnnotationValue(0, 0, this.osr1_1.axes[0].annotations[0].content);
        }
        else {
            clearInterval(this.tooltipInterval1);
        }
    };
    Cl1_6Component.prototype.test = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-data')) {
                var value1 = _this.velocidadCL1_6;
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 1000);
    };
    Cl1_6Component.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-dataCL1_6')) {
                var value1 = _this.velocidadCL1_6;
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
    Cl1_6Component.prototype.changeCL1_6 = function () {
        var _this = this;
        this.apiGetComp.GetJson(this.api.apiUrlNode1 + '/api/CL1_6')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('No hay data CL1_6');
                res.CL1_6_VelocidadActualMotor = 0;
                res.CL1_6_CorrienteActualMotor = 0;
                res.CL1_6_PotenciaActualMotor = 0;
                res.CL1_6_KWh = 0;
            }
            else {
                _this.TeamCL1_6 = res[0];
                // this.dataSF1_1 = TeamSF1_1
                // this.velocidadCL1_6 = this.decimalPipe.transform(this.TeamCL1_6?.CL1_6_VelocidadActualMotor) ?? 0;
                // console.log('SF1_1:', this.TeamCL1_6);
                _this.velocidadCL1_6 = (_b = (_a = _this.TeamCL1_6) === null || _a === void 0 ? void 0 : _a.CL1_6_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
            _this.dataCL1_6();
        });
    };
    Cl1_6Component.prototype.dataCL1_6 = function () {
        var _this = this;
        if (this.intervalSubscriptionItems) {
            this.intervalSubscriptionItems.unsubscribe();
        }
        this.intervalSubscriptionItems = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(3000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.apiGetComp.GetJson(_this.api.apiUrlNode1 + '/api/CL1_6'); }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('no hay data CL1_6');
                res.CL1_6_VelocidadActualMotor = 0;
                res.CL1_6_CorrienteActualMotor = 0;
                res.CL1_6_PotenciaActualMotor = 0;
                res.CL1_6_KWh = 0;
            }
            else {
                _this.TeamCL1_6 = res[0];
                // this.dataSF1_1 = TeamSF1_1
                _this.velocidadCL1_6 = (_b = (_a = _this.TeamCL1_6) === null || _a === void 0 ? void 0 : _a.CL1_6_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        }, function (error) { return (console.log(error)); }, function () { return console.log('Error..!'); });
    };
    Cl1_6Component.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    Cl1_6Component.ɵfac = function Cl1_6Component_Factory(t) { return new (t || Cl1_6Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"])); };
    Cl1_6Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Cl1_6Component, selectors: [["ngx-cl1_6"]], viewQuery: function Cl1_6Component_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.osr1_1 = _t.first);
        } }, decls: 29, vars: 14, consts: [["id", "sample-dataCL1_6", 2, "display", "block", "height", "150px"], ["gaugeCL1_6", ""], ["startAngle", "260", "endAngle", "100", 3, "majorTicks", "minorTicks", "labelStyle", "lineStyle", "ranges", "pointers"], ["angle", "180", "radius", "30%", "zIndex", "1", 3, "content"], [2, "margin-left", "23%", "margin-top", "-0%", "padding-top", "-40px", "padding-block-start", "-98px"], [2, "padding", "0.5625em 0.625em", "margin-top", "-0.10rem"], [2, "padding", "0.5625em 0.625em", "margin-top", "-1.9rem"]], template: function Cl1_6Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " CL1_6 ");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Consumo:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "number");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("  ", ctx.TeamCL1_6 == null ? null : ctx.TeamCL1_6.CL1_6_CorrienteActualMotor, "  \u00A0 A");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("   ", ctx.TeamCL1_6 == null ? null : ctx.TeamCL1_6.CL1_6_PotenciaActualMotor, " \u00A0 W");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 10, ctx.TeamCL1_6 == null ? null : ctx.TeamCL1_6.CL1_6_voltaje), "   VAC ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 12, ctx.TeamCL1_6 == null ? null : ctx.TeamCL1_6.CL1_6_KWh), "  \u00A0 kwh ");
        } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["CircularGaugeComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxesDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxisDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationsDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3pvbmUtdGVhbXMvdGVhbS1jbC9jbDEuNi9jbDEuNi5jb21wb25lbnQuc2NzcyJ9 */"] });
    return Cl1_6Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Cl1_6Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-cl1_6',
                templateUrl: './cl1.6.component.html',
                styleUrls: ['./cl1.6.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"] }]; }, { osr1_1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gaugeCL1_6']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/zone-teams/team-cl/cl1.7/cl1.7.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-cl/cl1.7/cl1.7.component.ts ***!
  \*******************************************************************/
/*! exports provided: Cl1_7Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cl1_7Component", function() { return Cl1_7Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-angular-circulargauge */ "./node_modules/@syncfusion/ej2-angular-circulargauge/__ivy_ngcc__/@syncfusion/ej2-angular-circulargauge.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");















var _c0 = ["gaugeCL1_7"];
var Cl1_7Component = /** @class */ (function () {
    function Cl1_7Component(http, api, apiGetComp, decimalPipe) {
        this.http = http;
        this.api = api;
        this.apiGetComp = apiGetComp;
        this.decimalPipe = decimalPipe;
        this.alive = true;
        this.TeamCL1_7 = {
            CL1_7_VelocidadActualMotor: 0,
            CL1_7_CorrienteActualMotor: 0,
            CL1_7_PotenciaActualMotor: 0,
            CL1_7_TorqueActualMotor: 0,
            CL1_7_KWh: 0,
            CL1_7_voltaje: 0
        };
        this.velocidadCL1_7 = 0;
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
    Cl1_7Component.prototype.ngOnInit = function () {
        this.changeCL1_7();
        // this.dataSF1()
    };
    Cl1_7Component.prototype.gauge = function () {
        if (document.getElementById('sample-data')) {
            var value1 = this.velocidadCL1_7;
            this.osr1_1.axes[0].pointers[0].animation.enable = true;
            this.osr1_1.setPointerValue(0, 0, value1);
            this.osr1_1.setAnnotationValue(0, 0, this.osr1_1.axes[0].annotations[0].content);
        }
        else {
            clearInterval(this.tooltipInterval1);
        }
    };
    Cl1_7Component.prototype.test = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-data')) {
                var value1 = _this.velocidadCL1_7;
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 1000);
    };
    Cl1_7Component.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-dataCL1_7')) {
                var value1 = _this.velocidadCL1_7;
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
    Cl1_7Component.prototype.changeCL1_7 = function () {
        var _this = this;
        this.apiGetComp.GetJson(this.api.apiUrlNode1 + '/api/CL1_7')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('No hay data CL1_7');
                res.CL1_7_VelocidadActualMotor = 0;
                res.CL1_7_CorrienteActualMotor = 0;
                res.CL1_7_PotenciaActualMotor = 0;
                res.CL1_7_KWh = 0;
            }
            else {
                _this.TeamCL1_7 = res[0];
                // this.dataSF1_1 = TeamSF1_1
                // this.velocidadCL1_7 = this.decimalPipe.transform(this.TeamCL1_7?.CL1_7_VelocidadActualMotor) ?? 0;
                // console.log('SF1_1:', this.TeamCL1_7);
                _this.velocidadCL1_7 = (_b = (_a = _this.TeamCL1_7) === null || _a === void 0 ? void 0 : _a.CL1_7_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
            _this.dataCL1_7();
        });
    };
    Cl1_7Component.prototype.dataCL1_7 = function () {
        var _this = this;
        if (this.intervalSubscriptionItems) {
            this.intervalSubscriptionItems.unsubscribe();
        }
        this.intervalSubscriptionItems = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(3000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.apiGetComp.GetJson(_this.api.apiUrlNode1 + '/api/CL1_7'); }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('no hay data CL1_7');
                res.CL1_7_VelocidadActualMotor = 0;
                res.CL1_7_CorrienteActualMotor = 0;
                res.CL1_7_PotenciaActualMotor = 0;
                res.CL1_7_KWh = 0;
            }
            else {
                _this.TeamCL1_7 = res[0];
                // this.dataSF1_1 = TeamSF1_1
                _this.velocidadCL1_7 = (_b = (_a = _this.TeamCL1_7) === null || _a === void 0 ? void 0 : _a.CL1_7_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        }, function (error) { return (console.log(error)); }, function () { return console.log('Error..!'); });
    };
    Cl1_7Component.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    Cl1_7Component.ɵfac = function Cl1_7Component_Factory(t) { return new (t || Cl1_7Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"])); };
    Cl1_7Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Cl1_7Component, selectors: [["ngx-cl1_7"]], viewQuery: function Cl1_7Component_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.osr1_1 = _t.first);
        } }, decls: 29, vars: 14, consts: [["id", "sample-dataCL1_7", 2, "display", "block", "height", "150px"], ["gaugeCL1_7", ""], ["startAngle", "260", "endAngle", "100", 3, "majorTicks", "minorTicks", "labelStyle", "lineStyle", "ranges", "pointers"], ["angle", "180", "radius", "30%", "zIndex", "1", 3, "content"], [2, "margin-left", "23%", "margin-top", "-0%", "padding-top", "-40px", "padding-block-start", "-98px"], [2, "padding", "0.5625em 0.625em", "margin-top", "-0.10rem"], [2, "padding", "0.5625em 0.625em", "margin-top", "-1.9rem"]], template: function Cl1_7Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " CL1_7 ");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Consumo:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "number");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("  ", ctx.TeamCL1_7 == null ? null : ctx.TeamCL1_7.CL1_7_CorrienteActualMotor, "  \u00A0 A");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("   ", ctx.TeamCL1_7 == null ? null : ctx.TeamCL1_7.CL1_7_PotenciaActualMotor, " \u00A0 W");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 10, ctx.TeamCL1_7 == null ? null : ctx.TeamCL1_7.CL1_7_voltaje), "   VAC ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 12, ctx.TeamCL1_7 == null ? null : ctx.TeamCL1_7.CL1_7_KWh), "  \u00A0 kwh ");
        } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["CircularGaugeComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxesDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxisDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationsDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3pvbmUtdGVhbXMvdGVhbS1jbC9jbDEuNy9jbDEuNy5jb21wb25lbnQuc2NzcyJ9 */"] });
    return Cl1_7Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Cl1_7Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-cl1_7',
                templateUrl: './cl1.7.component.html',
                styleUrls: ['./cl1.7.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"] }]; }, { osr1_1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gaugeCL1_7']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/zone-teams/team-cl/cl1.8/cl1.8.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-cl/cl1.8/cl1.8.component.ts ***!
  \*******************************************************************/
/*! exports provided: Cl1_8Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cl1_8Component", function() { return Cl1_8Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-angular-circulargauge */ "./node_modules/@syncfusion/ej2-angular-circulargauge/__ivy_ngcc__/@syncfusion/ej2-angular-circulargauge.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");















var _c0 = ["gaugeCL1_8"];
var Cl1_8Component = /** @class */ (function () {
    function Cl1_8Component(http, api, apiGetComp, decimalPipe) {
        this.http = http;
        this.api = api;
        this.apiGetComp = apiGetComp;
        this.decimalPipe = decimalPipe;
        this.alive = true;
        this.TeamCL1_8 = {
            CL1_8_VelocidadActualMotor: 0,
            CL1_8_CorrienteActualMotor: 0,
            CL1_8_PotenciaActualMotor: 0,
            CL1_8_TorqueActualMotor: 0,
            CL1_8_KWh: 0,
            CL1_8_voltaje: 0
        };
        this.velocidadCL1_8 = 0;
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
    Cl1_8Component.prototype.ngOnInit = function () {
        this.changeCL1_8();
        // this.dataSF1()
    };
    Cl1_8Component.prototype.gauge = function () {
        if (document.getElementById('sample-data')) {
            var value1 = this.velocidadCL1_8;
            this.osr1_1.axes[0].pointers[0].animation.enable = true;
            this.osr1_1.setPointerValue(0, 0, value1);
            this.osr1_1.setAnnotationValue(0, 0, this.osr1_1.axes[0].annotations[0].content);
        }
        else {
            clearInterval(this.tooltipInterval1);
        }
    };
    Cl1_8Component.prototype.test = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-data')) {
                var value1 = _this.velocidadCL1_8;
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 1000);
    };
    Cl1_8Component.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-dataCL1_8')) {
                var value1 = _this.velocidadCL1_8;
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
    Cl1_8Component.prototype.changeCL1_8 = function () {
        var _this = this;
        this.apiGetComp.GetJson(this.api.apiUrlNode1 + '/api/CL1_8')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('No hay data CL1_8');
                res.CL1_8_VelocidadActualMotor = 0;
                res.CL1_8_CorrienteActualMotor = 0;
                res.CL1_8_PotenciaActualMotor = 0;
                res.CL1_8_KWh = 0;
            }
            else {
                _this.TeamCL1_8 = res[0];
                // this.dataSF1_1 = TeamSF1_1
                // this.velocidadCL1_8 = this.decimalPipe.transform(this.TeamCL1_8?.CL1_8_VelocidadActualMotor) ?? 0;
                // console.log('SF1_1:', this.TeamCL1_8);
                _this.velocidadCL1_8 = (_b = (_a = _this.TeamCL1_8) === null || _a === void 0 ? void 0 : _a.CL1_8_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
            _this.dataCL1_8();
        });
    };
    Cl1_8Component.prototype.dataCL1_8 = function () {
        var _this = this;
        if (this.intervalSubscriptionItems) {
            this.intervalSubscriptionItems.unsubscribe();
        }
        this.intervalSubscriptionItems = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(3000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.apiGetComp.GetJson(_this.api.apiUrlNode1 + '/api/CL1_8'); }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('no hay data CL1_8');
                res.CL1_8_VelocidadActualMotor = 0;
                res.CL1_8_CorrienteActualMotor = 0;
                res.CL1_8_PotenciaActualMotor = 0;
                res.CL1_8_KWh = 0;
            }
            else {
                _this.TeamCL1_8 = res[0];
                // this.dataSF1_1 = TeamSF1_1
                _this.velocidadCL1_8 = (_b = (_a = _this.TeamCL1_8) === null || _a === void 0 ? void 0 : _a.CL1_8_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        }, function (error) { return (console.log(error)); }, function () { return console.log('Error..!'); });
    };
    Cl1_8Component.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    Cl1_8Component.ɵfac = function Cl1_8Component_Factory(t) { return new (t || Cl1_8Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"])); };
    Cl1_8Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Cl1_8Component, selectors: [["ngx-cl1_8"]], viewQuery: function Cl1_8Component_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.osr1_1 = _t.first);
        } }, decls: 29, vars: 14, consts: [["id", "sample-dataCL1_8", 2, "display", "block", "height", "150px"], ["gaugeCL1_8", ""], ["startAngle", "260", "endAngle", "100", 3, "majorTicks", "minorTicks", "labelStyle", "lineStyle", "ranges", "pointers"], ["angle", "180", "radius", "30%", "zIndex", "1", 3, "content"], [2, "margin-left", "23%", "margin-top", "-0%", "padding-top", "-40px", "padding-block-start", "-98px"], [2, "padding", "0.5625em 0.625em", "margin-top", "-0.10rem"], [2, "padding", "0.5625em 0.625em", "margin-top", "-1.9rem"]], template: function Cl1_8Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " CL1_8 ");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Consumo:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "number");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("  ", ctx.TeamCL1_8 == null ? null : ctx.TeamCL1_8.CL1_8_CorrienteActualMotor, "  \u00A0 A");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("   ", ctx.TeamCL1_8 == null ? null : ctx.TeamCL1_8.CL1_8_PotenciaActualMotor, " \u00A0 W");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 10, ctx.TeamCL1_8 == null ? null : ctx.TeamCL1_8.CL1_8_voltaje), "   VAC ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 12, ctx.TeamCL1_8 == null ? null : ctx.TeamCL1_8.CL1_8_KWh), "  \u00A0 kwh ");
        } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["CircularGaugeComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxesDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxisDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationsDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3pvbmUtdGVhbXMvdGVhbS1jbC9jbDEuOC9jbDEuOC5jb21wb25lbnQuc2NzcyJ9 */"] });
    return Cl1_8Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Cl1_8Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-cl1_8',
                templateUrl: './cl1.8.component.html',
                styleUrls: ['./cl1.8.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"] }]; }, { osr1_1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gaugeCL1_8']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/zone-teams/team-cl/cl1.9/cl1.9.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-cl/cl1.9/cl1.9.component.ts ***!
  \*******************************************************************/
/*! exports provided: Cl1_9Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cl1_9Component", function() { return Cl1_9Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-angular-circulargauge */ "./node_modules/@syncfusion/ej2-angular-circulargauge/__ivy_ngcc__/@syncfusion/ej2-angular-circulargauge.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");















var _c0 = ["gaugeCL1_9"];
var Cl1_9Component = /** @class */ (function () {
    function Cl1_9Component(http, api, apiGetComp, decimalPipe) {
        this.http = http;
        this.api = api;
        this.apiGetComp = apiGetComp;
        this.decimalPipe = decimalPipe;
        this.alive = true;
        this.TeamCL1_9 = {
            CL1_9_VelocidadActualMotor: 0,
            CL1_9_CorrienteActualMotor: 0,
            CL1_9_PotenciaActualMotor: 0,
            CL1_9_TorqueActualMotor: 0,
            CL1_9_KWh: 0,
            CL1_9_voltaje: 0
        };
        this.velocidadCL1_9 = 0;
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
    Cl1_9Component.prototype.ngOnInit = function () {
        this.changeCL1_9();
        // this.dataSF1()
    };
    Cl1_9Component.prototype.gauge = function () {
        if (document.getElementById('sample-data')) {
            var value1 = this.velocidadCL1_9;
            this.osr1_1.axes[0].pointers[0].animation.enable = true;
            this.osr1_1.setPointerValue(0, 0, value1);
            this.osr1_1.setAnnotationValue(0, 0, this.osr1_1.axes[0].annotations[0].content);
        }
        else {
            clearInterval(this.tooltipInterval1);
        }
    };
    Cl1_9Component.prototype.test = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-data')) {
                var value1 = _this.velocidadCL1_9;
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 1000);
    };
    Cl1_9Component.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-dataCL1_9')) {
                var value1 = _this.velocidadCL1_9;
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
    Cl1_9Component.prototype.changeCL1_9 = function () {
        var _this = this;
        this.apiGetComp.GetJson(this.api.apiUrlNode1 + '/api/CL1_9')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('No hay data CL1_9');
                res.CL1_9_VelocidadActualMotor = 0;
                res.CL1_9_CorrienteActualMotor = 0;
                res.CL1_9_PotenciaActualMotor = 0;
                res.CL1_9_KWh = 0;
            }
            else {
                _this.TeamCL1_9 = res[0];
                // this.dataSF1_1 = TeamSF1_1
                _this.velocidadCL1_9 = (_b = _this.decimalPipe.transform((_a = _this.TeamCL1_9) === null || _a === void 0 ? void 0 : _a.CL1_9_VelocidadActualMotor), (_b !== null && _b !== void 0 ? _b : 0));
                console.log('SF1_1:', _this.TeamCL1_9);
            }
            _this.dataCL1_9();
        });
    };
    Cl1_9Component.prototype.dataCL1_9 = function () {
        var _this = this;
        if (this.intervalSubscriptionItems) {
            this.intervalSubscriptionItems.unsubscribe();
        }
        this.intervalSubscriptionItems = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(3000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.apiGetComp.GetJson(_this.api.apiUrlNode1 + '/api/CL1_9'); }))
            .subscribe(function (res) {
            var _a, _b, _c;
            if (JSON.stringify(res) == '{}') {
                console.log('no hay data CL1_9');
                res.CL1_9_VelocidadActualMotor = 0;
                res.CL1_9_CorrienteActualMotor = 0;
                res.CL1_9_PotenciaActualMotor = 0;
                res.CL1_9_KWh = 0;
            }
            else {
                _this.TeamCL1_9 = res[0];
                // this.dataSF1_1 = TeamSF1_1
                _this.velocidadCL1_9 = (_b = _this.decimalPipe.transform((_a = _this.TeamCL1_9) === null || _a === void 0 ? void 0 : _a.CL1_9_VelocidadActualMotor), (_b !== null && _b !== void 0 ? _b : 0));
                console.log('CL1_9:', (_c = _this.TeamCL1_9) === null || _c === void 0 ? void 0 : _c.CL1_9_VelocidadActualMotor);
            }
        }, function (error) { return (console.log(error)); }, function () { return console.log('Error..!'); });
    };
    Cl1_9Component.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    Cl1_9Component.ɵfac = function Cl1_9Component_Factory(t) { return new (t || Cl1_9Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"])); };
    Cl1_9Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Cl1_9Component, selectors: [["ngx-cl1_9"]], viewQuery: function Cl1_9Component_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.osr1_1 = _t.first);
        } }, decls: 29, vars: 14, consts: [["id", "sample-dataCL1_9", 2, "display", "block", "height", "150px"], ["gaugeCL1_9", ""], ["startAngle", "260", "endAngle", "100", 3, "majorTicks", "minorTicks", "labelStyle", "lineStyle", "ranges", "pointers"], ["angle", "180", "radius", "30%", "zIndex", "1", 3, "content"], [2, "margin-left", "23%", "margin-top", "-0%", "padding-top", "-40px", "padding-block-start", "-98px"], [2, "padding", "0.5625em 0.625em", "margin-top", "-0.10rem"], [2, "padding", "0.5625em 0.625em", "margin-top", "-1.9rem"]], template: function Cl1_9Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " CL1_9 ");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "pre", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Consumo:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "number");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("  ", ctx.TeamCL1_9 == null ? null : ctx.TeamCL1_9.CL1_9_CorrienteActualMotor, "  \u00A0 A");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("   ", ctx.TeamCL1_9 == null ? null : ctx.TeamCL1_9.CL1_9_PotenciaActualMotor, " \u00A0 W");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 10, ctx.TeamCL1_9 == null ? null : ctx.TeamCL1_9.CL1_9_voltaje), "   VAC ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 12, ctx.TeamCL1_9 == null ? null : ctx.TeamCL1_9.CL1_9_KWh), "  \u00A0 kwh ");
        } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["CircularGaugeComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxesDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxisDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationsDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3pvbmUtdGVhbXMvdGVhbS1jbC9jbDEuOS9jbDEuOS5jb21wb25lbnQuc2NzcyJ9 */"] });
    return Cl1_9Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Cl1_9Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-cl1_9',
                templateUrl: './cl1.9.component.html',
                styleUrls: ['./cl1.9.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"] }]; }, { osr1_1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gaugeCL1_9']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/zone-teams/team-cl/team-cl-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-cl/team-cl-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: TeamCLRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamCLRoutingModule", function() { return TeamCLRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _team_cl_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./team-cl.component */ "./src/app/pages/zone-teams/team-cl/team-cl.component.ts");





var routes = [
    {
        path: '',
        component: _team_cl_component__WEBPACK_IMPORTED_MODULE_2__["TeamclComponent"],
        children: [
        // {
        //   path: 'sfc',
        //   component: SfcComponent,
        // },
        ]
    }
];
var TeamCLRoutingModule = /** @class */ (function () {
    function TeamCLRoutingModule() {
    }
    TeamCLRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TeamCLRoutingModule });
    TeamCLRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TeamCLRoutingModule_Factory(t) { return new (t || TeamCLRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return TeamCLRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TeamCLRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamCLRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/zone-teams/team-cl/team-cl.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-cl/team-cl.component.ts ***!
  \***************************************************************/
/*! exports provided: TeamclComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamclComponent", function() { return TeamclComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");
/* harmony import */ var _cl1_1_cl1_1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cl1.1/cl1.1.component */ "./src/app/pages/zone-teams/team-cl/cl1.1/cl1.1.component.ts");
/* harmony import */ var _cl1_2_cl1_2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cl1.2/cl1.2.component */ "./src/app/pages/zone-teams/team-cl/cl1.2/cl1.2.component.ts");
/* harmony import */ var _cl1_3_cl1_3_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cl1.3/cl1.3.component */ "./src/app/pages/zone-teams/team-cl/cl1.3/cl1.3.component.ts");
/* harmony import */ var _cl1_4_cl1_4_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cl1.4/cl1.4.component */ "./src/app/pages/zone-teams/team-cl/cl1.4/cl1.4.component.ts");
/* harmony import */ var _cl1_5_cl1_5_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cl1.5/cl1.5.component */ "./src/app/pages/zone-teams/team-cl/cl1.5/cl1.5.component.ts");
/* harmony import */ var _cl1_6_cl1_6_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cl1.6/cl1.6.component */ "./src/app/pages/zone-teams/team-cl/cl1.6/cl1.6.component.ts");
/* harmony import */ var _cl1_7_cl1_7_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cl1.7/cl1.7.component */ "./src/app/pages/zone-teams/team-cl/cl1.7/cl1.7.component.ts");
/* harmony import */ var _cl1_8_cl1_8_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cl1.8/cl1.8.component */ "./src/app/pages/zone-teams/team-cl/cl1.8/cl1.8.component.ts");
/* harmony import */ var _cl1_9_cl1_9_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cl1.9/cl1.9.component */ "./src/app/pages/zone-teams/team-cl/cl1.9/cl1.9.component.ts");
/* harmony import */ var _cl1_10_cl1_10_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cl1.10/cl1.10.component */ "./src/app/pages/zone-teams/team-cl/cl1.10/cl1.10.component.ts");
/* harmony import */ var _cl1_11_cl1_11_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cl1.11/cl1.11.component */ "./src/app/pages/zone-teams/team-cl/cl1.11/cl1.11.component.ts");
/* harmony import */ var _cl1_12_cl1_12_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cl1.12/cl1.12.component */ "./src/app/pages/zone-teams/team-cl/cl1.12/cl1.12.component.ts");
/* harmony import */ var _cl1_13_cl1_13_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cl1.13/cl1.13.component */ "./src/app/pages/zone-teams/team-cl/cl1.13/cl1.13.component.ts");
/* harmony import */ var _cl1_14_cl1_14_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./cl1.14/cl1.14.component */ "./src/app/pages/zone-teams/team-cl/cl1.14/cl1.14.component.ts");
/* harmony import */ var _cl1_15_cl1_15_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./cl1.15/cl1.15.component */ "./src/app/pages/zone-teams/team-cl/cl1.15/cl1.15.component.ts");
/* harmony import */ var _cl1_16_cl1_16_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./cl1.16/cl1.16.component */ "./src/app/pages/zone-teams/team-cl/cl1.16/cl1.16.component.ts");
/* harmony import */ var _cl1_17_cl1_17_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./cl1.17/cl1.17.component */ "./src/app/pages/zone-teams/team-cl/cl1.17/cl1.17.component.ts");
/* harmony import */ var _cl1_18_cl1_18_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./cl1.18/cl1.18.component */ "./src/app/pages/zone-teams/team-cl/cl1.18/cl1.18.component.ts");



























var TeamclComponent = /** @class */ (function () {
    function TeamclComponent(http, router, api) {
        this.http = http;
        this.router = router;
        this.api = api;
        this.alive = true;
    }
    TeamclComponent.prototype.ngOnInit = function () { };
    TeamclComponent.prototype.back = function () {
        this.router.navigate(["/pages/conveyor/energyZone"]);
        return false;
    };
    TeamclComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    TeamclComponent.ɵfac = function TeamclComponent_Factory(t) { return new (t || TeamclComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"])); };
    TeamclComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeamclComponent, selectors: [["ngx-teamCL"]], decls: 48, vars: 0, consts: [[1, "navigation"], ["href", "#", "aria-label", "Back", 1, "link", "back-link", 3, "click"], ["icon", "arrow-back"], [1, "h"], [1, "container"], [1, "col-sm-12"], [1, "row"], [1, "col-sm-4"]], template: function TeamclComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamclComponent_Template_a_click_4_listener() { return ctx.back(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nb-icon", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "CLEAR LINE");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "ngx-cl1_1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "ngx-cl1_2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "ngx-cl1_3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "ngx-cl1_4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "ngx-cl1_5");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "ngx-cl1_6");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "ngx-cl1_7");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "ngx-cl1_8");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "ngx-cl1_9");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "ngx-cl1_10");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "ngx-cl1_11");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "ngx-cl1_12");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "ngx-cl1_13");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "ngx-cl1_14");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "ngx-cl1_15");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "ngx-cl1_16");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "ngx-cl1_17");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "ngx-cl1_18");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardBodyComponent"], _cl1_1_cl1_1_component__WEBPACK_IMPORTED_MODULE_5__["Cl1_1Component"], _cl1_2_cl1_2_component__WEBPACK_IMPORTED_MODULE_6__["Cl1_2Component"], _cl1_3_cl1_3_component__WEBPACK_IMPORTED_MODULE_7__["Cl1_3Component"], _cl1_4_cl1_4_component__WEBPACK_IMPORTED_MODULE_8__["Cl1_4Component"], _cl1_5_cl1_5_component__WEBPACK_IMPORTED_MODULE_9__["Cl1_5Component"], _cl1_6_cl1_6_component__WEBPACK_IMPORTED_MODULE_10__["Cl1_6Component"], _cl1_7_cl1_7_component__WEBPACK_IMPORTED_MODULE_11__["Cl1_7Component"], _cl1_8_cl1_8_component__WEBPACK_IMPORTED_MODULE_12__["Cl1_8Component"], _cl1_9_cl1_9_component__WEBPACK_IMPORTED_MODULE_13__["Cl1_9Component"], _cl1_10_cl1_10_component__WEBPACK_IMPORTED_MODULE_14__["Cl1_10Component"], _cl1_11_cl1_11_component__WEBPACK_IMPORTED_MODULE_15__["Cl1_11Component"], _cl1_12_cl1_12_component__WEBPACK_IMPORTED_MODULE_16__["Cl1_12Component"], _cl1_13_cl1_13_component__WEBPACK_IMPORTED_MODULE_17__["Cl1_13Component"], _cl1_14_cl1_14_component__WEBPACK_IMPORTED_MODULE_18__["Cl1_14Component"], _cl1_15_cl1_15_component__WEBPACK_IMPORTED_MODULE_19__["Cl1_15Component"], _cl1_16_cl1_16_component__WEBPACK_IMPORTED_MODULE_20__["Cl1_16Component"], _cl1_17_cl1_17_component__WEBPACK_IMPORTED_MODULE_21__["Cl1_17Component"], _cl1_18_cl1_18_component__WEBPACK_IMPORTED_MODULE_22__["Cl1_18Component"]], styles: [".contenedor[_ngcontent-%COMP%] {\n            position: relative;\n            display: inline-block;\n            text-align: center;\n          }\n\n          .centrado[_ngcontent-%COMP%] {\n            position: absolute;\n            font-size: 10px;\n            font-family: cursive;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n          }\n\n          .h[_ngcontent-%COMP%] {\n            margin: -1.8rem 0.19rem 0rem 2.7rem;\n          }"] });
    return TeamclComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamclComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "ngx-teamCL",
                template: "\n    <router-outlet>\n      <nb-card>\n        <nb-card-header> \n          <nav class=\"navigation\">\n            <a\n              href=\"#\"\n              (click)=\"back()\"\n              class=\"link back-link\"\n              aria-label=\"Back\"\n            >\n              <nb-icon icon=\"arrow-back\"></nb-icon>\n            </a>\n            <h5 class=\"h\">CLEAR LINE</h5>\n          </nav>\n        </nb-card-header>\n        <div class=\"container\">\n          <nb-card-body>\n            <div class=\"col-sm-12\">\n              <div class=\"row\">\n                <div class=\"col-sm-4\">\n                  <ngx-cl1_1></ngx-cl1_1>\n                </div>\n                <div class=\"col-sm-4\">\n                  <ngx-cl1_2></ngx-cl1_2>\n                </div>\n                <div class=\"col-sm-4\">\n                  <ngx-cl1_3></ngx-cl1_3>\n                </div>\n                <div class=\"col-sm-4\">\n                  <ngx-cl1_4></ngx-cl1_4>\n                </div>\n                <div class=\"col-sm-4\">\n                  <ngx-cl1_5></ngx-cl1_5>\n                </div>\n                <div class=\"col-sm-4\">\n                  <ngx-cl1_6></ngx-cl1_6>\n                </div>\n                <div class=\"col-sm-4\">\n                  <ngx-cl1_7></ngx-cl1_7>\n                </div>\n                <div class=\"col-sm-4\">\n                  <ngx-cl1_8></ngx-cl1_8>\n                </div>\n                <div class=\"col-sm-4\">\n                  <ngx-cl1_9></ngx-cl1_9>\n                </div>\n                <div class=\"col-sm-4\">\n                  <ngx-cl1_10></ngx-cl1_10>\n                </div>\n                <div class=\"col-sm-4\">\n                  <ngx-cl1_11></ngx-cl1_11>\n                </div>\n                <div class=\"col-sm-4\">\n                  <ngx-cl1_12></ngx-cl1_12>\n                </div>\n                <div class=\"col-sm-4\">\n                  <ngx-cl1_13></ngx-cl1_13>\n                </div>\n                <div class=\"col-sm-4\">\n                  <ngx-cl1_14></ngx-cl1_14>\n                </div>\n                <div class=\"col-sm-4\">\n                  <ngx-cl1_15></ngx-cl1_15>\n                </div>\n                <div class=\"col-sm-4\">\n                  <ngx-cl1_16></ngx-cl1_16>\n                </div>\n                <div class=\"col-sm-4\">\n                  <ngx-cl1_17></ngx-cl1_17>\n                </div>\n                <div class=\"col-sm-4\">\n                  <ngx-cl1_18></ngx-cl1_18>\n                </div>\n              </div>\n            </div>\n          </nb-card-body>\n        </div>\n\n        <style>\n          .contenedor {\n            position: relative;\n            display: inline-block;\n            text-align: center;\n          }\n\n          .centrado {\n            position: absolute;\n            font-size: 10px;\n            font-family: cursive;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n          }\n\n          .h {\n            margin: -1.8rem 0.19rem 0rem 2.7rem;\n          }\n        </style>\n      </nb-card>\n    </router-outlet>\n  ",
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/zone-teams/team-cl/team-cl.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-cl/team-cl.module.ts ***!
  \************************************************************/
/*! exports provided: TeamCLModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamCLModule", function() { return TeamCLModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");
/* harmony import */ var _team_cl_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./team-cl-routing.module */ "./src/app/pages/zone-teams/team-cl/team-cl-routing.module.ts");
/* harmony import */ var _team_cl_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./team-cl.component */ "./src/app/pages/zone-teams/team-cl/team-cl.component.ts");
/* harmony import */ var _cl1_1_cl1_1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cl1.1/cl1.1.component */ "./src/app/pages/zone-teams/team-cl/cl1.1/cl1.1.component.ts");
/* harmony import */ var _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @syncfusion/ej2-angular-circulargauge */ "./node_modules/@syncfusion/ej2-angular-circulargauge/__ivy_ngcc__/@syncfusion/ej2-angular-circulargauge.es5.js");
/* harmony import */ var _cl1_2_cl1_2_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cl1.2/cl1.2.component */ "./src/app/pages/zone-teams/team-cl/cl1.2/cl1.2.component.ts");
/* harmony import */ var _cl1_3_cl1_3_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cl1.3/cl1.3.component */ "./src/app/pages/zone-teams/team-cl/cl1.3/cl1.3.component.ts");
/* harmony import */ var _cl1_4_cl1_4_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cl1.4/cl1.4.component */ "./src/app/pages/zone-teams/team-cl/cl1.4/cl1.4.component.ts");
/* harmony import */ var _cl1_5_cl1_5_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cl1.5/cl1.5.component */ "./src/app/pages/zone-teams/team-cl/cl1.5/cl1.5.component.ts");
/* harmony import */ var _cl1_6_cl1_6_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cl1.6/cl1.6.component */ "./src/app/pages/zone-teams/team-cl/cl1.6/cl1.6.component.ts");
/* harmony import */ var _cl1_7_cl1_7_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cl1.7/cl1.7.component */ "./src/app/pages/zone-teams/team-cl/cl1.7/cl1.7.component.ts");
/* harmony import */ var _cl1_8_cl1_8_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cl1.8/cl1.8.component */ "./src/app/pages/zone-teams/team-cl/cl1.8/cl1.8.component.ts");
/* harmony import */ var _cl1_9_cl1_9_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cl1.9/cl1.9.component */ "./src/app/pages/zone-teams/team-cl/cl1.9/cl1.9.component.ts");
/* harmony import */ var _cl1_10_cl1_10_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cl1.10/cl1.10.component */ "./src/app/pages/zone-teams/team-cl/cl1.10/cl1.10.component.ts");
/* harmony import */ var _cl1_11_cl1_11_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cl1.11/cl1.11.component */ "./src/app/pages/zone-teams/team-cl/cl1.11/cl1.11.component.ts");
/* harmony import */ var _cl1_12_cl1_12_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cl1.12/cl1.12.component */ "./src/app/pages/zone-teams/team-cl/cl1.12/cl1.12.component.ts");
/* harmony import */ var _cl1_13_cl1_13_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./cl1.13/cl1.13.component */ "./src/app/pages/zone-teams/team-cl/cl1.13/cl1.13.component.ts");
/* harmony import */ var _cl1_14_cl1_14_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./cl1.14/cl1.14.component */ "./src/app/pages/zone-teams/team-cl/cl1.14/cl1.14.component.ts");
/* harmony import */ var _cl1_15_cl1_15_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./cl1.15/cl1.15.component */ "./src/app/pages/zone-teams/team-cl/cl1.15/cl1.15.component.ts");
/* harmony import */ var _cl1_16_cl1_16_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./cl1.16/cl1.16.component */ "./src/app/pages/zone-teams/team-cl/cl1.16/cl1.16.component.ts");
/* harmony import */ var _cl1_17_cl1_17_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./cl1.17/cl1.17.component */ "./src/app/pages/zone-teams/team-cl/cl1.17/cl1.17.component.ts");
/* harmony import */ var _cl1_18_cl1_18_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./cl1.18/cl1.18.component */ "./src/app/pages/zone-teams/team-cl/cl1.18/cl1.18.component.ts");

























var TeamCLModule = /** @class */ (function () {
    function TeamCLModule() {
    }
    TeamCLModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TeamCLModule });
    TeamCLModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TeamCLModule_Factory(t) { return new (t || TeamCLModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _team_cl_routing_module__WEBPACK_IMPORTED_MODULE_3__["TeamCLRoutingModule"],
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
                _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_6__["CircularGaugeAllModule"],
            ]] });
    return TeamCLModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TeamCLModule, { declarations: [_team_cl_component__WEBPACK_IMPORTED_MODULE_4__["TeamclComponent"], _cl1_1_cl1_1_component__WEBPACK_IMPORTED_MODULE_5__["Cl1_1Component"], _cl1_2_cl1_2_component__WEBPACK_IMPORTED_MODULE_7__["Cl1_2Component"], _cl1_3_cl1_3_component__WEBPACK_IMPORTED_MODULE_8__["Cl1_3Component"], _cl1_4_cl1_4_component__WEBPACK_IMPORTED_MODULE_9__["Cl1_4Component"], _cl1_5_cl1_5_component__WEBPACK_IMPORTED_MODULE_10__["Cl1_5Component"],
        _cl1_6_cl1_6_component__WEBPACK_IMPORTED_MODULE_11__["Cl1_6Component"], _cl1_7_cl1_7_component__WEBPACK_IMPORTED_MODULE_12__["Cl1_7Component"], _cl1_8_cl1_8_component__WEBPACK_IMPORTED_MODULE_13__["Cl1_8Component"], _cl1_9_cl1_9_component__WEBPACK_IMPORTED_MODULE_14__["Cl1_9Component"], _cl1_10_cl1_10_component__WEBPACK_IMPORTED_MODULE_15__["Cl1_10Component"], _cl1_11_cl1_11_component__WEBPACK_IMPORTED_MODULE_16__["Cl1_11Component"],
        _cl1_12_cl1_12_component__WEBPACK_IMPORTED_MODULE_17__["Cl1_12Component"], _cl1_13_cl1_13_component__WEBPACK_IMPORTED_MODULE_18__["Cl1_13Component"], _cl1_14_cl1_14_component__WEBPACK_IMPORTED_MODULE_19__["Cl1_14Component"], _cl1_15_cl1_15_component__WEBPACK_IMPORTED_MODULE_20__["Cl1_15Component"], _cl1_16_cl1_16_component__WEBPACK_IMPORTED_MODULE_21__["Cl1_16Component"], _cl1_17_cl1_17_component__WEBPACK_IMPORTED_MODULE_22__["Cl1_17Component"],
        _cl1_18_cl1_18_component__WEBPACK_IMPORTED_MODULE_23__["Cl1_18Component"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _team_cl_routing_module__WEBPACK_IMPORTED_MODULE_3__["TeamCLRoutingModule"],
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
        _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_6__["CircularGaugeAllModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamCLModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_team_cl_component__WEBPACK_IMPORTED_MODULE_4__["TeamclComponent"], _cl1_1_cl1_1_component__WEBPACK_IMPORTED_MODULE_5__["Cl1_1Component"], _cl1_2_cl1_2_component__WEBPACK_IMPORTED_MODULE_7__["Cl1_2Component"], _cl1_3_cl1_3_component__WEBPACK_IMPORTED_MODULE_8__["Cl1_3Component"], _cl1_4_cl1_4_component__WEBPACK_IMPORTED_MODULE_9__["Cl1_4Component"], _cl1_5_cl1_5_component__WEBPACK_IMPORTED_MODULE_10__["Cl1_5Component"],
                    _cl1_6_cl1_6_component__WEBPACK_IMPORTED_MODULE_11__["Cl1_6Component"], _cl1_7_cl1_7_component__WEBPACK_IMPORTED_MODULE_12__["Cl1_7Component"], _cl1_8_cl1_8_component__WEBPACK_IMPORTED_MODULE_13__["Cl1_8Component"], _cl1_9_cl1_9_component__WEBPACK_IMPORTED_MODULE_14__["Cl1_9Component"], _cl1_10_cl1_10_component__WEBPACK_IMPORTED_MODULE_15__["Cl1_10Component"], _cl1_11_cl1_11_component__WEBPACK_IMPORTED_MODULE_16__["Cl1_11Component"],
                    _cl1_12_cl1_12_component__WEBPACK_IMPORTED_MODULE_17__["Cl1_12Component"], _cl1_13_cl1_13_component__WEBPACK_IMPORTED_MODULE_18__["Cl1_13Component"], _cl1_14_cl1_14_component__WEBPACK_IMPORTED_MODULE_19__["Cl1_14Component"], _cl1_15_cl1_15_component__WEBPACK_IMPORTED_MODULE_20__["Cl1_15Component"], _cl1_16_cl1_16_component__WEBPACK_IMPORTED_MODULE_21__["Cl1_16Component"], _cl1_17_cl1_17_component__WEBPACK_IMPORTED_MODULE_22__["Cl1_17Component"],
                    _cl1_18_cl1_18_component__WEBPACK_IMPORTED_MODULE_23__["Cl1_18Component"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _team_cl_routing_module__WEBPACK_IMPORTED_MODULE_3__["TeamCLRoutingModule"],
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
                    _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_6__["CircularGaugeAllModule"],
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=team-cl-team-cl-module.js.map