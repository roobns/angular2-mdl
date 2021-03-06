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
import { Directive, Input, ElementRef, Renderer, NgModule } from '@angular/core';
import { MdlError } from '../common/mdl-error';
import { NumberProperty } from '../common/number.property';
export var MdlUnsupportedShadowValueError = (function (_super) {
    __extends(MdlUnsupportedShadowValueError, _super);
    function MdlUnsupportedShadowValueError(value) {
        _super.call(this, "Shadow value \"" + value + "\" isn't supported (allowed: 2,3,4,6,8,16,24).");
    }
    return MdlUnsupportedShadowValueError;
}(MdlError));
var MDL_SHADOW_VALUES = [2, 3, 4, 6, 8, 16, 24];
export var MdlShadowDirective = (function () {
    function MdlShadowDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.mdlShadow = 2;
        this.el = elementRef.nativeElement;
    }
    MdlShadowDirective.prototype.ngOnChanges = function (changes) {
        if (MDL_SHADOW_VALUES.indexOf(Number(this.mdlShadow)) === -1) {
            throw new MdlUnsupportedShadowValueError(this.mdlShadow);
        }
        var change = changes['mdlShadow'];
        if (!change.isFirstChange()) {
            this.renderer.setElementClass(this.el, "mdl-shadow--" + change.previousValue + "dp", false);
        }
        this.renderer.setElementClass(this.el, "mdl-shadow--" + change.currentValue + "dp", true);
    };
    MdlShadowDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdl-shadow]'
                },] },
    ];
    /** @nocollapse */
    MdlShadowDirective.ctorParameters = [
        { type: ElementRef, },
        { type: Renderer, },
    ];
    MdlShadowDirective.propDecorators = {
        'mdlShadow': [{ type: Input, args: ['mdl-shadow',] },],
    };
    __decorate([
        NumberProperty()
    ], MdlShadowDirective.prototype, "mdlShadow", void 0);
    return MdlShadowDirective;
}());
var MDL_SHADOW_DIRECTIVES = [MdlShadowDirective];
export var MdlShadowModule = (function () {
    function MdlShadowModule() {
    }
    MdlShadowModule.forRoot = function () {
        return {
            ngModule: MdlShadowModule,
            providers: []
        };
    };
    MdlShadowModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    exports: MDL_SHADOW_DIRECTIVES,
                    declarations: MDL_SHADOW_DIRECTIVES,
                },] },
    ];
    /** @nocollapse */
    MdlShadowModule.ctorParameters = [];
    return MdlShadowModule;
}());
//# sourceMappingURL=mdl-shadow.directive.js.map