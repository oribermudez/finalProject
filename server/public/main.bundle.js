webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(toastr, vcr) {
        this.toastr = toastr;
        this.title = 'app';
        this.toastr.setRootViewContainerRef(vcr);
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_materialize__ = __webpack_require__("./node_modules/angular2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_fusioncharts__ = __webpack_require__("./node_modules/angular2-fusioncharts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_fusioncharts__ = __webpack_require__("./node_modules/fusioncharts/fusioncharts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_fusioncharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_fusioncharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_fusioncharts_fusioncharts_charts__ = __webpack_require__("./node_modules/fusioncharts/fusioncharts.charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_fusioncharts_fusioncharts_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_fusioncharts_fusioncharts_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_fusioncharts_themes_fusioncharts_theme_fint__ = __webpack_require__("./node_modules/fusioncharts/themes/fusioncharts.theme.fint.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_fusioncharts_themes_fusioncharts_theme_fint___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_fusioncharts_themes_fusioncharts_theme_fint__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_file_upload__ = __webpack_require__("./node_modules/ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__custom_option__ = __webpack_require__("./src/app/custom-option.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_tickets_service__ = __webpack_require__("./src/app/services/tickets.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_firebase_service__ = __webpack_require__("./src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__routes_app_routing__ = __webpack_require__("./src/app/routes/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__open_ticket_open_ticket_component__ = __webpack_require__("./src/app/open-ticket/open-ticket.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__show_tickets_show_tickets_component__ = __webpack_require__("./src/app/show-tickets/show-tickets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__user_nav_user_nav_component__ = __webpack_require__("./src/app/user-nav/user-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__my_tickets_my_tickets_component__ = __webpack_require__("./src/app/my-tickets/my-tickets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__managers_nav_managers_nav_component__ = __webpack_require__("./src/app/managers-nav/managers-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__map_map_component__ = __webpack_require__("./src/app/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__tech_map_tech_map_component__ = __webpack_require__("./src/app/tech-map/tech-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__tech_nav_tech_nav_component__ = __webpack_require__("./src/app/tech-nav/tech-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__schedule_schedule_component__ = __webpack_require__("./src/app/schedule/schedule.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















// Services



// Routes


// Components













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_20__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_21__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_22__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_23__open_ticket_open_ticket_component__["a" /* OpenTicketComponent */],
                __WEBPACK_IMPORTED_MODULE_24__show_tickets_show_tickets_component__["a" /* ShowTicketsComponent */],
                __WEBPACK_IMPORTED_MODULE_25__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_26__user_nav_user_nav_component__["a" /* UserNavComponent */],
                __WEBPACK_IMPORTED_MODULE_27__my_tickets_my_tickets_component__["a" /* MyTicketsComponent */],
                __WEBPACK_IMPORTED_MODULE_28__managers_nav_managers_nav_component__["a" /* ManagersNavComponent */],
                __WEBPACK_IMPORTED_MODULE_29__map_map_component__["a" /* MapComponent */],
                __WEBPACK_IMPORTED_MODULE_30__tech_map_tech_map_component__["a" /* TechMapComponent */],
                __WEBPACK_IMPORTED_MODULE_31__tech_nav_tech_nav_component__["a" /* TechNavComponent */],
                __WEBPACK_IMPORTED_MODULE_32__schedule_schedule_component__["a" /* ScheduleComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_10_ng2_file_upload__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_0_angular2_materialize__["a" /* MaterializeModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular2_fusioncharts__["a" /* FusionChartsModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6_fusioncharts__, __WEBPACK_IMPORTED_MODULE_7_fusioncharts_fusioncharts_charts__, __WEBPACK_IMPORTED_MODULE_8_fusioncharts_themes_fusioncharts_theme_fint__),
                __WEBPACK_IMPORTED_MODULE_19__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_18__routes_app_routing__["a" /* routes */]),
                __WEBPACK_IMPORTED_MODULE_11_ng2_toastr_ng2_toastr__["ToastModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyAWwhYJ8MBRN6YfD0VesqiDn1FIzEOT3O0'
                }),
                __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_15__services_auth_service__["a" /* SessionService */], __WEBPACK_IMPORTED_MODULE_16__services_tickets_service__["a" /* TicketsService */], __WEBPACK_IMPORTED_MODULE_17__services_firebase_service__["a" /* FirebaseService */], { provide: __WEBPACK_IMPORTED_MODULE_14_ng2_toastr__["ToastOptions"], useClass: __WEBPACK_IMPORTED_MODULE_13__custom_option__["a" /* CustomOption */] }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_20__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/custom-option.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomOption; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ng2_toastr__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CustomOption = /** @class */ (function (_super) {
    __extends(CustomOption, _super);
    function CustomOption() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.animate = 'flyRight'; // you can override any options available
        _this.newestOnTop = false;
        _this.showCloseButton = true;
        _this.positionClass = 'toast-top-center';
        return _this;
    }
    return CustomOption;
}(__WEBPACK_IMPORTED_MODULE_0_ng2_toastr__["ToastOptions"]));



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = "body{\n    margin: 0;\n    font-family: 'Roboto', sans-serif;\n}\n\nh4{\n    color: #3f51b5;\n    text-align: center;\n    font-size: 1.8em;\n}\n\n.greeting{\n    text-align: center;\n}\n\n.card-image img{\n    width: 11vh;\n    padding: 10%;\n    margin: 20%;\n}\n\n.card-stacked{\n    font-size: 1.5em;\n    text-align: center;\n}\n\n.card .card-action a:not(.btn):not(.btn-large):not(.btn-large):not(.btn-floating){\n    text-align: center;\n    font-size: .7em;\n    padding: 1%;\n    color: #0089ec;\n    margin: 0;\n}\n\n.card-content{\n    padding: 3%;\n}\n\nh5{\n    padding: 4%;\n    font-size: 1.9em;\n}\n\nh6{\n    font-size: 1em;\n}\n\n#pay-button {\n    width: 100%;\n    background-color: #3f51b5;\n    font-size: 1em;\n}\n\n.card-action{\n    padding: 3%;\n}\n\n.sta{\n    font-size: 1.5em;\n}\n\n\n\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<app-managers-nav></app-managers-nav>\n<div class=\"greeting\" ><h5><b>Welcome Ori Bermudez</b></h5></div>\n<h4><b>Statistics</b></h4>\n<div>\n    <div class=\"col s12 m7\">\n        <div class=\"card horizontal\">\n          <div class=\"card-image\">\n            <img src=\"../assets/statistics.png\">\n          </div>\n          <div class=\"card-stacked\">\n              <h6 class=\"header\"><b>Daily average of tickets</b></h6>\n            <div class=\"card-content\">\n              <p class=\"sta\"><b>14</b></p>\n              </div>\n        </div>\n      </div>\n</div>\n\n<div>\n    <div class=\"col s12 m7\">\n        <div class=\"card horizontal\">\n          <div class=\"card-image\">\n            <img src=\"../assets/line-chart.png\">\n          </div>\n          <div class=\"card-stacked\">\n              <h6 class=\"header\"><b> Zone with the most outages</b></h6>\n            <div class=\"card-content\">\n              <p class=\"sta\"><b>Zone 4</b></p>\n          </div>\n        </div>\n      </div>\n</div>\n\n<div>\n    <div class=\"col s12 m7\">\n        <div class=\"card horizontal\">\n          <div class=\"card-image\">\n            <img src=\"../assets/line-chart (2).png\">\n          </div>\n          <div class=\"card-stacked\">\n              <h6 class=\"header\"><b>Average repair time</b></h6>\n            <div class=\"card-content\">\n              <p class=\"sta\"><b>1 hour</b></p>\n           </div>\n        </div>\n      </div>\n</div>\n\n<div>\n    <div class=\"col s12 m7\">\n        <div class=\"card horizontal\">\n          <div class=\"card-image\">\n            <img src=\"../assets/analytics.png\">\n          </div>\n          <div class=\"card-stacked\">\n              <h6 class=\"header\"><b>Average repairs a day</b></h6>\n            <div class=\"card-content\">\n              <p class=\"sta\" ><b>9</b></p>\n           </div>\n        </div>\n      </div>\n</div>\n\n<h4><b>Charts</b></h4>\n\n<fusioncharts\n    [id]=\"id\"\n    [width]=\"width\"\n    [height]=\"height\"\n    [type]=\"type\"\n    [dataFormat]=\"dataFormat\"\n    [dataSource]=\"dataSource\"\n></fusioncharts>\n\n<fusioncharts\n    [id]=\"id2\"\n    [width]=\"width2\"\n    [height]=\"height2\"\n    [type]=\"type2\"\n    [dataFormat]=\"dataFormat2\"\n    [dataSource]=\"myDataSource\"\n></fusioncharts>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        this.id = 'chart1';
        this.width = 600;
        this.height = 400;
        this.type = 'column2d';
        this.dataFormat = 'json';
        this.id2 = '';
        this.width2 = 600;
        this.height2 = 400;
        this.type2 = 'pie3d';
        this.datasource2 = 'json';
        this.dataSource = {
            'chart': {
                'caption': 'Tickets per day',
                'subCaption': 'Number of tickets generated in the last 5 days',
                'theme': 'fint'
            },
            'data': [
                {
                    'label': '17 Marzo 2018',
                    'value': '16'
                },
                {
                    'label': '18 Marzo 2018',
                    'value': '10'
                },
                {
                    'label': '19 Marzo 2018',
                    'value': '14'
                },
                {
                    'label': '20 Marzo 2018',
                    'value': '8'
                },
                {
                    'label': '21 Marzo 2018',
                    'value': '19'
                }
            ]
        };
        this.myDataSource = {
            'chart': {
                'caption': 'Outages per zone',
                'subcaption': 'This month',
                'startingangle': '120',
                'showlabels': '0',
                'showlegend': '1',
                'enablemultislicing': '0',
                'slicingdistance': '15',
                'showpercentvalues': '1',
                'showpercentintooltip': '0',
                'plottooltext': 'Zone : $label Tickets : $datavalue',
                'theme': 'fint'
            },
            'data': [
                {
                    'label': 'Polanco',
                    'value': '8'
                },
                {
                    'label': 'Reforma',
                    'value': '4'
                },
                {
                    'label': 'Narvarte',
                    'value': '5'
                },
                {
                    'label': 'Condesa, Nápoles',
                    'value': '10'
                },
                {
                    'label': 'Coyoacan',
                    'value': '2'
                }
            ]
        };
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "body{\n    margin: 0;\n}\n\nh1 {\n    color: #3f51b5;\n    text-align: center;\n    text-shadow: 2px 2px 8px white;\n    margin-top: 30%;\n    font-weight: bolder;\n    font-size: 5em;\n}\n\n.form-container{\n    width: 70%;\n    margin: 10% auto 0 auto;\n    padding: 2%;\n    border: solid 1px lightgrey;\n    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    opacity: 0.9;\n    background-color: white;\n}\n\n.input-field{\n    width: 90%;\n    margin-left: 5%;\n}\n\n.form-container button{\n    margin: 5% 0 5% 24%;\n    width: 50%;\n    font-size: .8em;\n    background-color: #3f51b5;\n\n}\n\n/* icon prefix focus color */\n\n.input-field .prefix.active {\n    color: #3f51b5;\n}\n\n.input-field .prefix{\n    color: #3f51b5;\n}\n\n/* label color */\n\n.input-field label {\n    color: #3f51b5;\n}\n\n.parallax-container {\n    height: 100vh;\n}\n\n#logo{\n    width:7vh\n}\n\n\n\n\n  \n\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"parallax-container\">\n    <div class=\"parallax\"><img src=\"../assets/hero2.jpg\"></div>\n    <h1>Timepr<img id=\"logo\" src=\"../assets/logo2.png\" alt=\"Logo\">ve</h1>\n    <div class=\"form-container\">\n        <form class=\"col s12\">\n          <div class=\"input-field col s6\">\n            <i class=\"material-icons prefix\">email</i>\n            <input [(ngModel)]=\"newUser.email\" name=\"email\" id=\"icon_prefix\" type=\"email\" class=\"validate\">\n            <label for=\"icon_prefix\" >Email</label>\n          </div>\n          <div class=\"input-field col s6\">\n            <i class=\"material-icons prefix\">lock</i>\n            <input [(ngModel)]=\"newUser.password\" name=\"password\" id=\"icon_telephone\" type=\"password\" class=\"validate\" >\n            <label for=\"icon_telephone\">Password</label>\n          </div>\n          <button (click)=\"login()\" class=\"btn waves-effect waves-light\" type=\"submit\" name=\"action\">Login</button>\n        </form>\n        </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(session, route) {
        this.session = session;
        this.route = route;
        this.newUser = { email: '', password: '' };
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.session.login(this.newUser)
            .subscribe(function (data) {
            _this.user = data;
            localStorage.setItem('user', JSON.stringify(data));
            switch (_this.user.role) {
                case 'USER':
                    _this.route.navigate(['mypage']);
                    break;
                case 'MANAGER':
                    _this.route.navigate(['dashboard']);
                    break;
                case 'TECH':
                    _this.route.navigate(['techmap']);
                    break;
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $('.parallax').parallax();
        });
        if (!localStorage.getItem('user')) {
            return;
        }
        this.user = JSON.parse(localStorage.getItem('user'));
        this.route.navigate(['mypage']);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* SessionService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/managers-nav/managers-nav.component.css":
/***/ (function(module, exports) {

module.exports = "body{\n    margin: 0;\n    font-family: 'Roboto', sans-serif;\n}\nnav .nav-wrapper {\n    background-color: #3f51b5;\n}\nnav .btn {\n    background-color: #e8646d;\n}\nnav .nav-wrapper img{\n    width: 9vh;\n    padding: 10px;\n}\n#open-btn-s{\n    background-color: #fa9653;\n}\n#open-btn-l{\n    background-color: #fa9653;\n}\nimg, .brand-logo{\n    margin-left: 5%;\n}\n.side-nav li > a > i{\n    color: white;\n}\n#profile-btn-s{\n    background-color: #e83b47;\n}\n#profile-btn-l{\n    background-color: #e83b47;\n}\n#tickets-btn-s{\n    background-color: #3773e2;\n}\n#tickets-btn-l{\n    background-color: #3773e2;\n}\n#logout-btn-s{\n   background-color: #8f9cff;\n}\n#logout-btn-l{\n    background-color: #8f9cff;\n }"

/***/ }),

/***/ "./src/app/managers-nav/managers-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\n  <div class=\"nav-wrapper\">\n    <img src=\"../assets/logo2.png\" alt=\"Logo\">\n    <a href=\"/\" class=\"brand-logo\">Timeprove</a>\n    <a href=\"#\" data-activates=\"mobile-demo\" class=\"button-collapse\"><i class=\"material-icons\">menu</i></a>\n    <ul class=\"right hide-on-med-and-down\">\n        <li><a [routerLink]=\"['../dashboard']\" id=\"profile-btn-l\" class=\"waves-effect waves-light btn\">My Dashboard<i class=\"material-icons right\">equalizer</i></a></li>\n        <li><a [routerLink]=\"['../tickets']\" id=\"tickets-btn-l\" class=\"waves-effect waves-light btn\">Control Room<i class=\"material-icons right\">grain</i></a></li>\n        <li><a id=\"logout-btn-l\" (click)=\"logout()\" class=\"waves-effect waves-light btn\">Logout<i class=\"material-icons right\">exit_to_app</i></a></li>\n    </ul>\n    <ul class=\"side-nav\" id=\"mobile-demo\">\n      <li><a [routerLink]=\"['../dashboard']\" id=\"profile-btn-s\" class=\"waves-effect waves-light btn\">My Dashboard<i class=\"material-icons right\">equalizer</i></a></li>\n      <li><a [routerLink]=\"['../tickets']\" id=\"tickets-btn-s\" class=\"waves-effect waves-light btn\">Control Room<i class=\"material-icons right\">grain</i></a></li>\n      <li><a id=\"logout-btn-s\" (click)=\"logout()\" class=\"waves-effect waves-light btn\">Logout<i class=\"material-icons right\">exit_to_app</i></a></li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/managers-nav/managers-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagersNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ManagersNavComponent = /** @class */ (function () {
    function ManagersNavComponent(session, route) {
        this.session = session;
        this.route = route;
    }
    ManagersNavComponent.prototype.ngOnInit = function () {
        $('.button-collapse').sideNav();
    };
    ManagersNavComponent.prototype.logout = function () {
        var _this = this;
        this.session.logout()
            .subscribe(function (data) {
            _this.route.navigate(['login']);
            localStorage.removeItem('user');
        });
    };
    ManagersNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-managers-nav',
            template: __webpack_require__("./src/app/managers-nav/managers-nav.component.html"),
            styles: [__webpack_require__("./src/app/managers-nav/managers-nav.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* SessionService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ManagersNavComponent);
    return ManagersNavComponent;
}());



/***/ }),

/***/ "./src/app/map/map.component.css":
/***/ (function(module, exports) {

module.exports = ".section-padding{\n    padding: 20px;\n}\n\nagm-map {\n    height: 100vh;\n}"

/***/ }),

/***/ "./src/app/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"section-padding\">\n<div class=\"map-container\">\n    <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\"> \n      <div *ngFor=\"let ticket of tickets\">\n        <agm-marker [latitude]=\"ticket.location.coordinates[1]\" [longitude]=\"ticket.location.coordinates[0]\" (markerClick)=\"onChoseMarker(ticket)\">\n          <agm-info-window> \n            <b>Ticket ID:</b> {{ticket._id}}\n            <b>Created at:</b> {{ticket.created_at}}\n          </agm-info-window>\n        </agm-marker>\n      </div>\n      <div *ngIf=\"techs.length > 0\">\n          <agm-marker *ngFor=\"let tech of techs\" [latitude]=\"tech.lat\" [longitude]=\"tech.lng\" [iconUrl]=\"'../assets/car-with-wrench.png'\">\n            <agm-info-window> \n                bliss\n            </agm-info-window>\n          </agm-marker>\n        </div>\n    </agm-map>\n</div>\n</section>"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tickets_service__ = __webpack_require__("./src/app/services/tickets.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_firebase_service__ = __webpack_require__("./src/app/services/firebase.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapComponent = /** @class */ (function () {
    function MapComponent(ticketServ) {
        this.ticketServ = ticketServ;
        this.markerSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.zoom = 12;
        this.lat = 19.3977933;
        this.lng = -99.173614;
        this.techs = [];
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2__services_firebase_service__["b" /* default */].database().ref('techs').on('child_added', function (snap) {
            var tech = snap.val();
            tech['key'] = snap.key;
            tech['lat'] = tech.location[0];
            tech['lng'] = tech.location[1];
            _this.techs.push(tech);
            console.log('snap', snap.val());
            console.log('techs array', _this.techs);
        });
        __WEBPACK_IMPORTED_MODULE_2__services_firebase_service__["b" /* default */].database().ref('techs').on('child_removed', function (snap) {
            _this.techs.push(snap.key);
            _this.techs = _this.techs.filter(function (t) { return t.key !== snap.key; });
        });
        this.ticketServ.getTickets()
            .subscribe(function (tickets) {
            _this.tickets = tickets;
        });
    };
    MapComponent.prototype.onChoseMarker = function (ticket) {
        this.target = ticket;
        this.markerSelect.emit(this.target);
        console.log('Hijo: ', this.target);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], MapComponent.prototype, "markerSelect", void 0);
    MapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-map',
            template: __webpack_require__("./src/app/map/map.component.html"),
            styles: [__webpack_require__("./src/app/map/map.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_tickets_service__["a" /* TicketsService */]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/my-tickets/my-tickets.component.css":
/***/ (function(module, exports) {

module.exports = "body{\n    margin: 0;\n    font-family: 'Roboto', sans-serif;\n}\nnav .nav-wrapper {\n    background-color: #3f51b5;\n}\nnav .btn {\n    background-color: #e8646d;\n}\nnav .nav-wrapper img{\n    width: 9vh;\n    padding: 10px;\n}\n#ticket-btn-s{\n    background-color: #8f9cff;\n}\n#ticket-btn-l{\n    background-color: #8f9cff;\n}\nimg, .brand-logo{\n    margin-left: 5%;\n}\n.side-nav li > a > i{\n    color: white;\n}\n.ToastOptions {\n    dismiss: click;\n}"

/***/ }),

/***/ "./src/app/my-tickets/my-tickets.component.html":
/***/ (function(module, exports) {

module.exports = "<app-user-nav></app-user-nav>\n<ul class=\"collection\">\n    <li *ngFor=\"let ticket of tickets\" class=\"collection-item avatar\">\n        <i class=\"material-icons circle red\">settings</i>\n      <span class=\"title\"><b>Ticket: {{ticket._id.substring(16)}}</b></span>\n      <p><b>Services down:</b> {{ticket.services}}<br>\n         <b>Created by:</b> {{ticket.owner}}<br>\n         <b>Address:</b> {{ticket.location.address}}<br>\n         <b>Created at:</b> {{ticket.created_at}} <br>\n         <b>Status:</b> {{ticket.status}}\n      </p>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/my-tickets/my-tickets.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyTicketsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tickets_service__ = __webpack_require__("./src/app/services/tickets.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyTicketsComponent = /** @class */ (function () {
    function MyTicketsComponent(ticketServ, toastr) {
        this.ticketServ = ticketServ;
        this.toastr = toastr;
    }
    MyTicketsComponent.prototype.showWarning = function () {
        this.toastr.warning('Crew arrival: 40 mins', 'Alert!');
    };
    MyTicketsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ticketServ.userTickets()
            .subscribe(function (tickets) {
            _this.tickets = tickets;
        });
        this.showWarning();
    };
    MyTicketsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-my-tickets',
            template: __webpack_require__("./src/app/my-tickets/my-tickets.component.html"),
            styles: [__webpack_require__("./src/app/my-tickets/my-tickets.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_tickets_service__["a" /* TicketsService */], __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"]])
    ], MyTicketsComponent);
    return MyTicketsComponent;
}());



/***/ }),

/***/ "./src/app/open-ticket/open-ticket.component.css":
/***/ (function(module, exports) {

module.exports = "body{\n    margin: 0;\n    font-family: 'Roboto', sans-serif;\n}\n\n.form-container{\n    text-align: center;\n    width: 85%;\n    margin: 10% auto 0 auto;\n    padding: 2%;\n    border: solid 1px lightgrey;\n    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    opacity: 0.9;\n    background-color: white;\n}\n\n.input-field{\n    width: 90%;\n    margin-left: 5%;\n}\n\n.form-container button{\n    margin: 0 auto;\n    width: 50%;\n    font-size: .8em;\n    background-color: #3f51b5;\n\n}\n\n.legend{\n    text-align: center;\n}\n\n.btn{\n    font-size: .8em;\n    background-color: #3f51b5;\n}"

/***/ }),

/***/ "./src/app/open-ticket/open-ticket.component.html":
/***/ (function(module, exports) {

module.exports = "<app-user-nav></app-user-nav>\n<div class=\"form-container\">\n    <form #myForm=\"ngForm\" (ngSubmit)=\"onSubmit(myForm)\" class=\"col s12\">\n      <h5>Service down ticket</h5>\n          <p class=\"legend\">We are very sorry you are having trouble with our services. Please answer the following questions.</p>\n          <div class=\"input-field col s6\">\n              <select name=\"services\" id=\"services\" multiple ngModel materialize=\"material_select\">\n                <option value=\"\" disabled selected>Services down? </option>\n                <option value=\"Internet\">Internet</option>\n                <option value=\"Television\">Television</option>\n                <option value=\"Phone\">Phone</option>\n              </select>\n          </div>\n          <div name=\"los\" class=\"input-field col s12\">\n              <select name=\"lightcolor\" id=\"lightcolor\" ngModel materialize=\"material_select\">\n                <option value=\"\" disabled selected>What color is the modem light LOS?</option>\n                <option value=\"Red\">Red</option>\n                <option value=\"Green\">Green</option>\n              </select>\n            </div>\n          <p>Is your modem correctly plugged in?</p>\n          <p>\n              <input name=\"connected\" type=\"checkbox\" id=\"puggled-in\" ngModel />\n              <label for=\"puggled-in\">Yes</label>\n          </p>\n          <hr>\n          <p>Have you tried resetting your modem?</p>\n          <p>\n              <input name=\"resetted\" type=\"checkbox\" id=\"resetted\" ngModel/>\n              <label for=\"resetted\">Yes</label>\n          </p>\n          <hr>\n            <div class=\"file-field input-field\">\n                <div class=\"btn\">\n                  <span>Upload</span>\n                  <input type=\"file\" name=\"file\" ng2FileSelect [uploader]=\"uploader\" />      \n                </div>\n                <div class=\"file-path-wrapper\">\n                  <input class=\"file-path validate\" type=\"text\" placeholder=\"Modem photo.\">\n                </div>\n              </div>\n            \n      <button class=\"btn waves-effect waves-light\" type=\"submit\" name=\"action\">Send</button>\n    </form>\n    </div>"

/***/ }),

/***/ "./src/app/open-ticket/open-ticket.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenTicketComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tickets_service__ = __webpack_require__("./src/app/services/tickets.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__ = __webpack_require__("./node_modules/ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OpenTicketComponent = /** @class */ (function () {
    function OpenTicketComponent(ticketServ, route) {
        this.ticketServ = ticketServ;
        this.route = route;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__["FileUploader"]({
            url: "http://localhost:3000/api/tickets/new"
        });
    }
    OpenTicketComponent.prototype.ngOnInit = function () {
        $('.button-collapse').sideNav();
        $('select').material_select();
    };
    OpenTicketComponent.prototype.onSubmit = function (myForm) {
        var _this = this;
        console.log(myForm.value.services);
        this.uploader.onBuildItemForm = function (item, form) {
            form.append('services', myForm.value.services);
        };
        this.uploader.uploadAll();
        this.uploader.onCompleteItem = function () { return _this.route.navigate(['mypage']); };
    };
    OpenTicketComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-open-ticket',
            template: __webpack_require__("./src/app/open-ticket/open-ticket.component.html"),
            styles: [__webpack_require__("./src/app/open-ticket/open-ticket.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_tickets_service__["a" /* TicketsService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], OpenTicketComponent);
    return OpenTicketComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = "body{\n    margin: 0;\n    font-family: 'Roboto', sans-serif;\n}\n\n.greeting{\n    text-align: center;\n}\n\n.card-image{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin-left: 15vw;\n}\n\n.card-image img{\n    width: 20vw;\n    padding: 3%;\n}\n\n.card-stacked{\n    font-size: 1.5em;\n    text-align: center;\n}\n\n.card .card-action a:not(.btn):not(.btn-large):not(.btn-large):not(.btn-floating){\n    text-align: center;\n    font-size: .7em;\n    padding: 1%;\n    color: #0089ec;\n    margin: 0;\n}\n\n.card-content{\n    padding: 3%;\n}\n\nh5{\n    padding: 4%;\n    font-size: 1.9em;\n}\n\nh6{\n    font-size: 1em;\n}\n\n#pay-button {\n    width: 100%;\n    background-color: #3f51b5;\n    font-size: 1em;\n    height: 8vh;\n}\n\n.card-action{\n    padding: 2%;\n}\n\n\n\n"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<app-user-nav></app-user-nav>\n<div class=\"greeting\" ><h5><b>Hi {{user.name || ''}} </b></h5></div>\n<div>\n    <div class=\"col s12 m7\">\n        <div class=\"card horizontal\">\n          <div class=\"card-image\">\n            <img src=\"../assets/wifi2.png\">\n          </div>\n          <div class=\"card-stacked\">\n              <h6 class=\"header\">Internet</h6>\n            <div class=\"card-content\">\n              <p><b>{{user.services[0].Internet}}</b></p>\n            <div class=\"card-action\">\n              <a href=\"#\">Upgrade plan</a>\n          </div>\n        </div>\n      </div>\n</div>\n\n<div>\n    <div class=\"col s12 m7\">\n        <div class=\"card horizontal\">\n          <div class=\"card-image\">\n            <img src=\"../assets/television.png\">\n          </div>\n          <div class=\"card-stacked\">\n              <h6 class=\"header\">Television</h6>\n            <div class=\"card-content\">\n              <p><b>{{user.services[1].Television}}</b></p>\n            <div class=\"card-action\">\n              <a href=\"#\">Upgrade plan</a>\n          \n          </div>\n        </div>\n      </div>\n</div>\n\n<div>\n    <div class=\"col s12 m7\">\n        <div class=\"card horizontal\">\n          <div class=\"card-image\">\n            <img src=\"../assets/viber.png\">\n          </div>\n          <div class=\"card-stacked\">\n              <h6 class=\"header\">Phone</h6>\n            <div class=\"card-content\">\n              <p><b>{{user.services[2].Phone}}</b></p>\n            <div class=\"card-action\">\n              <a href=\"#\">Upgrade plan</a>\n          </div>\n        </div>\n      </div>\n</div>\n\n<div>\n    <div class=\"col s12 m7\">\n        <div class=\"card horizontal\">\n          <div class=\"card-stacked\">\n              <p><b>Total: $41.50 a month</b></p>\n        <div>\n            <a id=\"pay-button\" class=\"waves-effect waves-light btn\"><i class=\"material-icons right\">payment</i><b>Pay Receipt</b></a>\n        </div>\n      </div>\n      \n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(session, route) {
        this.session = session;
        this.route = route;
        this.user = {
            services: [{ 'Phone': '' }, { 'Internet': '' }, { 'Television': '' }],
        };
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.session.isLoggedIn()
            .subscribe(function (user) {
            _this.user = user;
            console.log(_this.user);
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* SessionService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/routes/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__open_ticket_open_ticket_component__ = __webpack_require__("./src/app/open-ticket/open-ticket.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__show_tickets_show_tickets_component__ = __webpack_require__("./src/app/show-tickets/show-tickets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__my_tickets_my_tickets_component__ = __webpack_require__("./src/app/my-tickets/my-tickets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tech_map_tech_map_component__ = __webpack_require__("./src/app/tech-map/tech-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__schedule_schedule_component__ = __webpack_require__("./src/app/schedule/schedule.component.ts");








var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */] },
    { path: 'mypage', component: __WEBPACK_IMPORTED_MODULE_0__profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */] },
    { path: 'newticket', component: __WEBPACK_IMPORTED_MODULE_2__open_ticket_open_ticket_component__["a" /* OpenTicketComponent */] },
    { path: 'mytickets', component: __WEBPACK_IMPORTED_MODULE_5__my_tickets_my_tickets_component__["a" /* MyTicketsComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'tickets', component: __WEBPACK_IMPORTED_MODULE_3__show_tickets_show_tickets_component__["a" /* ShowTicketsComponent */] },
    { path: 'techmap', component: __WEBPACK_IMPORTED_MODULE_6__tech_map_tech_map_component__["a" /* TechMapComponent */] },
    { path: 'schedule', component: __WEBPACK_IMPORTED_MODULE_7__schedule_schedule_component__["a" /* ScheduleComponent */] }
];


/***/ }),

/***/ "./src/app/schedule/schedule.component.css":
/***/ (function(module, exports) {

module.exports = "body{\n    margin: 0;\n    font-family: 'Roboto', sans-serif;\n}\nh4{\n    color: #3f51b5;\n    text-align: center;\n}\nnav .nav-wrapper {\n    background-color: #3f51b5;\n}\nnav .btn {\n    background-color: #e8646d;\n}\nnav .nav-wrapper img{\n    width: 9vh;\n    padding: 10px;\n}\n#ticket-btn-s{\n    background-color: #8f9cff;\n}\n#ticket-btn-l{\n    background-color: #8f9cff;\n}\nimg, .brand-logo{\n    margin-left: 5%;\n}\n.side-nav li > a > i{\n    color: white;\n}\n.hori{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    padding: 3%;\n}\n.collection-item.avatar{\n    padding: 5%;\n}\n#send-btn {\n    background-color: #3f51b5\n}"

/***/ }),

/***/ "./src/app/schedule/schedule.component.html":
/***/ (function(module, exports) {

module.exports = "<app-tech-nav></app-tech-nav>\n<ul class=\"collection\">\n    <li *ngFor=\"let ticket of tickets\" class=\"collection-item avatar\">\n      <span class=\"title\"><b>Ticket: {{ticket._id.substring(16)}}</b></span>\n      <p><b>Services down:</b> {{ticket.services}}<br>\n         <b>Created by:</b> {{ticket.owner}}<br>\n         <b>Address:</b> {{ticket.location.address}}<br>\n         <b>Created at:</b> {{ticket.created_at}} <br>\n         <b>Status:</b> {{ticket.status}}\n      </p>\n      <div>\n        <ul class=\"hori\">\n            <li><a (click)=\"changeStatus(ticket)\" class=\"btn-floating blue\"><i class=\"material-icons\">publish</i></a></li>\n            <li><a (click)=\"arrivedLocation(ticket)\" class=\"btn-floating black darken-1\"><i class=\"material-icons\">home</i></a></li>\n            <li><a (click)=\"getID(ticket)\" class=\"btn-floating green modal-trigger\" href=\"#modal1\"><i class=\"material-icons\">attach_file</i></a></li>\n          </ul>\n        </div>\n  </li>\n</ul>\n\n\n<!-- Modal Structure -->\n<div id=\"modal1\" class=\"modal bottom-sheet\">\n  <div class=\"modal-content\">\n    <h5>Service working picture</h5>\n      <form action=\"#\">\n          <div class=\"file-field input-field\">\n            <div class=\"btn\">\n              <span>File</span>\n              <input type=\"file\" name=\"file\" ng2FileSelect [uploader]=\"uploader\" />      \n            </div>\n            <div class=\"file-path-wrapper\">\n              <input class=\"file-path validate\" type=\"text\" placeholder=\"Upload picture\">\n            </div>\n          </div>\n        </form>\n  </div>\n  <div class=\"modal-footer\">\n      <button id=\"send-btn\" (click)=\"modifyTicket()\" class=\"btn waves-effect waves-light\" type=\"submit\" >Send</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/schedule/schedule.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tickets_service__ = __webpack_require__("./src/app/services/tickets.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__ = __webpack_require__("./node_modules/ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ScheduleComponent = /** @class */ (function () {
    function ScheduleComponent(ticketServ, session) {
        this.ticketServ = ticketServ;
        this.session = session;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__["FileUploader"]({});
    }
    ScheduleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.session.isLoggedIn()
            .subscribe(function (user) {
            _this.user = user;
            console.log('zona', _this.user.crew.zone);
            _this.ticketServ.techTickets(_this.user.crew.zone)
                .subscribe(function (tickets) {
                _this.tickets = tickets;
            });
        });
        $(document).ready(function () {
            $('.modal').modal();
        });
    };
    ScheduleComponent.prototype.changeStatus = function (ticket) {
        var _this = this;
        this.ticketServ.editTicket(ticket, 'On our way')
            .subscribe(function (item) {
            console.log(item);
            _this.ticketServ.techTickets(_this.user.crew.zone)
                .subscribe(function (tickets) {
                _this.tickets = tickets;
            });
        });
    };
    ScheduleComponent.prototype.arrivedLocation = function (ticket) {
        var _this = this;
        this.ticketServ.editTicket(ticket, 'Resolving')
            .subscribe(function (item) {
            console.log(item);
            _this.ticketServ.techTickets(_this.user.crew.zone)
                .subscribe(function (tickets) {
                _this.tickets = tickets;
            });
        });
    };
    ScheduleComponent.prototype.solvedTicket = function (ticket) {
        var _this = this;
        this.ticketServ.editTicket(ticket, 'Solved')
            .subscribe(function (item) {
            console.log(item);
            _this.ticketServ.techTickets(_this.user.crew.zone)
                .subscribe(function (tickets) {
                _this.tickets = tickets;
            });
        });
    };
    ScheduleComponent.prototype.modifyTicket = function () {
        var _this = this;
        console.log(this.TICKET);
        this.uploader.uploadAll();
        this.uploader.onCompleteItem = function () {
            console.log("done");
            _this.ticketServ.techTickets(_this.user.crew.zone)
                .subscribe(function (tickets) {
                _this.tickets = tickets;
            });
        };
    };
    ScheduleComponent.prototype.getID = function (ticket) {
        console.log(ticket);
        this.TICKET = ticket;
        this.uploader.options.url = "http://localhost:3000/api/tickets/editpic/" + ticket._id;
    };
    ScheduleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-schedule',
            template: __webpack_require__("./src/app/schedule/schedule.component.html"),
            styles: [__webpack_require__("./src/app/schedule/schedule.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_tickets_service__["a" /* TicketsService */], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* SessionService */]])
    ], ScheduleComponent);
    return ScheduleComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs___);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SessionService = /** @class */ (function () {
    function SessionService(http) {
        this.http = http;
        this.options = { withCredentials: true };
        this.baseURL = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].baseURL + 'api/auth';
    }
    SessionService.prototype.handleError = function (e) {
        return __WEBPACK_IMPORTED_MODULE_4_rxjs___["Observable"].throw(e.json().message);
    };
    SessionService.prototype.signup = function (user) {
        return this.http.post(this.baseURL + "/signup", user, this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SessionService.prototype.login = function (user) {
        return this.http.post(this.baseURL + "/login", user, this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SessionService.prototype.logout = function () {
        return this.http.post(this.baseURL + "/logout", {})
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SessionService.prototype.isLoggedIn = function () {
        return this.http.get(this.baseURL + "/loggedin", this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SessionService.prototype.getPrivateData = function () {
        return this.http.get(this.baseURL + "/private", this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SessionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], SessionService);
    return SessionService;
}());



/***/ }),

/***/ "./src/app/services/firebase.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("./node_modules/firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Initialize Firebase
var config = {
    apiKey: "AIzaSyD6sztAJOwAVKrUNv7lWTHw750MTqwxaMA",
    authDomain: "improve-1521380413550.firebaseapp.com",
    databaseURL: "https://improve-1521380413550.firebaseio.com",
    projectId: "improve-1521380413550",
    storageBucket: "improve-1521380413550.appspot.com",
    messagingSenderId: "885021489160"
};
__WEBPACK_IMPORTED_MODULE_1_firebase__["initializeApp"](config);
/* harmony default export */ __webpack_exports__["b"] = (__WEBPACK_IMPORTED_MODULE_1_firebase__);
var FirebaseService = /** @class */ (function () {
    function FirebaseService() {
    }
    FirebaseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], FirebaseService);
    return FirebaseService;
}());



/***/ }),

/***/ "./src/app/services/tickets.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs___);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TicketsService = /** @class */ (function () {
    function TicketsService(http) {
        this.http = http;
        this.options = { withCredentials: true };
        this.baseURL = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].baseURL + 'api/tickets';
    }
    TicketsService.prototype.multipleUpload = function (formdata) {
        return this.http.post(this.baseURL + '/new', formdata)
            .map(function (res) { return res.json(); })
            .map(function (info) { return info; })
            .catch(function (e) {
            console.log(e);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs___["Observable"].throw(e);
        });
    };
    TicketsService.prototype.getTickets = function () {
        return this.http.get(this.baseURL)
            .map(function (res) { return res.json(); })
            .map(function (tickets) { return tickets; })
            .catch(function (e) {
            console.log(e);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs___["Observable"].throw(e);
        });
    };
    TicketsService.prototype.editTicket = function (item, status) {
        return this.http.patch(this.baseURL + ("/edit/" + item._id), { status: status })
            .map(function (res) { return res.json(); })
            .map(function (tickets) { return tickets; })
            .catch(function (e) {
            console.log(e);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs___["Observable"].throw(e);
        });
    };
    TicketsService.prototype.ticketProof = function (item, status) {
        return this.http.patch(this.baseURL + ("/editpic/" + item._id), { status: status })
            .map(function (res) { return res.json(); })
            .map(function (tickets) { return tickets; })
            .catch(function (e) {
            console.log(e);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs___["Observable"].throw(e);
        });
    };
    TicketsService.prototype.userTickets = function () {
        return this.http.get(this.baseURL + "/mytickets", this.options)
            .map(function (res) { return res.json(); })
            .map(function (tickets) { return tickets; })
            .catch(function (e) {
            console.log(e);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs___["Observable"].throw(e);
        });
    };
    TicketsService.prototype.getZone = function (zone) {
        return this.http.get(this.baseURL + ("/zone/" + zone), this.options)
            .map(function (res) { return res.json(); })
            .map(function (tickets) { return tickets; })
            .catch(function (e) {
            console.log(e);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs___["Observable"].throw(e);
        });
    };
    TicketsService.prototype.techTickets = function (zone) {
        return this.http.get(this.baseURL + ("/techtickets/" + zone), this.options)
            .map(function (res) { return res.json(); })
            .map(function (tickets) { return tickets; })
            .catch(function (e) {
            console.log(e);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs___["Observable"].throw(e);
        });
    };
    TicketsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], TicketsService);
    return TicketsService;
}());



/***/ }),

/***/ "./src/app/show-tickets/show-tickets.component.css":
/***/ (function(module, exports) {

module.exports = "body{\n    margin: 0;\n    font-family: 'Roboto', sans-serif;\n}\nh4{\n    color: #3f51b5;\n    text-align: center;\n}\nnav .nav-wrapper {\n    background-color: #3f51b5;\n}\nnav .btn {\n    background-color: #e8646d;\n}\nnav .nav-wrapper img{\n    width: 9vh;\n    padding: 10px;\n}\n#ticket-btn-s{\n    background-color: #8f9cff;\n}\n#ticket-btn-l{\n    background-color: #8f9cff;\n}\nimg, .brand-logo{\n    margin-left: 5%;\n}\n.side-nav li > a > i{\n    color: white;\n}\n.legend{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -ms-flex-line-pack: center;\n        align-content: center;\n}\n.resaltado{\n    background-color:#0089ec26;\n}\n\n\n"

/***/ }),

/***/ "./src/app/show-tickets/show-tickets.component.html":
/***/ (function(module, exports) {

module.exports = "<app-managers-nav></app-managers-nav>\n\n<h4><b>Control Map</b></h4>\n<div>\n    <div class=\"legend\">\n        <img src=\"../assets/car-with-wrench.png\" alt=\"tech\">\n        <span><b>Tech Crew</b></span>\n        <img src=\"../assets/placeholder (3).png\" alt=\"marker\">\n        <span><b>Ticket</b></span>\n    </div>\n</div>\n<app-map (markerSelect)=\"highlight($event)\"></app-map>\n<h4><b>Tickets</b></h4>\n<ul class=\"collapsible\" data-collapsible=\"expandable\">      \n    <li>\n          <div class=\"collapsible-header\"><i class=\"material-icons\">place</i><b>Zone 1: Polanco</b></div>\n          <ul id=\"zone1\" class=\"collection collapsible-body\">\n                <li *ngFor=\"let ticket of zone1\" id=\"{{ticket._id}}\" class=\"collection-item avatar\">\n                    <i class=\"material-icons circle red\">settings</i>\n                  <span class=\"title\"><b>Ticket: {{ticket._id.substring(16)}}</b></span>\n                  <p><b>Services down:</b> {{ticket.services}}<br>\n                     <b>Created by:</b> {{ticket.owner}}<br>\n                     <b>Address:</b> {{ticket.location.address}}<br>\n                     <b>Created at:</b> {{ticket.created_at}} <br>\n                     <b>Status:</b> {{ticket.status}}\n                  </p>\n              </li>\n            </ul>\n        </li>\n        <li>\n          <div class=\"collapsible-header\"><i class=\"material-icons\">place</i><b>Zone 2: Reforma</b></div>\n          <ul id=\"zone2\" class=\"collection collapsible-body\">\n                <li *ngFor=\"let ticket of zone2\" id=\"{{ticket._id}}\" class=\"collection-item avatar\">\n                    <i class=\"material-icons circle red\">settings</i>\n                  <span class=\"title\"><b>Ticket: {{ticket._id.substring(16)}}</b></span>\n                  <p><b>Services down:</b> {{ticket.services}}<br>\n                     <b>Created by:</b> {{ticket.owner}}<br>\n                     <b>Address:</b> {{ticket.location.address}}<br>\n                     <b>Created at:</b> {{ticket.created_at}} <br>\n                     <b>Status:</b> {{ticket.status}}\n                  </p>\n              </li>\n            </ul>\n        </li>\n        <li>\n          <div class=\"collapsible-header\"><i class=\"material-icons\">place</i><b>Zone 3: Narvarte</b></div>\n          <ul id=\"zone3\" class=\"collection collapsible-body\">\n                <li *ngFor=\"let ticket of zone3\" id=\"{{ticket._id}}\" class=\"collection-item avatar\">\n                    <i class=\"material-icons circle red\">settings</i>\n                  <span class=\"title\"><b>Ticket: {{ticket._id.substring(16)}}</b></span>\n                  <p><b>Services down:</b> {{ticket.services}}<br>\n                     <b>Created by:</b> {{ticket.owner}}<br>\n                     <b>Address:</b> {{ticket.location.address}}<br>\n                     <b>Created at:</b> {{ticket.created_at}} <br>\n                     <b>Status:</b> {{ticket.status}}\n                  </p>\n              </li>\n            </ul>\n        </li>\n        <li>\n          <div class=\"collapsible-header\"><i class=\"material-icons\">place</i><b>Zone 4: Condesa, Roma, Nápoles</b></div>\n          <ul id=\"zone4\" class=\"collection collapsible-body\">\n                <li *ngFor=\"let ticket of zone4\" id=\"{{ticket._id}}\" class=\"collection-item avatar\">\n                    <i class=\"material-icons circle red\">settings</i>\n                  <span class=\"title\"><b>Ticket: {{ticket._id.substring(16)}}</b></span>\n                  <p><b>Services down:</b> {{ticket.services}}<br>\n                     <b>Created by:</b> {{ticket.owner}}<br>\n                     <b>Address:</b> {{ticket.location.address}}<br>\n                     <b>Created at:</b> {{ticket.created_at}} <br>\n                     <b>Status:</b> {{ticket.status}}\n                  </p>\n              </li>\n            </ul>\n        </li>\n        <li>\n          <div class=\"collapsible-header\"><i class=\"material-icons\">place</i><b>Zone 5: Coyoacan</b></div>\n          <ul id=\"zone5\" class=\"collection collapsible-body\">\n                <li *ngFor=\"let ticket of zone5\" id=\"{{ticket._id}}\" class=\"collection-item avatar\">\n                    <i class=\"material-icons circle red\">settings</i>\n                  <span class=\"title\"><b>Ticket: {{ticket._id.substring(16)}}</b></span>\n                  <p><b>Services down:</b> {{ticket.services}}<br>\n                     <b>Created by:</b> {{ticket.owner}}<br>\n                     <b>Address:</b> {{ticket.location.address}}<br>\n                     <b>Created at:</b> {{ticket.created_at}} <br>\n                     <b>Status:</b> {{ticket.status}}\n                  </p>\n              </li>\n            </ul>\n        </li>\n      </ul>"

/***/ }),

/***/ "./src/app/show-tickets/show-tickets.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowTicketsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tickets_service__ = __webpack_require__("./src/app/services/tickets.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_firebase_service__ = __webpack_require__("./src/app/services/firebase.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShowTicketsComponent = /** @class */ (function () {
    function ShowTicketsComponent(ticketServ, firebaseService) {
        this.ticketServ = ticketServ;
        this.firebaseService = firebaseService;
    }
    ShowTicketsComponent.prototype.ngOnInit = function () {
        var _this = this;
        $('.collapsible').collapsible();
        this.ticketServ.getTickets()
            .subscribe(function (tickets) {
            _this.tickets = tickets;
        });
        this.ticketServ.getZone(1)
            .subscribe(function (tickets1) {
            _this.zone1 = tickets1;
        });
        this.ticketServ.getZone(2)
            .subscribe(function (tickets2) {
            _this.zone2 = tickets2;
        });
        this.ticketServ.getZone(3)
            .subscribe(function (tickets3) {
            _this.zone3 = tickets3;
        });
        this.ticketServ.getZone(4)
            .subscribe(function (tickets4) {
            _this.zone4 = tickets4;
        });
        this.ticketServ.getZone(5)
            .subscribe(function (tickets5) {
            _this.zone5 = tickets5;
        });
    };
    ShowTicketsComponent.prototype.highlight = function (ticket) {
        if (this.target) {
            console.log(this.lastTarget);
            $('#zone' + this.lastTarget.zone).attr('style', 'display:none');
            $('#' + this.lastTarget._id).css('background-color', 'white');
        }
        this.target = ticket;
        console.log('Highlight method: ', ticket);
        $('#zone' + this.target.zone).attr('style', 'display:block');
        $('#' + this.target._id).css('background-color', '#0089ec26');
        this.lastTarget = ticket;
    };
    ShowTicketsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-show-tickets',
            template: __webpack_require__("./src/app/show-tickets/show-tickets.component.html"),
            styles: [__webpack_require__("./src/app/show-tickets/show-tickets.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_tickets_service__["a" /* TicketsService */], __WEBPACK_IMPORTED_MODULE_2__services_firebase_service__["a" /* FirebaseService */]])
    ], ShowTicketsComponent);
    return ShowTicketsComponent;
}());



/***/ }),

