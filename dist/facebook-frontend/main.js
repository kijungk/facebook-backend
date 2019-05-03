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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");




var routes = [
    {
        path: '',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"app\">\n  <app-header></app-header>\n  <router-outlet></router-outlet>\n  <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#app {\n  height: 100vh;\n  width: 100vw;\n  max-height: 100vh;\n  max-width: 100vw;\n  overflow: hidden;\n  position: relative;\n  background-color: #E9EBEE; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2tpanVuZ2tpbS9EZXNrdG9wL1Byb2plY3RzL2ZhY2Vib29rLWZyb250ZW5kL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUva2lqdW5na2ltL0Rlc2t0b3AvUHJvamVjdHMvZmFjZWJvb2stZnJvbnRlbmQvc3JjL3V0aWxpdGllcy9taXhpbnMvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFhO0VBQ2IsYUFBWTtFQUNaLGtCQUFpQjtFQUNqQixpQkFBZ0I7RUFDaEIsaUJBQWdCO0VBQ2hCLG1CQUFrQjtFQ1FoQiwwQkFBeUIsRURMNUIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi91dGlsaXRpZXMvbWl4aW5zL2NvbG9ycy5zY3NzJztcblxuI2FwcCB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgbWF4LWhlaWdodDogMTAwdmg7XG4gIG1heC13aWR0aDogMTAwdnc7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBAaW5jbHVkZSBncmV5QmFja2dyb3VuZENvbG9yO1xufVxuIiwiQG1peGluIGxpZ2h0U2xhdGVHcmV5QmFja2dyb3VuZENvbG9yKCRob3ZlcjogZmFsc2UpIHtcbiAgQGlmICRob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzbGF0ZWdyZXk7XG4gIH1cblxuICBAZWxzZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzbGF0ZWdyZXk7XG4gIH1cbn1cblxuQG1peGluIGdyZXlCYWNrZ3JvdW5kQ29sb3IoJGhvdmVyOiBmYWxzZSkge1xuICBAaWYgJGhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNkY3O1xuICB9XG5cbiAgQGVsc2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFOUVCRUU7XG4gIH1cbn1cblxuQG1peGluIHdoaXRlQmFja2dyb3VuZENvbG9yKCRob3ZlcjogZmFsc2UpIHtcbiAgQGlmICRob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y2RjZGNztcbiAgfVxuXG4gIEBlbHNlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICB9XG59XG5cbkBtaXhpbiB3aGl0ZUNvbG9yIHtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG5cbkBtaXhpbiBjb250ZW50SXRlbVRpdGxlQ29sb3Ige1xuICBjb2xvcjogbGlnaHRzbGF0ZWdyZXk7XG59XG4iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"]
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"footer\" class=\"component\">\n  <div class=\"content\">\n    <div class=\"title\">&copy;2019 Ki Jung Kim</div>\n    <a href=\"https://www.linkedin.com/in/kimkijung/\">\n      <i class=\"fab fa-linkedin\"></i>\n    </a>\n    <a href=\"https://github.com/kijungk\">\n      <i class=\"fab fa-github-square\"></i>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#footer {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 20px;\n  font-size: 12px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  background-color: lightslategrey;\n  color: #FFFFFF; }\n  #footer .content {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center; }\n  #footer .content a {\n      font-size: 16px;\n      margin-left: 4px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2tpanVuZ2tpbS9EZXNrdG9wL1Byb2plY3RzL2ZhY2Vib29rLWZyb250ZW5kL3NyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUva2lqdW5na2ltL0Rlc2t0b3AvUHJvamVjdHMvZmFjZWJvb2stZnJvbnRlbmQvc3JjL3V0aWxpdGllcy9taXhpbnMvbGF5b3V0cy5zY3NzIiwiL2hvbWUva2lqdW5na2ltL0Rlc2t0b3AvUHJvamVjdHMvZmFjZWJvb2stZnJvbnRlbmQvc3JjL3V0aWxpdGllcy9taXhpbnMvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxtQkFBa0I7RUFDbEIsVUFBUztFQUNULFlBQVc7RUFDWCxhQUFZO0VBQ1osZ0JBQWU7RUNQZixjQUFhO0VBR1gsb0JBQW1CO0VBT3JCLG9CQUFtQjtFQUNuQix3QkFBdUI7RUNOckIsaUNBQWdDO0VBeUJsQyxlQUFjLEVGVGY7RUFuQkQ7SUNGRSxjQUFhO0lBR1gsb0JBQW1CO0lBT3JCLG9CQUFtQjtJQUNuQix3QkFBdUIsRURTdEI7RUFsQkg7TUFlTSxnQkFBZTtNQUNmLGlCQUFnQixFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3V0aWxpdGllcy9taXhpbnMvY29sb3JzLnNjc3MnO1xuQGltcG9ydCAnLi4vLi4vLi4vdXRpbGl0aWVzL21peGlucy9sYXlvdXRzLnNjc3MnO1xuXG4jZm9vdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcblxuICBAaW5jbHVkZSBmbGV4Q2VudGVyZWQ7XG4gIEBpbmNsdWRlIGxpZ2h0U2xhdGVHcmV5QmFja2dyb3VuZENvbG9yO1xuICBAaW5jbHVkZSB3aGl0ZUNvbG9yO1xuXG4gIC5jb250ZW50IHtcbiAgICBAaW5jbHVkZSBmbGV4Q2VudGVyZWQocm93KTtcblxuICAgIGEge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICB9XG4gIH1cbn1cbiIsIkBtaXhpbiBmbGV4Q2VudGVyZWQgKCRkaXJlY3Rpb246IHJvdykge1xuICBkaXNwbGF5OiBmbGV4O1xuXG4gIEBpZiAkZGlyZWN0aW9uPT1yb3cge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cblxuICBAaWYgJGRpcmVjdGlvbj09Y29sdW1uIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbkBtaXhpbiBmbGV4VmVydGljYWxseUNlbnRlcmVkKCRkaXJlY3Rpb24pIHtcbiAgZGlzcGxheTogZmxleDtcblxuICBAaWYgJGRpcmVjdGlvbj09cm93IHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgQGlmICRkaXJlY3Rpb249PWNvbHVtbiB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cblxuQG1peGluIGZsZXhIb3Jpem9udGFsbHlDZW50ZXJlZCgkZGlyZWN0aW9uKSB7XG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgQGlmICRkaXJlY3Rpb249PWNvbHVtbiB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIEBpZiAkZGlyZWN0aW9uPT1yb3cge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG5cblxuQG1peGluIGFkanVzdEZvckhlYWRlckZvb3RlciB7XG4gIHBhZGRpbmctdG9wOiAzMnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbiIsIkBtaXhpbiBsaWdodFNsYXRlR3JleUJhY2tncm91bmRDb2xvcigkaG92ZXI6IGZhbHNlKSB7XG4gIEBpZiAkaG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2xhdGVncmV5O1xuICB9XG5cbiAgQGVsc2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2xhdGVncmV5O1xuICB9XG59XG5cbkBtaXhpbiBncmV5QmFja2dyb3VuZENvbG9yKCRob3ZlcjogZmFsc2UpIHtcbiAgQGlmICRob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjZGNztcbiAgfVxuXG4gIEBlbHNlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTlFQkVFO1xuICB9XG59XG5cbkBtaXhpbiB3aGl0ZUJhY2tncm91bmRDb2xvcigkaG92ZXI6IGZhbHNlKSB7XG4gIEBpZiAkaG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNkY2Rjc7XG4gIH1cblxuICBAZWxzZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgfVxufVxuXG5AbWl4aW4gd2hpdGVDb2xvciB7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuXG5AbWl4aW4gY29udGVudEl0ZW1UaXRsZUNvbG9yIHtcbiAgY29sb3I6IGxpZ2h0c2xhdGVncmV5O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"header\" class=\"component\">\n  <div class=\"content\">\n    <i class=\"fab fa-facebook-square header-icon\"></i>\n    <div class=\"title\">\n      Messenger Control Panel\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#header {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 32px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  background-color: lightslategrey;\n  color: #FFFFFF; }\n  #header .content {\n    font-size: 20px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center; }\n  #header .content i {\n      margin-right: 4px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2tpanVuZ2tpbS9EZXNrdG9wL1Byb2plY3RzL2ZhY2Vib29rLWZyb250ZW5kL3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUva2lqdW5na2ltL0Rlc2t0b3AvUHJvamVjdHMvZmFjZWJvb2stZnJvbnRlbmQvc3JjL3V0aWxpdGllcy9taXhpbnMvbGF5b3V0cy5zY3NzIiwiL2hvbWUva2lqdW5na2ltL0Rlc2t0b3AvUHJvamVjdHMvZmFjZWJvb2stZnJvbnRlbmQvc3JjL3V0aWxpdGllcy9taXhpbnMvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxtQkFBa0I7RUFDbEIsT0FBTTtFQUNOLFlBQVc7RUFDWCxhQUFZO0VDTlosY0FBYTtFQUdYLG9CQUFtQjtFQU9yQixvQkFBbUI7RUFDbkIsd0JBQXVCO0VDTnJCLGlDQUFnQztFQXlCbEMsZUFBYyxFRlRmO0VBbkJEO0lBV0ksZ0JBQWU7SUNiakIsY0FBYTtJQUdYLG9CQUFtQjtJQU9yQixvQkFBbUI7SUFDbkIsd0JBQXVCLEVEU3RCO0VBbEJIO01BY00sa0JBQWlCLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vdXRpbGl0aWVzL21peGlucy9jb2xvcnMuc2Nzcyc7XG5AaW1wb3J0ICcuLi8uLi8uLi91dGlsaXRpZXMvbWl4aW5zL2xheW91dHMuc2Nzcyc7XG5cbiNoZWFkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzJweDtcblxuICBAaW5jbHVkZSBmbGV4Q2VudGVyZWQ7XG4gIEBpbmNsdWRlIGxpZ2h0U2xhdGVHcmV5QmFja2dyb3VuZENvbG9yO1xuICBAaW5jbHVkZSB3aGl0ZUNvbG9yO1xuXG4gIC5jb250ZW50IHtcbiAgICBmb250LXNpemU6IDIwcHg7XG5cbiAgICBpIHtcbiAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGZsZXhDZW50ZXJlZFxuICB9XG59XG4iLCJAbWl4aW4gZmxleENlbnRlcmVkICgkZGlyZWN0aW9uOiByb3cpIHtcbiAgZGlzcGxheTogZmxleDtcblxuICBAaWYgJGRpcmVjdGlvbj09cm93IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG5cbiAgQGlmICRkaXJlY3Rpb249PWNvbHVtbiB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5AbWl4aW4gZmxleFZlcnRpY2FsbHlDZW50ZXJlZCgkZGlyZWN0aW9uKSB7XG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgQGlmICRkaXJlY3Rpb249PXJvdyB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIEBpZiAkZGlyZWN0aW9uPT1jb2x1bW4ge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG5cbkBtaXhpbiBmbGV4SG9yaXpvbnRhbGx5Q2VudGVyZWQoJGRpcmVjdGlvbikge1xuICBkaXNwbGF5OiBmbGV4O1xuXG4gIEBpZiAkZGlyZWN0aW9uPT1jb2x1bW4ge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICBAaWYgJGRpcmVjdGlvbj09cm93IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuXG5cbkBtaXhpbiBhZGp1c3RGb3JIZWFkZXJGb290ZXIge1xuICBwYWRkaW5nLXRvcDogMzJweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4iLCJAbWl4aW4gbGlnaHRTbGF0ZUdyZXlCYWNrZ3JvdW5kQ29sb3IoJGhvdmVyOiBmYWxzZSkge1xuICBAaWYgJGhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNsYXRlZ3JleTtcbiAgfVxuXG4gIEBlbHNlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNsYXRlZ3JleTtcbiAgfVxufVxuXG5AbWl4aW4gZ3JleUJhY2tncm91bmRDb2xvcigkaG92ZXI6IGZhbHNlKSB7XG4gIEBpZiAkaG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY2Rjc7XG4gIH1cblxuICBAZWxzZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U5RUJFRTtcbiAgfVxufVxuXG5AbWl4aW4gd2hpdGVCYWNrZ3JvdW5kQ29sb3IoJGhvdmVyOiBmYWxzZSkge1xuICBAaWYgJGhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGNkY3O1xuICB9XG5cbiAgQGVsc2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gIH1cbn1cblxuQG1peGluIHdoaXRlQ29sb3Ige1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuQG1peGluIGNvbnRlbnRJdGVtVGl0bGVDb2xvciB7XG4gIGNvbG9yOiBsaWdodHNsYXRlZ3JleTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"home\" class=\"page\">\n  <div class=\"content\">\n    <div class=\"content-item\">\n      <div class=\"title\">Select an Event to Moderate</div>\n      <div class=\"events\" *ngFor=\"let event of events | async\">\n        {{event}}\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center; }\n\n.title {\n  color: lightslategrey; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2tpanVuZ2tpbS9EZXNrdG9wL1Byb2plY3RzL2ZhY2Vib29rLWZyb250ZW5kL3NyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUva2lqdW5na2ltL0Rlc2t0b3AvUHJvamVjdHMvZmFjZWJvb2stZnJvbnRlbmQvc3JjL3V0aWxpdGllcy9taXhpbnMvbGF5b3V0cy5zY3NzIiwiL2hvbWUva2lqdW5na2ltL0Rlc2t0b3AvUHJvamVjdHMvZmFjZWJvb2stZnJvbnRlbmQvc3JjL3V0aWxpdGllcy9taXhpbnMvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUNGRSxjQUFhO0VBT1gsdUJBQXNCO0VBR3hCLG9CQUFtQjtFQUNuQix3QkFBdUIsRURQeEI7O0FBRUQ7RUU0QkUsc0JBQXFCLEVGMUJ0QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3V0aWxpdGllcy9taXhpbnMvY29sb3JzLnNjc3MnO1xuQGltcG9ydCAnLi4vLi4vLi4vdXRpbGl0aWVzL21peGlucy9sYXlvdXRzLnNjc3MnO1xuXG4uY29udGVudCB7XG4gIEBpbmNsdWRlIGZsZXhDZW50ZXJlZChjb2x1bW4pO1xufVxuXG4udGl0bGUge1xuICBAaW5jbHVkZSBjb250ZW50SXRlbVRpdGxlQ29sb3I7XG59XG4iLCJAbWl4aW4gZmxleENlbnRlcmVkICgkZGlyZWN0aW9uOiByb3cpIHtcbiAgZGlzcGxheTogZmxleDtcblxuICBAaWYgJGRpcmVjdGlvbj09cm93IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG5cbiAgQGlmICRkaXJlY3Rpb249PWNvbHVtbiB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5AbWl4aW4gZmxleFZlcnRpY2FsbHlDZW50ZXJlZCgkZGlyZWN0aW9uKSB7XG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgQGlmICRkaXJlY3Rpb249PXJvdyB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIEBpZiAkZGlyZWN0aW9uPT1jb2x1bW4ge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG5cbkBtaXhpbiBmbGV4SG9yaXpvbnRhbGx5Q2VudGVyZWQoJGRpcmVjdGlvbikge1xuICBkaXNwbGF5OiBmbGV4O1xuXG4gIEBpZiAkZGlyZWN0aW9uPT1jb2x1bW4ge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICBAaWYgJGRpcmVjdGlvbj09cm93IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuXG5cbkBtaXhpbiBhZGp1c3RGb3JIZWFkZXJGb290ZXIge1xuICBwYWRkaW5nLXRvcDogMzJweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4iLCJAbWl4aW4gbGlnaHRTbGF0ZUdyZXlCYWNrZ3JvdW5kQ29sb3IoJGhvdmVyOiBmYWxzZSkge1xuICBAaWYgJGhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNsYXRlZ3JleTtcbiAgfVxuXG4gIEBlbHNlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNsYXRlZ3JleTtcbiAgfVxufVxuXG5AbWl4aW4gZ3JleUJhY2tncm91bmRDb2xvcigkaG92ZXI6IGZhbHNlKSB7XG4gIEBpZiAkaG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY2Rjc7XG4gIH1cblxuICBAZWxzZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U5RUJFRTtcbiAgfVxufVxuXG5AbWl4aW4gd2hpdGVCYWNrZ3JvdW5kQ29sb3IoJGhvdmVyOiBmYWxzZSkge1xuICBAaWYgJGhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGNkY3O1xuICB9XG5cbiAgQGVsc2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gIH1cbn1cblxuQG1peGluIHdoaXRlQ29sb3Ige1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuQG1peGluIGNvbnRlbnRJdGVtVGl0bGVDb2xvciB7XG4gIGNvbG9yOiBsaWdodHNsYXRlZ3JleTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_events_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/events/events.service */ "./src/app/services/events/events.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(eventsService) {
        this.eventsService = eventsService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getEvents();
    };
    HomeComponent.prototype.getEvents = function () {
        this.events = this.eventsService.getEvents();
        return;
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_events_events_service__WEBPACK_IMPORTED_MODULE_2__["EventsService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/services/events/events.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/events/events.service.ts ***!
  \***************************************************/
/*! exports provided: EventsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsService", function() { return EventsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var EventsService = /** @class */ (function () {
    function EventsService(http) {
        this.http = http;
        this.eventsUrl = '/api/events';
    }
    EventsService.prototype.getEvents = function () {
        return this.http.get(this.eventsUrl);
    };
    EventsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EventsService);
    return EventsService;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/kijungkim/Desktop/Projects/facebook-frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map