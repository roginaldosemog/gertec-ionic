function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["codigobarras1-codigobarras1-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/codigobarras1/codigobarras1.page.html": (
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/codigobarras1/codigobarras1.page.html ***!
    \*********************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_codigobarras1_codigobarras1PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-content>\r\n  <ion-row>\r\n    <ion-col>\r\n      <h1>Ler código de barras</h1>\r\n    </ion-col>\r\n  </ion-row>\r\n  <div class=\"buttons\">\r\n    <ion-button (click)=\"EAN_8()\">EAN 8</ion-button>\r\n    <ion-button (click)=\"EAN_13()\">EAN 13</ion-button>\r\n    <ion-button (click)=\"EAN_14()\">EAN 14</ion-button>\r\n    <ion-button (click)=\"QR_CODE()\">QR CODE</ion-button>\r\n  </div>\r\n  <ion-list class=\"resultados\">\r\n    <ion-item *ngFor=\"let item of items\">\r\n      <span>{{item.Formato}}: {{item.Resultado}}</span>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n";

    /***/
  }),
  /***/"./src/app/codigobarras1/codigobarras1-routing.module.ts": (
  /*!***************************************************************!*\
    !*** ./src/app/codigobarras1/codigobarras1-routing.module.ts ***!
    \***************************************************************/
  /*! exports provided: Codigobarras1PageRoutingModule */
  /***/
  function _src_app_codigobarras1_codigobarras1RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "Codigobarras1PageRoutingModule", function () {
      return Codigobarras1PageRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _codigobarras1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./codigobarras1.page */"./src/app/codigobarras1/codigobarras1.page.ts");
    var routes = [{
      path: '',
      component: _codigobarras1_page__WEBPACK_IMPORTED_MODULE_3__["Codigobarras1Page"]
    }];
    var Codigobarras1PageRoutingModule = /*#__PURE__*/_createClass(function Codigobarras1PageRoutingModule() {
      _classCallCheck(this, Codigobarras1PageRoutingModule);
    });
    Codigobarras1PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Codigobarras1PageRoutingModule);

    /***/
  }),
  /***/"./src/app/codigobarras1/codigobarras1.module.ts": (
  /*!*******************************************************!*\
    !*** ./src/app/codigobarras1/codigobarras1.module.ts ***!
    \*******************************************************/
  /*! exports provided: Codigobarras1PageModule */
  /***/
  function _src_app_codigobarras1_codigobarras1ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "Codigobarras1PageModule", function () {
      return Codigobarras1PageModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */"./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */
    var _codigobarras1_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./codigobarras1-routing.module */"./src/app/codigobarras1/codigobarras1-routing.module.ts");
    /* harmony import */
    var _codigobarras1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./codigobarras1.page */"./src/app/codigobarras1/codigobarras1.page.ts");
    var Codigobarras1PageModule = /*#__PURE__*/_createClass(function Codigobarras1PageModule() {
      _classCallCheck(this, Codigobarras1PageModule);
    });
    Codigobarras1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _codigobarras1_routing_module__WEBPACK_IMPORTED_MODULE_5__["Codigobarras1PageRoutingModule"]],
      declarations: [_codigobarras1_page__WEBPACK_IMPORTED_MODULE_6__["Codigobarras1Page"]]
    })], Codigobarras1PageModule);

    /***/
  }),
  /***/"./src/app/codigobarras1/codigobarras1.page.scss": (
  /*!*******************************************************!*\
    !*** ./src/app/codigobarras1/codigobarras1.page.scss ***!
    \*******************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_codigobarras1_codigobarras1PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "ion-button {\n  color: red;\n  font-weight: bold;\n}\n\nh1 {\n  margin: 0;\n  font-size: 36px;\n  font-weight: bold;\n  text-align: center;\n}\n\n.buttons {\n  text-align: center;\n}\n\nspan {\n  color: gray;\n  font-weight: bold;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29kaWdvYmFycmFzMS9DOlxcVXNlcnNcXFBpY2hhdVxcUHJvamV0b3NcXF9pZ29yXFx0ZXN0ZS1tYXF1aW5pbmhhL3NyY1xcYXBwXFxjb2RpZ29iYXJyYXMxXFxjb2RpZ29iYXJyYXMxLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29kaWdvYmFycmFzMS9jb2RpZ29iYXJyYXMxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREdBO0VBQ0ksU0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvY29kaWdvYmFycmFzMS9jb2RpZ29iYXJyYXMxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1idXR0b24ge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgLy8gYm94LXNpemluZzogMTBweDtcclxufVxyXG5cclxuaDEge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idXR0b25zIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuc3BhbiB7XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luOjA7XHJcbn1cclxuIiwiaW9uLWJ1dHRvbiB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5oMSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnV0dG9ucyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuc3BhbiB7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAwO1xufSJdfQ== */";

    /***/
  }),
  /***/"./src/app/codigobarras1/codigobarras1.page.ts": (
  /*!*****************************************************!*\
    !*** ./src/app/codigobarras1/codigobarras1.page.ts ***!
    \*****************************************************/
  /*! exports provided: Codigobarras1Page */
  /***/
  function _src_app_codigobarras1_codigobarras1PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "Codigobarras1Page", function () {
      return Codigobarras1Page;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var Codigobarras1Page = /*#__PURE__*/function () {
      function Codigobarras1Page() {
        _classCallCheck(this, Codigobarras1Page);
        this.items = [];
        this.gpos700 = cordova.plugins.gpos7centos;
      }
      return _createClass(Codigobarras1Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "EAN_8",
        value: function EAN_8() {
          var _this = this;
          this.gpos700.leitorCodigo1({
            barCode: "EAN_8"
          }, function (res) {
            _this.items.push(res);
          }, function (er) {
            _this.items.push(er);
          });
        }
      }, {
        key: "EAN_13",
        value: function EAN_13() {
          var _this2 = this;
          this.gpos700.leitorCodigo1({
            barCode: "EAN_13"
          }, function (res) {
            _this2.items.push(res);
          }, function (er) {
            _this2.items.push(er);
          });
        }
      }, {
        key: "EAN_14",
        value: function EAN_14() {
          var _this3 = this;
          this.gpos700.leitorCodigo1({
            barCode: "EAN_14"
          }, function (res) {
            _this3.items.push(res);
          }, function (er) {
            _this3.items.push(er);
          });
        }
      }, {
        key: "QR_CODE",
        value: function QR_CODE() {
          var _this4 = this;
          this.gpos700.leitorCodigo1({
            barCode: "QR_CODE"
          }, function (res) {
            _this4.items.push(res);
          }, function (er) {
            _this4.items.push(er);
          });
        }
      }]);
    }();
    Codigobarras1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-codigobarras1',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./codigobarras1.page.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/codigobarras1/codigobarras1.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./codigobarras1.page.scss */"./src/app/codigobarras1/codigobarras1.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], Codigobarras1Page);

    /***/
  })
}]);
//# sourceMappingURL=codigobarras1-codigobarras1-module-es5.js.map