/***/ "./src/app/tech-map/tech-map.component.css":
/***/ (function(module, exports) {

module.exports = ".section-padding{\n    padding: 20px;\n}\n\nagm-map {\n    height: 100vh;\n}\n\n.greeting{\n    text-align: center;\n}\n\nh5{\n    padding: 4%;\n    font-size: 1.9em;\n}"

/***/ }),

/***/ "./src/app/tech-map/tech-map.component.html":
/***/ (function(module, exports) {

module.exports = "<app-tech-nav></app-tech-nav>\n<section class=\"section-padding\">\n    <div class=\"map-container\">\n        <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\"> \n          <div >\n            <agm-marker [latitude]=\"lat\" [longitude]=\"lng\" [iconUrl]=\"'../assets/car-with-wrench.png'\">\n              <agm-info-window> \n                <p>You are here!</p>\n              </agm-info-window>\n            </agm-marker>\n          </div>\n        </agm-map>\n    </div>\n    </section>\n    <!-- key: AIzaSyAWwhYJ8MBRN6YfD0VesqiDn1FIzEOT3O0-->"

/***/ }),

/***/ "./src/app/tech-map/tech-map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TechMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_firebase_service__ = __webpack_require__("./src/app/services/firebase.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TechMapComponent = /** @class */ (function () {
    function TechMapComponent(session) {
        this.session = session;
        this.zoom = 16;
    }
    TechMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getUserLocation();
        this.session.isLoggedIn()
            .subscribe(function (user) {
            _this.user = user;
            console.log(user);
        });
    };
    TechMapComponent.prototype.getUserLocation = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.lat = position.coords.latitude;
                _this.lng = position.coords.longitude;
                // .push crea un dato con nuevo id
                __WEBPACK_IMPORTED_MODULE_2__services_firebase_service__["b" /* default */].database().ref('techs').child(_this.user._id).set({ user: localStorage.getItem('user'), location: [_this.lat, _this.lng] });
            });
        }
    };
    TechMapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tech-map',
            template: __webpack_require__("./src/app/tech-map/tech-map.component.html"),
            styles: [__webpack_require__("./src/app/tech-map/tech-map.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* SessionService */]])
    ], TechMapComponent);
    return TechMapComponent;
}());



