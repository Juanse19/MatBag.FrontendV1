(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["team-osr-team-osr-module"],{

/***/ "./src/app/pages/zone-teams/team-osr/osr1.1/osr1.1.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-osr/osr1.1/osr1.1.component.ts ***!
  \**********************************************************************/
/*! exports provided: Osr1_1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Osr1_1Component", function() { return Osr1_1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-angular-circulargauge */ "./node_modules/@syncfusion/ej2-angular-circulargauge/__ivy_ngcc__/@syncfusion/ej2-angular-circulargauge.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");















var _c0 = ["gaugeOs1"];
var Osr1_1Component = /** @class */ (function () {
    function Osr1_1Component(http, api, apiGetComp, decimalPipe) {
        this.http = http;
        this.api = api;
        this.apiGetComp = apiGetComp;
        this.decimalPipe = decimalPipe;
        this.alive = true;
        this.TeamOSR1_1 = {
            OSR1_1_VelocidadActualMotor: 0,
            OSR1_1_CorrienteActualMotor: 0,
            OSR1_1_PotenciaActualMotor: 0,
            OSR1_1_TorqueActualMotor: 0,
            OSR1_1_KWh: 0,
            OSR1_1_voltaje: 0
        };
        this.velocidadOSR1_1 = 0;
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
        this.pointers1 = [{
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
    Osr1_1Component.prototype.ngOnInit = function () {
        this.changeOSR1_1();
        this.dataOSR1_1();
    };
    Osr1_1Component.prototype.gauge = function () {
        if (document.getElementById('sample-data')) {
            var value1 = this.velocidadOSR1_1;
            this.osr1_1.axes[0].pointers[0].animation.enable = true;
            this.osr1_1.setPointerValue(0, 0, value1);
            this.osr1_1.setAnnotationValue(0, 0, this.osr1_1.axes[0].annotations[0].content);
        }
        else {
            clearInterval(this.tooltipInterval1);
        }
    };
    Osr1_1Component.prototype.test = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-data')) {
                var value1 = _this.velocidadOSR1_1;
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 1000);
    };
    Osr1_1Component.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-data')) {
                var value1 = _this.velocidadOSR1_1;
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
    Osr1_1Component.prototype.changeOSR1_1 = function () {
        var _this = this;
        this.apiGetComp.GetJson(this.api.apiUrlNode1 + '/OSR1_1')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('No hay data OSR1_1');
                res.OSR1_1_VelocidadActualMotor = 0;
                res.OSR1_1_CorrienteActualMotor = 0;
                res.OSR1_1_PotenciaActualMotor = 0;
                res.OSR1_1_KWh = 0;
            }
            else {
                _this.TeamOSR1_1 = res;
                // this.dataSF1_1 = TeamSF1_1
                // this.velocidadOSR1_1 = this.decimalPipe.transform(this.TeamOSR1_1?.OSR1_1_VelocidadActualMotor) ?? 0;
                _this.velocidadOSR1_1 = (_b = (_a = _this.TeamOSR1_1) === null || _a === void 0 ? void 0 : _a.OSR1_1_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        });
    };
    Osr1_1Component.prototype.dataOSR1_1 = function () {
        var _this = this;
        if (this.intervalSubscriptionItems) {
            this.intervalSubscriptionItems.unsubscribe();
        }
        this.intervalSubscriptionItems = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(3000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.apiGetComp.GetJson(_this.api.apiUrlNode1 + '/OSR1_1'); }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('no hay data OSR1_1');
                res.OSR1_1_VelocidadActualMotor = 0;
                res.OSR1_1_CorrienteActualMotor = 0;
                res.OSR1_1_PotenciaActualMotor = 0;
                res.OSR1_1_KWh = 0;
            }
            else {
                _this.TeamOSR1_1 = res;
                _this.velocidadOSR1_1 = (_b = (_a = _this.TeamOSR1_1) === null || _a === void 0 ? void 0 : _a.OSR1_1_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
            }
        }, function (error) { return (console.log(error)); }, function () { return console.log('Error..!'); });
    };
    Osr1_1Component.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    Osr1_1Component.ɵfac = function Osr1_1Component_Factory(t) { return new (t || Osr1_1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"])); };
    Osr1_1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Osr1_1Component, selectors: [["ngx-osr1_1"]], viewQuery: function Osr1_1Component_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.osr1_1 = _t.first);
        } }, decls: 28, vars: 13, consts: [["id", "sample-data", 2, "display", "block", "height", "150px"], ["gaugeOs1", ""], ["startAngle", "260", "endAngle", "100", 3, "majorTicks", "minorTicks", "labelStyle", "lineStyle", "ranges", "pointers"], ["angle", "180", "radius", "30%", "zIndex", "1", 3, "content"], [2, "margin-left", "23%", "margin-top", "-0%", "padding-top", "-40px", "padding-block-start", "-98px"], [2, "padding", "0.5625em 0.625em", "margin-top", "-0.10rem"], [2, "padding", "0.5625em 0.625em", "margin-top", "-1.9rem"]], template: function Osr1_1Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " OSR1-1 ");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("majorTicks", ctx.majorTicks)("minorTicks", ctx.minorTicks)("labelStyle", ctx.labelStyle)("lineStyle", ctx.lineStyle)("ranges", ctx.ranges)("pointers", ctx.pointers1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx.annotation);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("  ", ctx.TeamOSR1_1 == null ? null : ctx.TeamOSR1_1.OSR1_1_CorrienteActualMotor, "  \u00A0 A");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("   ", ctx.TeamOSR1_1 == null ? null : ctx.TeamOSR1_1.OSR1_1_PotenciaActualMotor, " \u00A0 W");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", ctx.TeamOSR1_1 == null ? null : ctx.TeamOSR1_1.OSR1_1_voltaje, "   VAC ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 11, ctx.TeamOSR1_1 == null ? null : ctx.TeamOSR1_1.OSR1_1_KWh), "  \u00A0 kwh ");
        } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["CircularGaugeComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxesDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxisDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationsDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3pvbmUtdGVhbXMvdGVhbS1vc3Ivb3NyMS4xL29zcjEuMS5jb21wb25lbnQuc2NzcyJ9 */"], encapsulation: 2 });
    return Osr1_1Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Osr1_1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-osr1_1',
                templateUrl: './osr1.1.component.html',
                styleUrls: ['./osr1.1.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"] }]; }, { osr1_1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gaugeOs1']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/zone-teams/team-osr/osr1.2/osr1.2.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-osr/osr1.2/osr1.2.component.ts ***!
  \**********************************************************************/
