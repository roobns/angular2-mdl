import { Component, ViewContainerRef, forwardRef, Inject } from '@angular/core';
import { MdlDialogOutletService } from './mdl-dialog-outlet.service';
// the componnet is used outside the app-root. injecting MdlDialogService would not work
// this component is not exported - needs to be instanciated by
//    let x = this.appRef.bootstrap(MdlDialogOutletComponent);
export var MdlDialogOutletComponent = (function () {
    function MdlDialogOutletComponent(vCRef) {
        this.vCRef = vCRef;
    }
    Object.defineProperty(MdlDialogOutletComponent.prototype, "viewContainerRef", {
        get: function () {
            return this.vCRef;
        },
        enumerable: true,
        configurable: true
    });
    MdlDialogOutletComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dialog-outlet',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    MdlDialogOutletComponent.ctorParameters = [
        { type: ViewContainerRef, },
    ];
    return MdlDialogOutletComponent;
}());
// the component is used inside the app-root. this is possible because this component
// is exported from the module
export var MdlDialogInnerOutletComponent = (function () {
    function MdlDialogInnerOutletComponent(vCRef, service) {
        this.vCRef = vCRef;
        service.setDefaultViewContainerRef(vCRef);
    }
    MdlDialogInnerOutletComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dialog-outlet',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    MdlDialogInnerOutletComponent.ctorParameters = [
        { type: ViewContainerRef, },
        { type: MdlDialogOutletService, decorators: [{ type: Inject, args: [forwardRef(function () { return MdlDialogOutletService; }),] },] },
    ];
    return MdlDialogInnerOutletComponent;
}());
//# sourceMappingURL=mdl-dialog-outlet.component.js.map