/***/ }),

/***/ "./src/app/tech-nav/tech-nav.component.css":
/***/ (function(module, exports) {

module.exports = "body{\n    margin: 0;\n    font-family: 'Roboto', sans-serif;\n}\nnav .nav-wrapper {\n    background-color: #3f51b5;\n}\nnav .btn {\n    background-color: #e8646d;\n}\nnav .nav-wrapper img{\n    width: 9vh;\n    padding: 10px;\n}\n#open-btn-s{\n    background-color: #fa9653;\n}\n#open-btn-l{\n    background-color: #fa9653;\n}\nimg, .brand-logo{\n    margin-left: 5%;\n}\n.side-nav li > a > i{\n    color: white;\n}\n#profile-btn-s{\n    background-color: #e83b47;\n}\n#profile-btn-l{\n    background-color: #e83b47;\n}\n#tickets-btn-s{\n    background-color: #3773e2;\n}\n#tickets-btn-l{\n    background-color: #3773e2;\n}\n#logout-btn-s{\n   background-color: #8f9cff;\n}\n#logout-btn-l{\n    background-color: #8f9cff;\n }\n"

/***/ }),

/***/ "./src/app/tech-nav/tech-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\n    <div class=\"nav-wrapper\">\n      <img src=\"../assets/logo2.png\" alt=\"Logo\">\n      <a href=\"/\" class=\"brand-logo\">Timeprove</a>\n      <a href=\"#\" data-activates=\"mobile-demo\" class=\"button-collapse\"><i class=\"material-icons\">menu</i></a>\n      <ul class=\"right hide-on-med-and-down\">\n          <li><a [routerLink]=\"['../techmap']\" id=\"profile-btn-l\" class=\"waves-effect waves-light btn\">My Map<i class=\"material-icons right\">map</i></a></li>\n          <li><a [routerLink]=\"['../schedule']\" id=\"tickets-btn-l\" class=\"waves-effect waves-light btn\">Schedule<i class=\"material-icons right\">list</i></a></li>\n          <li><a id=\"logout-btn-l\" (click)=\"logout()\" class=\"waves-effect waves-light btn\">Logout<i class=\"material-icons right\">exit_to_app</i></a></li>\n      </ul>\n      <ul class=\"side-nav\" id=\"mobile-demo\">\n        <li><a [routerLink]=\"['../techmap']\" id=\"profile-btn-s\" class=\"waves-effect waves-light btn\">My Map<i class=\"material-icons right\">map</i></a></li>\n        <li><a [routerLink]=\"['../schedule']\" id=\"tickets-btn-s\" class=\"waves-effect waves-light btn\">Schedule<i class=\"material-icons right\">list</i></a></li>\n        <li><a id=\"logout-btn-s\" (click)=\"logout()\" class=\"waves-effect waves-light btn\">Logout<i class=\"material-icons right\">exit_to_app</i></a></li>\n      </ul>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/tech-nav/tech-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TechNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_firebase_service__ = __webpack_require__("./src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TechNavComponent = /** @class */ (function () {
    function TechNavComponent(session, route) {
        this.session = session;
        this.route = route;
    }
    TechNavComponent.prototype.ngOnInit = function () {
        $('.button-collapse').sideNav();
        this.user = JSON.parse(localStorage.getItem('user'));
    };
    TechNavComponent.prototype.logout = function () {
        var _this = this;
        this.session.logout()
            .subscribe(function (data) {
            _this.route.navigate(['login']);
            localStorage.removeItem('user');
        });
        var updates = {};
        updates['techs/' + this.user._id] = null;
        __WEBPACK_IMPORTED_MODULE_2__services_firebase_service__["b" /* default */].database().ref().update(updates);
    };
    TechNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tech-nav',
            template: __webpack_require__("./src/app/tech-nav/tech-nav.component.html"),
            styles: [__webpack_require__("./src/app/tech-nav/tech-nav.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* SessionService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], TechNavComponent);
    return TechNavComponent;
}());



/***/ }),

