(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-section-main-section-module"],{

/***/ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js ***!
  \*************************************************************************/
/*! exports provided: ɵb, ɵa, NgxPaginationModule, PaginationService, PaginationControlsComponent, PaginationControlsDirective, PaginatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return DEFAULT_STYLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DEFAULT_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPaginationModule", function() { return NgxPaginationModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationService", function() { return PaginationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationControlsComponent", function() { return PaginationControlsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationControlsDirective", function() { return PaginationControlsDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatePipe", function() { return PaginatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function PaginationControlsComponent_ul_2_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function PaginationControlsComponent_ul_2_li_1_a_1_Template_a_keyup_enter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r0.previous(); })("click", function PaginationControlsComponent_ul_2_li_1_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r0.previous(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r5.previousLabel + " " + ctx_r5.screenReaderPageLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.previousLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.screenReaderPageLabel);
} }
function PaginationControlsComponent_ul_2_li_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.previousLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.screenReaderPageLabel);
} }
function PaginationControlsComponent_ul_2_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationControlsComponent_ul_2_li_1_a_1_Template, 4, 3, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaginationControlsComponent_ul_2_li_1_span_2_Template, 4, 2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", _r0.isFirstPage());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", 1 < _r0.getCurrent());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.isFirstPage());
} }
function PaginationControlsComponent_ul_2_li_4_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function PaginationControlsComponent_ul_2_li_4_a_1_Template_a_keyup_enter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); var page_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r0.setCurrent(page_r10.value); })("click", function PaginationControlsComponent_ul_2_li_4_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); var page_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r0.setCurrent(page_r10.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var page_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r11.screenReaderPageLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r10.label === "..." ? page_r10.label : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 2, page_r10.label, ""));
} }
function PaginationControlsComponent_ul_2_li_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var page_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r12.screenReaderCurrentLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r10.label === "..." ? page_r10.label : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 2, page_r10.label, ""));
} }
function PaginationControlsComponent_ul_2_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationControlsComponent_ul_2_li_4_a_1_Template, 6, 5, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaginationControlsComponent_ul_2_li_4_ng_container_2_Template, 6, 5, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var page_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("current", _r0.getCurrent() === page_r10.value)("ellipsis", page_r10.label === "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.getCurrent() !== page_r10.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.getCurrent() === page_r10.value);
} }
function PaginationControlsComponent_ul_2_li_5_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function PaginationControlsComponent_ul_2_li_5_a_1_Template_a_keyup_enter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r0.next(); })("click", function PaginationControlsComponent_ul_2_li_5_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r0.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r20.nextLabel + " " + ctx_r20.screenReaderPageLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r20.nextLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r20.screenReaderPageLabel);
} }
function PaginationControlsComponent_ul_2_li_5_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r21.nextLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r21.screenReaderPageLabel);
} }
function PaginationControlsComponent_ul_2_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationControlsComponent_ul_2_li_5_a_1_Template, 4, 3, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaginationControlsComponent_ul_2_li_5_span_2_Template, 4, 2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", _r0.isLastPage());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r0.isLastPage());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.isLastPage());
} }
function PaginationControlsComponent_ul_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationControlsComponent_ul_2_li_1_Template, 3, 4, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PaginationControlsComponent_ul_2_li_4_Template, 3, 6, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PaginationControlsComponent_ul_2_li_5_Template, 3, 4, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("responsive", ctx_r1.responsive);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.screenReaderPaginationLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.directionLinks);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _r0.getCurrent(), " / ", _r0.getLastPage(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r0.pages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.directionLinks);
} }
var PaginationService = /** @class */ (function () {
    function PaginationService() {
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.instances = {};
        this.DEFAULT_ID = 'DEFAULT_PAGINATION_ID';
    }
    PaginationService.prototype.defaultId = function () { return this.DEFAULT_ID; };
    /**
     * Register a PaginationInstance with this service. Returns a
     * boolean value signifying whether the instance is new or
     * updated (true = new or updated, false = unchanged).
     */
    PaginationService.prototype.register = function (instance) {
        if (instance.id == null) {
            instance.id = this.DEFAULT_ID;
        }
        if (!this.instances[instance.id]) {
            this.instances[instance.id] = instance;
            return true;
        }
        else {
            return this.updateInstance(instance);
        }
    };
    /**
     * Check each property of the instance and update any that have changed. Return
     * true if any changes were made, else return false.
     */
    PaginationService.prototype.updateInstance = function (instance) {
        var changed = false;
        for (var prop in this.instances[instance.id]) {
            if (instance[prop] !== this.instances[instance.id][prop]) {
                this.instances[instance.id][prop] = instance[prop];
                changed = true;
            }
        }
        return changed;
    };
    /**
     * Returns the current page number.
     */
    PaginationService.prototype.getCurrentPage = function (id) {
        if (this.instances[id]) {
            return this.instances[id].currentPage;
        }
    };
    /**
     * Sets the current page number.
     */
    PaginationService.prototype.setCurrentPage = function (id, page) {
        if (this.instances[id]) {
            var instance = this.instances[id];
            var maxPage = Math.ceil(instance.totalItems / instance.itemsPerPage);
            if (page <= maxPage && 1 <= page) {
                this.instances[id].currentPage = page;
                this.change.emit(id);
            }
        }
    };
    /**
     * Sets the value of instance.totalItems
     */
    PaginationService.prototype.setTotalItems = function (id, totalItems) {
        if (this.instances[id] && 0 <= totalItems) {
            this.instances[id].totalItems = totalItems;
            this.change.emit(id);
        }
    };
    /**
     * Sets the value of instance.itemsPerPage.
     */
    PaginationService.prototype.setItemsPerPage = function (id, itemsPerPage) {
        if (this.instances[id]) {
            this.instances[id].itemsPerPage = itemsPerPage;
            this.change.emit(id);
        }
    };
    /**
     * Returns a clone of the pagination instance object matching the id. If no
     * id specified, returns the instance corresponding to the default id.
     */
    PaginationService.prototype.getInstance = function (id) {
        if (id === void 0) { id = this.DEFAULT_ID; }
        if (this.instances[id]) {
            return this.clone(this.instances[id]);
        }
        return {};
    };
    /**
     * Perform a shallow clone of an object.
     */
    PaginationService.prototype.clone = function (obj) {
        var target = {};
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                target[i] = obj[i];
            }
        }
        return target;
    };
PaginationService.ɵfac = function PaginationService_Factory(t) { return new (t || PaginationService)(); };
PaginationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PaginationService, factory: function (t) { return PaginationService.ɵfac(t); } });

    return PaginationService;
}());

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var LARGE_NUMBER = Number.MAX_SAFE_INTEGER;
var PaginatePipe = /** @class */ (function () {
    function PaginatePipe(service) {
        this.service = service;
        // store the values from the last time the pipe was invoked
        this.state = {};
    }
    PaginatePipe.prototype.transform = function (collection, args) {
        // When an observable is passed through the AsyncPipe, it will output
        // `null` until the subscription resolves. In this case, we want to
        // use the cached data from the `state` object to prevent the NgFor
        // from flashing empty until the real values arrive.
        if (!(collection instanceof Array)) {
            var _id = args.id || this.service.defaultId();
            if (this.state[_id]) {
                return this.state[_id].slice;
            }
            else {
                return collection;
            }
        }
        var serverSideMode = args.totalItems && args.totalItems !== collection.length;
        var instance = this.createInstance(collection, args);
        var id = instance.id;
        var start, end;
        var perPage = instance.itemsPerPage;
        var emitChange = this.service.register(instance);
        if (!serverSideMode && collection instanceof Array) {
            perPage = +perPage || LARGE_NUMBER;
            start = (instance.currentPage - 1) * perPage;
            end = start + perPage;
            var isIdentical = this.stateIsIdentical(id, collection, start, end);
            if (isIdentical) {
                return this.state[id].slice;
            }
            else {
                var slice = collection.slice(start, end);
                this.saveState(id, collection, slice, start, end);
                this.service.change.emit(id);
                return slice;
            }
        }
        else {
            if (emitChange) {
                this.service.change.emit(id);
            }
            // save the state for server-side collection to avoid null
            // flash as new data loads.
            this.saveState(id, collection, collection, start, end);
            return collection;
        }
    };
    /**
     * Create an PaginationInstance object, using defaults for any optional properties not supplied.
     */
    PaginatePipe.prototype.createInstance = function (collection, config) {
        this.checkConfig(config);
        return {
            id: config.id != null ? config.id : this.service.defaultId(),
            itemsPerPage: +config.itemsPerPage || 0,
            currentPage: +config.currentPage || 1,
            totalItems: +config.totalItems || collection.length
        };
    };
    /**
     * Ensure the argument passed to the filter contains the required properties.
     */
    PaginatePipe.prototype.checkConfig = function (config) {
        var required = ['itemsPerPage', 'currentPage'];
        var missing = required.filter(function (prop) { return !(prop in config); });
        if (0 < missing.length) {
            throw new Error("PaginatePipe: Argument is missing the following required properties: " + missing.join(', '));
        }
    };
    /**
     * To avoid returning a brand new array each time the pipe is run, we store the state of the sliced
     * array for a given id. This means that the next time the pipe is run on this collection & id, we just
     * need to check that the collection, start and end points are all identical, and if so, return the
     * last sliced array.
     */
    PaginatePipe.prototype.saveState = function (id, collection, slice, start, end) {
        this.state[id] = {
            collection: collection,
            size: collection.length,
            slice: slice,
            start: start,
            end: end
        };
    };
    /**
     * For a given id, returns true if the collection, size, start and end values are identical.
     */
    PaginatePipe.prototype.stateIsIdentical = function (id, collection, start, end) {
        var state = this.state[id];
        if (!state) {
            return false;
        }
        var isMetaDataIdentical = state.size === collection.length &&
            state.start === start &&
            state.end === end;
        if (!isMetaDataIdentical) {
            return false;
        }
        return state.slice.every(function (element, index) { return element === collection[start + index]; });
    };
    PaginatePipe = __decorate$1([ __metadata("design:paramtypes", [PaginationService])
    ], PaginatePipe);
PaginatePipe.ɵfac = function PaginatePipe_Factory(t) { return new (t || PaginatePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PaginationService)); };
PaginatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "paginate", type: PaginatePipe, pure: false });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginatePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'paginate',
                pure: false
            }]
    }], function () { return [{ type: PaginationService }]; }, null); })();
    return PaginatePipe;
}());

/**
 * The default template and styles for the pagination links are borrowed directly
 * from Zurb Foundation 6: http://foundation.zurb.com/sites/docs/pagination.html
 */
var DEFAULT_TEMPLATE = "\n    <pagination-template  #p=\"paginationApi\"\n                         [id]=\"id\"\n                         [maxSize]=\"maxSize\"\n                         (pageChange)=\"pageChange.emit($event)\"\n                         (pageBoundsCorrection)=\"pageBoundsCorrection.emit($event)\">\n    <ul class=\"ngx-pagination\" \n        role=\"navigation\" \n        [attr.aria-label]=\"screenReaderPaginationLabel\" \n        [class.responsive]=\"responsive\"\n        *ngIf=\"!(autoHide && p.pages.length <= 1)\">\n\n        <li class=\"pagination-previous\" [class.disabled]=\"p.isFirstPage()\" *ngIf=\"directionLinks\"> \n            <a tabindex=\"0\" *ngIf=\"1 < p.getCurrent()\" (keyup.enter)=\"p.previous()\" (click)=\"p.previous()\" [attr.aria-label]=\"previousLabel + ' ' + screenReaderPageLabel\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isFirstPage()\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li> \n\n        <li class=\"small-screen\">\n            {{ p.getCurrent() }} / {{ p.getLastPage() }}\n        </li>\n\n        <li [class.current]=\"p.getCurrent() === page.value\" \n            [class.ellipsis]=\"page.label === '...'\"\n            *ngFor=\"let page of p.pages\">\n            <a tabindex=\"0\" (keyup.enter)=\"p.setCurrent(page.value)\" (click)=\"p.setCurrent(page.value)\" *ngIf=\"p.getCurrent() !== page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderPageLabel }} </span>\n                <span>{{ (page.label === '...') ? page.label : (page.label | number:'') }}</span>\n            </a>\n            <ng-container *ngIf=\"p.getCurrent() === page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderCurrentLabel }} </span>\n                <span>{{ (page.label === '...') ? page.label : (page.label | number:'') }}</span> \n            </ng-container>\n        </li>\n\n        <li class=\"pagination-next\" [class.disabled]=\"p.isLastPage()\" *ngIf=\"directionLinks\">\n            <a tabindex=\"0\" *ngIf=\"!p.isLastPage()\" (keyup.enter)=\"p.next()\" (click)=\"p.next()\" [attr.aria-label]=\"nextLabel + ' ' + screenReaderPageLabel\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isLastPage()\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n    </ul>\n    </pagination-template>\n    ";
var DEFAULT_STYLES = "\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\u00AB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\u00BB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n.ngx-pagination .small-screen {\n  display: none; }\n@media screen and (max-width: 601px) {\n  .ngx-pagination.responsive .small-screen {\n    display: inline-block; } \n  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {\n    display: none; }\n}\n  ";

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function coerceToBoolean(input) {
    return !!input && input !== 'false';
}
/**
 * The default pagination controls component. Actually just a default implementation of a custom template.
 */
var PaginationControlsComponent = /** @class */ (function () {
    function PaginationControlsComponent() {
        this.maxSize = 7;
        this.previousLabel = 'Previous';
        this.nextLabel = 'Next';
        this.screenReaderPaginationLabel = 'Pagination';
        this.screenReaderPageLabel = 'page';
        this.screenReaderCurrentLabel = "You're on page";
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pageBoundsCorrection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._directionLinks = true;
        this._autoHide = false;
        this._responsive = false;
    }
    Object.defineProperty(PaginationControlsComponent.prototype, "directionLinks", {
        get: function () {
            return this._directionLinks;
        },
        set: function (value) {
            this._directionLinks = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationControlsComponent.prototype, "autoHide", {
        get: function () {
            return this._autoHide;
        },
        set: function (value) {
            this._autoHide = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationControlsComponent.prototype, "responsive", {
        get: function () {
            return this._responsive;
        },
        set: function (value) {
            this._responsive = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "id", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", Number)
    ], PaginationControlsComponent.prototype, "maxSize", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", Boolean),
        __metadata$1("design:paramtypes", [Boolean])
    ], PaginationControlsComponent.prototype, "directionLinks", null);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", Boolean),
        __metadata$1("design:paramtypes", [Boolean])
    ], PaginationControlsComponent.prototype, "autoHide", null);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", Boolean),
        __metadata$1("design:paramtypes", [Boolean])
    ], PaginationControlsComponent.prototype, "responsive", null);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "previousLabel", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "nextLabel", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "screenReaderPaginationLabel", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "screenReaderPageLabel", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "screenReaderCurrentLabel", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata$1("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PaginationControlsComponent.prototype, "pageChange", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata$1("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PaginationControlsComponent.prototype, "pageBoundsCorrection", void 0);
PaginationControlsComponent.ɵfac = function PaginationControlsComponent_Factory(t) { return new (t || PaginationControlsComponent)(); };
PaginationControlsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaginationControlsComponent, selectors: [["pagination-controls"]], inputs: { maxSize: "maxSize", previousLabel: "previousLabel", nextLabel: "nextLabel", screenReaderPaginationLabel: "screenReaderPaginationLabel", screenReaderPageLabel: "screenReaderPageLabel", screenReaderCurrentLabel: "screenReaderCurrentLabel", directionLinks: "directionLinks", autoHide: "autoHide", responsive: "responsive", id: "id" }, outputs: { pageChange: "pageChange", pageBoundsCorrection: "pageBoundsCorrection" }, decls: 3, vars: 3, consts: [[3, "id", "maxSize", "pageChange", "pageBoundsCorrection"], ["p", "paginationApi"], ["class", "ngx-pagination", "role", "navigation", 3, "responsive", 4, "ngIf"], ["role", "navigation", 1, "ngx-pagination"], ["class", "pagination-previous", 3, "disabled", 4, "ngIf"], [1, "small-screen"], [3, "current", "ellipsis", 4, "ngFor", "ngForOf"], ["class", "pagination-next", 3, "disabled", 4, "ngIf"], [1, "pagination-previous"], ["tabindex", "0", 3, "keyup.enter", "click", 4, "ngIf"], [4, "ngIf"], ["tabindex", "0", 3, "keyup.enter", "click"], [1, "show-for-sr"], [1, "pagination-next"]], template: function PaginationControlsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pagination-template", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function PaginationControlsComponent_Template_pagination_template_pageChange_0_listener($event) { return ctx.pageChange.emit($event); })("pageBoundsCorrection", function PaginationControlsComponent_Template_pagination_template_pageBoundsCorrection_0_listener($event) { return ctx.pageBoundsCorrection.emit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaginationControlsComponent_ul_2_Template, 6, 8, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id)("maxSize", ctx.maxSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.autoHide && _r0.pages.length <= 1));
    } }, directives: function () { return [PaginationControlsDirective, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]]; }, pipes: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]]; }, styles: ["\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\u00AB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\u00BB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n.ngx-pagination .small-screen {\n  display: none; }\n@media screen and (max-width: 601px) {\n  .ngx-pagination.responsive .small-screen {\n    display: inline-block; } \n  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {\n    display: none; }\n}\n  "], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationControlsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'pagination-controls',
                template: DEFAULT_TEMPLATE,
                styles: [DEFAULT_STYLES],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, { maxSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], previousLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nextLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], screenReaderPaginationLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], screenReaderPageLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], screenReaderCurrentLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pageChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], pageBoundsCorrection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], directionLinks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], autoHide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], responsive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
    return PaginationControlsComponent;
}());

