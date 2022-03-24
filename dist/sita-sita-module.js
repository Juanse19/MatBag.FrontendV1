(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sita-sita-module"],{

/***/ "./src/app/pages/sita/message-ams/message-ams.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/sita/message-ams/message-ams.component.ts ***!
  \*****************************************************************/
/*! exports provided: MessageAMSComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageAMSComponent", function() { return MessageAMSComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @syncfusion/ej2-angular-grids */ "./node_modules/@syncfusion/ej2-angular-grids/__ivy_ngcc__/@syncfusion/ej2-angular-grids.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @syncfusion/ej2-angular-calendars */ "./node_modules/@syncfusion/ej2-angular-calendars/__ivy_ngcc__/@syncfusion/ej2-angular-calendars.es5.js");



















function MessageAMSComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 43);
} }
function MessageAMSComponent_b_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cargando...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var MessageAMSComponent = /** @class */ (function () {
    function MessageAMSComponent(fb, apiGetComp, http, api, miDatePipe, toastrService) {
        this.fb = fb;
        this.apiGetComp = apiGetComp;
        this.http = http;
        this.api = api;
        this.miDatePipe = miDatePipe;
        this.toastrService = toastrService;
        this.ams = [];
        this.amsData = [];
        this.alive = true;
        this.showCloseIcon = this.alive;
        this.loading = true;
    }
    Object.defineProperty(MessageAMSComponent.prototype, "StartTime", {
        get: function () { return this.airForm.get('StartTime'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MessageAMSComponent.prototype, "EndTime", {
        get: function () { return this.airForm.get('EndTime'); },
        enumerable: true,
        configurable: true
    });
    MessageAMSComponent.prototype.ngOnInit = function () {
        this.chargeDataAMS();
        this.toolbarOptions = ['ColumnChooser'];
        this.pageSettings = { pageSize: 10 };
        this.filterOptions = {
            type: 'Menu',
        };
        this.initForm();
    };
    MessageAMSComponent.prototype.initForm = function () {
        this.airForm = this.fb.group({
            StartTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            EndTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
        });
    };
    MessageAMSComponent.prototype.date = function (StartTime, EndTime) {
        // debugger
        var _this = this;
        var fechaFormateada = this.miDatePipe.transform(StartTime, 'yyyy-MM-dd h:mm:ss a z');
        var fechaFormateadaeTD = this.miDatePipe.transform(EndTime, 'yyyy-MM-dd h:mm:ss a zzzz');
        console.log('fechaSTD: ', fechaFormateada);
        console.log('fechaETD: ', fechaFormateadaeTD);
        console.log('test: ', StartTime);
        if (fechaFormateada == null && fechaFormateadaeTD == null) {
            this.toastrService.warning('', 'No pusiste la fecha.');
        }
        else if (fechaFormateadaeTD < fechaFormateada) {
            this.toastrService.warning('', 'La fecha no puede ser menor.');
        }
        else if (fechaFormateada > fechaFormateadaeTD) {
            this.toastrService.warning('', 'La fecha no puede ser mayor.');
        }
        else {
            this.http.get(this.api.apiUrlNode1 + '/api/date?from=' + fechaFormateada + '&to=' + fechaFormateadaeTD)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeWhile"])(function () { return _this.alive; }))
                .subscribe(function (res) {
            });
            var respons = {
                form: fechaFormateada,
                to: fechaFormateadaeTD
            };
            this.apiGetComp.PostJson(this.api.apiUrlNode1 + '/api/dates', respons)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeWhile"])(function () { return _this.alive; }))
                .subscribe(function (res) {
                // this.toastrService.success('', '¡Se edito licencia con exito!'); 
            });
        }
    };
    MessageAMSComponent.prototype.chargeDataAMS = function () {
        var _this = this;
        this.http.get(this.api.apiUrlNode1 + '/api/notificationAMS')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (res) {
            //   if (res.length === 0) {
            //     res = [{
            //       Id: 0,
            //       Flight_Notification_Type:0,
            //       Flight_Notification_RegisterTime:0,
            //       Flight_FlightId_FlightKind:0,
            //       Flight_FlightId_AirlineDesignator_IATA:0,
            //       Flight_FlightId_FlightNumber:0,
            //       Flight_FlightId_ScheduledDate:0,
            //       Flight_FlightState_ScheduledTime:0,
            //       Flight_FlightState_AircraftType_AircraftTypeId_AircraftTypeCode_IATA:0,
            //       Flight_FlightState_AircraftType_AircraftTypeId_AircraftTypeCode_ICAO:0,
            //       Flight_FlightState_Aircraft_AircraftId_Registration:0,
            //       Flight_FlightState_Route_ViaPoints_RouteViaPoint_sequenceNumber:0,
            //       Flight_FlightState_Route_ViaPoints_RouteViaPoint_AirportCode_IATA:0,
            //       Flight_FlightState_Route_ViaPoints_RouteViaPoint_AirportCode_ICAO:0,
            //       Flight_FlightState_propertyName_FlightUniqueID:0,
            //       Flight_FlightState_ChuteSlots_ChuteSlot_propertyName_StartTime:0,
            //       Flight_FlightState_ChuteSlots_ChuteSlot_propertyName_EndTime:0,
            //       Flight_FlightState_ChuteSlots_ChuteSlot_propertyName_Category:0,
            //       Flight_FlightState_ChuteSlots_ChuteSlot_Chute_propertyName_Name:0,
            //       Flight_FlightChanges_Change_propertyName_Chutes_OldValue:0,
            //       Flight_FlightChanges_Change_propertyName_Chutes_NewValue:0,
            //       Flight_FlightChanges_Change_ChuteSlotsChange_OldValue_ChuteSlot_StartTime:0,
            //       Flight_FlightChanges_Change_ChuteSlotsChange_OldValue_ChuteSlot_EndTime:0,
            //       Flight_FlightChanges_Change_ChuteSlotsChange_NewValue_ChuteSlot_StartTime:0,
            //       Flight_FlightChanges_Change_ChuteSlotsChange_NewValue_ChuteSlot_EndTime:0,
            // }]
            //   this.amsData = res;
            //   console.log('amsData: ', this.amsData);
            //   this.loading = false;
            //   } else {
            //   console.log('testData: ', res);
            //   this.loading = false;
            //   this.amsData = res;
            //   }
            _this.amsData = res;
            _this.loading = false;
            _this.bandaAMSCharge();
        });
        // const contador = interval(40000)
        // contador.subscribe((n) => {
        //   this.http.get(this.api.apiUrlNode1 + '/api/notificationAMS')
        //   .pipe(takeWhile(() => this.alive))
        //   .subscribe((res: any) => {
        //     this.amsData = res;
        //     this.loading = false;
        //   });
        // });
    };
    MessageAMSComponent.prototype.bandaAMSCharge = function () {
        var _this = this;
        if (this.intervalSubscriptionAms) {
            this.intervalSubscriptionAms.unsubscribe();
        }
        this.intervalSubscriptionAms = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(16000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () { return _this.http.get(_this.api.apiUrlNode1 + '/api/notificationAMS'); }))
            .subscribe(function (res) {
            _this.amsData = res;
            console.log('Equipos:', _this.amsData);
        });
    };
    MessageAMSComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    MessageAMSComponent.ɵfac = function MessageAMSComponent_Factory(t) { return new (t || MessageAMSComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_1__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbToastrService"])); };
    MessageAMSComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MessageAMSComponent, selectors: [["ngx-message-ams"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_6__["ResizeService"]])], decls: 59, vars: 10, consts: [["novalidate", "", "id", "formId", 1, "form-inline", 3, "formGroup"], [1, "form-group", "mx-sm-4", "mb-3"], ["formControlName", "StartTime", "id", "StartTime", "data-name", "StartTime", "format", "M/dd/yy h:mm:ss a", "placeholder", "Hora de inicio", "floatLabelType", "Always", "required", "", 1, "e-field"], ["formControlName", "EndTime", "id", "EndTime", "data-name", "EndTime", "format", "yyyy-MM-dd h:mm:ss a", "name", "datetime", "placeholder", "Hora de finalizaci\u00F3n", "floatLabelType", "Always", "required", "", 1, "e-field"], ["nbButton", "", "status", "primary ", 1, "btn", "btn-primary", 2, "margin-top", "26px", 3, "click"], [1, "overlay"], ["class", "spinner-border", 4, "ngIf"], ["style", "margin-top: 4rem; margin-left: -3rem", 4, "ngIf"], ["allowSorting", "true", "allowResizing", "true", 3, "dataSource", "allowPaging", "pageSettings", "filterSettings", "toolbar", "showColumnChooser", "allowFiltering"], ["field", "FlightIdFlightKind", "headerText", "FlightIdFlightKind", "minWidth", "120", "maxWidth", "300", "width", "130"], ["field", "FlightIdAirlineDesignatorIATA", "headerText", "FlightIdAirlineDesignatorIATA", "minWidth", "120", "maxWidth", "300", "type", "date", "format", "dd/MM/yyyy hh:mm:ss a", "width", "120"], ["field", "FlightIdAirlineDesignatorICAO", "headerText", "FlightIdAirlineDesignatorICAO", "width", "100"], ["field", "FlightIdFlightNumber", "headerText", "FlightIdFlightNumber", "width", "100"], ["field", "FlightIdScheduledDate", "headerText", "FlightIdScheduledDate", "width", "100"], ["field", "FlightIdAirportCodeIATA", "headerText", "FlightIdAirportCodeIATA", "width", "100"], ["field", "FlightIdAirportCodeICAO", "headerText", "FlightIdAirportCodeICAO", "width", "100"], ["field", "FlightStateScheduledTime", "headerText", "FlightStateScheduledTime", "width", "100"], ["field", "FlightStateLinkedFlightFlightIdFlightKind", "headerText", "FlightStateLinkedFlightFlightIdFlightKind", "width", "100"], ["field", "FlightStateLinkedFlightFlightIdFlightKindIATA", "headerText", "FlightStateLinkedFlightFlightIdFlightKindIATA", "width", "100"], ["field", "FlightStateLinkedFlightFlightIdFlightKindICAO", "headerText", "FlightStateLinkedFlightFlightIdFlightKindICAO", "width", "100"], ["field", "FlightStateLinkedFlightFlightIdFlightNumber", "headerText", "FlightStateLinkedFlightFlightIdFlightNumber", "width", "100"], ["field", "FlightStateLinkedFlightFlightIdScheduledDate", "headerText", "FlightStateLinkedFlightFlightIdScheduledDate", "width", "100"], ["field", "FlightStateLinkedFlightFlightIdAirportCodeIATA", "headerText", "FlightStateLinkedFlightFlightIdAirportCodeIATA", "width", "100"], ["field", "FlightStateLinkedFlightFlightIdAirportCodeICAO", "headerText", "FlightStateLinkedFlightFlightIdAirportCodeICAO", "width", "100"], ["field", "FlightStateLinkedFlightFlightUniqueID", "headerText", "FlightStateLinkedFlightFlightUniqueID", "width", "100"], ["field", "FlightStateLinkedFlightScheduledTime", "headerText", "FlightStateLinkedFlightScheduledTime", "width", "100"], ["field", "FlightStateAircraftTypeAircraftTypeIdAircraftTypeCodeIATA", "headerText", "FlightStateAircraftTypeAircraftTypeIdAircraftTypeCodeIATA", "width", "100"], ["field", "FlightStateAircraftTypeAircraftTypeIdAircraftTypeCodeICAO", "headerText", "FlightStateAircraftTypeAircraftTypeIdAircraftTypeCodeICAO", "width", "100"], ["field", "FlightStateAircraftTypeName", "headerText", "FlightStateAircraftTypeName", "width", "100"], ["field", "FlightStateAircraftAircraftIdRegistration", "headerText", "FlightStateAircraftAircraftIdRegistration", "width", "100"], ["field", "FlightStateAircraftIsRetired", "headerText", "FlightStateAircraftIsRetired", "width", "100"], ["field", "FlightStateRouteattributescustomsType", "headerText", "FlightStateRouteattributescustomsType", "width", "100"], ["field", "FlightStateRouteViaPointsRouteViaPointattributessequenceNumber", "headerText", "FlightStateRouteViaPointsRouteViaPointattributessequenceNumber", "width", "100"], ["field", "FlightStateRouteViaPointsAirportCodeIATA", "headerText", "FlightStateRouteViaPointsAirportCodeIATA", "width", "100"], ["field", "FlightStateRouteViaPointsAirportCodeICAO", "headerText", "FlightStateRouteViaPointsAirportCodeICAO", "width", "100"], ["field", "FlightStateFlightUniqueID", "headerText", "FlightStateFlightUniqueID", "width", "100"], ["field", "FlightStateChuteSlotsChuteSlotStartTime", "headerText", "FlightStateChuteSlotsChuteSlotStartTime", "width", "100"], ["field", "FlightStateChuteSlotsChuteSlotEndTime", "headerText", "FlightStateChuteSlotsChuteSlotEndTime", "width", "100"], ["field", "FlightStateChuteSlotsChuteSlotChuteName", "headerText", "FlightStateChuteSlotsChuteSlotChuteName", "width", "100"], ["field", "FlightStateChuteSlotsChuteSlotChuteExternalName", "headerText", "FlightStateChuteSlotsChuteSlotChuteExternalName", "width", "100"], ["field", "SITAAMSFlightsResultWebServiceResultApiResponseID", "headerText", "SITAAMSFlightsResultWebServiceResultApiResponseID", "width", "100"], ["field", "CreatedDate", "headerText", "CreatedDate", "width", "100"], ["field", "UpdatedDate", "headerText", "UpdatedDate", "width", "100"], [1, "spinner-border"], [2, "margin-top", "4rem", "margin-left", "-3rem"]], template: function MessageAMSComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Inducci\u00F3n Manual SITA\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ejs-datetimepicker", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "ejs-datetimepicker", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessageAMSComponent_Template_button_click_11_listener() { return ctx.date(ctx.airForm.controls.StartTime.value, ctx.airForm.controls.EndTime.value); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Cosultar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Mensajes AMS ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, MessageAMSComponent_div_20_Template, 1, 0, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, MessageAMSComponent_b_21_Template, 2, 0, "b", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ejs-grid", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "e-columns");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "e-column", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "e-column", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "e-column", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "e-column", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "e-column", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "e-column", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "e-column", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "e-column", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "e-column", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "e-column", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "e-column", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "e-column", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "e-column", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "e-column", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "e-column", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "e-column", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "e-column", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "e-column", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "e-column", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "e-column", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "e-column", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "e-column", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "e-column", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "e-column", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "e-column", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "e-column", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "e-column", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "e-column", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "e-column", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "e-column", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "e-column", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "e-column", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "e-column", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "e-column", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.airForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.amsData)("allowPaging", true)("pageSettings", ctx.pageSettings)("filterSettings", ctx.filterOptions)("toolbar", ctx.toolbarOptions)("showColumnChooser", true)("allowFiltering", true);
        } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"], _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_10__["DateTimePickerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_6__["GridComponent"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_6__["ColumnsDirective"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_6__["AggregateColumnsDirective"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_6__["ColumnDirective"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_6__["AggregateColumnDirective"]], styles: [".overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 78%;\n  z-index: 10;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.form-inline[_ngcontent-%COMP%]   [fullWidth][_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.form-inline[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 0 1.5rem 1.5rem 0;\n}\n\n#form[_ngcontent-%COMP%] {\n  margin-left: 05px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2l0YS9tZXNzYWdlLWFtcy9DOlxcVXNlcnNcXGpsb3NhZGFcXERvY3VtZW50c1xcTWF0QmFnLkZyb250ZW5kVjEvc3JjXFxhcHBcXHBhZ2VzXFxzaXRhXFxtZXNzYWdlLWFtc1xcbWVzc2FnZS1hbXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NpdGEvbWVzc2FnZS1hbXMvbWVzc2FnZS1hbXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlO0VBQ2YsVUFBVTtFQUdWLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQ0QzQjs7QURJQTtFQUNJLE9BQU87QUNEWDs7QURJQTtFQUNJLHlCQUF5QjtBQ0Q3Qjs7QURJQTtFQUNJLGlCQUFpQjtBQ0RyQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpdGEvbWVzc2FnZS1hbXMvbWVzc2FnZS1hbXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogNzglO1xyXG4gICAgLy8gaGVpZ2h0OiAxMDAlO1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NCwgNzQsIDc0LCAuOCk7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mb3JtLWlubGluZSBbZnVsbFdpZHRoXSB7XHJcbiAgICBmbGV4OiAxO1xyXG59XHJcblxyXG4uZm9ybS1pbmxpbmU+KiB7XHJcbiAgICBtYXJnaW46IDAgMS41cmVtIDEuNXJlbSAwO1xyXG59XHJcblxyXG4jZm9ybSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDVweDtcclxufSIsIi5vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogNzglO1xuICB6LWluZGV4OiAxMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5mb3JtLWlubGluZSBbZnVsbFdpZHRoXSB7XG4gIGZsZXg6IDE7XG59XG5cbi5mb3JtLWlubGluZSA+ICoge1xuICBtYXJnaW46IDAgMS41cmVtIDEuNXJlbSAwO1xufVxuXG4jZm9ybSB7XG4gIG1hcmdpbi1sZWZ0OiAwNXB4O1xufVxuIl19 */"] });
    return MessageAMSComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageAMSComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-message-ams',
                templateUrl: './message-ams.component.html',
                styleUrls: ['./message-ams.component.scss'],
                providers: [_syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_6__["ResizeService"]]
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] }, { type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_1__["ApiGetService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/sita/message-bm/message-bm.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/sita/message-bm/message-bm.component.ts ***!
  \***************************************************************/
/*! exports provided: MessageBMComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageBMComponent", function() { return MessageBMComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @syncfusion/ej2-angular-grids */ "./node_modules/@syncfusion/ej2-angular-grids/__ivy_ngcc__/@syncfusion/ej2-angular-grids.es5.js");













function MessageBMComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 25);
} }
function MessageBMComponent_b_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cargando...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var MessageBMComponent = /** @class */ (function () {
    function MessageBMComponent(apiGetComp, http, api) {
        this.apiGetComp = apiGetComp;
        this.http = http;
        this.api = api;
        this.bagMessageData = [];
        this.alive = true;
        this.showCloseIcon = this.alive;
        this.loading = true;
    }
    MessageBMComponent.prototype.ngOnInit = function () {
        this.chargeDataBM();
        this.pageSettings = { pageSize: 10 };
        this.filterOptions = {
            type: 'Menu',
        };
    };
    MessageBMComponent.prototype.chargeDataBM = function () {
        var _this = this;
        this.http.get(this.api.apiUrlNode1 + '/api/notificationBM')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (res) {
            // tslint:disable-next-line: no-console
            // console.log('acoData: ', res);
            _this.loading = false;
            _this.bagMessageData = res;
            _this.bandaBmCharge();
        });
        // const contador = interval(60000)
        // contador.subscribe((n) => {
        //   this.http.get(this.api.apiUrlNode1 + '/api/notificationBM')
        //   .pipe(takeWhile(() => this.alive))
        //   .subscribe((res: any) => {
        //     this.bagMessageData = res;
        //     this.loading = false;
        //   });
        // });
    };
    MessageBMComponent.prototype.bandaBmCharge = function () {
        var _this = this;
        if (this.intervalSubscriptionBm) {
            this.intervalSubscriptionBm.unsubscribe();
        }
        this.intervalSubscriptionBm = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(16000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () { return _this.http.get(_this.api.apiUrlNode1 + '/api/notificationBM'); }))
            .subscribe(function (res) {
            _this.bagMessageData = res;
            // console.log('Equipos:', this.bagMessageData);
        });
    };
    MessageBMComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    MessageBMComponent.ɵfac = function MessageBMComponent_Factory(t) { return new (t || MessageBMComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_1__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"])); };
    MessageBMComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MessageBMComponent, selectors: [["ngx-message-bm"]], decls: 31, vars: 7, consts: [[1, "overlay"], ["class", "spinner-border", 4, "ngIf"], ["style", "margin-top: 4rem; margin-left: -3rem", 4, "ngIf"], ["allowSorting", "true", "allowResizing", "true", 3, "dataSource", "allowPaging", "pageSettings", "filterSettings", "allowFiltering"], ["field", "Standard_Message_Identifier", "headerText", "Standard_Message_Identifier", "minWidth", "120", "maxWidth", "300", "width", "130"], ["field", "Change_Status_Indicator", "headerText", "Change_Status_Indicator", "type", "date", "format", "dd/MM/yyyy hh:mm:ss a", "minWidth", "120", "maxWidth", "300", "width", "120"], ["field", "Version_Supplementary_Data", "headerText", "Version_Supplementary_Data", "minWidth", "120", "maxWidth", "300", "width", "100"], ["field", "Outbound_Flight_Information", "headerText", "Outbound_Flight_Information", "minWidth", "120", "maxWidth", "300", "width", "100"], ["field", "Inbound_Flight_Information", "headerText", "Inbound_Flight_Information", "width", "100"], ["field", "Onward_Flight_Information", "headerText", "Onward_Flight_Information", "width", "100"], ["field", "Baggage_Tag_Details", "headerText", "Baggage_Tag_Details", "width", "100"], ["field", "Check_in_Location_Information", "headerText", "Check_in_Location_Information", "width", "100"], ["field", "Reconciliation_Data", "headerText", "Reconciliation_Data", "width", "100"], ["field", "Handling_Location", "headerText", "Handling_Location", "width", "100"], ["field", "Pieces_Weight_Dimensions_Type_Data", "headerText", "Pieces_Weight_Dimensions_Type_Data", "width", "100"], ["field", "Passenger_Name", "headerText", "Passenger_Name", "width", "100"], ["field", "Ground_Transport", "headerText", "Ground_Transport", "width", "100"], ["field", "Frequent_Traveller_Numb", "headerText", "Frequent_Traveller_Numb", "width", "100"], ["field", "Corporate_Group_Name", "headerText", "Corporate_Group_Name", "width", "100"], ["field", "Automated_PNR_Address", "headerText", "Automated_PNR_Address", "width", "100"], ["field", "Baggage_Tag_Printer_ID", "headerText", "Baggage_Tag_Printer_ID", "width", "100"], ["field", "Default_Message_Printer", "headerText", "Default_Message_Printer", "width", "100"], ["field", "Baggage_Exception_Data", "headerText", "Baggage_Exception_Data", "width", "100"], ["field", "Internal_Airline_Data", "headerText", "Internal_Airline_Data", "width", "100"], ["field", "Baggage_Security_Screening", "headerText", "Baggage_Security_Screening", "width", "100"], [1, "spinner-border"], [2, "margin-top", "4rem", "margin-left", "-3rem"]], template: function MessageBMComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Mensajes BagMessage ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MessageBMComponent_div_5_Template, 1, 0, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MessageBMComponent_b_6_Template, 2, 0, "b", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ejs-grid", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "e-columns");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "e-column", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "e-column", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "e-column", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "e-column", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "e-column", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "e-column", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "e-column", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "e-column", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "e-column", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "e-column", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "e-column", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "e-column", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "e-column", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "e-column", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "e-column", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "e-column", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "e-column", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "e-column", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "e-column", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "e-column", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "e-column", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.bagMessageData)("allowPaging", true)("pageSettings", ctx.pageSettings)("filterSettings", ctx.filterOptions)("allowFiltering", true);
        } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_8__["GridComponent"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_8__["ColumnsDirective"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_8__["AggregateColumnsDirective"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_8__["ColumnDirective"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_8__["AggregateColumnDirective"]], styles: [".overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 78%;\n  z-index: 10;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2l0YS9tZXNzYWdlLWJtL0M6XFxVc2Vyc1xcamxvc2FkYVxcRG9jdW1lbnRzXFxNYXRCYWcuRnJvbnRlbmRWMS9zcmNcXGFwcFxccGFnZXNcXHNpdGFcXG1lc3NhZ2UtYm1cXG1lc3NhZ2UtYm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NpdGEvbWVzc2FnZS1ibS9tZXNzYWdlLWJtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUNmLFVBQVU7RUFHVixXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUNEM0IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zaXRhL21lc3NhZ2UtYm0vbWVzc2FnZS1ibS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdmVybGF5IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiA3OCU7XHJcbiAgICAvLyBoZWlnaHQ6IDEwMCU7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc0LCA3NCwgNzQsIC44KTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufSIsIi5vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogNzglO1xuICB6LWluZGV4OiAxMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iXX0= */"] });
    return MessageBMComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageBMComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "ngx-message-bm",
                templateUrl: "./message-bm.component.html",
                styleUrls: ["./message-bm.component.scss"],
            }]
    }], function () { return [{ type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_1__["ApiGetService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/sita/sita-message-bm/sita-message-bm.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/sita/sita-message-bm/sita-message-bm.component.ts ***!
  \*************************************************************************/
/*! exports provided: SitaMessageBMComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitaMessageBMComponent", function() { return SitaMessageBMComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @syncfusion/ej2-angular-grids */ "./node_modules/@syncfusion/ej2-angular-grids/__ivy_ngcc__/@syncfusion/ej2-angular-grids.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _nebular_security__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/security */ "./node_modules/@nebular/security/__ivy_ngcc__/fesm5/index.js");
/* harmony import */ var _core_stores_user_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../@core/stores/user.store */ "./src/app/@core/stores/user.store.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @syncfusion/ej2-angular-popups */ "./node_modules/@syncfusion/ej2-angular-popups/__ivy_ngcc__/@syncfusion/ej2-angular-popups.es5.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");

























var _c0 = ["ejDialogTX"];
var _c1 = ["container"];
function SitaMessageBMComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Mensaje Queue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Nombre Queue Local");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SitaMessageBMComponent_ng_template_13_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.updateData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Actualizar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r3.orderForm);
} }
var conConf;
var REFERE;
var SitaMessageBMComponent = /** @class */ (function () {
    function SitaMessageBMComponent(api, http, router, fb, toastrService, apiGetComp, accessChecker, userStore) {
        var _this = this;
        this.api = api;
        this.http = http;
        this.router = router;
        this.fb = fb;
        this.toastrService = toastrService;
        this.apiGetComp = apiGetComp;
        this.accessChecker = accessChecker;
        this.userStore = userStore;
        this.dataRefe = REFERE;
        this.submitClicked = false;
        this.select = false;
        this.alive = true;
        this.showCloseIcon = true;
        this.dataConfigu = [];
        this.dataConfigu2 = [];
        this.visible = true;
        this.hidden = false;
        this.position = { X: 'left', Y: 'top' };
        // Initialize the Dialog component's target element.
        this.initilaizeTarget = function () {
            _this.targetElement = _this.container.nativeElement.parentElement;
        };
        this.hideDialog = function () {
            _this.ejDialogTX.hide();
        };
        this.buttons = [
            {
                'click': this.hideDialog.bind(this),
                // Accessing button component properties by buttonModel property
                buttonModel: {
                    content: 'OK',
                    isPrimary: true
                }
            }
        ];
    }
    Object.defineProperty(SitaMessageBMComponent.prototype, "Parameter", {
        get: function () { return this.orderForm.get('Parameter'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SitaMessageBMComponent.prototype, "Value", {
        get: function () { return this.orderForm.get('Value'); },
        enumerable: true,
        configurable: true
    });
    SitaMessageBMComponent.prototype.ngOnInit = function () {
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, };
        this.pageSettings = { pageSizes: true, pageSize: 10 };
        this.filterOptions = {
            type: 'Menu',
        };
        this.ChargeDataConfi();
        this.commands = [
            { type: 'Edit', buttonOption: { cssClass: 'e-flat', iconCss: 'e-edit e-icons' } },
        ];
        this.orderForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroup"]({
            Id: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"],
            Parameter: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](),
            Value: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]()
        });
    };
    SitaMessageBMComponent.prototype.createFormGroup = function (data) {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroup"]({
            // Id: new FormControl(data.Id, Validators.required),
            Parameter: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](data.Parameter, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required),
            Value: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](data.Value, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required)
        });
    };
    SitaMessageBMComponent.prototype.loadUser = function (id) {
        debugger;
        this.orderForm.setValue({
            id: this.dataConf.Id ? this.dataConf.Id : '',
            role: conConf.Parameter ? conConf.Parameter : '',
            firstName: conConf.Value ? conConf.Value : '',
        });
    };
    SitaMessageBMComponent.prototype.actionBegin = function (args) {
        var _this = this;
        if (args.requestType === 'beginEdit') {
            this.submitClicked = true;
            this.accessChecker.isGranted('edit', 'ordertable')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeWhile"])(function () { return _this.alive; }))
                .subscribe(function (res) {
                if (res) {
                    console.log('test', args.rowData.Id);
                    args.cancel = true;
                    _this.ejDialogTX.show();
                    _this.orderForm.setValue({
                        Id: args.rowData.Id ? args.rowData.Id : '',
                        Parameter: args.rowData.Parameter ? args.rowData.Parameter : '',
                        Value: args.rowData.Value ? args.rowData.Value : '',
                    });
                    // this.loadUser(args.rowData.Id)
                    // console.log('Data',args.rowData.Id);
                    // console.log('test', this.createFormGroup(args.rowData).value)
                    // console.log('Prueba', this.orderForm.setValue = this.createFormGroup(args.rowData).value);
                    // this.dataConf = args.rowData;
                    // console.log('info', this.dataConf);
                    _this.select = false;
                    _this.mostrar = false;
                }
                else {
                    _this.select = true;
                    _this.mostrar = true;
                    args.cancel = true;
                }
            });
        }
    };
    SitaMessageBMComponent.prototype.updateData = function (args) {
        var _this = this;
        debugger;
        this.dataConf = this.orderForm.value;
        var respon = {
            Id: this.dataConf.Id,
            Parameter: this.dataConf.Parameter,
            Value: this.dataConf.Value
        };
        console.log('Datas update', respon);
        this.apiGetComp.PostJson(this.api.apiUrlNode1 + '/api/updateConf', respon)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (res) {
            // console.log("Envió: ", res);
            _this.ChargeDataConfi();
        });
        // console.log('Update configuration');
        this.ejDialogTX.hide();
    };
    SitaMessageBMComponent.prototype.reconocer = function () {
        var _this = this;
        this.accessChecker.isGranted('edit', 'ordertable')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (res) {
            if (res) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
                    title: 'Desea Eliminar los datos del WCS?',
                    text: "\u00A1Eliminar\u00E1 toda la informaci\u00F3n!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: '¡Sí, Eliminar!'
                }).then(function (result) {
                    debugger;
                    if (result.value) {
                        debugger;
                        var currentUserId = _this.userStore.getUser().id;
                        var currentUser = _this.userStore.getUser().firstName;
                        // console.log("este es el usuario: ",this.userStore.getUser().firstName);
                        var respons = {
                            user: currentUser,
                            message: "Eliminó todo el WCS",
                            users: currentUserId,
                        };
                        _this.apiGetComp.PostJson(_this.api.apiUrlNode1 + '/postSaveAlarmUser', respons)
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeWhile"])(function () { return _this.alive; }))
                            .subscribe(function (res) {
                            //  console.log("Envió: ", res);
                        });
                        _this.apiGetComp.GetJson(_this.api.apiUrlNode1 + '/api/deleteallposition')
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeWhile"])(function () { return _this.alive; }))
                            .subscribe(function (res) {
                        });
                        sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire('¡Se Eliminaron Exitosamente', 'success');
                    }
                });
                _this.select = false;
                _this.mostrar = false;
            }
            else {
                _this.select = true;
                _this.mostrar = true;
            }
        });
    };
    SitaMessageBMComponent.prototype.ChargeDataConfi = function () {
        var _this = this;
        this.http.get(this.api.apiUrlNode1 + '/api/recepcionBM')
            .subscribe(function (res) {
            //REPORTOCUPATION=res;
            _this.dataConfigu = res;
            REFERE = res;
            _this.dataRefe = REFERE;
            _this.bandaMCharge();
            // console.log("Configuration:", this.dataConfigu);
            // console.log("dataRefe:", this.dataRefe);
        });
    };
    SitaMessageBMComponent.prototype.chargeData = function () {
        var _this = this;
        this.http.get(this.api.apiUrlNode1 + '/api/recepcionBM')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (res) {
            // tslint:disable-next-line: no-console
            // console.log('teamsData: ', res);
            _this.dataConfigu2 = res;
        });
        // const contador = interval(40000)
        // contador.subscribe((n) => {
        //   this.http.get(this.api.apiUrlNode1 + '/api/recepcionBM')
        //   .pipe(takeWhile(() => this.alive))
        //   .subscribe((res: any) => {
        //     this.dataConfigu2 = res;
        //   });
        // });
    };
    SitaMessageBMComponent.prototype.bandaMCharge = function () {
        var _this = this;
        if (this.intervalSubscriptionM) {
            this.intervalSubscriptionM.unsubscribe();
        }
        this.intervalSubscriptionM = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(16000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () { return _this.http.get(_this.api.apiUrlNode1 + '/api/recepcionBM'); }))
            .subscribe(function (res) {
            _this.dataConfigu = res;
            // console.log('Equipos:', this.bagMessageData);
        });
    };
    SitaMessageBMComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    SitaMessageBMComponent.ɵfac = function SitaMessageBMComponent_Factory(t) { return new (t || SitaMessageBMComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_2__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_security__WEBPACK_IMPORTED_MODULE_6__["NbAccessChecker"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_stores_user_store__WEBPACK_IMPORTED_MODULE_7__["UserStore"])); };
    SitaMessageBMComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SitaMessageBMComponent, selectors: [["ngx-sita-message-bm"]], viewQuery: function SitaMessageBMComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ejDialogTX = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_4__["ToolbarService"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_4__["EditService"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_4__["PageService"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_4__["SortService"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_4__["CommandColumnService"]])], decls: 15, vars: 11, consts: [["allowSorting", "true", "allowTextWrap", "true", 3, "dataSource", "editSettings", "toolbar", "allowPaging", "pageSettings", "filterSettings", "allowFiltering", "actionBegin"], ["field", "Parameter", "headerText", "Mensaje Queue", "textAlign", "Left", "width", "70"], ["field", "Value", "headerText", "Nombre Queue Local", "textAlign", "Left", "width", "90"], ["headerText", "Editar", "width", "30", "textAlign", "center", 3, "commands"], [1, "root-container"], ["container", ""], ["id", "ejDialogTX", "allowDragging", "true", "header", "", "width", "300px", 3, "visible", "target", "showCloseIcon"], ["ejDialogTX", ""], ["content", ""], [3, "formGroup"], [1, "form-row"], [1, "form-group", "col-md-12"], [1, "e-float-input", "e-control-wrapper"], ["formControlName", "Parameter", "id", "Parameter", "name", "Parameter", "readonly", "", "type", "text", 1, "field", "left"], [1, "e-float-line"], ["for", "Parameter", 1, "e-float-text", "e-label-top"], ["formControlName", "Value", "id", "Value", "name", "Value", "type", "text"], ["for", "Value", 1, "e-float-text", "e-label-top"], ["nbButton", "", "status", "info", "hero", "", 3, "click"]], template: function SitaMessageBMComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Recepci\u00F3n de Notificaciones ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ejs-grid", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("actionBegin", function SitaMessageBMComponent_Template_ejs_grid_actionBegin_4_listener($event) { return ctx.actionBegin($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "e-columns");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "e-column", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "e-column", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "e-column", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ejs-dialog", 6, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SitaMessageBMComponent_ng_template_13_Template, 17, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataConfigu)("editSettings", ctx.editSettings)("toolbar", ctx.toolbar)("allowPaging", true)("pageSettings", ctx.pageSettings)("filterSettings", ctx.filterOptions)("allowFiltering", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("commands", ctx.commands);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.hidden)("target", ctx.targetElement)("showCloseIcon", ctx.showCloseIcon);
        } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_4__["GridComponent"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_4__["ColumnsDirective"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_4__["AggregateColumnsDirective"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_4__["ColumnDirective"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_4__["AggregateColumnDirective"], _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_10__["DialogComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControlName"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbButtonComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpdGEvc2l0YS1tZXNzYWdlLWJtL3NpdGEtbWVzc2FnZS1ibS5jb21wb25lbnQuc2NzcyJ9 */"] });
    return SitaMessageBMComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SitaMessageBMComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-sita-message-bm',
                templateUrl: './sita-message-bm.component.html',
                providers: [_syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_4__["ToolbarService"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_4__["EditService"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_4__["PageService"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_4__["SortService"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_4__["CommandColumnService"]],
                styleUrls: ['./sita-message-bm.component.scss']
            }]
    }], function () { return [{ type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbToastrService"] }, { type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_2__["ApiGetService"] }, { type: _nebular_security__WEBPACK_IMPORTED_MODULE_6__["NbAccessChecker"] }, { type: _core_stores_user_store__WEBPACK_IMPORTED_MODULE_7__["UserStore"] }]; }, { ejDialogTX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['ejDialogTX']
        }], container: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['container', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/sita/sita-message/sita-message.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/sita/sita-message/sita-message.component.ts ***!
  \*******************************************************************/
/*! exports provided: SitaMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitaMessageComponent", function() { return SitaMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @syncfusion/ej2-angular-grids */ "./node_modules/@syncfusion/ej2-angular-grids/__ivy_ngcc__/@syncfusion/ej2-angular-grids.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _nebular_security__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/security */ "./node_modules/@nebular/security/__ivy_ngcc__/fesm5/index.js");
/* harmony import */ var _core_stores_user_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../@core/stores/user.store */ "./src/app/@core/stores/user.store.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @syncfusion/ej2-angular-popups */ "./node_modules/@syncfusion/ej2-angular-popups/__ivy_ngcc__/@syncfusion/ej2-angular-popups.es5.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");

























var _c0 = ["ejDialogTX"];
var _c1 = ["container"];
function SitaMessageComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Mensaje Queue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Nombre Queue Local");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SitaMessageComponent_ng_template_13_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.updateData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Actualizar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r3.orderForm);
} }
var conConf;
var REFERE;
var SitaMessageComponent = /** @class */ (function () {
    function SitaMessageComponent(api, http, router, fb, toastrService, apiGetComp, accessChecker, userStore) {
        var _this = this;
        this.api = api;
        this.http = http;
        this.router = router;
        this.fb = fb;
        this.toastrService = toastrService;
        this.apiGetComp = apiGetComp;
        this.accessChecker = accessChecker;
        this.userStore = userStore;
        this.dataRefe = REFERE;
        this.submitClicked = false;
        this.select = false;
        this.alive = true;
        this.showCloseIcon = true;
        this.dataConfigu = [];
        this.dataConfigu1 = [];
        this.visible = true;
        this.hidden = false;
        this.position = { X: 'left', Y: 'top' };
        // Initialize the Dialog component's target element.
        this.initilaizeTarget = function () {
            _this.targetElement = _this.container.nativeElement.parentElement;
        };
        this.hideDialog = function () {
            _this.ejDialogTX.hide();
        };
        this.buttons = [
            {
                'click': this.hideDialog.bind(this),
                // Accessing button component properties by buttonModel property
                buttonModel: {
                    content: 'OK',
                    isPrimary: true
                }
            }
        ];
    }
    Object.defineProperty(SitaMessageComponent.prototype, "Parameter", {
        get: function () { return this.orderForm.get('Parameter'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SitaMessageComponent.prototype, "Value", {
        get: function () { return this.orderForm.get('Value'); },
        enumerable: true,
        configurable: true
    });
    SitaMessageComponent.prototype.ngOnInit = function () {
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, };
        this.pageSettings = { pageSizes: true, pageSize: 10 };
        this.filterOptions = {
            type: 'Menu',
        };
        this.ChargeDataConfi();
        this.commands = [
            { type: 'Edit', buttonOption: { cssClass: 'e-flat', iconCss: 'e-edit e-icons' } },
        ];
        this.orderForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroup"]({
            Id: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"],
            Parameter: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](),
            Value: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]()
        });
    };
    SitaMessageComponent.prototype.createFormGroup = function (data) {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroup"]({
            // Id: new FormControl(data.Id, Validators.required),
            Parameter: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](data.Parameter, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required),
            Value: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](data.Value, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required)
        });
    };
    SitaMessageComponent.prototype.loadUser = function (id) {
        debugger;
        this.orderForm.setValue({
            id: this.dataConf.Id ? this.dataConf.Id : '',
            role: conConf.Parameter ? conConf.Parameter : '',
            firstName: conConf.Value ? conConf.Value : '',
        });
    };
    SitaMessageComponent.prototype.actionBegin = function (args) {
        var _this = this;
        if (args.requestType === 'beginEdit') {
            this.submitClicked = true;
            this.accessChecker.isGranted('edit', 'ordertable')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeWhile"])(function () { return _this.alive; }))
                .subscribe(function (res) {
                if (res) {
                    console.log('test', args.rowData.Id);
                    args.cancel = true;
                    _this.ejDialogTX.show();
                    _this.orderForm.setValue({
                        Id: args.rowData.Id ? args.rowData.Id : '',
                        Parameter: args.rowData.Parameter ? args.rowData.Parameter : '',
                        Value: args.rowData.Value ? args.rowData.Value : '',
                    });
                    // this.loadUser(args.rowData.Id)
                    // console.log('Data',args.rowData.Id);
                    // console.log('test', this.createFormGroup(args.rowData).value)
                    // console.log('Prueba', this.orderForm.setValue = this.createFormGroup(args.rowData).value);
                    // this.dataConf = args.rowData;
                    // console.log('info', this.dataConf);
                    _this.select = false;
                    _this.mostrar = false;
                }
                else {
                    _this.select = true;
                    _this.mostrar = true;
                    args.cancel = true;
                }
            });
        }
    };
    SitaMessageComponent.prototype.updateData = function (args) {
        var _this = this;
        debugger;
        this.dataConf = this.orderForm.value;
        var respon = {
            Id: this.dataConf.Id,
            Parameter: this.dataConf.Parameter,
            Value: this.dataConf.Value
        };
        console.log('Datas update', respon);
        this.apiGetComp.PostJson(this.api.apiUrlNode1 + '/api/updateConf', respon)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (res) {
            // console.log("Envió: ", res);
            _this.ChargeDataConfi();
        });
        // console.log('Update configuration');
        this.ejDialogTX.hide();
    };
    SitaMessageComponent.prototype.reconocer = function () {
        var _this = this;
        this.accessChecker.isGranted('edit', 'ordertable')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (res) {
            if (res) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
                    title: 'Desea Eliminar los datos del WCS?',
                    text: "\u00A1Eliminar\u00E1 toda la informaci\u00F3n!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: '¡Sí, Eliminar!'
                }).then(function (result) {
                    debugger;
                    if (result.value) {
                        debugger;
                        var currentUserId = _this.userStore.getUser().id;
                        var currentUser = _this.userStore.getUser().firstName;
                        // console.log("este es el usuario: ",this.userStore.getUser().firstName);
                        var respons = {
                            user: currentUser,
                            message: "Eliminó todo el WCS",
                            users: currentUserId,
                        };
                        _this.apiGetComp.PostJson(_this.api.apiUrlNode1 + '/postSaveAlarmUser', respons)
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeWhile"])(function () { return _this.alive; }))
                            .subscribe(function (res) {
                            //  console.log("Envió: ", res);
                        });
                        _this.apiGetComp.GetJson(_this.api.apiUrlNode1 + '/api/deleteallposition')
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeWhile"])(function () { return _this.alive; }))
                            .subscribe(function (res) {
                        });
                        sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire('¡Se Eliminaron Exitosamente', 'success');
                    }
                });
                _this.select = false;
                _this.mostrar = false;
            }
            else {
                _this.select = true;
                _this.mostrar = true;
            }
        });
    };
    SitaMessageComponent.prototype.ChargeDataConfi = function () {
        var _this = this;
        this.http.get(this.api.apiUrlNode1 + '/api/recepcion')
            .subscribe(function (res) {
            //REPORTOCUPATION=res;
            _this.dataConfigu = res;
            REFERE = res;
            _this.dataRefe = REFERE;
            console.log("Configuration:", _this.dataConfigu);
            console.log("dataRefe:", _this.dataRefe);
        });
    };
    SitaMessageComponent.prototype.chargeData = function () {
        var _this = this;
        this.http.get(this.api.apiUrlNode1 + '/api/recepcion')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (res) {
            // tslint:disable-next-line: no-console
            // console.log('teamsData: ', res);
            _this.dataConfigu1 = res;
            _this.bandaMCharge();
        });
        // const contador = interval(40000)
        // contador.subscribe((n) => {
        //   this.http.get(this.api.apiUrlNode1 + '/api/recepcion')
        //   .pipe(takeWhile(() => this.alive))
        //   .subscribe((res: any) => {
        //     this.dataConfigu1 = res;
        //   });
        // });
    };
    SitaMessageComponent.prototype.bandaMCharge = function () {
        var _this = this;
        if (this.intervalSubscriptionM) {
            this.intervalSubscriptionM.unsubscribe();
        }
        this.intervalSubscriptionM = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(16000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () { return _this.http.get(_this.api.apiUrlNode1 + '/api/recepcion'); }))
            .subscribe(function (res) {
            _this.dataConfigu1 = res;
            // console.log('Equipos:', this.bagMessageData);
        });
    };
    SitaMessageComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    SitaMessageComponent.ɵfac = function SitaMessageComponent_Factory(t) { return new (t || SitaMessageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_2__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_security__WEBPACK_IMPORTED_MODULE_6__["NbAccessChecker"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_stores_user_store__WEBPACK_IMPORTED_MODULE_7__["UserStore"])); };
    SitaMessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SitaMessageComponent, selectors: [["ngx-sita-message"]], viewQuery: function SitaMessageComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ejDialogTX = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_4__["ToolbarService"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_4__["EditService"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_4__["PageService"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_4__["SortService"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_4__["CommandColumnService"]])], decls: 15, vars: 11, consts: [["allowSorting", "true", "allowTextWrap", "true", 3, "dataSource", "editSettings", "toolbar", "allowPaging", "pageSettings", "filterSettings", "allowFiltering", "actionBegin"], ["field", "Parameter", "headerText", "Mensaje Queue", "textAlign", "Left", "width", "70"], ["field", "Value", "headerText", "Nombre Queue Local", "textAlign", "Left", "width", "90"], ["headerText", "Editar", "width", "30", "textAlign", "center", 3, "commands"], [1, "root-container"], ["container", ""], ["id", "ejDialogTX", "allowDragging", "true", "header", "", "width", "300px", 3, "visible", "target", "showCloseIcon"], ["ejDialogTX", ""], ["content", ""], [3, "formGroup"], [1, "form-row"], [1, "form-group", "col-md-12"], [1, "e-float-input", "e-control-wrapper"], ["formControlName", "Parameter", "id", "Parameter", "name", "Parameter", "readonly", "", "type", "text", 1, "field", "left"], [1, "e-float-line"], ["for", "Parameter", 1, "e-float-text", "e-label-top"], ["formControlName", "Value", "id", "Value", "name", "Value", "type", "text"], ["for", "Value", 1, "e-float-text", "e-label-top"], ["nbButton", "", "status", "info", "hero", "", 3, "click"]], template: function SitaMessageComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Recepci\u00F3n de Notificaciones AMS ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ejs-grid", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("actionBegin", function SitaMessageComponent_Template_ejs_grid_actionBegin_4_listener($event) { return ctx.actionBegin($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "e-columns");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "e-column", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "e-column", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "e-column", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ejs-dialog", 6, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SitaMessageComponent_ng_template_13_Template, 17, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataConfigu)("editSettings", ctx.editSettings)("toolbar", ctx.toolbar)("allowPaging", true)("pageSettings", ctx.pageSettings)("filterSettings", ctx.filterOptions)("allowFiltering", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("commands", ctx.commands);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.hidden)("target", ctx.targetElement)("showCloseIcon", ctx.showCloseIcon);
        } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_4__["GridComponent"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_4__["ColumnsDirective"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_4__["AggregateColumnsDirective"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_4__["ColumnDirective"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_4__["AggregateColumnDirective"], _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_10__["DialogComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControlName"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbButtonComponent"]], encapsulation: 2 });
    SitaMessageComponent.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SitaMessageComponent, factory: SitaMessageComponent.ɵfac, providedIn: 'root' });
    return SitaMessageComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SitaMessageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-sita-message',
                templateUrl: './sita-message.component.html',
                providers: [_syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_4__["ToolbarService"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_4__["EditService"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_4__["PageService"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_4__["SortService"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_4__["CommandColumnService"]],
            }]
    }], function () { return [{ type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbToastrService"] }, { type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_2__["ApiGetService"] }, { type: _nebular_security__WEBPACK_IMPORTED_MODULE_6__["NbAccessChecker"] }, { type: _core_stores_user_store__WEBPACK_IMPORTED_MODULE_7__["UserStore"] }]; }, { ejDialogTX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['ejDialogTX']
        }], container: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['container', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/sita/sita-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/sita/sita-routing.module.ts ***!
  \***************************************************/
/*! exports provided: SitaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitaRoutingModule", function() { return SitaRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _sita_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sita.component */ "./src/app/pages/sita/sita.component.ts");
/* harmony import */ var _sita_message_sita_message_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sita-message/sita-message.component */ "./src/app/pages/sita/sita-message/sita-message.component.ts");
/* harmony import */ var _message_ams_message_ams_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message-ams/message-ams.component */ "./src/app/pages/sita/message-ams/message-ams.component.ts");
/* harmony import */ var _message_bm_message_bm_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message-bm/message-bm.component */ "./src/app/pages/sita/message-bm/message-bm.component.ts");
/* harmony import */ var _sita_message_bm_sita_message_bm_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sita-message-bm/sita-message-bm.component */ "./src/app/pages/sita/sita-message-bm/sita-message-bm.component.ts");









