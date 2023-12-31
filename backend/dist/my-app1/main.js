"use strict";
(self["webpackChunkmy_app1"] = self["webpackChunkmy_app1"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _products_components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products/components/product-details/product-details.component */ 7887);
/* harmony import */ var _products_components_list_product_list_product_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products/components/list-product/list-product.component */ 6087);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _products_components_panier_panier_panier_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products/components/panier/panier/panier.component */ 5475);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;









const appRoutes = [{
  path: "products",
  component: _products_components_list_product_list_product_component__WEBPACK_IMPORTED_MODULE_1__.ListProductComponent
}, {
  path: "details",
  component: _products_components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_0__.ProductDetailsComponent
}, {
  path: "",
  component: _products_components_list_product_list_product_component__WEBPACK_IMPORTED_MODULE_1__.ListProductComponent
}, {
  path: "cart",
  component: _products_components_list_product_list_product_component__WEBPACK_IMPORTED_MODULE_1__.ListProductComponent
}, {
  path: "details/:id",
  component: _products_components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_0__.ProductDetailsComponent
}, {
  path: "panier",
  component: _products_components_panier_panier_panier_component__WEBPACK_IMPORTED_MODULE_2__.PanierComponent
}, {
  path: '**',
  redirectTo: '/not found'
}];
class AppRoutingModule {}
_class = AppRoutingModule;
_class.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(appRoutes), _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
var _class;


class AppComponent {
  constructor() {
    this.title = 'my-app1';
  }
}
_class = AppComponent;
_class.ɵfac = function AppComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: ["h1[_ngcontent-%COMP%]{\n  color:red;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0FBQ1giLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcclxuICBjb2xvcjpyZWQ7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _products_components_list_product_list_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products/components/list-product/list-product.component */ 6087);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ 3767);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/slide-toggle */ 9293);
/* harmony import */ var _products_components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products/components/product-details/product-details.component */ 7887);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product.service */ 6259);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _products_components_panier_panier_panier_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products/components/panier/panier/panier.component */ 5475);
/* harmony import */ var _products_components_Product_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./products/components/Product/product.component */ 443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;














class AppModule {}
_class = AppModule;
_class.ɵfac = function AppModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: _class,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  providers: [_product_service__WEBPACK_IMPORTED_MODULE_5__.ProductService],
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__.MatSlideToggleModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _products_components_list_product_list_product_component__WEBPACK_IMPORTED_MODULE_2__.ListProductComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent, _products_components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_4__.ProductDetailsComponent, _products_components_panier_panier_panier_component__WEBPACK_IMPORTED_MODULE_6__.PanierComponent, _products_components_Product_product_component__WEBPACK_IMPORTED_MODULE_7__.ProductComponent],
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__.MatSlideToggleModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule]
  });
})();

/***/ }),

/***/ 3767:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
var _class;


