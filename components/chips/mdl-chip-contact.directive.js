import { Directive, Optional, forwardRef, Inject } from '@angular/core';
import { MdlChipComponent } from './mdl-chip.component';
import { MdlStructureError } from '../common/mdl-error';
export var MdlChipContactDirective = (function () {
    function MdlChipContactDirective(mdlChipComponent) {
        this.mdlChipComponent = mdlChipComponent;
    }
    MdlChipContactDirective.prototype.ngOnInit = function () {
        if (!this.mdlChipComponent) {
            throw new MdlStructureError('mdl-chip-contact', 'mdl-chip');
        }
    };
    MdlChipContactDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdl-chip-contact]',
                    host: {
                        '[class.mdl-chip__contact]': 'true'
                    }
                },] },
    ];
    /** @nocollapse */
    MdlChipContactDirective.ctorParameters = [
        { type: MdlChipComponent, decorators: [{ type: Optional }, { type: Inject, args: [forwardRef(function () { return MdlChipComponent; }),] },] },
    ];
    return MdlChipContactDirective;
}());
//# sourceMappingURL=mdl-chip-contact.directive.js.map