/*! exports provided: Osr1_2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Osr1_2Component", function() { return Osr1_2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-angular-circulargauge */ "./node_modules/@syncfusion/ej2-angular-circulargauge/__ivy_ngcc__/@syncfusion/ej2-angular-circulargauge.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");















var _c0 = ["gaugeOs1_2"];
var Osr1_2Component = /** @class */ (function () {
    function Osr1_2Component(http, api, apiGetComp, decimalPipe) {
        this.http = http;
        this.api = api;
        this.apiGetComp = apiGetComp;
        this.decimalPipe = decimalPipe;
        this.alive = true;
        this.TeamOSR1_2 = {
            OSR1_2_VelocidadActualMotor: 0,
            OSR1_2_CorrienteActualMotor: 0,
            OSR1_2_PotenciaActualMotor: 0,
            OSR1_2_TorqueActualMotor: 0,
            OSR1_2_KWh: 0,
            OSR1_2_voltaje: 0
        };
        this.velocidadOSR1_2 = 0;
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
    Osr1_2Component.prototype.ngOnInit = function () {
        this.changeOSR1_2();
        this.dataOSR1_2();
    };
    Osr1_2Component.prototype.gauge = function () {
        if (document.getElementById('sample-data')) {
            var value1 = this.velocidadOSR1_2;
            this.osr1_1.axes[0].pointers[0].animation.enable = true;
            this.osr1_1.setPointerValue(0, 0, value1);
            this.osr1_1.setAnnotationValue(0, 0, this.osr1_1.axes[0].annotations[0].content);
        }
        else {
            clearInterval(this.tooltipInterval1);
        }
    };
    Osr1_2Component.prototype.test = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-data')) {
                var value1 = _this.velocidadOSR1_2;
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 1000);
    };
    Osr1_2Component.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-dataOSR1_2')) {
                var value1 = _this.velocidadOSR1_2;
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
    Osr1_2Component.prototype.changeOSR1_2 = function () {
        var _this = this;
        this.apiGetComp.GetJson(this.api.apiUrlNode1 + '/OSR1_2')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('No hay data OSR1_2');
                res.OSR1_2_VelocidadActualMotor = 0;
                res.OSR1_2_CorrienteActualMotor = 0;
                res.OSR1_2_PotenciaActualMotor = 0;
                res.OSR1_2_KWh = 0;
            }
            else {
                _this.TeamOSR1_2 = res;
                // this.dataSF1_1 = TeamSF1_1
                // this.velocidadOSR1_2 = this.decimalPipe.transform(this.TeamOSR1_2?.OSR1_2_VelocidadActualMotor) ?? 0;
                _this.velocidadOSR1_2 = (_b = (_a = _this.TeamOSR1_2) === null || _a === void 0 ? void 0 : _a.OSR1_2_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
                // console.log('SF1_1:', this.TeamSF1_1);
            }
        });
    };
    Osr1_2Component.prototype.dataOSR1_2 = function () {
        var _this = this;
        if (this.intervalSubscriptionItems) {
            this.intervalSubscriptionItems.unsubscribe();
        }
        this.intervalSubscriptionItems = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(3000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.apiGetComp.GetJson(_this.api.apiUrlNode1 + '/OSR1_2'); }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('no hay data OSR1_2');
                res.OSR1_2_VelocidadActualMotor = 0;
                res.OSR1_2_CorrienteActualMotor = 0;
                res.OSR1_2_PotenciaActualMotor = 0;
                res.OSR1_2_KWh = 0;
            }
            else {
                _this.TeamOSR1_2 = res;
                // this.dataSF1_1 = TeamSF1_1
                _this.velocidadOSR1_2 = (_b = (_a = _this.TeamOSR1_2) === null || _a === void 0 ? void 0 : _a.OSR1_2_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
                // console.log('OSR1_2:', this.TeamOSR1_2?.OSR1_2_VelocidadActualMotor);
            }
        }, function (error) { return (console.log(error)); }, function () { return console.log('Error..!'); });
    };
    Osr1_2Component.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    Osr1_2Component.ɵfac = function Osr1_2Component_Factory(t) { return new (t || Osr1_2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"])); };
    Osr1_2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Osr1_2Component, selectors: [["ngx-osr1_2"]], viewQuery: function Osr1_2Component_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.osr1_1 = _t.first);
        } }, decls: 28, vars: 13, consts: [["id", "sample-dataOSR1_2", 2, "display", "block", "height", "150px"], ["gaugeOs1_2", ""], ["startAngle", "260", "endAngle", "100", 3, "majorTicks", "minorTicks", "labelStyle", "lineStyle", "ranges", "pointers"], ["angle", "180", "radius", "30%", "zIndex", "1", 3, "content"], [2, "margin-left", "23%", "margin-top", "-0%", "padding-top", "-40px", "padding-block-start", "-98px"], [2, "padding", "0.5625em 0.625em", "margin-top", "-0.10rem"], [2, "padding", "0.5625em 0.625em", "margin-top", "-1.9rem"]], template: function Osr1_2Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " OSR1-2 ");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("  ", ctx.TeamOSR1_2 == null ? null : ctx.TeamOSR1_2.OSR1_2_CorrienteActualMotor, "  \u00A0 A");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("   ", ctx.TeamOSR1_2 == null ? null : ctx.TeamOSR1_2.OSR1_2_PotenciaActualMotor, " \u00A0 W");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", ctx.TeamOSR1_2 == null ? null : ctx.TeamOSR1_2.OSR1_2_voltaje, "   VAC ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 11, ctx.TeamOSR1_2 == null ? null : ctx.TeamOSR1_2.OSR1_2_KWh), "  \u00A0 kwh ");
        } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["CircularGaugeComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxesDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxisDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationsDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3pvbmUtdGVhbXMvdGVhbS1vc3Ivb3NyMS4yL29zcjEuMi5jb21wb25lbnQuc2NzcyJ9 */"] });
    return Osr1_2Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Osr1_2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-osr1_2',
                templateUrl: './osr1.2.component.html',
                styleUrls: ['./osr1.2.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"] }]; }, { osr1_1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gaugeOs1_2']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/zone-teams/team-osr/osr1.3/osr1.3.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-osr/osr1.3/osr1.3.component.ts ***!
  \**********************************************************************/
