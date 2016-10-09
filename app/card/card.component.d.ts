import { AfterContentInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AbstractDemoComponent } from './../abstract-demo.component';
export declare class CardDemo extends AbstractDemoComponent implements AfterContentInit {
    constructor(router: Router, route: ActivatedRoute, titleService: Title);
    ngAfterContentInit(): void;
    booknow(): void;
}
