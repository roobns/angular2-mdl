import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AbstractDemoComponent } from './../abstract-demo.component';
export declare class ThemeDemo extends AbstractDemoComponent {
    checkbox1: boolean;
    radioOption: string;
    constructor(router: Router, route: ActivatedRoute, titleService: Title);
    primaryColorName: any;
    accentColorName: any;
    selectedPrimaryColor: {
        name: any;
        htmlColor: string;
        accentColor: string;
        isSelectable: boolean;
    };
    selectedAccentColor: {
        name: any;
        htmlColor: string;
        accentColor: string;
        isSelectable: boolean;
    };
    stylescheetUrl: string;
    cdnLink: any;
    primaryColors: {
        name: any;
        htmlColor: string;
        accentColor: string;
        isSelectable: boolean;
    }[];
    secondaryColors: {
        name: any;
        htmlColor: string;
        accentColor: string;
        isSelectable: boolean;
    }[];
    private mapToColorObject(color, i);
    private normaliseColorName(color);
    selectPrimaryColor(color: any): void;
    selectAccentColor(color: any): void;
    private updateStylesheet();
}
