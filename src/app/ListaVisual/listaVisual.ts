// <reference path="../node_modules/clone/clone.d.ts" />
// <reference path="../node_modules/ng2-dragula/ng2-dragula.d.ts" />
import { Component, Inject, ViewEncapsulation, EventEmitter, OnChanges, ViewChild, ViewChildren, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
//DIRECTIVAS HTML
import { FormControl, FormGroup, FormControlName } from "@angular/forms";
import { NgModel } from "@angular/forms";
import { NgFor, NgClass } from "@angular/common";

import { VisualItem, FirstVisualItems } from "../generated/models";//HTTPTP
import { RutasService } from '../services/rutas';
import { ClienteApi } from '../services/clienteApi';
import { XemonApiClient } from '../services/XemonApi/xemonApiClient';
//import {ProductosService} from "./productos";//HTTPTP
//PIPES

import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

declare var Notification: any;

@Component({
    selector: "listaVisual",
    // styles: [`.clase{
    //     color:blue;
    // }`],
    styleUrls: ["./listaVisual.css"],
    providers: [
        ClienteApi,
        XemonApiClient
    ],
    // viewProviders: [DragulaService],
    templateUrl: "./listaVisual.html",
    encapsulation: ViewEncapsulation.None
})
export class ListaVisual implements OnChanges, AfterViewInit {

    firstvisualitems: any;

    get items(): any {
        return this.firstvisualitems && this.firstvisualitems.Items || [{ Description: "··" }];
    }
    constructor(
        private _router: Router,
        private _apiClientService: XemonApiClient
    ) {

        let req: FirstVisualItems = <FirstVisualItems>{ cantidad: 2 };
        this._apiClientService.firstvisualitems(req).subscribe(((res: any) => {
            this.firstvisualitems = res
        }).bind(this));
    }
    ngAfterViewInit() {
    }
    ngOnChanges(changes: any) {
        console.dir(changes);
    }
    clicked() {

    }
    icon(item: any): string {
        return "img/icon.png"; 
    }
    _codigo: string = `        
       import {Directive} from '@angular/core';
	   @Directive({
		    selector: 'my-directive', 
		}) 
	   export class MyDirective {  }
    `;
}