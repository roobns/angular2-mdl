import { ComponentFactoryResolver, OpaqueToken, ApplicationRef, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IMdlDialogConfiguration, IMdlCustomDialogConfiguration, IMdlSimpleDialogConfiguration } from './mdl-dialog-configuration';
import { InternalMdlDialogReference } from './internal-dialog-reference';
import { MdlDialogOutletService } from '../dialog-outlet/mdl-dialog-outlet.service';
export declare const MDL_CONFIGUARTION: OpaqueToken;
export declare const MIN_DIALOG_Z_INDEX: number;
/**
 * The reference to the created and displayed dialog.
 */
export declare class MdlDialogReference {
    private internaleRef;
    constructor(internaleRef: InternalMdlDialogReference);
    /**
     * closes the dialog
     */
    hide(): void;
    /**
     * Observable that emits, if the dialog was closed.
     * @returns {Observable<void>}
     */
    onHide(): Observable<void>;
    /**
     * Observable that emits, if the dialog is really visible and not only created.
     * @returns {Observable<void>}
     */
    onVisible(): Observable<void>;
}
/**
 * The MdlDialogService is used to open different kind of dialogs. SimpleDialogs and Custom Dialogs.
 * @experimental
  */
export declare class MdlDialogService {
    private componentFactoryResolver;
    private doc;
    private appRef;
    private mdlDialogOutletService;
    private openDialogs;
    constructor(componentFactoryResolver: ComponentFactoryResolver, doc: any, appRef: ApplicationRef, mdlDialogOutletService: MdlDialogOutletService);
    /**
     * Shows a dialog that is just an alert - e.g. with one button.
     * @param alertMessage The message that should be displayed.
     * @param okTex The text that the button should have
     * @param title The optional title of the dialog
     * @returns An Observable that is called if the user hits the Ok button.
     */
    alert(alertMessage: string, okText?: string, title?: string): Observable<void>;
    /**
     * Shows a dialog that is just a confirm message - e.g. with two button.
     * @param question The question that should be displayed.
     * @param declineText The text for decline button. defaults to Cancel
     * @param confirmText The text for the confirm button . defaults to Ok
     * @returns An Observable that is called if the user hits the Ok button.
     */
    confirm(question: string, declineText?: string, confirmText?: string): Observable<void>;
    /**
     * Shows a dialog that is specified by the provided configuration.
     * @param config The simple dialog configuration.
     * @returns An Observable that returns the MdlDialogReference.
     */
    showDialog(config: IMdlSimpleDialogConfiguration): Observable<MdlDialogReference>;
    /**
     * Shows a dialog that is specified by the provided configuration.
     * @param config The custom dialog configuration.
     * @returns An Observable that returns the MdlDialogReference.
     */
    showCustomDialog(config: IMdlCustomDialogConfiguration): Observable<MdlDialogReference>;
    showDialogTemplate(template: TemplateRef<any>, config: IMdlDialogConfiguration): Observable<MdlDialogReference>;
    private showHostDialog(dialogRef, hostComponentRef);
    private createHostDialog(internalDialogRef, dialogConfig);
    private pushDialog(dialogRef);
    private popDialog(dialogRef);
    private orderDialogStack();
    private getTopMostInternalDialogRef();
    private onBackdropClick();
    private createComponentInstance<T>(viewContainerRef, providers, component);
}