class HeaderComponent {}
_class = HeaderComponent;
_class.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-header"]],
  decls: 11,
  vars: 0,
  consts: [[1, "container"], [1, "content"], [1, "logo"], ["routerLink", "/products"], ["routerLink", "/cart"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "nav")(2, "div", 0)(3, "div", 1)(4, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Market");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul")(7, "li", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Products");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cart");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: ["nav[_ngcontent-%COMP%] {\n    background-color: brown; \n\n    color: burlywood; \n\n    padding: initial; \n\n}\n\n.container[_ngcontent-%COMP%] {\n    max-width: 1200px; \n\n    margin: 0 auto; \n\n    padding: 5px 20px; \n\n}\n\n.content[_ngcontent-%COMP%] {\n    display: flex; \n\n    align-items: center; \n\n}\n\n.logo[_ngcontent-%COMP%] {\n    font-size: 24px; \n\n    margin: 0; \n\n}\n\n\n\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: blueviolet; \n\n    -webkit-text-decoration: blue;\n            text-decoration: blue; \n\n    margin-right: 20px; \n\n}\n\n\n\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    -webkit-text-decoration: lightsteelblue;\n            text-decoration: lightsteelblue; \n\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCLEVBQUUsOEJBQThCO0lBQ3ZELGdCQUFnQixFQUFFLHFCQUFxQjtJQUN2QyxnQkFBZ0IsRUFBRSxtQ0FBbUM7QUFDekQ7O0FBRUE7SUFDSSxpQkFBaUIsRUFBRSxnQ0FBZ0M7SUFDbkQsY0FBYyxFQUFFLHVDQUF1QztJQUN2RCxpQkFBaUIsRUFBRSxvQ0FBb0M7QUFDM0Q7O0FBRUE7SUFDSSxhQUFhLEVBQUUsMERBQTBEO0lBQ3pFLG1CQUFtQixFQUFFLCtDQUErQztBQUN4RTs7QUFFQTtJQUNJLGVBQWUsRUFBRSw2QkFBNkI7SUFDOUMsU0FBUyxFQUFFLGdEQUFnRDtBQUMvRDs7QUFFQSxzREFBc0Q7QUFDdEQ7SUFDSSxpQkFBaUIsRUFBRSxzQkFBc0I7SUFDekMsNkJBQXFCO1lBQXJCLHFCQUFxQixFQUFFLG1EQUFtRDtJQUMxRSxrQkFBa0IsRUFBRSw2Q0FBNkM7QUFDckU7O0FBRUEsaURBQWlEO0FBQ2pEO0lBQ0ksdUNBQStCO1lBQS9CLCtCQUErQixFQUFFLDJCQUEyQjtBQUNoRSIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjsgLyogQ291bGV1ciBkZSBmb25kIGR1IGhlYWRlciAqL1xyXG4gICAgY29sb3I6IGJ1cmx5d29vZDsgLyogQ291bGV1ciBkdSB0ZXh0ZSAqL1xyXG4gICAgcGFkZGluZzogaW5pdGlhbDsgLyogRXNwYWNlbWVudCBpbnTDg8KpcmlldXIgZHUgaGVhZGVyICovXHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7IC8qIExhcmdldXIgbWF4aW1hbGUgZHUgY29udGVudSAqL1xyXG4gICAgbWFyZ2luOiAwIGF1dG87IC8qIENlbnRyZXIgbGUgY29udGVudSBob3Jpem9udGFsZW1lbnQgKi9cclxuICAgIHBhZGRpbmc6IDVweCAyMHB4OyAvKiBFc3BhY2VtZW50IGludMODwqlyaWV1ciBkdSBjb250ZW51ICovXHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7IC8qIFV0aWxpc2F0aW9uIGRlIEZsZXhib3ggcG91ciBhbGlnbmVyIGxlIGxvZ28gYXUgY2VudHJlICovXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAvKiBBbGlnbmVyIHZlcnRpY2FsZW1lbnQgbGUgY29udGVudSBhdSBjZW50cmUgKi9cclxufVxyXG5cclxuLmxvZ28ge1xyXG4gICAgZm9udC1zaXplOiAyNHB4OyAvKiBUYWlsbGUgZGUgcG9saWNlIGR1IGxvZ28gKi9cclxuICAgIG1hcmdpbjogMDsgLyogU3VwcHJpbWVyIGxlcyBtYXJnZXMgcGFyIGTDg8KpZmF1dCBkdSB0aXRyZSBoMiAqL1xyXG59XHJcblxyXG4vKiBTdHlsZXMgcG91ciBsZXMgbGllbnMgZGUgbmF2aWdhdGlvbiBzaSBuw4PCqWNlc3NhaXJlICovXHJcbm5hdiBhIHtcclxuICAgIGNvbG9yOiBibHVldmlvbGV0OyAvKiBDb3VsZXVyIGRlcyBsaWVucyAqL1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBibHVlOyAvKiBTdXBwcmltZXIgbGEgc291bGlnbmVtZW50IHBhciBkw4PCqWZhdXQgZGVzIGxpZW5zICovXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7IC8qIEVzcGFjZW1lbnQgZW50cmUgbGVzIGxpZW5zIGRlIG5hdmlnYXRpb24gKi9cclxufVxyXG5cclxuLyogU3R5bGUgcG91ciBsZXMgbGllbnMgZGUgbmF2aWdhdGlvbiBhdSBzdXJ2b2wgKi9cclxubmF2IGE6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaWdodHN0ZWVsYmx1ZTsgLyogU291bGlnbmVtZW50IGF1IHN1cnZvbCAqL1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 6247:
/*!***********************************!*\
  !*** ./src/app/panier.service.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanierService: () => (/* binding */ PanierService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class PanierService {
  constructor() {
    this.cartItems = [];
  }
  addToCart(product) {
    console.log("succ");
    const existingProduct = this.cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      // Si le produit existe déjà, mettez à jour sa quantité
      existingProduct.quantity += product.quantity;
    } else {
      // Sinon, ajoutez le produit au panier
      this.cartItems.push(product);
    }
  }
  getCartItems() {
    return this.cartItems;
  }
}
_class = PanierService;
_class.ɵfac = function PanierService_Factory(t) {
  return new (t || _class)();
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 6259:
/*!************************************!*\
  !*** ./src/app/product.service.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductService: () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var _products_components_list_product_list_product_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products/components/list-product/list-product.component */ 6087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);
var _class;



class ProductService {
  constructor(http) {
    this.http = http;
    this.products = [new _products_components_list_product_list_product_component__WEBPACK_IMPORTED_MODULE_0__.Product(1, "Produit 1", 29.99, true, "https://m.media-amazon.com/images/I/71jKDgN926L._AC_SX425_.jpg", "jgjhdchs"), new _products_components_list_product_list_product_component__WEBPACK_IMPORTED_MODULE_0__.Product(2, "Nouveau Fire TV Stick 4K Max", 19.99, false, "https://images-eu.ssl-images-amazon.com/images/G/08/kindle/journeys/6eENpRVRZ3rmSfk7/MjgzYzEwMjEt-w379._SY304_CB578475254_.jpg", "hgcqgqszcv"), new _products_components_list_product_list_product_component__WEBPACK_IMPORTED_MODULE_0__.Product(3, "Nouvel Echo Show 8", 39.99, true, "https://images-eu.ssl-images-amazon.com/images/G/08/kindle/journeys/6eENpRVRZ3rmSfk7/NmRlMWM5NzEt-w379._SY304_CB578341247_.jpg", "qhsgczgez"), new _products_components_list_product_list_product_component__WEBPACK_IMPORTED_MODULE_0__.Product(4, "Nouveau Fire TV Stick 4K", 49.99, false, "https://images-eu.ssl-images-amazon.com/images/G/08/kindle/journeys/6eENpRVRZ3rmSfk7/MTU0YzcwY2Yt-w379._SY304_CB578475228_.jpg", "sjdhvczhgevfz"), new _products_components_list_product_list_product_component__WEBPACK_IMPORTED_MODULE_0__.Product(5, "Nouveau Fire TV Stick 4K", 49.99, false, "https://images-eu.ssl-images-amazon.com/images/G/08/kindle/journeys/6eENpRVRZ3rmSfk7/MTU0YzcwY2Yt-w379._SY304_CB578475228_.jpg", "hzefkzughevzs b"), new _products_components_list_product_list_product_component__WEBPACK_IMPORTED_MODULE_0__.Product(6, "Nouveau Fire TV Stick 4K", 49.99, false, "https://images-eu.ssl-images-amazon.com/images/G/08/kindle/journeys/6eENpRVRZ3rmSfk7/MTU0YzcwY2Yt-w379._SY304_CB578475228_.jpg", "qhsgvcgevda"), new _products_components_list_product_list_product_component__WEBPACK_IMPORTED_MODULE_0__.Product(7, "Nouveau Fire TV Stick 4K", 49.99, false, "https://images-eu.ssl-images-amazon.com/images/G/08/kindle/journeys/6eENpRVRZ3rmSfk7/MTU0YzcwY2Yt-w379._SY304_CB578475228_.jpg", "hjbcuyezfbs")];
  }
  getAll() {
    return this.products;
  }
  getById(id) {
    return this.products.find(product => product.id === id);
  }
  getAllProducts() {
    return this.http.get('https://fakestoreapi.com/products');
  }
  getAllCategories() {
    return this.http.get('https://fakestoreapi.com/products/categories');
  }
  getProductByCategory(keyword) {
    return this.http.get('https://fakestoreapi.com/products/category/' + keyword);
  }
  getProductById(id) {
    return this.http.get('https://fakestoreapi.com/products/' + id);
  }
}
_class = ProductService;
_class.ɵfac = function ProductService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 443:
/*!******************************************************************!*\
  !*** ./src/app/products/components/Product/product.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductComponent: () => (/* binding */ ProductComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../product.service */ 6259);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