/*! exports provided: Osr1_3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Osr1_3Component", function() { return Osr1_3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-angular-circulargauge */ "./node_modules/@syncfusion/ej2-angular-circulargauge/__ivy_ngcc__/@syncfusion/ej2-angular-circulargauge.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");















var _c0 = ["gaugeOs1_3"];
var Osr1_3Component = /** @class */ (function () {
    function Osr1_3Component(http, api, apiGetComp, decimalPipe) {
        this.http = http;
        this.api = api;
        this.apiGetComp = apiGetComp;
        this.decimalPipe = decimalPipe;
        this.alive = true;
        this.TeamOSR1_3 = {
            OSR1_3_VelocidadActualMotor: 0,
            OSR1_3_CorrienteActualMotor: 0,
            OSR1_3_PotenciaActualMotor: 0,
            OSR1_3_TorqueActualMotor: 0,
            OSR1_3_KWh: 0,
            OSR1_3_voltaje: 0
        };
        this.velocidadOSR1_3 = 0;
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
    Osr1_3Component.prototype.ngOnInit = function () {
        this.changeOSR1_3();
        // this.dataSF1()
    };
    Osr1_3Component.prototype.gauge = function () {
        if (document.getElementById('sample-data')) {
            var value1 = this.velocidadOSR1_3;
            this.osr1_1.axes[0].pointers[0].animation.enable = true;
            this.osr1_1.setPointerValue(0, 0, value1);
            this.osr1_1.setAnnotationValue(0, 0, this.osr1_1.axes[0].annotations[0].content);
        }
        else {
            clearInterval(this.tooltipInterval1);
        }
    };
    Osr1_3Component.prototype.test = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-data')) {
                var value1 = _this.velocidadOSR1_3;
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 1000);
    };
    Osr1_3Component.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-dataOSR1_3')) {
                var value1 = _this.velocidadOSR1_3;
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
    Osr1_3Component.prototype.changeOSR1_3 = function () {
        var _this = this;
        this.apiGetComp.GetJson(this.api.apiUrlNode1 + '/OSR1_3')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('No hay data OSR1_3');
                res.OSR1_3_VelocidadActualMotor = 0;
                res.OSR1_3_CorrienteActualMotor = 0;
                res.OSR1_3_PotenciaActualMotor = 0;
                res.OSR1_3_KWh = 0;
            }
            else {
                _this.TeamOSR1_3 = res;
                // this.dataSF1_1 = TeamSF1_1
                // this.velocidadOSR1_3 = this.decimalPipe.transform(this.TeamOSR1_3?.OSR1_3_VelocidadActualMotor) ?? 0;
                _this.velocidadOSR1_3 = (_b = (_a = _this.TeamOSR1_3) === null || _a === void 0 ? void 0 : _a.OSR1_3_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
                // console.log('SF1_1:', this.TeamSF1_1);
            }
        });
    };
    Osr1_3Component.prototype.dataOSR1_3 = function () {
        var _this = this;
        if (this.intervalSubscriptionItems) {
            this.intervalSubscriptionItems.unsubscribe();
        }
        this.intervalSubscriptionItems = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(3000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.apiGetComp.GetJson(_this.api.apiUrlNode1 + '/OSR1_3'); }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('no hay data OSR1_3');
                res.OSR1_3_VelocidadActualMotor = 0;
                res.OSR1_3_CorrienteActualMotor = 0;
                res.OSR1_3_PotenciaActualMotor = 0;
                res.OSR1_3_KWh = 0;
            }
            else {
                _this.TeamOSR1_3 = res;
                // this.dataSF1_1 = TeamSF1_1
                _this.velocidadOSR1_3 = (_b = (_a = _this.TeamOSR1_3) === null || _a === void 0 ? void 0 : _a.OSR1_3_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
                // console.log('OSR1_3:', this.TeamOSR1_3?.OSR1_3_VelocidadActualMotor);
            }
        }, function (error) { return (console.log(error)); }, function () { return console.log('Error..!'); });
    };
    Osr1_3Component.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    Osr1_3Component.ɵfac = function Osr1_3Component_Factory(t) { return new (t || Osr1_3Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"])); };
    Osr1_3Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Osr1_3Component, selectors: [["ngx-osr1_3"]], viewQuery: function Osr1_3Component_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.osr1_1 = _t.first);
        } }, decls: 28, vars: 13, consts: [["id", "sample-dataOSR1_3", 2, "display", "block", "height", "150px"], ["gaugeOs1_3", ""], ["startAngle", "260", "endAngle", "100", 3, "majorTicks", "minorTicks", "labelStyle", "lineStyle", "ranges", "pointers"], ["angle", "180", "radius", "30%", "zIndex", "1", 3, "content"], [2, "margin-left", "23%", "margin-top", "-0%", "padding-top", "-40px", "padding-block-start", "-98px"], [2, "padding", "0.5625em 0.625em", "margin-top", "-0.10rem"], [2, "padding", "0.5625em 0.625em", "margin-top", "-1.9rem"]], template: function Osr1_3Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " OSR1-3 ");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("  ", ctx.TeamOSR1_3 == null ? null : ctx.TeamOSR1_3.OSR1_3_CorrienteActualMotor, "  \u00A0 A");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("   ", ctx.TeamOSR1_3 == null ? null : ctx.TeamOSR1_3.OSR1_3_PotenciaActualMotor, " \u00A0 W");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", ctx.TeamOSR1_3 == null ? null : ctx.TeamOSR1_3.OSR1_3_voltaje, "   VAC ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 11, ctx.TeamOSR1_3 == null ? null : ctx.TeamOSR1_3.OSR1_3_KWh), "  \u00A0 kwh ");
        } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["CircularGaugeComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxesDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxisDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationsDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3pvbmUtdGVhbXMvdGVhbS1vc3Ivb3NyMS4zL29zcjEuMy5jb21wb25lbnQuc2NzcyJ9 */"] });
    return Osr1_3Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Osr1_3Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-osr1_3',
                templateUrl: './osr1.3.component.html',
                styleUrls: ['./osr1.3.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"] }]; }, { osr1_1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gaugeOs1_3']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/zone-teams/team-osr/osr1.4/osr1.4.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-osr/osr1.4/osr1.4.component.ts ***!
  \**********************************************************************/
