import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AbstractDemoComponent } from './../abstract-demo.component';
export declare class SliderDemo extends AbstractDemoComponent {
    protected minValue: number;
    protected maxValue: number;
    protected currentValue: number;
    constructor(router: Router, route: ActivatedRoute, titleService: Title);
}
