import { ViewContainerRef } from '@angular/core';
import { MdlSnackbarService } from '../../components';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AbstractDemoComponent } from './../abstract-demo.component';
export declare class SnackbarDemo extends AbstractDemoComponent {
    private mdlSnackbarService;
    private vcRef;
    constructor(router: Router, route: ActivatedRoute, titleService: Title, mdlSnackbarService: MdlSnackbarService, vcRef: ViewContainerRef);
    showSnackbar(): void;
}