var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * This directive is what powers all pagination controls components, including the default one.
 * It exposes an API which is hooked up to the PaginationService to keep the PaginatePipe in sync
 * with the pagination controls.
 */
var PaginationControlsDirective = /** @class */ (function () {
    function PaginationControlsDirective(service, changeDetectorRef) {
        var _this = this;
        this.service = service;
        this.changeDetectorRef = changeDetectorRef;
        this.maxSize = 7;
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pageBoundsCorrection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pages = [];
        this.changeSub = this.service.change
            .subscribe(function (id) {
            if (_this.id === id) {
                _this.updatePageLinks();
                _this.changeDetectorRef.markForCheck();
                _this.changeDetectorRef.detectChanges();
            }
        });
    }
    PaginationControlsDirective.prototype.ngOnInit = function () {
        if (this.id === undefined) {
            this.id = this.service.defaultId();
        }
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnChanges = function (changes) {
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnDestroy = function () {
        this.changeSub.unsubscribe();
    };
    /**
     * Go to the previous page
     */
    PaginationControlsDirective.prototype.previous = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() - 1);
    };
    /**
     * Go to the next page
     */
    PaginationControlsDirective.prototype.next = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() + 1);
    };
    /**
     * Returns true if current page is first page
     */
    PaginationControlsDirective.prototype.isFirstPage = function () {
        return this.getCurrent() === 1;
    };
    /**
     * Returns true if current page is last page
     */
    PaginationControlsDirective.prototype.isLastPage = function () {
        return this.getLastPage() === this.getCurrent();
    };
    /**
     * Set the current page number.
     */
    PaginationControlsDirective.prototype.setCurrent = function (page) {
        this.pageChange.emit(page);
    };
    /**
     * Get the current page number.
     */
    PaginationControlsDirective.prototype.getCurrent = function () {
        return this.service.getCurrentPage(this.id);
    };
    /**
     * Returns the last page number
     */
    PaginationControlsDirective.prototype.getLastPage = function () {
        var inst = this.service.getInstance(this.id);
        if (inst.totalItems < 1) {
            // when there are 0 or fewer (an error case) items, there are no "pages" as such,
            // but it makes sense to consider a single, empty page as the last page.
            return 1;
        }
        return Math.ceil(inst.totalItems / inst.itemsPerPage);
    };
    PaginationControlsDirective.prototype.getTotalItems = function () {
        return this.service.getInstance(this.id).totalItems;
    };
    PaginationControlsDirective.prototype.checkValidId = function () {
        if (this.service.getInstance(this.id).id == null) {
            console.warn("PaginationControlsDirective: the specified id \"" + this.id + "\" does not match any registered PaginationInstance");
        }
    };
    /**
     * Updates the page links and checks that the current page is valid. Should run whenever the
     * PaginationService.change stream emits a value matching the current ID, or when any of the
     * input values changes.
     */
    PaginationControlsDirective.prototype.updatePageLinks = function () {
        var _this = this;
        var inst = this.service.getInstance(this.id);
        var correctedCurrentPage = this.outOfBoundCorrection(inst);
        if (correctedCurrentPage !== inst.currentPage) {
            setTimeout(function () {
                _this.pageBoundsCorrection.emit(correctedCurrentPage);
                _this.pages = _this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, _this.maxSize);
            });
        }
        else {
            this.pages = this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, this.maxSize);
        }
    };
    /**
     * Checks that the instance.currentPage property is within bounds for the current page range.
     * If not, return a correct value for currentPage, or the current value if OK.
     */
    PaginationControlsDirective.prototype.outOfBoundCorrection = function (instance) {
        var totalPages = Math.ceil(instance.totalItems / instance.itemsPerPage);
        if (totalPages < instance.currentPage && 0 < totalPages) {
            return totalPages;
        }
        else if (instance.currentPage < 1) {
            return 1;
        }
        return instance.currentPage;
    };
    /**
     * Returns an array of Page objects to use in the pagination controls.
     */
    PaginationControlsDirective.prototype.createPageArray = function (currentPage, itemsPerPage, totalItems, paginationRange) {
        // paginationRange could be a string if passed from attribute, so cast to number.
        paginationRange = +paginationRange;
        var pages = [];
        var totalPages = Math.ceil(totalItems / itemsPerPage);
        var halfWay = Math.ceil(paginationRange / 2);
        var isStart = currentPage <= halfWay;
        var isEnd = totalPages - halfWay < currentPage;
        var isMiddle = !isStart && !isEnd;
        var ellipsesNeeded = paginationRange < totalPages;
        var i = 1;
        while (i <= totalPages && i <= paginationRange) {
            var label = void 0;
            var pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
            var openingEllipsesNeeded = (i === 2 && (isMiddle || isEnd));
            var closingEllipsesNeeded = (i === paginationRange - 1 && (isMiddle || isStart));
            if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
                label = '...';
            }
            else {
                label = pageNumber;
            }
            pages.push({
                label: label,
                value: pageNumber
            });
            i++;
        }
        return pages;
    };
    /**
     * Given the position in the sequence of pagination links [i],
     * figure out what page number corresponds to that position.
     */
    PaginationControlsDirective.prototype.calculatePageNumber = function (i, currentPage, paginationRange, totalPages) {
        var halfWay = Math.ceil(paginationRange / 2);
        if (i === paginationRange) {
            return totalPages;
        }
        else if (i === 1) {
            return i;
        }
        else if (paginationRange < totalPages) {
            if (totalPages - halfWay < currentPage) {
                return totalPages - paginationRange + i;
            }
            else if (halfWay < currentPage) {
                return currentPage - halfWay + i;
            }
            else {
                return i;
            }
        }
        else {
            return i;
        }
    };
    __decorate$3([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$2("design:type", String)
    ], PaginationControlsDirective.prototype, "id", void 0);
    __decorate$3([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$2("design:type", Number)
    ], PaginationControlsDirective.prototype, "maxSize", void 0);
    __decorate$3([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata$2("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PaginationControlsDirective.prototype, "pageChange", void 0);
    __decorate$3([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata$2("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PaginationControlsDirective.prototype, "pageBoundsCorrection", void 0);
    PaginationControlsDirective = __decorate$3([ __metadata$2("design:paramtypes", [PaginationService,
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], PaginationControlsDirective);
PaginationControlsDirective.ɵfac = function PaginationControlsDirective_Factory(t) { return new (t || PaginationControlsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
PaginationControlsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: PaginationControlsDirective, selectors: [["pagination-template"], ["", "pagination-template", ""]], inputs: { maxSize: "maxSize", id: "id" }, outputs: { pageChange: "pageChange", pageBoundsCorrection: "pageBoundsCorrection" }, exportAs: ["paginationApi"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationControlsDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'pagination-template,[pagination-template]',
                exportAs: 'paginationApi'
            }]
    }], function () { return [{ type: PaginationService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { maxSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pageChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], pageBoundsCorrection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
    return PaginationControlsDirective;
}());

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NgxPaginationModule = /** @class */ (function () {
    function NgxPaginationModule() {
    }
NgxPaginationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgxPaginationModule });
NgxPaginationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NgxPaginationModule_Factory(t) { return new (t || NgxPaginationModule)(); }, providers: [PaginationService], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxPaginationModule, { declarations: function () { return [PaginatePipe,
        PaginationControlsComponent,
        PaginationControlsDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]; }, exports: function () { return [PaginatePipe,
        PaginationControlsComponent,
        PaginationControlsDirective]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxPaginationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                declarations: [
                    PaginatePipe,
                    PaginationControlsComponent,
                    PaginationControlsDirective
                ],
                providers: [PaginationService],
                exports: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective]
            }]
    }], function () { return []; }, null); })();
    return NgxPaginationModule;
}());

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXBhZ2luYXRpb24uanMiLCJzb3VyY2VzIjpbIm5neC1wYWdpbmF0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FLTztBQUNQOzs7Ozs7Ozs7MkVBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFTb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFLTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dEQVk0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgTmdNb2R1bGUsIE91dHB1dCwgUGlwZSwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbnZhciBQYWdpbmF0aW9uU2VydmljZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFBhZ2luYXRpb25TZXJ2aWNlKCkge1xyXG4gICAgICAgIHRoaXMuY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgICAgIHRoaXMuaW5zdGFuY2VzID0ge307XHJcbiAgICAgICAgdGhpcy5ERUZBVUxUX0lEID0gJ0RFRkFVTFRfUEFHSU5BVElPTl9JRCc7XHJcbiAgICB9XHJcbiAgICBQYWdpbmF0aW9uU2VydmljZS5wcm90b3R5cGUuZGVmYXVsdElkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5ERUZBVUxUX0lEOyB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlciBhIFBhZ2luYXRpb25JbnN0YW5jZSB3aXRoIHRoaXMgc2VydmljZS4gUmV0dXJucyBhXHJcbiAgICAgKiBib29sZWFuIHZhbHVlIHNpZ25pZnlpbmcgd2hldGhlciB0aGUgaW5zdGFuY2UgaXMgbmV3IG9yXHJcbiAgICAgKiB1cGRhdGVkICh0cnVlID0gbmV3IG9yIHVwZGF0ZWQsIGZhbHNlID0gdW5jaGFuZ2VkKS5cclxuICAgICAqL1xyXG4gICAgUGFnaW5hdGlvblNlcnZpY2UucHJvdG90eXBlLnJlZ2lzdGVyID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XHJcbiAgICAgICAgaWYgKGluc3RhbmNlLmlkID09IG51bGwpIHtcclxuICAgICAgICAgICAgaW5zdGFuY2UuaWQgPSB0aGlzLkRFRkFVTFRfSUQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UuaWRdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2VzW2luc3RhbmNlLmlkXSA9IGluc3RhbmNlO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZUluc3RhbmNlKGluc3RhbmNlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBlYWNoIHByb3BlcnR5IG9mIHRoZSBpbnN0YW5jZSBhbmQgdXBkYXRlIGFueSB0aGF0IGhhdmUgY2hhbmdlZC4gUmV0dXJuXHJcbiAgICAgKiB0cnVlIGlmIGFueSBjaGFuZ2VzIHdlcmUgbWFkZSwgZWxzZSByZXR1cm4gZmFsc2UuXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRpb25TZXJ2aWNlLnByb3RvdHlwZS51cGRhdGVJbnN0YW5jZSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xyXG4gICAgICAgIHZhciBjaGFuZ2VkID0gZmFsc2U7XHJcbiAgICAgICAgZm9yICh2YXIgcHJvcCBpbiB0aGlzLmluc3RhbmNlc1tpbnN0YW5jZS5pZF0pIHtcclxuICAgICAgICAgICAgaWYgKGluc3RhbmNlW3Byb3BdICE9PSB0aGlzLmluc3RhbmNlc1tpbnN0YW5jZS5pZF1bcHJvcF0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2VzW2luc3RhbmNlLmlkXVtwcm9wXSA9IGluc3RhbmNlW3Byb3BdO1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNoYW5nZWQ7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHBhZ2UgbnVtYmVyLlxyXG4gICAgICovXHJcbiAgICBQYWdpbmF0aW9uU2VydmljZS5wcm90b3R5cGUuZ2V0Q3VycmVudFBhZ2UgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZXNbaWRdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlc1tpZF0uY3VycmVudFBhZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgY3VycmVudCBwYWdlIG51bWJlci5cclxuICAgICAqL1xyXG4gICAgUGFnaW5hdGlvblNlcnZpY2UucHJvdG90eXBlLnNldEN1cnJlbnRQYWdlID0gZnVuY3Rpb24gKGlkLCBwYWdlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2VzW2lkXSkge1xyXG4gICAgICAgICAgICB2YXIgaW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlc1tpZF07XHJcbiAgICAgICAgICAgIHZhciBtYXhQYWdlID0gTWF0aC5jZWlsKGluc3RhbmNlLnRvdGFsSXRlbXMgLyBpbnN0YW5jZS5pdGVtc1BlclBhZ2UpO1xyXG4gICAgICAgICAgICBpZiAocGFnZSA8PSBtYXhQYWdlICYmIDEgPD0gcGFnZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZXNbaWRdLmN1cnJlbnRQYWdlID0gcGFnZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlLmVtaXQoaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgdmFsdWUgb2YgaW5zdGFuY2UudG90YWxJdGVtc1xyXG4gICAgICovXHJcbiAgICBQYWdpbmF0aW9uU2VydmljZS5wcm90b3R5cGUuc2V0VG90YWxJdGVtcyA9IGZ1bmN0aW9uIChpZCwgdG90YWxJdGVtcykge1xyXG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlc1tpZF0gJiYgMCA8PSB0b3RhbEl0ZW1zKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2VzW2lkXS50b3RhbEl0ZW1zID0gdG90YWxJdGVtcztcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2UuZW1pdChpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgdmFsdWUgb2YgaW5zdGFuY2UuaXRlbXNQZXJQYWdlLlxyXG4gICAgICovXHJcbiAgICBQYWdpbmF0aW9uU2VydmljZS5wcm90b3R5cGUuc2V0SXRlbXNQZXJQYWdlID0gZnVuY3Rpb24gKGlkLCBpdGVtc1BlclBhZ2UpIHtcclxuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZXNbaWRdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2VzW2lkXS5pdGVtc1BlclBhZ2UgPSBpdGVtc1BlclBhZ2U7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlLmVtaXQoaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYSBjbG9uZSBvZiB0aGUgcGFnaW5hdGlvbiBpbnN0YW5jZSBvYmplY3QgbWF0Y2hpbmcgdGhlIGlkLiBJZiBub1xyXG4gICAgICogaWQgc3BlY2lmaWVkLCByZXR1cm5zIHRoZSBpbnN0YW5jZSBjb3JyZXNwb25kaW5nIHRvIHRoZSBkZWZhdWx0IGlkLlxyXG4gICAgICovXHJcbiAgICBQYWdpbmF0aW9uU2VydmljZS5wcm90b3R5cGUuZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICBpZiAoaWQgPT09IHZvaWQgMCkgeyBpZCA9IHRoaXMuREVGQVVMVF9JRDsgfVxyXG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlc1tpZF0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xvbmUodGhpcy5pbnN0YW5jZXNbaWRdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUGVyZm9ybSBhIHNoYWxsb3cgY2xvbmUgb2YgYW4gb2JqZWN0LlxyXG4gICAgICovXHJcbiAgICBQYWdpbmF0aW9uU2VydmljZS5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAob2JqKSB7XHJcbiAgICAgICAgdmFyIHRhcmdldCA9IHt9O1xyXG4gICAgICAgIGZvciAodmFyIGkgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaSkpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldFtpXSA9IG9ialtpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBQYWdpbmF0aW9uU2VydmljZTtcclxufSgpKTtcblxudmFyIF9fZGVjb3JhdGUkMSA9ICh1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodW5kZWZpbmVkICYmIHVuZGVmaW5lZC5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgTEFSR0VfTlVNQkVSID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVI7XHJcbnZhciBQYWdpbmF0ZVBpcGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBQYWdpbmF0ZVBpcGUoc2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuc2VydmljZSA9IHNlcnZpY2U7XHJcbiAgICAgICAgLy8gc3RvcmUgdGhlIHZhbHVlcyBmcm9tIHRoZSBsYXN0IHRpbWUgdGhlIHBpcGUgd2FzIGludm9rZWRcclxuICAgICAgICB0aGlzLnN0YXRlID0ge307XHJcbiAgICB9XHJcbiAgICBQYWdpbmF0ZVBpcGUucHJvdG90eXBlLnRyYW5zZm9ybSA9IGZ1bmN0aW9uIChjb2xsZWN0aW9uLCBhcmdzKSB7XHJcbiAgICAgICAgLy8gV2hlbiBhbiBvYnNlcnZhYmxlIGlzIHBhc3NlZCB0aHJvdWdoIHRoZSBBc3luY1BpcGUsIGl0IHdpbGwgb3V0cHV0XHJcbiAgICAgICAgLy8gYG51bGxgIHVudGlsIHRoZSBzdWJzY3JpcHRpb24gcmVzb2x2ZXMuIEluIHRoaXMgY2FzZSwgd2Ugd2FudCB0b1xyXG4gICAgICAgIC8vIHVzZSB0aGUgY2FjaGVkIGRhdGEgZnJvbSB0aGUgYHN0YXRlYCBvYmplY3QgdG8gcHJldmVudCB0aGUgTmdGb3JcclxuICAgICAgICAvLyBmcm9tIGZsYXNoaW5nIGVtcHR5IHVudGlsIHRoZSByZWFsIHZhbHVlcyBhcnJpdmUuXHJcbiAgICAgICAgaWYgKCEoY29sbGVjdGlvbiBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICB2YXIgX2lkID0gYXJncy5pZCB8fCB0aGlzLnNlcnZpY2UuZGVmYXVsdElkKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlW19pZF0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXRlW19pZF0uc2xpY2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29sbGVjdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc2VydmVyU2lkZU1vZGUgPSBhcmdzLnRvdGFsSXRlbXMgJiYgYXJncy50b3RhbEl0ZW1zICE9PSBjb2xsZWN0aW9uLmxlbmd0aDtcclxuICAgICAgICB2YXIgaW5zdGFuY2UgPSB0aGlzLmNyZWF0ZUluc3RhbmNlKGNvbGxlY3Rpb24sIGFyZ3MpO1xyXG4gICAgICAgIHZhciBpZCA9IGluc3RhbmNlLmlkO1xyXG4gICAgICAgIHZhciBzdGFydCwgZW5kO1xyXG4gICAgICAgIHZhciBwZXJQYWdlID0gaW5zdGFuY2UuaXRlbXNQZXJQYWdlO1xyXG4gICAgICAgIHZhciBlbWl0Q2hhbmdlID0gdGhpcy5zZXJ2aWNlLnJlZ2lzdGVyKGluc3RhbmNlKTtcclxuICAgICAgICBpZiAoIXNlcnZlclNpZGVNb2RlICYmIGNvbGxlY3Rpb24gaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICBwZXJQYWdlID0gK3BlclBhZ2UgfHwgTEFSR0VfTlVNQkVSO1xyXG4gICAgICAgICAgICBzdGFydCA9IChpbnN0YW5jZS5jdXJyZW50UGFnZSAtIDEpICogcGVyUGFnZTtcclxuICAgICAgICAgICAgZW5kID0gc3RhcnQgKyBwZXJQYWdlO1xyXG4gICAgICAgICAgICB2YXIgaXNJZGVudGljYWwgPSB0aGlzLnN0YXRlSXNJZGVudGljYWwoaWQsIGNvbGxlY3Rpb24sIHN0YXJ0LCBlbmQpO1xyXG4gICAgICAgICAgICBpZiAoaXNJZGVudGljYWwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXRlW2lkXS5zbGljZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciBzbGljZSA9IGNvbGxlY3Rpb24uc2xpY2Uoc3RhcnQsIGVuZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVTdGF0ZShpZCwgY29sbGVjdGlvbiwgc2xpY2UsIHN0YXJ0LCBlbmQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlLmNoYW5nZS5lbWl0KGlkKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzbGljZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGVtaXRDaGFuZ2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZS5jaGFuZ2UuZW1pdChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gc2F2ZSB0aGUgc3RhdGUgZm9yIHNlcnZlci1zaWRlIGNvbGxlY3Rpb24gdG8gYXZvaWQgbnVsbFxyXG4gICAgICAgICAgICAvLyBmbGFzaCBhcyBuZXcgZGF0YSBsb2Fkcy5cclxuICAgICAgICAgICAgdGhpcy5zYXZlU3RhdGUoaWQsIGNvbGxlY3Rpb24sIGNvbGxlY3Rpb24sIHN0YXJ0LCBlbmQpO1xyXG4gICAgICAgICAgICByZXR1cm4gY29sbGVjdGlvbjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYW4gUGFnaW5hdGlvbkluc3RhbmNlIG9iamVjdCwgdXNpbmcgZGVmYXVsdHMgZm9yIGFueSBvcHRpb25hbCBwcm9wZXJ0aWVzIG5vdCBzdXBwbGllZC5cclxuICAgICAqL1xyXG4gICAgUGFnaW5hdGVQaXBlLnByb3RvdHlwZS5jcmVhdGVJbnN0YW5jZSA9IGZ1bmN0aW9uIChjb2xsZWN0aW9uLCBjb25maWcpIHtcclxuICAgICAgICB0aGlzLmNoZWNrQ29uZmlnKGNvbmZpZyk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGNvbmZpZy5pZCAhPSBudWxsID8gY29uZmlnLmlkIDogdGhpcy5zZXJ2aWNlLmRlZmF1bHRJZCgpLFxyXG4gICAgICAgICAgICBpdGVtc1BlclBhZ2U6ICtjb25maWcuaXRlbXNQZXJQYWdlIHx8IDAsXHJcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlOiArY29uZmlnLmN1cnJlbnRQYWdlIHx8IDEsXHJcbiAgICAgICAgICAgIHRvdGFsSXRlbXM6ICtjb25maWcudG90YWxJdGVtcyB8fCBjb2xsZWN0aW9uLmxlbmd0aFxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBFbnN1cmUgdGhlIGFyZ3VtZW50IHBhc3NlZCB0byB0aGUgZmlsdGVyIGNvbnRhaW5zIHRoZSByZXF1aXJlZCBwcm9wZXJ0aWVzLlxyXG4gICAgICovXHJcbiAgICBQYWdpbmF0ZVBpcGUucHJvdG90eXBlLmNoZWNrQ29uZmlnID0gZnVuY3Rpb24gKGNvbmZpZykge1xyXG4gICAgICAgIHZhciByZXF1aXJlZCA9IFsnaXRlbXNQZXJQYWdlJywgJ2N1cnJlbnRQYWdlJ107XHJcbiAgICAgICAgdmFyIG1pc3NpbmcgPSByZXF1aXJlZC5maWx0ZXIoZnVuY3Rpb24gKHByb3ApIHsgcmV0dXJuICEocHJvcCBpbiBjb25maWcpOyB9KTtcclxuICAgICAgICBpZiAoMCA8IG1pc3NpbmcubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBhZ2luYXRlUGlwZTogQXJndW1lbnQgaXMgbWlzc2luZyB0aGUgZm9sbG93aW5nIHJlcXVpcmVkIHByb3BlcnRpZXM6IFwiICsgbWlzc2luZy5qb2luKCcsICcpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBUbyBhdm9pZCByZXR1cm5pbmcgYSBicmFuZCBuZXcgYXJyYXkgZWFjaCB0aW1lIHRoZSBwaXBlIGlzIHJ1biwgd2Ugc3RvcmUgdGhlIHN0YXRlIG9mIHRoZSBzbGljZWRcclxuICAgICAqIGFycmF5IGZvciBhIGdpdmVuIGlkLiBUaGlzIG1lYW5zIHRoYXQgdGhlIG5leHQgdGltZSB0aGUgcGlwZSBpcyBydW4gb24gdGhpcyBjb2xsZWN0aW9uICYgaWQsIHdlIGp1c3RcclxuICAgICAqIG5lZWQgdG8gY2hlY2sgdGhhdCB0aGUgY29sbGVjdGlvbiwgc3RhcnQgYW5kIGVuZCBwb2ludHMgYXJlIGFsbCBpZGVudGljYWwsIGFuZCBpZiBzbywgcmV0dXJuIHRoZVxyXG4gICAgICogbGFzdCBzbGljZWQgYXJyYXkuXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRlUGlwZS5wcm90b3R5cGUuc2F2ZVN0YXRlID0gZnVuY3Rpb24gKGlkLCBjb2xsZWN0aW9uLCBzbGljZSwgc3RhcnQsIGVuZCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGVbaWRdID0ge1xyXG4gICAgICAgICAgICBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uLFxyXG4gICAgICAgICAgICBzaXplOiBjb2xsZWN0aW9uLmxlbmd0aCxcclxuICAgICAgICAgICAgc2xpY2U6IHNsaWNlLFxyXG4gICAgICAgICAgICBzdGFydDogc3RhcnQsXHJcbiAgICAgICAgICAgIGVuZDogZW5kXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEZvciBhIGdpdmVuIGlkLCByZXR1cm5zIHRydWUgaWYgdGhlIGNvbGxlY3Rpb24sIHNpemUsIHN0YXJ0IGFuZCBlbmQgdmFsdWVzIGFyZSBpZGVudGljYWwuXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRlUGlwZS5wcm90b3R5cGUuc3RhdGVJc0lkZW50aWNhbCA9IGZ1bmN0aW9uIChpZCwgY29sbGVjdGlvbiwgc3RhcnQsIGVuZCkge1xyXG4gICAgICAgIHZhciBzdGF0ZSA9IHRoaXMuc3RhdGVbaWRdO1xyXG4gICAgICAgIGlmICghc3RhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaXNNZXRhRGF0YUlkZW50aWNhbCA9IHN0YXRlLnNpemUgPT09IGNvbGxlY3Rpb24ubGVuZ3RoICYmXHJcbiAgICAgICAgICAgIHN0YXRlLnN0YXJ0ID09PSBzdGFydCAmJlxyXG4gICAgICAgICAgICBzdGF0ZS5lbmQgPT09IGVuZDtcclxuICAgICAgICBpZiAoIWlzTWV0YURhdGFJZGVudGljYWwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RhdGUuc2xpY2UuZXZlcnkoZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4KSB7IHJldHVybiBlbGVtZW50ID09PSBjb2xsZWN0aW9uW3N0YXJ0ICsgaW5kZXhdOyB9KTtcclxuICAgIH07XHJcbiAgICBQYWdpbmF0ZVBpcGUgPSBfX2RlY29yYXRlJDEoW1xyXG4gICAgICAgIFBpcGUoe1xyXG4gICAgICAgICAgICBuYW1lOiAncGFnaW5hdGUnLFxyXG4gICAgICAgICAgICBwdXJlOiBmYWxzZVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbUGFnaW5hdGlvblNlcnZpY2VdKVxyXG4gICAgXSwgUGFnaW5hdGVQaXBlKTtcclxuICAgIHJldHVybiBQYWdpbmF0ZVBpcGU7XHJcbn0oKSk7XG5cbi8qKlxyXG4gKiBUaGUgZGVmYXVsdCB0ZW1wbGF0ZSBhbmQgc3R5bGVzIGZvciB0aGUgcGFnaW5hdGlvbiBsaW5rcyBhcmUgYm9ycm93ZWQgZGlyZWN0bHlcclxuICogZnJvbSBadXJiIEZvdW5kYXRpb24gNjogaHR0cDovL2ZvdW5kYXRpb24uenVyYi5jb20vc2l0ZXMvZG9jcy9wYWdpbmF0aW9uLmh0bWxcclxuICovXHJcbnZhciBERUZBVUxUX1RFTVBMQVRFID0gXCJcXG4gICAgPHBhZ2luYXRpb24tdGVtcGxhdGUgICNwPVxcXCJwYWdpbmF0aW9uQXBpXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICBbaWRdPVxcXCJpZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgW21heFNpemVdPVxcXCJtYXhTaXplXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAocGFnZUNoYW5nZSk9XFxcInBhZ2VDaGFuZ2UuZW1pdCgkZXZlbnQpXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAocGFnZUJvdW5kc0NvcnJlY3Rpb24pPVxcXCJwYWdlQm91bmRzQ29ycmVjdGlvbi5lbWl0KCRldmVudClcXFwiPlxcbiAgICA8dWwgY2xhc3M9XFxcIm5neC1wYWdpbmF0aW9uXFxcIiBcXG4gICAgICAgIHJvbGU9XFxcIm5hdmlnYXRpb25cXFwiIFxcbiAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XFxcInNjcmVlblJlYWRlclBhZ2luYXRpb25MYWJlbFxcXCIgXFxuICAgICAgICBbY2xhc3MucmVzcG9uc2l2ZV09XFxcInJlc3BvbnNpdmVcXFwiXFxuICAgICAgICAqbmdJZj1cXFwiIShhdXRvSGlkZSAmJiBwLnBhZ2VzLmxlbmd0aCA8PSAxKVxcXCI+XFxuXFxuICAgICAgICA8bGkgY2xhc3M9XFxcInBhZ2luYXRpb24tcHJldmlvdXNcXFwiIFtjbGFzcy5kaXNhYmxlZF09XFxcInAuaXNGaXJzdFBhZ2UoKVxcXCIgKm5nSWY9XFxcImRpcmVjdGlvbkxpbmtzXFxcIj4gXFxuICAgICAgICAgICAgPGEgdGFiaW5kZXg9XFxcIjBcXFwiICpuZ0lmPVxcXCIxIDwgcC5nZXRDdXJyZW50KClcXFwiIChrZXl1cC5lbnRlcik9XFxcInAucHJldmlvdXMoKVxcXCIgKGNsaWNrKT1cXFwicC5wcmV2aW91cygpXFxcIiBbYXR0ci5hcmlhLWxhYmVsXT1cXFwicHJldmlvdXNMYWJlbCArICcgJyArIHNjcmVlblJlYWRlclBhZ2VMYWJlbFxcXCI+XFxuICAgICAgICAgICAgICAgIHt7IHByZXZpb3VzTGFiZWwgfX0gPHNwYW4gY2xhc3M9XFxcInNob3ctZm9yLXNyXFxcIj57eyBzY3JlZW5SZWFkZXJQYWdlTGFiZWwgfX08L3NwYW4+XFxuICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVxcXCJwLmlzRmlyc3RQYWdlKClcXFwiPlxcbiAgICAgICAgICAgICAgICB7eyBwcmV2aW91c0xhYmVsIH19IDxzcGFuIGNsYXNzPVxcXCJzaG93LWZvci1zclxcXCI+e3sgc2NyZWVuUmVhZGVyUGFnZUxhYmVsIH19PC9zcGFuPlxcbiAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgIDwvbGk+IFxcblxcbiAgICAgICAgPGxpIGNsYXNzPVxcXCJzbWFsbC1zY3JlZW5cXFwiPlxcbiAgICAgICAgICAgIHt7IHAuZ2V0Q3VycmVudCgpIH19IC8ge3sgcC5nZXRMYXN0UGFnZSgpIH19XFxuICAgICAgICA8L2xpPlxcblxcbiAgICAgICAgPGxpIFtjbGFzcy5jdXJyZW50XT1cXFwicC5nZXRDdXJyZW50KCkgPT09IHBhZ2UudmFsdWVcXFwiIFxcbiAgICAgICAgICAgIFtjbGFzcy5lbGxpcHNpc109XFxcInBhZ2UubGFiZWwgPT09ICcuLi4nXFxcIlxcbiAgICAgICAgICAgICpuZ0Zvcj1cXFwibGV0IHBhZ2Ugb2YgcC5wYWdlc1xcXCI+XFxuICAgICAgICAgICAgPGEgdGFiaW5kZXg9XFxcIjBcXFwiIChrZXl1cC5lbnRlcik9XFxcInAuc2V0Q3VycmVudChwYWdlLnZhbHVlKVxcXCIgKGNsaWNrKT1cXFwicC5zZXRDdXJyZW50KHBhZ2UudmFsdWUpXFxcIiAqbmdJZj1cXFwicC5nZXRDdXJyZW50KCkgIT09IHBhZ2UudmFsdWVcXFwiPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwic2hvdy1mb3Itc3JcXFwiPnt7IHNjcmVlblJlYWRlclBhZ2VMYWJlbCB9fSA8L3NwYW4+XFxuICAgICAgICAgICAgICAgIDxzcGFuPnt7IChwYWdlLmxhYmVsID09PSAnLi4uJykgPyBwYWdlLmxhYmVsIDogKHBhZ2UubGFiZWwgfCBudW1iZXI6JycpIH19PC9zcGFuPlxcbiAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVxcXCJwLmdldEN1cnJlbnQoKSA9PT0gcGFnZS52YWx1ZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJzaG93LWZvci1zclxcXCI+e3sgc2NyZWVuUmVhZGVyQ3VycmVudExhYmVsIH19IDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPHNwYW4+e3sgKHBhZ2UubGFiZWwgPT09ICcuLi4nKSA/IHBhZ2UubGFiZWwgOiAocGFnZS5sYWJlbCB8IG51bWJlcjonJykgfX08L3NwYW4+IFxcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxcbiAgICAgICAgPC9saT5cXG5cXG4gICAgICAgIDxsaSBjbGFzcz1cXFwicGFnaW5hdGlvbi1uZXh0XFxcIiBbY2xhc3MuZGlzYWJsZWRdPVxcXCJwLmlzTGFzdFBhZ2UoKVxcXCIgKm5nSWY9XFxcImRpcmVjdGlvbkxpbmtzXFxcIj5cXG4gICAgICAgICAgICA8YSB0YWJpbmRleD1cXFwiMFxcXCIgKm5nSWY9XFxcIiFwLmlzTGFzdFBhZ2UoKVxcXCIgKGtleXVwLmVudGVyKT1cXFwicC5uZXh0KClcXFwiIChjbGljayk9XFxcInAubmV4dCgpXFxcIiBbYXR0ci5hcmlhLWxhYmVsXT1cXFwibmV4dExhYmVsICsgJyAnICsgc2NyZWVuUmVhZGVyUGFnZUxhYmVsXFxcIj5cXG4gICAgICAgICAgICAgICAgIHt7IG5leHRMYWJlbCB9fSA8c3BhbiBjbGFzcz1cXFwic2hvdy1mb3Itc3JcXFwiPnt7IHNjcmVlblJlYWRlclBhZ2VMYWJlbCB9fTwvc3Bhbj5cXG4gICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XFxcInAuaXNMYXN0UGFnZSgpXFxcIj5cXG4gICAgICAgICAgICAgICAgIHt7IG5leHRMYWJlbCB9fSA8c3BhbiBjbGFzcz1cXFwic2hvdy1mb3Itc3JcXFwiPnt7IHNjcmVlblJlYWRlclBhZ2VMYWJlbCB9fTwvc3Bhbj5cXG4gICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICA8L2xpPlxcblxcbiAgICA8L3VsPlxcbiAgICA8L3BhZ2luYXRpb24tdGVtcGxhdGU+XFxuICAgIFwiO1xyXG52YXIgREVGQVVMVF9TVFlMRVMgPSBcIlxcbi5uZ3gtcGFnaW5hdGlvbiB7XFxuICBtYXJnaW4tbGVmdDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07IH1cXG4gIC5uZ3gtcGFnaW5hdGlvbjo6YmVmb3JlLCAubmd4LXBhZ2luYXRpb246OmFmdGVyIHtcXG4gICAgY29udGVudDogJyAnO1xcbiAgICBkaXNwbGF5OiB0YWJsZTsgfVxcbiAgLm5neC1wYWdpbmF0aW9uOjphZnRlciB7XFxuICAgIGNsZWFyOiBib3RoOyB9XFxuICAubmd4LXBhZ2luYXRpb24gbGkge1xcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIG1hcmdpbi1yaWdodDogMC4wNjI1cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwOyB9XFxuICAubmd4LXBhZ2luYXRpb24gbGkge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cXG4gIC5uZ3gtcGFnaW5hdGlvbiBhLFxcbiAgLm5neC1wYWdpbmF0aW9uIGJ1dHRvbiB7XFxuICAgIGNvbG9yOiAjMGEwYTBhOyBcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmc6IDAuMTg3NXJlbSAwLjYyNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMDsgfVxcbiAgICAubmd4LXBhZ2luYXRpb24gYTpob3ZlcixcXG4gICAgLm5neC1wYWdpbmF0aW9uIGJ1dHRvbjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZDogI2U2ZTZlNjsgfVxcbiAgLm5neC1wYWdpbmF0aW9uIC5jdXJyZW50IHtcXG4gICAgcGFkZGluZzogMC4xODc1cmVtIDAuNjI1cmVtO1xcbiAgICBiYWNrZ3JvdW5kOiAjMjE5OWU4O1xcbiAgICBjb2xvcjogI2ZlZmVmZTtcXG4gICAgY3Vyc29yOiBkZWZhdWx0OyB9XFxuICAubmd4LXBhZ2luYXRpb24gLmRpc2FibGVkIHtcXG4gICAgcGFkZGluZzogMC4xODc1cmVtIDAuNjI1cmVtO1xcbiAgICBjb2xvcjogI2NhY2FjYTtcXG4gICAgY3Vyc29yOiBkZWZhdWx0OyB9IFxcbiAgICAubmd4LXBhZ2luYXRpb24gLmRpc2FibGVkOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgfVxcbiAgLm5neC1wYWdpbmF0aW9uIGEsIC5uZ3gtcGFnaW5hdGlvbiBidXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4ubmd4LXBhZ2luYXRpb24gLnBhZ2luYXRpb24tcHJldmlvdXMgYTo6YmVmb3JlLFxcbi5uZ3gtcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1wcmV2aW91cy5kaXNhYmxlZDo6YmVmb3JlIHsgXFxuICBjb250ZW50OiAnXFx1MDBBQic7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTsgfVxcblxcbi5uZ3gtcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1uZXh0IGE6OmFmdGVyLFxcbi5uZ3gtcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1uZXh0LmRpc2FibGVkOjphZnRlciB7XFxuICBjb250ZW50OiAnXFx1MDBCQic7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tbGVmdDogMC41cmVtOyB9XFxuXFxuLm5neC1wYWdpbmF0aW9uIC5zaG93LWZvci1zciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcXG4gIHdpZHRoOiAxcHg7XFxuICBoZWlnaHQ6IDFweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBjbGlwOiByZWN0KDAsIDAsIDAsIDApOyB9XFxuLm5neC1wYWdpbmF0aW9uIC5zbWFsbC1zY3JlZW4ge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMXB4KSB7XFxuICAubmd4LXBhZ2luYXRpb24ucmVzcG9uc2l2ZSAuc21hbGwtc2NyZWVuIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9IFxcbiAgLm5neC1wYWdpbmF0aW9uLnJlc3BvbnNpdmUgbGk6bm90KC5zbWFsbC1zY3JlZW4pOm5vdCgucGFnaW5hdGlvbi1wcmV2aW91cyk6bm90KC5wYWdpbmF0aW9uLW5leHQpIHtcXG4gICAgZGlzcGxheTogbm9uZTsgfVxcbn1cXG4gIFwiO1xuXG52YXIgX19kZWNvcmF0ZSQyID0gKHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSQxID0gKHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxuZnVuY3Rpb24gY29lcmNlVG9Cb29sZWFuKGlucHV0KSB7XHJcbiAgICByZXR1cm4gISFpbnB1dCAmJiBpbnB1dCAhPT0gJ2ZhbHNlJztcclxufVxyXG4vKipcclxuICogVGhlIGRlZmF1bHQgcGFnaW5hdGlvbiBjb250cm9scyBjb21wb25lbnQuIEFjdHVhbGx5IGp1c3QgYSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIGEgY3VzdG9tIHRlbXBsYXRlLlxyXG4gKi9cclxudmFyIFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudCgpIHtcclxuICAgICAgICB0aGlzLm1heFNpemUgPSA3O1xyXG4gICAgICAgIHRoaXMucHJldmlvdXNMYWJlbCA9ICdQcmV2aW91cyc7XHJcbiAgICAgICAgdGhpcy5uZXh0TGFiZWwgPSAnTmV4dCc7XHJcbiAgICAgICAgdGhpcy5zY3JlZW5SZWFkZXJQYWdpbmF0aW9uTGFiZWwgPSAnUGFnaW5hdGlvbic7XHJcbiAgICAgICAgdGhpcy5zY3JlZW5SZWFkZXJQYWdlTGFiZWwgPSAncGFnZSc7XHJcbiAgICAgICAgdGhpcy5zY3JlZW5SZWFkZXJDdXJyZW50TGFiZWwgPSBcIllvdSdyZSBvbiBwYWdlXCI7XHJcbiAgICAgICAgdGhpcy5wYWdlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgICAgIHRoaXMucGFnZUJvdW5kc0NvcnJlY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICAgICAgdGhpcy5fZGlyZWN0aW9uTGlua3MgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX2F1dG9IaWRlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fcmVzcG9uc2l2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudC5wcm90b3R5cGUsIFwiZGlyZWN0aW9uTGlua3NcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZGlyZWN0aW9uTGlua3M7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9kaXJlY3Rpb25MaW5rcyA9IGNvZXJjZVRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUGFnaW5hdGlvbkNvbnRyb2xzQ29tcG9uZW50LnByb3RvdHlwZSwgXCJhdXRvSGlkZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hdXRvSGlkZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2F1dG9IaWRlID0gY29lcmNlVG9Cb29sZWFuKHZhbHVlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShQYWdpbmF0aW9uQ29udHJvbHNDb21wb25lbnQucHJvdG90eXBlLCBcInJlc3BvbnNpdmVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVzcG9uc2l2ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Jlc3BvbnNpdmUgPSBjb2VyY2VUb0Jvb2xlYW4odmFsdWUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgX19kZWNvcmF0ZSQyKFtcclxuICAgICAgICBJbnB1dCgpLFxyXG4gICAgICAgIF9fbWV0YWRhdGEkMShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcclxuICAgIF0sIFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudC5wcm90b3R5cGUsIFwiaWRcIiwgdm9pZCAwKTtcclxuICAgIF9fZGVjb3JhdGUkMihbXHJcbiAgICAgICAgSW5wdXQoKSxcclxuICAgICAgICBfX21ldGFkYXRhJDEoXCJkZXNpZ246dHlwZVwiLCBOdW1iZXIpXHJcbiAgICBdLCBQYWdpbmF0aW9uQ29udHJvbHNDb21wb25lbnQucHJvdG90eXBlLCBcIm1heFNpemVcIiwgdm9pZCAwKTtcclxuICAgIF9fZGVjb3JhdGUkMihbXHJcbiAgICAgICAgSW5wdXQoKSxcclxuICAgICAgICBfX21ldGFkYXRhJDEoXCJkZXNpZ246dHlwZVwiLCBCb29sZWFuKSxcclxuICAgICAgICBfX21ldGFkYXRhJDEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbQm9vbGVhbl0pXHJcbiAgICBdLCBQYWdpbmF0aW9uQ29udHJvbHNDb21wb25lbnQucHJvdG90eXBlLCBcImRpcmVjdGlvbkxpbmtzXCIsIG51bGwpO1xyXG4gICAgX19kZWNvcmF0ZSQyKFtcclxuICAgICAgICBJbnB1dCgpLFxyXG4gICAgICAgIF9fbWV0YWRhdGEkMShcImRlc2lnbjp0eXBlXCIsIEJvb2xlYW4pLFxyXG4gICAgICAgIF9fbWV0YWRhdGEkMShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtCb29sZWFuXSlcclxuICAgIF0sIFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudC5wcm90b3R5cGUsIFwiYXV0b0hpZGVcIiwgbnVsbCk7XHJcbiAgICBfX2RlY29yYXRlJDIoW1xyXG4gICAgICAgIElucHV0KCksXHJcbiAgICAgICAgX19tZXRhZGF0YSQxKFwiZGVzaWduOnR5cGVcIiwgQm9vbGVhbiksXHJcbiAgICAgICAgX19tZXRhZGF0YSQxKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW0Jvb2xlYW5dKVxyXG4gICAgXSwgUGFnaW5hdGlvbkNvbnRyb2xzQ29tcG9uZW50LnByb3RvdHlwZSwgXCJyZXNwb25zaXZlXCIsIG51bGwpO1xyXG4gICAgX19kZWNvcmF0ZSQyKFtcclxuICAgICAgICBJbnB1dCgpLFxyXG4gICAgICAgIF9fbWV0YWRhdGEkMShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcclxuICAgIF0sIFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudC5wcm90b3R5cGUsIFwicHJldmlvdXNMYWJlbFwiLCB2b2lkIDApO1xyXG4gICAgX19kZWNvcmF0ZSQyKFtcclxuICAgICAgICBJbnB1dCgpLFxyXG4gICAgICAgIF9fbWV0YWRhdGEkMShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcclxuICAgIF0sIFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudC5wcm90b3R5cGUsIFwibmV4dExhYmVsXCIsIHZvaWQgMCk7XHJcbiAgICBfX2RlY29yYXRlJDIoW1xyXG4gICAgICAgIElucHV0KCksXHJcbiAgICAgICAgX19tZXRhZGF0YSQxKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxyXG4gICAgXSwgUGFnaW5hdGlvbkNvbnRyb2xzQ29tcG9uZW50LnByb3RvdHlwZSwgXCJzY3JlZW5SZWFkZXJQYWdpbmF0aW9uTGFiZWxcIiwgdm9pZCAwKTtcclxuICAgIF9fZGVjb3JhdGUkMihbXHJcbiAgICAgICAgSW5wdXQoKSxcclxuICAgICAgICBfX21ldGFkYXRhJDEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXHJcbiAgICBdLCBQYWdpbmF0aW9uQ29udHJvbHNDb21wb25lbnQucHJvdG90eXBlLCBcInNjcmVlblJlYWRlclBhZ2VMYWJlbFwiLCB2b2lkIDApO1xyXG4gICAgX19kZWNvcmF0ZSQyKFtcclxuICAgICAgICBJbnB1dCgpLFxyXG4gICAgICAgIF9fbWV0YWRhdGEkMShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcclxuICAgIF0sIFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudC5wcm90b3R5cGUsIFwic2NyZWVuUmVhZGVyQ3VycmVudExhYmVsXCIsIHZvaWQgMCk7XHJcbiAgICBfX2RlY29yYXRlJDIoW1xyXG4gICAgICAgIE91dHB1dCgpLFxyXG4gICAgICAgIF9fbWV0YWRhdGEkMShcImRlc2lnbjp0eXBlXCIsIEV2ZW50RW1pdHRlcilcclxuICAgIF0sIFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudC5wcm90b3R5cGUsIFwicGFnZUNoYW5nZVwiLCB2b2lkIDApO1xyXG4gICAgX19kZWNvcmF0ZSQyKFtcclxuICAgICAgICBPdXRwdXQoKSxcclxuICAgICAgICBfX21ldGFkYXRhJDEoXCJkZXNpZ246dHlwZVwiLCBFdmVudEVtaXR0ZXIpXHJcbiAgICBdLCBQYWdpbmF0aW9uQ29udHJvbHNDb21wb25lbnQucHJvdG90eXBlLCBcInBhZ2VCb3VuZHNDb3JyZWN0aW9uXCIsIHZvaWQgMCk7XHJcbiAgICBQYWdpbmF0aW9uQ29udHJvbHNDb21wb25lbnQgPSBfX2RlY29yYXRlJDIoW1xyXG4gICAgICAgIENvbXBvbmVudCh7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAncGFnaW5hdGlvbi1jb250cm9scycsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiBERUZBVUxUX1RFTVBMQVRFLFxyXG4gICAgICAgICAgICBzdHlsZXM6IFtERUZBVUxUX1NUWUxFU10sXHJcbiAgICAgICAgICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gICAgICAgICAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbiAgICAgICAgfSlcclxuICAgIF0sIFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudCk7XHJcbiAgICByZXR1cm4gUGFnaW5hdGlvbkNvbnRyb2xzQ29tcG9uZW50O1xyXG59KCkpO1xuXG52YXIgX19kZWNvcmF0ZSQzID0gKHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSQyID0gKHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxuLyoqXHJcbiAqIFRoaXMgZGlyZWN0aXZlIGlzIHdoYXQgcG93ZXJzIGFsbCBwYWdpbmF0aW9uIGNvbnRyb2xzIGNvbXBvbmVudHMsIGluY2x1ZGluZyB0aGUgZGVmYXVsdCBvbmUuXHJcbiAqIEl0IGV4cG9zZXMgYW4gQVBJIHdoaWNoIGlzIGhvb2tlZCB1cCB0byB0aGUgUGFnaW5hdGlvblNlcnZpY2UgdG8ga2VlcCB0aGUgUGFnaW5hdGVQaXBlIGluIHN5bmNcclxuICogd2l0aCB0aGUgcGFnaW5hdGlvbiBjb250cm9scy5cclxuICovXHJcbnZhciBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUoc2VydmljZSwgY2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuc2VydmljZSA9IHNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZiA9IGNoYW5nZURldGVjdG9yUmVmO1xyXG4gICAgICAgIHRoaXMubWF4U2l6ZSA9IDc7XHJcbiAgICAgICAgdGhpcy5wYWdlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgICAgIHRoaXMucGFnZUJvdW5kc0NvcnJlY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICAgICAgdGhpcy5wYWdlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlU3ViID0gdGhpcy5zZXJ2aWNlLmNoYW5nZVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMuaWQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy51cGRhdGVQYWdlTGlua3MoKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlkID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5pZCA9IHRoaXMuc2VydmljZS5kZWZhdWx0SWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51cGRhdGVQYWdlTGlua3MoKTtcclxuICAgIH07XHJcbiAgICBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUucHJvdG90eXBlLm5nT25DaGFuZ2VzID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVBhZ2VMaW5rcygpO1xyXG4gICAgfTtcclxuICAgIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZS5wcm90b3R5cGUubmdPbkRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VTdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEdvIHRvIHRoZSBwcmV2aW91cyBwYWdlXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZS5wcm90b3R5cGUucHJldmlvdXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jaGVja1ZhbGlkSWQoKTtcclxuICAgICAgICB0aGlzLnNldEN1cnJlbnQodGhpcy5nZXRDdXJyZW50KCkgLSAxKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEdvIHRvIHRoZSBuZXh0IHBhZ2VcclxuICAgICAqL1xyXG4gICAgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY2hlY2tWYWxpZElkKCk7XHJcbiAgICAgICAgdGhpcy5zZXRDdXJyZW50KHRoaXMuZ2V0Q3VycmVudCgpICsgMSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgY3VycmVudCBwYWdlIGlzIGZpcnN0IHBhZ2VcclxuICAgICAqL1xyXG4gICAgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlLnByb3RvdHlwZS5pc0ZpcnN0UGFnZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRDdXJyZW50KCkgPT09IDE7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgY3VycmVudCBwYWdlIGlzIGxhc3QgcGFnZVxyXG4gICAgICovXHJcbiAgICBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUucHJvdG90eXBlLmlzTGFzdFBhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TGFzdFBhZ2UoKSA9PT0gdGhpcy5nZXRDdXJyZW50KCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgdGhlIGN1cnJlbnQgcGFnZSBudW1iZXIuXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZS5wcm90b3R5cGUuc2V0Q3VycmVudCA9IGZ1bmN0aW9uIChwYWdlKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlQ2hhbmdlLmVtaXQocGFnZSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGN1cnJlbnQgcGFnZSBudW1iZXIuXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZS5wcm90b3R5cGUuZ2V0Q3VycmVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmdldEN1cnJlbnRQYWdlKHRoaXMuaWQpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgbGFzdCBwYWdlIG51bWJlclxyXG4gICAgICovXHJcbiAgICBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUucHJvdG90eXBlLmdldExhc3RQYWdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBpbnN0ID0gdGhpcy5zZXJ2aWNlLmdldEluc3RhbmNlKHRoaXMuaWQpO1xyXG4gICAgICAgIGlmIChpbnN0LnRvdGFsSXRlbXMgPCAxKSB7XHJcbiAgICAgICAgICAgIC8vIHdoZW4gdGhlcmUgYXJlIDAgb3IgZmV3ZXIgKGFuIGVycm9yIGNhc2UpIGl0ZW1zLCB0aGVyZSBhcmUgbm8gXCJwYWdlc1wiIGFzIHN1Y2gsXHJcbiAgICAgICAgICAgIC8vIGJ1dCBpdCBtYWtlcyBzZW5zZSB0byBjb25zaWRlciBhIHNpbmdsZSwgZW1wdHkgcGFnZSBhcyB0aGUgbGFzdCBwYWdlLlxyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbChpbnN0LnRvdGFsSXRlbXMgLyBpbnN0Lml0ZW1zUGVyUGFnZSk7XHJcbiAgICB9O1xyXG4gICAgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlLnByb3RvdHlwZS5nZXRUb3RhbEl0ZW1zID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UuZ2V0SW5zdGFuY2UodGhpcy5pZCkudG90YWxJdGVtcztcclxuICAgIH07XHJcbiAgICBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUucHJvdG90eXBlLmNoZWNrVmFsaWRJZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5zZXJ2aWNlLmdldEluc3RhbmNlKHRoaXMuaWQpLmlkID09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlOiB0aGUgc3BlY2lmaWVkIGlkIFxcXCJcIiArIHRoaXMuaWQgKyBcIlxcXCIgZG9lcyBub3QgbWF0Y2ggYW55IHJlZ2lzdGVyZWQgUGFnaW5hdGlvbkluc3RhbmNlXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZXMgdGhlIHBhZ2UgbGlua3MgYW5kIGNoZWNrcyB0aGF0IHRoZSBjdXJyZW50IHBhZ2UgaXMgdmFsaWQuIFNob3VsZCBydW4gd2hlbmV2ZXIgdGhlXHJcbiAgICAgKiBQYWdpbmF0aW9uU2VydmljZS5jaGFuZ2Ugc3RyZWFtIGVtaXRzIGEgdmFsdWUgbWF0Y2hpbmcgdGhlIGN1cnJlbnQgSUQsIG9yIHdoZW4gYW55IG9mIHRoZVxyXG4gICAgICogaW5wdXQgdmFsdWVzIGNoYW5nZXMuXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZS5wcm90b3R5cGUudXBkYXRlUGFnZUxpbmtzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGluc3QgPSB0aGlzLnNlcnZpY2UuZ2V0SW5zdGFuY2UodGhpcy5pZCk7XHJcbiAgICAgICAgdmFyIGNvcnJlY3RlZEN1cnJlbnRQYWdlID0gdGhpcy5vdXRPZkJvdW5kQ29ycmVjdGlvbihpbnN0KTtcclxuICAgICAgICBpZiAoY29ycmVjdGVkQ3VycmVudFBhZ2UgIT09IGluc3QuY3VycmVudFBhZ2UpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5wYWdlQm91bmRzQ29ycmVjdGlvbi5lbWl0KGNvcnJlY3RlZEN1cnJlbnRQYWdlKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLnBhZ2VzID0gX3RoaXMuY3JlYXRlUGFnZUFycmF5KGluc3QuY3VycmVudFBhZ2UsIGluc3QuaXRlbXNQZXJQYWdlLCBpbnN0LnRvdGFsSXRlbXMsIF90aGlzLm1heFNpemUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZXMgPSB0aGlzLmNyZWF0ZVBhZ2VBcnJheShpbnN0LmN1cnJlbnRQYWdlLCBpbnN0Lml0ZW1zUGVyUGFnZSwgaW5zdC50b3RhbEl0ZW1zLCB0aGlzLm1heFNpemUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyB0aGF0IHRoZSBpbnN0YW5jZS5jdXJyZW50UGFnZSBwcm9wZXJ0eSBpcyB3aXRoaW4gYm91bmRzIGZvciB0aGUgY3VycmVudCBwYWdlIHJhbmdlLlxyXG4gICAgICogSWYgbm90LCByZXR1cm4gYSBjb3JyZWN0IHZhbHVlIGZvciBjdXJyZW50UGFnZSwgb3IgdGhlIGN1cnJlbnQgdmFsdWUgaWYgT0suXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZS5wcm90b3R5cGUub3V0T2ZCb3VuZENvcnJlY3Rpb24gPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcclxuICAgICAgICB2YXIgdG90YWxQYWdlcyA9IE1hdGguY2VpbChpbnN0YW5jZS50b3RhbEl0ZW1zIC8gaW5zdGFuY2UuaXRlbXNQZXJQYWdlKTtcclxuICAgICAgICBpZiAodG90YWxQYWdlcyA8IGluc3RhbmNlLmN1cnJlbnRQYWdlICYmIDAgPCB0b3RhbFBhZ2VzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0b3RhbFBhZ2VzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpbnN0YW5jZS5jdXJyZW50UGFnZSA8IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpbnN0YW5jZS5jdXJyZW50UGFnZTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgUGFnZSBvYmplY3RzIHRvIHVzZSBpbiB0aGUgcGFnaW5hdGlvbiBjb250cm9scy5cclxuICAgICAqL1xyXG4gICAgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlLnByb3RvdHlwZS5jcmVhdGVQYWdlQXJyYXkgPSBmdW5jdGlvbiAoY3VycmVudFBhZ2UsIGl0ZW1zUGVyUGFnZSwgdG90YWxJdGVtcywgcGFnaW5hdGlvblJhbmdlKSB7XHJcbiAgICAgICAgLy8gcGFnaW5hdGlvblJhbmdlIGNvdWxkIGJlIGEgc3RyaW5nIGlmIHBhc3NlZCBmcm9tIGF0dHJpYnV0ZSwgc28gY2FzdCB0byBudW1iZXIuXHJcbiAgICAgICAgcGFnaW5hdGlvblJhbmdlID0gK3BhZ2luYXRpb25SYW5nZTtcclxuICAgICAgICB2YXIgcGFnZXMgPSBbXTtcclxuICAgICAgICB2YXIgdG90YWxQYWdlcyA9IE1hdGguY2VpbCh0b3RhbEl0ZW1zIC8gaXRlbXNQZXJQYWdlKTtcclxuICAgICAgICB2YXIgaGFsZldheSA9IE1hdGguY2VpbChwYWdpbmF0aW9uUmFuZ2UgLyAyKTtcclxuICAgICAgICB2YXIgaXNTdGFydCA9IGN1cnJlbnRQYWdlIDw9IGhhbGZXYXk7XHJcbiAgICAgICAgdmFyIGlzRW5kID0gdG90YWxQYWdlcyAtIGhhbGZXYXkgPCBjdXJyZW50UGFnZTtcclxuICAgICAgICB2YXIgaXNNaWRkbGUgPSAhaXNTdGFydCAmJiAhaXNFbmQ7XHJcbiAgICAgICAgdmFyIGVsbGlwc2VzTmVlZGVkID0gcGFnaW5hdGlvblJhbmdlIDwgdG90YWxQYWdlcztcclxuICAgICAgICB2YXIgaSA9IDE7XHJcbiAgICAgICAgd2hpbGUgKGkgPD0gdG90YWxQYWdlcyAmJiBpIDw9IHBhZ2luYXRpb25SYW5nZSkge1xyXG4gICAgICAgICAgICB2YXIgbGFiZWwgPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHZhciBwYWdlTnVtYmVyID0gdGhpcy5jYWxjdWxhdGVQYWdlTnVtYmVyKGksIGN1cnJlbnRQYWdlLCBwYWdpbmF0aW9uUmFuZ2UsIHRvdGFsUGFnZXMpO1xyXG4gICAgICAgICAgICB2YXIgb3BlbmluZ0VsbGlwc2VzTmVlZGVkID0gKGkgPT09IDIgJiYgKGlzTWlkZGxlIHx8IGlzRW5kKSk7XHJcbiAgICAgICAgICAgIHZhciBjbG9zaW5nRWxsaXBzZXNOZWVkZWQgPSAoaSA9PT0gcGFnaW5hdGlvblJhbmdlIC0gMSAmJiAoaXNNaWRkbGUgfHwgaXNTdGFydCkpO1xyXG4gICAgICAgICAgICBpZiAoZWxsaXBzZXNOZWVkZWQgJiYgKG9wZW5pbmdFbGxpcHNlc05lZWRlZCB8fCBjbG9zaW5nRWxsaXBzZXNOZWVkZWQpKSB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbCA9ICcuLi4nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGFiZWwgPSBwYWdlTnVtYmVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBhZ2VzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6IGxhYmVsLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHBhZ2VOdW1iZXJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGkrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBhZ2VzO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogR2l2ZW4gdGhlIHBvc2l0aW9uIGluIHRoZSBzZXF1ZW5jZSBvZiBwYWdpbmF0aW9uIGxpbmtzIFtpXSxcclxuICAgICAqIGZpZ3VyZSBvdXQgd2hhdCBwYWdlIG51bWJlciBjb3JyZXNwb25kcyB0byB0aGF0IHBvc2l0aW9uLlxyXG4gICAgICovXHJcbiAgICBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUucHJvdG90eXBlLmNhbGN1bGF0ZVBhZ2VOdW1iZXIgPSBmdW5jdGlvbiAoaSwgY3VycmVudFBhZ2UsIHBhZ2luYXRpb25SYW5nZSwgdG90YWxQYWdlcykge1xyXG4gICAgICAgIHZhciBoYWxmV2F5ID0gTWF0aC5jZWlsKHBhZ2luYXRpb25SYW5nZSAvIDIpO1xyXG4gICAgICAgIGlmIChpID09PSBwYWdpbmF0aW9uUmFuZ2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRvdGFsUGFnZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGkgPT09IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHBhZ2luYXRpb25SYW5nZSA8IHRvdGFsUGFnZXMpIHtcclxuICAgICAgICAgICAgaWYgKHRvdGFsUGFnZXMgLSBoYWxmV2F5IDwgY3VycmVudFBhZ2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0b3RhbFBhZ2VzIC0gcGFnaW5hdGlvblJhbmdlICsgaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChoYWxmV2F5IDwgY3VycmVudFBhZ2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50UGFnZSAtIGhhbGZXYXkgKyBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBfX2RlY29yYXRlJDMoW1xyXG4gICAgICAgIElucHV0KCksXHJcbiAgICAgICAgX19tZXRhZGF0YSQyKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxyXG4gICAgXSwgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJpZFwiLCB2b2lkIDApO1xyXG4gICAgX19kZWNvcmF0ZSQzKFtcclxuICAgICAgICBJbnB1dCgpLFxyXG4gICAgICAgIF9fbWV0YWRhdGEkMihcImRlc2lnbjp0eXBlXCIsIE51bWJlcilcclxuICAgIF0sIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZS5wcm90b3R5cGUsIFwibWF4U2l6ZVwiLCB2b2lkIDApO1xyXG4gICAgX19kZWNvcmF0ZSQzKFtcclxuICAgICAgICBPdXRwdXQoKSxcclxuICAgICAgICBfX21ldGFkYXRhJDIoXCJkZXNpZ246dHlwZVwiLCBFdmVudEVtaXR0ZXIpXHJcbiAgICBdLCBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUucHJvdG90eXBlLCBcInBhZ2VDaGFuZ2VcIiwgdm9pZCAwKTtcclxuICAgIF9fZGVjb3JhdGUkMyhbXHJcbiAgICAgICAgT3V0cHV0KCksXHJcbiAgICAgICAgX19tZXRhZGF0YSQyKFwiZGVzaWduOnR5cGVcIiwgRXZlbnRFbWl0dGVyKVxyXG4gICAgXSwgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJwYWdlQm91bmRzQ29ycmVjdGlvblwiLCB2b2lkIDApO1xyXG4gICAgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlID0gX19kZWNvcmF0ZSQzKFtcclxuICAgICAgICBEaXJlY3RpdmUoe1xyXG4gICAgICAgICAgICBzZWxlY3RvcjogJ3BhZ2luYXRpb24tdGVtcGxhdGUsW3BhZ2luYXRpb24tdGVtcGxhdGVdJyxcclxuICAgICAgICAgICAgZXhwb3J0QXM6ICdwYWdpbmF0aW9uQXBpJ1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIF9fbWV0YWRhdGEkMihcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtQYWdpbmF0aW9uU2VydmljZSxcclxuICAgICAgICAgICAgQ2hhbmdlRGV0ZWN0b3JSZWZdKVxyXG4gICAgXSwgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlKTtcclxuICAgIHJldHVybiBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmU7XHJcbn0oKSk7XG5cbnZhciBfX2RlY29yYXRlID0gKHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgTmd4UGFnaW5hdGlvbk1vZHVsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE5neFBhZ2luYXRpb25Nb2R1bGUoKSB7XHJcbiAgICB9XHJcbiAgICBOZ3hQYWdpbmF0aW9uTW9kdWxlID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgTmdNb2R1bGUoe1xyXG4gICAgICAgICAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICAgICAgICAgICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgICAgICAgICBQYWdpbmF0ZVBpcGUsXHJcbiAgICAgICAgICAgICAgICBQYWdpbmF0aW9uQ29udHJvbHNDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmVcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbUGFnaW5hdGlvblNlcnZpY2VdLFxyXG4gICAgICAgICAgICBleHBvcnRzOiBbUGFnaW5hdGVQaXBlLCBQYWdpbmF0aW9uQ29udHJvbHNDb21wb25lbnQsIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZV1cclxuICAgICAgICB9KVxyXG4gICAgXSwgTmd4UGFnaW5hdGlvbk1vZHVsZSk7XHJcbiAgICByZXR1cm4gTmd4UGFnaW5hdGlvbk1vZHVsZTtcclxufSgpKTtcblxuLyoqXHJcbiAqIEdlbmVyYXRlZCBidW5kbGUgaW5kZXguIERvIG5vdCBlZGl0LlxyXG4gKi9cblxuZXhwb3J0IHsgREVGQVVMVF9TVFlMRVMgYXMgybViLCBERUZBVUxUX1RFTVBMQVRFIGFzIMm1YSwgTmd4UGFnaW5hdGlvbk1vZHVsZSwgUGFnaW5hdGlvblNlcnZpY2UsIFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudCwgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlLCBQYWdpbmF0ZVBpcGUgfTtcbiJdfQ==

