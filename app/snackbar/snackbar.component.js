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
var components_1 = require('../../components');
var flyInOutTrigger_animation_1 = require('./../animations/flyInOutTrigger-animation');
var flyInOutTrigger_animation_2 = require('./../animations/flyInOutTrigger-animation');
var router_1 = require('@angular/router');
var platform_browser_1 = require('@angular/platform-browser');
var abstract_demo_component_1 = require('./../abstract-demo.component');
var SnackbarDemo = (function (_super) {
    __extends(SnackbarDemo, _super);
    function SnackbarDemo(router, route, titleService, mdlSnackbarService, vcRef) {
        _super.call(this, router, route, titleService);
        this.mdlSnackbarService = mdlSnackbarService;
        this.vcRef = vcRef;
        mdlSnackbarService.setDefaultViewContainerRef(vcRef);
    }
    SnackbarDemo.prototype.showSnackbar = function () {
        var _this = this;
        this.mdlSnackbarService.showSnackbar({
            message: 'The Message',
            action: {
                handler: function () {
                    _this.mdlSnackbarService.showToast('You hit the ok Button');
                },
                text: 'OK'
            }
        });
    };
    SnackbarDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'snackbar-demo',
            host: flyInOutTrigger_animation_2.hostConfig,
            animations: [
                flyInOutTrigger_animation_1.flyInOutTrigger
            ],
            templateUrl: 'snackbar.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, platform_browser_1.Title, components_1.MdlSnackbarService, core_1.ViewContainerRef])
    ], SnackbarDemo);
    return SnackbarDemo;
}(abstract_demo_component_1.AbstractDemoComponent));
exports.SnackbarDemo = SnackbarDemo;
//# sourceMappingURL=../../../dist/app/snackbar/snackbar.component.js.map