import { Directive, Input, HostListener } from '@angular/core';
import { MdlButtonComponent } from '../button/mdl-button.component';
export var MdlToggleMenuDirective = (function () {
    function MdlToggleMenuDirective(button) {
        this.button = button;
    }
    MdlToggleMenuDirective.prototype.onClick = function ($event) {
        this.menu.toggle($event, this.button);
    };
    MdlToggleMenuDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdl-button][mdl-toggle-menu]'
                },] },
    ];
    /** @nocollapse */
    MdlToggleMenuDirective.ctorParameters = [
        { type: MdlButtonComponent, },
    ];
    MdlToggleMenuDirective.propDecorators = {
        'menu': [{ type: Input, args: ['mdl-toggle-menu',] },],
        'onClick': [{ type: HostListener, args: ['click', ['$event'],] },],
    };
    return MdlToggleMenuDirective;
}());
//# sourceMappingURL=mdl-toggle-menu.directive.js.map