/***/ }),

/***/ "./src/app/main-section/general-components/media-list/media-detail/media-detail.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/main-section/general-components/media-list/media-detail/media-detail.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: MediaDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaDetailComponent", function() { return MediaDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_main_section_modals_status_update_status_update_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/main-section/modals/status-update/status-update.component */ "./src/app/main-section/modals/status-update/status-update.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function MediaDetailComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Banglore ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MediaDetailComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.mediaDetails.contact);
} }
function MediaDetailComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.mediaDetails.address);
} }
function MediaDetailComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Model Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MediaDetailComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Bill Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MediaDetailComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Negotiable");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MediaDetailComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Payment Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MediaDetailComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9 ", ctx_r7.mediaDetails == null ? null : ctx_r7.mediaDetails.paymentInfo == null ? null : ctx_r7.mediaDetails.paymentInfo.cost, "");
} }
class MediaDetailComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    ngOnInit() {
    }
    updateStatus(status) {
        const modalRef = this.modalService.open(src_app_main_section_modals_status_update_status_update_component__WEBPACK_IMPORTED_MODULE_1__["StatusUpdateComponent"], { centered: true });
        modalRef.componentInstance.status = status;
    }
}
MediaDetailComponent.ɵfac = function MediaDetailComponent_Factory(t) { return new (t || MediaDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"])); };
MediaDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MediaDetailComponent, selectors: [["app-media-detail"]], inputs: { mediaDetails: "mediaDetails", mediaType: "mediaType" }, decls: 38, vars: 12, consts: [[1, "row", "mt-3", "m-0", "px-0", "pb-3", "border-bottom"], [1, "col-md-2", "pr-0"], [1, "images", "mt-3", "position-relative"], [1, "prev-icon", "position-absolute"], ["viewBox", "0 0 20 20", 1, "svg-icon", 2, "fill", "#ffffff!important"], ["fill", "none", "d", "M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"], [1, "img-container"], ["alt", "", "srcset", "", 3, "src"], ["class", "text-center address-layover", 4, "ngIf"], [1, "next-icon", "position-absolute"], ["viewBox", "0 0 20 20", 1, "svg-icon"], ["fill", "none", "d", "M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"], [1, "col-md-7", "p-0"], [1, "mt-3"], ["fill", "none", "d", "M10,10.9c2.373,0,4.303-1.932,4.303-4.306c0-2.372-1.93-4.302-4.303-4.302S5.696,4.223,5.696,6.594C5.696,8.969,7.627,10.9,10,10.9z M10,3.331c1.801,0,3.266,1.463,3.266,3.263c0,1.802-1.465,3.267-3.266,3.267c-1.8,0-3.265-1.465-3.265-3.267C6.735,4.794,8.2,3.331,10,3.331z"], ["fill", "none", "d", "M10,12.503c-4.418,0-7.878,2.058-7.878,4.685c0,0.288,0.231,0.52,0.52,0.52c0.287,0,0.519-0.231,0.519-0.52c0-1.976,3.132-3.646,6.84-3.646c3.707,0,6.838,1.671,6.838,3.646c0,0.288,0.234,0.52,0.521,0.52s0.52-0.231,0.52-0.52C17.879,14.561,14.418,12.503,10,12.503z"], [1, "ml-2"], [1, "lighter-text"], ["fill", "none", "d", "M9.958,5.956c-2.577,0-4.667,2.089-4.667,4.667c0,2.577,2.089,4.667,4.667,4.667s4.667-2.09,4.667-4.667\n                    C14.625,8.045,12.535,5.956,9.958,5.956z M9.958,14.123c-1.933,0-3.5-1.568-3.5-3.5c0-1.933,1.567-3.5,3.5-3.5s3.5,1.567,3.5,3.5\n                    C13.458,12.555,11.891,14.123,9.958,14.123z M18.124,3.623h-2.916l-0.583-1.167c0,0-0.522-1.167-1.167-1.167h-7\n                    c-0.645,0-1.167,1.167-1.167,1.167L4.708,3.623H1.792c-0.645,0-1.167,0.522-1.167,1.167v12.832c0,0.645,0.522,1.168,1.167,1.168\n                    h16.333c0.645,0,1.167-0.523,1.167-1.168V4.789C19.291,4.145,18.769,3.623,18.124,3.623z M18.124,17.039\n                    c0,0.322-0.261,0.582-0.583,0.582H2.375c-0.323,0-0.583-0.26-0.583-0.582V5.373c0-0.323,0.261-0.583,0.583-0.583h2.954\n                    C5.316,4.74,5.292,4.695,5.292,4.643l0.933-1.458c0,0,0.418-0.729,0.934-0.729h5.6c0.516,0,0.934,0.729,0.934,0.729l0.934,1.458\n                    c0,0.052-0.024,0.097-0.038,0.146h2.954c0.322,0,0.583,0.261,0.583,0.583V17.039z"], [4, "ngIf"], [1, "col-md-3"], ["class", "payment-text", 4, "ngIf"], ["class", "payment-text cost-div mr-4", 4, "ngIf"], [1, "accept-btn", "mt-3", "mx-auto", "cursor-pointer", 3, "click"], [1, "decline-btn", "mx-auto", "cursor-pointer", 3, "click"], [1, "text-center", "address-layover"], ["fill", "none", "d", "M10.292,4.229c-1.487,0-2.691,1.205-2.691,2.691s1.205,2.691,2.691,2.691s2.69-1.205,2.69-2.691\n                            S11.779,4.229,10.292,4.229z M10.292,8.535c-0.892,0-1.615-0.723-1.615-1.615S9.4,5.306,10.292,5.306\n                            c0.891,0,1.614,0.722,1.614,1.614S11.184,8.535,10.292,8.535z M10.292,1C6.725,1,3.834,3.892,3.834,7.458\n                            c0,3.567,6.458,10.764,6.458,10.764s6.458-7.196,6.458-10.764C16.75,3.892,13.859,1,10.292,1z M4.91,7.525\n                            c0-3.009,2.41-5.449,5.382-5.449c2.971,0,5.381,2.44,5.381,5.449s-5.381,9.082-5.381,9.082S4.91,10.535,4.91,7.525z"], ["d", "M13.372,1.781H6.628c-0.696,0-1.265,0.569-1.265,1.265v13.91c0,0.695,0.569,1.265,1.265,1.265h6.744c0.695,0,1.265-0.569,1.265-1.265V3.045C14.637,2.35,14.067,1.781,13.372,1.781 M13.794,16.955c0,0.228-0.194,0.421-0.422,0.421H6.628c-0.228,0-0.421-0.193-0.421-0.421v-0.843h7.587V16.955z M13.794,15.269H6.207V4.731h7.587V15.269z M13.794,3.888H6.207V3.045c0-0.228,0.194-0.421,0.421-0.421h6.744c0.228,0,0.422,0.194,0.422,0.421V3.888z"], ["fill", "none", "d", "M10.292,4.229c-1.487,0-2.691,1.205-2.691,2.691s1.205,2.691,2.691,2.691s2.69-1.205,2.69-2.691\n                    S11.779,4.229,10.292,4.229z M10.292,8.535c-0.892,0-1.615-0.723-1.615-1.615S9.4,5.306,10.292,5.306\n                    c0.891,0,1.614,0.722,1.614,1.614S11.184,8.535,10.292,8.535z M10.292,1C6.725,1,3.834,3.892,3.834,7.458\n                    c0,3.567,6.458,10.764,6.458,10.764s6.458-7.196,6.458-10.764C16.75,3.892,13.859,1,10.292,1z M4.91,7.525\n                    c0-3.009,2.41-5.449,5.382-5.449c2.971,0,5.381,2.44,5.381,5.449s-5.381,9.082-5.381,9.082S4.91,10.535,4.91,7.525z"], [1, "payment-text"], [1, "payment-text", "cost-div", "mr-4"]], template: function MediaDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MediaDetailComponent_div_8_Template, 4, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, MediaDetailComponent_div_26_Template, 5, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, MediaDetailComponent_div_27_Template, 5, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, MediaDetailComponent_div_28_Template, 3, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, MediaDetailComponent_div_29_Template, 3, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, MediaDetailComponent_div_30_Template, 3, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, MediaDetailComponent_div_32_Template, 2, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, MediaDetailComponent_div_33_Template, 2, 1, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MediaDetailComponent_Template_div_click_34_listener() { return ctx.updateStatus("Accept"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Accept ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MediaDetailComponent_Template_div_click_36_listener() { return ctx.updateStatus("Decline"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Decline ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.mediaDetails == null ? null : ctx.mediaDetails.gallery == null ? null : ctx.mediaDetails.gallery.cover, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mediaType == "type2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.mediaDetails.ownerName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](", ", ctx.mediaDetails.someId, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.mediaDetails.model);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mediaType == "type1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mediaType == "type1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mediaType == "type2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mediaType == "type2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mediaType == "type2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mediaDetails.paymentPending);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mediaDetails.paymentPending);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".accept-btn[_ngcontent-%COMP%], .decline-btn[_ngcontent-%COMP%]{\n    text-align: center;\n    line-height: 49px;\n    margin-top: 5px;\n    width: 112px;\n    margin-right: 0px!important;\n}\n.lighter-text[_ngcontent-%COMP%]{\n    color: #C1C1C1;\n}\n.payment-text[_ngcontent-%COMP%]{\n    text-align: right;\n    font-size: 18px;\n    color: #5FD65F;\n}\n.accept-btn[_ngcontent-%COMP%]{\n    background: #5FD65F 0% 0% no-repeat padding-box;\n    border-radius: 14px;\n    color: #fff;\n}\n.decline-btn[_ngcontent-%COMP%]{\n    background: #FF6E6E 0% 0% no-repeat padding-box;\n    border-radius: 14px;\n    color: #fff;\n}\n.images[_ngcontent-%COMP%]{\n    width: 143px;\n    height: 134px;\n    border-radius: 11px;\n}\n.prev-icon[_ngcontent-%COMP%], .next-icon[_ngcontent-%COMP%]{\n    z-index: 1;\n    top: calc(50% - 20px);\n}\n.prev-icon[_ngcontent-%COMP%]   .svg-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%], .svg-icon[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%], .svg-icon[_ngcontent-%COMP%]   rect[_ngcontent-%COMP%], .next-icon[_ngcontent-%COMP%]   .svg-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%], .svg-icon[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%], .svg-icon[_ngcontent-%COMP%]   rect[_ngcontent-%COMP%]{\n      fill: #fff;\n  }\n.prev-icon[_ngcontent-%COMP%]{\n    left: 10px;\n}\n.next-icon[_ngcontent-%COMP%]{\n    right: 10px;\n}\n.images[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 100%;\n    border-radius: 11px;\n\n}\nsvg[_ngcontent-%COMP%]{\n    height: 15px;\n    width: 15px;\n}\n.svg-icon[_ngcontent-%COMP%] {\n    width: 1em;\n    height: 1em;\n  }\n.svg-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%], .svg-icon[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%], .svg-icon[_ngcontent-%COMP%]   rect[_ngcontent-%COMP%] {\n    fill: #C1C1C1;\n  }\n.svg-icon[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n    stroke: #C1C1C1;\n    stroke-width: 1;\n  }\n.cost-div[_ngcontent-%COMP%]{\n    color: #556BE7;\n}\n.address-layover[_ngcontent-%COMP%]{\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    color: #FFFFFF;\n    background: #A7A7A7 0% 0% no-repeat padding-box;\n    border-radius: 0px 0px 11px 11px;\n}\n.img-container[_ngcontent-%COMP%]{\n    position: relative;\n    height: 100%;\n    width: 100%;\n}\n.img-container[_ngcontent-%COMP%]   .svg-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%], .svg-icon[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%], .svg-icon[_ngcontent-%COMP%]   rect[_ngcontent-%COMP%]{\n    fill: #fff;\n\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1zZWN0aW9uL2dlbmVyYWwtY29tcG9uZW50cy9tZWRpYS1saXN0L21lZGlhLWRldGFpbC9tZWRpYS1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFlBQVk7SUFDWiwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsY0FBYztBQUNsQjtBQUNBO0lBQ0ksK0NBQStDO0lBQy9DLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLCtDQUErQztJQUMvQyxtQkFBbUI7SUFDbkIsV0FBVztBQUNmO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLHFCQUFxQjtBQUN6QjtBQUNBOzs7OztNQUtNLFVBQVU7RUFDZDtBQUNGO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1COztBQUV2QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7RUFDYjtBQUVBOzs7SUFHRSxhQUFhO0VBQ2Y7QUFFQTtJQUNFLGVBQWU7SUFDZixlQUFlO0VBQ2pCO0FBRUY7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxjQUFjO0lBQ2QsK0NBQStDO0lBQy9DLGdDQUFnQztBQUNwQztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFFQTs7O0lBR0ksVUFBVTs7RUFFWiIsImZpbGUiOiJzcmMvYXBwL21haW4tc2VjdGlvbi9nZW5lcmFsLWNvbXBvbmVudHMvbWVkaWEtbGlzdC9tZWRpYS1kZXRhaWwvbWVkaWEtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWNjZXB0LWJ0biwgLmRlY2xpbmUtYnRue1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogNDlweDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgd2lkdGg6IDExMnB4O1xuICAgIG1hcmdpbi1yaWdodDogMHB4IWltcG9ydGFudDtcbn1cbi5saWdodGVyLXRleHR7XG4gICAgY29sb3I6ICNDMUMxQzE7XG59XG4ucGF5bWVudC10ZXh0e1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogIzVGRDY1Rjtcbn1cbi5hY2NlcHQtYnRue1xuICAgIGJhY2tncm91bmQ6ICM1RkQ2NUYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gICAgY29sb3I6ICNmZmY7XG59XG4uZGVjbGluZS1idG57XG4gICAgYmFja2dyb3VuZDogI0ZGNkU2RSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgICBjb2xvcjogI2ZmZjtcbn1cbi5pbWFnZXN7XG4gICAgd2lkdGg6IDE0M3B4O1xuICAgIGhlaWdodDogMTM0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTFweDtcbn1cbi5wcmV2LWljb24sIC5uZXh0LWljb257XG4gICAgei1pbmRleDogMTtcbiAgICB0b3A6IGNhbGMoNTAlIC0gMjBweCk7XG59XG4ucHJldi1pY29uIC5zdmctaWNvbiBwYXRoLFxuICAuc3ZnLWljb24gcG9seWdvbixcbiAgLnN2Zy1pY29uIHJlY3QsLm5leHQtaWNvbiAuc3ZnLWljb24gcGF0aCxcbiAgLnN2Zy1pY29uIHBvbHlnb24sXG4gIC5zdmctaWNvbiByZWN0e1xuICAgICAgZmlsbDogI2ZmZjtcbiAgfVxuLnByZXYtaWNvbntcbiAgICBsZWZ0OiAxMHB4O1xufVxuLm5leHQtaWNvbntcbiAgICByaWdodDogMTBweDtcbn1cbi5pbWFnZXMgaW1ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMXB4O1xuXG59XG5zdmd7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIHdpZHRoOiAxNXB4O1xufVxuXG4uc3ZnLWljb24ge1xuICAgIHdpZHRoOiAxZW07XG4gICAgaGVpZ2h0OiAxZW07XG4gIH1cbiAgXG4gIC5zdmctaWNvbiBwYXRoLFxuICAuc3ZnLWljb24gcG9seWdvbixcbiAgLnN2Zy1pY29uIHJlY3Qge1xuICAgIGZpbGw6ICNDMUMxQzE7XG4gIH1cbiAgXG4gIC5zdmctaWNvbiBjaXJjbGUge1xuICAgIHN0cm9rZTogI0MxQzFDMTtcbiAgICBzdHJva2Utd2lkdGg6IDE7XG4gIH1cblxuLmNvc3QtZGl2e1xuICAgIGNvbG9yOiAjNTU2QkU3O1xufVxuXG4uYWRkcmVzcy1sYXlvdmVye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgYmFja2dyb3VuZDogI0E3QTdBNyAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxMXB4IDExcHg7XG59XG5cbi5pbWctY29udGFpbmVye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5pbWctY29udGFpbmVyIC5zdmctaWNvbiBwYXRoLFxuICAuc3ZnLWljb24gcG9seWdvbixcbiAgLnN2Zy1pY29uIHJlY3R7XG4gICAgZmlsbDogI2ZmZjtcblxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MediaDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-media-detail',
                templateUrl: './media-detail.component.html',
                styleUrls: ['./media-detail.component.css']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }]; }, { mediaDetails: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['mediaDetails']
        }], mediaType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['mediaType']
        }] }); })();