/*! exports provided: Osr1_4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Osr1_4Component", function() { return Osr1_4Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-angular-circulargauge */ "./node_modules/@syncfusion/ej2-angular-circulargauge/__ivy_ngcc__/@syncfusion/ej2-angular-circulargauge.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");















var _c0 = ["gaugeOs1_4"];
var Osr1_4Component = /** @class */ (function () {
    function Osr1_4Component(http, api, apiGetComp, decimalPipe) {
        this.http = http;
        this.api = api;
        this.apiGetComp = apiGetComp;
        this.decimalPipe = decimalPipe;
        this.alive = true;
        this.TeamOSR1_4 = {
            OSR1_4_VelocidadActualMotor: 0,
            OSR1_4_CorrienteActualMotor: 0,
            OSR1_4_PotenciaActualMotor: 0,
            OSR1_4_TorqueActualMotor: 0,
            OSR1_4_KWh: 0,
            OSR1_4_voltaje: 0
        };
        this.velocidadOSR1_4 = 0;
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
    Osr1_4Component.prototype.ngOnInit = function () {
        this.changeOSR1_4();
        // this.dataSF1()
    };
    Osr1_4Component.prototype.gauge = function () {
        if (document.getElementById('sample-data')) {
            var value1 = this.velocidadOSR1_4;
            this.osr1_1.axes[0].pointers[0].animation.enable = true;
            this.osr1_1.setPointerValue(0, 0, value1);
            this.osr1_1.setAnnotationValue(0, 0, this.osr1_1.axes[0].annotations[0].content);
        }
        else {
            clearInterval(this.tooltipInterval1);
        }
    };
    Osr1_4Component.prototype.test = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-data')) {
                var value1 = _this.velocidadOSR1_4;
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 1000);
    };
    Osr1_4Component.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-dataOSR1_3')) {
                var value1 = _this.velocidadOSR1_4;
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
    Osr1_4Component.prototype.changeOSR1_4 = function () {
        var _this = this;
        this.apiGetComp.GetJson(this.api.apiUrlNode1 + '/OSR1_4')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('No hay data OSR1_4');
                res.OSR1_4_VelocidadActualMotor = 0;
                res.OSR1_4_CorrienteActualMotor = 0;
                res.OSR1_4_PotenciaActualMotor = 0;
                res.OSR1_4_KWh = 0;
            }
            else {
                _this.TeamOSR1_4 = res;
                // this.dataSF1_1 = TeamSF1_1
                // this.velocidadOSR1_4 = this.decimalPipe.transform(this.TeamOSR1_4?.OSR1_4_VelocidadActualMotor) ?? 0;
                _this.velocidadOSR1_4 = (_b = (_a = _this.TeamOSR1_4) === null || _a === void 0 ? void 0 : _a.OSR1_4_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
                // console.log('SF1_1:', this.TeamSF1_1);
            }
        });
    };
    Osr1_4Component.prototype.dataOSR1_4 = function () {
        var _this = this;
        if (this.intervalSubscriptionItems) {
            this.intervalSubscriptionItems.unsubscribe();
        }
        this.intervalSubscriptionItems = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(3000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.apiGetComp.GetJson(_this.api.apiUrlNode1 + '/OSR1_4'); }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('no hay data OSR1_4');
                res.OSR1_4_VelocidadActualMotor = 0;
                res.OSR1_4_CorrienteActualMotor = 0;
                res.OSR1_4_PotenciaActualMotor = 0;
                res.OSR1_4_KWh = 0;
            }
            else {
                _this.TeamOSR1_4 = res;
                // this.dataSF1_1 = TeamSF1_1
                _this.velocidadOSR1_4 = (_b = (_a = _this.TeamOSR1_4) === null || _a === void 0 ? void 0 : _a.OSR1_4_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
                // console.log('OSR1_4:', this.TeamOSR1_4?.OSR1_4_VelocidadActualMotor);
            }
        }, function (error) { return (console.log(error)); }, function () { return console.log('Error..!'); });
    };
    Osr1_4Component.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    Osr1_4Component.ɵfac = function Osr1_4Component_Factory(t) { return new (t || Osr1_4Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"])); };
    Osr1_4Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Osr1_4Component, selectors: [["ngx-osr1_4"]], viewQuery: function Osr1_4Component_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.osr1_1 = _t.first);
        } }, decls: 28, vars: 13, consts: [["id", "sample-dataOSR1_4", 2, "display", "block", "height", "150px"], ["gaugeOs1_4", ""], ["startAngle", "260", "endAngle", "100", 3, "majorTicks", "minorTicks", "labelStyle", "lineStyle", "ranges", "pointers"], ["angle", "180", "radius", "30%", "zIndex", "1", 3, "content"], [2, "margin-left", "23%", "margin-top", "-0%", "padding-top", "-40px", "padding-block-start", "-98px"], [2, "padding", "0.5625em 0.625em", "margin-top", "-0.10rem"], [2, "padding", "0.5625em 0.625em", "margin-top", "-1.9rem"]], template: function Osr1_4Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " OSR1-4 ");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("  ", ctx.TeamOSR1_4 == null ? null : ctx.TeamOSR1_4.OSR1_4_CorrienteActualMotor, "  \u00A0 A");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("   ", ctx.TeamOSR1_4 == null ? null : ctx.TeamOSR1_4.OSR1_4_PotenciaActualMotor, " \u00A0 W");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", ctx.TeamOSR1_4 == null ? null : ctx.TeamOSR1_4.OSR1_4_voltaje, "   VAC ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 11, ctx.TeamOSR1_4 == null ? null : ctx.TeamOSR1_4.OSR1_4_KWh), "  \u00A0 kwh ");
        } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["CircularGaugeComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxesDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxisDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationsDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3pvbmUtdGVhbXMvdGVhbS1vc3Ivb3NyMS40L29zcjEuNC5jb21wb25lbnQuc2NzcyJ9 */"] });
    return Osr1_4Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Osr1_4Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-osr1_4',
                templateUrl: './osr1.4.component.html',
                styleUrls: ['./osr1.4.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"] }]; }, { osr1_1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gaugeOs1_4']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/zone-teams/team-osr/osr1.5/osr1.5.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-osr/osr1.5/osr1.5.component.ts ***!
  \**********************************************************************/
