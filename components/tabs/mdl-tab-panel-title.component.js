import { Component, ViewContainerRef, ViewEncapsulation } from '@angular/core';
export var MdlTabPanelTitleComponent = (function () {
    function MdlTabPanelTitleComponent(vcRef) {
        this.vcRef = vcRef;
    }
    MdlTabPanelTitleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-tab-panel-title',
                    template: "\n   <ng-content></ng-content>\n   ",
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    MdlTabPanelTitleComponent.ctorParameters = [
        { type: ViewContainerRef, },
    ];
    return MdlTabPanelTitleComponent;
}());
//# sourceMappingURL=mdl-tab-panel-title.component.js.map