/***/ }),

/***/ "./src/app/main-section/general-components/media-list/media-list.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/main-section/general-components/media-list/media-list.component.ts ***!
  \************************************************************************************/
/*! exports provided: MediaListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaListComponent", function() { return MediaListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var _media_detail_media_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./media-detail/media-detail.component */ "./src/app/main-section/general-components/media-list/media-detail/media-detail.component.ts");





function MediaListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-media-detail", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mediaDetails", item_r3)("mediaType", ctx_r0.mediaType);
} }
function MediaListComponent_div_21_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MediaListComponent_div_21_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const page_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return _r1.setCurrent(page_r4.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r4.label);
} }
function MediaListComponent_div_21_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r4.label);
} }
function MediaListComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MediaListComponent_div_21_a_1_Template, 3, 1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MediaListComponent_div_21_div_2_Template, 3, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("current", _r1.getCurrent() === page_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.getCurrent() !== page_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.getCurrent() === page_r4.value);
} }
const _c0 = function (a1, a2) { return { id: "media-paginate", itemsPerPage: a1, currentPage: a2 }; };
const _c1 = function (a0) { return { "disabled": a0 }; };
class MediaListComponent {
    constructor() {
        this.currentPage = 1;
        this.itemsPerPage = 5;
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pageChange.subscribe(res => {
            this.currentPage = res;
        });
    }
    ngOnInit() {
    }
}
MediaListComponent.ɵfac = function MediaListComponent_Factory(t) { return new (t || MediaListComponent)(); };
MediaListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MediaListComponent, selectors: [["app-media-list"]], inputs: { mediaCollection: "mediaCollection", mediaType: "mediaType" }, decls: 38, vars: 18, consts: [[4, "ngFor", "ngForOf"], [1, "mx-auto", "d-table", "mt-5"], ["id", "media-paginate", 3, "pageChange"], ["p", "paginationApi"], [1, "pagination-previous"], [1, "cursor-pointer", 3, "ngClass", "click"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "52", "height", "52", "viewBox", "0 0 52 52"], ["id", "a", "x", "0", "y", "0", "width", "52", "height", "52", "filterUnits", "userSpaceOnUse"], ["dy", "3", "input", "SourceAlpha"], ["stdDeviation", "3", "result", "b"], ["flood-opacity", "0.392"], ["operator", "in", "in2", "b"], ["in", "SourceGraphic"], ["transform", "translate(9 6)"], ["transform", "matrix(1, 0, 0, 1, -9, -6)", 1, "c"], ["d", "M37,20A17,17,0,1,1,20,3,17,17,0,0,1,37,20Z", "transform", "translate(6 3)", 1, "a"], ["d", "M18.646,12,12,18.646l6.646,6.646", "transform", "translate(1.345 -1.646)", 1, "b"], ["class", "page-lists ", 3, "current", 4, "ngFor", "ngForOf"], [1, "pagination-next"], ["d", "M3,20A17,17,0,1,0,20,3,17,17,0,0,0,3,20Z", "transform", "translate(6 3)", 1, "a"], ["d", "M12,12l6.646,6.646L12,25.292", "transform", "translate(2.009 -1.646)", 1, "b"], [3, "mediaDetails", "mediaType"], [1, "page-lists"], ["style", "color: #000000;", "class", "cursor-pointer", 3, "click", 4, "ngIf"], ["class", "page-selected ", 4, "ngIf"], [1, "cursor-pointer", 2, "color", "#000000", 3, "click"], [1, "page-selected"]], template: function MediaListComponent_Template(rf, ctx) { if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MediaListComponent_div_0_Template, 2, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "pagination-template", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function MediaListComponent_Template_pagination_template_pageChange_3_listener($event) { return ctx.pageChange.emit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MediaListComponent_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return _r1.previous(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "style");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ".a{fill:#fff;}.b{fill:none;stroke:#556be7;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}.c{filter:url(#a);}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "filter", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "feOffset", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "feGaussianBlur", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "feFlood", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "feComposite", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "feComposite", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "g", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "g", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, MediaListComponent_div_21_Template, 3, 4, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MediaListComponent_Template_a_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return _r1.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "style");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, ".a{fill:#fff;}.b{fill:none;stroke:#556be7;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}.c{filter:url(#a);}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "filter", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "feOffset", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "feGaussianBlur", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "feFlood", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "feComposite", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "feComposite", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "g", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "g", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 8, ctx.mediaCollection, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](11, _c0, ctx.itemsPerPage, ctx.currentPage)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", _r1.isFirstPage());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c1, _r1.isFirstPage() == true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r1.pages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", _r1.isLastPage());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c1, _r1.isLastPage() == true));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_2__["PaginationControlsDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _media_detail_media_detail_component__WEBPACK_IMPORTED_MODULE_3__["MediaDetailComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_2__["PaginatePipe"]], styles: ["#media-paginate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\n    float: left;\n    margin-left: 10px;\n    line-height: 34px;\n}\n.page-lists[_ngcontent-%COMP%]{\n    margin-top: 5px;\n}\n.page-selected[_ngcontent-%COMP%]{\n    background: #556BE7 0% 0% no-repeat padding-box;\n    color: #ffffff;\n    border-radius: 50%;\n    height: 34px;\n    width: 34px;\n    text-align: center;\n}\n.disabled[_ngcontent-%COMP%]{\n    pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1zZWN0aW9uL2dlbmVyYWwtY29tcG9uZW50cy9tZWRpYS1saXN0L21lZGlhLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSwrQ0FBK0M7SUFDL0MsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvbWFpbi1zZWN0aW9uL2dlbmVyYWwtY29tcG9uZW50cy9tZWRpYS1saXN0L21lZGlhLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtZWRpYS1wYWdpbmF0ZSBkaXZ7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDM0cHg7XG59XG4ucGFnZS1saXN0c3tcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59XG4ucGFnZS1zZWxlY3RlZHtcbiAgICBiYWNrZ3JvdW5kOiAjNTU2QkU3IDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgaGVpZ2h0OiAzNHB4O1xuICAgIHdpZHRoOiAzNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5kaXNhYmxlZHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MediaListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-media-list',
                templateUrl: './media-list.component.html',
                styleUrls: ['./media-list.component.css']
            }]
    }], function () { return []; }, { mediaCollection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["mediaCollection"]
        }], mediaType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["mediaType"]
        }] }); })();


