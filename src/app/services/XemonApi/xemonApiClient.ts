
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs/RX";
import { BaseRequest , BaseRequestOptions, ClienteApi } from "../../services/clienteApi"
import {VisualItem, FirstVisualItems, AddVisualItems} from "../../generated/models";//HTTPTP
@Injectable()
export class XemonApiClient  {
    get controllerName(): string {
        return "interactions";
    }


    clienteAPi: ClienteApi;
    constructor( @Inject(ClienteApi) _clienteAPi: ClienteApi) {
        this.clienteAPi = _clienteAPi;
    }


    firstvisualitems(request: FirstVisualItems,options?:BaseRequestOptions): Observable<any> {
        return this.clienteAPi
            .execGET("visualitems/first", request, options)
            .map(res => res.json());
    }    
}