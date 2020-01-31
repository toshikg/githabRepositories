(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"content\"\n       *ngIf=\"user$ | async as user\"\n       fxLayout=\"row\" fxLayout.lt-sm=\"column\">\n    <div fxFlex=\"20%\" fxFlex.lt-sm=\"100%\">\n      <p><img style=\"width: 100%\" [src]=\"user.avatar_url\" alt=\"\"></p>\n      <p>Author: <b>{{user.login}}</b></p>\n    </div>\n    <div fxFlex=\"77%\" fxFlex.lt-sm=\"100%\" fxFlexOffset.gt-xs=\"3%\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/repos/repo-description-edit/repo-description-edit.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/repos/repo-description-edit/repo-description-edit.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <mat-card>\n    <mat-form-field style=\"width: 100%\">\n      <textarea [formControl]=\"textCtrl\" matInput mat-autosize placeholder=\"Edit description\"></textarea>\n    </mat-form-field>\n\n    <button mat-button color=\"primary\" (click)=\"onCancel()\">Cancel</button>\n    <button mat-button (click)=\"onSave()\">Save</button>\n  </mat-card>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/repos/repo-details/repo-details.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/repos/repo-details/repo-details.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"repo$ | async as repo\">\n  <div class=\"repo-header\" fxLayout=\"row\" fxLayout.lt-sm=\"column\">\n    <div fxFlex=\"70\"><h1>{{repo.name}}</h1></div>\n    <div fxFlex=\"30\" class=\"repo-download\" ngClass.gt-xs=\"text-right\">\n      <a mat-button [href]=\"getArchiveLink(repo)\">Download Zip <fa name=\"download\"></fa></a>\n    </div>\n  </div>\n\n  <div class=\"mb-20\">\n    <mat-divider></mat-divider>\n  </div>\n\n  <p *ngIf=\"!repo.description && !editDescriptionMode\">\n    <button mat-stroked-button (click)=\"editDescription()\">Add Description</button>\n  </p>\n  <p *ngIf=\"!editDescriptionMode\"\n     matTooltip=\"Click to edit description\"\n     (click)=\"editDescription()\">\n    {{repo.description}}\n  </p>\n  <p>\n    <mat-error *ngIf=\"unsavedVersion\">You have unsaved description.</mat-error>\n  </p>\n  <p *ngIf=\"editDescriptionMode\">\n    <app-edit-text (save)=\"save($event, repo)\"\n                   (cancel)=\"closeEditMode()\"\n                   [repoId]=\"repo.id\"\n                   [text]=\"unsavedVersion || repo.description\"></app-edit-text>\n  </p>\n  <p>\n    <mat-error *ngIf=\"showError\">There are a problem occurs wile saving.</mat-error>\n  </p>\n\n  <p>\n    <mat-chip-list>\n      <mat-chip *ngIf=\"branchesCount$ | async as branchesCount\" color=\"primary\">{{branchesCount}} branch(s)</mat-chip>\n      <mat-chip *ngIf=\"commitsCount$ | async as commitsCount\" color=\"primary\">{{commitsCount}} commit(s)</mat-chip>\n      <mat-chip *ngIf=\"releasesCount$ | async as releasesCount\" color=\"primary\">{{releasesCount}} release(s)</mat-chip>\n    </mat-chip-list>\n  </p>\n\n  <mat-card *ngIf=\"readme$ | async as readme\">\n    <h1>README</h1>\n    <div [innerHTML]=\"compileMarkdown(readme.content)\"></div>\n  </mat-card>\n  <br>\n\n  <div class=\"mb-20\">\n    <mat-divider></mat-divider>\n  </div>\n  <a mat-stroked-button [routerLink]=\"['/repos']\">Back: Repositories</a>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/repos/repos/repos.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/repos/repos/repos.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <h1>Repositories</h1>\n\n  <div class=\"content\"\n       fxLayout=\"row\"\n       fxLayout.lt-sm=\"column\">\n    <div fxFlex.gt-md=\"30\">\n      <mat-form-field class=\"field-full-width\">\n        <input [formControl]=\"filterCtrl\" matInput placeholder=\"Type repository name\">\n      </mat-form-field>\n    </div>\n    <div fxFlex.gt-md=\"20\" fxFlexOffset.gt-xs=\"20px\">\n      <mat-form-field class=\"field-full-width\">\n        <mat-select placeholder=\"Sorting\" [formControl]=\"sortingCtrl\">\n          <mat-option *ngFor=\"let sort of sorting\" [value]=\"sort\">\n            {{sortNames[sort]}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n  </div>\n\n\n  <div *ngIf=\"(reposFiltered | async) as repos\">\n    <div class=\"repos-list\" *ngFor=\"let repo of repos\">\n      <h3><a class=\"mat-accent\" [routerLink]=\"['/repos', repo.id]\" >{{repo.name}}</a></h3>\n      <p>{{repo.description}}</p>\n      <p class=\"mat-caption\">{{repo.updated_at | date}}</p>\n      <mat-divider></mat-divider>\n    </div>\n\n    <p *ngIf=\"repos?.length === 0 && filterCtrl.value\">\n      There are no repositories related to your query\n    </p>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _repos_repos_repos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./repos/repos/repos.component */ "./src/app/repos/repos/repos.component.ts");
/* harmony import */ var _repos_repo_details_repo_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./repos/repo-details/repo-details.component */ "./src/app/repos/repo-details/repo-details.component.ts");





