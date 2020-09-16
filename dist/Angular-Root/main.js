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

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 2, vars: 0, template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "about works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");






class AppComponent {
    constructor() {
        this.title = 'Angular-Root';
        this.isBackground = false;
    }
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 2, consts: [[1, "page-container"], [1, "header"], ["header", ""], [1, "content"], [1, "footer"], ["footer", ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-header", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "main", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "app-footer", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("no-background", ctx.isBackground);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: [".header[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  background-color: rgba(0, 0, 0, 0);\n  width: 100%;\n  z-index: 5;\n}\n\n.content[_ngcontent-%COMP%] {\n  grid-area: main;\n}\n\n.footer[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBSEY7O0FBTUE7RUFDRSxlQUFBO0FBSEY7O0FBTUE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUVBLFdBQUE7QUFKRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWNvbnRhaW5lciB7XHJcblxyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogNTtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIGdyaWQtYXJlYTogbWFpbjtcclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMDtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-lazyload-image */ "./node_modules/ng-lazyload-image/__ivy_ngcc__/fesm2015/ng-lazyload-image.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _three_three_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./three/three.component */ "./src/app/three/three.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");
/* harmony import */ var _works_works_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./works/works.component */ "./src/app/works/works.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./loader/loader.component */ "./src/app/loader/loader.component.ts");
/* harmony import */ var _works_works_list_works_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./works/works-list/works-list.component */ "./src/app/works/works-list/works-list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");


















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_2__["routing"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            ng_lazyload_image__WEBPACK_IMPORTED_MODULE_4__["LazyLoadImageModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _three_three_component__WEBPACK_IMPORTED_MODULE_6__["ThreeComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
        _project_project_component__WEBPACK_IMPORTED_MODULE_9__["ProjectComponent"],
        _works_works_component__WEBPACK_IMPORTED_MODULE_10__["WorksComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
        _loader_loader_component__WEBPACK_IMPORTED_MODULE_14__["LoaderComponent"],
        _works_works_list_works_list_component__WEBPACK_IMPORTED_MODULE_15__["WorksListComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        ng_lazyload_image__WEBPACK_IMPORTED_MODULE_4__["LazyLoadImageModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _three_three_component__WEBPACK_IMPORTED_MODULE_6__["ThreeComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                    _project_project_component__WEBPACK_IMPORTED_MODULE_9__["ProjectComponent"],
                    _works_works_component__WEBPACK_IMPORTED_MODULE_10__["WorksComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"],
                    _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
                    _loader_loader_component__WEBPACK_IMPORTED_MODULE_14__["LoaderComponent"],
                    _works_works_list_works_list_component__WEBPACK_IMPORTED_MODULE_15__["WorksListComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing__WEBPACK_IMPORTED_MODULE_2__["routing"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    ng_lazyload_image__WEBPACK_IMPORTED_MODULE_4__["LazyLoadImageModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _works_works_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./works/works.component */ "./src/app/works/works.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/*********************
 * Component Routing
 * Malik Tillman 2019
 *********************/
/**
 * Import routing helpers
 */

/**
 * Import application components
 */





/**
 * Define application routes
 * Todo: Add NotFoundComponent and ComingSoonComponent
 */
const appRoutes = [
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    {
        path: 'project',
        component: _project_project_component__WEBPACK_IMPORTED_MODULE_2__["ProjectComponent"],
        children: [
            {
                path: ':id',
                component: _project_project_component__WEBPACK_IMPORTED_MODULE_2__["ProjectComponent"]
            }
        ]
    },
    {
        path: 'works',
        component: _works_works_component__WEBPACK_IMPORTED_MODULE_1__["WorksComponent"],
        children: [
            {
                path: ':type',
                component: _works_works_component__WEBPACK_IMPORTED_MODULE_1__["WorksComponent"]
            }
        ],
        runGuardsAndResolvers: 'always'
    },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { path: '**', redirectTo: '/home' }
];
/**
 * Export routing module
 */
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes, {
    onSameUrlNavigation: 'reload',
    useHash: true
});


/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 2, vars: 0, template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "contact works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/fetch-works.service.ts":
/*!****************************************!*\
  !*** ./src/app/fetch-works.service.ts ***!
  \****************************************/
/*! exports provided: FetchWorksService, CDN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchWorksService", function() { return FetchWorksService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDN", function() { return CDN; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



const production = false;
class FetchWorksService {
    constructor(http) {
        this.http = http;
        this.hostUrl = 'api.maliktillman.com';
        this.getWorksList = () => {
            return this.http.get(`https://${this.hostUrl}/work-list`);
        };
        this.getProject = (id) => {
            return this.http.get(`https://${this.hostUrl}/works/${id}`);
        };
        this.getWorksListByType = (type) => {
            return this.http.get(`https://${this.hostUrl}/work-list/${type.join(',')}`);
        };
        this.getWorksListByIds = (ids) => {
            // Used comma delimiter instead of semi-colon because of ad-blockers
            return this.http.get(`https://${this.hostUrl}/work-list_by-ids/${ids.join(',')}`);
        };
    }
}
FetchWorksService.ɵfac = function FetchWorksService_Factory(t) { return new (t || FetchWorksService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
FetchWorksService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FetchWorksService, factory: FetchWorksService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FetchWorksService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();
const CDN = production ?
    'cdn.maliktillman.com/file/maliktillman-media-store' :
    'maliktillman-media-store.s3.us-west-002.backblazeb2.com';


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typed.js */ "./node_modules/typed.js/lib/typed.js");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typed_js__WEBPACK_IMPORTED_MODULE_1__);



class FooterComponent {
    constructor() {
        this.randomFactsTypedConfig = {
            strings: [
                'Welcome to my site!',
                'This site was designed and developed by Malik Tillman'
            ],
            typeSpeed: 25,
            backSpeed: 50,
            backDelay: 10000,
            smartBackspace: true,
            showCursor: true,
            cursorChar: '',
            autoInsertCss: true,
            loop: true
        };
    }
    ngOnInit() {
        const typedName = new typed_js__WEBPACK_IMPORTED_MODULE_1___default.a('.footer-text', this.randomFactsTypedConfig);
        typedName.start();
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 9, vars: 0, consts: [[1, "container"], [1, "logo_container"], ["href", "https://github.com/malik-tillman", "target", "_blank", "rel", "noopener noreferrer", 1, "github-link"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 438.549 438.549", 0, "xml", "space", "preserve", 1, "github", "logo"], ["d", "M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906C438.536,184.851,428.728,148.168,409.132,114.573z"], ["href", "https://www.linkedin.com/in/malik-tillman/", "target", "_blank", "rel", "noopener noreferrer", 1, "linkedIn-link"], ["viewBox", "0 0 512 512", "width", "512pt", "xmlns", "http://www.w3.org/2000/svg", 1, "linkedIn", "logo"], ["d", "m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm-74.390625 387h-62.347656v-187.574219h62.347656zm-31.171875-213.1875h-.40625c-20.921875 0-34.453125-14.402344-34.453125-32.402344 0-18.40625 13.945313-32.410156 35.273437-32.410156 21.328126 0 34.453126 14.003906 34.859376 32.410156 0 18-13.53125 32.402344-35.273438 32.402344zm255.984375 213.1875h-62.339844v-100.347656c0-25.21875-9.027343-42.417969-31.585937-42.417969-17.222656 0-27.480469 11.601563-31.988282 22.800781-1.648437 4.007813-2.050781 9.609375-2.050781 15.214844v104.75h-62.34375s.816407-169.976562 0-187.574219h62.34375v26.558594c8.285157-12.78125 23.109375-30.960937 56.1875-30.960937 41.019531 0 71.777344 26.808593 71.777344 84.421874zm0 0"], [1, "footer-text"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 3fr 1fr;\n  padding: 0 25px;\n  background-color: rgba(50, 27, 27, 0.5);\n  min-height: 75px;\n  transition: height 1s;\n}\n\n.logo_container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.logo_container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.logo[_ngcontent-%COMP%] {\n  width: 25px;\n  padding-right: 10px;\n  fill: white;\n}\n\n.footer-text[_ngcontent-%COMP%] {\n  justify-self: center;\n  align-self: center;\n  padding: 15px;\n  text-align: center;\n  color: white;\n  font-family: Lato, sans-serif;\n  font-size: 12px;\n}\n\n\n\n@media (max-width: 450px) {\n  .container[_ngcontent-%COMP%] {\n    min-height: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFFQSx1Q0FBQTtFQUdBLGdCQUFBO0VBQ0EscUJBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUZGOztBQUlFO0VBQ0UscUJBQUE7QUFGSjs7QUFNQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7QUFKRjs7QUFPQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFFQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FBTEY7O0FBUUEsdUJBQUE7O0FBQ0E7RUFDRTtJQUNFLGdCQUFBO0VBTEY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmciAxZnI7XHJcbiAgcGFkZGluZzogMCAyNXB4O1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUwLCAyNywgMjcsIDAuNSk7XHJcbiAgLy9vcGFjaXR5OiAuNTtcclxuXHJcbiAgbWluLWhlaWdodDogNzVweDtcclxuICB0cmFuc2l0aW9uOiBoZWlnaHQgMXM7XHJcbn1cclxuXHJcbi5sb2dvX2NvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBhIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICB3aWR0aDogMjVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG5cclxuICBmaWxsOiB3aGl0ZTtcclxufVxyXG5cclxuLmZvb3Rlci10ZXh0IHtcclxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcblxyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogTGF0bywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi8qIE1vYmlsZSBNZWRpYSBRdWVyeSAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fetch_works_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fetch-works.service */ "./src/app/fetch-works.service.ts");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! typed.js */ "./node_modules/typed.js/lib/typed.js");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(typed_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








const _c0 = ["container"];
function HeaderComponent_a_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const work_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/project/", work_r2.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "https://", ctx_r1.cdnUrl, "/images/", work_r2.thumbnail, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](work_r2.name);
} }
class HeaderComponent {
    constructor(fetchWorksService, router) {
        this.fetchWorksService = fetchWorksService;
        this.router = router;
        this.cdnUrl = _fetch_works_service__WEBPACK_IMPORTED_MODULE_1__["CDN"];
        this.menuToggle = false;
        this.favoritesId = [130, 131, 134, 145, 148];
        this.worksList = [];
        this.typedNameConfig = {
            strings: ['Malik_Tillman'],
            typeSpeed: 100,
            startDelay: 1000,
            showCursor: false,
            loop: false,
        };
        fetchWorksService.getWorksListByIds(this.favoritesId)
            .subscribe((data) => {
            this.worksList = data;
        });
        router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                this.menuToggle = false;
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    }
    ngAfterViewInit() {
        const typedNameObj = new typed_js__WEBPACK_IMPORTED_MODULE_2___default.a('#name', this.typedNameConfig);
        typedNameObj.start();
    }
    toggleMenu() {
        this.menuToggle = !this.menuToggle;
    }
    closeMenu() {
        this.menuToggle = false;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_fetch_works_service__WEBPACK_IMPORTED_MODULE_1__["FetchWorksService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], viewQuery: function HeaderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
    } }, decls: 57, vars: 3, consts: [[1, "menu"], ["container", ""], ["type", "button", 1, "close-button", "button", 3, "click"], ["viewBox", "0 0 100 100", 0, "xml", "space", "preserve", 1, "close-icon"], ["d", "M16.7,16.7v66.6h66.6V16.7H16.7z M76.3,76.3H23.7V23.7h52.6V76.3z"], ["points", "40.8,64.2 50,54.9 59.2,64.2 64.2,59.2 54.9,50 64.2,40.8 59.2,35.8 50,45.1 40.8,35.8 35.8,40.8 45.1,50    35.8,59.2  "], ["routerLink", "works"], [1, "menu-title"], ["routerLink", "works/dev", 1, "main-link"], ["viewBox", "0 0 100 100", 0, "xml", "space", "preserve"], ["fill", "none", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "d", "M90.5,82.5c0,4.418-3.582,8-8,8h-65c-4.418,0-8-3.582-8-8v-65c0-4.418,3.582-8,8-8h65c4.418,0,8,3.582,8,8V82.5z"], ["fill", "none", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "x1", "11", "y1", "25.5", "x2", "90", "y2", "25.5"], ["fill", "none", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "x1", "19", "y1", "17.5", "x2", "31", "y2", "17.5"], ["cx", "61.25", "cy", "17.5", "r", "2"], ["cx", "71.25", "cy", "17.5", "r", "2"], ["cx", "81.25", "cy", "17.5", "r", "2"], ["fill", "none", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "points", "36.596,64.483 26.972,54.859 36.596,45.235"], ["fill", "none", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "points", "63.404,64.483 73.028,54.859 63.404,45.235"], ["fill", "none", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "d", "M56.072,54.859"], ["fill", "none", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "x1", "52.606", "y1", "45.322", "x2", "45.904", "y2", "64.397"], [1, "big"], ["routerLink", "works/creative", 1, "main-link"], ["viewBox", "0 0 164 164", 0, "xml", "space", "preserve"], ["d", "M163,82c0-44.7-36.3-81-81-81C72,1,62.2,2.8,52.9,6.4H26.1c-0.6,0-1,0.4-1,1v17C9.6,39.7,1,60.1,1,82    c0,44.5,36.2,81,81,81c21.3,0,41.3-8.2,56.5-23c8.4-1.2,14.9-8.4,14.9-17.2v-2.6C159.7,108.5,163,95.3,163,82z M82,3    c43.6,0,79,35.4,79,79c0,11.7-2.6,23.3-7.6,33.8v-6.4c0-5.7-2.8-11.1-7.6-14.4c-2.6-1.8-5.6-2.8-8.8-3V65.8    c0-7.1-5.7-12.8-12.8-12.8c-7.1,0-12.8,5.7-12.8,12.8v62.8c0,2-1.6,3.6-3.6,3.6H30.7c-2,0-3.6-1.6-3.6-3.6c0-2,1.6-3.6,3.6-3.6    h57.5c3,0,5.4-2.4,5.4-5.4c0-3-2.4-5.4-5.4-5.4h-20c-1.9,0-3.4-1.5-3.4-3.4V106c13,0,21.6,0,36.8,0c0.6,0,1-0.4,1-1V28.5    c0-0.2-0.1-0.5-0.3-0.7L81.4,6.7c-0.2-0.2-0.5-0.3-0.7-0.3H59.1C66.5,4.2,74.2,3,82,3z M63.9,75.9c1.3,0,2.4,1.1,2.4,2.4    c0,1.3-1.1,2.4-2.4,2.4c-1.3,0-2.4-1.1-2.4-2.4C61.6,76.9,62.6,75.9,63.9,75.9z M65.2,46.1L65.2,46.1h-2.5h-0.1v-2.5h2.5V46.1z     M62.9,48.8V74c-1.9,0.5-3.4,2.2-3.4,4.2c0,2.4,2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4c0-2.1-1.4-3.8-3.4-4.2V48.8l18.7,35.2    c-2.1,1.1-6.7,4.3-8.7,11H53c-2.1-6.7-6.7-9.9-8.8-11L62.9,48.8z M79,97.1v6.9h-30v-6.9H79z M81.7,9.8l17.7,17.7H81.7V9.8z     M79.7,8.4v20.1c0,0.6,0.4,1,1,1h20.1V104H81v-7.9c0-0.6-0.4-1-1-1H77c2.4-7.2,8.1-9.6,8.4-9.7c0.3-0.1,0.5-0.3,0.6-0.6    c0.1-0.3,0.1-0.6-0.1-0.8L66.7,47.9c0.3-0.2,0.5-0.5,0.5-0.8v-1.3h14.3c0.4,1.3,1.6,2.3,3.1,2.3c1.8,0,3.3-1.5,3.3-3.3    s-1.5-3.3-3.3-3.3c-1.4,0-2.7,1-3.1,2.3H67.2v-1.3c0-0.6-0.4-1-1-1h-4.5c-0.6,0-1,0.4-1,1v1.3H46.3c-0.4-1.3-1.6-2.3-3.1-2.3    c-1.8,0-3.3,1.5-3.3,3.3s1.5,3.3,3.3,3.3c1.5,0,2.7-1,3.1-2.3h14.3v1.3c0,0.4,0.2,0.7,0.5,0.8L42,84c-0.1,0.3-0.2,0.5-0.1,0.8    c0.1,0.3,0.3,0.5,0.6,0.6c0.1,0,5.9,2.4,8.4,9.7h-2.9c-0.6,0-1,0.4-1,1v7.9H27.1c0-10.7,0-84.5,0-95.6C44.6,8.4,62.2,8.4,79.7,8.4    z M84.6,43.5c0.7,0,1.3,0.6,1.3,1.3c0,0.7-0.6,1.3-1.3,1.3c-0.7,0-1.3-0.6-1.3-1.3C83.4,44.1,83.9,43.5,84.6,43.5z M44.5,44.8    c0,0.7-0.6,1.3-1.3,1.3c-0.7,0-1.3-0.6-1.3-1.3c0-0.7,0.6-1.3,1.3-1.3C43.9,43.5,44.5,44.1,44.5,44.8L44.5,44.8L44.5,44.8z M3,82    c0-20.6,7.8-40,22.1-54.8V105c0,0.6,0.4,1,1,1c15.2,0,23.8,0,36.8,0v4.8c0,3,2.4,5.4,5.4,5.4h20c1.9,0,3.4,1.5,3.4,3.4    c0,1.9-1.5,3.4-3.4,3.4H30.7c-3.1,0-5.6,2.5-5.6,5.6c0,3.1,2.5,5.6,5.6,5.6h77.1c3.1,0,5.6-2.5,5.6-5.6V65.8    c0-6,4.8-10.8,10.8-10.8c6,0,10.8,4.8,10.8,10.8v26.3c-9.1,0.5-16.4,8.1-16.4,17.3v13.4c0,6.5,3.6,12.4,9.3,15.4H26.6    C12,123.9,3,104,3,82z M28.7,140.2h106.7C120.8,153.6,101.9,161,82,161C61.5,161,42.7,153.1,28.7,140.2z M151.4,122.9    c0,8.5-6.9,15.4-15.4,15.4c-8.4,0-15.4-6.8-15.4-15.4v-13.4c0-8.5,6.9-15.4,15.4-15.4c3.1,0,6.1,0.9,8.6,2.6    c4.2,2.9,6.7,7.6,6.7,12.7V122.9z"], ["d", "M79.7,146.3c0-0.6-0.4-1-1-1H54.5c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h24.2C79.2,147.3,79.7,146.8,79.7,146.3z"], ["d", "M87.6,146.3c0-0.6-0.4-1-1-1h-4c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4C87.1,147.3,87.6,146.8,87.6,146.3z"], ["d", "M90,147.3h2.6c0.6,0,1-0.4,1-1c0-0.6-0.4-1-1-1H90c-0.6,0-1,0.4-1,1C89,146.8,89.4,147.3,90,147.3z"], ["d", "M109.5,150.2H85.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h24.2c0.6,0,1-0.4,1-1C110.5,150.6,110.1,150.2,109.5,150.2z"], ["d", "M81.4,150.2h-4c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4c0.6,0,1-0.4,1-1C82.4,150.6,82,150.2,81.4,150.2z"], ["d", "M74,150.2h-2.6c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1H74c0.6,0,1-0.4,1-1C75,150.6,74.6,150.2,74,150.2z"], ["d", "M136.1,100.7c-2.2,0-4,2.3-4,5.3c0,3,1.7,5.3,4,5.3c2.2,0,4-2.3,4-5.3C140,103,138.3,100.7,136.1,100.7z M136.1,109.2    c-0.9,0-2-1.3-2-3.3c0-1.9,1-3.3,2-3.3c0.9,0,2,1.3,2,3.3C138,107.9,137,109.2,136.1,109.2z"], [1, "favorites-title"], [1, "favorite-container"], ["class", "favorites", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "menu-footer"], ["routerLink", "about", 1, "small"], ["routerLink", "contact", 1, "small"], [1, "container"], ["routerLink", "home", 1, "logo-name-container"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 500 500", 1, "logo"], ["d", "M0,365.116H131l227-241.86v241.86H500V0H323.4ZM64,469.767H50V365.116H0V500H103V459.3H64v10.465ZM212,365.116H103V500H212V472.093H151V444.186h33V415l-33,.116V395.349h61V365.116Zm106,0H212V500H318V470.93H259V444.186h32V413.953H259V394.186h59v-29.07ZM368,500V365.116H318V500h50ZM500,365.116H439L375,437l64,63h61l-72-67Z"], ["id", "name"], ["type", "button", 1, "menu-button", "button", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", 0, "xml", "space", "preserve", "fill-rule", "evenodd", "clip-rule", "evenodd", "stroke-linejoin", "round", "stroke-miterlimit", "2", 1, "menu-icon"], ["transform", "matrix(1,0,0,1,-390,-30)"], ["d", "M410,38L410,42L390,42L390,38L410,38ZM410,46L410,50L390,50L390,46L410,46ZM410,30L410,34L390,34L390,30L410,30Z"], [1, "favorites", 3, "routerLink"], ["alt", "", 3, "src"], [1, "works-name"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_2_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "polygon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Project Types");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "line", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "line", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "circle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "circle", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "circle", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "polyline", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "polyline", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "line", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Dev");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "svg", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h3", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Creative");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h2", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "My Favorites");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, HeaderComponent_a_42_Template, 4, 4, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "svg", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "path", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "h1", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_53_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "svg", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "g", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "path", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("menu_open", ctx.menuToggle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.worksList);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".menu[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  right: -425px;\n  width: 375px;\n  height: 100vh;\n  padding: 25px;\n  background: linear-gradient(153deg, #212121 0%, #0f0f0f 100%);\n  color: white;\n  font-family: Josefin Sans Light, sans-serif;\n  transition: right 1s ease;\n}\n.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  text-decoration: none;\n  color: white;\n  font-size: 24px;\n  transform: scale(1);\n  transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);\n}\n.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 35px;\n  margin-right: 15px;\n  fill: white;\n  stroke: white;\n}\n.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.menu[_ngcontent-%COMP%]   a.small[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .menu-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin: 0;\n}\n.menu[_ngcontent-%COMP%]   .main-link[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.menu[_ngcontent-%COMP%]   .main-link[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  position: relative;\n  top: 5px;\n}\n.menu[_ngcontent-%COMP%]   .menu-footer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  bottom: 100px;\n  width: 80%;\n}\n.menu_open[_ngcontent-%COMP%] {\n  right: 0;\n}\n.container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: auto;\n  grid-template-areas: \"logo menu-button\";\n  padding: 25px;\n}\n.logo-name-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  text-decoration: none;\n}\n.logo[_ngcontent-%COMP%] {\n  height: 75px;\n  fill: white;\n}\n#name[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding-left: 20px;\n  color: white;\n  font-size: 48px;\n  font-family: Josefin Sans Thin, sans-serif;\n}\n.menu-button[_ngcontent-%COMP%] {\n  grid-area: menu-button;\n  justify-self: end;\n  align-self: center;\n}\n.menu-icon[_ngcontent-%COMP%] {\n  width: 25px;\n  fill: white;\n}\n.close-button[_ngcontent-%COMP%] {\n  position: absolute;\n  align-self: flex-end;\n  z-index: 5;\n}\n.close-icon[_ngcontent-%COMP%] {\n  width: 25px;\n  fill: white;\n}\n.button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border: none;\n  outline: none;\n  background: none;\n  padding: 0;\n}\n.favorites-title[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n.favorite-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-rows: repeat(5, 50px);\n  grid-gap: 10px;\n  width: 300px;\n  height: 500px;\n  justify-self: center;\n  align-self: center;\n}\n.favorites[_ngcontent-%COMP%] {\n  width: 300px;\n}\n.favorites[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 3px;\n}\n.favorites[_ngcontent-%COMP%]   .works-name[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  font-size: 12px;\n}\n@media (max-width: 450px) {\n  .logo[_ngcontent-%COMP%] {\n    height: 35px;\n  }\n\n  #name[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n\n  .menu-icon[_ngcontent-%COMP%] {\n    width: 20px;\n  }\n\n  .menu[_ngcontent-%COMP%] {\n    width: 100%;\n    right: -100%;\n  }\n  .menu.menu_open[_ngcontent-%COMP%] {\n    right: 0;\n  }\n  .menu[_ngcontent-%COMP%]   .menu-footer[_ngcontent-%COMP%] {\n    flex-direction: row;\n    justify-content: space-between;\n    bottom: 75px;\n  }\n  .menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding-bottom: 10px;\n  }\n  .menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 20px;\n  }\n  .menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .big[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .menu[_ngcontent-%COMP%]   .favorite-container[_ngcontent-%COMP%] {\n    grid-template-rows: repeat(5, 25px);\n  }\n\n  .favorites-title[_ngcontent-%COMP%] {\n    margin-top: 25px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBRUEsa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBR0EsNkRBQUE7RUFFQSxZQWxCVztFQW1CWCwyQ0FqQlk7RUFtQloseUJBQUE7QUFSRjtBQVVFO0VBQ0UsYUFBQTtFQUVBLHFCQUFBO0VBQ0EsWUEzQlM7RUE0QlQsZUFBQTtFQUVBLG1CQUFBO0VBQ0EsZ0VBQUE7QUFWSjtBQVlJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBRUEsV0FwQ087RUFxQ1AsYUFyQ087QUEwQmI7QUFjSTtFQUNFLFNBQUE7QUFaTjtBQWVJO0VBQ0UsZUFBQTtBQWJOO0FBZ0JJO0VBQ0Msc0JBQUE7QUFkTDtBQWlCSTtFQUNFLGVBQUE7RUFDQSxTQUFBO0FBZk47QUFtQkU7RUFDRSxnQkFBQTtBQWpCSjtBQW1CSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtBQWpCTjtBQXFCRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBRUEsVUFBQTtBQXBCSjtBQXdCQTtFQUNFLFFBQUE7QUFyQkY7QUF3QkE7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSx3QkFBQTtFQUNBLHVDQUFBO0VBR0EsYUFBQTtBQXZCRjtBQTBCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBdkJGO0FBMEJBO0VBQ0UsWUFBQTtFQUVBLFdBcEdXO0FBNEViO0FBMkJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQTVHVztFQTZHWCxlQUFBO0VBRUEsMENBQUE7QUF6QkY7QUE0QkE7RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUF6QkY7QUE0QkE7RUFDRSxXQUFBO0VBQ0EsV0F6SFc7QUFnR2I7QUE0QkE7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtBQXpCRjtBQTRCQTtFQUNFLFdBQUE7RUFDQSxXQXBJVztBQTJHYjtBQTRCQTtFQUNFLGVBQUE7RUFFQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQTFCRjtBQTZCQTtFQUNFLGdCQUFBO0FBMUJGO0FBNkJBO0VBQ0UsYUFBQTtFQUNBLG1DQUFBO0VBQ0EsY0FBQTtFQUVBLFlBQUE7RUFFQSxhQUFBO0VBRUEsb0JBQUE7RUFDQSxrQkFBQTtBQTdCRjtBQWdDQTtFQUNFLFlBQUE7QUE3QkY7QUErQkU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUE3Qko7QUFnQ0U7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUE5Qko7QUFrQ0E7RUFDRTtJQUNFLFlBQUE7RUEvQkY7O0VBa0NBO0lBQ0UsZUFBQTtFQS9CRjs7RUFrQ0E7SUFDRSxXQUFBO0VBL0JGOztFQWtDQTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VBL0JGO0VBaUNFO0lBQ0UsUUFBQTtFQS9CSjtFQWtDRTtJQUNFLG1CQUFBO0lBQ0EsOEJBQUE7SUFDQSxZQUFBO0VBaENKO0VBbUNFO0lBQ0Usb0JBQUE7RUFqQ0o7RUFrQ0k7SUFDRSxXQUFBO0VBaENOO0VBbUNJO0lBQ0UsZUFBQTtFQWpDTjtFQXFDRTtJQUNFLG1DQUFBO0VBbkNKOztFQXVDQTtJQUNFLGdCQUFBO0VBcENGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHRleHQtY29sb3I6IHdoaXRlO1xyXG4kaWNvbi1jb2xvcjogd2hpdGU7XHJcbiRmb250LWZhbWlseTogSm9zZWZpbiBTYW5zIExpZ2h0LCBzYW5zLXNlcmlmO1xyXG5cclxuLm1lbnUge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IC00MjVweDtcclxuICB3aWR0aDogMzc1cHg7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBwYWRkaW5nOiAyNXB4O1xyXG5cclxuICAvL2JhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNTNkZWcsICMyMTIxMjEgMCUsICMwZjBmMGYgMTAwJSk7XHJcblxyXG4gIGNvbG9yOiAkdGV4dC1jb2xvcjtcclxuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xyXG5cclxuICB0cmFuc2l0aW9uOiByaWdodCAxcyBlYXNlO1xyXG5cclxuICBhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG5cclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzIGN1YmljLWJlemllcigwLjY4LCAtMC41NSwgMC4yNywgMS41NSk7XHJcblxyXG4gICAgc3ZnIHtcclxuICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuXHJcbiAgICAgIGZpbGw6ICRpY29uLWNvbG9yO1xyXG4gICAgICBzdHJva2U6ICRpY29uLWNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGgzIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG5cclxuICAgICYuc21hbGwge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICAgIH1cclxuXHJcbiAgICAubWVudS10aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1haW4tbGluayB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG5cclxuICAgIGgzIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0b3A6IDVweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tZW51LWZvb3RlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMTAwcHg7XHJcblxyXG4gICAgd2lkdGg6IDgwJTtcclxuICB9XHJcbn1cclxuXHJcbi5tZW51X29wZW4ge1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xyXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwibG9nbyBtZW51LWJ1dHRvblwiO1xyXG5cclxuICAvL3BhZGRpbmc6IDI1cHggMjVweCAwIDI1cHg7XHJcbiAgcGFkZGluZzogMjVweDtcclxufVxyXG5cclxuLmxvZ28tbmFtZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICBoZWlnaHQ6IDc1cHg7XHJcblxyXG4gIGZpbGw6ICRpY29uLWNvbG9yO1xyXG59XHJcblxyXG4jbmFtZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxuICBjb2xvcjogJHRleHQtY29sb3I7XHJcbiAgZm9udC1zaXplOiA0OHB4O1xyXG5cclxuICBmb250LWZhbWlseTogSm9zZWZpbiBTYW5zIFRoaW4sIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5tZW51LWJ1dHRvbiB7XHJcbiAgZ3JpZC1hcmVhOiBtZW51LWJ1dHRvbjtcclxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tZW51LWljb24ge1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGZpbGw6ICRpY29uLWNvbG9yO1xyXG59XHJcblxyXG4uY2xvc2UtYnV0dG9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgei1pbmRleDogNTtcclxufVxyXG5cclxuLmNsb3NlLWljb24ge1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGZpbGw6ICRpY29uLWNvbG9yO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmZhdm9yaXRlcy10aXRsZSB7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuLmZhdm9yaXRlLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCA1MHB4KTtcclxuICBncmlkLWdhcDogMTBweDtcclxuXHJcbiAgd2lkdGg6IDMwMHB4O1xyXG5cclxuICBoZWlnaHQ6IDUwMHB4O1xyXG5cclxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mYXZvcml0ZXMge1xyXG4gIHdpZHRoOiAzMDBweDtcclxuXHJcbiAgaW1nIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB9XHJcblxyXG4gIC53b3Jrcy1uYW1lIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gIC5sb2dvIHtcclxuICAgIGhlaWdodDogMzVweDtcclxuICB9XHJcblxyXG4gICNuYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICB9XHJcblxyXG4gIC5tZW51LWljb24ge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAubWVudSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHJpZ2h0OiAtMTAwJTtcclxuXHJcbiAgICAmLm1lbnVfb3BlbiB7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5tZW51LWZvb3RlciB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgYm90dG9tOiA3NXB4O1xyXG4gICAgfVxyXG5cclxuICAgIGEge1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgc3ZnIHtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmJpZyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZhdm9yaXRlLWNvbnRhaW5lciB7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDI1cHgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmZhdm9yaXRlcy10aXRsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: _fetch_works_service__WEBPACK_IMPORTED_MODULE_1__["FetchWorksService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, { container: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["container"]
        }] }); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typed.js */ "./node_modules/typed.js/lib/typed.js");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typed_js__WEBPACK_IMPORTED_MODULE_1__);



class HomeComponent {
    constructor() {
        this.typedConfig = {
            strings: [
                'Web Design',
                'Photography',
                'Videography',
                'Marketing',
                'Advertisement',
                'Android Development',
                'Game Development'
            ],
            typeSpeed: 75,
            backSpeed: 100,
            backDelay: 1000,
            smartBackspace: true,
            showCursor: true,
            cursorChar: '',
            autoInsertCss: true,
            loop: true
        };
    }
    static addPeriod(arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i] + '.';
        }
        return arr;
    }
    ngOnInit() {
        this.typedConfig.strings = HomeComponent.addPeriod(this.typedConfig.strings);
        const typedName = new typed_js__WEBPACK_IMPORTED_MODULE_1___default.a('#typed', this.typedConfig);
        typedName.start();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 9, vars: 0, consts: [[1, "container"], [1, "welcome-text"], ["id", "typed"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " A Freelancer / computer Science Student");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " focused on crafting memorable digital");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " experiences with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  min-height: 80vh;\n  padding-left: 25px;\n}\n\napp-three[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.welcome-text[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 20px;\n  line-height: 2;\n  font-family: Lato Light, sans-serif;\n  font-weight: 100;\n}\n\n@media (max-width: 375px) {\n  .welcome-text[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUVBLG1DQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFO0lBQ0UsZUFBQTtFQURGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICBtaW4taGVpZ2h0OiA4MHZoO1xyXG4gIHBhZGRpbmctbGVmdDogMjVweDtcclxufVxyXG5cclxuYXBwLXRocmVlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ud2VsY29tZS10ZXh0IHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyO1xyXG5cclxuICBmb250LWZhbWlseTogTGF0byBMaWdodCwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMzc1cHgpIHtcclxuICAud2VsY29tZS10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/loader/loader.component.ts":
/*!********************************************!*\
  !*** ./src/app/loader/loader.component.ts ***!
  \********************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LoaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(); };
LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], decls: 2, vars: 0, template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "loader works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loader',
                templateUrl: './loader.component.html',
                styleUrls: ['./loader.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/project/project.component.ts":
/*!**********************************************!*\
  !*** ./src/app/project/project.component.ts ***!
  \**********************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _fetch_works_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fetch-works.service */ "./src/app/fetch-works.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function ProjectComponent_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "https://", ctx_r1.cdn_url, "/images/", ctx_r1.project.thumbnail, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "", ctx_r1.project.name, " Showcase Hero Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.project.name);
} }
function ProjectComponent_div_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.project.description);
} }
function ProjectComponent_div_0_ng_container_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ProjectComponent_div_0_ng_container_3_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ProjectComponent_div_0_ng_container_3_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ProjectComponent_div_0_ng_container_3_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ProjectComponent_div_0_ng_container_3_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ProjectComponent_div_0_ng_container_3_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ProjectComponent_div_0_ng_container_3_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ProjectComponent_div_0_ng_container_3_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ProjectComponent_div_0_ng_container_3_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ProjectComponent_div_0_ng_container_3_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ProjectComponent_div_0_ng_container_3_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ProjectComponent_div_0_ng_container_3_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ProjectComponent_div_0_ng_container_3_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ProjectComponent_div_0_ng_container_3_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ProjectComponent_div_0_ng_container_3_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ProjectComponent_div_0_ng_container_3_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ProjectComponent_div_0_ng_container_3_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ProjectComponent_div_0_ng_container_3_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ProjectComponent_div_0_ng_container_3_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ProjectComponent_div_0_ng_container_3_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ProjectComponent_div_0_ng_container_3_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ProjectComponent_div_0_ng_container_3_ng_container_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ProjectComponent_div_0_ng_container_3_ng_container_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ProjectComponent_div_0_ng_container_3_ng_container_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ProjectComponent_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Made With \u2764 Using");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProjectComponent_div_0_ng_container_3_ng_container_4_Template, 3, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProjectComponent_div_0_ng_container_3_ng_container_5_Template, 3, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProjectComponent_div_0_ng_container_3_ng_container_6_Template, 3, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProjectComponent_div_0_ng_container_3_ng_container_7_Template, 3, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProjectComponent_div_0_ng_container_3_ng_container_8_Template, 3, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProjectComponent_div_0_ng_container_3_ng_container_9_Template, 3, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProjectComponent_div_0_ng_container_3_ng_container_10_Template, 3, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProjectComponent_div_0_ng_container_3_ng_container_11_Template, 3, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProjectComponent_div_0_ng_container_3_ng_container_12_Template, 3, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ProjectComponent_div_0_ng_container_3_ng_container_13_Template, 3, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ProjectComponent_div_0_ng_container_3_ng_container_14_Template, 3, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProjectComponent_div_0_ng_container_3_ng_container_15_Template, 3, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProjectComponent_div_0_ng_container_3_ng_container_16_Template, 3, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ProjectComponent_div_0_ng_container_3_ng_container_17_Template, 3, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ProjectComponent_div_0_ng_container_3_ng_container_18_Template, 3, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ProjectComponent_div_0_ng_container_3_ng_container_19_Template, 3, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ProjectComponent_div_0_ng_container_3_ng_container_20_Template, 3, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ProjectComponent_div_0_ng_container_3_ng_container_21_Template, 3, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ProjectComponent_div_0_ng_container_3_ng_container_22_Template, 3, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ProjectComponent_div_0_ng_container_3_ng_container_23_Template, 3, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ProjectComponent_div_0_ng_container_3_ng_container_24_Template, 3, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ProjectComponent_div_0_ng_container_3_ng_container_25_Template, 3, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ProjectComponent_div_0_ng_container_3_ng_container_26_Template, 3, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ProjectComponent_div_0_ng_container_3_ng_container_27_Template, 3, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.project.tags.split(",").includes("html"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.project.tags.split(",").includes("css"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.project.tags.split(",").includes("javascript"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.project.tags.split(",").includes("xml"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.project.tags.split(",").includes("scss"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.project.tags.split(",").includes("typescript"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.project.tags.split(",").includes("java,"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.project.tags.split(",").includes("c++"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.project.tags.split(",").includes("c#"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.project.tags.split(",").includes("opencv"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.project.tags.split(",").includes("mips32"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.project.tags.split(",").includes("rainmeter"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.project.tags.split(",").includes("django"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.project.tags.split(",").includes("asp.net"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.project.tags.split(",").includes("node"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.project.tags.split(",").includes("postgre"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.project.tags.split(",").includes("t-sql"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.project.tags.split(",").includes("mysql"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.project.tags.split(",").includes("android"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.project.tags.split(",").includes("photoshop"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.project.tags.split(",").includes("after effects"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.project.tags.split(",").includes("premiere pro"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.project.tags.split(",").includes("cinema 4d"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.project.tags.split(",").includes("unity"));
} }
function ProjectComponent_div_0_ng_container_4_h2_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Images");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectComponent_div_0_ng_container_4_h2_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectComponent_div_0_ng_container_4_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r33 = ctx.$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "https://", ctx_r32.cdn_url, "/images/", image_r33, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "", ctx_r32.project.name, " Showcase Image");
} }
function ProjectComponent_div_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProjectComponent_div_0_ng_container_4_h2_2_Template, 2, 0, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProjectComponent_div_0_ng_container_4_h2_3_Template, 2, 0, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProjectComponent_div_0_ng_container_4_div_4_Template, 2, 3, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.images.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.images.length === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.images);
} }
function ProjectComponent_div_0_ng_container_5_h2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Videos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectComponent_div_0_ng_container_5_h2_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Video");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectComponent_div_0_ng_container_5_video_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "video", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "source", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "track", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const video_r37 = ctx.$implicit;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "https://", ctx_r36.cdn_url, "/video/", video_r37, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ProjectComponent_div_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectComponent_div_0_ng_container_5_h2_1_Template, 2, 0, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProjectComponent_div_0_ng_container_5_h2_2_Template, 2, 0, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProjectComponent_div_0_ng_container_5_video_4_Template, 3, 2, "video", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.videos.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.videos.length === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.videos);
} }
function ProjectComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectComponent_div_0_ng_container_1_Template, 5, 4, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProjectComponent_div_0_ng_container_2_Template, 4, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProjectComponent_div_0_ng_container_3_Template, 28, 24, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProjectComponent_div_0_ng_container_4_Template, 5, 3, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProjectComponent_div_0_ng_container_5_Template, 5, 3, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.project.thumbnail);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.project.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.project.tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.project.images);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.project.videos);
} }
class ProjectComponent {
    constructor(router, fetchWorksService) {
        this.router = router;
        this.fetchWorksService = fetchWorksService;
        this.cdn_url = _fetch_works_service__WEBPACK_IMPORTED_MODULE_2__["CDN"];
        this.images = [];
        this.videos = [];
        this.subscription = this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                this.fetchWorksService.getProject(this.router.url.split("/project/").pop())
                    .subscribe((data) => {
                    this.project = data;
                    if (this.project.images)
                        this.images = this.project.images.split(',');
                    if (this.project.videos)
                        this.videos = this.project.videos.split(',');
                });
            }
        });
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
    }
    ngOnDestroy() {
        if (this.subscription)
            this.subscription.unsubscribe();
    }
}
ProjectComponent.ɵfac = function ProjectComponent_Factory(t) { return new (t || ProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_fetch_works_service__WEBPACK_IMPORTED_MODULE_2__["FetchWorksService"])); };
ProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectComponent, selectors: [["app-project"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [["class", "container", 4, "ngIf"], [1, "container"], [4, "ngIf"], [1, "thumb-container"], [3, "src", "alt"], [1, "project-title"], [1, "description-container"], [1, "made-with-title"], [1, "icon-container"], ["href", "https://developer.mozilla.org/en-US/docs/Web/HTML", "target", "_blank", "rel", "noopener noreferrer"], ["src", "assets/tag-icons/html.png", "alt", "HTML Icon"], ["href", "https://developer.mozilla.org/en-US/docs/Web/CSS", "target", "_blank", "rel", "noopener noreferrer"], ["src", "assets/tag-icons/css.png", "alt", "CSS Icon"], ["href", "https://developer.mozilla.org/en-US/docs/Web/javascript", "target", "_blank", "rel", "noopener noreferrer"], ["src", "assets/tag-icons/javascript.png", "alt", "Javascript Icon"], ["href", "https://developer.mozilla.org/en-US/docs/Web/XML/XML_introduction", "target", "_blank", "rel", "noopener noreferrer"], ["src", "assets/tag-icons/xml.png", "alt", "XML Icon"], ["href", "https://sass-lang.com/", "target", "_blank", "rel", "noopener noreferrer"], ["src", "assets/tag-icons/scss.png", "alt", "SCSS Icon"], ["href", "https://www.typescriptlang.org/", "target", "_blank", "rel", "noopener noreferrer"], ["src", "assets/tag-icons/typescript.png", "alt", "TypeScript Icon"], ["href", "https://docs.oracle.com/javase/7/docs/api/", "target", "_blank", "rel", "noopener noreferrer"], ["src", "assets/tag-icons/java.png", "alt", "Java Icon"], ["href", "https://docs.microsoft.com/en-us/cpp/?view=vs-2019", "target", "_blank", "rel", "noopener noreferrer"], ["src", "assets/tag-icons/c++.png", "alt", "C++ Icon"], ["href", "https://docs.microsoft.com/en-us/dotnet/csharp/", "target", "_blank", "rel", "noopener noreferrer"], ["src", "assets/tag-icons/csharp.png", "alt", "C# Icon"], ["href", "https://docs.opencv.org/", "target", "_blank", "rel", "noopener noreferrer"], ["src", "assets/tag-icons/opencv.png", "alt", "OpenCV Icon"], ["href", "https://www.mips.com/products/architectures/mips32-2/", "target", "_blank", "rel", "noopener noreferrer"], ["src", "assets/tag-icons/mips32.png", "alt", "MIPS32 Icon"], ["href", "https://docs.rainmeter.net/", "target", "_blank", "rel", "noopener noreferrer"], ["src", "assets/tag-icons/rainmeter.png", "alt", "Rainmeter Icon"], ["href", "https://www.djangoproject.com/", "target", "_blank", "rel", "noopener noreferrer"], ["src", "assets/tag-icons/django.png", "alt", "Django Icon"], ["href", "https://dotnet.microsoft.com/apps/aspnet", "target", "_blank", "rel", "noopener noreferrer"], ["src", "assets/tag-icons/aspnet.png", "alt", "Asp.net Icon"], ["href", "https://nodejs.org/en/", "target", "_blank", "rel", "noopener noreferrer"], ["src", "assets/tag-icons/node.png", "alt", "Node JS Icon"], ["href", "https://www.postgresql.org/", "target", "_blank", "rel", "noopener noreferrer"], ["src", "assets/tag-icons/postgre.png", "alt", "Postgre SQL Icon"], ["href", "https://docs.microsoft.com/en-us/sql/t-sql/tutorial-writing-transact-sql-statements?view=sql-server-ver15", "target", "_blank", "rel", "noopener noreferrer"], ["src", "assets/tag-icons/tsql.png", "alt", "Transact-SQL Icon"], ["href", "https://www.mysql.com/", "target", "_blank", "rel", "noopener noreferrer"], ["src", "assets/tag-icons/mysql.png", "alt", "MySQL Icon"], ["href", "https://developer.android.com/", "target", "_blank", "rel", "noopener noreferrer"], ["src", "assets/tag-icons/android.png", "alt", "Android Icon"], ["href", "https://www.adobe.com/products/photoshop.html", "target", "_blank", "rel", "noopener noreferrer"], ["src", "assets/tag-icons/photoshop.png", "alt", "Photoshop Icon"], ["href", "https://www.adobe.com/products/aftereffects.html", "target", "_blank", "rel", "noopener noreferrer"], ["src", "assets/tag-icons/ae.png", "alt", "After Effects Icon"], ["href", "https://www.adobe.com/products/premiere.html", "target", "_blank", "rel", "noopener noreferrer"], ["src", "assets/tag-icons/premiere.png", "alt", "Premiere Pro Icon"], ["href", "https://www.maxon.net/en-us/products/cinema-4d/overview/", "target", "_blank", "rel", "noopener noreferrer"], ["src", "assets/tag-icons/cinema.png", "alt", "Cinema 4d Icon"], ["href", "https://docs.unity3d.com/Manual/index.html", "target", "_blank", "rel", "noopener noreferrer"], ["src", "assets/tag-icons/unity.png", "alt", "Unity Icon"], [1, "images-container"], ["class", "image-container", 4, "ngFor", "ngForOf"], [1, "image-container"], [1, "video-container"], ["controls", "", 4, "ngFor", "ngForOf"], ["controls", ""], [3, "src"], ["label", "English", "kind", "captions", "srclang", "en", "src", "", "default", ""]], template: function ProjectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProjectComponent_div_0_Template, 6, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.project);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".container[_ngcontent-%COMP%] {\n  margin-bottom: 150px;\n  color: white;\n  font-family: Josefin Sans, sans-serif;\n}\n.container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 32px;\n  margin: 50px 0 0 0;\n  padding: 25px;\n  align-self: center;\n  text-align: center;\n}\n.container[_ngcontent-%COMP%]   .project-title[_ngcontent-%COMP%] {\n  margin: 10px 0 0 0;\n}\n.container[_ngcontent-%COMP%]   .thumb-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100vw;\n  height: 100vh;\n}\n.container[_ngcontent-%COMP%]   .thumb-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  align-self: center;\n  max-width: 50%;\n  border-radius: 5px;\n}\n.container[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(50px, 1fr));\n  justify-content: center;\n  width: 100%;\n}\n.container[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-self: center;\n}\n.container[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  justify-self: center;\n  align-self: center;\n  padding: 5px;\n  max-width: 100%;\n}\n.container[_ngcontent-%COMP%]   .images-container[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n}\n.container[_ngcontent-%COMP%]   .images-container[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 75%;\n  max-height: 100vh;\n  justify-self: center;\n  align-self: center;\n  overflow: hidden;\n}\n.container[_ngcontent-%COMP%]   .images-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n  padding: 25px;\n  align-self: center;\n}\n.container[_ngcontent-%COMP%]   .images-container[_ngcontent-%COMP%]   video[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  max-width: 75%;\n  max-height: 50vh;\n  padding: 25px;\n  align-self: center;\n}\n@media (max-width: 630px) {\n  .container[_ngcontent-%COMP%] {\n    margin-bottom: 100px;\n  }\n  .container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .container[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, minmax(20px, 1fr));\n  }\n  .container[_ngcontent-%COMP%]   .images-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    max-height: 75vh;\n    padding: 0;\n    margin-bottom: 20px;\n    align-self: center;\n  }\n  .container[_ngcontent-%COMP%]   .images-container[_ngcontent-%COMP%]   video[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n    max-width: 100%;\n    max-height: 75vh;\n    padding: 0;\n    margin-bottom: 20px;\n    align-self: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFDQSxZQUFBO0VBQ0EscUNBQUE7QUFDRjtBQUVFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQUdFO0VBQ0Usa0JBQUE7QUFESjtBQUlFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUZKO0FBSUk7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUZOO0FBTUU7RUFDRSxhQUFBO0VBQ0EsbURBQUE7RUFDQSx1QkFBQTtFQUVBLFdBQUE7QUFMSjtBQU9JO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFMTjtBQU9NO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBTFI7QUFVRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQVJKO0FBVUk7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFFQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBRUEsZ0JBQUE7QUFWTjtBQWFJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBRUEsYUFBQTtFQUVBLGtCQUFBO0FBYk47QUFnQkk7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFFQSxhQUFBO0VBRUEsa0JBQUE7QUFoQk47QUFxQkE7RUFDRTtJQUNFLG9CQUFBO0VBbEJGO0VBb0JFO0lBQ0UsZUFBQTtFQWxCSjtFQXFCRTtJQUNFLG1EQUFBO0VBbkJKO0VBdUJJO0lBQ0UsZUFBQTtJQUNBLGdCQUFBO0lBRUEsVUFBQTtJQUNBLG1CQUFBO0lBRUEsa0JBQUE7RUF2Qk47RUEwQkk7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7SUFFQSxVQUFBO0lBQ0EsbUJBQUE7SUFFQSxrQkFBQTtFQTFCTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTUwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtZmFtaWx5OiBKb3NlZmluIFNhbnMsIHNhbnMtc2VyaWY7XHJcblxyXG5cclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBtYXJnaW46IDUwcHggMCAwIDA7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnByb2plY3QtdGl0bGUge1xyXG4gICAgbWFyZ2luOiAxMHB4IDAgMCAwO1xyXG4gIH1cclxuXHJcbiAgLnRodW1iLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgIG1heC13aWR0aDogNTAlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaWNvbi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCg1MHB4LCAxZnIpKTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIGEge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmltYWdlcy1jb250YWluZXIsIC52aWRlby1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIC5pbWFnZS1jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG5cclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuXHJcbiAgICBpbWcge1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICBwYWRkaW5nOiAyNXB4O1xyXG5cclxuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHZpZGVvIHtcclxuICAgICAgbWF4LXdpZHRoOiA3NSU7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDUwdmg7XHJcblxyXG4gICAgICBwYWRkaW5nOiAyNXB4O1xyXG5cclxuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYzMHB4KSB7XHJcbiAgLmNvbnRhaW5lcntcclxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG5cclxuICAgIGgyIHtcclxuICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pY29uLWNvbnRhaW5lciB7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCgyMHB4LCAxZnIpKTtcclxuICAgIH1cclxuXHJcbiAgICAuaW1hZ2VzLWNvbnRhaW5lciwgLnZpZGVvLWNvbnRhaW5lciB7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDc1dmg7XHJcblxyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2aWRlbyB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDc1dmg7XHJcblxyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-project',
                templateUrl: './project.component.html',
                styleUrls: ['./project.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _fetch_works_service__WEBPACK_IMPORTED_MODULE_2__["FetchWorksService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/three/three.component.ts":
/*!******************************************!*\
  !*** ./src/app/three/three.component.ts ***!
  \******************************************/
/*! exports provided: ThreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThreeComponent", function() { return ThreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three_examples_jsm_lights_RectAreaLightUniformsLib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/lights/RectAreaLightUniformsLib */ "./node_modules/three/examples/jsm/lights/RectAreaLightUniformsLib.js");
/* harmony import */ var three_examples_jsm_helpers_RectAreaLightHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/helpers/RectAreaLightHelper */ "./node_modules/three/examples/jsm/helpers/RectAreaLightHelper.js");
/* harmony import */ var three_examples_jsm_loaders_OBJLoader2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/examples/jsm/loaders/OBJLoader2 */ "./node_modules/three/examples/jsm/loaders/OBJLoader2.js");
/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ "./node_modules/three/examples/jsm/controls/OrbitControls.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








