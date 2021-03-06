import { ElementRef, Renderer, QueryList } from '@angular/core';
import { MdlLayoutTabPanelComponent } from './mdl-layout-tab-panel.component';
import { MdlLayoutComponent } from './mdl-layout.component';
export declare class MdlLayoutHeaderComponent {
    private elementRef;
    private renderer;
    private mdlLayout;
    mode: string;
    protected el: HTMLElement;
    isCompact: boolean;
    isAnimating: boolean;
    isSeamed: boolean;
    isRipple: boolean;
    tabs: QueryList<MdlLayoutTabPanelComponent>;
    constructor(elementRef: ElementRef, renderer: Renderer, mdlLayout: MdlLayoutComponent);
    protected onTransitionEnd(): void;
    protected onClick(): void;
}
