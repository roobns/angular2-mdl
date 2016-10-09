"use strict";
var AbstractDemoComponent = (function () {
    function AbstractDemoComponent(router, route, titleService) {
        this.router = router;
        this.route = route;
        this.titleService = titleService;
        this.windowTitle = 'angular2-mdl';
    }
    AbstractDemoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle(this.windowTitle);
        this.sub = this.router.events.subscribe(function (event) {
            if (_this.route.snapshot.data && _this.route.snapshot.data['title']) {
                var title = _this.windowTitle + ' - ' + _this.route.snapshot.data['title'];
                _this.titleService.setTitle(title);
            }
            else {
                _this.titleService.setTitle(_this.windowTitle);
            }
        });
    };
    AbstractDemoComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return AbstractDemoComponent;
}());
exports.AbstractDemoComponent = AbstractDemoComponent;
//# sourceMappingURL=../../dist/app/abstract-demo.component.js.map