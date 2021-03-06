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
import { Component, Directive, Input, Optional, ViewEncapsulation, NgModule } from '@angular/core';
import { MdlError, MdlStructureError } from '../common/mdl-error';
import { NumberProperty } from '../common/number.property';
export var MdlUnsupportedCountOfListItemLinesError = (function (_super) {
    __extends(MdlUnsupportedCountOfListItemLinesError, _super);
    function MdlUnsupportedCountOfListItemLinesError(lines) {
        _super.call(this, "\"" + lines + "\" is not supported - max 3 lines please.");
    }
    return MdlUnsupportedCountOfListItemLinesError;
}(MdlError));
export var MdlListComponent = (function () {
    function MdlListComponent() {
    }
    MdlListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-list',
                    host: {
                        '[class.mdl-list]': 'true'
                    },
                    template: '<ng-content></ng-content>',
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    MdlListComponent.ctorParameters = [];
    return MdlListComponent;
}());
export var MdlListItemComponent = (function () {
    function MdlListItemComponent(mdlListComponent) {
        this.mdlListComponent = mdlListComponent;
        this.lines = 1;
    }
    MdlListItemComponent.prototype.ngOnInit = function () {
        if (this.mdlListComponent === null) {
            throw new MdlStructureError('mdl-list-item', 'mdl-list');
        }
    };
    MdlListItemComponent.prototype.ngOnChanges = function () {
        if (this.lines && this.lines > 3) {
            throw new MdlUnsupportedCountOfListItemLinesError(this.lines);
        }
    };
    /**
     * TODO check these conditions
     * .mdl-list__item-secondary-content	Defines the secondary content sub-division
     * requires .mdl-list__item-two-line or .mdl-list__item-three-line
     .mdl-list__item-secondary-info	Defines the information sub-division
     requires .mdl-list__item-two-line or .mdl-list__item-three-line
     .mdl-list__item-secondary-action	Defines the Action sub-division
     requires .mdl-list__item-two-line or .mdl-list__item-three-line
     .mdl-list__item-text-body	Defines the Text Body sub-division
     requires .mdl-list__item-three-line
     */
    MdlListItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-list-item',
                    host: {
                        '[class.mdl-list__item]': 'true',
                        '[class.mdl-list__item--two-line]': 'lines==2',
                        '[class.mdl-list__item--three-line]': 'lines==3'
                    },
                    template: '<ng-content></ng-content>',
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    MdlListItemComponent.ctorParameters = [
        { type: MdlListComponent, decorators: [{ type: Optional },] },
    ];
    MdlListItemComponent.propDecorators = {
        'lines': [{ type: Input },],
    };
    __decorate([
        NumberProperty()
    ], MdlListItemComponent.prototype, "lines", void 0);
    return MdlListItemComponent;
}());
export var MdlListItemPrimaryContentComponent = (function () {
    function MdlListItemPrimaryContentComponent(mdlListItemComponent) {
        this.mdlListItemComponent = mdlListItemComponent;
    }
    MdlListItemPrimaryContentComponent.prototype.ngOnInit = function () {
        if (this.mdlListItemComponent === null) {
            throw new MdlStructureError('mdl-list-item-primary-content', 'mdl-list-item');
        }
    };
    MdlListItemPrimaryContentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-list-item-primary-content',
                    host: {
                        '[class.mdl-list__item-primary-content]': 'true'
                    },
                    template: '<ng-content></ng-content>',
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    MdlListItemPrimaryContentComponent.ctorParameters = [
        { type: MdlListItemComponent, decorators: [{ type: Optional },] },
    ];
    return MdlListItemPrimaryContentComponent;
}());
export var MdlListItemSecondaryContentComponent = (function () {
    function MdlListItemSecondaryContentComponent(mdlListItemComponent) {
        this.mdlListItemComponent = mdlListItemComponent;
    }
    MdlListItemSecondaryContentComponent.prototype.ngOnInit = function () {
        if (this.mdlListItemComponent === null) {
            throw new MdlStructureError('mdl-list-item-secondary-content', 'mdl-list-item');
        }
    };
    MdlListItemSecondaryContentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-list-item-secondary-content',
                    host: {
                        '[class.mdl-list__item-secondary-content]': 'true'
                    },
                    template: '<ng-content></ng-content>',
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    MdlListItemSecondaryContentComponent.ctorParameters = [
        { type: MdlListItemComponent, decorators: [{ type: Optional },] },
    ];
    return MdlListItemSecondaryContentComponent;
}());
export var MdlListItemSecondaryActionComponent = (function () {
    function MdlListItemSecondaryActionComponent(mdlListItemComponent) {
        this.mdlListItemComponent = mdlListItemComponent;
    }
    MdlListItemSecondaryActionComponent.prototype.ngOnInit = function () {
        if (this.mdlListItemComponent === null) {
            throw new MdlStructureError('mdl-list-item-secondary-action', 'mdl-list-item');
        }
    };
    MdlListItemSecondaryActionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-list-item-secondary-action',
                    host: {
                        '[class.mdl-list__item-secondary-action]': 'true'
                    },
                    template: '<ng-content></ng-content>',
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    MdlListItemSecondaryActionComponent.ctorParameters = [
        { type: MdlListItemComponent, decorators: [{ type: Optional },] },
    ];
    return MdlListItemSecondaryActionComponent;
}());
export var MdlListItemSubTitleComponent = (function () {
    function MdlListItemSubTitleComponent(mdlListItemComponent) {
        this.mdlListItemComponent = mdlListItemComponent;
    }
    MdlListItemSubTitleComponent.prototype.ngOnInit = function () {
        if (this.mdlListItemComponent === null) {
            throw new MdlStructureError('mdl-list-item-sub-title', 'mdl-list-item-primary-content');
        }
    };
    MdlListItemSubTitleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-list-item-sub-title',
                    host: {
                        '[class.mdl-list__item-sub-title]': 'true'
                    },
                    template: '<ng-content></ng-content>',
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    MdlListItemSubTitleComponent.ctorParameters = [
        { type: MdlListItemPrimaryContentComponent, decorators: [{ type: Optional },] },
    ];
    return MdlListItemSubTitleComponent;
}());
export var MdlListItemSecondaryInfoComponent = (function () {
    function MdlListItemSecondaryInfoComponent(mdlListItemComponent) {
        this.mdlListItemComponent = mdlListItemComponent;
    }
    MdlListItemSecondaryInfoComponent.prototype.ngOnInit = function () {
        if (this.mdlListItemComponent === null) {
            throw new MdlStructureError('mdl-list-item-secondary-info', 'mdl-list-item-secondary-content');
        }
    };
    MdlListItemSecondaryInfoComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-list-item-secondary-info',
                    host: {
                        '[class.mdl-list__item-secondary-info]': 'true'
                    },
                    template: '<ng-content></ng-content>',
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    MdlListItemSecondaryInfoComponent.ctorParameters = [
        { type: MdlListItemSecondaryContentComponent, decorators: [{ type: Optional },] },
    ];
    return MdlListItemSecondaryInfoComponent;
}());
export var MdlListItemTextBodyComponent = (function () {
    function MdlListItemTextBodyComponent(mdlListItemComponent) {
        this.mdlListItemComponent = mdlListItemComponent;
    }
    MdlListItemTextBodyComponent.prototype.ngOnInit = function () {
        if (this.mdlListItemComponent === null) {
            throw new MdlStructureError('mdl-list-item-text-body', 'mdl-list-item');
        }
    };
    MdlListItemTextBodyComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-list-item-text-body',
                    host: {
                        '[class.mdl-list__item-text-body]': 'true'
                    },
                    template: '<ng-content></ng-content>',
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    MdlListItemTextBodyComponent.ctorParameters = [
        { type: MdlListItemComponent, decorators: [{ type: Optional },] },
    ];
    return MdlListItemTextBodyComponent;
}());
export var MdlListItemIconDirective = (function () {
    function MdlListItemIconDirective() {
    }
    MdlListItemIconDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'mdl-icon[mdl-list-item-icon]',
                    host: {
                        '[class.mdl-list__item-icon]': 'true'
                    }
                },] },
    ];
    /** @nocollapse */
    MdlListItemIconDirective.ctorParameters = [];
    return MdlListItemIconDirective;
}());
export var MdlListItemAvatarDirective = (function () {
    function MdlListItemAvatarDirective() {
    }
    MdlListItemAvatarDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'mdl-icon[mdl-list-item-avatar]',
                    host: {
                        '[class.mdl-list__item-avatar]': 'true'
                    }
                },] },
    ];
    /** @nocollapse */
    MdlListItemAvatarDirective.ctorParameters = [];
    return MdlListItemAvatarDirective;
}());
var MDL_LIST_DIRECTIVES = [
    MdlListComponent,
    MdlListItemComponent,
    MdlListItemPrimaryContentComponent,
    MdlListItemIconDirective,
    MdlListItemAvatarDirective,
    MdlListItemSecondaryContentComponent,
    MdlListItemSecondaryActionComponent,
    MdlListItemSubTitleComponent,
    MdlListItemSecondaryInfoComponent,
    MdlListItemTextBodyComponent
];
export var MdlListModule = (function () {
    function MdlListModule() {
    }
    MdlListModule.forRoot = function () {
        return {
            ngModule: MdlListModule,
            providers: []
        };
    };
    MdlListModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    exports: MDL_LIST_DIRECTIVES,
                    declarations: MDL_LIST_DIRECTIVES,
                },] },
    ];
    /** @nocollapse */
    MdlListModule.ctorParameters = [];
    return MdlListModule;
}());
//# sourceMappingURL=mdl-list.component.js.map