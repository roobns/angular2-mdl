import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AbstractDemoComponent } from './../abstract-demo.component';
export declare class BadgeDemo extends AbstractDemoComponent {
    protected badgeCount: number;
    constructor(router: Router, route: ActivatedRoute, titleService: Title);
}
