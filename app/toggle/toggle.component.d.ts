import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AbstractDemoComponent } from './../abstract-demo.component';
export declare class ToggleDemo extends AbstractDemoComponent {
    protected checkbox1: boolean;
    protected checkbox2: boolean;
    protected radioOption: string;
    constructor(router: Router, route: ActivatedRoute, titleService: Title);
    onChange(newValue: any): void;
}
