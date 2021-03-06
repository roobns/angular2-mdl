var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, forwardRef, Input, Renderer, ElementRef, ViewChild, NgModule, OpaqueToken, Optional, Inject, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BooleanProperty } from '../common/boolean-property';
import { NumberProperty } from '../common/number.property';
import { MdlButtonModule } from '../button/mdl-button.component';
import { MdlIconModule } from '../icon/mdl-icon.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
export var DISABLE_NATIVE_VALIDITY_CHECKING = new OpaqueToken('disableNativeValidityChecking');
var noop = function (_) { };
var nextId = 0;
var IS_FOCUSED = 'is-focused';
var IS_DISABLED = 'is-disabled';
var IS_INVALID = 'is-invalid';
var IS_DIRTY = 'is-dirty';
export var MdlTextFieldComponent = (function () {
    function MdlTextFieldComponent(renderer, elmRef, nativeCheckGlobalDisabled) {
        this.renderer = renderer;
        this.elmRef = elmRef;
        this.nativeCheckGlobalDisabled = nativeCheckGlobalDisabled;
        this.blurEmitter = new EventEmitter();
        this.focusEmitter = new EventEmitter();
        this.id = "mdl-textfield-" + nextId++;
        this.disabled = false;
        this.required = false;
        this.autofocus = false;
        this.isFloatingLabel = false;
        this.rows = null;
        this.maxrows = -1;
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        this.el = elmRef.nativeElement;
    }
    Object.defineProperty(MdlTextFieldComponent.prototype, "value", {
        get: function () { return this.value_; },
        set: function (v) {
            this.value_ = v;
            this.onChangeCallback(v);
        },
        enumerable: true,
        configurable: true
    });
    ;
    MdlTextFieldComponent.prototype.writeValue = function (value) {
        this.value_ = value;
        this.checkDirty();
    };
    MdlTextFieldComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    MdlTextFieldComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    MdlTextFieldComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    MdlTextFieldComponent.prototype.ngOnChanges = function () {
        this.checkDisabled();
    };
    MdlTextFieldComponent.prototype.ngDoCheck = function () {
        this.checkValidity();
        this.checkDirty();
    };
    MdlTextFieldComponent.prototype.setFocus = function () {
        if (!this.inputEl) {
            return;
        }
        this.renderer.invokeElementMethod(this.inputEl.nativeElement, 'focus', []);
    };
    MdlTextFieldComponent.prototype.onFocus = function (event) {
        this.renderer.setElementClass(this.el, IS_FOCUSED, true);
        this.focusEmitter.emit(event);
    };
    MdlTextFieldComponent.prototype.onBlur = function (event) {
        this.renderer.setElementClass(this.el, IS_FOCUSED, false);
        this.onTouchedCallback();
        this.blurEmitter.emit(event);
    };
    MdlTextFieldComponent.prototype.checkDisabled = function () {
        this.renderer.setElementClass(this.el, IS_DISABLED, this.disabled);
    };
    MdlTextFieldComponent.prototype.checkValidity = function () {
        // check the global setting - if globally disabled do no check
        if (this.nativeCheckGlobalDisabled === true) {
            return;
        }
        // check local setting - if locally disabled do no check
        if (this.disableNativeValidityChecking) {
            return;
        }
        if (this.inputEl && this.inputEl.nativeElement.validity) {
            this.renderer.setElementClass(this.el, IS_INVALID, !this.inputEl.nativeElement.validity.valid);
        }
    };
    MdlTextFieldComponent.prototype.checkDirty = function () {
        var dirty = this.inputEl && this.inputEl.nativeElement.value && this.inputEl.nativeElement.value.length > 0;
        this.renderer.setElementClass(this.el, IS_DIRTY, dirty);
    };
    MdlTextFieldComponent.prototype.keydownTextarea = function ($event) {
        var currentRowCount = this.inputEl.nativeElement.value.split('\n').length;
        if ($event.keyCode === 13) {
            if (currentRowCount >= this.maxrows && this.maxrows !== -1) {
                $event.preventDefault();
            }
        }
    };
    MdlTextFieldComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-textfield',
                    host: {
                        '[class.mdl-textfield]': 'true',
                        '[class.is-upgraded]': 'true',
                        '[class.mdl-textfield--expandable]': 'icon',
                        '[class.mdl-textfield--floating-label]': 'isFloatingLabel',
                        '[class.has-placeholder]': 'placeholder'
                    },
                    template: "\n   <div *ngIf=\"!icon\">\n     <textarea\n        *ngIf=\"rows\"\n        #input\n        [rows]=\"rows\"\n        class=\"mdl-textfield__input\"\n        type=\"text\"\n        [attr.name]=\"name\"\n        [id]=\"id\"\n        [placeholder]=\"placeholder ? placeholder : ''\"\n        (focus)=\"onFocus($event)\"\n        (blur)=\"onBlur($event)\"\n        (keydown)=\"keydownTextarea($event)\"\n        [(ngModel)]=\"value\"\n        [disabled]=\"disabled\"\n        [autofocus]=\"autofocus\"\n        ></textarea>\n     <input\n        *ngIf=\"!rows\"\n        #input\n        class=\"mdl-textfield__input\"\n        [type]=\"type\"\n        [attr.name]=\"name\"\n        [id]=\"id\"\n        [pattern]=\"pattern ? pattern : '.*'\"\n        [attr.min]=\"min\"\n        [attr.max]=\"max\"\n        [placeholder]=\"placeholder ? placeholder : ''\"\n        [autocomplete]=\"autocomplete ? autocomplete : ''\"\n        (focus)=\"onFocus($event)\"\n        (blur)=\"onBlur($event)\"\n        [(ngModel)]=\"value\"\n        [disabled]=\"disabled\"\n        [required]=\"required\"\n        [autofocus]=\"autofocus\"\n        >\n     <label class=\"mdl-textfield__label\" [attr.for]=\"id\">{{label}}</label>\n     <span class=\"mdl-textfield__error\">{{errorMessage}}</span>\n   </div>\n   <div *ngIf=\"icon\">\n      <button mdl-button mdl-button-type=\"icon\" (click)=\"setFocus()\">\n         <mdl-icon>{{icon}}</mdl-icon>\n      </button>\n      <div class=\"mdl-textfield__expandable-holder\">\n       <input\n          #input\n          class=\"mdl-textfield__input\"\n          [type]=\"type\"\n          [attr.name]=\"name\"\n          [id]=\"id\"\n          [pattern]=\"pattern ? pattern : '.*'\"\n          [attr.min]=\"min\"\n          [attr.max]=\"max\"\n          [placeholder]=\"placeholder ? placeholder : ''\"\n          [autocomplete]=\"autocomplete ? autocomplete : ''\"\n          (focus)=\"onFocus($event)\"\n          (blur)=\"onBlur($event)\"\n          [(ngModel)]=\"value\"\n          [disabled]=\"disabled\"\n          [required]=\"required\"\n          [autofocus]=\"autofocus\"\n         >\n     <label class=\"mdl-textfield__label\" [attr.for]=\"id\">{{label}}</label>\n     <span class=\"mdl-textfield__error\">{{errorMessage}}</span>\n      </div>\n   </div>\n   ",
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return MdlTextFieldComponent; }),
                            multi: true
                        }],
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    MdlTextFieldComponent.ctorParameters = [
        { type: Renderer, },
        { type: ElementRef, },
        { type: Boolean, decorators: [{ type: Optional }, { type: Inject, args: [DISABLE_NATIVE_VALIDITY_CHECKING,] },] },
    ];
    MdlTextFieldComponent.propDecorators = {
        'blurEmitter': [{ type: Output, args: ['blur',] },],
        'focusEmitter': [{ type: Output, args: ['focus',] },],
        'inputEl': [{ type: ViewChild, args: ['input',] },],
        'value': [{ type: Input },],
        'type': [{ type: Input },],
        'label': [{ type: Input },],
        'pattern': [{ type: Input },],
        'min': [{ type: Input },],
        'max': [{ type: Input },],
        'name': [{ type: Input },],
        'id': [{ type: Input },],
        'errorMessage': [{ type: Input, args: ['error-msg',] },],
        'disabled': [{ type: Input },],
        'required': [{ type: Input },],
        'autofocus': [{ type: Input },],
        'isFloatingLabel': [{ type: Input, args: ['floating-label',] },],
        'placeholder': [{ type: Input },],
        'autocomplete': [{ type: Input },],
        'rows': [{ type: Input },],
        'maxrows': [{ type: Input },],
        'icon': [{ type: Input },],
        'disableNativeValidityChecking': [{ type: Input },],
    };
    __decorate([
        BooleanProperty()
    ], MdlTextFieldComponent.prototype, "disabled", void 0);
    __decorate([
        BooleanProperty()
    ], MdlTextFieldComponent.prototype, "required", void 0);
    __decorate([
        BooleanProperty()
    ], MdlTextFieldComponent.prototype, "autofocus", void 0);
    __decorate([
        BooleanProperty()
    ], MdlTextFieldComponent.prototype, "isFloatingLabel", void 0);
    __decorate([
        NumberProperty()
    ], MdlTextFieldComponent.prototype, "rows", void 0);
    __decorate([
        NumberProperty()
    ], MdlTextFieldComponent.prototype, "maxrows", void 0);
    __decorate([
        BooleanProperty()
    ], MdlTextFieldComponent.prototype, "disableNativeValidityChecking", void 0);
    return MdlTextFieldComponent;
}());
export var MdlTextFieldModule = (function () {
    function MdlTextFieldModule() {
    }
    MdlTextFieldModule.forRoot = function () {
        return {
            ngModule: MdlTextFieldModule,
            providers: []
        };
    };
    MdlTextFieldModule.decorators = [
        { type: NgModule, args: [{
                    imports: [MdlIconModule, MdlButtonModule, FormsModule, CommonModule],
                    exports: [MdlTextFieldComponent],
                    declarations: [MdlTextFieldComponent],
                },] },
    ];
    /** @nocollapse */
    MdlTextFieldModule.ctorParameters = [];
    return MdlTextFieldModule;
}());
//# sourceMappingURL=mdl-textfield.component.js.map