var routes = [{
        path: '',
        component: _sita_component__WEBPACK_IMPORTED_MODULE_2__["SitaComponent"],
        children: [
            {
                path: 'ParametrizacionAMS',
                component: _sita_message_sita_message_component__WEBPACK_IMPORTED_MODULE_3__["SitaMessageComponent"],
            },
            {
                path: 'MessageAMS',
                component: _message_ams_message_ams_component__WEBPACK_IMPORTED_MODULE_4__["MessageAMSComponent"],
            },
            {
                path: 'MessageBM',
                component: _message_bm_message_bm_component__WEBPACK_IMPORTED_MODULE_5__["MessageBMComponent"],
            },
            {
                path: 'ParametrizacionBM',
                component: _sita_message_bm_sita_message_bm_component__WEBPACK_IMPORTED_MODULE_6__["SitaMessageBMComponent"],
            },
        ],
    }];
var SitaRoutingModule = /** @class */ (function () {
    function SitaRoutingModule() {
    }
    SitaRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SitaRoutingModule });
    SitaRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SitaRoutingModule_Factory(t) { return new (t || SitaRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return SitaRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SitaRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SitaRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/sita/sita.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/sita/sita.component.ts ***!
  \**********************************************/
/*! exports provided: SitaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitaComponent", function() { return SitaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");



var SitaComponent = /** @class */ (function () {
    function SitaComponent() {
    }
    SitaComponent.prototype.ngOnInit = function () { };
    SitaComponent.ɵfac = function SitaComponent_Factory(t) { return new (t || SitaComponent)(); };
    SitaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SitaComponent, selectors: [["ngx-sita"]], decls: 1, vars: 0, template: function SitaComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
    return SitaComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SitaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "ngx-sita",
                template: "\n    <router-outlet> </router-outlet>\n  ",
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/sita/sita.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/sita/sita.module.ts ***!
  \*******************************************/
/*! exports provided: SitaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitaModule", function() { return SitaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _sita_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sita-routing.module */ "./src/app/pages/sita/sita-routing.module.ts");
/* harmony import */ var _sita_message_sita_message_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sita-message/sita-message.component */ "./src/app/pages/sita/sita-message/sita-message.component.ts");
/* harmony import */ var _sita_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sita.component */ "./src/app/pages/sita/sita.component.ts");
/* harmony import */ var _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @syncfusion/ej2-angular-grids */ "./node_modules/@syncfusion/ej2-angular-grids/__ivy_ngcc__/@syncfusion/ej2-angular-grids.es5.js");
/* harmony import */ var _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @syncfusion/ej2-angular-dropdowns */ "./node_modules/@syncfusion/ej2-angular-dropdowns/__ivy_ngcc__/@syncfusion/ej2-angular-dropdowns.es5.js");
/* harmony import */ var _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @syncfusion/ej2-angular-navigations */ "./node_modules/@syncfusion/ej2-angular-navigations/__ivy_ngcc__/@syncfusion/ej2-angular-navigations.es5.js");
/* harmony import */ var _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @syncfusion/ej2-angular-calendars */ "./node_modules/@syncfusion/ej2-angular-calendars/__ivy_ngcc__/@syncfusion/ej2-angular-calendars.es5.js");
/* harmony import */ var _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @syncfusion/ej2-angular-popups */ "./node_modules/@syncfusion/ej2-angular-popups/__ivy_ngcc__/@syncfusion/ej2-angular-popups.es5.js");
/* harmony import */ var _message_ams_message_ams_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./message-ams/message-ams.component */ "./src/app/pages/sita/message-ams/message-ams.component.ts");
/* harmony import */ var _syncfusion_ej2_angular_progressbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @syncfusion/ej2-angular-progressbar */ "./node_modules/@syncfusion/ej2-angular-progressbar/__ivy_ngcc__/@syncfusion/ej2-angular-progressbar.es5.js");
/* harmony import */ var _message_bm_message_bm_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./message-bm/message-bm.component */ "./src/app/pages/sita/message-bm/message-bm.component.ts");
/* harmony import */ var _sita_message_bm_sita_message_bm_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sita-message-bm/sita-message-bm.component */ "./src/app/pages/sita/sita-message-bm/sita-message-bm.component.ts");




















