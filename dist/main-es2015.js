(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/@auth/access.settings.ts":
/*!******************************************!*\
  !*** ./src/app/@auth/access.settings.ts ***!
  \******************************************/
/*! exports provided: authSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authSettings", function() { return authSettings; });
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */
// import { Injectable } from '@angular/core';
// import { HttpClient,HttpXhrBackend } from '@angular/common/http';
// import { HttpService } from '../@core/backend/common/api/http.service';
// let guestView:string[];
// let userView:string[];
// let adminView:string[];
// let userEdit:string[];
// let AdminEdit:string[];
// @Injectable({
//   providedIn: 'root'
// })
// export class  AccessGetRole{
//   constructor(private api: HttpService,
//     private http: HttpClient,){
//       this.http.get(this.api.apiUrlMatbox + "/userrole/getaccessroles?role=guest&accessType=view")
//       .subscribe((res: any)=>{
//         console.log(res);
//         guestView=res;
//       });
//   }
//   eView = () => {
//    ['devices', 'current-user']
// }
// // static eView() :string[] {
// //   const httpClient = new HttpClient(new HttpXhrBackend({ build: () => new XMLHttpRequest() }));
//   // httpClient.get('test').subscribe(r => console.log(r));
//   // const httpClient =  InjectorInstance.get<HttpClient>(HttpClient);
//   let api= new HttpService(httpClient);
// httpClient.get(api.apiUrlMatbox + "/userrole/getaccessroles?role=guest&accessType=view")
// .subscribe((res:any)=>{
//   console.log(res);
//   guestView=res;
// });
// httpClient.get(api.apiUrlMatbox + "/userrole/getaccessroles?role=user&accessType=view")
// .subscribe((res:any)=>{
//   console.log(res);
//   userView=res;
// });
// httpClient.get(api.apiUrlMatbox + "/userrole/getaccessroles?role=user&accessType=edit")
// .subscribe((res:any)=>{
//   console.log(res);
//   userEdit=res;
// });
// httpClient.get(api.apiUrlMatbox + "/userrole/getaccessroles?role=admin&accessType=view")
// .subscribe((res:any)=>{
//   console.log(res);
//   adminView=res;
// });
// httpClient.get(api.apiUrlMatbox + "/userrole/getaccessroles?role=admin&accessType=edit")
// .subscribe((res:any)=>{
//   console.log(res);
//   AdminEdit=res;
// });
// return guestView;
//   // return ['devices', 'current-user'];
// }
// public static  authSettings = {
//     guest: {
//       view: AccessGetRole.eView()
//     },
//     user: {
//       parent: 'guest',
//         view: userView,
//         edit: userEdit,
//     },
//     admin: {
//       parent: 'user',
//         view: adminView,
//         edit: AdminEdit,
//     },
//   };
//   }
const authSettings = {
    operario: {
        view: ['devices', 'current-user', 'dashboard', 'iot-dashboard']
    },
    // operario: {
    //   view: ['dashboard', 'current-user']
    // },
    supervisor: {
        parent: 'operario',
        view: ['devices', 'current-user', 'dashboard', 'iot-dashboard', 'report', 'reports', 'fullMenu'],
        edit: ['devices', 'current-user'],
    },
    programador: {
        parent: 'supervisor',
        view: ['devices', 'current-user', 'users', 'dashboard', 'iot-dashboard', 'dashboard', 'report', 'reports', 'order', 'ordertable', 'machine'],
        edit: ['devices', 'current-user', 'dashboard', 'iot-dashboard', 'dashboard', 'report', 'reports', 'order', 'ordertable', 'machine'],
    },
    admin: {
        parent: 'programador',
        view: ['devices', 'current-user', 'users'],
        edit: ['devices', 'current-user', 'users'],
    },
};


/***/ }),

/***/ "./src/app/@auth/admin.guard.ts":
/*!**************************************!*\
  !*** ./src/app/@auth/admin.guard.ts ***!
  \**************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _nebular_security__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/security */ "./node_modules/@nebular/security/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _roles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./roles */ "./src/app/@auth/roles.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */






class AdminGuard {
    constructor(roleProvider) {
        this.roleProvider = roleProvider;
    }
    canActivate(route, state) {
        return this.roleProvider.getRole()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(role => {
            const roles = role instanceof Array ? role : [role];
            return roles.some(x => x && x.toLowerCase() === _roles__WEBPACK_IMPORTED_MODULE_3__["ROLES"].ADMIN);
        }));
    }
}
AdminGuard.ɵfac = function AdminGuard_Factory(t) { return new (t || AdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_nebular_security__WEBPACK_IMPORTED_MODULE_2__["NbRoleProvider"])); };
AdminGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AdminGuard, factory: AdminGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _nebular_security__WEBPACK_IMPORTED_MODULE_2__["NbRoleProvider"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@auth/auth-routing.module.ts":
/*!**********************************************!*\
  !*** ./src/app/@auth/auth-routing.module.ts ***!
  \**********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./src/app/@auth/components/index.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */





const routes = [{
        path: '',
        component: _components__WEBPACK_IMPORTED_MODULE_2__["NgxAuthComponent"],
        children: [
            {
                path: '',
                component: _components__WEBPACK_IMPORTED_MODULE_2__["NgxLoginComponent"],
            },
            {
                path: 'login',
                component: _components__WEBPACK_IMPORTED_MODULE_2__["NgxLoginComponent"],
            },
            {
                path: 'register',
                component: _components__WEBPACK_IMPORTED_MODULE_2__["NgxRegisterComponent"],
            },
            {
                path: 'logout',
                component: _components__WEBPACK_IMPORTED_MODULE_2__["NgxLogoutComponent"],
            },
            {
                path: 'request-password',
                component: _components__WEBPACK_IMPORTED_MODULE_2__["NgxRequestPasswordComponent"],
            },
            {
                path: 'reset-password/:id',
                component: _components__WEBPACK_IMPORTED_MODULE_2__["NgxResetPasswordComponent"],
            },
        ],
    }];
class AuthRoutingModule {
}
AuthRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AuthRoutingModule });
AuthRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AuthRoutingModule_Factory(t) { return new (t || AuthRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AuthRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/@auth/auth.guard.ts":
/*!*************************************!*\
  !*** ./src/app/@auth/auth.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/auth */ "./node_modules/@nebular/auth/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */







class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        return this.authService.isAuthenticated()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(authenticated => {
            if (!authenticated) {
                this.router.navigate(['auth/login']);
            }
        }));
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_1__["NbAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _nebular_auth__WEBPACK_IMPORTED_MODULE_1__["NbAuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@auth/auth.interceptor.ts":
/*!*******************************************!*\
  !*** ./src/app/@auth/auth.interceptor.ts ***!
  \*******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */






class AuthInterceptor {
    constructor(router) {
        this.router = router;
    }
    intercept(req, next) {
        return next.handle(req)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            if (error.status === 401) {
                this.router.navigate(['auth/login']);
            }
            // TODO: handle 403 error ?
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@auth/auth.module.ts":
/*!**************************************!*\
  !*** ./src/app/@auth/auth.module.ts ***!
  \**************************************/
/*! exports provided: filterInterceptorRequest, AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterInterceptorRequest", function() { return filterInterceptorRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/auth */ "./node_modules/@nebular/auth/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _auth_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.interceptor */ "./src/app/@auth/auth.interceptor.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.guard */ "./src/app/@auth/auth.guard.ts");
/* harmony import */ var _admin_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin.guard */ "./src/app/@auth/admin.guard.ts");
/* harmony import */ var _user_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user.guard */ "./src/app/@auth/user.guard.ts");
/* harmony import */ var _auth_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth.pipe */ "./src/app/@auth/auth.pipe.ts");
/* harmony import */ var _role_provider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./role.provider */ "./src/app/@auth/role.provider.ts");
/* harmony import */ var _nebular_security__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nebular/security */ "./node_modules/@nebular/security/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components */ "./src/app/@auth/components/index.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/@auth/auth-routing.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../@components/components.module */ "./src/app/@components/components.module.ts");
/* harmony import */ var _auth_settings__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./auth.settings */ "./src/app/@auth/auth.settings.ts");
/* harmony import */ var _access_settings__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./access.settings */ "./src/app/@auth/access.settings.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

















// import { authSettings } from './access.settings';



const GUARDS = [_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"], _admin_guard__WEBPACK_IMPORTED_MODULE_7__["AdminGuard"], _user_guard__WEBPACK_IMPORTED_MODULE_8__["UserGuard"]];
const PIPES = [_auth_pipe__WEBPACK_IMPORTED_MODULE_9__["AuthPipe"]];
const COMPONENTS = [
    _components__WEBPACK_IMPORTED_MODULE_12__["NgxLoginComponent"],
    _components__WEBPACK_IMPORTED_MODULE_12__["NgxAuthComponent"],
    _components__WEBPACK_IMPORTED_MODULE_12__["NgxLogoutComponent"],
    _components__WEBPACK_IMPORTED_MODULE_12__["NgxRegisterComponent"],
    _components__WEBPACK_IMPORTED_MODULE_12__["NgxRequestPasswordComponent"],
    _components__WEBPACK_IMPORTED_MODULE_12__["NgxResetPasswordComponent"],
    _components__WEBPACK_IMPORTED_MODULE_12__["NgxAuthBlockComponent"],
];
const NB_MODULES = [
    _nebular_theme__WEBPACK_IMPORTED_MODULE_13__["NbIconModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_13__["NbLayoutModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_13__["NbCardModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_13__["NbAlertModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_13__["NbCheckboxModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_13__["NbInputModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_13__["NbButtonModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_13__["NbSelectModule"],
];
function filterInterceptorRequest(req) {
    return ['/auth/login', '/auth/sign-up', '/auth/request-pass', '/auth/refresh-token']
        .some(url => req.url.includes(url));
}
class AuthModule {
    static forRoot() {
        return {
            ngModule: AuthModule,
            providers: [
                { provide: _nebular_auth__WEBPACK_IMPORTED_MODULE_4__["NB_AUTH_TOKEN_INTERCEPTOR_FILTER"], useValue: filterInterceptorRequest },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _nebular_auth__WEBPACK_IMPORTED_MODULE_4__["NbAuthJWTInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _auth_interceptor__WEBPACK_IMPORTED_MODULE_5__["AuthInterceptor"], multi: true },
                ...GUARDS
            ],
        };
    }
}
AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthModule_Factory(t) { return new (t || AuthModule)(); }, providers: [
        _nebular_security__WEBPACK_IMPORTED_MODULE_11__["NbSecurityModule"].forRoot({
            accessControl: _access_settings__WEBPACK_IMPORTED_MODULE_17__["authSettings"],
        }).providers,
        {
            provide: _nebular_security__WEBPACK_IMPORTED_MODULE_11__["NbRoleProvider"], useClass: _role_provider__WEBPACK_IMPORTED_MODULE_10__["RoleProvider"],
        },
        {
            provide: _nebular_auth__WEBPACK_IMPORTED_MODULE_4__["NbTokenLocalStorage"], useClass: _nebular_auth__WEBPACK_IMPORTED_MODULE_4__["NbTokenLocalStorage"],
        },
    ], imports: [[
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_14__["AuthRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_15__["ComponentsModule"],
            ...NB_MODULES,
            _nebular_auth__WEBPACK_IMPORTED_MODULE_4__["NbAuthModule"].forRoot(_auth_settings__WEBPACK_IMPORTED_MODULE_16__["authOptions"]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_auth_pipe__WEBPACK_IMPORTED_MODULE_9__["AuthPipe"],
        _components__WEBPACK_IMPORTED_MODULE_12__["NgxLoginComponent"],
        _components__WEBPACK_IMPORTED_MODULE_12__["NgxAuthComponent"],
        _components__WEBPACK_IMPORTED_MODULE_12__["NgxLogoutComponent"],
        _components__WEBPACK_IMPORTED_MODULE_12__["NgxRegisterComponent"],
        _components__WEBPACK_IMPORTED_MODULE_12__["NgxRequestPasswordComponent"],
        _components__WEBPACK_IMPORTED_MODULE_12__["NgxResetPasswordComponent"],
        _components__WEBPACK_IMPORTED_MODULE_12__["NgxAuthBlockComponent"]], imports: [_auth_routing_module__WEBPACK_IMPORTED_MODULE_14__["AuthRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_15__["ComponentsModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_13__["NbIconModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_13__["NbLayoutModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_13__["NbCardModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_13__["NbAlertModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_13__["NbCheckboxModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_13__["NbInputModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_13__["NbButtonModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_13__["NbSelectModule"], _nebular_auth__WEBPACK_IMPORTED_MODULE_4__["NbAuthModule"]], exports: [_auth_pipe__WEBPACK_IMPORTED_MODULE_9__["AuthPipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [...PIPES, ...COMPONENTS,],
                imports: [
                    _auth_routing_module__WEBPACK_IMPORTED_MODULE_14__["AuthRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _components_components_module__WEBPACK_IMPORTED_MODULE_15__["ComponentsModule"],
                    ...NB_MODULES,
                    _nebular_auth__WEBPACK_IMPORTED_MODULE_4__["NbAuthModule"].forRoot(_auth_settings__WEBPACK_IMPORTED_MODULE_16__["authOptions"]),
                ],
                exports: [...PIPES],
                providers: [
                    _nebular_security__WEBPACK_IMPORTED_MODULE_11__["NbSecurityModule"].forRoot({
                        accessControl: _access_settings__WEBPACK_IMPORTED_MODULE_17__["authSettings"],
                    }).providers,
                    {
                        provide: _nebular_security__WEBPACK_IMPORTED_MODULE_11__["NbRoleProvider"], useClass: _role_provider__WEBPACK_IMPORTED_MODULE_10__["RoleProvider"],
                    },
                    {
                        provide: _nebular_auth__WEBPACK_IMPORTED_MODULE_4__["NbTokenLocalStorage"], useClass: _nebular_auth__WEBPACK_IMPORTED_MODULE_4__["NbTokenLocalStorage"],
                    },
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/@auth/auth.pipe.ts":
/*!************************************!*\
  !*** ./src/app/@auth/auth.pipe.ts ***!
  \************************************/
/*! exports provided: AuthPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPipe", function() { return AuthPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/auth */ "./node_modules/@nebular/auth/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */






class AuthPipe {
    constructor(authService) {
        this.authService = authService;
    }
    transform(url) {
        if (!url) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(url);
        }
        return this.authService.getToken()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((token) => {
            const separator = url.indexOf('?') > 0 ? '&' : '?';
            return `${url}${separator}token=${token.getValue()}`;
        }));
    }
}
AuthPipe.ɵfac = function AuthPipe_Factory(t) { return new (t || AuthPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_1__["NbAuthService"])); };
AuthPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "ngxAuthToken", type: AuthPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'ngxAuthToken' }]
    }], function () { return [{ type: _nebular_auth__WEBPACK_IMPORTED_MODULE_1__["NbAuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@auth/auth.settings.ts":
/*!****************************************!*\
  !*** ./src/app/@auth/auth.settings.ts ***!
  \****************************************/
/*! exports provided: socialLinks, authOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "socialLinks", function() { return socialLinks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authOptions", function() { return authOptions; });
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nebular/auth */ "./node_modules/@nebular/auth/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */


const socialLinks = [
    {
        url: 'https://github.com/akveo/nebular',
        target: '_blank',
        icon: 'github',
    },
    {
        url: 'https://www.facebook.com/akveo/',
        target: '_blank',
        icon: 'facebook',
    },
    {
        url: 'https://twitter.com/akveo_inc',
        target: '_blank',
        icon: 'twitter',
    },
];
const authOptions = {
    strategies: [
        _nebular_auth__WEBPACK_IMPORTED_MODULE_0__["NbPasswordAuthStrategy"].setup({
            name: 'email',
            baseEndpoint: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl,
            token: {
                class: _nebular_auth__WEBPACK_IMPORTED_MODULE_0__["NbAuthOAuth2JWTToken"],
                key: 'token',
            },
            login: {
                endpoint: '/auth/login',
                method: 'post',
            },
            register: {
                endpoint: '/auth/sign-up',
                method: 'post',
            },
            logout: {
                endpoint: '/auth/sign-out',
                method: 'post',
            },
            requestPass: {
                endpoint: '/auth/request-pass',
                method: 'post',
            },
            resetPass: {
                endpoint: '/auth/reset-pass',
                method: 'post',
            },
            refreshToken: {
                endpoint: '/auth/refresh-token',
                method: 'post',
            },
        }),
    ],
    forms: {
        login: {
            socialLinks: socialLinks,
        },
        register: {
            socialLinks: socialLinks,
        },
        validation: {
            fullName: {
                required: true,
                minLength: 6,
                maxLength: 20,
            },
        },
    },
};


/***/ }),

/***/ "./src/app/@auth/components/auth-block/auth-block.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/@auth/components/auth-block/auth-block.component.ts ***!
  \*********************************************************************/
/*! exports provided: NgxAuthBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxAuthBlockComponent", function() { return NgxAuthBlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */


const _c0 = ["*"];
class NgxAuthBlockComponent {
}
NgxAuthBlockComponent.ɵfac = function NgxAuthBlockComponent_Factory(t) { return new (t || NgxAuthBlockComponent)(); };
NgxAuthBlockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgxAuthBlockComponent, selectors: [["ngx-auth-block"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NgxAuthBlockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  max-width: 35rem;\n}\n[_nghost-%COMP%]     form {\n  width: 100%;\n}\n[_nghost-%COMP%]     .label {\n  display: block;\n  margin-bottom: 0.5rem;\n}\n[_nghost-%COMP%]     .forgot-password {\n  text-decoration: none;\n  margin-bottom: 0.5rem;\n}\n[_nghost-%COMP%]     .caption {\n  margin-top: 0.5rem;\n}\n[_nghost-%COMP%]     .alert {\n  text-align: center;\n}\n[_nghost-%COMP%]     .title {\n  margin-top: 0;\n  margin-bottom: 0.75rem;\n  text-align: center;\n}\n[_nghost-%COMP%]     .sub-title {\n  margin-bottom: 2rem;\n  text-align: center;\n}\n[_nghost-%COMP%]     .form-control-group {\n  margin-bottom: 2rem;\n}\n[_nghost-%COMP%]     .form-control-group.accept-group {\n  display: flex;\n  justify-content: space-between;\n  margin: 2rem 0;\n}\n[_nghost-%COMP%]     .label-with-link {\n  display: flex;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]     .links {\n  text-align: center;\n  margin-top: 1.75rem;\n}\n[_nghost-%COMP%]     .links .socials {\n  margin-top: 1.5rem;\n}\n[_nghost-%COMP%]     .links .socials a {\n  margin: 0 1rem;\n  text-decoration: none;\n  vertical-align: middle;\n}\n[_nghost-%COMP%]     .links .socials a.with-icon {\n  font-size: 2rem;\n}\n[_nghost-%COMP%]     .another-action {\n  margin-top: 2rem;\n  text-align: center;\n}\n[_nghost-%COMP%]     .sign-in-or-up {\n  margin-top: 2rem;\n  display: flex;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]     nb-alert .alert-title, [_nghost-%COMP%]     nb-alert .alert-message {\n  margin: 0 0 0.5rem;\n}\n[_nghost-%COMP%]     nb-alert .alert-message-list {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZWJhc3RpYW5sb3NhZGEvRG9jdW1lbnRzL01hdEJhZy9NYXRCYWcuRnJvbnRlbmRWMS9zcmMvYXBwL0BhdXRoL2NvbXBvbmVudHMvYXV0aC1ibG9jay9hdXRoLWJsb2NrLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9AYXV0aC9jb21wb25lbnRzL2F1dGgtYmxvY2svYXV0aC1ibG9jay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztFQ0lFO0FERUY7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGdCQUFnQjtBQ0FsQjtBREhBO0VBT00sV0FBVztBQ0FqQjtBRFBBO0VBV00sY0FBYztFQUNkLHFCQUFxQjtBQ0EzQjtBRFpBO0VBZ0JNLHFCQUFxQjtFQUNyQixxQkFBcUI7QUNBM0I7QURqQkE7RUFxQk0sa0JBQWtCO0FDQXhCO0FEckJBO0VBeUJNLGtCQUFrQjtBQ0F4QjtBRHpCQTtFQTZCTSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQ0F4QjtBRC9CQTtFQW1DTSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FDQXhCO0FEcENBO0VBd0NNLG1CQUFtQjtBQ0F6QjtBRHhDQTtFQTRDTSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGNBQWM7QUNBcEI7QUQ5Q0E7RUFrRE0sYUFBYTtFQUNiLDhCQUE4QjtBQ0FwQztBRG5EQTtFQXVETSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FDQXpCO0FEeERBO0VBMkRRLGtCQUFrQjtBQ0MxQjtBRDVEQTtFQStEUSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLHNCQUFzQjtBQ0M5QjtBRGxFQTtFQW9FVSxlQUFlO0FDRXpCO0FEdEVBO0VBMEVNLGdCQUFnQjtFQUNoQixrQkFBa0I7QUNBeEI7QUQzRUE7RUErRU0sZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYiw4QkFBOEI7QUNBcEM7QURqRkE7O0VBdUZRLGtCQUFrQjtBQ0QxQjtBRHRGQTtFQTBGUSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLFNBQVM7QUNBakIiLCJmaWxlIjoic3JjL2FwcC9AYXV0aC9jb21wb25lbnRzL2F1dGgtYmxvY2svYXV0aC1ibG9jay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQ29weXJpZ2h0IChjKSBBa3ZlbyAyMDE5LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIFNpbmdsZSBBcHBsaWNhdGlvbiAvIE11bHRpIEFwcGxpY2F0aW9uIExpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRV9TSU5HTEVfQVBQIC8gTElDRU5TRV9NVUxUSV9BUFAgaW4gdGhlICdkb2NzJyBmb2xkZXIgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24gb24gdHlwZSBvZiBwdXJjaGFzZWQgbGljZW5zZS5cbiAqL1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAzNXJlbTtcblxuICA6Om5nLWRlZXAge1xuICAgIGZvcm0ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLmxhYmVsIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgIH1cblxuICAgIC5mb3Jnb3QtcGFzc3dvcmQge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgIH1cblxuICAgIC5jYXB0aW9uIHtcbiAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgICB9XG5cbiAgICAuYWxlcnQge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC50aXRsZSB7XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuc3ViLXRpdGxlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmZvcm0tY29udHJvbC1ncm91cCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIH1cblxuICAgIC5mb3JtLWNvbnRyb2wtZ3JvdXAuYWNjZXB0LWdyb3VwIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBtYXJnaW46IDJyZW0gMDtcbiAgICB9XG5cbiAgICAubGFiZWwtd2l0aC1saW5rIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxuXG4gICAgLmxpbmtzIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbi10b3A6IDEuNzVyZW07XG5cbiAgICAgIC5zb2NpYWxzIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMS41cmVtO1xuICAgICAgfVxuXG4gICAgICAuc29jaWFscyBhIHtcbiAgICAgICAgbWFyZ2luOiAwIDFyZW07XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcblxuICAgICAgICAmLndpdGgtaWNvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmFub3RoZXItYWN0aW9uIHtcbiAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLnNpZ24taW4tb3ItdXAge1xuICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxuXG4gICAgbmItYWxlcnQge1xuICAgICAgLmFsZXJ0LXRpdGxlLFxuICAgICAgLmFsZXJ0LW1lc3NhZ2Uge1xuICAgICAgICBtYXJnaW46IDAgMCAwLjVyZW07XG4gICAgICB9XG4gICAgICAuYWxlcnQtbWVzc2FnZS1saXN0IHtcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIvKiFcbiAqIENvcHlyaWdodCAoYykgQWt2ZW8gMjAxOS4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBTaW5nbGUgQXBwbGljYXRpb24gLyBNdWx0aSBBcHBsaWNhdGlvbiBMaWNlbnNlLlxuICogU2VlIExJQ0VOU0VfU0lOR0xFX0FQUCAvIExJQ0VOU0VfTVVMVElfQVBQIGluIHRoZSAnZG9jcycgZm9sZGVyIGZvciBsaWNlbnNlIGluZm9ybWF0aW9uIG9uIHR5cGUgb2YgcHVyY2hhc2VkIGxpY2Vuc2UuXG4gKi9cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDM1cmVtO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5mb3Jnb3QtcGFzc3dvcmQge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jYXB0aW9uIHtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmFsZXJ0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnN1Yi10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5mb3JtLWNvbnRyb2wtZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmZvcm0tY29udHJvbC1ncm91cC5hY2NlcHQtZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbjogMnJlbSAwO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmxhYmVsLXdpdGgtbGluayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5saW5rcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMS43NXJlbTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5saW5rcyAuc29jaWFscyB7XG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5saW5rcyAuc29jaWFscyBhIHtcbiAgbWFyZ2luOiAwIDFyZW07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5saW5rcyAuc29jaWFscyBhLndpdGgtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5hbm90aGVyLWFjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5zaWduLWluLW9yLXVwIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgbmItYWxlcnQgLmFsZXJ0LXRpdGxlLFxuOmhvc3QgOjpuZy1kZWVwIG5iLWFsZXJ0IC5hbGVydC1tZXNzYWdlIHtcbiAgbWFyZ2luOiAwIDAgMC41cmVtO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgbmItYWxlcnQgLmFsZXJ0LW1lc3NhZ2UtbGlzdCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxAuthBlockComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-auth-block',
                styleUrls: ['./auth-block.component.scss'],
                template: `
    <ng-content></ng-content>
  `,
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/@auth/components/auth.component.ts":
/*!****************************************************!*\
  !*** ./src/app/@auth/components/auth.component.ts ***!
  \****************************************************/
/*! exports provided: NgxAuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxAuthComponent", function() { return NgxAuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/auth */ "./node_modules/@nebular/auth/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */









class NgxAuthComponent {
    // showcase of how to use the onAuthenticationChange method
    constructor(auth, location) {
        this.auth = auth;
        this.location = location;
        this.alive = true;
        this.authenticated = false;
        this.token = '';
        this.subscription = auth.onAuthenticationChange()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeWhile"])(() => this.alive))
            .subscribe((authenticated) => {
            this.authenticated = authenticated;
        });
    }
    back() {
        this.location.back();
        return false;
    }
    ngOnDestroy() {
        this.alive = false;
    }
}
NgxAuthComponent.ɵfac = function NgxAuthComponent_Factory(t) { return new (t || NgxAuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"])); };
NgxAuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgxAuthComponent, selectors: [["ngx-auth"]], decls: 9, vars: 0, consts: [[1, "navigation"], ["href", "#", "aria-label", "Back", 1, "link", "back-link", 3, "click"]], template: function NgxAuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxAuthComponent_Template_a_click_5_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nb-auth-block");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbLayoutComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbLayoutColumnComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardBodyComponent"], _nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbAuthBlockComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]], styles: ["[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  margin: 0;\n  height: calc(100vh - 2 * 2.5rem);\n}\n[_nghost-%COMP%]   .navigation[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-decoration: none;\n}\n[_nghost-%COMP%]   .navigation[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  vertical-align: middle;\n}\n[_nghost-%COMP%]   .links[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n}\n[_nghost-%COMP%]   nb-auth-block[_ngcontent-%COMP%] {\n  margin: auto;\n}\n@media (max-width: 767.98px) {\n  [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n    border-radius: 0;\n    height: 100vh;\n  }\n}\n[_nghost-%COMP%]     nb-layout .layout .layout-container .content .columns nb-layout-column {\n  padding: 2.5rem;\n}\n@media (max-width: 767.98px) {\n  [_nghost-%COMP%]     nb-layout .layout .layout-container .content .columns nb-layout-column {\n    padding: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZWJhc3RpYW5sb3NhZGEvRG9jdW1lbnRzL01hdEJhZy9NYXRCYWcuRnJvbnRlbmRWMS9zcmMvYXBwL0BhdXRoL2NvbXBvbmVudHMvYXV0aC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQGF1dGgvY29tcG9uZW50cy9hdXRoLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NlYmFzdGlhbmxvc2FkYS9Eb2N1bWVudHMvTWF0QmFnL01hdEJhZy5Gcm9udGVuZFYxL25vZGVfbW9kdWxlcy9AbmVidWxhci90aGVtZS9zdHlsZXMvZ2xvYmFsL19icmVha3BvaW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0VDSUU7QUNKRjs7OztFRFNFO0FEREY7RUFJSSxTQUFTO0VBQ1QsZ0NBQWlEO0FDQXJEO0FETEE7RUFTSSxxQkFBcUI7RUFDckIscUJBQXFCO0FDQXpCO0FEVkE7RUFhTSxlQUFlO0VBQ2Ysc0JBQXNCO0FDQzVCO0FEZkE7RUFtQkksaUJBQWlCO0FDQXJCO0FEbkJBO0VBdUJJLGFBQWE7RUFDYixXQUFXO0FDQWY7QUR4QkE7RUE0QkksWUFBWTtBQ0FoQjtBQ29CSTtFRmhESjtJQWlDTSxnQkFBZ0I7SUFDaEIsYUFBYTtFQ0FqQjtBQUNGO0FEbkNBO0VBd0NNLGVBdkN3QjtBQ3NDOUI7QUNTSTtFRmhESjtJQTJDUSxVQUFVO0VDQ2hCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9AYXV0aC9jb21wb25lbnRzL2F1dGguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIENvcHlyaWdodCAoYykgQWt2ZW8gMjAxOS4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBTaW5nbGUgQXBwbGljYXRpb24gLyBNdWx0aSBBcHBsaWNhdGlvbiBMaWNlbnNlLlxuICogU2VlIExJQ0VOU0VfU0lOR0xFX0FQUCAvIExJQ0VOU0VfTVVMVElfQVBQIGluIHRoZSAnZG9jcycgZm9sZGVyIGZvciBsaWNlbnNlIGluZm9ybWF0aW9uIG9uIHR5cGUgb2YgcHVyY2hhc2VkIGxpY2Vuc2UuXG4gKi9cblxuQGltcG9ydCAnfkBuZWJ1bGFyL3RoZW1lL3N0eWxlcy9nbG9iYWwvYnJlYWtwb2ludHMnO1xuXG46aG9zdCB7XG4gICRhdXRoLWxheW91dC1wYWRkaW5nOiAyLjVyZW07XG5cbiAgbmItY2FyZCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDIgKiAjeyRhdXRoLWxheW91dC1wYWRkaW5nfSk7XG4gIH1cblxuICAubmF2aWdhdGlvbiAubGluayB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAgIG5iLWljb24ge1xuICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB9XG4gIH1cblxuICAubGlua3MgbmItaWNvbiB7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gIH1cblxuICBuYi1jYXJkLWJvZHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICBuYi1hdXRoLWJsb2NrIHtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cblxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oc20pIHtcbiAgICBuYi1jYXJkIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIH1cbiAgfVxuXG4gIDo6bmctZGVlcCB7XG4gICAgbmItbGF5b3V0IC5sYXlvdXQgLmxheW91dC1jb250YWluZXIgLmNvbnRlbnQgLmNvbHVtbnMgbmItbGF5b3V0LWNvbHVtbiB7XG4gICAgICBwYWRkaW5nOiAkYXV0aC1sYXlvdXQtcGFkZGluZztcblxuICAgICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKHNtKSB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIvKiFcbiAqIENvcHlyaWdodCAoYykgQWt2ZW8gMjAxOS4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBTaW5nbGUgQXBwbGljYXRpb24gLyBNdWx0aSBBcHBsaWNhdGlvbiBMaWNlbnNlLlxuICogU2VlIExJQ0VOU0VfU0lOR0xFX0FQUCAvIExJQ0VOU0VfTVVMVElfQVBQIGluIHRoZSAnZG9jcycgZm9sZGVyIGZvciBsaWNlbnNlIGluZm9ybWF0aW9uIG9uIHR5cGUgb2YgcHVyY2hhc2VkIGxpY2Vuc2UuXG4gKi9cbi8qIVxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbjpob3N0IG5iLWNhcmQge1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDIgKiAyLjVyZW0pO1xufVxuXG46aG9zdCAubmF2aWdhdGlvbiAubGluayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG46aG9zdCAubmF2aWdhdGlvbiAubGluayBuYi1pY29uIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG46aG9zdCAubGlua3MgbmItaWNvbiB7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xufVxuXG46aG9zdCBuYi1jYXJkLWJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuOmhvc3QgbmItYXV0aC1ibG9jayB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XG4gIDpob3N0IG5iLWNhcmQge1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgfVxufVxuXG46aG9zdCA6Om5nLWRlZXAgbmItbGF5b3V0IC5sYXlvdXQgLmxheW91dC1jb250YWluZXIgLmNvbnRlbnQgLmNvbHVtbnMgbmItbGF5b3V0LWNvbHVtbiB7XG4gIHBhZGRpbmc6IDIuNXJlbTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XG4gIDpob3N0IDo6bmctZGVlcCBuYi1sYXlvdXQgLmxheW91dCAubGF5b3V0LWNvbnRhaW5lciAuY29udGVudCAuY29sdW1ucyBuYi1sYXlvdXQtY29sdW1uIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG4iLCIvKiFcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbiRncmlkLWNvbHVtbnM6IDEyICFkZWZhdWx0O1xuJGdyaWQtZ3V0dGVyLXdpZHRoLWJhc2U6IDI0cHggIWRlZmF1bHQ7XG4kZ3JpZC1ndXR0ZXItd2lkdGhzOiAoXG4gIHhzOiAkZ3JpZC1ndXR0ZXItd2lkdGgtYmFzZSxcbiAgc206ICRncmlkLWd1dHRlci13aWR0aC1iYXNlLFxuICBtZDogJGdyaWQtZ3V0dGVyLXdpZHRoLWJhc2UsXG4gIGxnOiAkZ3JpZC1ndXR0ZXItd2lkdGgtYmFzZSxcbiAgeGw6ICRncmlkLWd1dHRlci13aWR0aC1iYXNlXG4pICFkZWZhdWx0O1xuXG5cbiRncmlkLWJyZWFrcG9pbnRzOiAoXG4gIHhzOiAwLFxuICBpczogNDAwcHgsXG4gIHNtOiA1NzZweCxcbiAgbWQ6IDc2OHB4LFxuICBsZzogOTkycHgsXG4gIHhsOiAxMjAwcHgsXG4gIHh4bDogMTQwMHB4LFxuICB4eHhsOiAxNjAwcHhcbik7XG5cbiRjb250YWluZXItbWF4LXdpZHRoczogKFxuICBpczogMzgwcHgsXG4gIHNtOiA1NDBweCxcbiAgbWQ6IDcyMHB4LFxuICBsZzogOTYwcHgsXG4gIHhsOiAxMTQwcHgsXG4gIHh4bDogMTMyMHB4LFxuICB4eHhsOiAxNTAwcHhcbik7XG5cbkBmdW5jdGlvbiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRtaW4gIT0gMCwgJG1pbiwgbnVsbCk7XG59XG5cbkBmdW5jdGlvbiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMsICRicmVha3BvaW50LW5hbWVzOiBtYXAta2V5cygkYnJlYWtwb2ludHMpKSB7XG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSwgbnRoKCRicmVha3BvaW50LW5hbWVzLCAkbiArIDEpLCBudWxsKTtcbn1cblxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRuZXh0OiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEByZXR1cm4gaWYoJG5leHQsIGJyZWFrcG9pbnQtbWluKCRuZXh0LCAkYnJlYWtwb2ludHMpIC0gMC4wMnB4LCBudWxsKTtcbn1cblxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxAuthComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-auth',
                styleUrls: ['./auth.component.scss'],
                template: `
    <nb-layout>
      <nb-layout-column>
        <nb-card>
          <nb-card-header>
            <nav class="navigation">
              <a href="#" (click)="back()" class="link back-link" aria-label="Back">
                <!--<nb-icon icon="arrow-back"></nb-icon>-->
              </a>
            </nav>
          </nb-card-header>
          <nb-card-body>
            <nb-auth-block>
              <router-outlet></router-outlet>
            </nb-auth-block>
          </nb-card-body>
        </nb-card>
      </nb-layout-column>
    </nb-layout>
  `,
            }]
    }], function () { return [{ type: _nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbAuthService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@auth/components/constants.ts":
/*!***********************************************!*\
  !*** ./src/app/@auth/components/constants.ts ***!
  \***********************************************/
/*! exports provided: EMAIL_PATTERN, NUMBERS_PATTERN, DOUBLE_PATTERN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMAIL_PATTERN", function() { return EMAIL_PATTERN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMBERS_PATTERN", function() { return NUMBERS_PATTERN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOUBLE_PATTERN", function() { return DOUBLE_PATTERN; });
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */
const EMAIL_PATTERN = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
const NUMBERS_PATTERN = '^-?[0-9]+$';
const DOUBLE_PATTERN = '[+-]?([0-9]*[.])?[0-9]+';


/***/ }),

/***/ "./src/app/@auth/components/index.ts":
/*!*******************************************!*\
  !*** ./src/app/@auth/components/index.ts ***!
  \*******************************************/
/*! exports provided: NgxLoginComponent, NgxAuthBlockComponent, NgxLogoutComponent, NgxRegisterComponent, NgxRequestPasswordComponent, NgxResetPasswordComponent, NgxAuthComponent, EMAIL_PATTERN, NUMBERS_PATTERN, DOUBLE_PATTERN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ "./src/app/@auth/components/login/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxLoginComponent", function() { return _login_login_component__WEBPACK_IMPORTED_MODULE_0__["NgxLoginComponent"]; });

/* harmony import */ var _auth_block_auth_block_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-block/auth-block.component */ "./src/app/@auth/components/auth-block/auth-block.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxAuthBlockComponent", function() { return _auth_block_auth_block_component__WEBPACK_IMPORTED_MODULE_1__["NgxAuthBlockComponent"]; });

/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/@auth/components/logout/logout.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxLogoutComponent", function() { return _logout_logout_component__WEBPACK_IMPORTED_MODULE_2__["NgxLogoutComponent"]; });

/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/@auth/components/register/register.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxRegisterComponent", function() { return _register_register_component__WEBPACK_IMPORTED_MODULE_3__["NgxRegisterComponent"]; });

/* harmony import */ var _request_password_request_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./request-password/request-password.component */ "./src/app/@auth/components/request-password/request-password.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxRequestPasswordComponent", function() { return _request_password_request_password_component__WEBPACK_IMPORTED_MODULE_4__["NgxRequestPasswordComponent"]; });

/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/@auth/components/reset-password/reset-password.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxResetPasswordComponent", function() { return _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__["NgxResetPasswordComponent"]; });

/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.component */ "./src/app/@auth/components/auth.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxAuthComponent", function() { return _auth_component__WEBPACK_IMPORTED_MODULE_6__["NgxAuthComponent"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants */ "./src/app/@auth/components/constants.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EMAIL_PATTERN", function() { return _constants__WEBPACK_IMPORTED_MODULE_7__["EMAIL_PATTERN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NUMBERS_PATTERN", function() { return _constants__WEBPACK_IMPORTED_MODULE_7__["NUMBERS_PATTERN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DOUBLE_PATTERN", function() { return _constants__WEBPACK_IMPORTED_MODULE_7__["DOUBLE_PATTERN"]; });

/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */










/***/ }),

/***/ "./src/app/@auth/components/login/login.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/@auth/components/login/login.component.ts ***!
  \***********************************************************/
/*! exports provided: NgxLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxLoginComponent", function() { return NgxLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/auth */ "./node_modules/@nebular/auth/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers */ "./src/app/@auth/helpers.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants */ "./src/app/@auth/components/constants.ts");
/* harmony import */ var _theme_services_init_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../@theme/services/init-user.service */ "./src/app/@theme/services/init-user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_stores_user_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../@core/stores/user.store */ "./src/app/@core/stores/user.store.ts");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../@components/validation-message/validation-message.component */ "./src/app/@components/validation-message/validation-message.component.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

























function NgxLoginComponent_nb_alert_4_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "La combinaci\u00F3n de inicio de sesi\u00F3n / correo electr\u00F3nico no es correcta, int\u00E9ntelo de nuevo.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NgxLoginComponent_nb_alert_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-alert", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A1Oh cielos!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgxLoginComponent_nb_alert_4_li_5_Template, 2, 0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.errors);
} }
function NgxLoginComponent_nb_alert_5_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Has ingresado exitosamente, en MatBag");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NgxLoginComponent_nb_alert_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-alert", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A1Hurra!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgxLoginComponent_nb_alert_5_li_5_Template, 2, 0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.messages);
} }
function NgxLoginComponent_nb_checkbox_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-checkbox", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Recu\u00E9rdame");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NgxLoginComponent {
    constructor(service, options = {}, cd, themeService, fb, router, initUserService, userStore, api, apiGetComp, toasterService) {
        this.service = service;
        this.options = options;
        this.cd = cd;
        this.themeService = themeService;
        this.fb = fb;
        this.router = router;
        this.initUserService = initUserService;
        this.userStore = userStore;
        this.api = api;
        this.apiGetComp = apiGetComp;
        this.toasterService = toasterService;
        this.correo = 'mladmin@matec.com.co';
        this.contrasena = 'admin';
        this.minLength = this.getConfigValue('forms.validation.password.minLength');
        this.maxLength = this.getConfigValue('forms.validation.password.maxLength');
        this.redirectDelay = this.getConfigValue('forms.login.redirectDelay');
        this.showMessages = this.getConfigValue('forms.login.showMessages');
        this.strategy = this.getConfigValue('forms.login.strategy');
        this.socialLinks = this.getConfigValue('forms.login.socialLinks');
        this.rememberMe = this.getConfigValue('forms.login.rememberMe');
        this.isEmailRequired = this.getConfigValue('forms.validation.email.required');
        this.isPasswordRequired = this.getConfigValue('forms.validation.password.required');
        this.errors = [];
        this.messages = [];
        this.user = {};
        this.submitted = false;
        this.alive = true;
        this.validData = [];
    }
    get email() {
        return this.loginForm.get('email');
    }
    get password() {
        return this.loginForm.get('password');
    }
    ngOnInit() {
        const emailValidators = [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_constants__WEBPACK_IMPORTED_MODULE_6__["EMAIL_PATTERN"])];
        this.isEmailRequired && emailValidators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        const passwordValidators = [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(this.minLength),
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(this.maxLength),
        ];
        this.isPasswordRequired && passwordValidators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.loginForm = this.fb.group({
            email: this.fb.control('', [...emailValidators]),
            password: this.fb.control('', [...passwordValidators]),
            rememberMe: this.fb.control(false),
        });
    }
    login() {
        var _a;
        // debugger
        this.user = this.loginForm.value;
        this.errors = [];
        this.messages = [];
        this.submitted = true;
        let currentUserId = (_a = this.userStore.getUser()) === null || _a === void 0 ? void 0 : _a.id;
        if (currentUserId === undefined) {
            currentUserId = 1;
        }
        else {
            currentUserId;
        }
        // console.log("este es el usuario: ",this.userStore.getUser().firstName);
        var respons = {
            user: this.user.email,
            message: 'Inicio sesión',
            users: currentUserId,
        };
        this.apiGetComp
            .PostJson(this.api.apiUrlNode1 + '/postSaveAlarmUser', respons)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeWhile"])(() => this.alive))
            .subscribe((res) => {
            //  console.log("Envió: ", res);
        });
        // debugger
        this.apiGetComp
            .GetJson(this.api.apiUrlNode1 + '/api/getlEmailuser?Email=' + this.user.email)
            .subscribe((res) => {
            this.validData = res;
            // debugger
            console.log('Email ValidData: ', this.validData[0].Id);
            if ((this.validData[0].Lat === 0 &&
                this.validData[0].Licens_id === '1') ||
                this.validData[0].Lat === null) {
                // debugger
                var respon = {
                    user: this.validData[0].Id,
                    sesion: 1,
                };
                this.apiGetComp
                    .PostJson(this.api.apiUrlNode1 + '/updateSesion', respon)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeWhile"])(() => this.alive))
                    .subscribe((res) => {
                    //  console.log("Envió: ", res);
                });
                this.service
                    .authenticate(this.strategy, this.user)
                    .subscribe((result) => {
                    this.submitted = false;
                    if (result.isSuccess()) {
                        this.messages = result.getMessages();
                        this.initUserService.initCurrentUser().subscribe();
                    }
                    else {
                        this.errors = result.getErrors();
                    }
                    const redirect = result.getRedirect();
                    if (redirect) {
                        setTimeout(() => {
                            return this.router.navigateByUrl(redirect);
                        }, this.redirectDelay);
                    }
                    this.cd.detectChanges();
                });
            }
            else if (this.validData[0].Licens_id === '2') {
                // debugger
                console.log('licencia de usuario inactiva');
                this.toasterService.danger('', `¡Licencia Inactiva, por favor comuniquese con el administrador!`);
            }
            else {
                // debugger
                // console.log('El Usuario ya tiene una sesión activa..!');
                // this.toasterService.danger('', `¡El Usuario ya tiene una sesión activa..!`);
                debugger;
                sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
                    title: 'Sesión encontrada',
                    text: `Actualmente tienes una sesión iniciada en nuestra plataforma, debes finalizar para continuar.  
            ¿Desea cerrar la sesión activa?`,
                    // timer: 10000,
                    icon: 'success',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'SI',
                    cancelButtonText: 'No'
                }).then((result) => {
                    if (result.value) {
                        var respon = {
                            user: this.validData[0].Id,
                            sesion: 0,
                        };
                        this.apiGetComp
                            .PostJson(this.api.apiUrlNode1 + '/updateSesion', respon)
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeWhile"])(() => this.alive))
                            .subscribe((res) => {
                            debugger;
                            console.log("Envió: ", res);
                            return [{ title: 'Cerrar Sesión', link: '/auth/logout' }];
                        });
                        sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire('¡Sesión cerrada', 'La sesión que tenías abierta se he cerrado exitosamente, ahora puedes ingresar nuevamente.', 'warning');
                    }
                });
            }
        });
    }
    getConfigValue(key) {
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["getDeepFromObject"])(this.options, key, null);
    }
}
NgxLoginComponent.ɵfac = function NgxLoginComponent_Factory(t) { return new (t || NgxLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_3__["NbAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_3__["NB_AUTH_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_theme_services_init_user_service__WEBPACK_IMPORTED_MODULE_7__["InitUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_stores_user_store__WEBPACK_IMPORTED_MODULE_9__["UserStore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_10__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_11__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbToastrService"])); };
NgxLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgxLoginComponent, selectors: [["ngx-login"]], decls: 22, vars: 18, consts: [["id", "title", 1, "title"], [1, "sub-title"], ["outline", "danger", "role", "alert", 4, "ngIf"], ["outline", "success", "role", "alert", 4, "ngIf"], ["aria-labelledby", "title", 3, "formGroup"], [1, "form-control-group"], ["for", "input-email"], ["nbInput", "", "fullWidth", "", "id", "input-email", "formControlName", "email", "placeholder", "Email address", 3, "status", "ngModel", "ngModelChange"], ["label", "Email address", 3, "showPattern", "showRequired"], [1, "label-with-link"], ["for", "input-password", 1, "label"], ["nbInput", "", "fullWidth", "", "id", "input-password", "formControlName", "password", "type", "password", "placeholder", "Password", 3, "status", "ngModel", "ngModelChange"], ["label", "Password", 3, "showMinLength", "showMaxLength", "showRequired", "minLength", "maxLength"], [1, "form-control-group", "accept-group"], ["formControlName", "rememberMe", "name", "rememberMe", 4, "ngIf"], ["nbButton", "", "fullWidth", "", "status", "primary", "size", "large", 3, "click"], ["outline", "danger", "role", "alert"], [1, "alert-title"], [1, "alert-message-list"], ["class", "alert-message", 4, "ngFor", "ngForOf"], [1, "alert-message"], ["outline", "success", "role", "alert"], ["formControlName", "rememberMe", "name", "rememberMe"]], template: function NgxLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Inicia Sesi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A1Hola! Inicie sesi\u00F3n con su correo electr\u00F3nico.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgxLoginComponent_nb_alert_4_Template, 6, 1, "nb-alert", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgxLoginComponent_nb_alert_5_Template, 6, 1, "nb-alert", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "correo electr\u00F3nico:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NgxLoginComponent_Template_input_ngModelChange_10_listener($event) { return ctx.correo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "ngx-validation-message", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Contrase\u00F1a:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NgxLoginComponent_Template_input_ngModelChange_16_listener($event) { return ctx.contrasena = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "ngx-validation-message", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, NgxLoginComponent_nb_checkbox_19_Template, 2, 0, "nb-checkbox", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxLoginComponent_Template_button_click_20_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " INICIAR SESI\u00D3N ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMessages.error && (ctx.errors == null ? null : ctx.errors.length) && !ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMessages.success && (ctx.messages == null ? null : ctx.messages.length) && !ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("status", ctx.email.dirty ? ctx.email.invalid ? "danger" : "success" : "basic")("ngModel", ctx.correo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-invalid", ctx.email.invalid && ctx.email.touched ? true : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showPattern", (ctx.email == null ? null : ctx.email.hasError("pattern")) && ctx.email.touched)("showRequired", (ctx.email == null ? null : ctx.email.errors == null ? null : ctx.email.errors.required) && ctx.email.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("status", ctx.password.dirty ? ctx.password.invalid ? "danger" : "success" : "basic")("ngModel", ctx.contrasena);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showMinLength", (ctx.password == null ? null : ctx.password.hasError("minlength")) && ctx.password.touched)("showMaxLength", (ctx.password == null ? null : ctx.password.hasError("maxlength")) && ctx.password.touched)("showRequired", (ctx.password == null ? null : ctx.password.errors == null ? null : ctx.password.errors.required) && ctx.password.touched)("minLength", ctx.minLength)("maxLength", ctx.maxLength);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rememberMe);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-pulse", ctx.submitted);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _components_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_14__["NgxValidationMessageComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbAlertComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCheckboxComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-login',
                templateUrl: './login.component.html',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _nebular_auth__WEBPACK_IMPORTED_MODULE_3__["NbAuthService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_nebular_auth__WEBPACK_IMPORTED_MODULE_3__["NB_AUTH_OPTIONS"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbThemeService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _theme_services_init_user_service__WEBPACK_IMPORTED_MODULE_7__["InitUserService"] }, { type: _core_stores_user_store__WEBPACK_IMPORTED_MODULE_9__["UserStore"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_10__["HttpService"] }, { type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_11__["ApiGetService"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@auth/components/logout/logout.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/@auth/components/logout/logout.component.ts ***!
  \*************************************************************/
/*! exports provided: NgxLogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxLogoutComponent", function() { return NgxLogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/auth */ "./node_modules/@nebular/auth/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers */ "./src/app/@auth/helpers.ts");
/* harmony import */ var _core_stores_user_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@core/stores/user.store */ "./src/app/@core/stores/user.store.ts");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _auth_components_register_apiGet_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../@auth/components/register/apiGet.services */ "./src/app/@auth/components/register/apiGet.services.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */














class NgxLogoutComponent {
    constructor(service, userStore, apiGetComp, api, options = {}, router) {
        this.service = service;
        this.userStore = userStore;
        this.apiGetComp = apiGetComp;
        this.api = api;
        this.options = options;
        this.router = router;
        this.redirectDelay = this.getConfigValue('forms.logout.redirectDelay');
        this.strategy = this.getConfigValue('forms.logout.strategy');
        this.alive = true;
        this.time = 5000;
    }
    ngOnInit() {
        this.logout(this.strategy);
    }
    logout(strategy) {
        // debugger
        const currentUserId = this.userStore.getUser().id;
        // console.log("este es el usuario: ",this.userStore.getUser().firstName);
        var respons = {
            user: currentUserId,
            sesion: 0,
        };
        this.apiGetComp.PostJson(this.api.apiUrlNode1 + '/updateSesion', respons)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeWhile"])(() => this.alive))
            .subscribe((res) => {
            //  console.log("Envió: ", res);
        });
        this.service.logout(strategy).subscribe((result) => {
            const redirect = result.getRedirect();
            if (redirect) {
                setTimeout(() => {
                    return this.router.navigateByUrl(redirect);
                }, this.redirectDelay, this.time);
            }
        });
    }
    auto(data) {
        this.service.refreshToken(data);
        setTimeout(() => {
            this.logout;
        }, data);
    }
    autoLogout(expirationData) {
        console.log(expirationData);
        setTimeout(() => {
            this.logout;
        }, expirationData);
    }
    getConfigValue(key) {
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["getDeepFromObject"])(this.options, key, null);
    }
}
NgxLogoutComponent.ɵfac = function NgxLogoutComponent_Factory(t) { return new (t || NgxLogoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_stores_user_store__WEBPACK_IMPORTED_MODULE_4__["UserStore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_components_register_apiGet_services__WEBPACK_IMPORTED_MODULE_6__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NB_AUTH_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
NgxLogoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgxLogoutComponent, selectors: [["ngx-logout"]], decls: 2, vars: 0, template: function NgxLogoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cerrar sesi\u00F3n, espere...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxLogoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-logout',
                templateUrl: './logout.component.html',
            }]
    }], function () { return [{ type: _nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbAuthService"] }, { type: _core_stores_user_store__WEBPACK_IMPORTED_MODULE_4__["UserStore"] }, { type: _auth_components_register_apiGet_services__WEBPACK_IMPORTED_MODULE_6__["ApiGetService"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NB_AUTH_OPTIONS"]]
            }] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@auth/components/register/apiGet.services.ts":
/*!**************************************************************!*\
  !*** ./src/app/@auth/components/register/apiGet.services.ts ***!
  \**************************************************************/
/*! exports provided: ApiGetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiGetService", function() { return ApiGetService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




// import { Observable, Subject, of } from 'rxjs';
class ApiGetService {
    constructor(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            'responseType': 'blob',
        };
    }
    GetJson(url) {
        return this.http.get(url);
    }
    PostJson(url, propiedadesActualizar) {
        return this.http.post(url, propiedadesActualizar, this.httpOptions);
    }
}
ApiGetService.ɵfac = function ApiGetService_Factory(t) { return new (t || ApiGetService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ApiGetService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiGetService, factory: ApiGetService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiGetService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@auth/components/register/register.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/@auth/components/register/register.component.ts ***!
  \*****************************************************************/
/*! exports provided: NgxRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxRegisterComponent", function() { return NgxRegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/auth */ "./node_modules/@nebular/auth/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers */ "./src/app/@auth/helpers.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants */ "./src/app/@auth/components/constants.ts");
/* harmony import */ var _apiGet_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./apiGet.services */ "./src/app/@auth/components/register/apiGet.services.ts");
/* harmony import */ var _core_stores_user_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../@core/stores/user.store */ "./src/app/@core/stores/user.store.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _components_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../@components/validation-message/validation-message.component */ "./src/app/@components/validation-message/validation-message.component.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */




















function NgxRegisterComponent_nb_alert_2_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](error_r6);
} }
function NgxRegisterComponent_nb_alert_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-alert", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Oh snap!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgxRegisterComponent_nb_alert_2_li_5_Template, 2, 1, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.errors);
} }
function NgxRegisterComponent_nb_alert_3_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r8);
} }
function NgxRegisterComponent_nb_alert_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-alert", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Hooray!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgxRegisterComponent_nb_alert_3_li_5_Template, 2, 1, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.messages);
} }
function NgxRegisterComponent_nb_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemRole_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", itemRole_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", itemRole_r9.name, " ");
} }
function NgxRegisterComponent_p_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u00A1La contrase\u00F1a y la contrase\u00F1a de confirmaci\u00F3n no coinciden! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NgxRegisterComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-checkbox", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Acepta los ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "t\u00E9rminos y condiciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("required", ctx_r4.getConfigValue("forms.register.terms"));
} }
class NgxRegisterComponent {
    constructor(service, options = {}, cd, fb, router, httpService, apiGetComp, userStore, api) {
        this.service = service;
        this.options = options;
        this.cd = cd;
        this.fb = fb;
        this.router = router;
        this.httpService = httpService;
        this.apiGetComp = apiGetComp;
        this.userStore = userStore;
        this.api = api;
        this.minLoginLength = this.getConfigValue(('forms.validation.fullName.minLength'));
        this.maxLoginLength = this.getConfigValue(('forms.validation.fullName.maxLength'));
        this.minLength = this.getConfigValue('forms.validation.password.minLength');
        this.maxLength = this.getConfigValue('forms.validation.password.maxLength');
        this.isFullNameRequired = this.getConfigValue('forms.validation.fullName.required');
        this.isEmailRequired = this.getConfigValue('forms.validation.email.required');
        this.isPasswordRequired = this.getConfigValue('forms.validation.password.required');
        this.redirectDelay = this.getConfigValue('forms.register.redirectDelay');
        this.showMessages = this.getConfigValue('forms.register.showMessages');
        this.strategy = this.getConfigValue('forms.register.strategy');
        this.socialLinks = this.getConfigValue('forms.login.socialLinks');
        this.submitted = false;
        this.errors = [];
        this.messages = [];
        this.user = {};
        this.listaRoles = [];
        this.alive = true;
        this.apiGetComp.GetJson(this.httpService.apiUrlMatbox + '/userrole/getroles')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(() => this.alive))
            .subscribe((res) => {
            this.listaRoles = res;
        });
    }
    get login() { return this.registerForm.get('fullName'); }
    get email() { return this.registerForm.get('email'); }
    get password() { return this.registerForm.get('password'); }
    get confirmPassword() { return this.registerForm.get('confirmPassword'); }
    get terms() { return this.registerForm.get('terms'); }
    get role() { return this.registerForm.get('role'); }
    ngOnInit() {
        const loginValidators = [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(this.minLoginLength),
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(this.maxLoginLength),
        ];
        this.isFullNameRequired && loginValidators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        const roleValidators = [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(this.minLength),
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(this.maxLength),
        ];
        roleValidators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        const emailValidators = [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_constants__WEBPACK_IMPORTED_MODULE_7__["EMAIL_PATTERN"]),
        ];
        this.isEmailRequired && emailValidators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        const passwordValidators = [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(this.minLength),
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(this.maxLength),
        ];
        this.isPasswordRequired && passwordValidators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.registerForm = this.fb.group({
            fullName: this.fb.control('', [...loginValidators]),
            email: this.fb.control('', [...emailValidators]),
            password: this.fb.control('', [...passwordValidators]),
            confirmPassword: this.fb.control('', [...passwordValidators]),
            terms: this.fb.control(''),
            role: this.fb.control('', [...roleValidators]),
        });
        // this.httpService.get(this.httpService.apiUrlMatbox+'/userrole/getroles').subscribe((res: any) => {
        //   this.listaRoles=res;
        // });
    }
    register() {
        this.user = this.registerForm.value;
        this.errors = this.messages = [];
        this.submitted = true;
        const currentUserId = this.userStore.getUser().id;
        const currentUser = this.userStore.getUser().firstName;
        // console.log("este es el usuario: ",this.userStore.getUser().firstName);
        var respons = {
            user: currentUser,
            message: "Creo un nuevo usuario",
            users: currentUserId,
        };
        this.apiGetComp.PostJson(this.api.apiUrlNode1 + '/postSaveAlarmUser', respons)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(() => this.alive))
            .subscribe((res) => {
            //  console.log("Envió: ", res);
        });
        this.service.register(this.strategy, this.user).subscribe((result) => {
            this.submitted = false;
            if (result.isSuccess()) {
                this.messages = result.getMessages();
            }
            else {
                this.errors = result.getErrors();
            }
            const redirect = result.getRedirect();
            if (redirect) {
                setTimeout(() => {
                    return this.router.navigateByUrl(redirect);
                }, this.redirectDelay);
            }
            this.cd.detectChanges();
        });
    }
    getConfigValue(key) {
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["getDeepFromObject"])(this.options, key, null);
    }
}
NgxRegisterComponent.ɵfac = function NgxRegisterComponent_Factory(t) { return new (t || NgxRegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_3__["NbAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_3__["NB_AUTH_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_apiGet_services__WEBPACK_IMPORTED_MODULE_8__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_stores_user_store__WEBPACK_IMPORTED_MODULE_9__["UserStore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"])); };
NgxRegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgxRegisterComponent, selectors: [["ngx-register"]], decls: 36, vars: 38, consts: [["id", "title", 1, "title"], ["outline", "danger", "role", "alert", 4, "ngIf"], ["outline", "success", "role", "alert", 4, "ngIf"], ["aria-labelledby", "title", 3, "formGroup"], [1, "form-control-group"], ["for", "input-name"], ["nbInput", "", "autofocus", "", "fullWidth", "", "fieldSize", "large", "id", "input-name", "formControlName", "fullName", "placeholder", "Login", 3, "status"], ["label", "Login", 3, "showMinLength", "showMaxLength", "minLength", "maxLength", "showRequired"], ["for", "input-email"], ["nbInput", "", "fullWidth", "", "fieldSize", "large", "id", "input-email", "formControlName", "email", "placeholder", "Correo", 3, "status"], ["label", "Correo", 3, "showPattern", "showRequired"], ["for", "input-role"], ["id", "role", "placeholder", "Role", 3, "formControl", "status", "selected", "selectedChange"], [3, "value", 4, "ngFor", "ngForOf"], ["label", "Role", "minLength", "3", "maxLength", "20", 3, "showMinLength", "showMaxLength", "showRequired"], ["for", "input-password"], ["nbInput", "", "fullWidth", "", "fieldSize", "large", "id", "input-password", "formControlName", "password", "type", "password", "placeholder", "Contrase\u00F1a", 3, "status"], ["label", "Contrase\u00F1a", 3, "showMinLength", "showMaxLength", "showRequired", "minLength", "maxLength"], ["for", "input-re-password"], ["nbInput", "", "fullWidth", "", "fieldSize", "large", "id", "input-re-password", "formControlName", "confirmPassword", "type", "password", "placeholder", "Password", 3, "status"], ["label", "Confirmar Contrase\u00F1a ", 3, "showMinLength", "showMaxLength", "showRequired", "minLength", "maxLength"], ["class", "caption status-danger", 4, "ngIf"], ["class", "form-control-group accept-group", 4, "ngIf"], ["nbButton", "", "fullWidth", "", "status", "primary", "size", "large", 3, "disabled", "click"], ["outline", "danger", "role", "alert"], [1, "alert-title"], [1, "alert-message-list"], ["class", "alert-message", 4, "ngFor", "ngForOf"], [1, "alert-message"], ["outline", "success", "role", "alert"], [3, "value"], [1, "caption", "status-danger"], [1, "form-control-group", "accept-group"], ["formControlName", "terms", 3, "required"], ["href", "#", "target", "_blank"]], template: function NgxRegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Registrarse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgxRegisterComponent_nb_alert_2_Template, 6, 1, "nb-alert", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgxRegisterComponent_nb_alert_3_Template, 6, 1, "nb-alert", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Login:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "ngx-validation-message", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Correo:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "ngx-validation-message", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Role:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "nb-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedChange", function NgxRegisterComponent_Template_nb_select_selectedChange_19_listener($event) { return ctx.selectedRole = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, NgxRegisterComponent_nb_option_20_Template, 2, 2, "nb-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "ngx-validation-message", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Contrase\u00F1a:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "ngx-validation-message", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Confirmar Contrase\u00F1a:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "ngx-validation-message", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, NgxRegisterComponent_p_32_Template, 2, 0, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, NgxRegisterComponent_div_33_Template, 6, 1, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxRegisterComponent_Template_button_click_34_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Registrarse ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMessages.error && (ctx.errors == null ? null : ctx.errors.length) && !ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMessages.success && (ctx.messages == null ? null : ctx.messages.length) && !ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("status", ctx.login.dirty ? ctx.login.invalid ? "danger" : "success" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-invalid", ctx.login.invalid && ctx.login.touched ? true : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showMinLength", (ctx.login == null ? null : ctx.login.hasError("minlength")) && ctx.login.touched)("showMaxLength", (ctx.login == null ? null : ctx.login.hasError("maxlength")) && ctx.login.touched)("minLength", ctx.minLoginLength)("maxLength", ctx.maxLoginLength)("showRequired", (ctx.login == null ? null : ctx.login.errors == null ? null : ctx.login.errors.Requerido) && ctx.login.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("status", ctx.email.dirty ? ctx.email.invalid ? "danger" : "success" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-invalid", ctx.email.invalid && ctx.email.touched ? true : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showPattern", (ctx.email == null ? null : ctx.email.hasError("pattern")) && ctx.email.touched)("showRequired", (ctx.email == null ? null : ctx.email.errors == null ? null : ctx.email.errors.Requerido) && ctx.email.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.role)("status", (ctx.role == null ? null : ctx.role.hasError("minlength")) || (ctx.role == null ? null : ctx.role.hasError("maxlength")) ? "danger" : "primary")("selected", ctx.selectedRole);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listaRoles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showMinLength", ctx.role == null ? null : ctx.role.hasError("minlength"))("showMaxLength", ctx.role == null ? null : ctx.role.hasError("maxlength"))("showRequired", (ctx.role == null ? null : ctx.role.errors == null ? null : ctx.role.errors.Requerido) && ctx.role.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("status", ctx.password.dirty ? ctx.password.invalid ? "danger" : "success" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showMinLength", (ctx.password == null ? null : ctx.password.hasError("minlength")) && ctx.password.touched)("showMaxLength", (ctx.password == null ? null : ctx.password.hasError("maxlength")) && ctx.password.touched)("showRequired", (ctx.password == null ? null : ctx.password.errors == null ? null : ctx.password.errors.Requerido) && ctx.password.touched)("minLength", ctx.minLength)("maxLength", ctx.maxLength);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("status", ctx.confirmPassword.dirty ? ctx.confirmPassword.invalid || ctx.password.value != ctx.confirmPassword.value ? "danger" : "success" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showMinLength", (ctx.confirmPassword == null ? null : ctx.confirmPassword.hasError("minlength")) && ctx.confirmPassword.touched)("showMaxLength", (ctx.confirmPassword == null ? null : ctx.confirmPassword.hasError("maxlength")) && ctx.confirmPassword.touched)("showRequired", (ctx.confirmPassword == null ? null : ctx.confirmPassword.errors == null ? null : ctx.confirmPassword.errors.Requerido) && ctx.confirmPassword.touched)("minLength", ctx.minLength)("maxLength", ctx.maxLength);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.password.value != ctx.confirmPassword.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getConfigValue("forms.register.terms"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-pulse", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.submitted || !ctx.registerForm.valid || !(ctx.terms == null ? null : ctx.terms.value) || ctx.password.value != ctx.confirmPassword.value || !ctx.selectedRole);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_11__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _components_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_12__["NgxValidationMessageComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_11__["NbSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_11__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_11__["NbAlertComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_11__["NbOptionComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_11__["NbCheckboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"]], styles: ["[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZWJhc3RpYW5sb3NhZGEvRG9jdW1lbnRzL01hdEJhZy9NYXRCYWcuRnJvbnRlbmRWMS9zcmMvYXBwL0BhdXRoL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0BhdXRoL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7RUNJRTtBRENGO0VBRUksbUJBQW1CO0FDQXZCIiwiZmlsZSI6InNyYy9hcHAvQGF1dGgvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQ29weXJpZ2h0IChjKSBBa3ZlbyAyMDE5LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIFNpbmdsZSBBcHBsaWNhdGlvbiAvIE11bHRpIEFwcGxpY2F0aW9uIExpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRV9TSU5HTEVfQVBQIC8gTElDRU5TRV9NVUxUSV9BUFAgaW4gdGhlICdkb2NzJyBmb2xkZXIgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24gb24gdHlwZSBvZiBwdXJjaGFzZWQgbGljZW5zZS5cbiAqL1xuOmhvc3Qge1xuICAudGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIH1cbn1cbiIsIi8qIVxuICogQ29weXJpZ2h0IChjKSBBa3ZlbyAyMDE5LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIFNpbmdsZSBBcHBsaWNhdGlvbiAvIE11bHRpIEFwcGxpY2F0aW9uIExpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRV9TSU5HTEVfQVBQIC8gTElDRU5TRV9NVUxUSV9BUFAgaW4gdGhlICdkb2NzJyBmb2xkZXIgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24gb24gdHlwZSBvZiBwdXJjaGFzZWQgbGljZW5zZS5cbiAqL1xuOmhvc3QgLnRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxRegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-register',
                styleUrls: ['./register.component.scss'],
                templateUrl: './register.component.html',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _nebular_auth__WEBPACK_IMPORTED_MODULE_3__["NbAuthService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_nebular_auth__WEBPACK_IMPORTED_MODULE_3__["NB_AUTH_OPTIONS"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"] }, { type: _apiGet_services__WEBPACK_IMPORTED_MODULE_8__["ApiGetService"] }, { type: _core_stores_user_store__WEBPACK_IMPORTED_MODULE_9__["UserStore"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@auth/components/request-password/request-password.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/@auth/components/request-password/request-password.component.ts ***!
  \*********************************************************************************/
/*! exports provided: NgxRequestPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxRequestPasswordComponent", function() { return NgxRequestPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/auth */ "./node_modules/@nebular/auth/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers */ "./src/app/@auth/helpers.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ "./src/app/@auth/components/constants.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _components_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../@components/validation-message/validation-message.component */ "./src/app/@components/validation-message/validation-message.component.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */













function NgxRequestPasswordComponent_nb_alert_4_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](error_r3);
} }
function NgxRequestPasswordComponent_nb_alert_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-alert", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Oh snap!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgxRequestPasswordComponent_nb_alert_4_li_5_Template, 2, 1, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.errors);
} }
function NgxRequestPasswordComponent_nb_alert_5_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r5);
} }
function NgxRequestPasswordComponent_nb_alert_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-alert", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Hooray!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgxRequestPasswordComponent_nb_alert_5_li_5_Template, 2, 1, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.messages);
} }
class NgxRequestPasswordComponent {
    constructor(service, options = {}, cd, fb, router) {
        this.service = service;
        this.options = options;
        this.cd = cd;
        this.fb = fb;
        this.router = router;
        this.redirectDelay = this.getConfigValue('forms.requestPassword.redirectDelay');
        this.showMessages = this.getConfigValue('forms.requestPassword.showMessages');
        this.strategy = this.getConfigValue('forms.requestPassword.strategy');
        this.isEmailRequired = this.getConfigValue('forms.validation.email.required');
        this.submitted = false;
        this.errors = [];
        this.messages = [];
        this.user = {};
    }
    get email() { return this.requestPasswordForm.get('email'); }
    ngOnInit() {
        const passwordValidators = [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_constants__WEBPACK_IMPORTED_MODULE_5__["EMAIL_PATTERN"]),
        ];
        this.isEmailRequired && passwordValidators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.requestPasswordForm = this.fb.group({
            email: this.fb.control('', [...passwordValidators]),
        });
    }
    requestPass() {
        this.user = this.requestPasswordForm.value;
        this.errors = this.messages = [];
        this.submitted = true;
        this.service.requestPassword(this.strategy, this.user).subscribe((result) => {
            this.submitted = false;
            if (result.isSuccess()) {
                this.messages = result.getMessages();
            }
            else {
                this.errors = result.getErrors();
            }
            const redirect = result.getRedirect();
            if (redirect) {
                setTimeout(() => {
                    return this.router.navigateByUrl(redirect);
                }, this.redirectDelay);
            }
            this.cd.detectChanges();
        });
    }
    getConfigValue(key) {
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["getDeepFromObject"])(this.options, key, null);
    }
}
NgxRequestPasswordComponent.ɵfac = function NgxRequestPasswordComponent_Factory(t) { return new (t || NgxRequestPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_3__["NbAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_3__["NB_AUTH_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
NgxRequestPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgxRequestPasswordComponent, selectors: [["ngx-request-password-page"]], decls: 21, vars: 10, consts: [["id", "title", 1, "title"], [1, "sub-title"], ["outline", "danger", "role", "alert", 4, "ngIf"], ["outline", "success", "role", "alert", 4, "ngIf"], ["aria-labelledby", "title", 3, "formGroup"], [1, "form-control-group"], ["for", "input-email"], ["nbInput", "", "autofocus", "", "fullWidth", "", "fieldSize", "large", "id", "input-email", "formControlName", "email", "placeholder", "Email address", 3, "status"], ["label", "Email address", 3, "showPattern", "showRequired"], ["nbButton", "", "fullWidth", "", "status", "primary", "size", "large", 3, "disabled", "click"], ["aria-label", "Sign in or sign up", 1, "sign-in-or-up"], ["routerLink", "../login", 1, "text-link"], ["routerLink", "../register", 1, "text-link"], ["outline", "danger", "role", "alert"], [1, "alert-title"], [1, "alert-message-list"], ["class", "alert-message", 4, "ngFor", "ngForOf"], [1, "alert-message"], ["outline", "success", "role", "alert"]], template: function NgxRequestPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Forgot Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Enter your email address and we\u2019ll send a link to reset your password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgxRequestPasswordComponent_nb_alert_4_Template, 6, 1, "nb-alert", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgxRequestPasswordComponent_nb_alert_5_Template, 6, 1, "nb-alert", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Email address:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "ngx-validation-message", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxRequestPasswordComponent_Template_button_click_12_listener() { return ctx.requestPass(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Request password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Back to Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.showMessages == null ? null : ctx.showMessages.error) && (ctx.errors == null ? null : ctx.errors.length) && !ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.showMessages == null ? null : ctx.showMessages.success) && (ctx.messages == null ? null : ctx.messages.length) && !ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.requestPasswordForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("status", ctx.email.dirty ? ctx.email.invalid ? "danger" : "success" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-invalid", ctx.email.invalid && ctx.email.touched ? true : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showPattern", (ctx.email == null ? null : ctx.email.hasError("pattern")) && ctx.email.touched)("showRequired", (ctx.email == null ? null : ctx.email.errors == null ? null : ctx.email.errors.required) && ctx.email.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-pulse", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.submitted || !ctx.requestPasswordForm.valid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _components_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_8__["NgxValidationMessageComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbAlertComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: ["[_nghost-%COMP%]   .form-group[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZWJhc3RpYW5sb3NhZGEvRG9jdW1lbnRzL01hdEJhZy9NYXRCYWcuRnJvbnRlbmRWMS9zcmMvYXBwL0BhdXRoL2NvbXBvbmVudHMvcmVxdWVzdC1wYXNzd29yZC9yZXF1ZXN0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9AYXV0aC9jb21wb25lbnRzL3JlcXVlc3QtcGFzc3dvcmQvcmVxdWVzdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztFQ0lFO0FEQ0Y7RUFFSSxtQkFBbUI7QUNBdkIiLCJmaWxlIjoic3JjL2FwcC9AYXV0aC9jb21wb25lbnRzL3JlcXVlc3QtcGFzc3dvcmQvcmVxdWVzdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQ29weXJpZ2h0IChjKSBBa3ZlbyAyMDE5LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIFNpbmdsZSBBcHBsaWNhdGlvbiAvIE11bHRpIEFwcGxpY2F0aW9uIExpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRV9TSU5HTEVfQVBQIC8gTElDRU5TRV9NVUxUSV9BUFAgaW4gdGhlICdkb2NzJyBmb2xkZXIgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24gb24gdHlwZSBvZiBwdXJjaGFzZWQgbGljZW5zZS5cbiAqL1xuOmhvc3Qge1xuICAuZm9ybS1ncm91cDpsYXN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4gIH1cbn1cbiIsIi8qIVxuICogQ29weXJpZ2h0IChjKSBBa3ZlbyAyMDE5LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIFNpbmdsZSBBcHBsaWNhdGlvbiAvIE11bHRpIEFwcGxpY2F0aW9uIExpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRV9TSU5HTEVfQVBQIC8gTElDRU5TRV9NVUxUSV9BUFAgaW4gdGhlICdkb2NzJyBmb2xkZXIgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24gb24gdHlwZSBvZiBwdXJjaGFzZWQgbGljZW5zZS5cbiAqL1xuOmhvc3QgLmZvcm0tZ3JvdXA6bGFzdC1vZi10eXBlIHtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxRequestPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-request-password-page',
                styleUrls: ['./request-password.component.scss'],
                templateUrl: './request-password.component.html',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _nebular_auth__WEBPACK_IMPORTED_MODULE_3__["NbAuthService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_nebular_auth__WEBPACK_IMPORTED_MODULE_3__["NB_AUTH_OPTIONS"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@auth/components/reset-password/reset-password.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/@auth/components/reset-password/reset-password.component.ts ***!
  \*****************************************************************************/
/*! exports provided: NgxResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxResetPasswordComponent", function() { return NgxResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/auth */ "./node_modules/@nebular/auth/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../@core/backend/common/api/apiGet.services */ "./src/app/@core/backend/common/api/apiGet.services.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers */ "./src/app/@auth/helpers.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_stores_user_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../@core/stores/user.store */ "./src/app/@core/stores/user.store.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _components_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../@components/validation-message/validation-message.component */ "./src/app/@components/validation-message/validation-message.component.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */



















function NgxResetPasswordComponent_nb_alert_4_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](error_r4);
} }
function NgxResetPasswordComponent_nb_alert_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-alert", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Oh snap!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgxResetPasswordComponent_nb_alert_4_li_5_Template, 2, 1, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.errors);
} }
function NgxResetPasswordComponent_nb_alert_5_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r6);
} }
function NgxResetPasswordComponent_nb_alert_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-alert", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Hooray!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgxResetPasswordComponent_nb_alert_5_li_5_Template, 2, 1, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.messages);
} }
function NgxResetPasswordComponent_p_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u00A1La contrase\u00F1a y la contrase\u00F1a de confirmaci\u00F3n no coinciden! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NgxResetPasswordComponent {
    constructor(service, options = {}, cd, fb, router, route, userStore, api, apiGetComp) {
        this.service = service;
        this.options = options;
        this.cd = cd;
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.userStore = userStore;
        this.api = api;
        this.apiGetComp = apiGetComp;
        this.minLength = this.getConfigValue('forms.validation.password.minLength');
        this.maxLength = this.getConfigValue('forms.validation.password.maxLength');
        this.redirectDelay = this.getConfigValue('forms.resetPassword.redirectDelay');
        this.showMessages = this.getConfigValue('forms.resetPassword.showMessages');
        this.strategy = this.getConfigValue('forms.resetPassword.strategy');
        this.isPasswordRequired = this.getConfigValue('forms.validation.password.required');
        this.alive = true;
        this.submitted = false;
        this.errors = [];
        this.messages = [];
        this.user = {};
        this.userId = this.route.snapshot.paramMap.get('id');
    }
    ngOnInit() {
        const passwordValidators = [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(this.minLength),
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(this.maxLength),
        ];
        this.isPasswordRequired && passwordValidators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.resetPasswordForm = this.fb.group({
            password: this.fb.control('', [...passwordValidators]),
            confirmPassword: this.fb.control('', [...passwordValidators]),
        });
    }
    get password() { return this.resetPasswordForm.get('password'); }
    get confirmPassword() { return this.resetPasswordForm.get('confirmPassword'); }
    resetPass() {
        this.errors = this.messages = [];
        this.submitted = true;
        this.user = this.resetPasswordForm.value;
        this.user.password += ';' + this.userId;
        const currentUserId = this.userStore.getUser().id;
        const currentUser = this.userStore.getUser().firstName;
        // console.log("este es el usuario: ",this.userStore.getUser().firstName);
        var respons = {
            user: currentUser,
            message: "Cambio la contraseña",
            users: currentUserId,
        };
        this.apiGetComp.PostJson(this.api.apiUrlNode1 + '/postSaveAlarmUser', respons)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeWhile"])(() => this.alive))
            .subscribe((res) => {
            //  console.log("Envió: ", res);
        });
        this.service.resetPassword(this.strategy, this.user).subscribe((result) => {
            this.submitted = false;
            if (result.isSuccess()) {
                this.messages = result.getMessages();
            }
            else {
                this.errors = result.getErrors();
            }
            const redirect = result.getRedirect();
            if (redirect) {
                setTimeout(() => {
                    return this.router.navigateByUrl('/pages/users/list');
                }, this.redirectDelay);
            }
            this.cd.detectChanges();
        });
    }
    getConfigValue(key) {
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["getDeepFromObject"])(this.options, key, null);
    }
}
NgxResetPasswordComponent.ɵfac = function NgxResetPasswordComponent_Factory(t) { return new (t || NgxResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_3__["NbAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_3__["NB_AUTH_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_stores_user_store__WEBPACK_IMPORTED_MODULE_8__["UserStore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"])); };
NgxResetPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgxResetPasswordComponent, selectors: [["ngx-reset-password-page"]], decls: 24, vars: 19, consts: [["id", "title", 1, "title"], [1, "sub-title"], ["outline", "danger", "role", "alert", 4, "ngIf"], ["outline", "success", "role", "alert", 4, "ngIf"], ["aria-labelledby", "title", 3, "formGroup"], [1, "form-control-group"], ["for", "input-password"], ["nbInput", "", "autofocus", "", "fullWidth", "", "id", "input-password", "formControlName", "password", "type", "password", "placeholder", "Contrase\u00F1a", 1, "first", 3, "status"], ["label", "Password", 3, "showMinLength", "showMaxLength", "showRequired", "minLength", "maxLength"], ["for", "input-re-password"], ["nbInput", "", "fullWidth", "", "id", "input-re-password", "formControlName", "confirmPassword", "type", "password", "placeholder", "Confirmar Contrase\u00F1a", 3, "status"], ["label", "Confirm Password", 3, "showMinLength", "showMaxLength", "showRequired", "minLength", "maxLength"], ["class", "error-message caption status-danger", 4, "ngIf"], ["nbButton", "", "status", "success", "fullWidth", "", 3, "disabled", "click"], ["aria-label", "Sign in or sign up", 1, "sign-in-or-up"], ["routerLink", "/pages/users/list", 1, "text-link"], ["outline", "danger", "role", "alert"], [1, "alert-title"], [1, "alert-message-list"], ["class", "alert-message", 4, "ngFor", "ngForOf"], [1, "alert-message"], ["outline", "success", "role", "alert"], [1, "error-message", "caption", "status-danger"]], template: function NgxResetPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cambiar la contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Por favor coloca una nueva contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgxResetPasswordComponent_nb_alert_4_Template, 6, 1, "nb-alert", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgxResetPasswordComponent_nb_alert_5_Template, 6, 1, "nb-alert", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Contrase\u00F1a:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "ngx-validation-message", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Confirmar Contrase\u00F1a:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "ngx-validation-message", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NgxResetPasswordComponent_p_17_Template, 2, 0, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxResetPasswordComponent_Template_button_click_18_listener() { return ctx.resetPass(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " CAMBIAR LA CONTRASE\u00D1A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "ATRAS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.showMessages == null ? null : ctx.showMessages.error) && (ctx.errors == null ? null : ctx.errors.length) && !ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.showMessages == null ? null : ctx.showMessages.success) && (ctx.messages == null ? null : ctx.messages.length) && !ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.resetPasswordForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("status", ctx.password.dirty ? ctx.password.invalid ? "danger" : "success" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showMinLength", (ctx.password == null ? null : ctx.password.hasError("minlength")) && ctx.password.touched)("showMaxLength", (ctx.password == null ? null : ctx.password.hasError("maxlength")) && ctx.password.touched)("showRequired", (ctx.password == null ? null : ctx.password.errors == null ? null : ctx.password.errors.required) && ctx.password.touched)("minLength", ctx.minLength)("maxLength", ctx.maxLength);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("status", ctx.confirmPassword.dirty ? ctx.confirmPassword.invalid || ctx.password.value != ctx.confirmPassword.value ? "danger" : "success" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showMinLength", (ctx.confirmPassword == null ? null : ctx.confirmPassword.hasError("minlength")) && ctx.confirmPassword.touched)("showMaxLength", (ctx.confirmPassword == null ? null : ctx.confirmPassword.hasError("maxlength")) && ctx.confirmPassword.touched)("showRequired", (ctx.confirmPassword == null ? null : ctx.confirmPassword.errors == null ? null : ctx.confirmPassword.errors.required) && ctx.confirmPassword.touched)("minLength", ctx.minLength)("maxLength", ctx.maxLength);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.password.value != ctx.confirmPassword.value && ctx.confirmPassword.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-pulse", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.submitted || !ctx.resetPasswordForm.valid || ctx.password.value != ctx.confirmPassword.value);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _components_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_11__["NgxValidationMessageComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbAlertComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"]], styles: ["[_nghost-%COMP%]   .form-group[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZWJhc3RpYW5sb3NhZGEvRG9jdW1lbnRzL01hdEJhZy9NYXRCYWcuRnJvbnRlbmRWMS9zcmMvYXBwL0BhdXRoL2NvbXBvbmVudHMvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0BhdXRoL2NvbXBvbmVudHMvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7RUNJRTtBRENGO0VBRUksbUJBQW1CO0FDQXZCIiwiZmlsZSI6InNyYy9hcHAvQGF1dGgvY29tcG9uZW50cy9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQ29weXJpZ2h0IChjKSBBa3ZlbyAyMDE5LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIFNpbmdsZSBBcHBsaWNhdGlvbiAvIE11bHRpIEFwcGxpY2F0aW9uIExpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRV9TSU5HTEVfQVBQIC8gTElDRU5TRV9NVUxUSV9BUFAgaW4gdGhlICdkb2NzJyBmb2xkZXIgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24gb24gdHlwZSBvZiBwdXJjaGFzZWQgbGljZW5zZS5cbiAqL1xuOmhvc3Qge1xuICAuZm9ybS1ncm91cDpsYXN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4gIH1cbn1cbiIsIi8qIVxuICogQ29weXJpZ2h0IChjKSBBa3ZlbyAyMDE5LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIFNpbmdsZSBBcHBsaWNhdGlvbiAvIE11bHRpIEFwcGxpY2F0aW9uIExpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRV9TSU5HTEVfQVBQIC8gTElDRU5TRV9NVUxUSV9BUFAgaW4gdGhlICdkb2NzJyBmb2xkZXIgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24gb24gdHlwZSBvZiBwdXJjaGFzZWQgbGljZW5zZS5cbiAqL1xuOmhvc3QgLmZvcm0tZ3JvdXA6bGFzdC1vZi10eXBlIHtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxResetPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-reset-password-page',
                styleUrls: ['./reset-password.component.scss'],
                templateUrl: './reset-password.component.html',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _nebular_auth__WEBPACK_IMPORTED_MODULE_3__["NbAuthService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_nebular_auth__WEBPACK_IMPORTED_MODULE_3__["NB_AUTH_OPTIONS"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _core_stores_user_store__WEBPACK_IMPORTED_MODULE_8__["UserStore"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] }, { type: _core_backend_common_api_apiGet_services__WEBPACK_IMPORTED_MODULE_5__["ApiGetService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@auth/helpers.ts":
/*!**********************************!*\
  !*** ./src/app/@auth/helpers.ts ***!
  \**********************************/
/*! exports provided: deepExtend, getDeepFromObject, urlBase64Decode, b64decode, b64DecodeUnicode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepExtend", function() { return deepExtend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDeepFromObject", function() { return getDeepFromObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlBase64Decode", function() { return urlBase64Decode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b64decode", function() { return b64decode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b64DecodeUnicode", function() { return b64DecodeUnicode; });
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */
/**
 * Extending object that entered in first argument.
 *
 * Returns extended object or false if have no target object or incorrect type.
 *
 * If you wish to clone source object (without modify it), just use empty new
 * object as first argument, like this:
 *   deepExtend({}, yourObj_1, [yourObj_N]);
 */
const deepExtend = function (...objects) {
    if (arguments.length < 1 || typeof arguments[0] !== 'object') {
        return false;
    }
    if (arguments.length < 2) {
        return arguments[0];
    }
    const target = arguments[0];
    // convert arguments to array and cut off target object
    const args = Array.prototype.slice.call(arguments, 1);
    let val, src;
    args.forEach(function (obj) {
        // skip argument if it is array or isn't object
        if (typeof obj !== 'object' || Array.isArray(obj)) {
            return;
        }
        Object.keys(obj).forEach(function (key) {
            src = target[key]; // source value
            val = obj[key]; // new value
            // recursion prevention
            if (val === target) {
                return;
                /**
                 * if new value isn't object then just overwrite by new value
                 * instead of extending.
                 */
            }
            else if (typeof val !== 'object' || val === null) {
                target[key] = val;
                return;
                // just clone arrays (and recursive clone objects inside)
            }
            else if (Array.isArray(val)) {
                target[key] = deepCloneArray(val);
                return;
                // custom cloning and overwrite for specific objects
            }
            else if (isSpecificValue(val)) {
                target[key] = cloneSpecificValue(val);
                return;
                // overwrite by new value if source isn't object or array
            }
            else if (typeof src !== 'object' || src === null || Array.isArray(src)) {
                target[key] = deepExtend({}, val);
                return;
                // source value and new value is objects both, extending...
            }
            else {
                target[key] = deepExtend(src, val);
                return;
            }
        });
    });
    return target;
};
function isSpecificValue(val) {
    return (val instanceof Date
        || val instanceof RegExp) ? true : false;
}
function cloneSpecificValue(val) {
    if (val instanceof Date) {
        return new Date(val.getTime());
    }
    else if (val instanceof RegExp) {
        return new RegExp(val);
    }
    else {
        throw new Error('cloneSpecificValue: Unexpected situation');
    }
}
/**
 * Recursive cloning array.
 */
function deepCloneArray(arr) {
    const clone = [];
    arr.forEach(function (item, index) {
        if (typeof item === 'object' && item !== null) {
            if (Array.isArray(item)) {
                clone[index] = deepCloneArray(item);
            }
            else if (isSpecificValue(item)) {
                clone[index] = cloneSpecificValue(item);
            }
            else {
                clone[index] = deepExtend({}, item);
            }
        }
        else {
            clone[index] = item;
        }
    });
    return clone;
}
// getDeepFromObject({result: {data: 1}}, 'result.data', 2); // returns 1
function getDeepFromObject(object = {}, name, defaultValue) {
    const keys = name.split('.');
    // clone the object
    let level = deepExtend({}, object || {});
    keys.forEach((k) => {
        if (level && typeof level[k] !== 'undefined') {
            level = level[k];
        }
        else {
            level = undefined;
        }
    });
    return typeof level === 'undefined' ? defaultValue : level;
}
function urlBase64Decode(str) {
    let output = str.replace(/-/g, '+').replace(/_/g, '/');
    switch (output.length % 4) {
        case 0: {
            break;
        }
        case 2: {
            output += '==';
            break;
        }
        case 3: {
            output += '=';
            break;
        }
        default: {
            throw new Error('Illegal base64url string!');
        }
    }
    return b64DecodeUnicode(output);
}
function b64decode(str) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    let output = '';
    str = String(str).replace(/=+$/, '');
    if (str.length % 4 === 1) {
        throw new Error(`'atob' failed: The string to be decoded is not correctly encoded.`);
    }
    for (
    // initialize result and counters
    let bc = 0, bs, buffer, idx = 0; 
    // get next character
    buffer = str.charAt(idx++); 
    // character found in table? initialize bit storage and add its ascii value;
    ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
        // and if not first of each 4 characters,
        // convert the first 8 bits to one ascii character
        bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0) {
        // try to find character in table (0-63, not found => -1)
        buffer = chars.indexOf(buffer);
    }
    return output;
}
// https://developer.mozilla.org/en/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
function b64DecodeUnicode(str) {
    return decodeURIComponent(Array.prototype.map.call(b64decode(str), (c) => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}


/***/ }),

/***/ "./src/app/@auth/role.provider.ts":
/*!****************************************!*\
  !*** ./src/app/@auth/role.provider.ts ***!
  \****************************************/
/*! exports provided: RoleProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleProvider", function() { return RoleProvider; });
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nebular/auth */ "./node_modules/@nebular/auth/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _nebular_security__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/security */ "./node_modules/@nebular/security/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */






class RoleProvider extends _nebular_security__WEBPACK_IMPORTED_MODULE_1__["NbRoleProvider"] {
    constructor(authService) {
        super();
        this.authService = authService;
    }
    getLowerCaseRoles(roles) {
        if (Array.isArray(roles)) {
            roles = roles.map(element => {
                return element.toLowerCase();
            });
        }
        else {
            roles = roles.toLowerCase();
        }
        return roles;
    }
    getRole() {
        return this.authService.getToken()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((token) => {
            const payload = token.getAccessTokenPayload();
            return !!(token.isValid() && payload && payload['role']) ? this.getLowerCaseRoles(payload['role']) : 'guest';
        }));
    }
}
RoleProvider.ɵfac = function RoleProvider_Factory(t) { return new (t || RoleProvider)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_0__["NbAuthService"])); };
RoleProvider.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: RoleProvider, factory: RoleProvider.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](RoleProvider, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"]
    }], function () { return [{ type: _nebular_auth__WEBPACK_IMPORTED_MODULE_0__["NbAuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@auth/roles.ts":
/*!********************************!*\
  !*** ./src/app/@auth/roles.ts ***!
  \********************************/
/*! exports provided: ROLES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROLES", function() { return ROLES; });
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */
const ROLES = {
    GUEST: 'guest',
    USER: 'user',
    ADMIN: 'admin',
    PROGRAMADOR: 'programador',
    SUPERVISOR: 'supervisor',
    OPERARIO: 'operario'
};


/***/ }),

/***/ "./src/app/@auth/user.guard.ts":
/*!*************************************!*\
  !*** ./src/app/@auth/user.guard.ts ***!
  \*************************************/
/*! exports provided: UserGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGuard", function() { return UserGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _nebular_security__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/security */ "./node_modules/@nebular/security/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _roles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./roles */ "./src/app/@auth/roles.ts");






class UserGuard {
    constructor(roleProvider) {
        this.roleProvider = roleProvider;
    }
    canActivate(next, state) {
        return this.roleProvider.getRole()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(role => {
            const roles = role instanceof Array ? role : [role];
            return roles.some(x => x && x.toLowerCase() === _roles__WEBPACK_IMPORTED_MODULE_3__["ROLES"].USER);
        }));
    }
}
UserGuard.ɵfac = function UserGuard_Factory(t) { return new (t || UserGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_nebular_security__WEBPACK_IMPORTED_MODULE_2__["NbRoleProvider"])); };
UserGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserGuard, factory: UserGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _nebular_security__WEBPACK_IMPORTED_MODULE_2__["NbRoleProvider"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@components/components.module.ts":
/*!**************************************************!*\
  !*** ./src/app/@components/components.module.ts ***!
  \**************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validation-message/validation-message.component */ "./src/app/@components/validation-message/validation-message.component.ts");
/* harmony import */ var _custom_smart_table_components_filter_by_number_filter_by_number_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./custom-smart-table-components/filter-by-number/filter-by-number.component */ "./src/app/@components/custom-smart-table-components/filter-by-number/filter-by-number.component.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */






const COMPONENTS = [
    _validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_3__["NgxValidationMessageComponent"],
    _custom_smart_table_components_filter_by_number_filter_by_number_component__WEBPACK_IMPORTED_MODULE_4__["NgxFilterByNumberComponent"],
];
class ComponentsModule {
}
ComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ComponentsModule });
ComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); }, imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentsModule, { declarations: [_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_3__["NgxValidationMessageComponent"],
        _custom_smart_table_components_filter_by_number_filter_by_number_component__WEBPACK_IMPORTED_MODULE_4__["NgxFilterByNumberComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]], exports: [_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_3__["NgxValidationMessageComponent"],
        _custom_smart_table_components_filter_by_number_filter_by_number_component__WEBPACK_IMPORTED_MODULE_4__["NgxFilterByNumberComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                ],
                exports: [...COMPONENTS],
                declarations: [...COMPONENTS],
                entryComponents: [
                    _custom_smart_table_components_filter_by_number_filter_by_number_component__WEBPACK_IMPORTED_MODULE_4__["NgxFilterByNumberComponent"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/@components/custom-smart-table-components/filter-by-number/filter-by-number.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/@components/custom-smart-table-components/filter-by-number/filter-by-number.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: NgxFilterByNumberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxFilterByNumberComponent", function() { return NgxFilterByNumberComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/__ivy_ngcc__/fesm2015/ng2-smart-table.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */







class NgxFilterByNumberComponent extends ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__["DefaultFilter"] {
    constructor() {
        super();
        this.inputControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
    }
    ngOnInit() {
        this.inputControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(this.delay))
            .subscribe((value) => {
            this.query = value !== null ? this.inputControl.value.toString() : '';
            this.setFilter();
        });
    }
    ngOnChanges(changes) {
        if (changes.query) {
            this.query = changes.query.currentValue;
            this.inputControl.setValue(this.query);
        }
    }
}
NgxFilterByNumberComponent.ɵfac = function NgxFilterByNumberComponent_Factory(t) { return new (t || NgxFilterByNumberComponent)(); };
NgxFilterByNumberComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgxFilterByNumberComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 3, consts: [["type", "number", 1, "form-control", 3, "ngClass", "formControl", "placeholder"], ["number", ""]], template: function NgxFilterByNumberComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 0, 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.inputClass)("formControl", ctx.inputControl)("placeholder", ctx.column.title);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxFilterByNumberComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                template: `
    <input
      #number
      [ngClass]="inputClass"
      [formControl]="inputControl"
      class="form-control"
      [placeholder]="column.title"
      type="number">
  `,
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/@components/validation-message/validation-message.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/@components/validation-message/validation-message.component.ts ***!
  \********************************************************************************/
/*! exports provided: NgxValidationMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxValidationMessageComponent", function() { return NgxValidationMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */




function NgxValidationMessageComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Min ", ctx_r0.label, " length is ", ctx_r0.minLength, " symbols ");
} }
function NgxValidationMessageComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Max ", ctx_r1.label, " length is ", ctx_r1.maxLength, " symbols ");
} }
function NgxValidationMessageComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Incorrect ", ctx_r2.label, " ");
} }
function NgxValidationMessageComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.label, " is required");
} }
function NgxValidationMessageComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Min value of ", ctx_r4.label, " is ", ctx_r4.min, "");
} }
function NgxValidationMessageComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Max value of ", ctx_r5.label, " is ", ctx_r5.max, "");
} }
class NgxValidationMessageComponent {
    constructor() {
        this.label = '';
    }
}
NgxValidationMessageComponent.ɵfac = function NgxValidationMessageComponent_Factory(t) { return new (t || NgxValidationMessageComponent)(); };
NgxValidationMessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgxValidationMessageComponent, selectors: [["ngx-validation-message"]], inputs: { label: "label", showRequired: "showRequired", min: "min", showMin: "showMin", max: "max", showMax: "showMax", minLength: "minLength", showMinLength: "showMinLength", maxLength: "maxLength", showMaxLength: "showMaxLength", showPattern: "showPattern" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => NgxValidationMessageComponent),
                multi: true,
            },
        ])], decls: 7, vars: 6, consts: [[1, "warning"], ["class", "caption status-danger", 4, "ngIf"], [1, "caption", "status-danger"]], template: function NgxValidationMessageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxValidationMessageComponent_span_1_Template, 2, 2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgxValidationMessageComponent_span_2_Template, 2, 2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgxValidationMessageComponent_span_3_Template, 2, 1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgxValidationMessageComponent_span_4_Template, 2, 1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgxValidationMessageComponent_span_5_Template, 2, 2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NgxValidationMessageComponent_span_6_Template, 2, 2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMinLength);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMaxLength);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showPattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showRequired);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMax);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".nb-theme-default   [_nghost-%COMP%]   .warning[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  margin-bottom: 0;\n  color: #ff3d71;\n}\n\n.nb-theme-dark   [_nghost-%COMP%]   .warning[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  margin-bottom: 0;\n  color: #ff3d71;\n}\n\n.nb-theme-cosmic   [_nghost-%COMP%]   .warning[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  margin-bottom: 0;\n  color: #ff3d71;\n}\n\n.nb-theme-corporate   [_nghost-%COMP%]   .warning[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  margin-bottom: 0;\n  color: #ff3d71;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZWJhc3RpYW5sb3NhZGEvRG9jdW1lbnRzL01hdEJhZy9NYXRCYWcuRnJvbnRlbmRWMS9zcmMvYXBwL0Bjb21wb25lbnRzL3ZhbGlkYXRpb24tbWVzc2FnZS92YWxpZGF0aW9uLW1lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0Bjb21wb25lbnRzL3ZhbGlkYXRpb24tbWVzc2FnZS92YWxpZGF0aW9uLW1lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2ViYXN0aWFubG9zYWRhL0RvY3VtZW50cy9NYXRCYWcvTWF0QmFnLkZyb250ZW5kVjEvbm9kZV9tb2R1bGVzL0BuZWJ1bGFyL3RoZW1lL3N0eWxlcy9fdGhlbWluZy5zY3NzIiwiL1VzZXJzL3NlYmFzdGlhbmxvc2FkYS9Eb2N1bWVudHMvTWF0QmFnL01hdEJhZy5Gcm9udGVuZFYxL25vZGVfbW9kdWxlcy9AbmVidWxhci90aGVtZS9zdHlsZXMvY29yZS9fbWl4aW5zLnNjc3MiLCIvVXNlcnMvc2ViYXN0aWFubG9zYWRhL0RvY3VtZW50cy9NYXRCYWcvTWF0QmFnLkZyb250ZW5kVjEvbm9kZV9tb2R1bGVzL0BuZWJ1bGFyL3RoZW1lL3N0eWxlcy9jb3JlL19mdW5jdGlvbnMuc2NzcyIsIi9Vc2Vycy9zZWJhc3RpYW5sb3NhZGEvRG9jdW1lbnRzL01hdEJhZy9NYXRCYWcuRnJvbnRlbmRWMS9ub2RlX21vZHVsZXMvQG5lYnVsYXIvdGhlbWUvc3R5bGVzL2NvcmUvX3ZhcmlhbnRzLnNjc3MiLCIvVXNlcnMvc2ViYXN0aWFubG9zYWRhL0RvY3VtZW50cy9NYXRCYWcvTWF0QmFnLkZyb250ZW5kVjEvbm9kZV9tb2R1bGVzL0BuZWJ1bGFyL3RoZW1lL3N0eWxlcy90aGVtZXMvX21hcHBpbmcuc2NzcyIsIi9Vc2Vycy9zZWJhc3RpYW5sb3NhZGEvRG9jdW1lbnRzL01hdEJhZy9NYXRCYWcuRnJvbnRlbmRWMS9ub2RlX21vZHVsZXMvQG5lYnVsYXIvdGhlbWUvc3R5bGVzL2NvcmUvdGhlbWluZy9fcmVnaXN0ZXIuc2NzcyIsIi9Vc2Vycy9zZWJhc3RpYW5sb3NhZGEvRG9jdW1lbnRzL01hdEJhZy9NYXRCYWcuRnJvbnRlbmRWMS9ub2RlX21vZHVsZXMvQG5lYnVsYXIvdGhlbWUvc3R5bGVzL2NvcmUvdGhlbWluZy9faW5zdGFsbC5zY3NzIiwiL1VzZXJzL3NlYmFzdGlhbmxvc2FkYS9Eb2N1bWVudHMvTWF0QmFnL01hdEJhZy5Gcm9udGVuZFYxL25vZGVfbW9kdWxlcy9AbmVidWxhci90aGVtZS9zdHlsZXMvY29yZS90aGVtaW5nL19nZXQtdmFsdWUuc2NzcyIsIi9Vc2Vycy9zZWJhc3RpYW5sb3NhZGEvRG9jdW1lbnRzL01hdEJhZy9NYXRCYWcuRnJvbnRlbmRWMS9ub2RlX21vZHVsZXMvQG5lYnVsYXIvdGhlbWUvc3R5bGVzL3RoZW1lcy9fZGVmYXVsdC5zY3NzIiwiL1VzZXJzL3NlYmFzdGlhbmxvc2FkYS9Eb2N1bWVudHMvTWF0QmFnL01hdEJhZy5Gcm9udGVuZFYxL25vZGVfbW9kdWxlcy9AbmVidWxhci90aGVtZS9zdHlsZXMvdGhlbWVzL19kYXJrLnNjc3MiLCIvVXNlcnMvc2ViYXN0aWFubG9zYWRhL0RvY3VtZW50cy9NYXRCYWcvTWF0QmFnLkZyb250ZW5kVjEvbm9kZV9tb2R1bGVzL0BuZWJ1bGFyL3RoZW1lL3N0eWxlcy90aGVtZXMvX2Nvc21pYy5zY3NzIiwiL1VzZXJzL3NlYmFzdGlhbmxvc2FkYS9Eb2N1bWVudHMvTWF0QmFnL01hdEJhZy5Gcm9udGVuZFYxL25vZGVfbW9kdWxlcy9AbmVidWxhci90aGVtZS9zdHlsZXMvdGhlbWVzL19jb3Jwb3JhdGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztFQ0lFO0FDSkY7Ozs7RURTRTtBQ0hGOzs7RURPRTtBRWJGOzs7O0VGa0JFO0FFc0pGOzs7O0VGakpFO0FFMktGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NGdkRDO0FHM0lEOzs7O0VIZ0pFO0FJaEpGOzs7O0VKcUpFO0FLckpGOzs7O0VMMEpFO0FNeEpGOzs7O0VONkpFO0FPL0pGOzs7O0VQb0tFO0FRcEtGOzs7O0VSeUtFO0FTektGOzs7O0VUOEtFO0FHOUtGOzs7O0VIbUxFO0FFbkxGOzs7O0VGd0xFO0FFaEJGOzs7O0VGcUJFO0FFS0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0YrR0M7QVVqVEQ7Ozs7RVZzVEU7QUd0VEY7Ozs7RUgyVEU7QUUzVEY7Ozs7RUZnVUU7QUV4SkY7Ozs7RUY2SkU7QUVuSUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0Z1UEM7QVN6YkQ7Ozs7RVQ4YkU7QUc5YkY7Ozs7RUhtY0U7QUVuY0Y7Ozs7RUZ3Y0U7QUVoU0Y7Ozs7RUZxU0U7QUUzUUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0YrWEM7QVdqa0JEOzs7O0VYc2tCRTtBR3RrQkY7Ozs7RUgya0JFO0FFM2tCRjs7OztFRmdsQkU7QUV4YUY7Ozs7RUY2YUU7QUVuWkY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0Z1Z0JDO0FVenNCRDs7OztFVjhzQkU7QUc5c0JGOzs7O0VIbXRCRTtBRW50QkY7Ozs7RUZ3dEJFO0FFaGpCRjs7OztFRnFqQkU7QUUzaEJGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NGK29CQztBU2oxQkQ7Ozs7RVRzMUJFO0FHdDFCRjs7OztFSDIxQkU7QUUzMUJGOzs7O0VGZzJCRTtBRXhyQkY7Ozs7RUY2ckJFO0FFbnFCRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDRnV4QkM7QVl6OUJEOzs7O0VaODlCRTtBRzk5QkY7Ozs7RUhtK0JFO0FFbitCRjs7OztFRncrQkU7QUVoMEJGOzs7O0VGcTBCRTtBRTN5QkY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0YrNUJDO0FTam1DRDs7OztFVHNtQ0U7QUd0bUNGOzs7O0VIMm1DRTtBRTNtQ0Y7Ozs7RUZnbkNFO0FFeDhCRjs7OztFRjY4QkU7QUVuN0JGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NGdWlDQztBTzlwQ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S1BrckNDO0FEcnZDRjtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY1VNcTRFO0FUaXZDMTRFO0FPdnJDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLUDRzQ0M7QUQvd0NGO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjVU1xNEU7QVQyd0MxNEU7QU9qdENJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tQc3VDQztBRHp5Q0Y7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNVTXE0RTtBVHF5QzE0RTtBTzN1Q0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S1Bnd0NDO0FEbjBDRjtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY1VNcTRFO0FUK3pDMTRFIiwiZmlsZSI6InNyYy9hcHAvQGNvbXBvbmVudHMvdmFsaWRhdGlvbi1tZXNzYWdlL3ZhbGlkYXRpb24tbWVzc2FnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQ29weXJpZ2h0IChjKSBBa3ZlbyAyMDE5LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIFNpbmdsZSBBcHBsaWNhdGlvbiAvIE11bHRpIEFwcGxpY2F0aW9uIExpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRV9TSU5HTEVfQVBQIC8gTElDRU5TRV9NVUxUSV9BUFAgaW4gdGhlICdkb2NzJyBmb2xkZXIgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24gb24gdHlwZSBvZiBwdXJjaGFzZWQgbGljZW5zZS5cbiAqL1xuXG5AaW1wb3J0ICcuLi8uLi9AdGhlbWUvc3R5bGVzL3RoZW1lcyc7XG5AaW5jbHVkZSBuYi1pbnN0YWxsLWNvbXBvbmVudCgpIHtcbiAgIC53YXJuaW5nIHtcbiAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICBjb2xvcjogbmItdGhlbWUoY29sb3ItZGFuZ2VyLWRlZmF1bHQpO1xuICAgfVxufVxuIiwiLyohXG4gKiBDb3B5cmlnaHQgKGMpIEFrdmVvIDIwMTkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgU2luZ2xlIEFwcGxpY2F0aW9uIC8gTXVsdGkgQXBwbGljYXRpb24gTGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFX1NJTkdMRV9BUFAgLyBMSUNFTlNFX01VTFRJX0FQUCBpbiB0aGUgJ2RvY3MnIGZvbGRlciBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbiBvbiB0eXBlIG9mIHB1cmNoYXNlZCBsaWNlbnNlLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKlxuICBEZWNsYXJlIHZhcmlhYmxlcyBiZWZvcmUgbWFraW5nIHRoZW0gZ2xvYmFsLlxuICBkYXJ0LXNhc3MgZG9lc24ndCBhbGxvdyB0byBkZWNsYXJlIHZhcmlhYmxlIHdpdGggIWdsb2JhbC5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBUaGlzIG1peGluIGdlbmVyYXRlcyBrZXlmYW1lcy5cbiAqIEJlY2F1c2Ugb2YgYWxsIGtleWZyYW1lcyBjYW4ndCBiZSBzY29wZWQsXG4gKiB3ZSBuZWVkIHRvIHB1dHMgdW5pcXVlIG5hbWUgaW4gZWFjaCBidG4tcHVsc2UgY2FsbC5cbiAqL1xuLypcblxuQWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpY2F0aW9uIChodHRwczovL3d3dy53My5vcmcvVFIvY3NzLXNjb3BpbmctMS8jaG9zdC1zZWxlY3Rvcilcbjpob3N0IGFuZCA6aG9zdC1jb250ZXh0IGFyZSBwc2V1ZG8tY2xhc3Nlcy4gU28gd2UgYXNzdW1lIHRoZXkgY291bGQgYmUgY29tYmluZWQsXG5saWtlIG90aGVyIHBzZXVkby1jbGFzc2VzLCBldmVuIHNhbWUgb25lcy5cbkZvciBleGFtcGxlOiAnOm50aC1vZi10eXBlKDJuKTpudGgtb2YtdHlwZShldmVuKScuXG5cbklkZWFsIHNvbHV0aW9uIHdvdWxkIGJlIHRvIHByZXBlbmQgYW55IHNlbGVjdG9yIHdpdGggOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pLlxuVGhlbiBuZWJ1bGFyIGNvbXBvbmVudHMgd2lsbCBiZWhhdmUgYXMgYW4gaHRtbCBlbGVtZW50IGFuZCByZXNwb25kIHRvIFtkaXJdIGF0dHJpYnV0ZSBvbiBhbnkgbGV2ZWwsXG5zbyBkaXJlY3Rpb24gY291bGQgYmUgb3ZlcnJpZGRlbiBvbiBhbnkgY29tcG9uZW50IGxldmVsLlxuXG5JbXBsZW1lbnRhdGlvbiBjb2RlOlxuXG5AbWl4aW4gbmItcnRsKCkge1xuICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgQGF0LXJvb3Qge3NlbGVjdG9yLWFwcGVuZCgnOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pJywgJil9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5BbmQgd2hlbiB3ZSBjYWxsIGl0IHNvbWV3aGVyZTpcblxuOmhvc3Qge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG46aG9zdC1jb250ZXh0KC4uLikge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG5cblJlc3VsdCB3aWxsIGxvb2sgbGlrZTpcblxuOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSAuc29tZS1jbGFzcyB7XG4gIC4uLlxufVxuXG4qXG4gIFNpZGUgbm90ZTpcbiAgOmhvc3QtY29udGV4dCgpOmhvc3Qgc2VsZWN0b3IgYXJlIHZhbGlkLiBodHRwczovL2xpc3RzLnczLm9yZy9BcmNoaXZlcy9QdWJsaWMvd3d3LXN0eWxlLzIwMTVGZWIvMDMwNS5odG1sXG5cbiAgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QtY29udGV4dCguLi4pIHNob3VsZCBtYXRjaCBhbnkgcGVybXV0YXRpb24sXG4gIHNvIG9yZGVyIGlzIG5vdCBpbXBvcnRhbnQuXG4qXG5cblxuQ3VycmVudGx5LCB0aGVyZSdyZSB0d28gcHJvYmxlbXMgd2l0aCB0aGlzIGFwcHJvYWNoOlxuXG5GaXJzdCwgaXMgdGhhdCB3ZSBjYW4ndCBjb21iaW5lIDpob3N0LCA6aG9zdC1jb250ZXh0LiBBbmd1bGFyIGJ1Z3MgIzE0MzQ5LCAjMTkxOTkuXG5Gb3IgdGhlIG1vbWVudCBvZiB3cml0aW5nLCB0aGUgb25seSBwb3NzaWJsZSB3YXkgaXM6XG46aG9zdCB7XG4gIDpob3N0LWNvbnRleHQoLi4uKSB7XG4gICAgLi4uXG4gIH1cbn1cbkl0IGRvZXNuJ3Qgd29yayBmb3IgdXMgYmVjYXVzZSBtaXhpbiBjb3VsZCBiZSBjYWxsZWQgc29tZXdoZXJlIGRlZXBlciwgbGlrZTpcbjpob3N0IHtcbiAgcCB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkgeyAuLi4gfVxuICB9XG59XG5XZSBhcmUgbm90IGFibGUgdG8gZ28gdXAgdG8gOmhvc3QgbGV2ZWwgdG8gcGxhY2UgY29udGVudCBwYXNzZWQgdG8gbWl4aW4uXG5cblRoZSBzZWNvbmQgcHJvYmxlbSBpcyB0aGF0IHdlIG9ubHkgY2FuIGJlIHN1cmUgdGhhdCB3ZSBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIGFub3RoZXJcbjpob3N0Lzpob3N0LWNvbnRleHQgcHNldWRvLWNsYXNzIHdoZW4gY2FsbGVkIGluIHRoZW1lIGZpbGVzICgqLnRoZW1lLnNjc3MpLlxuICAqXG4gICAgU2lkZSBub3RlOlxuICAgIEN1cnJlbnRseSwgbmItaW5zdGFsbC1jb21wb25lbnQgdXNlcyBhbm90aGVyIGFwcHJvYWNoIHdoZXJlIDpob3N0IHByZXBlbmRlZCB3aXRoIHRoZSB0aGVtZSBuYW1lXG4gICAgKGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi81Yjk2MDc4NjI0YjBhNDc2MGYyZGJjZjZmZGYwYmQ2Mjc5MWJlNWJiL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9zaGFkb3dfY3NzLnRzI0w0NDEpLFxuICAgIGJ1dCBpdCB3YXMgbWFkZSB0byBiZSBhYmxlIHRvIHVzZSBjdXJyZW50IHJlYWxpemF0aW9uIG9mIHJ0bCBhbmQgaXQgY2FuIGJlIHJld3JpdHRlbiBiYWNrIHRvXG4gICAgOmhvc3QtY29udGV4dCgkdGhlbWUpIG9uY2Ugd2Ugd2lsbCBiZSBhYmxlIHRvIHVzZSBtdWx0aXBsZSBzaGFkb3cgc2VsZWN0b3JzLlxuICAqXG5CdXQgd2hlbiBpdCdzIGNhbGxlZCBpbiAqLmNvbXBvbmVudC5zY3NzIHdlIGNhbid0IGJlIHN1cmUsIHRoYXQgc2VsZWN0b3Igc3RhcnRzIHdpdGggOmhvc3QvOmhvc3QtY29udGV4dCxcbmJlY2F1c2UgYW5ndWxhciBhbGxvd3Mgb21pdHRpbmcgcHNldWRvLWNsYXNzZXMgaWYgd2UgZG9uJ3QgbmVlZCB0byBzdHlsZSA6aG9zdCBjb21wb25lbnQgaXRzZWxmLlxuV2UgY2FuIGJyZWFrIHN1Y2ggc2VsZWN0b3JzLCBieSBqdXN0IGFwcGVuZGluZyA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgdG8gdGhlbS5cbiAgKioqXG4gICAgUG9zc2libGUgc29sdXRpb25cbiAgICBjaGVjayBpZiB3ZSBpbiB0aGVtZSBieSBzb21lIHRoZW1lIHZhcmlhYmxlcyBhbmQgaWYgc28gYXBwZW5kLCBvdGhlcndpc2UgbmVzdCBsaWtlXG4gICAgQGF0LXJvb3QgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHtcbiAgICAgIC8vIGFkZCAjIHRvIHNjc3MgaW50ZXJwb2xhdGlvbiBzdGF0ZW1lbnQuXG4gICAgICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgICAgIHsmfSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgIH1cbiAgICBXaGF0IGlmIDpob3N0IHNwZWNpZmllZD8gQ2FuIHdlIGFkZCBzcGFjZSBpbiA6aG9zdC1jb250ZXh0KC4uLikgOmhvc3Q/XG4gICAgT3IgbWF5YmUgYWRkIDpob3N0IHNlbGVjdG9yIGFueXdheT8gSWYgbXVsdGlwbGUgOmhvc3Qgc2VsZWN0b3JzIGFyZSBhbGxvd2VkXG4gICoqKlxuXG5cblByb2JsZW1zIHdpdGggdGhlIGN1cnJlbnQgYXBwcm9hY2guXG5cbjEuIERpcmVjdGlvbiBjYW4gYmUgYXBwbGllZCBvbmx5IG9uIGRvY3VtZW50IGxldmVsLCBiZWNhdXNlIG1peGluIHByZXBlbmRzIHRoZW1lIGNsYXNzLFxud2hpY2ggcGxhY2VkIG9uIHRoZSBib2R5LlxuMi4gKi5jb21wb25lbnQuc2NzcyBzdHlsZXMgc2hvdWxkIGJlIGluIDpob3N0IHNlbGVjdG9yLiBPdGhlcndpc2UgYW5ndWxhciB3aWxsIGFkZCBob3N0XG5hdHRyaWJ1dGUgdG8gW2Rpcj1ydGxdIGF0dHJpYnV0ZSBhcyB3ZWxsLlxuXG5cbkdlbmVyYWwgcHJvYmxlbXMuXG5cbkx0ciBpcyBkZWZhdWx0IGRvY3VtZW50IGRpcmVjdGlvbiwgYnV0IGZvciBwcm9wZXIgd29yayBvZiBuYi1sdHIgKG1lYW5zIGx0ciBvbmx5KSxcbltkaXI9bHRyXSBzaG91bGQgYmUgc3BlY2lmaWVkIGF0IGxlYXN0IHNvbWV3aGVyZS4gJzpub3QoW2Rpcj1ydGxdJyBub3QgYXBwbGljYWJsZSBoZXJlLFxuYmVjYXVzZSBpdCdzIHNhdGlzZnkgYW55IHBhcmVudCwgdGhhdCBkb24ndCBoYXZlIFtkaXI9cnRsXSBhdHRyaWJ1dGUuXG5QcmV2aW91cyBhcHByb2FjaCB3YXMgdG8gdXNlIHNpbmdsZSBydGwgbWl4aW4gYW5kIHJlc2V0IGx0ciBwcm9wZXJ0aWVzIHRvIGluaXRpYWwgdmFsdWUuXG5CdXQgc29tZXRpbWVzIGl0J3MgaGFyZCB0byBmaW5kLCB3aGF0IHRoZSBwcmV2aW91cyB2YWx1ZSBzaG91bGQgYmUuIEFuZCBzdWNoIG1peGluIGNhbGwgbG9va3MgdG9vIHZlcmJvc2UuXG4qL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBUaGlzIG1peGluIGdlbmVyYXRlcyBrZXlmYW1lcy5cbiAqIEJlY2F1c2Ugb2YgYWxsIGtleWZyYW1lcyBjYW4ndCBiZSBzY29wZWQsXG4gKiB3ZSBuZWVkIHRvIHB1dHMgdW5pcXVlIG5hbWUgaW4gZWFjaCBidG4tcHVsc2UgY2FsbC5cbiAqL1xuLypcblxuQWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpY2F0aW9uIChodHRwczovL3d3dy53My5vcmcvVFIvY3NzLXNjb3BpbmctMS8jaG9zdC1zZWxlY3Rvcilcbjpob3N0IGFuZCA6aG9zdC1jb250ZXh0IGFyZSBwc2V1ZG8tY2xhc3Nlcy4gU28gd2UgYXNzdW1lIHRoZXkgY291bGQgYmUgY29tYmluZWQsXG5saWtlIG90aGVyIHBzZXVkby1jbGFzc2VzLCBldmVuIHNhbWUgb25lcy5cbkZvciBleGFtcGxlOiAnOm50aC1vZi10eXBlKDJuKTpudGgtb2YtdHlwZShldmVuKScuXG5cbklkZWFsIHNvbHV0aW9uIHdvdWxkIGJlIHRvIHByZXBlbmQgYW55IHNlbGVjdG9yIHdpdGggOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pLlxuVGhlbiBuZWJ1bGFyIGNvbXBvbmVudHMgd2lsbCBiZWhhdmUgYXMgYW4gaHRtbCBlbGVtZW50IGFuZCByZXNwb25kIHRvIFtkaXJdIGF0dHJpYnV0ZSBvbiBhbnkgbGV2ZWwsXG5zbyBkaXJlY3Rpb24gY291bGQgYmUgb3ZlcnJpZGRlbiBvbiBhbnkgY29tcG9uZW50IGxldmVsLlxuXG5JbXBsZW1lbnRhdGlvbiBjb2RlOlxuXG5AbWl4aW4gbmItcnRsKCkge1xuICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgQGF0LXJvb3Qge3NlbGVjdG9yLWFwcGVuZCgnOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pJywgJil9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5BbmQgd2hlbiB3ZSBjYWxsIGl0IHNvbWV3aGVyZTpcblxuOmhvc3Qge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG46aG9zdC1jb250ZXh0KC4uLikge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG5cblJlc3VsdCB3aWxsIGxvb2sgbGlrZTpcblxuOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSAuc29tZS1jbGFzcyB7XG4gIC4uLlxufVxuXG4qXG4gIFNpZGUgbm90ZTpcbiAgOmhvc3QtY29udGV4dCgpOmhvc3Qgc2VsZWN0b3IgYXJlIHZhbGlkLiBodHRwczovL2xpc3RzLnczLm9yZy9BcmNoaXZlcy9QdWJsaWMvd3d3LXN0eWxlLzIwMTVGZWIvMDMwNS5odG1sXG5cbiAgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QtY29udGV4dCguLi4pIHNob3VsZCBtYXRjaCBhbnkgcGVybXV0YXRpb24sXG4gIHNvIG9yZGVyIGlzIG5vdCBpbXBvcnRhbnQuXG4qXG5cblxuQ3VycmVudGx5LCB0aGVyZSdyZSB0d28gcHJvYmxlbXMgd2l0aCB0aGlzIGFwcHJvYWNoOlxuXG5GaXJzdCwgaXMgdGhhdCB3ZSBjYW4ndCBjb21iaW5lIDpob3N0LCA6aG9zdC1jb250ZXh0LiBBbmd1bGFyIGJ1Z3MgIzE0MzQ5LCAjMTkxOTkuXG5Gb3IgdGhlIG1vbWVudCBvZiB3cml0aW5nLCB0aGUgb25seSBwb3NzaWJsZSB3YXkgaXM6XG46aG9zdCB7XG4gIDpob3N0LWNvbnRleHQoLi4uKSB7XG4gICAgLi4uXG4gIH1cbn1cbkl0IGRvZXNuJ3Qgd29yayBmb3IgdXMgYmVjYXVzZSBtaXhpbiBjb3VsZCBiZSBjYWxsZWQgc29tZXdoZXJlIGRlZXBlciwgbGlrZTpcbjpob3N0IHtcbiAgcCB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkgeyAuLi4gfVxuICB9XG59XG5XZSBhcmUgbm90IGFibGUgdG8gZ28gdXAgdG8gOmhvc3QgbGV2ZWwgdG8gcGxhY2UgY29udGVudCBwYXNzZWQgdG8gbWl4aW4uXG5cblRoZSBzZWNvbmQgcHJvYmxlbSBpcyB0aGF0IHdlIG9ubHkgY2FuIGJlIHN1cmUgdGhhdCB3ZSBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIGFub3RoZXJcbjpob3N0Lzpob3N0LWNvbnRleHQgcHNldWRvLWNsYXNzIHdoZW4gY2FsbGVkIGluIHRoZW1lIGZpbGVzICgqLnRoZW1lLnNjc3MpLlxuICAqXG4gICAgU2lkZSBub3RlOlxuICAgIEN1cnJlbnRseSwgbmItaW5zdGFsbC1jb21wb25lbnQgdXNlcyBhbm90aGVyIGFwcHJvYWNoIHdoZXJlIDpob3N0IHByZXBlbmRlZCB3aXRoIHRoZSB0aGVtZSBuYW1lXG4gICAgKGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi81Yjk2MDc4NjI0YjBhNDc2MGYyZGJjZjZmZGYwYmQ2Mjc5MWJlNWJiL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9zaGFkb3dfY3NzLnRzI0w0NDEpLFxuICAgIGJ1dCBpdCB3YXMgbWFkZSB0byBiZSBhYmxlIHRvIHVzZSBjdXJyZW50IHJlYWxpemF0aW9uIG9mIHJ0bCBhbmQgaXQgY2FuIGJlIHJld3JpdHRlbiBiYWNrIHRvXG4gICAgOmhvc3QtY29udGV4dCgkdGhlbWUpIG9uY2Ugd2Ugd2lsbCBiZSBhYmxlIHRvIHVzZSBtdWx0aXBsZSBzaGFkb3cgc2VsZWN0b3JzLlxuICAqXG5CdXQgd2hlbiBpdCdzIGNhbGxlZCBpbiAqLmNvbXBvbmVudC5zY3NzIHdlIGNhbid0IGJlIHN1cmUsIHRoYXQgc2VsZWN0b3Igc3RhcnRzIHdpdGggOmhvc3QvOmhvc3QtY29udGV4dCxcbmJlY2F1c2UgYW5ndWxhciBhbGxvd3Mgb21pdHRpbmcgcHNldWRvLWNsYXNzZXMgaWYgd2UgZG9uJ3QgbmVlZCB0byBzdHlsZSA6aG9zdCBjb21wb25lbnQgaXRzZWxmLlxuV2UgY2FuIGJyZWFrIHN1Y2ggc2VsZWN0b3JzLCBieSBqdXN0IGFwcGVuZGluZyA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgdG8gdGhlbS5cbiAgKioqXG4gICAgUG9zc2libGUgc29sdXRpb25cbiAgICBjaGVjayBpZiB3ZSBpbiB0aGVtZSBieSBzb21lIHRoZW1lIHZhcmlhYmxlcyBhbmQgaWYgc28gYXBwZW5kLCBvdGhlcndpc2UgbmVzdCBsaWtlXG4gICAgQGF0LXJvb3QgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHtcbiAgICAgIC8vIGFkZCAjIHRvIHNjc3MgaW50ZXJwb2xhdGlvbiBzdGF0ZW1lbnQuXG4gICAgICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgICAgIHsmfSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgIH1cbiAgICBXaGF0IGlmIDpob3N0IHNwZWNpZmllZD8gQ2FuIHdlIGFkZCBzcGFjZSBpbiA6aG9zdC1jb250ZXh0KC4uLikgOmhvc3Q/XG4gICAgT3IgbWF5YmUgYWRkIDpob3N0IHNlbGVjdG9yIGFueXdheT8gSWYgbXVsdGlwbGUgOmhvc3Qgc2VsZWN0b3JzIGFyZSBhbGxvd2VkXG4gICoqKlxuXG5cblByb2JsZW1zIHdpdGggdGhlIGN1cnJlbnQgYXBwcm9hY2guXG5cbjEuIERpcmVjdGlvbiBjYW4gYmUgYXBwbGllZCBvbmx5IG9uIGRvY3VtZW50IGxldmVsLCBiZWNhdXNlIG1peGluIHByZXBlbmRzIHRoZW1lIGNsYXNzLFxud2hpY2ggcGxhY2VkIG9uIHRoZSBib2R5LlxuMi4gKi5jb21wb25lbnQuc2NzcyBzdHlsZXMgc2hvdWxkIGJlIGluIDpob3N0IHNlbGVjdG9yLiBPdGhlcndpc2UgYW5ndWxhciB3aWxsIGFkZCBob3N0XG5hdHRyaWJ1dGUgdG8gW2Rpcj1ydGxdIGF0dHJpYnV0ZSBhcyB3ZWxsLlxuXG5cbkdlbmVyYWwgcHJvYmxlbXMuXG5cbkx0ciBpcyBkZWZhdWx0IGRvY3VtZW50IGRpcmVjdGlvbiwgYnV0IGZvciBwcm9wZXIgd29yayBvZiBuYi1sdHIgKG1lYW5zIGx0ciBvbmx5KSxcbltkaXI9bHRyXSBzaG91bGQgYmUgc3BlY2lmaWVkIGF0IGxlYXN0IHNvbWV3aGVyZS4gJzpub3QoW2Rpcj1ydGxdJyBub3QgYXBwbGljYWJsZSBoZXJlLFxuYmVjYXVzZSBpdCdzIHNhdGlzZnkgYW55IHBhcmVudCwgdGhhdCBkb24ndCBoYXZlIFtkaXI9cnRsXSBhdHRyaWJ1dGUuXG5QcmV2aW91cyBhcHByb2FjaCB3YXMgdG8gdXNlIHNpbmdsZSBydGwgbWl4aW4gYW5kIHJlc2V0IGx0ciBwcm9wZXJ0aWVzIHRvIGluaXRpYWwgdmFsdWUuXG5CdXQgc29tZXRpbWVzIGl0J3MgaGFyZCB0byBmaW5kLCB3aGF0IHRoZSBwcmV2aW91cyB2YWx1ZSBzaG91bGQgYmUuIEFuZCBzdWNoIG1peGluIGNhbGwgbG9va3MgdG9vIHZlcmJvc2UuXG4qL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBUaGlzIG1peGluIGdlbmVyYXRlcyBrZXlmYW1lcy5cbiAqIEJlY2F1c2Ugb2YgYWxsIGtleWZyYW1lcyBjYW4ndCBiZSBzY29wZWQsXG4gKiB3ZSBuZWVkIHRvIHB1dHMgdW5pcXVlIG5hbWUgaW4gZWFjaCBidG4tcHVsc2UgY2FsbC5cbiAqL1xuLypcblxuQWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpY2F0aW9uIChodHRwczovL3d3dy53My5vcmcvVFIvY3NzLXNjb3BpbmctMS8jaG9zdC1zZWxlY3Rvcilcbjpob3N0IGFuZCA6aG9zdC1jb250ZXh0IGFyZSBwc2V1ZG8tY2xhc3Nlcy4gU28gd2UgYXNzdW1lIHRoZXkgY291bGQgYmUgY29tYmluZWQsXG5saWtlIG90aGVyIHBzZXVkby1jbGFzc2VzLCBldmVuIHNhbWUgb25lcy5cbkZvciBleGFtcGxlOiAnOm50aC1vZi10eXBlKDJuKTpudGgtb2YtdHlwZShldmVuKScuXG5cbklkZWFsIHNvbHV0aW9uIHdvdWxkIGJlIHRvIHByZXBlbmQgYW55IHNlbGVjdG9yIHdpdGggOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pLlxuVGhlbiBuZWJ1bGFyIGNvbXBvbmVudHMgd2lsbCBiZWhhdmUgYXMgYW4gaHRtbCBlbGVtZW50IGFuZCByZXNwb25kIHRvIFtkaXJdIGF0dHJpYnV0ZSBvbiBhbnkgbGV2ZWwsXG5zbyBkaXJlY3Rpb24gY291bGQgYmUgb3ZlcnJpZGRlbiBvbiBhbnkgY29tcG9uZW50IGxldmVsLlxuXG5JbXBsZW1lbnRhdGlvbiBjb2RlOlxuXG5AbWl4aW4gbmItcnRsKCkge1xuICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgQGF0LXJvb3Qge3NlbGVjdG9yLWFwcGVuZCgnOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pJywgJil9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5BbmQgd2hlbiB3ZSBjYWxsIGl0IHNvbWV3aGVyZTpcblxuOmhvc3Qge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG46aG9zdC1jb250ZXh0KC4uLikge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG5cblJlc3VsdCB3aWxsIGxvb2sgbGlrZTpcblxuOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSAuc29tZS1jbGFzcyB7XG4gIC4uLlxufVxuXG4qXG4gIFNpZGUgbm90ZTpcbiAgOmhvc3QtY29udGV4dCgpOmhvc3Qgc2VsZWN0b3IgYXJlIHZhbGlkLiBodHRwczovL2xpc3RzLnczLm9yZy9BcmNoaXZlcy9QdWJsaWMvd3d3LXN0eWxlLzIwMTVGZWIvMDMwNS5odG1sXG5cbiAgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QtY29udGV4dCguLi4pIHNob3VsZCBtYXRjaCBhbnkgcGVybXV0YXRpb24sXG4gIHNvIG9yZGVyIGlzIG5vdCBpbXBvcnRhbnQuXG4qXG5cblxuQ3VycmVudGx5LCB0aGVyZSdyZSB0d28gcHJvYmxlbXMgd2l0aCB0aGlzIGFwcHJvYWNoOlxuXG5GaXJzdCwgaXMgdGhhdCB3ZSBjYW4ndCBjb21iaW5lIDpob3N0LCA6aG9zdC1jb250ZXh0LiBBbmd1bGFyIGJ1Z3MgIzE0MzQ5LCAjMTkxOTkuXG5Gb3IgdGhlIG1vbWVudCBvZiB3cml0aW5nLCB0aGUgb25seSBwb3NzaWJsZSB3YXkgaXM6XG46aG9zdCB7XG4gIDpob3N0LWNvbnRleHQoLi4uKSB7XG4gICAgLi4uXG4gIH1cbn1cbkl0IGRvZXNuJ3Qgd29yayBmb3IgdXMgYmVjYXVzZSBtaXhpbiBjb3VsZCBiZSBjYWxsZWQgc29tZXdoZXJlIGRlZXBlciwgbGlrZTpcbjpob3N0IHtcbiAgcCB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkgeyAuLi4gfVxuICB9XG59XG5XZSBhcmUgbm90IGFibGUgdG8gZ28gdXAgdG8gOmhvc3QgbGV2ZWwgdG8gcGxhY2UgY29udGVudCBwYXNzZWQgdG8gbWl4aW4uXG5cblRoZSBzZWNvbmQgcHJvYmxlbSBpcyB0aGF0IHdlIG9ubHkgY2FuIGJlIHN1cmUgdGhhdCB3ZSBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIGFub3RoZXJcbjpob3N0Lzpob3N0LWNvbnRleHQgcHNldWRvLWNsYXNzIHdoZW4gY2FsbGVkIGluIHRoZW1lIGZpbGVzICgqLnRoZW1lLnNjc3MpLlxuICAqXG4gICAgU2lkZSBub3RlOlxuICAgIEN1cnJlbnRseSwgbmItaW5zdGFsbC1jb21wb25lbnQgdXNlcyBhbm90aGVyIGFwcHJvYWNoIHdoZXJlIDpob3N0IHByZXBlbmRlZCB3aXRoIHRoZSB0aGVtZSBuYW1lXG4gICAgKGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi81Yjk2MDc4NjI0YjBhNDc2MGYyZGJjZjZmZGYwYmQ2Mjc5MWJlNWJiL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9zaGFkb3dfY3NzLnRzI0w0NDEpLFxuICAgIGJ1dCBpdCB3YXMgbWFkZSB0byBiZSBhYmxlIHRvIHVzZSBjdXJyZW50IHJlYWxpemF0aW9uIG9mIHJ0bCBhbmQgaXQgY2FuIGJlIHJld3JpdHRlbiBiYWNrIHRvXG4gICAgOmhvc3QtY29udGV4dCgkdGhlbWUpIG9uY2Ugd2Ugd2lsbCBiZSBhYmxlIHRvIHVzZSBtdWx0aXBsZSBzaGFkb3cgc2VsZWN0b3JzLlxuICAqXG5CdXQgd2hlbiBpdCdzIGNhbGxlZCBpbiAqLmNvbXBvbmVudC5zY3NzIHdlIGNhbid0IGJlIHN1cmUsIHRoYXQgc2VsZWN0b3Igc3RhcnRzIHdpdGggOmhvc3QvOmhvc3QtY29udGV4dCxcbmJlY2F1c2UgYW5ndWxhciBhbGxvd3Mgb21pdHRpbmcgcHNldWRvLWNsYXNzZXMgaWYgd2UgZG9uJ3QgbmVlZCB0byBzdHlsZSA6aG9zdCBjb21wb25lbnQgaXRzZWxmLlxuV2UgY2FuIGJyZWFrIHN1Y2ggc2VsZWN0b3JzLCBieSBqdXN0IGFwcGVuZGluZyA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgdG8gdGhlbS5cbiAgKioqXG4gICAgUG9zc2libGUgc29sdXRpb25cbiAgICBjaGVjayBpZiB3ZSBpbiB0aGVtZSBieSBzb21lIHRoZW1lIHZhcmlhYmxlcyBhbmQgaWYgc28gYXBwZW5kLCBvdGhlcndpc2UgbmVzdCBsaWtlXG4gICAgQGF0LXJvb3QgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHtcbiAgICAgIC8vIGFkZCAjIHRvIHNjc3MgaW50ZXJwb2xhdGlvbiBzdGF0ZW1lbnQuXG4gICAgICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgICAgIHsmfSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgIH1cbiAgICBXaGF0IGlmIDpob3N0IHNwZWNpZmllZD8gQ2FuIHdlIGFkZCBzcGFjZSBpbiA6aG9zdC1jb250ZXh0KC4uLikgOmhvc3Q/XG4gICAgT3IgbWF5YmUgYWRkIDpob3N0IHNlbGVjdG9yIGFueXdheT8gSWYgbXVsdGlwbGUgOmhvc3Qgc2VsZWN0b3JzIGFyZSBhbGxvd2VkXG4gICoqKlxuXG5cblByb2JsZW1zIHdpdGggdGhlIGN1cnJlbnQgYXBwcm9hY2guXG5cbjEuIERpcmVjdGlvbiBjYW4gYmUgYXBwbGllZCBvbmx5IG9uIGRvY3VtZW50IGxldmVsLCBiZWNhdXNlIG1peGluIHByZXBlbmRzIHRoZW1lIGNsYXNzLFxud2hpY2ggcGxhY2VkIG9uIHRoZSBib2R5LlxuMi4gKi5jb21wb25lbnQuc2NzcyBzdHlsZXMgc2hvdWxkIGJlIGluIDpob3N0IHNlbGVjdG9yLiBPdGhlcndpc2UgYW5ndWxhciB3aWxsIGFkZCBob3N0XG5hdHRyaWJ1dGUgdG8gW2Rpcj1ydGxdIGF0dHJpYnV0ZSBhcyB3ZWxsLlxuXG5cbkdlbmVyYWwgcHJvYmxlbXMuXG5cbkx0ciBpcyBkZWZhdWx0IGRvY3VtZW50IGRpcmVjdGlvbiwgYnV0IGZvciBwcm9wZXIgd29yayBvZiBuYi1sdHIgKG1lYW5zIGx0ciBvbmx5KSxcbltkaXI9bHRyXSBzaG91bGQgYmUgc3BlY2lmaWVkIGF0IGxlYXN0IHNvbWV3aGVyZS4gJzpub3QoW2Rpcj1ydGxdJyBub3QgYXBwbGljYWJsZSBoZXJlLFxuYmVjYXVzZSBpdCdzIHNhdGlzZnkgYW55IHBhcmVudCwgdGhhdCBkb24ndCBoYXZlIFtkaXI9cnRsXSBhdHRyaWJ1dGUuXG5QcmV2aW91cyBhcHByb2FjaCB3YXMgdG8gdXNlIHNpbmdsZSBydGwgbWl4aW4gYW5kIHJlc2V0IGx0ciBwcm9wZXJ0aWVzIHRvIGluaXRpYWwgdmFsdWUuXG5CdXQgc29tZXRpbWVzIGl0J3MgaGFyZCB0byBmaW5kLCB3aGF0IHRoZSBwcmV2aW91cyB2YWx1ZSBzaG91bGQgYmUuIEFuZCBzdWNoIG1peGluIGNhbGwgbG9va3MgdG9vIHZlcmJvc2UuXG4qL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBUaGlzIG1peGluIGdlbmVyYXRlcyBrZXlmYW1lcy5cbiAqIEJlY2F1c2Ugb2YgYWxsIGtleWZyYW1lcyBjYW4ndCBiZSBzY29wZWQsXG4gKiB3ZSBuZWVkIHRvIHB1dHMgdW5pcXVlIG5hbWUgaW4gZWFjaCBidG4tcHVsc2UgY2FsbC5cbiAqL1xuLypcblxuQWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpY2F0aW9uIChodHRwczovL3d3dy53My5vcmcvVFIvY3NzLXNjb3BpbmctMS8jaG9zdC1zZWxlY3Rvcilcbjpob3N0IGFuZCA6aG9zdC1jb250ZXh0IGFyZSBwc2V1ZG8tY2xhc3Nlcy4gU28gd2UgYXNzdW1lIHRoZXkgY291bGQgYmUgY29tYmluZWQsXG5saWtlIG90aGVyIHBzZXVkby1jbGFzc2VzLCBldmVuIHNhbWUgb25lcy5cbkZvciBleGFtcGxlOiAnOm50aC1vZi10eXBlKDJuKTpudGgtb2YtdHlwZShldmVuKScuXG5cbklkZWFsIHNvbHV0aW9uIHdvdWxkIGJlIHRvIHByZXBlbmQgYW55IHNlbGVjdG9yIHdpdGggOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pLlxuVGhlbiBuZWJ1bGFyIGNvbXBvbmVudHMgd2lsbCBiZWhhdmUgYXMgYW4gaHRtbCBlbGVtZW50IGFuZCByZXNwb25kIHRvIFtkaXJdIGF0dHJpYnV0ZSBvbiBhbnkgbGV2ZWwsXG5zbyBkaXJlY3Rpb24gY291bGQgYmUgb3ZlcnJpZGRlbiBvbiBhbnkgY29tcG9uZW50IGxldmVsLlxuXG5JbXBsZW1lbnRhdGlvbiBjb2RlOlxuXG5AbWl4aW4gbmItcnRsKCkge1xuICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgQGF0LXJvb3Qge3NlbGVjdG9yLWFwcGVuZCgnOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pJywgJil9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5BbmQgd2hlbiB3ZSBjYWxsIGl0IHNvbWV3aGVyZTpcblxuOmhvc3Qge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG46aG9zdC1jb250ZXh0KC4uLikge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG5cblJlc3VsdCB3aWxsIGxvb2sgbGlrZTpcblxuOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSAuc29tZS1jbGFzcyB7XG4gIC4uLlxufVxuXG4qXG4gIFNpZGUgbm90ZTpcbiAgOmhvc3QtY29udGV4dCgpOmhvc3Qgc2VsZWN0b3IgYXJlIHZhbGlkLiBodHRwczovL2xpc3RzLnczLm9yZy9BcmNoaXZlcy9QdWJsaWMvd3d3LXN0eWxlLzIwMTVGZWIvMDMwNS5odG1sXG5cbiAgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QtY29udGV4dCguLi4pIHNob3VsZCBtYXRjaCBhbnkgcGVybXV0YXRpb24sXG4gIHNvIG9yZGVyIGlzIG5vdCBpbXBvcnRhbnQuXG4qXG5cblxuQ3VycmVudGx5LCB0aGVyZSdyZSB0d28gcHJvYmxlbXMgd2l0aCB0aGlzIGFwcHJvYWNoOlxuXG5GaXJzdCwgaXMgdGhhdCB3ZSBjYW4ndCBjb21iaW5lIDpob3N0LCA6aG9zdC1jb250ZXh0LiBBbmd1bGFyIGJ1Z3MgIzE0MzQ5LCAjMTkxOTkuXG5Gb3IgdGhlIG1vbWVudCBvZiB3cml0aW5nLCB0aGUgb25seSBwb3NzaWJsZSB3YXkgaXM6XG46aG9zdCB7XG4gIDpob3N0LWNvbnRleHQoLi4uKSB7XG4gICAgLi4uXG4gIH1cbn1cbkl0IGRvZXNuJ3Qgd29yayBmb3IgdXMgYmVjYXVzZSBtaXhpbiBjb3VsZCBiZSBjYWxsZWQgc29tZXdoZXJlIGRlZXBlciwgbGlrZTpcbjpob3N0IHtcbiAgcCB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkgeyAuLi4gfVxuICB9XG59XG5XZSBhcmUgbm90IGFibGUgdG8gZ28gdXAgdG8gOmhvc3QgbGV2ZWwgdG8gcGxhY2UgY29udGVudCBwYXNzZWQgdG8gbWl4aW4uXG5cblRoZSBzZWNvbmQgcHJvYmxlbSBpcyB0aGF0IHdlIG9ubHkgY2FuIGJlIHN1cmUgdGhhdCB3ZSBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIGFub3RoZXJcbjpob3N0Lzpob3N0LWNvbnRleHQgcHNldWRvLWNsYXNzIHdoZW4gY2FsbGVkIGluIHRoZW1lIGZpbGVzICgqLnRoZW1lLnNjc3MpLlxuICAqXG4gICAgU2lkZSBub3RlOlxuICAgIEN1cnJlbnRseSwgbmItaW5zdGFsbC1jb21wb25lbnQgdXNlcyBhbm90aGVyIGFwcHJvYWNoIHdoZXJlIDpob3N0IHByZXBlbmRlZCB3aXRoIHRoZSB0aGVtZSBuYW1lXG4gICAgKGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi81Yjk2MDc4NjI0YjBhNDc2MGYyZGJjZjZmZGYwYmQ2Mjc5MWJlNWJiL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9zaGFkb3dfY3NzLnRzI0w0NDEpLFxuICAgIGJ1dCBpdCB3YXMgbWFkZSB0byBiZSBhYmxlIHRvIHVzZSBjdXJyZW50IHJlYWxpemF0aW9uIG9mIHJ0bCBhbmQgaXQgY2FuIGJlIHJld3JpdHRlbiBiYWNrIHRvXG4gICAgOmhvc3QtY29udGV4dCgkdGhlbWUpIG9uY2Ugd2Ugd2lsbCBiZSBhYmxlIHRvIHVzZSBtdWx0aXBsZSBzaGFkb3cgc2VsZWN0b3JzLlxuICAqXG5CdXQgd2hlbiBpdCdzIGNhbGxlZCBpbiAqLmNvbXBvbmVudC5zY3NzIHdlIGNhbid0IGJlIHN1cmUsIHRoYXQgc2VsZWN0b3Igc3RhcnRzIHdpdGggOmhvc3QvOmhvc3QtY29udGV4dCxcbmJlY2F1c2UgYW5ndWxhciBhbGxvd3Mgb21pdHRpbmcgcHNldWRvLWNsYXNzZXMgaWYgd2UgZG9uJ3QgbmVlZCB0byBzdHlsZSA6aG9zdCBjb21wb25lbnQgaXRzZWxmLlxuV2UgY2FuIGJyZWFrIHN1Y2ggc2VsZWN0b3JzLCBieSBqdXN0IGFwcGVuZGluZyA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgdG8gdGhlbS5cbiAgKioqXG4gICAgUG9zc2libGUgc29sdXRpb25cbiAgICBjaGVjayBpZiB3ZSBpbiB0aGVtZSBieSBzb21lIHRoZW1lIHZhcmlhYmxlcyBhbmQgaWYgc28gYXBwZW5kLCBvdGhlcndpc2UgbmVzdCBsaWtlXG4gICAgQGF0LXJvb3QgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHtcbiAgICAgIC8vIGFkZCAjIHRvIHNjc3MgaW50ZXJwb2xhdGlvbiBzdGF0ZW1lbnQuXG4gICAgICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgICAgIHsmfSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgIH1cbiAgICBXaGF0IGlmIDpob3N0IHNwZWNpZmllZD8gQ2FuIHdlIGFkZCBzcGFjZSBpbiA6aG9zdC1jb250ZXh0KC4uLikgOmhvc3Q/XG4gICAgT3IgbWF5YmUgYWRkIDpob3N0IHNlbGVjdG9yIGFueXdheT8gSWYgbXVsdGlwbGUgOmhvc3Qgc2VsZWN0b3JzIGFyZSBhbGxvd2VkXG4gICoqKlxuXG5cblByb2JsZW1zIHdpdGggdGhlIGN1cnJlbnQgYXBwcm9hY2guXG5cbjEuIERpcmVjdGlvbiBjYW4gYmUgYXBwbGllZCBvbmx5IG9uIGRvY3VtZW50IGxldmVsLCBiZWNhdXNlIG1peGluIHByZXBlbmRzIHRoZW1lIGNsYXNzLFxud2hpY2ggcGxhY2VkIG9uIHRoZSBib2R5LlxuMi4gKi5jb21wb25lbnQuc2NzcyBzdHlsZXMgc2hvdWxkIGJlIGluIDpob3N0IHNlbGVjdG9yLiBPdGhlcndpc2UgYW5ndWxhciB3aWxsIGFkZCBob3N0XG5hdHRyaWJ1dGUgdG8gW2Rpcj1ydGxdIGF0dHJpYnV0ZSBhcyB3ZWxsLlxuXG5cbkdlbmVyYWwgcHJvYmxlbXMuXG5cbkx0ciBpcyBkZWZhdWx0IGRvY3VtZW50IGRpcmVjdGlvbiwgYnV0IGZvciBwcm9wZXIgd29yayBvZiBuYi1sdHIgKG1lYW5zIGx0ciBvbmx5KSxcbltkaXI9bHRyXSBzaG91bGQgYmUgc3BlY2lmaWVkIGF0IGxlYXN0IHNvbWV3aGVyZS4gJzpub3QoW2Rpcj1ydGxdJyBub3QgYXBwbGljYWJsZSBoZXJlLFxuYmVjYXVzZSBpdCdzIHNhdGlzZnkgYW55IHBhcmVudCwgdGhhdCBkb24ndCBoYXZlIFtkaXI9cnRsXSBhdHRyaWJ1dGUuXG5QcmV2aW91cyBhcHByb2FjaCB3YXMgdG8gdXNlIHNpbmdsZSBydGwgbWl4aW4gYW5kIHJlc2V0IGx0ciBwcm9wZXJ0aWVzIHRvIGluaXRpYWwgdmFsdWUuXG5CdXQgc29tZXRpbWVzIGl0J3MgaGFyZCB0byBmaW5kLCB3aGF0IHRoZSBwcmV2aW91cyB2YWx1ZSBzaG91bGQgYmUuIEFuZCBzdWNoIG1peGluIGNhbGwgbG9va3MgdG9vIHZlcmJvc2UuXG4qL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBUaGlzIG1peGluIGdlbmVyYXRlcyBrZXlmYW1lcy5cbiAqIEJlY2F1c2Ugb2YgYWxsIGtleWZyYW1lcyBjYW4ndCBiZSBzY29wZWQsXG4gKiB3ZSBuZWVkIHRvIHB1dHMgdW5pcXVlIG5hbWUgaW4gZWFjaCBidG4tcHVsc2UgY2FsbC5cbiAqL1xuLypcblxuQWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpY2F0aW9uIChodHRwczovL3d3dy53My5vcmcvVFIvY3NzLXNjb3BpbmctMS8jaG9zdC1zZWxlY3Rvcilcbjpob3N0IGFuZCA6aG9zdC1jb250ZXh0IGFyZSBwc2V1ZG8tY2xhc3Nlcy4gU28gd2UgYXNzdW1lIHRoZXkgY291bGQgYmUgY29tYmluZWQsXG5saWtlIG90aGVyIHBzZXVkby1jbGFzc2VzLCBldmVuIHNhbWUgb25lcy5cbkZvciBleGFtcGxlOiAnOm50aC1vZi10eXBlKDJuKTpudGgtb2YtdHlwZShldmVuKScuXG5cbklkZWFsIHNvbHV0aW9uIHdvdWxkIGJlIHRvIHByZXBlbmQgYW55IHNlbGVjdG9yIHdpdGggOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pLlxuVGhlbiBuZWJ1bGFyIGNvbXBvbmVudHMgd2lsbCBiZWhhdmUgYXMgYW4gaHRtbCBlbGVtZW50IGFuZCByZXNwb25kIHRvIFtkaXJdIGF0dHJpYnV0ZSBvbiBhbnkgbGV2ZWwsXG5zbyBkaXJlY3Rpb24gY291bGQgYmUgb3ZlcnJpZGRlbiBvbiBhbnkgY29tcG9uZW50IGxldmVsLlxuXG5JbXBsZW1lbnRhdGlvbiBjb2RlOlxuXG5AbWl4aW4gbmItcnRsKCkge1xuICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgQGF0LXJvb3Qge3NlbGVjdG9yLWFwcGVuZCgnOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pJywgJil9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5BbmQgd2hlbiB3ZSBjYWxsIGl0IHNvbWV3aGVyZTpcblxuOmhvc3Qge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG46aG9zdC1jb250ZXh0KC4uLikge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG5cblJlc3VsdCB3aWxsIGxvb2sgbGlrZTpcblxuOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSAuc29tZS1jbGFzcyB7XG4gIC4uLlxufVxuXG4qXG4gIFNpZGUgbm90ZTpcbiAgOmhvc3QtY29udGV4dCgpOmhvc3Qgc2VsZWN0b3IgYXJlIHZhbGlkLiBodHRwczovL2xpc3RzLnczLm9yZy9BcmNoaXZlcy9QdWJsaWMvd3d3LXN0eWxlLzIwMTVGZWIvMDMwNS5odG1sXG5cbiAgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QtY29udGV4dCguLi4pIHNob3VsZCBtYXRjaCBhbnkgcGVybXV0YXRpb24sXG4gIHNvIG9yZGVyIGlzIG5vdCBpbXBvcnRhbnQuXG4qXG5cblxuQ3VycmVudGx5LCB0aGVyZSdyZSB0d28gcHJvYmxlbXMgd2l0aCB0aGlzIGFwcHJvYWNoOlxuXG5GaXJzdCwgaXMgdGhhdCB3ZSBjYW4ndCBjb21iaW5lIDpob3N0LCA6aG9zdC1jb250ZXh0LiBBbmd1bGFyIGJ1Z3MgIzE0MzQ5LCAjMTkxOTkuXG5Gb3IgdGhlIG1vbWVudCBvZiB3cml0aW5nLCB0aGUgb25seSBwb3NzaWJsZSB3YXkgaXM6XG46aG9zdCB7XG4gIDpob3N0LWNvbnRleHQoLi4uKSB7XG4gICAgLi4uXG4gIH1cbn1cbkl0IGRvZXNuJ3Qgd29yayBmb3IgdXMgYmVjYXVzZSBtaXhpbiBjb3VsZCBiZSBjYWxsZWQgc29tZXdoZXJlIGRlZXBlciwgbGlrZTpcbjpob3N0IHtcbiAgcCB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkgeyAuLi4gfVxuICB9XG59XG5XZSBhcmUgbm90IGFibGUgdG8gZ28gdXAgdG8gOmhvc3QgbGV2ZWwgdG8gcGxhY2UgY29udGVudCBwYXNzZWQgdG8gbWl4aW4uXG5cblRoZSBzZWNvbmQgcHJvYmxlbSBpcyB0aGF0IHdlIG9ubHkgY2FuIGJlIHN1cmUgdGhhdCB3ZSBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIGFub3RoZXJcbjpob3N0Lzpob3N0LWNvbnRleHQgcHNldWRvLWNsYXNzIHdoZW4gY2FsbGVkIGluIHRoZW1lIGZpbGVzICgqLnRoZW1lLnNjc3MpLlxuICAqXG4gICAgU2lkZSBub3RlOlxuICAgIEN1cnJlbnRseSwgbmItaW5zdGFsbC1jb21wb25lbnQgdXNlcyBhbm90aGVyIGFwcHJvYWNoIHdoZXJlIDpob3N0IHByZXBlbmRlZCB3aXRoIHRoZSB0aGVtZSBuYW1lXG4gICAgKGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi81Yjk2MDc4NjI0YjBhNDc2MGYyZGJjZjZmZGYwYmQ2Mjc5MWJlNWJiL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9zaGFkb3dfY3NzLnRzI0w0NDEpLFxuICAgIGJ1dCBpdCB3YXMgbWFkZSB0byBiZSBhYmxlIHRvIHVzZSBjdXJyZW50IHJlYWxpemF0aW9uIG9mIHJ0bCBhbmQgaXQgY2FuIGJlIHJld3JpdHRlbiBiYWNrIHRvXG4gICAgOmhvc3QtY29udGV4dCgkdGhlbWUpIG9uY2Ugd2Ugd2lsbCBiZSBhYmxlIHRvIHVzZSBtdWx0aXBsZSBzaGFkb3cgc2VsZWN0b3JzLlxuICAqXG5CdXQgd2hlbiBpdCdzIGNhbGxlZCBpbiAqLmNvbXBvbmVudC5zY3NzIHdlIGNhbid0IGJlIHN1cmUsIHRoYXQgc2VsZWN0b3Igc3RhcnRzIHdpdGggOmhvc3QvOmhvc3QtY29udGV4dCxcbmJlY2F1c2UgYW5ndWxhciBhbGxvd3Mgb21pdHRpbmcgcHNldWRvLWNsYXNzZXMgaWYgd2UgZG9uJ3QgbmVlZCB0byBzdHlsZSA6aG9zdCBjb21wb25lbnQgaXRzZWxmLlxuV2UgY2FuIGJyZWFrIHN1Y2ggc2VsZWN0b3JzLCBieSBqdXN0IGFwcGVuZGluZyA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgdG8gdGhlbS5cbiAgKioqXG4gICAgUG9zc2libGUgc29sdXRpb25cbiAgICBjaGVjayBpZiB3ZSBpbiB0aGVtZSBieSBzb21lIHRoZW1lIHZhcmlhYmxlcyBhbmQgaWYgc28gYXBwZW5kLCBvdGhlcndpc2UgbmVzdCBsaWtlXG4gICAgQGF0LXJvb3QgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHtcbiAgICAgIC8vIGFkZCAjIHRvIHNjc3MgaW50ZXJwb2xhdGlvbiBzdGF0ZW1lbnQuXG4gICAgICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgICAgIHsmfSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgIH1cbiAgICBXaGF0IGlmIDpob3N0IHNwZWNpZmllZD8gQ2FuIHdlIGFkZCBzcGFjZSBpbiA6aG9zdC1jb250ZXh0KC4uLikgOmhvc3Q/XG4gICAgT3IgbWF5YmUgYWRkIDpob3N0IHNlbGVjdG9yIGFueXdheT8gSWYgbXVsdGlwbGUgOmhvc3Qgc2VsZWN0b3JzIGFyZSBhbGxvd2VkXG4gICoqKlxuXG5cblByb2JsZW1zIHdpdGggdGhlIGN1cnJlbnQgYXBwcm9hY2guXG5cbjEuIERpcmVjdGlvbiBjYW4gYmUgYXBwbGllZCBvbmx5IG9uIGRvY3VtZW50IGxldmVsLCBiZWNhdXNlIG1peGluIHByZXBlbmRzIHRoZW1lIGNsYXNzLFxud2hpY2ggcGxhY2VkIG9uIHRoZSBib2R5LlxuMi4gKi5jb21wb25lbnQuc2NzcyBzdHlsZXMgc2hvdWxkIGJlIGluIDpob3N0IHNlbGVjdG9yLiBPdGhlcndpc2UgYW5ndWxhciB3aWxsIGFkZCBob3N0XG5hdHRyaWJ1dGUgdG8gW2Rpcj1ydGxdIGF0dHJpYnV0ZSBhcyB3ZWxsLlxuXG5cbkdlbmVyYWwgcHJvYmxlbXMuXG5cbkx0ciBpcyBkZWZhdWx0IGRvY3VtZW50IGRpcmVjdGlvbiwgYnV0IGZvciBwcm9wZXIgd29yayBvZiBuYi1sdHIgKG1lYW5zIGx0ciBvbmx5KSxcbltkaXI9bHRyXSBzaG91bGQgYmUgc3BlY2lmaWVkIGF0IGxlYXN0IHNvbWV3aGVyZS4gJzpub3QoW2Rpcj1ydGxdJyBub3QgYXBwbGljYWJsZSBoZXJlLFxuYmVjYXVzZSBpdCdzIHNhdGlzZnkgYW55IHBhcmVudCwgdGhhdCBkb24ndCBoYXZlIFtkaXI9cnRsXSBhdHRyaWJ1dGUuXG5QcmV2aW91cyBhcHByb2FjaCB3YXMgdG8gdXNlIHNpbmdsZSBydGwgbWl4aW4gYW5kIHJlc2V0IGx0ciBwcm9wZXJ0aWVzIHRvIGluaXRpYWwgdmFsdWUuXG5CdXQgc29tZXRpbWVzIGl0J3MgaGFyZCB0byBmaW5kLCB3aGF0IHRoZSBwcmV2aW91cyB2YWx1ZSBzaG91bGQgYmUuIEFuZCBzdWNoIG1peGluIGNhbGwgbG9va3MgdG9vIHZlcmJvc2UuXG4qL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBUaGlzIG1peGluIGdlbmVyYXRlcyBrZXlmYW1lcy5cbiAqIEJlY2F1c2Ugb2YgYWxsIGtleWZyYW1lcyBjYW4ndCBiZSBzY29wZWQsXG4gKiB3ZSBuZWVkIHRvIHB1dHMgdW5pcXVlIG5hbWUgaW4gZWFjaCBidG4tcHVsc2UgY2FsbC5cbiAqL1xuLypcblxuQWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpY2F0aW9uIChodHRwczovL3d3dy53My5vcmcvVFIvY3NzLXNjb3BpbmctMS8jaG9zdC1zZWxlY3Rvcilcbjpob3N0IGFuZCA6aG9zdC1jb250ZXh0IGFyZSBwc2V1ZG8tY2xhc3Nlcy4gU28gd2UgYXNzdW1lIHRoZXkgY291bGQgYmUgY29tYmluZWQsXG5saWtlIG90aGVyIHBzZXVkby1jbGFzc2VzLCBldmVuIHNhbWUgb25lcy5cbkZvciBleGFtcGxlOiAnOm50aC1vZi10eXBlKDJuKTpudGgtb2YtdHlwZShldmVuKScuXG5cbklkZWFsIHNvbHV0aW9uIHdvdWxkIGJlIHRvIHByZXBlbmQgYW55IHNlbGVjdG9yIHdpdGggOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pLlxuVGhlbiBuZWJ1bGFyIGNvbXBvbmVudHMgd2lsbCBiZWhhdmUgYXMgYW4gaHRtbCBlbGVtZW50IGFuZCByZXNwb25kIHRvIFtkaXJdIGF0dHJpYnV0ZSBvbiBhbnkgbGV2ZWwsXG5zbyBkaXJlY3Rpb24gY291bGQgYmUgb3ZlcnJpZGRlbiBvbiBhbnkgY29tcG9uZW50IGxldmVsLlxuXG5JbXBsZW1lbnRhdGlvbiBjb2RlOlxuXG5AbWl4aW4gbmItcnRsKCkge1xuICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgQGF0LXJvb3Qge3NlbGVjdG9yLWFwcGVuZCgnOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pJywgJil9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5BbmQgd2hlbiB3ZSBjYWxsIGl0IHNvbWV3aGVyZTpcblxuOmhvc3Qge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG46aG9zdC1jb250ZXh0KC4uLikge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG5cblJlc3VsdCB3aWxsIGxvb2sgbGlrZTpcblxuOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSAuc29tZS1jbGFzcyB7XG4gIC4uLlxufVxuXG4qXG4gIFNpZGUgbm90ZTpcbiAgOmhvc3QtY29udGV4dCgpOmhvc3Qgc2VsZWN0b3IgYXJlIHZhbGlkLiBodHRwczovL2xpc3RzLnczLm9yZy9BcmNoaXZlcy9QdWJsaWMvd3d3LXN0eWxlLzIwMTVGZWIvMDMwNS5odG1sXG5cbiAgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QtY29udGV4dCguLi4pIHNob3VsZCBtYXRjaCBhbnkgcGVybXV0YXRpb24sXG4gIHNvIG9yZGVyIGlzIG5vdCBpbXBvcnRhbnQuXG4qXG5cblxuQ3VycmVudGx5LCB0aGVyZSdyZSB0d28gcHJvYmxlbXMgd2l0aCB0aGlzIGFwcHJvYWNoOlxuXG5GaXJzdCwgaXMgdGhhdCB3ZSBjYW4ndCBjb21iaW5lIDpob3N0LCA6aG9zdC1jb250ZXh0LiBBbmd1bGFyIGJ1Z3MgIzE0MzQ5LCAjMTkxOTkuXG5Gb3IgdGhlIG1vbWVudCBvZiB3cml0aW5nLCB0aGUgb25seSBwb3NzaWJsZSB3YXkgaXM6XG46aG9zdCB7XG4gIDpob3N0LWNvbnRleHQoLi4uKSB7XG4gICAgLi4uXG4gIH1cbn1cbkl0IGRvZXNuJ3Qgd29yayBmb3IgdXMgYmVjYXVzZSBtaXhpbiBjb3VsZCBiZSBjYWxsZWQgc29tZXdoZXJlIGRlZXBlciwgbGlrZTpcbjpob3N0IHtcbiAgcCB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkgeyAuLi4gfVxuICB9XG59XG5XZSBhcmUgbm90IGFibGUgdG8gZ28gdXAgdG8gOmhvc3QgbGV2ZWwgdG8gcGxhY2UgY29udGVudCBwYXNzZWQgdG8gbWl4aW4uXG5cblRoZSBzZWNvbmQgcHJvYmxlbSBpcyB0aGF0IHdlIG9ubHkgY2FuIGJlIHN1cmUgdGhhdCB3ZSBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIGFub3RoZXJcbjpob3N0Lzpob3N0LWNvbnRleHQgcHNldWRvLWNsYXNzIHdoZW4gY2FsbGVkIGluIHRoZW1lIGZpbGVzICgqLnRoZW1lLnNjc3MpLlxuICAqXG4gICAgU2lkZSBub3RlOlxuICAgIEN1cnJlbnRseSwgbmItaW5zdGFsbC1jb21wb25lbnQgdXNlcyBhbm90aGVyIGFwcHJvYWNoIHdoZXJlIDpob3N0IHByZXBlbmRlZCB3aXRoIHRoZSB0aGVtZSBuYW1lXG4gICAgKGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi81Yjk2MDc4NjI0YjBhNDc2MGYyZGJjZjZmZGYwYmQ2Mjc5MWJlNWJiL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9zaGFkb3dfY3NzLnRzI0w0NDEpLFxuICAgIGJ1dCBpdCB3YXMgbWFkZSB0byBiZSBhYmxlIHRvIHVzZSBjdXJyZW50IHJlYWxpemF0aW9uIG9mIHJ0bCBhbmQgaXQgY2FuIGJlIHJld3JpdHRlbiBiYWNrIHRvXG4gICAgOmhvc3QtY29udGV4dCgkdGhlbWUpIG9uY2Ugd2Ugd2lsbCBiZSBhYmxlIHRvIHVzZSBtdWx0aXBsZSBzaGFkb3cgc2VsZWN0b3JzLlxuICAqXG5CdXQgd2hlbiBpdCdzIGNhbGxlZCBpbiAqLmNvbXBvbmVudC5zY3NzIHdlIGNhbid0IGJlIHN1cmUsIHRoYXQgc2VsZWN0b3Igc3RhcnRzIHdpdGggOmhvc3QvOmhvc3QtY29udGV4dCxcbmJlY2F1c2UgYW5ndWxhciBhbGxvd3Mgb21pdHRpbmcgcHNldWRvLWNsYXNzZXMgaWYgd2UgZG9uJ3QgbmVlZCB0byBzdHlsZSA6aG9zdCBjb21wb25lbnQgaXRzZWxmLlxuV2UgY2FuIGJyZWFrIHN1Y2ggc2VsZWN0b3JzLCBieSBqdXN0IGFwcGVuZGluZyA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgdG8gdGhlbS5cbiAgKioqXG4gICAgUG9zc2libGUgc29sdXRpb25cbiAgICBjaGVjayBpZiB3ZSBpbiB0aGVtZSBieSBzb21lIHRoZW1lIHZhcmlhYmxlcyBhbmQgaWYgc28gYXBwZW5kLCBvdGhlcndpc2UgbmVzdCBsaWtlXG4gICAgQGF0LXJvb3QgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHtcbiAgICAgIC8vIGFkZCAjIHRvIHNjc3MgaW50ZXJwb2xhdGlvbiBzdGF0ZW1lbnQuXG4gICAgICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgICAgIHsmfSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgIH1cbiAgICBXaGF0IGlmIDpob3N0IHNwZWNpZmllZD8gQ2FuIHdlIGFkZCBzcGFjZSBpbiA6aG9zdC1jb250ZXh0KC4uLikgOmhvc3Q/XG4gICAgT3IgbWF5YmUgYWRkIDpob3N0IHNlbGVjdG9yIGFueXdheT8gSWYgbXVsdGlwbGUgOmhvc3Qgc2VsZWN0b3JzIGFyZSBhbGxvd2VkXG4gICoqKlxuXG5cblByb2JsZW1zIHdpdGggdGhlIGN1cnJlbnQgYXBwcm9hY2guXG5cbjEuIERpcmVjdGlvbiBjYW4gYmUgYXBwbGllZCBvbmx5IG9uIGRvY3VtZW50IGxldmVsLCBiZWNhdXNlIG1peGluIHByZXBlbmRzIHRoZW1lIGNsYXNzLFxud2hpY2ggcGxhY2VkIG9uIHRoZSBib2R5LlxuMi4gKi5jb21wb25lbnQuc2NzcyBzdHlsZXMgc2hvdWxkIGJlIGluIDpob3N0IHNlbGVjdG9yLiBPdGhlcndpc2UgYW5ndWxhciB3aWxsIGFkZCBob3N0XG5hdHRyaWJ1dGUgdG8gW2Rpcj1ydGxdIGF0dHJpYnV0ZSBhcyB3ZWxsLlxuXG5cbkdlbmVyYWwgcHJvYmxlbXMuXG5cbkx0ciBpcyBkZWZhdWx0IGRvY3VtZW50IGRpcmVjdGlvbiwgYnV0IGZvciBwcm9wZXIgd29yayBvZiBuYi1sdHIgKG1lYW5zIGx0ciBvbmx5KSxcbltkaXI9bHRyXSBzaG91bGQgYmUgc3BlY2lmaWVkIGF0IGxlYXN0IHNvbWV3aGVyZS4gJzpub3QoW2Rpcj1ydGxdJyBub3QgYXBwbGljYWJsZSBoZXJlLFxuYmVjYXVzZSBpdCdzIHNhdGlzZnkgYW55IHBhcmVudCwgdGhhdCBkb24ndCBoYXZlIFtkaXI9cnRsXSBhdHRyaWJ1dGUuXG5QcmV2aW91cyBhcHByb2FjaCB3YXMgdG8gdXNlIHNpbmdsZSBydGwgbWl4aW4gYW5kIHJlc2V0IGx0ciBwcm9wZXJ0aWVzIHRvIGluaXRpYWwgdmFsdWUuXG5CdXQgc29tZXRpbWVzIGl0J3MgaGFyZCB0byBmaW5kLCB3aGF0IHRoZSBwcmV2aW91cyB2YWx1ZSBzaG91bGQgYmUuIEFuZCBzdWNoIG1peGluIGNhbGwgbG9va3MgdG9vIHZlcmJvc2UuXG4qL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBUaGlzIG1peGluIGdlbmVyYXRlcyBrZXlmYW1lcy5cbiAqIEJlY2F1c2Ugb2YgYWxsIGtleWZyYW1lcyBjYW4ndCBiZSBzY29wZWQsXG4gKiB3ZSBuZWVkIHRvIHB1dHMgdW5pcXVlIG5hbWUgaW4gZWFjaCBidG4tcHVsc2UgY2FsbC5cbiAqL1xuLypcblxuQWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpY2F0aW9uIChodHRwczovL3d3dy53My5vcmcvVFIvY3NzLXNjb3BpbmctMS8jaG9zdC1zZWxlY3Rvcilcbjpob3N0IGFuZCA6aG9zdC1jb250ZXh0IGFyZSBwc2V1ZG8tY2xhc3Nlcy4gU28gd2UgYXNzdW1lIHRoZXkgY291bGQgYmUgY29tYmluZWQsXG5saWtlIG90aGVyIHBzZXVkby1jbGFzc2VzLCBldmVuIHNhbWUgb25lcy5cbkZvciBleGFtcGxlOiAnOm50aC1vZi10eXBlKDJuKTpudGgtb2YtdHlwZShldmVuKScuXG5cbklkZWFsIHNvbHV0aW9uIHdvdWxkIGJlIHRvIHByZXBlbmQgYW55IHNlbGVjdG9yIHdpdGggOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pLlxuVGhlbiBuZWJ1bGFyIGNvbXBvbmVudHMgd2lsbCBiZWhhdmUgYXMgYW4gaHRtbCBlbGVtZW50IGFuZCByZXNwb25kIHRvIFtkaXJdIGF0dHJpYnV0ZSBvbiBhbnkgbGV2ZWwsXG5zbyBkaXJlY3Rpb24gY291bGQgYmUgb3ZlcnJpZGRlbiBvbiBhbnkgY29tcG9uZW50IGxldmVsLlxuXG5JbXBsZW1lbnRhdGlvbiBjb2RlOlxuXG5AbWl4aW4gbmItcnRsKCkge1xuICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgQGF0LXJvb3Qge3NlbGVjdG9yLWFwcGVuZCgnOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pJywgJil9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5BbmQgd2hlbiB3ZSBjYWxsIGl0IHNvbWV3aGVyZTpcblxuOmhvc3Qge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG46aG9zdC1jb250ZXh0KC4uLikge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG5cblJlc3VsdCB3aWxsIGxvb2sgbGlrZTpcblxuOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSAuc29tZS1jbGFzcyB7XG4gIC4uLlxufVxuXG4qXG4gIFNpZGUgbm90ZTpcbiAgOmhvc3QtY29udGV4dCgpOmhvc3Qgc2VsZWN0b3IgYXJlIHZhbGlkLiBodHRwczovL2xpc3RzLnczLm9yZy9BcmNoaXZlcy9QdWJsaWMvd3d3LXN0eWxlLzIwMTVGZWIvMDMwNS5odG1sXG5cbiAgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QtY29udGV4dCguLi4pIHNob3VsZCBtYXRjaCBhbnkgcGVybXV0YXRpb24sXG4gIHNvIG9yZGVyIGlzIG5vdCBpbXBvcnRhbnQuXG4qXG5cblxuQ3VycmVudGx5LCB0aGVyZSdyZSB0d28gcHJvYmxlbXMgd2l0aCB0aGlzIGFwcHJvYWNoOlxuXG5GaXJzdCwgaXMgdGhhdCB3ZSBjYW4ndCBjb21iaW5lIDpob3N0LCA6aG9zdC1jb250ZXh0LiBBbmd1bGFyIGJ1Z3MgIzE0MzQ5LCAjMTkxOTkuXG5Gb3IgdGhlIG1vbWVudCBvZiB3cml0aW5nLCB0aGUgb25seSBwb3NzaWJsZSB3YXkgaXM6XG46aG9zdCB7XG4gIDpob3N0LWNvbnRleHQoLi4uKSB7XG4gICAgLi4uXG4gIH1cbn1cbkl0IGRvZXNuJ3Qgd29yayBmb3IgdXMgYmVjYXVzZSBtaXhpbiBjb3VsZCBiZSBjYWxsZWQgc29tZXdoZXJlIGRlZXBlciwgbGlrZTpcbjpob3N0IHtcbiAgcCB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkgeyAuLi4gfVxuICB9XG59XG5XZSBhcmUgbm90IGFibGUgdG8gZ28gdXAgdG8gOmhvc3QgbGV2ZWwgdG8gcGxhY2UgY29udGVudCBwYXNzZWQgdG8gbWl4aW4uXG5cblRoZSBzZWNvbmQgcHJvYmxlbSBpcyB0aGF0IHdlIG9ubHkgY2FuIGJlIHN1cmUgdGhhdCB3ZSBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIGFub3RoZXJcbjpob3N0Lzpob3N0LWNvbnRleHQgcHNldWRvLWNsYXNzIHdoZW4gY2FsbGVkIGluIHRoZW1lIGZpbGVzICgqLnRoZW1lLnNjc3MpLlxuICAqXG4gICAgU2lkZSBub3RlOlxuICAgIEN1cnJlbnRseSwgbmItaW5zdGFsbC1jb21wb25lbnQgdXNlcyBhbm90aGVyIGFwcHJvYWNoIHdoZXJlIDpob3N0IHByZXBlbmRlZCB3aXRoIHRoZSB0aGVtZSBuYW1lXG4gICAgKGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi81Yjk2MDc4NjI0YjBhNDc2MGYyZGJjZjZmZGYwYmQ2Mjc5MWJlNWJiL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9zaGFkb3dfY3NzLnRzI0w0NDEpLFxuICAgIGJ1dCBpdCB3YXMgbWFkZSB0byBiZSBhYmxlIHRvIHVzZSBjdXJyZW50IHJlYWxpemF0aW9uIG9mIHJ0bCBhbmQgaXQgY2FuIGJlIHJld3JpdHRlbiBiYWNrIHRvXG4gICAgOmhvc3QtY29udGV4dCgkdGhlbWUpIG9uY2Ugd2Ugd2lsbCBiZSBhYmxlIHRvIHVzZSBtdWx0aXBsZSBzaGFkb3cgc2VsZWN0b3JzLlxuICAqXG5CdXQgd2hlbiBpdCdzIGNhbGxlZCBpbiAqLmNvbXBvbmVudC5zY3NzIHdlIGNhbid0IGJlIHN1cmUsIHRoYXQgc2VsZWN0b3Igc3RhcnRzIHdpdGggOmhvc3QvOmhvc3QtY29udGV4dCxcbmJlY2F1c2UgYW5ndWxhciBhbGxvd3Mgb21pdHRpbmcgcHNldWRvLWNsYXNzZXMgaWYgd2UgZG9uJ3QgbmVlZCB0byBzdHlsZSA6aG9zdCBjb21wb25lbnQgaXRzZWxmLlxuV2UgY2FuIGJyZWFrIHN1Y2ggc2VsZWN0b3JzLCBieSBqdXN0IGFwcGVuZGluZyA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgdG8gdGhlbS5cbiAgKioqXG4gICAgUG9zc2libGUgc29sdXRpb25cbiAgICBjaGVjayBpZiB3ZSBpbiB0aGVtZSBieSBzb21lIHRoZW1lIHZhcmlhYmxlcyBhbmQgaWYgc28gYXBwZW5kLCBvdGhlcndpc2UgbmVzdCBsaWtlXG4gICAgQGF0LXJvb3QgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHtcbiAgICAgIC8vIGFkZCAjIHRvIHNjc3MgaW50ZXJwb2xhdGlvbiBzdGF0ZW1lbnQuXG4gICAgICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgICAgIHsmfSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgIH1cbiAgICBXaGF0IGlmIDpob3N0IHNwZWNpZmllZD8gQ2FuIHdlIGFkZCBzcGFjZSBpbiA6aG9zdC1jb250ZXh0KC4uLikgOmhvc3Q/XG4gICAgT3IgbWF5YmUgYWRkIDpob3N0IHNlbGVjdG9yIGFueXdheT8gSWYgbXVsdGlwbGUgOmhvc3Qgc2VsZWN0b3JzIGFyZSBhbGxvd2VkXG4gICoqKlxuXG5cblByb2JsZW1zIHdpdGggdGhlIGN1cnJlbnQgYXBwcm9hY2guXG5cbjEuIERpcmVjdGlvbiBjYW4gYmUgYXBwbGllZCBvbmx5IG9uIGRvY3VtZW50IGxldmVsLCBiZWNhdXNlIG1peGluIHByZXBlbmRzIHRoZW1lIGNsYXNzLFxud2hpY2ggcGxhY2VkIG9uIHRoZSBib2R5LlxuMi4gKi5jb21wb25lbnQuc2NzcyBzdHlsZXMgc2hvdWxkIGJlIGluIDpob3N0IHNlbGVjdG9yLiBPdGhlcndpc2UgYW5ndWxhciB3aWxsIGFkZCBob3N0XG5hdHRyaWJ1dGUgdG8gW2Rpcj1ydGxdIGF0dHJpYnV0ZSBhcyB3ZWxsLlxuXG5cbkdlbmVyYWwgcHJvYmxlbXMuXG5cbkx0ciBpcyBkZWZhdWx0IGRvY3VtZW50IGRpcmVjdGlvbiwgYnV0IGZvciBwcm9wZXIgd29yayBvZiBuYi1sdHIgKG1lYW5zIGx0ciBvbmx5KSxcbltkaXI9bHRyXSBzaG91bGQgYmUgc3BlY2lmaWVkIGF0IGxlYXN0IHNvbWV3aGVyZS4gJzpub3QoW2Rpcj1ydGxdJyBub3QgYXBwbGljYWJsZSBoZXJlLFxuYmVjYXVzZSBpdCdzIHNhdGlzZnkgYW55IHBhcmVudCwgdGhhdCBkb24ndCBoYXZlIFtkaXI9cnRsXSBhdHRyaWJ1dGUuXG5QcmV2aW91cyBhcHByb2FjaCB3YXMgdG8gdXNlIHNpbmdsZSBydGwgbWl4aW4gYW5kIHJlc2V0IGx0ciBwcm9wZXJ0aWVzIHRvIGluaXRpYWwgdmFsdWUuXG5CdXQgc29tZXRpbWVzIGl0J3MgaGFyZCB0byBmaW5kLCB3aGF0IHRoZSBwcmV2aW91cyB2YWx1ZSBzaG91bGQgYmUuIEFuZCBzdWNoIG1peGluIGNhbGwgbG9va3MgdG9vIHZlcmJvc2UuXG4qL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBUaGlzIG1peGluIGdlbmVyYXRlcyBrZXlmYW1lcy5cbiAqIEJlY2F1c2Ugb2YgYWxsIGtleWZyYW1lcyBjYW4ndCBiZSBzY29wZWQsXG4gKiB3ZSBuZWVkIHRvIHB1dHMgdW5pcXVlIG5hbWUgaW4gZWFjaCBidG4tcHVsc2UgY2FsbC5cbiAqL1xuLypcblxuQWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpY2F0aW9uIChodHRwczovL3d3dy53My5vcmcvVFIvY3NzLXNjb3BpbmctMS8jaG9zdC1zZWxlY3Rvcilcbjpob3N0IGFuZCA6aG9zdC1jb250ZXh0IGFyZSBwc2V1ZG8tY2xhc3Nlcy4gU28gd2UgYXNzdW1lIHRoZXkgY291bGQgYmUgY29tYmluZWQsXG5saWtlIG90aGVyIHBzZXVkby1jbGFzc2VzLCBldmVuIHNhbWUgb25lcy5cbkZvciBleGFtcGxlOiAnOm50aC1vZi10eXBlKDJuKTpudGgtb2YtdHlwZShldmVuKScuXG5cbklkZWFsIHNvbHV0aW9uIHdvdWxkIGJlIHRvIHByZXBlbmQgYW55IHNlbGVjdG9yIHdpdGggOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pLlxuVGhlbiBuZWJ1bGFyIGNvbXBvbmVudHMgd2lsbCBiZWhhdmUgYXMgYW4gaHRtbCBlbGVtZW50IGFuZCByZXNwb25kIHRvIFtkaXJdIGF0dHJpYnV0ZSBvbiBhbnkgbGV2ZWwsXG5zbyBkaXJlY3Rpb24gY291bGQgYmUgb3ZlcnJpZGRlbiBvbiBhbnkgY29tcG9uZW50IGxldmVsLlxuXG5JbXBsZW1lbnRhdGlvbiBjb2RlOlxuXG5AbWl4aW4gbmItcnRsKCkge1xuICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgQGF0LXJvb3Qge3NlbGVjdG9yLWFwcGVuZCgnOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pJywgJil9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5BbmQgd2hlbiB3ZSBjYWxsIGl0IHNvbWV3aGVyZTpcblxuOmhvc3Qge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG46aG9zdC1jb250ZXh0KC4uLikge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG5cblJlc3VsdCB3aWxsIGxvb2sgbGlrZTpcblxuOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSAuc29tZS1jbGFzcyB7XG4gIC4uLlxufVxuXG4qXG4gIFNpZGUgbm90ZTpcbiAgOmhvc3QtY29udGV4dCgpOmhvc3Qgc2VsZWN0b3IgYXJlIHZhbGlkLiBodHRwczovL2xpc3RzLnczLm9yZy9BcmNoaXZlcy9QdWJsaWMvd3d3LXN0eWxlLzIwMTVGZWIvMDMwNS5odG1sXG5cbiAgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QtY29udGV4dCguLi4pIHNob3VsZCBtYXRjaCBhbnkgcGVybXV0YXRpb24sXG4gIHNvIG9yZGVyIGlzIG5vdCBpbXBvcnRhbnQuXG4qXG5cblxuQ3VycmVudGx5LCB0aGVyZSdyZSB0d28gcHJvYmxlbXMgd2l0aCB0aGlzIGFwcHJvYWNoOlxuXG5GaXJzdCwgaXMgdGhhdCB3ZSBjYW4ndCBjb21iaW5lIDpob3N0LCA6aG9zdC1jb250ZXh0LiBBbmd1bGFyIGJ1Z3MgIzE0MzQ5LCAjMTkxOTkuXG5Gb3IgdGhlIG1vbWVudCBvZiB3cml0aW5nLCB0aGUgb25seSBwb3NzaWJsZSB3YXkgaXM6XG46aG9zdCB7XG4gIDpob3N0LWNvbnRleHQoLi4uKSB7XG4gICAgLi4uXG4gIH1cbn1cbkl0IGRvZXNuJ3Qgd29yayBmb3IgdXMgYmVjYXVzZSBtaXhpbiBjb3VsZCBiZSBjYWxsZWQgc29tZXdoZXJlIGRlZXBlciwgbGlrZTpcbjpob3N0IHtcbiAgcCB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkgeyAuLi4gfVxuICB9XG59XG5XZSBhcmUgbm90IGFibGUgdG8gZ28gdXAgdG8gOmhvc3QgbGV2ZWwgdG8gcGxhY2UgY29udGVudCBwYXNzZWQgdG8gbWl4aW4uXG5cblRoZSBzZWNvbmQgcHJvYmxlbSBpcyB0aGF0IHdlIG9ubHkgY2FuIGJlIHN1cmUgdGhhdCB3ZSBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIGFub3RoZXJcbjpob3N0Lzpob3N0LWNvbnRleHQgcHNldWRvLWNsYXNzIHdoZW4gY2FsbGVkIGluIHRoZW1lIGZpbGVzICgqLnRoZW1lLnNjc3MpLlxuICAqXG4gICAgU2lkZSBub3RlOlxuICAgIEN1cnJlbnRseSwgbmItaW5zdGFsbC1jb21wb25lbnQgdXNlcyBhbm90aGVyIGFwcHJvYWNoIHdoZXJlIDpob3N0IHByZXBlbmRlZCB3aXRoIHRoZSB0aGVtZSBuYW1lXG4gICAgKGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi81Yjk2MDc4NjI0YjBhNDc2MGYyZGJjZjZmZGYwYmQ2Mjc5MWJlNWJiL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9zaGFkb3dfY3NzLnRzI0w0NDEpLFxuICAgIGJ1dCBpdCB3YXMgbWFkZSB0byBiZSBhYmxlIHRvIHVzZSBjdXJyZW50IHJlYWxpemF0aW9uIG9mIHJ0bCBhbmQgaXQgY2FuIGJlIHJld3JpdHRlbiBiYWNrIHRvXG4gICAgOmhvc3QtY29udGV4dCgkdGhlbWUpIG9uY2Ugd2Ugd2lsbCBiZSBhYmxlIHRvIHVzZSBtdWx0aXBsZSBzaGFkb3cgc2VsZWN0b3JzLlxuICAqXG5CdXQgd2hlbiBpdCdzIGNhbGxlZCBpbiAqLmNvbXBvbmVudC5zY3NzIHdlIGNhbid0IGJlIHN1cmUsIHRoYXQgc2VsZWN0b3Igc3RhcnRzIHdpdGggOmhvc3QvOmhvc3QtY29udGV4dCxcbmJlY2F1c2UgYW5ndWxhciBhbGxvd3Mgb21pdHRpbmcgcHNldWRvLWNsYXNzZXMgaWYgd2UgZG9uJ3QgbmVlZCB0byBzdHlsZSA6aG9zdCBjb21wb25lbnQgaXRzZWxmLlxuV2UgY2FuIGJyZWFrIHN1Y2ggc2VsZWN0b3JzLCBieSBqdXN0IGFwcGVuZGluZyA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgdG8gdGhlbS5cbiAgKioqXG4gICAgUG9zc2libGUgc29sdXRpb25cbiAgICBjaGVjayBpZiB3ZSBpbiB0aGVtZSBieSBzb21lIHRoZW1lIHZhcmlhYmxlcyBhbmQgaWYgc28gYXBwZW5kLCBvdGhlcndpc2UgbmVzdCBsaWtlXG4gICAgQGF0LXJvb3QgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHtcbiAgICAgIC8vIGFkZCAjIHRvIHNjc3MgaW50ZXJwb2xhdGlvbiBzdGF0ZW1lbnQuXG4gICAgICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgICAgIHsmfSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgIH1cbiAgICBXaGF0IGlmIDpob3N0IHNwZWNpZmllZD8gQ2FuIHdlIGFkZCBzcGFjZSBpbiA6aG9zdC1jb250ZXh0KC4uLikgOmhvc3Q/XG4gICAgT3IgbWF5YmUgYWRkIDpob3N0IHNlbGVjdG9yIGFueXdheT8gSWYgbXVsdGlwbGUgOmhvc3Qgc2VsZWN0b3JzIGFyZSBhbGxvd2VkXG4gICoqKlxuXG5cblByb2JsZW1zIHdpdGggdGhlIGN1cnJlbnQgYXBwcm9hY2guXG5cbjEuIERpcmVjdGlvbiBjYW4gYmUgYXBwbGllZCBvbmx5IG9uIGRvY3VtZW50IGxldmVsLCBiZWNhdXNlIG1peGluIHByZXBlbmRzIHRoZW1lIGNsYXNzLFxud2hpY2ggcGxhY2VkIG9uIHRoZSBib2R5LlxuMi4gKi5jb21wb25lbnQuc2NzcyBzdHlsZXMgc2hvdWxkIGJlIGluIDpob3N0IHNlbGVjdG9yLiBPdGhlcndpc2UgYW5ndWxhciB3aWxsIGFkZCBob3N0XG5hdHRyaWJ1dGUgdG8gW2Rpcj1ydGxdIGF0dHJpYnV0ZSBhcyB3ZWxsLlxuXG5cbkdlbmVyYWwgcHJvYmxlbXMuXG5cbkx0ciBpcyBkZWZhdWx0IGRvY3VtZW50IGRpcmVjdGlvbiwgYnV0IGZvciBwcm9wZXIgd29yayBvZiBuYi1sdHIgKG1lYW5zIGx0ciBvbmx5KSxcbltkaXI9bHRyXSBzaG91bGQgYmUgc3BlY2lmaWVkIGF0IGxlYXN0IHNvbWV3aGVyZS4gJzpub3QoW2Rpcj1ydGxdJyBub3QgYXBwbGljYWJsZSBoZXJlLFxuYmVjYXVzZSBpdCdzIHNhdGlzZnkgYW55IHBhcmVudCwgdGhhdCBkb24ndCBoYXZlIFtkaXI9cnRsXSBhdHRyaWJ1dGUuXG5QcmV2aW91cyBhcHByb2FjaCB3YXMgdG8gdXNlIHNpbmdsZSBydGwgbWl4aW4gYW5kIHJlc2V0IGx0ciBwcm9wZXJ0aWVzIHRvIGluaXRpYWwgdmFsdWUuXG5CdXQgc29tZXRpbWVzIGl0J3MgaGFyZCB0byBmaW5kLCB3aGF0IHRoZSBwcmV2aW91cyB2YWx1ZSBzaG91bGQgYmUuIEFuZCBzdWNoIG1peGluIGNhbGwgbG9va3MgdG9vIHZlcmJvc2UuXG4qL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBUaGlzIG1peGluIGdlbmVyYXRlcyBrZXlmYW1lcy5cbiAqIEJlY2F1c2Ugb2YgYWxsIGtleWZyYW1lcyBjYW4ndCBiZSBzY29wZWQsXG4gKiB3ZSBuZWVkIHRvIHB1dHMgdW5pcXVlIG5hbWUgaW4gZWFjaCBidG4tcHVsc2UgY2FsbC5cbiAqL1xuLypcblxuQWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpY2F0aW9uIChodHRwczovL3d3dy53My5vcmcvVFIvY3NzLXNjb3BpbmctMS8jaG9zdC1zZWxlY3Rvcilcbjpob3N0IGFuZCA6aG9zdC1jb250ZXh0IGFyZSBwc2V1ZG8tY2xhc3Nlcy4gU28gd2UgYXNzdW1lIHRoZXkgY291bGQgYmUgY29tYmluZWQsXG5saWtlIG90aGVyIHBzZXVkby1jbGFzc2VzLCBldmVuIHNhbWUgb25lcy5cbkZvciBleGFtcGxlOiAnOm50aC1vZi10eXBlKDJuKTpudGgtb2YtdHlwZShldmVuKScuXG5cbklkZWFsIHNvbHV0aW9uIHdvdWxkIGJlIHRvIHByZXBlbmQgYW55IHNlbGVjdG9yIHdpdGggOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pLlxuVGhlbiBuZWJ1bGFyIGNvbXBvbmVudHMgd2lsbCBiZWhhdmUgYXMgYW4gaHRtbCBlbGVtZW50IGFuZCByZXNwb25kIHRvIFtkaXJdIGF0dHJpYnV0ZSBvbiBhbnkgbGV2ZWwsXG5zbyBkaXJlY3Rpb24gY291bGQgYmUgb3ZlcnJpZGRlbiBvbiBhbnkgY29tcG9uZW50IGxldmVsLlxuXG5JbXBsZW1lbnRhdGlvbiBjb2RlOlxuXG5AbWl4aW4gbmItcnRsKCkge1xuICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgQGF0LXJvb3Qge3NlbGVjdG9yLWFwcGVuZCgnOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pJywgJil9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5BbmQgd2hlbiB3ZSBjYWxsIGl0IHNvbWV3aGVyZTpcblxuOmhvc3Qge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG46aG9zdC1jb250ZXh0KC4uLikge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG5cblJlc3VsdCB3aWxsIGxvb2sgbGlrZTpcblxuOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSAuc29tZS1jbGFzcyB7XG4gIC4uLlxufVxuXG4qXG4gIFNpZGUgbm90ZTpcbiAgOmhvc3QtY29udGV4dCgpOmhvc3Qgc2VsZWN0b3IgYXJlIHZhbGlkLiBodHRwczovL2xpc3RzLnczLm9yZy9BcmNoaXZlcy9QdWJsaWMvd3d3LXN0eWxlLzIwMTVGZWIvMDMwNS5odG1sXG5cbiAgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QtY29udGV4dCguLi4pIHNob3VsZCBtYXRjaCBhbnkgcGVybXV0YXRpb24sXG4gIHNvIG9yZGVyIGlzIG5vdCBpbXBvcnRhbnQuXG4qXG5cblxuQ3VycmVudGx5LCB0aGVyZSdyZSB0d28gcHJvYmxlbXMgd2l0aCB0aGlzIGFwcHJvYWNoOlxuXG5GaXJzdCwgaXMgdGhhdCB3ZSBjYW4ndCBjb21iaW5lIDpob3N0LCA6aG9zdC1jb250ZXh0LiBBbmd1bGFyIGJ1Z3MgIzE0MzQ5LCAjMTkxOTkuXG5Gb3IgdGhlIG1vbWVudCBvZiB3cml0aW5nLCB0aGUgb25seSBwb3NzaWJsZSB3YXkgaXM6XG46aG9zdCB7XG4gIDpob3N0LWNvbnRleHQoLi4uKSB7XG4gICAgLi4uXG4gIH1cbn1cbkl0IGRvZXNuJ3Qgd29yayBmb3IgdXMgYmVjYXVzZSBtaXhpbiBjb3VsZCBiZSBjYWxsZWQgc29tZXdoZXJlIGRlZXBlciwgbGlrZTpcbjpob3N0IHtcbiAgcCB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkgeyAuLi4gfVxuICB9XG59XG5XZSBhcmUgbm90IGFibGUgdG8gZ28gdXAgdG8gOmhvc3QgbGV2ZWwgdG8gcGxhY2UgY29udGVudCBwYXNzZWQgdG8gbWl4aW4uXG5cblRoZSBzZWNvbmQgcHJvYmxlbSBpcyB0aGF0IHdlIG9ubHkgY2FuIGJlIHN1cmUgdGhhdCB3ZSBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIGFub3RoZXJcbjpob3N0Lzpob3N0LWNvbnRleHQgcHNldWRvLWNsYXNzIHdoZW4gY2FsbGVkIGluIHRoZW1lIGZpbGVzICgqLnRoZW1lLnNjc3MpLlxuICAqXG4gICAgU2lkZSBub3RlOlxuICAgIEN1cnJlbnRseSwgbmItaW5zdGFsbC1jb21wb25lbnQgdXNlcyBhbm90aGVyIGFwcHJvYWNoIHdoZXJlIDpob3N0IHByZXBlbmRlZCB3aXRoIHRoZSB0aGVtZSBuYW1lXG4gICAgKGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi81Yjk2MDc4NjI0YjBhNDc2MGYyZGJjZjZmZGYwYmQ2Mjc5MWJlNWJiL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9zaGFkb3dfY3NzLnRzI0w0NDEpLFxuICAgIGJ1dCBpdCB3YXMgbWFkZSB0byBiZSBhYmxlIHRvIHVzZSBjdXJyZW50IHJlYWxpemF0aW9uIG9mIHJ0bCBhbmQgaXQgY2FuIGJlIHJld3JpdHRlbiBiYWNrIHRvXG4gICAgOmhvc3QtY29udGV4dCgkdGhlbWUpIG9uY2Ugd2Ugd2lsbCBiZSBhYmxlIHRvIHVzZSBtdWx0aXBsZSBzaGFkb3cgc2VsZWN0b3JzLlxuICAqXG5CdXQgd2hlbiBpdCdzIGNhbGxlZCBpbiAqLmNvbXBvbmVudC5zY3NzIHdlIGNhbid0IGJlIHN1cmUsIHRoYXQgc2VsZWN0b3Igc3RhcnRzIHdpdGggOmhvc3QvOmhvc3QtY29udGV4dCxcbmJlY2F1c2UgYW5ndWxhciBhbGxvd3Mgb21pdHRpbmcgcHNldWRvLWNsYXNzZXMgaWYgd2UgZG9uJ3QgbmVlZCB0byBzdHlsZSA6aG9zdCBjb21wb25lbnQgaXRzZWxmLlxuV2UgY2FuIGJyZWFrIHN1Y2ggc2VsZWN0b3JzLCBieSBqdXN0IGFwcGVuZGluZyA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgdG8gdGhlbS5cbiAgKioqXG4gICAgUG9zc2libGUgc29sdXRpb25cbiAgICBjaGVjayBpZiB3ZSBpbiB0aGVtZSBieSBzb21lIHRoZW1lIHZhcmlhYmxlcyBhbmQgaWYgc28gYXBwZW5kLCBvdGhlcndpc2UgbmVzdCBsaWtlXG4gICAgQGF0LXJvb3QgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHtcbiAgICAgIC8vIGFkZCAjIHRvIHNjc3MgaW50ZXJwb2xhdGlvbiBzdGF0ZW1lbnQuXG4gICAgICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgICAgIHsmfSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgIH1cbiAgICBXaGF0IGlmIDpob3N0IHNwZWNpZmllZD8gQ2FuIHdlIGFkZCBzcGFjZSBpbiA6aG9zdC1jb250ZXh0KC4uLikgOmhvc3Q/XG4gICAgT3IgbWF5YmUgYWRkIDpob3N0IHNlbGVjdG9yIGFueXdheT8gSWYgbXVsdGlwbGUgOmhvc3Qgc2VsZWN0b3JzIGFyZSBhbGxvd2VkXG4gICoqKlxuXG5cblByb2JsZW1zIHdpdGggdGhlIGN1cnJlbnQgYXBwcm9hY2guXG5cbjEuIERpcmVjdGlvbiBjYW4gYmUgYXBwbGllZCBvbmx5IG9uIGRvY3VtZW50IGxldmVsLCBiZWNhdXNlIG1peGluIHByZXBlbmRzIHRoZW1lIGNsYXNzLFxud2hpY2ggcGxhY2VkIG9uIHRoZSBib2R5LlxuMi4gKi5jb21wb25lbnQuc2NzcyBzdHlsZXMgc2hvdWxkIGJlIGluIDpob3N0IHNlbGVjdG9yLiBPdGhlcndpc2UgYW5ndWxhciB3aWxsIGFkZCBob3N0XG5hdHRyaWJ1dGUgdG8gW2Rpcj1ydGxdIGF0dHJpYnV0ZSBhcyB3ZWxsLlxuXG5cbkdlbmVyYWwgcHJvYmxlbXMuXG5cbkx0ciBpcyBkZWZhdWx0IGRvY3VtZW50IGRpcmVjdGlvbiwgYnV0IGZvciBwcm9wZXIgd29yayBvZiBuYi1sdHIgKG1lYW5zIGx0ciBvbmx5KSxcbltkaXI9bHRyXSBzaG91bGQgYmUgc3BlY2lmaWVkIGF0IGxlYXN0IHNvbWV3aGVyZS4gJzpub3QoW2Rpcj1ydGxdJyBub3QgYXBwbGljYWJsZSBoZXJlLFxuYmVjYXVzZSBpdCdzIHNhdGlzZnkgYW55IHBhcmVudCwgdGhhdCBkb24ndCBoYXZlIFtkaXI9cnRsXSBhdHRyaWJ1dGUuXG5QcmV2aW91cyBhcHByb2FjaCB3YXMgdG8gdXNlIHNpbmdsZSBydGwgbWl4aW4gYW5kIHJlc2V0IGx0ciBwcm9wZXJ0aWVzIHRvIGluaXRpYWwgdmFsdWUuXG5CdXQgc29tZXRpbWVzIGl0J3MgaGFyZCB0byBmaW5kLCB3aGF0IHRoZSBwcmV2aW91cyB2YWx1ZSBzaG91bGQgYmUuIEFuZCBzdWNoIG1peGluIGNhbGwgbG9va3MgdG9vIHZlcmJvc2UuXG4qL1xuLypcbiAgICAgIDpob3N0IGNhbiBiZSBwcmVmaXhlZFxuICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzhkMGVlMzQ5MzlmMTRjMDc4NzZkMjIyYzI1YjQwNWVkNDU4YTM0ZDMvcGFja2FnZXMvY29tcGlsZXIvc3JjL3NoYWRvd19jc3MudHMjTDQ0MVxuXG4gICAgICBXZSBoYXZlIHRvIHVzZSA6aG9zdCBpbnN0ZWFkIG9mIDpob3N0LWNvbnRleHQoJHRoZW1lKSwgdG8gYmUgYWJsZSB0byBwcmVmaXggdGhlbWUgY2xhc3NcbiAgICAgIHdpdGggc29tZXRoaW5nIGRlZmluZWQgaW5zaWRlIG9mIEBjb250ZW50LCBieSBwcmVmaXhpbmcgJi5cbiAgICAgIEZvciBleGFtcGxlIHRoaXMgc2NzcyBjb2RlOlxuICAgICAgICAubmItdGhlbWUtZGVmYXVsdCB7XG4gICAgICAgICAgLnNvbWUtc2VsZWN0b3IgJiB7XG4gICAgICAgICAgICAuLi5cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIFdpbGwgcmVzdWx0IGluIG5leHQgY3NzOlxuICAgICAgICAuc29tZS1zZWxlY3RvciAubmItdGhlbWUtZGVmYXVsdCB7XG4gICAgICAgICAgLi4uXG4gICAgICAgIH1cblxuICAgICAgSXQgZG9lc24ndCB3b3JrIHdpdGggOmhvc3QtY29udGV4dCBiZWNhdXNlIGFuZ3VsYXIgc3BsaXR0aW5nIGl0IGluIHR3byBzZWxlY3RvcnMgYW5kIHJlbW92ZXNcbiAgICAgIHByZWZpeCBpbiBvbmUgb2YgdGhlIHNlbGVjdG9ycy5cbiAgICAqL1xuLm5iLXRoZW1lLWRlZmF1bHQgOmhvc3QgLndhcm5pbmcge1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGNvbG9yOiAjZmYzZDcxO1xufVxuXG4vKlxuICAgICAgOmhvc3QgY2FuIGJlIHByZWZpeGVkXG4gICAgICBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvOGQwZWUzNDkzOWYxNGMwNzg3NmQyMjJjMjViNDA1ZWQ0NThhMzRkMy9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50cyNMNDQxXG5cbiAgICAgIFdlIGhhdmUgdG8gdXNlIDpob3N0IGluc3RlYWQgb2YgOmhvc3QtY29udGV4dCgkdGhlbWUpLCB0byBiZSBhYmxlIHRvIHByZWZpeCB0aGVtZSBjbGFzc1xuICAgICAgd2l0aCBzb21ldGhpbmcgZGVmaW5lZCBpbnNpZGUgb2YgQGNvbnRlbnQsIGJ5IHByZWZpeGluZyAmLlxuICAgICAgRm9yIGV4YW1wbGUgdGhpcyBzY3NzIGNvZGU6XG4gICAgICAgIC5uYi10aGVtZS1kZWZhdWx0IHtcbiAgICAgICAgICAuc29tZS1zZWxlY3RvciAmIHtcbiAgICAgICAgICAgIC4uLlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgV2lsbCByZXN1bHQgaW4gbmV4dCBjc3M6XG4gICAgICAgIC5zb21lLXNlbGVjdG9yIC5uYi10aGVtZS1kZWZhdWx0IHtcbiAgICAgICAgICAuLi5cbiAgICAgICAgfVxuXG4gICAgICBJdCBkb2Vzbid0IHdvcmsgd2l0aCA6aG9zdC1jb250ZXh0IGJlY2F1c2UgYW5ndWxhciBzcGxpdHRpbmcgaXQgaW4gdHdvIHNlbGVjdG9ycyBhbmQgcmVtb3Zlc1xuICAgICAgcHJlZml4IGluIG9uZSBvZiB0aGUgc2VsZWN0b3JzLlxuICAgICovXG4ubmItdGhlbWUtZGFyayA6aG9zdCAud2FybmluZyB7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgY29sb3I6ICNmZjNkNzE7XG59XG5cbi8qXG4gICAgICA6aG9zdCBjYW4gYmUgcHJlZml4ZWRcbiAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi84ZDBlZTM0OTM5ZjE0YzA3ODc2ZDIyMmMyNWI0MDVlZDQ1OGEzNGQzL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9zaGFkb3dfY3NzLnRzI0w0NDFcblxuICAgICAgV2UgaGF2ZSB0byB1c2UgOmhvc3QgaW5zdGVhZCBvZiA6aG9zdC1jb250ZXh0KCR0aGVtZSksIHRvIGJlIGFibGUgdG8gcHJlZml4IHRoZW1lIGNsYXNzXG4gICAgICB3aXRoIHNvbWV0aGluZyBkZWZpbmVkIGluc2lkZSBvZiBAY29udGVudCwgYnkgcHJlZml4aW5nICYuXG4gICAgICBGb3IgZXhhbXBsZSB0aGlzIHNjc3MgY29kZTpcbiAgICAgICAgLm5iLXRoZW1lLWRlZmF1bHQge1xuICAgICAgICAgIC5zb21lLXNlbGVjdG9yICYge1xuICAgICAgICAgICAgLi4uXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBXaWxsIHJlc3VsdCBpbiBuZXh0IGNzczpcbiAgICAgICAgLnNvbWUtc2VsZWN0b3IgLm5iLXRoZW1lLWRlZmF1bHQge1xuICAgICAgICAgIC4uLlxuICAgICAgICB9XG5cbiAgICAgIEl0IGRvZXNuJ3Qgd29yayB3aXRoIDpob3N0LWNvbnRleHQgYmVjYXVzZSBhbmd1bGFyIHNwbGl0dGluZyBpdCBpbiB0d28gc2VsZWN0b3JzIGFuZCByZW1vdmVzXG4gICAgICBwcmVmaXggaW4gb25lIG9mIHRoZSBzZWxlY3RvcnMuXG4gICAgKi9cbi5uYi10aGVtZS1jb3NtaWMgOmhvc3QgLndhcm5pbmcge1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGNvbG9yOiAjZmYzZDcxO1xufVxuXG4vKlxuICAgICAgOmhvc3QgY2FuIGJlIHByZWZpeGVkXG4gICAgICBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvOGQwZWUzNDkzOWYxNGMwNzg3NmQyMjJjMjViNDA1ZWQ0NThhMzRkMy9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50cyNMNDQxXG5cbiAgICAgIFdlIGhhdmUgdG8gdXNlIDpob3N0IGluc3RlYWQgb2YgOmhvc3QtY29udGV4dCgkdGhlbWUpLCB0byBiZSBhYmxlIHRvIHByZWZpeCB0aGVtZSBjbGFzc1xuICAgICAgd2l0aCBzb21ldGhpbmcgZGVmaW5lZCBpbnNpZGUgb2YgQGNvbnRlbnQsIGJ5IHByZWZpeGluZyAmLlxuICAgICAgRm9yIGV4YW1wbGUgdGhpcyBzY3NzIGNvZGU6XG4gICAgICAgIC5uYi10aGVtZS1kZWZhdWx0IHtcbiAgICAgICAgICAuc29tZS1zZWxlY3RvciAmIHtcbiAgICAgICAgICAgIC4uLlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgV2lsbCByZXN1bHQgaW4gbmV4dCBjc3M6XG4gICAgICAgIC5zb21lLXNlbGVjdG9yIC5uYi10aGVtZS1kZWZhdWx0IHtcbiAgICAgICAgICAuLi5cbiAgICAgICAgfVxuXG4gICAgICBJdCBkb2Vzbid0IHdvcmsgd2l0aCA6aG9zdC1jb250ZXh0IGJlY2F1c2UgYW5ndWxhciBzcGxpdHRpbmcgaXQgaW4gdHdvIHNlbGVjdG9ycyBhbmQgcmVtb3Zlc1xuICAgICAgcHJlZml4IGluIG9uZSBvZiB0aGUgc2VsZWN0b3JzLlxuICAgICovXG4ubmItdGhlbWUtY29ycG9yYXRlIDpob3N0IC53YXJuaW5nIHtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBjb2xvcjogI2ZmM2Q3MTtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuLypcbiAgRGVjbGFyZSB2YXJpYWJsZXMgYmVmb3JlIG1ha2luZyB0aGVtIGdsb2JhbC5cbiAgZGFydC1zYXNzIGRvZXNuJ3QgYWxsb3cgdG8gZGVjbGFyZSB2YXJpYWJsZSB3aXRoICFnbG9iYWwuXG4gKi9cbiRuYi1lbmFibGUtY3NzLWN1c3RvbS1wcm9wZXJ0aWVzOiBmYWxzZSAhZGVmYXVsdDtcbiRuYi1lbmFibGVkLXRoZW1lczogKCk7XG4kbmItdGhlbWVzOiAoKTtcbiRuYi10aGVtZS1wcm9jZXNzLW1vZGU6IG51bGw7XG4kbmItdGhlbWUtbmFtZTogJ2RlZmF1bHQnO1xuJG5iLXRoZW1lOiAoKTtcbiRuYi1wcm9jZXNzZWQtdGhlbWU6ICgpO1xuJG5iLXRoZW1lLWV4cG9ydC1tb2RlOiBmYWxzZSAhZGVmYXVsdDtcbiRuYi10aGVtZXMtZXhwb3J0OiAoKTtcblxuLy8gcHVibGljIHZhcmlhYmxlc1xuJG5iLWVuYWJsZS1jc3MtY3VzdG9tLXByb3BlcnRpZXM6IGZhbHNlICFnbG9iYWwgIWRlZmF1bHQ7XG4kbmItZW5hYmxlZC10aGVtZXM6ICgpICFnbG9iYWw7XG4kbmItdGhlbWVzOiAoKSAhZ2xvYmFsO1xuXG4vLyBwcml2YXRlIHZhcmlhYmxlc1xuJG5iLXRoZW1lLXByb2Nlc3MtbW9kZTogJ2xhenktcHJvY2VzcycgIWdsb2JhbDtcbiRuYi10aGVtZS1uYW1lOiBudWxsICFnbG9iYWw7XG4kbmItdGhlbWU6ICgpICFnbG9iYWw7XG4kbmItcHJvY2Vzc2VkLXRoZW1lOiAoKSAhZ2xvYmFsO1xuJG5iLXRoZW1lLWV4cG9ydC1tb2RlOiBmYWxzZSAhZ2xvYmFsICFkZWZhdWx0O1xuJG5iLXRoZW1lcy1leHBvcnQ6ICgpICFnbG9iYWw7XG5cbkBpbXBvcnQgJ2NvcmUvbWl4aW5zJztcbkBpbXBvcnQgJ2NvcmUvZnVuY3Rpb25zJztcbkBpbXBvcnQgJ2NvcmUvdmFyaWFudHMnO1xuQGltcG9ydCAnY29yZS90aGVtaW5nL3JlZ2lzdGVyJztcbkBpbXBvcnQgJ2NvcmUvdGhlbWluZy9pbnN0YWxsJztcbkBpbXBvcnQgJ2NvcmUvdGhlbWluZy9nZXQtdmFsdWUnO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AbWl4aW4gbmItc2Nyb2xsYmFycygkZmcsICRiZywgJHNpemUsICRib3JkZXItcmFkaXVzOiAkc2l6ZSAvIDIpIHtcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAkc2l6ZTtcbiAgICBoZWlnaHQ6ICRzaXplO1xuICB9XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQ6ICRmZztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG4gIH1cblxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogJGJnO1xuICB9XG5cbiAgLy8gVE9ETzogcmVtb3ZlXG4gIC8vIEZvciBJbnRlcm5ldCBFeHBsb3JlclxuICBzY3JvbGxiYXItZmFjZS1jb2xvcjogJGZnO1xuICBzY3JvbGxiYXItdHJhY2stY29sb3I6ICRiZztcbn1cblxuQG1peGluIG5iLWhlYWRpbmdzKCRmcm9tOiAxLCAkdG86IDYpIHtcbiAgQGZvciAkaSBmcm9tICRmcm9tIHRocm91Z2ggJHRvIHtcbiAgICBoI3skaX0ge1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbmItb3V0bGluZSgkb3V0bGluZS13aWR0aCwgJG91dGxpbmUtY29sb3IsICRpbnNldC1zaGFkb3ctbGVuZ3RoOiAwKSB7XG4gICRvdXRzZXQtc2hhZG93OiAwIDAgMCAkb3V0bGluZS13aWR0aCAkb3V0bGluZS1jb2xvcjtcbiAgYm94LXNoYWRvdzogJG91dHNldC1zaGFkb3c7XG5cbiAgQGlmICgkaW5zZXQtc2hhZG93LWxlbmd0aCAhPSAwKSB7XG4gICAgJjpub3QoOmhvdmVyKTpub3QoOmFjdGl2ZSkge1xuICAgICAgJGluc2V0LXNoYWRvdzogaW5zZXQgJGluc2V0LXNoYWRvdy1sZW5ndGggJG91dGxpbmUtY29sb3I7XG4gICAgICBib3gtc2hhZG93OiAkb3V0c2V0LXNoYWRvdywgJGluc2V0LXNoYWRvdztcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIGhvdmVyLWZvY3VzLWFjdGl2ZSB7XG4gICY6Zm9jdXMsXG4gICY6YWN0aXZlLFxuICAmOmhvdmVyIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gY2VudGVyLWhvcml6b250YWwtYWJzb2x1dGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuICBsZWZ0OiA1MCU7XG59XG5cbkBtaXhpbiBpbnN0YWxsLXRodW1iKCkge1xuICAkdGh1bWItc2VsZWN0b3JzOiAoXG4gICAgJzo6LXdlYmtpdC1zbGlkZXItdGh1bWInXG4gICAgJzo6LW1vei1yYW5nZS10aHVtYidcbiAgICAnOjotbXMtdGh1bWInXG4gICk7XG5cbiAgQGVhY2ggJHNlbGVjdG9yIGluICR0aHVtYi1zZWxlY3RvcnMge1xuICAgICYjeyRzZWxlY3Rvcn0ge1xuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBpbnN0YWxsLXRyYWNrKCkge1xuICAkdGh1bWItc2VsZWN0b3JzOiAoXG4gICAgJzo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2snXG4gICAgJzo6LW1vei1yYW5nZS10cmFjaydcbiAgICAnOjotbXMtdHJhY2snXG4gICk7XG5cbiAgQGVhY2ggJHNlbGVjdG9yIGluICR0aHVtYi1zZWxlY3RvcnMge1xuICAgICYjeyRzZWxlY3Rvcn0ge1xuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBpbnN0YWxsLXBsYWNlaG9sZGVyKCRjb2xvciwgJGZvbnQtc2l6ZSwgJG9wYWNpdHk6IDEpIHtcbiAgJHBsYWNlaG9sZGVyLXNlbGVjdG9yczogKFxuICAgICc6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXInXG4gICAgJzo6LW1vei1wbGFjZWhvbGRlcidcbiAgICAnOi1tb3otcGxhY2Vob2xkZXInXG4gICAgJzotbXMtaW5wdXQtcGxhY2Vob2xkZXInXG4gICk7XG5cbiAgJjo6cGxhY2Vob2xkZXIge1xuICAgIEBpbmNsdWRlIHBsYWNlaG9sZGVyKCRjb2xvciwgJGZvbnQtc2l6ZSwgJG9wYWNpdHkpO1xuICB9XG5cbiAgQGVhY2ggJHNlbGVjdG9yIGluICRwbGFjZWhvbGRlci1zZWxlY3RvcnMge1xuICAgICYjeyRzZWxlY3Rvcn0ge1xuICAgICAgQGluY2x1ZGUgcGxhY2Vob2xkZXIoJGNvbG9yLCAkZm9udC1zaXplLCAkb3BhY2l0eSk7XG4gICAgfVxuXG4gICAgJjpmb2N1cyN7JHNlbGVjdG9yfSB7XG4gICAgICBAaW5jbHVkZSBwbGFjZWhvbGRlci1mb2N1cygpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gcGxhY2Vob2xkZXIoJGNvbG9yLCAkZm9udC1zaXplLCAkb3BhY2l0eSkge1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIG9wYWNpdHk6ICRvcGFjaXR5O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbkBtaXhpbiBwbGFjZWhvbGRlci1mb2N1cygpIHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XG59XG5cbkBtaXhpbiBuYi1jb21wb25lbnQtYW5pbWF0aW9uKCRwcm9wZXJ0aWVzLi4uKSB7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMTVzO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiAkcHJvcGVydGllcztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG59XG5cbkBtaXhpbiBhbmltYXRpb24oJGFuaW1hdGUuLi4pIHtcbiAgJG1heDogbGVuZ3RoKCRhbmltYXRlKTtcbiAgJGFuaW1hdGlvbnM6ICcnO1xuXG4gIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggJG1heCB7XG4gICAgJGFuaW1hdGlvbnM6ICN7JGFuaW1hdGlvbnMgKyBudGgoJGFuaW1hdGUsICRpKX07XG5cbiAgICBAaWYgJGkgPCAkbWF4IHtcbiAgICAgICRhbmltYXRpb25zOiAjeyRhbmltYXRpb25zICsgJywgJ307XG4gICAgfVxuICB9XG4gIC13ZWJraXQtYW5pbWF0aW9uOiAkYW5pbWF0aW9ucztcbiAgLW1vei1hbmltYXRpb246ICAgICRhbmltYXRpb25zO1xuICAtby1hbmltYXRpb246ICAgICAgJGFuaW1hdGlvbnM7XG4gIGFuaW1hdGlvbjogICAgICAgICAkYW5pbWF0aW9ucztcbn1cblxuQG1peGluIGtleWZyYW1lcygkYW5pbWF0aW9uTmFtZSkge1xuICBALXdlYmtpdC1rZXlmcmFtZXMgI3skYW5pbWF0aW9uTmFtZX0ge1xuICAgIEBjb250ZW50O1xuICB9XG4gIEAtbW96LWtleWZyYW1lcyAjeyRhbmltYXRpb25OYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQC1vLWtleWZyYW1lcyAjeyRhbmltYXRpb25OYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQGtleWZyYW1lcyAjeyRhbmltYXRpb25OYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGlzIG1peGluIGdlbmVyYXRlcyBrZXlmYW1lcy5cbiAqIEJlY2F1c2Ugb2YgYWxsIGtleWZyYW1lcyBjYW4ndCBiZSBzY29wZWQsXG4gKiB3ZSBuZWVkIHRvIHB1dHMgdW5pcXVlIG5hbWUgaW4gZWFjaCBidG4tcHVsc2UgY2FsbC5cbiAqL1xuQG1peGluIGJ0bi1wdWxzZSgkbmFtZSwgJGNvbG9yKSB7XG4gICYuYnRuLXB1bHNlIHtcbiAgICBAaW5jbHVkZSBhbmltYXRpb24oYnRuLSN7JG5hbWV9LXB1bHNlIDEuNXMgaW5maW5pdGUpO1xuICB9XG5cbiAgQGluY2x1ZGUga2V5ZnJhbWVzKGJ0bi0jeyRuYW1lfS1wdWxzZSkge1xuICAgIDAlIHtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICBvcGFjaXR5OiBuYi10aGVtZShidG4tZGlzYWJsZWQtb3BhY2l0eSk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMXJlbSAwICRjb2xvcjtcbiAgICAgIG9wYWNpdHk6IDAuODtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgb3BhY2l0eTogbmItdGhlbWUoYnRuLWRpc2FibGVkLW9wYWNpdHkpO1xuICAgIH1cbiAgfVxufVxuXG4vKlxuXG5BY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmljYXRpb24gKGh0dHBzOi8vd3d3LnczLm9yZy9UUi9jc3Mtc2NvcGluZy0xLyNob3N0LXNlbGVjdG9yKVxuOmhvc3QgYW5kIDpob3N0LWNvbnRleHQgYXJlIHBzZXVkby1jbGFzc2VzLiBTbyB3ZSBhc3N1bWUgdGhleSBjb3VsZCBiZSBjb21iaW5lZCxcbmxpa2Ugb3RoZXIgcHNldWRvLWNsYXNzZXMsIGV2ZW4gc2FtZSBvbmVzLlxuRm9yIGV4YW1wbGU6ICc6bnRoLW9mLXR5cGUoMm4pOm50aC1vZi10eXBlKGV2ZW4pJy5cblxuSWRlYWwgc29sdXRpb24gd291bGQgYmUgdG8gcHJlcGVuZCBhbnkgc2VsZWN0b3Igd2l0aCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkuXG5UaGVuIG5lYnVsYXIgY29tcG9uZW50cyB3aWxsIGJlaGF2ZSBhcyBhbiBodG1sIGVsZW1lbnQgYW5kIHJlc3BvbmQgdG8gW2Rpcl0gYXR0cmlidXRlIG9uIGFueSBsZXZlbCxcbnNvIGRpcmVjdGlvbiBjb3VsZCBiZSBvdmVycmlkZGVuIG9uIGFueSBjb21wb25lbnQgbGV2ZWwuXG5cbkltcGxlbWVudGF0aW9uIGNvZGU6XG5cbkBtaXhpbiBuYi1ydGwoKSB7XG4gIC8vIGFkZCAjIHRvIHNjc3MgaW50ZXJwb2xhdGlvbiBzdGF0ZW1lbnQuXG4gIC8vIGl0IHdvcmtzIGluIGNvbW1lbnRzIGFuZCB3ZSBjYW4ndCB1c2UgaXQgaGVyZVxuICBAYXQtcm9vdCB7c2VsZWN0b3ItYXBwZW5kKCc6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSknLCAmKX0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkFuZCB3aGVuIHdlIGNhbGwgaXQgc29tZXdoZXJlOlxuXG46aG9zdCB7XG4gIC5zb21lLWNsYXNzIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7XG4gICAgICAuLi5cbiAgICB9XG4gIH1cbn1cbjpob3N0LWNvbnRleHQoLi4uKSB7XG4gIC5zb21lLWNsYXNzIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7XG4gICAgICAuLi5cbiAgICB9XG4gIH1cbn1cblxuUmVzdWx0IHdpbGwgbG9vayBsaWtlOlxuXG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCAuc29tZS1jbGFzcyB7XG4gIC4uLlxufVxuOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QtY29udGV4dCguLi4pIC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG5cbipcbiAgU2lkZSBub3RlOlxuICA6aG9zdC1jb250ZXh0KCk6aG9zdCBzZWxlY3RvciBhcmUgdmFsaWQuIGh0dHBzOi8vbGlzdHMudzMub3JnL0FyY2hpdmVzL1B1YmxpYy93d3ctc3R5bGUvMjAxNUZlYi8wMzA1Lmh0bWxcblxuICA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgc2hvdWxkIG1hdGNoIGFueSBwZXJtdXRhdGlvbixcbiAgc28gb3JkZXIgaXMgbm90IGltcG9ydGFudC5cbipcblxuXG5DdXJyZW50bHksIHRoZXJlJ3JlIHR3byBwcm9ibGVtcyB3aXRoIHRoaXMgYXBwcm9hY2g6XG5cbkZpcnN0LCBpcyB0aGF0IHdlIGNhbid0IGNvbWJpbmUgOmhvc3QsIDpob3N0LWNvbnRleHQuIEFuZ3VsYXIgYnVncyAjMTQzNDksICMxOTE5OS5cbkZvciB0aGUgbW9tZW50IG9mIHdyaXRpbmcsIHRoZSBvbmx5IHBvc3NpYmxlIHdheSBpczpcbjpob3N0IHtcbiAgOmhvc3QtY29udGV4dCguLi4pIHtcbiAgICAuLi5cbiAgfVxufVxuSXQgZG9lc24ndCB3b3JrIGZvciB1cyBiZWNhdXNlIG1peGluIGNvdWxkIGJlIGNhbGxlZCBzb21ld2hlcmUgZGVlcGVyLCBsaWtlOlxuOmhvc3Qge1xuICBwIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7IC4uLiB9XG4gIH1cbn1cbldlIGFyZSBub3QgYWJsZSB0byBnbyB1cCB0byA6aG9zdCBsZXZlbCB0byBwbGFjZSBjb250ZW50IHBhc3NlZCB0byBtaXhpbi5cblxuVGhlIHNlY29uZCBwcm9ibGVtIGlzIHRoYXQgd2Ugb25seSBjYW4gYmUgc3VyZSB0aGF0IHdlIGFwcGVuZGluZyA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgdG8gYW5vdGhlclxuOmhvc3QvOmhvc3QtY29udGV4dCBwc2V1ZG8tY2xhc3Mgd2hlbiBjYWxsZWQgaW4gdGhlbWUgZmlsZXMgKCoudGhlbWUuc2NzcykuXG4gICpcbiAgICBTaWRlIG5vdGU6XG4gICAgQ3VycmVudGx5LCBuYi1pbnN0YWxsLWNvbXBvbmVudCB1c2VzIGFub3RoZXIgYXBwcm9hY2ggd2hlcmUgOmhvc3QgcHJlcGVuZGVkIHdpdGggdGhlIHRoZW1lIG5hbWVcbiAgICAoaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzViOTYwNzg2MjRiMGE0NzYwZjJkYmNmNmZkZjBiZDYyNzkxYmU1YmIvcGFja2FnZXMvY29tcGlsZXIvc3JjL3NoYWRvd19jc3MudHMjTDQ0MSksXG4gICAgYnV0IGl0IHdhcyBtYWRlIHRvIGJlIGFibGUgdG8gdXNlIGN1cnJlbnQgcmVhbGl6YXRpb24gb2YgcnRsIGFuZCBpdCBjYW4gYmUgcmV3cml0dGVuIGJhY2sgdG9cbiAgICA6aG9zdC1jb250ZXh0KCR0aGVtZSkgb25jZSB3ZSB3aWxsIGJlIGFibGUgdG8gdXNlIG11bHRpcGxlIHNoYWRvdyBzZWxlY3RvcnMuXG4gICpcbkJ1dCB3aGVuIGl0J3MgY2FsbGVkIGluICouY29tcG9uZW50LnNjc3Mgd2UgY2FuJ3QgYmUgc3VyZSwgdGhhdCBzZWxlY3RvciBzdGFydHMgd2l0aCA6aG9zdC86aG9zdC1jb250ZXh0LFxuYmVjYXVzZSBhbmd1bGFyIGFsbG93cyBvbWl0dGluZyBwc2V1ZG8tY2xhc3NlcyBpZiB3ZSBkb24ndCBuZWVkIHRvIHN0eWxlIDpob3N0IGNvbXBvbmVudCBpdHNlbGYuXG5XZSBjYW4gYnJlYWsgc3VjaCBzZWxlY3RvcnMsIGJ5IGp1c3QgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byB0aGVtLlxuICAqKipcbiAgICBQb3NzaWJsZSBzb2x1dGlvblxuICAgIGNoZWNrIGlmIHdlIGluIHRoZW1lIGJ5IHNvbWUgdGhlbWUgdmFyaWFibGVzIGFuZCBpZiBzbyBhcHBlbmQsIG90aGVyd2lzZSBuZXN0IGxpa2VcbiAgICBAYXQtcm9vdCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkge1xuICAgICAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgICAgIC8vIGl0IHdvcmtzIGluIGNvbW1lbnRzIGFuZCB3ZSBjYW4ndCB1c2UgaXQgaGVyZVxuICAgICAgeyZ9IHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIFdoYXQgaWYgOmhvc3Qgc3BlY2lmaWVkPyBDYW4gd2UgYWRkIHNwYWNlIGluIDpob3N0LWNvbnRleHQoLi4uKSA6aG9zdD9cbiAgICBPciBtYXliZSBhZGQgOmhvc3Qgc2VsZWN0b3IgYW55d2F5PyBJZiBtdWx0aXBsZSA6aG9zdCBzZWxlY3RvcnMgYXJlIGFsbG93ZWRcbiAgKioqXG5cblxuUHJvYmxlbXMgd2l0aCB0aGUgY3VycmVudCBhcHByb2FjaC5cblxuMS4gRGlyZWN0aW9uIGNhbiBiZSBhcHBsaWVkIG9ubHkgb24gZG9jdW1lbnQgbGV2ZWwsIGJlY2F1c2UgbWl4aW4gcHJlcGVuZHMgdGhlbWUgY2xhc3MsXG53aGljaCBwbGFjZWQgb24gdGhlIGJvZHkuXG4yLiAqLmNvbXBvbmVudC5zY3NzIHN0eWxlcyBzaG91bGQgYmUgaW4gOmhvc3Qgc2VsZWN0b3IuIE90aGVyd2lzZSBhbmd1bGFyIHdpbGwgYWRkIGhvc3RcbmF0dHJpYnV0ZSB0byBbZGlyPXJ0bF0gYXR0cmlidXRlIGFzIHdlbGwuXG5cblxuR2VuZXJhbCBwcm9ibGVtcy5cblxuTHRyIGlzIGRlZmF1bHQgZG9jdW1lbnQgZGlyZWN0aW9uLCBidXQgZm9yIHByb3BlciB3b3JrIG9mIG5iLWx0ciAobWVhbnMgbHRyIG9ubHkpLFxuW2Rpcj1sdHJdIHNob3VsZCBiZSBzcGVjaWZpZWQgYXQgbGVhc3Qgc29tZXdoZXJlLiAnOm5vdChbZGlyPXJ0bF0nIG5vdCBhcHBsaWNhYmxlIGhlcmUsXG5iZWNhdXNlIGl0J3Mgc2F0aXNmeSBhbnkgcGFyZW50LCB0aGF0IGRvbid0IGhhdmUgW2Rpcj1ydGxdIGF0dHJpYnV0ZS5cblByZXZpb3VzIGFwcHJvYWNoIHdhcyB0byB1c2Ugc2luZ2xlIHJ0bCBtaXhpbiBhbmQgcmVzZXQgbHRyIHByb3BlcnRpZXMgdG8gaW5pdGlhbCB2YWx1ZS5cbkJ1dCBzb21ldGltZXMgaXQncyBoYXJkIHRvIGZpbmQsIHdoYXQgdGhlIHByZXZpb3VzIHZhbHVlIHNob3VsZCBiZS4gQW5kIHN1Y2ggbWl4aW4gY2FsbCBsb29rcyB0b28gdmVyYm9zZS5cbiovXG5cbkBtaXhpbiBfcHJlcGVuZC13aXRoLXNlbGVjdG9yKCRzZWxlY3RvciwgJHByb3A6IG51bGwsICR2YWx1ZTogbnVsbCkge1xuICAjeyRzZWxlY3Rvcn0gJiB7XG4gICAgQGlmICRwcm9wICE9IG51bGwge1xuICAgICAgI3skcHJvcH06ICR2YWx1ZTtcbiAgICB9XG5cbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbmItbHRyKCRwcm9wOiBudWxsLCAkdmFsdWU6IG51bGwpIHtcbiAgQGluY2x1ZGUgX3ByZXBlbmQtd2l0aC1zZWxlY3RvcignW2Rpcj1sdHJdJywgJHByb3AsICR2YWx1ZSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBuYi1ydGwoJHByb3A6IG51bGwsICR2YWx1ZTogbnVsbCkge1xuICBAaW5jbHVkZSBfcHJlcGVuZC13aXRoLXNlbGVjdG9yKCdbZGlyPXJ0bF0nLCAkcHJvcCwgJHZhbHVlKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH07XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbi8vLyBTbGlnaHRseSBsaWdodGVuIGEgY29sb3Jcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vIEBwYXJhbSB7Q29sb3J9ICRjb2xvciAtIGNvbG9yIHRvIHRpbnRcbi8vLyBAcGFyYW0ge051bWJlcn0gJHBlcmNlbnRhZ2UgLSBwZXJjZW50YWdlIG9mIGAkY29sb3JgIGluIHJldHVybmVkIGNvbG9yXG4vLy8gQHJldHVybiB7Q29sb3J9XG5AZnVuY3Rpb24gdGludCgkY29sb3IsICRwZXJjZW50YWdlKSB7XG4gIEByZXR1cm4gbWl4KHdoaXRlLCAkY29sb3IsICRwZXJjZW50YWdlKTtcbn1cblxuLy8vIFNsaWdodGx5IGRhcmtlbiBhIGNvbG9yXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLyBAcGFyYW0ge0NvbG9yfSAkY29sb3IgLSBjb2xvciB0byBzaGFkZVxuLy8vIEBwYXJhbSB7TnVtYmVyfSAkcGVyY2VudGFnZSAtIHBlcmNlbnRhZ2Ugb2YgYCRjb2xvcmAgaW4gcmV0dXJuZWQgY29sb3Jcbi8vLyBAcmV0dXJuIHtDb2xvcn1cbkBmdW5jdGlvbiBzaGFkZSgkY29sb3IsICRwZXJjZW50YWdlKSB7XG4gIEByZXR1cm4gbWl4KGJsYWNrLCAkY29sb3IsICRwZXJjZW50YWdlKTtcbn1cblxuQGZ1bmN0aW9uIG1hcC1zZXQoJG1hcCwgJGtleSwgJHZhbHVlOiBudWxsKSB7XG4gICRuZXc6ICgka2V5OiAkdmFsdWUpO1xuICBAcmV0dXJuIG1hcC1tZXJnZSgkbWFwLCAkbmV3KTtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQGZ1bmN0aW9uIG5iLWdldC1zdGF0dXNlcygpIHtcbiAgQHJldHVybiAnYmFzaWMnLCAncHJpbWFyeScsICdzdWNjZXNzJywgJ3dhcm5pbmcnLCAnZGFuZ2VyJywgJ2luZm8nLCAnY29udHJvbCc7XG59XG5cbkBmdW5jdGlvbiBuYi1nZXQtc2l6ZXMoKSB7XG4gIEByZXR1cm4gJ3RpbnknLCAnc21hbGwnLCAnbWVkaXVtJywgJ2xhcmdlJywgJ2dpYW50Jztcbn1cblxuQGZ1bmN0aW9uIG5iLWdldC1zaGFwZXMoKSB7XG4gIEByZXR1cm4gJ3JlY3RhbmdsZScsICdzZW1pLXJvdW5kJywgJ3JvdW5kJztcbn1cblxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG4kZXZhLW1hcHBpbmc6IChcbi8qIENvbXBvbmVudHMgbWFwcGluZ3MgLSBtYXBzIHRoZW1lIHZhcmlhYmxlcyBvbnRvIGNvbXBvbmVudCB2YXJpYWJsZXMgKi9cblxubGluay10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsIGxpbmstdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUsIGxpbmstdGV4dC1mb2N1cy1jb2xvcjogdGV4dC1wcmltYXJ5LWZvY3VzLWNvbG9yLCBsaW5rLXRleHQtaG92ZXItY29sb3I6IHRleHQtcHJpbWFyeS1ob3Zlci1jb2xvciwgY2FyZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsIGNhcmQtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvciwgY2FyZC10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSwgY2FyZC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLCBjYXJkLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LCBjYXJkLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LCBjYXJkLWJvcmRlci13aWR0aDogMC4wNjI1cmVtLCBjYXJkLWJvcmRlci1zdHlsZTogc29saWQsIGNhcmQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCwgY2FyZC1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLCBjYXJkLXBhZGRpbmc6IDFyZW0gMS41cmVtLCBjYXJkLXNoYWRvdzogbm9uZSwgY2FyZC1kaXZpZGVyLWNvbG9yOiBkaXZpZGVyLWNvbG9yLCBjYXJkLWRpdmlkZXItc3R5bGU6IGRpdmlkZXItc3R5bGUsIGNhcmQtZGl2aWRlci13aWR0aDogZGl2aWRlci13aWR0aCwgY2FyZC1oZWFkZXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvciwgY2FyZC1oZWFkZXItdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS1mb250LWZhbWlseSwgY2FyZC1oZWFkZXItdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLCBjYXJkLWhlYWRlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LCBjYXJkLWhlYWRlci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LCBjYXJkLWhlYWRlci1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsIGNhcmQtaGVhZGVyLWJhc2ljLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsIGNhcmQtaGVhZGVyLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LCBjYXJkLWhlYWRlci1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvciwgY2FyZC1oZWFkZXItaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsIGNhcmQtaGVhZGVyLWluZm8tdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLCBjYXJkLWhlYWRlci1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCwgY2FyZC1oZWFkZXItc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsIGNhcmQtaGVhZGVyLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LCBjYXJkLWhlYWRlci13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvciwgY2FyZC1oZWFkZXItZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LCBjYXJkLWhlYWRlci1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLCBjYXJkLWhlYWRlci1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCwgY2FyZC1oZWFkZXItY29udHJvbC10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy04MDAsIGNhcmQtaGVpZ2h0LXRpbnk6IDEzLjVyZW0sIGNhcmQtaGVpZ2h0LXNtYWxsOiAyMS4xODc1cmVtLCBjYXJkLWhlaWdodC1tZWRpdW06IDI4Ljg3NXJlbSwgY2FyZC1oZWlnaHQtbGFyZ2U6IDM2LjU2MjVyZW0sIGNhcmQtaGVpZ2h0LWdpYW50OiA0NC4yNXJlbSwgY2FyZC1tYXJnaW4tYm90dG9tOiAxLjg3NXJlbSwgY2FyZC1zY3JvbGxiYXItY29sb3I6IHNjcm9sbGJhci1jb2xvciwgY2FyZC1zY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvcjogc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3IsIGNhcmQtc2Nyb2xsYmFyLXdpZHRoOiBzY3JvbGxiYXItd2lkdGgsIGhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMSwgaGVhZGVyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsIGhlYWRlci10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSwgaGVhZGVyLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsIGhlYWRlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCwgaGVhZGVyLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LCBoZWFkZXItaGVpZ2h0OiA0Ljc1cmVtLCBoZWFkZXItcGFkZGluZzogMS4yNXJlbSwgaGVhZGVyLXNoYWRvdzogc2hhZG93LCBmb290ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLCBmb290ZXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvciwgZm9vdGVyLXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LCBmb290ZXItdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSwgZm9vdGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LCBmb290ZXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsIGZvb3Rlci10ZXh0LWhpZ2hsaWdodC1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlciwgZm9vdGVyLWhlaWdodDogNC43MjVyZW0sIGZvb3Rlci1wYWRkaW5nOiAxLjI1cmVtLCBmb290ZXItZGl2aWRlci1jb2xvcjogZGl2aWRlci1jb2xvciwgZm9vdGVyLWRpdmlkZXItc3R5bGU6IGRpdmlkZXItc3R5bGUsIGZvb3Rlci1kaXZpZGVyLXdpZHRoOiBkaXZpZGVyLXdpZHRoLCBmb290ZXItc2hhZG93OiBzaGFkb3csIGxheW91dC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsIGxheW91dC10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLCBsYXlvdXQtdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksIGxheW91dC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLCBsYXlvdXQtdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsIGxheW91dC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCwgbGF5b3V0LW1pbi1oZWlnaHQ6IDEwMHZoLCBsYXlvdXQtY29udGVudC13aWR0aDogOTAwcHgsIGxheW91dC13aW5kb3ctbW9kZS1taW4td2lkdGg6IDMwMHB4LCBsYXlvdXQtd2luZG93LW1vZGUtbWF4LXdpZHRoOiAxOTIwcHgsIGxheW91dC13aW5kb3ctbW9kZS1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsIGxheW91dC13aW5kb3ctbW9kZS1wYWRkaW5nLXRvcDogNC43NXJlbSwgbGF5b3V0LXdpbmRvdy1zaGFkb3c6IHNoYWRvdywgbGF5b3V0LXBhZGRpbmc6IDIuMjVyZW0gMi4yNXJlbSAwLjc1cmVtLCBsYXlvdXQtbWVkaXVtLXBhZGRpbmc6IDEuNXJlbSAxLjVyZW0gMC41cmVtLCBsYXlvdXQtc21hbGwtcGFkZGluZzogMXJlbSAxcmVtIDAsIGxheW91dC1zY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvcjogc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3IsIGxheW91dC1zY3JvbGxiYXItY29sb3I6IHNjcm9sbGJhci1jb2xvciwgbGF5b3V0LXNjcm9sbGJhci13aWR0aDogc2Nyb2xsYmFyLXdpZHRoLCBzaWRlYmFyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSwgc2lkZWJhci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLCBzaWRlYmFyLXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LCBzaWRlYmFyLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsIHNpZGViYXItdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsIHNpZGViYXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsIHNpZGViYXItaGVpZ2h0OiAxMDB2aCwgc2lkZWJhci13aWR0aDogMTZyZW0sIHNpZGViYXItd2lkdGgtY29tcGFjdDogMy41cmVtLCBzaWRlYmFyLXBhZGRpbmc6IDEuMjVyZW0sIHNpZGViYXItaGVhZGVyLWhlaWdodDogMy41cmVtLCBzaWRlYmFyLWZvb3Rlci1oZWlnaHQ6IDMuNXJlbSwgc2lkZWJhci1zaGFkb3c6IHNoYWRvdywgc2lkZWJhci1tZW51LWl0ZW0taGlnaGxpZ2h0LWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsIHNpZGViYXItc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3I6IHNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yLCBzaWRlYmFyLXNjcm9sbGJhci1jb2xvcjogc2Nyb2xsYmFyLWNvbG9yLCBzaWRlYmFyLXNjcm9sbGJhci13aWR0aDogc2Nyb2xsYmFyLXdpZHRoLCBtZW51LWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LCBtZW51LXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsIG1lbnUtdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtZmFtaWx5LCBtZW51LXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLTItZm9udC1zaXplLCBtZW51LXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1mb250LXdlaWdodCwgbWVudS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItbGluZS1oZWlnaHQsIG1lbnUtZ3JvdXAtdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLCBtZW51LWl0ZW0tYm9yZGVyLXJhZGl1czogMCwgbWVudS1pdGVtLXBhZGRpbmc6IDAuNzVyZW0gMXJlbSwgbWVudS1pdGVtLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IG1lbnUtYmFja2dyb3VuZC1jb2xvciwgbWVudS1pdGVtLWhvdmVyLWN1cnNvcjogcG9pbnRlciwgbWVudS1pdGVtLWhvdmVyLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1ob3Zlci1jb2xvciwgbWVudS1pdGVtLWljb24taG92ZXItY29sb3I6IG1lbnUtaXRlbS1ob3Zlci10ZXh0LWNvbG9yLCBtZW51LWl0ZW0tYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IG1lbnUtYmFja2dyb3VuZC1jb2xvciwgbWVudS1pdGVtLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsIG1lbnUtaXRlbS1pY29uLWFjdGl2ZS1jb2xvcjogbWVudS1pdGVtLWFjdGl2ZS10ZXh0LWNvbG9yLCBtZW51LWl0ZW0taWNvbi1jb2xvcjogdGV4dC1oaW50LWNvbG9yLCBtZW51LWl0ZW0taWNvbi1tYXJnaW46IDAgMC41cmVtIDAgMCwgbWVudS1pdGVtLWljb24td2lkdGg6IDEuMjVyZW0sIG1lbnUtaXRlbS1kaXZpZGVyLWNvbG9yOiBkaXZpZGVyLWNvbG9yLCBtZW51LWl0ZW0tZGl2aWRlci1zdHlsZTogZGl2aWRlci1zdHlsZSwgbWVudS1pdGVtLWRpdmlkZXItd2lkdGg6IGRpdmlkZXItd2lkdGgsIG1lbnUtc3VibWVudS1iYWNrZ3JvdW5kLWNvbG9yOiBtZW51LWJhY2tncm91bmQtY29sb3IsIG1lbnUtc3VibWVudS10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLCBtZW51LXN1Ym1lbnUtbWFyZ2luOiAwLCBtZW51LXN1Ym1lbnUtcGFkZGluZzogMCAxLjI1cmVtLCBtZW51LXN1Ym1lbnUtaXRlbS1ib3JkZXItY29sb3I6IG1lbnUtc3VibWVudS1iYWNrZ3JvdW5kLWNvbG9yLCBtZW51LXN1Ym1lbnUtaXRlbS1ib3JkZXItc3R5bGU6IHNvbGlkLCBtZW51LXN1Ym1lbnUtaXRlbS1ib3JkZXItd2lkdGg6IDAsIG1lbnUtc3VibWVudS1pdGVtLWJvcmRlci1yYWRpdXM6IDAsIG1lbnUtc3VibWVudS1pdGVtLXBhZGRpbmc6IG1lbnUtaXRlbS1wYWRkaW5nLCBtZW51LXN1Ym1lbnUtaXRlbS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBtZW51LWJhY2tncm91bmQtY29sb3IsIG1lbnUtc3VibWVudS1pdGVtLWhvdmVyLWJvcmRlci1jb2xvcjogbWVudS1zdWJtZW51LWl0ZW0tYm9yZGVyLWNvbG9yLCBtZW51LXN1Ym1lbnUtaXRlbS1ob3Zlci10ZXh0LWNvbG9yOiBtZW51LWl0ZW0taG92ZXItdGV4dC1jb2xvciwgbWVudS1zdWJtZW51LWl0ZW0taWNvbi1ob3Zlci1jb2xvcjogbWVudS1pdGVtLWljb24taG92ZXItY29sb3IsIG1lbnUtc3VibWVudS1pdGVtLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBtZW51LWJhY2tncm91bmQtY29sb3IsIG1lbnUtc3VibWVudS1pdGVtLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCwgbWVudS1zdWJtZW51LWl0ZW0tYWN0aXZlLXRleHQtY29sb3I6IG1lbnUtaXRlbS1hY3RpdmUtdGV4dC1jb2xvciwgbWVudS1zdWJtZW51LWl0ZW0taWNvbi1hY3RpdmUtY29sb3I6IG1lbnUtaXRlbS1pY29uLWFjdGl2ZS1jb2xvciwgbWVudS1zdWJtZW51LWl0ZW0tYWN0aXZlLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IG1lbnUtc3VibWVudS1pdGVtLWhvdmVyLWJhY2tncm91bmQtY29sb3IsIG1lbnUtc3VibWVudS1pdGVtLWFjdGl2ZS1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsIG1lbnUtc3VibWVudS1pdGVtLWFjdGl2ZS1ob3Zlci10ZXh0LWNvbG9yOiBtZW51LXN1Ym1lbnUtaXRlbS1ob3Zlci10ZXh0LWNvbG9yLCBtZW51LXN1Ym1lbnUtaXRlbS1pY29uLWFjdGl2ZS1ob3Zlci1jb2xvcjogbWVudS1zdWJtZW51LWl0ZW0taWNvbi1ob3Zlci1jb2xvciwgdGFic2V0LWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LCB0YWJzZXQtYm9yZGVyLXJhZGl1czogMCwgdGFic2V0LXNoYWRvdzogbm9uZSwgdGFic2V0LXRhYi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCwgdGFic2V0LXRhYi1wYWRkaW5nOiAxcmVtIDJyZW0sIHRhYnNldC10YWItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLCB0YWJzZXQtdGFiLXRleHQtZm9udC1mYW1pbHk6IHRleHQtYnV0dG9uLWZvbnQtZmFtaWx5LCB0YWJzZXQtdGFiLXRleHQtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi1tZWRpdW0tZm9udC1zaXplLCB0YWJzZXQtdGFiLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtYnV0dG9uLWZvbnQtd2VpZ2h0LCB0YWJzZXQtdGFiLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLW1lZGl1bS1saW5lLWhlaWdodCwgdGFic2V0LXRhYi10ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlLCB0YWJzZXQtdGFiLXVuZGVybGluZS13aWR0aDogMC4yNXJlbSwgdGFic2V0LXRhYi11bmRlcmxpbmUtY29sb3I6IHRyYW5zcGFyZW50LCB0YWJzZXQtdGFiLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCwgdGFic2V0LXRhYi1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLCB0YWJzZXQtdGFiLWFjdGl2ZS11bmRlcmxpbmUtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvciwgdGFic2V0LXRhYi1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCwgdGFic2V0LXRhYi1mb2N1cy10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktZm9jdXMtY29sb3IsIHRhYnNldC10YWItZm9jdXMtdW5kZXJsaW5lLWNvbG9yOiB0ZXh0LXByaW1hcnktZm9jdXMtY29sb3IsIHRhYnNldC10YWItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsIHRhYnNldC10YWItaG92ZXItdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWhvdmVyLWNvbG9yLCB0YWJzZXQtdGFiLWhvdmVyLXVuZGVybGluZS1jb2xvcjogdGV4dC1wcmltYXJ5LWhvdmVyLWNvbG9yLCB0YWJzZXQtdGFiLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LCB0YWJzZXQtdGFiLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsIHRhYnNldC10YWItZGlzYWJsZWQtdW5kZXJsaW5lLWNvbG9yOiB0cmFuc3BhcmVudCwgdGFic2V0LWRpdmlkZXItY29sb3I6IGRpdmlkZXItY29sb3IsIHRhYnNldC1kaXZpZGVyLXN0eWxlOiBkaXZpZGVyLXN0eWxlLCB0YWJzZXQtZGl2aWRlci13aWR0aDogZGl2aWRlci13aWR0aCwgdGFic2V0LWNvbnRlbnQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsIHRhYnNldC1jb250ZW50LXBhZGRpbmc6IDFyZW0gMnJlbSwgdGFic2V0LWNvbnRlbnQtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvciwgdGFic2V0LWNvbnRlbnQtdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksIHRhYnNldC1jb250ZW50LXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsIHRhYnNldC1jb250ZW50LXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LCB0YWJzZXQtY29udGVudC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCwgdGFic2V0LXNjcm9sbGJhci1jb2xvcjogc2Nyb2xsYmFyLWNvbG9yLCB0YWJzZXQtc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3I6IHNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yLCB0YWJzZXQtc2Nyb2xsYmFyLXdpZHRoOiBzY3JvbGxiYXItd2lkdGgsIHRhYnNldC10YWItdGV4dC1oaWRlLWJyZWFrcG9pbnQ6IDM2cmVtLCByb3V0ZS10YWJzZXQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsIHJvdXRlLXRhYnNldC1ib3JkZXItcmFkaXVzOiAwLCByb3V0ZS10YWJzZXQtc2hhZG93OiBub25lLCByb3V0ZS10YWJzZXQtdGFiLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LCByb3V0ZS10YWJzZXQtdGFiLXBhZGRpbmc6IDFyZW0gMnJlbSwgcm91dGUtdGFic2V0LXRhYi10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsIHJvdXRlLXRhYnNldC10YWItdGV4dC1mb250LWZhbWlseTogdGV4dC1idXR0b24tZm9udC1mYW1pbHksIHJvdXRlLXRhYnNldC10YWItdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLW1lZGl1bS1mb250LXNpemUsIHJvdXRlLXRhYnNldC10YWItdGV4dC1mb250LXdlaWdodDogdGV4dC1idXR0b24tZm9udC13ZWlnaHQsIHJvdXRlLXRhYnNldC10YWItdGV4dC1saW5lLWhlaWdodDogdGV4dC1idXR0b24tbWVkaXVtLWxpbmUtaGVpZ2h0LCByb3V0ZS10YWJzZXQtdGFiLXRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UsIHJvdXRlLXRhYnNldC10YWItdW5kZXJsaW5lLXdpZHRoOiAwLjI1cmVtLCByb3V0ZS10YWJzZXQtdGFiLXVuZGVybGluZS1jb2xvcjogdHJhbnNwYXJlbnQsIHJvdXRlLXRhYnNldC10YWItYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LCByb3V0ZS10YWJzZXQtdGFiLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsIHJvdXRlLXRhYnNldC10YWItYWN0aXZlLXVuZGVybGluZS1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLCByb3V0ZS10YWJzZXQtdGFiLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LCByb3V0ZS10YWJzZXQtdGFiLWZvY3VzLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1mb2N1cy1jb2xvciwgcm91dGUtdGFic2V0LXRhYi1mb2N1cy11bmRlcmxpbmUtY29sb3I6IHRleHQtcHJpbWFyeS1mb2N1cy1jb2xvciwgcm91dGUtdGFic2V0LXRhYi1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCwgcm91dGUtdGFic2V0LXRhYi1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktaG92ZXItY29sb3IsIHJvdXRlLXRhYnNldC10YWItaG92ZXItdW5kZXJsaW5lLWNvbG9yOiB0ZXh0LXByaW1hcnktaG92ZXItY29sb3IsIHJvdXRlLXRhYnNldC10YWItZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsIHJvdXRlLXRhYnNldC10YWItZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvciwgcm91dGUtdGFic2V0LXRhYi1kaXNhYmxlZC11bmRlcmxpbmUtY29sb3I6IHRyYW5zcGFyZW50LCByb3V0ZS10YWJzZXQtZGl2aWRlci1jb2xvcjogZGl2aWRlci1jb2xvciwgcm91dGUtdGFic2V0LWRpdmlkZXItc3R5bGU6IGRpdmlkZXItc3R5bGUsIHJvdXRlLXRhYnNldC1kaXZpZGVyLXdpZHRoOiBkaXZpZGVyLXdpZHRoLCByb3V0ZS10YWJzZXQtc2Nyb2xsYmFyLWNvbG9yOiBzY3JvbGxiYXItY29sb3IsIHJvdXRlLXRhYnNldC1zY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvcjogc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3IsIHJvdXRlLXRhYnNldC1zY3JvbGxiYXItd2lkdGg6IHNjcm9sbGJhci13aWR0aCwgcm91dGUtdGFic2V0LXRhYi10ZXh0LWhpZGUtYnJlYWtwb2ludDogMzZyZW0sIHVzZXItcGljdHVyZS1ib3gtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsIHVzZXItcGljdHVyZS1ib3gtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMywgdXNlci1waWN0dXJlLWJveC1ib3JkZXItd2lkdGg6IDFweCwgdXNlci1pbml0aWFscy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLCB1c2VyLWluaXRpYWxzLXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LCB1c2VyLWluaXRpYWxzLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LCB1c2VyLW5hbWUtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvciwgdXNlci1uYW1lLXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LCB1c2VyLW5hbWUtdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsIHVzZXItdGl0bGUtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvciwgdXNlci10aXRsZS10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC0yLWZvbnQtZmFtaWx5LCB1c2VyLXRpdGxlLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLTItZm9udC13ZWlnaHQsIHVzZXItcmVjdGFuZ2xlLWJvcmRlci1yYWRpdXM6IDAuNXJlbSwgdXNlci1zZW1pLXJvdW5kLWJvcmRlci1yYWRpdXM6IDAuNzVyZW0sIHVzZXItcm91bmQtYm9yZGVyLXJhZGl1czogNTAlLCB1c2VyLXRpbnktaGVpZ2h0OiAxLjI1cmVtLCB1c2VyLXRpbnktd2lkdGg6IDEuMjVyZW0sIHVzZXItdGlueS1pbml0aWFscy10ZXh0LWZvbnQtc2l6ZTogdGV4dC1jYXB0aW9uLWZvbnQtc2l6ZSwgdXNlci10aW55LWluaXRpYWxzLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtY2FwdGlvbi1saW5lLWhlaWdodCwgdXNlci10aW55LW5hbWUtdGV4dC1mb250LXNpemU6IHRleHQtY2FwdGlvbi1mb250LXNpemUsIHVzZXItdGlueS1uYW1lLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtY2FwdGlvbi1saW5lLWhlaWdodCwgdXNlci10aW55LXRpdGxlLXRleHQtZm9udC1zaXplOiB0ZXh0LWNhcHRpb24tZm9udC1zaXplLCB1c2VyLXRpbnktdGl0bGUtdGV4dC1saW5lLWhlaWdodDogdGV4dC1jYXB0aW9uLWxpbmUtaGVpZ2h0LCB1c2VyLXNtYWxsLWhlaWdodDogMS41cmVtLCB1c2VyLXNtYWxsLXdpZHRoOiAxLjVyZW0sIHVzZXItc21hbGwtaW5pdGlhbHMtdGV4dC1mb250LXNpemU6IHRleHQtY2FwdGlvbi1mb250LXNpemUsIHVzZXItc21hbGwtaW5pdGlhbHMtdGV4dC1saW5lLWhlaWdodDogdGV4dC1jYXB0aW9uLWxpbmUtaGVpZ2h0LCB1c2VyLXNtYWxsLW5hbWUtdGV4dC1mb250LXNpemU6IHRleHQtY2FwdGlvbi1mb250LXNpemUsIHVzZXItc21hbGwtbmFtZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWNhcHRpb24tbGluZS1oZWlnaHQsIHVzZXItc21hbGwtdGl0bGUtdGV4dC1mb250LXNpemU6IHRleHQtY2FwdGlvbi1mb250LXNpemUsIHVzZXItc21hbGwtdGl0bGUtdGV4dC1saW5lLWhlaWdodDogdGV4dC1jYXB0aW9uLWxpbmUtaGVpZ2h0LCB1c2VyLW1lZGl1bS1oZWlnaHQ6IDIuNXJlbSwgdXNlci1tZWRpdW0td2lkdGg6IDIuNXJlbSwgdXNlci1tZWRpdW0taW5pdGlhbHMtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSwgdXNlci1tZWRpdW0taW5pdGlhbHMtdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsIHVzZXItbWVkaXVtLW5hbWUtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSwgdXNlci1tZWRpdW0tbmFtZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCwgdXNlci1tZWRpdW0tdGl0bGUtdGV4dC1mb250LXNpemU6IHRleHQtY2FwdGlvbi1mb250LXNpemUsIHVzZXItbWVkaXVtLXRpdGxlLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtY2FwdGlvbi1saW5lLWhlaWdodCwgdXNlci1sYXJnZS1oZWlnaHQ6IDMuMjVyZW0sIHVzZXItbGFyZ2Utd2lkdGg6IDMuMjVyZW0sIHVzZXItbGFyZ2UtaW5pdGlhbHMtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSwgdXNlci1sYXJnZS1pbml0aWFscy10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCwgdXNlci1sYXJnZS1uYW1lLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsIHVzZXItbGFyZ2UtbmFtZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCwgdXNlci1sYXJnZS10aXRsZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtMi1mb250LXNpemUsIHVzZXItbGFyZ2UtdGl0bGUtdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtMi1saW5lLWhlaWdodCwgdXNlci1naWFudC1oZWlnaHQ6IDRyZW0sIHVzZXItZ2lhbnQtd2lkdGg6IDRyZW0sIHVzZXItZ2lhbnQtaW5pdGlhbHMtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSwgdXNlci1naWFudC1pbml0aWFscy10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCwgdXNlci1naWFudC1uYW1lLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsIHVzZXItZ2lhbnQtbmFtZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCwgdXNlci1naWFudC10aXRsZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLCB1c2VyLWdpYW50LXRpdGxlLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LCBwb3BvdmVyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsIHBvcG92ZXItdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksIHBvcG92ZXItdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSwgcG9wb3Zlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCwgcG9wb3Zlci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCwgcG9wb3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsIHBvcG92ZXItYm9yZGVyLXdpZHRoOiAxcHgsIHBvcG92ZXItYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCwgcG9wb3Zlci1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLCBwb3BvdmVyLXNoYWRvdzogc2hhZG93LCBwb3BvdmVyLWFycm93LXNpemU6IDAuNjg3NXJlbSwgcG9wb3Zlci1wYWRkaW5nOiAwLjc1cmVtIDFyZW0sIGNvbnRleHQtbWVudS1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsIGNvbnRleHQtbWVudS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LCBjb250ZXh0LW1lbnUtYm9yZGVyLXN0eWxlOiBzb2xpZCwgY29udGV4dC1tZW51LWJvcmRlci13aWR0aDogMCwgY29udGV4dC1tZW51LWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsIGNvbnRleHQtbWVudS10ZXh0LWFsaWduOiBjZW50ZXIsIGNvbnRleHQtbWVudS1taW4td2lkdGg6IDEwcmVtLCBjb250ZXh0LW1lbnUtbWF4LXdpZHRoOiAxNXJlbSwgY29udGV4dC1tZW51LXNoYWRvdzogc2hhZG93LCBhY3Rpb25zLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LCBhY3Rpb25zLWRpdmlkZXItY29sb3I6IGRpdmlkZXItY29sb3IsIGFjdGlvbnMtZGl2aWRlci1zdHlsZTogZGl2aWRlci1zdHlsZSwgYWN0aW9ucy1kaXZpZGVyLXdpZHRoOiBkaXZpZGVyLXdpZHRoLCBhY3Rpb25zLWljb24tY29sb3I6IHRleHQtaGludC1jb2xvciwgYWN0aW9ucy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLCBhY3Rpb25zLXRleHQtZm9udC1mYW1pbHk6IHRleHQtYnV0dG9uLWZvbnQtZmFtaWx5LCBhY3Rpb25zLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtYnV0dG9uLWZvbnQtd2VpZ2h0LCBhY3Rpb25zLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLW1lZGl1bS1saW5lLWhlaWdodCwgYWN0aW9ucy1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLCBhY3Rpb25zLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsIGFjdGlvbnMtdGlueS1oZWlnaHQ6IDFyZW0sIGFjdGlvbnMtdGlueS1pY29uLWhlaWdodDogYWN0aW9ucy10aW55LWhlaWdodCwgYWN0aW9ucy10aW55LXBhZGRpbmc6IDAgMS4yNXJlbSwgYWN0aW9ucy10aW55LXRleHQtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi10aW55LWZvbnQtc2l6ZSwgYWN0aW9ucy1zbWFsbC1oZWlnaHQ6IDEuNXJlbSwgYWN0aW9ucy1zbWFsbC1pY29uLWhlaWdodDogYWN0aW9ucy1zbWFsbC1oZWlnaHQsIGFjdGlvbnMtc21hbGwtcGFkZGluZzogMCAxLjI1cmVtLCBhY3Rpb25zLXNtYWxsLXRleHQtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi1zbWFsbC1mb250LXNpemUsIGFjdGlvbnMtbWVkaXVtLWhlaWdodDogMi4yNXJlbSwgYWN0aW9ucy1tZWRpdW0taWNvbi1oZWlnaHQ6IGFjdGlvbnMtbWVkaXVtLWhlaWdodCwgYWN0aW9ucy1tZWRpdW0tcGFkZGluZzogMCAxLjI1cmVtLCBhY3Rpb25zLW1lZGl1bS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tbWVkaXVtLWZvbnQtc2l6ZSwgYWN0aW9ucy1sYXJnZS1oZWlnaHQ6IDMuNXJlbSwgYWN0aW9ucy1sYXJnZS1pY29uLWhlaWdodDogYWN0aW9ucy1sYXJnZS1oZWlnaHQsIGFjdGlvbnMtbGFyZ2UtcGFkZGluZzogMCAxLjI1cmVtLCBhY3Rpb25zLWxhcmdlLXRleHQtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi1sYXJnZS1mb250LXNpemUsIGFjdGlvbnMtZ2lhbnQtaGVpZ2h0OiA0cmVtLCBhY3Rpb25zLWdpYW50LWljb24taGVpZ2h0OiBhY3Rpb25zLWdpYW50LWhlaWdodCwgYWN0aW9ucy1naWFudC1wYWRkaW5nOiAwIDEuMjVyZW0sIGFjdGlvbnMtZ2lhbnQtdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLWdpYW50LWZvbnQtc2l6ZSwgc2VhcmNoLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSwgc2VhcmNoLWRpdmlkZXItY29sb3I6IGRpdmlkZXItY29sb3IsIHNlYXJjaC1kaXZpZGVyLXN0eWxlOiBkaXZpZGVyLXN0eWxlLCBzZWFyY2gtZGl2aWRlci13aWR0aDogZGl2aWRlci13aWR0aCwgc2VhcmNoLWV4dHJhLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCwgc2VhcmNoLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsIHNlYXJjaC10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LWhlYWRpbmctMS1mb250LWZhbWlseSwgc2VhcmNoLXRleHQtZm9udC1zaXplOiB0ZXh0LWhlYWRpbmctMS1mb250LXNpemUsIHNlYXJjaC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWhlYWRpbmctMS1mb250LXdlaWdodCwgc2VhcmNoLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtaGVhZGluZy0xLWxpbmUtaGVpZ2h0LCBzZWFyY2gtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLCBzZWFyY2gtaW5mby10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsIHNlYXJjaC1pbmZvLXRleHQtZm9udC1mYW1pbHk6IHRleHQtc3VidGl0bGUtZm9udC1mYW1pbHksIHNlYXJjaC1pbmZvLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSwgc2VhcmNoLWluZm8tdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCwgc2VhcmNoLWluZm8tdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCwgc21hcnQtdGFibGUtaGVhZGVyLWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSwgc21hcnQtdGFibGUtaGVhZGVyLWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLCBzbWFydC10YWJsZS1oZWFkZXItZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LCBzbWFydC10YWJsZS1oZWFkZXItbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LCBzbWFydC10YWJsZS1oZWFkZXItZmc6IHRleHQtYmFzaWMtY29sb3IsIHNtYXJ0LXRhYmxlLWhlYWRlci1iZzogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLCBzbWFydC10YWJsZS1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksIHNtYXJ0LXRhYmxlLWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLCBzbWFydC10YWJsZS1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsIHNtYXJ0LXRhYmxlLWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCwgc21hcnQtdGFibGUtZmc6IHRleHQtYmFzaWMtY29sb3IsIHNtYXJ0LXRhYmxlLWJnOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsIHNtYXJ0LXRhYmxlLWJnLWV2ZW46IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMiwgc21hcnQtdGFibGUtZmctc2Vjb25kYXJ5OiB0ZXh0LWJhc2ljLWNvbG9yLCBzbWFydC10YWJsZS1iZy1hY3RpdmU6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMywgc21hcnQtdGFibGUtcGFkZGluZzogMC44NzVyZW0gMS4yNXJlbSwgc21hcnQtdGFibGUtZmlsdGVyLXBhZGRpbmc6IDAuMzc1cmVtIDAuNXJlbSwgc21hcnQtdGFibGUtc2VwYXJhdG9yOiBkaXZpZGVyLWNvbG9yLCBzbWFydC10YWJsZS1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLCBzbWFydC10YWJsZS1hY3Rpb24tYWRkLWVkaXQtaG92ZXItdGV4dC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LCBzbWFydC10YWJsZS1hY3Rpb24tY2FuY2VsLWRlbGV0ZS1ob3Zlci10ZXh0LWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCwgc21hcnQtdGFibGUtYWRkLWJ1dHRvbi1ib3JkZXItY29sb3I6IGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1ib3JkZXItY29sb3IsIHNtYXJ0LXRhYmxlLWFkZC1idXR0b24tYmFja2dyb3VuZC1jb2xvcjogYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWJhY2tncm91bmQtY29sb3IsIHNtYXJ0LXRhYmxlLWFkZC1idXR0b24tdGV4dC1jb2xvcjogYnV0dG9uLWZpbGxlZC1wcmltYXJ5LXRleHQtY29sb3IsIHNtYXJ0LXRhYmxlLWFkZC1idXR0b24tZm9jdXMtYm9yZGVyLWNvbG9yOiBidXR0b24tZmlsbGVkLXByaW1hcnktZm9jdXMtYm9yZGVyLWNvbG9yLCBzbWFydC10YWJsZS1hZGQtYnV0dG9uLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yLCBzbWFydC10YWJsZS1hZGQtYnV0dG9uLWhvdmVyLWJvcmRlci1jb2xvcjogYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWhvdmVyLWJvcmRlci1jb2xvciwgc21hcnQtdGFibGUtYWRkLWJ1dHRvbi1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yLCBzbWFydC10YWJsZS1hZGQtYnV0dG9uLWFjdGl2ZS1ib3JkZXItY29sb3I6IGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1hY3RpdmUtYm9yZGVyLWNvbG9yLCBzbWFydC10YWJsZS1wYWdpbmctZm9udC1mYW1pbHk6IGJ1dHRvbi10ZXh0LWZvbnQtZmFtaWx5LCBzbWFydC10YWJsZS1wYWdpbmctZm9udC1zaXplOiBidXR0b24tbWVkaXVtLXRleHQtZm9udC1zaXplLCBzbWFydC10YWJsZS1wYWdpbmctbGluZS1oZWlnaHQ6IGJ1dHRvbi1tZWRpdW0tdGV4dC1saW5lLWhlaWdodCwgc21hcnQtdGFibGUtcGFnaW5nLWJvcmRlci1jb2xvcjogZGl2aWRlci1jb2xvciwgc21hcnQtdGFibGUtcGFnaW5nLWJvcmRlci13aWR0aDogZGl2aWRlci13aWR0aCwgc21hcnQtdGFibGUtcGFnaW5nLWZnLWFjdGl2ZTogdGV4dC1jb250cm9sLWNvbG9yLCBzbWFydC10YWJsZS1wYWdpbmctYmctYWN0aXZlOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsIHNtYXJ0LXRhYmxlLXBhZ2luZy1ob3ZlcjogdHJhbnNwYXJlbnQsIHNtYXJ0LXRhYmxlLXBhZ2luZy1ob3Zlci1ib3JkZXItY29sb3I6IGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yLCBzbWFydC10YWJsZS1wYWdpbmctaG92ZXItdGV4dC1jb2xvcjogYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1ob3Zlci10ZXh0LWNvbG9yLCBzbWFydC10YWJsZS1wYWdpbmctZGlzYWJsZWQtdGV4dC1jb2xvcjogYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1kaXNhYmxlZC10ZXh0LWNvbG9yLCBzbWFydC10YWJsZS1wYWdpbmctcGFnZS10ZXh0LWNvbG9yOiBidXR0b24tb3V0bGluZS1wcmltYXJ5LXRleHQtY29sb3IsIHNtYXJ0LXRhYmxlLXBhZ2luZy1wYWdlLWZvY3VzLWJvcmRlci1jb2xvcjogYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1mb2N1cy1ib3JkZXItY29sb3IsIHNtYXJ0LXRhYmxlLXBhZ2luZy1wYWdlLWZvY3VzLXRleHQtY29sb3I6IGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktZm9jdXMtdGV4dC1jb2xvciwgdG9hc3RyLWJvcmRlci1zdHlsZTogc29saWQsIHRvYXN0ci1ib3JkZXItd2lkdGg6IDFweCwgdG9hc3RyLWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsIHRvYXN0ci1wYWRkaW5nOiAxcmVtLCB0b2FzdHItc2hhZG93OiBzaGFkb3csIHRvYXN0ci10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC0yLWZvbnQtZmFtaWx5LCB0b2FzdHItdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLTItZm9udC1zaXplLCB0b2FzdHItdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtMi1mb250LXdlaWdodCwgdG9hc3RyLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLTItbGluZS1oZWlnaHQsIHRvYXN0ci10aXRsZS10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLWZvbnQtZmFtaWx5LCB0b2FzdHItdGl0bGUtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLCB0b2FzdHItdGl0bGUtdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCwgdG9hc3RyLXRpdGxlLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsIHRvYXN0ci1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsIHRvYXN0ci1iYXNpYy1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0zLCB0b2FzdHItYmFzaWMtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvciwgdG9hc3RyLWljb24tYmFzaWMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLCB0b2FzdHItaWNvbi1iYXNpYy1jb2xvcjogdGV4dC1iYXNpYy1jb2xvciwgdG9hc3RyLWRlc3Ryb3lhYmxlLWJhc2ljLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSwgdG9hc3RyLWRlc3Ryb3lhYmxlLWJhc2ljLWhvdmVyLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTMsIHRvYXN0ci1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCwgdG9hc3RyLXByaW1hcnktYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsIHRvYXN0ci1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvciwgdG9hc3RyLWljb24tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsIHRvYXN0ci1pY29uLXByaW1hcnktY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCwgdG9hc3RyLWRlc3Ryb3lhYmxlLXByaW1hcnktaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlciwgdG9hc3RyLWRlc3Ryb3lhYmxlLXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLCB0b2FzdHItc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsIHRvYXN0ci1zdWNjZXNzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LCB0b2FzdHItc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsIHRvYXN0ci1pY29uLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLCB0b2FzdHItaWNvbi1zdWNjZXNzLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsIHRvYXN0ci1kZXN0cm95YWJsZS1zdWNjZXNzLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXIsIHRvYXN0ci1kZXN0cm95YWJsZS1zdWNjZXNzLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3ZlciwgdG9hc3RyLWluZm8tYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LCB0b2FzdHItaW5mby1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCwgdG9hc3RyLWluZm8tdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLCB0b2FzdHItaWNvbi1pbmZvLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSwgdG9hc3RyLWljb24taW5mby1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LCB0b2FzdHItZGVzdHJveWFibGUtaW5mby1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLCB0b2FzdHItZGVzdHJveWFibGUtaW5mby1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8taG92ZXIsIHRvYXN0ci13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCwgdG9hc3RyLXdhcm5pbmctYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsIHRvYXN0ci13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvciwgdG9hc3RyLWljb24td2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsIHRvYXN0ci1pY29uLXdhcm5pbmctY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCwgdG9hc3RyLWRlc3Ryb3lhYmxlLXdhcm5pbmctaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1ob3ZlciwgdG9hc3RyLWRlc3Ryb3lhYmxlLXdhcm5pbmctaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLCB0b2FzdHItZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LCB0b2FzdHItZGFuZ2VyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsIHRvYXN0ci1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLCB0b2FzdHItaWNvbi1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLCB0b2FzdHItaWNvbi1kYW5nZXItY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LCB0b2FzdHItZGVzdHJveWFibGUtZGFuZ2VyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1ob3ZlciwgdG9hc3RyLWRlc3Ryb3lhYmxlLWRhbmdlci1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1ob3ZlciwgdG9hc3RyLWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LCB0b2FzdHItY29udHJvbC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCwgdG9hc3RyLWNvbnRyb2wtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtODAwLCB0b2FzdHItaWNvbi1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCwgdG9hc3RyLWljb24tY29udHJvbC1jb2xvcjogY29sb3ItYmFzaWMtODAwLCB0b2FzdHItZGVzdHJveWFibGUtY29udHJvbC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWhvdmVyLCB0b2FzdHItZGVzdHJveWFibGUtY29udHJvbC1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtaG92ZXIsIGJ1dHRvbi1jdXJzb3I6IHBvaW50ZXIsIGJ1dHRvbi1vdXRsaW5lLXdpZHRoOiBvdXRsaW5lLXdpZHRoLCBidXR0b24tb3V0bGluZS1jb2xvcjogb3V0bGluZS1jb2xvciwgYnV0dG9uLXRleHQtZm9udC1mYW1pbHk6IHRleHQtYnV0dG9uLWZvbnQtZmFtaWx5LCBidXR0b24tdGV4dC1mb250LXdlaWdodDogdGV4dC1idXR0b24tZm9udC13ZWlnaHQsIGJ1dHRvbi1kaXNhYmxlZC1jdXJzb3I6IGRlZmF1bHQsIGJ1dHRvbi10aW55LXRleHQtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi10aW55LWZvbnQtc2l6ZSwgYnV0dG9uLXRpbnktdGV4dC1saW5lLWhlaWdodDogdGV4dC1idXR0b24tdGlueS1saW5lLWhlaWdodCwgYnV0dG9uLXRpbnktaWNvbi1zaXplOiAwLjc1cmVtLCBidXR0b24tdGlueS1pY29uLXZlcnRpY2FsLW1hcmdpbjogLTAuMTI1cmVtLCBidXR0b24tdGlueS1pY29uLW9mZnNldDogMC4zNzVyZW0sIGJ1dHRvbi1zbWFsbC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tc21hbGwtZm9udC1zaXplLCBidXR0b24tc21hbGwtdGV4dC1saW5lLWhlaWdodDogdGV4dC1idXR0b24tc21hbGwtbGluZS1oZWlnaHQsIGJ1dHRvbi1zbWFsbC1pY29uLXNpemU6IDFyZW0sIGJ1dHRvbi1zbWFsbC1pY29uLXZlcnRpY2FsLW1hcmdpbjogLTAuMTI1cmVtLCBidXR0b24tc21hbGwtaWNvbi1vZmZzZXQ6IDAuMzc1cmVtLCBidXR0b24tbWVkaXVtLXRleHQtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi1tZWRpdW0tZm9udC1zaXplLCBidXR0b24tbWVkaXVtLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLW1lZGl1bS1saW5lLWhlaWdodCwgYnV0dG9uLW1lZGl1bS1pY29uLXNpemU6IDEuMjVyZW0sIGJ1dHRvbi1tZWRpdW0taWNvbi12ZXJ0aWNhbC1tYXJnaW46IC0wLjEyNXJlbSwgYnV0dG9uLW1lZGl1bS1pY29uLW9mZnNldDogMC41cmVtLCBidXR0b24tbGFyZ2UtdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLWxhcmdlLWZvbnQtc2l6ZSwgYnV0dG9uLWxhcmdlLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLWxhcmdlLWxpbmUtaGVpZ2h0LCBidXR0b24tbGFyZ2UtaWNvbi1zaXplOiAxLjVyZW0sIGJ1dHRvbi1sYXJnZS1pY29uLXZlcnRpY2FsLW1hcmdpbjogLTAuMTI1cmVtLCBidXR0b24tbGFyZ2UtaWNvbi1vZmZzZXQ6IDAuNzVyZW0sIGJ1dHRvbi1naWFudC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tZ2lhbnQtZm9udC1zaXplLCBidXR0b24tZ2lhbnQtdGV4dC1saW5lLWhlaWdodDogdGV4dC1idXR0b24tZ2lhbnQtbGluZS1oZWlnaHQsIGJ1dHRvbi1naWFudC1pY29uLXNpemU6IDEuNXJlbSwgYnV0dG9uLWdpYW50LWljb24tdmVydGljYWwtbWFyZ2luOiAtMC4xMjVyZW0sIGJ1dHRvbi1naWFudC1pY29uLW9mZnNldDogMC43NXJlbSwgYnV0dG9uLXJlY3RhbmdsZS1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLCBidXR0b24tc2VtaS1yb3VuZC1ib3JkZXItcmFkaXVzOiAwLjc1cmVtLCBidXR0b24tcm91bmQtYm9yZGVyLXJhZGl1czogMS41cmVtLCBidXR0b24tZmlsbGVkLWJvcmRlci1zdHlsZTogc29saWQsIGJ1dHRvbi1maWxsZWQtYm9yZGVyLXdpZHRoOiAwLjA2MjVyZW0sIGJ1dHRvbi1maWxsZWQtdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSwgYnV0dG9uLWZpbGxlZC10aW55LXBhZGRpbmc6IDAuMzEyNXJlbSAwLjYyNXJlbSwgYnV0dG9uLWZpbGxlZC1zbWFsbC1wYWRkaW5nOiAwLjQzNzVyZW0gMC44NzVyZW0sIGJ1dHRvbi1maWxsZWQtbWVkaXVtLXBhZGRpbmc6IDAuNjg3NXJlbSAxLjEyNXJlbSwgYnV0dG9uLWZpbGxlZC1sYXJnZS1wYWRkaW5nOiAwLjgxMjVyZW0gMS4xMjVyZW0sIGJ1dHRvbi1maWxsZWQtZ2lhbnQtcGFkZGluZzogMC45Mzc1cmVtIDEuMzc1cmVtLCBidXR0b24tZmlsbGVkLWJhc2ljLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWRlZmF1bHQsIGJ1dHRvbi1maWxsZWQtYmFzaWMtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy1kZWZhdWx0LWJvcmRlciwgYnV0dG9uLWZpbGxlZC1iYXNpYy10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy04MDAsIGJ1dHRvbi1maWxsZWQtYmFzaWMtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtZm9jdXMsIGJ1dHRvbi1maWxsZWQtYmFzaWMtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy1mb2N1cy1ib3JkZXIsIGJ1dHRvbi1maWxsZWQtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtaG92ZXIsIGJ1dHRvbi1maWxsZWQtYmFzaWMtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy1ob3Zlci1ib3JkZXIsIGJ1dHRvbi1maWxsZWQtYmFzaWMtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWFjdGl2ZSwgYnV0dG9uLWZpbGxlZC1iYXNpYy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy1hY3RpdmUtYm9yZGVyLCBidXR0b24tZmlsbGVkLWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWRpc2FibGVkLCBidXR0b24tZmlsbGVkLWJhc2ljLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtZGlzYWJsZWQtYm9yZGVyLCBidXR0b24tZmlsbGVkLWJhc2ljLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsIGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsIGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdC1ib3JkZXIsIGJ1dHRvbi1maWxsZWQtcHJpbWFyeS10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsIGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLCBidXR0b24tZmlsbGVkLXByaW1hcnktZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLWJvcmRlciwgYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsIGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXItYm9yZGVyLCBidXR0b24tZmlsbGVkLXByaW1hcnktYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLCBidXR0b24tZmlsbGVkLXByaW1hcnktYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUtYm9yZGVyLCBidXR0b24tZmlsbGVkLXByaW1hcnktZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kaXNhYmxlZCwgYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kaXNhYmxlZC1ib3JkZXIsIGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLCBidXR0b24tZmlsbGVkLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LCBidXR0b24tZmlsbGVkLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQtYm9yZGVyLCBidXR0b24tZmlsbGVkLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLCBidXR0b24tZmlsbGVkLXN1Y2Nlc3MtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1mb2N1cywgYnV0dG9uLWZpbGxlZC1zdWNjZXNzLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1mb2N1cy1ib3JkZXIsIGJ1dHRvbi1maWxsZWQtc3VjY2Vzcy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLCBidXR0b24tZmlsbGVkLXN1Y2Nlc3MtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLWJvcmRlciwgYnV0dG9uLWZpbGxlZC1zdWNjZXNzLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWFjdGl2ZSwgYnV0dG9uLWZpbGxlZC1zdWNjZXNzLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtYWN0aXZlLWJvcmRlciwgYnV0dG9uLWZpbGxlZC1zdWNjZXNzLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGlzYWJsZWQsIGJ1dHRvbi1maWxsZWQtc3VjY2Vzcy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGlzYWJsZWQtYm9yZGVyLCBidXR0b24tZmlsbGVkLXN1Y2Nlc3MtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvciwgYnV0dG9uLWZpbGxlZC1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCwgYnV0dG9uLWZpbGxlZC1pbmZvLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LWJvcmRlciwgYnV0dG9uLWZpbGxlZC1pbmZvLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvciwgYnV0dG9uLWZpbGxlZC1pbmZvLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZm9jdXMsIGJ1dHRvbi1maWxsZWQtaW5mby1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZm9jdXMtYm9yZGVyLCBidXR0b24tZmlsbGVkLWluZm8taG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1ob3ZlciwgYnV0dG9uLWZpbGxlZC1pbmZvLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1ob3Zlci1ib3JkZXIsIGJ1dHRvbi1maWxsZWQtaW5mby1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1hY3RpdmUsIGJ1dHRvbi1maWxsZWQtaW5mby1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWFjdGl2ZS1ib3JkZXIsIGJ1dHRvbi1maWxsZWQtaW5mby1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWRpc2FibGVkLCBidXR0b24tZmlsbGVkLWluZm8tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWRpc2FibGVkLWJvcmRlciwgYnV0dG9uLWZpbGxlZC1pbmZvLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsIGJ1dHRvbi1maWxsZWQtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsIGJ1dHRvbi1maWxsZWQtd2FybmluZy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdC1ib3JkZXIsIGJ1dHRvbi1maWxsZWQtd2FybmluZy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsIGJ1dHRvbi1maWxsZWQtd2FybmluZy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLCBidXR0b24tZmlsbGVkLXdhcm5pbmctZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLWJvcmRlciwgYnV0dG9uLWZpbGxlZC13YXJuaW5nLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXIsIGJ1dHRvbi1maWxsZWQtd2FybmluZy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXItYm9yZGVyLCBidXR0b24tZmlsbGVkLXdhcm5pbmctYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctYWN0aXZlLCBidXR0b24tZmlsbGVkLXdhcm5pbmctYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1hY3RpdmUtYm9yZGVyLCBidXR0b24tZmlsbGVkLXdhcm5pbmctZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kaXNhYmxlZCwgYnV0dG9uLWZpbGxlZC13YXJuaW5nLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1kaXNhYmxlZC1ib3JkZXIsIGJ1dHRvbi1maWxsZWQtd2FybmluZy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLCBidXR0b24tZmlsbGVkLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCwgYnV0dG9uLWZpbGxlZC1kYW5nZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdC1ib3JkZXIsIGJ1dHRvbi1maWxsZWQtZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvciwgYnV0dG9uLWZpbGxlZC1kYW5nZXItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLCBidXR0b24tZmlsbGVkLWRhbmdlci1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1mb2N1cy1ib3JkZXIsIGJ1dHRvbi1maWxsZWQtZGFuZ2VyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1ob3ZlciwgYnV0dG9uLWZpbGxlZC1kYW5nZXItaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXItYm9yZGVyLCBidXR0b24tZmlsbGVkLWRhbmdlci1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWFjdGl2ZSwgYnV0dG9uLWZpbGxlZC1kYW5nZXItYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWFjdGl2ZS1ib3JkZXIsIGJ1dHRvbi1maWxsZWQtZGFuZ2VyLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kaXNhYmxlZCwgYnV0dG9uLWZpbGxlZC1kYW5nZXItZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZGlzYWJsZWQtYm9yZGVyLCBidXR0b24tZmlsbGVkLWRhbmdlci1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLCBidXR0b24tZmlsbGVkLWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LCBidXR0b24tZmlsbGVkLWNvbnRyb2wtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQtYm9yZGVyLCBidXR0b24tZmlsbGVkLWNvbnRyb2wtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtODAwLCBidXR0b24tZmlsbGVkLWNvbnRyb2wtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1mb2N1cywgYnV0dG9uLWZpbGxlZC1jb250cm9sLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC1mb2N1cy1ib3JkZXIsIGJ1dHRvbi1maWxsZWQtY29udHJvbC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWhvdmVyLCBidXR0b24tZmlsbGVkLWNvbnRyb2wtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWhvdmVyLWJvcmRlciwgYnV0dG9uLWZpbGxlZC1jb250cm9sLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWFjdGl2ZSwgYnV0dG9uLWZpbGxlZC1jb250cm9sLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtYWN0aXZlLWJvcmRlciwgYnV0dG9uLWZpbGxlZC1jb250cm9sLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGlzYWJsZWQsIGJ1dHRvbi1maWxsZWQtY29udHJvbC1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtZGlzYWJsZWQtYm9yZGVyLCBidXR0b24tZmlsbGVkLWNvbnRyb2wtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvciwgYnV0dG9uLW91dGxpbmUtYm9yZGVyLXN0eWxlOiBzb2xpZCwgYnV0dG9uLW91dGxpbmUtYm9yZGVyLXdpZHRoOiAwLjA2MjVyZW0sIGJ1dHRvbi1vdXRsaW5lLXRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UsIGJ1dHRvbi1vdXRsaW5lLWZvY3VzLWluc2V0LXNoYWRvdy1sZW5ndGg6IDAgMCAwIDEwMHZtYXgsIGJ1dHRvbi1vdXRsaW5lLXRpbnktcGFkZGluZzogMC4zMTI1cmVtIDAuNjI1cmVtLCBidXR0b24tb3V0bGluZS1zbWFsbC1wYWRkaW5nOiAwLjQzNzVyZW0gMC44NzVyZW0sIGJ1dHRvbi1vdXRsaW5lLW1lZGl1bS1wYWRkaW5nOiAwLjY4NzVyZW0gMS4xMjVyZW0sIGJ1dHRvbi1vdXRsaW5lLWxhcmdlLXBhZGRpbmc6IDAuODEyNXJlbSAxLjEyNXJlbSwgYnV0dG9uLW91dGxpbmUtZ2lhbnQtcGFkZGluZzogMC45Mzc1cmVtIDEuMzc1cmVtLCBidXR0b24tb3V0bGluZS1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kZWZhdWx0LCBidXR0b24tb3V0bGluZS1iYXNpYy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLCBidXR0b24tb3V0bGluZS1iYXNpYy10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsIGJ1dHRvbi1vdXRsaW5lLWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWZvY3VzLCBidXR0b24tb3V0bGluZS1iYXNpYy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlciwgYnV0dG9uLW91dGxpbmUtYmFzaWMtZm9jdXMtdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLCBidXR0b24tb3V0bGluZS1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1ob3ZlciwgYnV0dG9uLW91dGxpbmUtYmFzaWMtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsIGJ1dHRvbi1vdXRsaW5lLWJhc2ljLWhvdmVyLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvciwgYnV0dG9uLW91dGxpbmUtYmFzaWMtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWFjdGl2ZSwgYnV0dG9uLW91dGxpbmUtYmFzaWMtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlciwgYnV0dG9uLW91dGxpbmUtYmFzaWMtYWN0aXZlLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvciwgYnV0dG9uLW91dGxpbmUtYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsIGJ1dHRvbi1vdXRsaW5lLWJhc2ljLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLCBidXR0b24tb3V0bGluZS1iYXNpYy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLCBidXR0b24tb3V0bGluZS1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGVmYXVsdCwgYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLCBidXR0b24tb3V0bGluZS1wcmltYXJ5LWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZm9jdXMsIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlciwgYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1mb2N1cy10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1ob3ZlciwgYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLCBidXR0b24tb3V0bGluZS1wcmltYXJ5LWhvdmVyLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvciwgYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1hY3RpdmUsIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLCBidXR0b24tb3V0bGluZS1wcmltYXJ5LWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1kaXNhYmxlZCwgYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLCBidXR0b24tb3V0bGluZS1wcmltYXJ5LWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kZWZhdWx0LCBidXR0b24tb3V0bGluZS1zdWNjZXNzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlciwgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LXN1Y2Nlc3MtY29sb3IsIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1mb2N1cywgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLCBidXR0b24tb3V0bGluZS1zdWNjZXNzLWZvY3VzLXRleHQtY29sb3I6IHRleHQtc3VjY2Vzcy1jb2xvciwgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWhvdmVyLCBidXR0b24tb3V0bGluZS1zdWNjZXNzLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtaG92ZXItdGV4dC1jb2xvcjogdGV4dC1zdWNjZXNzLWNvbG9yLCBidXR0b24tb3V0bGluZS1zdWNjZXNzLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWFjdGl2ZSwgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtYWN0aXZlLXRleHQtY29sb3I6IHRleHQtc3VjY2Vzcy1jb2xvciwgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWRpc2FibGVkLCBidXR0b24tb3V0bGluZS1zdWNjZXNzLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvciwgYnV0dG9uLW91dGxpbmUtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRlZmF1bHQsIGJ1dHRvbi1vdXRsaW5lLWluZm8tYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLCBidXR0b24tb3V0bGluZS1pbmZvLXRleHQtY29sb3I6IHRleHQtaW5mby1jb2xvciwgYnV0dG9uLW91dGxpbmUtaW5mby1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWZvY3VzLCBidXR0b24tb3V0bGluZS1pbmZvLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsIGJ1dHRvbi1vdXRsaW5lLWluZm8tZm9jdXMtdGV4dC1jb2xvcjogdGV4dC1pbmZvLWNvbG9yLCBidXR0b24tb3V0bGluZS1pbmZvLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtaG92ZXIsIGJ1dHRvbi1vdXRsaW5lLWluZm8taG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlciwgYnV0dG9uLW91dGxpbmUtaW5mby1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LWluZm8tY29sb3IsIGJ1dHRvbi1vdXRsaW5lLWluZm8tYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtYWN0aXZlLCBidXR0b24tb3V0bGluZS1pbmZvLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlciwgYnV0dG9uLW91dGxpbmUtaW5mby1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1pbmZvLWNvbG9yLCBidXR0b24tb3V0bGluZS1pbmZvLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZGlzYWJsZWQsIGJ1dHRvbi1vdXRsaW5lLWluZm8tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlciwgYnV0dG9uLW91dGxpbmUtaW5mby1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLCBidXR0b24tb3V0bGluZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZGVmYXVsdCwgYnV0dG9uLW91dGxpbmUtd2FybmluZy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC13YXJuaW5nLWNvbG9yLCBidXR0b24tb3V0bGluZS13YXJuaW5nLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZm9jdXMsIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlciwgYnV0dG9uLW91dGxpbmUtd2FybmluZy1mb2N1cy10ZXh0LWNvbG9yOiB0ZXh0LXdhcm5pbmctY29sb3IsIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1ob3ZlciwgYnV0dG9uLW91dGxpbmUtd2FybmluZy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLCBidXR0b24tb3V0bGluZS13YXJuaW5nLWhvdmVyLXRleHQtY29sb3I6IHRleHQtd2FybmluZy1jb2xvciwgYnV0dG9uLW91dGxpbmUtd2FybmluZy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1hY3RpdmUsIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLCBidXR0b24tb3V0bGluZS13YXJuaW5nLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LXdhcm5pbmctY29sb3IsIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1kaXNhYmxlZCwgYnV0dG9uLW91dGxpbmUtd2FybmluZy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLCBidXR0b24tb3V0bGluZS13YXJuaW5nLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZGVmYXVsdCwgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLCBidXR0b24tb3V0bGluZS1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1kYW5nZXItY29sb3IsIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZm9jdXMsIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1mb2N1cy10ZXh0LWNvbG9yOiB0ZXh0LWRhbmdlci1jb2xvciwgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1ob3ZlciwgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlciwgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWhvdmVyLXRleHQtY29sb3I6IHRleHQtZGFuZ2VyLWNvbG9yLCBidXR0b24tb3V0bGluZS1kYW5nZXItYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1hY3RpdmUsIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlciwgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LWRhbmdlci1jb2xvciwgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1kaXNhYmxlZCwgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlciwgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsIGJ1dHRvbi1vdXRsaW5lLWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kZWZhdWx0LCBidXR0b24tb3V0bGluZS1jb250cm9sLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlciwgYnV0dG9uLW91dGxpbmUtY29udHJvbC10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsIGJ1dHRvbi1vdXRsaW5lLWNvbnRyb2wtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1mb2N1cywgYnV0dG9uLW91dGxpbmUtY29udHJvbC1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLCBidXR0b24tb3V0bGluZS1jb250cm9sLWZvY3VzLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvciwgYnV0dG9uLW91dGxpbmUtY29udHJvbC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyLCBidXR0b24tb3V0bGluZS1jb250cm9sLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsIGJ1dHRvbi1vdXRsaW5lLWNvbnRyb2wtaG92ZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLCBidXR0b24tb3V0bGluZS1jb250cm9sLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZSwgYnV0dG9uLW91dGxpbmUtY29udHJvbC1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsIGJ1dHRvbi1vdXRsaW5lLWNvbnRyb2wtYWN0aXZlLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvciwgYnV0dG9uLW91dGxpbmUtY29udHJvbC1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRpc2FibGVkLCBidXR0b24tb3V0bGluZS1jb250cm9sLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsIGJ1dHRvbi1vdXRsaW5lLWNvbnRyb2wtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvciwgYnV0dG9uLWdob3N0LWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LCBidXR0b24tZ2hvc3QtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCwgYnV0dG9uLWdob3N0LWJvcmRlci1zdHlsZTogc29saWQsIGJ1dHRvbi1naG9zdC1ib3JkZXItd2lkdGg6IDAuMDYyNXJlbSwgYnV0dG9uLWdob3N0LXRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UsIGJ1dHRvbi1naG9zdC1mb2N1cy1pbnNldC1zaGFkb3ctbGVuZ3RoOiAwIDAgMCAxMDB2bWF4LCBidXR0b24tZ2hvc3QtdGlueS1wYWRkaW5nOiAwLjMxMjVyZW0gMC42MjVyZW0sIGJ1dHRvbi1naG9zdC1zbWFsbC1wYWRkaW5nOiAwLjQzNzVyZW0gMC44NzVyZW0sIGJ1dHRvbi1naG9zdC1tZWRpdW0tcGFkZGluZzogMC42ODc1cmVtIDEuMTI1cmVtLCBidXR0b24tZ2hvc3QtbGFyZ2UtcGFkZGluZzogMC44MTI1cmVtIDEuMTI1cmVtLCBidXR0b24tZ2hvc3QtZ2lhbnQtcGFkZGluZzogMC45Mzc1cmVtIDEuMzc1cmVtLCBidXR0b24tZ2hvc3QtYmFzaWMtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtNjAwLCBidXR0b24tZ2hvc3QtYmFzaWMtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLCBidXR0b24tZ2hvc3QtYmFzaWMtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC01MDAsIGJ1dHRvbi1naG9zdC1iYXNpYy1mb2N1cy10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy02MDAsIGJ1dHRvbi1naG9zdC1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0xMDAsIGJ1dHRvbi1naG9zdC1iYXNpYy1ob3Zlci1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LCBidXR0b24tZ2hvc3QtYmFzaWMtaG92ZXItdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtNjAwLCBidXR0b24tZ2hvc3QtYmFzaWMtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCwgYnV0dG9uLWdob3N0LWJhc2ljLWFjdGl2ZS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LCBidXR0b24tZ2hvc3QtYmFzaWMtYWN0aXZlLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTYwMCwgYnV0dG9uLWdob3N0LWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCwgYnV0dG9uLWdob3N0LWJhc2ljLWRpc2FibGVkLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsIGJ1dHRvbi1naG9zdC1iYXNpYy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLCBidXR0b24tZ2hvc3QtcHJpbWFyeS10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsIGJ1dHRvbi1naG9zdC1wcmltYXJ5LWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCwgYnV0dG9uLWdob3N0LXByaW1hcnktZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC01MDAsIGJ1dHRvbi1naG9zdC1wcmltYXJ5LWZvY3VzLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvciwgYnV0dG9uLWdob3N0LXByaW1hcnktaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMTAwLCBidXR0b24tZ2hvc3QtcHJpbWFyeS1ob3Zlci1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LCBidXR0b24tZ2hvc3QtcHJpbWFyeS1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsIGJ1dHRvbi1naG9zdC1wcmltYXJ5LWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsIGJ1dHRvbi1naG9zdC1wcmltYXJ5LWFjdGl2ZS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LCBidXR0b24tZ2hvc3QtcHJpbWFyeS1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLCBidXR0b24tZ2hvc3QtcHJpbWFyeS1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsIGJ1dHRvbi1naG9zdC1wcmltYXJ5LWRpc2FibGVkLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsIGJ1dHRvbi1naG9zdC1wcmltYXJ5LWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsIGJ1dHRvbi1naG9zdC1zdWNjZXNzLXRleHQtY29sb3I6IHRleHQtc3VjY2Vzcy1jb2xvciwgYnV0dG9uLWdob3N0LXN1Y2Nlc3MtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLCBidXR0b24tZ2hvc3Qtc3VjY2Vzcy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTUwMCwgYnV0dG9uLWdob3N0LXN1Y2Nlc3MtZm9jdXMtdGV4dC1jb2xvcjogdGV4dC1zdWNjZXNzLWNvbG9yLCBidXR0b24tZ2hvc3Qtc3VjY2Vzcy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0xMDAsIGJ1dHRvbi1naG9zdC1zdWNjZXNzLWhvdmVyLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsIGJ1dHRvbi1naG9zdC1zdWNjZXNzLWhvdmVyLXRleHQtY29sb3I6IHRleHQtc3VjY2Vzcy1jb2xvciwgYnV0dG9uLWdob3N0LXN1Y2Nlc3MtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCwgYnV0dG9uLWdob3N0LXN1Y2Nlc3MtYWN0aXZlLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsIGJ1dHRvbi1naG9zdC1zdWNjZXNzLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LXN1Y2Nlc3MtY29sb3IsIGJ1dHRvbi1naG9zdC1zdWNjZXNzLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCwgYnV0dG9uLWdob3N0LXN1Y2Nlc3MtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCwgYnV0dG9uLWdob3N0LXN1Y2Nlc3MtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvciwgYnV0dG9uLWdob3N0LWluZm8tdGV4dC1jb2xvcjogdGV4dC1pbmZvLWNvbG9yLCBidXR0b24tZ2hvc3QtaW5mby1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsIGJ1dHRvbi1naG9zdC1pbmZvLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNTAwLCBidXR0b24tZ2hvc3QtaW5mby1mb2N1cy10ZXh0LWNvbG9yOiB0ZXh0LWluZm8tY29sb3IsIGJ1dHRvbi1naG9zdC1pbmZvLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTEwMCwgYnV0dG9uLWdob3N0LWluZm8taG92ZXItYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCwgYnV0dG9uLWdob3N0LWluZm8taG92ZXItdGV4dC1jb2xvcjogdGV4dC1pbmZvLWNvbG9yLCBidXR0b24tZ2hvc3QtaW5mby1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLCBidXR0b24tZ2hvc3QtaW5mby1hY3RpdmUtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCwgYnV0dG9uLWdob3N0LWluZm8tYWN0aXZlLXRleHQtY29sb3I6IHRleHQtaW5mby1jb2xvciwgYnV0dG9uLWdob3N0LWluZm8tZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLCBidXR0b24tZ2hvc3QtaW5mby1kaXNhYmxlZC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LCBidXR0b24tZ2hvc3QtaW5mby1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLCBidXR0b24tZ2hvc3Qtd2FybmluZy10ZXh0LWNvbG9yOiB0ZXh0LXdhcm5pbmctY29sb3IsIGJ1dHRvbi1naG9zdC13YXJuaW5nLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCwgYnV0dG9uLWdob3N0LXdhcm5pbmctZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC01MDAsIGJ1dHRvbi1naG9zdC13YXJuaW5nLWZvY3VzLXRleHQtY29sb3I6IHRleHQtd2FybmluZy1jb2xvciwgYnV0dG9uLWdob3N0LXdhcm5pbmctaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMTAwLCBidXR0b24tZ2hvc3Qtd2FybmluZy1ob3Zlci1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LCBidXR0b24tZ2hvc3Qtd2FybmluZy1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LXdhcm5pbmctY29sb3IsIGJ1dHRvbi1naG9zdC13YXJuaW5nLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsIGJ1dHRvbi1naG9zdC13YXJuaW5nLWFjdGl2ZS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LCBidXR0b24tZ2hvc3Qtd2FybmluZy1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC13YXJuaW5nLWNvbG9yLCBidXR0b24tZ2hvc3Qtd2FybmluZy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsIGJ1dHRvbi1naG9zdC13YXJuaW5nLWRpc2FibGVkLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsIGJ1dHRvbi1naG9zdC13YXJuaW5nLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsIGJ1dHRvbi1naG9zdC1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1kYW5nZXItY29sb3IsIGJ1dHRvbi1naG9zdC1kYW5nZXItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLCBidXR0b24tZ2hvc3QtZGFuZ2VyLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNTAwLCBidXR0b24tZ2hvc3QtZGFuZ2VyLWZvY3VzLXRleHQtY29sb3I6IHRleHQtZGFuZ2VyLWNvbG9yLCBidXR0b24tZ2hvc3QtZGFuZ2VyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTEwMCwgYnV0dG9uLWdob3N0LWRhbmdlci1ob3Zlci1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LCBidXR0b24tZ2hvc3QtZGFuZ2VyLWhvdmVyLXRleHQtY29sb3I6IHRleHQtZGFuZ2VyLWNvbG9yLCBidXR0b24tZ2hvc3QtZGFuZ2VyLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsIGJ1dHRvbi1naG9zdC1kYW5nZXItYWN0aXZlLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsIGJ1dHRvbi1naG9zdC1kYW5nZXItYWN0aXZlLXRleHQtY29sb3I6IHRleHQtZGFuZ2VyLWNvbG9yLCBidXR0b24tZ2hvc3QtZGFuZ2VyLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCwgYnV0dG9uLWdob3N0LWRhbmdlci1kaXNhYmxlZC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LCBidXR0b24tZ2hvc3QtZGFuZ2VyLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsIGJ1dHRvbi1naG9zdC1jb250cm9sLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCwgYnV0dG9uLWdob3N0LWNvbnRyb2wtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLCBidXR0b24tZ2hvc3QtY29udHJvbC1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTUwMCwgYnV0dG9uLWdob3N0LWNvbnRyb2wtZm9jdXMtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtMTAwLCBidXR0b24tZ2hvc3QtY29udHJvbC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0xMDAsIGJ1dHRvbi1naG9zdC1jb250cm9sLWhvdmVyLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsIGJ1dHRvbi1naG9zdC1jb250cm9sLWhvdmVyLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCwgYnV0dG9uLWdob3N0LWNvbnRyb2wtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCwgYnV0dG9uLWdob3N0LWNvbnRyb2wtYWN0aXZlLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsIGJ1dHRvbi1naG9zdC1jb250cm9sLWFjdGl2ZS10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsIGJ1dHRvbi1naG9zdC1jb250cm9sLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCwgYnV0dG9uLWdob3N0LWNvbnRyb2wtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCwgYnV0dG9uLWdob3N0LWNvbnRyb2wtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvciwgYnV0dG9uLWhlcm8tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCwgYnV0dG9uLWhlcm8tYm9yZGVyLXN0eWxlOiBzb2xpZCwgYnV0dG9uLWhlcm8tYm9yZGVyLXdpZHRoOiAwLCBidXR0b24taGVyby10ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlLCBidXR0b24taGVyby10aW55LXBhZGRpbmc6IDAuMzc1cmVtIDAuNjg3NXJlbSwgYnV0dG9uLWhlcm8tc21hbGwtcGFkZGluZzogMC41cmVtIDAuOTM3NXJlbSwgYnV0dG9uLWhlcm8tbWVkaXVtLXBhZGRpbmc6IDAuNzVyZW0gMS4xODc1cmVtLCBidXR0b24taGVyby1sYXJnZS1wYWRkaW5nOiAwLjg3NXJlbSAxLjE4NzVyZW0sIGJ1dHRvbi1oZXJvLWdpYW50LXBhZGRpbmc6IDFyZW0gMS40Mzc1cmVtLCBidXR0b24taGVyby1zaGFkb3c6IDAgMCB0cmFuc3BhcmVudCwgYnV0dG9uLWhlcm8tdGV4dC1zaGFkb3c6IHNoYWRvdywgYnV0dG9uLWhlcm8tYmV2ZWwtc2l6ZTogMCAwIDAgMCwgYnV0dG9uLWhlcm8tZ2xvdy1zaXplOiAwIDAgMCAwLCBidXR0b24taGVyby1vdXRsaW5lLWNvbG9yOiBvdXRsaW5lLWNvbG9yLCBidXR0b24taGVyby1vdXRsaW5lLXdpZHRoOiBvdXRsaW5lLXdpZHRoLCBidXR0b24taGVyby1iYXNpYy10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy02MDAsIGJ1dHRvbi1oZXJvLWJhc2ljLWJldmVsLWNvbG9yOiBjb2xvci1iYXNpYy02MDAsIGJ1dHRvbi1oZXJvLWJhc2ljLWdsb3ctY29sb3I6IGNvbG9yLWJhc2ljLTcwMCwgYnV0dG9uLWhlcm8tYmFzaWMtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy0yMDAsIGJ1dHRvbi1oZXJvLWJhc2ljLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWRlZmF1bHQsIGJ1dHRvbi1oZXJvLWJhc2ljLWZvY3VzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtMzAwLCBidXR0b24taGVyby1iYXNpYy1mb2N1cy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1mb2N1cywgYnV0dG9uLWhlcm8tYmFzaWMtaG92ZXItbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsIGJ1dHRvbi1oZXJvLWJhc2ljLWhvdmVyLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWhvdmVyLCBidXR0b24taGVyby1iYXNpYy1hY3RpdmUtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy0zMDAsIGJ1dHRvbi1oZXJvLWJhc2ljLWFjdGl2ZS1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1hY3RpdmUsIGJ1dHRvbi1oZXJvLWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWRpc2FibGVkLCBidXR0b24taGVyby1iYXNpYy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLCBidXR0b24taGVyby1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvciwgYnV0dG9uLWhlcm8tcHJpbWFyeS1iZXZlbC1jb2xvcjogY29sb3ItcHJpbWFyeS02MDAsIGJ1dHRvbi1oZXJvLXByaW1hcnktZ2xvdy1jb2xvcjogY29sb3ItcHJpbWFyeS03MDAsIGJ1dHRvbi1oZXJvLXByaW1hcnktbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LTQwMCwgYnV0dG9uLWhlcm8tcHJpbWFyeS1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsIGJ1dHRvbi1oZXJvLXByaW1hcnktZm9jdXMtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LTUwMCwgYnV0dG9uLWhlcm8tcHJpbWFyeS1mb2N1cy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLCBidXR0b24taGVyby1wcmltYXJ5LWhvdmVyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS0zMDAsIGJ1dHRvbi1oZXJvLXByaW1hcnktaG92ZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlciwgYnV0dG9uLWhlcm8tcHJpbWFyeS1hY3RpdmUtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LTUwMCwgYnV0dG9uLWhlcm8tcHJpbWFyeS1hY3RpdmUtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUsIGJ1dHRvbi1oZXJvLXByaW1hcnktZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kaXNhYmxlZCwgYnV0dG9uLWhlcm8tcHJpbWFyeS1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLCBidXR0b24taGVyby1zdWNjZXNzLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvciwgYnV0dG9uLWhlcm8tc3VjY2Vzcy1iZXZlbC1jb2xvcjogY29sb3Itc3VjY2Vzcy02MDAsIGJ1dHRvbi1oZXJvLXN1Y2Nlc3MtZ2xvdy1jb2xvcjogY29sb3Itc3VjY2Vzcy03MDAsIGJ1dHRvbi1oZXJvLXN1Y2Nlc3MtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLTQwMCwgYnV0dG9uLWhlcm8tc3VjY2Vzcy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsIGJ1dHRvbi1oZXJvLXN1Y2Nlc3MtZm9jdXMtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLTUwMCwgYnV0dG9uLWhlcm8tc3VjY2Vzcy1mb2N1cy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLCBidXR0b24taGVyby1zdWNjZXNzLWhvdmVyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy0zMDAsIGJ1dHRvbi1oZXJvLXN1Y2Nlc3MtaG92ZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3ZlciwgYnV0dG9uLWhlcm8tc3VjY2Vzcy1hY3RpdmUtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLTUwMCwgYnV0dG9uLWhlcm8tc3VjY2Vzcy1hY3RpdmUtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1hY3RpdmUsIGJ1dHRvbi1oZXJvLXN1Y2Nlc3MtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kaXNhYmxlZCwgYnV0dG9uLWhlcm8tc3VjY2Vzcy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLCBidXR0b24taGVyby1pbmZvLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvciwgYnV0dG9uLWhlcm8taW5mby1iZXZlbC1jb2xvcjogY29sb3ItaW5mby02MDAsIGJ1dHRvbi1oZXJvLWluZm8tZ2xvdy1jb2xvcjogY29sb3ItaW5mby03MDAsIGJ1dHRvbi1oZXJvLWluZm8tbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLTQwMCwgYnV0dG9uLWhlcm8taW5mby1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsIGJ1dHRvbi1oZXJvLWluZm8tZm9jdXMtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLTUwMCwgYnV0dG9uLWhlcm8taW5mby1mb2N1cy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWZvY3VzLCBidXR0b24taGVyby1pbmZvLWhvdmVyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby0zMDAsIGJ1dHRvbi1oZXJvLWluZm8taG92ZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1ob3ZlciwgYnV0dG9uLWhlcm8taW5mby1hY3RpdmUtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLTUwMCwgYnV0dG9uLWhlcm8taW5mby1hY3RpdmUtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1hY3RpdmUsIGJ1dHRvbi1oZXJvLWluZm8tZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1kaXNhYmxlZCwgYnV0dG9uLWhlcm8taW5mby1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLCBidXR0b24taGVyby13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvciwgYnV0dG9uLWhlcm8td2FybmluZy1iZXZlbC1jb2xvcjogY29sb3Itd2FybmluZy02MDAsIGJ1dHRvbi1oZXJvLXdhcm5pbmctZ2xvdy1jb2xvcjogY29sb3Itd2FybmluZy03MDAsIGJ1dHRvbi1oZXJvLXdhcm5pbmctbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLTQwMCwgYnV0dG9uLWhlcm8td2FybmluZy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsIGJ1dHRvbi1oZXJvLXdhcm5pbmctZm9jdXMtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLTUwMCwgYnV0dG9uLWhlcm8td2FybmluZy1mb2N1cy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLCBidXR0b24taGVyby13YXJuaW5nLWhvdmVyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy0zMDAsIGJ1dHRvbi1oZXJvLXdhcm5pbmctaG92ZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1ob3ZlciwgYnV0dG9uLWhlcm8td2FybmluZy1hY3RpdmUtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLTUwMCwgYnV0dG9uLWhlcm8td2FybmluZy1hY3RpdmUtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1hY3RpdmUsIGJ1dHRvbi1oZXJvLXdhcm5pbmctZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kaXNhYmxlZCwgYnV0dG9uLWhlcm8td2FybmluZy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLCBidXR0b24taGVyby1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLCBidXR0b24taGVyby1kYW5nZXItYmV2ZWwtY29sb3I6IGNvbG9yLWRhbmdlci02MDAsIGJ1dHRvbi1oZXJvLWRhbmdlci1nbG93LWNvbG9yOiBjb2xvci1kYW5nZXItNzAwLCBidXR0b24taGVyby1kYW5nZXItbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItNDAwLCBidXR0b24taGVyby1kYW5nZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsIGJ1dHRvbi1oZXJvLWRhbmdlci1mb2N1cy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci01MDAsIGJ1dHRvbi1oZXJvLWRhbmdlci1mb2N1cy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMsIGJ1dHRvbi1oZXJvLWRhbmdlci1ob3Zlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci0zMDAsIGJ1dHRvbi1oZXJvLWRhbmdlci1ob3Zlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXIsIGJ1dHRvbi1oZXJvLWRhbmdlci1hY3RpdmUtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItNTAwLCBidXR0b24taGVyby1kYW5nZXItYWN0aXZlLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1hY3RpdmUsIGJ1dHRvbi1oZXJvLWRhbmdlci1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGlzYWJsZWQsIGJ1dHRvbi1oZXJvLWRhbmdlci1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLCBidXR0b24taGVyby1jb250cm9sLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTgwMCwgYnV0dG9uLWhlcm8tY29udHJvbC1iZXZlbC1jb2xvcjogY29sb3ItYmFzaWMtNjAwLCBidXR0b24taGVyby1jb250cm9sLWdsb3ctY29sb3I6IGNvbG9yLWJhc2ljLTcwMCwgYnV0dG9uLWhlcm8tY29udHJvbC1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCwgYnV0dG9uLWhlcm8tY29udHJvbC1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsIGJ1dHRvbi1oZXJvLWNvbnRyb2wtZm9jdXMtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy0yMDAsIGJ1dHRvbi1oZXJvLWNvbnRyb2wtZm9jdXMtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1mb2N1cywgYnV0dG9uLWhlcm8tY29udHJvbC1ob3Zlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCwgYnV0dG9uLWhlcm8tY29udHJvbC1ob3Zlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWhvdmVyLCBidXR0b24taGVyby1jb250cm9sLWFjdGl2ZS1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLTIwMCwgYnV0dG9uLWhlcm8tY29udHJvbC1hY3RpdmUtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1hY3RpdmUsIGJ1dHRvbi1oZXJvLWNvbnRyb2wtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLCBidXR0b24taGVyby1jb250cm9sLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsIGljb24tYnV0dG9uLWZpbGxlZC10aW55LXBhZGRpbmc6IDAuNDM3NXJlbSAwLjMxMjVyZW0sIGljb24tYnV0dG9uLWZpbGxlZC1zbWFsbC1wYWRkaW5nOiAwLjU2MjVyZW0gMC40Mzc1cmVtLCBpY29uLWJ1dHRvbi1maWxsZWQtbWVkaXVtLXBhZGRpbmc6IDAuNjg3NXJlbSAwLjU2MjVyZW0sIGljb24tYnV0dG9uLWZpbGxlZC1sYXJnZS1wYWRkaW5nOiAwLjgxMjVyZW0gMC42ODc1cmVtLCBpY29uLWJ1dHRvbi1maWxsZWQtZ2lhbnQtcGFkZGluZzogMS4wNjI1cmVtIDAuOTM3NXJlbSwgaWNvbi1idXR0b24tb3V0bGluZS10aW55LXBhZGRpbmc6IDAuNDM3NXJlbSAwLjMxMjVyZW0sIGljb24tYnV0dG9uLW91dGxpbmUtc21hbGwtcGFkZGluZzogMC41NjI1cmVtIDAuNDM3NXJlbSwgaWNvbi1idXR0b24tb3V0bGluZS1tZWRpdW0tcGFkZGluZzogMC42ODc1cmVtIDAuNTYyNXJlbSwgaWNvbi1idXR0b24tb3V0bGluZS1sYXJnZS1wYWRkaW5nOiAwLjgxMjVyZW0gMC42ODc1cmVtLCBpY29uLWJ1dHRvbi1vdXRsaW5lLWdpYW50LXBhZGRpbmc6IDEuMDYyNXJlbSAwLjkzNzVyZW0sIGljb24tYnV0dG9uLWdob3N0LXRpbnktcGFkZGluZzogMC40Mzc1cmVtIDAuMzEyNXJlbSwgaWNvbi1idXR0b24tZ2hvc3Qtc21hbGwtcGFkZGluZzogMC41NjI1cmVtIDAuNDM3NXJlbSwgaWNvbi1idXR0b24tZ2hvc3QtbWVkaXVtLXBhZGRpbmc6IDAuNjg3NXJlbSAwLjU2MjVyZW0sIGljb24tYnV0dG9uLWdob3N0LWxhcmdlLXBhZGRpbmc6IDAuODEyNXJlbSAwLjY4NzVyZW0sIGljb24tYnV0dG9uLWdob3N0LWdpYW50LXBhZGRpbmc6IDEuMDYyNXJlbSAwLjkzNzVyZW0sIGljb24tYnV0dG9uLWhlcm8tdGlueS1wYWRkaW5nOiAwLjVyZW0gMC4zNzVyZW0sIGljb24tYnV0dG9uLWhlcm8tc21hbGwtcGFkZGluZzogMC41NjI1cmVtIDAuNXJlbSwgaWNvbi1idXR0b24taGVyby1tZWRpdW0tcGFkZGluZzogMC43NXJlbSAwLjU2MjVyZW0sIGljb24tYnV0dG9uLWhlcm8tbGFyZ2UtcGFkZGluZzogMC44NzVyZW0gMC42ODc1cmVtLCBpY29uLWJ1dHRvbi1oZXJvLWdpYW50LXBhZGRpbmc6IDEuMDYyNXJlbSAxcmVtLCBpbnB1dC1ib3JkZXItc3R5bGU6IHNvbGlkLCBpbnB1dC1ib3JkZXItd2lkdGg6IDFweCwgaW5wdXQtb3V0bGluZS1jb2xvcjogb3V0bGluZS1jb2xvciwgaW5wdXQtb3V0bGluZS13aWR0aDogb3V0bGluZS13aWR0aCwgaW5wdXQtcGxhY2Vob2xkZXItdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksIGlucHV0LXRleHQtZm9udC1mYW1pbHk6IHRleHQtc3VidGl0bGUtZm9udC1mYW1pbHksIGlucHV0LWJhc2ljLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsIGlucHV0LWJhc2ljLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvciwgaW5wdXQtYmFzaWMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLCBpbnB1dC1iYXNpYy1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LCBpbnB1dC1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsIGlucHV0LWJhc2ljLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LWJvcmRlciwgaW5wdXQtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLCBpbnB1dC1iYXNpYy1ob3Zlci1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LCBpbnB1dC1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsIGlucHV0LWJhc2ljLWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsIGlucHV0LWJhc2ljLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsIGlucHV0LWJhc2ljLWRpc2FibGVkLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsIGlucHV0LXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvciwgaW5wdXQtcHJpbWFyeS1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsIGlucHV0LXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLCBpbnB1dC1wcmltYXJ5LWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LCBpbnB1dC1wcmltYXJ5LWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSwgaW5wdXQtcHJpbWFyeS1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMtYm9yZGVyLCBpbnB1dC1wcmltYXJ5LWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMywgaW5wdXQtcHJpbWFyeS1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXItYm9yZGVyLCBpbnB1dC1wcmltYXJ5LWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMiwgaW5wdXQtcHJpbWFyeS1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LCBpbnB1dC1wcmltYXJ5LWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsIGlucHV0LXByaW1hcnktZGlzYWJsZWQtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvciwgaW5wdXQtc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLCBpbnB1dC1zdWNjZXNzLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvciwgaW5wdXQtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsIGlucHV0LXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsIGlucHV0LXN1Y2Nlc3MtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLCBpbnB1dC1zdWNjZXNzLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1mb2N1cy1ib3JkZXIsIGlucHV0LXN1Y2Nlc3MtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLCBpbnB1dC1zdWNjZXNzLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3Zlci1ib3JkZXIsIGlucHV0LXN1Y2Nlc3MtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLCBpbnB1dC1zdWNjZXNzLWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsIGlucHV0LXN1Y2Nlc3MtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvciwgaW5wdXQtc3VjY2Vzcy1kaXNhYmxlZC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLCBpbnB1dC1pbmZvLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsIGlucHV0LWluZm8tcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLCBpbnB1dC1pbmZvLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMiwgaW5wdXQtaW5mby1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCwgaW5wdXQtaW5mby1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsIGlucHV0LWluZm8tZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWZvY3VzLWJvcmRlciwgaW5wdXQtaW5mby1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsIGlucHV0LWluZm8taG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLWJvcmRlciwgaW5wdXQtaW5mby1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsIGlucHV0LWluZm8tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCwgaW5wdXQtaW5mby1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLCBpbnB1dC1pbmZvLWRpc2FibGVkLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsIGlucHV0LXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvciwgaW5wdXQtd2FybmluZy1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsIGlucHV0LXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLCBpbnB1dC13YXJuaW5nLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LCBpbnB1dC13YXJuaW5nLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSwgaW5wdXQtd2FybmluZy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMtYm9yZGVyLCBpbnB1dC13YXJuaW5nLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMywgaW5wdXQtd2FybmluZy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXItYm9yZGVyLCBpbnB1dC13YXJuaW5nLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMiwgaW5wdXQtd2FybmluZy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LCBpbnB1dC13YXJuaW5nLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsIGlucHV0LXdhcm5pbmctZGlzYWJsZWQtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvciwgaW5wdXQtZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsIGlucHV0LWRhbmdlci1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsIGlucHV0LWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsIGlucHV0LWRhbmdlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LCBpbnB1dC1kYW5nZXItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLCBpbnB1dC1kYW5nZXItZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMtYm9yZGVyLCBpbnB1dC1kYW5nZXItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLCBpbnB1dC1kYW5nZXItaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXItYm9yZGVyLCBpbnB1dC1kYW5nZXItZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLCBpbnB1dC1kYW5nZXItZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCwgaW5wdXQtZGFuZ2VyLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsIGlucHV0LWRhbmdlci1kaXNhYmxlZC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLCBpbnB1dC1jb250cm9sLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvciwgaW5wdXQtY29udHJvbC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsIGlucHV0LWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC0zMDAsIGlucHV0LWNvbnRyb2wtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTUwMCwgaW5wdXQtY29udHJvbC1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTUwMCwgaW5wdXQtY29udHJvbC1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLCBpbnB1dC1jb250cm9sLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtNDAwLCBpbnB1dC1jb250cm9sLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsIGlucHV0LWNvbnRyb2wtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kaXNhYmxlZCwgaW5wdXQtY29udHJvbC1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLCBpbnB1dC1jb250cm9sLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvciwgaW5wdXQtY29udHJvbC1kaXNhYmxlZC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsIGlucHV0LXJlY3RhbmdsZS1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLCBpbnB1dC1zZW1pLXJvdW5kLWJvcmRlci1yYWRpdXM6IDAuNzVyZW0sIGlucHV0LXJvdW5kLWJvcmRlci1yYWRpdXM6IDEuNXJlbSwgaW5wdXQtdGlueS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1jYXB0aW9uLTItZm9udC1zaXplLCBpbnB1dC10aW55LXRleHQtZm9udC13ZWlnaHQ6IHRleHQtY2FwdGlvbi0yLWZvbnQtd2VpZ2h0LCBpbnB1dC10aW55LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtY2FwdGlvbi0yLWxpbmUtaGVpZ2h0LCBpbnB1dC10aW55LXBsYWNlaG9sZGVyLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsIGlucHV0LXRpbnktcGxhY2Vob2xkZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsIGlucHV0LXRpbnktcGxhY2Vob2xkZXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsIGlucHV0LXRpbnktcGFkZGluZzogMC4xODc1cmVtIDFyZW0sIGlucHV0LXRpbnktbWF4LXdpZHRoOiAyMHJlbSwgaW5wdXQtc21hbGwtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtMi1mb250LXNpemUsIGlucHV0LXNtYWxsLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1mb250LXdlaWdodCwgaW5wdXQtc21hbGwtdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWxpbmUtaGVpZ2h0LCBpbnB1dC1zbWFsbC1wbGFjZWhvbGRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLCBpbnB1dC1zbWFsbC1wbGFjZWhvbGRlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCwgaW5wdXQtc21hbGwtcGxhY2Vob2xkZXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsIGlucHV0LXNtYWxsLXBhZGRpbmc6IDAuMTg3NXJlbSAxcmVtLCBpbnB1dC1zbWFsbC1tYXgtd2lkdGg6IDIwcmVtLCBpbnB1dC1tZWRpdW0tdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLCBpbnB1dC1tZWRpdW0tdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCwgaW5wdXQtbWVkaXVtLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsIGlucHV0LW1lZGl1bS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLCBpbnB1dC1tZWRpdW0tcGxhY2Vob2xkZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsIGlucHV0LW1lZGl1bS1wbGFjZWhvbGRlci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCwgaW5wdXQtbWVkaXVtLXBhZGRpbmc6IDAuNDM3NXJlbSAxcmVtLCBpbnB1dC1tZWRpdW0tbWF4LXdpZHRoOiAyMHJlbSwgaW5wdXQtbGFyZ2UtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLCBpbnB1dC1sYXJnZS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LCBpbnB1dC1sYXJnZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LCBpbnB1dC1sYXJnZS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLCBpbnB1dC1sYXJnZS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCwgaW5wdXQtbGFyZ2UtcGxhY2Vob2xkZXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsIGlucHV0LWxhcmdlLXBhZGRpbmc6IDAuNjg3NXJlbSAxcmVtLCBpbnB1dC1sYXJnZS1tYXgtd2lkdGg6IDMwcmVtLCBpbnB1dC1naWFudC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1oZWFkaW5nLTYtZm9udC1zaXplLCBpbnB1dC1naWFudC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWhlYWRpbmctNi1mb250LXdlaWdodCwgaW5wdXQtZ2lhbnQtdGV4dC1saW5lLWhlaWdodDogdGV4dC1oZWFkaW5nLTYtbGluZS1oZWlnaHQsIGlucHV0LWdpYW50LXBsYWNlaG9sZGVyLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsIGlucHV0LWdpYW50LXBsYWNlaG9sZGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LCBpbnB1dC1naWFudC1wbGFjZWhvbGRlci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCwgaW5wdXQtZ2lhbnQtcGFkZGluZzogMC45Mzc1cmVtIDFyZW0sIGlucHV0LWdpYW50LW1heC13aWR0aDogMzByZW0sIGNoZWNrYm94LWhlaWdodDogMS4yNXJlbSwgY2hlY2tib3gtd2lkdGg6IDEuMjVyZW0sIGNoZWNrYm94LWJvcmRlci1zdHlsZTogc29saWQsIGNoZWNrYm94LWJvcmRlci13aWR0aDogMXB4LCBjaGVja2JveC1ib3JkZXItcmFkaXVzOiAzcHgsIGNoZWNrYm94LW91dGxpbmUtd2lkdGg6IG91dGxpbmUtd2lkdGgsIGNoZWNrYm94LW91dGxpbmUtY29sb3I6IG91dGxpbmUtY29sb3IsIGNoZWNrYm94LXRleHQtZm9udC1mYW1pbHk6IHRleHQtc3VidGl0bGUtMi1mb250LWZhbWlseSwgY2hlY2tib3gtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtMi1mb250LXNpemUsIGNoZWNrYm94LXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1mb250LXdlaWdodCwgY2hlY2tib3gtdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWxpbmUtaGVpZ2h0LCBjaGVja2JveC10ZXh0LXNwYWNlOiAwLjY4NzVyZW0sIGNoZWNrYm94LXBhZGRpbmc6IDAsIGNoZWNrYm94LWZvY3VzLWluc2V0LXNoYWRvdy1sZW5ndGg6IDAgMCAwIDEwMHZtYXgsIGNoZWNrYm94LWJhc2ljLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsIGNoZWNrYm94LWJhc2ljLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRlZmF1bHQsIGNoZWNrYm94LWJhc2ljLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsIGNoZWNrYm94LWJhc2ljLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LCBjaGVja2JveC1iYXNpYy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LWJvcmRlciwgY2hlY2tib3gtYmFzaWMtY2hlY2tlZC1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvciwgY2hlY2tib3gtYmFzaWMtaW5kZXRlcm1pbmF0ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsIGNoZWNrYm94LWJhc2ljLWluZGV0ZXJtaW5hdGUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQtYm9yZGVyLCBjaGVja2JveC1iYXNpYy1pbmRldGVybWluYXRlLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLCBjaGVja2JveC1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1mb2N1cywgY2hlY2tib3gtYmFzaWMtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsIGNoZWNrYm94LWJhc2ljLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cywgY2hlY2tib3gtYmFzaWMtZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMtYm9yZGVyLCBjaGVja2JveC1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLCBjaGVja2JveC1iYXNpYy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLCBjaGVja2JveC1iYXNpYy1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsIGNoZWNrYm94LWJhc2ljLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLWJvcmRlciwgY2hlY2tib3gtYmFzaWMtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWFjdGl2ZSwgY2hlY2tib3gtYmFzaWMtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlciwgY2hlY2tib3gtYmFzaWMtYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUsIGNoZWNrYm94LWJhc2ljLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUtYm9yZGVyLCBjaGVja2JveC1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZCwgY2hlY2tib3gtYmFzaWMtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsIGNoZWNrYm94LWJhc2ljLWRpc2FibGVkLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLCBjaGVja2JveC1iYXNpYy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLCBjaGVja2JveC1iYXNpYy1kaXNhYmxlZC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCwgY2hlY2tib3gtYmFzaWMtZGlzYWJsZWQtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCwgY2hlY2tib3gtcHJpbWFyeS10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLCBjaGVja2JveC1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGVmYXVsdCwgY2hlY2tib3gtcHJpbWFyeS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsIGNoZWNrYm94LXByaW1hcnktY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsIGNoZWNrYm94LXByaW1hcnktY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdC1ib3JkZXIsIGNoZWNrYm94LXByaW1hcnktY2hlY2tlZC1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvciwgY2hlY2tib3gtcHJpbWFyeS1pbmRldGVybWluYXRlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCwgY2hlY2tib3gtcHJpbWFyeS1pbmRldGVybWluYXRlLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LWJvcmRlciwgY2hlY2tib3gtcHJpbWFyeS1pbmRldGVybWluYXRlLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLCBjaGVja2JveC1wcmltYXJ5LWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZm9jdXMsIGNoZWNrYm94LXByaW1hcnktZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlciwgY2hlY2tib3gtcHJpbWFyeS1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMsIGNoZWNrYm94LXByaW1hcnktZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMtYm9yZGVyLCBjaGVja2JveC1wcmltYXJ5LWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXIsIGNoZWNrYm94LXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlciwgY2hlY2tib3gtcHJpbWFyeS1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsIGNoZWNrYm94LXByaW1hcnktaG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXItYm9yZGVyLCBjaGVja2JveC1wcmltYXJ5LWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZSwgY2hlY2tib3gtcHJpbWFyeS1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsIGNoZWNrYm94LXByaW1hcnktYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUsIGNoZWNrYm94LXByaW1hcnktYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZS1ib3JkZXIsIGNoZWNrYm94LXByaW1hcnktZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsIGNoZWNrYm94LXByaW1hcnktZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsIGNoZWNrYm94LXByaW1hcnktZGlzYWJsZWQtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsIGNoZWNrYm94LXByaW1hcnktZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvciwgY2hlY2tib3gtcHJpbWFyeS1kaXNhYmxlZC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCwgY2hlY2tib3gtcHJpbWFyeS1kaXNhYmxlZC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLCBjaGVja2JveC1zdWNjZXNzLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsIGNoZWNrYm94LXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kZWZhdWx0LCBjaGVja2JveC1zdWNjZXNzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlciwgY2hlY2tib3gtc3VjY2Vzcy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCwgY2hlY2tib3gtc3VjY2Vzcy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LWJvcmRlciwgY2hlY2tib3gtc3VjY2Vzcy1jaGVja2VkLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLCBjaGVja2JveC1zdWNjZXNzLWluZGV0ZXJtaW5hdGUtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LCBjaGVja2JveC1zdWNjZXNzLWluZGV0ZXJtaW5hdGUtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQtYm9yZGVyLCBjaGVja2JveC1zdWNjZXNzLWluZGV0ZXJtaW5hdGUtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsIGNoZWNrYm94LXN1Y2Nlc3MtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1mb2N1cywgY2hlY2tib3gtc3VjY2Vzcy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLCBjaGVja2JveC1zdWNjZXNzLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1mb2N1cywgY2hlY2tib3gtc3VjY2Vzcy1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1mb2N1cy1ib3JkZXIsIGNoZWNrYm94LXN1Y2Nlc3MtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1ob3ZlciwgY2hlY2tib3gtc3VjY2Vzcy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLCBjaGVja2JveC1zdWNjZXNzLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3ZlciwgY2hlY2tib3gtc3VjY2Vzcy1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3Zlci1ib3JkZXIsIGNoZWNrYm94LXN1Y2Nlc3MtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtYWN0aXZlLCBjaGVja2JveC1zdWNjZXNzLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlciwgY2hlY2tib3gtc3VjY2Vzcy1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWFjdGl2ZSwgY2hlY2tib3gtc3VjY2Vzcy1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtYWN0aXZlLWJvcmRlciwgY2hlY2tib3gtc3VjY2Vzcy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZCwgY2hlY2tib3gtc3VjY2Vzcy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlciwgY2hlY2tib3gtc3VjY2Vzcy1kaXNhYmxlZC1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvciwgY2hlY2tib3gtc3VjY2Vzcy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLCBjaGVja2JveC1zdWNjZXNzLWRpc2FibGVkLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLCBjaGVja2JveC1zdWNjZXNzLWRpc2FibGVkLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsIGNoZWNrYm94LWluZm8tdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvciwgY2hlY2tib3gtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRlZmF1bHQsIGNoZWNrYm94LWluZm8tYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLCBjaGVja2JveC1pbmZvLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LCBjaGVja2JveC1pbmZvLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQtYm9yZGVyLCBjaGVja2JveC1pbmZvLWNoZWNrZWQtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsIGNoZWNrYm94LWluZm8taW5kZXRlcm1pbmF0ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsIGNoZWNrYm94LWluZm8taW5kZXRlcm1pbmF0ZS1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdC1ib3JkZXIsIGNoZWNrYm94LWluZm8taW5kZXRlcm1pbmF0ZS1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvciwgY2hlY2tib3gtaW5mby1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWZvY3VzLCBjaGVja2JveC1pbmZvLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsIGNoZWNrYm94LWluZm8tZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWZvY3VzLCBjaGVja2JveC1pbmZvLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWZvY3VzLWJvcmRlciwgY2hlY2tib3gtaW5mby1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWhvdmVyLCBjaGVja2JveC1pbmZvLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsIGNoZWNrYm94LWluZm8taG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLCBjaGVja2JveC1pbmZvLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLWJvcmRlciwgY2hlY2tib3gtaW5mby1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1hY3RpdmUsIGNoZWNrYm94LWluZm8tYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLCBjaGVja2JveC1pbmZvLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tYWN0aXZlLCBjaGVja2JveC1pbmZvLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1hY3RpdmUtYm9yZGVyLCBjaGVja2JveC1pbmZvLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLCBjaGVja2JveC1pbmZvLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLCBjaGVja2JveC1pbmZvLWRpc2FibGVkLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLCBjaGVja2JveC1pbmZvLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsIGNoZWNrYm94LWluZm8tZGlzYWJsZWQtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsIGNoZWNrYm94LWluZm8tZGlzYWJsZWQtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCwgY2hlY2tib3gtd2FybmluZy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLCBjaGVja2JveC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZGVmYXVsdCwgY2hlY2tib3gtd2FybmluZy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsIGNoZWNrYm94LXdhcm5pbmctY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsIGNoZWNrYm94LXdhcm5pbmctY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdC1ib3JkZXIsIGNoZWNrYm94LXdhcm5pbmctY2hlY2tlZC1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvciwgY2hlY2tib3gtd2FybmluZy1pbmRldGVybWluYXRlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCwgY2hlY2tib3gtd2FybmluZy1pbmRldGVybWluYXRlLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LWJvcmRlciwgY2hlY2tib3gtd2FybmluZy1pbmRldGVybWluYXRlLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLCBjaGVja2JveC13YXJuaW5nLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZm9jdXMsIGNoZWNrYm94LXdhcm5pbmctZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlciwgY2hlY2tib3gtd2FybmluZy1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMsIGNoZWNrYm94LXdhcm5pbmctZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMtYm9yZGVyLCBjaGVja2JveC13YXJuaW5nLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtaG92ZXIsIGNoZWNrYm94LXdhcm5pbmctaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlciwgY2hlY2tib3gtd2FybmluZy1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXIsIGNoZWNrYm94LXdhcm5pbmctaG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXItYm9yZGVyLCBjaGVja2JveC13YXJuaW5nLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWFjdGl2ZSwgY2hlY2tib3gtd2FybmluZy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsIGNoZWNrYm94LXdhcm5pbmctYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1hY3RpdmUsIGNoZWNrYm94LXdhcm5pbmctYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWFjdGl2ZS1ib3JkZXIsIGNoZWNrYm94LXdhcm5pbmctZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsIGNoZWNrYm94LXdhcm5pbmctZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsIGNoZWNrYm94LXdhcm5pbmctZGlzYWJsZWQtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsIGNoZWNrYm94LXdhcm5pbmctZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvciwgY2hlY2tib3gtd2FybmluZy1kaXNhYmxlZC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCwgY2hlY2tib3gtd2FybmluZy1kaXNhYmxlZC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLCBjaGVja2JveC1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvciwgY2hlY2tib3gtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1kZWZhdWx0LCBjaGVja2JveC1kYW5nZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsIGNoZWNrYm94LWRhbmdlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LCBjaGVja2JveC1kYW5nZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LWJvcmRlciwgY2hlY2tib3gtZGFuZ2VyLWNoZWNrZWQtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsIGNoZWNrYm94LWRhbmdlci1pbmRldGVybWluYXRlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LCBjaGVja2JveC1kYW5nZXItaW5kZXRlcm1pbmF0ZS1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LWJvcmRlciwgY2hlY2tib3gtZGFuZ2VyLWluZGV0ZXJtaW5hdGUtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsIGNoZWNrYm94LWRhbmdlci1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZm9jdXMsIGNoZWNrYm94LWRhbmdlci1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsIGNoZWNrYm94LWRhbmdlci1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1mb2N1cywgY2hlY2tib3gtZGFuZ2VyLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMtYm9yZGVyLCBjaGVja2JveC1kYW5nZXItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWhvdmVyLCBjaGVja2JveC1kYW5nZXItaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLCBjaGVja2JveC1kYW5nZXItaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXIsIGNoZWNrYm94LWRhbmdlci1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLWJvcmRlciwgY2hlY2tib3gtZGFuZ2VyLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtYWN0aXZlLCBjaGVja2JveC1kYW5nZXItYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsIGNoZWNrYm94LWRhbmdlci1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItYWN0aXZlLCBjaGVja2JveC1kYW5nZXItYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItYWN0aXZlLWJvcmRlciwgY2hlY2tib3gtZGFuZ2VyLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLCBjaGVja2JveC1kYW5nZXItZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsIGNoZWNrYm94LWRhbmdlci1kaXNhYmxlZC1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvciwgY2hlY2tib3gtZGFuZ2VyLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsIGNoZWNrYm94LWRhbmdlci1kaXNhYmxlZC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCwgY2hlY2tib3gtZGFuZ2VyLWRpc2FibGVkLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsIGNoZWNrYm94LWNvbnRyb2wtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLCBjaGVja2JveC1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGVmYXVsdCwgY2hlY2tib3gtY29udHJvbC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsIGNoZWNrYm94LWNvbnRyb2wtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsIGNoZWNrYm94LWNvbnRyb2wtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdC1ib3JkZXIsIGNoZWNrYm94LWNvbnRyb2wtY2hlY2tlZC1jaGVja21hcmstY29sb3I6IGNvbG9yLWJhc2ljLTgwMCwgY2hlY2tib3gtY29udHJvbC1pbmRldGVybWluYXRlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCwgY2hlY2tib3gtY29udHJvbC1pbmRldGVybWluYXRlLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LWJvcmRlciwgY2hlY2tib3gtY29udHJvbC1pbmRldGVybWluYXRlLWNoZWNrbWFyay1jb2xvcjogY29sb3ItYmFzaWMtODAwLCBjaGVja2JveC1jb250cm9sLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZm9jdXMsIGNoZWNrYm94LWNvbnRyb2wtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlciwgY2hlY2tib3gtY29udHJvbC1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZm9jdXMsIGNoZWNrYm94LWNvbnRyb2wtZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtZm9jdXMtYm9yZGVyLCBjaGVja2JveC1jb250cm9sLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtaG92ZXIsIGNoZWNrYm94LWNvbnRyb2wtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlciwgY2hlY2tib3gtY29udHJvbC1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtaG92ZXIsIGNoZWNrYm94LWNvbnRyb2wtaG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtaG92ZXItYm9yZGVyLCBjaGVja2JveC1jb250cm9sLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZSwgY2hlY2tib3gtY29udHJvbC1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsIGNoZWNrYm94LWNvbnRyb2wtYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1hY3RpdmUsIGNoZWNrYm94LWNvbnRyb2wtYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWFjdGl2ZS1ib3JkZXIsIGNoZWNrYm94LWNvbnRyb2wtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kaXNhYmxlZCwgY2hlY2tib3gtY29udHJvbC1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLCBjaGVja2JveC1jb250cm9sLWRpc2FibGVkLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLCBjaGVja2JveC1jb250cm9sLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvciwgY2hlY2tib3gtY29udHJvbC1kaXNhYmxlZC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCwgY2hlY2tib3gtY29udHJvbC1kaXNhYmxlZC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLCBiYWRnZS1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLCBiYWRnZS10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LWJ1dHRvbi1mb250LWZhbWlseSwgYmFkZ2UtdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLXRpbnktZm9udC1zaXplLCBiYWRnZS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWJ1dHRvbi1mb250LXdlaWdodCwgYmFkZ2UtdGV4dC1saW5lLWhlaWdodDogdGV4dC1idXR0b24tdGlueS1saW5lLWhlaWdodCwgYmFkZ2UtcGFkZGluZzogMC4yNXJlbSAwLjRyZW0sIGJhZGdlLWJhc2ljLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMiwgYmFkZ2UtYmFzaWMtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvciwgYmFkZ2UtcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsIGJhZGdlLXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLCBiYWRnZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCwgYmFkZ2Utc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsIGJhZGdlLWluZm8tYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LCBiYWRnZS1pbmZvLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvciwgYmFkZ2Utd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsIGJhZGdlLXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLCBiYWRnZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsIGJhZGdlLWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsIGJhZGdlLWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LCBiYWRnZS1jb250cm9sLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTgwMCwgcHJvZ3Jlc3MtYmFyLWFuaW1hdGlvbi1kdXJhdGlvbjogNDAwbXMsIHByb2dyZXNzLWJhci1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLCBwcm9ncmVzcy1iYXItdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS1mb250LWZhbWlseSwgcHJvZ3Jlc3MtYmFyLXRpbnktaGVpZ2h0OiAxcmVtLCBwcm9ncmVzcy1iYXItdGlueS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtc2l6ZSwgcHJvZ3Jlc3MtYmFyLXRpbnktdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtd2VpZ2h0LCBwcm9ncmVzcy1iYXItdGlueS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItbGluZS1oZWlnaHQsIHByb2dyZXNzLWJhci1zbWFsbC1oZWlnaHQ6IDEuMjVyZW0sIHByb2dyZXNzLWJhci1zbWFsbC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtc2l6ZSwgcHJvZ3Jlc3MtYmFyLXNtYWxsLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1mb250LXdlaWdodCwgcHJvZ3Jlc3MtYmFyLXNtYWxsLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1saW5lLWhlaWdodCwgcHJvZ3Jlc3MtYmFyLW1lZGl1bS1oZWlnaHQ6IDEuMzc1cmVtLCBwcm9ncmVzcy1iYXItbWVkaXVtLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSwgcHJvZ3Jlc3MtYmFyLW1lZGl1bS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LCBwcm9ncmVzcy1iYXItbWVkaXVtLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsIHByb2dyZXNzLWJhci1sYXJnZS1oZWlnaHQ6IDEuNXJlbSwgcHJvZ3Jlc3MtYmFyLWxhcmdlLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSwgcHJvZ3Jlc3MtYmFyLWxhcmdlLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsIHByb2dyZXNzLWJhci1sYXJnZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LCBwcm9ncmVzcy1iYXItZ2lhbnQtaGVpZ2h0OiAxLjc1cmVtLCBwcm9ncmVzcy1iYXItZ2lhbnQtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLCBwcm9ncmVzcy1iYXItZ2lhbnQtdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCwgcHJvZ3Jlc3MtYmFyLWdpYW50LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsIHByb2dyZXNzLWJhci1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsIHByb2dyZXNzLWJhci1iYXNpYy1maWxsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci00LCBwcm9ncmVzcy1iYXItYmFzaWMtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvciwgcHJvZ3Jlc3MtYmFyLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLCBwcm9ncmVzcy1iYXItcHJpbWFyeS1maWxsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LCBwcm9ncmVzcy1iYXItcHJpbWFyeS10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsIHByb2dyZXNzLWJhci1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMywgcHJvZ3Jlc3MtYmFyLXN1Y2Nlc3MtZmlsbGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCwgcHJvZ3Jlc3MtYmFyLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLCBwcm9ncmVzcy1iYXItaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsIHByb2dyZXNzLWJhci1pbmZvLWZpbGxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsIHByb2dyZXNzLWJhci1pbmZvLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvciwgcHJvZ3Jlc3MtYmFyLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLCBwcm9ncmVzcy1iYXItd2FybmluZy1maWxsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LCBwcm9ncmVzcy1iYXItd2FybmluZy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsIHByb2dyZXNzLWJhci1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLCBwcm9ncmVzcy1iYXItZGFuZ2VyLWZpbGxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCwgcHJvZ3Jlc3MtYmFyLWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsIHByb2dyZXNzLWJhci1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMywgcHJvZ3Jlc3MtYmFyLWNvbnRyb2wtZmlsbGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCwgcHJvZ3Jlc3MtYmFyLWNvbnRyb2wtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtODAwLCBhbGVydC1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLCBhbGVydC1ib3R0b20tbWFyZ2luOiAxLjVyZW0sIGFsZXJ0LXBhZGRpbmc6IDFyZW0gMS4xMjVyZW0sIGFsZXJ0LXNjcm9sbGJhci1jb2xvcjogc2Nyb2xsYmFyLWNvbG9yLCBhbGVydC1zY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvcjogc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3IsIGFsZXJ0LXNjcm9sbGJhci13aWR0aDogc2Nyb2xsYmFyLXdpZHRoLCBhbGVydC1zaGFkb3c6IG5vbmUsIGFsZXJ0LXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LCBhbGVydC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsIGFsZXJ0LXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsIGFsZXJ0LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsIGFsZXJ0LWNsb3NhYmxlLXN0YXJ0LXBhZGRpbmc6IDNyZW0sIGFsZXJ0LXRpbnktaGVpZ2h0OiA0LjVyZW0sIGFsZXJ0LXNtYWxsLWhlaWdodDogNS43NXJlbSwgYWxlcnQtbWVkaXVtLWhlaWdodDogN3JlbSwgYWxlcnQtbWVkaXVtLXBhZGRpbmc6IDFyZW0gMS4xMjVyZW0sIGFsZXJ0LWxhcmdlLWhlaWdodDogOC4yNXJlbSwgYWxlcnQtZ2lhbnQtaGVpZ2h0OiA5LjVyZW0sIGFsZXJ0LWJhc2ljLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMiwgYWxlcnQtYmFzaWMtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvciwgYWxlcnQtcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsIGFsZXJ0LXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLCBhbGVydC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCwgYWxlcnQtc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsIGFsZXJ0LWluZm8tYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LCBhbGVydC1pbmZvLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvciwgYWxlcnQtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsIGFsZXJ0LXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLCBhbGVydC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsIGFsZXJ0LWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsIGFsZXJ0LWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LCBhbGVydC1jb250cm9sLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTgwMCwgYWxlcnQtYWNjZW50LWJhc2ljLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMywgYWxlcnQtYWNjZW50LXByaW1hcnktY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCwgYWxlcnQtYWNjZW50LWluZm8tY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCwgYWxlcnQtYWNjZW50LXN1Y2Nlc3MtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCwgYWxlcnQtYWNjZW50LXdhcm5pbmctY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCwgYWxlcnQtYWNjZW50LWRhbmdlci1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsIGFsZXJ0LWFjY2VudC1jb250cm9sLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsIGFsZXJ0LW91dGxpbmUtd2lkdGg6IDFweCwgYWxlcnQtb3V0bGluZS1iYXNpYy1jb2xvcjogY29sb3ItYmFzaWMtZm9jdXMtYm9yZGVyLCBhbGVydC1vdXRsaW5lLXByaW1hcnktY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMtYm9yZGVyLCBhbGVydC1vdXRsaW5lLWluZm8tY29sb3I6IGNvbG9yLWluZm8tZm9jdXMtYm9yZGVyLCBhbGVydC1vdXRsaW5lLXN1Y2Nlc3MtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLCBhbGVydC1vdXRsaW5lLXdhcm5pbmctY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMtYm9yZGVyLCBhbGVydC1vdXRsaW5lLWRhbmdlci1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLWJvcmRlciwgYWxlcnQtb3V0bGluZS1jb250cm9sLWNvbG9yOiBjb2xvci1jb250cm9sLWZvY3VzLWJvcmRlciwgY2hhdC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsIGNoYXQtYm9yZGVyOiBub25lLCBjaGF0LWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsIGNoYXQtc2hhZG93OiBzaGFkb3csIGNoYXQtcGFkZGluZzogMXJlbSAxLjI1cmVtLCBjaGF0LXNjcm9sbGJhci1jb2xvcjogc2Nyb2xsYmFyLWNvbG9yLCBjaGF0LXNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yOiBzY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvciwgY2hhdC1zY3JvbGxiYXItd2lkdGg6IHNjcm9sbGJhci13aWR0aCwgY2hhdC10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLCBjaGF0LXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LCBjaGF0LXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsIGNoYXQtdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsIGNoYXQtdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsIGNoYXQtaGVhZGVyLXRleHQtZm9udC1mYW1pbHk6IHRleHQtc3VidGl0bGUtZm9udC1mYW1pbHksIGNoYXQtaGVhZGVyLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSwgY2hhdC1oZWFkZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCwgY2hhdC1oZWFkZXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCwgY2hhdC10aW55LWhlaWdodDogMTMuNXJlbSwgY2hhdC1zbWFsbC1oZWlnaHQ6IDIxcmVtLCBjaGF0LW1lZGl1bS1oZWlnaHQ6IDI4LjVyZW0sIGNoYXQtbGFyZ2UtaGVpZ2h0OiAzNnJlbSwgY2hhdC1naWFudC1oZWlnaHQ6IDQzLjVyZW0sIGNoYXQtYmFzaWMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLCBjaGF0LWJhc2ljLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsIGNoYXQtcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsIGNoYXQtcHJpbWFyeS10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsIGNoYXQtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsIGNoYXQtc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsIGNoYXQtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsIGNoYXQtaW5mby10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsIGNoYXQtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsIGNoYXQtd2FybmluZy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsIGNoYXQtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LCBjaGF0LWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsIGNoYXQtY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsIGNoYXQtY29udHJvbC10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy04MDAsIGNoYXQtZGl2aWRlci1jb2xvcjogZGl2aWRlci1jb2xvciwgY2hhdC1kaXZpZGVyLXN0eWxlOiBkaXZpZGVyLXN0eWxlLCBjaGF0LWRpdmlkZXItd2lkdGg6IGRpdmlkZXItd2lkdGgsIGNoYXQtbWVzc2FnZS1iYWNrZ3JvdW5kOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsIGNoYXQtbWVzc2FnZS10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsIGNoYXQtbWVzc2FnZS1yZXBseS1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsIGNoYXQtbWVzc2FnZS1yZXBseS10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLCBjaGF0LW1lc3NhZ2UtYXZhdGFyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLTUwMCwgY2hhdC1tZXNzYWdlLXNlbmRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsIGNoYXQtbWVzc2FnZS1xdW90ZS1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsIGNoYXQtbWVzc2FnZS1xdW90ZS10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsIGNoYXQtbWVzc2FnZS1maWxlLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvciwgY2hhdC1tZXNzYWdlLWZpbGUtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsIHNwaW5uZXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvciwgc3Bpbm5lci10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LWJ1dHRvbi1mb250LWZhbWlseSwgc3Bpbm5lci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tbWVkaXVtLWZvbnQtc2l6ZSwgc3Bpbm5lci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWJ1dHRvbi1mb250LXdlaWdodCwgc3Bpbm5lci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi1tZWRpdW0tbGluZS1oZWlnaHQsIHNwaW5uZXItYmFzaWMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLCBzcGlubmVyLWJhc2ljLWNpcmNsZS1maWxsZWQtY29sb3I6IHRleHQtaGludC1jb2xvciwgc3Bpbm5lci1iYXNpYy1jaXJjbGUtZW1wdHktY29sb3I6IHRyYW5zcGFyZW50LCBzcGlubmVyLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLCBzcGlubmVyLXByaW1hcnktY2lyY2xlLWZpbGxlZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LCBzcGlubmVyLXByaW1hcnktY2lyY2xlLWVtcHR5LWNvbG9yOiB0cmFuc3BhcmVudCwgc3Bpbm5lci1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCwgc3Bpbm5lci1pbmZvLWNpcmNsZS1maWxsZWQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCwgc3Bpbm5lci1pbmZvLWNpcmNsZS1lbXB0eS1jb2xvcjogdHJhbnNwYXJlbnQsIHNwaW5uZXItc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsIHNwaW5uZXItc3VjY2Vzcy1jaXJjbGUtZmlsbGVkLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsIHNwaW5uZXItc3VjY2Vzcy1jaXJjbGUtZW1wdHktY29sb3I6IHRyYW5zcGFyZW50LCBzcGlubmVyLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLCBzcGlubmVyLXdhcm5pbmctY2lyY2xlLWZpbGxlZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LCBzcGlubmVyLXdhcm5pbmctY2lyY2xlLWVtcHR5LWNvbG9yOiB0cmFuc3BhcmVudCwgc3Bpbm5lci1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLCBzcGlubmVyLWRhbmdlci1jaXJjbGUtZmlsbGVkLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCwgc3Bpbm5lci1kYW5nZXItY2lyY2xlLWVtcHR5LWNvbG9yOiB0cmFuc3BhcmVudCwgc3Bpbm5lci1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtMjAwLCBzcGlubmVyLWNvbnRyb2wtY2lyY2xlLWZpbGxlZC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LCBzcGlubmVyLWNvbnRyb2wtY2lyY2xlLWVtcHR5LWNvbG9yOiB0cmFuc3BhcmVudCwgc3Bpbm5lci1oZWlnaHQtdGlueTogMXJlbSwgc3Bpbm5lci1oZWlnaHQtc21hbGw6IDEuMjVyZW0sIHNwaW5uZXItaGVpZ2h0LW1lZGl1bTogMS41cmVtLCBzcGlubmVyLWhlaWdodC1sYXJnZTogMS43NXJlbSwgc3Bpbm5lci1oZWlnaHQtZ2lhbnQ6IDJyZW0sIHN0ZXBwZXItc3RlcC10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsIHN0ZXBwZXItc3RlcC10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSwgc3RlcHBlci1zdGVwLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsIHN0ZXBwZXItc3RlcC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCwgc3RlcHBlci1zdGVwLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LCBzdGVwcGVyLXN0ZXAtYWN0aXZlLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1hY3RpdmUtY29sb3IsIHN0ZXBwZXItc3RlcC1jb21wbGV0ZWQtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLCBzdGVwcGVyLXN0ZXAtaW5kZXgtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCwgc3RlcHBlci1zdGVwLWluZGV4LWJvcmRlci1zdHlsZTogc29saWQsIHN0ZXBwZXItc3RlcC1pbmRleC1ib3JkZXItd2lkdGg6IDFweCwgc3RlcHBlci1zdGVwLWluZGV4LWJvcmRlci1yYWRpdXM6IDUwJSwgc3RlcHBlci1zdGVwLWluZGV4LXdpZHRoOiAycmVtLCBzdGVwcGVyLXN0ZXAtaW5kZXgtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUsIHN0ZXBwZXItc3RlcC1pbmRleC1jb21wbGV0ZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LCBzdGVwcGVyLXN0ZXAtaW5kZXgtY29tcGxldGVkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LCBzdGVwcGVyLXN0ZXAtaW5kZXgtY29tcGxldGVkLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvciwgc3RlcHBlci1jb25uZWN0b3ItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLCBzdGVwcGVyLWNvbm5lY3Rvci1jb21wbGV0ZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LCBzdGVwcGVyLWhvcml6b250YWwtY29ubmVjdG9yLW1hcmdpbjogMXJlbSwgc3RlcHBlci12ZXJ0aWNhbC1jb25uZWN0b3ItbWFyZ2luOiAxcmVtLCBzdGVwcGVyLXN0ZXAtY29udGVudC1wYWRkaW5nOiAxLjI1cmVtLCBhY2NvcmRpb24tYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cywgYWNjb3JkaW9uLXBhZGRpbmc6IDEuMjVyZW0sIGFjY29yZGlvbi1zaGFkb3c6IHNoYWRvdywgYWNjb3JkaW9uLWhlYWRlci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLCBhY2NvcmRpb24taGVhZGVyLXRleHQtZm9udC1mYW1pbHk6IHRleHQtc3VidGl0bGUtZm9udC1mYW1pbHksIGFjY29yZGlvbi1oZWFkZXItdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLCBhY2NvcmRpb24taGVhZGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsIGFjY29yZGlvbi1oZWFkZXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCwgYWNjb3JkaW9uLWhlYWRlci1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLCBhY2NvcmRpb24taGVhZGVyLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTMsIGFjY29yZGlvbi1oZWFkZXItYm9yZGVyLXN0eWxlOiBzb2xpZCwgYWNjb3JkaW9uLWhlYWRlci1ib3JkZXItd2lkdGg6IDFweCwgYWNjb3JkaW9uLWl0ZW0tYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLCBhY2NvcmRpb24taXRlbS10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLCBhY2NvcmRpb24taXRlbS10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSwgYWNjb3JkaW9uLWl0ZW0tdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSwgYWNjb3JkaW9uLWl0ZW0tdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsIGFjY29yZGlvbi1pdGVtLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LCBsaXN0LWl0ZW0tZGl2aWRlci1jb2xvcjogZGl2aWRlci1jb2xvciwgbGlzdC1pdGVtLWRpdmlkZXItc3R5bGU6IGRpdmlkZXItc3R5bGUsIGxpc3QtaXRlbS1kaXZpZGVyLXdpZHRoOiBkaXZpZGVyLXdpZHRoLCBsaXN0LWl0ZW0tcGFkZGluZzogMXJlbSwgbGlzdC1pdGVtLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsIGxpc3QtaXRlbS1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksIGxpc3QtaXRlbS1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSwgbGlzdC1pdGVtLWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCwgbGlzdC1pdGVtLWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCwgY2FsZW5kYXItd2lkdGg6IDIwLjYyNXJlbSwgY2FsZW5kYXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLCBjYWxlbmRhci1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LCBjYWxlbmRhci1ib3JkZXItc3R5bGU6IHNvbGlkLCBjYWxlbmRhci1ib3JkZXItd2lkdGg6IDAuMDYyNXJlbSwgY2FsZW5kYXItYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cywgY2FsZW5kYXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvciwgY2FsZW5kYXItdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS1mb250LWZhbWlseSwgY2FsZW5kYXItdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLCBjYWxlbmRhci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LCBjYWxlbmRhci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LCBjYWxlbmRhci1waWNrZXItcGFkZGluZy10b3A6IDAuMjVyZW0sIGNhbGVuZGFyLXBpY2tlci1wYWRkaW5nLWJvdHRvbTogMC42MjVyZW0sIGNhbGVuZGFyLXBpY2tlci1wYWRkaW5nLXN0YXJ0OiAwLjYyNXJlbSwgY2FsZW5kYXItcGlja2VyLXBhZGRpbmctZW5kOiAwLjYyNXJlbSwgY2FsZW5kYXItbmF2aWdhdGlvbi10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLCBjYWxlbmRhci1uYXZpZ2F0aW9uLXRleHQtZm9udC1mYW1pbHk6IHRleHQtYnV0dG9uLWZvbnQtZmFtaWx5LCBjYWxlbmRhci1uYXZpZ2F0aW9uLXRpdGxlLXRleHQtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi1tZWRpdW0tZm9udC1zaXplLCBjYWxlbmRhci1uYXZpZ2F0aW9uLXRpdGxlLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtYnV0dG9uLWZvbnQtd2VpZ2h0LCBjYWxlbmRhci1uYXZpZ2F0aW9uLXRpdGxlLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLW1lZGl1bS1saW5lLWhlaWdodCwgY2FsZW5kYXItbmF2aWdhdGlvbi1wYWRkaW5nOiAwLjYyNXJlbSAwLjI1cmVtLCBjYWxlbmRhci1jZWxsLWluYWN0aXZlLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvciwgY2FsZW5kYXItY2VsbC1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLCBjYWxlbmRhci1jZWxsLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMiwgY2FsZW5kYXItY2VsbC1ob3Zlci1ib3JkZXItY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMiwgY2FsZW5kYXItY2VsbC1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLCBjYWxlbmRhci1jZWxsLWhvdmVyLXRleHQtZm9udC1zaXplOiBjYWxlbmRhci10ZXh0LWZvbnQtc2l6ZSwgY2FsZW5kYXItY2VsbC1ob3Zlci10ZXh0LWZvbnQtd2VpZ2h0OiBjYWxlbmRhci10ZXh0LWZvbnQtd2VpZ2h0LCBjYWxlbmRhci1jZWxsLWhvdmVyLXRleHQtbGluZS1oZWlnaHQ6IGNhbGVuZGFyLXRleHQtbGluZS1oZWlnaHQsIGNhbGVuZGFyLWNlbGwtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLCBjYWxlbmRhci1jZWxsLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLWJvcmRlciwgY2FsZW5kYXItY2VsbC1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLCBjYWxlbmRhci1jZWxsLWFjdGl2ZS10ZXh0LWZvbnQtc2l6ZTogY2FsZW5kYXItdGV4dC1mb250LXNpemUsIGNhbGVuZGFyLWNlbGwtYWN0aXZlLXRleHQtZm9udC13ZWlnaHQ6IGNhbGVuZGFyLXRleHQtZm9udC13ZWlnaHQsIGNhbGVuZGFyLWNlbGwtYWN0aXZlLXRleHQtbGluZS1oZWlnaHQ6IGNhbGVuZGFyLXRleHQtbGluZS1oZWlnaHQsIGNhbGVuZGFyLWNlbGwtdG9kYXktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1kZWZhdWx0LCBjYWxlbmRhci1jZWxsLXRvZGF5LWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlciwgY2FsZW5kYXItY2VsbC10b2RheS10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLCBjYWxlbmRhci1jZWxsLXRvZGF5LXRleHQtZm9udC1zaXplOiBjYWxlbmRhci10ZXh0LWZvbnQtc2l6ZSwgY2FsZW5kYXItY2VsbC10b2RheS10ZXh0LWZvbnQtd2VpZ2h0OiBjYWxlbmRhci10ZXh0LWZvbnQtd2VpZ2h0LCBjYWxlbmRhci1jZWxsLXRvZGF5LXRleHQtbGluZS1oZWlnaHQ6IGNhbGVuZGFyLXRleHQtbGluZS1oZWlnaHQsIGNhbGVuZGFyLWNlbGwtdG9kYXktaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1ob3ZlciwgY2FsZW5kYXItY2VsbC10b2RheS1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLCBjYWxlbmRhci1jZWxsLXRvZGF5LWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZSwgY2FsZW5kYXItY2VsbC10b2RheS1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsIGNhbGVuZGFyLWNlbGwtdG9kYXktZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCwgY2FsZW5kYXItY2VsbC10b2RheS1zZWxlY3RlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRlZmF1bHQsIGNhbGVuZGFyLWNlbGwtdG9kYXktc2VsZWN0ZWQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCwgY2FsZW5kYXItY2VsbC10b2RheS1zZWxlY3RlZC10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsIGNhbGVuZGFyLWNlbGwtdG9kYXktc2VsZWN0ZWQtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1ob3ZlciwgY2FsZW5kYXItY2VsbC10b2RheS1zZWxlY3RlZC1ob3Zlci1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LCBjYWxlbmRhci1jZWxsLXRvZGF5LXNlbGVjdGVkLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZSwgY2FsZW5kYXItY2VsbC10b2RheS1zZWxlY3RlZC1hY3RpdmUtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCwgY2FsZW5kYXItY2VsbC10b2RheS1pbi1yYW5nZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRlZmF1bHQsIGNhbGVuZGFyLWNlbGwtdG9kYXktaW4tcmFuZ2UtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCwgY2FsZW5kYXItY2VsbC10b2RheS1pbi1yYW5nZS10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsIGNhbGVuZGFyLWNlbGwtdG9kYXktaW4tcmFuZ2UtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1ob3ZlciwgY2FsZW5kYXItY2VsbC10b2RheS1pbi1yYW5nZS1ob3Zlci1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LCBjYWxlbmRhci1jZWxsLXRvZGF5LWluLXJhbmdlLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZSwgY2FsZW5kYXItY2VsbC10b2RheS1pbi1yYW5nZS1hY3RpdmUtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCwgY2FsZW5kYXItY2VsbC1zZWxlY3RlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsIGNhbGVuZGFyLWNlbGwtc2VsZWN0ZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQtYm9yZGVyLCBjYWxlbmRhci1jZWxsLXNlbGVjdGVkLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvciwgY2FsZW5kYXItY2VsbC1zZWxlY3RlZC10ZXh0LWZvbnQtc2l6ZTogY2FsZW5kYXItdGV4dC1mb250LXNpemUsIGNhbGVuZGFyLWNlbGwtc2VsZWN0ZWQtdGV4dC1mb250LXdlaWdodDogY2FsZW5kYXItdGV4dC1mb250LXdlaWdodCwgY2FsZW5kYXItY2VsbC1zZWxlY3RlZC10ZXh0LWxpbmUtaGVpZ2h0OiBjYWxlbmRhci10ZXh0LWxpbmUtaGVpZ2h0LCBjYWxlbmRhci1jZWxsLXNlbGVjdGVkLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsIGNhbGVuZGFyLWNlbGwtc2VsZWN0ZWQtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLWJvcmRlciwgY2FsZW5kYXItY2VsbC1zZWxlY3RlZC1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUsIGNhbGVuZGFyLWNlbGwtc2VsZWN0ZWQtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUtYm9yZGVyLCBjYWxlbmRhci1kYXktY2VsbC13aWR0aDogMi43NXJlbSwgY2FsZW5kYXItZGF5LWNlbGwtaGVpZ2h0OiAyLjc1cmVtLCBjYWxlbmRhci1tb250aC1jZWxsLXdpZHRoOiA0LjgxMjVyZW0sIGNhbGVuZGFyLW1vbnRoLWNlbGwtaGVpZ2h0OiBjYWxlbmRhci1kYXktY2VsbC1oZWlnaHQsIGNhbGVuZGFyLXllYXItY2VsbC13aWR0aDogY2FsZW5kYXItbW9udGgtY2VsbC13aWR0aCwgY2FsZW5kYXIteWVhci1jZWxsLWhlaWdodDogY2FsZW5kYXItbW9udGgtY2VsbC1oZWlnaHQsIGNhbGVuZGFyLXdlZWtkYXktYmFja2dyb3VuZDogdHJhbnNwYXJlbnQsIGNhbGVuZGFyLXdlZWtkYXktZGl2aWRlci1jb2xvcjogZGl2aWRlci1jb2xvciwgY2FsZW5kYXItd2Vla2RheS1kaXZpZGVyLXdpZHRoOiBkaXZpZGVyLXdpZHRoLCBjYWxlbmRhci13ZWVrZGF5LXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvciwgY2FsZW5kYXItd2Vla2RheS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsIGNhbGVuZGFyLXdlZWtkYXktdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCwgY2FsZW5kYXItd2Vla2RheS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LCBjYWxlbmRhci13ZWVrZGF5LWhvbGlkYXktdGV4dC1jb2xvcjogY2FsZW5kYXItd2Vla2RheS10ZXh0LWNvbG9yLCBjYWxlbmRhci13ZWVrZGF5LWhlaWdodDogY2FsZW5kYXItZGF5LWNlbGwtaGVpZ2h0LCBjYWxlbmRhci13ZWVrZGF5LXdpZHRoOiBjYWxlbmRhci1kYXktY2VsbC13aWR0aCwgY2FsZW5kYXItd2Vla251bWJlci1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCwgY2FsZW5kYXItd2Vla251bWJlci1kaXZpZGVyLWNvbG9yOiBkaXZpZGVyLWNvbG9yLCBjYWxlbmRhci13ZWVrbnVtYmVyLWRpdmlkZXItd2lkdGg6IGRpdmlkZXItd2lkdGgsIGNhbGVuZGFyLXdlZWtudW1iZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLCBjYWxlbmRhci13ZWVrbnVtYmVyLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSwgY2FsZW5kYXItd2Vla251bWJlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LCBjYWxlbmRhci13ZWVrbnVtYmVyLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsIGNhbGVuZGFyLXdlZWtudW1iZXItaGVpZ2h0OiBjYWxlbmRhci13ZWVrZGF5LWhlaWdodCwgY2FsZW5kYXItd2Vla251bWJlci13aWR0aDogY2FsZW5kYXItd2Vla2RheS13aWR0aCwgY2FsZW5kYXItbGFyZ2Utd2lkdGg6IDIyLjM3NXJlbSwgY2FsZW5kYXItZGF5LWNlbGwtbGFyZ2Utd2lkdGg6IDNyZW0sIGNhbGVuZGFyLWRheS1jZWxsLWxhcmdlLWhlaWdodDogM3JlbSwgY2FsZW5kYXItd2Vla2RheS1sYXJnZS1oZWlnaHQ6IGNhbGVuZGFyLWRheS1jZWxsLWxhcmdlLXdpZHRoLCBjYWxlbmRhci13ZWVrZGF5LWxhcmdlLXdpZHRoOiBjYWxlbmRhci1kYXktY2VsbC1sYXJnZS1oZWlnaHQsIGNhbGVuZGFyLXdlZWtudW1iZXItbGFyZ2UtaGVpZ2h0OiBjYWxlbmRhci13ZWVrZGF5LWxhcmdlLWhlaWdodCwgY2FsZW5kYXItd2Vla251bWJlci1sYXJnZS13aWR0aDogY2FsZW5kYXItd2Vla2RheS1sYXJnZS13aWR0aCwgY2FsZW5kYXItbW9udGgtY2VsbC1sYXJnZS13aWR0aDogNS4yNXJlbSwgY2FsZW5kYXItbW9udGgtY2VsbC1sYXJnZS1oZWlnaHQ6IGNhbGVuZGFyLWRheS1jZWxsLWxhcmdlLWhlaWdodCwgY2FsZW5kYXIteWVhci1jZWxsLWxhcmdlLXdpZHRoOiBjYWxlbmRhci1tb250aC1jZWxsLWxhcmdlLXdpZHRoLCBjYWxlbmRhci15ZWFyLWNlbGwtbGFyZ2UtaGVpZ2h0OiBjYWxlbmRhci1tb250aC1jZWxsLWxhcmdlLWhlaWdodCwgb3ZlcmxheS1iYWNrZHJvcC1iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzUpLCB0b29sdGlwLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYWx0ZXJuYXRpdmUtY29sb3ItMywgdG9vbHRpcC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LCB0b29sdGlwLWJvcmRlci1zdHlsZTogZGFzaGVkLCB0b29sdGlwLWJvcmRlci13aWR0aDogMCwgdG9vbHRpcC1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLCB0b29sdGlwLXBhZGRpbmc6IDAuNXJlbSAxcmVtLCB0b29sdGlwLXRleHQtY29sb3I6IHRleHQtYWx0ZXJuYXRlLWNvbG9yLCB0b29sdGlwLXRleHQtZm9udC1mYW1pbHk6IHRleHQtY2FwdGlvbi1mb250LWZhbWlseSwgdG9vbHRpcC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1jYXB0aW9uLWZvbnQtc2l6ZSwgdG9vbHRpcC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWNhcHRpb24tZm9udC13ZWlnaHQsIHRvb2x0aXAtdGV4dC1saW5lLWhlaWdodDogdGV4dC1jYXB0aW9uLWxpbmUtaGVpZ2h0LCB0b29sdGlwLWljb24taGVpZ2h0OiAxcmVtLCB0b29sdGlwLWljb24td2lkdGg6IDFyZW0sIHRvb2x0aXAtbWF4LXdpZHRoOiAxNnJlbSwgdG9vbHRpcC1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsIHRvb2x0aXAtYmFzaWMtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCwgdG9vbHRpcC1iYXNpYy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLCB0b29sdGlwLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LCB0b29sdGlwLXByaW1hcnktYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCwgdG9vbHRpcC1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvciwgdG9vbHRpcC1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCwgdG9vbHRpcC1pbmZvLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsIHRvb2x0aXAtaW5mby10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsIHRvb2x0aXAtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsIHRvb2x0aXAtc3VjY2Vzcy1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LCB0b29sdGlwLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLCB0b29sdGlwLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LCB0b29sdGlwLXdhcm5pbmctYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCwgdG9vbHRpcC13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvciwgdG9vbHRpcC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsIHRvb2x0aXAtZGFuZ2VyLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsIHRvb2x0aXAtZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvciwgdG9vbHRpcC1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCwgdG9vbHRpcC1jb250cm9sLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsIHRvb2x0aXAtY29udHJvbC10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy04MDAsIHRvb2x0aXAtc2hhZG93OiBzaGFkb3csIG9wdGlvbi1saXN0LW1heC1oZWlnaHQ6IDIwcmVtLCBvcHRpb24tbGlzdC1zaGFkb3c6IG5vbmUsIG9wdGlvbi1saXN0LWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSwgb3B0aW9uLWxpc3QtYm9yZGVyLXN0eWxlOiBzb2xpZCwgb3B0aW9uLWxpc3QtYm9yZGVyLXdpZHRoOiAwLjA2MjVyZW0sIG9wdGlvbi1saXN0LWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsIG9wdGlvbi1saXN0LWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsIG9wdGlvbi1saXN0LWFkamFjZW50LWJvcmRlci1jb2xvcjogb3B0aW9uLWxpc3QtYm9yZGVyLWNvbG9yLCBvcHRpb24tbGlzdC1hZGphY2VudC1ib3JkZXItc3R5bGU6IG9wdGlvbi1saXN0LWJvcmRlci1zdHlsZSwgb3B0aW9uLWxpc3QtYWRqYWNlbnQtYm9yZGVyLXdpZHRoOiBvcHRpb24tbGlzdC1ib3JkZXItd2lkdGgsIG9wdGlvbi1ncm91cC10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsIG9wdGlvbi1ncm91cC10aW55LXN0YXJ0LXBhZGRpbmc6IDEuMjVyZW0sIG9wdGlvbi1ncm91cC1zbWFsbC1zdGFydC1wYWRkaW5nOiAxLjc1cmVtLCBvcHRpb24tZ3JvdXAtbWVkaXVtLXN0YXJ0LXBhZGRpbmc6IDIuMjVyZW0sIG9wdGlvbi1ncm91cC1sYXJnZS1zdGFydC1wYWRkaW5nOiAyLjI1cmVtLCBvcHRpb24tZ3JvdXAtZ2lhbnQtc3RhcnQtcGFkZGluZzogMi43NXJlbSwgb3B0aW9uLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSwgb3B0aW9uLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsIG9wdGlvbi10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLWZvbnQtZmFtaWx5LCBvcHRpb24taG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtaG92ZXIsIG9wdGlvbi1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLCBvcHRpb24tYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWFjdGl2ZSwgb3B0aW9uLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLCBvcHRpb24tZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZm9jdXMsIG9wdGlvbi1mb2N1cy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLCBvcHRpb24tc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LCBvcHRpb24tc2VsZWN0ZWQtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLCBvcHRpb24tc2VsZWN0ZWQtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3Zlciwgb3B0aW9uLXNlbGVjdGVkLWhvdmVyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvciwgb3B0aW9uLXNlbGVjdGVkLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZSwgb3B0aW9uLXNlbGVjdGVkLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsIG9wdGlvbi1zZWxlY3RlZC1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLCBvcHRpb24tc2VsZWN0ZWQtZm9jdXMtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLCBvcHRpb24tZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLCBvcHRpb24tZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvciwgb3B0aW9uLXRpbnktdGV4dC1mb250LXNpemU6IHRleHQtY2FwdGlvbi0yLWZvbnQtc2l6ZSwgb3B0aW9uLXRpbnktdGV4dC1mb250LXdlaWdodDogdGV4dC1jYXB0aW9uLTItZm9udC13ZWlnaHQsIG9wdGlvbi10aW55LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtY2FwdGlvbi0yLWxpbmUtaGVpZ2h0LCBvcHRpb24tdGlueS1wYWRkaW5nOiBzZWxlY3Qtb3V0bGluZS10aW55LXBhZGRpbmcsIG9wdGlvbi1zbWFsbC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtc2l6ZSwgb3B0aW9uLXNtYWxsLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1mb250LXdlaWdodCwgb3B0aW9uLXNtYWxsLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1saW5lLWhlaWdodCwgb3B0aW9uLXNtYWxsLXBhZGRpbmc6IHNlbGVjdC1vdXRsaW5lLXNtYWxsLXBhZGRpbmcsIG9wdGlvbi1tZWRpdW0tdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLCBvcHRpb24tbWVkaXVtLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsIG9wdGlvbi1tZWRpdW0tdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCwgb3B0aW9uLW1lZGl1bS1wYWRkaW5nOiBzZWxlY3Qtb3V0bGluZS1tZWRpdW0tcGFkZGluZywgb3B0aW9uLWxhcmdlLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSwgb3B0aW9uLWxhcmdlLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsIG9wdGlvbi1sYXJnZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LCBvcHRpb24tbGFyZ2UtcGFkZGluZzogc2VsZWN0LW91dGxpbmUtbGFyZ2UtcGFkZGluZywgb3B0aW9uLWdpYW50LXRleHQtZm9udC1zaXplOiB0ZXh0LWhlYWRpbmctNi1mb250LXNpemUsIG9wdGlvbi1naWFudC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWhlYWRpbmctNi1mb250LXdlaWdodCwgb3B0aW9uLWdpYW50LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtaGVhZGluZy02LWxpbmUtaGVpZ2h0LCBvcHRpb24tZ2lhbnQtcGFkZGluZzogc2VsZWN0LW91dGxpbmUtZ2lhbnQtcGFkZGluZywgc2VsZWN0LWN1cnNvcjogcG9pbnRlciwgc2VsZWN0LWRpc2FibGVkLWN1cnNvcjogZGVmYXVsdCwgc2VsZWN0LW1pbi13aWR0aDogMTNyZW0sIHNlbGVjdC1vdXRsaW5lLXdpZHRoOiBvdXRsaW5lLXdpZHRoLCBzZWxlY3Qtb3V0bGluZS1jb2xvcjogb3V0bGluZS1jb2xvciwgc2VsZWN0LWljb24tb2Zmc2V0OiAycmVtLCBzZWxlY3QtdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS1mb250LWZhbWlseSwgc2VsZWN0LXBsYWNlaG9sZGVyLXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LCBzZWxlY3QtdGlueS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1jYXB0aW9uLTItZm9udC1zaXplLCBzZWxlY3QtdGlueS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWNhcHRpb24tMi1mb250LXdlaWdodCwgc2VsZWN0LXRpbnktdGV4dC1saW5lLWhlaWdodDogdGV4dC1jYXB0aW9uLTItbGluZS1oZWlnaHQsIHNlbGVjdC10aW55LXBsYWNlaG9sZGVyLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsIHNlbGVjdC10aW55LXBsYWNlaG9sZGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LCBzZWxlY3QtdGlueS1tYXgtd2lkdGg6IDIwcmVtLCBzZWxlY3Qtc21hbGwtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtMi1mb250LXNpemUsIHNlbGVjdC1zbWFsbC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItZm9udC13ZWlnaHQsIHNlbGVjdC1zbWFsbC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItbGluZS1oZWlnaHQsIHNlbGVjdC1zbWFsbC1wbGFjZWhvbGRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLCBzZWxlY3Qtc21hbGwtcGxhY2Vob2xkZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsIHNlbGVjdC1zbWFsbC1tYXgtd2lkdGg6IDIwcmVtLCBzZWxlY3QtbWVkaXVtLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSwgc2VsZWN0LW1lZGl1bS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LCBzZWxlY3QtbWVkaXVtLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsIHNlbGVjdC1tZWRpdW0tcGxhY2Vob2xkZXItdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSwgc2VsZWN0LW1lZGl1bS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCwgc2VsZWN0LW1lZGl1bS1tYXgtd2lkdGg6IDIwcmVtLCBzZWxlY3QtbGFyZ2UtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLCBzZWxlY3QtbGFyZ2UtdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCwgc2VsZWN0LWxhcmdlLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsIHNlbGVjdC1sYXJnZS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLCBzZWxlY3QtbGFyZ2UtcGxhY2Vob2xkZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsIHNlbGVjdC1sYXJnZS1tYXgtd2lkdGg6IDMwcmVtLCBzZWxlY3QtZ2lhbnQtdGV4dC1mb250LXNpemU6IHRleHQtaGVhZGluZy02LWZvbnQtc2l6ZSwgc2VsZWN0LWdpYW50LXRleHQtZm9udC13ZWlnaHQ6IHRleHQtaGVhZGluZy02LWZvbnQtd2VpZ2h0LCBzZWxlY3QtZ2lhbnQtdGV4dC1saW5lLWhlaWdodDogdGV4dC1oZWFkaW5nLTYtbGluZS1oZWlnaHQsIHNlbGVjdC1naWFudC1wbGFjZWhvbGRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLCBzZWxlY3QtZ2lhbnQtcGxhY2Vob2xkZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsIHNlbGVjdC1naWFudC1tYXgtd2lkdGg6IDMwcmVtLCBzZWxlY3QtcmVjdGFuZ2xlLWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsIHNlbGVjdC1zZW1pLXJvdW5kLWJvcmRlci1yYWRpdXM6IDAuNzVyZW0sIHNlbGVjdC1yb3VuZC1ib3JkZXItcmFkaXVzOiAxLjVyZW0sIHNlbGVjdC1vdXRsaW5lLWJvcmRlci1zdHlsZTogc29saWQsIHNlbGVjdC1vdXRsaW5lLWJvcmRlci13aWR0aDogMXB4LCBzZWxlY3Qtb3V0bGluZS10aW55LXBhZGRpbmc6IDAuMTg3NXJlbSAxcmVtLCBzZWxlY3Qtb3V0bGluZS1zbWFsbC1wYWRkaW5nOiAwLjE4NzVyZW0gMXJlbSwgc2VsZWN0LW91dGxpbmUtbWVkaXVtLXBhZGRpbmc6IDAuNDM3NXJlbSAxcmVtLCBzZWxlY3Qtb3V0bGluZS1sYXJnZS1wYWRkaW5nOiAwLjY4NzVyZW0gMXJlbSwgc2VsZWN0LW91dGxpbmUtZ2lhbnQtcGFkZGluZzogMC45Mzc1cmVtIDFyZW0sIHNlbGVjdC1vdXRsaW5lLWJhc2ljLWljb24tY29sb3I6IHRleHQtaGludC1jb2xvciwgc2VsZWN0LW91dGxpbmUtYmFzaWMtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvciwgc2VsZWN0LW91dGxpbmUtYmFzaWMtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLCBzZWxlY3Qtb3V0bGluZS1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsIHNlbGVjdC1vdXRsaW5lLWJhc2ljLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsIHNlbGVjdC1vdXRsaW5lLWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSwgc2VsZWN0LW91dGxpbmUtYmFzaWMtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsIHNlbGVjdC1vdXRsaW5lLWJhc2ljLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMywgc2VsZWN0LW91dGxpbmUtYmFzaWMtaG92ZXItYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCwgc2VsZWN0LW91dGxpbmUtYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLCBzZWxlY3Qtb3V0bGluZS1iYXNpYy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LCBzZWxlY3Qtb3V0bGluZS1iYXNpYy1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLCBzZWxlY3Qtb3V0bGluZS1iYXNpYy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLCBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LWljb24tY29sb3I6IHRleHQtaGludC1jb2xvciwgc2VsZWN0LW91dGxpbmUtcHJpbWFyeS10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLCBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvciwgc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLCBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cywgc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLCBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMiwgc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LCBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvciwgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1pY29uLWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsIHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvciwgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsIHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLCBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LCBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSwgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMsIHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLCBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3Zlciwgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsIHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCwgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLCBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsIHNlbGVjdC1vdXRsaW5lLWluZm8taWNvbi1jb2xvcjogdGV4dC1oaW50LWNvbG9yLCBzZWxlY3Qtb3V0bGluZS1pbmZvLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsIHNlbGVjdC1vdXRsaW5lLWluZm8tcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLCBzZWxlY3Qtb3V0bGluZS1pbmZvLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMiwgc2VsZWN0LW91dGxpbmUtaW5mby1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCwgc2VsZWN0LW91dGxpbmUtaW5mby1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsIHNlbGVjdC1vdXRsaW5lLWluZm8tZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWZvY3VzLCBzZWxlY3Qtb3V0bGluZS1pbmZvLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMywgc2VsZWN0LW91dGxpbmUtaW5mby1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8taG92ZXIsIHNlbGVjdC1vdXRsaW5lLWluZm8tZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLCBzZWxlY3Qtb3V0bGluZS1pbmZvLWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsIHNlbGVjdC1vdXRsaW5lLWluZm8tZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvciwgc2VsZWN0LW91dGxpbmUtaW5mby1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLCBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLWljb24tY29sb3I6IHRleHQtaGludC1jb2xvciwgc2VsZWN0LW91dGxpbmUtd2FybmluZy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLCBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvciwgc2VsZWN0LW91dGxpbmUtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLCBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cywgc2VsZWN0LW91dGxpbmUtd2FybmluZy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLCBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMiwgc2VsZWN0LW91dGxpbmUtd2FybmluZy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LCBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvciwgc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWljb24tY29sb3I6IHRleHQtaGludC1jb2xvciwgc2VsZWN0LW91dGxpbmUtZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsIHNlbGVjdC1vdXRsaW5lLWRhbmdlci1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsIHNlbGVjdC1vdXRsaW5lLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsIHNlbGVjdC1vdXRsaW5lLWRhbmdlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LCBzZWxlY3Qtb3V0bGluZS1kYW5nZXItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLCBzZWxlY3Qtb3V0bGluZS1kYW5nZXItZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMsIHNlbGVjdC1vdXRsaW5lLWRhbmdlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsIHNlbGVjdC1vdXRsaW5lLWRhbmdlci1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1ob3Zlciwgc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMiwgc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsIHNlbGVjdC1vdXRsaW5lLWRhbmdlci1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLCBzZWxlY3Qtb3V0bGluZS1kYW5nZXItZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvciwgc2VsZWN0LW91dGxpbmUtY29udHJvbC1pY29uLWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsIHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtMTAwLCBzZWxlY3Qtb3V0bGluZS1jb250cm9sLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCwgc2VsZWN0LW91dGxpbmUtY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTMwMCwgc2VsZWN0LW91dGxpbmUtY29udHJvbC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtNTAwLCBzZWxlY3Qtb3V0bGluZS1jb250cm9sLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtNTAwLCBzZWxlY3Qtb3V0bGluZS1jb250cm9sLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsIHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC00MDAsIHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlciwgc2VsZWN0LW91dGxpbmUtY29udHJvbC1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRpc2FibGVkLCBzZWxlY3Qtb3V0bGluZS1jb250cm9sLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC01MDAsIHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtZGlzYWJsZWQtaWNvbi1jb2xvcjogY29sb3ItYmFzaWMtMTAwLCBzZWxlY3Qtb3V0bGluZS1jb250cm9sLWRpc2FibGVkLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCwgc2VsZWN0LW91dGxpbmUtYWRqYWNlbnQtYm9yZGVyLXN0eWxlOiBzZWxlY3Qtb3V0bGluZS1ib3JkZXItc3R5bGUsIHNlbGVjdC1vdXRsaW5lLWFkamFjZW50LWJvcmRlci13aWR0aDogc2VsZWN0LW91dGxpbmUtYm9yZGVyLXdpZHRoLCBzZWxlY3Qtb3V0bGluZS1iYXNpYy1vcGVuLWJvcmRlci1jb2xvcjogc2VsZWN0LW91dGxpbmUtYmFzaWMtYm9yZGVyLWNvbG9yLCBzZWxlY3Qtb3V0bGluZS1iYXNpYy1hZGphY2VudC1ib3JkZXItY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWJvcmRlci1jb2xvciwgc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1vcGVuLWJvcmRlci1jb2xvcjogc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1ib3JkZXItY29sb3IsIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktYWRqYWNlbnQtYm9yZGVyLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LWJvcmRlci1jb2xvciwgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1vcGVuLWJvcmRlci1jb2xvcjogc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1ib3JkZXItY29sb3IsIHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtYWRqYWNlbnQtYm9yZGVyLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLWJvcmRlci1jb2xvciwgc2VsZWN0LW91dGxpbmUtaW5mby1vcGVuLWJvcmRlci1jb2xvcjogc2VsZWN0LW91dGxpbmUtaW5mby1ib3JkZXItY29sb3IsIHNlbGVjdC1vdXRsaW5lLWluZm8tYWRqYWNlbnQtYm9yZGVyLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1pbmZvLWJvcmRlci1jb2xvciwgc2VsZWN0LW91dGxpbmUtd2FybmluZy1vcGVuLWJvcmRlci1jb2xvcjogc2VsZWN0LW91dGxpbmUtd2FybmluZy1ib3JkZXItY29sb3IsIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctYWRqYWNlbnQtYm9yZGVyLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLWJvcmRlci1jb2xvciwgc2VsZWN0LW91dGxpbmUtZGFuZ2VyLW9wZW4tYm9yZGVyLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1kYW5nZXItYm9yZGVyLWNvbG9yLCBzZWxlY3Qtb3V0bGluZS1kYW5nZXItYWRqYWNlbnQtYm9yZGVyLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1kYW5nZXItYm9yZGVyLWNvbG9yLCBzZWxlY3Qtb3V0bGluZS1jb250cm9sLW9wZW4tYm9yZGVyLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1jb250cm9sLWJvcmRlci1jb2xvciwgc2VsZWN0LW91dGxpbmUtY29udHJvbC1hZGphY2VudC1ib3JkZXItY29sb3I6IHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtYm9yZGVyLWNvbG9yLCBzZWxlY3QtZmlsbGVkLWJvcmRlci1zdHlsZTogc29saWQsIHNlbGVjdC1maWxsZWQtYm9yZGVyLXdpZHRoOiAxcHgsIHNlbGVjdC1maWxsZWQtdGlueS1wYWRkaW5nOiAwLjE4NzVyZW0gMXJlbSwgc2VsZWN0LWZpbGxlZC1zbWFsbC1wYWRkaW5nOiAwLjE4NzVyZW0gMXJlbSwgc2VsZWN0LWZpbGxlZC1tZWRpdW0tcGFkZGluZzogMC40Mzc1cmVtIDFyZW0sIHNlbGVjdC1maWxsZWQtbGFyZ2UtcGFkZGluZzogMC42ODc1cmVtIDFyZW0sIHNlbGVjdC1maWxsZWQtZ2lhbnQtcGFkZGluZzogMC45Mzc1cmVtIDFyZW0sIHNlbGVjdC1maWxsZWQtYmFzaWMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtZGVmYXVsdCwgc2VsZWN0LWZpbGxlZC1iYXNpYy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLWRlZmF1bHQtYm9yZGVyLCBzZWxlY3QtZmlsbGVkLWJhc2ljLWljb24tY29sb3I6IGNvbG9yLWJhc2ljLTgwMCwgc2VsZWN0LWZpbGxlZC1iYXNpYy10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy04MDAsIHNlbGVjdC1maWxsZWQtYmFzaWMtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLCBzZWxlY3QtZmlsbGVkLWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWZvY3VzLCBzZWxlY3QtZmlsbGVkLWJhc2ljLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtZm9jdXMtYm9yZGVyLCBzZWxlY3QtZmlsbGVkLWJhc2ljLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWhvdmVyLCBzZWxlY3QtZmlsbGVkLWJhc2ljLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtaG92ZXItYm9yZGVyLCBzZWxlY3QtZmlsbGVkLWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMiwgc2VsZWN0LWZpbGxlZC1iYXNpYy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0yLCBzZWxlY3QtZmlsbGVkLWJhc2ljLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsIHNlbGVjdC1maWxsZWQtYmFzaWMtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvciwgc2VsZWN0LWZpbGxlZC1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCwgc2VsZWN0LWZpbGxlZC1wcmltYXJ5LWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LWJvcmRlciwgc2VsZWN0LWZpbGxlZC1wcmltYXJ5LWljb24tY29sb3I6IHRleHQtY29udHJvbC1jb2xvciwgc2VsZWN0LWZpbGxlZC1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvciwgc2VsZWN0LWZpbGxlZC1wcmltYXJ5LXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvciwgc2VsZWN0LWZpbGxlZC1wcmltYXJ5LWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMsIHNlbGVjdC1maWxsZWQtcHJpbWFyeS1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMtYm9yZGVyLCBzZWxlY3QtZmlsbGVkLXByaW1hcnktaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3Zlciwgc2VsZWN0LWZpbGxlZC1wcmltYXJ5LWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3Zlci1ib3JkZXIsIHNlbGVjdC1maWxsZWQtcHJpbWFyeS1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsIHNlbGVjdC1maWxsZWQtcHJpbWFyeS1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0yLCBzZWxlY3QtZmlsbGVkLXByaW1hcnktZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvciwgc2VsZWN0LWZpbGxlZC1wcmltYXJ5LWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsIHNlbGVjdC1maWxsZWQtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsIHNlbGVjdC1maWxsZWQtc3VjY2Vzcy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdC1ib3JkZXIsIHNlbGVjdC1maWxsZWQtc3VjY2Vzcy1pY29uLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsIHNlbGVjdC1maWxsZWQtc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsIHNlbGVjdC1maWxsZWQtc3VjY2Vzcy1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsIHNlbGVjdC1maWxsZWQtc3VjY2Vzcy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLCBzZWxlY3QtZmlsbGVkLXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLWJvcmRlciwgc2VsZWN0LWZpbGxlZC1zdWNjZXNzLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXIsIHNlbGVjdC1maWxsZWQtc3VjY2Vzcy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXItYm9yZGVyLCBzZWxlY3QtZmlsbGVkLXN1Y2Nlc3MtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLCBzZWxlY3QtZmlsbGVkLXN1Y2Nlc3MtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMiwgc2VsZWN0LWZpbGxlZC1zdWNjZXNzLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsIHNlbGVjdC1maWxsZWQtc3VjY2Vzcy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLCBzZWxlY3QtZmlsbGVkLWluZm8tYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LCBzZWxlY3QtZmlsbGVkLWluZm8tYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQtYm9yZGVyLCBzZWxlY3QtZmlsbGVkLWluZm8taWNvbi1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLCBzZWxlY3QtZmlsbGVkLWluZm8tdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLCBzZWxlY3QtZmlsbGVkLWluZm8tcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLCBzZWxlY3QtZmlsbGVkLWluZm8tZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1mb2N1cywgc2VsZWN0LWZpbGxlZC1pbmZvLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1mb2N1cy1ib3JkZXIsIHNlbGVjdC1maWxsZWQtaW5mby1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLCBzZWxlY3QtZmlsbGVkLWluZm8taG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLWJvcmRlciwgc2VsZWN0LWZpbGxlZC1pbmZvLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMiwgc2VsZWN0LWZpbGxlZC1pbmZvLWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTIsIHNlbGVjdC1maWxsZWQtaW5mby1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLCBzZWxlY3QtZmlsbGVkLWluZm8tZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvciwgc2VsZWN0LWZpbGxlZC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCwgc2VsZWN0LWZpbGxlZC13YXJuaW5nLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LWJvcmRlciwgc2VsZWN0LWZpbGxlZC13YXJuaW5nLWljb24tY29sb3I6IHRleHQtY29udHJvbC1jb2xvciwgc2VsZWN0LWZpbGxlZC13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvciwgc2VsZWN0LWZpbGxlZC13YXJuaW5nLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvciwgc2VsZWN0LWZpbGxlZC13YXJuaW5nLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMsIHNlbGVjdC1maWxsZWQtd2FybmluZy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMtYm9yZGVyLCBzZWxlY3QtZmlsbGVkLXdhcm5pbmctaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1ob3Zlciwgc2VsZWN0LWZpbGxlZC13YXJuaW5nLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1ob3Zlci1ib3JkZXIsIHNlbGVjdC1maWxsZWQtd2FybmluZy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsIHNlbGVjdC1maWxsZWQtd2FybmluZy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0yLCBzZWxlY3QtZmlsbGVkLXdhcm5pbmctZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvciwgc2VsZWN0LWZpbGxlZC13YXJuaW5nLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsIHNlbGVjdC1maWxsZWQtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LCBzZWxlY3QtZmlsbGVkLWRhbmdlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LWJvcmRlciwgc2VsZWN0LWZpbGxlZC1kYW5nZXItaWNvbi1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLCBzZWxlY3QtZmlsbGVkLWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsIHNlbGVjdC1maWxsZWQtZGFuZ2VyLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvciwgc2VsZWN0LWZpbGxlZC1kYW5nZXItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLCBzZWxlY3QtZmlsbGVkLWRhbmdlci1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1mb2N1cy1ib3JkZXIsIHNlbGVjdC1maWxsZWQtZGFuZ2VyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1ob3Zlciwgc2VsZWN0LWZpbGxlZC1kYW5nZXItaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXItYm9yZGVyLCBzZWxlY3QtZmlsbGVkLWRhbmdlci1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsIHNlbGVjdC1maWxsZWQtZGFuZ2VyLWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTIsIHNlbGVjdC1maWxsZWQtZGFuZ2VyLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsIHNlbGVjdC1maWxsZWQtZGFuZ2VyLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsIHNlbGVjdC1maWxsZWQtY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsIHNlbGVjdC1maWxsZWQtY29udHJvbC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdC1ib3JkZXIsIHNlbGVjdC1maWxsZWQtY29udHJvbC1pY29uLWNvbG9yOiBjb2xvci1iYXNpYy04MDAsIHNlbGVjdC1maWxsZWQtY29udHJvbC10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy04MDAsIHNlbGVjdC1maWxsZWQtY29udHJvbC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsIHNlbGVjdC1maWxsZWQtY29udHJvbC1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWZvY3VzLCBzZWxlY3QtZmlsbGVkLWNvbnRyb2wtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWZvY3VzLWJvcmRlciwgc2VsZWN0LWZpbGxlZC1jb250cm9sLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtaG92ZXIsIHNlbGVjdC1maWxsZWQtY29udHJvbC1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtaG92ZXItYm9yZGVyLCBzZWxlY3QtZmlsbGVkLWNvbnRyb2wtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLCBzZWxlY3QtZmlsbGVkLWNvbnRyb2wtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMiwgc2VsZWN0LWZpbGxlZC1jb250cm9sLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsIHNlbGVjdC1maWxsZWQtY29udHJvbC1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLCBzZWxlY3QtaGVyby10aW55LXBhZGRpbmc6IDAuMjVyZW0gMXJlbSwgc2VsZWN0LWhlcm8tc21hbGwtcGFkZGluZzogMC4yNXJlbSAxcmVtLCBzZWxlY3QtaGVyby1tZWRpdW0tcGFkZGluZzogMC41cmVtIDFyZW0sIHNlbGVjdC1oZXJvLWxhcmdlLXBhZGRpbmc6IDAuNzVyZW0gMXJlbSwgc2VsZWN0LWhlcm8tZ2lhbnQtcGFkZGluZzogMXJlbSAxcmVtLCBzZWxlY3QtaGVyby1iYXNpYy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLTIwMCwgc2VsZWN0LWhlcm8tYmFzaWMtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtZGVmYXVsdCwgc2VsZWN0LWhlcm8tYmFzaWMtaWNvbi1jb2xvcjogY29sb3ItYmFzaWMtODAwLCBzZWxlY3QtaGVyby1iYXNpYy10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy04MDAsIHNlbGVjdC1oZXJvLWJhc2ljLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvciwgc2VsZWN0LWhlcm8tYmFzaWMtZm9jdXMtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy0zMDAsIHNlbGVjdC1oZXJvLWJhc2ljLWZvY3VzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLTQwMCwgc2VsZWN0LWhlcm8tYmFzaWMtaG92ZXItbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsIHNlbGVjdC1oZXJvLWJhc2ljLWhvdmVyLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWhvdmVyLCBzZWxlY3QtaGVyby1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsIHNlbGVjdC1oZXJvLWJhc2ljLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsIHNlbGVjdC1oZXJvLWJhc2ljLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsIHNlbGVjdC1oZXJvLXByaW1hcnktbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LTQwMCwgc2VsZWN0LWhlcm8tcHJpbWFyeS1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsIHNlbGVjdC1oZXJvLXByaW1hcnktaWNvbi1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLCBzZWxlY3QtaGVyby1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvciwgc2VsZWN0LWhlcm8tcHJpbWFyeS1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsIHNlbGVjdC1oZXJvLXByaW1hcnktZm9jdXMtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LTUwMCwgc2VsZWN0LWhlcm8tcHJpbWFyeS1mb2N1cy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLCBzZWxlY3QtaGVyby1wcmltYXJ5LWhvdmVyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS0zMDAsIHNlbGVjdC1oZXJvLXByaW1hcnktaG92ZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3Zlciwgc2VsZWN0LWhlcm8tcHJpbWFyeS1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsIHNlbGVjdC1oZXJvLXByaW1hcnktZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvciwgc2VsZWN0LWhlcm8tcHJpbWFyeS1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLCBzZWxlY3QtaGVyby1zdWNjZXNzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy00MDAsIHNlbGVjdC1oZXJvLXN1Y2Nlc3MtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LCBzZWxlY3QtaGVyby1zdWNjZXNzLWljb24tY29sb3I6IHRleHQtY29udHJvbC1jb2xvciwgc2VsZWN0LWhlcm8tc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsIHNlbGVjdC1oZXJvLXN1Y2Nlc3MtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLCBzZWxlY3QtaGVyby1zdWNjZXNzLWZvY3VzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy01MDAsIHNlbGVjdC1oZXJvLXN1Y2Nlc3MtZm9jdXMtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1mb2N1cywgc2VsZWN0LWhlcm8tc3VjY2Vzcy1ob3Zlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtMzAwLCBzZWxlY3QtaGVyby1zdWNjZXNzLWhvdmVyLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXIsIHNlbGVjdC1oZXJvLXN1Y2Nlc3MtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLCBzZWxlY3QtaGVyby1zdWNjZXNzLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsIHNlbGVjdC1oZXJvLXN1Y2Nlc3MtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvciwgc2VsZWN0LWhlcm8taW5mby1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tNDAwLCBzZWxlY3QtaGVyby1pbmZvLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCwgc2VsZWN0LWhlcm8taW5mby1pY29uLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsIHNlbGVjdC1oZXJvLWluZm8tdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLCBzZWxlY3QtaGVyby1pbmZvLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvciwgc2VsZWN0LWhlcm8taW5mby1mb2N1cy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tNTAwLCBzZWxlY3QtaGVyby1pbmZvLWZvY3VzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZm9jdXMsIHNlbGVjdC1oZXJvLWluZm8taG92ZXItbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLTMwMCwgc2VsZWN0LWhlcm8taW5mby1ob3Zlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLCBzZWxlY3QtaGVyby1pbmZvLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMiwgc2VsZWN0LWhlcm8taW5mby1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLCBzZWxlY3QtaGVyby1pbmZvLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsIHNlbGVjdC1oZXJvLXdhcm5pbmctbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLTQwMCwgc2VsZWN0LWhlcm8td2FybmluZy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsIHNlbGVjdC1oZXJvLXdhcm5pbmctaWNvbi1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLCBzZWxlY3QtaGVyby13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvciwgc2VsZWN0LWhlcm8td2FybmluZy1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsIHNlbGVjdC1oZXJvLXdhcm5pbmctZm9jdXMtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLTUwMCwgc2VsZWN0LWhlcm8td2FybmluZy1mb2N1cy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLCBzZWxlY3QtaGVyby13YXJuaW5nLWhvdmVyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy0zMDAsIHNlbGVjdC1oZXJvLXdhcm5pbmctaG92ZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1ob3Zlciwgc2VsZWN0LWhlcm8td2FybmluZy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsIHNlbGVjdC1oZXJvLXdhcm5pbmctZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvciwgc2VsZWN0LWhlcm8td2FybmluZy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLCBzZWxlY3QtaGVyby1kYW5nZXItbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItNDAwLCBzZWxlY3QtaGVyby1kYW5nZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsIHNlbGVjdC1oZXJvLWRhbmdlci1pY29uLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsIHNlbGVjdC1oZXJvLWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsIHNlbGVjdC1oZXJvLWRhbmdlci1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsIHNlbGVjdC1oZXJvLWRhbmdlci1mb2N1cy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci01MDAsIHNlbGVjdC1oZXJvLWRhbmdlci1mb2N1cy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMsIHNlbGVjdC1oZXJvLWRhbmdlci1ob3Zlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci0zMDAsIHNlbGVjdC1oZXJvLWRhbmdlci1ob3Zlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXIsIHNlbGVjdC1oZXJvLWRhbmdlci1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsIHNlbGVjdC1oZXJvLWRhbmdlci1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLCBzZWxlY3QtaGVyby1kYW5nZXItZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvciwgc2VsZWN0LWhlcm8tY29udHJvbC1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCwgc2VsZWN0LWhlcm8tY29udHJvbC1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsIHNlbGVjdC1oZXJvLWNvbnRyb2wtaWNvbi1jb2xvcjogY29sb3ItYmFzaWMtODAwLCBzZWxlY3QtaGVyby1jb250cm9sLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTgwMCwgc2VsZWN0LWhlcm8tY29udHJvbC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsIHNlbGVjdC1oZXJvLWNvbnRyb2wtZm9jdXMtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy0yMDAsIHNlbGVjdC1oZXJvLWNvbnRyb2wtZm9jdXMtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1mb2N1cywgc2VsZWN0LWhlcm8tY29udHJvbC1ob3Zlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCwgc2VsZWN0LWhlcm8tY29udHJvbC1ob3Zlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWhvdmVyLCBzZWxlY3QtaGVyby1jb250cm9sLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMiwgc2VsZWN0LWhlcm8tY29udHJvbC1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLCBzZWxlY3QtaGVyby1jb250cm9sLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsIGRhdGVwaWNrZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLCBkYXRlcGlja2VyLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTMsIGRhdGVwaWNrZXItYm9yZGVyLXN0eWxlOiBzb2xpZCwgZGF0ZXBpY2tlci1ib3JkZXItd2lkdGg6IDAsIGRhdGVwaWNrZXItYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cywgZGF0ZXBpY2tlci1zaGFkb3c6IG5vbmUsIHJhZGlvLXdpZHRoOiAxLjI1cmVtLCByYWRpby1oZWlnaHQ6IDEuMjVyZW0sIHJhZGlvLWJvcmRlci1zdHlsZTogc29saWQsIHJhZGlvLWJvcmRlci13aWR0aDogMXB4LCByYWRpby10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLTItZm9udC1mYW1pbHksIHJhZGlvLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLTItZm9udC1zaXplLCByYWRpby10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItZm9udC13ZWlnaHQsIHJhZGlvLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1saW5lLWhlaWdodCwgcmFkaW8tb3V0bGluZS1jb2xvcjogb3V0bGluZS1jb2xvciwgcmFkaW8tb3V0bGluZS13aWR0aDogb3V0bGluZS13aWR0aCwgcmFkaW8tYmFzaWMtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvciwgcmFkaW8tYmFzaWMtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlciwgcmFkaW8tYmFzaWMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGVmYXVsdCwgcmFkaW8tYmFzaWMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCwgcmFkaW8tYmFzaWMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdC1ib3JkZXIsIHJhZGlvLWJhc2ljLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LCByYWRpby1iYXNpYy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLCByYWRpby1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWZvY3VzLCByYWRpby1iYXNpYy1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LCByYWRpby1iYXNpYy1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cy1ib3JkZXIsIHJhZGlvLWJhc2ljLWZvY3VzLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cywgcmFkaW8tYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1ob3ZlciwgcmFkaW8tYmFzaWMtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlciwgcmFkaW8tYmFzaWMtaG92ZXItaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLCByYWRpby1iYXNpYy1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LCByYWRpby1iYXNpYy1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3Zlci1ib3JkZXIsIHJhZGlvLWJhc2ljLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZSwgcmFkaW8tYmFzaWMtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLCByYWRpby1iYXNpYy1hY3RpdmUtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZSwgcmFkaW8tYmFzaWMtYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsIHJhZGlvLWJhc2ljLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUtYm9yZGVyLCByYWRpby1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZCwgcmFkaW8tYmFzaWMtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsIHJhZGlvLWJhc2ljLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsIHJhZGlvLWJhc2ljLWRpc2FibGVkLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsIHJhZGlvLWJhc2ljLWRpc2FibGVkLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsIHJhZGlvLWJhc2ljLWRpc2FibGVkLWNoZWNrZWQtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsIHJhZGlvLXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvciwgcmFkaW8tcHJpbWFyeS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsIHJhZGlvLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1kZWZhdWx0LCByYWRpby1wcmltYXJ5LWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsIHJhZGlvLXByaW1hcnktY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdC1ib3JkZXIsIHJhZGlvLXByaW1hcnktaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsIHJhZGlvLXByaW1hcnktZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlciwgcmFkaW8tcHJpbWFyeS1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWZvY3VzLCByYWRpby1wcmltYXJ5LWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsIHJhZGlvLXByaW1hcnktZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMtYm9yZGVyLCByYWRpby1wcmltYXJ5LWZvY3VzLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cywgcmFkaW8tcHJpbWFyeS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLCByYWRpby1wcmltYXJ5LWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsIHJhZGlvLXByaW1hcnktaG92ZXItaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLCByYWRpby1wcmltYXJ5LWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsIHJhZGlvLXByaW1hcnktaG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXItYm9yZGVyLCByYWRpby1wcmltYXJ5LWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlciwgcmFkaW8tcHJpbWFyeS1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1hY3RpdmUsIHJhZGlvLXByaW1hcnktYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsIHJhZGlvLXByaW1hcnktYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZS1ib3JkZXIsIHJhZGlvLXByaW1hcnktYWN0aXZlLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUsIHJhZGlvLXByaW1hcnktZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsIHJhZGlvLXByaW1hcnktZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsIHJhZGlvLXByaW1hcnktZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvciwgcmFkaW8tcHJpbWFyeS1kaXNhYmxlZC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LCByYWRpby1wcmltYXJ5LWRpc2FibGVkLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsIHJhZGlvLXByaW1hcnktZGlzYWJsZWQtY2hlY2tlZC1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCwgcmFkaW8tc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLCByYWRpby1zdWNjZXNzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlciwgcmFkaW8tc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWRlZmF1bHQsIHJhZGlvLXN1Y2Nlc3MtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCwgcmFkaW8tc3VjY2Vzcy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LWJvcmRlciwgcmFkaW8tc3VjY2Vzcy1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCwgcmFkaW8tc3VjY2Vzcy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLCByYWRpby1zdWNjZXNzLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZm9jdXMsIHJhZGlvLXN1Y2Nlc3MtZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCwgcmFkaW8tc3VjY2Vzcy1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1mb2N1cy1ib3JkZXIsIHJhZGlvLXN1Y2Nlc3MtZm9jdXMtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLCByYWRpby1zdWNjZXNzLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtaG92ZXIsIHJhZGlvLXN1Y2Nlc3MtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlciwgcmFkaW8tc3VjY2Vzcy1ob3Zlci1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXIsIHJhZGlvLXN1Y2Nlc3MtaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCwgcmFkaW8tc3VjY2Vzcy1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3Zlci1ib3JkZXIsIHJhZGlvLXN1Y2Nlc3MtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtYWN0aXZlLCByYWRpby1zdWNjZXNzLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlciwgcmFkaW8tc3VjY2Vzcy1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCwgcmFkaW8tc3VjY2Vzcy1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtYWN0aXZlLWJvcmRlciwgcmFkaW8tc3VjY2Vzcy1hY3RpdmUtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1zdWNjZXNzLWFjdGl2ZSwgcmFkaW8tc3VjY2Vzcy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZCwgcmFkaW8tc3VjY2Vzcy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlciwgcmFkaW8tc3VjY2Vzcy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLCByYWRpby1zdWNjZXNzLWRpc2FibGVkLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsIHJhZGlvLXN1Y2Nlc3MtZGlzYWJsZWQtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCwgcmFkaW8tc3VjY2Vzcy1kaXNhYmxlZC1jaGVja2VkLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLCByYWRpby1pbmZvLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsIHJhZGlvLWluZm8tYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLCByYWRpby1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZGVmYXVsdCwgcmFkaW8taW5mby1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LCByYWRpby1pbmZvLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQtYm9yZGVyLCByYWRpby1pbmZvLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LCByYWRpby1pbmZvLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZm9jdXMsIHJhZGlvLWluZm8tZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlciwgcmFkaW8taW5mby1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LCByYWRpby1pbmZvLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWZvY3VzLWJvcmRlciwgcmFkaW8taW5mby1mb2N1cy1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWluZm8tZm9jdXMsIHJhZGlvLWluZm8taG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1ob3ZlciwgcmFkaW8taW5mby1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLCByYWRpby1pbmZvLWhvdmVyLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItaW5mby1ob3ZlciwgcmFkaW8taW5mby1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LCByYWRpby1pbmZvLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLWJvcmRlciwgcmFkaW8taW5mby1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1hY3RpdmUsIHJhZGlvLWluZm8tYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLCByYWRpby1pbmZvLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LCByYWRpby1pbmZvLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1hY3RpdmUtYm9yZGVyLCByYWRpby1pbmZvLWFjdGl2ZS1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWluZm8tYWN0aXZlLCByYWRpby1pbmZvLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLCByYWRpby1pbmZvLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLCByYWRpby1pbmZvLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsIHJhZGlvLWluZm8tZGlzYWJsZWQtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCwgcmFkaW8taW5mby1kaXNhYmxlZC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLCByYWRpby1pbmZvLWRpc2FibGVkLWNoZWNrZWQtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsIHJhZGlvLXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvciwgcmFkaW8td2FybmluZy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsIHJhZGlvLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1kZWZhdWx0LCByYWRpby13YXJuaW5nLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsIHJhZGlvLXdhcm5pbmctY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdC1ib3JkZXIsIHJhZGlvLXdhcm5pbmctaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsIHJhZGlvLXdhcm5pbmctZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1mb2N1cywgcmFkaW8td2FybmluZy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLCByYWRpby13YXJuaW5nLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsIHJhZGlvLXdhcm5pbmctZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMtYm9yZGVyLCByYWRpby13YXJuaW5nLWZvY3VzLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cywgcmFkaW8td2FybmluZy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWhvdmVyLCByYWRpby13YXJuaW5nLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsIHJhZGlvLXdhcm5pbmctaG92ZXItaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLCByYWRpby13YXJuaW5nLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsIHJhZGlvLXdhcm5pbmctaG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXItYm9yZGVyLCByYWRpby13YXJuaW5nLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWFjdGl2ZSwgcmFkaW8td2FybmluZy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsIHJhZGlvLXdhcm5pbmctYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsIHJhZGlvLXdhcm5pbmctYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWFjdGl2ZS1ib3JkZXIsIHJhZGlvLXdhcm5pbmctYWN0aXZlLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3Itd2FybmluZy1hY3RpdmUsIHJhZGlvLXdhcm5pbmctZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsIHJhZGlvLXdhcm5pbmctZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsIHJhZGlvLXdhcm5pbmctZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvciwgcmFkaW8td2FybmluZy1kaXNhYmxlZC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LCByYWRpby13YXJuaW5nLWRpc2FibGVkLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsIHJhZGlvLXdhcm5pbmctZGlzYWJsZWQtY2hlY2tlZC1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCwgcmFkaW8tZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsIHJhZGlvLWRhbmdlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlciwgcmFkaW8tZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1kZWZhdWx0LCByYWRpby1kYW5nZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCwgcmFkaW8tZGFuZ2VyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdC1ib3JkZXIsIHJhZGlvLWRhbmdlci1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LCByYWRpby1kYW5nZXItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWZvY3VzLCByYWRpby1kYW5nZXItZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLCByYWRpby1kYW5nZXItZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCwgcmFkaW8tZGFuZ2VyLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMtYm9yZGVyLCByYWRpby1kYW5nZXItZm9jdXMtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMsIHJhZGlvLWRhbmdlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtaG92ZXIsIHJhZGlvLWRhbmdlci1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsIHJhZGlvLWRhbmdlci1ob3Zlci1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWRhbmdlci1ob3ZlciwgcmFkaW8tZGFuZ2VyLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsIHJhZGlvLWRhbmdlci1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLWJvcmRlciwgcmFkaW8tZGFuZ2VyLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtYWN0aXZlLCByYWRpby1kYW5nZXItYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsIHJhZGlvLWRhbmdlci1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCwgcmFkaW8tZGFuZ2VyLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWFjdGl2ZS1ib3JkZXIsIHJhZGlvLWRhbmdlci1hY3RpdmUtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1kYW5nZXItYWN0aXZlLCByYWRpby1kYW5nZXItZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsIHJhZGlvLWRhbmdlci1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlciwgcmFkaW8tZGFuZ2VyLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsIHJhZGlvLWRhbmdlci1kaXNhYmxlZC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LCByYWRpby1kYW5nZXItZGlzYWJsZWQtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCwgcmFkaW8tZGFuZ2VyLWRpc2FibGVkLWNoZWNrZWQtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsIHJhZGlvLWNvbnRyb2wtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLCByYWRpby1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGVmYXVsdCwgcmFkaW8tY29udHJvbC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsIHJhZGlvLWNvbnRyb2wtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCwgcmFkaW8tY29udHJvbC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LWJvcmRlciwgcmFkaW8tY29udHJvbC1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCwgcmFkaW8tY29udHJvbC1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWZvY3VzLCByYWRpby1jb250cm9sLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsIHJhZGlvLWNvbnRyb2wtZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCwgcmFkaW8tY29udHJvbC1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC1mb2N1cy1ib3JkZXIsIHJhZGlvLWNvbnRyb2wtZm9jdXMtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1jb250cm9sLWZvY3VzLCByYWRpby1jb250cm9sLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtaG92ZXIsIHJhZGlvLWNvbnRyb2wtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlciwgcmFkaW8tY29udHJvbC1ob3Zlci1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWNvbnRyb2wtaG92ZXIsIHJhZGlvLWNvbnRyb2wtaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCwgcmFkaW8tY29udHJvbC1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC1ob3Zlci1ib3JkZXIsIHJhZGlvLWNvbnRyb2wtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtYWN0aXZlLCByYWRpby1jb250cm9sLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlciwgcmFkaW8tY29udHJvbC1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCwgcmFkaW8tY29udHJvbC1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtYWN0aXZlLWJvcmRlciwgcmFkaW8tY29udHJvbC1hY3RpdmUtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1jb250cm9sLWFjdGl2ZSwgcmFkaW8tY29udHJvbC1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRpc2FibGVkLCByYWRpby1jb250cm9sLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsIHJhZGlvLWNvbnRyb2wtZGlzYWJsZWQtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtMTAwLCByYWRpby1jb250cm9sLWRpc2FibGVkLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsIHJhZGlvLWNvbnRyb2wtZGlzYWJsZWQtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCwgcmFkaW8tY29udHJvbC1kaXNhYmxlZC1jaGVja2VkLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLCB0cmVlLWdyaWQtY2VsbC1ib3JkZXItd2lkdGg6IDFweCwgdHJlZS1ncmlkLWNlbGwtYm9yZGVyLXN0eWxlOiBzb2xpZCwgdHJlZS1ncmlkLWNlbGwtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMiwgdHJlZS1ncmlkLXJvdy1taW4taGVpZ2h0OiAycmVtLCB0cmVlLWdyaWQtY2VsbC1wYWRkaW5nOiAwLjg3NXJlbSAxLjI1cmVtLCB0cmVlLWdyaWQtaGVhZGVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSwgdHJlZS1ncmlkLWhlYWRlci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLCB0cmVlLWdyaWQtaGVhZGVyLXRleHQtZm9udC1mYW1pbHk6IHRleHQtc3VidGl0bGUtZm9udC1mYW1pbHksIHRyZWUtZ3JpZC1oZWFkZXItdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLCB0cmVlLWdyaWQtaGVhZGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsIHRyZWUtZ3JpZC1oZWFkZXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCwgdHJlZS1ncmlkLWZvb3Rlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsIHRyZWUtZ3JpZC1mb290ZXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvciwgdHJlZS1ncmlkLWZvb3Rlci10ZXh0LWZvbnQtZmFtaWx5OiB0cmVlLWdyaWQtaGVhZGVyLXRleHQtZm9udC1mYW1pbHksIHRyZWUtZ3JpZC1mb290ZXItdGV4dC1mb250LXNpemU6IHRyZWUtZ3JpZC1oZWFkZXItdGV4dC1mb250LXNpemUsIHRyZWUtZ3JpZC1mb290ZXItdGV4dC1mb250LXdlaWdodDogdHJlZS1ncmlkLWhlYWRlci10ZXh0LWZvbnQtd2VpZ2h0LCB0cmVlLWdyaWQtZm9vdGVyLXRleHQtbGluZS1oZWlnaHQ6IHRyZWUtZ3JpZC1oZWFkZXItdGV4dC1saW5lLWhlaWdodCwgdHJlZS1ncmlkLXJvdy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsIHRyZWUtZ3JpZC1yb3ctZXZlbi1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsIHRyZWUtZ3JpZC1yb3ctaG92ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLCB0cmVlLWdyaWQtcm93LXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsIHRyZWUtZ3JpZC1yb3ctdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksIHRyZWUtZ3JpZC1yb3ctdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSwgdHJlZS1ncmlkLXJvdy10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCwgdHJlZS1ncmlkLXJvdy10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCwgdHJlZS1ncmlkLXNvcnQtaGVhZGVyLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCwgdHJlZS1ncmlkLXNvcnQtaGVhZGVyLWJ1dHRvbi1ib3JkZXI6IG5vbmUsIHRyZWUtZ3JpZC1zb3J0LWhlYWRlci1idXR0b24tcGFkZGluZzogMCwgaWNvbi1mb250LXNpemU6IDEuMjVyZW0sIGljb24tbGluZS1oZWlnaHQ6IDEsIGljb24td2lkdGg6IDFlbSwgaWNvbi1oZWlnaHQ6IDFlbSwgaWNvbi1zdmctdmVydGljYWwtYWxpZ246IHRvcCwgaWNvbi1iYXNpYy1jb2xvcjogdGV4dC1oaW50LWNvbG9yLCBpY29uLXByaW1hcnktY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCwgaWNvbi1pbmZvLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsIGljb24tc3VjY2Vzcy1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LCBpY29uLXdhcm5pbmctY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCwgaWNvbi1kYW5nZXItY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LCBpY29uLWNvbnRyb2wtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCwgdG9nZ2xlLWhlaWdodDogMS44NzVyZW0sIHRvZ2dsZS13aWR0aDogMy4xMjVyZW0sIHRvZ2dsZS1ib3JkZXItd2lkdGg6IDFweCwgdG9nZ2xlLWJvcmRlci1yYWRpdXM6IDEwMHB4LCB0b2dnbGUtb3V0bGluZS13aWR0aDogb3V0bGluZS13aWR0aCwgdG9nZ2xlLW91dGxpbmUtY29sb3I6IG91dGxpbmUtY29sb3IsIHRvZ2dsZS1zd2l0Y2hlci1zaXplOiAxLjc1cmVtLCB0b2dnbGUtc3dpdGNoZXItaWNvbi1zaXplOiAwLjc1cmVtLCB0b2dnbGUtdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtZmFtaWx5LCB0b2dnbGUtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtMi1mb250LXNpemUsIHRvZ2dsZS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItZm9udC13ZWlnaHQsIHRvZ2dsZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItbGluZS1oZWlnaHQsIHRvZ2dsZS1jdXJzb3I6IHBvaW50ZXIsIHRvZ2dsZS1kaXNhYmxlZC1jdXJzb3I6IGRlZmF1bHQsIHRvZ2dsZS1iYXNpYy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLCB0b2dnbGUtYmFzaWMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGVmYXVsdCwgdG9nZ2xlLWJhc2ljLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsIHRvZ2dsZS1iYXNpYy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCwgdG9nZ2xlLWJhc2ljLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQtYm9yZGVyLCB0b2dnbGUtYmFzaWMtY2hlY2tlZC1zd2l0Y2hlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsIHRvZ2dsZS1iYXNpYy1jaGVja2VkLXN3aXRjaGVyLWNoZWNrbWFyay1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LCB0b2dnbGUtYmFzaWMtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1mb2N1cywgdG9nZ2xlLWJhc2ljLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsIHRvZ2dsZS1iYXNpYy1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMsIHRvZ2dsZS1iYXNpYy1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cy1ib3JkZXIsIHRvZ2dsZS1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLCB0b2dnbGUtYmFzaWMtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlciwgdG9nZ2xlLWJhc2ljLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlciwgdG9nZ2xlLWJhc2ljLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLWJvcmRlciwgdG9nZ2xlLWJhc2ljLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZSwgdG9nZ2xlLWJhc2ljLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlciwgdG9nZ2xlLWJhc2ljLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLCB0b2dnbGUtYmFzaWMtYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZS1ib3JkZXIsIHRvZ2dsZS1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZCwgdG9nZ2xlLWJhc2ljLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLCB0b2dnbGUtYmFzaWMtZGlzYWJsZWQtc3dpdGNoZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtZGlzYWJsZWQsIHRvZ2dsZS1iYXNpYy1kaXNhYmxlZC1jaGVja2VkLXN3aXRjaGVyLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLCB0b2dnbGUtYmFzaWMtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvciwgdG9nZ2xlLXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvciwgdG9nZ2xlLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1kZWZhdWx0LCB0b2dnbGUtcHJpbWFyeS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsIHRvZ2dsZS1wcmltYXJ5LWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LCB0b2dnbGUtcHJpbWFyeS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LWJvcmRlciwgdG9nZ2xlLXByaW1hcnktY2hlY2tlZC1zd2l0Y2hlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsIHRvZ2dsZS1wcmltYXJ5LWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsIHRvZ2dsZS1wcmltYXJ5LWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZm9jdXMsIHRvZ2dsZS1wcmltYXJ5LWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsIHRvZ2dsZS1wcmltYXJ5LWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cywgdG9nZ2xlLXByaW1hcnktZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMtYm9yZGVyLCB0b2dnbGUtcHJpbWFyeS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLCB0b2dnbGUtcHJpbWFyeS1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLCB0b2dnbGUtcHJpbWFyeS1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsIHRvZ2dsZS1wcmltYXJ5LWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLWJvcmRlciwgdG9nZ2xlLXByaW1hcnktYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlLCB0b2dnbGUtcHJpbWFyeS1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsIHRvZ2dsZS1wcmltYXJ5LWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLCB0b2dnbGUtcHJpbWFyeS1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLWJvcmRlciwgdG9nZ2xlLXByaW1hcnktZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsIHRvZ2dsZS1wcmltYXJ5LWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLCB0b2dnbGUtcHJpbWFyeS1kaXNhYmxlZC1zd2l0Y2hlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1kaXNhYmxlZCwgdG9nZ2xlLXByaW1hcnktZGlzYWJsZWQtY2hlY2tlZC1zd2l0Y2hlci1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvciwgdG9nZ2xlLXByaW1hcnktZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvciwgdG9nZ2xlLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvciwgdG9nZ2xlLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kZWZhdWx0LCB0b2dnbGUtc3VjY2Vzcy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsIHRvZ2dsZS1zdWNjZXNzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LCB0b2dnbGUtc3VjY2Vzcy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LWJvcmRlciwgdG9nZ2xlLXN1Y2Nlc3MtY2hlY2tlZC1zd2l0Y2hlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsIHRvZ2dsZS1zdWNjZXNzLWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsIHRvZ2dsZS1zdWNjZXNzLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZm9jdXMsIHRvZ2dsZS1zdWNjZXNzLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsIHRvZ2dsZS1zdWNjZXNzLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1mb2N1cywgdG9nZ2xlLXN1Y2Nlc3MtZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLCB0b2dnbGUtc3VjY2Vzcy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWhvdmVyLCB0b2dnbGUtc3VjY2Vzcy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLCB0b2dnbGUtc3VjY2Vzcy1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXIsIHRvZ2dsZS1zdWNjZXNzLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLWJvcmRlciwgdG9nZ2xlLXN1Y2Nlc3MtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtYWN0aXZlLCB0b2dnbGUtc3VjY2Vzcy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsIHRvZ2dsZS1zdWNjZXNzLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtYWN0aXZlLCB0b2dnbGUtc3VjY2Vzcy1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtYWN0aXZlLWJvcmRlciwgdG9nZ2xlLXN1Y2Nlc3MtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsIHRvZ2dsZS1zdWNjZXNzLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLCB0b2dnbGUtc3VjY2Vzcy1kaXNhYmxlZC1zd2l0Y2hlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1kaXNhYmxlZCwgdG9nZ2xlLXN1Y2Nlc3MtZGlzYWJsZWQtY2hlY2tlZC1zd2l0Y2hlci1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvciwgdG9nZ2xlLXN1Y2Nlc3MtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvciwgdG9nZ2xlLWluZm8tdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvciwgdG9nZ2xlLWluZm8tYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1kZWZhdWx0LCB0b2dnbGUtaW5mby1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsIHRvZ2dsZS1pbmZvLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LCB0b2dnbGUtaW5mby1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LWJvcmRlciwgdG9nZ2xlLWluZm8tY2hlY2tlZC1zd2l0Y2hlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsIHRvZ2dsZS1pbmZvLWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsIHRvZ2dsZS1pbmZvLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZm9jdXMsIHRvZ2dsZS1pbmZvLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsIHRvZ2dsZS1pbmZvLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1mb2N1cywgdG9nZ2xlLWluZm8tZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZm9jdXMtYm9yZGVyLCB0b2dnbGUtaW5mby1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWhvdmVyLCB0b2dnbGUtaW5mby1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLCB0b2dnbGUtaW5mby1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8taG92ZXIsIHRvZ2dsZS1pbmZvLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLWJvcmRlciwgdG9nZ2xlLWluZm8tYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtYWN0aXZlLCB0b2dnbGUtaW5mby1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsIHRvZ2dsZS1pbmZvLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tYWN0aXZlLCB0b2dnbGUtaW5mby1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tYWN0aXZlLWJvcmRlciwgdG9nZ2xlLWluZm8tZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsIHRvZ2dsZS1pbmZvLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLCB0b2dnbGUtaW5mby1kaXNhYmxlZC1zd2l0Y2hlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1kaXNhYmxlZCwgdG9nZ2xlLWluZm8tZGlzYWJsZWQtY2hlY2tlZC1zd2l0Y2hlci1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvciwgdG9nZ2xlLWluZm8tZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvciwgdG9nZ2xlLXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvciwgdG9nZ2xlLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1kZWZhdWx0LCB0b2dnbGUtd2FybmluZy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsIHRvZ2dsZS13YXJuaW5nLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LCB0b2dnbGUtd2FybmluZy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LWJvcmRlciwgdG9nZ2xlLXdhcm5pbmctY2hlY2tlZC1zd2l0Y2hlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsIHRvZ2dsZS13YXJuaW5nLWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsIHRvZ2dsZS13YXJuaW5nLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZm9jdXMsIHRvZ2dsZS13YXJuaW5nLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsIHRvZ2dsZS13YXJuaW5nLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cywgdG9nZ2xlLXdhcm5pbmctZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMtYm9yZGVyLCB0b2dnbGUtd2FybmluZy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWhvdmVyLCB0b2dnbGUtd2FybmluZy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLCB0b2dnbGUtd2FybmluZy1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXIsIHRvZ2dsZS13YXJuaW5nLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLWJvcmRlciwgdG9nZ2xlLXdhcm5pbmctYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtYWN0aXZlLCB0b2dnbGUtd2FybmluZy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsIHRvZ2dsZS13YXJuaW5nLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctYWN0aXZlLCB0b2dnbGUtd2FybmluZy1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctYWN0aXZlLWJvcmRlciwgdG9nZ2xlLXdhcm5pbmctZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsIHRvZ2dsZS13YXJuaW5nLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLCB0b2dnbGUtd2FybmluZy1kaXNhYmxlZC1zd2l0Y2hlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1kaXNhYmxlZCwgdG9nZ2xlLXdhcm5pbmctZGlzYWJsZWQtY2hlY2tlZC1zd2l0Y2hlci1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvciwgdG9nZ2xlLXdhcm5pbmctZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvciwgdG9nZ2xlLWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLCB0b2dnbGUtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1kZWZhdWx0LCB0b2dnbGUtZGFuZ2VyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLCB0b2dnbGUtZGFuZ2VyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsIHRvZ2dsZS1kYW5nZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LWJvcmRlciwgdG9nZ2xlLWRhbmdlci1jaGVja2VkLXN3aXRjaGVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSwgdG9nZ2xlLWRhbmdlci1jaGVja2VkLXN3aXRjaGVyLWNoZWNrbWFyay1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsIHRvZ2dsZS1kYW5nZXItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWZvY3VzLCB0b2dnbGUtZGFuZ2VyLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlciwgdG9nZ2xlLWRhbmdlci1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1mb2N1cywgdG9nZ2xlLWRhbmdlci1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLWJvcmRlciwgdG9nZ2xlLWRhbmdlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtaG92ZXIsIHRvZ2dsZS1kYW5nZXItaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLCB0b2dnbGUtZGFuZ2VyLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLCB0b2dnbGUtZGFuZ2VyLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXItYm9yZGVyLCB0b2dnbGUtZGFuZ2VyLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtYWN0aXZlLCB0b2dnbGUtZGFuZ2VyLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLCB0b2dnbGUtZGFuZ2VyLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1hY3RpdmUsIHRvZ2dsZS1kYW5nZXItYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItYWN0aXZlLWJvcmRlciwgdG9nZ2xlLWRhbmdlci1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZCwgdG9nZ2xlLWRhbmdlci1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlciwgdG9nZ2xlLWRhbmdlci1kaXNhYmxlZC1zd2l0Y2hlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1kaXNhYmxlZCwgdG9nZ2xlLWRhbmdlci1kaXNhYmxlZC1jaGVja2VkLXN3aXRjaGVyLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLCB0b2dnbGUtZGFuZ2VyLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsIHRvZ2dsZS1jb250cm9sLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCwgdG9nZ2xlLWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kZWZhdWx0LCB0b2dnbGUtY29udHJvbC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsIHRvZ2dsZS1jb250cm9sLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kZWZhdWx0LCB0b2dnbGUtY29udHJvbC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlciwgdG9nZ2xlLWNvbnRyb2wtY2hlY2tlZC1zd2l0Y2hlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsIHRvZ2dsZS1jb250cm9sLWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOiBjb2xvci1iYXNpYy04MDAsIHRvZ2dsZS1jb250cm9sLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZm9jdXMsIHRvZ2dsZS1jb250cm9sLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsIHRvZ2dsZS1jb250cm9sLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1mb2N1cywgdG9nZ2xlLWNvbnRyb2wtZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLCB0b2dnbGUtY29udHJvbC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyLCB0b2dnbGUtY29udHJvbC1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLCB0b2dnbGUtY29udHJvbC1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtaG92ZXIsIHRvZ2dsZS1jb250cm9sLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlciwgdG9nZ2xlLWNvbnRyb2wtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtYWN0aXZlLCB0b2dnbGUtY29udHJvbC1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsIHRvZ2dsZS1jb250cm9sLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtYWN0aXZlLCB0b2dnbGUtY29udHJvbC1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlciwgdG9nZ2xlLWNvbnRyb2wtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kaXNhYmxlZCwgdG9nZ2xlLWNvbnRyb2wtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlciwgdG9nZ2xlLWNvbnRyb2wtZGlzYWJsZWQtc3dpdGNoZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLCB0b2dnbGUtY29udHJvbC1kaXNhYmxlZC1jaGVja2VkLXN3aXRjaGVyLWNoZWNrbWFyay1jb2xvcjogY29sb3ItYmFzaWMtMTAwLCB0b2dnbGUtY29udHJvbC1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsIGZvcm0tZmllbGQtYWRkb24tYmFzaWMtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtNjAwLCBmb3JtLWZpZWxkLWFkZG9uLWJhc2ljLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiBjb2xvci1wcmltYXJ5LTUwMCwgZm9ybS1maWVsZC1hZGRvbi1wcmltYXJ5LXRleHQtY29sb3I6IGNvbG9yLXByaW1hcnktNTAwLCBmb3JtLWZpZWxkLWFkZG9uLXByaW1hcnktaGlnaGxpZ2h0LXRleHQtY29sb3I6IGNvbG9yLXByaW1hcnktNjAwLCBmb3JtLWZpZWxkLWFkZG9uLXN1Y2Nlc3MtdGV4dC1jb2xvcjogY29sb3Itc3VjY2Vzcy01MDAsIGZvcm0tZmllbGQtYWRkb24tc3VjY2Vzcy1oaWdobGlnaHQtdGV4dC1jb2xvcjogY29sb3Itc3VjY2Vzcy02MDAsIGZvcm0tZmllbGQtYWRkb24taW5mby10ZXh0LWNvbG9yOiBjb2xvci1pbmZvLTUwMCwgZm9ybS1maWVsZC1hZGRvbi1pbmZvLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiBjb2xvci1pbmZvLTYwMCwgZm9ybS1maWVsZC1hZGRvbi13YXJuaW5nLXRleHQtY29sb3I6IGNvbG9yLXdhcm5pbmctNTAwLCBmb3JtLWZpZWxkLWFkZG9uLXdhcm5pbmctaGlnaGxpZ2h0LXRleHQtY29sb3I6IGNvbG9yLXdhcm5pbmctNjAwLCBmb3JtLWZpZWxkLWFkZG9uLWRhbmdlci10ZXh0LWNvbG9yOiBjb2xvci1kYW5nZXItNTAwLCBmb3JtLWZpZWxkLWFkZG9uLWRhbmdlci1oaWdobGlnaHQtdGV4dC1jb2xvcjogY29sb3ItZGFuZ2VyLTYwMCwgZm9ybS1maWVsZC1hZGRvbi1jb250cm9sLXRleHQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCwgZm9ybS1maWVsZC1hZGRvbi1jb250cm9sLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsIGZvcm0tZmllbGQtYWRkb24tZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvciwgZm9ybS1maWVsZC1hZGRvbi10aW55LWhlaWdodDogMS41cmVtLCBmb3JtLWZpZWxkLWFkZG9uLXRpbnktd2lkdGg6IGZvcm0tZmllbGQtYWRkb24tdGlueS1oZWlnaHQsIGZvcm0tZmllbGQtYWRkb24tdGlueS1pY29uLXNpemU6IGJ1dHRvbi10aW55LWljb24tc2l6ZSwgZm9ybS1maWVsZC1hZGRvbi10aW55LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tdGlueS1mb250LXNpemUsIGZvcm0tZmllbGQtYWRkb24tdGlueS1saW5lLWhlaWdodDogdGV4dC1idXR0b24tdGlueS1saW5lLWhlaWdodCwgZm9ybS1maWVsZC1hZGRvbi10aW55LWZvbnQtd2VpZ2h0OiB0ZXh0LWJ1dHRvbi1mb250LXdlaWdodCwgZm9ybS1maWVsZC1hZGRvbi1zbWFsbC1oZWlnaHQ6IDJyZW0sIGZvcm0tZmllbGQtYWRkb24tc21hbGwtd2lkdGg6IGZvcm0tZmllbGQtYWRkb24tc21hbGwtaGVpZ2h0LCBmb3JtLWZpZWxkLWFkZG9uLXNtYWxsLWljb24tc2l6ZTogYnV0dG9uLXNtYWxsLWljb24tc2l6ZSwgZm9ybS1maWVsZC1hZGRvbi1zbWFsbC1mb250LXNpemU6IHRleHQtYnV0dG9uLXNtYWxsLWZvbnQtc2l6ZSwgZm9ybS1maWVsZC1hZGRvbi1zbWFsbC1saW5lLWhlaWdodDogdGV4dC1idXR0b24tc21hbGwtbGluZS1oZWlnaHQsIGZvcm0tZmllbGQtYWRkb24tc21hbGwtZm9udC13ZWlnaHQ6IHRleHQtYnV0dG9uLWZvbnQtd2VpZ2h0LCBmb3JtLWZpZWxkLWFkZG9uLW1lZGl1bS1oZWlnaHQ6IDIuNXJlbSwgZm9ybS1maWVsZC1hZGRvbi1tZWRpdW0td2lkdGg6IGZvcm0tZmllbGQtYWRkb24tbWVkaXVtLWhlaWdodCwgZm9ybS1maWVsZC1hZGRvbi1tZWRpdW0taWNvbi1zaXplOiBidXR0b24tbWVkaXVtLWljb24tc2l6ZSwgZm9ybS1maWVsZC1hZGRvbi1tZWRpdW0tZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi1tZWRpdW0tZm9udC1zaXplLCBmb3JtLWZpZWxkLWFkZG9uLW1lZGl1bS1saW5lLWhlaWdodDogdGV4dC1idXR0b24tbWVkaXVtLWxpbmUtaGVpZ2h0LCBmb3JtLWZpZWxkLWFkZG9uLW1lZGl1bS1mb250LXdlaWdodDogdGV4dC1idXR0b24tZm9udC13ZWlnaHQsIGZvcm0tZmllbGQtYWRkb24tbGFyZ2UtaGVpZ2h0OiAzcmVtLCBmb3JtLWZpZWxkLWFkZG9uLWxhcmdlLXdpZHRoOiBmb3JtLWZpZWxkLWFkZG9uLWxhcmdlLWhlaWdodCwgZm9ybS1maWVsZC1hZGRvbi1sYXJnZS1pY29uLXNpemU6IGJ1dHRvbi1sYXJnZS1pY29uLXNpemUsIGZvcm0tZmllbGQtYWRkb24tbGFyZ2UtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi1sYXJnZS1mb250LXNpemUsIGZvcm0tZmllbGQtYWRkb24tbGFyZ2UtbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLWxhcmdlLWxpbmUtaGVpZ2h0LCBmb3JtLWZpZWxkLWFkZG9uLWxhcmdlLWZvbnQtd2VpZ2h0OiB0ZXh0LWJ1dHRvbi1mb250LXdlaWdodCwgZm9ybS1maWVsZC1hZGRvbi1naWFudC1oZWlnaHQ6IDMuNXJlbSwgZm9ybS1maWVsZC1hZGRvbi1naWFudC13aWR0aDogZm9ybS1maWVsZC1hZGRvbi1naWFudC1oZWlnaHQsIGZvcm0tZmllbGQtYWRkb24tZ2lhbnQtaWNvbi1zaXplOiBidXR0b24tZ2lhbnQtaWNvbi1zaXplLCBmb3JtLWZpZWxkLWFkZG9uLWdpYW50LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tZ2lhbnQtZm9udC1zaXplLCBmb3JtLWZpZWxkLWFkZG9uLWdpYW50LWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi1naWFudC1saW5lLWhlaWdodCwgZm9ybS1maWVsZC1hZGRvbi1naWFudC1mb250LXdlaWdodDogdGV4dC1idXR0b24tZm9udC13ZWlnaHQpOyIsIkBpbXBvcnQgJy4uLy4uL3RoZW1lcy9tYXBwaW5nJztcblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AZnVuY3Rpb24gbmItZ2V0LWVuYWJsZWQtdGhlbWVzKCkge1xuXG4gIEBpZiAobGVuZ3RoKCRuYi1lbmFibGVkLXRoZW1lcykgPT0gMCkge1xuICAgIEBlYWNoICR0aGVtZS1uYW1lLCAkdGhlbWUgaW4gJG5iLXRoZW1lcyB7XG4gICAgICAkbmItZW5hYmxlZC10aGVtZXM6IGFwcGVuZCgkbmItZW5hYmxlZC10aGVtZXMsICR0aGVtZS1uYW1lKSAhZ2xvYmFsO1xuICAgIH1cbiAgfVxuICBAcmV0dXJuICRuYi1lbmFibGVkLXRoZW1lcztcbn1cblxuQGZ1bmN0aW9uIGdldC1sYXN0LWVuYWJsZWQtdGhlbWUoKSB7XG4gICR0aGVtZXM6IG5iLWdldC1lbmFibGVkLXRoZW1lcygpO1xuICBAcmV0dXJuIG50aCgkdGhlbWVzLCBsZW5ndGgoJHRoZW1lcykpO1xufVxuXG5AZnVuY3Rpb24gbmItc2V0LWZvci1leHBvcnQoJHRoZW1lLCAkbmFtZSwgJHBhcmVudC1uYW1lOiBudWxsKSB7XG5cbiAgJHBhcmVudC10aGVtZTogbWFwLWdldCgkbmItdGhlbWVzLWV4cG9ydCwgJHBhcmVudC1uYW1lKTtcbiAgQGlmICgkcGFyZW50LXRoZW1lICE9IG51bGwpIHtcbiAgICAkdGhlbWU6IG1hcC1tZXJnZShtYXAtZ2V0KCRwYXJlbnQtdGhlbWUsIGRhdGEpLCAkdGhlbWUpO1xuICB9XG5cbiAgJHRoZW1lLWRhdGE6IChcbiAgICBkYXRhOiAkdGhlbWUsXG4gICAgcGFyZW50OiAkcGFyZW50LW5hbWUsXG4gICk7XG4gIEByZXR1cm4gbWFwLXNldCgkbmItdGhlbWVzLWV4cG9ydCwgJG5hbWUsICR0aGVtZS1kYXRhKTtcbn1cblxuQGZ1bmN0aW9uIG5iLWdldC1yZWdpc3RlcmVkLXRoZW1lKCRuYW1lKSB7XG4gICR0aGVtZTogbWFwLWdldCgkbmItdGhlbWVzLCAkbmFtZSk7XG5cbiAgLy8gVE9ETzogY2hlY2sgaWYgb3B0aW1hbCBwbGFjZVxuICBAaWYgKCR0aGVtZSA9PSBudWxsKSB7XG4gICAgQGVycm9yICdOZWJ1bGFyIFRoZW1lOiB0aGVtZSBgJyArICRuYW1lICsgJ2AgaXMgbm90IHJlZ2lzdGVyZWQgd2l0aCBgbmItcmVnaXN0ZXItdGhlbWVgIGZ1bmN0aW9uLic7XG4gIH1cblxuICBAcmV0dXJuICR0aGVtZTtcbn1cblxuLy8gRW50cnkgcG9pbnRcbi8vIFJlZ2lzdGVycyBhIG5ldyB0aGVtZVxuQGZ1bmN0aW9uIG5iLXJlZ2lzdGVyLXRoZW1lKCR0aGVtZSwgJG5hbWUsICRwYXJlbnQtbmFtZTogbnVsbCkge1xuXG4gIEBpZiAoJG5iLXRoZW1lLWV4cG9ydC1tb2RlID09IHRydWUpIHtcbiAgICAkbmItdGhlbWVzLWV4cG9ydDogbmItc2V0LWZvci1leHBvcnQoJHRoZW1lLCAkbmFtZSwgJHBhcmVudC1uYW1lKSAhZ2xvYmFsO1xuICB9XG5cbiAgJHRoZW1lLWRhdGE6ICgpO1xuXG4gIEBpZiAoJHBhcmVudC1uYW1lICE9IG51bGwpIHtcbiAgICAkcGFyZW50LXRoZW1lOiBtYXAtZ2V0KCRuYi10aGVtZXMsICRwYXJlbnQtbmFtZSk7XG4gICAgQGlmICgkcGFyZW50LXRoZW1lID09IG51bGwpIHtcbiAgICAgIEBlcnJvciAnTmVidWxhciBUaGVtZTogcGFyZW50IHRoZW1lIGAnICsgJHBhcmVudC1uYW1lICsgJ2AgaXMgbm90IHJlZ2lzdGVyZWQgb3IgaW1wb3J0ZWQuJztcbiAgICB9XG4gICAgJHRoZW1lOiBtYXAtbWVyZ2UoJHBhcmVudC10aGVtZSwgJHRoZW1lKTtcbiAgfVxuICAkdGhlbWU6IG1hcC1tZXJnZSgkZXZhLW1hcHBpbmcsICR0aGVtZSk7XG4gICRuYi10aGVtZXM6IG1hcC1zZXQoJG5iLXRoZW1lcywgJG5hbWUsICR0aGVtZSkgIWdsb2JhbDtcblxuICBAcmV0dXJuICRuYi10aGVtZXM7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBtaXhpbiBuYi1mb3ItdGhlbWUoJG5hbWUpIHtcbiAgQGlmICgkbmItdGhlbWUtbmFtZSA9PSAkbmFtZSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBuYi1mb3ItdGhlbWVzKCRuYW1lcy4uLikge1xuICBAZWFjaCAkbmFtZSBpbiAkbmFtZXMge1xuICAgIEBpbmNsdWRlIG5iLWZvci10aGVtZSgkbmFtZSkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBuYi1leGNlcHQtdGhlbWUoJG5hbWUpIHtcbiAgQGlmICgkbmItdGhlbWUtbmFtZSAhPSAkbmFtZSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBuYi1leGNlcHQtZm9yLXRoZW1lcygkbmFtZXMuLi4pIHtcbiAgQGVhY2ggJG5hbWUgaW4gJG5hbWVzIHtcbiAgICBAaW5jbHVkZSBuYi1leGNlcHQtdGhlbWUoJG5hbWUpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbmItaW5zdGFsbC1jc3MtcHJvcGVydGllcygkdGhlbWUtbmFtZSwgJHRoZW1lKSB7XG4gIC5uYi10aGVtZS0jeyR0aGVtZS1uYW1lfSB7XG5cbiAgICBAZWFjaCAkdmFyLCAkdmFsdWUgaW4gJHRoZW1lIHtcbiAgICAgIEBpZiAodHlwZS1vZigkdmFsdWUpID09ICdzdHJpbmcnIGFuZCBtYXAtZ2V0KCR0aGVtZSwgJHZhbHVlKSkge1xuICAgICAgICAtLSN7JHZhcn06IHZhcigtLSN7JHZhbHVlfSk7XG4gICAgICB9IEBlbHNlIHtcbiAgICAgICAgLS0jeyR2YXJ9OiAjeyR2YWx1ZX07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBuYi1wcmUtcHJvY2Vzcy1jb250ZXh0KCR0aGVtZS1uYW1lKSB7XG4gICRuYi10aGVtZS1wcm9jZXNzLW1vZGU6ICdwcmUtcHJvY2VzcycgIWdsb2JhbDtcblxuICAkbmItdGhlbWUtbmFtZTogJHRoZW1lLW5hbWUgIWdsb2JhbDtcbiAgJG5iLXByb2Nlc3NlZC10aGVtZTogbmItcHJvY2Vzcy10aGVtZShuYi1nZXQtcmVnaXN0ZXJlZC10aGVtZSgkdGhlbWUtbmFtZSkpICFnbG9iYWw7XG59XG5cbkBtaXhpbiBuYi1sYXp5LXByb2Nlc3MtY29udGV4dCgkdGhlbWUtbmFtZSkge1xuICAkbmItdGhlbWUtcHJvY2Vzcy1tb2RlOiAnbGF6eS1wcm9jZXNzJyAhZ2xvYmFsO1xuXG4gICRuYi10aGVtZS1uYW1lOiAkdGhlbWUtbmFtZSAhZ2xvYmFsO1xuICAkbmItcHJvY2Vzc2VkLXRoZW1lOiAoKSAhZ2xvYmFsO1xufVxuXG5AbWl4aW4gbmItaW5zdGFsbC1jb21wb25lbnQtd2l0aC1jc3MtcHJvcHMoKSB7XG4gIC8vIEBicmVha2luZy1jaGFuZ2UgNS4wLjBcbiAgOmhvc3Qge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBuYi1pbnN0YWxsLWNvbXBvbmVudC13aXRoLXNjc3MtdmFycygpIHtcbiAgJGVuYWJsZWQtdGhlbWVzOiBuYi1nZXQtZW5hYmxlZC10aGVtZXMoKTtcblxuICBAZWFjaCAkdGhlbWUtbmFtZSBpbiAkZW5hYmxlZC10aGVtZXMge1xuXG4gICAgQGluY2x1ZGUgbmItbGF6eS1wcm9jZXNzLWNvbnRleHQoJHRoZW1lLW5hbWUpO1xuXG4gICAgLypcbiAgICAgIDpob3N0IGNhbiBiZSBwcmVmaXhlZFxuICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzhkMGVlMzQ5MzlmMTRjMDc4NzZkMjIyYzI1YjQwNWVkNDU4YTM0ZDMvcGFja2FnZXMvY29tcGlsZXIvc3JjL3NoYWRvd19jc3MudHMjTDQ0MVxuXG4gICAgICBXZSBoYXZlIHRvIHVzZSA6aG9zdCBpbnN0ZWFkIG9mIDpob3N0LWNvbnRleHQoJHRoZW1lKSwgdG8gYmUgYWJsZSB0byBwcmVmaXggdGhlbWUgY2xhc3NcbiAgICAgIHdpdGggc29tZXRoaW5nIGRlZmluZWQgaW5zaWRlIG9mIEBjb250ZW50LCBieSBwcmVmaXhpbmcgJi5cbiAgICAgIEZvciBleGFtcGxlIHRoaXMgc2NzcyBjb2RlOlxuICAgICAgICAubmItdGhlbWUtZGVmYXVsdCB7XG4gICAgICAgICAgLnNvbWUtc2VsZWN0b3IgJiB7XG4gICAgICAgICAgICAuLi5cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIFdpbGwgcmVzdWx0IGluIG5leHQgY3NzOlxuICAgICAgICAuc29tZS1zZWxlY3RvciAubmItdGhlbWUtZGVmYXVsdCB7XG4gICAgICAgICAgLi4uXG4gICAgICAgIH1cblxuICAgICAgSXQgZG9lc24ndCB3b3JrIHdpdGggOmhvc3QtY29udGV4dCBiZWNhdXNlIGFuZ3VsYXIgc3BsaXR0aW5nIGl0IGluIHR3byBzZWxlY3RvcnMgYW5kIHJlbW92ZXNcbiAgICAgIHByZWZpeCBpbiBvbmUgb2YgdGhlIHNlbGVjdG9ycy5cbiAgICAqL1xuICAgIC5uYi10aGVtZS0jeyR0aGVtZS1uYW1lfSA6aG9zdCB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gRW50cnkgcG9pbnRcbi8vIEluc3RhbGxzIGNvbXBvbmVudCBzdHlsZXMgYmFzZWQgb24gcmVnaXN0ZXJlZCB0aGVtZXNcbi8vIFRPRE86IHdlIGhpZGUgOmhvc3QgaW5zaWRlIG9mIGl0IHdoaWNoIGlzIG5vdCBvYnZpb3VzXG5AbWl4aW4gbmItaW5zdGFsbC1jb21wb25lbnQoKSB7XG5cbiAgQGlmICgkbmItZW5hYmxlLWNzcy1jdXN0b20tcHJvcGVydGllcykge1xuXG4gICAgQGluY2x1ZGUgbmItaW5zdGFsbC1jb21wb25lbnQtd2l0aC1jc3MtcHJvcHMoKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG5cbiAgfSBAZWxzZSB7XG5cbiAgICBAaW5jbHVkZSBuYi1pbnN0YWxsLWNvbXBvbmVudC13aXRoLXNjc3MtdmFycygpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbmItaW5zdGFsbC1nbG9iYWwtd2l0aC1jc3MtcHJvcHMoKSB7XG4gIEBjb250ZW50O1xuXG4gIEBlYWNoICR0aGVtZS1uYW1lIGluIG5iLWdldC1lbmFibGVkLXRoZW1lcygpIHtcbiAgICBAaW5jbHVkZSBuYi1pbnN0YWxsLWNzcy1wcm9wZXJ0aWVzKCR0aGVtZS1uYW1lLCBuYi1nZXQtcmVnaXN0ZXJlZC10aGVtZSgkdGhlbWUtbmFtZSkpO1xuICB9XG59XG5cbkBtaXhpbiBuYi1pbnN0YWxsLWdsb2JhbC13aXRoLXNjc3MtdmFycygpIHtcblxuICBAZWFjaCAkdGhlbWUtbmFtZSBpbiBuYi1nZXQtZW5hYmxlZC10aGVtZXMoKSB7XG4gICAgQGluY2x1ZGUgbmItcHJlLXByb2Nlc3MtY29udGV4dCgkdGhlbWUtbmFtZSk7XG5cbiAgICAubmItdGhlbWUtI3skdGhlbWUtbmFtZX0ge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIEVudHJ5IHBvaW50XG4vLyBJbnN0YWxscyBnbG9iYWwgc3R5bGVzIGJhc2VkIG9uIHJlZ2lzdGVyZWQgdGhlbWVzXG5AbWl4aW4gbmItaW5zdGFsbCgpIHtcbiAgQGlmICgkbmItZW5hYmxlLWNzcy1jdXN0b20tcHJvcGVydGllcykge1xuICAgIEBpbmNsdWRlIG5iLWluc3RhbGwtZ2xvYmFsLXdpdGgtY3NzLXByb3BzKCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBuYi1pbnN0YWxsLWdsb2JhbC13aXRoLXNjc3MtdmFycygpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AZnVuY3Rpb24gbmItZGVlcC1maW5kLXZhbHVlKCR0aGVtZSwgJGtleSwgJHZhbHVlKSB7XG4gICRwYXJlbnQtdmFsdWU6IG1hcC1nZXQoJHRoZW1lLCAkdmFsdWUpO1xuXG4gIEBpZiAoJHBhcmVudC12YWx1ZSAhPSBudWxsKSB7XG4gICAgQHJldHVybiBuYi1kZWVwLWZpbmQtdmFsdWUoJHRoZW1lLCAkdmFsdWUsICRwYXJlbnQtdmFsdWUpO1xuICB9XG5cbiAgQHJldHVybiAkdmFsdWU7XG59XG5cbkBmdW5jdGlvbiBuYi1wcm9jZXNzLXRoZW1lKCR0aGVtZSkge1xuICAkcHJvY2Vzc2VkLXRoZW1lOiAoKTtcbiAgQGVhY2ggJGtleSwgJHZhbHVlIGluICR0aGVtZSB7XG4gICAgJHByb2Nlc3NlZC10aGVtZTogbWFwLXNldCgkcHJvY2Vzc2VkLXRoZW1lLCAka2V5LCBuYi1kZWVwLWZpbmQtdmFsdWUoJHRoZW1lLCAka2V5LCAkdmFsdWUpKTtcbiAgfVxuICBAcmV0dXJuICRwcm9jZXNzZWQtdGhlbWU7XG59XG5cbkBmdW5jdGlvbiBnZXQtY3VycmVudC10aGVtZS1uYW1lKCkge1xuICBAaWYgKCRuYi10aGVtZS1uYW1lICE9IG51bGwpIHtcbiAgICBAcmV0dXJuICRuYi10aGVtZS1uYW1lO1xuICB9XG5cbiAgQHJldHVybiBnZXQtbGFzdC1lbmFibGVkLXRoZW1lKCk7XG59XG5cbkBmdW5jdGlvbiBuYi10aGVtZSgka2V5KSB7XG5cbiAgJHZhbHVlOiAoKTtcblxuICAvLyBpbiBjYXNlIG9mIGNzcyBjdXN0b20gcHJvcGVydGllcyAtIGp1c3QgcmV0dXJucyB2YXIoLS12YXItbmFtZSkgLSB0aGUgcmVzdCBpcyBhIGJyb3dzZXIgam9iXG4gIEBpZiAoJG5iLWVuYWJsZS1jc3MtY3VzdG9tLXByb3BlcnRpZXMgPT0gdHJ1ZSkge1xuICAgIC8vIHRoZXJlIGlzIG5vIHdheSB0byBjaGVjayBpZiB2YXJpYWJsZSBleGlzdHMgYXMgY3VycmVudCBleGVjdXRpb24gY29udGV4dCBpcyBvdXRzaWRlIG9mIHBhcnRpY3VsYXIgdGhlbWVcbiAgICAvLyBiZWNhdXNlIHdlIHByb2Nlc3MgY3NzIGluIHRoaXMgbW9kZSBvbmx5IG9uY2UhIChhbmQgbm90IGZvciBlYWNoIHRoZW1lKVxuICAgICR2YWx1ZTogdmFyKC0tI3ska2V5fSk7XG4gIH0gQGVsc2Uge1xuICAgIC8vIGluIGEgcHJlcHJvY2VzcyBtb2RlIChuYi1pbnN0YWxsLWdsb2JhbCBjYWxsKSBnZXQgcmVhZHkgdmFsdWUgZnJvbSAkbmItcHJvY2Vzc2VkLXRoZW1lIHZhcmlhYmxlXG4gICAgQGlmICgkbmItdGhlbWUtcHJvY2Vzcy1tb2RlID09ICdwcmUtcHJvY2VzcycpIHtcbiAgICAgICR2YWx1ZTogbWFwLWdldCgkbmItcHJvY2Vzc2VkLXRoZW1lLCAka2V5KTtcbiAgICB9XG5cbiAgICAvLyBvdGhlcndpc2UgbGF6aWx5IHNlYXJjaCBmb3IgdmFyaWFibGUgdmFsdWVcbiAgICBAaWYgKCRuYi10aGVtZS1wcm9jZXNzLW1vZGUgPT0gJ2xhenktcHJvY2VzcycpIHtcblxuICAgICAgJG5iLXRoZW1lLW5hbWU6IGdldC1jdXJyZW50LXRoZW1lLW5hbWUoKTtcblxuICAgICAgJHRoZW1lOiBuYi1nZXQtcmVnaXN0ZXJlZC10aGVtZSgkbmItdGhlbWUtbmFtZSk7XG4gICAgICAkdmFsdWU6IG5iLWRlZXAtZmluZC12YWx1ZSgkdGhlbWUsICRrZXksIG1hcC1nZXQoJHRoZW1lLCAka2V5KSk7XG4gICAgfVxuICB9XG5cbiAgQGlmICgkdmFsdWUgPT0gbnVsbCkge1xuICAgIEB3YXJuICdOZWJ1bGFyIFRoZW1lOiBgbmItdGhlbWUoKWAgY2Fubm90IGZpbmQgdmFsdWUgZm9yIGtleSBgJyArICRrZXkgKyAnYCBmb3IgdGhlbWUgYCcrICRuYi10aGVtZS1uYW1lICsnYCc7XG4gIH1cblxuICBAcmV0dXJuICR2YWx1ZTtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQGltcG9ydCAnLi4vY29yZS9mdW5jdGlvbnMnO1xuQGltcG9ydCAnLi4vY29yZS9taXhpbnMnO1xuJHRoZW1lOiAoXG4vKipcbiAgICogU2FzcyBtYXAgY29udGFpbnMgYSBsaXN0IG9mIGFsbCBUaGVtZSB2YXJpYWJsZXMgYW5kIGFsc28gdGhlaXIgbWFwcGluZ3MgaW50byBDb21wb25lbnQgdmFyaWFibGVzXG4gICAqIEEgdGhlbWUgY29uc2lzdHMgb2YgYSBsaXN0IG9mIGNvbG9ycywgYmFja2dyb3VuZHMsIGJvcmRlcnMsIHRleHQgc3R5bGVzIGFuZCBzdXBwb3J0aW5nIHZhcmlhYmxlcy5cbiAgICovXG5cblxuLyogU3RhdHVzIGNvbG9yczogcHJpbWFyeSwgc3VjY2VzcywgaW5mbywgd2FybmluZywgZGFuZ2VyIC0gZm9yIGNvbG9yZWQgZWxlbWVudHMgKGJ1dHRvbnMsIGV0YykgKi9cblxuY29sb3ItcHJpbWFyeS0xMDA6ICNmMmY2ZmYsIGNvbG9yLXByaW1hcnktMjAwOiAjZDllNGZmLCBjb2xvci1wcmltYXJ5LTMwMDogI2E2YzFmZiwgY29sb3ItcHJpbWFyeS00MDA6ICM1OThiZmYsIGNvbG9yLXByaW1hcnktNTAwOiAjMzM2NmZmLCBjb2xvci1wcmltYXJ5LTYwMDogIzI3NGJkYiwgY29sb3ItcHJpbWFyeS03MDA6ICMxYTM0YjgsIGNvbG9yLXByaW1hcnktODAwOiAjMTAyNjk0LCBjb2xvci1wcmltYXJ5LTkwMDogIzA5MWM3YSwgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0xMDA6IHJnYmEoNTEsIDEwMiwgMjU1LCAwLjA4KSwgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0yMDA6IHJnYmEoNTEsIDEwMiwgMjU1LCAwLjE2KSwgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0zMDA6IHJnYmEoNTEsIDEwMiwgMjU1LCAwLjI0KSwgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC00MDA6IHJnYmEoNTEsIDEwMiwgMjU1LCAwLjMyKSwgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC01MDA6IHJnYmEoNTEsIDEwMiwgMjU1LCAwLjQpLCBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTYwMDogcmdiYSg1MSwgMTAyLCAyNTUsIDAuNDgpLCBjb2xvci1zdWNjZXNzLTEwMDogI2YwZmZmNSwgY29sb3Itc3VjY2Vzcy0yMDA6ICNjY2ZjZTMsIGNvbG9yLXN1Y2Nlc3MtMzAwOiAjOGNmYWM3LCBjb2xvci1zdWNjZXNzLTQwMDogIzJjZTY5YiwgY29sb3Itc3VjY2Vzcy01MDA6ICMwMGQ2OGYsIGNvbG9yLXN1Y2Nlc3MtNjAwOiAjMDBiODg3LCBjb2xvci1zdWNjZXNzLTcwMDogIzAwOTk3YSwgY29sb3Itc3VjY2Vzcy04MDA6ICMwMDdkNmMsIGNvbG9yLXN1Y2Nlc3MtOTAwOiAjMDA0YTQ1LCBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTEwMDogcmdiYSgwLCAyMTQsIDE0MywgMC4wOCksIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtMjAwOiByZ2JhKDAsIDIxNCwgMTQzLCAwLjE2KSwgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC0zMDA6IHJnYmEoMCwgMjE0LCAxNDMsIDAuMjQpLCBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTQwMDogcmdiYSgwLCAyMTQsIDE0MywgMC4zMiksIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtNTAwOiByZ2JhKDAsIDIxNCwgMTQzLCAwLjQpLCBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTYwMDogcmdiYSgwLCAyMTQsIDE0MywgMC40OCksIGNvbG9yLWluZm8tMTAwOiAjZjJmOGZmLCBjb2xvci1pbmZvLTIwMDogI2M3ZTJmZiwgY29sb3ItaW5mby0zMDA6ICM5NGNiZmYsIGNvbG9yLWluZm8tNDAwOiAjNDJhYWZmLCBjb2xvci1pbmZvLTUwMDogIzAwOTVmZiwgY29sb3ItaW5mby02MDA6ICMwMDZmZDYsIGNvbG9yLWluZm8tNzAwOiAjMDA1N2MyLCBjb2xvci1pbmZvLTgwMDogIzAwNDFhOCwgY29sb3ItaW5mby05MDA6ICMwMDI4ODUsIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtMTAwOiByZ2JhKDAsIDE0OSwgMjU1LCAwLjA4KSwgY29sb3ItaW5mby10cmFuc3BhcmVudC0yMDA6IHJnYmEoMCwgMTQ5LCAyNTUsIDAuMTYpLCBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTMwMDogcmdiYSgwLCAxNDksIDI1NSwgMC4yNCksIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtNDAwOiByZ2JhKDAsIDE0OSwgMjU1LCAwLjMyKSwgY29sb3ItaW5mby10cmFuc3BhcmVudC01MDA6IHJnYmEoMCwgMTQ5LCAyNTUsIDAuNCksIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtNjAwOiByZ2JhKDAsIDE0OSwgMjU1LCAwLjQ4KSwgY29sb3Itd2FybmluZy0xMDA6ICNmZmZkZjIsIGNvbG9yLXdhcm5pbmctMjAwOiAjZmZmMWMyLCBjb2xvci13YXJuaW5nLTMwMDogI2ZmZTU5ZSwgY29sb3Itd2FybmluZy00MDA6ICNmZmM5NGQsIGNvbG9yLXdhcm5pbmctNTAwOiAjZmZhYTAwLCBjb2xvci13YXJuaW5nLTYwMDogI2RiOGIwMCwgY29sb3Itd2FybmluZy03MDA6ICNiODZlMDAsIGNvbG9yLXdhcm5pbmctODAwOiAjOTQ1NDAwLCBjb2xvci13YXJuaW5nLTkwMDogIzcwM2MwMCwgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC0xMDA6IHJnYmEoMjU1LCAxNzAsIDAsIDAuMDgpLCBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTIwMDogcmdiYSgyNTUsIDE3MCwgMCwgMC4xNiksIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtMzAwOiByZ2JhKDI1NSwgMTcwLCAwLCAwLjI0KSwgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC00MDA6IHJnYmEoMjU1LCAxNzAsIDAsIDAuMzIpLCBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTUwMDogcmdiYSgyNTUsIDE3MCwgMCwgMC40KSwgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC02MDA6IHJnYmEoMjU1LCAxNzAsIDAsIDAuNDgpLCBjb2xvci1kYW5nZXItMTAwOiAjZmZmMmYyLCBjb2xvci1kYW5nZXItMjAwOiAjZmZkNmQ5LCBjb2xvci1kYW5nZXItMzAwOiAjZmZhOGI0LCBjb2xvci1kYW5nZXItNDAwOiAjZmY3MDhkLCBjb2xvci1kYW5nZXItNTAwOiAjZmYzZDcxLCBjb2xvci1kYW5nZXItNjAwOiAjZGIyYzY2LCBjb2xvci1kYW5nZXItNzAwOiAjYjgxZDViLCBjb2xvci1kYW5nZXItODAwOiAjOTQxMjRlLCBjb2xvci1kYW5nZXItOTAwOiAjNzAwOTQwLCBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtMTAwOiByZ2JhKDI1NSwgNjEsIDExMywgMC4wOCksIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC0yMDA6IHJnYmEoMjU1LCA2MSwgMTEzLCAwLjE2KSwgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTMwMDogcmdiYSgyNTUsIDYxLCAxMTMsIDAuMjQpLCBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtNDAwOiByZ2JhKDI1NSwgNjEsIDExMywgMC4zMiksIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC01MDA6IHJnYmEoMjU1LCA2MSwgMTEzLCAwLjQpLCBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtNjAwOiByZ2JhKDI1NSwgNjEsIDExMywgMC40OCksXG4vKiBCYXNpYyBjb2xvcnMgLSBmb3IgYmFja2dyb3VuZHMgYW5kIGJvcmRlcnMgYW5kIHRleHRzICovXG5cbmNvbG9yLWJhc2ljLTEwMCA6ICNmZmZmZmYsIGNvbG9yLWJhc2ljLTIwMDogI2Y3ZjlmYywgY29sb3ItYmFzaWMtMzAwOiAjZWRmMWY3LCBjb2xvci1iYXNpYy00MDA6ICNlNGU5ZjIsIGNvbG9yLWJhc2ljLTUwMDogI2M1Y2VlMCwgY29sb3ItYmFzaWMtNjAwOiAjOGY5YmIzLCBjb2xvci1iYXNpYy03MDA6ICMyZTNhNTksIGNvbG9yLWJhc2ljLTgwMDogIzIyMmI0NSwgY29sb3ItYmFzaWMtOTAwOiAjMTkyMDM4LCBjb2xvci1iYXNpYy0xMDAwOiAjMTUxYTMwLCBjb2xvci1iYXNpYy0xMTAwOiAjMTAxNDI2LCBjb2xvci1iYXNpYy0xMjAwOiAjMTQyZTQ3LCBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0xMDA6IHJnYmEoMTQzLCAxNTUsIDE3OSwgMC4wOCksIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMDogcmdiYSgxNDMsIDE1NSwgMTc5LCAwLjE2KSwgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwOiByZ2JhKDE0MywgMTU1LCAxNzksIDAuMjQpLCBjb2xvci1iYXNpYy10cmFuc3BhcmVudC00MDA6IHJnYmEoMTQzLCAxNTUsIDE3OSwgMC4zMiksIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTUwMDogcmdiYSgxNDMsIDE1NSwgMTc5LCAwLjQpLCBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDA6IHJnYmEoMTQzLCAxNTUsIDE3OSwgMC40OCksIGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtMTAwOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpLCBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTIwMDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE2KSwgY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC0zMDA6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCksIGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtNDAwOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzIpLCBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTUwMDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpLCBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTYwMDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ4KSxcbi8qIFN0YXR1cyBjb2xvcnMgc3RhdGVzIC0gZm9jdXMsIGhvdmVyLCBkZWZhdWx0LCBhY3RpdmUsIGRpc2FibGVkICAqL1xuXG5jb2xvci1iYXNpYy1mb2N1czogY29sb3ItYmFzaWMtNDAwLCBjb2xvci1iYXNpYy1ob3ZlcjogY29sb3ItYmFzaWMtMjAwLCBjb2xvci1iYXNpYy1kZWZhdWx0OiBjb2xvci1iYXNpYy0zMDAsIGNvbG9yLWJhc2ljLWFjdGl2ZTogY29sb3ItYmFzaWMtNDAwLCBjb2xvci1iYXNpYy1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLCBjb2xvci1iYXNpYy1mb2N1cy1ib3JkZXI6IGNvbG9yLWJhc2ljLTUwMCwgY29sb3ItYmFzaWMtaG92ZXItYm9yZGVyOiBjb2xvci1iYXNpYy1ob3ZlciwgY29sb3ItYmFzaWMtZGVmYXVsdC1ib3JkZXI6IGNvbG9yLWJhc2ljLWRlZmF1bHQsIGNvbG9yLWJhc2ljLWFjdGl2ZS1ib3JkZXI6IGNvbG9yLWJhc2ljLWFjdGl2ZSwgY29sb3ItYmFzaWMtZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1iYXNpYy1kaXNhYmxlZCwgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZm9jdXM6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCwgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtaG92ZXI6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCwgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGVmYXVsdDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMTAwLCBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1hY3RpdmU6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCwgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCwgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyOiBjb2xvci1iYXNpYy02MDAsIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcjogY29sb3ItYmFzaWMtNjAwLCBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcjogY29sb3ItYmFzaWMtNjAwLCBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyOiBjb2xvci1iYXNpYy02MDAsIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLCBjb2xvci1wcmltYXJ5LWZvY3VzOiBjb2xvci1wcmltYXJ5LTYwMCwgY29sb3ItcHJpbWFyeS1ob3ZlcjogY29sb3ItcHJpbWFyeS00MDAsIGNvbG9yLXByaW1hcnktZGVmYXVsdDogY29sb3ItcHJpbWFyeS01MDAsIGNvbG9yLXByaW1hcnktYWN0aXZlOiBjb2xvci1wcmltYXJ5LTYwMCwgY29sb3ItcHJpbWFyeS1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLCBjb2xvci1wcmltYXJ5LWZvY3VzLWJvcmRlcjogY29sb3ItcHJpbWFyeS03MDAsIGNvbG9yLXByaW1hcnktaG92ZXItYm9yZGVyOiBjb2xvci1wcmltYXJ5LWhvdmVyLCBjb2xvci1wcmltYXJ5LWRlZmF1bHQtYm9yZGVyOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsIGNvbG9yLXByaW1hcnktYWN0aXZlLWJvcmRlcjogY29sb3ItcHJpbWFyeS1hY3RpdmUsIGNvbG9yLXByaW1hcnktZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1wcmltYXJ5LWRpc2FibGVkLCBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWZvY3VzOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTMwMCwgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1ob3ZlcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0yMDAsIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGVmYXVsdDogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0xMDAsIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTMwMCwgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLCBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcjogY29sb3ItcHJpbWFyeS01MDAsIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyOiBjb2xvci1wcmltYXJ5LTUwMCwgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcjogY29sb3ItcHJpbWFyeS01MDAsIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcjogY29sb3ItcHJpbWFyeS01MDAsIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsIGNvbG9yLXN1Y2Nlc3MtZm9jdXM6IGNvbG9yLXN1Y2Nlc3MtNjAwLCBjb2xvci1zdWNjZXNzLWhvdmVyOiBjb2xvci1zdWNjZXNzLTQwMCwgY29sb3Itc3VjY2Vzcy1kZWZhdWx0OiBjb2xvci1zdWNjZXNzLTUwMCwgY29sb3Itc3VjY2Vzcy1hY3RpdmU6IGNvbG9yLXN1Y2Nlc3MtNjAwLCBjb2xvci1zdWNjZXNzLWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsIGNvbG9yLXN1Y2Nlc3MtZm9jdXMtYm9yZGVyOiBjb2xvci1zdWNjZXNzLTcwMCwgY29sb3Itc3VjY2Vzcy1ob3Zlci1ib3JkZXI6IGNvbG9yLXN1Y2Nlc3MtaG92ZXIsIGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdC1ib3JkZXI6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCwgY29sb3Itc3VjY2Vzcy1hY3RpdmUtYm9yZGVyOiBjb2xvci1zdWNjZXNzLWFjdGl2ZSwgY29sb3Itc3VjY2Vzcy1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLXN1Y2Nlc3MtZGlzYWJsZWQsIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZm9jdXM6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtMzAwLCBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcjogY29sb3Itc3VjY2Vzcy01MDAsIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtaG92ZXI6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtMjAwLCBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcjogY29sb3Itc3VjY2Vzcy01MDAsIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZGVmYXVsdDogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC0xMDAsIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXI6IGNvbG9yLXN1Y2Nlc3MtNTAwLCBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWFjdGl2ZTogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC0zMDAsIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcjogY29sb3Itc3VjY2Vzcy01MDAsIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCwgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCwgY29sb3ItaW5mby1mb2N1czogY29sb3ItaW5mby02MDAsIGNvbG9yLWluZm8taG92ZXI6IGNvbG9yLWluZm8tNDAwLCBjb2xvci1pbmZvLWRlZmF1bHQ6IGNvbG9yLWluZm8tNTAwLCBjb2xvci1pbmZvLWFjdGl2ZTogY29sb3ItaW5mby02MDAsIGNvbG9yLWluZm8tZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCwgY29sb3ItaW5mby1mb2N1cy1ib3JkZXI6IGNvbG9yLWluZm8tNzAwLCBjb2xvci1pbmZvLWhvdmVyLWJvcmRlcjogY29sb3ItaW5mby1ob3ZlciwgY29sb3ItaW5mby1kZWZhdWx0LWJvcmRlcjogY29sb3ItaW5mby1kZWZhdWx0LCBjb2xvci1pbmZvLWFjdGl2ZS1ib3JkZXI6IGNvbG9yLWluZm8tYWN0aXZlLCBjb2xvci1pbmZvLWRpc2FibGVkLWJvcmRlcjogY29sb3ItaW5mby1kaXNhYmxlZCwgY29sb3ItaW5mby10cmFuc3BhcmVudC1mb2N1czogY29sb3ItaW5mby10cmFuc3BhcmVudC0zMDAsIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtaG92ZXI6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtMjAwLCBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRlZmF1bHQ6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtMTAwLCBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWFjdGl2ZTogY29sb3ItaW5mby10cmFuc3BhcmVudC0zMDAsIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCwgY29sb3ItaW5mby10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXI6IGNvbG9yLWluZm8tNTAwLCBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcjogY29sb3ItaW5mby01MDAsIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXI6IGNvbG9yLWluZm8tNTAwLCBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXI6IGNvbG9yLWluZm8tNTAwLCBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLCBjb2xvci13YXJuaW5nLWZvY3VzOiBjb2xvci13YXJuaW5nLTYwMCwgY29sb3Itd2FybmluZy1ob3ZlcjogY29sb3Itd2FybmluZy00MDAsIGNvbG9yLXdhcm5pbmctZGVmYXVsdDogY29sb3Itd2FybmluZy01MDAsIGNvbG9yLXdhcm5pbmctYWN0aXZlOiBjb2xvci13YXJuaW5nLTYwMCwgY29sb3Itd2FybmluZy1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLCBjb2xvci13YXJuaW5nLWZvY3VzLWJvcmRlcjogY29sb3Itd2FybmluZy03MDAsIGNvbG9yLXdhcm5pbmctaG92ZXItYm9yZGVyOiBjb2xvci13YXJuaW5nLWhvdmVyLCBjb2xvci13YXJuaW5nLWRlZmF1bHQtYm9yZGVyOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsIGNvbG9yLXdhcm5pbmctYWN0aXZlLWJvcmRlcjogY29sb3Itd2FybmluZy1hY3RpdmUsIGNvbG9yLXdhcm5pbmctZGlzYWJsZWQtYm9yZGVyOiBjb2xvci13YXJuaW5nLWRpc2FibGVkLCBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWZvY3VzOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTMwMCwgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1ob3ZlcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC0yMDAsIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZGVmYXVsdDogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC0xMDAsIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtYWN0aXZlOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTMwMCwgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLCBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcjogY29sb3Itd2FybmluZy01MDAsIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyOiBjb2xvci13YXJuaW5nLTUwMCwgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcjogY29sb3Itd2FybmluZy01MDAsIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcjogY29sb3Itd2FybmluZy01MDAsIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsIGNvbG9yLWRhbmdlci1mb2N1czogY29sb3ItZGFuZ2VyLTYwMCwgY29sb3ItZGFuZ2VyLWhvdmVyOiBjb2xvci1kYW5nZXItNDAwLCBjb2xvci1kYW5nZXItZGVmYXVsdDogY29sb3ItZGFuZ2VyLTUwMCwgY29sb3ItZGFuZ2VyLWFjdGl2ZTogY29sb3ItZGFuZ2VyLTYwMCwgY29sb3ItZGFuZ2VyLWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsIGNvbG9yLWRhbmdlci1mb2N1cy1ib3JkZXI6IGNvbG9yLWRhbmdlci03MDAsIGNvbG9yLWRhbmdlci1ob3Zlci1ib3JkZXI6IGNvbG9yLWRhbmdlci1ob3ZlciwgY29sb3ItZGFuZ2VyLWRlZmF1bHQtYm9yZGVyOiBjb2xvci1kYW5nZXItZGVmYXVsdCwgY29sb3ItZGFuZ2VyLWFjdGl2ZS1ib3JkZXI6IGNvbG9yLWRhbmdlci1hY3RpdmUsIGNvbG9yLWRhbmdlci1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLWRhbmdlci1kaXNhYmxlZCwgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWZvY3VzOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtMzAwLCBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtaG92ZXI6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC0yMDAsIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1kZWZhdWx0OiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtMTAwLCBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtYWN0aXZlOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtMzAwLCBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCwgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcjogY29sb3ItZGFuZ2VyLTUwMCwgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcjogY29sb3ItZGFuZ2VyLTUwMCwgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyOiBjb2xvci1kYW5nZXItNTAwLCBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcjogY29sb3ItZGFuZ2VyLTUwMCwgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLCBjb2xvci1jb250cm9sLWZvY3VzOiBjb2xvci1iYXNpYy0zMDAsIGNvbG9yLWNvbnRyb2wtaG92ZXI6IGNvbG9yLWJhc2ljLTIwMCwgY29sb3ItY29udHJvbC1kZWZhdWx0OiBjb2xvci1iYXNpYy0xMDAsIGNvbG9yLWNvbnRyb2wtYWN0aXZlOiBjb2xvci1iYXNpYy0zMDAsIGNvbG9yLWNvbnRyb2wtZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCwgY29sb3ItY29udHJvbC1mb2N1cy1ib3JkZXI6IGNvbG9yLWJhc2ljLTUwMCwgY29sb3ItY29udHJvbC1ob3Zlci1ib3JkZXI6IGNvbG9yLWNvbnRyb2wtaG92ZXIsIGNvbG9yLWNvbnRyb2wtZGVmYXVsdC1ib3JkZXI6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCwgY29sb3ItY29udHJvbC1hY3RpdmUtYm9yZGVyOiBjb2xvci1jb250cm9sLWFjdGl2ZSwgY29sb3ItY29udHJvbC1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLWNvbnRyb2wtZGlzYWJsZWQsIGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZm9jdXM6IGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtMzAwLCBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyOiBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTIwMCwgY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kZWZhdWx0OiBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTEwMCwgY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1hY3RpdmU6IGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtMzAwLCBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsIGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyOiBjb2xvci1iYXNpYy0xMDAsIGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyOiBjb2xvci1iYXNpYy0xMDAsIGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXI6IGNvbG9yLWJhc2ljLTEwMCwgY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyOiBjb2xvci1iYXNpYy0xMDAsIGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG4vKiBCYWNrZ3JvdW5kcyBhbmQgYm9yZGVycyAtIGJhc2ljLCBhbHRlcm5hdGl2ZSBhbmQgcHJpbWFyeSAgKi9cblxuYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xOiBjb2xvci1iYXNpYy0xMDAsIGJhY2tncm91bmQtYmFzaWMtY29sb3ItMjogY29sb3ItYmFzaWMtMjAwLCBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTM6IGNvbG9yLWJhc2ljLTMwMCwgYmFja2dyb3VuZC1iYXNpYy1jb2xvci00OiBjb2xvci1iYXNpYy00MDAsIGJvcmRlci1iYXNpYy1jb2xvci0xOiBjb2xvci1iYXNpYy0xMjAwLCBib3JkZXItYmFzaWMtY29sb3ItMjogY29sb3ItYmFzaWMtMjAwLCBib3JkZXItYmFzaWMtY29sb3ItMzogY29sb3ItYmFzaWMtMzAwLCBib3JkZXItYmFzaWMtY29sb3ItNDogY29sb3ItYmFzaWMtNDAwLCBib3JkZXItYmFzaWMtY29sb3ItNTogY29sb3ItYmFzaWMtNTAwLCBiYWNrZ3JvdW5kLWFsdGVybmF0aXZlLWNvbG9yLTE6IGNvbG9yLWJhc2ljLTgwMCwgYmFja2dyb3VuZC1hbHRlcm5hdGl2ZS1jb2xvci0yOiBjb2xvci1iYXNpYy05MDAsIGJhY2tncm91bmQtYWx0ZXJuYXRpdmUtY29sb3ItMzogY29sb3ItYmFzaWMtMTAwMCwgYmFja2dyb3VuZC1hbHRlcm5hdGl2ZS1jb2xvci00OiBjb2xvci1iYXNpYy0xMTAwLCBib3JkZXItYWx0ZXJuYXRpdmUtY29sb3ItMTogY29sb3ItYmFzaWMtODAwLCBib3JkZXItYWx0ZXJuYXRpdmUtY29sb3ItMjogY29sb3ItYmFzaWMtOTAwLCBib3JkZXItYWx0ZXJuYXRpdmUtY29sb3ItMzogY29sb3ItYmFzaWMtMTAwMCwgYm9yZGVyLWFsdGVybmF0aXZlLWNvbG9yLTQ6IGNvbG9yLWJhc2ljLTExMDAsIGJvcmRlci1hbHRlcm5hdGl2ZS1jb2xvci01OiBjb2xvci1iYXNpYy0xMTAwLCBiYWNrZ3JvdW5kLXByaW1hcnktY29sb3ItMTogY29sb3ItcHJpbWFyeS01MDAsIGJhY2tncm91bmQtcHJpbWFyeS1jb2xvci0yOiBjb2xvci1wcmltYXJ5LTYwMCwgYmFja2dyb3VuZC1wcmltYXJ5LWNvbG9yLTM6IGNvbG9yLXByaW1hcnktNzAwLCBiYWNrZ3JvdW5kLXByaW1hcnktY29sb3ItNDogY29sb3ItcHJpbWFyeS04MDAsIGJvcmRlci1wcmltYXJ5LWNvbG9yLTE6IGNvbG9yLWJhc2ljLTUwMCwgYm9yZGVyLXByaW1hcnktY29sb3ItMjogY29sb3ItYmFzaWMtNjAwLCBib3JkZXItcHJpbWFyeS1jb2xvci0zOiBjb2xvci1iYXNpYy03MDAsIGJvcmRlci1wcmltYXJ5LWNvbG9yLTQ6IGNvbG9yLWJhc2ljLTgwMCwgYm9yZGVyLXByaW1hcnktY29sb3ItNTogY29sb3ItYmFzaWMtOTAwLFxuLyogVGV4dCBjb2xvcnMgLSBnZW5lcmFsIGFuZCBzdGF0dXMgKi9cblxudGV4dC1iYXNpYy1jb2xvcjogY29sb3ItYmFzaWMtODAwLCB0ZXh0LWFsdGVybmF0ZS1jb2xvcjogY29sb3ItYmFzaWMtMTAwLCB0ZXh0LWNvbnRyb2wtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCwgdGV4dC1kaXNhYmxlZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLCB0ZXh0LWhpbnQtY29sb3I6IGNvbG9yLWJhc2ljLTYwMCwgdGV4dC1wcmltYXJ5LWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsIHRleHQtcHJpbWFyeS1mb2N1cy1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cywgdGV4dC1wcmltYXJ5LWhvdmVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLCB0ZXh0LXByaW1hcnktYWN0aXZlLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZSwgdGV4dC1wcmltYXJ5LWRpc2FibGVkLWNvbG9yOiBjb2xvci1wcmltYXJ5LTQwMCwgdGV4dC1zdWNjZXNzLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsIHRleHQtc3VjY2Vzcy1mb2N1cy1jb2xvcjogY29sb3Itc3VjY2Vzcy1mb2N1cywgdGV4dC1zdWNjZXNzLWhvdmVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLCB0ZXh0LXN1Y2Nlc3MtYWN0aXZlLWNvbG9yOiBjb2xvci1zdWNjZXNzLWFjdGl2ZSwgdGV4dC1zdWNjZXNzLWRpc2FibGVkLWNvbG9yOiBjb2xvci1zdWNjZXNzLTQwMCwgdGV4dC1pbmZvLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsIHRleHQtaW5mby1mb2N1cy1jb2xvcjogY29sb3ItaW5mby1mb2N1cywgdGV4dC1pbmZvLWhvdmVyLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLCB0ZXh0LWluZm8tYWN0aXZlLWNvbG9yOiBjb2xvci1pbmZvLWFjdGl2ZSwgdGV4dC1pbmZvLWRpc2FibGVkLWNvbG9yOiBjb2xvci1pbmZvLTQwMCwgdGV4dC13YXJuaW5nLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsIHRleHQtd2FybmluZy1mb2N1cy1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cywgdGV4dC13YXJuaW5nLWhvdmVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLCB0ZXh0LXdhcm5pbmctYWN0aXZlLWNvbG9yOiBjb2xvci13YXJuaW5nLWFjdGl2ZSwgdGV4dC13YXJuaW5nLWRpc2FibGVkLWNvbG9yOiBjb2xvci13YXJuaW5nLTQwMCwgdGV4dC1kYW5nZXItY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LCB0ZXh0LWRhbmdlci1mb2N1cy1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLCB0ZXh0LWRhbmdlci1ob3Zlci1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLCB0ZXh0LWRhbmdlci1hY3RpdmUtY29sb3I6IGNvbG9yLWRhbmdlci1hY3RpdmUsIHRleHQtZGFuZ2VyLWRpc2FibGVkLWNvbG9yOiBjb2xvci1kYW5nZXItNDAwLFxuLyogRm9udHMgYW5kIHRleHQgc3R5bGVzIC0gaGVhZGluZ3MsIHN1YnRpdGxlcywgcGFyYWdyYXBocywgY2FwdGlvbnMsIGJ1dHRvbiAqL1xuXG5mb250LWZhbWlseS1wcmltYXJ5OiB1bnF1b3RlKCdPcGVuIFNhbnMsIHNhbnMtc2VyaWYnKSwgZm9udC1mYW1pbHktc2Vjb25kYXJ5OiBmb250LWZhbWlseS1wcmltYXJ5LCB0ZXh0LWhlYWRpbmctMS1mb250LWZhbWlseTogZm9udC1mYW1pbHktc2Vjb25kYXJ5LCB0ZXh0LWhlYWRpbmctMS1mb250LXNpemU6IDIuMjVyZW0sIHRleHQtaGVhZGluZy0xLWZvbnQtd2VpZ2h0OiA3MDAsIHRleHQtaGVhZGluZy0xLWxpbmUtaGVpZ2h0OiAzcmVtLCB0ZXh0LWhlYWRpbmctMi1mb250LWZhbWlseTogZm9udC1mYW1pbHktc2Vjb25kYXJ5LCB0ZXh0LWhlYWRpbmctMi1mb250LXNpemU6IDJyZW0sIHRleHQtaGVhZGluZy0yLWZvbnQtd2VpZ2h0OiA3MDAsIHRleHQtaGVhZGluZy0yLWxpbmUtaGVpZ2h0OiAyLjVyZW0sIHRleHQtaGVhZGluZy0zLWZvbnQtZmFtaWx5OiBmb250LWZhbWlseS1zZWNvbmRhcnksIHRleHQtaGVhZGluZy0zLWZvbnQtc2l6ZTogMS44NzVyZW0sIHRleHQtaGVhZGluZy0zLWZvbnQtd2VpZ2h0OiA3MDAsIHRleHQtaGVhZGluZy0zLWxpbmUtaGVpZ2h0OiAyLjVyZW0sIHRleHQtaGVhZGluZy00LWZvbnQtZmFtaWx5OiBmb250LWZhbWlseS1zZWNvbmRhcnksIHRleHQtaGVhZGluZy00LWZvbnQtc2l6ZTogMS42MjVyZW0sIHRleHQtaGVhZGluZy00LWZvbnQtd2VpZ2h0OiA3MDAsIHRleHQtaGVhZGluZy00LWxpbmUtaGVpZ2h0OiAycmVtLCB0ZXh0LWhlYWRpbmctNS1mb250LWZhbWlseTogZm9udC1mYW1pbHktc2Vjb25kYXJ5LCB0ZXh0LWhlYWRpbmctNS1mb250LXNpemU6IDEuMzc1cmVtLCB0ZXh0LWhlYWRpbmctNS1mb250LXdlaWdodDogNzAwLCB0ZXh0LWhlYWRpbmctNS1saW5lLWhlaWdodDogMnJlbSwgdGV4dC1oZWFkaW5nLTYtZm9udC1mYW1pbHk6IGZvbnQtZmFtaWx5LXNlY29uZGFyeSwgdGV4dC1oZWFkaW5nLTYtZm9udC1zaXplOiAxLjEyNXJlbSwgdGV4dC1oZWFkaW5nLTYtZm9udC13ZWlnaHQ6IDcwMCwgdGV4dC1oZWFkaW5nLTYtbGluZS1oZWlnaHQ6IDEuNXJlbSwgdGV4dC1zdWJ0aXRsZS1mb250LWZhbWlseTogZm9udC1mYW1pbHktcHJpbWFyeSwgdGV4dC1zdWJ0aXRsZS1mb250LXNpemU6IDAuOTM3NXJlbSwgdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodDogNjAwLCB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0OiAxLjVyZW0sIHRleHQtc3VidGl0bGUtMi1mb250LWZhbWlseTogZm9udC1mYW1pbHktcHJpbWFyeSwgdGV4dC1zdWJ0aXRsZS0yLWZvbnQtc2l6ZTogMC44MTI1cmVtLCB0ZXh0LXN1YnRpdGxlLTItZm9udC13ZWlnaHQ6IDYwMCwgdGV4dC1zdWJ0aXRsZS0yLWxpbmUtaGVpZ2h0OiAxLjVyZW0sIHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5OiBmb250LWZhbWlseS1wcmltYXJ5LCB0ZXh0LXBhcmFncmFwaC1mb250LXNpemU6IDAuOTM3NXJlbSwgdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQ6IDQwMCwgdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQ6IDEuMjVyZW0sIHRleHQtcGFyYWdyYXBoLTItZm9udC1mYW1pbHk6IGZvbnQtZmFtaWx5LXByaW1hcnksIHRleHQtcGFyYWdyYXBoLTItZm9udC1zaXplOiAwLjgxMjVyZW0sIHRleHQtcGFyYWdyYXBoLTItZm9udC13ZWlnaHQ6IDQwMCwgdGV4dC1wYXJhZ3JhcGgtMi1saW5lLWhlaWdodDogMS4xMjVyZW0sIHRleHQtbGFiZWwtZm9udC1mYW1pbHk6IGZvbnQtZmFtaWx5LXByaW1hcnksIHRleHQtbGFiZWwtZm9udC1zaXplOiAwLjc1cmVtLCB0ZXh0LWxhYmVsLWZvbnQtd2VpZ2h0OiA3MDAsIHRleHQtbGFiZWwtbGluZS1oZWlnaHQ6IDFyZW0sIHRleHQtY2FwdGlvbi1mb250LWZhbWlseTogZm9udC1mYW1pbHktcHJpbWFyeSwgdGV4dC1jYXB0aW9uLWZvbnQtc2l6ZTogMC43NXJlbSwgdGV4dC1jYXB0aW9uLWZvbnQtd2VpZ2h0OiA0MDAsIHRleHQtY2FwdGlvbi1saW5lLWhlaWdodDogMXJlbSwgdGV4dC1jYXB0aW9uLTItZm9udC1mYW1pbHk6IGZvbnQtZmFtaWx5LXByaW1hcnksIHRleHQtY2FwdGlvbi0yLWZvbnQtc2l6ZTogMC43NXJlbSwgdGV4dC1jYXB0aW9uLTItZm9udC13ZWlnaHQ6IDYwMCwgdGV4dC1jYXB0aW9uLTItbGluZS1oZWlnaHQ6IDFyZW0sIHRleHQtYnV0dG9uLWZvbnQtZmFtaWx5OiBmb250LWZhbWlseS1wcmltYXJ5LCB0ZXh0LWJ1dHRvbi1mb250LXdlaWdodDogNzAwLCB0ZXh0LWJ1dHRvbi10aW55LWZvbnQtc2l6ZTogMC42MjVyZW0sIHRleHQtYnV0dG9uLXRpbnktbGluZS1oZWlnaHQ6IDAuNzVyZW0sIHRleHQtYnV0dG9uLXNtYWxsLWZvbnQtc2l6ZTogMC43NXJlbSwgdGV4dC1idXR0b24tc21hbGwtbGluZS1oZWlnaHQ6IDFyZW0sIHRleHQtYnV0dG9uLW1lZGl1bS1mb250LXNpemU6IDAuODc1cmVtLCB0ZXh0LWJ1dHRvbi1tZWRpdW0tbGluZS1oZWlnaHQ6IDFyZW0sIHRleHQtYnV0dG9uLWxhcmdlLWZvbnQtc2l6ZTogMXJlbSwgdGV4dC1idXR0b24tbGFyZ2UtbGluZS1oZWlnaHQ6IDEuMjVyZW0sIHRleHQtYnV0dG9uLWdpYW50LWZvbnQtc2l6ZTogMS4xMjVyZW0sIHRleHQtYnV0dG9uLWdpYW50LWxpbmUtaGVpZ2h0OiAxLjVyZW0sXG4vKiBTdXBwb3J0aW5nIHZhcmlhYmxlcyAtIGJvcmRlciByYWRpdXMsIG91dGxpbmUsIHNoYWRvdywgZGl2aWRlciAqL1xuXG5ib3JkZXItcmFkaXVzOiAwLjI1cmVtLCBvdXRsaW5lLXdpZHRoOiAwLjM3NXJlbSwgb3V0bGluZS1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLCBzY3JvbGxiYXItY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItNCwgc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMiwgc2Nyb2xsYmFyLXdpZHRoOiAwLjMxMjVyZW0sIHNoYWRvdzogMCAwLjVyZW0gMXJlbSAwIHJnYmEoNDQsIDUxLCA3MywgMC4xKSwgZGl2aWRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTMsIGRpdmlkZXItc3R5bGU6IHNvbGlkLCBkaXZpZGVyLXdpZHRoOiAxcHgpO1xuJG5iLXRoZW1lczogbmItcmVnaXN0ZXItdGhlbWUoJHRoZW1lLCBkZWZhdWx0KTsiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBpbXBvcnQgJy4uL2NvcmUvZnVuY3Rpb25zJztcbkBpbXBvcnQgJy4uL2NvcmUvbWl4aW5zJztcbkBpbXBvcnQgJ2RlZmF1bHQnO1xuJHRoZW1lOiAoIGJhY2tncm91bmQtYmFzaWMtY29sb3ItMTogY29sb3ItYmFzaWMtMTIwMCwgYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yOiBjb2xvci1iYXNpYy05MDAsIGJhY2tncm91bmQtYmFzaWMtY29sb3ItMzogY29sb3ItYmFzaWMtMTAwMCwgYmFja2dyb3VuZC1iYXNpYy1jb2xvci00OiBjb2xvci1iYXNpYy0xMTAwLCBib3JkZXItYmFzaWMtY29sb3ItMTogY29sb3ItYmFzaWMtODAwLCBib3JkZXItYmFzaWMtY29sb3ItMjogY29sb3ItYmFzaWMtOTAwLCBib3JkZXItYmFzaWMtY29sb3ItMzogY29sb3ItYmFzaWMtMTAwMCwgYm9yZGVyLWJhc2ljLWNvbG9yLTQ6IGNvbG9yLWJhc2ljLTExMDAsIGJvcmRlci1iYXNpYy1jb2xvci01OiBjb2xvci1iYXNpYy0xMTAwLCBiYWNrZ3JvdW5kLWFsdGVybmF0aXZlLWNvbG9yLTE6IGNvbG9yLWJhc2ljLTEwMCwgYmFja2dyb3VuZC1hbHRlcm5hdGl2ZS1jb2xvci0yOiBjb2xvci1iYXNpYy0yMDAsIGJhY2tncm91bmQtYWx0ZXJuYXRpdmUtY29sb3ItMzogY29sb3ItYmFzaWMtMzAwLCBiYWNrZ3JvdW5kLWFsdGVybmF0aXZlLWNvbG9yLTQ6IGNvbG9yLWJhc2ljLTQwMCwgYm9yZGVyLWFsdGVybmF0aXZlLWNvbG9yLTE6IGNvbG9yLWJhc2ljLTEwMCwgYm9yZGVyLWFsdGVybmF0aXZlLWNvbG9yLTI6IGNvbG9yLWJhc2ljLTIwMCwgYm9yZGVyLWFsdGVybmF0aXZlLWNvbG9yLTM6IGNvbG9yLWJhc2ljLTMwMCwgYm9yZGVyLWFsdGVybmF0aXZlLWNvbG9yLTQ6IGNvbG9yLWJhc2ljLTQwMCwgYm9yZGVyLWFsdGVybmF0aXZlLWNvbG9yLTU6IGNvbG9yLWJhc2ljLTUwMCwgdGV4dC1iYXNpYy1jb2xvcjogY29sb3ItYmFzaWMtMTAwLCB0ZXh0LWFsdGVybmF0ZS1jb2xvcjogY29sb3ItYmFzaWMtOTAwLCB0ZXh0LWRpc2FibGVkLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsIHNoYWRvdzogMCAwLjVyZW0gMXJlbSAwICMxYTFmMzMsIG91dGxpbmUtY29sb3I6IGNvbG9yLWJhc2ljLTcwMCwgKTtcbi8vIHJlZ2lzdGVyIHRoZSB0aGVtZVxuJG5iLXRoZW1lczogbmItcmVnaXN0ZXItdGhlbWUoJHRoZW1lLCBkYXJrLCBkZWZhdWx0KTsiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBpbXBvcnQgJy4uL2NvcmUvZnVuY3Rpb25zJztcbkBpbXBvcnQgJy4uL2NvcmUvbWl4aW5zJztcbkBpbXBvcnQgJ2RhcmsnO1xuXG4kdGhlbWU6IChcblxuICBjb2xvci1wcmltYXJ5LTEwMDogI2ZhZjdmZixcbiAgY29sb3ItcHJpbWFyeS0yMDA6ICNlY2UzZmYsXG4gIGNvbG9yLXByaW1hcnktMzAwOiAjZDViZmZmLFxuICBjb2xvci1wcmltYXJ5LTQwMDogI2IxOGFmZixcbiAgY29sb3ItcHJpbWFyeS01MDA6ICNhMTZlZmYsXG4gIGNvbG9yLXByaW1hcnktNjAwOiAjN2I1MWRiLFxuICBjb2xvci1wcmltYXJ5LTcwMDogIzVhMzdiOCxcbiAgY29sb3ItcHJpbWFyeS04MDA6ICMzZTI0OTQsXG4gIGNvbG9yLXByaW1hcnktOTAwOiAjMjkxNTdhLFxuXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtMTAwOiByZ2JhKDE2MSwgMTEwLCAyNTUsIDAuMDgpLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTIwMDogcmdiYSgxNjEsIDExMCwgMjU1LCAwLjE2KSxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0zMDA6IHJnYmEoMTYxLCAxMTAsIDI1NSwgMC4yNCksXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtNDAwOiByZ2JhKDE2MSwgMTEwLCAyNTUsIDAuMzIpLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTUwMDogcmdiYSgxNjEsIDExMCwgMjU1LCAwLjQpLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTYwMDogcmdiYSgxNjEsIDExMCwgMjU1LCAwLjQ4KSxcblxuICBjb2xvci1iYXNpYy0xMDA6ICNmZmZmZmYsXG4gIGNvbG9yLWJhc2ljLTIwMDogI2Y3ZjdmYyxcbiAgY29sb3ItYmFzaWMtMzAwOiAjZjBmMGZhLFxuICBjb2xvci1iYXNpYy00MDA6ICNlMWUxZjIsXG4gIGNvbG9yLWJhc2ljLTUwMDogI2NlY2VlYixcbiAgY29sb3ItYmFzaWMtNjAwOiAjYjRiNGRiLFxuICBjb2xvci1iYXNpYy03MDA6ICM2YTZhOTQsXG4gIGNvbG9yLWJhc2ljLTgwMDogIzMyMzI1OSxcbiAgY29sb3ItYmFzaWMtOTAwOiAjMjUyNTQ3LFxuICBjb2xvci1iYXNpYy0xMDAwOiAjMWIxYjM4LFxuICBjb2xvci1iYXNpYy0xMTAwOiAjMTMxMzJiLFxuXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTEwMDogcmdiYSgxODAsIDE4MCwgMjE5LCAwLjA4KSxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwOiByZ2JhKDE4MCwgMTgwLCAyMTksIDAuMTYpLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDA6IHJnYmEoMTgwLCAxODAsIDIxOSwgMC4yNCksXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTQwMDogcmdiYSgxODAsIDE4MCwgMjE5LCAwLjMyKSxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNTAwOiByZ2JhKDE4MCwgMTgwLCAyMTksIDAuNCksXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMDogcmdiYSgxODAsIDE4MCwgMjE5LCAwLjQ4KSxcbik7XG5cbiRuYi10aGVtZXM6IG5iLXJlZ2lzdGVyLXRoZW1lKCR0aGVtZSwgY29zbWljLCBkYXJrKTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQGltcG9ydCAnLi4vY29yZS9mdW5jdGlvbnMnO1xuQGltcG9ydCAnLi4vY29yZS9taXhpbnMnO1xuQGltcG9ydCAnZGVmYXVsdCc7XG5cbiR0aGVtZTogKFxuICBib3JkZXItcmFkaXVzOiAwLjE3cmVtLFxuICBzaGFkb3c6IG5vbmUsXG5cbiAgYnV0dG9uLWhlcm8tZ2xvdy1zaXplOiAwIDAgMjBweCAwLFxuXG4gIGNhcmQtYm9yZGVyLXdpZHRoOiAxcHgsXG4gIGNhcmQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcblxuICBjb250ZXh0LW1lbnUtYm9yZGVyLXdpZHRoOiAxcHgsXG4gIGNvbnRleHQtbWVudS1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuXG4gIHRhYnMtc2VsZWN0ZWQ6IGNvbG9yLXByaW1hcnktNTAwLFxuICB0YWJzLXNlbGVjdGVkLXNlY29uZC1jb2xvcjogY29sb3ItcHJpbWFyeS01MDAsXG5cbiAgcG9wb3Zlci1ib3JkZXItd2lkdGg6IDFweCxcbiAgcG9wb3Zlci1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuXG4gIHRhYnNldC1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICByb3V0ZS10YWJzZXQtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgdXNlci1yZWN0YW5nbGUtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgY2hlY2tib3gtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgbW9kYWwtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcblxuICB0YWJzZXQtc2hhZG93OiBub25lLFxuICByb3V0ZS10YWJzZXQtc2hhZG93OiBub25lLFxuICBidXR0b24taGVyby1zaGFkb3c6IG5vbmUsXG4gIGFsZXJ0LXNoYWRvdzogbm9uZSxcbiAgYWNjb3JkaW9uLXNoYWRvdzogbm9uZSxcbik7XG5cbiRuYi10aGVtZXM6IG5iLXJlZ2lzdGVyLXRoZW1lKCR0aGVtZSwgY29ycG9yYXRlLCBkZWZhdWx0KTtcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxValidationMessageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-validation-message',
                styleUrls: ['./validation-message.component.scss'],
                template: `
      <div class="warning">
          <span class="caption status-danger"
             *ngIf="showMinLength"> Min {{ label }} length is {{ minLength }} symbols </span>
          <span class="caption status-danger"
             *ngIf="showMaxLength"> Max {{ label }} length is {{ maxLength }} symbols </span>
          <span class="caption status-danger" *ngIf="showPattern"> Incorrect {{ label }} </span>
          <span class="caption status-danger" *ngIf="showRequired"> {{ label }} is required</span>
          <span class="caption status-danger" *ngIf="showMin">Min value of {{ label }} is {{ min }}</span>
          <span class="caption status-danger" *ngIf="showMax">Max value of {{ label }} is {{ max }}</span>
      </div>
  `,
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => NgxValidationMessageComponent),
                        multi: true,
                    },
                ],
            }]
    }], null, { label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showRequired: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showMin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showMax: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], minLength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showMinLength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maxLength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showMaxLength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showPattern: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/@core/backend/common/api/apiGet.services.ts":
/*!*************************************************************!*\
  !*** ./src/app/@core/backend/common/api/apiGet.services.ts ***!
  \*************************************************************/
/*! exports provided: ApiGetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiGetService", function() { return ApiGetService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class ApiGetService {
    constructor(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            'responseType': 'blob',
        };
    }
    GetJson(url) {
        return this.http.get(url);
    }
    PostJson(url, propiedadesActualizar) {
        return this.http.post(url, propiedadesActualizar, this.httpOptions);
    }
    Suma() {
        console.log(5 + 5);
    }
}
ApiGetService.ɵfac = function ApiGetService_Factory(t) { return new (t || ApiGetService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ApiGetService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiGetService, factory: ApiGetService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiGetService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@core/backend/common/api/countries.api.ts":
/*!***********************************************************!*\
  !*** ./src/app/@core/backend/common/api/countries.api.ts ***!
  \***********************************************************/
/*! exports provided: CountriesApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountriesApi", function() { return CountriesApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */




class CountriesApi {
    constructor(api) {
        this.api = api;
        this.apiController = 'countries';
    }
    list() {
        return this.api.get(this.apiController);
    }
}
CountriesApi.ɵfac = function CountriesApi_Factory(t) { return new (t || CountriesApi)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"])); };
CountriesApi.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CountriesApi, factory: CountriesApi.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountriesApi, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@core/backend/common/api/http.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/@core/backend/common/api/http.service.ts ***!
  \**********************************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/__ivy_ngcc__/fesm2015/ng2-smart-table.js");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */






class HttpService {
    constructor(http) {
        this.http = http;
    }
    get apiUrlMatbox() {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrlMat;
    }
    get apiUrlMatSignalR() {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrlMatSignalR;
    }
    get apiUrlNode() {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrlNode;
    }
    get apiUrlNode1() {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrlNode1;
    }
    get apiTeam() {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiTeam;
    }
    get apiUrl() {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    getServerDataSource(uri) {
        return new ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__["ServerDataSource"](this.http, {
            endPoint: uri,
            totalKey: 'totalCount',
            dataKey: 'items',
            pagerPageKey: 'pageNumber',
            pagerLimitKey: 'pageSize',
            filterFieldKey: 'filterBy#field#',
            sortFieldKey: 'sortBy',
            sortDirKey: 'orderBy',
        });
    }
    get(endpoint, options) {
        return this.http.get(`${this.apiUrl}/${endpoint}`, options);
    }
    getById(endpoint, options) {
        return this.http.get(`${this.apiTeam}/${endpoint}`, options);
    }
    post(endpoint, data, options) {
        return this.http.post(`${this.apiUrl}/${endpoint}`, data, options);
    }
    postUserRol(endpoint, data, options) {
        return this.http.post(`${this.apiUrl}/${endpoint}`, data, options);
    }
    put(endpoint, data, options) {
        return this.http.put(`${this.apiUrl}/${endpoint}`, data, options);
    }
    delete(endpoint, options) {
        return this.http.delete(`${this.apiUrl}/${endpoint}`, options);
    }
}
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@core/backend/common/api/settings.api.ts":
/*!**********************************************************!*\
  !*** ./src/app/@core/backend/common/api/settings.api.ts ***!
  \**********************************************************/
/*! exports provided: SettingsApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsApi", function() { return SettingsApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */




class SettingsApi {
    constructor(api) {
        this.api = api;
        this.apiController = 'settings';
    }
    getCurrent() {
        return this.api.get(`${this.apiController}/current`);
    }
    updateCurrent(item) {
        return this.api.put(`${this.apiController}/current`, item);
    }
}
SettingsApi.ɵfac = function SettingsApi_Factory(t) { return new (t || SettingsApi)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"])); };
SettingsApi.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SettingsApi, factory: SettingsApi.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsApi, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@core/backend/common/api/users.api.ts":
/*!*******************************************************!*\
  !*** ./src/app/@core/backend/common/api/users.api.ts ***!
  \*******************************************************/
/*! exports provided: UsersApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersApi", function() { return UsersApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */






class UsersApi {
    constructor(api) {
        this.api = api;
        this.apiController = 'users';
    }
    get usersDataSource() {
        return this.api.getServerDataSource(`${this.api.apiUrl}/${this.apiController}`);
    }
    list(pageNumber = 1, pageSize = 10) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('pageNumber', `${pageNumber}`)
            .set('pageSize', `${pageSize}`);
        return this.api.get(this.apiController, { params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data.map(item => {
            const picture = `${this.api.apiUrl}/${this.apiController}/${item.id}/photo`;
            return Object.assign(Object.assign({}, item), { picture });
        })));
    }
    getCurrent() {
        return this.api.get(`${this.apiController}/current`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => {
            const picture = `${this.api.apiUrl}/${this.apiController}/${data.id}/photo`;
            return Object.assign(Object.assign({}, data), { picture });
        }));
    }
    get(id) {
        return this.api.get(`${this.apiController}/${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => {
            const picture = `${this.api.apiUrl}/${this.apiController}/${data.id}/photo`;
            return Object.assign(Object.assign({}, data), { picture });
        }));
    }
    delete(id) {
        return this.api.delete(`${this.apiController}/${id}`);
    }
    add(item) {
        return this.api.post(this.apiController, item);
    }
    updateCurrent(item) {
        return this.api.put(`${this.apiController}/current`, item);
    }
    update(item) {
        return this.api.put(`${this.apiController}/${item.id}`, item);
    }
}
UsersApi.ɵfac = function UsersApi_Factory(t) { return new (t || UsersApi)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"])); };
UsersApi.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsersApi, factory: UsersApi.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersApi, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@core/backend/common/common-backend.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/@core/backend/common/common-backend.module.ts ***!
  \***************************************************************/
/*! exports provided: CommonBackendModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonBackendModule", function() { return CommonBackendModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _interfaces_common_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interfaces/common/users */ "./src/app/@core/interfaces/common/users.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/users.service */ "./src/app/@core/backend/common/services/users.service.ts");
/* harmony import */ var _api_users_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api/users.api */ "./src/app/@core/backend/common/api/users.api.ts");
/* harmony import */ var _api_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _interfaces_common_countries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../interfaces/common/countries */ "./src/app/@core/interfaces/common/countries.ts");
/* harmony import */ var _services_countries_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/countries.service */ "./src/app/@core/backend/common/services/countries.service.ts");
/* harmony import */ var _api_countries_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./api/countries.api */ "./src/app/@core/backend/common/api/countries.api.ts");
/* harmony import */ var _api_settings_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./api/settings.api */ "./src/app/@core/backend/common/api/settings.api.ts");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nebular/auth */ "./node_modules/@nebular/auth/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _interfaces_common_settings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../interfaces/common/settings */ "./src/app/@core/interfaces/common/settings.ts");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/settings.service */ "./src/app/@core/backend/common/services/settings.service.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */














const API = [_api_users_api__WEBPACK_IMPORTED_MODULE_4__["UsersApi"], _api_countries_api__WEBPACK_IMPORTED_MODULE_8__["CountriesApi"], _api_settings_api__WEBPACK_IMPORTED_MODULE_9__["SettingsApi"], _api_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]];
const SERVICES = [
    { provide: _interfaces_common_users__WEBPACK_IMPORTED_MODULE_2__["UserData"], useClass: _services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] },
    { provide: _interfaces_common_countries__WEBPACK_IMPORTED_MODULE_6__["CountryData"], useClass: _services_countries_service__WEBPACK_IMPORTED_MODULE_7__["CountriesService"] },
    { provide: _interfaces_common_settings__WEBPACK_IMPORTED_MODULE_11__["SettingsData"], useClass: _services_settings_service__WEBPACK_IMPORTED_MODULE_12__["SettingsService"] },
];
class CommonBackendModule {
    static forRoot() {
        return {
            ngModule: CommonBackendModule,
            providers: [
                ...API,
                ...SERVICES,
            ],
        };
    }
}
CommonBackendModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CommonBackendModule });
CommonBackendModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CommonBackendModule_Factory(t) { return new (t || CommonBackendModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _nebular_auth__WEBPACK_IMPORTED_MODULE_10__["NbAuthModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CommonBackendModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _nebular_auth__WEBPACK_IMPORTED_MODULE_10__["NbAuthModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonBackendModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _nebular_auth__WEBPACK_IMPORTED_MODULE_10__["NbAuthModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/@core/backend/common/services/countries.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/@core/backend/common/services/countries.service.ts ***!
  \********************************************************************/
/*! exports provided: CountriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountriesService", function() { return CountriesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_countries_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/countries.api */ "./src/app/@core/backend/common/api/countries.api.ts");
/* harmony import */ var _interfaces_common_countries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../interfaces/common/countries */ "./src/app/@core/interfaces/common/countries.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */





class CountriesService extends _interfaces_common_countries__WEBPACK_IMPORTED_MODULE_2__["CountryData"] {
    constructor(api) {
        super();
        this.api = api;
    }
    list() {
        return this.api.list();
    }
}
CountriesService.ɵfac = function CountriesService_Factory(t) { return new (t || CountriesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_countries_api__WEBPACK_IMPORTED_MODULE_1__["CountriesApi"])); };
CountriesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CountriesService, factory: CountriesService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountriesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _api_countries_api__WEBPACK_IMPORTED_MODULE_1__["CountriesApi"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@core/backend/common/services/settings.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/@core/backend/common/services/settings.service.ts ***!
  \*******************************************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_settings_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/settings.api */ "./src/app/@core/backend/common/api/settings.api.ts");
/* harmony import */ var _interfaces_common_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../interfaces/common/settings */ "./src/app/@core/interfaces/common/settings.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */





class SettingsService extends _interfaces_common_settings__WEBPACK_IMPORTED_MODULE_2__["SettingsData"] {
    constructor(api) {
        super();
        this.api = api;
    }
    getCurrentSetting() {
        return this.api.getCurrent();
    }
    updateCurrent(setting) {
        return this.api.updateCurrent(setting);
    }
}
SettingsService.ɵfac = function SettingsService_Factory(t) { return new (t || SettingsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_settings_api__WEBPACK_IMPORTED_MODULE_1__["SettingsApi"])); };
SettingsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SettingsService, factory: SettingsService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _api_settings_api__WEBPACK_IMPORTED_MODULE_1__["SettingsApi"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@core/backend/common/services/users.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/@core/backend/common/services/users.service.ts ***!
  \****************************************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _api_users_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/users.api */ "./src/app/@core/backend/common/api/users.api.ts");
/* harmony import */ var _interfaces_common_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../interfaces/common/users */ "./src/app/@core/interfaces/common/users.ts");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/auth */ "./node_modules/@nebular/auth/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */









class UsersService extends _interfaces_common_users__WEBPACK_IMPORTED_MODULE_3__["UserData"] {
    constructor(api, authService) {
        super();
        this.api = api;
        this.authService = authService;
    }
    get gridDataSource() {
        return this.api.usersDataSource;
    }
    list(pageNumber = 1, pageSize = 10) {
        return this.api.list(pageNumber, pageSize);
    }
    getCurrentUser() {
        return this.authService.isAuthenticated()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(authenticated => {
            return authenticated ? this.api.getCurrent() : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(u => {
            if (u && !u.setting) {
                u.setting = {};
            }
            return u;
        }));
    }
    get(id) {
        return this.api.get(id);
    }
    create(user) {
        return this.api.add(user);
    }
    update(user) {
        return this.api.update(user);
    }
    updateCurrent(user) {
        return this.api.updateCurrent(user);
    }
    delete(id) {
        return this.api.delete(id);
    }
}
UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_users_api__WEBPACK_IMPORTED_MODULE_2__["UsersApi"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_4__["NbAuthService"])); };
UsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsersService, factory: UsersService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _api_users_api__WEBPACK_IMPORTED_MODULE_2__["UsersApi"] }, { type: _nebular_auth__WEBPACK_IMPORTED_MODULE_4__["NbAuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@core/backend/ecommerce/api/order-statuses.api.ts":
/*!*******************************************************************!*\
  !*** ./src/app/@core/backend/ecommerce/api/order-statuses.api.ts ***!
  \*******************************************************************/
/*! exports provided: OrderStatusesApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderStatusesApi", function() { return OrderStatusesApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _common_api_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */




class OrderStatusesApi {
    constructor(api) {
        this.api = api;
        this.apiController = 'order-statuses';
    }
    list() {
        return this.api.get(this.apiController);
    }
}
OrderStatusesApi.ɵfac = function OrderStatusesApi_Factory(t) { return new (t || OrderStatusesApi)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"])); };
OrderStatusesApi.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OrderStatusesApi, factory: OrderStatusesApi.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderStatusesApi, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@core/backend/ecommerce/api/order-types.api.ts":
/*!****************************************************************!*\
  !*** ./src/app/@core/backend/ecommerce/api/order-types.api.ts ***!
  \****************************************************************/
/*! exports provided: OrderTypesApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderTypesApi", function() { return OrderTypesApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _common_api_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */




class OrderTypesApi {
    constructor(api) {
        this.api = api;
        this.apiController = 'order-types';
    }
    list() {
        return this.api.get(this.apiController);
    }
}
OrderTypesApi.ɵfac = function OrderTypesApi_Factory(t) { return new (t || OrderTypesApi)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"])); };
OrderTypesApi.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OrderTypesApi, factory: OrderTypesApi.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderTypesApi, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@core/backend/ecommerce/api/orders-aggregated.api.ts":
/*!**********************************************************************!*\
  !*** ./src/app/@core/backend/ecommerce/api/orders-aggregated.api.ts ***!
  \**********************************************************************/
/*! exports provided: OrdersAggregatedApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersAggregatedApi", function() { return OrdersAggregatedApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _common_api_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */





class OrdersAggregatedApi {
    constructor(api) {
        this.api = api;
        this.apiController = 'orders-aggregated';
    }
    getSummary() {
        return this.api.get(`${this.apiController}/summary`);
    }
    getStatisticsCount(aggregation) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('aggregation', `${aggregation}`);
        return this.api.get(this.apiController, { params });
    }
    getStatisticsProfit(aggregation) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('aggregation', `${aggregation}`);
        return this.api.get(`${this.apiController}/profit`, { params });
    }
    getCountriesCategoriesData(countryCode) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('countryCode', `${countryCode}`);
        return this.api.get(`${this.apiController}/country`, { params });
    }
}
OrdersAggregatedApi.ɵfac = function OrdersAggregatedApi_Factory(t) { return new (t || OrdersAggregatedApi)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_common_api_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"])); };
OrdersAggregatedApi.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OrdersAggregatedApi, factory: OrdersAggregatedApi.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrdersAggregatedApi, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _common_api_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@core/backend/ecommerce/api/orders-profit.api.ts":
/*!******************************************************************!*\
  !*** ./src/app/@core/backend/ecommerce/api/orders-profit.api.ts ***!
  \******************************************************************/
/*! exports provided: OrdersProfitApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersProfitApi", function() { return OrdersProfitApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _common_api_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */




class OrdersProfitApi {
    constructor(api) {
        this.api = api;
        this.apiController = 'orders-profit';
    }
    getProfitInfo() {
        return this.api.get(`${this.apiController}/summary`);
    }
    getProfitYear() {
        return this.api.get(this.apiController);
    }
    getProfitMonth() {
        return this.api.get(`${this.apiController}/short`);
    }
}
OrdersProfitApi.ɵfac = function OrdersProfitApi_Factory(t) { return new (t || OrdersProfitApi)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"])); };
OrdersProfitApi.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OrdersProfitApi, factory: OrdersProfitApi.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrdersProfitApi, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@core/backend/ecommerce/api/orders.api.ts":
/*!***********************************************************!*\
  !*** ./src/app/@core/backend/ecommerce/api/orders.api.ts ***!
  \***********************************************************/
/*! exports provided: OrdersApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersApi", function() { return OrdersApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _common_api_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */





class OrdersApi {
    constructor(api) {
        this.api = api;
        this.apiController = 'orders';
    }
    get ordersDataSource() {
        return this.api.getServerDataSource(`${this.api.apiUrl}/${this.apiController}`);
    }
    list(pageNumber = 1, pageSize = 10) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('pageNumber', `${pageNumber}`)
            .set('pageSize', `${pageSize}`);
        return this.api.get(this.apiController, { params });
    }
    get(id) {
        return this.api.get(`${this.apiController}/${id}`);
    }
    delete(id) {
        return this.api.delete(`${this.apiController}/${id}`);
    }
    add(item) {
        return this.api.post(this.apiController, item);
    }
    update(item) {
        return this.api.put(`${this.apiController}/${item.id}`, item);
    }
}
OrdersApi.ɵfac = function OrdersApi_Factory(t) { return new (t || OrdersApi)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_common_api_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"])); };
OrdersApi.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OrdersApi, factory: OrdersApi.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrdersApi, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _common_api_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@core/backend/ecommerce/api/traffic-aggregated.api.ts":
/*!***********************************************************************!*\
  !*** ./src/app/@core/backend/ecommerce/api/traffic-aggregated.api.ts ***!
  \***********************************************************************/
/*! exports provided: TrafficAggregatedApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrafficAggregatedApi", function() { return TrafficAggregatedApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _common_api_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */





class TrafficAggregatedApi {
    constructor(api) {
        this.api = api;
        this.apiController = 'traffic-aggregated';
    }
    getList(period) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('filter', `${period}`);
        return this.api.get(this.apiController, { params });
    }
}
TrafficAggregatedApi.ɵfac = function TrafficAggregatedApi_Factory(t) { return new (t || TrafficAggregatedApi)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_common_api_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"])); };
TrafficAggregatedApi.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TrafficAggregatedApi, factory: TrafficAggregatedApi.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrafficAggregatedApi, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _common_api_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@core/backend/ecommerce/api/user-activity.api.ts":
/*!******************************************************************!*\
  !*** ./src/app/@core/backend/ecommerce/api/user-activity.api.ts ***!
  \******************************************************************/
/*! exports provided: UserActivityApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserActivityApi", function() { return UserActivityApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _common_api_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */





class UserActivityApi {
    constructor(api) {
        this.api = api;
        this.apiController = 'user-activity';
    }
    list(period) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('date', `${period}`);
        return this.api.get(this.apiController, { params });
    }
}
UserActivityApi.ɵfac = function UserActivityApi_Factory(t) { return new (t || UserActivityApi)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_common_api_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"])); };
UserActivityApi.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserActivityApi, factory: UserActivityApi.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserActivityApi, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _common_api_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@core/backend/ecommerce/ecommerce-backend.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/@core/backend/ecommerce/ecommerce-backend.module.ts ***!
  \*********************************************************************/
/*! exports provided: EcommerceBackendModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcommerceBackendModule", function() { return EcommerceBackendModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _common_common_backend_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/common-backend.module */ "./src/app/@core/backend/common/common-backend.module.ts");
/* harmony import */ var _api_order_types_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/order-types.api */ "./src/app/@core/backend/ecommerce/api/order-types.api.ts");
/* harmony import */ var _api_order_statuses_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api/order-statuses.api */ "./src/app/@core/backend/ecommerce/api/order-statuses.api.ts");
/* harmony import */ var _api_orders_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api/orders.api */ "./src/app/@core/backend/ecommerce/api/orders.api.ts");
/* harmony import */ var _api_orders_aggregated_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api/orders-aggregated.api */ "./src/app/@core/backend/ecommerce/api/orders-aggregated.api.ts");
/* harmony import */ var _api_orders_profit_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./api/orders-profit.api */ "./src/app/@core/backend/ecommerce/api/orders-profit.api.ts");
/* harmony import */ var _api_traffic_aggregated_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./api/traffic-aggregated.api */ "./src/app/@core/backend/ecommerce/api/traffic-aggregated.api.ts");
/* harmony import */ var _api_user_activity_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./api/user-activity.api */ "./src/app/@core/backend/ecommerce/api/user-activity.api.ts");
/* harmony import */ var _interfaces_ecommerce_country_order__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../interfaces/ecommerce/country-order */ "./src/app/@core/interfaces/ecommerce/country-order.ts");
/* harmony import */ var _interfaces_ecommerce_order_type__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../interfaces/ecommerce/order-type */ "./src/app/@core/interfaces/ecommerce/order-type.ts");
/* harmony import */ var _interfaces_ecommerce_order_status__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../interfaces/ecommerce/order-status */ "./src/app/@core/interfaces/ecommerce/order-status.ts");
/* harmony import */ var _interfaces_ecommerce_orders__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../interfaces/ecommerce/orders */ "./src/app/@core/interfaces/ecommerce/orders.ts");
/* harmony import */ var _interfaces_ecommerce_orders_profit_chart__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../interfaces/ecommerce/orders-profit-chart */ "./src/app/@core/interfaces/ecommerce/orders-profit-chart.ts");
/* harmony import */ var _interfaces_ecommerce_profit_bar_animation_chart__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../interfaces/ecommerce/profit-bar-animation-chart */ "./src/app/@core/interfaces/ecommerce/profit-bar-animation-chart.ts");
/* harmony import */ var _interfaces_ecommerce_stats_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../interfaces/ecommerce/stats-bar */ "./src/app/@core/interfaces/ecommerce/stats-bar.ts");
/* harmony import */ var _interfaces_ecommerce_stats_progress_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../interfaces/ecommerce/stats-progress-bar */ "./src/app/@core/interfaces/ecommerce/stats-progress-bar.ts");
/* harmony import */ var _interfaces_ecommerce_traffic_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../interfaces/ecommerce/traffic-list */ "./src/app/@core/interfaces/ecommerce/traffic-list.ts");
/* harmony import */ var _interfaces_ecommerce_user_activity__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../interfaces/ecommerce/user-activity */ "./src/app/@core/interfaces/ecommerce/user-activity.ts");
/* harmony import */ var _services_country_order_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/country-order.service */ "./src/app/@core/backend/ecommerce/services/country-order.service.ts");
/* harmony import */ var _services_order_types_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/order-types.service */ "./src/app/@core/backend/ecommerce/services/order-types.service.ts");
/* harmony import */ var _services_order_statuses_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/order-statuses.service */ "./src/app/@core/backend/ecommerce/services/order-statuses.service.ts");
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/orders.service */ "./src/app/@core/backend/ecommerce/services/orders.service.ts");
/* harmony import */ var _services_orders_profit_chart_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/orders-profit-chart.service */ "./src/app/@core/backend/ecommerce/services/orders-profit-chart.service.ts");
/* harmony import */ var _services_profit_bar_animation_chart_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/profit-bar-animation-chart.service */ "./src/app/@core/backend/ecommerce/services/profit-bar-animation-chart.service.ts");
/* harmony import */ var _services_stats_bar_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/stats-bar.service */ "./src/app/@core/backend/ecommerce/services/stats-bar.service.ts");
/* harmony import */ var _services_stats_progress_bar_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/stats-progress-bar.service */ "./src/app/@core/backend/ecommerce/services/stats-progress-bar.service.ts");
/* harmony import */ var _services_traffic_list_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/traffic-list.service */ "./src/app/@core/backend/ecommerce/services/traffic-list.service.ts");
/* harmony import */ var _services_user_activity_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/user-activity.service */ "./src/app/@core/backend/ecommerce/services/user-activity.service.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */































const API = [
    _api_order_types_api__WEBPACK_IMPORTED_MODULE_3__["OrderTypesApi"],
    _api_order_statuses_api__WEBPACK_IMPORTED_MODULE_4__["OrderStatusesApi"],
    _api_orders_api__WEBPACK_IMPORTED_MODULE_5__["OrdersApi"],
    _api_orders_aggregated_api__WEBPACK_IMPORTED_MODULE_6__["OrdersAggregatedApi"],
    _api_orders_profit_api__WEBPACK_IMPORTED_MODULE_7__["OrdersProfitApi"],
    _api_traffic_aggregated_api__WEBPACK_IMPORTED_MODULE_8__["TrafficAggregatedApi"],
    _api_user_activity_api__WEBPACK_IMPORTED_MODULE_9__["UserActivityApi"],
];
const SERVICES = [
    { provide: _interfaces_ecommerce_country_order__WEBPACK_IMPORTED_MODULE_10__["CountryOrderData"], useClass: _services_country_order_service__WEBPACK_IMPORTED_MODULE_20__["CountryOrderService"] },
    { provide: _interfaces_ecommerce_orders__WEBPACK_IMPORTED_MODULE_13__["OrderData"], useClass: _services_orders_service__WEBPACK_IMPORTED_MODULE_23__["OrdersService"] },
    { provide: _interfaces_ecommerce_order_status__WEBPACK_IMPORTED_MODULE_12__["OrderStatusData"], useClass: _services_order_statuses_service__WEBPACK_IMPORTED_MODULE_22__["OrderStatusesService"] },
    { provide: _interfaces_ecommerce_order_type__WEBPACK_IMPORTED_MODULE_11__["OrderTypeData"], useClass: _services_order_types_service__WEBPACK_IMPORTED_MODULE_21__["OrderTypesService"] },
    { provide: _interfaces_ecommerce_orders_profit_chart__WEBPACK_IMPORTED_MODULE_14__["OrdersProfitChartData"], useClass: _services_orders_profit_chart_service__WEBPACK_IMPORTED_MODULE_24__["OrdersProfitChartService"] },
    { provide: _interfaces_ecommerce_profit_bar_animation_chart__WEBPACK_IMPORTED_MODULE_15__["ProfitBarAnimationChartData"], useClass: _services_profit_bar_animation_chart_service__WEBPACK_IMPORTED_MODULE_25__["ProfitBarAnimationChartService"] },
    { provide: _interfaces_ecommerce_stats_bar__WEBPACK_IMPORTED_MODULE_16__["StatsBarData"], useClass: _services_stats_bar_service__WEBPACK_IMPORTED_MODULE_26__["StatsBarService"] },
    { provide: _interfaces_ecommerce_stats_progress_bar__WEBPACK_IMPORTED_MODULE_17__["StatsProgressBarData"], useClass: _services_stats_progress_bar_service__WEBPACK_IMPORTED_MODULE_27__["StatsProgressBarService"] },
    { provide: _interfaces_ecommerce_traffic_list__WEBPACK_IMPORTED_MODULE_18__["TrafficListData"], useClass: _services_traffic_list_service__WEBPACK_IMPORTED_MODULE_28__["TrafficListService"] },
    { provide: _interfaces_ecommerce_user_activity__WEBPACK_IMPORTED_MODULE_19__["UserActivityData"], useClass: _services_user_activity_service__WEBPACK_IMPORTED_MODULE_29__["UserActivityService"] },
];
class EcommerceBackendModule {
    static forRoot() {
        return {
            ngModule: EcommerceBackendModule,
            providers: [
                ...API,
                ...SERVICES,
            ],
        };
    }
}
EcommerceBackendModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EcommerceBackendModule });
EcommerceBackendModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EcommerceBackendModule_Factory(t) { return new (t || EcommerceBackendModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _common_common_backend_module__WEBPACK_IMPORTED_MODULE_2__["CommonBackendModule"]],
        _common_common_backend_module__WEBPACK_IMPORTED_MODULE_2__["CommonBackendModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EcommerceBackendModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _common_common_backend_module__WEBPACK_IMPORTED_MODULE_2__["CommonBackendModule"]], exports: [_common_common_backend_module__WEBPACK_IMPORTED_MODULE_2__["CommonBackendModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EcommerceBackendModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _common_common_backend_module__WEBPACK_IMPORTED_MODULE_2__["CommonBackendModule"]],
                exports: [_common_common_backend_module__WEBPACK_IMPORTED_MODULE_2__["CommonBackendModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/@core/backend/ecommerce/services/country-order.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/@core/backend/ecommerce/services/country-order.service.ts ***!
  \***************************************************************************/
/*! exports provided: CountryOrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryOrderService", function() { return CountryOrderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _interfaces_ecommerce_country_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../interfaces/ecommerce/country-order */ "./src/app/@core/interfaces/ecommerce/country-order.ts");
/* harmony import */ var _api_orders_aggregated_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/orders-aggregated.api */ "./src/app/@core/backend/ecommerce/api/orders-aggregated.api.ts");
/* harmony import */ var _api_order_types_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/order-types.api */ "./src/app/@core/backend/ecommerce/api/order-types.api.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */








class CountryOrderService extends _interfaces_ecommerce_country_order__WEBPACK_IMPORTED_MODULE_2__["CountryOrderData"] {
    constructor(apiAggregated, apiOrderTypes) {
        super();
        this.apiAggregated = apiAggregated;
        this.apiOrderTypes = apiOrderTypes;
    }
    getCountriesCategories() {
        return this.apiOrderTypes.list();
    }
    getCountriesCategoriesData(country) {
        return this.apiAggregated.getCountriesCategoriesData(country)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => data.map(item => item.count)));
    }
}
CountryOrderService.ɵfac = function CountryOrderService_Factory(t) { return new (t || CountryOrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_orders_aggregated_api__WEBPACK_IMPORTED_MODULE_3__["OrdersAggregatedApi"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_order_types_api__WEBPACK_IMPORTED_MODULE_4__["OrderTypesApi"])); };
CountryOrderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CountryOrderService, factory: CountryOrderService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountryOrderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _api_orders_aggregated_api__WEBPACK_IMPORTED_MODULE_3__["OrdersAggregatedApi"] }, { type: _api_order_types_api__WEBPACK_IMPORTED_MODULE_4__["OrderTypesApi"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@core/backend/ecommerce/services/order-statuses.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/@core/backend/ecommerce/services/order-statuses.service.ts ***!
  \****************************************************************************/
/*! exports provided: OrderStatusesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderStatusesService", function() { return OrderStatusesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_order_statuses_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/order-statuses.api */ "./src/app/@core/backend/ecommerce/api/order-statuses.api.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */




class OrderStatusesService {
    constructor(api) {
        this.api = api;
    }
    list() {
        return this.api.list();
    }
}
OrderStatusesService.ɵfac = function OrderStatusesService_Factory(t) { return new (t || OrderStatusesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_order_statuses_api__WEBPACK_IMPORTED_MODULE_1__["OrderStatusesApi"])); };
OrderStatusesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OrderStatusesService, factory: OrderStatusesService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderStatusesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _api_order_statuses_api__WEBPACK_IMPORTED_MODULE_1__["OrderStatusesApi"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@core/backend/ecommerce/services/order-types.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/@core/backend/ecommerce/services/order-types.service.ts ***!
  \*************************************************************************/
/*! exports provided: OrderTypesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderTypesService", function() { return OrderTypesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_order_types_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/order-types.api */ "./src/app/@core/backend/ecommerce/api/order-types.api.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */




class OrderTypesService {
    constructor(api) {
        this.api = api;
    }
    list() {
        return this.api.list();
    }
}
OrderTypesService.ɵfac = function OrderTypesService_Factory(t) { return new (t || OrderTypesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_order_types_api__WEBPACK_IMPORTED_MODULE_1__["OrderTypesApi"])); };
OrderTypesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OrderTypesService, factory: OrderTypesService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderTypesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _api_order_types_api__WEBPACK_IMPORTED_MODULE_1__["OrderTypesApi"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@core/backend/ecommerce/services/orders-profit-chart.service.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/@core/backend/ecommerce/services/orders-profit-chart.service.ts ***!
  \*********************************************************************************/
/*! exports provided: OrdersProfitChartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersProfitChartService", function() { return OrdersProfitChartService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _interfaces_ecommerce_orders_profit_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../interfaces/ecommerce/orders-profit-chart */ "./src/app/@core/interfaces/ecommerce/orders-profit-chart.ts");
/* harmony import */ var _api_orders_aggregated_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/orders-aggregated.api */ "./src/app/@core/backend/ecommerce/api/orders-aggregated.api.ts");






class OrdersProfitChartService extends _interfaces_ecommerce_orders_profit_chart__WEBPACK_IMPORTED_MODULE_2__["OrdersProfitChartData"] {
    constructor(api) {
        super();
        this.api = api;
    }
    getOrderProfitChartSummary() {
        return this.api.getSummary()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => {
            return [{
                    title: 'Marketplace',
                    value: data.marketplace,
                },
                {
                    title: 'Last Month',
                    value: data.lastMonth,
                },
                {
                    title: 'Last Week',
                    value: data.lastWeek,
                },
                {
                    title: 'Today',
                    value: data.today,
                }];
        }));
    }
    getOrdersChartData(aggregation) {
        return this.api.getStatisticsCount(aggregation)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((data) => {
            return {
                chartLabel: data.chartLabel,
                axisXLabels: data.axisXLabels,
                linesData: data.lines.map(item => item.values),
                legend: data.lines.map(item => item.type),
            };
        }));
    }
    getProfitChartData(aggregation) {
        return this.api.getStatisticsProfit(aggregation)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((data) => {
            return {
                chartLabel: data.chartLabel,
                axisXLabels: data.axisXLabels,
                linesData: data.lines.map(item => item.values),
                legend: data.lines.map(item => item.type),
            };
        }));
    }
}
OrdersProfitChartService.ɵfac = function OrdersProfitChartService_Factory(t) { return new (t || OrdersProfitChartService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api_orders_aggregated_api__WEBPACK_IMPORTED_MODULE_3__["OrdersAggregatedApi"])); };
OrdersProfitChartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OrdersProfitChartService, factory: OrdersProfitChartService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OrdersProfitChartService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _api_orders_aggregated_api__WEBPACK_IMPORTED_MODULE_3__["OrdersAggregatedApi"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@core/backend/ecommerce/services/orders.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/@core/backend/ecommerce/services/orders.service.ts ***!
  \********************************************************************/
/*! exports provided: OrdersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersService", function() { return OrdersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_orders_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/orders.api */ "./src/app/@core/backend/ecommerce/api/orders.api.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */




class OrdersService {
    constructor(api) {
        this.api = api;
    }
    get gridDataSource() {
        return this.api.ordersDataSource;
    }
    list(pageNumber = 1, pageSize = 10) {
        return this.api.list(pageNumber, pageSize);
    }
    get(id) {
        return this.api.get(id);
    }
    create(order) {
        return this.api.add(order);
    }
    update(order) {
        return this.api.update(order);
    }
    delete(id) {
        return this.api.delete(id);
    }
}
OrdersService.ɵfac = function OrdersService_Factory(t) { return new (t || OrdersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_orders_api__WEBPACK_IMPORTED_MODULE_1__["OrdersApi"])); };
OrdersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OrdersService, factory: OrdersService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrdersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _api_orders_api__WEBPACK_IMPORTED_MODULE_1__["OrdersApi"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@core/backend/ecommerce/services/profit-bar-animation-chart.service.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/@core/backend/ecommerce/services/profit-bar-animation-chart.service.ts ***!
  \****************************************************************************************/
/*! exports provided: ProfitBarAnimationChartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfitBarAnimationChartService", function() { return ProfitBarAnimationChartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _interfaces_ecommerce_profit_bar_animation_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../interfaces/ecommerce/profit-bar-animation-chart */ "./src/app/@core/interfaces/ecommerce/profit-bar-animation-chart.ts");
/* harmony import */ var _api_orders_profit_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/orders-profit.api */ "./src/app/@core/backend/ecommerce/api/orders-profit.api.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */






class ProfitBarAnimationChartService extends _interfaces_ecommerce_profit_bar_animation_chart__WEBPACK_IMPORTED_MODULE_2__["ProfitBarAnimationChartData"] {
    constructor(api) {
        super();
        this.api = api;
    }
    getChartData() {
        return this.api.getProfitYear()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => {
            return {
                chartLabel: data.chartLabel,
                axisXLabels: data.axisXLabels,
                linesData: data.lines.map(item => item.values),
                legend: data.lines.map(item => item.type),
            };
        }));
    }
}
ProfitBarAnimationChartService.ɵfac = function ProfitBarAnimationChartService_Factory(t) { return new (t || ProfitBarAnimationChartService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_orders_profit_api__WEBPACK_IMPORTED_MODULE_3__["OrdersProfitApi"])); };
ProfitBarAnimationChartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProfitBarAnimationChartService, factory: ProfitBarAnimationChartService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfitBarAnimationChartService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _api_orders_profit_api__WEBPACK_IMPORTED_MODULE_3__["OrdersProfitApi"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@core/backend/ecommerce/services/stats-bar.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/@core/backend/ecommerce/services/stats-bar.service.ts ***!
  \***********************************************************************/
/*! exports provided: StatsBarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsBarService", function() { return StatsBarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _interfaces_ecommerce_stats_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../interfaces/ecommerce/stats-bar */ "./src/app/@core/interfaces/ecommerce/stats-bar.ts");
/* harmony import */ var _api_orders_profit_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/orders-profit.api */ "./src/app/@core/backend/ecommerce/api/orders-profit.api.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */






class StatsBarService extends _interfaces_ecommerce_stats_bar__WEBPACK_IMPORTED_MODULE_2__["StatsBarData"] {
    constructor(api) {
        super();
        this.api = api;
    }
    getStatsBarData() {
        return this.api.getProfitMonth()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => {
            return {
                chartLabel: data.chartLabel,
                axisXLabels: data.axisXLabels,
                linesData: data.lines.map(item => item.values),
                legend: data.lines.map(item => item.type),
                aggregatedData: data.aggregatedData,
            };
        }));
    }
}
StatsBarService.ɵfac = function StatsBarService_Factory(t) { return new (t || StatsBarService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_orders_profit_api__WEBPACK_IMPORTED_MODULE_3__["OrdersProfitApi"])); };
StatsBarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StatsBarService, factory: StatsBarService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatsBarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _api_orders_profit_api__WEBPACK_IMPORTED_MODULE_3__["OrdersProfitApi"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@core/backend/ecommerce/services/stats-progress-bar.service.ts":
/*!********************************************************************************!*\
  !*** ./src/app/@core/backend/ecommerce/services/stats-progress-bar.service.ts ***!
  \********************************************************************************/
/*! exports provided: StatsProgressBarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsProgressBarService", function() { return StatsProgressBarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _interfaces_ecommerce_stats_progress_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../interfaces/ecommerce/stats-progress-bar */ "./src/app/@core/interfaces/ecommerce/stats-progress-bar.ts");
/* harmony import */ var _api_orders_profit_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/orders-profit.api */ "./src/app/@core/backend/ecommerce/api/orders-profit.api.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */






class StatsProgressBarService extends _interfaces_ecommerce_stats_progress_bar__WEBPACK_IMPORTED_MODULE_2__["StatsProgressBarData"] {
    constructor(api) {
        super();
        this.api = api;
    }
    getDescription(trend) {
        return trend > 0
            ? `Better than last week (${trend}%)`
            : `Worse than last week (${trend}%)`;
    }
    getProgressInfoData() {
        return this.api.getProfitInfo()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => {
            return [
                {
                    title: 'Today’s Profit',
                    value: data.todayProfit.value,
                    activeProgress: data.todayProfit.trend,
                    description: this.getDescription(data.todayProfit.trend),
                },
                {
                    title: 'New Orders',
                    value: data.weekOrdersProfit.value,
                    activeProgress: data.weekOrdersProfit.trend,
                    description: this.getDescription(data.weekOrdersProfit.trend),
                },
                {
                    title: 'New Comments',
                    value: data.weekCommentsProfit.value,
                    activeProgress: data.weekCommentsProfit.trend,
                    description: this.getDescription(data.weekCommentsProfit.trend),
                },
            ];
        }));
    }
}
StatsProgressBarService.ɵfac = function StatsProgressBarService_Factory(t) { return new (t || StatsProgressBarService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_orders_profit_api__WEBPACK_IMPORTED_MODULE_3__["OrdersProfitApi"])); };
StatsProgressBarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StatsProgressBarService, factory: StatsProgressBarService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatsProgressBarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _api_orders_profit_api__WEBPACK_IMPORTED_MODULE_3__["OrdersProfitApi"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@core/backend/ecommerce/services/traffic-list.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/@core/backend/ecommerce/services/traffic-list.service.ts ***!
  \**************************************************************************/
/*! exports provided: TrafficListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrafficListService", function() { return TrafficListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _interfaces_ecommerce_traffic_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../interfaces/ecommerce/traffic-list */ "./src/app/@core/interfaces/ecommerce/traffic-list.ts");
/* harmony import */ var _api_traffic_aggregated_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/traffic-aggregated.api */ "./src/app/@core/backend/ecommerce/api/traffic-aggregated.api.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */






class TrafficListService extends _interfaces_ecommerce_traffic_list__WEBPACK_IMPORTED_MODULE_2__["TrafficListData"] {
    constructor(api) {
        super();
        this.api = api;
    }
    getPercentedValue(first, second) {
        return Math.floor(100 * first / (first + second));
    }
    getTrafficListData(period) {
        return this.api.getList(period)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => data.map(item => {
            return {
                date: item.period,
                value: item.value,
                delta: {
                    up: item.trend >= 0,
                    value: Math.floor(item.trend),
                },
                comparison: {
                    prevDate: item.comparison && item.comparison.previousPeriod,
                    prevValue: item.comparison
                        && this.getPercentedValue(item.comparison.previousValue, item.comparison.currentValue),
                    nextDate: item.comparison && item.comparison.currentPeriod,
                    nextValue: item.comparison
                        && this.getPercentedValue(item.comparison.currentValue, item.comparison.previousValue),
                },
            };
        })));
    }
}
TrafficListService.ɵfac = function TrafficListService_Factory(t) { return new (t || TrafficListService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_traffic_aggregated_api__WEBPACK_IMPORTED_MODULE_3__["TrafficAggregatedApi"])); };
TrafficListService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TrafficListService, factory: TrafficListService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrafficListService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _api_traffic_aggregated_api__WEBPACK_IMPORTED_MODULE_3__["TrafficAggregatedApi"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@core/backend/ecommerce/services/user-activity.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/@core/backend/ecommerce/services/user-activity.service.ts ***!
  \***************************************************************************/
/*! exports provided: UserActivityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserActivityService", function() { return UserActivityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _interfaces_ecommerce_user_activity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../interfaces/ecommerce/user-activity */ "./src/app/@core/interfaces/ecommerce/user-activity.ts");
/* harmony import */ var _api_user_activity_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/user-activity.api */ "./src/app/@core/backend/ecommerce/api/user-activity.api.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */






class UserActivityService extends _interfaces_ecommerce_user_activity__WEBPACK_IMPORTED_MODULE_2__["UserActivityData"] {
    constructor(api) {
        super();
        this.api = api;
    }
    getUserActivityData(period) {
        return this.api.list(period)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => data.map(item => {
            return {
                date: item.label,
                pagesVisitCount: item.pagesVisit,
                deltaUp: item.trend >= 0,
                newVisits: Math.floor(item.trend),
            };
        })));
    }
}
UserActivityService.ɵfac = function UserActivityService_Factory(t) { return new (t || UserActivityService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_user_activity_api__WEBPACK_IMPORTED_MODULE_3__["UserActivityApi"])); };
UserActivityService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserActivityService, factory: UserActivityService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserActivityService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _api_user_activity_api__WEBPACK_IMPORTED_MODULE_3__["UserActivityApi"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@core/backend/iot/api/device-parameters.api.ts":
/*!****************************************************************!*\
  !*** ./src/app/@core/backend/iot/api/device-parameters.api.ts ***!
  \****************************************************************/
/*! exports provided: DeviceParametersApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceParametersApi", function() { return DeviceParametersApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _common_api_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */




class DeviceParametersApi {
    constructor(api) {
        this.api = api;
        this.apiController = 'devices';
    }
    list(deviceId) {
        return this.api.get(`${this.apiController}/${deviceId}/parameters`);
    }
    add(deviceId, parameter) {
        return this.api.post(`${this.apiController}/${deviceId}/parameters`, parameter);
    }
    edit(deviceId, parameter) {
        return this.api.put(`${this.apiController}/${deviceId}/parameters`, parameter);
    }
    get(deviceId, id) {
        return this.api.get(`${this.apiController}/${id}`);
    }
    remove(deviceId, parameterId) {
        return this.api.delete(`${this.apiController}/${deviceId}/parameters/${parameterId}`);
    }
}
DeviceParametersApi.ɵfac = function DeviceParametersApi_Factory(t) { return new (t || DeviceParametersApi)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"])); };
DeviceParametersApi.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DeviceParametersApi, factory: DeviceParametersApi.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeviceParametersApi, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@core/backend/iot/api/devices.api.ts":
/*!******************************************************!*\
  !*** ./src/app/@core/backend/iot/api/devices.api.ts ***!
  \******************************************************/
/*! exports provided: DevicesApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicesApi", function() { return DevicesApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _common_api_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */




class DevicesApi {
    constructor(api) {
        this.api = api;
        this.apiController = 'devices';
    }
    list() {
        return this.api.get(this.apiController);
    }
    add(device) {
        return this.api.post(this.apiController, device);
    }
    edit(device) {
        return this.api.put(`${this.apiController}/${device.id}`, device);
    }
    get(id) {
        return this.api.get(`${this.apiController}/${id}`);
    }
}
DevicesApi.ɵfac = function DevicesApi_Factory(t) { return new (t || DevicesApi)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"])); };
DevicesApi.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DevicesApi, factory: DevicesApi.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DevicesApi, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _common_api_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@core/backend/iot/api/energy-aggregated.api.ts":
/*!****************************************************************!*\
  !*** ./src/app/@core/backend/iot/api/energy-aggregated.api.ts ***!
  \****************************************************************/
/*! exports provided: EnergyAggregatedApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnergyAggregatedApi", function() { return EnergyAggregatedApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _common_api_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */





class EnergyAggregatedApi {
    constructor(api) {
        this.api = api;
        this.apiController = 'energy-aggregated';
    }
    getSolar() {
        return this.api.get(`${this.apiController}/summary`);
    }
    getList(yearsCount) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('countOfYears', `${yearsCount}`);
        return this.api.get(`${this.apiController}/history`, { params });
    }
    getListAggregated(period) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('period', `${period}`);
        return this.api.get(`${this.apiController}`, { params });
    }
}
EnergyAggregatedApi.ɵfac = function EnergyAggregatedApi_Factory(t) { return new (t || EnergyAggregatedApi)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_common_api_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"])); };
EnergyAggregatedApi.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EnergyAggregatedApi, factory: EnergyAggregatedApi.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EnergyAggregatedApi, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _common_api_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@core/backend/iot/api/phone.api.ts":
/*!****************************************************!*\
  !*** ./src/app/@core/backend/iot/api/phone.api.ts ***!
  \****************************************************/
/*! exports provided: PhoneApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneApi", function() { return PhoneApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _common_api_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */






class PhoneApi {
    constructor(api) {
        this.api = api;
        this.apiController = 'phone';
    }
    getContacts(searchText, pageNumber = 1, pageSize = 15) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('pageNumber', `${pageNumber}`)
            .set('pageSize', `${pageSize}`);
        return this.api.get(`${this.apiController}/contacts`, { params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => data.map(item => {
            return Object.assign(Object.assign({}, item), { picture: this.getPicture(item.id) });
        })));
    }
    getRecentCalls(pageNumber = 1, pageSize = 15) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('pageNumber', `${pageNumber}`)
            .set('pageSize', `${pageSize}`);
        return this.api.get(`${this.apiController}/recent-calls`, { params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => data.map(item => {
            return Object.assign(Object.assign({}, item), { picture: this.getPicture(item.contact.id) });
        })));
    }
    getPicture(id) {
        return `${this.api.apiUrl}/${this.apiController}/contacts/${id}/photo`;
    }
}
PhoneApi.ɵfac = function PhoneApi_Factory(t) { return new (t || PhoneApi)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_common_api_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
PhoneApi.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PhoneApi, factory: PhoneApi.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhoneApi, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _common_api_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@core/backend/iot/api/traffic-aggregated.api.ts":
/*!*****************************************************************!*\
  !*** ./src/app/@core/backend/iot/api/traffic-aggregated.api.ts ***!
  \*****************************************************************/
/*! exports provided: TrafficAggregatedApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrafficAggregatedApi", function() { return TrafficAggregatedApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _common_api_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */





class TrafficAggregatedApi {
    constructor(api) {
        this.api = api;
        this.apiController = 'network-aggregated';
    }
    getTraffic(period) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('period', `${period}`);
        return this.api.get(`${this.apiController}`, { params });
    }
}
TrafficAggregatedApi.ɵfac = function TrafficAggregatedApi_Factory(t) { return new (t || TrafficAggregatedApi)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_common_api_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"])); };
TrafficAggregatedApi.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TrafficAggregatedApi, factory: TrafficAggregatedApi.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrafficAggregatedApi, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _common_api_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@core/backend/iot/iot-backend.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/@core/backend/iot/iot-backend.module.ts ***!
  \*********************************************************/
/*! exports provided: IotBackendModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IotBackendModule", function() { return IotBackendModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _common_common_backend_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/common-backend.module */ "./src/app/@core/backend/common/common-backend.module.ts");
/* harmony import */ var _api_devices_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/devices.api */ "./src/app/@core/backend/iot/api/devices.api.ts");
/* harmony import */ var _api_device_parameters_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api/device-parameters.api */ "./src/app/@core/backend/iot/api/device-parameters.api.ts");
/* harmony import */ var _api_energy_aggregated_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api/energy-aggregated.api */ "./src/app/@core/backend/iot/api/energy-aggregated.api.ts");
/* harmony import */ var _api_phone_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api/phone.api */ "./src/app/@core/backend/iot/api/phone.api.ts");
/* harmony import */ var _api_traffic_aggregated_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./api/traffic-aggregated.api */ "./src/app/@core/backend/iot/api/traffic-aggregated.api.ts");
/* harmony import */ var _services_device_type_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/device-type.service */ "./src/app/@core/backend/iot/services/device-type.service.ts");
/* harmony import */ var _interfaces_iot_devices__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../interfaces/iot/devices */ "./src/app/@core/interfaces/iot/devices.ts");
/* harmony import */ var _interfaces_iot_phone__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../interfaces/iot/phone */ "./src/app/@core/interfaces/iot/phone.ts");
/* harmony import */ var _interfaces_iot_electricity__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../interfaces/iot/electricity */ "./src/app/@core/interfaces/iot/electricity.ts");
/* harmony import */ var _interfaces_iot_solar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../interfaces/iot/solar */ "./src/app/@core/interfaces/iot/solar.ts");
/* harmony import */ var _interfaces_iot_temperature_humidity__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../interfaces/iot/temperature-humidity */ "./src/app/@core/interfaces/iot/temperature-humidity.ts");
/* harmony import */ var _interfaces_iot_traffic_chart__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../interfaces/iot/traffic-chart */ "./src/app/@core/interfaces/iot/traffic-chart.ts");
/* harmony import */ var _services_devices_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/devices.service */ "./src/app/@core/backend/iot/services/devices.service.ts");
/* harmony import */ var _services_electricity_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/electricity.service */ "./src/app/@core/backend/iot/services/electricity.service.ts");
/* harmony import */ var _services_phone_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/phone.service */ "./src/app/@core/backend/iot/services/phone.service.ts");
/* harmony import */ var _services_solar_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/solar.service */ "./src/app/@core/backend/iot/services/solar.service.ts");
/* harmony import */ var _services_temperature_humidity_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/temperature-humidity.service */ "./src/app/@core/backend/iot/services/temperature-humidity.service.ts");
/* harmony import */ var _services_traffic_chart_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/traffic-chart.service */ "./src/app/@core/backend/iot/services/traffic-chart.service.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */






















const API = [
    _api_devices_api__WEBPACK_IMPORTED_MODULE_3__["DevicesApi"],
    _api_device_parameters_api__WEBPACK_IMPORTED_MODULE_4__["DeviceParametersApi"],
    _api_energy_aggregated_api__WEBPACK_IMPORTED_MODULE_5__["EnergyAggregatedApi"],
    _api_phone_api__WEBPACK_IMPORTED_MODULE_6__["PhoneApi"],
    _api_traffic_aggregated_api__WEBPACK_IMPORTED_MODULE_7__["TrafficAggregatedApi"],
];
const SERVICES = [
    { provide: _interfaces_iot_devices__WEBPACK_IMPORTED_MODULE_9__["DevicesData"], useClass: _services_devices_service__WEBPACK_IMPORTED_MODULE_15__["DevicesService"] },
    { provide: _interfaces_iot_electricity__WEBPACK_IMPORTED_MODULE_11__["ElectricityData"], useClass: _services_electricity_service__WEBPACK_IMPORTED_MODULE_16__["ElectricityService"] },
    { provide: _interfaces_iot_phone__WEBPACK_IMPORTED_MODULE_10__["PhoneData"], useClass: _services_phone_service__WEBPACK_IMPORTED_MODULE_17__["PhoneService"] },
    { provide: _interfaces_iot_solar__WEBPACK_IMPORTED_MODULE_12__["SolarData"], useClass: _services_solar_service__WEBPACK_IMPORTED_MODULE_18__["SolarService"] },
    { provide: _interfaces_iot_temperature_humidity__WEBPACK_IMPORTED_MODULE_13__["TemperatureHumidityData"], useClass: _services_temperature_humidity_service__WEBPACK_IMPORTED_MODULE_19__["TemperatureHumidityService"] },
    { provide: _interfaces_iot_traffic_chart__WEBPACK_IMPORTED_MODULE_14__["TrafficChartData"], useClass: _services_traffic_chart_service__WEBPACK_IMPORTED_MODULE_20__["TrafficChartService"] },
];
const INTERNAL_SERVICES = [_services_device_type_service__WEBPACK_IMPORTED_MODULE_8__["DeviceTypeService"]];
class IotBackendModule {
    static forRoot() {
        return {
            ngModule: IotBackendModule,
            providers: [
                ...API,
                ...INTERNAL_SERVICES,
                ...SERVICES,
            ],
        };
    }
}
IotBackendModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: IotBackendModule });
IotBackendModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function IotBackendModule_Factory(t) { return new (t || IotBackendModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _common_common_backend_module__WEBPACK_IMPORTED_MODULE_2__["CommonBackendModule"]],
        _common_common_backend_module__WEBPACK_IMPORTED_MODULE_2__["CommonBackendModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IotBackendModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _common_common_backend_module__WEBPACK_IMPORTED_MODULE_2__["CommonBackendModule"]], exports: [_common_common_backend_module__WEBPACK_IMPORTED_MODULE_2__["CommonBackendModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IotBackendModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _common_common_backend_module__WEBPACK_IMPORTED_MODULE_2__["CommonBackendModule"]],
                exports: [_common_common_backend_module__WEBPACK_IMPORTED_MODULE_2__["CommonBackendModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/@core/backend/iot/services/device-type.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/@core/backend/iot/services/device-type.service.ts ***!
  \*******************************************************************/
/*! exports provided: DeviceTypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceTypeService", function() { return DeviceTypeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */


class DeviceTypeService {
    constructor() {
        this.DEVICE_TYPE_MAP = {
            Light: {
                iconClass: 'nb-lightbulb',
                type: 'primary',
            },
            RollerShades: {
                iconClass: 'nb-roller-shades',
                type: 'success',
            },
            WirelessAudio: {
                iconClass: 'nb-audio',
                type: 'info',
            },
            CoffeeMaker: {
                iconClass: 'nb-coffee-maker',
                type: 'warning',
            },
        };
    }
    getSettings(type) {
        return this.DEVICE_TYPE_MAP[type];
    }
}
DeviceTypeService.ɵfac = function DeviceTypeService_Factory(t) { return new (t || DeviceTypeService)(); };
DeviceTypeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DeviceTypeService, factory: DeviceTypeService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeviceTypeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/@core/backend/iot/services/devices.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/@core/backend/iot/services/devices.service.ts ***!
  \***************************************************************/
/*! exports provided: DevicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicesService", function() { return DevicesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _interfaces_iot_devices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../interfaces/iot/devices */ "./src/app/@core/interfaces/iot/devices.ts");
/* harmony import */ var _api_devices_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/devices.api */ "./src/app/@core/backend/iot/api/devices.api.ts");
/* harmony import */ var _device_type_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./device-type.service */ "./src/app/@core/backend/iot/services/device-type.service.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */








class DevicesService extends _interfaces_iot_devices__WEBPACK_IMPORTED_MODULE_2__["DevicesData"] {
    constructor(api, settings) {
        super();
        this.api = api;
        this.settings = settings;
    }
    list() {
        return this.api.list()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => data.map(item => {
            return Object.assign(Object.assign({}, item), { settings: this.settings.getSettings(item.type) });
        })));
    }
    edit(device) {
        return this.api.edit(device)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(item => {
            return Object.assign(Object.assign({}, item), { settings: this.settings.getSettings(item.type) });
        }));
    }
}
DevicesService.ɵfac = function DevicesService_Factory(t) { return new (t || DevicesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_devices_api__WEBPACK_IMPORTED_MODULE_3__["DevicesApi"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_device_type_service__WEBPACK_IMPORTED_MODULE_4__["DeviceTypeService"])); };
DevicesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DevicesService, factory: DevicesService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DevicesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _api_devices_api__WEBPACK_IMPORTED_MODULE_3__["DevicesApi"] }, { type: _device_type_service__WEBPACK_IMPORTED_MODULE_4__["DeviceTypeService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@core/backend/iot/services/electricity.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/@core/backend/iot/services/electricity.service.ts ***!
  \*******************************************************************/
/*! exports provided: ElectricityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElectricityService", function() { return ElectricityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _interfaces_iot_electricity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../interfaces/iot/electricity */ "./src/app/@core/interfaces/iot/electricity.ts");
/* harmony import */ var _api_energy_aggregated_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/energy-aggregated.api */ "./src/app/@core/backend/iot/api/energy-aggregated.api.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */






class ElectricityService extends _interfaces_iot_electricity__WEBPACK_IMPORTED_MODULE_2__["ElectricityData"] {
    constructor(api) {
        super();
        this.api = api;
    }
    getListData(yearsCount) {
        return this.api.getList(yearsCount)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => data.map((item, index) => {
            return {
                title: item.year,
                active: index === 0,
                currency: item.currency,
                unitOfMeasure: item.unitOfMeasure,
                months: item.data.map(x => {
                    return {
                        month: x.month,
                        delta: x.trend,
                        down: x.trend < 0,
                        kWatts: x.consumedValue,
                        cost: x.spentMoneyValue,
                    };
                }),
            };
        })));
    }
    getChartData(period) {
        return this.api.getListAggregated(period)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => {
            return {
                chart: {
                    axisXLabels: data.axisXLabels,
                    linesData: data.lines.map(item => item.values),
                    chartLabel: data.chartLabel,
                    legend: data.lines.map(item => item.type),
                },
                consumed: {
                    title: data.summaryInfo.consumedValue.unitOfMeasure,
                    value: data.summaryInfo.consumedValue.value,
                },
                spent: {
                    title: data.summaryInfo.spentValue.unitOfMeasure,
                    value: data.summaryInfo.spentValue.value,
                },
            };
        }));
    }
}
ElectricityService.ɵfac = function ElectricityService_Factory(t) { return new (t || ElectricityService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_energy_aggregated_api__WEBPACK_IMPORTED_MODULE_3__["EnergyAggregatedApi"])); };
ElectricityService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ElectricityService, factory: ElectricityService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ElectricityService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _api_energy_aggregated_api__WEBPACK_IMPORTED_MODULE_3__["EnergyAggregatedApi"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@core/backend/iot/services/phone.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/@core/backend/iot/services/phone.service.ts ***!
  \*************************************************************/
/*! exports provided: PhoneService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneService", function() { return PhoneService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _interfaces_iot_phone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../interfaces/iot/phone */ "./src/app/@core/interfaces/iot/phone.ts");
/* harmony import */ var _api_phone_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/phone.api */ "./src/app/@core/backend/iot/api/phone.api.ts");






class PhoneService extends _interfaces_iot_phone__WEBPACK_IMPORTED_MODULE_2__["PhoneData"] {
    constructor(phoneApi) {
        super();
        this.phoneApi = phoneApi;
    }
    getContacts() {
        return this.phoneApi.getContacts()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => data.map(item => {
            return {
                type: item.numberType,
                name: `${item.firstName} ${item.lastName}`,
                picture: item.picture,
            };
        })));
    }
    getRecentUsers() {
        return this.phoneApi.getRecentCalls()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => data.map(item => {
            return {
                type: item.contact.numberType,
                time: item.dateOfCall,
                name: `${item.contact.firstName} ${item.contact.lastName}`,
                picture: item.picture,
            };
        })));
    }
}
PhoneService.ɵfac = function PhoneService_Factory(t) { return new (t || PhoneService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_phone_api__WEBPACK_IMPORTED_MODULE_3__["PhoneApi"])); };
PhoneService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PhoneService, factory: PhoneService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhoneService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _api_phone_api__WEBPACK_IMPORTED_MODULE_3__["PhoneApi"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@core/backend/iot/services/solar.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/@core/backend/iot/services/solar.service.ts ***!
  \*************************************************************/
/*! exports provided: SolarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolarService", function() { return SolarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _interfaces_iot_solar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../interfaces/iot/solar */ "./src/app/@core/interfaces/iot/solar.ts");
/* harmony import */ var _api_energy_aggregated_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/energy-aggregated.api */ "./src/app/@core/backend/iot/api/energy-aggregated.api.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */





class SolarService extends _interfaces_iot_solar__WEBPACK_IMPORTED_MODULE_1__["SolarData"] {
    constructor(api) {
        super();
        this.api = api;
    }
    getSolarData() {
        return this.api.getSolar();
    }
}
SolarService.ɵfac = function SolarService_Factory(t) { return new (t || SolarService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_energy_aggregated_api__WEBPACK_IMPORTED_MODULE_2__["EnergyAggregatedApi"])); };
SolarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SolarService, factory: SolarService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SolarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _api_energy_aggregated_api__WEBPACK_IMPORTED_MODULE_2__["EnergyAggregatedApi"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@core/backend/iot/services/temperature-humidity.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/@core/backend/iot/services/temperature-humidity.service.ts ***!
  \****************************************************************************/
/*! exports provided: TemperatureHumidityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemperatureHumidityService", function() { return TemperatureHumidityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _interfaces_iot_temperature_humidity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../interfaces/iot/temperature-humidity */ "./src/app/@core/interfaces/iot/temperature-humidity.ts");
/* harmony import */ var _api_devices_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/devices.api */ "./src/app/@core/backend/iot/api/devices.api.ts");
/* harmony import */ var _api_device_parameters_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/device-parameters.api */ "./src/app/@core/backend/iot/api/device-parameters.api.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */








class TemperatureHumidityService extends _interfaces_iot_temperature_humidity__WEBPACK_IMPORTED_MODULE_2__["TemperatureHumidityData"] {
    constructor(deviceApi, parametersApi) {
        super();
        this.deviceApi = deviceApi;
        this.parametersApi = parametersApi;
        this.conditionerId = 5;
        this.humidifierId = 6;
        this.temperatureParameterName = 'Temperature';
        this.humidityParameterName = 'Humidity';
    }
    getTemperatureDevice() {
        return this.deviceApi.get(this.conditionerId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => this.prepareTemperatureDevice(data)));
    }
    getHumidityDevice() {
        return this.deviceApi.get(this.humidifierId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => this.prepareHumidityDevice(data)));
    }
    setTemperatureDevice(device) {
        return this.deviceApi.edit(device)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => this.prepareTemperatureDevice(data)));
    }
    setHumidityDevice(device) {
        return this.deviceApi.edit(device)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => this.prepareHumidityDevice(data)));
    }
    setTemperatureParameter(parameter) {
        return this.parametersApi.edit(this.conditionerId, parameter)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => {
            return Object.assign(Object.assign({}, data), { min: 12, max: 30 });
        }));
    }
    setHumidityParameter(parameter) {
        return this.parametersApi.edit(this.humidifierId, parameter)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => {
            return Object.assign(Object.assign({}, data), { min: 0, max: 100 });
        }));
    }
    prepareTemperatureDevice(data) {
        const index = data.parameters.indexOf(data.parameters.find(p => p.name === this.temperatureParameterName));
        data.parameters[index] = Object.assign(Object.assign({}, data.parameters[index]), { min: 12, max: 30 });
        return data;
    }
    prepareHumidityDevice(data) {
        const index = data.parameters.indexOf(data.parameters.find(p => p.name === this.humidityParameterName));
        data.parameters[index] = Object.assign(Object.assign({}, data.parameters[index]), { min: 0, max: 100 });
        return data;
    }
}
TemperatureHumidityService.ɵfac = function TemperatureHumidityService_Factory(t) { return new (t || TemperatureHumidityService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_devices_api__WEBPACK_IMPORTED_MODULE_3__["DevicesApi"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_device_parameters_api__WEBPACK_IMPORTED_MODULE_4__["DeviceParametersApi"])); };
TemperatureHumidityService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TemperatureHumidityService, factory: TemperatureHumidityService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TemperatureHumidityService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _api_devices_api__WEBPACK_IMPORTED_MODULE_3__["DevicesApi"] }, { type: _api_device_parameters_api__WEBPACK_IMPORTED_MODULE_4__["DeviceParametersApi"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@core/backend/iot/services/traffic-chart.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/@core/backend/iot/services/traffic-chart.service.ts ***!
  \*********************************************************************/
/*! exports provided: TrafficChartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrafficChartService", function() { return TrafficChartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _interfaces_iot_traffic_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../interfaces/iot/traffic-chart */ "./src/app/@core/interfaces/iot/traffic-chart.ts");
/* harmony import */ var _api_traffic_aggregated_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/traffic-aggregated.api */ "./src/app/@core/backend/iot/api/traffic-aggregated.api.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */






class TrafficChartService extends _interfaces_iot_traffic_chart__WEBPACK_IMPORTED_MODULE_2__["TrafficChartData"] {
    constructor(api) {
        super();
        this.api = api;
    }
    getTrafficChartData(period) {
        return this.api.getTraffic(period)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => data.lines[0].values));
    }
}
TrafficChartService.ɵfac = function TrafficChartService_Factory(t) { return new (t || TrafficChartService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_traffic_aggregated_api__WEBPACK_IMPORTED_MODULE_3__["TrafficAggregatedApi"])); };
TrafficChartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TrafficChartService, factory: TrafficChartService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrafficChartService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _api_traffic_aggregated_api__WEBPACK_IMPORTED_MODULE_3__["TrafficAggregatedApi"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@core/core.module.ts":
/*!**************************************!*\
  !*** ./src/app/@core/core.module.ts ***!
  \**************************************/
/*! exports provided: NB_CORE_PROVIDERS, CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NB_CORE_PROVIDERS", function() { return NB_CORE_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/auth */ "./node_modules/@nebular/auth/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _module_import_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module-import-guard */ "./src/app/@core/module-import-guard.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./src/app/@core/utils/index.ts");
/* harmony import */ var _backend_common_common_backend_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./backend/common/common-backend.module */ "./src/app/@core/backend/common/common-backend.module.ts");
/* harmony import */ var _backend_iot_iot_backend_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./backend/iot/iot-backend.module */ "./src/app/@core/backend/iot/iot-backend.module.ts");
/* harmony import */ var _backend_ecommerce_ecommerce_backend_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./backend/ecommerce/ecommerce-backend.module */ "./src/app/@core/backend/ecommerce/ecommerce-backend.module.ts");
/* harmony import */ var _mock_common_common_mock_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mock/common/common-mock.module */ "./src/app/@core/mock/common/common-mock.module.ts");
/* harmony import */ var _mock_iot_iot_mock_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mock/iot/iot-mock.module */ "./src/app/@core/mock/iot/iot-mock.module.ts");
/* harmony import */ var _mock_ecommerce_ecommerce_mock_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mock/ecommerce/ecommerce-mock.module */ "./src/app/@core/mock/ecommerce/ecommerce-mock.module.ts");
/* harmony import */ var _stores_user_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./stores/user.store */ "./src/app/@core/stores/user.store.ts");
/* harmony import */ var _backend_common_services_users_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./backend/common/services/users.service */ "./src/app/@core/backend/common/services/users.service.ts");
/* harmony import */ var _backend_common_services_settings_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./backend/common/services/settings.service */ "./src/app/@core/backend/common/services/settings.service.ts");
/* harmony import */ var _theme_services_init_user_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../@theme/services/init-user.service */ "./src/app/@theme/services/init-user.service.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */
















const NB_CORE_PROVIDERS = [
    ..._mock_common_common_mock_module__WEBPACK_IMPORTED_MODULE_8__["CommonMockModule"].forRoot().providers,
    ..._backend_common_common_backend_module__WEBPACK_IMPORTED_MODULE_5__["CommonBackendModule"].forRoot().providers,
    ..._mock_ecommerce_ecommerce_mock_module__WEBPACK_IMPORTED_MODULE_10__["EcommerceMockModule"].forRoot().providers,
    ..._backend_ecommerce_ecommerce_backend_module__WEBPACK_IMPORTED_MODULE_7__["EcommerceBackendModule"].forRoot().providers,
    ..._mock_iot_iot_mock_module__WEBPACK_IMPORTED_MODULE_9__["IotMockModule"].forRoot().providers,
    ..._backend_iot_iot_backend_module__WEBPACK_IMPORTED_MODULE_6__["IotBackendModule"].forRoot().providers,
    _utils__WEBPACK_IMPORTED_MODULE_4__["AnalyticsService"],
    _utils__WEBPACK_IMPORTED_MODULE_4__["LayoutService"],
    _utils__WEBPACK_IMPORTED_MODULE_4__["PlayerService"],
    _utils__WEBPACK_IMPORTED_MODULE_4__["StateService"],
];
class CoreModule {
    constructor(parentModule) {
        Object(_module_import_guard__WEBPACK_IMPORTED_MODULE_3__["throwIfAlreadyLoaded"])(parentModule, 'CoreModule');
    }
    static forRoot() {
        return {
            ngModule: CoreModule,
            providers: [
                ...NB_CORE_PROVIDERS,
                _stores_user_store__WEBPACK_IMPORTED_MODULE_11__["UserStore"],
                _backend_common_services_users_service__WEBPACK_IMPORTED_MODULE_12__["UsersService"],
                _theme_services_init_user_service__WEBPACK_IMPORTED_MODULE_14__["InitUserService"],
                _backend_common_services_settings_service__WEBPACK_IMPORTED_MODULE_13__["SettingsService"],
            ],
        };
    }
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](CoreModule, 12)); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ],
        _nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbAuthModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbAuthModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ],
                exports: [
                    _nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbAuthModule"],
                ],
                declarations: [],
            }]
    }], function () { return [{ type: CoreModule, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/@core/interfaces/common/countries.ts":
/*!******************************************************!*\
  !*** ./src/app/@core/interfaces/common/countries.ts ***!
  \******************************************************/
/*! exports provided: CountryData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryData", function() { return CountryData; });
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */
class CountryData {
}


/***/ }),

/***/ "./src/app/@core/interfaces/common/settings.ts":
/*!*****************************************************!*\
  !*** ./src/app/@core/interfaces/common/settings.ts ***!
  \*****************************************************/
/*! exports provided: SettingsData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsData", function() { return SettingsData; });
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */
class SettingsData {
}


/***/ }),

/***/ "./src/app/@core/interfaces/common/smart-table.ts":
/*!********************************************************!*\
  !*** ./src/app/@core/interfaces/common/smart-table.ts ***!
  \********************************************************/
/*! exports provided: SmartTableData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartTableData", function() { return SmartTableData; });
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */
class SmartTableData {
}


/***/ }),

/***/ "./src/app/@core/interfaces/common/users.ts":
/*!**************************************************!*\
  !*** ./src/app/@core/interfaces/common/users.ts ***!
  \**************************************************/
/*! exports provided: UserData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserData", function() { return UserData; });
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */
class UserData {
}


/***/ }),

/***/ "./src/app/@core/interfaces/ecommerce/country-order.ts":
/*!*************************************************************!*\
  !*** ./src/app/@core/interfaces/ecommerce/country-order.ts ***!
  \*************************************************************/
/*! exports provided: CountryOrderData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryOrderData", function() { return CountryOrderData; });
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */
class CountryOrderData {
}


/***/ }),

/***/ "./src/app/@core/interfaces/ecommerce/earning.ts":
/*!*******************************************************!*\
  !*** ./src/app/@core/interfaces/ecommerce/earning.ts ***!
  \*******************************************************/
/*! exports provided: EarningData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EarningData", function() { return EarningData; });
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */
class EarningData {
}


/***/ }),

/***/ "./src/app/@core/interfaces/ecommerce/order-status.ts":
/*!************************************************************!*\
  !*** ./src/app/@core/interfaces/ecommerce/order-status.ts ***!
  \************************************************************/
/*! exports provided: OrderStatusData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderStatusData", function() { return OrderStatusData; });
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */
class OrderStatusData {
}


/***/ }),

/***/ "./src/app/@core/interfaces/ecommerce/order-type.ts":
/*!**********************************************************!*\
  !*** ./src/app/@core/interfaces/ecommerce/order-type.ts ***!
  \**********************************************************/
/*! exports provided: OrderTypeData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderTypeData", function() { return OrderTypeData; });
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */
class OrderTypeData {
}


/***/ }),

/***/ "./src/app/@core/interfaces/ecommerce/orders-profit-chart.ts":
/*!*******************************************************************!*\
  !*** ./src/app/@core/interfaces/ecommerce/orders-profit-chart.ts ***!
  \*******************************************************************/
/*! exports provided: OrdersProfitChartData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersProfitChartData", function() { return OrdersProfitChartData; });
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */
class OrdersProfitChartData {
}


/***/ }),

/***/ "./src/app/@core/interfaces/ecommerce/orders.ts":
/*!******************************************************!*\
  !*** ./src/app/@core/interfaces/ecommerce/orders.ts ***!
  \******************************************************/
/*! exports provided: OrderData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderData", function() { return OrderData; });
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */
class OrderData {
}


/***/ }),

/***/ "./src/app/@core/interfaces/ecommerce/profit-bar-animation-chart.ts":
/*!**************************************************************************!*\
  !*** ./src/app/@core/interfaces/ecommerce/profit-bar-animation-chart.ts ***!
  \**************************************************************************/
/*! exports provided: ProfitBarAnimationChartData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfitBarAnimationChartData", function() { return ProfitBarAnimationChartData; });
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */
class ProfitBarAnimationChartData {
}


/***/ }),

/***/ "./src/app/@core/interfaces/ecommerce/stats-bar.ts":
/*!*********************************************************!*\
  !*** ./src/app/@core/interfaces/ecommerce/stats-bar.ts ***!
  \*********************************************************/
/*! exports provided: StatsBarData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsBarData", function() { return StatsBarData; });
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */
class StatsBarData {
}


/***/ }),

/***/ "./src/app/@core/interfaces/ecommerce/stats-progress-bar.ts":
/*!******************************************************************!*\
  !*** ./src/app/@core/interfaces/ecommerce/stats-progress-bar.ts ***!
  \******************************************************************/
/*! exports provided: StatsProgressBarData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsProgressBarData", function() { return StatsProgressBarData; });
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */
class StatsProgressBarData {
}


/***/ }),

/***/ "./src/app/@core/interfaces/ecommerce/traffic-list.ts":
/*!************************************************************!*\
  !*** ./src/app/@core/interfaces/ecommerce/traffic-list.ts ***!
  \************************************************************/
/*! exports provided: TrafficListData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrafficListData", function() { return TrafficListData; });
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */
class TrafficListData {
}


/***/ }),

/***/ "./src/app/@core/interfaces/ecommerce/user-activity.ts":
/*!*************************************************************!*\
  !*** ./src/app/@core/interfaces/ecommerce/user-activity.ts ***!
  \*************************************************************/
/*! exports provided: UserActivityData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserActivityData", function() { return UserActivityData; });
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */
class UserActivityData {
}


/***/ }),

/***/ "./src/app/@core/interfaces/ecommerce/visitors-analytics.ts":
/*!******************************************************************!*\
  !*** ./src/app/@core/interfaces/ecommerce/visitors-analytics.ts ***!
  \******************************************************************/
/*! exports provided: VisitorsAnalyticsData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorsAnalyticsData", function() { return VisitorsAnalyticsData; });
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */
class VisitorsAnalyticsData {
}


/***/ }),

/***/ "./src/app/@core/interfaces/iot/devices.ts":
/*!*************************************************!*\
  !*** ./src/app/@core/interfaces/iot/devices.ts ***!
  \*************************************************/
/*! exports provided: DevicesData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicesData", function() { return DevicesData; });
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */
class DevicesData {
}


/***/ }),

/***/ "./src/app/@core/interfaces/iot/electricity.ts":
/*!*****************************************************!*\
  !*** ./src/app/@core/interfaces/iot/electricity.ts ***!
  \*****************************************************/
/*! exports provided: ElectricityData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElectricityData", function() { return ElectricityData; });
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */
class ElectricityData {
}


/***/ }),

/***/ "./src/app/@core/interfaces/iot/phone.ts":
/*!***********************************************!*\
  !*** ./src/app/@core/interfaces/iot/phone.ts ***!
  \***********************************************/
/*! exports provided: PhoneData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneData", function() { return PhoneData; });
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */
class PhoneData {
}


/***/ }),

/***/ "./src/app/@core/interfaces/iot/security-cameras.ts":
/*!**********************************************************!*\
  !*** ./src/app/@core/interfaces/iot/security-cameras.ts ***!
  \**********************************************************/
/*! exports provided: SecurityCamerasData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityCamerasData", function() { return SecurityCamerasData; });
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */
class SecurityCamerasData {
}


/***/ }),

/***/ "./src/app/@core/interfaces/iot/solar.ts":
/*!***********************************************!*\
  !*** ./src/app/@core/interfaces/iot/solar.ts ***!
  \***********************************************/
/*! exports provided: SolarData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolarData", function() { return SolarData; });
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */
class SolarData {
}


/***/ }),

/***/ "./src/app/@core/interfaces/iot/temperature-humidity.ts":
/*!**************************************************************!*\
  !*** ./src/app/@core/interfaces/iot/temperature-humidity.ts ***!
  \**************************************************************/
/*! exports provided: TemperatureHumidityData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemperatureHumidityData", function() { return TemperatureHumidityData; });
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */
class TemperatureHumidityData {
}


/***/ }),

/***/ "./src/app/@core/interfaces/iot/traffic-chart.ts":
/*!*******************************************************!*\
  !*** ./src/app/@core/interfaces/iot/traffic-chart.ts ***!
  \*******************************************************/
/*! exports provided: TrafficChartData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrafficChartData", function() { return TrafficChartData; });
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */
class TrafficChartData {
}


/***/ }),

/***/ "./src/app/@core/mock/common/common-mock.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/@core/mock/common/common-mock.module.ts ***!
  \*********************************************************/
/*! exports provided: CommonMockModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonMockModule", function() { return CommonMockModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _interfaces_common_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interfaces/common/users */ "./src/app/@core/interfaces/common/users.ts");
/* harmony import */ var _interfaces_common_smart_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../interfaces/common/smart-table */ "./src/app/@core/interfaces/common/smart-table.ts");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users.service */ "./src/app/@core/mock/common/users.service.ts");
/* harmony import */ var _smart_table_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./smart-table.service */ "./src/app/@core/mock/common/smart-table.service.ts");
/* harmony import */ var _periods_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./periods.service */ "./src/app/@core/mock/common/periods.service.ts");
/* harmony import */ var _interfaces_common_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../interfaces/common/settings */ "./src/app/@core/interfaces/common/settings.ts");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./settings.service */ "./src/app/@core/mock/common/settings.service.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */










const SERVICES = [
    { provide: _interfaces_common_users__WEBPACK_IMPORTED_MODULE_2__["UserData"], useClass: _users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"] },
    { provide: _interfaces_common_smart_table__WEBPACK_IMPORTED_MODULE_3__["SmartTableData"], useClass: _smart_table_service__WEBPACK_IMPORTED_MODULE_5__["SmartTableService"] },
    { provide: _periods_service__WEBPACK_IMPORTED_MODULE_6__["PeriodsService"], useClass: _periods_service__WEBPACK_IMPORTED_MODULE_6__["PeriodsService"] },
    { provide: _interfaces_common_settings__WEBPACK_IMPORTED_MODULE_7__["SettingsData"], useClass: _settings_service__WEBPACK_IMPORTED_MODULE_8__["SettingsService"] },
];
class CommonMockModule {
    static forRoot() {
        return {
            ngModule: CommonMockModule,
            providers: [
                ...SERVICES,
            ],
        };
    }
}
CommonMockModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CommonMockModule });
CommonMockModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CommonMockModule_Factory(t) { return new (t || CommonMockModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CommonMockModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonMockModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/@core/mock/common/periods.service.ts":
/*!******************************************************!*\
  !*** ./src/app/@core/mock/common/periods.service.ts ***!
  \******************************************************/
/*! exports provided: PeriodsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeriodsService", function() { return PeriodsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */


class PeriodsService {
    getYears() {
        return [
            '2010', '2011', '2012',
            '2013', '2014', '2015',
            '2016', '2017', '2018',
        ];
    }
    getMonths() {
        return [
            'Jan', 'Feb', 'Mar',
            'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep',
            'Oct', 'Nov', 'Dec',
        ];
    }
    getWeeks() {
        return [
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat',
            'Sun',
        ];
    }
}
PeriodsService.ɵfac = function PeriodsService_Factory(t) { return new (t || PeriodsService)(); };
PeriodsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PeriodsService, factory: PeriodsService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PeriodsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/@core/mock/common/settings.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/@core/mock/common/settings.service.ts ***!
  \*******************************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _interfaces_common_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interfaces/common/settings */ "./src/app/@core/interfaces/common/settings.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */




class SettingsService extends _interfaces_common_settings__WEBPACK_IMPORTED_MODULE_2__["SettingsData"] {
    getCurrentSetting() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({
            themeName: 'cosmic',
        });
    }
    updateCurrent(setting) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({
            themeName: 'corporate',
        });
    }
}
SettingsService.ɵfac = function SettingsService_Factory(t) { return ɵSettingsService_BaseFactory(t || SettingsService); };
SettingsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SettingsService, factory: SettingsService.ɵfac });
const ɵSettingsService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](SettingsService);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/@core/mock/common/smart-table.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/@core/mock/common/smart-table.service.ts ***!
  \**********************************************************/
/*! exports provided: SmartTableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartTableService", function() { return SmartTableService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _interfaces_common_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../interfaces/common/smart-table */ "./src/app/@core/interfaces/common/smart-table.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */



class SmartTableService extends _interfaces_common_smart_table__WEBPACK_IMPORTED_MODULE_1__["SmartTableData"] {
    constructor() {
        super(...arguments);
        this.data = [{
                id: 1,
                firstName: 'Mark',
                lastName: 'Otto',
                login: '@mdo',
                email: 'mdo@gmail.com',
                age: '28',
            }, {
                id: 2,
                firstName: 'Jacob',
                lastName: 'Thornton',
                login: '@fat',
                email: 'fat@yandex.ru',
                age: '45',
            }, {
                id: 3,
                firstName: 'Larry',
                lastName: 'Bird',
                login: '@twitter',
                email: 'twitter@outlook.com',
                age: '18',
            }, {
                id: 4,
                firstName: 'John',
                lastName: 'Snow',
                login: '@snow',
                email: 'snow@gmail.com',
                age: '20',
            }, {
                id: 5,
                firstName: 'Jack',
                lastName: 'Sparrow',
                login: '@jack',
                email: 'jack@yandex.ru',
                age: '30',
            }, {
                id: 6,
                firstName: 'Ann',
                lastName: 'Smith',
                login: '@ann',
                email: 'ann@gmail.com',
                age: '21',
            }, {
                id: 7,
                firstName: 'Barbara',
                lastName: 'Black',
                login: '@barbara',
                email: 'barbara@yandex.ru',
                age: '43',
            }, {
                id: 8,
                firstName: 'Sevan',
                lastName: 'Bagrat',
                login: '@sevan',
                email: 'sevan@outlook.com',
                age: '13',
            }, {
                id: 9,
                firstName: 'Ruben',
                lastName: 'Vardan',
                login: '@ruben',
                email: 'ruben@gmail.com',
                age: '22',
            }, {
                id: 10,
                firstName: 'Karen',
                lastName: 'Sevan',
                login: '@karen',
                email: 'karen@yandex.ru',
                age: '33',
            }, {
                id: 11,
                firstName: 'Mark',
                lastName: 'Otto',
                login: '@mark',
                email: 'mark@gmail.com',
                age: '38',
            }, {
                id: 12,
                firstName: 'Jacob',
                lastName: 'Thornton',
                login: '@jacob',
                email: 'jacob@yandex.ru',
                age: '48',
            }, {
                id: 13,
                firstName: 'Haik',
                lastName: 'Hakob',
                login: '@haik',
                email: 'haik@outlook.com',
                age: '48',
            }, {
                id: 14,
                firstName: 'Garegin',
                lastName: 'Jirair',
                login: '@garegin',
                email: 'garegin@gmail.com',
                age: '40',
            }, {
                id: 15,
                firstName: 'Krikor',
                lastName: 'Bedros',
                login: '@krikor',
                email: 'krikor@yandex.ru',
                age: '32',
            }, {
                'id': 16,
                'firstName': 'Francisca',
                'lastName': 'Brady',
                'login': '@Gibson',
                'email': 'franciscagibson@comtours.com',
                'age': 11,
            }, {
                'id': 17,
                'firstName': 'Tillman',
                'lastName': 'Figueroa',
                'login': '@Snow',
                'email': 'tillmansnow@comtours.com',
                'age': 34,
            }, {
                'id': 18,
                'firstName': 'Jimenez',
                'lastName': 'Morris',
                'login': '@Bryant',
                'email': 'jimenezbryant@comtours.com',
                'age': 45,
            }, {
                'id': 19,
                'firstName': 'Sandoval',
                'lastName': 'Jacobson',
                'login': '@Mcbride',
                'email': 'sandovalmcbride@comtours.com',
                'age': 32,
            }, {
                'id': 20,
                'firstName': 'Griffin',
                'lastName': 'Torres',
                'login': '@Charles',
                'email': 'griffincharles@comtours.com',
                'age': 19,
            }, {
                'id': 21,
                'firstName': 'Cora',
                'lastName': 'Parker',
                'login': '@Caldwell',
                'email': 'coracaldwell@comtours.com',
                'age': 27,
            }, {
                'id': 22,
                'firstName': 'Cindy',
                'lastName': 'Bond',
                'login': '@Velez',
                'email': 'cindyvelez@comtours.com',
                'age': 24,
            }, {
                'id': 23,
                'firstName': 'Frieda',
                'lastName': 'Tyson',
                'login': '@Craig',
                'email': 'friedacraig@comtours.com',
                'age': 45,
            }, {
                'id': 24,
                'firstName': 'Cote',
                'lastName': 'Holcomb',
                'login': '@Rowe',
                'email': 'coterowe@comtours.com',
                'age': 20,
            }, {
                'id': 25,
                'firstName': 'Trujillo',
                'lastName': 'Mejia',
                'login': '@Valenzuela',
                'email': 'trujillovalenzuela@comtours.com',
                'age': 16,
            }, {
                'id': 26,
                'firstName': 'Pruitt',
                'lastName': 'Shepard',
                'login': '@Sloan',
                'email': 'pruittsloan@comtours.com',
                'age': 44,
            }, {
                'id': 27,
                'firstName': 'Sutton',
                'lastName': 'Ortega',
                'login': '@Black',
                'email': 'suttonblack@comtours.com',
                'age': 42,
            }, {
                'id': 28,
                'firstName': 'Marion',
                'lastName': 'Heath',
                'login': '@Espinoza',
                'email': 'marionespinoza@comtours.com',
                'age': 47,
            }, {
                'id': 29,
                'firstName': 'Newman',
                'lastName': 'Hicks',
                'login': '@Keith',
                'email': 'newmankeith@comtours.com',
                'age': 15,
            }, {
                'id': 30,
                'firstName': 'Boyle',
                'lastName': 'Larson',
                'login': '@Summers',
                'email': 'boylesummers@comtours.com',
                'age': 32,
            }, {
                'id': 31,
                'firstName': 'Haynes',
                'lastName': 'Vinson',
                'login': '@Mckenzie',
                'email': 'haynesmckenzie@comtours.com',
                'age': 15,
            }, {
                'id': 32,
                'firstName': 'Miller',
                'lastName': 'Acosta',
                'login': '@Young',
                'email': 'milleryoung@comtours.com',
                'age': 55,
            }, {
                'id': 33,
                'firstName': 'Johnston',
                'lastName': 'Brown',
                'login': '@Knight',
                'email': 'johnstonknight@comtours.com',
                'age': 29,
            }, {
                'id': 34,
                'firstName': 'Lena',
                'lastName': 'Pitts',
                'login': '@Forbes',
                'email': 'lenaforbes@comtours.com',
                'age': 25,
            }, {
                'id': 35,
                'firstName': 'Terrie',
                'lastName': 'Kennedy',
                'login': '@Branch',
                'email': 'terriebranch@comtours.com',
                'age': 37,
            }, {
                'id': 36,
                'firstName': 'Louise',
                'lastName': 'Aguirre',
                'login': '@Kirby',
                'email': 'louisekirby@comtours.com',
                'age': 44,
            }, {
                'id': 37,
                'firstName': 'David',
                'lastName': 'Patton',
                'login': '@Sanders',
                'email': 'davidsanders@comtours.com',
                'age': 26,
            }, {
                'id': 38,
                'firstName': 'Holden',
                'lastName': 'Barlow',
                'login': '@Mckinney',
                'email': 'holdenmckinney@comtours.com',
                'age': 11,
            }, {
                'id': 39,
                'firstName': 'Baker',
                'lastName': 'Rivera',
                'login': '@Montoya',
                'email': 'bakermontoya@comtours.com',
                'age': 47,
            }, {
                'id': 40,
                'firstName': 'Belinda',
                'lastName': 'Lloyd',
                'login': '@Calderon',
                'email': 'belindacalderon@comtours.com',
                'age': 21,
            }, {
                'id': 41,
                'firstName': 'Pearson',
                'lastName': 'Patrick',
                'login': '@Clements',
                'email': 'pearsonclements@comtours.com',
                'age': 42,
            }, {
                'id': 42,
                'firstName': 'Alyce',
                'lastName': 'Mckee',
                'login': '@Daugherty',
                'email': 'alycedaugherty@comtours.com',
                'age': 55,
            }, {
                'id': 43,
                'firstName': 'Valencia',
                'lastName': 'Spence',
                'login': '@Olsen',
                'email': 'valenciaolsen@comtours.com',
                'age': 20,
            }, {
                'id': 44,
                'firstName': 'Leach',
                'lastName': 'Holcomb',
                'login': '@Humphrey',
                'email': 'leachhumphrey@comtours.com',
                'age': 28,
            }, {
                'id': 45,
                'firstName': 'Moss',
                'lastName': 'Baxter',
                'login': '@Fitzpatrick',
                'email': 'mossfitzpatrick@comtours.com',
                'age': 51,
            }, {
                'id': 46,
                'firstName': 'Jeanne',
                'lastName': 'Cooke',
                'login': '@Ward',
                'email': 'jeanneward@comtours.com',
                'age': 59,
            }, {
                'id': 47,
                'firstName': 'Wilma',
                'lastName': 'Briggs',
                'login': '@Kidd',
                'email': 'wilmakidd@comtours.com',
                'age': 53,
            }, {
                'id': 48,
                'firstName': 'Beatrice',
                'lastName': 'Perry',
                'login': '@Gilbert',
                'email': 'beatricegilbert@comtours.com',
                'age': 39,
            }, {
                'id': 49,
                'firstName': 'Whitaker',
                'lastName': 'Hyde',
                'login': '@Mcdonald',
                'email': 'whitakermcdonald@comtours.com',
                'age': 35,
            }, {
                'id': 50,
                'firstName': 'Rebekah',
                'lastName': 'Duran',
                'login': '@Gross',
                'email': 'rebekahgross@comtours.com',
                'age': 40,
            }, {
                'id': 51,
                'firstName': 'Earline',
                'lastName': 'Mayer',
                'login': '@Woodward',
                'email': 'earlinewoodward@comtours.com',
                'age': 52,
            }, {
                'id': 52,
                'firstName': 'Moran',
                'lastName': 'Baxter',
                'login': '@Johns',
                'email': 'moranjohns@comtours.com',
                'age': 20,
            }, {
                'id': 53,
                'firstName': 'Nanette',
                'lastName': 'Hubbard',
                'login': '@Cooke',
                'email': 'nanettecooke@comtours.com',
                'age': 55,
            }, {
                'id': 54,
                'firstName': 'Dalton',
                'lastName': 'Walker',
                'login': '@Hendricks',
                'email': 'daltonhendricks@comtours.com',
                'age': 25,
            }, {
                'id': 55,
                'firstName': 'Bennett',
                'lastName': 'Blake',
                'login': '@Pena',
                'email': 'bennettpena@comtours.com',
                'age': 13,
            }, {
                'id': 56,
                'firstName': 'Kellie',
                'lastName': 'Horton',
                'login': '@Weiss',
                'email': 'kellieweiss@comtours.com',
                'age': 48,
            }, {
                'id': 57,
                'firstName': 'Hobbs',
                'lastName': 'Talley',
                'login': '@Sanford',
                'email': 'hobbssanford@comtours.com',
                'age': 28,
            }, {
                'id': 58,
                'firstName': 'Mcguire',
                'lastName': 'Donaldson',
                'login': '@Roman',
                'email': 'mcguireroman@comtours.com',
                'age': 38,
            }, {
                'id': 59,
                'firstName': 'Rodriquez',
                'lastName': 'Saunders',
                'login': '@Harper',
                'email': 'rodriquezharper@comtours.com',
                'age': 20,
            }, {
                'id': 60,
                'firstName': 'Lou',
                'lastName': 'Conner',
                'login': '@Sanchez',
                'email': 'lousanchez@comtours.com',
                'age': 16,
            }];
    }
    getData() {
        return this.data;
    }
}
SmartTableService.ɵfac = function SmartTableService_Factory(t) { return ɵSmartTableService_BaseFactory(t || SmartTableService); };
SmartTableService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SmartTableService, factory: SmartTableService.ɵfac });
const ɵSmartTableService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](SmartTableService);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SmartTableService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/@core/mock/common/users.service.ts":
/*!****************************************************!*\
  !*** ./src/app/@core/mock/common/users.service.ts ***!
  \****************************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _interfaces_common_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interfaces/common/users */ "./src/app/@core/interfaces/common/users.ts");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/__ivy_ngcc__/fesm2015/ng2-smart-table.js");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */





class UsersService extends _interfaces_common_users__WEBPACK_IMPORTED_MODULE_2__["UserData"] {
    constructor() {
        super(...arguments);
        this.data = [
            {
                id: 1,
                role: 'user',
                firstName: 'Mark',
                lastName: 'Walmart',
                login: '@mdo',
                email: 'mdo@gmail.com',
                age: 0,
                states: 1,
                licens_id: 12,
                picture: '',
                address: {
                    street: 'Wall St.',
                    city: 'New York',
                    zipCode: '10005',
                },
                settings: {
                    themeName: 'cosmic',
                },
            },
            {
                id: 2,
                role: 'user',
                firstName: 'Jacob',
                lastName: 'Cuba',
                login: '@mdo',
                email: 'mdo@gmail.com',
                age: 0,
                states: 1,
                licens_id: 13,
                picture: '',
                address: {
                    street: 'Wall St.',
                    city: 'New York',
                    zipCode: '10005',
                },
                settings: {
                    themeName: 'cosmic',
                },
            },
            {
                id: 3,
                role: 'user',
                firstName: 'Larry',
                lastName: 'Page',
                login: '@twitter',
                email: 'twitter@outlook.com',
                age: 0,
                states: 1,
                licens_id: 12,
                picture: '',
                address: {
                    street: 'Wall St.',
                    city: 'New York',
                    zipCode: '10005',
                },
                settings: {
                    themeName: 'cosmic',
                },
            },
            {
                id: 4,
                role: 'user',
                firstName: 'John',
                lastName: 'Snow',
                login: '@snow',
                email: 'snow@gmail.com',
                age: 0,
                states: 1,
                licens_id: 12,
                picture: '',
                address: {
                    street: 'Wall St.',
                    city: 'New York',
                    zipCode: '10005',
                },
                settings: {
                    themeName: 'cosmic',
                },
            }
        ];
    }
    get gridDataSource() {
        return new ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__["LocalDataSource"](this.data);
    }
    getCurrentUser() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.data[0]);
    }
    list(pageNumber = 1, pageSize = 10) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.data);
    }
    get(id) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.data.find(x => x.id === id));
    }
    updateCurrent(user) {
        this.data[0] = user;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(user);
    }
    update(user) {
        const i = this.data.indexOf(this.data.find(x => x.id === user.id));
        if (i >= 0) {
            this.data[i] = user;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(user);
    }
    create(user) {
        user.id = Math.max(...this.data.map(x => x.id)) + 1;
        this.data.push(user);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(user);
    }
    delete(id) {
        this.data = [...this.data.filter(x => x.id !== id)];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])();
    }
}
UsersService.ɵfac = function UsersService_Factory(t) { return ɵUsersService_BaseFactory(t || UsersService); };
UsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UsersService, factory: UsersService.ɵfac });
const ɵUsersService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](UsersService);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UsersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/@core/mock/ecommerce/country-order.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/@core/mock/ecommerce/country-order.service.ts ***!
  \***************************************************************/
/*! exports provided: CountryOrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryOrderService", function() { return CountryOrderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _interfaces_ecommerce_country_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interfaces/ecommerce/country-order */ "./src/app/@core/interfaces/ecommerce/country-order.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */




class CountryOrderService extends _interfaces_ecommerce_country_order__WEBPACK_IMPORTED_MODULE_2__["CountryOrderData"] {
    constructor() {
        super(...arguments);
        this.countriesCategories = [
            'Sofas',
            'Furniture',
            'Lighting',
            'Tables',
            'Textiles',
        ];
        this.countriesCategoriesLength = this.countriesCategories.length;
    }
    generateRandomData(nPoints) {
        return Array.from(Array(nPoints)).map(() => {
            return Math.round(Math.random() * 20);
        });
    }
    getCountriesCategories() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.countriesCategories);
    }
    getCountriesCategoriesData(country) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.generateRandomData(this.countriesCategoriesLength));
    }
}
CountryOrderService.ɵfac = function CountryOrderService_Factory(t) { return ɵCountryOrderService_BaseFactory(t || CountryOrderService); };
CountryOrderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CountryOrderService, factory: CountryOrderService.ɵfac });
const ɵCountryOrderService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](CountryOrderService);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountryOrderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/@core/mock/ecommerce/earning.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/@core/mock/ecommerce/earning.service.ts ***!
  \*********************************************************/
/*! exports provided: EarningService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EarningService", function() { return EarningService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _interfaces_ecommerce_earning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interfaces/ecommerce/earning */ "./src/app/@core/interfaces/ecommerce/earning.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */




class EarningService extends _interfaces_ecommerce_earning__WEBPACK_IMPORTED_MODULE_2__["EarningData"] {
    constructor() {
        super(...arguments);
        this.currentDate = new Date();
        this.currentValue = Math.random() * 1000;
        this.ONE_DAY = 24 * 3600 * 1000;
        this.pieChartData = [
            {
                value: 50,
                name: 'Bitcoin',
            },
            {
                value: 25,
                name: 'Tether',
            },
            {
                value: 25,
                name: 'Ethereum',
            },
        ];
        this.liveUpdateChartData = {
            bitcoin: {
                liveChart: [],
                delta: {
                    up: true,
                    value: 4,
                },
                dailyIncome: 45895,
            },
            tether: {
                liveChart: [],
                delta: {
                    up: false,
                    value: 9,
                },
                dailyIncome: 5862,
            },
            ethereum: {
                liveChart: [],
                delta: {
                    up: false,
                    value: 21,
                },
                dailyIncome: 584,
            },
        };
    }
    getDefaultLiveChartData(elementsNumber) {
        this.currentDate = new Date();
        this.currentValue = Math.random() * 1000;
        return Array.from(Array(elementsNumber))
            .map(item => this.generateRandomLiveChartData());
    }
    generateRandomLiveChartData() {
        this.currentDate = new Date(+this.currentDate + this.ONE_DAY);
        this.currentValue = this.currentValue + Math.random() * 20 - 11;
        if (this.currentValue < 0) {
            this.currentValue = Math.random() * 100;
        }
        return {
            value: [
                [
                    this.currentDate.getFullYear(),
                    this.currentDate.getMonth(),
                    this.currentDate.getDate(),
                ].join('/'),
                Math.round(this.currentValue),
            ],
        };
    }
    getEarningLiveUpdateCardData(currency) {
        const data = this.liveUpdateChartData[currency.toLowerCase()];
        const newValue = this.generateRandomLiveChartData();
        data.liveChart.shift();
        data.liveChart.push(newValue);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(data.liveChart);
    }
    getEarningCardData(currency) {
        const data = this.liveUpdateChartData[currency.toLowerCase()];
        data.liveChart = this.getDefaultLiveChartData(150);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(data);
    }
    getEarningPieChartData() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.pieChartData);
    }
}
EarningService.ɵfac = function EarningService_Factory(t) { return ɵEarningService_BaseFactory(t || EarningService); };
EarningService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EarningService, factory: EarningService.ɵfac });
const ɵEarningService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](EarningService);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EarningService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/@core/mock/ecommerce/ecommerce-mock.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/@core/mock/ecommerce/ecommerce-mock.module.ts ***!
  \***************************************************************/
/*! exports provided: EcommerceMockModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcommerceMockModule", function() { return EcommerceMockModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _common_common_mock_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/common-mock.module */ "./src/app/@core/mock/common/common-mock.module.ts");
/* harmony import */ var _interfaces_ecommerce_country_order__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../interfaces/ecommerce/country-order */ "./src/app/@core/interfaces/ecommerce/country-order.ts");
/* harmony import */ var _interfaces_ecommerce_orders_profit_chart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../interfaces/ecommerce/orders-profit-chart */ "./src/app/@core/interfaces/ecommerce/orders-profit-chart.ts");
/* harmony import */ var _interfaces_ecommerce_profit_bar_animation_chart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../interfaces/ecommerce/profit-bar-animation-chart */ "./src/app/@core/interfaces/ecommerce/profit-bar-animation-chart.ts");
/* harmony import */ var _interfaces_ecommerce_stats_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../interfaces/ecommerce/stats-bar */ "./src/app/@core/interfaces/ecommerce/stats-bar.ts");
/* harmony import */ var _interfaces_ecommerce_stats_progress_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../interfaces/ecommerce/stats-progress-bar */ "./src/app/@core/interfaces/ecommerce/stats-progress-bar.ts");
/* harmony import */ var _interfaces_ecommerce_traffic_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../interfaces/ecommerce/traffic-list */ "./src/app/@core/interfaces/ecommerce/traffic-list.ts");
/* harmony import */ var _interfaces_ecommerce_user_activity__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../interfaces/ecommerce/user-activity */ "./src/app/@core/interfaces/ecommerce/user-activity.ts");
/* harmony import */ var _interfaces_ecommerce_earning__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../interfaces/ecommerce/earning */ "./src/app/@core/interfaces/ecommerce/earning.ts");
/* harmony import */ var _interfaces_ecommerce_visitors_analytics__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../interfaces/ecommerce/visitors-analytics */ "./src/app/@core/interfaces/ecommerce/visitors-analytics.ts");
/* harmony import */ var _country_order_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./country-order.service */ "./src/app/@core/mock/ecommerce/country-order.service.ts");
/* harmony import */ var _orders_profit_chart_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./orders-profit-chart.service */ "./src/app/@core/mock/ecommerce/orders-profit-chart.service.ts");
/* harmony import */ var _profit_bar_animation_chart_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./profit-bar-animation-chart.service */ "./src/app/@core/mock/ecommerce/profit-bar-animation-chart.service.ts");
/* harmony import */ var _stats_bar_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./stats-bar.service */ "./src/app/@core/mock/ecommerce/stats-bar.service.ts");
/* harmony import */ var _stats_progress_bar_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./stats-progress-bar.service */ "./src/app/@core/mock/ecommerce/stats-progress-bar.service.ts");
/* harmony import */ var _traffic_list_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./traffic-list.service */ "./src/app/@core/mock/ecommerce/traffic-list.service.ts");
/* harmony import */ var _user_activity_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./user-activity.service */ "./src/app/@core/mock/ecommerce/user-activity.service.ts");
/* harmony import */ var _earning_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./earning.service */ "./src/app/@core/mock/ecommerce/earning.service.ts");
/* harmony import */ var _orders_chart_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./orders-chart.service */ "./src/app/@core/mock/ecommerce/orders-chart.service.ts");
/* harmony import */ var _profit_chart_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./profit-chart.service */ "./src/app/@core/mock/ecommerce/profit-chart.service.ts");
/* harmony import */ var _visitors_analytics_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./visitors-analytics.service */ "./src/app/@core/mock/ecommerce/visitors-analytics.service.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */
























const SERVICES = [
    { provide: _interfaces_ecommerce_country_order__WEBPACK_IMPORTED_MODULE_3__["CountryOrderData"], useClass: _country_order_service__WEBPACK_IMPORTED_MODULE_12__["CountryOrderService"] },
    { provide: _interfaces_ecommerce_orders_profit_chart__WEBPACK_IMPORTED_MODULE_4__["OrdersProfitChartData"], useClass: _orders_profit_chart_service__WEBPACK_IMPORTED_MODULE_13__["OrdersProfitChartService"] },
    { provide: _interfaces_ecommerce_profit_bar_animation_chart__WEBPACK_IMPORTED_MODULE_5__["ProfitBarAnimationChartData"], useClass: _profit_bar_animation_chart_service__WEBPACK_IMPORTED_MODULE_14__["ProfitBarAnimationChartService"] },
    { provide: _interfaces_ecommerce_stats_bar__WEBPACK_IMPORTED_MODULE_6__["StatsBarData"], useClass: _stats_bar_service__WEBPACK_IMPORTED_MODULE_15__["StatsBarService"] },
    { provide: _interfaces_ecommerce_stats_progress_bar__WEBPACK_IMPORTED_MODULE_7__["StatsProgressBarData"], useClass: _stats_progress_bar_service__WEBPACK_IMPORTED_MODULE_16__["StatsProgressBarService"] },
    { provide: _interfaces_ecommerce_traffic_list__WEBPACK_IMPORTED_MODULE_8__["TrafficListData"], useClass: _traffic_list_service__WEBPACK_IMPORTED_MODULE_17__["TrafficListService"] },
    { provide: _interfaces_ecommerce_user_activity__WEBPACK_IMPORTED_MODULE_9__["UserActivityData"], useClass: _user_activity_service__WEBPACK_IMPORTED_MODULE_18__["UserActivityService"] },
    { provide: _interfaces_ecommerce_earning__WEBPACK_IMPORTED_MODULE_10__["EarningData"], useClass: _earning_service__WEBPACK_IMPORTED_MODULE_19__["EarningService"] },
    { provide: _interfaces_ecommerce_visitors_analytics__WEBPACK_IMPORTED_MODULE_11__["VisitorsAnalyticsData"], useClass: _visitors_analytics_service__WEBPACK_IMPORTED_MODULE_22__["VisitorsAnalyticsService"] },
];
const INTERNAL_SERVICES = [
    _orders_chart_service__WEBPACK_IMPORTED_MODULE_20__["OrdersChartService"],
    _profit_chart_service__WEBPACK_IMPORTED_MODULE_21__["ProfitChartService"],
];
class EcommerceMockModule {
    static forRoot() {
        return {
            ngModule: EcommerceMockModule,
            providers: [
                ...INTERNAL_SERVICES,
                ...SERVICES,
            ],
        };
    }
}
EcommerceMockModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EcommerceMockModule });
EcommerceMockModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EcommerceMockModule_Factory(t) { return new (t || EcommerceMockModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _common_common_mock_module__WEBPACK_IMPORTED_MODULE_2__["CommonMockModule"]],
        _common_common_mock_module__WEBPACK_IMPORTED_MODULE_2__["CommonMockModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EcommerceMockModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _common_common_mock_module__WEBPACK_IMPORTED_MODULE_2__["CommonMockModule"]], exports: [_common_common_mock_module__WEBPACK_IMPORTED_MODULE_2__["CommonMockModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EcommerceMockModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _common_common_mock_module__WEBPACK_IMPORTED_MODULE_2__["CommonMockModule"]],
                exports: [_common_common_mock_module__WEBPACK_IMPORTED_MODULE_2__["CommonMockModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/@core/mock/ecommerce/orders-chart.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/@core/mock/ecommerce/orders-chart.service.ts ***!
  \**************************************************************/
/*! exports provided: OrdersChartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersChartService", function() { return OrdersChartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _common_periods_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/periods.service */ "./src/app/@core/mock/common/periods.service.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */




class OrdersChartService {
    constructor(period) {
        this.period = period;
        this.year = [
            '2012',
            '2013',
            '2014',
            '2015',
            '2016',
            '2017',
            '2018',
        ];
        this.data = {};
        this.data = {
            week: this.getDataForWeekPeriod(),
            month: this.getDataForMonthPeriod(),
            year: this.getDataForYearPeriod(),
        };
    }
    getDataForWeekPeriod() {
        return {
            chartLabel: '',
            axisXLabels: this.getDataLabels(42, this.period.getWeeks()),
            legend: ['Payment', 'Cancelled', 'All Orders'],
            linesData: [
                [
                    184, 267, 326, 366, 389, 399,
                    392, 371, 340, 304, 265, 227,
                    191, 158, 130, 108, 95, 91, 97,
                    109, 125, 144, 166, 189, 212,
                    236, 259, 280, 300, 316, 329,
                    338, 342, 339, 329, 312, 288,
                    258, 221, 178, 128, 71,
                ],
                [
                    158, 178, 193, 205, 212, 213,
                    204, 190, 180, 173, 168, 164,
                    162, 160, 159, 158, 159, 166,
                    179, 195, 215, 236, 257, 276,
                    292, 301, 304, 303, 300, 293,
                    284, 273, 262, 251, 241, 234,
                    232, 232, 232, 232, 232, 232,
                ],
                [
                    58, 137, 202, 251, 288, 312,
                    323, 324, 311, 288, 257, 222,
                    187, 154, 124, 100, 81, 68, 61,
                    58, 61, 69, 80, 96, 115, 137,
                    161, 186, 210, 233, 254, 271,
                    284, 293, 297, 297, 297, 297,
                    297, 297, 297, 297, 297,
                ],
            ],
        };
    }
    getDataForMonthPeriod() {
        return {
            chartLabel: '',
            axisXLabels: this.getDataLabels(47, this.period.getMonths()),
            legend: ['Payment', 'Cancelled', 'All Orders'],
            linesData: [
                [
                    5, 63, 113, 156, 194, 225,
                    250, 270, 283, 289, 290,
                    286, 277, 264, 244, 220,
                    194, 171, 157, 151, 150,
                    152, 155, 160, 166, 170,
                    167, 153, 135, 115, 97,
                    82, 71, 64, 63, 62, 61,
                    62, 65, 73, 84, 102,
                    127, 159, 203, 259, 333,
                ],
                [
                    6, 83, 148, 200, 240,
                    265, 273, 259, 211,
                    122, 55, 30, 28, 36,
                    50, 68, 88, 109, 129,
                    146, 158, 163, 165,
                    173, 187, 208, 236,
                    271, 310, 346, 375,
                    393, 400, 398, 387,
                    368, 341, 309, 275,
                    243, 220, 206, 202,
                    207, 222, 247, 286, 348,
                ],
                [
                    398, 348, 315, 292, 274,
                    261, 251, 243, 237, 231,
                    222, 209, 192, 172, 152,
                    132, 116, 102, 90, 80, 71,
                    64, 58, 53, 49, 48, 54, 66,
                    84, 104, 125, 142, 156, 166,
                    172, 174, 172, 167, 159, 149,
                    136, 121, 105, 86, 67, 45, 22,
                ],
            ],
        };
    }
    getDataForYearPeriod() {
        return {
            chartLabel: '',
            axisXLabels: this.getDataLabels(42, this.year),
            legend: ['Payment', 'Cancelled', 'All Orders'],
            linesData: [
                [
                    190, 269, 327, 366, 389, 398,
                    396, 387, 375, 359, 343, 327,
                    312, 298, 286, 276, 270, 268,
                    265, 258, 247, 234, 220, 204,
                    188, 172, 157, 142, 128, 116,
                    106, 99, 95, 94, 92, 89, 84,
                    77, 69, 60, 49, 36, 22,
                ],
                [
                    265, 307, 337, 359, 375, 386,
                    393, 397, 399, 397, 390, 379,
                    365, 347, 326, 305, 282, 261,
                    241, 223, 208, 197, 190, 187,
                    185, 181, 172, 160, 145, 126,
                    105, 82, 60, 40, 26, 19, 22,
                    43, 82, 141, 220, 321,
                ],
                [
                    9, 165, 236, 258, 244, 206,
                    186, 189, 209, 239, 273, 307,
                    339, 365, 385, 396, 398, 385,
                    351, 300, 255, 221, 197, 181,
                    170, 164, 162, 161, 159, 154,
                    146, 135, 122, 108, 96, 87,
                    83, 82, 82, 82, 82, 82, 82,
                ],
            ],
        };
    }
    getDataLabels(nPoints, labelsArray) {
        const labelsArrayLength = labelsArray.length;
        const step = Math.round(nPoints / labelsArrayLength);
        return Array.from(Array(nPoints)).map((item, index) => {
            const dataIndex = Math.round(index / step);
            return index % step === 0 ? labelsArray[dataIndex] : '';
        });
    }
    getOrdersChartData(period) {
        return this.data[period];
    }
}
OrdersChartService.ɵfac = function OrdersChartService_Factory(t) { return new (t || OrdersChartService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_common_periods_service__WEBPACK_IMPORTED_MODULE_1__["PeriodsService"])); };
OrdersChartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OrdersChartService, factory: OrdersChartService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrdersChartService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _common_periods_service__WEBPACK_IMPORTED_MODULE_1__["PeriodsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@core/mock/ecommerce/orders-profit-chart.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/@core/mock/ecommerce/orders-profit-chart.service.ts ***!
  \*********************************************************************/
/*! exports provided: OrdersProfitChartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersProfitChartService", function() { return OrdersProfitChartService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _interfaces_ecommerce_orders_profit_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interfaces/ecommerce/orders-profit-chart */ "./src/app/@core/interfaces/ecommerce/orders-profit-chart.ts");
/* harmony import */ var _orders_chart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orders-chart.service */ "./src/app/@core/mock/ecommerce/orders-chart.service.ts");
/* harmony import */ var _profit_chart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profit-chart.service */ "./src/app/@core/mock/ecommerce/profit-chart.service.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */








class OrdersProfitChartService extends _interfaces_ecommerce_orders_profit_chart__WEBPACK_IMPORTED_MODULE_2__["OrdersProfitChartData"] {
    constructor(ordersChartService, profitChartService) {
        super();
        this.ordersChartService = ordersChartService;
        this.profitChartService = profitChartService;
        this.summary = [
            {
                title: 'Marketplace',
                value: 3654,
            },
            {
                title: 'Last Month',
                value: 946,
            },
            {
                title: 'Last Week',
                value: 654,
            },
            {
                title: 'Today',
                value: 230,
            },
        ];
    }
    getOrderProfitChartSummary() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.summary);
    }
    getOrdersChartData(period) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.ordersChartService.getOrdersChartData(period));
    }
    getProfitChartData(period) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.profitChartService.getProfitChartData(period));
    }
}
OrdersProfitChartService.ɵfac = function OrdersProfitChartService_Factory(t) { return new (t || OrdersProfitChartService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_orders_chart_service__WEBPACK_IMPORTED_MODULE_3__["OrdersChartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_profit_chart_service__WEBPACK_IMPORTED_MODULE_4__["ProfitChartService"])); };
OrdersProfitChartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OrdersProfitChartService, factory: OrdersProfitChartService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OrdersProfitChartService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _orders_chart_service__WEBPACK_IMPORTED_MODULE_3__["OrdersChartService"] }, { type: _profit_chart_service__WEBPACK_IMPORTED_MODULE_4__["ProfitChartService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@core/mock/ecommerce/profit-bar-animation-chart.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/@core/mock/ecommerce/profit-bar-animation-chart.service.ts ***!
  \****************************************************************************/
/*! exports provided: ProfitBarAnimationChartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfitBarAnimationChartService", function() { return ProfitBarAnimationChartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _interfaces_ecommerce_profit_bar_animation_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interfaces/ecommerce/profit-bar-animation-chart */ "./src/app/@core/interfaces/ecommerce/profit-bar-animation-chart.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */




class ProfitBarAnimationChartService extends _interfaces_ecommerce_profit_bar_animation_chart__WEBPACK_IMPORTED_MODULE_2__["ProfitBarAnimationChartData"] {
    constructor() {
        super();
        this.data = {
            chartLabel: [],
            axisXLabels: [],
            linesData: [this.getDataForFirstLine(), this.getDataForSecondLine()],
            legend: ['transactions', 'orders'],
        };
    }
    getDataForFirstLine() {
        return this.createEmptyArray(100)
            .map((_, index) => {
            const oneFifth = index / 5;
            return (Math.sin(oneFifth) * (oneFifth - 10) + index / 6) * 5;
        });
    }
    getDataForSecondLine() {
        return this.createEmptyArray(100)
            .map((_, index) => {
            const oneFifth = index / 5;
            return (Math.cos(oneFifth) * (oneFifth - 10) + index / 6) * 5;
        });
    }
    createEmptyArray(nPoints) {
        return Array.from(Array(nPoints));
    }
    getChartData() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.data);
    }
}
ProfitBarAnimationChartService.ɵfac = function ProfitBarAnimationChartService_Factory(t) { return new (t || ProfitBarAnimationChartService)(); };
ProfitBarAnimationChartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProfitBarAnimationChartService, factory: ProfitBarAnimationChartService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfitBarAnimationChartService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/@core/mock/ecommerce/profit-chart.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/@core/mock/ecommerce/profit-chart.service.ts ***!
  \**************************************************************/
/*! exports provided: ProfitChartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfitChartService", function() { return ProfitChartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _common_periods_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/periods.service */ "./src/app/@core/mock/common/periods.service.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */




class ProfitChartService {
    constructor(period) {
        this.period = period;
        this.year = [
            '2012',
            '2013',
            '2014',
            '2015',
            '2016',
            '2017',
            '2018',
        ];
        this.data = {};
        this.data = {
            week: this.getDataForWeekPeriod(),
            month: this.getDataForMonthPeriod(),
            year: this.getDataForYearPeriod(),
        };
    }
    getDataForWeekPeriod() {
        const nPoint = this.period.getWeeks().length;
        return {
            chartLabel: '',
            axisXLabels: this.period.getWeeks(),
            legend: ['Payment', 'Cancelled', 'All Orders'],
            linesData: [
                this.getRandomData(nPoint),
                this.getRandomData(nPoint),
                this.getRandomData(nPoint),
            ],
        };
    }
    getDataForMonthPeriod() {
        const nPoint = this.period.getMonths().length;
        return {
            chartLabel: '',
            axisXLabels: this.period.getMonths(),
            legend: ['Payment', 'Cancelled', 'All Orders'],
            linesData: [
                this.getRandomData(nPoint),
                this.getRandomData(nPoint),
                this.getRandomData(nPoint),
            ],
        };
    }
    getDataForYearPeriod() {
        const nPoint = this.year.length;
        return {
            chartLabel: '',
            axisXLabels: this.year,
            legend: ['Payment', 'Cancelled', 'All Orders'],
            linesData: [
                this.getRandomData(nPoint),
                this.getRandomData(nPoint),
                this.getRandomData(nPoint),
            ],
        };
    }
    getRandomData(nPoints) {
        return Array.from(Array(nPoints)).map(() => {
            return Math.round(Math.random() * 500);
        });
    }
    getProfitChartData(period) {
        return this.data[period];
    }
}
ProfitChartService.ɵfac = function ProfitChartService_Factory(t) { return new (t || ProfitChartService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_common_periods_service__WEBPACK_IMPORTED_MODULE_1__["PeriodsService"])); };
ProfitChartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProfitChartService, factory: ProfitChartService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfitChartService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _common_periods_service__WEBPACK_IMPORTED_MODULE_1__["PeriodsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@core/mock/ecommerce/stats-bar.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/@core/mock/ecommerce/stats-bar.service.ts ***!
  \***********************************************************/
/*! exports provided: StatsBarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsBarService", function() { return StatsBarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _interfaces_ecommerce_stats_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interfaces/ecommerce/stats-bar */ "./src/app/@core/interfaces/ecommerce/stats-bar.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */




class StatsBarService extends _interfaces_ecommerce_stats_bar__WEBPACK_IMPORTED_MODULE_2__["StatsBarData"] {
    constructor() {
        super(...arguments);
        this.statsBarData = {
            chartLabel: '$',
            axisXLabels: [],
            linesData: [[300, 520, 435, 530], [730, 620, 660, 860]],
            legend: [],
            aggregatedData: [{
                    title: 'Jun 1 - Jun 30',
                    value: 300,
                }, {
                    title: 'Jul 1 - Jul 31',
                    value: 800,
                }],
        };
    }
    getStatsBarData() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.statsBarData);
    }
}
StatsBarService.ɵfac = function StatsBarService_Factory(t) { return ɵStatsBarService_BaseFactory(t || StatsBarService); };
StatsBarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StatsBarService, factory: StatsBarService.ɵfac });
const ɵStatsBarService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](StatsBarService);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatsBarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/@core/mock/ecommerce/stats-progress-bar.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/@core/mock/ecommerce/stats-progress-bar.service.ts ***!
  \********************************************************************/
/*! exports provided: StatsProgressBarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsProgressBarService", function() { return StatsProgressBarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _interfaces_ecommerce_stats_progress_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interfaces/ecommerce/stats-progress-bar */ "./src/app/@core/interfaces/ecommerce/stats-progress-bar.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */




class StatsProgressBarService extends _interfaces_ecommerce_stats_progress_bar__WEBPACK_IMPORTED_MODULE_2__["StatsProgressBarData"] {
    constructor() {
        super(...arguments);
        this.progressInfoData = [
            {
                title: 'Today’s Profit',
                value: 572900,
                activeProgress: 70,
                description: 'Better than last week (70%)',
            },
            {
                title: 'New Orders',
                value: 6378,
                activeProgress: 30,
                description: 'Better than last week (30%)',
            },
            {
                title: 'New Comments',
                value: 200,
                activeProgress: 55,
                description: 'Better than last week (55%)',
            },
        ];
    }
    getProgressInfoData() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.progressInfoData);
    }
}
StatsProgressBarService.ɵfac = function StatsProgressBarService_Factory(t) { return ɵStatsProgressBarService_BaseFactory(t || StatsProgressBarService); };
StatsProgressBarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StatsProgressBarService, factory: StatsProgressBarService.ɵfac });
const ɵStatsProgressBarService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](StatsProgressBarService);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatsProgressBarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/@core/mock/ecommerce/traffic-list.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/@core/mock/ecommerce/traffic-list.service.ts ***!
  \**************************************************************/
/*! exports provided: TrafficListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrafficListService", function() { return TrafficListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _common_periods_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/periods.service */ "./src/app/@core/mock/common/periods.service.ts");
/* harmony import */ var _interfaces_ecommerce_traffic_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../interfaces/ecommerce/traffic-list */ "./src/app/@core/interfaces/ecommerce/traffic-list.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */






class TrafficListService extends _interfaces_ecommerce_traffic_list__WEBPACK_IMPORTED_MODULE_3__["TrafficListData"] {
    constructor(period) {
        super();
        this.period = period;
        this.getRandom = (roundTo) => Math.round(Math.random() * roundTo);
        this.data = {};
        this.data = {
            week: this.getDataWeek(),
            month: this.getDataMonth(),
            year: this.getDataYear(),
        };
    }
    getDataWeek() {
        const getFirstDateInPeriod = () => {
            const weeks = this.period.getWeeks();
            return weeks[weeks.length - 1];
        };
        return this.reduceData(this.period.getWeeks(), getFirstDateInPeriod);
    }
    getDataMonth() {
        const getFirstDateInPeriod = () => {
            const months = this.period.getMonths();
            return months[months.length - 1];
        };
        return this.reduceData(this.period.getMonths(), getFirstDateInPeriod);
    }
    getDataYear() {
        const getFirstDateInPeriod = () => {
            const years = this.period.getYears();
            return `${parseInt(years[0], 10) - 1}`;
        };
        return this.reduceData(this.period.getYears(), getFirstDateInPeriod);
    }
    reduceData(timePeriods, getFirstDateInPeriod) {
        return timePeriods.reduce((result, timePeriod, index) => {
            const hasResult = result[index - 1];
            const prevDate = hasResult ?
                result[index - 1].comparison.nextDate :
                getFirstDateInPeriod();
            const prevValue = hasResult ?
                result[index - 1].comparison.nextValue :
                this.getRandom(100);
            const nextValue = this.getRandom(100);
            const deltaValue = prevValue - nextValue;
            const item = {
                date: timePeriod,
                value: this.getRandom(1000),
                delta: {
                    up: deltaValue <= 0,
                    value: Math.abs(deltaValue),
                },
                comparison: {
                    prevDate,
                    prevValue,
                    nextDate: timePeriod,
                    nextValue,
                },
            };
            return [...result, item];
        }, []);
    }
    getTrafficListData(period) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.data[period]);
    }
}
TrafficListService.ɵfac = function TrafficListService_Factory(t) { return new (t || TrafficListService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_common_periods_service__WEBPACK_IMPORTED_MODULE_2__["PeriodsService"])); };
TrafficListService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TrafficListService, factory: TrafficListService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrafficListService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _common_periods_service__WEBPACK_IMPORTED_MODULE_2__["PeriodsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@core/mock/ecommerce/user-activity.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/@core/mock/ecommerce/user-activity.service.ts ***!
  \***************************************************************/
/*! exports provided: UserActivityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserActivityService", function() { return UserActivityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _common_periods_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/periods.service */ "./src/app/@core/mock/common/periods.service.ts");
/* harmony import */ var _interfaces_ecommerce_user_activity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../interfaces/ecommerce/user-activity */ "./src/app/@core/interfaces/ecommerce/user-activity.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */






class UserActivityService extends _interfaces_ecommerce_user_activity__WEBPACK_IMPORTED_MODULE_3__["UserActivityData"] {
    constructor(periods) {
        super();
        this.periods = periods;
        this.getRandom = (roundTo) => Math.round(Math.random() * roundTo);
        this.data = {};
        this.data = {
            week: this.getDataWeek(),
            month: this.getDataMonth(),
            year: this.getDataYear(),
        };
    }
    generateUserActivityRandomData(date) {
        return {
            date,
            pagesVisitCount: this.getRandom(1000),
            deltaUp: this.getRandom(1) % 2 === 0,
            newVisits: this.getRandom(100),
        };
    }
    getDataWeek() {
        return this.periods.getWeeks().map((week) => {
            return this.generateUserActivityRandomData(week);
        });
    }
    getDataMonth() {
        const currentDate = new Date();
        const days = currentDate.getDate();
        const month = this.periods.getMonths()[currentDate.getMonth()];
        return Array.from(Array(days)).map((_, index) => {
            const date = `${index + 1} ${month}`;
            return this.generateUserActivityRandomData(date);
        });
    }
    getDataYear() {
        return this.periods.getYears().map((year) => {
            return this.generateUserActivityRandomData(year);
        });
    }
    getUserActivityData(period) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.data[period]);
    }
}
UserActivityService.ɵfac = function UserActivityService_Factory(t) { return new (t || UserActivityService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_common_periods_service__WEBPACK_IMPORTED_MODULE_2__["PeriodsService"])); };
UserActivityService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserActivityService, factory: UserActivityService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserActivityService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _common_periods_service__WEBPACK_IMPORTED_MODULE_2__["PeriodsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@core/mock/ecommerce/visitors-analytics.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/@core/mock/ecommerce/visitors-analytics.service.ts ***!
  \********************************************************************/
/*! exports provided: VisitorsAnalyticsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorsAnalyticsService", function() { return VisitorsAnalyticsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _common_periods_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/periods.service */ "./src/app/@core/mock/common/periods.service.ts");
/* harmony import */ var _interfaces_ecommerce_visitors_analytics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../interfaces/ecommerce/visitors-analytics */ "./src/app/@core/interfaces/ecommerce/visitors-analytics.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */






class VisitorsAnalyticsService extends _interfaces_ecommerce_visitors_analytics__WEBPACK_IMPORTED_MODULE_3__["VisitorsAnalyticsData"] {
    constructor(periodService) {
        super();
        this.periodService = periodService;
        this.pieChartValue = 75;
        this.innerLinePoints = [
            94, 188, 225, 244, 253, 254, 249, 235, 208,
            173, 141, 118, 105, 97, 94, 96, 104, 121, 147,
            183, 224, 265, 302, 333, 358, 375, 388, 395,
            400, 400, 397, 390, 377, 360, 338, 310, 278,
            241, 204, 166, 130, 98, 71, 49, 32, 20, 13, 9,
        ];
        this.outerLinePoints = [
            85, 71, 59, 50, 45, 42, 41, 44, 58, 88,
            136, 199, 267, 326, 367, 391, 400, 397,
            376, 319, 200, 104, 60, 41, 36, 37, 44,
            55, 74, 100, 131, 159, 180, 193, 199, 200,
            195, 184, 164, 135, 103, 73, 50, 33, 22, 15, 11,
        ];
    }
    generateOutlineLineData() {
        const months = this.periodService.getMonths();
        const outerLinePointsLength = this.outerLinePoints.length;
        const monthsLength = months.length;
        return this.outerLinePoints.map((p, index) => {
            const monthIndex = Math.round(index / 4);
            const label = (index % Math.round(outerLinePointsLength / monthsLength) === 0)
                ? months[monthIndex]
                : '';
            return {
                label,
                value: p,
            };
        });
    }
    getInnerLineChartData() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.innerLinePoints);
    }
    getOutlineLineChartData() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.generateOutlineLineData());
    }
    getPieChartData() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.pieChartValue);
    }
}
VisitorsAnalyticsService.ɵfac = function VisitorsAnalyticsService_Factory(t) { return new (t || VisitorsAnalyticsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_common_periods_service__WEBPACK_IMPORTED_MODULE_2__["PeriodsService"])); };
VisitorsAnalyticsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: VisitorsAnalyticsService, factory: VisitorsAnalyticsService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VisitorsAnalyticsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _common_periods_service__WEBPACK_IMPORTED_MODULE_2__["PeriodsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@core/mock/iot/devices.service.ts":
/*!***************************************************!*\
  !*** ./src/app/@core/mock/iot/devices.service.ts ***!
  \***************************************************/
/*! exports provided: DevicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicesService", function() { return DevicesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _interfaces_iot_devices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interfaces/iot/devices */ "./src/app/@core/interfaces/iot/devices.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */




class DevicesService extends _interfaces_iot_devices__WEBPACK_IMPORTED_MODULE_2__["DevicesData"] {
    constructor() {
        super(...arguments);
        this.data = [
            {
                id: 1,
                name: 'Light',
                isOn: true,
                type: 'Light',
                settings: {
                    iconClass: 'nb-lightbulb',
                    type: 'primary',
                },
            }, {
                id: 2,
                name: 'Roller Shades',
                isOn: true,
                type: 'RollerShades',
                settings: {
                    iconClass: 'nb-roller-shades',
                    type: 'success',
                },
            }, {
                id: 3,
                name: 'Wireless Audio',
                isOn: true,
                type: 'WirelessAudio',
                settings: {
                    iconClass: 'nb-audio',
                    type: 'info',
                },
            }, {
                id: 4,
                name: 'Coffee Maker',
                isOn: true,
                type: 'CoffeeMaker',
                settings: {
                    iconClass: 'nb-coffee-maker',
                    type: 'warning',
                },
            },
        ];
    }
    list() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.data);
    }
    edit(device) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(device);
    }
}
DevicesService.ɵfac = function DevicesService_Factory(t) { return ɵDevicesService_BaseFactory(t || DevicesService); };
DevicesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DevicesService, factory: DevicesService.ɵfac });
const ɵDevicesService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DevicesService);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DevicesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/@core/mock/iot/electricity.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/@core/mock/iot/electricity.service.ts ***!
  \*******************************************************/
/*! exports provided: ElectricityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElectricityService", function() { return ElectricityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _interfaces_iot_electricity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interfaces/iot/electricity */ "./src/app/@core/interfaces/iot/electricity.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */




class ElectricityService extends _interfaces_iot_electricity__WEBPACK_IMPORTED_MODULE_2__["ElectricityData"] {
    constructor() {
        super();
        this.listData = [
            {
                title: '2015',
                months: [
                    { month: 'Jan', delta: '0.97', down: true, kWatts: '816', cost: '97' },
                    { month: 'Feb', delta: '1.83', down: true, kWatts: '806', cost: '95' },
                    { month: 'Mar', delta: '0.64', down: true, kWatts: '803', cost: '94' },
                    { month: 'Apr', delta: '2.17', down: false, kWatts: '818', cost: '98' },
                    { month: 'May', delta: '1.32', down: true, kWatts: '809', cost: '96' },
                    { month: 'Jun', delta: '0.05', down: true, kWatts: '808', cost: '96' },
                    { month: 'Jul', delta: '1.39', down: false, kWatts: '815', cost: '97' },
                    { month: 'Aug', delta: '0.73', down: true, kWatts: '807', cost: '95' },
                    { month: 'Sept', delta: '2.61', down: true, kWatts: '792', cost: '92' },
                    { month: 'Oct', delta: '0.16', down: true, kWatts: '791', cost: '92' },
                    { month: 'Nov', delta: '1.71', down: true, kWatts: '786', cost: '89' },
                    { month: 'Dec', delta: '0.37', down: false, kWatts: '789', cost: '91' },
                ],
            },
            {
                title: '2016',
                active: true,
                months: [
                    { month: 'Jan', delta: '1.56', down: true, kWatts: '789', cost: '91' },
                    { month: 'Feb', delta: '0.33', down: false, kWatts: '791', cost: '92' },
                    { month: 'Mar', delta: '0.62', down: true, kWatts: '790', cost: '92' },
                    { month: 'Apr', delta: '1.93', down: true, kWatts: '783', cost: '87' },
                    { month: 'May', delta: '2.52', down: true, kWatts: '771', cost: '83' },
                    { month: 'Jun', delta: '0.39', down: false, kWatts: '774', cost: '85' },
                    { month: 'Jul', delta: '1.61', down: true, kWatts: '767', cost: '81' },
                    { month: 'Aug', delta: '1.41', down: true, kWatts: '759', cost: '76' },
                    { month: 'Sept', delta: '1.03', down: true, kWatts: '752', cost: '74' },
                    { month: 'Oct', delta: '2.94', down: false, kWatts: '769', cost: '82' },
                    { month: 'Nov', delta: '0.26', down: true, kWatts: '767', cost: '81' },
                    { month: 'Dec', delta: '1.62', down: true, kWatts: '760', cost: '76' },
                ],
            },
            {
                title: '2017',
                months: [
                    { month: 'Jan', delta: '1.34', down: false, kWatts: '789', cost: '91' },
                    { month: 'Feb', delta: '0.95', down: false, kWatts: '793', cost: '93' },
                    { month: 'Mar', delta: '0.25', down: true, kWatts: '791', cost: '92' },
                    { month: 'Apr', delta: '1.72', down: false, kWatts: '797', cost: '95' },
                    { month: 'May', delta: '2.62', down: true, kWatts: '786', cost: '90' },
                    { month: 'Jun', delta: '0.72', down: false, kWatts: '789', cost: '91' },
                    { month: 'Jul', delta: '0.78', down: true, kWatts: '784', cost: '89' },
                    { month: 'Aug', delta: '0.36', down: true, kWatts: '782', cost: '88' },
                    { month: 'Sept', delta: '0.55', down: false, kWatts: '787', cost: '90' },
                    { month: 'Oct', delta: '1.81', down: true, kWatts: '779', cost: '86' },
                    { month: 'Nov', delta: '1.12', down: true, kWatts: '774', cost: '84' },
                    { month: 'Dec', delta: '0.52', down: false, kWatts: '776', cost: '95' },
                ],
            },
        ];
        this.chartData = {
            chart: {
                axisXLabels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
                linesData: [[490, 505, 550, 800, 870, 720, 130, 635, 660, 380, 340]],
                chartLabel: undefined,
                legend: [],
            },
            consumed: {
                title: 'kWh',
                value: 816,
            },
            spent: {
                title: 'USD',
                value: 291,
            },
        };
    }
    getListData(yearsCount) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.listData);
    }
    getChartData(period) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.chartData);
    }
}
ElectricityService.ɵfac = function ElectricityService_Factory(t) { return new (t || ElectricityService)(); };
ElectricityService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ElectricityService, factory: ElectricityService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ElectricityService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/@core/mock/iot/iot-mock.module.ts":
/*!***************************************************!*\
  !*** ./src/app/@core/mock/iot/iot-mock.module.ts ***!
  \***************************************************/
/*! exports provided: IotMockModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IotMockModule", function() { return IotMockModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _common_common_mock_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/common-mock.module */ "./src/app/@core/mock/common/common-mock.module.ts");
/* harmony import */ var _interfaces_iot_devices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../interfaces/iot/devices */ "./src/app/@core/interfaces/iot/devices.ts");
/* harmony import */ var _interfaces_iot_phone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../interfaces/iot/phone */ "./src/app/@core/interfaces/iot/phone.ts");
/* harmony import */ var _interfaces_iot_electricity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../interfaces/iot/electricity */ "./src/app/@core/interfaces/iot/electricity.ts");
/* harmony import */ var _interfaces_iot_solar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../interfaces/iot/solar */ "./src/app/@core/interfaces/iot/solar.ts");
/* harmony import */ var _interfaces_iot_temperature_humidity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../interfaces/iot/temperature-humidity */ "./src/app/@core/interfaces/iot/temperature-humidity.ts");
/* harmony import */ var _interfaces_iot_traffic_chart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../interfaces/iot/traffic-chart */ "./src/app/@core/interfaces/iot/traffic-chart.ts");
/* harmony import */ var _interfaces_iot_security_cameras__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../interfaces/iot/security-cameras */ "./src/app/@core/interfaces/iot/security-cameras.ts");
/* harmony import */ var _devices_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./devices.service */ "./src/app/@core/mock/iot/devices.service.ts");
/* harmony import */ var _electricity_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./electricity.service */ "./src/app/@core/mock/iot/electricity.service.ts");
/* harmony import */ var _phone_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./phone.service */ "./src/app/@core/mock/iot/phone.service.ts");
/* harmony import */ var _solar_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./solar.service */ "./src/app/@core/mock/iot/solar.service.ts");
/* harmony import */ var _temperature_humidity_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./temperature-humidity.service */ "./src/app/@core/mock/iot/temperature-humidity.service.ts");
/* harmony import */ var _traffic_chart_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./traffic-chart.service */ "./src/app/@core/mock/iot/traffic-chart.service.ts");
/* harmony import */ var _security_cameras_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./security-cameras.service */ "./src/app/@core/mock/iot/security-cameras.service.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */


















const SERVICES = [
    { provide: _interfaces_iot_devices__WEBPACK_IMPORTED_MODULE_3__["DevicesData"], useClass: _devices_service__WEBPACK_IMPORTED_MODULE_10__["DevicesService"] },
    { provide: _interfaces_iot_electricity__WEBPACK_IMPORTED_MODULE_5__["ElectricityData"], useClass: _electricity_service__WEBPACK_IMPORTED_MODULE_11__["ElectricityService"] },
    { provide: _interfaces_iot_phone__WEBPACK_IMPORTED_MODULE_4__["PhoneData"], useClass: _phone_service__WEBPACK_IMPORTED_MODULE_12__["PhoneService"] },
    { provide: _interfaces_iot_solar__WEBPACK_IMPORTED_MODULE_6__["SolarData"], useClass: _solar_service__WEBPACK_IMPORTED_MODULE_13__["SolarService"] },
    { provide: _interfaces_iot_temperature_humidity__WEBPACK_IMPORTED_MODULE_7__["TemperatureHumidityData"], useClass: _temperature_humidity_service__WEBPACK_IMPORTED_MODULE_14__["TemperatureHumidityService"] },
    { provide: _interfaces_iot_traffic_chart__WEBPACK_IMPORTED_MODULE_8__["TrafficChartData"], useClass: _traffic_chart_service__WEBPACK_IMPORTED_MODULE_15__["TrafficChartService"] },
    { provide: _interfaces_iot_security_cameras__WEBPACK_IMPORTED_MODULE_9__["SecurityCamerasData"], useClass: _security_cameras_service__WEBPACK_IMPORTED_MODULE_16__["SecurityCamerasService"] },
];
class IotMockModule {
    static forRoot() {
        return {
            ngModule: IotMockModule,
            providers: [
                ...SERVICES,
            ],
        };
    }
}
IotMockModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: IotMockModule });
IotMockModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function IotMockModule_Factory(t) { return new (t || IotMockModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _common_common_mock_module__WEBPACK_IMPORTED_MODULE_2__["CommonMockModule"]],
        _common_common_mock_module__WEBPACK_IMPORTED_MODULE_2__["CommonMockModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IotMockModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _common_common_mock_module__WEBPACK_IMPORTED_MODULE_2__["CommonMockModule"]], exports: [_common_common_mock_module__WEBPACK_IMPORTED_MODULE_2__["CommonMockModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IotMockModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _common_common_mock_module__WEBPACK_IMPORTED_MODULE_2__["CommonMockModule"]],
                exports: [_common_common_mock_module__WEBPACK_IMPORTED_MODULE_2__["CommonMockModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/@core/mock/iot/phone.service.ts":
/*!*************************************************!*\
  !*** ./src/app/@core/mock/iot/phone.service.ts ***!
  \*************************************************/
/*! exports provided: PhoneService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneService", function() { return PhoneService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _interfaces_iot_phone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interfaces/iot/phone */ "./src/app/@core/interfaces/iot/phone.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */




class PhoneService extends _interfaces_iot_phone__WEBPACK_IMPORTED_MODULE_2__["PhoneData"] {
    constructor() {
        super(...arguments);
        this.time = new Date;
        this.types = {
            mobile: 'mobile',
            home: 'home',
            work: 'work',
        };
        this.contacts = [
            { name: 'Nick Jones', picture: 'assets/images/nick.png', type: this.types.mobile },
            { name: 'Eva Moor', picture: 'assets/images/eva.png', type: this.types.home },
            { name: 'Jack Williams', picture: 'assets/images/jack.png', type: this.types.mobile },
            { name: 'Lee Wong', picture: 'assets/images/lee.png', type: this.types.mobile },
            { name: 'Alan Thompson', picture: 'assets/images/alan.png', type: this.types.home },
            { name: 'Kate Martinez', picture: 'assets/images/kate.png', type: this.types.work },
        ];
        this.recentUsers = [
            {
                name: this.contacts[0].name,
                picture: this.contacts[0].picture,
                type: this.contacts[0].type,
                time: this.time.setHours(21, 12),
            },
            {
                name: this.contacts[2].name,
                picture: this.contacts[2].picture,
                type: this.contacts[2].type,
                time: this.time.setHours(20, 13),
            },
            {
                name: this.contacts[1].name,
                picture: this.contacts[1].picture,
                type: this.contacts[1].type,
                time: this.time.setHours(18, 10),
            },
            {
                name: this.contacts[0].name,
                picture: this.contacts[0].picture,
                type: this.contacts[0].type,
                time: this.time.setHours(15, 45),
            },
            {
                name: this.contacts[4].name,
                picture: this.contacts[4].picture,
                type: this.contacts[4].type,
                time: this.time.setHours(14, 33),
            },
            {
                name: this.contacts[4].name,
                picture: this.contacts[4].picture,
                type: this.contacts[4].type,
                time: this.time.setHours(14, 29),
            },
        ];
    }
    getContacts() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.contacts);
    }
    getRecentUsers() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.recentUsers);
    }
}
PhoneService.ɵfac = function PhoneService_Factory(t) { return ɵPhoneService_BaseFactory(t || PhoneService); };
PhoneService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PhoneService, factory: PhoneService.ɵfac });
const ɵPhoneService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](PhoneService);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PhoneService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/@core/mock/iot/security-cameras.service.ts":
/*!************************************************************!*\
  !*** ./src/app/@core/mock/iot/security-cameras.service.ts ***!
  \************************************************************/
/*! exports provided: SecurityCamerasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityCamerasService", function() { return SecurityCamerasService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _interfaces_iot_security_cameras__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interfaces/iot/security-cameras */ "./src/app/@core/interfaces/iot/security-cameras.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */




class SecurityCamerasService extends _interfaces_iot_security_cameras__WEBPACK_IMPORTED_MODULE_2__["SecurityCamerasData"] {
    constructor() {
        super(...arguments);
        this.cameras = [
            {
                title: 'Camera #1',
                source: 'assets/images/camera1.jpg',
            },
            {
                title: 'Camera #2',
                source: 'assets/images/camera2.jpg',
            },
            {
                title: 'Camera #3',
                source: 'assets/images/camera3.jpg',
            },
            {
                title: 'Camera #4',
                source: 'assets/images/camera4.jpg',
            },
        ];
    }
    getCamerasData() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.cameras);
    }
}
SecurityCamerasService.ɵfac = function SecurityCamerasService_Factory(t) { return ɵSecurityCamerasService_BaseFactory(t || SecurityCamerasService); };
SecurityCamerasService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SecurityCamerasService, factory: SecurityCamerasService.ɵfac });
const ɵSecurityCamerasService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](SecurityCamerasService);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SecurityCamerasService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/@core/mock/iot/solar.service.ts":
/*!*************************************************!*\
  !*** ./src/app/@core/mock/iot/solar.service.ts ***!
  \*************************************************/
/*! exports provided: SolarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolarService", function() { return SolarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _interfaces_iot_solar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interfaces/iot/solar */ "./src/app/@core/interfaces/iot/solar.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */




class SolarService extends _interfaces_iot_solar__WEBPACK_IMPORTED_MODULE_2__["SolarData"] {
    constructor() {
        super(...arguments);
        this.value = {
            totalValue: 8421,
            solarValue: 6421,
            percent: 42,
            unitOfMeasure: 'kWh',
        };
    }
    getSolarData() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.value);
    }
}
SolarService.ɵfac = function SolarService_Factory(t) { return ɵSolarService_BaseFactory(t || SolarService); };
SolarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SolarService, factory: SolarService.ɵfac });
const ɵSolarService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](SolarService);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SolarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/@core/mock/iot/temperature-humidity.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/@core/mock/iot/temperature-humidity.service.ts ***!
  \****************************************************************/
/*! exports provided: TemperatureHumidityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemperatureHumidityService", function() { return TemperatureHumidityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _interfaces_iot_temperature_humidity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interfaces/iot/temperature-humidity */ "./src/app/@core/interfaces/iot/temperature-humidity.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */




class TemperatureHumidityService extends _interfaces_iot_temperature_humidity__WEBPACK_IMPORTED_MODULE_2__["TemperatureHumidityData"] {
    constructor() {
        super(...arguments);
        this.temperatureDevice = {
            id: 5,
            name: 'Air Conditioner',
            isOn: true,
            type: 'Conditioner',
            parameters: [
                {
                    id: 1,
                    name: 'Temperature',
                    value: 24,
                    min: 12,
                    max: 30,
                },
                {
                    id: 2,
                    name: 'Mode',
                    value: 'Cooling',
                },
            ],
        };
        this.humidityDevice = {
            id: 6,
            name: 'Humidifier',
            isOn: true,
            type: 'Humidifier',
            parameters: [
                {
                    id: 2,
                    name: 'Humidity',
                    value: 87,
                    min: 0,
                    max: 100,
                },
                {
                    id: 4,
                    name: 'Mode',
                    value: 'Circulation',
                },
            ],
        };
    }
    getTemperatureDevice() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.temperatureDevice);
    }
    getHumidityDevice() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.humidityDevice);
    }
    setTemperatureDevice(device) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(device);
    }
    setHumidityDevice(device) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(device);
    }
    setTemperatureParameter(parameter) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(parameter);
    }
    setHumidityParameter(parameter) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(parameter);
    }
}
TemperatureHumidityService.ɵfac = function TemperatureHumidityService_Factory(t) { return ɵTemperatureHumidityService_BaseFactory(t || TemperatureHumidityService); };
TemperatureHumidityService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TemperatureHumidityService, factory: TemperatureHumidityService.ɵfac });
const ɵTemperatureHumidityService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](TemperatureHumidityService);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TemperatureHumidityService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/@core/mock/iot/traffic-chart.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/@core/mock/iot/traffic-chart.service.ts ***!
  \*********************************************************/
/*! exports provided: TrafficChartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrafficChartService", function() { return TrafficChartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _interfaces_iot_traffic_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interfaces/iot/traffic-chart */ "./src/app/@core/interfaces/iot/traffic-chart.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */




class TrafficChartService extends _interfaces_iot_traffic_chart__WEBPACK_IMPORTED_MODULE_2__["TrafficChartData"] {
    constructor() {
        super(...arguments);
        this.data = [
            300, 520, 435, 530,
            730, 620, 660, 860,
        ];
    }
    getTrafficChartData(period) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.data);
    }
}
TrafficChartService.ɵfac = function TrafficChartService_Factory(t) { return ɵTrafficChartService_BaseFactory(t || TrafficChartService); };
TrafficChartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TrafficChartService, factory: TrafficChartService.ɵfac });
const ɵTrafficChartService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](TrafficChartService);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrafficChartService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/@core/module-import-guard.ts":
/*!**********************************************!*\
  !*** ./src/app/@core/module-import-guard.ts ***!
  \**********************************************/
/*! exports provided: throwIfAlreadyLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function() { return throwIfAlreadyLoaded; });
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
    }
}


/***/ }),

/***/ "./src/app/@core/stores/user.store.ts":
/*!********************************************!*\
  !*** ./src/app/@core/stores/user.store.ts ***!
  \********************************************/
/*! exports provided: UserStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserStore", function() { return UserStore; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */




class UserStore {
    constructor() {
        this.userState$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.user);
    }
    getUser() {
        return this.user;
    }
    setUser(paramUser) {
        this.user = paramUser;
        this.changeUserState(paramUser);
    }
    onUserStateChange() {
        return this.userState$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
    }
    changeUserState(paramUser) {
        this.userState$.next(paramUser);
    }
    setSetting(themeName) {
        if (this.user) {
            if (this.user.settings) {
                this.user.settings.themeName = themeName;
            }
            else {
                this.user.settings = { themeName: themeName };
            }
            this.changeUserState(this.user);
        }
    }
}
UserStore.ɵfac = function UserStore_Factory(t) { return new (t || UserStore)(); };
UserStore.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserStore, factory: UserStore.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserStore, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/@core/utils/analytics.service.ts":
/*!**************************************************!*\
  !*** ./src/app/@core/utils/analytics.service.ts ***!
  \**************************************************/
/*! exports provided: AnalyticsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsService", function() { return AnalyticsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */







class AnalyticsService {
    constructor(location, router) {
        this.location = location;
        this.router = router;
        this.enabled = false;
    }
    trackPageViews() {
        if (this.enabled) {
            this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]))
                .subscribe(() => {
                ga('send', { hitType: 'pageview', page: this.location.path() });
            });
        }
    }
    trackEvent(eventName) {
        if (this.enabled) {
            ga('send', 'event', eventName);
        }
    }
}
AnalyticsService.ɵfac = function AnalyticsService_Factory(t) { return new (t || AnalyticsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AnalyticsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AnalyticsService, factory: AnalyticsService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnalyticsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@core/utils/index.ts":
/*!**************************************!*\
  !*** ./src/app/@core/utils/index.ts ***!
  \**************************************/
/*! exports provided: LayoutService, AnalyticsService, PlayerService, StateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout.service */ "./src/app/@core/utils/layout.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutService", function() { return _layout_service__WEBPACK_IMPORTED_MODULE_0__["LayoutService"]; });

/* harmony import */ var _analytics_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./analytics.service */ "./src/app/@core/utils/analytics.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnalyticsService", function() { return _analytics_service__WEBPACK_IMPORTED_MODULE_1__["AnalyticsService"]; });

/* harmony import */ var _player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player.service */ "./src/app/@core/utils/player.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlayerService", function() { return _player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"]; });

/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state.service */ "./src/app/@core/utils/state.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return _state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"]; });

/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */







/***/ }),

/***/ "./src/app/@core/utils/layout.service.ts":
/*!***********************************************!*\
  !*** ./src/app/@core/utils/layout.service.ts ***!
  \***********************************************/
/*! exports provided: LayoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutService", function() { return LayoutService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




class LayoutService {
    constructor() {
        this.layoutSize$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.layoutSizeChange$ = this.layoutSize$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])({ refCount: true }));
    }
    changeLayoutSize() {
        this.layoutSize$.next();
    }
    onChangeLayoutSize() {
        return this.layoutSizeChange$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(1));
    }
    onSafeChangeLayoutSize() {
        return this.layoutSizeChange$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(350));
    }
}
LayoutService.ɵfac = function LayoutService_Factory(t) { return new (t || LayoutService)(); };
LayoutService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LayoutService, factory: LayoutService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/@core/utils/player.service.ts":
/*!***********************************************!*\
  !*** ./src/app/@core/utils/player.service.ts ***!
  \***********************************************/
/*! exports provided: Track, PlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Track", function() { return Track; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerService", function() { return PlayerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */


class Track {
}
class PlayerService {
    constructor() {
        this.playlist = [
            {
                name: 'Don\'t Wanna Fight',
                artist: 'Alabama Shakes',
                url: 'https://p.scdn.co/mp3-preview/6156cdbca425a894972c02fca9d76c0b70e001af',
                cover: 'assets/images/cover1.jpg',
            },
            {
                name: 'Harder',
                artist: 'Daft Punk',
                url: 'https://p.scdn.co/mp3-preview/92a04c7c0e96bf93a1b1b1cae7dfff1921969a7b',
                cover: 'assets/images/cover2.jpg',
            },
            {
                name: 'Come Together',
                artist: 'Beatles',
                url: 'https://p.scdn.co/mp3-preview/83090a4db6899eaca689ae35f69126dbe65d94c9',
                cover: 'assets/images/cover3.jpg',
            },
        ];
    }
    random() {
        this.current = Math.floor(Math.random() * this.playlist.length);
        return this.playlist[this.current];
    }
    next() {
        return this.getNextTrack();
    }
    prev() {
        return this.getPrevTrack();
    }
    getNextTrack() {
        if (this.current === this.playlist.length - 1) {
            this.current = 0;
        }
        else {
            this.current++;
        }
        return this.playlist[this.current];
    }
    getPrevTrack() {
        if (this.current === 0) {
            this.current = this.playlist.length - 1;
        }
        else {
            this.current--;
        }
        return this.playlist[this.current];
    }
}
PlayerService.ɵfac = function PlayerService_Factory(t) { return new (t || PlayerService)(); };
PlayerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PlayerService, factory: PlayerService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/@core/utils/state.service.ts":
/*!**********************************************!*\
  !*** ./src/app/@core/utils/state.service.ts ***!
  \**********************************************/
/*! exports provided: StateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return StateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */






class StateService {
    constructor(directionService) {
        this.layouts = [
            {
                name: 'One Column',
                icon: 'nb-layout-default',
                id: 'one-column',
                selected: true,
            },
            {
                name: 'Two Column',
                icon: 'nb-layout-two-column',
                id: 'two-column',
            },
            {
                name: 'Center Column',
                icon: 'nb-layout-centre',
                id: 'center-column',
            },
        ];
        this.sidebars = [
            {
                name: 'Sidebar at layout start',
                icon: 'nb-layout-sidebar-left',
                id: 'start',
                selected: true,
            },
            {
                name: 'Sidebar at layout end',
                icon: 'nb-layout-sidebar-right',
                id: 'end',
            },
        ];
        this.layoutState$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.layouts[0]);
        this.sidebarState$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.sidebars[0]);
        this.alive = true;
        directionService.onDirectionChange()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeWhile"])(() => this.alive))
            .subscribe(direction => this.updateSidebarIcons(direction));
        this.updateSidebarIcons(directionService.getDirection());
    }
    ngOnDestroy() {
        this.alive = false;
    }
    updateSidebarIcons(direction) {
        const [startSidebar, endSidebar] = this.sidebars;
        const isLtr = direction === _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbLayoutDirection"].LTR;
        const startIconClass = isLtr ? 'nb-layout-sidebar-left' : 'nb-layout-sidebar-right';
        const endIconClass = isLtr ? 'nb-layout-sidebar-right' : 'nb-layout-sidebar-left';
        startSidebar.icon = startIconClass;
        endSidebar.icon = endIconClass;
    }
    setLayoutState(state) {
        this.layoutState$.next(state);
    }
    getLayoutStates() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.layouts);
    }
    onLayoutState() {
        return this.layoutState$.asObservable();
    }
    setSidebarState(state) {
        this.sidebarState$.next(state);
    }
    getSidebarStates() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.sidebars);
    }
    onSidebarState() {
        return this.sidebarState$.asObservable();
    }
}
StateService.ɵfac = function StateService_Factory(t) { return new (t || StateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbLayoutDirectionService"])); };
StateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StateService, factory: StateService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbLayoutDirectionService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@theme/components/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/@theme/components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */


class FooterComponent {
    get currentYear() {
        return new Date().getFullYear();
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["ngx-footer"]], decls: 6, vars: 1, consts: [[1, "created-by"], ["href", "https://matec.com.co", "target", "_blank"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Creado por ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Matec Log\u00EDstica");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.currentYear, "");
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-footer',
                styleUrls: ['./footer.component.scss'],
                template: `
    <span class="created-by">Creado por <b>
      <a href="https://matec.com.co" target="_blank">Matec Logística</a></b> {{ currentYear }}</span>
    
  `,
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/@theme/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/@theme/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@core/utils */ "./src/app/@core/utils/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _core_stores_user_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../@core/stores/user.store */ "./src/app/@core/stores/user.store.ts");
/* harmony import */ var _core_interfaces_common_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../@core/interfaces/common/settings */ "./src/app/@core/interfaces/common/settings.ts");
/* harmony import */ var _pages_dashboard_alarmPopup_alarmPopup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../pages/dashboard/alarmPopup/alarmPopup.component */ "./src/app/pages/dashboard/alarmPopup/alarmPopup.component.ts");
/* harmony import */ var _pages_dashboard_services_signal_r_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../pages/dashboard/services/signal-r.service */ "./src/app/pages/dashboard/services/signal-r.service.ts");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _pages_dashboard_OrderPopup_apiGet_services__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../pages/dashboard/OrderPopup/apiGet.services */ "./src/app/pages/dashboard/OrderPopup/apiGet.services.ts");
/* harmony import */ var _nebular_security__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @nebular/security */ "./node_modules/@nebular/security/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _auth_auth_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../@auth/auth.pipe */ "./src/app/@auth/auth.pipe.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */





























function HeaderComponent_nb_action_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-action", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nb-user", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "ngxAuthToken");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbContextMenu", ctx_r0.userMenu)("onlyPicture", ctx_r0.userPictureOnly)("name", ctx_r0.user == null ? null : ctx_r0.user.name)("picture", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, ctx_r0.user == null ? null : ctx_r0.user.picture)));
} }
const _c0 = function () { return ["view", "current-user"]; };
class HeaderComponent {
    constructor(accessChecker, sidebarService, menuService, themeService, userStore, settingsService, layoutService, breakpointService, comp3, router, http, apiGetComp, api, sigalRService) {
        this.accessChecker = accessChecker;
        this.sidebarService = sidebarService;
        this.menuService = menuService;
        this.themeService = themeService;
        this.userStore = userStore;
        this.settingsService = settingsService;
        this.layoutService = layoutService;
        this.breakpointService = breakpointService;
        this.comp3 = comp3;
        this.router = router;
        this.http = http;
        this.apiGetComp = apiGetComp;
        this.api = api;
        this.sigalRService = sigalRService;
        this.numeroAlarmas = "0";
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.userPictureOnly = false;
        this.sicProcess = true;
        this.select = false;
        this.themes = [
            {
                value: 'default',
                name: 'Light',
            },
            {
                value: 'dark',
                name: 'Dark',
            },
            {
                value: 'cosmic',
                name: 'Cosmic',
            },
            {
                value: 'corporate',
                name: 'Corporate',
            },
        ];
        this.currentTheme = 'default';
        this.userMenu = this.getMenuItems();
        this.accessChecker.isGranted('edit', 'ordertable').subscribe((res) => {
            if (res) {
                this.select = false;
                this.mostrar = false;
            }
            else {
                this.select = true;
                this.mostrar = true;
            }
        });
    }
    getMenuItems() {
        const userLink = this.user ? '/pages/users/current/' : '';
        return [
            { title: 'Perfil', link: userLink, queryParams: { profile: true } },
            { title: 'Cerrar Sesión', link: '/auth/logout' },
        ];
    }
    ngOnInit() {
        // this.sigalRService.startConnectionAlarmas();
        // this.startHttpRequestAlarmas();  
        this.sigalRService.GetDataAlarmManual();
        // console.log("test", this.sigalRService);
        this.currentTheme = this.themeService.currentTheme;
        this.userStore.onUserStateChange()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$))
            .subscribe((user) => {
            this.user = user;
            this.userMenu = this.getMenuItems();
        });
        const { xl } = this.breakpointService.getBreakpointsMap();
        this.themeService.onMediaQueryChange()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(([, currentBreakpoint]) => currentBreakpoint.width < xl), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$))
            .subscribe((isLessThanXl) => this.userPictureOnly = isLessThanXl);
        this.themeService.onThemeChange()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(({ name }) => name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$))
            .subscribe(themeName => this.currentTheme = themeName);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.sigalRService.aliveAlarm = false;
    }
    changeTheme(themeName) {
        this.userStore.setSetting(themeName);
        this.settingsService.updateCurrent(this.userStore.getUser().settings)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$))
            .subscribe();
        this.themeService.changeTheme(themeName);
    }
    startHttpRequestAlarmas() {
        this.http.get(this.api.apiUrlMatbox + "/sralarms")
            .subscribe(res => {
            // console.log(res);
        });
    }
    toggleSidebar() {
        this.sidebarService.toggle(true, 'menu-sidebar');
        this.layoutService.changeLayoutSize();
        return false;
    }
    navigateHome() {
        this.menuService.navigateHome();
        return false;
    }
    // AbrirAlarmas(){
    //  this.comp3.openWindowForm("Alarmas","");
    // }
    AbrirAlarms() {
        this.router.navigate(['/pages/tables/alarms/']);
    }
    Actualizar() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
            title: 'Desea sincronizar?',
            text: `¡Sincronizara Syncro y Sic!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '¡Sí, Sincronizar!'
        }).then(result => {
            if (result.value) {
                // this.apiGetComp.GetJson(this.api.apiUrlMatbox + '/Orders/SyncOrder')
                // .subscribe((res: any) => {
                //   console.log('Sic: ',res);
                //   this.sicProcess = res;
                //   Swal.fire('¡Se sincronizo Exitosamente', 'success');
                // });
                //   this.http.get(this.api.apiUrlMatbox + "/Orders/SyncOrder")
                //   .subscribe((res:any)=>{
                //   Swal.fire('¡Se sincronizo Exitosamente', 'success');
                // });
                // Swal.fire('¡Se sincronizo Exitosamente', 'success');
                this.http.get(this.api.apiUrlMatbox + "/Orders/SyncOrder", { observe: 'response' })
                    .pipe()
                    .subscribe(resp => {
                    if (resp.status === 200) {
                        console.log(true);
                    }
                    else {
                        console.log(false);
                    }
                }, err => console.log(err));
                sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire('¡Se sincronizo Exitosamente', 'success');
            }
        });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_security__WEBPACK_IMPORTED_MODULE_14__["NbAccessChecker"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSidebarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbMenuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_stores_user_store__WEBPACK_IMPORTED_MODULE_5__["UserStore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_interfaces_common_settings__WEBPACK_IMPORTED_MODULE_6__["SettingsData"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_utils__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbMediaBreakpointsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_pages_dashboard_alarmPopup_alarmPopup_component__WEBPACK_IMPORTED_MODULE_7__["WindowComponentAlarm"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_pages_dashboard_OrderPopup_apiGet_services__WEBPACK_IMPORTED_MODULE_13__["ApiGetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_pages_dashboard_services_signal_r_service__WEBPACK_IMPORTED_MODULE_8__["SignalRService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["ngx-header"]], decls: 15, vars: 3, consts: [[1, "header-container"], [1, "logo-container"], ["href", "#", 1, "sidebar-toggle", 3, "click"], ["icon", "menu-2-outline"], ["src", "./../../../../assets/images/MATEC_l_White_Logo.svg", "alt", "Matec"], ["href", "#", 1, "logo", 3, "click"], ["size", "small"], ["icon", "bell-outline", "badgeDot", "", "badgePosition", "top right", "badgeStatus", "danger", 1, "control-item", 3, "badgeText", "click"], ["class", "user-action", 4, "nbIsGranted"], [1, "user-action"], [3, "nbContextMenu", "onlyPicture", "name", "picture"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_2_listener() { return ctx.toggleSidebar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nb-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_6_listener() { return ctx.navigateHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "MAT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Bag");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nb-actions", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nb-action", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_nb_action_click_13_listener() { return ctx.AbrirAlarms(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HeaderComponent_nb_action_14_Template, 4, 8, "nb-action", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("badgeText", ctx.sigalRService.numeroAlarmas.NumeroAlarmas);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbIsGranted", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
HeaderComponent.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HeaderComponent, factory: HeaderComponent.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-header',
                styleUrls: ['./header.component.scss'],
                templateUrl: './header.component.html',
            }]
    }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _nebular_security__WEBPACK_IMPORTED_MODULE_14__["NbAccessChecker"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSidebarService"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbMenuService"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"] }, { type: _core_stores_user_store__WEBPACK_IMPORTED_MODULE_5__["UserStore"] }, { type: _core_interfaces_common_settings__WEBPACK_IMPORTED_MODULE_6__["SettingsData"] }, { type: _core_utils__WEBPACK_IMPORTED_MODULE_2__["LayoutService"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbMediaBreakpointsService"] }, { type: _pages_dashboard_alarmPopup_alarmPopup_component__WEBPACK_IMPORTED_MODULE_7__["WindowComponentAlarm"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"] }, { type: _pages_dashboard_OrderPopup_apiGet_services__WEBPACK_IMPORTED_MODULE_13__["ApiGetService"] }, { type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"] }, { type: _pages_dashboard_services_signal_r_service__WEBPACK_IMPORTED_MODULE_8__["SignalRService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@theme/components/index.ts":
/*!********************************************!*\
  !*** ./src/app/@theme/components/index.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent, FooterComponent, SearchInputComponent, TinyMCEComponent, NgxValidationMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ "./src/app/@theme/components/header/header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return _header_header_component__WEBPACK_IMPORTED_MODULE_0__["HeaderComponent"]; });

/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/@theme/components/footer/footer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"]; });

/* harmony import */ var _search_input_search_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-input/search-input.component */ "./src/app/@theme/components/search-input/search-input.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchInputComponent", function() { return _search_input_search_input_component__WEBPACK_IMPORTED_MODULE_2__["SearchInputComponent"]; });

/* harmony import */ var _tiny_mce_tiny_mce_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tiny-mce/tiny-mce.component */ "./src/app/@theme/components/tiny-mce/tiny-mce.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TinyMCEComponent", function() { return _tiny_mce_tiny_mce_component__WEBPACK_IMPORTED_MODULE_3__["TinyMCEComponent"]; });

/* harmony import */ var _components_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@components/validation-message/validation-message.component */ "./src/app/@components/validation-message/validation-message.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxValidationMessageComponent", function() { return _components_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_4__["NgxValidationMessageComponent"]; });

/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */







/***/ }),

/***/ "./src/app/@theme/components/search-input/search-input.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/@theme/components/search-input/search-input.component.ts ***!
  \**************************************************************************/
/*! exports provided: SearchInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchInputComponent", function() { return SearchInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */


const _c0 = ["input"];
class SearchInputComponent {
    constructor() {
        this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isInputShown = false;
    }
    showInput() {
        this.isInputShown = true;
        this.input.nativeElement.focus();
    }
    hideInput() {
        this.isInputShown = false;
    }
    onInput(val) {
        this.search.emit(val);
    }
}
SearchInputComponent.ɵfac = function SearchInputComponent_Factory(t) { return new (t || SearchInputComponent)(); };
SearchInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchInputComponent, selectors: [["ngx-search-input"]], viewQuery: function SearchInputComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
    } }, outputs: { search: "search" }, decls: 3, vars: 2, consts: [[1, "control-icon", "ion", "ion-ios-search", 3, "click"], ["placeholder", "Type your search request here...", 3, "blur", "input"], ["input", ""]], template: function SearchInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchInputComponent_Template_i_click_0_listener() { return ctx.showInput(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function SearchInputComponent_Template_input_blur_1_listener() { return ctx.hideInput(); })("input", function SearchInputComponent_Template_input_input_1_listener($event) { return ctx.onInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hidden", !ctx.isInputShown);
    } }, styles: ["[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]   i.control-icon[_ngcontent-%COMP%]::before {\n  font-size: 2.3rem;\n}\n[_nghost-%COMP%]   i.control-icon[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  margin-left: 1rem;\n  width: 15rem;\n  transition: width 0.2s ease;\n}\n[_nghost-%COMP%]   input.hidden[_ngcontent-%COMP%] {\n  width: 0;\n  margin: 0;\n}\n[_nghost-%COMP%]     search-input input {\n  background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZWJhc3RpYW5sb3NhZGEvRG9jdW1lbnRzL01hdEJhZy9NYXRCYWcuRnJvbnRlbmRWMS9zcmMvYXBwL0B0aGVtZS9jb21wb25lbnRzL3NlYXJjaC1pbnB1dC9zZWFyY2gtaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0B0aGVtZS9jb21wb25lbnRzL3NlYXJjaC1pbnB1dC9zZWFyY2gtaW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7RUNJRTtBREVGO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQ0FyQjtBREZBO0VBTU0saUJBQWlCO0FDQXZCO0FETkE7RUFVTSxlQUFlO0FDQXJCO0FEVkE7RUFlSSxZQUFZO0VBQ1osYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osMkJBQTJCO0FDRC9CO0FEbEJBO0VBc0JNLFFBQVE7RUFDUixTQUFTO0FDQWY7QUR2QkE7RUE2Qk0sdUJBQXVCO0FDRjdCIiwiZmlsZSI6InNyYy9hcHAvQHRoZW1lL2NvbXBvbmVudHMvc2VhcmNoLWlucHV0L3NlYXJjaC1pbnB1dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQ29weXJpZ2h0IChjKSBBa3ZlbyAyMDE5LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIFNpbmdsZSBBcHBsaWNhdGlvbiAvIE11bHRpIEFwcGxpY2F0aW9uIExpY2Vuc2UuXG4gKiBTZWUgTElDRU5TRV9TSU5HTEVfQVBQIC8gTElDRU5TRV9NVUxUSV9BUFAgaW4gdGhlICdkb2NzJyBmb2xkZXIgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24gb24gdHlwZSBvZiBwdXJjaGFzZWQgbGljZW5zZS5cbiAqL1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgaS5jb250cm9sLWljb24ge1xuICAgICY6OmJlZm9yZSB7XG4gICAgICBmb250LXNpemU6IDIuM3JlbTtcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gIH1cblxuICBpbnB1dCB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgd2lkdGg6IDE1cmVtO1xuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuMnMgZWFzZTtcblxuICAgICYuaGlkZGVuIHtcbiAgICAgIHdpZHRoOiAwO1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfVxuXG4gIDo6bmctZGVlcCBzZWFyY2gtaW5wdXQge1xuICAgIGlucHV0IHtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgfVxufVxuIiwiLyohXG4gKiBDb3B5cmlnaHQgKGMpIEFrdmVvIDIwMTkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgU2luZ2xlIEFwcGxpY2F0aW9uIC8gTXVsdGkgQXBwbGljYXRpb24gTGljZW5zZS5cbiAqIFNlZSBMSUNFTlNFX1NJTkdMRV9BUFAgLyBMSUNFTlNFX01VTFRJX0FQUCBpbiB0aGUgJ2RvY3MnIGZvbGRlciBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbiBvbiB0eXBlIG9mIHB1cmNoYXNlZCBsaWNlbnNlLlxuICovXG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbjpob3N0IGkuY29udHJvbC1pY29uOjpiZWZvcmUge1xuICBmb250LXNpemU6IDIuM3JlbTtcbn1cblxuOmhvc3QgaS5jb250cm9sLWljb246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbjpob3N0IGlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgd2lkdGg6IDE1cmVtO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjJzIGVhc2U7XG59XG5cbjpob3N0IGlucHV0LmhpZGRlbiB7XG4gIHdpZHRoOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbjpob3N0IDo6bmctZGVlcCBzZWFyY2gtaW5wdXQgaW5wdXQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-search-input',
                styleUrls: ['./search-input.component.scss'],
                template: `
    <i class="control-icon ion ion-ios-search"
       (click)="showInput()"></i>
    <input placeholder="Type your search request here..."
           #input
           [class.hidden]="!isInputShown"
           (blur)="hideInput()"
           (input)="onInput($event)">
  `,
            }]
    }], null, { input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['input', { static: true }]
        }], search: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/@theme/components/tiny-mce/tiny-mce.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/@theme/components/tiny-mce/tiny-mce.component.ts ***!
  \******************************************************************/
/*! exports provided: TinyMCEComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TinyMCEComponent", function() { return TinyMCEComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */




class TinyMCEComponent {
    constructor(host, locationStrategy) {
        this.host = host;
        this.locationStrategy = locationStrategy;
        this.editorKeyup = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngAfterViewInit() {
        tinymce.init({
            target: this.host.nativeElement,
            plugins: ['link', 'paste', 'table'],
            skin_url: `${this.locationStrategy.getBaseHref()}assets/skins/lightgray`,
            setup: editor => {
                this.editor = editor;
                editor.on('keyup', () => {
                    this.editorKeyup.emit(editor.getContent());
                });
            },
            height: '320',
        });
    }
    ngOnDestroy() {
        tinymce.remove(this.editor);
    }
}
TinyMCEComponent.ɵfac = function TinyMCEComponent_Factory(t) { return new (t || TinyMCEComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["LocationStrategy"])); };
TinyMCEComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TinyMCEComponent, selectors: [["ngx-tiny-mce"]], outputs: { editorKeyup: "editorKeyup" }, decls: 0, vars: 0, template: function TinyMCEComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TinyMCEComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-tiny-mce',
                template: '',
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["LocationStrategy"] }]; }, { editorKeyup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/@theme/layouts/index.ts":
/*!*****************************************!*\
  !*** ./src/app/@theme/layouts/index.ts ***!
  \*****************************************/
/*! exports provided: OneColumnLayoutComponent, TwoColumnsLayoutComponent, ThreeColumnsLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _one_column_one_column_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./one-column/one-column.layout */ "./src/app/@theme/layouts/one-column/one-column.layout.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OneColumnLayoutComponent", function() { return _one_column_one_column_layout__WEBPACK_IMPORTED_MODULE_0__["OneColumnLayoutComponent"]; });

/* harmony import */ var _two_columns_two_columns_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./two-columns/two-columns.layout */ "./src/app/@theme/layouts/two-columns/two-columns.layout.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TwoColumnsLayoutComponent", function() { return _two_columns_two_columns_layout__WEBPACK_IMPORTED_MODULE_1__["TwoColumnsLayoutComponent"]; });

/* harmony import */ var _three_columns_three_columns_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./three-columns/three-columns.layout */ "./src/app/@theme/layouts/three-columns/three-columns.layout.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThreeColumnsLayoutComponent", function() { return _three_columns_three_columns_layout__WEBPACK_IMPORTED_MODULE_2__["ThreeColumnsLayoutComponent"]; });

/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */





/***/ }),

/***/ "./src/app/@theme/layouts/one-column/one-column.layout.ts":
/*!****************************************************************!*\
  !*** ./src/app/@theme/layouts/one-column/one-column.layout.ts ***!
  \****************************************************************/
/*! exports provided: OneColumnLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneColumnLayoutComponent", function() { return OneColumnLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/header/header.component */ "./src/app/@theme/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/footer/footer.component */ "./src/app/@theme/components/footer/footer.component.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */





const _c0 = [[["nb-menu"]], [["router-outlet"]]];
const _c1 = ["nb-menu", "router-outlet"];
class OneColumnLayoutComponent {
}
OneColumnLayoutComponent.ɵfac = function OneColumnLayoutComponent_Factory(t) { return new (t || OneColumnLayoutComponent)(); };
OneColumnLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OneColumnLayoutComponent, selectors: [["ngx-one-column-layout"]], ngContentSelectors: _c1, decls: 9, vars: 0, consts: [["windowMode", ""], ["fixed", ""], ["tag", "menu-sidebar", "responsive", "", "start", "", 1, "menu-sidebar"]], template: function OneColumnLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngx-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-sidebar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-layout-column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nb-layout-footer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ngx-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OneColumnLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-one-column-layout',
                styleUrls: ['./one-column.layout.scss'],
                template: `
    <nb-layout windowMode>
      <nb-layout-header fixed>
        <ngx-header></ngx-header>
      </nb-layout-header>

      <nb-sidebar class="menu-sidebar" tag="menu-sidebar" responsive start>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-footer fixed>
        <ngx-footer></ngx-footer>
      </nb-layout-footer>
    </nb-layout>
  `,
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/@theme/layouts/three-columns/three-columns.layout.ts":
/*!**********************************************************************!*\
  !*** ./src/app/@theme/layouts/three-columns/three-columns.layout.ts ***!
  \**********************************************************************/
/*! exports provided: ThreeColumnsLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThreeColumnsLayoutComponent", function() { return ThreeColumnsLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/header/header.component */ "./src/app/@theme/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/footer/footer.component */ "./src/app/@theme/components/footer/footer.component.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */





const _c0 = [[["nb-menu"]], [["router-outlet"]]];
const _c1 = ["nb-menu", "router-outlet"];
class ThreeColumnsLayoutComponent {
}
ThreeColumnsLayoutComponent.ɵfac = function ThreeColumnsLayoutComponent_Factory(t) { return new (t || ThreeColumnsLayoutComponent)(); };
ThreeColumnsLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ThreeColumnsLayoutComponent, selectors: [["ngx-three-columns-layout"]], ngContentSelectors: _c1, decls: 11, vars: 0, consts: [["windowMode", ""], ["fixed", ""], ["tag", "menu-sidebar", "responsive", "", 1, "menu-sidebar"], [1, "small"]], template: function ThreeColumnsLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngx-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-sidebar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nb-layout-column", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-layout-column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "nb-layout-column", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-layout-footer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "ngx-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThreeColumnsLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-three-columns-layout',
                styleUrls: ['./three-columns.layout.scss'],
                template: `
    <nb-layout windowMode>
      <nb-layout-header fixed>
        <ngx-header></ngx-header>
      </nb-layout-header>

      <nb-sidebar class="menu-sidebar" tag="menu-sidebar" responsive>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column class="small">
      </nb-layout-column>

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-column class="small">
      </nb-layout-column>

      <nb-layout-footer fixed>
        <ngx-footer></ngx-footer>
      </nb-layout-footer>
    </nb-layout>
  `,
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/@theme/layouts/two-columns/two-columns.layout.ts":
/*!******************************************************************!*\
  !*** ./src/app/@theme/layouts/two-columns/two-columns.layout.ts ***!
  \******************************************************************/
/*! exports provided: TwoColumnsLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwoColumnsLayoutComponent", function() { return TwoColumnsLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/header/header.component */ "./src/app/@theme/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/footer/footer.component */ "./src/app/@theme/components/footer/footer.component.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */





const _c0 = [[["nb-menu"]], [["router-outlet"]]];
const _c1 = ["nb-menu", "router-outlet"];
class TwoColumnsLayoutComponent {
}
TwoColumnsLayoutComponent.ɵfac = function TwoColumnsLayoutComponent_Factory(t) { return new (t || TwoColumnsLayoutComponent)(); };
TwoColumnsLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TwoColumnsLayoutComponent, selectors: [["ngx-two-columns-layout"]], ngContentSelectors: _c1, decls: 10, vars: 0, consts: [["windowMode", ""], ["fixed", ""], ["tag", "menu-sidebar", "responsive", "", 1, "menu-sidebar"], [1, "small"]], template: function TwoColumnsLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngx-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-sidebar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nb-layout-column", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-layout-column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nb-layout-footer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "ngx-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TwoColumnsLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-two-columns-layout',
                styleUrls: ['./two-columns.layout.scss'],
                template: `
    <nb-layout windowMode>
      <nb-layout-header fixed>
        <ngx-header></ngx-header>
      </nb-layout-header>

      <nb-sidebar class="menu-sidebar" tag="menu-sidebar" responsive>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column class="small">
      </nb-layout-column>

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-footer fixed>
        <ngx-footer></ngx-footer>
      </nb-layout-footer>

    </nb-layout>
  `,
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/@theme/pipes/capitalize.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/@theme/pipes/capitalize.pipe.ts ***!
  \*************************************************/
/*! exports provided: CapitalizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapitalizePipe", function() { return CapitalizePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */


class CapitalizePipe {
    transform(input) {
        return input && input.length
            ? (input.charAt(0).toUpperCase() + input.slice(1).toLowerCase())
            : input;
    }
}
CapitalizePipe.ɵfac = function CapitalizePipe_Factory(t) { return new (t || CapitalizePipe)(); };
CapitalizePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "ngxCapitalize", type: CapitalizePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CapitalizePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'ngxCapitalize' }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/@theme/pipes/index.ts":
/*!***************************************!*\
  !*** ./src/app/@theme/pipes/index.ts ***!
  \***************************************/
/*! exports provided: CapitalizePipe, PluralPipe, RoundPipe, TimingPipe, NumberWithCommasPipe, MeasureConverterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _capitalize_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./capitalize.pipe */ "./src/app/@theme/pipes/capitalize.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CapitalizePipe", function() { return _capitalize_pipe__WEBPACK_IMPORTED_MODULE_0__["CapitalizePipe"]; });

/* harmony import */ var _plural_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plural.pipe */ "./src/app/@theme/pipes/plural.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PluralPipe", function() { return _plural_pipe__WEBPACK_IMPORTED_MODULE_1__["PluralPipe"]; });

/* harmony import */ var _round_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./round.pipe */ "./src/app/@theme/pipes/round.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RoundPipe", function() { return _round_pipe__WEBPACK_IMPORTED_MODULE_2__["RoundPipe"]; });

/* harmony import */ var _timing_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timing.pipe */ "./src/app/@theme/pipes/timing.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimingPipe", function() { return _timing_pipe__WEBPACK_IMPORTED_MODULE_3__["TimingPipe"]; });

/* harmony import */ var _number_with_commas_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./number-with-commas.pipe */ "./src/app/@theme/pipes/number-with-commas.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumberWithCommasPipe", function() { return _number_with_commas_pipe__WEBPACK_IMPORTED_MODULE_4__["NumberWithCommasPipe"]; });

/* harmony import */ var _measure_converter_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./measure-converter.pipe */ "./src/app/@theme/pipes/measure-converter.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MeasureConverterPipe", function() { return _measure_converter_pipe__WEBPACK_IMPORTED_MODULE_5__["MeasureConverterPipe"]; });

/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */








/***/ }),

/***/ "./src/app/@theme/pipes/measure-converter.pipe.ts":
/*!********************************************************!*\
  !*** ./src/app/@theme/pipes/measure-converter.pipe.ts ***!
  \********************************************************/
/*! exports provided: MeasureConverterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeasureConverterPipe", function() { return MeasureConverterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MeasureConverterPipe {
    transform(input) {
        if (typeof input === 'string') {
            return input;
        }
        if (input === 0) {
            return '0 Byte';
        }
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        const degree = Math.floor(Math.log(input) / Math.log(1024));
        return (input / Math.pow(1024, degree)).toFixed(2) + ' ' + sizes[degree];
    }
}
MeasureConverterPipe.ɵfac = function MeasureConverterPipe_Factory(t) { return new (t || MeasureConverterPipe)(); };
MeasureConverterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "ngxMeasureConverter", type: MeasureConverterPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MeasureConverterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'ngxMeasureConverter' }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/@theme/pipes/number-with-commas.pipe.ts":
/*!*********************************************************!*\
  !*** ./src/app/@theme/pipes/number-with-commas.pipe.ts ***!
  \*********************************************************/
/*! exports provided: NumberWithCommasPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberWithCommasPipe", function() { return NumberWithCommasPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */


class NumberWithCommasPipe {
    transform(input) {
        return new Intl.NumberFormat().format(input);
    }
}
NumberWithCommasPipe.ɵfac = function NumberWithCommasPipe_Factory(t) { return new (t || NumberWithCommasPipe)(); };
NumberWithCommasPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "ngxNumberWithCommas", type: NumberWithCommasPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NumberWithCommasPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'ngxNumberWithCommas' }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/@theme/pipes/plural.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/@theme/pipes/plural.pipe.ts ***!
  \*********************************************/
/*! exports provided: PluralPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluralPipe", function() { return PluralPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */


class PluralPipe {
    transform(input, label, pluralLabel = '') {
        input = input || 0;
        return input === 1
            ? `${input} ${label}`
            : pluralLabel
                ? `${input} ${pluralLabel}`
                : `${input} ${label}s`;
    }
}
PluralPipe.ɵfac = function PluralPipe_Factory(t) { return new (t || PluralPipe)(); };
PluralPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "ngxPlural", type: PluralPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PluralPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'ngxPlural' }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/@theme/pipes/round.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/@theme/pipes/round.pipe.ts ***!
  \********************************************/
/*! exports provided: RoundPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundPipe", function() { return RoundPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */


class RoundPipe {
    transform(input) {
        return Math.round(input);
    }
}
RoundPipe.ɵfac = function RoundPipe_Factory(t) { return new (t || RoundPipe)(); };
RoundPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "ngxRound", type: RoundPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoundPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'ngxRound' }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/@theme/pipes/timing.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/@theme/pipes/timing.pipe.ts ***!
  \*********************************************/
/*! exports provided: TimingPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimingPipe", function() { return TimingPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */


class TimingPipe {
    transform(time) {
        if (time) {
            const minutes = Math.floor(time / 60);
            const seconds = Math.floor(time % 60);
            return `${this.initZero(minutes)}${minutes}:${this.initZero(seconds)}${seconds}`;
        }
        return '00:00';
    }
    initZero(time) {
        return time < 10 ? '0' : '';
    }
}
TimingPipe.ɵfac = function TimingPipe_Factory(t) { return new (t || TimingPipe)(); };
TimingPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "timing", type: TimingPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimingPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'timing' }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/@theme/services/init-user.service.ts":
/*!******************************************************!*\
  !*** ./src/app/@theme/services/init-user.service.ts ***!
  \******************************************************/
/*! exports provided: InitUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitUserService", function() { return InitUserService; });
/* harmony import */ var _core_interfaces_common_users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../@core/interfaces/common/users */ "./src/app/@core/interfaces/common/users.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_stores_user_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../@core/stores/user.store */ "./src/app/@core/stores/user.store.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/auth */ "./node_modules/@nebular/auth/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../@auth/helpers */ "./src/app/@auth/helpers.ts");














class InitUserService {
    constructor(userStore, service, router, options = {}, usersService, jsThemes, themeService) {
        this.userStore = userStore;
        this.service = service;
        this.router = router;
        this.options = options;
        this.usersService = usersService;
        this.jsThemes = jsThemes;
        this.themeService = themeService;
        this.redirectDelay = this.getConfigValue('forms.logout.redirectDelay');
        this.strategy = this.getConfigValue('forms.logout.strategy');
    }
    ngOnInit() {
        this.autoLogout;
    }
    initCurrentUser() {
        return this.usersService.getCurrentUser()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((user) => {
            if (user) {
                this.userStore.setUser(user);
                if (user.settings && user.settings.themeName) {
                    if (this.jsThemes.has(user.settings.themeName)) {
                        this.themeService.changeTheme(user.settings.themeName);
                    }
                }
            }
        }));
    }
    autoLogout(expirationData, strategy) {
        console.log(expirationData);
        setTimeout(() => {
            this.service.logout(strategy).subscribe((result) => {
                const redirect = result.getRedirect();
                if (redirect) {
                    setTimeout(() => {
                        return this.router.navigateByUrl(redirect);
                    }, this.redirectDelay);
                }
            });
        }, expirationData, 300000);
    }
    getConfigValue(key) {
        return Object(_auth_helpers__WEBPACK_IMPORTED_MODULE_7__["getDeepFromObject"])(this.options, key, null);
    }
}
InitUserService.ɵfac = function InitUserService_Factory(t) { return new (t || InitUserService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_core_stores_user_store__WEBPACK_IMPORTED_MODULE_2__["UserStore"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_4__["NbAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_4__["NB_AUTH_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_core_interfaces_common_users__WEBPACK_IMPORTED_MODULE_0__["UserData"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbJSThemesRegistry"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbThemeService"])); };
InitUserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: InitUserService, factory: InitUserService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](InitUserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"]
    }], function () { return [{ type: _core_stores_user_store__WEBPACK_IMPORTED_MODULE_2__["UserStore"] }, { type: _nebular_auth__WEBPACK_IMPORTED_MODULE_4__["NbAuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [_nebular_auth__WEBPACK_IMPORTED_MODULE_4__["NB_AUTH_OPTIONS"]]
            }] }, { type: _core_interfaces_common_users__WEBPACK_IMPORTED_MODULE_0__["UserData"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbJSThemesRegistry"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbThemeService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/@theme/styles/theme.corporate.ts":
/*!**************************************************!*\
  !*** ./src/app/@theme/styles/theme.corporate.ts ***!
  \**************************************************/
/*! exports provided: CORPORATE_THEME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CORPORATE_THEME", function() { return CORPORATE_THEME; });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");

const baseThemeVariables = _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["CORPORATE_THEME"].variables;
const CORPORATE_THEME = {
    name: 'corporate',
    base: 'corporate',
    variables: {
        temperature: {
            arcFill: ['#ffa36b', '#ffa36b', '#ff9e7a', '#ff9888', '#ff8ea0'],
            arcEmpty: baseThemeVariables.bg2,
            thumbBg: baseThemeVariables.bg2,
            thumbBorder: '#ffa36b',
        },
        solar: {
            gradientLeft: baseThemeVariables.primary,
            gradientRight: baseThemeVariables.primary,
            shadowColor: 'rgba(0, 0, 0, 0)',
            secondSeriesFill: baseThemeVariables.bg2,
            radius: ['80%', '90%'],
        },
        traffic: {
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            yAxisSplitLine: 'rgba(0, 0, 0, 0)',
            lineBg: baseThemeVariables.primary,
            lineShadowBlur: '0',
            itemColor: baseThemeVariables.border4,
            itemBorderColor: baseThemeVariables.border4,
            itemEmphasisBorderColor: baseThemeVariables.primaryLight,
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            shadowLineShadow: 'rgba(0, 0, 0, 0)',
            gradFrom: baseThemeVariables.bg,
            gradTo: baseThemeVariables.bg,
        },
        electricity: {
            tooltipBg: baseThemeVariables.bg,
            tooltipLineColor: baseThemeVariables.fgText,
            tooltipLineWidth: '0',
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            axisLineColor: baseThemeVariables.border3,
            xAxisTextColor: baseThemeVariables.fg,
            yAxisSplitLine: baseThemeVariables.separator,
            itemBorderColor: baseThemeVariables.primary,
            lineStyle: 'solid',
            lineWidth: '4',
            lineGradFrom: baseThemeVariables.primary,
            lineGradTo: baseThemeVariables.primary,
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: 'rgba(0, 0, 0, 0)',
            areaGradTo: 'rgba(0, 0, 0, 0)',
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
        },
        bubbleMap: {
            titleColor: baseThemeVariables.fgText,
            areaColor: baseThemeVariables.bg4,
            areaHoverColor: baseThemeVariables.fgHighlight,
            areaBorderColor: baseThemeVariables.border5,
        },
        profitBarAnimationEchart: {
            textColor: baseThemeVariables.fgText,
            firstAnimationBarColor: baseThemeVariables.primary,
            secondAnimationBarColor: baseThemeVariables.success,
            splitLineStyleOpacity: '1',
            splitLineStyleWidth: '1',
            splitLineStyleColor: baseThemeVariables.separator,
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipBorderWidth: '1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
        },
        trafficBarEchart: {
            gradientFrom: baseThemeVariables.warningLight,
            gradientTo: baseThemeVariables.warning,
            shadow: baseThemeVariables.warningLight,
            shadowBlur: '0',
            axisTextColor: baseThemeVariables.fgText,
            axisFontSize: '12',
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
        },
        countryOrders: {
            countryBorderColor: baseThemeVariables.border4,
            countryFillColor: baseThemeVariables.bg4,
            countryBorderWidth: '1',
            hoveredCountryBorderColor: baseThemeVariables.primary,
            hoveredCountryFillColor: baseThemeVariables.primaryLight,
            hoveredCountryBorderWidth: '1',
            chartAxisLineColor: baseThemeVariables.border4,
            chartAxisTextColor: baseThemeVariables.fg,
            chartAxisFontSize: '16',
            chartGradientTo: baseThemeVariables.primary,
            chartGradientFrom: baseThemeVariables.primaryLight,
            chartAxisSplitLine: baseThemeVariables.separator,
            chartShadowLineColor: baseThemeVariables.primaryLight,
            chartLineBottomShadowColor: baseThemeVariables.primary,
            chartInnerLineColor: baseThemeVariables.bg2,
        },
        echarts: {
            bg: baseThemeVariables.bg,
            textColor: baseThemeVariables.fgText,
            axisLineColor: baseThemeVariables.fgText,
            splitLineColor: baseThemeVariables.separator,
            itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
            tooltipBackgroundColor: baseThemeVariables.primary,
            areaOpacity: '0.7',
        },
        chartjs: {
            axisLineColor: baseThemeVariables.separator,
            textColor: baseThemeVariables.fgText,
        },
        orders: {
            tooltipBg: baseThemeVariables.bg,
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '0',
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '20',
            axisLineColor: baseThemeVariables.border4,
            axisFontSize: '16',
            axisTextColor: baseThemeVariables.fg,
            yAxisSplitLine: baseThemeVariables.separator,
            itemBorderColor: baseThemeVariables.primary,
            lineStyle: 'solid',
            lineWidth: '4',
            // first line
            firstAreaGradFrom: baseThemeVariables.bg3,
            firstAreaGradTo: baseThemeVariables.bg3,
            firstShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            // second line
            secondLineGradFrom: baseThemeVariables.primary,
            secondLineGradTo: baseThemeVariables.primary,
            secondAreaGradFrom: 'rgba(0, 0, 0, 0)',
            secondAreaGradTo: 'rgba(0, 0, 0, 0)',
            secondShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            // third line
            thirdLineGradFrom: baseThemeVariables.success,
            thirdLineGradTo: baseThemeVariables.successLight,
            thirdAreaGradFrom: 'rgba(0, 0, 0, 0)',
            thirdAreaGradTo: 'rgba(0, 0, 0, 0)',
            thirdShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
        },
        profit: {
            bg: baseThemeVariables.bg,
            textColor: baseThemeVariables.fgText,
            axisLineColor: baseThemeVariables.border4,
            splitLineColor: baseThemeVariables.separator,
            areaOpacity: '1',
            axisFontSize: '16',
            axisTextColor: baseThemeVariables.fg,
            // first bar
            firstLineGradFrom: baseThemeVariables.bg3,
            firstLineGradTo: baseThemeVariables.bg3,
            firstLineShadow: 'rgba(0, 0, 0, 0)',
            // second bar
            secondLineGradFrom: baseThemeVariables.primary,
            secondLineGradTo: baseThemeVariables.primary,
            secondLineShadow: 'rgba(0, 0, 0, 0)',
            // third bar
            thirdLineGradFrom: baseThemeVariables.success,
            thirdLineGradTo: baseThemeVariables.success,
            thirdLineShadow: 'rgba(0, 0, 0, 0)',
        },
        orderProfitLegend: {
            firstItem: baseThemeVariables.success,
            secondItem: baseThemeVariables.primary,
            thirdItem: baseThemeVariables.bg3,
        },
        visitors: {
            tooltipBg: baseThemeVariables.bg,
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '1',
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '20',
            axisLineColor: baseThemeVariables.border4,
            axisFontSize: '16',
            axisTextColor: baseThemeVariables.fg,
            yAxisSplitLine: baseThemeVariables.separator,
            itemBorderColor: baseThemeVariables.primary,
            lineStyle: 'dotted',
            lineWidth: '6',
            lineGradFrom: '#ffffff',
            lineGradTo: '#ffffff',
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: baseThemeVariables.primary,
            areaGradTo: baseThemeVariables.primaryLight,
            innerLineStyle: 'solid',
            innerLineWidth: '1',
            innerAreaGradFrom: baseThemeVariables.success,
            innerAreaGradTo: baseThemeVariables.success,
        },
        visitorsLegend: {
            firstIcon: baseThemeVariables.success,
            secondIcon: baseThemeVariables.primary,
        },
        visitorsPie: {
            firstPieGradientLeft: baseThemeVariables.success,
            firstPieGradientRight: baseThemeVariables.success,
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            firstPieRadius: ['65%', '90%'],
            secondPieGradientLeft: baseThemeVariables.warning,
            secondPieGradientRight: baseThemeVariables.warningLight,
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieRadius: ['63%', '92%'],
            shadowOffsetX: '-4',
            shadowOffsetY: '-4',
        },
        visitorsPieLegend: {
            firstSection: baseThemeVariables.warning,
            secondSection: baseThemeVariables.success,
        },
        earningPie: {
            radius: ['65%', '100%'],
            center: ['50%', '50%'],
            fontSize: '22',
            firstPieGradientLeft: baseThemeVariables.success,
            firstPieGradientRight: baseThemeVariables.success,
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieGradientLeft: baseThemeVariables.primary,
            secondPieGradientRight: baseThemeVariables.primary,
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            thirdPieGradientLeft: baseThemeVariables.warning,
            thirdPieGradientRight: baseThemeVariables.warning,
            thirdPieShadowColor: 'rgba(0, 0, 0, 0)',
        },
        earningLine: {
            gradFrom: baseThemeVariables.primary,
            gradTo: baseThemeVariables.primary,
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipBorderWidth: '1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
        },
    },
};


/***/ }),

/***/ "./src/app/@theme/styles/theme.cosmic.ts":
/*!***********************************************!*\
  !*** ./src/app/@theme/styles/theme.cosmic.ts ***!
  \***********************************************/
/*! exports provided: COSMIC_THEME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COSMIC_THEME", function() { return COSMIC_THEME; });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");

const baseThemeVariables = _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["COSMIC_THEME"].variables;
const COSMIC_THEME = {
    name: 'cosmic',
    base: 'cosmic',
    variables: {
        temperature: {
            arcFill: ['#2ec7fe', '#31ffad', '#7bff24', '#fff024', '#f7bd59'],
            arcEmpty: baseThemeVariables.bg2,
            thumbBg: '#ffffff',
            thumbBorder: '#ffffff',
        },
        solar: {
            gradientLeft: baseThemeVariables.primary,
            gradientRight: baseThemeVariables.primary,
            shadowColor: 'rgba(0, 0, 0, 0)',
            secondSeriesFill: baseThemeVariables.bg2,
            radius: ['70%', '90%'],
        },
        traffic: {
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(50, 50, 89); border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            yAxisSplitLine: baseThemeVariables.separator,
            lineBg: baseThemeVariables.border2,
            lineShadowBlur: '14',
            itemColor: baseThemeVariables.border2,
            itemBorderColor: baseThemeVariables.border2,
            itemEmphasisBorderColor: baseThemeVariables.primary,
            shadowLineDarkBg: baseThemeVariables.border3,
            shadowLineShadow: baseThemeVariables.border3,
            gradFrom: baseThemeVariables.bg,
            gradTo: baseThemeVariables.bg2,
        },
        electricity: {
            tooltipBg: baseThemeVariables.bg,
            tooltipLineColor: baseThemeVariables.fgText,
            tooltipLineWidth: '0',
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            axisLineColor: baseThemeVariables.border3,
            xAxisTextColor: baseThemeVariables.fg,
            yAxisSplitLine: baseThemeVariables.separator,
            itemBorderColor: baseThemeVariables.border2,
            lineStyle: 'dotted',
            lineWidth: '6',
            lineGradFrom: baseThemeVariables.success,
            lineGradTo: baseThemeVariables.warning,
            lineShadow: baseThemeVariables.bg4,
            areaGradFrom: baseThemeVariables.bg2,
            areaGradTo: baseThemeVariables.bg3,
            shadowLineDarkBg: baseThemeVariables.bg3,
        },
        bubbleMap: {
            titleColor: baseThemeVariables.fgText,
            areaColor: baseThemeVariables.bg4,
            areaHoverColor: baseThemeVariables.fgHighlight,
            areaBorderColor: baseThemeVariables.border5,
        },
        profitBarAnimationEchart: {
            textColor: baseThemeVariables.fgText,
            firstAnimationBarColor: baseThemeVariables.primary,
            secondAnimationBarColor: baseThemeVariables.success,
            splitLineStyleOpacity: '1',
            splitLineStyleWidth: '1',
            splitLineStyleColor: baseThemeVariables.border2,
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipBorderWidth: '1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
        },
        trafficBarEchart: {
            gradientFrom: baseThemeVariables.warningLight,
            gradientTo: baseThemeVariables.warning,
            shadow: baseThemeVariables.warningLight,
            shadowBlur: '5',
            axisTextColor: baseThemeVariables.fgText,
            axisFontSize: '12',
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
        },
        countryOrders: {
            countryBorderColor: baseThemeVariables.border4,
            countryFillColor: baseThemeVariables.bg3,
            countryBorderWidth: '1',
            hoveredCountryBorderColor: baseThemeVariables.primary,
            hoveredCountryFillColor: baseThemeVariables.primaryLight,
            hoveredCountryBorderWidth: '1',
            chartAxisLineColor: baseThemeVariables.border4,
            chartAxisTextColor: baseThemeVariables.fg,
            chartAxisFontSize: '16',
            chartGradientTo: baseThemeVariables.primary,
            chartGradientFrom: baseThemeVariables.primaryLight,
            chartAxisSplitLine: baseThemeVariables.separator,
            chartShadowLineColor: baseThemeVariables.primaryLight,
            chartLineBottomShadowColor: baseThemeVariables.primary,
            chartInnerLineColor: baseThemeVariables.bg2,
        },
        echarts: {
            bg: baseThemeVariables.bg,
            textColor: baseThemeVariables.fgText,
            axisLineColor: baseThemeVariables.fgText,
            splitLineColor: baseThemeVariables.separator,
            itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
            tooltipBackgroundColor: baseThemeVariables.primary,
            areaOpacity: '1',
        },
        chartjs: {
            axisLineColor: baseThemeVariables.separator,
            textColor: baseThemeVariables.fgText,
        },
        orders: {
            tooltipBg: baseThemeVariables.bg,
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '0',
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '20',
            axisLineColor: baseThemeVariables.border4,
            axisFontSize: '16',
            axisTextColor: baseThemeVariables.fg,
            yAxisSplitLine: baseThemeVariables.separator,
            itemBorderColor: baseThemeVariables.primary,
            lineStyle: 'solid',
            lineWidth: '4',
            // first line
            firstAreaGradFrom: baseThemeVariables.bg2,
            firstAreaGradTo: baseThemeVariables.bg2,
            firstShadowLineDarkBg: baseThemeVariables.bg2,
            // second line
            secondLineGradFrom: baseThemeVariables.primary,
            secondLineGradTo: baseThemeVariables.primary,
            secondAreaGradFrom: 'rgba(161, 110, 255, 0.8)',
            secondAreaGradTo: 'rgba(161, 110, 255, 0.5)',
            secondShadowLineDarkBg: baseThemeVariables.primary,
            // third line
            thirdLineGradFrom: baseThemeVariables.success,
            thirdLineGradTo: baseThemeVariables.successLight,
            thirdAreaGradFrom: 'rgba(0, 214, 143, 0.7)',
            thirdAreaGradTo: 'rgba(0, 214, 143, 0.4)',
            thirdShadowLineDarkBg: baseThemeVariables.success,
        },
        profit: {
            bg: baseThemeVariables.bg,
            textColor: baseThemeVariables.fgText,
            axisLineColor: baseThemeVariables.border4,
            splitLineColor: baseThemeVariables.separator,
            areaOpacity: '1',
            axisFontSize: '16',
            axisTextColor: baseThemeVariables.fg,
            // first bar
            firstLineGradFrom: baseThemeVariables.bg2,
            firstLineGradTo: baseThemeVariables.bg2,
            firstLineShadow: 'rgba(0, 0, 0, 0)',
            // second bar
            secondLineGradFrom: baseThemeVariables.primary,
            secondLineGradTo: baseThemeVariables.primary,
            secondLineShadow: 'rgba(0, 0, 0, 0)',
            // third bar
            thirdLineGradFrom: baseThemeVariables.success,
            thirdLineGradTo: baseThemeVariables.successLight,
            thirdLineShadow: 'rgba(0, 0, 0, 0)',
        },
        orderProfitLegend: {
            firstItem: baseThemeVariables.success,
            secondItem: baseThemeVariables.primary,
            thirdItem: baseThemeVariables.bg2,
        },
        visitors: {
            tooltipBg: baseThemeVariables.bg,
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '1',
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '20',
            axisLineColor: baseThemeVariables.border4,
            axisFontSize: '16',
            axisTextColor: baseThemeVariables.fg,
            yAxisSplitLine: baseThemeVariables.separator,
            itemBorderColor: baseThemeVariables.primary,
            lineStyle: 'dotted',
            lineWidth: '6',
            lineGradFrom: '#ffffff',
            lineGradTo: '#ffffff',
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: baseThemeVariables.primary,
            areaGradTo: baseThemeVariables.primaryLight,
            innerLineStyle: 'solid',
            innerLineWidth: '1',
            innerAreaGradFrom: baseThemeVariables.success,
            innerAreaGradTo: baseThemeVariables.success,
        },
        visitorsLegend: {
            firstIcon: baseThemeVariables.success,
            secondIcon: baseThemeVariables.primary,
        },
        visitorsPie: {
            firstPieGradientLeft: baseThemeVariables.success,
            firstPieGradientRight: baseThemeVariables.successLight,
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            firstPieRadius: ['70%', '90%'],
            secondPieGradientLeft: baseThemeVariables.warning,
            secondPieGradientRight: baseThemeVariables.warningLight,
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieRadius: ['60%', '95%'],
            shadowOffsetX: '0',
            shadowOffsetY: '3',
        },
        visitorsPieLegend: {
            firstSection: baseThemeVariables.warning,
            secondSection: baseThemeVariables.success,
        },
        earningPie: {
            radius: ['65%', '100%'],
            center: ['50%', '50%'],
            fontSize: '22',
            firstPieGradientLeft: baseThemeVariables.success,
            firstPieGradientRight: baseThemeVariables.success,
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieGradientLeft: baseThemeVariables.primary,
            secondPieGradientRight: baseThemeVariables.primary,
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            thirdPieGradientLeft: baseThemeVariables.warning,
            thirdPieGradientRight: baseThemeVariables.warning,
            thirdPieShadowColor: 'rgba(0, 0, 0, 0)',
        },
        earningLine: {
            gradFrom: baseThemeVariables.primary,
            gradTo: baseThemeVariables.primary,
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipBorderWidth: '1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
        },
    },
};


/***/ }),

/***/ "./src/app/@theme/styles/theme.dark.ts":
/*!*********************************************!*\
  !*** ./src/app/@theme/styles/theme.dark.ts ***!
  \*********************************************/
/*! exports provided: DARK_THEME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DARK_THEME", function() { return DARK_THEME; });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");

const baseThemeVariables = _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["DARK_THEME"].variables;
const DARK_THEME = {
    name: 'dark',
    base: 'dark',
    variables: {
        temperature: {
            arcFill: [
                baseThemeVariables.primary,
                baseThemeVariables.primary,
                baseThemeVariables.primary,
                baseThemeVariables.primary,
                baseThemeVariables.primary,
            ],
            arcEmpty: baseThemeVariables.bg2,
            thumbBg: baseThemeVariables.bg2,
            thumbBorder: baseThemeVariables.primary,
        },
        solar: {
            gradientLeft: baseThemeVariables.primary,
            gradientRight: baseThemeVariables.primary,
            shadowColor: 'rgba(0, 0, 0, 0)',
            secondSeriesFill: baseThemeVariables.bg2,
            radius: ['80%', '90%'],
        },
        traffic: {
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            yAxisSplitLine: baseThemeVariables.separator,
            lineBg: baseThemeVariables.border4,
            lineShadowBlur: '1',
            itemColor: baseThemeVariables.border4,
            itemBorderColor: baseThemeVariables.border4,
            itemEmphasisBorderColor: baseThemeVariables.primary,
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            shadowLineShadow: 'rgba(0, 0, 0, 0)',
            gradFrom: baseThemeVariables.bg2,
            gradTo: baseThemeVariables.bg2,
        },
        electricity: {
            tooltipBg: baseThemeVariables.bg,
            tooltipLineColor: baseThemeVariables.fgText,
            tooltipLineWidth: '0',
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            axisLineColor: baseThemeVariables.border3,
            xAxisTextColor: baseThemeVariables.fg,
            yAxisSplitLine: baseThemeVariables.separator,
            itemBorderColor: baseThemeVariables.primary,
            lineStyle: 'solid',
            lineWidth: '4',
            lineGradFrom: baseThemeVariables.primary,
            lineGradTo: baseThemeVariables.primary,
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: baseThemeVariables.bg2,
            areaGradTo: baseThemeVariables.bg2,
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
        },
        bubbleMap: {
            titleColor: baseThemeVariables.fgText,
            areaColor: baseThemeVariables.bg4,
            areaHoverColor: baseThemeVariables.fgHighlight,
            areaBorderColor: baseThemeVariables.border5,
        },
        profitBarAnimationEchart: {
            textColor: baseThemeVariables.fgText,
            firstAnimationBarColor: baseThemeVariables.primary,
            secondAnimationBarColor: baseThemeVariables.success,
            splitLineStyleOpacity: '1',
            splitLineStyleWidth: '1',
            splitLineStyleColor: baseThemeVariables.separator,
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipBorderWidth: '1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
        },
        trafficBarEchart: {
            gradientFrom: baseThemeVariables.warningLight,
            gradientTo: baseThemeVariables.warning,
            shadow: baseThemeVariables.warningLight,
            shadowBlur: '0',
            axisTextColor: baseThemeVariables.fgText,
            axisFontSize: '12',
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
        },
        countryOrders: {
            countryBorderColor: baseThemeVariables.border4,
            countryFillColor: baseThemeVariables.bg3,
            countryBorderWidth: '1',
            hoveredCountryBorderColor: baseThemeVariables.primary,
            hoveredCountryFillColor: baseThemeVariables.primaryLight,
            hoveredCountryBorderWidth: '1',
            chartAxisLineColor: baseThemeVariables.border4,
            chartAxisTextColor: baseThemeVariables.fg,
            chartAxisFontSize: '16',
            chartGradientTo: baseThemeVariables.primary,
            chartGradientFrom: baseThemeVariables.primaryLight,
            chartAxisSplitLine: baseThemeVariables.separator,
            chartShadowLineColor: baseThemeVariables.primaryLight,
            chartLineBottomShadowColor: baseThemeVariables.primary,
            chartInnerLineColor: baseThemeVariables.bg2,
        },
        echarts: {
            bg: baseThemeVariables.bg,
            textColor: baseThemeVariables.fgText,
            axisLineColor: baseThemeVariables.fgText,
            splitLineColor: baseThemeVariables.separator,
            itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
            tooltipBackgroundColor: baseThemeVariables.primary,
            areaOpacity: '0.7',
        },
        chartjs: {
            axisLineColor: baseThemeVariables.separator,
            textColor: baseThemeVariables.fgText,
        },
        orders: {
            tooltipBg: baseThemeVariables.bg,
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '0',
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '20',
            axisLineColor: baseThemeVariables.border4,
            axisFontSize: '16',
            axisTextColor: baseThemeVariables.fg,
            yAxisSplitLine: baseThemeVariables.separator,
            itemBorderColor: baseThemeVariables.primary,
            lineStyle: 'solid',
            lineWidth: '4',
            // first line
            firstAreaGradFrom: baseThemeVariables.bg3,
            firstAreaGradTo: baseThemeVariables.bg3,
            firstShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            // second line
            secondLineGradFrom: baseThemeVariables.primary,
            secondLineGradTo: baseThemeVariables.primary,
            secondAreaGradFrom: 'rgba(51, 102, 255, 0.2)',
            secondAreaGradTo: 'rgba(51, 102, 255, 0)',
            secondShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            // third line
            thirdLineGradFrom: baseThemeVariables.success,
            thirdLineGradTo: baseThemeVariables.successLight,
            thirdAreaGradFrom: 'rgba(0, 214, 143, 0.2)',
            thirdAreaGradTo: 'rgba(0, 214, 143, 0)',
            thirdShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
        },
        profit: {
            bg: baseThemeVariables.bg,
            textColor: baseThemeVariables.fgText,
            axisLineColor: baseThemeVariables.border4,
            splitLineColor: baseThemeVariables.separator,
            areaOpacity: '1',
            axisFontSize: '16',
            axisTextColor: baseThemeVariables.fg,
            // first bar
            firstLineGradFrom: baseThemeVariables.bg3,
            firstLineGradTo: baseThemeVariables.bg3,
            firstLineShadow: 'rgba(0, 0, 0, 0)',
            // second bar
            secondLineGradFrom: baseThemeVariables.primary,
            secondLineGradTo: baseThemeVariables.primary,
            secondLineShadow: 'rgba(0, 0, 0, 0)',
            // third bar
            thirdLineGradFrom: baseThemeVariables.success,
            thirdLineGradTo: baseThemeVariables.successLight,
            thirdLineShadow: 'rgba(0, 0, 0, 0)',
        },
        orderProfitLegend: {
            firstItem: baseThemeVariables.success,
            secondItem: baseThemeVariables.primary,
            thirdItem: baseThemeVariables.bg3,
        },
        visitors: {
            tooltipBg: baseThemeVariables.bg,
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '0',
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '20',
            axisLineColor: baseThemeVariables.border4,
            axisFontSize: '16',
            axisTextColor: baseThemeVariables.fg,
            yAxisSplitLine: baseThemeVariables.separator,
            itemBorderColor: baseThemeVariables.primary,
            lineStyle: 'dotted',
            lineWidth: '6',
            lineGradFrom: '#ffffff',
            lineGradTo: '#ffffff',
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: baseThemeVariables.primary,
            areaGradTo: baseThemeVariables.primaryLight,
            innerLineStyle: 'solid',
            innerLineWidth: '1',
            innerAreaGradFrom: baseThemeVariables.success,
            innerAreaGradTo: baseThemeVariables.success,
        },
        visitorsLegend: {
            firstIcon: baseThemeVariables.success,
            secondIcon: baseThemeVariables.primary,
        },
        visitorsPie: {
            firstPieGradientLeft: baseThemeVariables.success,
            firstPieGradientRight: baseThemeVariables.success,
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            firstPieRadius: ['70%', '90%'],
            secondPieGradientLeft: baseThemeVariables.warning,
            secondPieGradientRight: baseThemeVariables.warningLight,
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieRadius: ['60%', '97%'],
            shadowOffsetX: '0',
            shadowOffsetY: '0',
        },
        visitorsPieLegend: {
            firstSection: baseThemeVariables.warning,
            secondSection: baseThemeVariables.success,
        },
        earningPie: {
            radius: ['65%', '100%'],
            center: ['50%', '50%'],
            fontSize: '22',
            firstPieGradientLeft: baseThemeVariables.success,
            firstPieGradientRight: baseThemeVariables.success,
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieGradientLeft: baseThemeVariables.primary,
            secondPieGradientRight: baseThemeVariables.primary,
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            thirdPieGradientLeft: baseThemeVariables.warning,
            thirdPieGradientRight: baseThemeVariables.warning,
            thirdPieShadowColor: 'rgba(0, 0, 0, 0)',
        },
        earningLine: {
            gradFrom: baseThemeVariables.primary,
            gradTo: baseThemeVariables.primary,
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipBorderWidth: '1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
        },
    },
};


/***/ }),

/***/ "./src/app/@theme/styles/theme.default.ts":
/*!************************************************!*\
  !*** ./src/app/@theme/styles/theme.default.ts ***!
  \************************************************/
/*! exports provided: DEFAULT_THEME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_THEME", function() { return DEFAULT_THEME; });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");

const baseThemeVariables = _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_THEME"].variables;
const DEFAULT_THEME = {
    name: 'default',
    base: 'default',
    variables: {
        temperature: {
            arcFill: [
                baseThemeVariables.primary,
                baseThemeVariables.primary,
                baseThemeVariables.primary,
                baseThemeVariables.primary,
                baseThemeVariables.primary,
            ],
            arcEmpty: baseThemeVariables.bg2,
            thumbBg: baseThemeVariables.bg2,
            thumbBorder: baseThemeVariables.primary,
        },
        solar: {
            gradientLeft: baseThemeVariables.primary,
            gradientRight: baseThemeVariables.primary,
            shadowColor: 'rgba(0, 0, 0, 0)',
            secondSeriesFill: baseThemeVariables.bg2,
            radius: ['80%', '90%'],
        },
        traffic: {
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            yAxisSplitLine: baseThemeVariables.separator,
            lineBg: baseThemeVariables.border4,
            lineShadowBlur: '1',
            itemColor: baseThemeVariables.border4,
            itemBorderColor: baseThemeVariables.border4,
            itemEmphasisBorderColor: baseThemeVariables.primary,
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            shadowLineShadow: 'rgba(0, 0, 0, 0)',
            gradFrom: baseThemeVariables.bg2,
            gradTo: baseThemeVariables.bg2,
        },
        electricity: {
            tooltipBg: baseThemeVariables.bg,
            tooltipLineColor: baseThemeVariables.fgText,
            tooltipLineWidth: '0',
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            axisLineColor: baseThemeVariables.border3,
            xAxisTextColor: baseThemeVariables.fg,
            yAxisSplitLine: baseThemeVariables.separator,
            itemBorderColor: baseThemeVariables.primary,
            lineStyle: 'solid',
            lineWidth: '4',
            lineGradFrom: baseThemeVariables.primary,
            lineGradTo: baseThemeVariables.primary,
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: baseThemeVariables.bg2,
            areaGradTo: baseThemeVariables.bg2,
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
        },
        bubbleMap: {
            titleColor: baseThemeVariables.fgText,
            areaColor: baseThemeVariables.bg4,
            areaHoverColor: baseThemeVariables.fgHighlight,
            areaBorderColor: baseThemeVariables.border5,
        },
        profitBarAnimationEchart: {
            textColor: baseThemeVariables.fgText,
            firstAnimationBarColor: baseThemeVariables.primary,
            secondAnimationBarColor: baseThemeVariables.success,
            splitLineStyleOpacity: '1',
            splitLineStyleWidth: '1',
            splitLineStyleColor: baseThemeVariables.separator,
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipBorderWidth: '1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
        },
        trafficBarEchart: {
            gradientFrom: baseThemeVariables.warningLight,
            gradientTo: baseThemeVariables.warning,
            shadow: baseThemeVariables.warningLight,
            shadowBlur: '0',
            axisTextColor: baseThemeVariables.fgText,
            axisFontSize: '12',
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
        },
        countryOrders: {
            countryBorderColor: baseThemeVariables.border4,
            countryFillColor: baseThemeVariables.bg3,
            countryBorderWidth: '1',
            hoveredCountryBorderColor: baseThemeVariables.primary,
            hoveredCountryFillColor: baseThemeVariables.primaryLight,
            hoveredCountryBorderWidth: '1',
            chartAxisLineColor: baseThemeVariables.border4,
            chartAxisTextColor: baseThemeVariables.fg,
            chartAxisFontSize: '16',
            chartGradientTo: baseThemeVariables.primary,
            chartGradientFrom: baseThemeVariables.primaryLight,
            chartAxisSplitLine: baseThemeVariables.separator,
            chartShadowLineColor: baseThemeVariables.primaryLight,
            chartLineBottomShadowColor: baseThemeVariables.primary,
            chartInnerLineColor: baseThemeVariables.bg2,
        },
        echarts: {
            bg: baseThemeVariables.bg,
            textColor: baseThemeVariables.fgText,
            axisLineColor: baseThemeVariables.fgText,
            splitLineColor: baseThemeVariables.separator,
            itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
            tooltipBackgroundColor: baseThemeVariables.primary,
            areaOpacity: '0.7',
        },
        chartjs: {
            axisLineColor: baseThemeVariables.separator,
            textColor: baseThemeVariables.fgText,
        },
        orders: {
            tooltipBg: baseThemeVariables.bg,
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '0',
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '20',
            axisLineColor: baseThemeVariables.border4,
            axisFontSize: '16',
            axisTextColor: baseThemeVariables.fg,
            yAxisSplitLine: baseThemeVariables.separator,
            itemBorderColor: baseThemeVariables.primary,
            lineStyle: 'solid',
            lineWidth: '4',
            // first line
            firstAreaGradFrom: baseThemeVariables.bg3,
            firstAreaGradTo: baseThemeVariables.bg3,
            firstShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            // second line
            secondLineGradFrom: baseThemeVariables.primary,
            secondLineGradTo: baseThemeVariables.primary,
            secondAreaGradFrom: 'rgba(51, 102, 255, 0.2)',
            secondAreaGradTo: 'rgba(51, 102, 255, 0)',
            secondShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            // third line
            thirdLineGradFrom: baseThemeVariables.success,
            thirdLineGradTo: baseThemeVariables.successLight,
            thirdAreaGradFrom: 'rgba(0, 214, 143, 0.2)',
            thirdAreaGradTo: 'rgba(0, 214, 143, 0)',
            thirdShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
        },
        profit: {
            bg: baseThemeVariables.bg,
            textColor: baseThemeVariables.fgText,
            axisLineColor: baseThemeVariables.border4,
            splitLineColor: baseThemeVariables.separator,
            areaOpacity: '1',
            axisFontSize: '16',
            axisTextColor: baseThemeVariables.fg,
            // first bar
            firstLineGradFrom: baseThemeVariables.bg3,
            firstLineGradTo: baseThemeVariables.bg3,
            firstLineShadow: 'rgba(0, 0, 0, 0)',
            // second bar
            secondLineGradFrom: baseThemeVariables.primary,
            secondLineGradTo: baseThemeVariables.primary,
            secondLineShadow: 'rgba(0, 0, 0, 0)',
            // third bar
            thirdLineGradFrom: baseThemeVariables.success,
            thirdLineGradTo: baseThemeVariables.successLight,
            thirdLineShadow: 'rgba(0, 0, 0, 0)',
        },
        orderProfitLegend: {
            firstItem: baseThemeVariables.success,
            secondItem: baseThemeVariables.primary,
            thirdItem: baseThemeVariables.bg3,
        },
        visitors: {
            tooltipBg: baseThemeVariables.bg,
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '1',
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '20',
            axisLineColor: baseThemeVariables.border4,
            axisFontSize: '16',
            axisTextColor: baseThemeVariables.fg,
            yAxisSplitLine: baseThemeVariables.separator,
            itemBorderColor: baseThemeVariables.primary,
            lineStyle: 'dotted',
            lineWidth: '6',
            lineGradFrom: '#ffffff',
            lineGradTo: '#ffffff',
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: baseThemeVariables.primary,
            areaGradTo: baseThemeVariables.primaryLight,
            innerLineStyle: 'solid',
            innerLineWidth: '1',
            innerAreaGradFrom: baseThemeVariables.success,
            innerAreaGradTo: baseThemeVariables.success,
        },
        visitorsLegend: {
            firstIcon: baseThemeVariables.success,
            secondIcon: baseThemeVariables.primary,
        },
        visitorsPie: {
            firstPieGradientLeft: baseThemeVariables.success,
            firstPieGradientRight: baseThemeVariables.success,
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            firstPieRadius: ['70%', '90%'],
            secondPieGradientLeft: baseThemeVariables.warning,
            secondPieGradientRight: baseThemeVariables.warningLight,
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieRadius: ['60%', '97%'],
            shadowOffsetX: '0',
            shadowOffsetY: '0',
        },
        visitorsPieLegend: {
            firstSection: baseThemeVariables.warning,
            secondSection: baseThemeVariables.success,
        },
        earningPie: {
            radius: ['65%', '100%'],
            center: ['50%', '50%'],
            fontSize: '22',
            firstPieGradientLeft: baseThemeVariables.success,
            firstPieGradientRight: baseThemeVariables.success,
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieGradientLeft: baseThemeVariables.primary,
            secondPieGradientRight: baseThemeVariables.primary,
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            thirdPieGradientLeft: baseThemeVariables.warning,
            thirdPieGradientRight: baseThemeVariables.warning,
            thirdPieShadowColor: 'rgba(0, 0, 0, 0)',
        },
        earningLine: {
            gradFrom: baseThemeVariables.primary,
            gradTo: baseThemeVariables.primary,
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipBorderWidth: '1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
        },
    },
};


/***/ }),

/***/ "./src/app/@theme/theme.module.ts":
/*!****************************************!*\
  !*** ./src/app/@theme/theme.module.ts ***!
  \****************************************/
/*! exports provided: ThemeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeModule", function() { return ThemeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/eva-icons */ "./node_modules/@nebular/eva-icons/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _nebular_security__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/security */ "./node_modules/@nebular/security/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@auth/auth.module */ "./src/app/@auth/auth.module.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components */ "./src/app/@theme/components/index.ts");
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipes */ "./src/app/@theme/pipes/index.ts");
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layouts */ "./src/app/@theme/layouts/index.ts");
/* harmony import */ var _services_init_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/init-user.service */ "./src/app/@theme/services/init-user.service.ts");
/* harmony import */ var _styles_theme_default__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/theme.default */ "./src/app/@theme/styles/theme.default.ts");
/* harmony import */ var _styles_theme_cosmic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles/theme.cosmic */ "./src/app/@theme/styles/theme.cosmic.ts");
/* harmony import */ var _styles_theme_corporate__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./styles/theme.corporate */ "./src/app/@theme/styles/theme.corporate.ts");
/* harmony import */ var _styles_theme_dark__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./styles/theme.dark */ "./src/app/@theme/styles/theme.dark.ts");
/* harmony import */ var _pages_dashboard_alarmPopup_alarmPopup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../pages/dashboard/alarmPopup/alarmPopup.component */ "./src/app/pages/dashboard/alarmPopup/alarmPopup.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _pages_dashboard_WindowPopupComponent_apiGet_services__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../pages/dashboard/WindowPopupComponent/apiGet.services */ "./src/app/pages/dashboard/WindowPopupComponent/apiGet.services.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */



















const NB_MODULES = [
    _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbLayoutModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbMenuModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbUserModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbActionsModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSearchModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSidebarModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbContextMenuModule"],
    _nebular_security__WEBPACK_IMPORTED_MODULE_4__["NbSecurityModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSelectModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSpinnerModule"],
    _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_3__["NbEvaIconsModule"],
    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"],
];
const COMPONENTS = [
    _components__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
    _components__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
    _components__WEBPACK_IMPORTED_MODULE_6__["SearchInputComponent"],
    _components__WEBPACK_IMPORTED_MODULE_6__["TinyMCEComponent"],
    _layouts__WEBPACK_IMPORTED_MODULE_8__["OneColumnLayoutComponent"],
    _layouts__WEBPACK_IMPORTED_MODULE_8__["ThreeColumnsLayoutComponent"],
    _layouts__WEBPACK_IMPORTED_MODULE_8__["TwoColumnsLayoutComponent"],
    _pages_dashboard_alarmPopup_alarmPopup_component__WEBPACK_IMPORTED_MODULE_14__["WindowComponentAlarm"],
];
const PIPES = [
    _pipes__WEBPACK_IMPORTED_MODULE_7__["CapitalizePipe"],
    _pipes__WEBPACK_IMPORTED_MODULE_7__["MeasureConverterPipe"],
    _pipes__WEBPACK_IMPORTED_MODULE_7__["PluralPipe"],
    _pipes__WEBPACK_IMPORTED_MODULE_7__["RoundPipe"],
    _pipes__WEBPACK_IMPORTED_MODULE_7__["TimingPipe"],
    _pipes__WEBPACK_IMPORTED_MODULE_7__["NumberWithCommasPipe"],
];
class ThemeModule {
    static forRoot() {
        return {
            ngModule: ThemeModule,
            providers: [
                ..._nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbThemeModule"].forRoot({
                    name: 'default',
                }, [_styles_theme_default__WEBPACK_IMPORTED_MODULE_10__["DEFAULT_THEME"], _styles_theme_cosmic__WEBPACK_IMPORTED_MODULE_11__["COSMIC_THEME"], _styles_theme_corporate__WEBPACK_IMPORTED_MODULE_12__["CORPORATE_THEME"], _styles_theme_dark__WEBPACK_IMPORTED_MODULE_13__["DARK_THEME"]]).providers,
                _services_init_user_service__WEBPACK_IMPORTED_MODULE_9__["InitUserService"],
            ],
        };
    }
}
ThemeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ThemeModule });
ThemeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ThemeModule_Factory(t) { return new (t || ThemeModule)(); }, providers: [_pages_dashboard_WindowPopupComponent_apiGet_services__WEBPACK_IMPORTED_MODULE_17__["ApiGetService"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]
    ], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _auth_auth_module__WEBPACK_IMPORTED_MODULE_5__["AuthModule"], ...NB_MODULES],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ThemeModule, { declarations: [_components__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
        _components__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
        _components__WEBPACK_IMPORTED_MODULE_6__["SearchInputComponent"],
        _components__WEBPACK_IMPORTED_MODULE_6__["TinyMCEComponent"],
        _layouts__WEBPACK_IMPORTED_MODULE_8__["OneColumnLayoutComponent"],
        _layouts__WEBPACK_IMPORTED_MODULE_8__["ThreeColumnsLayoutComponent"],
        _layouts__WEBPACK_IMPORTED_MODULE_8__["TwoColumnsLayoutComponent"],
        _pages_dashboard_alarmPopup_alarmPopup_component__WEBPACK_IMPORTED_MODULE_14__["WindowComponentAlarm"],
        _pipes__WEBPACK_IMPORTED_MODULE_7__["CapitalizePipe"],
        _pipes__WEBPACK_IMPORTED_MODULE_7__["MeasureConverterPipe"],
        _pipes__WEBPACK_IMPORTED_MODULE_7__["PluralPipe"],
        _pipes__WEBPACK_IMPORTED_MODULE_7__["RoundPipe"],
        _pipes__WEBPACK_IMPORTED_MODULE_7__["TimingPipe"],
        _pipes__WEBPACK_IMPORTED_MODULE_7__["NumberWithCommasPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _auth_auth_module__WEBPACK_IMPORTED_MODULE_5__["AuthModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbLayoutModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbMenuModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbUserModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbActionsModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSearchModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSidebarModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbContextMenuModule"],
        _nebular_security__WEBPACK_IMPORTED_MODULE_4__["NbSecurityModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSelectModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSpinnerModule"],
        _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_3__["NbEvaIconsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _pipes__WEBPACK_IMPORTED_MODULE_7__["CapitalizePipe"],
        _pipes__WEBPACK_IMPORTED_MODULE_7__["MeasureConverterPipe"],
        _pipes__WEBPACK_IMPORTED_MODULE_7__["PluralPipe"],
        _pipes__WEBPACK_IMPORTED_MODULE_7__["RoundPipe"],
        _pipes__WEBPACK_IMPORTED_MODULE_7__["TimingPipe"],
        _pipes__WEBPACK_IMPORTED_MODULE_7__["NumberWithCommasPipe"],
        _components__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
        _components__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
        _components__WEBPACK_IMPORTED_MODULE_6__["SearchInputComponent"],
        _components__WEBPACK_IMPORTED_MODULE_6__["TinyMCEComponent"],
        _layouts__WEBPACK_IMPORTED_MODULE_8__["OneColumnLayoutComponent"],
        _layouts__WEBPACK_IMPORTED_MODULE_8__["ThreeColumnsLayoutComponent"],
        _layouts__WEBPACK_IMPORTED_MODULE_8__["TwoColumnsLayoutComponent"],
        _pages_dashboard_alarmPopup_alarmPopup_component__WEBPACK_IMPORTED_MODULE_14__["WindowComponentAlarm"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThemeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _auth_auth_module__WEBPACK_IMPORTED_MODULE_5__["AuthModule"], ...NB_MODULES],
                exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ...PIPES, ...COMPONENTS],
                declarations: [...COMPONENTS, ...PIPES],
                providers: [_pages_dashboard_WindowPopupComponent_apiGet_services__WEBPACK_IMPORTED_MODULE_17__["ApiGetService"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./@auth/auth.guard */ "./src/app/@auth/auth.guard.ts");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */





const routes = [
    {
        path: 'pages',
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        loadChildren: () => __webpack_require__.e(/*! import() | pages-pages-module */ "pages-pages-module").then(__webpack_require__.bind(null, /*! ./pages/pages.module */ "./src/app/pages/pages.module.ts"))
            .then(m => m.PagesModule),
    },
    {
        path: 'auth',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./@auth/auth.module */ "./src/app/@auth/auth.module.ts"))
            .then(m => m.AuthModule),
    },
    { path: '', redirectTo: 'pages', pathMatch: 'full' },
    { path: '**', redirectTo: 'pages' },
];
const config = {
    useHash: false,
};
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, config)],
        _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, config)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./@core/utils */ "./src/app/@core/utils/index.ts");
/* harmony import */ var _theme_services_init_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./@theme/services/init-user.service */ "./src/app/@theme/services/init-user.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */









class AppComponent {
    constructor(analytics, initUserService) {
        this.analytics = analytics;
        this.initUserService = initUserService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.initUser();
    }
    ngOnInit() {
        this.analytics.trackPageViews();
    }
    initUser() {
        this.initUserService.initCurrentUser()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$))
            .subscribe();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_utils__WEBPACK_IMPORTED_MODULE_1__["AnalyticsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_theme_services_init_user_service__WEBPACK_IMPORTED_MODULE_2__["InitUserService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["ngx-app"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-app',
                template: '<router-outlet></router-outlet>',
            }]
    }], function () { return [{ type: _core_utils__WEBPACK_IMPORTED_MODULE_1__["AnalyticsService"] }, { type: _theme_services_init_user_service__WEBPACK_IMPORTED_MODULE_2__["InitUserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./@core/core.module */ "./src/app/@core/core.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./@auth/auth.module */ "./src/app/@auth/auth.module.ts");
/* harmony import */ var _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @syncfusion/ej2-angular-schedule */ "./node_modules/@syncfusion/ej2-angular-schedule/__ivy_ngcc__/@syncfusion/ej2-angular-schedule.js");
/* harmony import */ var _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @syncfusion/ej2-angular-grids */ "./node_modules/@syncfusion/ej2-angular-grids/__ivy_ngcc__/@syncfusion/ej2-angular-grids.js");
/* harmony import */ var _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @syncfusion/ej2-angular-popups */ "./node_modules/@syncfusion/ej2-angular-popups/__ivy_ngcc__/@syncfusion/ej2-angular-popups.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */


















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_9__["DayService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_9__["WeekService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_9__["WorkWeekService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_9__["MonthService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_9__["MonthAgendaService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_9__["ScheduleAllModule"],
            _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_10__["GridModule"],
            _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_11__["DialogModule"],
            _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_9__["RecurrenceEditorAllModule"],
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_8__["AuthModule"].forRoot(),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_12__["NbSidebarModule"].forRoot(),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_12__["NbMenuModule"].forRoot(),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_12__["NbDatepickerModule"].forRoot(),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_12__["NbDialogModule"].forRoot(),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_12__["NbWindowModule"].forRoot(),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_12__["NbToastrModule"].forRoot(),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_12__["NbChatModule"].forRoot({
                messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
            }),
            _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"].forRoot(),
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_7__["ThemeModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
        _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_9__["ScheduleAllModule"],
        _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_10__["GridModule"],
        _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_11__["DialogModule"],
        _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_9__["RecurrenceEditorAllModule"], _auth_auth_module__WEBPACK_IMPORTED_MODULE_8__["AuthModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_12__["NbSidebarModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_12__["NbMenuModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_12__["NbDatepickerModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_12__["NbDialogModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_12__["NbWindowModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_12__["NbToastrModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_12__["NbChatModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_7__["ThemeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                    _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_9__["ScheduleAllModule"],
                    _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_10__["GridModule"],
                    _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_11__["DialogModule"],
                    _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_9__["RecurrenceEditorAllModule"],
                    _auth_auth_module__WEBPACK_IMPORTED_MODULE_8__["AuthModule"].forRoot(),
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_12__["NbSidebarModule"].forRoot(),
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_12__["NbMenuModule"].forRoot(),
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_12__["NbDatepickerModule"].forRoot(),
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_12__["NbDialogModule"].forRoot(),
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_12__["NbWindowModule"].forRoot(),
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_12__["NbToastrModule"].forRoot(),
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_12__["NbChatModule"].forRoot({
                        messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
                    }),
                    _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"].forRoot(),
                    _theme_theme_module__WEBPACK_IMPORTED_MODULE_7__["ThemeModule"].forRoot(),
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
                providers: [_syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_9__["DayService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_9__["WeekService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_9__["WorkWeekService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_9__["MonthService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_9__["MonthAgendaService"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/dashboard/OrderPopup/apiGet.services.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/dashboard/OrderPopup/apiGet.services.ts ***!
  \***************************************************************/
/*! exports provided: ApiGetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiGetService", function() { return ApiGetService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class ApiGetService {
    constructor(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            'responseType': 'blob',
        };
    }
    GetJson(url) {
        return this.http.get(url);
    }
    PostJson(url, propiedadesActualizar) {
        return this.http.post(url, propiedadesActualizar, this.httpOptions);
    }
    Suma() {
        console.log(5 + 5);
    }
}
ApiGetService.ɵfac = function ApiGetService_Factory(t) { return new (t || ApiGetService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ApiGetService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiGetService, factory: ApiGetService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiGetService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/dashboard/WindowPopupComponent/apiGet.services.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/dashboard/WindowPopupComponent/apiGet.services.ts ***!
  \*************************************************************************/
/*! exports provided: ApiGetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiGetService", function() { return ApiGetService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class ApiGetService {
    constructor(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            'responseType': 'blob',
        };
    }
    GetJson(url) {
        return this.http.get(url);
    }
    PostJson(url, propiedadesActualizar) {
        return this.http.post(url, propiedadesActualizar, this.httpOptions);
    }
    Suma() {
        console.log(5 + 5);
    }
}
ApiGetService.ɵfac = function ApiGetService_Factory(t) { return new (t || ApiGetService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ApiGetService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiGetService, factory: ApiGetService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiGetService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/dashboard/_interfaces/MatBox.model.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/dashboard/_interfaces/MatBox.model.ts ***!
  \*************************************************************/
/*! exports provided: IdMaquinas, IdWip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdMaquinas", function() { return IdMaquinas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdWip", function() { return IdWip; });
const IdMaquinas = {
    Martin1228: 22,
    WARD15000: 39,
    Laminadora: 40,
    Impresora36: 41,
    JS: 43,
    M924: 44,
    SYS: 45,
};
const IdWip = {
    ST1: 20,
    ST2: 21,
    ST3: 23,
    ST4: 24,
    ST5: 25,
    ST6: 26,
    ST7: 30,
    ST8: 31,
    ST9: 32,
    ST10: 33,
    ST11: 34,
    ST12: 35,
    ST13: 36,
    ST14: 37,
    ST15: 38,
    CT2: 48,
    CT1: 49,
    TM: 54,
    CT_1: 51,
    CT_2: 52,
    ID12: 14,
    ID22: 18,
    TF1: 56,
    TF2: 58,
    IM1: 22,
    IM2: 39,
    IM3: 40,
    IM4: 41,
    IM5: 43,
    IM6: 44,
    IM7: 45,
};


/***/ }),

/***/ "./src/app/pages/dashboard/alarmPopup/alarmPopup.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/dashboard/alarmPopup/alarmPopup.component.ts ***!
  \********************************************************************/
/*! exports provided: WindowComponentAlarm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowComponentAlarm", function() { return WindowComponentAlarm; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _apiGet_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiGet.services */ "./src/app/pages/dashboard/alarmPopup/apiGet.services.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




let ALARMAS = [];
const COUNTRIES = [
    {
        name: 'Russia',
        flag: 'f/f3/Flag_of_Russia.svg',
        area: 17075200,
        population: 146989754
    },
    {
        name: 'Canada',
        flag: 'c/cf/Flag_of_Canada.svg',
        area: 9976140,
        population: 36624199
    },
    {
        name: 'United States',
        flag: 'a/a4/Flag_of_the_United_States.svg',
        area: 9629091,
        population: 324459463
    },
    {
        name: 'China',
        flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
        area: 9596960,
        population: 1409517397
    }
];
function matches2(alarmas, term, pipe) {
    return alarmas.level.toLowerCase().includes(term.toLowerCase())
        || alarmas.timeStamp.toLowerCase().includes(term.toLowerCase())
        || alarmas.message.toLowerCase().includes(term.toLowerCase());
    // || pipe.transform(alarmas.userId).includes(term);
    // || pipe.transform(alarmas.userId).includes(term);
}
class WindowComponentAlarm {
}
WindowComponentAlarm.ɵfac = function WindowComponentAlarm_Factory(t) { return new (t || WindowComponentAlarm)(); };
WindowComponentAlarm.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WindowComponentAlarm, selectors: [["ngx-windowOrderPopup"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_apiGet_services__WEBPACK_IMPORTED_MODULE_1__["ApiGetService"],
WindowComponentAlarm.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WindowComponentAlarm, factory: WindowComponentAlarm.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WindowComponentAlarm, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                providers: [_apiGet_services__WEBPACK_IMPORTED_MODULE_1__["ApiGetService"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"],],
                selector: 'ngx-windowOrderPopup',
                templateUrl: './alarmPopup.component.html',
                styleUrls: ['alarmPopup.component.scss'],
            }]
    }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/dashboard/alarmPopup/apiGet.services.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/dashboard/alarmPopup/apiGet.services.ts ***!
  \***************************************************************/
/*! exports provided: ApiGetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiGetService", function() { return ApiGetService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




// import { Observable, Subject, of } from 'rxjs';
class ApiGetService {
    constructor(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            'responseType': 'blob',
        };
    }
    GetJson(url) {
        return this.http.get(url);
    }
}
ApiGetService.ɵfac = function ApiGetService_Factory(t) { return new (t || ApiGetService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ApiGetService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiGetService, factory: ApiGetService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiGetService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/dashboard/services/signal-r.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/dashboard/services/signal-r.service.ts ***!
  \**************************************************************/
/*! exports provided: SignalRService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignalRService", function() { return SignalRService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _aspnet_signalr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aspnet/signalr */ "./node_modules/@aspnet/signalr/dist/esm/index.js");
/* harmony import */ var _interfaces_MatBox_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_interfaces/MatBox.model */ "./src/app/pages/dashboard/_interfaces/MatBox.model.ts");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@core/backend/common/api/http.service */ "./src/app/@core/backend/common/api/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");










// const options = {
//   transport: signalR.HttpTransportType.ServerSentEvents,
//   logging: signalR.LogLevel.Trace,
//   accessTokenFactory: () => "Some Token",
// };
class SignalRService {
    constructor(api, http) {
        this.api = api;
        this.http = http;
        this.dataPackages = [];
        this.numeroAlarmas = { NumeroAlarmas: 0 };
        this.dataPackageWip = this.dataPackages;
        this.dataPackageST1 = this.dataPackages;
        this.dataPackageST2 = this.dataPackages;
        this.dataPackageST3 = this.dataPackages;
        this.dataPackageST4 = this.dataPackages;
        this.dataPackageST5 = this.dataPackages;
        this.dataPackageST6 = this.dataPackages;
        this.dataPackageST7 = this.dataPackages;
        this.dataPackageST8 = this.dataPackages;
        this.dataPackageST9 = this.dataPackages;
        this.dataPackageST10 = this.dataPackages;
        this.dataPackageST11 = this.dataPackages;
        this.dataPackageST12 = this.dataPackages;
        this.dataPackageST13 = this.dataPackages;
        this.dataPackageST14 = this.dataPackages;
        this.dataPackageST15 = this.dataPackages;
        this.dataPackageCT_1 = this.dataPackages;
        this.dataPackageCT_2 = this.dataPackages;
        this.dataPackageCT1 = this.dataPackages;
        this.dataPackageCT2 = this.dataPackages;
        this.dataPackageTM = this.dataPackages;
        this.dataPackageTF1 = this.dataPackages;
        this.dataPackageTF2 = this.dataPackages;
        this.dataPackageID12 = this.dataPackages;
        this.dataPackageID22 = this.dataPackages;
        this.dataPackageIM1 = this.dataPackages;
        this.dataPackageIM2 = this.dataPackages;
        this.dataPackageIM3 = this.dataPackages;
        this.dataPackageIM4 = this.dataPackages;
        this.dataPackageIM5 = this.dataPackages;
        this.dataPackageIM6 = this.dataPackages;
        this.dataPackageIM7 = this.dataPackages;
        this.alive = true;
        this.aliveAlarm = true;
        this.startConnectionAlarmas = () => {
            this.ngOnInit();
            let accessToken = "some token";
            var options = {
                transport: _aspnet_signalr__WEBPACK_IMPORTED_MODULE_1__["HttpTransportType"].ServerSentEvents,
                logging: _aspnet_signalr__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Trace,
                accessTokenFactory: () => accessToken
            };
            this.hubConnectionAlarmas = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_1__["HubConnectionBuilder"]()
                .withUrl(this.api.apiUrlMatSignalR + '/sralarms', options)
                .build();
            this.hubConnectionAlarmas.serverTimeoutInMilliseconds = 4000;
            this.hubConnectionAlarmas.on('transferalarmdata', (data) => {
                this.numeroAlarmas = data;
                // console.log(data);
            });
            this.hubConnectionAlarmas
                .start()
                .then(() => console.log('Connection started GetMachineColor'))
                .catch(err => console.log('Error while starting connection MachineColor: ' + err, this.startConnectionAlarmas()));
        };
        this.startConnectionPackageWip = (id) => {
            let accessToken = "some token";
            var options = {
                transport: _aspnet_signalr__WEBPACK_IMPORTED_MODULE_1__["HttpTransportType"].ServerSentEvents,
                logging: _aspnet_signalr__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Trace,
                accessTokenFactory: () => accessToken
            };
            this.hubConnectionPackageWip = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_1__["HubConnectionBuilder"]()
                .withUrl(this.api.apiUrlMatSignalR + '/showpackage?idMaquina=' + id, options)
                .build();
            this.hubConnectionPackageWip.serverTimeoutInMilliseconds = 4000;
            this.hubConnectionPackageWip.on('transfershowpackagedata', (data) => {
                if (data.length > 0) {
                    // this.hubConnectionPackageWip.stop;
                    // console.log(data+id);
                    // this.datas[id]=data;
                    this.dataPackages = data;
                    // console.log(this.dataPackages);
                    this.AsignarDatosWip(data);
                    // this.startConnectionPackageWip(id);
                    //   this.hubConnectionPackageWip
                    // .start()
                    // .then(()=>console.log('Connection started PAckage'))
                    // .catch(err=>console.log('Error while starting PAckage: ' + err
                    // // this.startConnectionPackageWip(id)
                    // ));
                }
            });
            this.hubConnectionPackageWip
                .start()
                .then(() => console.log('Connection started PAckage'))
                .catch(err => console.log('Error while starting PAckage: ' + err, this.startConnectionPackageWip(id)));
        };
        this.packageInit();
    }
    AsignarDatosWip(data) {
        this.dataPackageWip = data;
        if (this.dataPackageWip[0].idMaquina == _interfaces_MatBox_model__WEBPACK_IMPORTED_MODULE_2__["IdWip"].ST1) {
            this.dataPackageST1 = data;
        }
        else if (this.dataPackageWip[0].idMaquina == _interfaces_MatBox_model__WEBPACK_IMPORTED_MODULE_2__["IdWip"].ST2) {
            this.dataPackageST2 = data;
        }
        else if (this.dataPackageWip[0].idMaquina == _interfaces_MatBox_model__WEBPACK_IMPORTED_MODULE_2__["IdWip"].ST3) {
            this.dataPackageST3 = data;
        }
        else if (this.dataPackageWip[0].idMaquina == _interfaces_MatBox_model__WEBPACK_IMPORTED_MODULE_2__["IdWip"].ST4) {
            this.dataPackageST4 = data;
            for (let i = 0; i < 8; i++) {
                this.dataPackageST4[i].ngStyle.y = (-106 / 105) * this.dataPackageST4[i].ngStyle.x + 303; //Y=-106/105*X+303
                this.dataPackageST4[i].ngStyle.x = 0;
                this.dataPackageST4[i].ngStyle.height = this.dataPackageST4[i].ngStyle.width;
                this.dataPackageST4[i].ngStyle.width = 15;
            }
        }
        else if (this.dataPackageWip[0].idMaquina == _interfaces_MatBox_model__WEBPACK_IMPORTED_MODULE_2__["IdWip"].ST5) {
            this.dataPackageST5 = data;
            for (let i = 0; i < 8; i++) {
                this.dataPackageST5[i].ngStyle.y = (-106 / 105) * this.dataPackageST5[i].ngStyle.x + 303; //Y=-106/105*X+303
                this.dataPackageST5[i].ngStyle.x = 0;
                this.dataPackageST5[i].ngStyle.height = this.dataPackageST5[i].ngStyle.width;
                this.dataPackageST5[i].ngStyle.width = 17;
            }
        }
        else if (this.dataPackageWip[0].idMaquina == _interfaces_MatBox_model__WEBPACK_IMPORTED_MODULE_2__["IdWip"].ST6) {
            this.dataPackageST6 = data;
        }
        else if (this.dataPackageWip[0].idMaquina == _interfaces_MatBox_model__WEBPACK_IMPORTED_MODULE_2__["IdWip"].ST7) {
            this.dataPackageST7 = data;
        }
        else if (this.dataPackageWip[0].idMaquina == _interfaces_MatBox_model__WEBPACK_IMPORTED_MODULE_2__["IdWip"].ST8) {
            this.dataPackageST8 = data;
        }
        else if (this.dataPackageWip[0].idMaquina == _interfaces_MatBox_model__WEBPACK_IMPORTED_MODULE_2__["IdWip"].ST9) {
            this.dataPackageST9 = data;
        }
        else if (this.dataPackageWip[0].idMaquina == _interfaces_MatBox_model__WEBPACK_IMPORTED_MODULE_2__["IdWip"].ST10) {
            this.dataPackageST10 = data;
        }
        else if (this.dataPackageWip[0].idMaquina == _interfaces_MatBox_model__WEBPACK_IMPORTED_MODULE_2__["IdWip"].ST11) {
            this.dataPackageST11 = data;
        }
        else if (this.dataPackageWip[0].idMaquina == _interfaces_MatBox_model__WEBPACK_IMPORTED_MODULE_2__["IdWip"].ST12) {
            this.dataPackageST12 = data;
        }
        else if (this.dataPackageWip[0].idMaquina == _interfaces_MatBox_model__WEBPACK_IMPORTED_MODULE_2__["IdWip"].ST13) {
            this.dataPackageST13 = data;
        }
        else if (this.dataPackageWip[0].idMaquina == _interfaces_MatBox_model__WEBPACK_IMPORTED_MODULE_2__["IdWip"].ST14) {
            this.dataPackageST14 = data;
        }
        else if (this.dataPackageWip[0].idMaquina == _interfaces_MatBox_model__WEBPACK_IMPORTED_MODULE_2__["IdWip"].ST15) {
            this.dataPackageST15 = data;
        }
        if (this.dataPackageWip[0].idMaquina == _interfaces_MatBox_model__WEBPACK_IMPORTED_MODULE_2__["IdWip"].CT_1) {
            this.dataPackageCT_1 = data;
            this.dataPackageCT_1[0].ngStyle.x = 10;
        }
        if (this.dataPackageWip[0].idMaquina == _interfaces_MatBox_model__WEBPACK_IMPORTED_MODULE_2__["IdWip"].CT_2) {
            this.dataPackageCT_2 = data;
            this.dataPackageCT_2[0].ngStyle.x = 30;
        }
        if (this.dataPackageWip[0].idMaquina == _interfaces_MatBox_model__WEBPACK_IMPORTED_MODULE_2__["IdWip"].CT1) {
            this.dataPackageCT1 = data;
        }
        if (this.dataPackageWip[0].idMaquina == _interfaces_MatBox_model__WEBPACK_IMPORTED_MODULE_2__["IdWip"].CT2) {
            this.dataPackageCT2 = data;
        }
        if (this.dataPackageWip[0].idMaquina == _interfaces_MatBox_model__WEBPACK_IMPORTED_MODULE_2__["IdWip"].TM) {
            this.dataPackageTM = data;
        }
        if (this.dataPackageWip[0].idMaquina == _interfaces_MatBox_model__WEBPACK_IMPORTED_MODULE_2__["IdWip"].TF1) {
            this.dataPackageTF1 = data;
        }
        if (this.dataPackageWip[0].idMaquina == _interfaces_MatBox_model__WEBPACK_IMPORTED_MODULE_2__["IdWip"].TF2) {
            this.dataPackageTF2 = data;
        }
        if (this.dataPackageWip[0].idMaquina == _interfaces_MatBox_model__WEBPACK_IMPORTED_MODULE_2__["IdWip"].ID12) {
            this.dataPackageID12 = data;
        }
        if (this.dataPackageWip[0].idMaquina == _interfaces_MatBox_model__WEBPACK_IMPORTED_MODULE_2__["IdWip"].ID22) {
            this.dataPackageID22 = data;
        }
        if (this.dataPackageWip[0].idMaquina == _interfaces_MatBox_model__WEBPACK_IMPORTED_MODULE_2__["IdWip"].IM1) {
            this.dataPackageIM1 = data;
            this.dataPackageIM1[1].ngStyle.x = 22;
            this.dataPackageIM1[2].ngStyle.x = 43;
            this.dataPackageIM1[3].ngStyle.x = 41;
        }
        if (this.dataPackageWip[0].idMaquina == _interfaces_MatBox_model__WEBPACK_IMPORTED_MODULE_2__["IdWip"].IM2) {
            this.dataPackageIM2 = data;
            for (let i = 0; i < 8; i++) {
                this.dataPackageIM2[i].ngStyle.y = (-106 / 105) * this.dataPackageIM2[i].ngStyle.x + 303; //Y=-106/105*X+303
                this.dataPackageIM2[i].ngStyle.x = 0;
                this.dataPackageIM2[i].ngStyle.height = this.dataPackageIM2[i].ngStyle.width;
                this.dataPackageIM2[i].ngStyle.width = 15;
            }
        }
        if (this.dataPackageWip[0].idMaquina == _interfaces_MatBox_model__WEBPACK_IMPORTED_MODULE_2__["IdWip"].IM3) {
            this.dataPackageIM3 = data;
            for (let i = 0; i < 8; i++) {
                this.dataPackageIM3[i].ngStyle.y = (-106 / 105) * this.dataPackageIM3[i].ngStyle.x + 303; //Y=-106/105*X+303
                this.dataPackageIM3[i].ngStyle.x = 0;
                this.dataPackageIM3[i].ngStyle.height = this.dataPackageIM3[i].ngStyle.width;
                this.dataPackageIM3[i].ngStyle.width = 17;
            }
        }
        if (this.dataPackageWip[0].idMaquina == _interfaces_MatBox_model__WEBPACK_IMPORTED_MODULE_2__["IdWip"].IM4) {
            this.dataPackageIM4 = data;
            for (let i = 0; i < 8; i++) {
                this.dataPackageIM4[i].ngStyle.y = (-106 / 105) * this.dataPackageIM4[i].ngStyle.x + 303; //Y=-106/105*X+303
                this.dataPackageIM4[i].ngStyle.x = 0;
                this.dataPackageIM4[i].ngStyle.height = this.dataPackageIM4[i].ngStyle.width;
                this.dataPackageIM4[i].ngStyle.width = 15;
            }
            // this.dataPackageIM4[1].ngStyle.y=303;
            // this.dataPackageIM4[1].ngStyle.x=0;
            // this.dataPackageIM4[1].ngStyle.y=288;
            // this.dataPackageIM4[1].ngStyle.x=0;
            // this.dataPackageIM4[2].ngStyle.y=273;
            // this.dataPackageIM4[2].ngStyle.x=0;
            // this.dataPackageIM4[3].ngStyle.y=257;
            // this.dataPackageIM4[3].ngStyle.x=0;
            // this.dataPackageIM4[4].ngStyle.y=242;
            // this.dataPackageIM4[4].ngStyle.x=0;
        }
        if (this.dataPackageWip[0].idMaquina == _interfaces_MatBox_model__WEBPACK_IMPORTED_MODULE_2__["IdWip"].IM5) {
            this.dataPackageIM5 = data;
        }
        if (this.dataPackageWip[0].idMaquina == _interfaces_MatBox_model__WEBPACK_IMPORTED_MODULE_2__["IdWip"].IM6) {
            this.dataPackageIM6 = data;
        }
        if (this.dataPackageWip[0].idMaquina == _interfaces_MatBox_model__WEBPACK_IMPORTED_MODULE_2__["IdWip"].IM7) {
            this.dataPackageIM7 = data;
        }
    }
    ngOnInit() {
    }
    packageInit() {
        let emptyPackage = {
            cutLength: 1,
            description: "",
            id: -1,
            idMaquina: 1,
            name: "",
            visible: false,
            order: "",
            valor: "",
            state: 0,
            ngStyle: {
                fill: "0",
                width: 1,
                fillOpacity: 0,
                x: 0,
                height: 1,
                y: 0
            }
        };
        for (let i = 0; i < 10; i++) {
            this.dataPackages.push(emptyPackage);
        }
    }
    GetDataManual() {
        this.alive = true;
        if (this.intervalSubscriptions) {
            this.intervalSubscriptions.unsubscribe();
        }
        let i = 0;
        let deviceArray = [];
        for (var clave in _interfaces_MatBox_model__WEBPACK_IMPORTED_MODULE_2__["IdWip"]) {
            deviceArray.push(_interfaces_MatBox_model__WEBPACK_IMPORTED_MODULE_2__["IdWip"][clave]);
        }
        // this.intervalSubscriptions = interval(1000)
        Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(deviceArray)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeWhile"])(() => this.alive), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])((idDevice) => Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(1000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeWhile"])(() => this.alive), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(() => this.http.get(this.api.apiUrlMatbox + "/Orders/GetPackagesWIP?idDevice=" + idDevice)))))
            .subscribe((res) => {
            this.AsignarDatosWip(res);
        });
    }
    GetDataAlarmManual() {
        this.aliveAlarm = true;
        // debugger
        if (this.intervalSubscriptionsAlarm) {
            this.intervalSubscriptionsAlarm.unsubscribe();
        }
        this.intervalSubscriptionsAlarm = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(5000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeWhile"])(() => this.aliveAlarm), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(() => this.http.get(this.api.apiUrlNode1 + '/GetNumberAlarm')))
            .subscribe((res) => {
            this.numeroAlarmas = res[0];
        });
    }
}
SignalRService.ɵfac = function SignalRService_Factory(t) { return new (t || SignalRService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
SignalRService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SignalRService, factory: SignalRService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignalRService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false,
    apiUrl: 'http://10.100.22.48:3001/api',
    apiUrlMat: 'http://10.100.22.48:5001/api',
    apiUrlMatSignalR: 'http://10.100.22.48:5001',
    apiUrlNode: 'http://10.100.22.48:1880',
    apiUrlNode1: 'http://10.100.22.82:1880',
    apiTeam: 'http://localhost:3000',
    testUser: {
        // tslint:disable
        token: {
            expires_in: 3600000,
            access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQFVzZXIiLCJyb2xlIjoidXNlciIsIm5iZiI6MTU2NDA2MTQ1NywiZXhwIjoxNTk1NjgzODU3LCJpc3MiOiJpc3N1ZXJfc2FtcGxlIiwiYXVkIjoiYXVkaWVuY2Vfc2FtcGxlIn0.xAAbQIOsw3ZXlIxDFnv5NynZy7OfzrvrJYWsy2NEBbA',
        },
        // tslint:enable
        email: 'user@user.user',
    },
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sebastianlosada/Documents/MatBag/MatBag.FrontendV1/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map