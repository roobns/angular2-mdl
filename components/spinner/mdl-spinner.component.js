var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Input, NgModule, ViewEncapsulation } from '@angular/core';
import { BooleanProperty } from '../common/boolean-property';
import { CommonModule } from '@angular/common';
export var MdlSpinnerComponent = (function () {
    function MdlSpinnerComponent() {
        this.layers = [1, 2, 3, 4];
    }
    MdlSpinnerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-spinner',
                    host: {
                        '[class.mdl-spinner]': 'true',
                        '[class.is-upgraded]': 'true',
                        '[class.is-active]': 'active',
                        '[class.mdl-spinner--single-color]': 'singleColor',
                    },
                    // must be one line - otherwise the spinner is broken in the ui
                    /* tslint:disable */
                    template: "\n    <div *ngFor=\"let layer of layers;\" \n            class=\"mdl-spinner__layer mdl-spinner__layer-{{layer}}\">\n      <div class=\"mdl-spinner__circle-clipper mdl-spinner__left\">\n         <div class=\"mdl-spinner__circle\"></div>\n      </div><div class=\"mdl-spinner__gap-patch\"><div class=\"mdl-spinner__circle\"></div></div><div class=\"mdl-spinner__circle-clipper mdl-spinner__right\"><div class=\"mdl-spinner__circle\"></div></div>\n    </div>\n  ",
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    MdlSpinnerComponent.ctorParameters = [];
    MdlSpinnerComponent.propDecorators = {
        'active': [{ type: Input },],
        'singleColor': [{ type: Input, args: ['single-color',] },],
    };
    __decorate([
        BooleanProperty()
    ], MdlSpinnerComponent.prototype, "active", void 0);
    __decorate([
        BooleanProperty()
    ], MdlSpinnerComponent.prototype, "singleColor", void 0);
    return MdlSpinnerComponent;
}());
var MDL_SPINNER_DIRECTIVES = [MdlSpinnerComponent];
export var MdlSpinnerModule = (function () {
    function MdlSpinnerModule() {
    }
    MdlSpinnerModule.forRoot = function () {
        return {
            ngModule: MdlSpinnerModule,
            providers: []
        };
    };
    MdlSpinnerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: MDL_SPINNER_DIRECTIVES,
                    declarations: MDL_SPINNER_DIRECTIVES,
                },] },
    ];
    /** @nocollapse */
    MdlSpinnerModule.ctorParameters = [];
    return MdlSpinnerModule;
}());
//# sourceMappingURL=mdl-spinner.component.js.map