(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sic-syncro-sic-syncro-module"],{

/***/ "./src/app/pages/sic-syncro/sic-syncro-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/sic-syncro/sic-syncro-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: SicSyncroRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SicSyncroRoutingModule", function() { return SicSyncroRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _sic_syncro_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sic-syncro.component */ "./src/app/pages/sic-syncro/sic-syncro.component.ts");
/* harmony import */ var _sic_sic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sic/sic.component */ "./src/app/pages/sic-syncro/sic/sic.component.ts");
/* harmony import */ var _syncro_syncro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./syncro/syncro.component */ "./src/app/pages/sic-syncro/syncro/syncro.component.ts");







var routes = [{
        path: '',
        component: _sic_syncro_component__WEBPACK_IMPORTED_MODULE_2__["SicSyncroComponent"],
        children: [
            {
                path: 'Sic',
                component: _sic_sic_component__WEBPACK_IMPORTED_MODULE_3__["SicComponent"],
            },
            {
                path: 'syncro',
                component: _syncro_syncro_component__WEBPACK_IMPORTED_MODULE_4__["SyncroComponent"],
            },
        ],
    }];
var SicSyncroRoutingModule = /** @class */ (function () {
    function SicSyncroRoutingModule() {
    }
    SicSyncroRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: SicSyncroRoutingModule });
    SicSyncroRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function SicSyncroRoutingModule_Factory(t) { return new (t || SicSyncroRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return SicSyncroRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](SicSyncroRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SicSyncroRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/sic-syncro/sic-syncro.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/sic-syncro/sic-syncro.component.ts ***!
  \**********************************************************/
/*! exports provided: SicSyncroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SicSyncroComponent", function() { return SicSyncroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");



var SicSyncroComponent = /** @class */ (function () {
    function SicSyncroComponent() {
    }
    SicSyncroComponent.prototype.ngOnInit = function () {
    };
    SicSyncroComponent.??fac = function SicSyncroComponent_Factory(t) { return new (t || SicSyncroComponent)(); };
    SicSyncroComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: SicSyncroComponent, selectors: [["ngx-sic-syncro"]], decls: 1, vars: 0, template: function SicSyncroComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
    return SicSyncroComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SicSyncroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-sic-syncro',
                template: "<router-outlet></router-outlet>",
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/sic-syncro/sic-syncro.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/sic-syncro/sic-syncro.module.ts ***!
  \*******************************************************/
/*! exports provided: SicSyncroModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SicSyncroModule", function() { return SicSyncroModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");
/* harmony import */ var _sic_syncro_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sic-syncro-routing.module */ "./src/app/pages/sic-syncro/sic-syncro-routing.module.ts");
/* harmony import */ var _sic_sic_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sic/sic.component */ "./src/app/pages/sic-syncro/sic/sic.component.ts");
/* harmony import */ var _syncro_syncro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./syncro/syncro.component */ "./src/app/pages/sic-syncro/syncro/syncro.component.ts");
/* harmony import */ var _sic_syncro_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sic-syncro.component */ "./src/app/pages/sic-syncro/sic-syncro.component.ts");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/__ivy_ngcc__/fesm2015/ng2-smart-table.js");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");