/***/ }),

/***/ "./src/app/main-section/general-components/search-input/search-input.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/main-section/general-components/search-input/search-input.component.ts ***!
  \****************************************************************************************/
/*! exports provided: SearchInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchInputComponent", function() { return SearchInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



class SearchInputComponent {
    constructor() {
        this.onSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.searchText = "";
    }
    ngOnInit() {
    }
    onSearchExecution() {
        this.onSearch.emit(this.searchText);
    }
    onKeyPress(e) {
        if (e.keyCode == 13)
            this.onSearchExecution();
    }
}
SearchInputComponent.ɵfac = function SearchInputComponent_Factory(t) { return new (t || SearchInputComponent)(); };
SearchInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchInputComponent, selectors: [["app-search-input"]], outputs: { onSearch: "onSearch" }, decls: 6, vars: 1, consts: [[1, "input-group", "mb-3", "custom-shadow"], [1, "input-group-prepend"], ["id", "inputGroup-sizing-default", 1, "input-group-text"], ["viewBox", "0 0 20 20", 1, "svg-icon"], ["d", "M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"], ["type", "text", "aria-label", "Search", "name", "Search", "placeholder", "Search", "aria-describedby", "inputGroup-sizing-default", 1, "form-control", "border-left-0", 3, "ngModel", "ngModelChange", "keypress"]], template: function SearchInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchInputComponent_Template_input_ngModelChange_5_listener($event) { return ctx.searchText = $event; })("keypress", function SearchInputComponent_Template_input_keypress_5_listener($event) { return ctx.onKeyPress($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: [".input-group-text[_ngcontent-%COMP%]{\n    background: transparent;\n}\ninput[_ngcontent-%COMP%]{\n  height: 100%;\n}\n.input-group[_ngcontent-%COMP%]{\n  width: 330px;\n  height: 48px;\n  line-height: 48px;\n}\n.custom-shadow[_ngcontent-%COMP%]{\n    box-shadow: 0px 0px 6px #00000029;\n\n}\ntextarea[_ngcontent-%COMP%]:hover, input[_ngcontent-%COMP%]:hover, textarea[_ngcontent-%COMP%]:active, input[_ngcontent-%COMP%]:active, textarea[_ngcontent-%COMP%]:focus, input[_ngcontent-%COMP%]:focus, button[_ngcontent-%COMP%]:focus, button[_ngcontent-%COMP%]:active, button[_ngcontent-%COMP%]:hover, label[_ngcontent-%COMP%]:focus, .btn[_ngcontent-%COMP%]:active, .btn.active[_ngcontent-%COMP%]\n{\n    outline:0px !important;\n    -webkit-appearance:none;\n    box-shadow: none;\n    border: 1px solid #ced4da;\n}\n.svg-icon[_ngcontent-%COMP%] {\n    width: 1em;\n    height: 1em;\n  }\n.svg-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%], .svg-icon[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%], .svg-icon[_ngcontent-%COMP%]   rect[_ngcontent-%COMP%] {\n    fill: #000000;\n  }\n.svg-icon[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n    stroke: #000000;\n    stroke-width: 1;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1zZWN0aW9uL2dlbmVyYWwtY29tcG9uZW50cy9zZWFyY2gtaW5wdXQvc2VhcmNoLWlucHV0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7QUFDQTtJQUNJLGlDQUFpQzs7QUFFckM7QUFDQTs7Ozs7Ozs7Ozs7OztJQWFJLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7RUFDYjtBQUVBOzs7SUFHRSxhQUFhO0VBQ2Y7QUFFQTtJQUNFLGVBQWU7SUFDZixlQUFlO0VBQ2pCIiwiZmlsZSI6InNyYy9hcHAvbWFpbi1zZWN0aW9uL2dlbmVyYWwtY29tcG9uZW50cy9zZWFyY2gtaW5wdXQvc2VhcmNoLWlucHV0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQtZ3JvdXAtdGV4dHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbmlucHV0e1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uaW5wdXQtZ3JvdXB7XG4gIHdpZHRoOiAzMzBweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBsaW5lLWhlaWdodDogNDhweDtcbn1cbi5jdXN0b20tc2hhZG93e1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNnB4ICMwMDAwMDAyOTtcblxufVxudGV4dGFyZWE6aG92ZXIsIFxuaW5wdXQ6aG92ZXIsIFxudGV4dGFyZWE6YWN0aXZlLCBcbmlucHV0OmFjdGl2ZSwgXG50ZXh0YXJlYTpmb2N1cywgXG5pbnB1dDpmb2N1cyxcbmJ1dHRvbjpmb2N1cyxcbmJ1dHRvbjphY3RpdmUsXG5idXR0b246aG92ZXIsXG5sYWJlbDpmb2N1cyxcbi5idG46YWN0aXZlLFxuLmJ0bi5hY3RpdmVcbntcbiAgICBvdXRsaW5lOjBweCAhaW1wb3J0YW50O1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTpub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbn1cbi5zdmctaWNvbiB7XG4gICAgd2lkdGg6IDFlbTtcbiAgICBoZWlnaHQ6IDFlbTtcbiAgfVxuICBcbiAgLnN2Zy1pY29uIHBhdGgsXG4gIC5zdmctaWNvbiBwb2x5Z29uLFxuICAuc3ZnLWljb24gcmVjdCB7XG4gICAgZmlsbDogIzAwMDAwMDtcbiAgfVxuICBcbiAgLnN2Zy1pY29uIGNpcmNsZSB7XG4gICAgc3Ryb2tlOiAjMDAwMDAwO1xuICAgIHN0cm9rZS13aWR0aDogMTtcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search-input',
                templateUrl: './search-input.component.html',
                styleUrls: ['./search-input.component.css']
            }]
    }], function () { return []; }, { onSearch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/main-section/general-components/sort-options/sort-options.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/main-section/general-components/sort-options/sort-options.component.ts ***!
  \****************************************************************************************/
