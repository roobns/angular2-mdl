import { QueryList, AfterContentInit, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { MdlTabPanelComponent } from './mdl-tab-panel.component';
export declare class MdlTabsComponent implements AfterContentInit, OnChanges {
    selectedIndex: number;
    protected isRipple: boolean;
    selectedTabEmitter: EventEmitter<{}>;
    protected tabs: QueryList<MdlTabPanelComponent>;
    ngAfterContentInit(): void;
    ngOnChanges(changes: SimpleChanges): any;
    private updateSelectedTabIndex();
    protected tabSelected(tab: MdlTabPanelComponent): void;
}
