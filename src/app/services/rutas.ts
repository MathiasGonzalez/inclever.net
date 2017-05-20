import {Injectable}
from '@angular/core'
// import { provideRouter, RouterConfig} from '@angular/router';
import { Routes, RouterModule, provideRoutes, Route } from '@angular/router';
import {Canvas1} from "../canvas/canvas1"
import {Main} from "../app.module";
import { Codigo } from '../Codigo/codigo';
import { ListaVisual } from '../ListaVisual/listaVisual';
import { Detalle } from '../Detalle/detalle';
import { AppComponent } from '../app.component';
import { Display } from '../canvas/display/display';


export class RutasService {
    constructor() {

    }
    public static get RUTAS(): Route[] {      
        return [
            <Route>{ path: '', name: 'Main1', component: Main } ,   
            <Route>{ path: 'canvas', name: 'Canvas', component: Canvas1 },
            <Route>{ path: 'detalle', name: 'detalle', component: Detalle },
            <Route>{ path: 'listaVisual', name: 'listaVisual', component: ListaVisual },
            <Route>{ path: 'home', name: 'Main', component: Main }     
            //{ path: 'home', name: 'Main', component: Main },
           //rut
        ];
    }
}
 export const  rut= {
    path : "Main",
    component : Main,
    name : "Main",
    index : true,
    //children: [
     // { path: '/', component: Main, index: true },
     // { path: '/:id', component: Main, canDeactivate: [{}] }
   // ]
  };
const routes: Route[] = RutasService.RUTAS;
export const APP_ROUTER_PROVIDERS = [
  provideRoutes(routes)
];
export const routing = RouterModule.forRoot(routes);