import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
export declare class AbstractDemoComponent {
    private router;
    private route;
    private titleService;
    private sub;
    private windowTitle;
    constructor(router: Router, route: ActivatedRoute, titleService: Title);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
