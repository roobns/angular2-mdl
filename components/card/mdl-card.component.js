var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component, Directive, Optional, ViewEncapsulation, NgModule } from '@angular/core';
import { MdlStructureError } from '../common/mdl-error';
export var MdlCardComponent = (function () {
    function MdlCardComponent() {
    }
    MdlCardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-card',
                    host: {
                        '[class.mdl-card]': 'true'
                    },
                    template: '<ng-content></ng-content>',
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    MdlCardComponent.ctorParameters = [];
    return MdlCardComponent;
}());
export var MdlCardChildStructure = (function () {
    function MdlCardChildStructure(mdlCardComponent, childComponentName) {
        this.mdlCardComponent = mdlCardComponent;
        this.childComponentName = childComponentName;
    }
    MdlCardChildStructure.prototype.ngOnInit = function () {
        if (this.mdlCardComponent === null) {
            throw new MdlStructureError(this.childComponentName, 'mdl-card');
        }
    };
    return MdlCardChildStructure;
}());
export var MdlCardTitleComponent = (function (_super) {
    __extends(MdlCardTitleComponent, _super);
    function MdlCardTitleComponent(mdlCardComponent) {
        _super.call(this, mdlCardComponent, 'mdl-card-title');
    }
    MdlCardTitleComponent.prototype.ngOnInit = function () { _super.prototype.ngOnInit.call(this); };
    MdlCardTitleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-card-title',
                    host: {
                        '[class.mdl-card__title]': 'true'
                    },
                    template: '<ng-content></ng-content>',
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    MdlCardTitleComponent.ctorParameters = [
        { type: MdlCardComponent, decorators: [{ type: Optional },] },
    ];
    return MdlCardTitleComponent;
}(MdlCardChildStructure));
export var MdlCardSupportingTextComponent = (function (_super) {
    __extends(MdlCardSupportingTextComponent, _super);
    function MdlCardSupportingTextComponent(mdlCardComponent) {
        _super.call(this, mdlCardComponent, 'mdl-card-supporting-text');
    }
    MdlCardSupportingTextComponent.prototype.ngOnInit = function () { _super.prototype.ngOnInit.call(this); };
    MdlCardSupportingTextComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-card-supporting-text',
                    host: {
                        '[class.mdl-card__supporting-text]': 'true'
                    },
                    template: '<ng-content></ng-content>',
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    MdlCardSupportingTextComponent.ctorParameters = [
        { type: MdlCardComponent, decorators: [{ type: Optional },] },
    ];
    return MdlCardSupportingTextComponent;
}(MdlCardChildStructure));
export var MdlCardMediaComponent = (function (_super) {
    __extends(MdlCardMediaComponent, _super);
    function MdlCardMediaComponent(mdlCardComponent) {
        _super.call(this, mdlCardComponent, 'mdl-card-media');
    }
    MdlCardMediaComponent.prototype.ngOnInit = function () { _super.prototype.ngOnInit.call(this); };
    MdlCardMediaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-card-media',
                    host: {
                        '[class.mdl-card__media]': 'true'
                    },
                    template: '<ng-content></ng-content>',
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    MdlCardMediaComponent.ctorParameters = [
        { type: MdlCardComponent, decorators: [{ type: Optional },] },
    ];
    return MdlCardMediaComponent;
}(MdlCardChildStructure));
export var MdlCardActionsComponent = (function (_super) {
    __extends(MdlCardActionsComponent, _super);
    function MdlCardActionsComponent(mdlCardComponent) {
        _super.call(this, mdlCardComponent, 'mdl-card-actions');
    }
    MdlCardActionsComponent.prototype.ngOnInit = function () { _super.prototype.ngOnInit.call(this); };
    MdlCardActionsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-card-actions',
                    host: {
                        '[class.mdl-card__actions]': 'true'
                    },
                    template: '<ng-content></ng-content>',
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    MdlCardActionsComponent.ctorParameters = [
        { type: MdlCardComponent, decorators: [{ type: Optional },] },
    ];
    return MdlCardActionsComponent;
}(MdlCardChildStructure));
export var MdlCardMenuComponent = (function (_super) {
    __extends(MdlCardMenuComponent, _super);
    function MdlCardMenuComponent(mdlCardComponent) {
        _super.call(this, mdlCardComponent, 'mdl-card-menu');
    }
    MdlCardMenuComponent.prototype.ngOnInit = function () { _super.prototype.ngOnInit.call(this); };
    MdlCardMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-card-menu',
                    host: {
                        '[class.mdl-card__menu]': 'true'
                    },
                    template: '<ng-content></ng-content>',
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    MdlCardMenuComponent.ctorParameters = [
        { type: MdlCardComponent, decorators: [{ type: Optional },] },
    ];
    return MdlCardMenuComponent;
}(MdlCardChildStructure));
export var MdlCardTitleTextDirective = (function () {
    function MdlCardTitleTextDirective() {
    }
    MdlCardTitleTextDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdl-card-title-text]',
                    host: {
                        '[class.mdl-card__title-text]': 'true'
                    }
                },] },
    ];
    /** @nocollapse */
    MdlCardTitleTextDirective.ctorParameters = [];
    return MdlCardTitleTextDirective;
}());
export var MdlCardBorderDirective = (function () {
    function MdlCardBorderDirective() {
    }
    MdlCardBorderDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdl-card-border]',
                    host: {
                        '[class.mdl-card--border]': 'true'
                    }
                },] },
    ];
    /** @nocollapse */
    MdlCardBorderDirective.ctorParameters = [];
    return MdlCardBorderDirective;
}());
export var MdlCardExpandDirective = (function () {
    function MdlCardExpandDirective() {
    }
    MdlCardExpandDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdl-card-expand]',
                    host: {
                        '[class.mdl-card--expand]': 'true'
                    }
                },] },
    ];
    /** @nocollapse */
    MdlCardExpandDirective.ctorParameters = [];
    return MdlCardExpandDirective;
}());
var MDL_CARD_DIRECTIVES = [
    MdlCardComponent,
    MdlCardTitleComponent,
    MdlCardMediaComponent,
    MdlCardSupportingTextComponent,
    MdlCardActionsComponent,
    MdlCardMenuComponent,
    MdlCardTitleTextDirective,
    MdlCardBorderDirective,
    MdlCardExpandDirective
];
export var MdlCardModule = (function () {
    function MdlCardModule() {
    }
    MdlCardModule.forRoot = function () {
        return {
            ngModule: MdlCardModule,
            providers: []
        };
    };
    MdlCardModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    exports: MDL_CARD_DIRECTIVES,
                    declarations: MDL_CARD_DIRECTIVES,
                },] },
    ];
    /** @nocollapse */
    MdlCardModule.ctorParameters = [];
    return MdlCardModule;
}());
//# sourceMappingURL=mdl-card.component.js.map