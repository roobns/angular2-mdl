var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, ContentChild, Input, Renderer, ViewEncapsulation, ElementRef, Output, EventEmitter, NgZone } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { MdlError } from '../common/mdl-error';
import { BooleanProperty } from '../common/boolean-property';
import { NumberProperty } from '../common/number.property';
import { MdlLayoutHeaderComponent } from './mdl-layout-header.component';
import { MdlLayoutDrawerComponent } from './mdl-layout-drawer.component';
import { MdlLayoutContentComponent } from './mdl-layout-content.component';
var ESCAPE = 27;
var STANDARD = 'standard';
var WATERFALL = 'waterfall';
var SCROLL = 'scroll';
export var MdLUnsupportedLayoutTypeError = (function (_super) {
    __extends(MdLUnsupportedLayoutTypeError, _super);
    function MdLUnsupportedLayoutTypeError(type) {
        _super.call(this, "Layout type \"" + type + "\" isn't supported by mdl-layout (allowed: standard, waterfall, scroll).");
    }
    return MdLUnsupportedLayoutTypeError;
}(MdlError));
export var MdlLayoutComponent = (function () {
    function MdlLayoutComponent(renderer, evm, el, ngZone) {
        this.renderer = renderer;
        this.evm = evm;
        this.el = el;
        this.ngZone = ngZone;
        this.mode = STANDARD;
        this.isFixedDrawer = false;
        this.isFixedHeader = false;
        this.isSeamed = false;
        this.selectedIndex = 0;
        this.isRipple = false;
        this.isNoDrawer = false;
        this.selectedTabEmitter = new EventEmitter();
        this.mouseoverTabEmitter = new EventEmitter();
        this.mouseoutTabEmitter = new EventEmitter();
        this.isDrawerVisible = false;
        this.isSmallScreen = false;
    }
    MdlLayoutComponent.prototype.ngAfterContentInit = function () {
        this.validateMode();
        if (this.header && this.content && this.content.tabs) {
            this.header.tabs = this.content.tabs;
            this.updateSelectedTabIndex();
        }
        // set this.drawer to null, if the drawer is not a direct child if this layout. It may be a drywer of a sub layout.
        if (this.drawer && !this.drawer.isDrawerDirectChildOf(this)) {
            this.drawer = null;
        }
    };
    MdlLayoutComponent.prototype.ngOnChanges = function (changes) {
        if (changes['selectedIndex']) {
            this.updateSelectedTabIndex();
        }
    };
    MdlLayoutComponent.prototype.updateSelectedTabIndex = function () {
        if (this.header && this.header.tabs) {
            this.header.tabs.forEach(function (tab) { return tab.isActive = false; });
            if (this.header.tabs.toArray().length > 0 && this.selectedIndex < this.header.tabs.toArray().length) {
                this.header.tabs.toArray()[this.selectedIndex].isActive = true;
            }
        }
    };
    MdlLayoutComponent.prototype.validateMode = function () {
        var _this = this;
        if (this.mode === '') {
            this.mode = STANDARD;
        }
        if ([STANDARD, WATERFALL, SCROLL].indexOf(this.mode) === -1) {
            throw new MdLUnsupportedLayoutTypeError(this.mode);
        }
        if (this.header) {
            // inform the header about the mode
            this.header.mode = this.mode;
            this.header.isSeamed = this.isSeamed;
        }
        if (this.content) {
            this.scrollListener = this.renderer.listen(this.content.el, 'scroll', function (e) {
                _this.onScroll(_this.content.el.scrollTop);
            });
            // do not try to access the window object if rendered on the server
            if (typeof window === 'object' && 'matchMedia' in window) {
                var query_1 = window.matchMedia('(max-width: 1024px)');
                var queryListener_1 = function () {
                    _this.ngZone.run(function () {
                        // looks like the query addListener runs not in NGZone - inform manually about changes
                        _this.onQueryChange(query_1.matches);
                    });
                };
                query_1.addListener(queryListener_1);
                this.windowMediaQueryListener = function () {
                    query_1.removeListener(queryListener_1);
                };
                // set the initial state
                setTimeout(function () {
                    _this.onQueryChange(query_1.matches);
                });
            }
        }
    };
    MdlLayoutComponent.prototype.onScroll = function (scrollTop) {
        if (this.mode !== WATERFALL) {
            return;
        }
        if (this.header.isAnimating) {
            return;
        }
        var headerVisible = !this.isSmallScreen || this.isFixedHeader;
        if (scrollTop > 0 && !this.header.isCompact) {
            this.header.isCompact = true;
            if (headerVisible) {
                this.header.isAnimating = true;
            }
        }
        else if (scrollTop <= 0 && this.header.isCompact) {
            this.header.isCompact = false;
            if (headerVisible) {
                this.header.isAnimating = true;
            }
        }
    };
    MdlLayoutComponent.prototype.onQueryChange = function (isSmall) {
        if (isSmall) {
            this.isSmallScreen = true;
        }
        else {
            this.isSmallScreen = false;
            this.closeDrawer();
        }
    };
    MdlLayoutComponent.prototype.toggleDrawer = function () {
        this.isDrawerVisible = !this.isDrawerVisible;
        if (this.drawer) {
            this.drawer.isDrawerVisible = this.isDrawerVisible;
        }
    };
    MdlLayoutComponent.prototype.closeDrawer = function () {
        this.isDrawerVisible = false;
        if (this.drawer) {
            this.drawer.isDrawerVisible = false;
        }
    };
    MdlLayoutComponent.prototype.obfuscatorKeyDown = function ($event) {
        if ($event.keyCode === ESCAPE) {
            this.toggleDrawer();
        }
    };
    MdlLayoutComponent.prototype.ngOnDestroy = function () {
        if (this.scrollListener) {
            this.scrollListener();
            this.scrollListener = null;
        }
        if (this.windowMediaQueryListener) {
            this.windowMediaQueryListener();
            this.windowMediaQueryListener = null;
        }
    };
    // triggered from mdl-layout-header.component
    MdlLayoutComponent.prototype.tabSelected = function (tab) {
        var index = this.header.tabs.toArray().indexOf(tab);
        if (index != this.selectedIndex) {
            this.selectedIndex = index;
            this.updateSelectedTabIndex();
            this.selectedTabEmitter.emit({ index: this.selectedIndex });
        }
    };
    // triggered from mdl-layout-header.component
    MdlLayoutComponent.prototype.onTabMouseover = function (tab) {
        var index = this.header.tabs.toArray().indexOf(tab);
        this.mouseoverTabEmitter.emit({ index: index });
    };
    // triggered from mdl-layout-header.component
    MdlLayoutComponent.prototype.onTabMouseout = function (tab) {
        var index = this.header.tabs.toArray().indexOf(tab);
        this.mouseoutTabEmitter.emit({ index: index });
    };
    MdlLayoutComponent.prototype.closeDrawerOnSmallScreens = function () {
        if (this.isSmallScreen && this.isDrawerVisible) {
            this.closeDrawer();
        }
    };
    MdlLayoutComponent.prototype.hasDrawer = function () {
        return !!this.drawer;
    };
    MdlLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-layout',
                    template: "\n    <div class=\"mdl-layout__container\" [ngClass]=\"{'has-scrolling-header': mode==='scroll'}\">\n     <div class=\"mdl-layout is-upgraded\"\n          [ngClass]=\"{\n          'is-small-screen': isSmallScreen,\n          'mdl-layout--fixed-drawer': isFixedDrawer,\n          'mdl-layout--fixed-header': isFixedHeader,\n          'mdl-layout--fixed-tabs': 'tabs.toArray().length > 0'\n          }\">\n        <ng-content select=\"mdl-layout-header\"></ng-content>\n        <ng-content select=\"mdl-layout-drawer\"></ng-content>\n        <div *ngIf=\"drawer && isNoDrawer==false\" class=\"mdl-layout__drawer-button\" (click)=\"toggleDrawer()\">\n           <mdl-icon style='color: #fff'>email</mdl-icon>\n        </div>\n        <ng-content select=\"mdl-layout-content\"></ng-content>\n        <div class=\"mdl-layout__obfuscator\"\n             [ngClass]=\"{'is-visible':isDrawerVisible}\"\n             (click)=\"toggleDrawer()\"\n             (keydown)=\"obfuscatorKeyDown($event)\"></div>\n     </div>\n    </div>\n  ",
                    exportAs: 'mdlLayout',
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    MdlLayoutComponent.ctorParameters = [
        { type: Renderer, },
        { type: EventManager, },
        { type: ElementRef, },
        { type: NgZone, },
    ];
    MdlLayoutComponent.propDecorators = {
        'header': [{ type: ContentChild, args: [MdlLayoutHeaderComponent,] },],
        'drawer': [{ type: ContentChild, args: [MdlLayoutDrawerComponent,] },],
        'content': [{ type: ContentChild, args: [MdlLayoutContentComponent,] },],
        'mode': [{ type: Input, args: ['mdl-layout-mode',] },],
        'isFixedDrawer': [{ type: Input, args: ['mdl-layout-fixed-drawer',] },],
        'isFixedHeader': [{ type: Input, args: ['mdl-layout-fixed-header',] },],
        'isSeamed': [{ type: Input, args: ['mdl-layout-header-seamed',] },],
        'selectedIndex': [{ type: Input, args: ['mdl-layout-tab-active-index',] },],
        'isRipple': [{ type: Input, args: ['mdl-ripple',] },],
        'isNoDrawer': [{ type: Input, args: ['mdl-layout-no-drawer-button',] },],
        'selectedTabEmitter': [{ type: Output, args: ['mdl-layout-tab-active-changed',] },],
        'mouseoverTabEmitter': [{ type: Output, args: ['mdl-layout-tab-mouseover',] },],
        'mouseoutTabEmitter': [{ type: Output, args: ['mdl-layout-tab-mouseout',] },],
    };
    __decorate([
        BooleanProperty()
    ], MdlLayoutComponent.prototype, "isFixedDrawer", void 0);
    __decorate([
        BooleanProperty()
    ], MdlLayoutComponent.prototype, "isFixedHeader", void 0);
    __decorate([
        BooleanProperty()
    ], MdlLayoutComponent.prototype, "isSeamed", void 0);
    __decorate([
        NumberProperty()
    ], MdlLayoutComponent.prototype, "selectedIndex", void 0);
    __decorate([
        BooleanProperty()
    ], MdlLayoutComponent.prototype, "isRipple", void 0);
    __decorate([
        BooleanProperty()
    ], MdlLayoutComponent.prototype, "isNoDrawer", void 0);
    return MdlLayoutComponent;
}());
//# sourceMappingURL=mdl-layout.component.js.map