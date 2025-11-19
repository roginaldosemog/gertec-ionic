(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["imprimir-imprimir-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/imprimir/imprimir.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/imprimir/imprimir.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <div id=\"content\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <h1>Funções Impressao G700/G800</h1>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button color=\"secondary\" expand=\"full\" (click)=\"checarImpressora()\">Status Impressora</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item class=\"input-item\">\r\n            <ion-label position=\"floating\">Escreva sua mensagem</ion-label>\r\n            <ion-input type=\"text\" [(ngModel)]=\"mensagem\" id=\"mensagem\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <h1>Configuração de impressão</h1>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-row radio-group>\r\n            <ion-radio-group allow-empty-selection=\"false\" name=\"radio-group\" (ionChange)=\"radioGroupChange($event)\"> \r\n              <ion-col>\r\n                <ion-radio class=\"radio\" value=\"LEFT\"></ion-radio>\r\n                <ion-label class=\"label-right\">Esquerda</ion-label>\r\n              </ion-col>\r\n      \r\n              <ion-col>\r\n                <ion-radio class=\"radio\" value=\"CENTER\"></ion-radio>\r\n                <ion-label class=\"label-right\">Centralizado</ion-label>\r\n              </ion-col>\r\n      \r\n              <ion-col>\r\n                <ion-radio class=\"radio\" value=\"RIGHT\"></ion-radio>\r\n                <ion-label class=\"label-right-right\">Direita</ion-label>\r\n              </ion-col>\r\n            </ion-radio-group>\r\n          </ion-row>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-col class=\"first-button\">\r\n            <ion-button (click)=\"listSelecionado[0] = !listSelecionado[0]\" [color]=\"listSelecionado[0]?'primary':'secondary'\">Negrito</ion-button>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-button (click)=\"listSelecionado[1] = !listSelecionado[1]\" [color]=\"listSelecionado[1]?'primary':'secondary'\">Itálico</ion-button>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-button (click)=\"listSelecionado[2] = !listSelecionado[2]\" [color]=\"listSelecionado[2]?'primary':'secondary'\">Sublinhado</ion-button>\r\n          </ion-col>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"font-size\">\r\n        <h2>Font:</h2>\r\n        <ion-list>\r\n          <ion-select placeholder=\"DEFAULT\" (ionChange)=\"optionsFont($event);\" cancelText=\"Cancelar\" interface=\"action-sheet\">\r\n            <ion-select-option value=\"DEFAULT\">DEFAULT</ion-select-option>\r\n            <ion-select-option value=\"MONOSPACE\">MONOSPACE</ion-select-option>\r\n            <ion-select-option value=\"SANS SERIF\">SANS SERIF</ion-select-option>\r\n            <ion-select-option value=\"SERIF\">SERIF</ion-select-option>\r\n            <ion-select-option value=\"VECTRA.otf\">VECTRA.otf</ion-select-option>\r\n          </ion-select>\r\n        </ion-list>\r\n        <h2>Size:</h2>\r\n        <ion-list>\r\n          <ion-select class=\"label-left\" placeholder=\"60\" (ionChange)=\"optionsSize($event);\" cancelText=\"Cancelar\" interface=\"action-sheet\">\r\n            <ion-select-option value=\"20\">20</ion-select-option>\r\n            <ion-select-option value=\"30\">30</ion-select-option>\r\n            <ion-select-option value=\"40\">40</ion-select-option>\r\n            <ion-select-option value=\"50\">50</ion-select-option>\r\n            <ion-select-option value=\"60\">60</ion-select-option>\r\n            <ion-select-option value=\"70\">70</ion-select-option>\r\n            <ion-select-option value=\"80\">80</ion-select-option>\r\n            <ion-select-option value=\"90\">90</ion-select-option>\r\n            <ion-select-option value=\"100\">100</ion-select-option>\r\n          </ion-select>\r\n        </ion-list>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"button-text-img\">\r\n          <ion-button color=\"secondary\" (click)=\"imprimirTexto()\">Imprimir Texto</ion-button>\r\n          <ion-button color=\"secondary\" (click)=\"imprimirImagem()\">Imprimir Imagem</ion-button>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col class=\"bar-code-size\">\r\n          <ion-row>\r\n            <p>Bar Code Height</p>\r\n            <p>Bar Code Width</p>\r\n            <p>BarCodes</p>\r\n          </ion-row>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"options-barcode\">\r\n        <ion-col>\r\n          <ion-row>\r\n            <ion-list class=\"options-barcode1\">\r\n              <ion-select class=\"label-left\" placeholder=\"280\" (ionChange)=\"optionsBarCodeHeight($event);\" cancelText=\"Cancelar\" interface=\"action-sheet\">\r\n                <ion-select-option value=\"10\">10</ion-select-option>\r\n                <ion-select-option value=\"40\">40</ion-select-option>\r\n                <ion-select-option value=\"80\">80</ion-select-option>\r\n                <ion-select-option value=\"120\">120</ion-select-option>\r\n                <ion-select-option value=\"160\">160</ion-select-option>\r\n                <ion-select-option value=\"200\">200</ion-select-option>\r\n                <ion-select-option value=\"240\">240</ion-select-option>\r\n                <ion-select-option value=\"280\">280</ion-select-option>\r\n                <ion-select-option value=\"320\">320</ion-select-option>\r\n                <ion-select-option value=\"380\">380</ion-select-option>\r\n              </ion-select>\r\n            </ion-list>\r\n\r\n            <ion-list class=\"options-barcode1\">\r\n              <ion-select class=\"label-left\" placeholder=\"280\" (ionChange)=\"optionsBarCodeWidth($event);\" cancelText=\"Cancelar\" interface=\"action-sheet\">\r\n                <ion-select-option value=\"10\">10</ion-select-option>\r\n                <ion-select-option value=\"40\">40</ion-select-option>\r\n                <ion-select-option value=\"80\">80</ion-select-option>\r\n                <ion-select-option value=\"120\">120</ion-select-option>\r\n                <ion-select-option value=\"160\">160</ion-select-option>\r\n                <ion-select-option value=\"200\">200</ion-select-option>\r\n                <ion-select-option value=\"240\">240</ion-select-option>\r\n                <ion-select-option value=\"280\">280</ion-select-option>\r\n                <ion-select-option value=\"320\">320</ion-select-option>\r\n                <ion-select-option value=\"380\">380</ion-select-option>\r\n              </ion-select>\r\n            </ion-list>\r\n\r\n            <ion-list>\r\n              <ion-select class=\"label-left\" placeholder=\"QR_CODE\" (ionChange)=\"optionsBarCodeTipo($event);\" cancelText=\"Cancelar\" interface=\"action-sheet\">\r\n                <ion-select-option value=\"QR_CODE\">QR_CODE</ion-select-option>\r\n                <ion-select-option value=\"CODE_128\">CODE_128</ion-select-option>\r\n                <ion-select-option value=\"EAN_8\">EAN_8</ion-select-option>\r\n                <ion-select-option value=\"EAN_13\">EAN_13</ion-select-option>\r\n                <ion-select-option value=\"PDF_417\">PDF_417</ion-select-option>\r\n              </ion-select>\r\n            </ion-list>\r\n          </ion-row>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button color=\"secondary\" expand=\"full\" (click)=\"imprimirBarCode()\">Imprimir BarCode</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button color=\"secondary\" expand=\"full\" (click)=\"todasFunc()\">Imprimir Todas Funções</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/imprimir/imprimir-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/imprimir/imprimir-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ImprimirPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImprimirPageRoutingModule", function() { return ImprimirPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _imprimir_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imprimir.page */ "./src/app/imprimir/imprimir.page.ts");




const routes = [
    {
        path: '',
        component: _imprimir_page__WEBPACK_IMPORTED_MODULE_3__["ImprimirPage"]
    }
];
let ImprimirPageRoutingModule = class ImprimirPageRoutingModule {
};
ImprimirPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ImprimirPageRoutingModule);



/***/ }),