var _class;






function ProductComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductComponent_button_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.addButton = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Add to cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ProductComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11)(1, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProductComponent_div_14_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.amount = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductComponent_div_14_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.add());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.amount);
  }
}
class ProductComponent {
  constructor(route, productService) {
    this.route = route;
    this.productService = productService;
    this.data = {};
    this.item = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.amount = 0;
    this.addButton = false;
    this.id = this.route.snapshot.paramMap.get("id");
    console.log(this.id);
  }
  ngOnInit() {
    /*const id:number=this.route.snapshot.params['id'];
    this.product=this.productService.getById(+id);*/
    this.getProduct();
  }
  getProduct() {
    this.productService.getProductById(this.id).subscribe(res => {
      this.data = res;
    });
  }
  add() {
    this.item.emit({
      item: this.data,
      quantity: this.amount
    });
  }
}
_class = ProductComponent;
_class.ɵfac = function ProductComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-product"]],
  inputs: {
    data: "data"
  },
  outputs: {
    item: "item"
  },
  decls: 15,
  vars: 7,
  consts: [[1, "container", "text-center", "my-2"], [1, "card", 2, "display", "flex"], [2, "flex", "1"], [1, "card-title"], [2, "max-width", "30%", "height", "auto", 3, "src", "alt"], [1, "card-body"], [1, "card-text"], [1, "px-3", "mb-2", "d-flex", "justify-content-between", "align-datas-center"], ["class", "btn btn-success", 3, "click", 4, "ngIf"], ["class", "d-flex w-50", 4, "ngIf"], [1, "btn", "btn-success", 3, "click"], [1, "d-flex", "w-50"], ["type", "number", 1, "from", "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-danger", 3, "click"]],
  template: function ProductComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2)(7, "div", 5)(8, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ProductComponent_button_13_Template, 2, 0, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ProductComponent_div_14_Template, 4, 1, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.data.name, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", ctx.data.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.description);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Prix : \"", ctx.data.price, "\"");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.addButton);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.addButton);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6087:
