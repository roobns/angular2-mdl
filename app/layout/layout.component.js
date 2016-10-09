"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var flyInOutTrigger_animation_1 = require('./../animations/flyInOutTrigger-animation');
var flyInOutTrigger_animation_2 = require('./../animations/flyInOutTrigger-animation');
var router_1 = require('@angular/router');
var platform_browser_1 = require('@angular/platform-browser');
var abstract_demo_component_1 = require('./../abstract-demo.component');
var LayoutDemo = (function (_super) {
    __extends(LayoutDemo, _super);
    function LayoutDemo(router, route, titleService) {
        _super.call(this, router, route, titleService);
        this.activeIndex = 0;
    }
    LayoutDemo.prototype.tabChanged = function (_a) {
        var index = _a.index;
        this.activeIndex = index;
    };
    LayoutDemo.prototype.tabMouseover = function (_a) {
        var index = _a.index;
        console.log("mouseover: " + index);
    };
    LayoutDemo.prototype.tabMouseout = function (_a) {
        var index = _a.index;
        console.log("mouseout: " + index);
    };
    LayoutDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'layout-demo',
            host: flyInOutTrigger_animation_2.hostConfig,
            animations: [
                flyInOutTrigger_animation_1.flyInOutTrigger
            ],
            templateUrl: 'layout.component.html',
            styles: [
                "\n    .demo-container {\n        width: 100%;\n        position: relative;\n        height: 300px;\n    }\n    .demo-layout-transparent {\n        background: url('assets/oslo.jpg') center / cover;\n        color: white;\n    }\n    .page-content {\n        height: 600px;\n    }\n    \n    mdl-icon {\n       vertical-align: middle;\n    }\n    .mdl-layout__tab {\n        cursor: pointer;\n    }\n    .demo-container .mdl-layout__drawer-button {\n        line-height: 42px;\n    }\n    \n    "
            ],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, platform_browser_1.Title])
    ], LayoutDemo);
    return LayoutDemo;
}(abstract_demo_component_1.AbstractDemoComponent));
exports.LayoutDemo = LayoutDemo;
var Layout0Demo = (function () {
    function Layout0Demo() {
    }
    Layout0Demo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'layout-demo-0',
            template: '',
        }), 
        __metadata('design:paramtypes', [])
    ], Layout0Demo);
    return Layout0Demo;
}());
exports.Layout0Demo = Layout0Demo;
var Layout1Demo = (function () {
    function Layout1Demo() {
    }
    Layout1Demo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'layout-demo-1',
            template: '<div>Link 1 content</div>',
        }), 
        __metadata('design:paramtypes', [])
    ], Layout1Demo);
    return Layout1Demo;
}());
exports.Layout1Demo = Layout1Demo;
var Layout2Demo = (function () {
    function Layout2Demo() {
    }
    Layout2Demo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'layout-demo-2',
            template: '<div>Link 2 content</div>',
        }), 
        __metadata('design:paramtypes', [])
    ], Layout2Demo);
    return Layout2Demo;
}());
exports.Layout2Demo = Layout2Demo;
var Layout3Demo = (function () {
    function Layout3Demo() {
    }
    Layout3Demo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'layout-demo-3',
            template: '<div>Link 3 content</div>',
        }), 
        __metadata('design:paramtypes', [])
    ], Layout3Demo);
    return Layout3Demo;
}());
exports.Layout3Demo = Layout3Demo;
//# sourceMappingURL=../../../dist/app/layout/layout.component.js.map