const routes = [
    {
        path: 'repos',
        component: _repos_repos_repos_component__WEBPACK_IMPORTED_MODULE_3__["ReposComponent"]
    },
    {
        path: 'repos/:id',
        component: _repos_repo_details_repo_details_component__WEBPACK_IMPORTED_MODULE_4__["RepoDetailsComponent"]
    },
    {
        path: '**',
        redirectTo: 'repos'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");



let AppComponent = class AppComponent {
    constructor(appService) {
        this.title = 'githab-test-task';
        this.user$ = appService.getUserData();
    }
};
AppComponent.ctorParameters = () => [
    { type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _repos_repos_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./repos/repos.module */ "./src/app/repos/repos.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _http_interceptor_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./http-interceptor.service */ "./src/app/http-interceptor.service.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.js");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
            _repos_repos_module__WEBPACK_IMPORTED_MODULE_7__["ReposModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            angular_font_awesome__WEBPACK_IMPORTED_MODULE_10__["AngularFontAwesomeModule"]
        ],
        providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"], useClass: _http_interceptor_service__WEBPACK_IMPORTED_MODULE_9__["HttpInterceptorService"], multi: true },],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let AppService = class AppService {
    constructor(http) {
        this.http = http;
        this.api = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].gitHabUrl;
    }
    getUserData() {
        const url = `${this.api}/user`;
        return this.http.get(url);
    }
};
AppService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AppService);



/***/ }),

/***/ "./src/app/http-interceptor.service.ts":
/*!*********************************************!*\
  !*** ./src/app/http-interceptor.service.ts ***!
  \*********************************************/
/*! exports provided: HttpInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpInterceptorService", function() { return HttpInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


// this need to get around githab security. Github not allows token in source code.
const token = '58917b411e3df934145----------e6fd8f1a36a16528cb7cc'.replace('----------', '');
let HttpInterceptorService = class HttpInterceptorService {
    constructor() { }
    intercept(req, next) {
        const reqEdited = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        });
        return next.handle(reqEdited);
    }
};
HttpInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpInterceptorService);



/***/ }),

/***/ "./src/app/repos/repo-description-edit/repo-description-edit.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/repos/repo-description-edit/repo-description-edit.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9zL3JlcG8tZGVzY3JpcHRpb24tZWRpdC9yZXBvLWRlc2NyaXB0aW9uLWVkaXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/repos/repo-description-edit/repo-description-edit.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/repos/repo-description-edit/repo-description-edit.component.ts ***!
  \********************************************************************************/
/*! exports provided: RepoDescriptionEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepoDescriptionEditComponent", function() { return RepoDescriptionEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _repos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../repos.service */ "./src/app/repos/repos.service.ts");




let RepoDescriptionEditComponent = class RepoDescriptionEditComponent {
    constructor(reposService, elementRef) {
        this.reposService = reposService;
        this.elementRef = elementRef;
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onSave() {
        this.save.emit(this.textCtrl.value);
        this.reposService.saveDescToLocalStorage(this.repoId, '');
    }
    onCancel() {
        this.cancel.emit();
        this.reposService.saveDescToLocalStorage(this.repoId, '');
    }
    ngOnInit() {
        this.textCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.text);
        this.elementRef.nativeElement.querySelector('textarea').focus();
        this.textCtrl.valueChanges.subscribe((text) => {
            this.reposService.saveDescToLocalStorage(this.repoId, text);
        });
    }
};
RepoDescriptionEditComponent.ctorParameters = () => [
    { type: _repos_service__WEBPACK_IMPORTED_MODULE_3__["ReposService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RepoDescriptionEditComponent.prototype, "text", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RepoDescriptionEditComponent.prototype, "repoId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], RepoDescriptionEditComponent.prototype, "save", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], RepoDescriptionEditComponent.prototype, "cancel", void 0);
RepoDescriptionEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-text',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./repo-description-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/repos/repo-description-edit/repo-description-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./repo-description-edit.component.scss */ "./src/app/repos/repo-description-edit/repo-description-edit.component.scss")).default]
    })
], RepoDescriptionEditComponent);



/***/ }),