const _c0 = ["main"];
const _c1 = function () { return { "margin": 0 }; };
class ThreeComponent {
    constructor() { }
    get canvas() {
        return this._canvas.nativeElement;
    }
    ngAfterViewInit() {
        let scene = new three__WEBPACK_IMPORTED_MODULE_1__["Scene"]();
        let camera = new three__WEBPACK_IMPORTED_MODULE_1__["PerspectiveCamera"](50, window.innerWidth / window.innerHeight, 0.1, 1000);
        let renderer = new three__WEBPACK_IMPORTED_MODULE_1__["WebGLRenderer"]({ canvas: this.canvas });
        let controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_5__["OrbitControls"](camera, renderer.domElement);
        controls.autoRotate = true;
        controls.enableDamping = true;
        three_examples_jsm_lights_RectAreaLightUniformsLib__WEBPACK_IMPORTED_MODULE_2__["RectAreaLightUniformsLib"].init();
        //renderer.setSize( window.innerWidth, window.innerHeight );
        let geometry = new three__WEBPACK_IMPORTED_MODULE_1__["BoxGeometry"]();
        let material = new three__WEBPACK_IMPORTED_MODULE_1__["MeshStandardMaterial"]({ color: "rgb(255,0,0)" });
        let cube = new three__WEBPACK_IMPORTED_MODULE_1__["Mesh"](geometry, material);
        let planeGeometry = new three__WEBPACK_IMPORTED_MODULE_1__["PlaneGeometry"](1000, 1000);
        let planeMaterial = new three__WEBPACK_IMPORTED_MODULE_1__["MeshStandardMaterial"]({ color: "rgb(112,112,112)" });
        let plane = new three__WEBPACK_IMPORTED_MODULE_1__["Mesh"](planeGeometry, planeMaterial);
        plane.rotation.x = three__WEBPACK_IMPORTED_MODULE_1__["MathUtils"].degToRad(-90);
        plane.position.z = 500;
        let rectLight = new three__WEBPACK_IMPORTED_MODULE_1__["RectAreaLight"]("rgb(172,172,172)", 10, 10, 10);
        rectLight.position.set(10, 5, -20);
        rectLight.rotation.y = three__WEBPACK_IMPORTED_MODULE_1__["MathUtils"].degToRad(150);
        let helper = new three_examples_jsm_helpers_RectAreaLightHelper__WEBPACK_IMPORTED_MODULE_3__["RectAreaLightHelper"](rectLight);
        rectLight.add(helper);
        let hemLight = new three__WEBPACK_IMPORTED_MODULE_1__["HemisphereLight"]("rgb(255,255,255)", "rgb(255,201,201)", 1);
        let ambLight = new three__WEBPACK_IMPORTED_MODULE_1__["AmbientLight"]("rgb(255,255,255)", .5);
        const objLoader = new three_examples_jsm_loaders_OBJLoader2__WEBPACK_IMPORTED_MODULE_4__["OBJLoader2"]();
        let obj;
        let logoMaterial = new three__WEBPACK_IMPORTED_MODULE_1__["MeshStandardMaterial"]({ color: 'rgb(0,0,0)' });
        objLoader.addMaterials(logoMaterial, true);
        objLoader.load('assets/leek_logo-01.obj', (root) => {
            //root.position.set(0,15,-100);
            root.scale.set(.5, .5, .5);
            //scene.add(cube);
            scene.add(plane);
            scene.add(rectLight);
            scene.add(hemLight);
            scene.add(ambLight);
            scene.add(root);
            obj = root;
        });
        camera.position.z = 50;
        camera.position.y = 15;
        function animate() {
            requestAnimationFrame(animate);
            if (resizeRenderer(renderer)) {
                const canvas = renderer.domElement;
                camera.aspect = canvas.clientWidth / canvas.clientHeight;
                camera.updateProjectionMatrix();
            }
            cube.rotation.x += three__WEBPACK_IMPORTED_MODULE_1__["MathUtils"].degToRad(.5);
            if (obj)
                obj.rotation.y += three__WEBPACK_IMPORTED_MODULE_1__["MathUtils"].degToRad(.5);
            controls.update();
            renderer.render(scene, camera);
        }
        /**
         * Checks if render needs to be resized to container size
         */
        function resizeRenderer(renderer) {
            const canvas = renderer.domElement;
            const width = canvas.clientWidth;
            const height = canvas.clientHeight;
            const needsResize = canvas.width !== width || canvas.height !== height;
            if (needsResize) {
                renderer.setSize(width, height, false);
            }
            return needsResize;
        }
        animate();
    }
}
ThreeComponent.ɵfac = function ThreeComponent_Factory(t) { return new (t || ThreeComponent)(); };
ThreeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ThreeComponent, selectors: [["app-three"]], viewQuery: function ThreeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._canvas = _t.first);
    } }, decls: 2, vars: 2, consts: [[3, "ngStyle"], ["main", ""]], template: function ThreeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "canvas", 0, 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"]], styles: ["canvas[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhyZWUvdGhyZWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RocmVlL3RocmVlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiY2FudmFzIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThreeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-three',
                templateUrl: './three.component.html',
                styleUrls: ['./three.component.scss']
            }]
    }], function () { return []; }, { _canvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["main"]
        }] }); })();


