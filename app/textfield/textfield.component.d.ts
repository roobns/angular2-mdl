import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AbstractDemoComponent } from './../abstract-demo.component';
export declare class TextFieldDemo extends AbstractDemoComponent {
    constructor(router: Router, route: ActivatedRoute, titleService: Title);
    onBlur(event: FocusEvent): void;
    onFocus(event: FocusEvent): void;
}