/*! exports provided: Osr1_5Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Osr1_5Component", function() { return Osr1_5Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-angular-circulargauge */ "./node_modules/@syncfusion/ej2-angular-circulargauge/__ivy_ngcc__/@syncfusion/ej2-angular-circulargauge.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");















var _c0 = ["gaugeOs1_5"];
var Osr1_5Component = /** @class */ (function () {
    function Osr1_5Component(http, api, apiGetComp, decimalPipe) {
        this.http = http;
        this.api = api;
        this.apiGetComp = apiGetComp;
        this.decimalPipe = decimalPipe;
        this.alive = true;
        this.TeamOSR1_5 = {
            OSR1_5_VelocidadActualMotor: 0,
            OSR1_5_CorrienteActualMotor: 0,
            OSR1_5_PotenciaActualMotor: 0,
            OSR1_5_TorqueActualMotor: 0,
            OSR1_5_KWh: 0,
            OSR1_5_voltaje: 0
        };
        this.velocidadOSR1_5 = 0;
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
    Osr1_5Component.prototype.ngOnInit = function () {
        this.changeOSR1_5();
        // this.dataSF1()
    };
    Osr1_5Component.prototype.gauge = function () {
        if (document.getElementById('sample-data')) {
            var value1 = this.velocidadOSR1_5;
            this.osr1_1.axes[0].pointers[0].animation.enable = true;
            this.osr1_1.setPointerValue(0, 0, value1);
            this.osr1_1.setAnnotationValue(0, 0, this.osr1_1.axes[0].annotations[0].content);
        }
        else {
            clearInterval(this.tooltipInterval1);
        }
    };
    Osr1_5Component.prototype.test = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-data')) {
                var value1 = _this.velocidadOSR1_5;
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 1000);
    };
    Osr1_5Component.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-dataOSR1_5')) {
                var value1 = _this.velocidadOSR1_5;
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
    Osr1_5Component.prototype.changeOSR1_5 = function () {
        var _this = this;
        this.apiGetComp.GetJson(this.api.apiUrlNode1 + '/OSR1_5')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('No hay data OSR1_5');
                res.OSR1_5_VelocidadActualMotor = 0;
                res.OSR1_5_CorrienteActualMotor = 0;
                res.OSR1_5_PotenciaActualMotor = 0;
                res.OSR1_5_KWh = 0;
            }
            else {
                _this.TeamOSR1_5 = res;
                // this.dataSF1_1 = TeamSF1_1
                // this.velocidadOSR1_5 = this.decimalPipe.transform(this.TeamOSR1_5?.OSR1_5_VelocidadActualMotor) ?? 0;
                _this.velocidadOSR1_5 = (_b = (_a = _this.TeamOSR1_5) === null || _a === void 0 ? void 0 : _a.OSR1_5_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
                // console.log('SF1_1:', this.TeamSF1_1);
            }
        });
    };
    Osr1_5Component.prototype.dataOSR1_5 = function () {
        var _this = this;
        if (this.intervalSubscriptionItems) {
            this.intervalSubscriptionItems.unsubscribe();
        }
        this.intervalSubscriptionItems = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(3000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.apiGetComp.GetJson(_this.api.apiUrlNode1 + '/OSR1_5'); }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('no hay data OSR1_5');
                res.OSR1_5_VelocidadActualMotor = 0;
                res.OSR1_5_CorrienteActualMotor = 0;
                res.OSR1_5_PotenciaActualMotor = 0;
                res.OSR1_5_KWh = 0;
            }
            else {
                _this.TeamOSR1_5 = res;
                // this.dataSF1_1 = TeamSF1_1
                _this.velocidadOSR1_5 = (_b = (_a = _this.TeamOSR1_5) === null || _a === void 0 ? void 0 : _a.OSR1_5_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
                // console.log('OSR1_5:', this.TeamOSR1_5?.OSR1_5_VelocidadActualMotor);
            }
        }, function (error) { return (console.log(error)); }, function () { return console.log('Error..!'); });
    };
    Osr1_5Component.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    Osr1_5Component.ɵfac = function Osr1_5Component_Factory(t) { return new (t || Osr1_5Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"])); };
    Osr1_5Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Osr1_5Component, selectors: [["ngx-osr1_5"]], viewQuery: function Osr1_5Component_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.osr1_1 = _t.first);
        } }, decls: 28, vars: 13, consts: [["id", "sample-dataOSR1_5", 2, "display", "block", "height", "150px"], ["gaugeOs1_5", ""], ["startAngle", "260", "endAngle", "100", 3, "majorTicks", "minorTicks", "labelStyle", "lineStyle", "ranges", "pointers"], ["angle", "180", "radius", "30%", "zIndex", "1", 3, "content"], [2, "margin-left", "23%", "margin-top", "-0%", "padding-top", "-40px", "padding-block-start", "-98px"], [2, "padding", "0.5625em 0.625em", "margin-top", "-0.10rem"], [2, "padding", "0.5625em 0.625em", "margin-top", "-1.9rem"]], template: function Osr1_5Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " OSR1-5 ");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("  ", ctx.TeamOSR1_5 == null ? null : ctx.TeamOSR1_5.OSR1_5_CorrienteActualMotor, "  \u00A0 A");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("   ", ctx.TeamOSR1_5 == null ? null : ctx.TeamOSR1_5.OSR1_5_PotenciaActualMotor, " \u00A0 W");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", ctx.TeamOSR1_5 == null ? null : ctx.TeamOSR1_5.OSR1_5_voltaje, "   VAC ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 11, ctx.TeamOSR1_5 == null ? null : ctx.TeamOSR1_5.OSR1_5_KWh), "  \u00A0 kwh ");
        } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["CircularGaugeComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxesDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxisDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationsDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3pvbmUtdGVhbXMvdGVhbS1vc3Ivb3NyMS41L29zcjEuNS5jb21wb25lbnQuc2NzcyJ9 */"] });
    return Osr1_5Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Osr1_5Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-osr1_5',
                templateUrl: './osr1.5.component.html',
                styleUrls: ['./osr1.5.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"] }]; }, { osr1_1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gaugeOs1_5']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/zone-teams/team-osr/osr1.6/osr1.6.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-osr/osr1.6/osr1.6.component.ts ***!
  \**********************************************************************/
