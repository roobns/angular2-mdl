import { ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MdlLayoutComponent } from '../components';
import { AbstractDemoComponent } from './abstract-demo.component';
import { MdlDialogService } from '../components/dialog/mdl-dialog.service';
import { MdlSnackbarService } from '../components/snackbar/mdl-snackbar.service';
export declare class Home extends AbstractDemoComponent {
    constructor(router: Router, route: ActivatedRoute, titleService: Title);
}
export declare const appRoutes: Routes;
export declare class Angular2MdlAppComponent {
    private vcRef;
    private dialogService;
    private snackbarService;
    title: string;
    constructor(vcRef: ViewContainerRef, dialogService: MdlDialogService, snackbarService: MdlSnackbarService);
    componentSelected(mainLayout: MdlLayoutComponent): void;
}
