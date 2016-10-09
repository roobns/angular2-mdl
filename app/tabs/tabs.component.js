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
var TabsDemo = (function (_super) {
    __extends(TabsDemo, _super);
    function TabsDemo(router, route, titleService) {
        _super.call(this, router, route, titleService);
        this.activeIndex = 0;
    }
    TabsDemo.prototype.tabChanged = function (_a) {
        var index = _a.index;
        this.activeIndex = index;
    };
    TabsDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tabs-demo',
            host: flyInOutTrigger_animation_2.hostConfig,
            animations: [
                flyInOutTrigger_animation_1.flyInOutTrigger
            ],
            templateUrl: 'tabs.component.html',
            styles: [
                "\n    .demo-tab-container{\n       display: inline-block;\n    }\n    mdl-icon {\n       vertical-align: middle;\n    }\n    .mdl-tabs__tab {\n        cursor: pointer;\n    }\n    "
            ],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, platform_browser_1.Title])
    ], TabsDemo);
    return TabsDemo;
}(abstract_demo_component_1.AbstractDemoComponent));
exports.TabsDemo = TabsDemo;
//# sourceMappingURL=../../../dist/app/tabs/tabs.component.js.map