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
var prism_vendor_1 = require('./prism.vendor');
var PrismDirective = (function () {
    function PrismDirective(el) {
        this.el = el;
    }
    PrismDirective.prototype.ngOnInit = function () {
        var rawHtml = this.el.nativeElement.textContent.replace(new RegExp('=""', 'g'), '');
        // REMOVE the escaped exression so angular ignores the content :(
        rawHtml = rawHtml.replace(new RegExp('{x{', 'g'), '{{');
        var html = prism_vendor_1.Prism.highlight(rawHtml, prism_vendor_1.Prism.languages.html);
        this.el.nativeElement.innerHTML = html;
    };
    PrismDirective = __decorate([
        core_1.Directive({
            selector: '[prism]',
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], PrismDirective);
    return PrismDirective;
}());
exports.PrismDirective = PrismDirective;
//# sourceMappingURL=../../../dist/app/prism/prism.component.js.map