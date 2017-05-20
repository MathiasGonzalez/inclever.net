// <reference path="../node_modules/clone/clone.d.ts" />
// <reference path="../node_modules/ng2-dragula/ng2-dragula.d.ts" />
import { Component, Inject, ViewEncapsulation, EventEmitter, OnChanges, ViewChild, ViewChildren, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
//DIRECTIVAS HTML
import { FormControl, FormGroup, FormControlName } from "@angular/forms";
import { NgModel } from "@angular/forms";
import { NgFor, NgClass } from "@angular/common";


import { RutasService } from '../services/rutas';
import { ClienteApi } from '../services/clienteApi';
import { XemonApiClient } from '../services/XemonApi/xemonApiClient';
//import {ProductosService} from "./productos";//HTTPTP
//PIPES

import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

declare var Notification: any;

@Component({
    selector: "main",
    // styles: [`.clase{
    //     color:blue;+
    // }`],
    // styleUrls: ["./detalle.css"],
    providers: [
        ClienteApi,        
        XemonApiClient
    ],
    // viewProviders: [DragulaService],
    templateUrl: "./detalle.html",
    encapsulation: ViewEncapsulation.None
})
export class Detalle implements OnChanges, AfterViewInit {
   constructor(
        public _router: Router,      
        public _apiClientService: XemonApiClient
    ) {

    }
  ngAfterViewInit() {  
    }
        
    ngOnChanges(changes: any) {
        console.dir(changes);
    }
clicked(){
    
}
}