/***/ }),

/***/ "./src/app/works/works-list/works-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/works/works-list/works-list.component.ts ***!
  \**********************************************************/
/*! exports provided: WorksListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorksListComponent", function() { return WorksListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fetch_works_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../fetch-works.service */ "./src/app/fetch-works.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






function WorksListComponent_ng_container_1_a_1_h3_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Web Development ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WorksListComponent_ng_container_1_a_1_h3_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Graphic Design ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WorksListComponent_ng_container_1_a_1_h3_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Video Production ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WorksListComponent_ng_container_1_a_1_h3_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Photography ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WorksListComponent_ng_container_1_a_1_h3_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Misc ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WorksListComponent_ng_container_1_a_1_h3_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Research ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WorksListComponent_ng_container_1_a_1_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorksListComponent_ng_container_1_a_1_ng_container_11_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r35.externalLink($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const works_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://github.com/", works_r1.github, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function WorksListComponent_ng_container_1_a_1_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorksListComponent_ng_container_1_a_1_ng_container_12_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r38.externalLink($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const works_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://", works_r1.website, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function WorksListComponent_ng_container_1_a_1_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorksListComponent_ng_container_1_a_1_ng_container_17_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r41.externalLink($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function WorksListComponent_ng_container_1_a_1_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorksListComponent_ng_container_1_a_1_ng_container_18_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r43.externalLink($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function WorksListComponent_ng_container_1_a_1_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorksListComponent_ng_container_1_a_1_ng_container_19_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r45.externalLink($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function WorksListComponent_ng_container_1_a_1_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorksListComponent_ng_container_1_a_1_ng_container_20_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r47.externalLink($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function WorksListComponent_ng_container_1_a_1_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorksListComponent_ng_container_1_a_1_ng_container_21_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r49.externalLink($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function WorksListComponent_ng_container_1_a_1_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorksListComponent_ng_container_1_a_1_ng_container_22_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r51.externalLink($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function WorksListComponent_ng_container_1_a_1_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorksListComponent_ng_container_1_a_1_ng_container_23_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r53.externalLink($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function WorksListComponent_ng_container_1_a_1_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorksListComponent_ng_container_1_a_1_ng_container_24_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r55.externalLink($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function WorksListComponent_ng_container_1_a_1_ng_container_25_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorksListComponent_ng_container_1_a_1_ng_container_25_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r57.externalLink($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function WorksListComponent_ng_container_1_a_1_ng_container_26_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorksListComponent_ng_container_1_a_1_ng_container_26_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r59.externalLink($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function WorksListComponent_ng_container_1_a_1_ng_container_27_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorksListComponent_ng_container_1_a_1_ng_container_27_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r61.externalLink($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function WorksListComponent_ng_container_1_a_1_ng_container_28_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorksListComponent_ng_container_1_a_1_ng_container_28_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r63.externalLink($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function WorksListComponent_ng_container_1_a_1_ng_container_29_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorksListComponent_ng_container_1_a_1_ng_container_29_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r65.externalLink($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function WorksListComponent_ng_container_1_a_1_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorksListComponent_ng_container_1_a_1_ng_container_30_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r68); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r67.externalLink($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function WorksListComponent_ng_container_1_a_1_ng_container_31_Template(rf, ctx) { if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorksListComponent_ng_container_1_a_1_ng_container_31_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r69.externalLink($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function WorksListComponent_ng_container_1_a_1_ng_container_32_Template(rf, ctx) { if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorksListComponent_ng_container_1_a_1_ng_container_32_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r71.externalLink($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function WorksListComponent_ng_container_1_a_1_ng_container_33_Template(rf, ctx) { if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorksListComponent_ng_container_1_a_1_ng_container_33_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r73.externalLink($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function WorksListComponent_ng_container_1_a_1_ng_container_34_Template(rf, ctx) { if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorksListComponent_ng_container_1_a_1_ng_container_34_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r75.externalLink($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function WorksListComponent_ng_container_1_a_1_ng_container_35_Template(rf, ctx) { if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorksListComponent_ng_container_1_a_1_ng_container_35_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r78); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r77.externalLink($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function WorksListComponent_ng_container_1_a_1_ng_container_36_Template(rf, ctx) { if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorksListComponent_ng_container_1_a_1_ng_container_36_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r80); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r79.externalLink($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function WorksListComponent_ng_container_1_a_1_ng_container_37_Template(rf, ctx) { if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorksListComponent_ng_container_1_a_1_ng_container_37_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r81.externalLink($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function WorksListComponent_ng_container_1_a_1_ng_container_38_Template(rf, ctx) { if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorksListComponent_ng_container_1_a_1_ng_container_38_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r83.externalLink($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function WorksListComponent_ng_container_1_a_1_ng_container_39_Template(rf, ctx) { if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorksListComponent_ng_container_1_a_1_ng_container_39_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r86); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r85.externalLink($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function WorksListComponent_ng_container_1_a_1_ng_container_40_Template(rf, ctx) { if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorksListComponent_ng_container_1_a_1_ng_container_40_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r87.externalLink($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function WorksListComponent_ng_container_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WorksListComponent_ng_container_1_a_1_h3_4_Template, 2, 0, "h3", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, WorksListComponent_ng_container_1_a_1_h3_5_Template, 2, 0, "h3", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, WorksListComponent_ng_container_1_a_1_h3_6_Template, 2, 0, "h3", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, WorksListComponent_ng_container_1_a_1_h3_7_Template, 2, 0, "h3", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, WorksListComponent_ng_container_1_a_1_h3_8_Template, 2, 0, "h3", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, WorksListComponent_ng_container_1_a_1_h3_9_Template, 2, 0, "h3", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, WorksListComponent_ng_container_1_a_1_ng_container_11_Template, 4, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, WorksListComponent_ng_container_1_a_1_ng_container_12_Template, 10, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, WorksListComponent_ng_container_1_a_1_ng_container_17_Template, 3, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, WorksListComponent_ng_container_1_a_1_ng_container_18_Template, 3, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, WorksListComponent_ng_container_1_a_1_ng_container_19_Template, 3, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, WorksListComponent_ng_container_1_a_1_ng_container_20_Template, 3, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, WorksListComponent_ng_container_1_a_1_ng_container_21_Template, 3, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, WorksListComponent_ng_container_1_a_1_ng_container_22_Template, 3, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, WorksListComponent_ng_container_1_a_1_ng_container_23_Template, 3, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, WorksListComponent_ng_container_1_a_1_ng_container_24_Template, 3, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, WorksListComponent_ng_container_1_a_1_ng_container_25_Template, 3, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, WorksListComponent_ng_container_1_a_1_ng_container_26_Template, 3, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, WorksListComponent_ng_container_1_a_1_ng_container_27_Template, 3, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, WorksListComponent_ng_container_1_a_1_ng_container_28_Template, 3, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, WorksListComponent_ng_container_1_a_1_ng_container_29_Template, 3, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, WorksListComponent_ng_container_1_a_1_ng_container_30_Template, 3, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, WorksListComponent_ng_container_1_a_1_ng_container_31_Template, 3, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, WorksListComponent_ng_container_1_a_1_ng_container_32_Template, 3, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, WorksListComponent_ng_container_1_a_1_ng_container_33_Template, 3, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, WorksListComponent_ng_container_1_a_1_ng_container_34_Template, 3, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, WorksListComponent_ng_container_1_a_1_ng_container_35_Template, 3, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, WorksListComponent_ng_container_1_a_1_ng_container_36_Template, 3, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, WorksListComponent_ng_container_1_a_1_ng_container_37_Template, 3, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, WorksListComponent_ng_container_1_a_1_ng_container_38_Template, 3, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, WorksListComponent_ng_container_1_a_1_ng_container_39_Template, 3, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, WorksListComponent_ng_container_1_a_1_ng_container_40_Template, 3, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const works_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/project/", works_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", works_r1.category === "web");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", works_r1.category === "graphic");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", works_r1.category === "video");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", works_r1.category === "photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", works_r1.category === "misc");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", works_r1.category === "research");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", works_r1.github);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", works_r1.website);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](works_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", works_r1.tags.split(",").includes("html"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", works_r1.tags.split(",").includes("css"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", works_r1.tags.split(",").includes("javascript"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", works_r1.tags.split(",").includes("xml"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", works_r1.tags.split(",").includes("scss"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", works_r1.tags.split(",").includes("typescript"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", works_r1.tags.split(",").includes("java,"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", works_r1.tags.split(",").includes("c++"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", works_r1.tags.split(",").includes("c#"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", works_r1.tags.split(",").includes("opencv"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", works_r1.tags.split(",").includes("mips32"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", works_r1.tags.split(",").includes("rainmeter"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", works_r1.tags.split(",").includes("django"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", works_r1.tags.split(",").includes("asp.net"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", works_r1.tags.split(",").includes("node"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", works_r1.tags.split(",").includes("postgre"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", works_r1.tags.split(",").includes("t-sql"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", works_r1.tags.split(",").includes("mysql"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", works_r1.tags.split(",").includes("android"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", works_r1.tags.split(",").includes("photoshop"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", works_r1.tags.split(",").includes("after effects"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", works_r1.tags.split(",").includes("premiere pro"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", works_r1.tags.split(",").includes("cinema 4d"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", works_r1.tags.split(",").includes("unity"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "https://", ctx_r2.cdn_url, "/images/", works_r1.thumbnail, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function WorksListComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WorksListComponent_ng_container_1_a_1_Template, 42, 36, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const works_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !works_r1.hidden);
} }
class WorksListComponent {
    constructor(fetchWorksService) {
        this.fetchWorksService = fetchWorksService;
        this.cdn_url = _fetch_works_service__WEBPACK_IMPORTED_MODULE_1__["CDN"];
        this.worksList = [];
    }
    ngOnInit() { }
    ngOnChanges(changes) {
        if (this.types)
            this.subscription = this.fetchWorksService.getWorksListByType(this.types).subscribe(data => this.worksList = data);
        else
            this.subscription = this.fetchWorksService.getWorksList().subscribe(data => this.worksList = data);
    }
    ngOnDestroy() {
        if (this.subscription)
            this.subscription.unsubscribe();
    }
    externalLink($event) {
        $event.stopPropagation();
    }
}
WorksListComponent.ɵfac = function WorksListComponent_Factory(t) { return new (t || WorksListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_fetch_works_service__WEBPACK_IMPORTED_MODULE_1__["FetchWorksService"])); };
WorksListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorksListComponent, selectors: [["works-list"]], inputs: { types: "types" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 1, consts: [[1, "works-container"], [4, "ngFor", "ngForOf"], ["class", "work-card", "href", "", 3, "routerLink", 4, "ngIf"], ["href", "", 1, "work-card", 3, "routerLink"], [1, "works-info_container"], [1, "works-info", "top"], [1, "catagory-container"], [4, "ngIf"], [1, "external-link-container"], [1, "works-info", "bottom"], [1, "works-title"], [1, "works-tags"], ["alt", "", 1, "thumbnail", 3, "src"], ["target", "_blank", 3, "href", "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 438.549 438.549", 0, "xml", "space", "preserve", 1, "github", "logo"], ["d", "M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906C438.536,184.851,428.728,148.168,409.132,114.573z"], ["viewBox", "0 0 100 100", 0, "xml", "space", "preserve", 1, "website", "logo"], ["d", "M5273.1,2400.1v-2c0-2.8-5-4-9.7-4s-9.7,1.3-9.7,4v2c0,1.8,0.7,3.6,2,4.9l5,4.9c0.3,0.3,0.4,0.6,0.4,1v6.4     c0,0.4,0.2,0.7,0.6,0.8l2.9,0.9c0.5,0.1,1-0.2,1-0.8v-7.2c0-0.4,0.2-0.7,0.4-1l5.1-5C5272.4,2403.7,5273.1,2401.9,5273.1,2400.1z      M5263.4,2400c-4.8,0-7.4-1.3-7.5-1.8v0c0.1-0.5,2.7-1.8,7.5-1.8c4.8,0,7.3,1.3,7.5,1.8C5270.7,2398.7,5268.2,2400,5263.4,2400z"], ["d", "M5268.4,2410.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1c0-0.6-0.4-1-1-1H5268.4z"], ["d", "M5272.7,2413.7h-4.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1C5273.7,2414.1,5273.3,2413.7,5272.7,2413.7z"], ["d", "M5272.7,2417h-4.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1C5273.7,2417.5,5273.3,2417,5272.7,2417z"], ["d", "M50,2.5C23.8,2.5,2.5,23.8,2.5,50S23.8,97.5,50,97.5S97.5,76.2,97.5,50S76.2,2.5,50,2.5z M60.2,27.2    c-3.3,0.6-6.7,0.9-10.2,0.9c-3.5,0-6.9-0.3-10.2-0.9C42.4,15.4,46.7,8.4,50,8.4S57.6,15.4,60.2,27.2z M60.1,9.7    c7.2,1.8,13.7,5.5,18.9,10.6c-3.8,2.4-8.2,4.3-13,5.6C64.6,19.5,62.6,13.9,60.1,9.7z M37.6,47c0.1-5.1,0.5-9.8,1.2-14    c3.7,0.6,7.4,1,11.3,1c3.8,0,7.6-0.4,11.3-1c0.6,4.2,1,8.9,1.2,14H37.6z M62.4,53c-0.1,5.1-0.5,9.8-1.1,14c-3.7-0.6-7.4-1-11.3-1    c-3.8,0-7.6,0.4-11.3,1c-0.6-4.2-1-8.9-1.1-14H62.4z M34,25.9c-4.8-1.3-9.2-3.2-13-5.6c5.2-5.1,11.7-8.7,18.9-10.6    C37.4,13.9,35.4,19.5,34,25.9z M33,31.8c-0.8,4.9-1.2,10.1-1.3,15.3h-23c0.6-8.3,3.7-16,8.5-22.3C21.6,27.8,27.1,30.2,33,31.8z     M31.6,53c0.1,5.2,0.6,10.3,1.3,15.3c-5.9,1.6-11.3,3.9-15.9,7C12.2,69,9.2,61.3,8.6,53H31.6z M34,74.1c1.4,6.4,3.4,12.1,5.9,16.2    c-7.2-1.8-13.7-5.5-18.9-10.6C24.8,77.3,29.2,75.4,34,74.1z M39.8,72.8c3.3-0.6,6.7-0.9,10.2-0.9c3.5,0,6.9,0.3,10.2,0.9    C57.6,84.6,53.3,91.6,50,91.6S42.4,84.6,39.8,72.8z M66,74.1c4.8,1.3,9.2,3.2,13,5.7c-5.2,5.1-11.7,8.7-18.9,10.6    C62.6,86.1,64.6,80.5,66,74.1z M67,68.2c0.8-4.9,1.2-10.1,1.3-15.3h23c-0.6,8.3-3.7,16-8.5,22.3C78.3,72.2,72.9,69.8,67,68.2z     M68.4,47c-0.1-5.2-0.6-10.3-1.3-15.3c5.9-1.6,11.3-3.9,15.9-7c4.8,6.3,7.9,13.9,8.5,22.3H68.4z"], ["href", "https://developer.mozilla.org/en-US/docs/Web/HTML", "target", "_blank", "rel", "noopener noreferrer", 3, "click"], ["src", "assets/tag-icons/html.png", "alt", "HTML Icon"], ["href", "https://developer.mozilla.org/en-US/docs/Web/CSS", "target", "_blank", "rel", "noopener noreferrer", 3, "click"], ["src", "assets/tag-icons/css.png", "alt", "CSS Icon"], ["href", "https://developer.mozilla.org/en-US/docs/Web/javascript", "target", "_blank", "rel", "noopener noreferrer", 3, "click"], ["src", "assets/tag-icons/javascript.png", "alt", "Javascript Icon"], ["href", "https://developer.mozilla.org/en-US/docs/Web/XML/XML_introduction", "target", "_blank", "rel", "noopener noreferrer", 3, "click"], ["src", "assets/tag-icons/xml.png", "alt", "XML Icon"], ["href", "https://sass-lang.com/", "target", "_blank", "rel", "noopener noreferrer", 3, "click"], ["src", "assets/tag-icons/scss.png", "alt", "SCSS Icon"], ["href", "https://www.typescriptlang.org/", "target", "_blank", "rel", "noopener noreferrer", 3, "click"], ["src", "assets/tag-icons/typescript.png", "alt", "TypeScript Icon"], ["href", "https://docs.oracle.com/javase/7/docs/api/", "target", "_blank", "rel", "noopener noreferrer", 3, "click"], ["src", "assets/tag-icons/java.png", "alt", "Java Icon"], ["href", "https://docs.microsoft.com/en-us/cpp/?view=vs-2019", "target", "_blank", "rel", "noopener noreferrer", 3, "click"], ["src", "assets/tag-icons/c++.png", "alt", "C++ Icon"], ["href", "https://docs.microsoft.com/en-us/dotnet/csharp/", "target", "_blank", "rel", "noopener noreferrer", 3, "click"], ["src", "assets/tag-icons/csharp.png", "alt", "C# Icon"], ["href", "https://docs.opencv.org/", "target", "_blank", "rel", "noopener noreferrer", 3, "click"], ["src", "assets/tag-icons/opencv.png", "alt", "OpenCV Icon"], ["href", "https://www.mips.com/products/architectures/mips32-2/", "target", "_blank", "rel", "noopener noreferrer", 3, "click"], ["src", "assets/tag-icons/mips32.png", "alt", "MIPS32 Icon"], ["href", "https://docs.rainmeter.net/", "target", "_blank", "rel", "noopener noreferrer", 3, "click"], ["src", "assets/tag-icons/rainmeter.png", "alt", "Rainmeter Icon"], ["href", "https://www.djangoproject.com/", "target", "_blank", "rel", "noopener noreferrer", 3, "click"], ["src", "assets/tag-icons/django.png", "alt", "Django Icon"], ["href", "https://dotnet.microsoft.com/apps/aspnet", "target", "_blank", "rel", "noopener noreferrer", 3, "click"], ["src", "assets/tag-icons/aspnet.png", "alt", "Asp.net Icon"], ["href", "https://nodejs.org/en/", "target", "_blank", "rel", "noopener noreferrer", 3, "click"], ["src", "assets/tag-icons/node.png", "alt", "Node JS Icon"], ["href", "https://www.postgresql.org/", "target", "_blank", "rel", "noopener noreferrer", 3, "click"], ["src", "assets/tag-icons/postgre.png", "alt", "Postgre SQL Icon"], ["href", "https://docs.microsoft.com/en-us/sql/t-sql/tutorial-writing-transact-sql-statements?view=sql-server-ver15", "target", "_blank", "rel", "noopener noreferrer", 3, "click"], ["src", "assets/tag-icons/tsql.png", "alt", "Transact-SQL Icon"], ["href", "https://www.mysql.com/", "target", "_blank", "rel", "noopener noreferrer", 3, "click"], ["src", "assets/tag-icons/mysql.png", "alt", "MySQL Icon"], ["href", "https://developer.android.com/", "target", "_blank", "rel", "noopener noreferrer", 3, "click"], ["src", "assets/tag-icons/android.png", "alt", "Android Icon"], ["href", "https://www.adobe.com/products/photoshop.html", "target", "_blank", "rel", "noopener noreferrer", 3, "click"], ["src", "assets/tag-icons/photoshop.png", "alt", "Photoshop Icon"], ["href", "https://www.adobe.com/products/aftereffects.html", "target", "_blank", "rel", "noopener noreferrer", 3, "click"], ["src", "assets/tag-icons/ae.png", "alt", "After Effects Icon"], ["href", "https://www.adobe.com/products/premiere.html", "target", "_blank", "rel", "noopener noreferrer", 3, "click"], ["src", "assets/tag-icons/premiere.png", "alt", "Premiere Pro Icon"], ["href", "https://www.maxon.net/en-us/products/cinema-4d/overview/", "target", "_blank", "rel", "noopener noreferrer", 3, "click"], ["src", "assets/tag-icons/cinema.png", "alt", "Cinema 4d Icon"], ["href", "https://docs.unity3d.com/Manual/index.html", "target", "_blank", "rel", "noopener noreferrer", 3, "click"], ["src", "assets/tag-icons/unity.png", "alt", "Unity Icon"]], template: function WorksListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WorksListComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.worksList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".works-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));\n  grid-gap: 15px;\n  color: white;\n}\n\n.work-card[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border-radius: 5px;\n  overflow: hidden;\n}\n\n.work-card[_ngcontent-%COMP%]   .works-info_container[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0);\n  transition: background-color 1s ease;\n  z-index: 1;\n}\n\n.work-card[_ngcontent-%COMP%]   .works-info_container[_ngcontent-%COMP%]   .works-info[_ngcontent-%COMP%] {\n  display: grid;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n\n.work-card[_ngcontent-%COMP%]   .works-info_container[_ngcontent-%COMP%]   .works-info.top[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  position: relative;\n  top: -59px;\n  transition: top 0.5s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.work-card[_ngcontent-%COMP%]   .works-info_container[_ngcontent-%COMP%]   .works-info.top[_ngcontent-%COMP%]   .catagory-container[_ngcontent-%COMP%] {\n  padding-left: 15px;\n}\n\n.work-card[_ngcontent-%COMP%]   .works-info_container[_ngcontent-%COMP%]   .works-info.top[_ngcontent-%COMP%]   .catagory-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n  font-family: Josefin Sans Thin, sans-serif;\n  font-size: 14px;\n}\n\n.work-card[_ngcontent-%COMP%]   .works-info_container[_ngcontent-%COMP%]   .works-info.top[_ngcontent-%COMP%]   .external-link-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  padding: 15px 15px;\n}\n\n.work-card[_ngcontent-%COMP%]   .works-info_container[_ngcontent-%COMP%]   .works-info.top[_ngcontent-%COMP%]   .external-link-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: 25px;\n  fill: white;\n  z-index: 10;\n  margin-left: 25px;\n}\n\n.work-card[_ngcontent-%COMP%]   .works-info_container[_ngcontent-%COMP%]   .works-info.bottom[_ngcontent-%COMP%] {\n  grid-template-rows: 1fr 2fr;\n  align-items: center;\n  position: absolute;\n  height: 40%;\n  bottom: -25%;\n  padding: 0 15px;\n  transition: bottom 0.5s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.work-card[_ngcontent-%COMP%]   .works-info_container[_ngcontent-%COMP%]   .works-info.bottom[_ngcontent-%COMP%]   .works-title[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-family: Josefin Sans, sans-serif;\n  color: white;\n  margin: 0;\n}\n\n.work-card[_ngcontent-%COMP%]   .works-info_container[_ngcontent-%COMP%]   .works-info.bottom[_ngcontent-%COMP%]   .works-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.work-card[_ngcontent-%COMP%]   .works-info_container[_ngcontent-%COMP%]   .works-info.bottom[_ngcontent-%COMP%]   .works-tags[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 40px;\n  padding-right: 10px;\n}\n\n.work-card[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n  display: block;\n  z-index: 0;\n  max-width: 100%;\n  transform: scale(1);\n  transition: transform 0.5s ease;\n}\n\n.work-card[_ngcontent-%COMP%]:hover   .works-info_container[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.25);\n}\n\n.work-card[_ngcontent-%COMP%]:hover   .works-info_container[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%] {\n  top: 0;\n}\n\n.work-card[_ngcontent-%COMP%]:hover   .works-info_container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%] {\n  bottom: 0;\n}\n\n.work-card[_ngcontent-%COMP%]:hover   .thumbnail[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n\n@media (max-width: 630px) {\n  .works-container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));\n  }\n\n  .work-card[_ngcontent-%COMP%] {\n    border-radius: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29ya3Mvd29ya3MtbGlzdC93b3Jrcy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLDREQUFBO0VBQ0EsY0FBQTtFQUVBLFlBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtFQUVBLGdCQUFBO0FBRkY7O0FBSUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEsa0NBQUE7RUFDQSxvQ0FBQTtFQUVBLFVBQUE7QUFKSjs7QUFNSTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBRUEsb0NBQUE7QUFMTjs7QUFPTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBRUEsa0JBQUE7RUFDQSxVQUFBO0VBQ0EsaURBQUE7QUFOUjs7QUFRUTtFQUNFLGtCQUFBO0FBTlY7O0FBUVU7RUFDRSxZQUFBO0VBQ0EsMENBQUE7RUFDQSxlQUFBO0FBTlo7O0FBVVE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFFQSxrQkFBQTtBQVRWOztBQVdVO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFUWjs7QUFjTTtFQUNFLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUVBLG9EQUFBO0FBYlI7O0FBZVE7RUFDRSxxQkFBQTtFQUNBLHFDQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUFiVjs7QUFnQlE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFkVjs7QUFnQlU7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUFkWjs7QUFxQkU7RUFDRSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0FBbkJKOztBQXdCRTtFQUNFLHFDQUFBO0FBckJKOztBQXVCSTtFQUNFLE1BQUE7QUFyQk47O0FBd0JJO0VBQ0UsU0FBQTtBQXRCTjs7QUEwQkU7RUFDRSxzQkFBQTtBQXhCSjs7QUE0QkE7RUFDRTtJQUNFLDJEQUFBO0VBekJGOztFQTRCQTtJQUNFLGdCQUFBO0VBekJGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC93b3Jrcy93b3Jrcy1saXN0L3dvcmtzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud29ya3MtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDQwMHB4LCAxZnIpKTtcclxuICBncmlkLWdhcDogMTVweDtcclxuXHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ud29yay1jYXJkIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gIC53b3Jrcy1pbmZvX2NvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlO1xyXG5cclxuICAgIHotaW5kZXg6IDE7XHJcblxyXG4gICAgLndvcmtzLWluZm8ge1xyXG4gICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjIpO1xyXG5cclxuICAgICAgJi50b3Age1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IC01OXB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRvcCAuNXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuXHJcbiAgICAgICAgLmNhdGFnb3J5LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcblxyXG4gICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBKb3NlZmluIFNhbnMgVGhpbiwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmV4dGVybmFsLWxpbmstY29udGFpbmVyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAgICAgICAgIHBhZGRpbmc6IDE1cHggMTVweDtcclxuXHJcbiAgICAgICAgICAubG9nbyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICBmaWxsOiB3aGl0ZTtcclxuICAgICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJi5ib3R0b20ge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBoZWlnaHQ6IDQwJTtcclxuICAgICAgICBib3R0b206IC0yNSU7XHJcbiAgICAgICAgcGFkZGluZzogMCAxNXB4O1xyXG5cclxuICAgICAgICB0cmFuc2l0aW9uOiBib3R0b20gLjVzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcblxyXG4gICAgICAgIC53b3Jrcy10aXRsZSB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogSm9zZWZpbiBTYW5zLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLndvcmtzLXRhZ3Mge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRodW1ibmFpbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZTtcclxuICB9XHJcbn1cclxuXHJcbi53b3JrLWNhcmQ6aG92ZXIge1xyXG4gIC53b3Jrcy1pbmZvX2NvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4yNSk7XHJcblxyXG4gICAgLnRvcCB7XHJcbiAgICAgIHRvcDogMDtcclxuICAgIH1cclxuXHJcbiAgICAuYm90dG9tIHtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRodW1ibmFpbCB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYzMHB4KSB7XHJcbiAgLndvcmtzLWNvbnRhaW5lciB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxMDAlLCAxZnIpKTtcclxuICB9XHJcblxyXG4gIC53b3JrLWNhcmQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorksListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'works-list',
                templateUrl: './works-list.component.html',
                styleUrls: ['./works-list.component.scss']
            }]
    }], function () { return [{ type: _fetch_works_service__WEBPACK_IMPORTED_MODULE_1__["FetchWorksService"] }]; }, { types: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/works/works.component.ts":
/*!******************************************!*\
  !*** ./src/app/works/works.component.ts ***!
  \******************************************/
/*! exports provided: WorksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorksComponent", function() { return WorksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _works_list_works_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./works-list/works-list.component */ "./src/app/works/works-list/works-list.component.ts");