/***/ "./src/app/user-nav/user-nav.component.css":
/***/ (function(module, exports) {

module.exports = "body{\n    margin: 0;\n    font-family: 'Roboto', sans-serif;\n}\nnav .nav-wrapper {\n    background-color: #3f51b5;\n}\nnav .btn {\n    background-color: #e8646d;\n}\nnav .nav-wrapper img{\n    width: 9vh;\n    padding: 10px;\n}\n#open-btn-s{\n    background-color: #fa9653;\n}\n#open-btn-l{\n    background-color: #fa9653;\n}\nimg, .brand-logo{\n    margin-left: 5%;\n}\n.side-nav li > a > i{\n    color: white;\n}\n#profile-btn-s{\n    background-color: #e83b47;\n}\n#profile-btn-l{\n    background-color: #e83b47;\n}\n#tickets-btn-s{\n    background-color: #3773e2;\n}\n#tickets-btn-l{\n    background-color: #3773e2;\n}\n#logout-btn-s{\n   background-color: #8f9cff;\n}\n#logout-btn-l{\n    background-color: #8f9cff;\n }"

/***/ }),

/***/ "./src/app/user-nav/user-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\n    <div class=\"nav-wrapper\">\n      <img src=\"../assets/logo2.png\" alt=\"Logo\">\n      <a href=\"/\" class=\"brand-logo\">Timeprove</a>\n      <a href=\"#\" data-activates=\"mobile-demo\" class=\"button-collapse\"><i class=\"material-icons\">menu</i></a>\n      <ul class=\"right hide-on-med-and-down\">\n          <li><a [routerLink]=\"['../mypage']\" id=\"profile-btn-l\" class=\"waves-effect waves-light btn\">My Page<i class=\"material-icons right\">face</i></a></li>\n          <li><a [routerLink]=\"['../mytickets']\" id=\"tickets-btn-l\" class=\"waves-effect waves-light btn\">My Tickets<i class=\"material-icons right\">event_note</i></a></li>\n          <li><a [routerLink]=\"['../newticket']\" id=\"open-btn-l\" class=\"waves-effect waves-light btn\">Open Ticket<i class=\"material-icons right\">event_note</i></a></li>\n          <li><a id=\"logout-btn-l\" (click)=\"logout()\" class=\"waves-effect waves-light btn\">Logout<i class=\"material-icons right\">exit_to_app</i></a></li>\n      </ul>\n      <ul class=\"side-nav\" id=\"mobile-demo\">\n        <li><a [routerLink]=\"['../mypage']\" id=\"profile-btn-s\" class=\"waves-effect waves-light btn\">My Page<i class=\"material-icons right\">face</i></a></li>\n        <li><a [routerLink]=\"['../mytickets']\" id=\"tickets-btn-s\" class=\"waves-effect waves-light btn\">My Tickets<i class=\"material-icons right\">event_note</i></a></li>\n        <li><a [routerLink]=\"['../newticket']\" id=\"open-btn-s\" class=\"waves-effect waves-light btn\">Open Ticket<i class=\"material-icons right\">event_note</i></a></li>\n        <li><a id=\"logout-btn-s\" (click)=\"logout()\" class=\"waves-effect waves-light btn\">Logout<i class=\"material-icons right\">exit_to_app</i></a></li>\n      </ul>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/user-nav/user-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserNavComponent = /** @class */ (function () {
    function UserNavComponent(session, route) {
        this.session = session;
        this.route = route;
        this.user = {
            services: [{ 'Phone': '' }, { 'Internet': '' }, { 'Television': '' }],
        };
    }
    UserNavComponent.prototype.ngOnInit = function () {
        $('.button-collapse').sideNav();
    };
    UserNavComponent.prototype.logout = function () {
        var _this = this;
        this.session.logout()
            .subscribe(function (data) {
            _this.route.navigate(['login']);
            localStorage.removeItem('user');
        });
    };
    UserNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-nav',
            template: __webpack_require__("./src/app/user-nav/user-nav.component.html"),
            styles: [__webpack_require__("./src/app/user-nav/user-nav.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* SessionService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], UserNavComponent);
    return UserNavComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    baseURL: 'http://localhost:3000/'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map