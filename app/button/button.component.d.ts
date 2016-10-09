import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AbstractDemoComponent } from './../abstract-demo.component';
export declare class ButtonDemo extends AbstractDemoComponent {
    buttonType: string;
    doRipple: boolean;
    colored: string;
    btnDisabled: boolean;
    constructor(router: Router, route: ActivatedRoute, titleService: Title);
}