/*! exports provided: SortOptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortOptionsComponent", function() { return SortOptionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function SortOptionsComponent_div_11_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const city_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", city_r3, " ");
} }
function SortOptionsComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Type your city name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SortOptionsComponent_div_11_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.selectedLocation = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Popular Cities");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SortOptionsComponent_div_11_div_8_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.selectedLocation);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.topCities);
} }
class SortOptionsComponent {
    constructor() {
        this.showLocation = false;
        this.topCities = ["Delhi", "Mumbai", "Gurgaon", "Banglore"];
    }
    ngOnInit() {
    }
    onDateSelect(e) {
        console.log(e);
    }
    toggleShowLocation() {
        this.showLocation = !this.showLocation;
    }
}
SortOptionsComponent.ɵfac = function SortOptionsComponent_Factory(t) { return new (t || SortOptionsComponent)(); };
SortOptionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SortOptionsComponent, selectors: [["app-sort-options"]], decls: 13, vars: 2, consts: [[1, "float-left", "mt-4", "mr-3"], [1, "sort-filter", "mt-4", "float-left", "position-relative"], [1, "badge", "p-2", "ml-2", "cursor-pointer", 3, "click"], [1, "position-absolute", 2, "left", "5px", "bottom", "0px"], ["hidden", "", "type", "text", "ngbDatepicker", "", 3, "ngModel", "ngModelChange", "dateSelect"], ["d1", "ngbDatepicker"], [1, "d-inline", "position-relative"], ["class", "location-search-box p-2", 4, "ngIf"], [1, "clear"], [1, "location-search-box", "p-2"], ["type", "text", 1, "form-control", "my-2", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"]], template: function SortOptionsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sort by:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SortOptionsComponent_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SortOptionsComponent_Template_input_ngModelChange_6_listener($event) { return ctx.selectedDate = $event; })("dateSelect", function SortOptionsComponent_Template_input_dateSelect_6_listener($event) { return ctx.onDateSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SortOptionsComponent_Template_span_click_9_listener() { return ctx.toggleShowLocation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SortOptionsComponent_div_11_Template, 9, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 8);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showLocation);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbInputDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".sort-filter[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{\n    background-color: #556BE7;\n    color: #ffffff;\n    font-weight: normal;\n}\n.location-search-box[_ngcontent-%COMP%]{\n    background: #FFFFFF 0% 0% no-repeat padding-box;\n    border: 1px solid #DBDBDB;\n    border-radius: 8px;\n    position: absolute;\n    z-index: 1;\n    min-width: 190px;\n    left: 5px;\n    top: 26px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1zZWN0aW9uL2dlbmVyYWwtY29tcG9uZW50cy9zb3J0LW9wdGlvbnMvc29ydC1vcHRpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksK0NBQStDO0lBQy9DLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFNBQVM7QUFDYiIsImZpbGUiOiJzcmMvYXBwL21haW4tc2VjdGlvbi9nZW5lcmFsLWNvbXBvbmVudHMvc29ydC1vcHRpb25zL3NvcnQtb3B0aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNvcnQtZmlsdGVyIC5iYWRnZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU2QkU3O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4ubG9jYXRpb24tc2VhcmNoLWJveHtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjREJEQkRCO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTtcbiAgICBtaW4td2lkdGg6IDE5MHB4O1xuICAgIGxlZnQ6IDVweDtcbiAgICB0b3A6IDI2cHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SortOptionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sort-options',
                templateUrl: './sort-options.component.html',
                styleUrls: ['./sort-options.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/main-section/main-section-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/main-section/main-section-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: MainSectionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainSectionRoutingModule", function() { return MainSectionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pic_of_the_day_pic_of_the_day_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pic-of-the-day/pic-of-the-day.component */ "./src/app/main-section/pic-of-the-day/pic-of-the-day.component.ts");