/*!****************************************************************************!*\
  !*** ./src/app/products/components/list-product/list-product.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListProductComponent: () => (/* binding */ ListProductComponent),
/* harmony export */   Product: () => (/* binding */ Product)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../product.service */ 6259);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _panier_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../panier.service */ 6247);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
var _class;







function ListProductComponent_option_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", option_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](option_r2);
  }
}
function ListProductComponent_div_35_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ListProductComponent_div_35_button_12_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.addButton = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Add To Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ListProductComponent_div_35_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 39)(1, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ListProductComponent_div_35_div_13_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.amount = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ListProductComponent_div_35_div_13_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const product_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.addToCart(product_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r5.amount);
  }
}
const _c0 = function (a0) {
  return {
    color: a0
  };
};
const _c1 = function (a1) {
  return ["/details", a1];
};
function ListProductComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27)(1, "div", 28)(2, "h5", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h5", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ListProductComponent_div_35_button_12_Template, 2, 0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ListProductComponent_div_35_div_13_Template, 4, 1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "D\u00E9tails");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const product_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", product_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("alt", product_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Price : ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](9, 9, product_r3.price, "USD", "symbol"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](13, _c0, ctx_r1.getColor(product_r3)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.getState(product_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.addButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.addButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](15, _c1, product_r3.id));
  }
}
class Product {
  constructor(id, name, price, availability, imageUrl, description) {
    this.quantity = 1;
    this.id = id;
    this.name = name;
    this.price = price;
    this.availability = availability;
    this.imageUrl = imageUrl;
    this.description = description;
  }
}
class ListProductComponent {
  getColor(product) {
    return product.availability ? "green" : "red";
  }
  getState(product) {
    if (product.availability === true) {
      return "En_Stock";
    } else {
      return "En_rupture_de_Stock";
    }
  }
  constructor(productService, router, penierservice) {
    this.productService = productService;
    this.router = router;
    this.penierservice = penierservice;
    this.products = this.productService.getAll();
    this.produ = [];
    this.categories = [];
    this.cart = [];
    this.data = {};
    this.item = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.addButton = false;
    this.amount = 0;
  }
  ngOnInit() {
    //this.products=this.productService.products;
    this.getProducts();
    this.getCategories();
  }
  goToDetails(productId) {
    this.router.navigate(["products", productId]);
  }
  getProducts() {
    this.productService.getAllProducts().subscribe(res => {
      this.produ = res;
    });
  }
  getCategories() {
    this.productService.getAllCategories().subscribe(res => {
      this.categories = res;
    });
  }
  filtercategory(event) {
    let value = event.target.value;
    if (value == "all") {
      this.getProducts();
    }
    this.getProductsByCategory(value);
    console.log(value);
  }
  getProductsByCategory(keyword) {
    this.productService.getProductByCategory(keyword).subscribe(res => {
      this.produ = res;
    });
  }
  searchProducts() {
    if (!this.searchTerm) {
      this.getProducts();
    } else {
      this.filteredProducts = this.produ.filter(product => product.title.toLowerCase().includes(this.searchTerm.toLowerCase()));
    }
  }
  addToCart(event) {
    if ("panier" in localStorage) {
      this.cart = JSON.parse(localStorage.getItem("panier"));
      this.cart.push(event);
      localStorage.setItem("panier", JSON.stringify(this.cart));
    } else {
      this.cart = [event];
      localStorage.setItem("panier", JSON.stringify(this.cart));
    }
    console.log(event);
  }
}
_class = ListProductComponent;
_class.ɵfac = function ListProductComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_panier_service__WEBPACK_IMPORTED_MODULE_1__.PanierService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-list-product"]],
  inputs: {
    data: "data"
  },
  outputs: {
    item: "item"
  },
  decls: 36,
  vars: 3,
  consts: [[1, "navbar", "navbar-light", 2, "background-color", "#e3f2fd"], ["href", "/panier", 1, "navbar-brand"], [1, "ml-auto"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarText", "aria-controls", "navbarText", "aria-expanded", "true", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarText", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active"], ["href", "/products", 1, "nav-link"], [1, "sr-only"], [1, "nav-item"], ["href", "/panier", 1, "nav-link"], ["href", "#", 1, "nav-link"], [1, "navbar-text"], ["mt-4", "", 1, "box"], [1, "my-2"], [1, "my-1", "w-25"], [1, "form-control", 3, "change"], ["value", "all", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "input-group", "mb-3"], ["type", "text", "placeholder", "Rechercher un produit", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "row"], ["class", "col-md-3 col-sm-4", 4, "ngFor", "ngForOf"], [3, "value"], [1, "col-md-3", "col-sm-4"], [1, "card", "mb-4"], [1, "card-title"], ["width", "200", "height", "200", 1, "card-img-top", 3, "src", "alt"], [1, "card-body"], [1, "form-group"], [1, "card-text"], [3, "ngStyle"], ["class", "btn btn-success", 3, "click", 4, "ngIf"], ["class", "d-flex w-50", 4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", "float-right", 3, "routerLink"], [1, "btn", "btn-success", 3, "click"], [1, "d-flex", "w-50"], ["type", "number", 1, "form", "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-danger", 3, "click"]],
  template: function ListProductComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0)(1, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2)(4, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5)(7, "ul", 6)(8, "li", 7)(9, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Home ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "(current)");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "li", 10)(14, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Cart");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "li", 10)(17, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Pricing");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " Navbar text with an inline element ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 14)(22, "div", 15)(23, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "cathegories:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "select", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ListProductComponent_Template_select_change_25_listener($event) {
        return ctx.filtercategory($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "option", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "All");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, ListProductComponent_option_28_Template, 2, 2, "option", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 20)(30, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ListProductComponent_Template_input_ngModelChange_30_listener($event) {
        return ctx.searchTerm = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 22)(32, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ListProductComponent_Template_button_click_32_listener() {
        return ctx.searchProducts();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Rechercher");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, ListProductComponent_div_35_Template, 16, 17, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.categories);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.searchTerm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.produ);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CurrencyPipe],
  styles: ["mdb-navbar[_ngcontent-%COMP%]   .navbar.navbar-1[_ngcontent-%COMP%]   .navbar-toggler-icon[_ngcontent-%COMP%] {\n  background-image: url('https://mdbootstrap.com/img/svg/hamburger6.svg?color=000')}\n.navbar-toggler-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvZHVjdHMvY29tcG9uZW50cy9saXN0LXByb2R1Y3QvbGlzdC1wcm9kdWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpRkFBaUY7QUFDbkY7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsibWRiLW5hdmJhciAubmF2YmFyLm5hdmJhci0xIC5uYXZiYXItdG9nZ2xlci1pY29uIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWRib290c3RyYXAuY29tL2ltZy9zdmcvaGFtYnVyZ2VyNi5zdmc/Y29sb3I9MDAwJyl9XHJcbi5uYXZiYXItdG9nZ2xlci1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 5475:
/*!***********************************************************************!*\
  !*** ./src/app/products/components/panier/panier/panier.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanierComponent: () => (/* binding */ PanierComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);
var _class;




function PanierComponent_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td")(8, "div", 10)(9, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PanierComponent_tr_23_Template_input_ngModelChange_11_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const item_r1 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](item_r1.quality = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td")(17, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r1.item.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.item.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r1.item.price, " L.E");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r1.quality);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r1.item.price * item_r1.quantity, " L.E");
  }
}
class PanierComponent {
  constructor() {
    this.cart = [];
    this.data = {};
    this.item = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  ngOnInit() {
    this.getCartProducts();
  }
  getCartProducts() {
    if ("panier" in localStorage) {
      this.cart = JSON.parse(localStorage.getItem("panier"));
    }
    console.log(this.cart);
  }
}
_class = PanierComponent;
_class.ɵfac = function PanierComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-panier"]],
  inputs: {
    data: "data"
  },
  outputs: {
    item: "item"
  },
  decls: 35,
  vars: 1,
  consts: [[1, "cartBox"], [1, "text-danger"], [1, "headCart"], [1, "lead"], [1, "text-danger", "card-header"], [1, "table", "table-striped"], [2, "width", "25%"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-success"], ["alt", "", 3, "src"], [1, "quantity"], [1, "btn", "btn-dark"], ["type", "number", ")]", "", "min", "1", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-danger"]],
  template: function PanierComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Shopping Cart");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "You have ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " items in your cart");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "clear shopping");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 5)(12, "thead")(13, "tr")(14, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Price");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Quantity");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Total");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, PanierComponent_tr_23_Template, 19, 5, "tr", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tfoot")(25, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "th")(27, "th")(28, "th")(29, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Total: 1500");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th")(33, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Order Now");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cart);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel],
  styles: [".product-card[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  padding: 10px;\n  margin: 10px;\n}\n\n.product-image[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  margin-right: 20px;\n}\n\n.product-details[_ngcontent-%COMP%] {\n  flex-grow: 2;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvZHVjdHMvY29tcG9uZW50cy9wYW5pZXIvcGFuaWVyL3Bhbmllci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3QtY2FyZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLnByb2R1Y3QtaW1hZ2Uge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuLnByb2R1Y3QtZGV0YWlscyB7XHJcbiAgZmxleC1ncm93OiAyO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 7887:
/*!**********************************************************************************!*\
  !*** ./src/app/products/components/product-details/product-details.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductDetailsComponent: () => (/* binding */ ProductDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../product.service */ 6259);
var _class;




class ProductDetailsComponent {
  constructor(route, productService) {
    this.route = route;
    this.productService = productService;
    this.data = {};
    this.item = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.id = this.route.snapshot.paramMap.get("id");
    console.log(this.id);
  }
  ngOnInit() {
    /*const id:number=this.route.snapshot.params['id'];
    this.product=this.productService.getById(+id);*/
    this.getProduct();
  }
  getProduct() {
    this.productService.getProductById(this.id).subscribe(res => {
      this.data = res;
    });
  }
}
_class = ProductDetailsComponent;
_class.ɵfac = function ProductDetailsComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-product-details"]],
  inputs: {
    data: "data"
  },
  outputs: {
    item: "item"
  },
  decls: 12,
  vars: 5,
  consts: [[1, "container", "text-center", "my-2"], [1, "card", 2, "display", "flex"], [2, "flex", "1"], [1, "card-title"], [2, "max-width", "30%", "height", "auto", 3, "src", "alt"], [1, "card-body"], [1, "card-text"]],
  template: function ProductDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2)(7, "div", 5)(8, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.data.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", ctx.data.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.description);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Prix : \"", ctx.data.price, "\"");
    }
  },
  styles: [".product-card[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  padding: 10px;\n  margin: 10px;\n}\n\n.product-image[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  margin-right: 20px;\n}\n\n.product-details[_ngcontent-%COMP%] {\n  flex-grow: 2;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvZHVjdHMvY29tcG9uZW50cy9wcm9kdWN0LWRldGFpbHMvcHJvZHVjdC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdC1jYXJkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4ucHJvZHVjdC1pbWFnZSB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4ucHJvZHVjdC1kZXRhaWxzIHtcclxuICBmbGV4LWdyb3c6IDI7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map