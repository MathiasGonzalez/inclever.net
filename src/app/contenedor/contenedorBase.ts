
import { Component, Inject, NgZone, ViewChild, AfterViewInit } from '@angular/core';
//import {Router  } from "@angular/router";
import { RouterOutlet, Router } from '@angular/router';
import {
    LocationStrategy,
    HashLocationStrategy
} from '@angular/common';
import { RutasService } from '../services/rutas';
import { MdSidenav } from "@angular/material"

import { Canvas1 } from "../canvas/canvas1"

@Component({
    selector: "contenedor-base",
    styleUrls: ["./contenedor.css"],
    templateUrl: "./contenedor.html",
})
export class ContenedorBase implements AfterViewInit {
    @ViewChild("sidenav") sidenav: MdSidenav;
    public params: any;
    queryStringProperties: string[];
    constructor(
        private _router: Router, private _ngZone: NgZone
    ) {
        this._router.navigate(["main"]).then((navigationResult: any) => { console.log(navigationResult) });
        this.getParams();
    }
    getParams() {
        this._router &&
            this._router.routerState &&
            this._router.routerState.root.queryParams &&
            this._router.routerState.root.queryParams.subscribe(
                ((x: any) => {
                    this.queryStringProperties = x && <string[]>Reflect.ownKeys(x);
                    this.params = x;
                    console.log(x)

                }).bind(this)
            );
    }
    getParamValue(param: string): string {
        return Reflect.get(this.params, param);
    }
    get showTitle(): boolean {
        return this.getParamValue("showTitle") === "true";
    }
    get showBorder(): boolean {
        return this.getParamValue("showBorder") === "true";
    }
    showSideNav() {
        this.sidenav.open();
    }
    ngAfterViewInit() {
        console.log(this.sidenav);
    }
}