/***/ "./src/app/imprimir/imprimir.module.ts":
/*!*********************************************!*\
  !*** ./src/app/imprimir/imprimir.module.ts ***!
  \*********************************************/
/*! exports provided: ImprimirPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImprimirPageModule", function() { return ImprimirPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _imprimir_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./imprimir-routing.module */ "./src/app/imprimir/imprimir-routing.module.ts");
/* harmony import */ var _imprimir_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./imprimir.page */ "./src/app/imprimir/imprimir.page.ts");







let ImprimirPageModule = class ImprimirPageModule {
};
ImprimirPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _imprimir_routing_module__WEBPACK_IMPORTED_MODULE_5__["ImprimirPageRoutingModule"]
        ],
        declarations: [_imprimir_page__WEBPACK_IMPORTED_MODULE_6__["ImprimirPage"]]
    })
], ImprimirPageModule);



/***/ }),

/***/ "./src/app/imprimir/imprimir.page.scss":
/*!*********************************************!*\
  !*** ./src/app/imprimir/imprimir.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  color: gray;\n  font-weight: bold;\n  font-size: 23px;\n  text-align: center;\n  margin: 0;\n}\n\nh2 {\n  color: gray;\n  font-size: 18px;\n  text-align: center;\n  margin: 0px 0px 0px 20px;\n}\n\np {\n  color: gray;\n  font-size: 14px;\n}\n\nion-button {\n  font-weight: bold;\n  --border-radius: 2px !important;\n  letter-spacing: 0em;\n  margin: 0;\n}\n\nion-input {\n  margin: 0px 5px 0px 5px;\n}\n\nion-select {\n  color: #000;\n}\n\n.radio {\n  margin-left: 5px;\n  margin-right: 10px;\n}\n\n.font-size ion-list {\n  margin: 0px;\n  padding: 0px;\n}\n\n.font-size h2 {\n  margin: 9px 15px 0px 15px;\n}\n\n.button-text-img ion-button {\n  margin: 0px 5px 0px 15px;\n}\n\n.first-button {\n  margin-left: 15px;\n}\n\n.bar-code-size {\n  margin: 0px 0px 0px 20px;\n  padding: 0px;\n}\n\n.bar-code-size p {\n  margin: 16px 10px 0px 0px;\n  padding: 0px;\n}\n\n.options-barcode ion-list {\n  padding: 0px;\n}\n\n.options-barcode1 {\n  margin-right: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW1wcmltaXIvQzpcXFVzZXJzXFxQaWNoYXVcXFByb2pldG9zXFxfaWdvclxcdGVzdGUtbWFxdWluaW5oYS9zcmNcXGFwcFxcaW1wcmltaXJcXGltcHJpbWlyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaW1wcmltaXIvaW1wcmltaXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksd0JBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSx3QkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2ltcHJpbWlyL2ltcHJpbWlyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwcHggMHB4IDBweCAyMHB4O1xyXG59XHJcblxyXG5wIHtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAycHggIWltcG9ydGFudDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAuMGVtO1xyXG4gICAgbWFyZ2luOjA7XHJcbn1cclxuXHJcbmlvbi1pbnB1dCB7XHJcbiAgICBtYXJnaW46IDBweCA1cHggMHB4IDVweDsgXHJcbn1cclxuXHJcbmlvbi1zZWxlY3Qge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbi5yYWRpbyB7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uZm9udC1zaXplIGlvbi1saXN0e1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5mb250LXNpemUgaDJ7XHJcbiAgICBtYXJnaW46IDlweCAxNXB4IDBweCAxNXB4O1xyXG59XHJcblxyXG4uYnV0dG9uLXRleHQtaW1nIGlvbi1idXR0b24ge1xyXG4gICAgbWFyZ2luOiAwcHggNXB4IDBweCAxNXB4O1xyXG59XHJcblxyXG4uZmlyc3QtYnV0dG9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4uYmFyLWNvZGUtc2l6ZSB7XHJcbiAgICBtYXJnaW46IDBweCAwcHggMHB4IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5iYXItY29kZS1zaXplIHAge1xyXG4gICAgbWFyZ2luOiAxNnB4IDEwcHggMHB4IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLm9wdGlvbnMtYmFyY29kZSBpb24tbGlzdCB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5vcHRpb25zLWJhcmNvZGUxIHtcclxuICAgIG1hcmdpbi1yaWdodDogNTBweDtcclxufVxyXG4iLCJoMSB7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbn1cblxuaDIge1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMHB4IDBweCAwcHggMjBweDtcbn1cblxucCB7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbmlvbi1idXR0b24ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgLS1ib3JkZXItcmFkaXVzOiAycHggIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcbiAgbWFyZ2luOiAwO1xufVxuXG5pb24taW5wdXQge1xuICBtYXJnaW46IDBweCA1cHggMHB4IDVweDtcbn1cblxuaW9uLXNlbGVjdCB7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4ucmFkaW8ge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5mb250LXNpemUgaW9uLWxpc3Qge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4uZm9udC1zaXplIGgyIHtcbiAgbWFyZ2luOiA5cHggMTVweCAwcHggMTVweDtcbn1cblxuLmJ1dHRvbi10ZXh0LWltZyBpb24tYnV0dG9uIHtcbiAgbWFyZ2luOiAwcHggNXB4IDBweCAxNXB4O1xufVxuXG4uZmlyc3QtYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbi5iYXItY29kZS1zaXplIHtcbiAgbWFyZ2luOiAwcHggMHB4IDBweCAyMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5iYXItY29kZS1zaXplIHAge1xuICBtYXJnaW46IDE2cHggMTBweCAwcHggMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5vcHRpb25zLWJhcmNvZGUgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5vcHRpb25zLWJhcmNvZGUxIHtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/imprimir/imprimir.page.ts":
/*!*******************************************!*\
  !*** ./src/app/imprimir/imprimir.page.ts ***!
  \*******************************************/
