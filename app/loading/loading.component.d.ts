import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AbstractDemoComponent } from './../abstract-demo.component';
export declare class LoadingDemo extends AbstractDemoComponent {
    progress: number;
    indeterminate: boolean;
    buffer: number;
    active: boolean;
    constructor(router: Router, route: ActivatedRoute, titleService: Title);
}
