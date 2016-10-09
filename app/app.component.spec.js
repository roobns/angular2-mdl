"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var testing_1 = require('@angular/core/testing');
var app_component_1 = require('./app.component');
var app_module_1 = require('./app-module');
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
var Rx_1 = require('rxjs/Rx');
var router_1 = require('@angular/router');
var MockRouter = (function () {
    function MockRouter() {
        this.events = new Rx_1.Subject();
        this.routerState = { root: null };
    }
    MockRouter.prototype.createUrlTree = function () { };
    return MockRouter;
}());
exports.MockRouter = MockRouter;
describe('App: Angular2Mdl', function () {
    var compFixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [app_module_1.Angular2MdlAppModule],
            providers: [
                { provide: router_1.Router, useValue: new MockRouter() },
                { provide: common_1.APP_BASE_HREF, useValue: '/' }
            ],
            declarations: []
        });
        testing_1.TestBed.compileComponents().then(function () {
            compFixture = testing_1.TestBed.createComponent(app_component_1.Angular2MdlAppComponent);
        });
    }));
    it('should create the app', testing_1.async(function () {
        expect(compFixture).toBeTruthy();
    }));
    it('should have as title \'Angular 2 - Material Design Lite\'', testing_1.async(function () {
        var app = compFixture.componentInstance;
        expect(app.title).toEqual('Angular 2 - Material Design Lite');
    }));
});
var TestApp = (function () {
    function TestApp() {
    }
    TestApp = __decorate([
        core_1.Component({
            selector: 'test-app',
            template: '<root-app></root-app>'
        }), 
        __metadata('design:paramtypes', [])
    ], TestApp);
    return TestApp;
}());
//# sourceMappingURL=../../dist/app/app.component.spec.js.map