import { ApplicationRef, ApplicationInitStatus } from '@angular/core';
export declare class Angular2MdlAppModule {
    private appRef;
    private appStatus;
    constructor(appRef: ApplicationRef, appStatus: ApplicationInitStatus);
    ngDoBootstrap(): void;
}
