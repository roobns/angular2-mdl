import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AbstractDemoComponent } from './../abstract-demo.component';
export declare class LayoutDemo extends AbstractDemoComponent {
    activeIndex: number;
    constructor(router: Router, route: ActivatedRoute, titleService: Title);
    tabChanged({index}: {
        index: any;
    }): void;
    tabMouseover({index}: {
        index: any;
    }): void;
    tabMouseout({index}: {
        index: any;
    }): void;
}
export declare class Layout0Demo {
}
export declare class Layout1Demo {
}
export declare class Layout2Demo {
}
export declare class Layout3Demo {
}
