var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Directive, Input, ElementRef, Renderer, NgModule } from '@angular/core';
import { MaterialRipple } from './ripple.vendor';
// known bugs: https://github.com/google/material-design-lite/issues/4215
export var MdlRippleDirective = (function () {
    function MdlRippleDirective(elementRef, renderer, cssContainerClasses) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.cssContainerClasses = cssContainerClasses;
        this.RIPPLE = 'mdl-ripple';
        this.rippleActive = true;
        this.el = elementRef.nativeElement;
    }
    MdlRippleDirective.prototype.ngOnChanges = function () {
        var _this = this;
        // remove any existing ripple container
        if (this.rippleContainer) {
            this.el.removeChild(this.rippleContainer);
            delete this.rippleContainer;
            delete this.ripple;
        }
        // if used as mdl-ripple without property binding it is an empty string
        // otherwise (e.g. [mdl-ripple] it is a boolean - may be with the default value true.
        if (this.rippleActive === '' || this.rippleActive) {
            this.rippleContainer = this.renderer.createElement(null, 'span');
            this.cssContainerClasses.forEach(function (cssClass) {
                _this.rippleContainer.classList.add(cssClass);
            });
            var rippleElement = this.renderer.createElement(null, 'span');
            rippleElement.classList.add(this.RIPPLE);
            this.rippleContainer.appendChild(rippleElement);
            this.el.appendChild(this.rippleContainer);
            this.ripple = new MaterialRipple(this.el);
        }
    };
    return MdlRippleDirective;
}());
export var MdlButtonRippleDirective = (function (_super) {
    __extends(MdlButtonRippleDirective, _super);
    function MdlButtonRippleDirective(elementRef, renderer) {
        _super.call(this, elementRef, renderer, ['mdl-button__ripple-container']);
        this.rippleActive = true;
    }
    // AOT is not able to call lifecycle hooks if a base class :(
    MdlButtonRippleDirective.prototype.ngOnChanges = function () { _super.prototype.ngOnChanges.call(this); };
    MdlButtonRippleDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'mdl-button[mdl-ripple], button[mdl-ripple]'
                },] },
    ];
    /** @nocollapse */
    MdlButtonRippleDirective.ctorParameters = [
        { type: ElementRef, },
        { type: Renderer, },
    ];
    MdlButtonRippleDirective.propDecorators = {
        'rippleActive': [{ type: Input, args: ['mdl-ripple',] },],
    };
    return MdlButtonRippleDirective;
}(MdlRippleDirective));
export var MdlCheckboxRippleDirective = (function (_super) {
    __extends(MdlCheckboxRippleDirective, _super);
    function MdlCheckboxRippleDirective(elementRef, renderer) {
        _super.call(this, elementRef, renderer, ['mdl-checkbox__ripple-container', 'mdl-ripple--center']);
        this.rippleActive = true;
    }
    // AOT is not able to call lifecycle hooks if a base class :(
    MdlCheckboxRippleDirective.prototype.ngOnChanges = function () { _super.prototype.ngOnChanges.call(this); };
    MdlCheckboxRippleDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'mdl-checkbox[mdl-ripple]'
                },] },
    ];
    /** @nocollapse */
    MdlCheckboxRippleDirective.ctorParameters = [
        { type: ElementRef, },
        { type: Renderer, },
    ];
    MdlCheckboxRippleDirective.propDecorators = {
        'rippleActive': [{ type: Input, args: ['mdl-ripple',] },],
    };
    return MdlCheckboxRippleDirective;
}(MdlRippleDirective));
export var MdlRadioRippleDirective = (function (_super) {
    __extends(MdlRadioRippleDirective, _super);
    function MdlRadioRippleDirective(elementRef, renderer) {
        _super.call(this, elementRef, renderer, ['mdl-radio__ripple-container', 'mdl-ripple--center']);
        this.rippleActive = true;
    }
    // AOT is not able to call lifecycle hooks if a base class :(
    MdlRadioRippleDirective.prototype.ngOnChanges = function () { _super.prototype.ngOnChanges.call(this); };
    MdlRadioRippleDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'mdl-radio[mdl-ripple]'
                },] },
    ];
    /** @nocollapse */
    MdlRadioRippleDirective.ctorParameters = [
        { type: ElementRef, },
        { type: Renderer, },
    ];
    MdlRadioRippleDirective.propDecorators = {
        'rippleActive': [{ type: Input, args: ['mdl-ripple',] },],
    };
    return MdlRadioRippleDirective;
}(MdlRippleDirective));
export var MdlIconToggleRippleDirective = (function (_super) {
    __extends(MdlIconToggleRippleDirective, _super);
    function MdlIconToggleRippleDirective(elementRef, renderer) {
        _super.call(this, elementRef, renderer, ['mdl-icon-toggle__ripple-container', 'mdl-ripple--center']);
        this.rippleActive = true;
    }
    // AOT is not able to call lifecycle hooks if a base class :(
    MdlIconToggleRippleDirective.prototype.ngOnChanges = function () { _super.prototype.ngOnChanges.call(this); };
    MdlIconToggleRippleDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'mdl-icon-toggle[mdl-ripple]'
                },] },
    ];
    /** @nocollapse */
    MdlIconToggleRippleDirective.ctorParameters = [
        { type: ElementRef, },
        { type: Renderer, },
    ];
    MdlIconToggleRippleDirective.propDecorators = {
        'rippleActive': [{ type: Input, args: ['mdl-ripple',] },],
    };
    return MdlIconToggleRippleDirective;
}(MdlRippleDirective));
export var MdlSwitchRippleDirective = (function (_super) {
    __extends(MdlSwitchRippleDirective, _super);
    function MdlSwitchRippleDirective(elementRef, renderer) {
        _super.call(this, elementRef, renderer, ['mdl-switch__ripple-container', 'mdl-ripple--center']);
        this.rippleActive = true;
    }
    // AOT is not able to call lifecycle hooks if a base class :(
    MdlSwitchRippleDirective.prototype.ngOnChanges = function () { _super.prototype.ngOnChanges.call(this); };
    MdlSwitchRippleDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'mdl-switch[mdl-ripple]'
                },] },
    ];
    /** @nocollapse */
    MdlSwitchRippleDirective.ctorParameters = [
        { type: ElementRef, },
        { type: Renderer, },
    ];
    MdlSwitchRippleDirective.propDecorators = {
        'rippleActive': [{ type: Input, args: ['mdl-ripple',] },],
    };
    return MdlSwitchRippleDirective;
}(MdlRippleDirective));
export var MdlMenuItemRippleDirective = (function (_super) {
    __extends(MdlMenuItemRippleDirective, _super);
    function MdlMenuItemRippleDirective(elementRef, renderer) {
        _super.call(this, elementRef, renderer, ['mdl-menu__item--ripple-container']);
        this.rippleActive = true;
    }
    // AOT is not able to call lifecycle hooks if a base class :(
    MdlMenuItemRippleDirective.prototype.ngOnChanges = function () { _super.prototype.ngOnChanges.call(this); };
    MdlMenuItemRippleDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'mdl-menu-item[mdl-ripple]'
                },] },
    ];
    /** @nocollapse */
    MdlMenuItemRippleDirective.ctorParameters = [
        { type: ElementRef, },
        { type: Renderer, },
    ];
    MdlMenuItemRippleDirective.propDecorators = {
        'rippleActive': [{ type: Input, args: ['mdl-ripple',] },],
    };
    return MdlMenuItemRippleDirective;
}(MdlRippleDirective));
export var MdlAnchorRippleDirective = (function (_super) {
    __extends(MdlAnchorRippleDirective, _super);
    function MdlAnchorRippleDirective(elementRef, renderer) {
        _super.call(this, elementRef, renderer, ['mdl-tabs__ripple-container', 'mdl-layout__tab-ripple-container']);
        this.rippleActive = true;
    }
    // AOT is not able to call lifecycle hooks if a base class :(
    MdlAnchorRippleDirective.prototype.ngOnChanges = function () { _super.prototype.ngOnChanges.call(this); };
    MdlAnchorRippleDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'a[mdl-ripple],div[mdl-ripple]'
                },] },
    ];
    /** @nocollapse */
    MdlAnchorRippleDirective.ctorParameters = [
        { type: ElementRef, },
        { type: Renderer, },
    ];
    MdlAnchorRippleDirective.propDecorators = {
        'rippleActive': [{ type: Input, args: ['mdl-ripple',] },],
    };
    return MdlAnchorRippleDirective;
}(MdlRippleDirective));
export var MdlListItemRippleDirective = (function (_super) {
    __extends(MdlListItemRippleDirective, _super);
    function MdlListItemRippleDirective(elementRef, renderer) {
        _super.call(this, elementRef, renderer, ['mdl-button__ripple-container']);
        this.rippleActive = true;
    }
    MdlListItemRippleDirective.prototype.ngOnInit = function () {
        // mdl-list-items has no position style - but position relative
        // is needed to restrict the ripplecontainer to the bounds of the item
        this.renderer.setElementStyle(this.el, 'position', 'relative');
    };
    // AOT is not able to call lifecycle hooks if a base class :(
    MdlListItemRippleDirective.prototype.ngOnChanges = function () { _super.prototype.ngOnChanges.call(this); };
    MdlListItemRippleDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'mdl-list-item[mdl-ripple]',
                },] },
    ];
    /** @nocollapse */
    MdlListItemRippleDirective.ctorParameters = [
        { type: ElementRef, },
        { type: Renderer, },
    ];
    MdlListItemRippleDirective.propDecorators = {
        'rippleActive': [{ type: Input, args: ['mdl-ripple',] },],
    };
    return MdlListItemRippleDirective;
}(MdlRippleDirective));
var MDL_COMMON_DIRECTIVES = [
    MdlCheckboxRippleDirective,
    MdlButtonRippleDirective,
    MdlRadioRippleDirective,
    MdlIconToggleRippleDirective,
    MdlSwitchRippleDirective,
    MdlMenuItemRippleDirective,
    MdlAnchorRippleDirective,
    MdlListItemRippleDirective
];
export var MdlRippleModule = (function () {
    function MdlRippleModule() {
    }
    MdlRippleModule.forRoot = function () {
        return {
            ngModule: MdlRippleModule,
            providers: []
        };
    };
    MdlRippleModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    exports: MDL_COMMON_DIRECTIVES,
                    declarations: MDL_COMMON_DIRECTIVES,
                },] },
    ];
    /** @nocollapse */
    MdlRippleModule.ctorParameters = [];
    return MdlRippleModule;
}());
//# sourceMappingURL=mdl-ripple.directive.js.map