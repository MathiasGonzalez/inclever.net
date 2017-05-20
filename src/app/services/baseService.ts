
import {  Http, Response, Headers, RequestOptionsArgs, RequestOptions, RequestMethod, ResponseType} from "@angular/http";

import {Injectable, Inject, ReflectiveInjector} from '@angular/core';

import "rxjs/RX";
import 'rxjs/add/operator/map';

import {Common} from "./common"


export class BaseService {

    protected common: Common;
    protected injector: ReflectiveInjector;
    constructor() {
        this.injector = ReflectiveInjector.resolveAndCreate([Common])
        this.common = this.injector.get(Common);
    }
    isNull(val:any):boolean{
        return this.common && this.common.isNull(val);
    }
    isNotNull(val:any):boolean{
        return this.common && this.common.isNotNull(val);
    }



}