var SitaModule = /** @class */ (function () {
    function SitaModule() {
    }
    SitaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SitaModule });
    SitaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SitaModule_Factory(t) { return new (t || SitaModule)(); }, providers: [
            _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_7__["PageService"],
            _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_7__["SortService"],
            _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_7__["FilterService"],
            _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_7__["GroupService"],
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _sita_routing_module__WEBPACK_IMPORTED_MODULE_4__["SitaRoutingModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbActionsModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbInputModule"],
                // NbTabsetModule,
                // NbUserModule,
                // NbRadioModule,
                // NbSelectModule,
                // NbListModule,
                // NbIconModule,
                // NbSpinnerModule,
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDatepickerModule"],
                // NbCheckboxModule,
                // ThemeModule,
                _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_7__["GridModule"],
                _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_8__["DropDownListAllModule"],
                _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_9__["ToolbarModule"],
                _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_10__["DateTimePickerModule"],
                _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_8__["DropDownListModule"],
                _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_10__["DatePickerModule"],
                _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_11__["DialogModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _syncfusion_ej2_angular_progressbar__WEBPACK_IMPORTED_MODULE_13__["ProgressBarAllModule"],
            ]] });
    return SitaModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SitaModule, { declarations: [_sita_component__WEBPACK_IMPORTED_MODULE_6__["SitaComponent"], _sita_message_sita_message_component__WEBPACK_IMPORTED_MODULE_5__["SitaMessageComponent"], _message_ams_message_ams_component__WEBPACK_IMPORTED_MODULE_12__["MessageAMSComponent"], _message_bm_message_bm_component__WEBPACK_IMPORTED_MODULE_14__["MessageBMComponent"],
        _sita_message_bm_sita_message_bm_component__WEBPACK_IMPORTED_MODULE_15__["SitaMessageBMComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _sita_routing_module__WEBPACK_IMPORTED_MODULE_4__["SitaRoutingModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbActionsModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbInputModule"],
        // NbTabsetModule,
        // NbUserModule,
        // NbRadioModule,
        // NbSelectModule,
        // NbListModule,
        // NbIconModule,
        // NbSpinnerModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDatepickerModule"],
        // NbCheckboxModule,
        // ThemeModule,
        _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_7__["GridModule"],
        _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_8__["DropDownListAllModule"],
        _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_9__["ToolbarModule"],
        _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_10__["DateTimePickerModule"],
        _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_8__["DropDownListModule"],
        _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_10__["DatePickerModule"],
        _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_11__["DialogModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _syncfusion_ej2_angular_progressbar__WEBPACK_IMPORTED_MODULE_13__["ProgressBarAllModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SitaModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_sita_component__WEBPACK_IMPORTED_MODULE_6__["SitaComponent"], _sita_message_sita_message_component__WEBPACK_IMPORTED_MODULE_5__["SitaMessageComponent"], _message_ams_message_ams_component__WEBPACK_IMPORTED_MODULE_12__["MessageAMSComponent"], _message_bm_message_bm_component__WEBPACK_IMPORTED_MODULE_14__["MessageBMComponent"],
                    _sita_message_bm_sita_message_bm_component__WEBPACK_IMPORTED_MODULE_15__["SitaMessageBMComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _sita_routing_module__WEBPACK_IMPORTED_MODULE_4__["SitaRoutingModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbActionsModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbInputModule"],
                    // NbTabsetModule,
                    // NbUserModule,
                    // NbRadioModule,
                    // NbSelectModule,
                    // NbListModule,
                    // NbIconModule,
                    // NbSpinnerModule,
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDatepickerModule"],
                    // NbCheckboxModule,
                    // ThemeModule,
                    _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_7__["GridModule"],
                    _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_8__["DropDownListAllModule"],
                    _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_9__["ToolbarModule"],
                    _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_10__["DateTimePickerModule"],
                    _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_8__["DropDownListModule"],
                    _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_10__["DatePickerModule"],
                    _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_11__["DialogModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _syncfusion_ej2_angular_progressbar__WEBPACK_IMPORTED_MODULE_13__["ProgressBarAllModule"],
                ],
                providers: [
                    _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_7__["PageService"],
                    _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_7__["SortService"],
                    _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_7__["FilterService"],
                    _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_7__["GroupService"],
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=sita-sita-module.js.map