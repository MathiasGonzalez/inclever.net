
import { Component, Inject, NgZone, ViewChild, AfterViewInit } from '@angular/core';
//import {Router  } from "@angular/router";
import { RouterOutlet, Router } from '@angular/router';
import {
    LocationStrategy,
    HashLocationStrategy
} from '@angular/common';
import { RutasService } from '../services/rutas';
import { MdSidenav } from "@angular/material"
import { ContenedorBase } from "./contenedorBase";
import { Canvas1 } from "../canvas/canvas1"

@Component({
    selector: "contenedor",
    styleUrls: ["./contenedor.css"],
    templateUrl: "./contenedor.html",
})
export class Contenedor extends ContenedorBase implements AfterViewInit {
    @ViewChild("sidenav") sidenav: MdSidenav;
    params: any;
    queryStringProperties: string[];
    constructor(
        private router: Router, private ngZone: NgZone
    ) {
        super(router, ngZone);
        this.router.navigate(["main"]).then((navigationResult: any) => { console.log(navigationResult) });
        this.getParams();
    }
    getParams() {
        super.getParams();        
    }   
    
    showSideNav() {
        this.sidenav.open();
    }
    ngAfterViewInit() {
        console.log(this.sidenav);
    }
}