var SicSyncroModule = /** @class */ (function () {
    function SicSyncroModule() {
    }
    SicSyncroModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: SicSyncroModule });
    SicSyncroModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function SicSyncroModule_Factory(t) { return new (t || SicSyncroModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _sic_syncro_routing_module__WEBPACK_IMPORTED_MODULE_3__["SicSyncroRoutingModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__["Ng2SmartTableModule"],
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_8__["ThemeModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbUserModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbTabsetModule"],
            ]] });
    return SicSyncroModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](SicSyncroModule, { declarations: [_sic_sic_component__WEBPACK_IMPORTED_MODULE_4__["SicComponent"], _syncro_syncro_component__WEBPACK_IMPORTED_MODULE_5__["SyncroComponent"], _sic_syncro_component__WEBPACK_IMPORTED_MODULE_6__["SicSyncroComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _sic_syncro_routing_module__WEBPACK_IMPORTED_MODULE_3__["SicSyncroRoutingModule"],
        ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__["Ng2SmartTableModule"],
        _theme_theme_module__WEBPACK_IMPORTED_MODULE_8__["ThemeModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbUserModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbTabsetModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SicSyncroModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_sic_sic_component__WEBPACK_IMPORTED_MODULE_4__["SicComponent"], _syncro_syncro_component__WEBPACK_IMPORTED_MODULE_5__["SyncroComponent"], _sic_syncro_component__WEBPACK_IMPORTED_MODULE_6__["SicSyncroComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _sic_syncro_routing_module__WEBPACK_IMPORTED_MODULE_3__["SicSyncroRoutingModule"],
                    ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__["Ng2SmartTableModule"],
                    _theme_theme_module__WEBPACK_IMPORTED_MODULE_8__["ThemeModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbUserModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbTabsetModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/sic-syncro/sic/sic.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/sic-syncro/sic/sic.component.ts ***!
  \*******************************************************/
/*! exports provided: SicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SicComponent", function() { return SicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/__ivy_ngcc__/fesm2015/ng2-smart-table.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");
/* harmony import */ var _nebular_security__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nebular/security */ "./node_modules/@nebular/security/__ivy_ngcc__/fesm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");


















function SicComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SicComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r2); var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r1.eliminaTodos(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Eliminar Todo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx_r0.select);
} }
var SicComponent = /** @class */ (function () {
    function SicComponent(accessChecker, apiGetComp, http, toastrService, api) {
        var _this = this;
        this.accessChecker = accessChecker;
        this.apiGetComp = apiGetComp;
        this.http = http;
        this.toastrService = toastrService;
        this.api = api;
        this.select = false;
        this.alive = true;
        /** Table de infromaci??n Sic */
        this.settings5 = {
            actions: {
                add: false,
                edit: false,
            },
            delete: {
                deleteButtonContent: '<i class="nb-trash"></i>',
                confirmDelete: true,
            },
            columns: {
                id: {
                    title: 'ID',
                    type: 'number',
                    filter: false,
                    hide: true,
                },
                listaCorteSIC: {
                    title: 'ListaCorte',
                    type: 'string',
                    filter: false,
                },
                listaCorrtrim: {
                    title: 'ListaTrim',
                    type: 'number',
                    filter: false,
                },
                orden: {
                    title: 'Orden',
                    type: 'number',
                    filter: false,
                },
                pedido: {
                    title: 'Pedido',
                    type: 'number',
                    filter: false,
                },
                tarjeta: {
                    title: 'Tarjeta',
                    type: 'string',
                    filter: false,
                },
                longitudOrden_Planeado: {
                    title: 'LogitudOrden',
                    type: 'number',
                    filter: false,
                },
                numeroCortes: {
                    title: 'NumeroCorte',
                    type: 'number',
                    filter: false,
                },
                largoLamina_Planeado: {
                    title: 'LargoLamina',
                    type: 'number',
                    filter: false,
                },
                anchoLamina_Planeado: {
                    title: 'AnchoLamina',
                    type: 'number',
                    filter: false,
                },
                espesorLamina_Planeado: {
                    title: 'EspesorLamina',
                    type: 'number',
                    filter: false,
                },
                origen: {
                    title: 'Origen',
                    type: 'string',
                    filter: false,
                },
                destino: {
                    title: 'Destino',
                    type: 'string',
                    filter: false,
                },
                hojasParaHacer_Planeado: {
                    title: 'HojasParaHacer',
                    type: 'number',
                    filter: false,
                },
                estado: {
                    title: 'Estado',
                    type: 'string',
                    filter: false,
                },
            },
        };
        this.source5 = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__["LocalDataSource"]();
        this.ChargeReportSic();
        this.accessChecker.isGranted('edit', 'ordertable')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (res) {
            if (res) {
                _this.select = false;
                _this.mostrar = false;
            }
            else {
                _this.select = true;
                _this.mostrar = true;
            }
        });
    }
    SicComponent.prototype.ngOnInit = function () {
    };
    SicComponent.prototype.ChargeReportSic = function () {
        var _this = this;
        this.apiGetComp.GetJson(this.api.apiUrlMatbox + '/Orders/GetOrderSic')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (res) {
            //REPORTOCUPATION=res;
            // console.log("Report Ocupacion:", res);
            _this.ReportSic = res;
            _this.source5.load(res);
        });
        var contador = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(60000);
        contador.subscribe(function (n) {
            _this.apiGetComp.GetJson(_this.api.apiUrlMatbox + '/Orders/GetOrderSic')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeWhile"])(function () { return _this.alive; }))
                .subscribe(function (res) {
                //REPORTOCUPATION=res;
                _this.ReportSic = res;
                _this.source5.load(res);
            });
        });
    };
    SicComponent.prototype.onDeleteConfirm = function (event) {
        var _this = this;
        this.accessChecker.isGranted('edit', 'ordertable')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (res) {
            if (res) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                    title: 'Desea eliminar?',
                    text: "\u00A1Eliminar\u00E1 un campo en Sic!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: '??S??, Eliminar!'
                }).then(function (result) {
                    if (result.value) {
                        _this.apiGetComp.PostJson(_this.api.apiUrlMatbox + "/Orders/DeleteOrderSic?id=" + event.data.id, event.data.id)
                            // .pipe()
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeWhile"])(function () { return _this.alive; }))
                            .subscribe(function (res) {
                        });
                        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('??Se Elimin?? Exitosamente', 'success');
                        event.confirm.resolve();
                        _this.source5.refresh();
                    }
                });
                _this.source5.refresh();
                _this.select = false;
                _this.mostrar = false;
            }
            else {
                _this.select = true;
                _this.mostrar = true;
            }
        });
        //   let sicDate = {id: event.data.id};
        //   if (confirm('Are you sure wants to delete item?') && event.data.id) {
        //     this.apiGetComp.PostJson(this.api.apiUrlMatbox + "/Orders/DeleteOrderSic?id="+event.data.id,event.data.id)
        // // .pipe()
        //       .pipe(takeWhile(() => this.alive))
        //       .subscribe((res:any) => {
        //         if (res) {
        //           this.toastrService.success('', 'Item deleted!');
        //           this.source.refresh(); 
        //         } else {
        //           this.toastrService.danger('', 'Algo salio mal.');
        //         }
        //       });
        //   }
    };
    SicComponent.prototype.eliminaTodos = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: 'Desea eliminar?',
            text: "\u00A1Eliminar\u00E1 toda la tabla Sic!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '??S??, Eliminar!'
        }).then(function (result) {
            if (result.value) {
                _this.apiGetComp.PostJson(_this.api.apiUrlMatbox + '/Orders/DeleteOrderSicAll', "")
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeWhile"])(function () { return _this.alive; }))
                    .subscribe(function (res) {
                });
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('??Se Elimin?? Exitosamente', 'success');
                _this.select = true;
            }
        });
    };
    SicComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    SicComponent.??fac = function SicComponent_Factory(t) { return new (t || SicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_nebular_security__WEBPACK_IMPORTED_MODULE_9__["NbAccessChecker"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_4__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"])); };
    SicComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: SicComponent, selectors: [["ngx-sic"]], decls: 7, vars: 3, consts: [[1, "example-smart-table", 3, "settings", "source", "deleteConfirm"], ["type", "submit", "class", "btn btn-primary", 3, "disabled", "click", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled", "click"]], template: function SicComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " Informaci\u00F3n de Sic ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "ng2-smart-table", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("deleteConfirm", function SicComponent_Template_ng2_smart_table_deleteConfirm_4_listener($event) { return ctx.onDeleteConfirm($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "nb-card-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, SicComponent_button_6_Template, 2, 1, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("settings", ctx.settings5)("source", ctx.ReportSic);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.mostrar);
        } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__["Ng2SmartTableComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardFooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpYy1zeW5jcm8vc2ljL3NpYy5jb21wb25lbnQuc2NzcyJ9 */"] });
    return SicComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SicComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-sic',
                templateUrl: './sic.component.html',
                styleUrls: ['./sic.component.scss']
            }]
    }], function () { return [{ type: _nebular_security__WEBPACK_IMPORTED_MODULE_9__["NbAccessChecker"] }, { type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_4__["ApiGetService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbToastrService"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/sic-syncro/syncro/syncro.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/sic-syncro/syncro/syncro.component.ts ***!
  \*************************************************************/
/*! exports provided: SyncroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyncroComponent", function() { return SyncroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/__ivy_ngcc__/fesm2015/ng2-smart-table.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _nebular_security__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/security */ "./node_modules/@nebular/security/__ivy_ngcc__/fesm5/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");


















function SyncroComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SyncroComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r2); var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r1.eliminarTodos(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Eliminar todo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx_r0.select);
} }
var SyncroComponent = /** @class */ (function () {
    function SyncroComponent(accessChecker, toastrService, apiGetComp, http, api) {
        var _this = this;
        this.accessChecker = accessChecker;
        this.toastrService = toastrService;
        this.apiGetComp = apiGetComp;
        this.http = http;
        this.api = api;
        this.select = false;
        this.alive = true;
        /** Table de informaci??n Syncro */
        this.settings6 = {
            actions: {
                add: false,
                edit: false,
            },
            delete: {
                deleteButtonContent: '<i class="nb-trash"></i>',
                confirmDelete: true,
            },
            columns: {
                id: {
                    title: 'ID',
                    type: 'number',
                    filter: false,
                    hide: true,
                },
                position: {
                    title: 'Posici??n',
                    type: 'string',
                    filter: false,
                },
                setupID: {
                    title: 'Configuraci??nId',
                    type: 'string',
                    filter: false,
                },
                modID: {
                    title: 'ModId',
                    type: 'string',
                    filter: false,
                },
                webWidth: {
                    title: 'AnchoWeb',
                    type: 'string',
                    filter: false,
                },
                trimType: {
                    title: 'Tipoajuste',
                    type: 'string',
                    filter: false,
                },
                valid: {
                    title: 'V??lido',
                    type: 'string',
                    filter: false,
                },
                scoreGap: {
                    title: 'PuntajeBrecha',
                    type: 'string',
                    filter: false,
                },
                qualityID: {
                    title: 'IDcalidad',
                    type: 'string',
                    filter: false,
                },
                trim: {
                    title: 'Prueba',
                    type: 'string',
                    filter: false,
                },
                slitsTandem: {
                    title: 'RanurasT??ndem',
                    type: 'string',
                    filter: false,
                },
                scoresTandem: {
                    title: 'PuntajesT??ndem',
                    type: 'string',
                    filter: false,
                },
                shaftMask: {
                    title: 'EjeMascara',
                    type: 'string',
                    filter: false,
                },
                constantSystem: {
                    title: 'SistemaConstante',
                    type: 'string',
                    filter: false,
                },
                knifeOnly: {
                    title: 'knifeOnly',
                    type: 'string',
                    filter: false,
                },
                noChange_STK_0: {
                    title: 'SinCambiosSTK0',
                    type: 'string',
                    filter: false,
                },
                noChange_STK_1: {
                    title: 'SinCambiosSTK1',
                    type: 'string',
                    filter: false,
                },
                noChange_STK_2: {
                    title: 'SinCambiosSTK2',
                    type: 'string',
                    filter: false,
                },
                cutToMark0: {
                    title: 'CortarMarca0',
                    type: 'string',
                    filter: false,
                },
                cutToMark1: {
                    title: 'CortarMarca1',
                    type: 'string',
                    filter: false,
                },
                cutToMark2: {
                    title: 'CortarMarca2',
                    type: 'string',
                    filter: false,
                },
                orderNumber0: {
                    title: 'NumeroOrden0',
                    type: 'string',
                    filter: false,
                },
                delivery0: {
                    title: 'entrega0',
                    type: 'string',
                    filter: false,
                },
                customerName0: {
                    title: 'NombreCliente0',
                    type: 'string',
                    filter: false,
                },
                sheetWidth0: {
                    title: 'AnchoHoja0',
                    type: 'string',
                    filter: false,
                },
                outs0: {
                    title: 'Salidas0',
                    type: 'string',
                    filter: false,
                },
                scoreMeasures0: {
                    title: 'Medidaspuntuaci??n0',
                    type: 'string',
                    filter: false,
                },
                scoreType0: {
                    title: 'TipoPuntaje0',
                    type: 'string',
                    filter: false,
                },
                positType0: {
                    title: 'PostularTipo0',
                    type: 'string',
                    filter: false,
                },
                teleTwinOffset0: {
                    title: 'TeleTwinDesplazamiento0',
                    type: 'string',
                    filter: false,
                },
                scoreGap0: {
                    title: 'Puntuaci??nGap0',
                    type: 'string',
                    filter: false,
                },
                levelName0: {
                    title: 'NivelNombre0',
                    type: 'string',
                    filter: false,
                },
                sheetLength0: {
                    title: 'Longitudhoja0',
                    type: 'string',
                    filter: false,
                },
                segmentSheetCount0: {
                    title: 'RecuentoHojasSegmento0',
                    type: 'string',
                    filter: false,
                },
                sheetsPerStack0: {
                    title: 'HojasporPila0',
                    type: 'string',
                    filter: false,
                },
                stacksPerPallet0: {
                    title: 'PilasPorPal??0',
                    type: 'string',
                    filter: false,
                },
                sending0: {
                    title: 'Enviando0',
                    type: 'string',
                    filter: false,
                },
                orderNumber1: {
                    title: 'NumeroOrden1',
                    type: 'string',
                    filter: false,
                },
                delivery1: {
                    title: 'entrega1',
                    type: 'string',
                    filter: false,
                },
                customerName1: {
                    title: 'NombreCliente1',
                    type: 'string',
                    filter: false,
                },
                sheetWidth1: {
                    title: 'AnchoHoja1',
                    type: 'string',
                    filter: false,
                },
                outs1: {
                    title: 'Salidas1',
                    type: 'string',
                    filter: false,
                },
                scoreMeasures1: {
                    title: 'Medidaspuntuaci??n1',
                    type: 'string',
                    filter: false,
                },
                scoreType1: {
                    title: 'TipoPuntaje1',
                    type: 'string',
                    filter: false,
                },
                positType1: {
                    title: 'PostularTipo1',
                    type: 'string',
                    filter: false,
                },
                teleTwinOffset1: {
                    title: 'TeleTwinDesplazamiento1',
                    type: 'string',
                    filter: false,
                },
                scoreGap1: {
                    title: 'Puntuaci??nGap1',
                    type: 'string',
                    filter: false,
                },
                levelName1: {
                    title: 'NivelNombre1',
                    type: 'string',
                    filter: false,
                },
                sheetLength1: {
                    title: 'Longitudhoja1',
                    type: 'string',
                    filter: false,
                },
                segmentSheetCount1: {
                    title: 'RecuentoHojasSegmento1',
                    type: 'string',
                    filter: false,
                },
                sheetsPerStack1: {
                    title: 'HojasporPila1',
                    type: 'string',
                    filter: false,
                },
                stacksPerPallet1: {
                    title: 'PilasPorPal??1',
                    type: 'string',
                    filter: false,
                },
                sending1: {
                    title: 'Enviando1',
                    type: 'string',
                    filter: false,
                },
                orderNumber2: {
                    title: 'NumeroOrden2',
                    type: 'string',
                    filter: false,
                },
                delivery2: {
                    title: 'entrega2',
                    type: 'string',
                    filter: false,
                },
                customerName2: {
                    title: 'NombreCliente2',
                    type: 'string',
                    filter: false,
                },
                sheetWidth2: {
                    title: 'AnchoHoja2',
                    type: 'string',
                    filter: false,
                },
                outs2: {
                    title: 'Salidas2',
                    type: 'string',
                    filter: false,
                },
                scoreMeasures2: {
                    title: 'Medidaspuntuaci??n2',
                    type: 'string',
                    filter: false,
                },
                scoreType2: {
                    title: 'TipoPuntaje2',
                    type: 'string',
                    filter: false,
                },
                positType2: {
                    title: 'PostularTipo2',
                    type: 'string',
                    filter: false,
                },
                teleTwinOffset2: {
                    title: 'TeleTwinDesplazamiento2',
                    type: 'string',
                    filter: false,
                },
                scoreGap2: {
                    title: 'Puntuaci??nGap2',
                    type: 'string',
                    filter: false,
                },
                levelName2: {
                    title: 'NivelNombre2',
                    type: 'string',
                    filter: false,
                },
                sheetLength2: {
                    title: 'Longitudhoja2',
                    type: 'string',
                    filter: false,
                },
                segmentSheetCount2: {
                    title: 'RecuentoHojasSegmento2',
                    type: 'string',
                    filter: false,
                },
                sheetsPerStack2: {
                    title: 'HojasporPila2',
                    type: 'string',
                    filter: false,
                },
                stacksPerPallet2: {
                    title: 'PilasPorPal??2',
                    type: 'string',
                    filter: false,
                },
                sending2: {
                    title: 'Enviando2',
                    type: 'string',
                    filter: false,
                },
                // plungedSlitMask: {
                //   title: 'M??scaraHendidura',
                //   type: 'string',
                //   filter: false,
                // },
                // sepSlitMask: {
                //   title: 'M??scaraSepHendidura',
                //   type: 'string',
                //   filter: false,
                // },
                // slitPosition: {
                //   title: 'Posici??nHendidura',
                //   type: 'string',
                //   filter: false,
                // },
                // startScorer: {
                //   title: 'AnotadorInicio',
                //   type: 'string',
                //   filter: false,
                // },
                // scoreCount: {
                //   title: 'CuentaPuntuaci??n',
                //   type: 'string',
                //   filter: false,
                // },
                // supportScore: {
                //   title: 'PuntajeApoyo',
                //   type: 'string',
                //   filter: false,
                // },
                // scorePosition: {
                //   title: 'Posici??nPuntuaci??n',
                //   type: 'string',
                //   filter: false,
                // },
                // _x0032_LevelWebDirMask: {
                //   title: 'M??scaraDirecci??nWebx0032',
                //   type: 'string',
                //   filter: false,
                // },
                // _x0033_LevelWebDirMask: {
                //   title: 'M??scaraDirecci??nWebx0033',
                //   type: 'string',
                //   filter: false,
                // },
                // rcsSectorMask: {
                //   title: 'rcsSectorMask',
                //   type: 'string',
                //   filter: false,
                // },
                // tearTapePosition: {
                //   title: 'tearTapePosition',
                //   type: 'string',
                //   filter: false,
                // },
                // tearTapeCount: {
                //   title: 'tearTapeCount',
                //   type: 'string',
                //   filter: false,
                // },
                // cutToPattern0: {
                //   title: 'cutToPattern0',
                //   type: 'string',
                //   filter: false,
                // },
                // dataToPrint0_1: {
                //   title: 'dataToPrint0_1',
                //   type: 'string',
                //   filter: false,
                // },
                // dataToPrint0_2: {
                //   title: 'dataToPrint0_2',
                //   type: 'string',
                //   filter: false,
                // },
                // dataToPrint0_3: {
                //   title: 'dataToPrint0_3',
                //   type: 'string',
                //   filter: false,
                // },
                // dataToPrint0_4: {
                //   title: 'dataToPrint0_4',
                //   type: 'string',
                //   filter: false,
                // },
                // stackerContStack0: {
                //   title: 'stackerContStack0',
                //   type: 'string',
                //   filter: false,
                // },
                // stackerPallet0: {
                //   title: 'stackerPallet0',
                //   type: 'string',
                //   filter: false,
                // },
                // stackerNote0: {
                //   title: 'stackerNote0',
                //   type: 'string',
                //   filter: false,
                // },
                // custAddress0: {
                //   title: 'custAddress0',
                //   type: 'string',
                //   filter: false,
                // },
                // mthCode0: {
                //   title: 'mthCode0',
                //   type: 'string',
                //   filter: false,
                // },
                // mthNextMachine0: {
                //   title: 'mthNextMachine0',
                //   type: 'string',
                //   filter: false,
                // },
                // numberOfPalletLayout0: {
                //   title: 'numberOfPalletLayout0',
                //   type: 'string',
                //   filter: false,
                // },
                // amountOfPalletCopy0: {
                //   title: 'amountOfPalletCopy0',
                //   type: 'string',
                //   filter: false,
                // },
                // numberOfPastOrderLayout0: {
                //   title: 'numberOfPastOrderLayout0',
                //   type: 'string',
                //   filter: false,
                // },
                // amountOfPastOrderCopy0: {
                //   title: 'amountOfPastOrderCopy0',
                //   type: 'string',
                //   filter: false,
                // },
                // prePrint0: {
                //   title: 'prePrint0',
                //   type: 'string',
                //   filter: false,
                // },
                // dischargeSide0: {
                //   title: 'dischargeSide0',
                //   type: 'string',
                //   filter: false,
                // },
                // balance0: {
                //   title: 'balance0',
                //   type: 'string',
                //   filter: false,
                // },
                // stackOrBundle0: {
                //   title: 'stackOrBundle0',
                //   type: 'string',
                //   filter: false,
                // },
                // cutToPattern1: {
                //   title: 'cutToPattern1',
                //   type: 'string',
                //   filter: false,
                // },
                // dataToPrint1_1: {
                //   title: 'dataToPrint1_1',
                //   type: 'string',
                //   filter: false,
                // },
                // dataToPrint1_2: {
                //   title: 'dataToPrint1_2',
                //   type: 'string',
                //   filter: false,
                // },
                // dataToPrint1_3: {
                //   title: 'dataToPrint1_3',
                //   type: 'string',
                //   filter: false,
                // },
                // dataToPrint1_4: {
                //   title: 'dataToPrint1_4',
                //   type: 'string',
                //   filter: false,
                // },
                // stackerContStack1: {
                //   title: 'stackerContStack1',
                //   type: 'string',
                //   filter: false,
                // },
                // stackerPallet1: {
                //   title: 'stackerPallet1',
                //   type: 'string',
                //   filter: false,
                // },
                // stackerNote1: {
                //   title: 'stackerNote1',
                //   type: 'string',
                //   filter: false,
                // },
                // custAddress1: {
                //   title: 'custAddress1',
                //   type: 'string',
                //   filter: false,
                // },
                // mthCode1: {
                //   title: 'mthCode1',
                //   type: 'string',
                //   filter: false,
                // },
                // mthNextMachine1: {
                //   title: 'mthNextMachine1',
                //   type: 'string',
                //   filter: false,
                // },
                // numberOfPalletLayout1: {
                //   title: 'numberOfPalletLayout1',
                //   type: 'string',
                //   filter: false,
                // },
                // amountOfPalletCopy1: {
                //   title: 'amountOfPalletCopy1',
                //   type: 'string',
                //   filter: false,
                // },
                // numberOfPastOrderLayout1: {
                //   title: 'numberOfPastOrderLayout1',
                //   type: 'string',
                //   filter: false,
                // },
                // amountOfPastOrderCopy1: {
                //   title: 'amountOfPastOrderCopy1',
                //   type: 'string',
                //   filter: false,
                // },
                // prePrint1: {
                //   title: 'prePrint1',
                //   type: 'string',
                //   filter: false,
                // },
                // dischargeSide1: {
                //   title: 'dischargeSide1',
                //   type: 'string',
                //   filter: false,
                // },
                // balance1: {
                //   title: 'balance1',
                //   type: 'string',
                //   filter: false,
                // },
                // stackOrBundle1: {
                //   title: 'stackOrBundle1',
                //   type: 'string',
                //   filter: false,
                // },
                // cutToPattern2: {
                //   title: 'cutToPattern2',
                //   type: 'string',
                //   filter: false,
                // },
                // dataToPrint2_1: {
                //   title: 'dataToPrint2_1',
                //   type: 'string',
                //   filter: false,
                // },
                // dataToPrint2_2: {
                //   title: 'dataToPrint2_2',
                //   type: 'string',
                //   filter: false,
                // },
                // dataToPrint2_3: {
                //   title: 'dataToPrint2_3',
                //   type: 'string',
                //   filter: false,
                // },
                // dataToPrint2_4: {
                //   title: 'dataToPrint2_4',
                //   type: 'string',
                //   filter: false,
                // },
                // stackerContStack2: {
                //   title: 'stackerContStack2',
                //   type: 'string',
                //   filter: false,
                // },
                // stackerPallet2: {
                //   title: 'stackerPallet2',
                //   type: 'string',
                //   filter: false,
                // },
                // stackerNote2: {
                //   title: 'stackerNote2',
                //   type: 'string',
                //   filter: false,
                // },
                // custAddress2: {
                //   title: 'custAddress2',
                //   type: 'string',
                //   filter: false,
                // },
                // mthCode2: {
                //   title: 'mthCode2',
                //   type: 'string',
                //   filter: false,
                // },
                // mthNextMachine2: {
                //   title: 'mthNextMachine2',
                //   type: 'string',
                //   filter: false,
                // },
                // numberOfPalletLayout2: {
                //   title: 'numberOfPalletLayout2',
                //   type: 'string',
                //   filter: false,
                // },
                // amountOfPalletCopy2: {
                //   title: 'amountOfPalletCopy2',
                //   type: 'string',
                //   filter: false,
                // },
                // numberOfPastOrderLayout2: {
                //   title: 'numberOfPastOrderLayout2',
                //   type: 'string',
                //   filter: false,
                // },
                // amountOfPastOrderCopy2: {
                //   title: 'amountOfPastOrderCopy2',
                //   type: 'string',
                //   filter: false,
                // },
                // prePrint2: {
                //   title: 'prePrint2',
                //   type: 'string',
                //   filter: false,
                // },
                // dischargeSide2: {
                //   title: 'dischargeSide2',
                //   type: 'string',
                //   filter: false,
                // },
                // balance2: {
                //   title: 'balance2',
                //   type: 'string',
                //   filter: false,
                // },
                // stackOrBundle2: {
                //   title: 'stackOrBundle2',
                //   type: 'string',
                //   filter: false,
                // },
                officeID: {
                    title: 'officeID',
                    type: 'string',
                    filter: false,
                },
            },
        };
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["LocalDataSource"]();
        this.ChargeReportSyncro();
        this.alive;
        this.accessChecker.isGranted('edit', 'ordertable')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (res) {
            if (res) {
                _this.select = false;
                _this.mostrar = false;
            }
            else {
                _this.select = true;
                _this.mostrar = true;
            }
        });
    }
    SyncroComponent.prototype.ngOnInit = function () {
    };
    SyncroComponent.prototype.ChargeReportSyncro = function () {
        var _this = this;
        this.apiGetComp.GetJson(this.api.apiUrlMatbox + '/Orders/GetOrderSyncro')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (res) {
            //REPORTOCUPATION=res;
            // console.log("Report Ocupacion:", res);
            _this.ReportSic = res;
            if (res == null) {
                return null;
            }
            _this.source.load(res);
        });
        var contador = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(60000);
        contador.subscribe(function (n) {
            _this.apiGetComp.GetJson(_this.api.apiUrlMatbox + '/Orders/GetOrderSyncro')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }))
                .subscribe(function (res) {
                //REPORTOCUPATION=res;
                _this.ReportSic = res;
                if (res == null) {
                    console.log("No hay data", res);
                    return null;
                }
                _this.source.load(res);
            });
        });
    };
    SyncroComponent.prototype.onDeleteConfirm = function (event) {
        var _this = this;
        this.accessChecker.isGranted('edit', 'ordertable')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (res) {
            if (res) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                    title: 'Desea eliminar?',
                    text: "\u00A1Eliminar\u00E1 un campo en Syncro!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: '??S??, Eliminar!'
                }).then(function (result) {
                    if (result.value) {
                        _this.apiGetComp.PostJson(_this.api.apiUrlMatbox + "/Orders/DeleteOrderSyncro?id=" + event.data.id, event.data.id)
                            // .pipe()
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }))
                            .subscribe(function (res) {
                            // if (res) {
                            //   this.toastrService.success('', 'Item deleted!');
                            //   this.source5.refresh(); 
                            // } else {
                            //   this.toastrService.danger('', 'Algo salio mal.');
                            // }
                        });
                        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('??Se Elimin?? Exitosamente', 'success');
                        event.confirm.resolve();
                        _this.source.refresh();
                    }
                });
                _this.source.refresh();
                _this.select = false;
                _this.mostrar = false;
            }
            else {
                _this.select = true;
                _this.mostrar = true;
            }
        });
    };
    SyncroComponent.prototype.eliminarTodos = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: 'Desea eliminar?',
            text: "\u00A1Eliminar\u00E1 toda la tabla Syncro!",
            icon: 'warning',
            showCancelButton: true,
            timer: 3000,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '??S??, Eliminar!'
        }).then(function (result) {
            if (result.value) {
                _this.apiGetComp.PostJson(_this.api.apiUrlMatbox + '/Orders/DeleteOrderSyncroAll', "")
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.alive; }))
                    .subscribe(function (res) {
                    if (res == null) {
                        return null;
                    }
                });
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('??Se Elimin?? Exitosamente', 'success');
                _this.select = true;
            }
        });
    };
    SyncroComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    SyncroComponent.??fac = function SyncroComponent_Factory(t) { return new (t || SyncroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_nebular_security__WEBPACK_IMPORTED_MODULE_7__["NbAccessChecker"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"])); };
    SyncroComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: SyncroComponent, selectors: [["ngx-syncro"]], decls: 7, vars: 3, consts: [[1, "example-smart-table", 3, "settings", "source", "deleteConfirm"], ["type", "submit", "class", "btn btn-primary", 3, "disabled", "click", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled", "click"]], template: function SyncroComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " Informaci\u00F3n de Syncro ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "ng2-smart-table", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("deleteConfirm", function SyncroComponent_Template_ng2_smart_table_deleteConfirm_4_listener($event) { return ctx.onDeleteConfirm($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "nb-card-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, SyncroComponent_button_6_Template, 2, 1, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("settings", ctx.settings6)("source", ctx.source);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.mostrar);
        } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["Ng2SmartTableComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardFooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpYy1zeW5jcm8vc3luY3JvL3N5bmNyby5jb21wb25lbnQuc2NzcyJ9 */"] });
    return SyncroComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SyncroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-syncro',
                templateUrl: './syncro.component.html',
                styleUrls: ['./syncro.component.scss']
            }]
    }], function () { return [{ type: _nebular_security__WEBPACK_IMPORTED_MODULE_7__["NbAccessChecker"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrService"] }, { type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=sic-syncro-sic-syncro-module.js.map