/*! exports provided: Osr1_6Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Osr1_6Component", function() { return Osr1_6Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-angular-circulargauge */ "./node_modules/@syncfusion/ej2-angular-circulargauge/__ivy_ngcc__/@syncfusion/ej2-angular-circulargauge.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");















var _c0 = ["gaugeOs1_6"];
var Osr1_6Component = /** @class */ (function () {
    function Osr1_6Component(http, api, apiGetComp, decimalPipe) {
        this.http = http;
        this.api = api;
        this.apiGetComp = apiGetComp;
        this.decimalPipe = decimalPipe;
        this.alive = true;
        this.TeamOSR1_6 = {
            OSR1_6M01_VelocidadActualMotor: 0,
            OSR1_6M01_CorrienteActualMotor: 0,
            OSR1_6M01_PotenciaActualMotor: 0,
            OSR1_6M01_TorqueActualMotor: 0,
            OSR1_6M01_KWh: 0,
            OSR1_6M01_voltaje: 0
        };
        this.velocidadOSR1_6 = 0;
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
    Osr1_6Component.prototype.ngOnInit = function () {
        this.changeOSR1_6();
        // this.dataSF1()
    };
    Osr1_6Component.prototype.gauge = function () {
        if (document.getElementById('sample-data')) {
            var value1 = this.velocidadOSR1_6;
            this.osr1_1.axes[0].pointers[0].animation.enable = true;
            this.osr1_1.setPointerValue(0, 0, value1);
            this.osr1_1.setAnnotationValue(0, 0, this.osr1_1.axes[0].annotations[0].content);
        }
        else {
            clearInterval(this.tooltipInterval1);
        }
    };
    Osr1_6Component.prototype.test = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-data')) {
                var value1 = _this.velocidadOSR1_6;
                _this.osr1_1.axes[0].pointers[0].animation.enable = true;
                _this.osr1_1.setPointerValue(0, 0, value1);
                _this.osr1_1.setAnnotationValue(0, 0, _this.osr1_1.axes[0].annotations[0].content);
            }
            else {
                clearInterval(_this.tooltipInterval1);
            }
        }, 1000);
    };
    Osr1_6Component.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.tooltipInterval1 = window.setInterval(function () {
            if (document.getElementById('sample-dataOSR1_6')) {
                var value1 = _this.velocidadOSR1_6;
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
    Osr1_6Component.prototype.changeOSR1_6 = function () {
        var _this = this;
        this.apiGetComp.GetJson(this.api.apiUrlNode1 + '/OSR1_6M01')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('No hay data OSR1_6');
                res.OSR1_6M01_VelocidadActualMotor = 0;
                res.OSR1_6M01_CorrienteActualMotor = 0;
                res.OSR1_6M01_PotenciaActualMotor = 0;
                res.OSR1_6M01_KWh = 0;
            }
            else {
                _this.TeamOSR1_6 = res;
                // this.dataSF1_1 = TeamSF1_1
                // this.velocidadOSR1_6 = this.decimalPipe.transform(this.TeamOSR1_6?.OSR1_6M01_VelocidadActualMotor) ?? 0;
                _this.velocidadOSR1_6 = (_b = (_a = _this.TeamOSR1_6) === null || _a === void 0 ? void 0 : _a.OSR1_6M01_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
                // console.log('SF1_1:', this.TeamSF1_1);
            }
        });
    };
    Osr1_6Component.prototype.dataOSR1_5 = function () {
        var _this = this;
        if (this.intervalSubscriptionItems) {
            this.intervalSubscriptionItems.unsubscribe();
        }
        this.intervalSubscriptionItems = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(3000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.apiGetComp.GetJson(_this.api.apiUrlNode1 + '/OSR1_6M01'); }))
            .subscribe(function (res) {
            var _a, _b;
            if (JSON.stringify(res) == '{}') {
                console.log('no hay data OSR1_6');
                res.OSR1_6M01_VelocidadActualMotor = 0;
                res.OSR1_6M01_CorrienteActualMotor = 0;
                res.OSR1_6M01_PotenciaActualMotor = 0;
                res.OSR1_6M01_KWh = 0;
            }
            else {
                _this.TeamOSR1_6 = res;
                // this.dataSF1_1 = TeamSF1_1
                _this.velocidadOSR1_6 = (_b = (_a = _this.TeamOSR1_6) === null || _a === void 0 ? void 0 : _a.OSR1_6M01_VelocidadActualMotor, (_b !== null && _b !== void 0 ? _b : 0));
                // console.log('OSR1_6:', this.TeamOSR1_6?.OSR1_6M01_VelocidadActualMotor);
            }
        }, function (error) { return (console.log(error)); }, function () { return console.log('Error..!'); });
    };
    Osr1_6Component.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    Osr1_6Component.ɵfac = function Osr1_6Component_Factory(t) { return new (t || Osr1_6Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"])); };
    Osr1_6Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Osr1_6Component, selectors: [["ngx-osr1_6"]], viewQuery: function Osr1_6Component_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.osr1_1 = _t.first);
        } }, decls: 28, vars: 13, consts: [["id", "sample-dataOSR1_6", 2, "display", "block", "height", "150px"], ["gaugeOs1_6", ""], ["startAngle", "260", "endAngle", "100", 3, "majorTicks", "minorTicks", "labelStyle", "lineStyle", "ranges", "pointers"], ["angle", "180", "radius", "30%", "zIndex", "1", 3, "content"], [2, "margin-left", "23%", "margin-top", "-0%", "padding-top", "-40px", "padding-block-start", "-98px"], [2, "padding", "0.5625em 0.625em", "margin-top", "-0.10rem"], [2, "padding", "0.5625em 0.625em", "margin-top", "-1.9rem"]], template: function Osr1_6Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " OSR1-6 ");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("  ", ctx.TeamOSR1_6 == null ? null : ctx.TeamOSR1_6.OSR1_6M01_CorrienteActualMotor, "  \u00A0 A");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("   ", ctx.TeamOSR1_6 == null ? null : ctx.TeamOSR1_6.OSR1_6M01_PotenciaActualMotor, " \u00A0 W");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", ctx.TeamOSR1_6 == null ? null : ctx.TeamOSR1_6.OSR1_6M01_voltaje, "   VAC ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 11, ctx.TeamOSR1_6 == null ? null : ctx.TeamOSR1_6.OSR1_6M01_KWh), "  \u00A0 kwh ");
        } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["CircularGaugeComponent"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxesDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AxisDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationsDirective"], _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_3__["AnnotationDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3pvbmUtdGVhbXMvdGVhbS1vc3Ivb3NyMS42L29zcjEuNi5jb21wb25lbnQuc2NzcyJ9 */"] });
    return Osr1_6Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Osr1_6Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-osr1_6',
                templateUrl: './osr1.6.component.html',
                styleUrls: ['./osr1.6.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"] }]; }, { osr1_1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gaugeOs1_6']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/zone-teams/team-osr/team-osr-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-osr/team-osr-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: TeamOSRRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamOSRRoutingModule", function() { return TeamOSRRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _team_osr_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./team-osr.component */ "./src/app/pages/zone-teams/team-osr/team-osr.component.ts");





var routes = [
    {
        path: '',
        component: _team_osr_component__WEBPACK_IMPORTED_MODULE_2__["TeamOsrComponent"],
        children: [
        // {
        //   path: 'sfc',
        //   component: SfcComponent,
        // },
        ]
    }
];
var TeamOSRRoutingModule = /** @class */ (function () {
    function TeamOSRRoutingModule() {
    }
    TeamOSRRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TeamOSRRoutingModule });
    TeamOSRRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TeamOSRRoutingModule_Factory(t) { return new (t || TeamOSRRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return TeamOSRRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TeamOSRRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamOSRRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/zone-teams/team-osr/team-osr.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-osr/team-osr.component.ts ***!
  \*****************************************************************/
/*! exports provided: TeamOsrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamOsrComponent", function() { return TeamOsrComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");
/* harmony import */ var _osr1_1_osr1_1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./osr1.1/osr1.1.component */ "./src/app/pages/zone-teams/team-osr/osr1.1/osr1.1.component.ts");
/* harmony import */ var _osr1_2_osr1_2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./osr1.2/osr1.2.component */ "./src/app/pages/zone-teams/team-osr/osr1.2/osr1.2.component.ts");
/* harmony import */ var _osr1_3_osr1_3_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./osr1.3/osr1.3.component */ "./src/app/pages/zone-teams/team-osr/osr1.3/osr1.3.component.ts");
/* harmony import */ var _osr1_4_osr1_4_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./osr1.4/osr1.4.component */ "./src/app/pages/zone-teams/team-osr/osr1.4/osr1.4.component.ts");
/* harmony import */ var _osr1_5_osr1_5_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./osr1.5/osr1.5.component */ "./src/app/pages/zone-teams/team-osr/osr1.5/osr1.5.component.ts");
/* harmony import */ var _osr1_6_osr1_6_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./osr1.6/osr1.6.component */ "./src/app/pages/zone-teams/team-osr/osr1.6/osr1.6.component.ts");















