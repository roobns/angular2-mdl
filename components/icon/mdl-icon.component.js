import { Component, NgModule, ViewEncapsulation } from '@angular/core';
export var MdlIconComponent = (function () {
    function MdlIconComponent() {
    }
    MdlIconComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-icon',
                    host: {
                        '[class.material-icons]': 'true'
                    },
                    template: '<ng-content></ng-content>',
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    MdlIconComponent.ctorParameters = [];
    return MdlIconComponent;
}());
var MDL_ICON_DIRECTIVES = [MdlIconComponent];
export var MdlIconModule = (function () {
    function MdlIconModule() {
    }
    MdlIconModule.forRoot = function () {
        return {
            ngModule: MdlIconModule,
            providers: []
        };
    };
    MdlIconModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    exports: MDL_ICON_DIRECTIVES,
                    declarations: MDL_ICON_DIRECTIVES,
                },] },
    ];
    /** @nocollapse */
    MdlIconModule.ctorParameters = [];
    return MdlIconModule;
}());
//# sourceMappingURL=mdl-icon.component.js.map