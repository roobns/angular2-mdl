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
var index_1 = require('../../components/dialog/index');
var mdl_snackbar_service_1 = require('../../components/snackbar/mdl-snackbar.service');
var login_dialog_component_1 = require('./login-dialog.component');
var DialogDemo = (function (_super) {
    __extends(DialogDemo, _super);
    function DialogDemo(router, route, titleService, dialogService, snackbarService, componentFactoryResolver) {
        _super.call(this, router, route, titleService);
        this.dialogService = dialogService;
        this.snackbarService = snackbarService;
        this.componentFactoryResolver = componentFactoryResolver;
    }
    DialogDemo.prototype.showAlert = function () {
        var result = this.dialogService.alert('This is a simple Alert');
        result.then(function () { return console.log('alert closed'); });
    };
    DialogDemo.prototype.showConfirmMessage = function () {
        var result = this.dialogService.confirm('Would you like a mug of coffee?', 'No', 'Yes');
        result.then(function (choosedOption) { return console.log(choosedOption === index_1.ConfirmResult.Confirmed); });
    };
    DialogDemo.prototype.showDialogFullWidthAction = function () {
        var _this = this;
        var pDialog = this.dialogService.showDialog({
            title: 'Your choice?',
            message: 'What drink do you prefer to your meal?',
            actions: [
                {
                    handler: function () {
                        _this.snackbarService.showToast('Coke');
                    },
                    text: 'One Coke',
                    isClosingAction: true
                },
                {
                    handler: function () {
                        _this.snackbarService.showToast('Vine');
                    },
                    text: 'A bottle of vine'
                },
                {
                    handler: function () {
                        _this.snackbarService.showToast('Beer');
                    },
                    text: 'A pint of beer'
                }
            ],
            fullWidthAction: true,
            isModal: false
        });
        pDialog.then(function (dialogReference) { return console.log('dialog visible', dialogReference); });
    };
    DialogDemo.prototype.showDialog = function () {
        var pDialog = this.dialogService.showCustomDialog({
            component: login_dialog_component_1.LoginDialogComponent,
            isModal: true
        });
        pDialog.then(function (dialogReference) {
            console.log('dialog visible', dialogReference);
        });
    };
    DialogDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dialog-demo',
            host: flyInOutTrigger_animation_2.hostConfig,
            animations: [
                flyInOutTrigger_animation_1.flyInOutTrigger
            ],
            templateUrl: 'dialog.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, platform_browser_1.Title, index_1.MdlDialogService, mdl_snackbar_service_1.MdlSnackbarService, core_1.ComponentFactoryResolver])
    ], DialogDemo);
    return DialogDemo;
}(abstract_demo_component_1.AbstractDemoComponent));
exports.DialogDemo = DialogDemo;
//# sourceMappingURL=../../../dist/app/dialog/dialog.component.js.map