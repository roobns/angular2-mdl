import { Component, ViewEncapsulation, HostListener, forwardRef, Inject, ViewChildren } from '@angular/core';
import { MdlDialogReference, MDL_CONFIGUARTION } from './mdl-dialog.service';
export var MdlSimpleDialogComponent = (function () {
    // why do i need forwardRef at this point, the demo LoginDialog dosn't need this!?!?
    function MdlSimpleDialogComponent(dialogConfiguration, dialog) {
        var _this = this;
        this.dialogConfiguration = dialogConfiguration;
        this.dialog = dialog;
        dialog.onVisible().subscribe(function () {
            if (_this.buttons) {
                _this.buttons.first.nativeElement.focus();
            }
        });
    }
    MdlSimpleDialogComponent.prototype.actionClicked = function (action) {
        action.handler();
        this.dialog.hide();
    };
    MdlSimpleDialogComponent.prototype.onEsc = function () {
        // run the first action that is marked as closing action
        var closeAction = this.dialogConfiguration.actions.find(function (action) { return action.isClosingAction; });
        if (closeAction) {
            closeAction.handler();
            this.dialog.hide();
        }
    };
    MdlSimpleDialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-dialog-component',
                    template: "\n      <h3 class=\"mdl-dialog__title\" *ngIf=\"dialogConfiguration?.title\">{{dialogConfiguration?.title}}</h3>\n      <div class=\"mdl-dialog__content\" [innerHTML]=\"dialogConfiguration?.message\"></div>\n      <div \n        class=\"mdl-dialog__actions\" \n        [ngClass]=\"{'mdl-dialog__actions--full-width': dialogConfiguration?.fullWidthAction}\">\n        <button\n          #button\n          type=\"button\" \n          class=\"mdl-button mdl-color-text--primary\" \n          *ngFor=\"let action of dialogConfiguration?.actions\" \n          (click)=\"actionClicked(action)\"\n          [ngClass]=\"{'close': action.isClosingAction}\">{{action.text}}</button>\n      </div>\n  ",
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    MdlSimpleDialogComponent.ctorParameters = [
        { type: undefined, decorators: [{ type: Inject, args: [forwardRef(function () { return MDL_CONFIGUARTION; }),] },] },
        { type: MdlDialogReference, decorators: [{ type: Inject, args: [forwardRef(function () { return MdlDialogReference; }),] },] },
    ];
    MdlSimpleDialogComponent.propDecorators = {
        'buttons': [{ type: ViewChildren, args: ['button',] },],
        'onEsc': [{ type: HostListener, args: ['keydown.esc',] },],
    };
    return MdlSimpleDialogComponent;
}());
//# sourceMappingURL=mdl-simple-dialog.component.js.map