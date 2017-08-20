webpackJsonp([2],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\r\n    height: 80vh;\r\n}\r\nh6 {\r\n    font-size: 1rem;\r\n}\r\n.agent-list {\r\n    background-color: #dcdcdc;\r\n    position: fixed;\r\n    z-index: 100;\r\n    height: 80%;\r\n    width: 20vw;\r\n    top: 20vh;\r\n    left: 0;\r\n    margin-left:-19.5%;\r\n    transition: margin 1s;\r\n    overflow-y: auto;\r\n}\r\n.card, .alert {\r\n    cursor: pointer;\r\n    font-weight: 2px;\r\n    border: 5px;\r\n    border-color: black;\r\n    font-size: 10px;\r\n}\r\n.badge {\r\n    font-size: 0.7rem;\r\n    background-color: #337ab7;\r\n}\r\n.agent-list:hover {\r\n    margin-left: 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <img width=\"300\" src=\"https://www.amne.co/8dde3b4310fb70d44c6eba326d6f63ae.png\">\n</div>\n<h4 class=\"alert alert-success mt-1 mb-0\">Find within 10 miles Real Estate Agencies on Austin </h4>\n<div class=\"container-flow\">\n  <div class=\"form-group mb-0\">\n    <input #address placeholder=\"search for location A\" autocorrect=\"off\" autocapitalize=\"off\" \n      spellcheck=\"off\" type=\"text\" (keyup)=\"onchange($event, 0)\" class=\"form-control col-5 float-left\">\n    <input #address placeholder=\"search for location B\" autocorrect=\"off\" autocapitalize=\"off\" \n      spellcheck=\"off\" type=\"text\" (keyup)=\"onchange($event, 1)\" class=\"form-control float-left col-5\">\n    <button type=\"submit\" class=\"col-2 btn btn-primary mx-auto mt-sm-10\" \n      (click)=\"search()\" [disabled]=\"!locations[0] || !locations[1]\">search</button>\n  </div>\n  <section style=\"position:relative\">\n    <agm-map [latitude]=\"locations[0]?.latitude || Austin.latitude\" [longitude]=\"locations[0]?.longitude || Austin.longitude\" [scrollwheel]=\"true\" [zoom]=\"zoom\">\n      <agm-marker *ngFor=\"let location of locations; let i=index\" [label]=\"i==0?'A':'B'\"   [latitude]=\"location?.latitude\" [longitude]=\"location?.longitude\"></agm-marker>\n      <agm-marker *ngFor=\"let agent of agencies; let i = index\" [label]=\"(i+1)+''\"\n        [latitude]=\"agent.latitude\" [longitude]=\"agent.longitude\" (markerClick)=\"clickedMarker(i)\">\n        <agm-info-window [isOpen]=\"agent.isOpen\">\n          <b>{{agent.name}}</b><br/>\n          {{agent.addr}}\n        </agm-info-window>\n      </agm-marker>\n    </agm-map>\n    <aside class=\"agent-list\">\n      <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n              <h6 class=\"panel-title\">Search Result: <span class=\"badge\">{{agencies.length}}</span></h6>\n          </div>\n          <div class=\"panel-body\">\n              <ul class=\"list-group\">\n                  <li *ngFor=\"let agent of agencies; let i = index\" class=\"list-group-item\" (click)=\"clickAgent(i)\">\n                    <div><span class=\"badge\">{{i + 1}}</span></div>\n                    <div class=\"card\">{{agent.name}}</div>\n                    <div class=\"alert alert-success\">{{agent.addr}}</div>\n                  </li>\n                </ul>\n          </div>              \n      </div>       \n    </aside >\n  </section>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_bindCallback__ = __webpack_require__("../../../../rxjs/add/observable/bindCallback.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_bindCallback___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_bindCallback__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(mapsAPILoader, ngZone) {
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.Austin = { latitude: 30.2672, longitude: -97.7431 };
        this.zoom = 10;
        this.locations = new Array(2);
        this.agencies = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setCurrentPosition();
        this.mapsAPILoader.load().then(function () {
            _this.inputs.forEach(function (element, idx) {
                var address = new google.maps.places.Autocomplete(element.nativeElement, {
                    bounds: new google.maps.LatLngBounds(new google.maps.LatLng(30.135030, -97.960088), new google.maps.LatLng(30.522045, -97.546727)),
                    types: ['geocode'],
                    componentRestrictions: { country: 'US' }
                });
                address.addListener('place_changed', function () {
                    _this.ngZone.run(function () {
                        var place = address.getPlace();
                        if (!!place.geometry) {
                            _this.locations[idx] = {
                                latitude: place.geometry.location.lat(),
                                longitude: place.geometry.location.lng()
                            };
                        }
                    });
                });
            });
            var map = new google.maps.Map(document.createElement('div'), {
                center: { lat: _this.Austin.latitude, lng: _this.Austin.longitude },
            });
            _this.placeService = new google.maps.places.PlacesService(map);
        });
    };
    AppComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) { return _this.zoom = _this.zoom; });
        }
    };
    AppComponent.prototype.onchange = function ($event, idx) {
        if (!$event.target.value) {
            this.agencies.length = 0;
            this.locations[idx] = null;
        }
        ;
    };
    AppComponent.prototype.callbackObserver = function (idx) {
        var option = {
            rankBy: google.maps.places.RankBy.DISTANCE,
            query: 'real estate agent'
        };
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].bindCallback(this.placeService.textSearch.bind(this.placeService, Object.assign(option, { location: new google.maps.LatLng(this.locations[idx].latitude, this.locations[idx].longitude) }))).call(null);
    };
    AppComponent.prototype.transform = function (arr, idx) {
        var _this = this;
        var baseA = new google.maps.LatLng(this.locations[0].latitude, this.locations[0].longitude);
        var baseB = new google.maps.LatLng(this.locations[1].latitude, this.locations[1].longitude);
        var base = idx === 0 ? baseA : baseB;
        return arr.filter(function (loc) { return _this.calcDistance(base, loc.geometry.location) <= 10; })
            .map(function (location) { return ({
            id: location.id,
            name: location.name,
            addr: location.formatted_address.replace(', United States', ''),
            longitude: location.geometry.location.lng(),
            latitude: location.geometry.location.lat(),
            sum: _this.calcDistance(location.geometry.location, baseA) +
                _this.calcDistance(location.geometry.location, baseB)
        }); });
    };
    AppComponent.prototype.search = function () {
        var _this = this;
        this.agencies.length = 0;
        __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].forkJoin(this.callbackObserver(0), this.callbackObserver(1), function (a, b) { return [a[0], b[0]]; })
            .subscribe(function (_a) {
            var nearA = _a[0], nearB = _a[1];
            _this.ngZone.run(function () {
                _this.agencies = _this.transform(nearA, 0).concat(_this.transform(nearB, 1)).sort(function (a, b) { return a.sum - b.sum; })
                    .filter(function (loc, idx, arr) { return !(idx > 1 && arr[idx - 1].id === loc.id); })
                    .map(function (loc) { return ({
                    name: loc.name,
                    addr: loc.addr,
                    isOpen: false,
                    longitude: loc.longitude,
                    latitude: loc.latitude
                }); });
            });
        });
    };
    AppComponent.prototype.clickedMarker = function (idx) {
        this.agencies.forEach(function (agent, i) { return agent.isOpen = idx === i; });
    };
    AppComponent.prototype.clickAgent = function (idx) {
        this.clickedMarker(idx);
    };
    AppComponent.prototype.calcDistance = function (p1, p2) {
        return (Math.round((google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000 * 0.6214 * 10)) / 10);
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChildren */])('address'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* QueryList */]) === "function" && _a || Object)
], AppComponent.prototype, "inputs", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__agm_core__["b" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__agm_core__["b" /* MapsAPILoader */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* NgZone */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyBsBy-fZP6s_J-pRfM5tJQHjKFvAXg5o_I',
                libraries: ['places', 'geometry']
            }),
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    apiUrl: 'http://localhost:10010/',
    search: 'http://localhost:10010/search',
    info: 'http://localhost:10010/info'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map