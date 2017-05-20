//DIRECTIVAS ESCENCIALES
import {Component, Inject, ViewEncapsulation, EventEmitter, OnChanges   } from '@angular/core';
//DIRECTIVAS HTML
import {NgFor, NgClass} from "@angular/common";
//import {ProductosService} from "./productos";//HTTPTP
//PIPES
import {MdDialog, MdDialogRef, MdSnackBar} from '@angular/material';

import {Contenedor} from './contenedor/contenedor'

import { Observable} from  'rxjs/Rx';
import 'rxjs/Rx';
import {RutasService} from './services/rutas';
@Component({
    selector: 'app-root',   
    //template: '<h1>ADC TEST</h1>'
    styles: [`.clase{
        color:blue;
    }`],
       providers: [],
    templateUrl: "./app.component.html",
    encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent implements OnChanges {

    TituloNavBar: { texto: string };

    var: string | null;

    constructor() {
      
    }


    catchNavBarInputChange(e: any) {
        console.log(e);
        // this.inputNavBar = e;
    }

    ngOnChanges(changes: any) {
        console.dir(changes);
    }



}