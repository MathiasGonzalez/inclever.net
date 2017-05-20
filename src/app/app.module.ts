import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { Routes, RouterModule, provideRoutes, Route } from '@angular/router';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ContenedorBase } from './contenedor/contenedorBase';
import { Contenedor } from './contenedor/contenedor';
import { Codigo } from './Codigo/codigo';
import { Main } from './Main/main';
import { ListaVisual } from './ListaVisual/listaVisual';
import { Detalle } from './Detalle/detalle';
import { routing, RutasService } from "./services/rutas";
import { AppComponent } from './app.component';
import { Display } from './canvas/display/display';
import { Canvas1 } from './canvas/canvas1';




export * from './Main/main';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        BrowserAnimationsModule,
        // routing,
        // RouterModule.forRoot(RutasService.RUTAS),
        RouterModule.forRoot([
            <Route>{ path: '', name: 'Main1', component: Main } ,   
            <Route>{ path: 'canvas', name: 'Canvas', component: Canvas1 },
            <Route>{ path: 'detalle', name: 'detalle', component: Detalle },
            <Route>{ path: 'listaVisual', name: 'listaVisual', component: ListaVisual },
            <Route>{ path: 'home', name: 'Main', component: Main }    ,
            <Route>{ path: 'main', name: 'Main2', component: Main }       
        ],{ useHash: true, enableTracing: true }),  
        MaterialModule,
    ],
    exports: [Main],
    entryComponents: [Contenedor, Main],
    declarations: [ContenedorBase,Contenedor, Codigo, Main, Detalle, ListaVisual, Display, Canvas1, AppComponent],
    providers:
    [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        //ApiClientService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
//available in SDK installer. Java library file C:\Users\tito\AppData\Local\Xamarin\Xamarin.Android.Support.v7.MediaRouter\23.3.0.0\content\classes.jar doesn't exist.	Angular4.Droid			
