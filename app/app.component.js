"use strict";
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var platform_browser_1 = require('@angular/platform-browser');
var flyInOutTrigger_animation_1 = require('./animations/flyInOutTrigger-animation');
var flyInOutTrigger_animation_2 = require('./animations/flyInOutTrigger-animation');
var button_component_1 = require('./button/button.component');
var badge_component_1 = require('./badge/badge.component');
var card_component_1 = require('./card/card.component');
var chips_component_1 = require('./chips/chips.component');
var icon_component_1 = require('./icon/icon.component');
var shadow_component_1 = require('./shadow/shadow.component');
var loading_component_1 = require('./loading/loading.component');
var list_component_1 = require('./list/list.component');
var layout_component_1 = require('./layout/layout.component');
var menu_component_1 = require('./menus/menu.component');
var toggle_component_1 = require('./toggle/toggle.component');
var tooltip_component_1 = require('./tooltip/tooltip.component');
var slider_component_1 = require('./slider/slider.component');
var snackbar_component_1 = require('./snackbar/snackbar.component');
var table_component_1 = require('./tables/table.component');
var tabs_component_1 = require('./tabs/tabs.component');
var textfield_component_1 = require('./textfield/textfield.component');
var reactiveform_component_1 = require('./reactiveforms/reactiveform.component');
var abstract_demo_component_1 = require('./abstract-demo.component');
var theme_component_1 = require('./theme/theme.component');
var dialog_component_1 = require('./dialog/dialog.component');
var mdl_dialog_service_1 = require('../components/dialog/mdl-dialog.service');
var mdl_snackbar_service_1 = require('../components/snackbar/mdl-snackbar.service');
var Home = (function (_super) {
    __extends(Home, _super);
    function Home(router, route, titleService) {
        _super.call(this, router, route, titleService);
    }
    Home = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'home',
            host: flyInOutTrigger_animation_2.hostConfig,
            animations: [
                flyInOutTrigger_animation_1.flyInOutTrigger
            ],
            templateUrl: 'home.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, platform_browser_1.Title])
    ], Home);
    return Home;
}(abstract_demo_component_1.AbstractDemoComponent));
exports.Home = Home;
exports.appRoutes = [
    { path: '', component: Home, data: { title: 'Home' } },
    { path: 'theme', component: theme_component_1.ThemeDemo, data: { title: 'Themes' } },
    { path: 'badge', component: badge_component_1.BadgeDemo, data: { title: 'Badges' } },
    { path: 'button', component: button_component_1.ButtonDemo, data: { title: 'Buttons' } },
    { path: 'card', component: card_component_1.CardDemo, data: { title: 'Cards' } },
    { path: 'chips', component: chips_component_1.ChipsDemo, data: { title: 'Chips' } },
    { path: 'dialogs', component: dialog_component_1.DialogDemo, data: { title: 'Dialog' } },
    { path: 'icon', component: icon_component_1.IconDemo, data: { title: 'Icons' } },
    { path: 'layout', component: layout_component_1.LayoutDemo, data: { title: 'Layouts' },
        children: [
            { path: '', component: layout_component_1.Layout0Demo },
            { path: 'l1', component: layout_component_1.Layout1Demo },
            { path: 'l2', component: layout_component_1.Layout2Demo },
            { path: 'l3', component: layout_component_1.Layout3Demo }
        ]
    },
    { path: 'loading', component: loading_component_1.LoadingDemo, data: { title: 'Loading' } },
    { path: 'list', component: list_component_1.ListDemo, data: { title: 'Lists' } },
    { path: 'menu', component: menu_component_1.MenuDemo, data: { title: 'Menus' } },
    { path: 'reactiveForms', component: reactiveform_component_1.ReactiveFormsDemo, data: { title: 'Ractive Forms' } },
    { path: 'shadow', component: shadow_component_1.ShadowDemo, data: { title: 'Shadows' } },
    { path: 'slider', component: slider_component_1.SliderDemo, data: { title: 'Sliders' } },
    { path: 'snackbar', component: snackbar_component_1.SnackbarDemo, data: { title: 'Snachbar' } },
    { path: 'table', component: table_component_1.TableDemo, data: { title: 'Tables' } },
    { path: 'tabs', component: tabs_component_1.TabsDemo, data: { title: 'Tabs' } },
    { path: 'textfield', component: textfield_component_1.TextFieldDemo, data: { title: 'Textfields' } },
    { path: 'toggle', component: toggle_component_1.ToggleDemo, data: { title: 'Toggles' } },
    { path: 'tooltip', component: tooltip_component_1.TooltipDemo, data: { title: 'Tooltips' } },
    { path: '**', redirectTo: '' },
];
var Angular2MdlAppComponent = (function () {
    function Angular2MdlAppComponent(vcRef, dialogService, snackbarService) {
        this.vcRef = vcRef;
        this.dialogService = dialogService;
        this.snackbarService = snackbarService;
        this.title = 'Angular 2 - Material Design Lite';
        dialogService.setDefaultViewContainerRef(vcRef);
        snackbarService.setDefaultViewContainerRef(vcRef);
    }
    Angular2MdlAppComponent.prototype.componentSelected = function (mainLayout) {
        mainLayout.closeDrawerOnSmallScreens();
    };
    Angular2MdlAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'root-app',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css'],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef, mdl_dialog_service_1.MdlDialogService, mdl_snackbar_service_1.MdlSnackbarService])
    ], Angular2MdlAppComponent);
    return Angular2MdlAppComponent;
}());
exports.Angular2MdlAppComponent = Angular2MdlAppComponent;
//# sourceMappingURL=../../dist/app/app.component.js.map