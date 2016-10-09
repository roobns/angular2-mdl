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
var flyInOutTrigger_animation_1 = require('./../animations/flyInOutTrigger-animation');
var flyInOutTrigger_animation_2 = require('./../animations/flyInOutTrigger-animation');
var router_1 = require('@angular/router');
var platform_browser_1 = require('@angular/platform-browser');
var abstract_demo_component_1 = require('./../abstract-demo.component');
/* tslint:disable */
var CardDemo = (function (_super) {
    __extends(CardDemo, _super);
    function CardDemo(router, route, titleService) {
        _super.call(this, router, route, titleService);
    }
    CardDemo.prototype.ngAfterContentInit = function () {
        (function (d, sc, u) {
            var s = d.createElement(sc), p = d.getElementsByTagName(sc)[0];
            s.type = 'text/javascript';
            s.async = true;
            s.src = u + '?v=' + (+new Date());
            p.parentNode.insertBefore(s, p);
        })(document, 'script', '//aff.bstatic.com/static/affiliate_base/js/flexiproduct.js');
    };
    CardDemo.prototype.booknow = function () {
        var url = 'http://www.booking.com/index.html?aid=818140';
        window.open(url);
    };
    CardDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'card-demo',
            templateUrl: 'card.component.html',
            styles: [
                "\n    .demo-card-wide {\n      width: 500px;\n      margin-right:1rem;\n    }\n    .demo-card-wide > .mdl-card__title {\n      color: #fff;\n      height: 176px;\n      background: url('assets/sund.jpg') center / cover;\n    }\n    .demo-card-wide > .mdl-card__menu {\n      color: #fff;\n    }\n    \n    .demo-card-square.mdl-card {\n      width: 320px;\n      height: 320px;\n      margin-right:1rem;\n    }\n    .demo-card-square > .mdl-card__title {\n      color: #fff;\n      background:\n        url('assets/wood.jpg') bottom right 15% no-repeat #46B6AC;\n    }\n\n    .demo-card-image.mdl-card {\n      width: 256px;\n      height: 256px;\n      margin-right:1rem;\n      background: url('assets/richter.jpg') center / cover;\n    }\n    .demo-card-image > .mdl-card__actions {\n      height: 52px;\n      padding: 16px;\n      background: rgba(0, 0, 0, 0.2);\n    }\n    .demo-card-image__filename {\n      color: #fff;\n      font-size: 14px;\n      font-weight: 500;\n    }\n    \n    .demo-card-event.mdl-card {\n      width: 256px;\n      height: 256px;\n      margin-right:1rem;\n      background: url('http://r.bstatic.com/static/affiliate_base/img/banners/branded_set_2/200x200/e2ba08df23df8354ed950047c69537ba7a3bb73f.jpg') center / cover;\n    }\n    .demo-card-event > .mdl-card__actions {\n      border-color: rgba(255, 255, 255, 0.2);\n    }\n    .demo-card-event > .mdl-card__title {\n      align-items: flex-start;\n    }\n    .demo-card-event > .mdl-card__title > h4 {\n      margin-top: 0;\n    }\n    .demo-card-event > .mdl-card__actions {\n      display: flex;\n      box-sizing:border-box;\n      align-items: center;\n    }\n    .demo-card-event > .mdl-card__actions > .material-icons {\n      padding-right: 10px;\n    }\n    .demo-card-event > .mdl-card__title,\n    .demo-card-event > .mdl-card__actions,\n    .demo-card-event > .mdl-card__actions > .mdl-button {\n      color: #fff;\n    }\n    \n    .example-separator {\n      clear: both;  \n      margin-bottom: 1rem;\n    }\n    "
            ],
            host: flyInOutTrigger_animation_2.hostConfig,
            animations: [
                flyInOutTrigger_animation_1.flyInOutTrigger
            ],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, platform_browser_1.Title])
    ], CardDemo);
    return CardDemo;
}(abstract_demo_component_1.AbstractDemoComponent));
exports.CardDemo = CardDemo;
//# sourceMappingURL=../../../dist/app/card/card.component.js.map