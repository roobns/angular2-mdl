import { Directive, Input, ElementRef, Renderer, NgModule } from '@angular/core';
export var MdlBadgeDirective = (function () {
    function MdlBadgeDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.el = elementRef.nativeElement;
    }
    MdlBadgeDirective.prototype.ngOnChanges = function () {
        this.renderer.setElementAttribute(this.el, 'data-badge', this.mdlBadgeContent);
    };
    MdlBadgeDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdl-badge]',
                    host: {
                        '[class.mdl-badge]': 'true'
                    }
                },] },
    ];
    /** @nocollapse */
    MdlBadgeDirective.ctorParameters = [
        { type: ElementRef, },
        { type: Renderer, },
    ];
    MdlBadgeDirective.propDecorators = {
        'mdlBadgeContent': [{ type: Input, args: ['mdl-badge',] },],
    };
    return MdlBadgeDirective;
}());
export var MdlBadgeOverlapDirective = (function () {
    function MdlBadgeOverlapDirective() {
    }
    MdlBadgeOverlapDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdl-badge-overlap]',
                    host: {
                        '[class.mdl-badge--overlap]': 'true'
                    }
                },] },
    ];
    /** @nocollapse */
    MdlBadgeOverlapDirective.ctorParameters = [];
    return MdlBadgeOverlapDirective;
}());
export var MdlBadgeNoBackgroundDirective = (function () {
    function MdlBadgeNoBackgroundDirective() {
    }
    MdlBadgeNoBackgroundDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdl-badge-no-background]',
                    host: {
                        '[class.mdl-badge--no-background]': 'true'
                    }
                },] },
    ];
    /** @nocollapse */
    MdlBadgeNoBackgroundDirective.ctorParameters = [];
    return MdlBadgeNoBackgroundDirective;
}());
var MDL_BADGE_DIRECTIVES = [MdlBadgeDirective, MdlBadgeOverlapDirective, MdlBadgeNoBackgroundDirective];
export var MdlBadgeModule = (function () {
    function MdlBadgeModule() {
    }
    MdlBadgeModule.forRoot = function () {
        return {
            ngModule: MdlBadgeModule,
            providers: []
        };
    };
    MdlBadgeModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    exports: MDL_BADGE_DIRECTIVES,
                    declarations: MDL_BADGE_DIRECTIVES,
                },] },
    ];
    /** @nocollapse */
    MdlBadgeModule.ctorParameters = [];
    return MdlBadgeModule;
}());
//# sourceMappingURL=mdl-badge.directive.js.map