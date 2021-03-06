import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdlDialogService } from './mdl-dialog.service';
import { MdlDialogComponent } from './mdl-dialog.component';
import { MdlSimpleDialogComponent } from './mdl-simple-dialog.component';
import { MdlCommonsModule } from '../common/index';
import { MdlDialogHostComponent } from './mdl-dialog-host.component';
import { MdlAlertComponent } from './mdl-alert.component';
import { MdlDialogOutletModule } from '../dialog-outlet/index';
import { MdlButtonModule } from '../button/mdl-button.component';
export * from './mdl-dialog.component';
export * from './mdl-dialog.service';
export * from './mdl-dialog-configuration';
export * from './mdl-alert.component';
var PUBLIC_COMPONENTS = [
    MdlDialogComponent,
    MdlAlertComponent
];
var PRIVATE_COMPONENTS = [
    MdlDialogHostComponent,
    MdlSimpleDialogComponent
];
export var MdlDialogModule = (function () {
    function MdlDialogModule() {
    }
    MdlDialogModule.forRoot = function () {
        return {
            ngModule: MdlDialogModule,
            providers: [MdlDialogService]
        };
    };
    MdlDialogModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        MdlCommonsModule,
                        MdlButtonModule,
                        MdlDialogOutletModule.forRoot()
                    ],
                    exports: PUBLIC_COMPONENTS.slice(),
                    declarations: PUBLIC_COMPONENTS.concat(PRIVATE_COMPONENTS),
                    entryComponents: PUBLIC_COMPONENTS.concat(PRIVATE_COMPONENTS)
                },] },
    ];
    /** @nocollapse */
    MdlDialogModule.ctorParameters = [];
    return MdlDialogModule;
}());
//# sourceMappingURL=index.js.map