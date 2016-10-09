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
var components_1 = require('../../components');
var flyInOutTrigger_animation_1 = require('./../animations/flyInOutTrigger-animation');
var flyInOutTrigger_animation_2 = require('./../animations/flyInOutTrigger-animation');
var router_1 = require('@angular/router');
var platform_browser_1 = require('@angular/platform-browser');
var abstract_demo_component_1 = require('./../abstract-demo.component');
var TableDemo = (function (_super) {
    __extends(TableDemo, _super);
    function TableDemo(router, route, titleService) {
        _super.call(this, router, route, titleService);
        this.tableData = [
            { material: 'Acrylic (Transparent)', quantity: 25, unitPrice: 2.90, selected: true },
            { material: 'Plywood (Birch)', quantity: 50, unitPrice: 1.25, selected: false },
            { material: 'Laminate (Gold on Blue)', quantity: 10, unitPrice: 2.35, selected: false }
        ];
        this.selected = new Array();
        this.tableModel = new components_1.MdlDefaultTableModel([
            { key: 'material', name: 'Material', sortable: true },
            { key: 'quantity', name: 'Quantity', sortable: true, numeric: true },
            { key: 'unitPrice', name: 'Unit price', numeric: true }
        ]);
    }
    TableDemo.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.tableModel.addAll(this.tableData);
        this.selected = this.tableData.filter(function (data) { return data.selected; });
    };
    TableDemo.prototype.selectionChanged = function ($event) {
        this.selected = $event.value;
    };
    TableDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'table-demo',
            host: flyInOutTrigger_animation_2.hostConfig,
            animations: [
                flyInOutTrigger_animation_1.flyInOutTrigger
            ],
            templateUrl: 'table.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, platform_browser_1.Title])
    ], TableDemo);
    return TableDemo;
}(abstract_demo_component_1.AbstractDemoComponent));
exports.TableDemo = TableDemo;
//# sourceMappingURL=../../../dist/app/tables/table.component.js.map