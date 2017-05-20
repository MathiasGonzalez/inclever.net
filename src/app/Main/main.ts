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
import { VisualItem, FirstVisualItems } from "../generated/models";//HTTPTP
//PIPES

import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

// declare var Prism: any;
declare var Notification: any;
declare var Prism: any;
@Component({
    selector: "main",
  
    styleUrls: ["./main.css"],

    providers: [
        ClienteApi,
        XemonApiClient
    ],
    // viewProviders: [DragulaService],
   // templateUrl: "app/Main/main.html",
    templateUrl: "./main.html",
    encapsulation: ViewEncapsulation.None
})
export class Main implements OnChanges, AfterViewInit {

    inputNavBar: string = "";
    inputBuscar = new FormControl();
    selectedBackend: string;

    firstvisualitems: FirstVisualItems;

     codigo: string = "p { color : red }";

    get items(): any {
        return this.firstvisualitems && this.firstvisualitems.Items || [{ Description: "··" }];
    }

    constructor(
        private _router: Router,
        private _apiClientService: XemonApiClient
    ) {

        if (Notification.permission !== 'granted') {
            //  Notification.requestPermission().then(this.crearNotificacion());
        } else {
            //  this.crearNotificacion();
        }


        let req: FirstVisualItems = <FirstVisualItems>{ cantidad: 2 };
        this._apiClientService.firstvisualitems(req).subscribe(((res: any) => {
            this.firstvisualitems = res
            console.log(this.firstvisualitems);
        }).bind(this));

         this.codigo = `
         @Component({
            selector: "main"
        })
        class Codigo {
            codeHtml: string = "p { color : red }";
        }
    `
        // console.log(this.codeHtml);
    }
    barClick() {
        this._router.navigateByUrl("detalle")
    }
    clicked(event?: any) {
        // this._router.navigate(["canvas"]);
        this._router.navigateByUrl("canvas?id=ino123")
    }
    ngAfterViewInit() {
        // console.log(this.prodBag);
    }
    // AltaProducto(p: any) {
    //     this.Servicio.PostP(p);
    //     this.Productos = [];
    //     this.Servicio.GetProductos()
    //         .subscribe((res: any) => {
    //             this.Productos = res;
    //         });
    // }
    // toogleOrdenar() {
    //     this.ORDENAR = !this.ORDENAR;
    // }
    // hola() {
    //     this.Servicio.PostProducto().subscribe((res: string) => this.resp = res);
    //     this.Productos = [];
    //     this.Servicio.GetProductos()
    //         .subscribe((res: any) => {
    //             this.Productos = res;
    //         });
    // }
    // altaTarjeta() {

    //     var tar: Tarjeta = {
    //         NroTarjeta: 243234,
    //         Titular: "Julio Rios",
    //         Credito: 55654,
    //         FechaVencimiento: "27/01/2018",
    //         NroCuotas: 12,
    //         NroCuotaAPagar: 2,
    //         Saldo: 987987,
    //         Tipo: "TARJETA",
    //         ID: 1,
    //         Nombre: "Visa Julio Rios",
    //         Alias: "Tarjeta Visa ",
    //         Moneda: {
    //             IdMoneda: 1,
    //             Codigo: 1,
    //             CodMoneda: "USD",
    //             Descripcion: "DOLAR AMERICANO"
    //         },
    //         faicon: "fa-credit-card"
    //     };
    //     this.Servicio.PostTarjeta(tar);

    //     this.Productos = [];
    //     this.Servicio.GetProductos()
    //         .subscribe((res: any) => {
    //             this.Productos = res;
    //         });

    // }
    // prod() {
    //     alert(JSON.stringify(this.Productos));

    // }

    // SeleccionarTipo(value: any) {
    //     this.TIPO = value;

    // }

    // catchNavBarInputChange(e: any) {
    //     console.log(e);
    //     this.inputNavBar = e;
    // }

    ngOnChanges(changes: any) {
        console.dir(changes);
    }

    // getTitulo() {
    //     return { titulo: "xxx" }
    // }
    // Detalle(event: any, pr: any) {
    //     //alert(pr.Nombre+ " ID "+pr.ID);
    //     this.Servicio.iter(pr);

    // }
    // mapProductos(data: any): void {
    //     console.log("dataMap", data);
    //     this.Productos = data[1].concat(data[0]);
    // }
    protected crearNotificacion(cb?: () => void): any {
        let notConf = {
            icon: "img/banner.png",
            body: "bbb",
            title: "tt"
        };
        let notification = new Notification("fsdsdf", notConf);
        return notification;
    }





}