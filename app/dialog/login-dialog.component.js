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
var core_1 = require('@angular/core');
var index_1 = require('../../components/dialog/index');
require('rxjs/add/operator/scan');
var mdl_textfield_component_1 = require('../../components/textfield/mdl-textfield.component');
var login_service_1 = require('./login.service');
var forms_1 = require('@angular/forms');
var LoginDialogComponent = (function () {
    function LoginDialogComponent(vcRef, dialog, fb, loginService) {
        this.vcRef = vcRef;
        this.dialog = dialog;
        this.fb = fb;
        this.loginService = loginService;
        this.username = new forms_1.FormControl('', forms_1.Validators.required);
        this.password = new forms_1.FormControl('', forms_1.Validators.required);
        this.processingLogin = false;
        this.statusMessage = '';
        // just if you want to be informed if the dialog is hidden
        this.dialog.onHide().subscribe(function () { return console.log('login dialog hidden'); });
    }
    LoginDialogComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            'username': this.username,
            'password': this.password
        });
    };
    Object.defineProperty(LoginDialogComponent.prototype, "viewContainerRef", {
        // this will no longer be necessary in verion 2.X
        get: function () {
            return this.vcRef;
        },
        enumerable: true,
        configurable: true
    });
    LoginDialogComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // set the focus - autofocus only works once :(
        setTimeout(function () {
            _this.inputElement.setFocus();
        }, 1);
    };
    LoginDialogComponent.prototype.login = function () {
        var _this = this;
        this.processingLogin = true;
        this.statusMessage = 'checking your credentials ...';
        var obs = this.loginService.login(this.username.value, this.password.value);
        obs.subscribe(function (result) {
            _this.processingLogin = false;
            _this.statusMessage = 'you are logged in ...';
            setTimeout(function () {
                _this.dialog.hide();
            }, 500);
        });
    };
    LoginDialogComponent.prototype.onEsc = function () {
        this.dialog.hide();
    };
    __decorate([
        core_1.ViewChild('firstElement'), 
        __metadata('design:type', mdl_textfield_component_1.MdlTextFieldComponent)
    ], LoginDialogComponent.prototype, "inputElement", void 0);
    __decorate([
        core_1.HostListener('keydown.esc'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], LoginDialogComponent.prototype, "onEsc", null);
    LoginDialogComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login-dialog',
            templateUrl: 'login-dialog.html',
            styles: [
                "\n     .status-bar {\n         text-align: center;\n     }\n    "
            ]
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef, index_1.MdlDialogReference, forms_1.FormBuilder, login_service_1.LoginService])
    ], LoginDialogComponent);
    return LoginDialogComponent;
}());
exports.LoginDialogComponent = LoginDialogComponent;
//# sourceMappingURL=../../../dist/app/dialog/login-dialog.component.js.map