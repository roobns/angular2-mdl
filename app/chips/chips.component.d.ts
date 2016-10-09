import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AbstractDemoComponent } from './../abstract-demo.component';
export declare class ChipsDemo extends AbstractDemoComponent {
    constructor(router: Router, route: ActivatedRoute, titleService: Title);
    deleteChip(): void;
}
