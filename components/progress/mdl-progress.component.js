var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Input, NgModule, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { BooleanProperty } from '../common/boolean-property';
import { CommonModule } from '@angular/common';
export var MdlProgressComponent = (function () {
    function MdlProgressComponent() {
        this.progress = 0;
        this.buffer = 100;
        this.aux = 0;
    }
    MdlProgressComponent.prototype.ngOnChanges = function (changes) {
        if (changes['buffer']) {
            this.setBuffer(changes['buffer'].currentValue);
        }
    };
    MdlProgressComponent.prototype.setBuffer = function (b) {
        this.aux = 100 - b;
    };
    MdlProgressComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-progress',
                    host: {
                        '[class.mdl-progress]': 'true',
                        '[class.mdl-progress__indeterminate]': 'indeterminate===true'
                    },
                    template: "\n    <div class=\"progressbar bar bar1\" [style.width]=\"progress + '%'\"></div>\n    <div class=\"bufferbar bar bar2\" [style.width]=\"buffer + '%'\"></div>\n    <div class=\"auxbar bar bar3\" [ngStyle]=\"{'width': aux+'%'}\"></div>\n  ",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                },] },
    ];
    /** @nocollapse */
    MdlProgressComponent.ctorParameters = [];
    MdlProgressComponent.propDecorators = {
        'progress': [{ type: Input },],
        'buffer': [{ type: Input },],
        'aux': [{ type: Input },],
        'indeterminate': [{ type: Input },],
    };
    __decorate([
        BooleanProperty()
    ], MdlProgressComponent.prototype, "indeterminate", void 0);
    return MdlProgressComponent;
}());
var MDL_PROGRESS_DIRECTIVES = [MdlProgressComponent];
export var MdlProgressModule = (function () {
    function MdlProgressModule() {
    }
    MdlProgressModule.forRoot = function () {
        return {
            ngModule: MdlProgressModule,
            providers: []
        };
    };
    MdlProgressModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: MDL_PROGRESS_DIRECTIVES,
                    declarations: MDL_PROGRESS_DIRECTIVES,
                },] },
    ];
    /** @nocollapse */
    MdlProgressModule.ctorParameters = [];
    return MdlProgressModule;
}());
//# sourceMappingURL=mdl-progress.component.js.map