var TeamOsrComponent = /** @class */ (function () {
    function TeamOsrComponent(http, router, api) {
        this.http = http;
        this.router = router;
        this.api = api;
        this.alive = true;
    }
    TeamOsrComponent.prototype.ngOnInit = function () { };
    TeamOsrComponent.prototype.back = function () {
        this.router.navigate(["/pages/conveyor/energyZone"]);
        return false;
    };
    TeamOsrComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    TeamOsrComponent.ɵfac = function TeamOsrComponent_Factory(t) { return new (t || TeamOsrComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"])); };
    TeamOsrComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeamOsrComponent, selectors: [["ngx-teamSfc"]], decls: 24, vars: 0, consts: [[1, "navigation"], ["href", "#", "aria-label", "Back", 1, "link", "back-link", 3, "click"], ["icon", "arrow-back"], [1, "h"], [1, "container"], [1, "col-sm-12"], [1, "row"], [1, "col-sm-4"]], template: function TeamOsrComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamOsrComponent_Template_a_click_4_listener() { return ctx.back(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nb-icon", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "ON SCREEN RESOLUTION LINE");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "ngx-osr1_1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "ngx-osr1_2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "ngx-osr1_3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "ngx-osr1_4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "ngx-osr1_5");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "ngx-osr1_6");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardBodyComponent"], _osr1_1_osr1_1_component__WEBPACK_IMPORTED_MODULE_5__["Osr1_1Component"], _osr1_2_osr1_2_component__WEBPACK_IMPORTED_MODULE_6__["Osr1_2Component"], _osr1_3_osr1_3_component__WEBPACK_IMPORTED_MODULE_7__["Osr1_3Component"], _osr1_4_osr1_4_component__WEBPACK_IMPORTED_MODULE_8__["Osr1_4Component"], _osr1_5_osr1_5_component__WEBPACK_IMPORTED_MODULE_9__["Osr1_5Component"], _osr1_6_osr1_6_component__WEBPACK_IMPORTED_MODULE_10__["Osr1_6Component"]], styles: [".h[_ngcontent-%COMP%] {\n            margin: -1.8rem 0.19rem 0rem 2.7rem;\n          }"] });
    return TeamOsrComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamOsrComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "ngx-teamSfc",
                template: "\n    <router-outlet>\n      <nb-card>\n        <nb-card-header>\n        <nav class=\"navigation\">\n            <a\n              href=\"#\"\n              (click)=\"back()\"\n              class=\"link back-link\"\n              aria-label=\"Back\"\n            >\n              <nb-icon icon=\"arrow-back\"></nb-icon>\n            </a>\n            <h5 class=\"h\">ON SCREEN RESOLUTION LINE</h5>\n          </nav>\n        </nb-card-header>\n        <div class=\"container\">\n          <nb-card-body>\n            <div class=\"col-sm-12\">\n              <div class=\"row\">\n                <div class=\"col-sm-4\">\n                  <ngx-osr1_1></ngx-osr1_1>\n                </div>\n                <div class=\"col-sm-4\">\n                  <ngx-osr1_2></ngx-osr1_2>\n                </div>\n                <div class=\"col-sm-4\">\n                  <ngx-osr1_3></ngx-osr1_3>\n                </div>\n                <div class=\"col-sm-4\">\n                  <ngx-osr1_4></ngx-osr1_4>\n                </div>\n                <div class=\"col-sm-4\">\n                  <ngx-osr1_5></ngx-osr1_5>\n                </div>\n                <div class=\"col-sm-4\">\n                  <ngx-osr1_6></ngx-osr1_6>\n                </div>\n              </div>\n            </div>\n          </nb-card-body>\n        </div>\n        <style>\n          \n          .h {\n            margin: -1.8rem 0.19rem 0rem 2.7rem;\n          }\n        </style>\n      </nb-card>\n    </router-outlet>\n  ",
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/zone-teams/team-osr/team-osr.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-osr/team-osr.module.ts ***!
  \**************************************************************/
/*! exports provided: TeamOSRModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamOSRModule", function() { return TeamOSRModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");
/* harmony import */ var _team_osr_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./team-osr-routing.module */ "./src/app/pages/zone-teams/team-osr/team-osr-routing.module.ts");
/* harmony import */ var _team_osr_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./team-osr.component */ "./src/app/pages/zone-teams/team-osr/team-osr.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @syncfusion/ej2-angular-circulargauge */ "./node_modules/@syncfusion/ej2-angular-circulargauge/__ivy_ngcc__/@syncfusion/ej2-angular-circulargauge.es5.js");
/* harmony import */ var _osr1_1_osr1_1_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./osr1.1/osr1.1.component */ "./src/app/pages/zone-teams/team-osr/osr1.1/osr1.1.component.ts");
/* harmony import */ var _osr1_2_osr1_2_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./osr1.2/osr1.2.component */ "./src/app/pages/zone-teams/team-osr/osr1.2/osr1.2.component.ts");
/* harmony import */ var _osr1_3_osr1_3_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./osr1.3/osr1.3.component */ "./src/app/pages/zone-teams/team-osr/osr1.3/osr1.3.component.ts");
/* harmony import */ var _osr1_4_osr1_4_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./osr1.4/osr1.4.component */ "./src/app/pages/zone-teams/team-osr/osr1.4/osr1.4.component.ts");
/* harmony import */ var _osr1_5_osr1_5_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./osr1.5/osr1.5.component */ "./src/app/pages/zone-teams/team-osr/osr1.5/osr1.5.component.ts");
/* harmony import */ var _osr1_6_osr1_6_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./osr1.6/osr1.6.component */ "./src/app/pages/zone-teams/team-osr/osr1.6/osr1.6.component.ts");














