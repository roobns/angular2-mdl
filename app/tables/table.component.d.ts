import { OnInit } from '@angular/core';
import { IMdlTableModelItem, MdlDefaultTableModel } from '../../components';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AbstractDemoComponent } from './../abstract-demo.component';
export interface ITableItem extends IMdlTableModelItem {
    material: string;
    quantity: number;
    unitPrice: number;
}
export declare class TableDemo extends AbstractDemoComponent implements OnInit {
    private tableData;
    protected selected: Array<ITableItem>;
    tableModel: MdlDefaultTableModel;
    constructor(router: Router, route: ActivatedRoute, titleService: Title);
    ngOnInit(): void;
    protected selectionChanged($event: any): void;
}
