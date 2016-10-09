"use strict";
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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var index_1 = require('./../components/index');
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
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
var prism_component_1 = require('./prism/prism.component');
var reactiveform_component_1 = require('./reactiveforms/reactiveform.component');
var theme_component_1 = require('./theme/theme.component');
var dialog_component_1 = require('./dialog/dialog.component');
var login_module_1 = require('./dialog/login.module');
var Angular2MdlAppModule = (function () {
    function Angular2MdlAppModule(appRef, appStatus) {
        this.appRef = appRef;
        this.appStatus = appStatus;
    }
    Angular2MdlAppModule.prototype.ngDoBootstrap = function () {
        this.appStatus.donePromise.then(function () {
            var script = document.createElement('script');
            script.innerHTML = '';
            script.src = 'https://buttons.github.io/buttons.js';
            var anyScriptTag = document.getElementsByTagName('script')[0];
            anyScriptTag.parentNode.insertBefore(script, anyScriptTag);
        });
        this.appRef.bootstrap(app_component_1.Angular2MdlAppComponent);
    };
    Angular2MdlAppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                index_1.MdlModule,
                router_1.RouterModule.forRoot(app_component_1.appRoutes),
                login_module_1.LoginModule
            ],
            declarations: [
                app_component_1.Angular2MdlAppComponent,
                app_component_1.Home,
                button_component_1.ButtonDemo,
                badge_component_1.BadgeDemo,
                card_component_1.CardDemo,
                chips_component_1.ChipsDemo,
                dialog_component_1.DialogDemo,
                icon_component_1.IconDemo,
                shadow_component_1.ShadowDemo,
                loading_component_1.LoadingDemo,
                list_component_1.ListDemo,
                layout_component_1.LayoutDemo,
                layout_component_1.Layout0Demo,
                layout_component_1.Layout1Demo,
                layout_component_1.Layout2Demo,
                layout_component_1.Layout3Demo,
                menu_component_1.MenuDemo,
                toggle_component_1.ToggleDemo,
                tooltip_component_1.TooltipDemo,
                slider_component_1.SliderDemo,
                snackbar_component_1.SnackbarDemo,
                table_component_1.TableDemo,
                tabs_component_1.TabsDemo,
                textfield_component_1.TextFieldDemo,
                theme_component_1.ThemeDemo,
                prism_component_1.PrismDirective,
                reactiveform_component_1.ReactiveFormsDemo
            ],
            providers: [
                platform_browser_1.Title
            ],
            entryComponents: [app_component_1.Angular2MdlAppComponent],
            bootstrap: [],
        }), 
        __metadata('design:paramtypes', [core_1.ApplicationRef, core_1.ApplicationInitStatus])
    ], Angular2MdlAppModule);
    return Angular2MdlAppModule;
}());
exports.Angular2MdlAppModule = Angular2MdlAppModule;
//# sourceMappingURL=../../dist/app/app-module.js.map