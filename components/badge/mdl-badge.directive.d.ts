import { OnChanges, ElementRef, Renderer, ModuleWithProviders } from '@angular/core';
export declare class MdlBadgeDirective implements OnChanges {
    private elementRef;
    private renderer;
    private el;
    private mdlBadgeContent;
    constructor(elementRef: ElementRef, renderer: Renderer);
    ngOnChanges(): void;
}
export declare class MdlBadgeOverlapDirective {
}
export declare class MdlBadgeNoBackgroundDirective {
}
export declare class MdlBadgeModule {
    static forRoot(): ModuleWithProviders;
}
