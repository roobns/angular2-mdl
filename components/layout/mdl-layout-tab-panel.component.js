import { Component, Input, ContentChild, ViewEncapsulation } from '@angular/core';
import { MdlTabPanelTitleComponent } from '../tabs/index';
export var MdlLayoutTabPanelComponent = (function () {
    function MdlLayoutTabPanelComponent() {
        this.isActive = false;
    }
    MdlLayoutTabPanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-layout-tab-panel',
                    host: {
                        '[class.mdl-layout__tab-panel]': 'true',
                        '[class.is-active]': 'isActive'
                    },
                    template: "\n   <ng-content *ngIf=\"titleComponent\" select=\"mdl-tab-panel-content\"></ng-content>\n   <ng-content *ngIf=\"!titleComponent\"></ng-content>\n   ",
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    MdlLayoutTabPanelComponent.ctorParameters = [];
    MdlLayoutTabPanelComponent.propDecorators = {
        'titleComponent': [{ type: ContentChild, args: [MdlTabPanelTitleComponent,] },],
        'title': [{ type: Input, args: ['mdl-layout-tab-panel-title',] },],
    };
    return MdlLayoutTabPanelComponent;
}());
//# sourceMappingURL=mdl-layout-tab-panel.component.js.map