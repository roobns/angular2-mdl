import { ViewContainerRef, OnInit } from '@angular/core';
import { MdlDialogReference, IMdlCustomDialog } from '../../components/dialog/index';
import 'rxjs/add/operator/scan';
import { LoginService } from './login.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
export declare class LoginDialogComponent implements IMdlCustomDialog, OnInit {
    private vcRef;
    private dialog;
    private fb;
    private loginService;
    private inputElement;
    form: FormGroup;
    username: FormControl;
    password: FormControl;
    processingLogin: boolean;
    statusMessage: string;
    constructor(vcRef: ViewContainerRef, dialog: MdlDialogReference, fb: FormBuilder, loginService: LoginService);
    ngOnInit(): void;
    viewContainerRef: ViewContainerRef;
    ngAfterViewInit(): void;
    login(): void;
    onEsc(): void;
}
