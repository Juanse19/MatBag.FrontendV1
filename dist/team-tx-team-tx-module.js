(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["team-tx-team-tx-module"],{

/***/ "./src/app/pages/zone-teams/team-tx/team-tx-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-tx/team-tx-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: TeamTXRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamTXRoutingModule", function() { return TeamTXRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _team_tx_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./team-tx.component */ "./src/app/pages/zone-teams/team-tx/team-tx.component.ts");





var routes = [
    {
        path: '',
        component: _team_tx_component__WEBPACK_IMPORTED_MODULE_2__["TeamTXComponent"],
        children: [
        // {
        //   path: 'sfc',
        //   component: SfcComponent,
        // },
        ]
    }
];
var TeamTXRoutingModule = /** @class */ (function () {
    function TeamTXRoutingModule() {
    }
    TeamTXRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TeamTXRoutingModule });
    TeamTXRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TeamTXRoutingModule_Factory(t) { return new (t || TeamTXRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return TeamTXRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TeamTXRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamTXRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/zone-teams/team-tx/team-tx.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-tx/team-tx.component.ts ***!
  \***************************************************************/
/*! exports provided: TeamTXComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamTXComponent", function() { return TeamTXComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");









var TeamTXComponent = /** @class */ (function () {
    function TeamTXComponent(http, router, api) {
        this.http = http;
        this.router = router;
        this.api = api;
        this.alive = true;
    }
    TeamTXComponent.prototype.ngOnInit = function () { };
    TeamTXComponent.prototype.back = function () {
        this.router.navigate(["/pages/conveyor/energyZone"]);
        return false;
    };
    TeamTXComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    TeamTXComponent.ɵfac = function TeamTXComponent_Factory(t) { return new (t || TeamTXComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"])); };
    TeamTXComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeamTXComponent, selectors: [["ngx-teamAL"]], decls: 14, vars: 0, consts: [[1, "navigation"], ["href", "#", "aria-label", "Back", 1, "link", "back-link", 3, "click"], ["icon", "arrow-back"], [1, "h"], [1, "contenedor"], ["src", "./assets/img/construction.gif", "width", "100%", "height", "80%", 1, "align-self-center", 2, "margin-top", "-140px", "margin-left", "128px"], [1, "centrado"], ["size", "4"]], template: function TeamTXComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamTXComponent_Template_a_click_4_listener() { return ctx.back(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nb-icon", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "TRANSFER LINE");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "font", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Sitio en Construcci\u00F3n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardBodyComponent"]], styles: [".contenedor[_ngcontent-%COMP%] {\n            position: relative;\n            display: inline-block;\n            text-align: center;\n          }\n\n          .centrado[_ngcontent-%COMP%] {\n            position: absolute;\n            font-size: 10px;\n            font-family: cursive;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n          }\n          .h[_ngcontent-%COMP%] {\n            margin: -1.8rem 0.19rem 0rem 2.7rem;\n          }"] });
    return TeamTXComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamTXComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "ngx-teamAL",
                template: "\n    <router-outlet>\n      <nb-card>\n        <nb-card-header>\n          <nav class=\"navigation\">\n            <a\n              href=\"#\"\n              (click)=\"back()\"\n              class=\"link back-link\"\n              aria-label=\"Back\"\n            >\n              <nb-icon icon=\"arrow-back\"></nb-icon>\n            </a>\n            <h5 class=\"h\">TRANSFER LINE</h5>\n          </nav>\n        </nb-card-header>\n        <nb-card-body>\n          <div class=\"contenedor\">\n            <img\n              src=\"./assets/img/construction.gif\"\n              class=\"align-self-center\"\n              width=\"100%\"\n              height=\"80%\"\n              style=\"margin-top: -140px; margin-left: 128px\"\n            />\n            <div class=\"centrado\">\n              <font size=\"4\">Sitio en Construcci\u00F3n</font>\n            </div>\n          </div>\n        </nb-card-body>\n        <style>\n          .contenedor {\n            position: relative;\n            display: inline-block;\n            text-align: center;\n          }\n\n          .centrado {\n            position: absolute;\n            font-size: 10px;\n            font-family: cursive;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n          }\n          .h {\n            margin: -1.8rem 0.19rem 0rem 2.7rem;\n          }\n        </style>\n      </nb-card>\n    </router-outlet>\n  ",
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/zone-teams/team-tx/team-tx.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/zone-teams/team-tx/team-tx.module.ts ***!
  \************************************************************/
/*! exports provided: TeamTXModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamTXModule", function() { return TeamTXModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");
/* harmony import */ var _team_tx_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./team-tx-routing.module */ "./src/app/pages/zone-teams/team-tx/team-tx-routing.module.ts");
/* harmony import */ var _team_tx_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./team-tx.component */ "./src/app/pages/zone-teams/team-tx/team-tx.component.ts");
/* harmony import */ var _syncfusion_ej2_angular_circulargauge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @syncfusion/ej2-angular-circulargauge */ "./node_modules/@syncfusion/ej2-angular-circulargauge/__ivy_ngcc__/@syncfusion/ej2-angular-circulargauge.es5.js");







var TeamTXModule = /** @class */ (function () {
    function TeamTXModule() {
    }
    TeamTXModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TeamTXModule });
    TeamTXModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TeamTXModule_Factory(t) { return new (t || TeamTXModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _team_tx_routing_module__WEBPACK_IMPORTED_MODULE_3__["TeamTXRoutingModule"],
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
    return TeamTXModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TeamTXModule, { declarations: [_team_tx_component__WEBPACK_IMPORTED_MODULE_4__["TeamTXComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _team_tx_routing_module__WEBPACK_IMPORTED_MODULE_3__["TeamTXRoutingModule"],
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
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamTXModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_team_tx_component__WEBPACK_IMPORTED_MODULE_4__["TeamTXComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _team_tx_routing_module__WEBPACK_IMPORTED_MODULE_3__["TeamTXRoutingModule"],
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
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=team-tx-team-tx-module.js.map