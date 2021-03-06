var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, ContentChildren, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { BooleanProperty } from '../common/boolean-property';
import { NumberProperty } from '../common/number.property';
import { MdlTabPanelComponent } from './mdl-tab-panel.component';
export var MdlTabsComponent = (function () {
    function MdlTabsComponent() {
        this.selectedIndex = 0;
        this.isRipple = false;
        this.selectedTabEmitter = new EventEmitter();
    }
    MdlTabsComponent.prototype.ngAfterContentInit = function () {
        this.updateSelectedTabIndex();
    };
    MdlTabsComponent.prototype.ngOnChanges = function (changes) {
        if (changes['selectedIndex']) {
            this.updateSelectedTabIndex();
        }
    };
    MdlTabsComponent.prototype.updateSelectedTabIndex = function () {
        if (this.tabs) {
            this.tabs.forEach(function (tab) { return tab.isActive = false; });
            if (this.tabs.toArray().length > 0 && this.selectedIndex < this.tabs.toArray().length) {
                this.tabs.toArray()[this.selectedIndex].isActive = true;
            }
        }
    };
    MdlTabsComponent.prototype.tabSelected = function (tab) {
        if (tab.disabled) {
            return;
        }
        var index = this.tabs.toArray().indexOf(tab);
        if (index != this.selectedIndex) {
            this.selectedIndex = index;
            this.updateSelectedTabIndex();
            this.selectedTabEmitter.emit({ index: this.selectedIndex });
        }
    };
    MdlTabsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-tabs',
                    host: {
                        '[class.mdl-tabs]': 'true',
                        '[class.is-upgraded]': 'true'
                    },
                    template: "\n   <div class=\"mdl-tabs__tab-bar\">\n      <div *ngFor=\"let tab of tabs.toArray()\">\n        <div\n          *ngIf=\"tab.titleComponent\"\n          class=\"mdl-tabs__tab\"\n          (click)=\"tabSelected(tab)\"\n          [mdl-ripple]=\"isRipple && !tab.disabled\"\n          [ngClass]=\"{'is-active': tab.isActive, 'disabled': tab.disabled}\"\n          [append-view-container-ref]=\"tab.titleComponent.vcRef\"></div>\n        <a *ngIf=\"!tab.titleComponent\" href=\"javascript:void(0)\"\n              (click)=\"tabSelected(tab)\"\n              class=\"mdl-tabs__tab\"\n              [mdl-ripple]=\"isRipple && !tab.disabled\"\n              [ngClass]=\"{'is-active': tab.isActive, 'disabled': tab.disabled}\">{{tab.title}}</a>\n       </div>\n  </div>\n  <ng-content></ng-content>\n  ",
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    MdlTabsComponent.ctorParameters = [];
    MdlTabsComponent.propDecorators = {
        'selectedIndex': [{ type: Input, args: ['mdl-tab-active-index',] },],
        'isRipple': [{ type: Input, args: ['mdl-ripple',] },],
        'selectedTabEmitter': [{ type: Output, args: ['mdl-tab-active-changed',] },],
        'tabs': [{ type: ContentChildren, args: [MdlTabPanelComponent,] },],
    };
    __decorate([
        NumberProperty()
    ], MdlTabsComponent.prototype, "selectedIndex", void 0);
    __decorate([
        BooleanProperty()
    ], MdlTabsComponent.prototype, "isRipple", void 0);
    return MdlTabsComponent;
}());
//# sourceMappingURL=mdl-tabs.component.js.map