/*! exports provided: ImprimirPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImprimirPage", function() { return ImprimirPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let ImprimirPage = class ImprimirPage {
    constructor(alertController) {
        this.alertController = alertController;
        this.listSelecionado = [false, false, false];
        this.alinhar = "";
        this.left = "LEFT";
        this.center = "CENTER";
        this.right = "RIGHT";
        this.font = "DEFAULT";
        this.size = "60";
        this.height = 280;
        this.width = 280;
        this.barCode = "QR_CODE";
        this.gpos700 = cordova.plugins.gpos7centos;
    }
    ngOnInit() {
    }
    presentAlert(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                // header: 'Escreva uma mensagem!',
                message: msg
            });
            yield alert.present();
        });
    }
    checarImpressora() {
        this.gpos700.checarImpressora((res) => {
            console.log(res);
        }, (err) => {
            console.log(err);
        });
    }
    radioGroupChange(event) {
        this.alinhamentoValue = event.detail['value'];
        switch (this.alinhamentoValue) {
            case 'LEFT':
                this.alinhar = this.alinhamentoValue;
                break;
            case 'CENTER':
                this.alinhar = this.alinhamentoValue;
                break;
            case 'RIGHT':
                this.alinhar = this.alinhamentoValue;
                break;
            default:
                this.alinhar = null;
        }
    }
    optionsFont(event) {
        this.font = event.detail['value'];
    }
    optionsSize(event) {
        this.size = event.detail['value'];
    }
    optionsBarCodeHeight(event) {
        this.height = parseInt(event.detail['value']);
    }
    optionsBarCodeWidth(event) {
        this.width = parseInt(event.detail['value']);
    }
    optionsBarCodeTipo(event) {
        this.barCode = event.detail['value'];
    }
    imprimirTexto() {
        // this.gpos700.imprimir();
        if (this.mensagem == null || this.mensagem == "") {
            this.presentAlert("Escreva uma mensagem");
            return;
        }
        if (this.alinhar == null || this.alinhar == "") {
            this.presentAlert("Selecione um alinhamento");
            return;
        }
        this.gpos700.imprimir({
            tipoImpressao: "Texto",
            mensagem: this.mensagem,
            alinhar: this.alinhar,
            opNegrito: this.listSelecionado[0],
            opItalico: this.listSelecionado[1],
            opSublinhado: this.listSelecionado[2],
            font: this.font,
            size: this.size
        }, (res) => console.log(res), (er) => console.log(er));
        this.gpos700.impressoraOutput({}, (res) => console.log(res), (err) => console.log(err));
    }
    todasFunc() {
        this.gpos700.imprimir({
            tipoImpressao: "TodasFuncoes"
        }, (res) => console.log(res), (err) => console.log(err));
        this.gpos700.impressoraOutput({}, (res) => console.log(res), (err) => console.log(err));
    }
    imprimirImagem() {
        this.gpos700.imprimir({
            tipoImpressao: "Imagem"
        }, (res) => console.log(res), (err) => console.log(err));
        this.gpos700.impressoraOutput({}, (res) => console.log(res), (err) => console.log(err));
    }
    imprimirBarCode() {
        if (this.mensagem == null || this.mensagem == "") {
            this.presentAlert("Escreva uma mensagem");
            return;
        }
        this.gpos700.imprimir({
            tipoImpressao: "CodigoDeBarra",
            height: this.height,
            width: this.width,
            barCode: this.barCode,
            mensagem: this.mensagem
        }, (res) => console.log(res), (err) => console.log(err));
        this.gpos700.impressoraOutput({ "avancaLinha": 40 }, (res) => console.log(res), (err) => console.log(err));
    }
};
ImprimirPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
ImprimirPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-imprimir',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./imprimir.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/imprimir/imprimir.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./imprimir.page.scss */ "./src/app/imprimir/imprimir.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], ImprimirPage);



/***/ })

}]);
//# sourceMappingURL=imprimir-imprimir-module-es2015.js.map