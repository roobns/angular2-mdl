import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AbstractDemoComponent } from './../abstract-demo.component';
export declare class TabsDemo extends AbstractDemoComponent {
    activeIndex: number;
    constructor(router: Router, route: ActivatedRoute, titleService: Title);
    tabChanged({index}: {
        index: any;
    }): void;
}