class WorksComponent {
    constructor(router) {
        this.router = router;
        this.creativeTypes = [
            'graphic',
            'video',
            'photo',
            'misc'
        ];
        this.devTypes = [
            'web',
            'research',
            'app'
        ];
        this.sub = this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                if (this.router.url.includes('creative')) {
                    this.title = 'Creative Projects';
                    this.activeTypes = this.creativeTypes;
                }
                else if (this.router.url.includes('dev')) {
                    this.title = 'Dev Projects';
                    this.activeTypes = this.devTypes;
                }
                else {
                    this.title = 'All Projects';
                    this.activeTypes = [];
                }
            }
        });
    }
    ngOnInit() { }
    ngAfterViewInit() { }
    ngOnDestroy() {
        if (this.sub)
            this.sub.unsubscribe();
    }
}
WorksComponent.ɵfac = function WorksComponent_Factory(t) { return new (t || WorksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
WorksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorksComponent, selectors: [["app-works"]], decls: 5, vars: 2, consts: [[1, "container"], [1, "title-container"], [3, "types"]], template: function WorksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "works-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("types", ctx.activeTypes);
    } }, directives: [_works_list_works_list_component__WEBPACK_IMPORTED_MODULE_2__["WorksListComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  margin: 150px 0;\n  padding: 0 100px;\n}\n\n.title-container[_ngcontent-%COMP%] {\n  font-family: Josefin Sans, sans-serif;\n  color: white;\n}\n\n.title-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  padding-left: 25px;\n  font-size: 24px;\n}\n\n@media (max-width: 630px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 0;\n    margin: 100px 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29ya3Mvd29ya3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLHFDQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUNFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBR0E7RUFDRTtJQUNFLFVBQUE7SUFDQSxlQUFBO0VBQUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3dvcmtzL3dvcmtzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAxNTBweCAwO1xyXG4gIHBhZGRpbmc6IDAgMTAwcHg7XHJcbn1cclxuXHJcbi50aXRsZS1jb250YWluZXIge1xyXG4gIGZvbnQtZmFtaWx5OiBKb3NlZmluIFNhbnMsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5cclxuICBoMiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjMwcHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDEwMHB4IDA7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-works',
                templateUrl: './works.component.html',
                styleUrls: ['./works.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




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

module.exports = __webpack_require__(/*! C:\Users\malik\Desktop\.Programs\Web Dev\maliktillman.com III\Angular-Root\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map