import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AbstractDemoComponent } from './../abstract-demo.component';
export declare class TooltipDemo extends AbstractDemoComponent {
    protected tt1: string;
    constructor(router: Router, route: ActivatedRoute, titleService: Title);
}