var TeamOSRModule = /** @class */ (function () {
    function TeamOSRModule() {
    }
    TeamOSRModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TeamOSRModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
    TeamOSRModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TeamOSRModule_Factory(t) { return new (t || TeamOSRModule)(); }, providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _team_osr_routing_module__WEBPACK_IMPORTED_MODULE_3__["TeamOSRRoutingModule"],
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
    return TeamOSRModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TeamOSRModule, { declarations: [_team_osr_component__WEBPACK_IMPORTED_MODULE_4__["TeamOsrComponent"], _osr1_1_osr1_1_component__WEBPACK_IMPORTED_MODULE_7__["Osr1_1Component"], _osr1_2_osr1_2_component__WEBPACK_IMPORTED_MODULE_8__["Osr1_2Component"],
        _osr1_3_osr1_3_component__WEBPACK_IMPORTED_MODULE_9__["Osr1_3Component"], _osr1_4_osr1_4_component__WEBPACK_IMPORTED_MODULE_10__["Osr1_4Component"], _osr1_5_osr1_5_component__WEBPACK_IMPORTED_MODULE_11__["Osr1_5Component"], _osr1_6_osr1_6_component__WEBPACK_IMPORTED_MODULE_12__["Osr1_6Component"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _team_osr_routing_module__WEBPACK_IMPORTED_MODULE_3__["TeamOSRRoutingModule"],
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
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamOSRModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_team_osr_component__WEBPACK_IMPORTED_MODULE_4__["TeamOsrComponent"], _osr1_1_osr1_1_component__WEBPACK_IMPORTED_MODULE_7__["Osr1_1Component"], _osr1_2_osr1_2_component__WEBPACK_IMPORTED_MODULE_8__["Osr1_2Component"],
                    _osr1_3_osr1_3_component__WEBPACK_IMPORTED_MODULE_9__["Osr1_3Component"], _osr1_4_osr1_4_component__WEBPACK_IMPORTED_MODULE_10__["Osr1_4Component"], _osr1_5_osr1_5_component__WEBPACK_IMPORTED_MODULE_11__["Osr1_5Component"], _osr1_6_osr1_6_component__WEBPACK_IMPORTED_MODULE_12__["Osr1_6Component"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _team_osr_routing_module__WEBPACK_IMPORTED_MODULE_3__["TeamOSRRoutingModule"],
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
                providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=team-osr-team-osr-module.js.map