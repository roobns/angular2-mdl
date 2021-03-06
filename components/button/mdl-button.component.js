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
import { Component, Input, ElementRef, Renderer, NgModule, ViewEncapsulation } from '@angular/core';
import { MdlError } from '../common/mdl-error';
import { BooleanProperty } from '../common/boolean-property';
export var MdlUnsupportedButtonTypeError = (function (_super) {
    __extends(MdlUnsupportedButtonTypeError, _super);
    function MdlUnsupportedButtonTypeError(type) {
        _super.call(this, "Button type \"" + type + "\" isn't supported (allowed: raised, fab, mini-fab, icon, '').");
    }
    return MdlUnsupportedButtonTypeError;
}(MdlError));
export var MdlUnsupportedColoredTypeError = (function (_super) {
    __extends(MdlUnsupportedColoredTypeError, _super);
    function MdlUnsupportedColoredTypeError(type) {
        _super.call(this, "Colored type \"" + type + "\" isn't supported (allowed: primary, accent, '').");
    }
    return MdlUnsupportedColoredTypeError;
}(MdlError));
var MDL_BUTTON_TYPES = [
    'raised',
    'fab',
    'mini-fab',
    'icon',
    ''
];
var MDL_COLORED_TYPES = [
    'primary',
    'accent',
    ''
];
export var MdlButtonComponent = (function () {
    function MdlButtonComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.disabled = false;
        this.element = elementRef.nativeElement;
    }
    MdlButtonComponent.prototype.ngOnChanges = function () {
        if (this.mdlButtonType && MDL_BUTTON_TYPES.indexOf(this.mdlButtonType) === -1) {
            throw new MdlUnsupportedButtonTypeError(this.mdlButtonType);
        }
        if (this.mdlColoredType && MDL_COLORED_TYPES.indexOf(this.mdlColoredType) === -1) {
            throw new MdlUnsupportedColoredTypeError(this.mdlColoredType);
        }
    };
    MdlButtonComponent.prototype.onMouseUp = function () {
        this.blurIt();
    };
    MdlButtonComponent.prototype.onMouseLeave = function () {
        this.blurIt();
    };
    MdlButtonComponent.prototype.blurIt = function () {
        this.renderer.invokeElementMethod(this.element, 'blur', []);
    };
    MdlButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-button, button[mdl-button], a[mdl-button]',
                    host: {
                        '[attr.disabled]': 'disabled ? "disabled" : null',
                        '(mouseup)': 'onMouseUp()',
                        '(mouseleave)': 'onMouseLeave()',
                        '[class.mdl-button]': 'true',
                        '[class.mdl-button--raised]': 'mdlButtonType == "raised"',
                        '[class.mdl-button--fab]': 'mdlButtonType == "fab" || mdlButtonType == "mini-fab"',
                        '[class.mdl-button--mini-fab]': 'mdlButtonType == "mini-fab"',
                        '[class.mdl-button--icon]': 'mdlButtonType == "icon"',
                        '[class.mdl-button--primary]': 'mdlColoredType == "primary"',
                        '[class.mdl-button--accent]': 'mdlColoredType == "accent"'
                    },
                    exportAs: 'mdlButton',
                    template: '<ng-content></ng-content>',
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    MdlButtonComponent.ctorParameters = [
        { type: ElementRef, },
        { type: Renderer, },
    ];
    MdlButtonComponent.propDecorators = {
        'mdlButtonType': [{ type: Input, args: ['mdl-button-type',] },],
        'mdlColoredType': [{ type: Input, args: ['mdl-colored',] },],
        'disabled': [{ type: Input },],
    };
    __decorate([
        BooleanProperty()
    ], MdlButtonComponent.prototype, "disabled", void 0);
    return MdlButtonComponent;
}());
var MDL_BUTTON_DIRECTIVES = [MdlButtonComponent];
export var MdlButtonModule = (function () {
    function MdlButtonModule() {
    }
    MdlButtonModule.forRoot = function () {
        return {
            ngModule: MdlButtonModule,
            providers: []
        };
    };
    MdlButtonModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    exports: MDL_BUTTON_DIRECTIVES,
                    declarations: MDL_BUTTON_DIRECTIVES,
                },] },
    ];
    /** @nocollapse */
    MdlButtonModule.ctorParameters = [];
    return MdlButtonModule;
}());
//# sourceMappingURL=mdl-button.component.js.map