import { Subject } from 'rxjs/Rx';
export declare class MockRouter {
    events: Subject<{}>;
    routerState: {
        root: any;
    };
    createUrlTree(): void;
}
