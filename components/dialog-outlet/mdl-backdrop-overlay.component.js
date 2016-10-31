import { Component, HostListener, HostBinding, ViewEncapsulation, EventEmitter } from '@angular/core';
export var MdlBackdropOverlayComponent = (function () {
    function MdlBackdropOverlayComponent() {
        this.clickEmitter = new EventEmitter();
        this.visible = false;
        this.zIndex = 0;
    }
    Object.defineProperty(MdlBackdropOverlayComponent.prototype, "display", {
        get: function () {
            return this.visible ? null : 'none';
        },
        enumerable: true,
        configurable: true
    });
    MdlBackdropOverlayComponent.prototype.onBackdropClick = function (e) {
        this.clickEmitter.emit();
        e.stopPropagation();
    };
    MdlBackdropOverlayComponent.prototype.hide = function () {
        this.visible = false;
    };
    MdlBackdropOverlayComponent.prototype.showWithZIndex = function (zIndex) {
        this.zIndex = zIndex;
        this.visible = true;
    };
    MdlBackdropOverlayComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-backdrop-overlay',
                    host: {
                        '[class.dialog-backdrop]': 'true',
                    },
                    template: "",
                    styles: [
                        "    \n      .dialog-backdrop {\n        position: fixed;\n        top: 0; right: 0; bottom: 0; left: 0;\n        background: rgba(0,0,0,0.1);\n      }\n    "
                    ],
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    MdlBackdropOverlayComponent.ctorParameters = [];
    MdlBackdropOverlayComponent.propDecorators = {
        'display': [{ type: HostBinding, args: ['style.display',] },],
        'zIndex': [{ type: HostBinding, args: ['style.zIndex',] },],
        'onBackdropClick': [{ type: HostListener, args: ['click', ['$event'],] },],
    };
    return MdlBackdropOverlayComponent;
}());
//# sourceMappingURL=mdl-backdrop-overlay.component.js.map