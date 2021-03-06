import { Subject } from 'rxjs/Subject';
import { MdlDialogReference } from './mdl-dialog.service';
/**
 * Internal representation of the dialog ref. the service
 * user should not have access to the created components
 * and internal implementations.
 */
export var InternalMdlDialogReference = (function () {
    function InternalMdlDialogReference(config) {
        this.config = config;
        this.onHideSubject = new Subject();
        this.onVisibleSubject = new Subject();
        this.isModal = false;
        this.dialogRef = new MdlDialogReference(this);
    }
    Object.defineProperty(InternalMdlDialogReference.prototype, "hostDialog", {
        get: function () {
            return this.hostDialogComponentRef.instance;
        },
        enumerable: true,
        configurable: true
    });
    InternalMdlDialogReference.prototype.hide = function () {
        this.onHideSubject.next();
        this.onHideSubject.complete();
        this.closeCallback();
    };
    InternalMdlDialogReference.prototype.visible = function () {
        this.onVisibleSubject.next();
        this.onVisibleSubject.complete();
    };
    InternalMdlDialogReference.prototype.onHide = function () {
        return this.onHideSubject.asObservable();
    };
    InternalMdlDialogReference.prototype.onVisible = function () {
        return this.onVisibleSubject.asObservable();
    };
    return InternalMdlDialogReference;
}());
//# sourceMappingURL=internal-dialog-reference.js.map