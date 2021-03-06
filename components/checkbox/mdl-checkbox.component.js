var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, ElementRef, EventEmitter, Renderer, forwardRef, NgModule, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BooleanProperty } from '../common/boolean-property';
var noop = function (_) { };
var IS_FOCUSED = 'is-focused';
export var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return MdlCheckboxComponent; }),
    multi: true
};
export var MdlCheckboxComponent = (function () {
    function MdlCheckboxComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.disabled = false;
        this.change = new EventEmitter();
        this.value_ = false;
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        this.el = elementRef.nativeElement;
    }
    Object.defineProperty(MdlCheckboxComponent.prototype, "value", {
        get: function () { return this.value_; },
        set: function (v) {
            this.value_ = v;
            this.onChangeCallback(v);
            this.change.emit(v);
        },
        enumerable: true,
        configurable: true
    });
    ;
    MdlCheckboxComponent.prototype.writeValue = function (value) {
        this.value_ = value;
    };
    MdlCheckboxComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    MdlCheckboxComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    MdlCheckboxComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    MdlCheckboxComponent.prototype.onFocus = function () {
        this.renderer.setElementClass(this.el, IS_FOCUSED, true);
    };
    MdlCheckboxComponent.prototype.onBlur = function () {
        this.renderer.setElementClass(this.el, IS_FOCUSED, false);
        this.onTouchedCallback();
    };
    MdlCheckboxComponent.prototype.onClick = function () {
        if (this.disabled) {
            return;
        }
        this.value = !this.value;
    };
    MdlCheckboxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-checkbox',
                    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                    host: {
                        '(click)': 'onClick()',
                        '[class.mdl-checkbox]': 'true',
                        '[class.is-upgraded]': 'true',
                        '[class.is-checked]': 'value',
                        '[class.is-disabled]': 'disabled'
                    },
                    template: "\n  <input type=\"checkbox\" class=\"mdl-checkbox__input\" \n    (focus)=\"onFocus()\" \n    (blur)=\"onBlur()\"\n    [disabled]=\"disabled\"\n    [ngModel]=\"value\">\n  <span class=\"mdl-checkbox__label\"><ng-content></ng-content></span>\n  <span class=\"mdl-checkbox__focus-helper\"></span>\n  <span class=\"mdl-checkbox__box-outline\">\n    <span class=\"mdl-checkbox__tick-outline\"></span>\n  </span>\n  ",
                    inputs: ['value'],
                    outputs: ['change'],
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    MdlCheckboxComponent.ctorParameters = [
        { type: ElementRef, },
        { type: Renderer, },
    ];
    MdlCheckboxComponent.propDecorators = {
        'disabled': [{ type: Input },],
    };
    __decorate([
        BooleanProperty()
    ], MdlCheckboxComponent.prototype, "disabled", void 0);
    return MdlCheckboxComponent;
}());
var MDL_CHECKBOX_DIRECTIVES = [MdlCheckboxComponent];
export var MdlCheckboxModule = (function () {
    function MdlCheckboxModule() {
    }
    MdlCheckboxModule.forRoot = function () {
        return {
            ngModule: MdlCheckboxModule,
            providers: []
        };
    };
    MdlCheckboxModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule],
                    exports: MDL_CHECKBOX_DIRECTIVES,
                    declarations: MDL_CHECKBOX_DIRECTIVES,
                },] },
    ];
    /** @nocollapse */
    MdlCheckboxModule.ctorParameters = [];
    return MdlCheckboxModule;
}());
//# sourceMappingURL=mdl-checkbox.component.js.map