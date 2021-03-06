import { Component, ViewEncapsulation } from '@angular/core';
export var MdlLayoutTitleComponent = (function () {
    function MdlLayoutTitleComponent() {
    }
    MdlLayoutTitleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-layout-title',
                    host: {
                        '[class.mdl-layout-title]': 'true'
                    },
                    template: '<ng-content></ng-content>',
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    MdlLayoutTitleComponent.ctorParameters = [];
    return MdlLayoutTitleComponent;
}());
//# sourceMappingURL=mdl-layout-title.component.js.map