/* harmony import */ var _used_cameras_used_cameras_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./used-cameras/used-cameras.component */ "./src/app/main-section/used-cameras/used-cameras.component.ts");






const routes = [
    { path: '', redirectTo: 'pic-of-the-day' },
    { path: 'pic-of-the-day', component: _pic_of_the_day_pic_of_the_day_component__WEBPACK_IMPORTED_MODULE_2__["PicOfTheDayComponent"] },
    { path: 'used-cameras', component: _used_cameras_used_cameras_component__WEBPACK_IMPORTED_MODULE_3__["UsedCamerasComponent"] },
];
class MainSectionRoutingModule {
}
MainSectionRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MainSectionRoutingModule });
MainSectionRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MainSectionRoutingModule_Factory(t) { return new (t || MainSectionRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainSectionRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainSectionRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/main-section/main-section.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/main-section/main-section.module.ts ***!
  \*****************************************************/
/*! exports provided: MainSectionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainSectionModule", function() { return MainSectionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _main_section_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-section-routing.module */ "./src/app/main-section/main-section-routing.module.ts");
/* harmony import */ var _pic_of_the_day_pic_of_the_day_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pic-of-the-day/pic-of-the-day.component */ "./src/app/main-section/pic-of-the-day/pic-of-the-day.component.ts");
/* harmony import */ var _used_cameras_used_cameras_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./used-cameras/used-cameras.component */ "./src/app/main-section/used-cameras/used-cameras.component.ts");
/* harmony import */ var _general_components_media_list_media_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./general-components/media-list/media-list.component */ "./src/app/main-section/general-components/media-list/media-list.component.ts");
/* harmony import */ var _general_components_media_list_media_detail_media_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./general-components/media-list/media-detail/media-detail.component */ "./src/app/main-section/general-components/media-list/media-detail/media-detail.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var _general_components_search_input_search_input_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./general-components/search-input/search-input.component */ "./src/app/main-section/general-components/search-input/search-input.component.ts");
/* harmony import */ var _general_components_sort_options_sort_options_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./general-components/sort-options/sort-options.component */ "./src/app/main-section/general-components/sort-options/sort-options.component.ts");
/* harmony import */ var _modals_status_update_status_update_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modals/status-update/status-update.component */ "./src/app/main-section/modals/status-update/status-update.component.ts");
/* harmony import */ var _modals_thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modals/thank-you/thank-you.component */ "./src/app/main-section/modals/thank-you/thank-you.component.ts");