/***/ "./src/app/repos/repo-details/repo-details.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/repos/repo-details/repo-details.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9zL3JlcG8tZGV0YWlscy9yZXBvLWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/repos/repo-details/repo-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/repos/repo-details/repo-details.component.ts ***!
  \**************************************************************/
/*! exports provided: RepoDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepoDetailsComponent", function() { return RepoDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _repos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../repos.service */ "./src/app/repos/repos.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var base_64__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! base-64 */ "./node_modules/base-64/base64.js");
/* harmony import */ var base_64__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(base_64__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! marked */ "./node_modules/marked/src/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_6__);
var RepoDetailsComponent_1;







let RepoDetailsComponent = RepoDetailsComponent_1 = class RepoDetailsComponent {
    constructor(reposService, route) {
        this.reposService = reposService;
        this.route = route;
        this.editDescriptionMode = false;
    }
    static decode(str) {
        return base_64__WEBPACK_IMPORTED_MODULE_5__["decode"](str);
    }
    ngOnInit() {
        const repoId = parseInt(this.route.snapshot.params.id, 0);
        this.branchesCount$ = this.reposService.getBranches(repoId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(branches => branches.length));
        this.commitsCount$ = this.reposService.getCommits(repoId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(branches => branches.length));
        this.releasesCount$ = this.reposService.getReleases(repoId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(branches => branches.length));
        this.repo$ = this.reposService.getRepoById(repoId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((repo) => {
            if (!repo) {
                return;
            }
            this.unsavedVersion = this.reposService.getDescFromLocalStorage(repo.id);
            if (this.unsavedVersion) {
                this.editDescriptionMode = true;
            }
        }));
        this.readme$ = this.reposService.getReadme(repoId);
    }
    getArchiveLink(repo) {
        return `https://github.com/${repo.owner.login}/${repo.name}/archive/master.zip`;
    }
    save(description, repo) {
        const updatedRepo = Object.assign({}, repo, { description });
        this.reposService.updateRepo(repo.id, updatedRepo).subscribe(() => {
            this.closeEditMode();
            this.unsavedVersion = null;
        }, () => {
            this.showError = true;
        });
    }
    closeEditMode() {
        this.editDescriptionMode = false;
        this.unsavedVersion = null;
    }
    editDescription() {
        this.editDescriptionMode = true;
    }
    compileMarkdown(data) {
        return marked__WEBPACK_IMPORTED_MODULE_6__(RepoDetailsComponent_1.decode(data));
    }
};
RepoDetailsComponent.ctorParameters = () => [
    { type: _repos_service__WEBPACK_IMPORTED_MODULE_2__["ReposService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
RepoDetailsComponent = RepoDetailsComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-repo-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./repo-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/repos/repo-details/repo-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./repo-details.component.scss */ "./src/app/repos/repo-details/repo-details.component.scss")).default]
    })
], RepoDetailsComponent);



/***/ }),

/***/ "./src/app/repos/repos.module.ts":
/*!***************************************!*\
  !*** ./src/app/repos/repos.module.ts ***!
  \***************************************/
/*! exports provided: ReposModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReposModule", function() { return ReposModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _repos_repos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./repos/repos.component */ "./src/app/repos/repos/repos.component.ts");
/* harmony import */ var _repo_details_repo_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./repo-details/repo-details.component */ "./src/app/repos/repo-details/repo-details.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _repo_description_edit_repo_description_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./repo-description-edit/repo-description-edit.component */ "./src/app/repos/repo-description-edit/repo-description-edit.component.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.js");











let ReposModule = class ReposModule {
};
ReposModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_repos_repos_component__WEBPACK_IMPORTED_MODULE_3__["ReposComponent"], _repo_details_repo_details_component__WEBPACK_IMPORTED_MODULE_4__["RepoDetailsComponent"], _repo_description_edit_repo_description_edit_component__WEBPACK_IMPORTED_MODULE_9__["RepoDescriptionEditComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            angular_font_awesome__WEBPACK_IMPORTED_MODULE_10__["AngularFontAwesomeModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["ExtendedModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"]
        ]
    })
], ReposModule);



/***/ }),

/***/ "./src/app/repos/repos.service.ts":
/*!****************************************!*\
  !*** ./src/app/repos/repos.service.ts ***!
  \****************************************/
