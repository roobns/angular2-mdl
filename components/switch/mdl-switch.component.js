var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component, ElementRef, Renderer, forwardRef, NgModule, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { MdlCheckboxComponent } from '../checkbox/mdl-checkbox.component';
import { CommonModule } from '@angular/common';
export var MdlSwitchComponent = (function (_super) {
    __extends(MdlSwitchComponent, _super);
    function MdlSwitchComponent(elementRef, renderer) {
        _super.call(this, elementRef, renderer);
    }
    MdlSwitchComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-switch',
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return MdlSwitchComponent; }),
                            multi: true
                        }],
                    host: {
                        '(click)': 'onClick()',
                        '[class.mdl-switch]': 'true',
                        '[class.is-upgraded]': 'true',
                        '[class.is-checked]': 'value',
                        '[class.is-disabled]': 'disabled'
                    },
                    outputs: ['change'],
                    template: "\n    <input type=\"checkbox\" class=\"mdl-switch__input\" \n      (focus)=\"onFocus()\" \n      (blur)=\"onBlur()\"\n      [disabled]=\"disabled\"\n      [(ngModel)]=\"value\">\n    <span class=\"mdl-switch__label\"><ng-content></ng-content></span>\n    <div class=\"mdl-switch__track\"></div>\n    <div class=\"mdl-switch__thumb\"><span class=\"mdl-switch__focus-helper\"></span></div>\n  ",
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    MdlSwitchComponent.ctorParameters = [
        { type: ElementRef, },
        { type: Renderer, },
    ];
    return MdlSwitchComponent;
}(MdlCheckboxComponent));
var MDL_SWITCH_DIRECTIVES = [MdlSwitchComponent];
export var MdlSwitchModule = (function () {
    function MdlSwitchModule() {
    }
    MdlSwitchModule.forRoot = function () {
        return {
            ngModule: MdlSwitchModule,
            providers: []
        };
    };
    MdlSwitchModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule],
                    exports: MDL_SWITCH_DIRECTIVES,
                    declarations: MDL_SWITCH_DIRECTIVES,
                },] },
    ];
    /** @nocollapse */
    MdlSwitchModule.ctorParameters = [];
    return MdlSwitchModule;
}());
//# sourceMappingURL=mdl-switch.component.js.map