class MainSectionModule {
}
MainSectionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MainSectionModule });
MainSectionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MainSectionModule_Factory(t) { return new (t || MainSectionModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _main_section_routing_module__WEBPACK_IMPORTED_MODULE_4__["MainSectionRoutingModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainSectionModule, { declarations: [_pic_of_the_day_pic_of_the_day_component__WEBPACK_IMPORTED_MODULE_5__["PicOfTheDayComponent"], _used_cameras_used_cameras_component__WEBPACK_IMPORTED_MODULE_6__["UsedCamerasComponent"], _general_components_media_list_media_list_component__WEBPACK_IMPORTED_MODULE_7__["MediaListComponent"], _general_components_media_list_media_detail_media_detail_component__WEBPACK_IMPORTED_MODULE_8__["MediaDetailComponent"], _general_components_search_input_search_input_component__WEBPACK_IMPORTED_MODULE_10__["SearchInputComponent"], _general_components_sort_options_sort_options_component__WEBPACK_IMPORTED_MODULE_11__["SortOptionsComponent"], _modals_status_update_status_update_component__WEBPACK_IMPORTED_MODULE_12__["StatusUpdateComponent"], _modals_thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_13__["ThankYouComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _main_section_routing_module__WEBPACK_IMPORTED_MODULE_4__["MainSectionRoutingModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainSectionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_pic_of_the_day_pic_of_the_day_component__WEBPACK_IMPORTED_MODULE_5__["PicOfTheDayComponent"], _used_cameras_used_cameras_component__WEBPACK_IMPORTED_MODULE_6__["UsedCamerasComponent"], _general_components_media_list_media_list_component__WEBPACK_IMPORTED_MODULE_7__["MediaListComponent"], _general_components_media_list_media_detail_media_detail_component__WEBPACK_IMPORTED_MODULE_8__["MediaDetailComponent"], _general_components_search_input_search_input_component__WEBPACK_IMPORTED_MODULE_10__["SearchInputComponent"], _general_components_sort_options_sort_options_component__WEBPACK_IMPORTED_MODULE_11__["SortOptionsComponent"], _modals_status_update_status_update_component__WEBPACK_IMPORTED_MODULE_12__["StatusUpdateComponent"], _modals_thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_13__["ThankYouComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _main_section_routing_module__WEBPACK_IMPORTED_MODULE_4__["MainSectionRoutingModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/main-section/modals/status-update/status-update.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/main-section/modals/status-update/status-update.component.ts ***!
  \******************************************************************************/
/*! exports provided: StatusUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusUpdateComponent", function() { return StatusUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../thank-you/thank-you.component */ "./src/app/main-section/modals/thank-you/thank-you.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");




class StatusUpdateComponent {
    constructor(modalService, activeModal) {
        this.modalService = modalService;
        this.activeModal = activeModal;
    }
    ngOnInit() {
    }
    onSubmit() {
        this.activeModal.close();
        const modalRef = this.modalService.open(_thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_1__["ThankYouComponent"], { centered: true });
    }
}
StatusUpdateComponent.ɵfac = function StatusUpdateComponent_Factory(t) { return new (t || StatusUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"])); };
StatusUpdateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StatusUpdateComponent, selectors: [["app-status-update"]], decls: 13, vars: 0, consts: [[1, "p-3"], [1, "back-icon-with-text", "cursor-pointer", 3, "click"], ["viewBox", "0 0 20 20", 1, "svg-icon", "mr-2"], ["fill", "none", "d", "M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0\n            L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109\n            c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483\n            c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788\n            S18.707,9.212,18.271,9.212z"], ["name", "comment", "placeholder", "Type here..", "id", "comment", "rows", "5", 1, "form-control", "w-100", "mt-3"], [1, "submit-btn", "mt-4", "float-right", "px-4", "py-2", "cursor-pointer", 3, "click"], [1, "clear"]], template: function StatusUpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StatusUpdateComponent_Template_span_click_1_listener() { return ctx.activeModal.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Comment the reason");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "textarea", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StatusUpdateComponent_Template_div_click_10_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".submit-btn[_ngcontent-%COMP%]{\n    border: 1px solid #556BE7;\n    border-radius: 16px;\n}\n\n\n.svg-icon[_ngcontent-%COMP%] {\n    width: 1em;\n    height: 1em;\n  }\n\n\n.svg-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%], .svg-icon[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%], .svg-icon[_ngcontent-%COMP%]   rect[_ngcontent-%COMP%] {\n    fill: #C1C1C1;\n  }\n\n\n.svg-icon[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n    stroke: #C1C1C1;\n    stroke-width: 1;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1zZWN0aW9uL21vZGFscy9zdGF0dXMtdXBkYXRlL3N0YXR1cy11cGRhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7OztBQUdBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7RUFDYjs7O0FBRUE7OztJQUdFLGFBQWE7RUFDZjs7O0FBRUE7SUFDRSxlQUFlO0lBQ2YsZUFBZTtFQUNqQiIsImZpbGUiOiJzcmMvYXBwL21haW4tc2VjdGlvbi9tb2RhbHMvc3RhdHVzLXVwZGF0ZS9zdGF0dXMtdXBkYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3VibWl0LWJ0bntcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTU2QkU3O1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG59XG5cblxuLnN2Zy1pY29uIHtcbiAgICB3aWR0aDogMWVtO1xuICAgIGhlaWdodDogMWVtO1xuICB9XG4gIFxuICAuc3ZnLWljb24gcGF0aCxcbiAgLnN2Zy1pY29uIHBvbHlnb24sXG4gIC5zdmctaWNvbiByZWN0IHtcbiAgICBmaWxsOiAjQzFDMUMxO1xuICB9XG4gIFxuICAuc3ZnLWljb24gY2lyY2xlIHtcbiAgICBzdHJva2U6ICNDMUMxQzE7XG4gICAgc3Ryb2tlLXdpZHRoOiAxO1xuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatusUpdateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-status-update',
                templateUrl: './status-update.component.html',
                styleUrls: ['./status-update.component.css']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }]; }, null); })();


/***/ }),

/***/ "./src/app/main-section/modals/thank-you/thank-you.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/main-section/modals/thank-you/thank-you.component.ts ***!
  \**********************************************************************/
/*! exports provided: ThankYouComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankYouComponent", function() { return ThankYouComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");



class ThankYouComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
    }
    ngOnInit() {
    }
    onSubmit() {
        this.activeModal.close();
    }
}
ThankYouComponent.ɵfac = function ThankYouComponent_Factory(t) { return new (t || ThankYouComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"])); };
ThankYouComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ThankYouComponent, selectors: [["app-thank-you"]], decls: 5, vars: 0, consts: [[1, "p-5", "text-center"], [1, "thank-you"], [1, "submit-btn", "mt-4", "mx-auto", "d-table", "px-4", "py-2", "cursor-pointer", 3, "click"]], template: function ThankYouComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Thank you ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ThankYouComponent_Template_div_click_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Go to Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".thank-you[_ngcontent-%COMP%]{\n    font-size:  69px;\n    letter-spacing: 0px;\n    color: #C9BC59;\n}\n\n.submit-btn[_ngcontent-%COMP%]{\n    border: 1px solid #556BE7;\n    border-radius: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1zZWN0aW9uL21vZGFscy90aGFuay15b3UvdGhhbmsteW91LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvbWFpbi1zZWN0aW9uL21vZGFscy90aGFuay15b3UvdGhhbmsteW91LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGhhbmsteW91e1xuICAgIGZvbnQtc2l6ZTogIDY5cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgICBjb2xvcjogI0M5QkM1OTtcbn1cblxuLnN1Ym1pdC1idG57XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzU1NkJFNztcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThankYouComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-thank-you',
                templateUrl: './thank-you.component.html',
                styleUrls: ['./thank-you.component.css']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"] }]; }, null); })();


/***/ }),

/***/ "./src/app/main-section/pic-of-the-day/pic-of-the-day.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/main-section/pic-of-the-day/pic-of-the-day.component.ts ***!
  \*************************************************************************/
/*! exports provided: PicOfTheDayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PicOfTheDayComponent", function() { return PicOfTheDayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _general_components_search_input_search_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../general-components/search-input/search-input.component */ "./src/app/main-section/general-components/search-input/search-input.component.ts");
/* harmony import */ var _general_components_sort_options_sort_options_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../general-components/sort-options/sort-options.component */ "./src/app/main-section/general-components/sort-options/sort-options.component.ts");
/* harmony import */ var _general_components_media_list_media_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../general-components/media-list/media-list.component */ "./src/app/main-section/general-components/media-list/media-list.component.ts");





class PicOfTheDayComponent {
    constructor() {
        this.mediaCollection = [{
                gallery: {
                    cover: "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg",
                    all: [{
                            url: "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg"
                        }, {
                            url: "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg"
                        }]
                },
                paymentPending: false,
                paymentInfo: {},
                ownerName: "Siddaya Swami",
                someId: "PS2020BGLR001",
                model: "Nikon D705",
                contact: "+91-8576354743",
                address: "Banglore"
            }, {
                gallery: {
                    cover: "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg",
                    all: [{
                            url: "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg"
                        }, {
                            url: "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg"
                        }]
                },
                paymentPending: false,
                paymentInfo: {},
                ownerName: "Another User",
                someId: "PS2020BGLR001",
                model: "Nikon D705",
                contact: "+91-8576354743",
                address: "Banglore"
            }, {
                gallery: {
                    cover: "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg",
                    all: [{
                            url: "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg"
                        }, {
                            url: "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg"
                        }]
                },
                paymentPending: false,
                paymentInfo: {},
                ownerName: "Siddaya Swami",
                someId: "PS2020BGLR001",
                model: "Nikon D705",
                contact: "+91-8576354743",
                address: "Banglore"
            }, {
                gallery: {
                    cover: "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg",
                    all: [{
                            url: "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg"
                        }, {
                            url: "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg"
                        }]
                },
                paymentPending: false,
                paymentInfo: {},
                ownerName: "Another User",
                someId: "PS2020BGLR001",
                model: "Nikon D705",
                contact: "+91-8576354743",
                address: "Banglore"
            }, {
                gallery: {
                    cover: "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg",
                    all: [{
                            url: "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg"
                        }, {
                            url: "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg"
                        }]
                },
                paymentPending: false,
                paymentInfo: {},
                ownerName: "Siddaya Swami",
                someId: "PS2020BGLR001",
                model: "Nikon D705",
                contact: "+91-8576354743",
                address: "Banglore"
            }, {
                gallery: {
                    cover: "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg",
                    all: [{
                            url: "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg"
                        }, {
                            url: "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg"
                        }]
                },
                paymentPending: false,
                paymentInfo: {},
                ownerName: "Another User",
                someId: "PS2020BGLR001",
                model: "Nikon D705",
                contact: "+91-8576354743",
                address: "Banglore"
            }, {
                gallery: {
                    cover: "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg",
                    all: [{
                            url: "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg"
                        }, {
                            url: "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg"
                        }]
                },
                paymentPending: false,
                paymentInfo: {},
                ownerName: "Siddaya Swami",
                someId: "PS2020BGLR001",
                model: "Nikon D705",
                contact: "+91-8576354743",
                address: "Banglore"
            }, {
                gallery: {
                    cover: "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg",
                    all: [{
                            url: "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg"
                        }, {
                            url: "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg"
                        }]
                },
                paymentPending: false,
                paymentInfo: {},
                ownerName: "Another User",
                someId: "PS2020BGLR001",
                model: "Nikon D705",
                contact: "+91-8576354743",
                address: "Banglore"
            }];
    }
    ngOnInit() {
    }
    onSearch(e) {
        console.log(e);
    }
}
PicOfTheDayComponent.ɵfac = function PicOfTheDayComponent_Factory(t) { return new (t || PicOfTheDayComponent)(); };
PicOfTheDayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PicOfTheDayComponent, selectors: [["app-pic-of-the-day"]], decls: 6, vars: 2, consts: [[1, "float-right", 3, "onSearch"], [1, "clear"], [3, "mediaCollection", "mediaType"]], template: function PicOfTheDayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-search-input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSearch", function PicOfTheDayComponent_Template_app_search_input_onSearch_0_listener($event) { return ctx.onSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Showing Results\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-sort-options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-media-list", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mediaCollection", ctx.mediaCollection)("mediaType", "type1");
    } }, directives: [_general_components_search_input_search_input_component__WEBPACK_IMPORTED_MODULE_1__["SearchInputComponent"], _general_components_sort_options_sort_options_component__WEBPACK_IMPORTED_MODULE_2__["SortOptionsComponent"], _general_components_media_list_media_list_component__WEBPACK_IMPORTED_MODULE_3__["MediaListComponent"]], styles: ["h5[_ngcontent-%COMP%]{\n    font-size: 22px!important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1zZWN0aW9uL3BpYy1vZi10aGUtZGF5L3BpYy1vZi10aGUtZGF5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9tYWluLXNlY3Rpb24vcGljLW9mLXRoZS1kYXkvcGljLW9mLXRoZS1kYXkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImg1e1xuICAgIGZvbnQtc2l6ZTogMjJweCFpbXBvcnRhbnQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PicOfTheDayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pic-of-the-day',
                templateUrl: './pic-of-the-day.component.html',
                styleUrls: ['./pic-of-the-day.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/main-section/used-cameras/used-cameras.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/main-section/used-cameras/used-cameras.component.ts ***!
  \*********************************************************************/
/*! exports provided: UsedCamerasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsedCamerasComponent", function() { return UsedCamerasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _general_components_search_input_search_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../general-components/search-input/search-input.component */ "./src/app/main-section/general-components/search-input/search-input.component.ts");
/* harmony import */ var _general_components_sort_options_sort_options_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../general-components/sort-options/sort-options.component */ "./src/app/main-section/general-components/sort-options/sort-options.component.ts");
/* harmony import */ var _general_components_media_list_media_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../general-components/media-list/media-list.component */ "./src/app/main-section/general-components/media-list/media-list.component.ts");





class UsedCamerasComponent {
    constructor() {
        this.mediaCollection = [{
                gallery: {
                    cover: "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg",
                    all: [{
                            url: "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg"
                        }, {
                            url: "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg"
                        }]
                },
                paymentPending: true,
                paymentInfo: {
                    cost: 4999
                },
                ownerName: "Another User",
                someId: "PS2020BGLR001",
                model: "Nikon D705",
                contact: "+91-8576354743",
                address: "Banglore"
            }, {
                gallery: {
                    cover: "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg",
                    all: [{
                            url: "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg"
                        }, {
                            url: "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg"
                        }]
                },
                paymentPending: true,
                paymentInfo: {
                    cost: 4999
                },
                ownerName: "Siddaya Swami",
                someId: "PS2020BGLR001",
                model: "Nikon D705",
                contact: "+91-8576354743",
                address: "Banglore"
            }, {
                gallery: {
                    cover: "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg",
                    all: [{
                            url: "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg"
                        }, {
                            url: "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg"
                        }]
                },
                paymentPending: true,
                paymentInfo: {
                    cost: 4999
                },
                ownerName: "Another User",
                someId: "PS2020BGLR001",
                model: "Nikon D705",
                contact: "+91-8576354743",
                address: "Banglore"
            }, {
                gallery: {
                    cover: "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg",
                    all: [{
                            url: "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg"
                        }, {
                            url: "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg"
                        }]
                },
                paymentPending: true,
                paymentInfo: {
                    cost: 4999
                },
                ownerName: "Siddaya Swami",
                someId: "PS2020BGLR001",
                model: "Nikon D705",
                contact: "+91-8576354743",
                address: "Banglore"
            }, {
                gallery: {
                    cover: "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg",
                    all: [{
                            url: "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg"
                        }, {
                            url: "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg"
                        }]
                },
                paymentPending: true,
                paymentInfo: {
                    cost: 4999
                },
                ownerName: "Another User",
                someId: "PS2020BGLR001",
                model: "Nikon D705",
                contact: "+91-8576354743",
                address: "Banglore"
            }, {
                gallery: {
                    cover: "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg",
                    all: [{
                            url: "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg"
                        }, {
                            url: "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg"
                        }]
                },
                paymentPending: true,
                paymentInfo: {
                    cost: 4999
                },
                ownerName: "Siddaya Swami",
                someId: "PS2020BGLR001",
                model: "Nikon D705",
                contact: "+91-8576354743",
                address: "Banglore"
            }, {
                gallery: {
                    cover: "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg",
                    all: [{
                            url: "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg"
                        }, {
                            url: "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg"
                        }]
                },
                paymentPending: true,
                paymentInfo: {
                    cost: 4999
                },
                ownerName: "Another User",
                someId: "PS2020BGLR001",
                model: "Nikon D705",
                contact: "+91-8576354743",
                address: "Banglore"
            }];
    }
    ngOnInit() {
    }
    onSearch(e) {
        console.log(e);
    }
}
UsedCamerasComponent.ɵfac = function UsedCamerasComponent_Factory(t) { return new (t || UsedCamerasComponent)(); };
UsedCamerasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsedCamerasComponent, selectors: [["app-used-cameras"]], decls: 9, vars: 2, consts: [[1, "float-right", 3, "onSearch"], [1, "clear"], [1, "float-right", "accept-all-btn", "mr-3", "px-3", "mb-4", "cursor-pointer"], [3, "mediaCollection", "mediaType"]], template: function UsedCamerasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-search-input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSearch", function UsedCamerasComponent_Template_app_search_input_onSearch_0_listener($event) { return ctx.onSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Showing Results\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-sort-options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Accept all");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-media-list", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mediaCollection", ctx.mediaCollection)("mediaType", "type2");
    } }, directives: [_general_components_search_input_search_input_component__WEBPACK_IMPORTED_MODULE_1__["SearchInputComponent"], _general_components_sort_options_sort_options_component__WEBPACK_IMPORTED_MODULE_2__["SortOptionsComponent"], _general_components_media_list_media_list_component__WEBPACK_IMPORTED_MODULE_3__["MediaListComponent"]], styles: [".sort-filter[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{\n    background-color: #556BE7;\n    color: #ffffff;\n    font-weight: normal;\n}\n.accept-all-btn[_ngcontent-%COMP%]{\n    background: #1DE21D 0% 0% no-repeat padding-box;\n    border-radius: 8px;\n    line-height: 48px;\n    height: 48px;\n    color: #FFFFFF;\n    text-align: center;\n    width: 125px;\n}\nh5[_ngcontent-%COMP%]{\n    font-size: 22px!important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1zZWN0aW9uL3VzZWQtY2FtZXJhcy91c2VkLWNhbWVyYXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSwrQ0FBK0M7SUFDL0Msa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osY0FBYztJQUNkLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9tYWluLXNlY3Rpb24vdXNlZC1jYW1lcmFzL3VzZWQtY2FtZXJhcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNvcnQtZmlsdGVyIC5iYWRnZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU2QkU3O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4uYWNjZXB0LWFsbC1idG57XG4gICAgYmFja2dyb3VuZDogIzFERTIxRCAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICAgIGhlaWdodDogNDhweDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEyNXB4O1xufVxuaDV7XG4gICAgZm9udC1zaXplOiAyMnB4IWltcG9ydGFudDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsedCamerasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-used-cameras',
                templateUrl: './used-cameras.component.html',
                styleUrls: ['./used-cameras.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=main-section-main-section-module-es2015.js.map