/*! exports provided: ReposService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReposService", function() { return ReposService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let ReposService = class ReposService {
    constructor(http) {
        this.http = http;
        this.api = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].gitHabUrl;
        this.repos$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.callState = {
            loading: false,
            loaded: false,
        };
    }
    fetchRepos() {
        const url = `${this.api}/users/toshikg/repos`;
        return this.http.get(url);
    }
    getRepos() {
        if (!this.callState.loaded && !this.callState.loading) {
            this.callState.loading = true;
            return this.fetchRepos().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(repos => {
                this.repos$.next(repos);
                this.callState.loading = false;
                this.callState.loaded = true;
            }));
        }
        else {
            return this.repos$;
        }
    }
    getRepoById(id) {
        if (!this.callState.loaded && !this.callState.loading) {
            this.getRepos().subscribe();
        }
        return this.repos$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(repos => repos.find(r => r.id === id)));
    }
    updateRepo(id, data) {
        const url = `${this.api}/repositories/${id}`;
        return this.http.patch(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => this.updateRepoState(id, data)));
    }
    getReadme(id) {
        const url = `${this.api}/repositories/${id}/readme`;
        return this.http.get(url);
    }
    saveDescToLocalStorage(repoId, text) {
        const descStrObj = localStorage.getItem('description');
        const descObj = descStrObj ? JSON.parse(descStrObj) : {};
        descObj[repoId] = text;
        localStorage.setItem('description', JSON.stringify(descObj));
    }
    getDescFromLocalStorage(repoId) {
        const descObj = JSON.parse(localStorage.getItem('description')) || {};
        return descObj[repoId];
    }
    getBranches(repoId) {
        const url = `${this.api}/repositories/${repoId}/branches`;
        return this.http.get(url);
    }
    getCommits(repoId) {
        const url = `${this.api}/repositories/${repoId}/commits`;
        return this.http.get(url);
    }
    getReleases(repoId) {
        const url = `${this.api}/repositories/${repoId}/releases`;
        return this.http.get(url);
    }
    updateRepoState(id, data) {
        this.repos$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(repos => {
            const reposUpdated = repos.map(r => (r.id === id) ? data : r);
            this.repos$.next(reposUpdated);
        })).subscribe();
    }
};
ReposService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ReposService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ReposService);



/***/ }),

/***/ "./src/app/repos/repos/repos.component.scss":
/*!**************************************************!*\
  !*** ./src/app/repos/repos/repos.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-divider-horizontal {\n  margin-bottom: 10px;\n}\n\nh3 {\n  margin-bottom: 5px;\n}\n\n.field-full-width {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnRvbmdvbmNoYXJvdi9Eb2N1bWVudHMvUHJvamVjdHMvZ2l0aGFiLXRlc3QtdGFzay9zcmMvYXBwL3JlcG9zL3JlcG9zL3JlcG9zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yZXBvcy9yZXBvcy9yZXBvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcmVwb3MvcmVwb3MvcmVwb3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWRpdmlkZXItaG9yaXpvbnRhbCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbmgzIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uZmllbGQtZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuIiwiLm1hdC1kaXZpZGVyLWhvcml6b250YWwge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5oMyB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmZpZWxkLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/repos/repos/repos.component.ts":
/*!************************************************!*\
  !*** ./src/app/repos/repos/repos.component.ts ***!
  \************************************************/
/*! exports provided: ReposComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReposComponent", function() { return ReposComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _repos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../repos.service */ "./src/app/repos/repos.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/orderBy */ "./node_modules/lodash/orderBy.js");
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_orderBy__WEBPACK_IMPORTED_MODULE_6__);







let ReposComponent = class ReposComponent {
    constructor(reposService) {
        this.sortNames = {
            DATE_ASC: 'Date ASC',
            DATE_DESC: 'Date DESC',
            TITLE_ASC: 'Title ASC',
            TITLE_DESC: 'Title DESC',
        };
        this.repos = reposService.getRepos();
        this.filterCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
        this.sortingCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('DATE_DESC');
        this.reposFiltered = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([
            this.repos,
            this.filterCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])('')),
            this.sortingCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])('DATE_DESC'))
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(([repos, searchStr, sort]) => {
            const filteredRepos = repos.filter(h => h.name.toLowerCase().includes(searchStr.toLowerCase()));
            const sortField = sort.startsWith('DATE') ? 'updated_at' : 'name';
            const sortDirection = sort.indexOf('ASC') > -1 ? 'asc' : 'desc';
            return lodash_orderBy__WEBPACK_IMPORTED_MODULE_6__(filteredRepos, [sortField], [sortDirection]);
        }));
        this.sorting = ['DATE_ASC', 'DATE_DESC', 'TITLE_ASC', 'TITLE_DESC'];
    }
    ngOnInit() {
    }
};
ReposComponent.ctorParameters = () => [
    { type: _repos_service__WEBPACK_IMPORTED_MODULE_2__["ReposService"] }
];
ReposComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-repos',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./repos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/repos/repos/repos.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./repos.component.scss */ "./src/app/repos/repos/repos.component.scss")).default]
    })
], ReposComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    gitHabUrl: 'https://api.github.com',
    hitHabAccessToken: '0a1a44145fa80f4e41481a5f689966bdf2785ec3'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/antongoncharov/Documents/Projects/githab-test-task/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map