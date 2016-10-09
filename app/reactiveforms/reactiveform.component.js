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
var forms_1 = require('@angular/forms');
require('rxjs/add/operator/filter');
require('rxjs/add/operator/map');
var router_1 = require('@angular/router');
var platform_browser_1 = require('@angular/platform-browser');
var abstract_demo_component_1 = require('./../abstract-demo.component');
var emailValidator = forms_1.Validators.pattern('^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$');
var ReactiveFormsDemo = (function (_super) {
    __extends(ReactiveFormsDemo, _super);
    function ReactiveFormsDemo(router, route, titleService, fb) {
        _super.call(this, router, route, titleService);
        this.fb = fb;
        this.disableForm = false;
        this.firstName = new forms_1.FormControl('');
        this.lastName = new forms_1.FormControl('', forms_1.Validators.required);
        this.email = new forms_1.FormControl('', emailValidator);
        this.email2 = new forms_1.FormControl('', emailValidator);
        this.breakfast = new forms_1.FormControl('Continental');
        this.toDrink = new forms_1.FormControl('Tea');
    }
    ReactiveFormsDemo.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this.form = this.fb.group({
            'firstName': this.firstName,
            'lastName': this.lastName,
            'email': this.email,
            'email2': this.email2,
            'breakfast': this.breakfast,
            'toDrink': this.toDrink
        });
        this.form.valueChanges
            .map(function (formValues) {
            formValues.firstName = formValues.firstName.toUpperCase();
            return formValues;
        })
            .subscribe(function (formValues) {
            console.log("Model Driven Form valid: " + _this.form.valid + " value:", JSON.stringify(formValues));
        });
    };
    ReactiveFormsDemo.prototype.onSubmit = function () {
        console.log(this.form);
    };
    ReactiveFormsDemo.prototype.onDisableForm = function (formDisabled) {
        if (formDisabled) {
            this.form.disable();
        }
        else {
            this.form.enable();
        }
    };
    ReactiveFormsDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'reactive-form-demo',
            host: flyInOutTrigger_animation_2.hostConfig,
            animations: [
                flyInOutTrigger_animation_1.flyInOutTrigger
            ],
            templateUrl: 'reactiveform.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, platform_browser_1.Title, forms_1.FormBuilder])
    ], ReactiveFormsDemo);
    return ReactiveFormsDemo;
}(abstract_demo_component_1.AbstractDemoComponent));
exports.ReactiveFormsDemo = ReactiveFormsDemo;
//# sourceMappingURL=../../../dist/app/reactiveforms/reactiveform.component.js.map