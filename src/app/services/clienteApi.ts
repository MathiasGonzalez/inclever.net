import {  Http, Response, RequestOptionsArgs, RequestOptions, RequestMethod, ResponseType, Headers, ResponseContentType, URLSearchParams } from "@angular/http";

import { Injectable, Inject, ReflectiveInjector } from '@angular/core';

import { BaseService } from "./baseService";
import { Compression } from "./compression";

import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';


/**
 * 
 *    headers.append("BACKEND", "Db");
       headers.append("BACKEND", "DummyImplementation");
 * @export
 * @class BackendType
/ */
export class BackendType {    
    static get Db(): string {
        return "Db";
    }
    static get DummyImplementation(): string {
        return "DummyImplementation";
    }
}
export interface BaseRequestOptions {
    compress?:boolean,
    backendType?: string,
    customHttpHeaders?: {header: string, value: string}[];
    longPath?:boolean
}

export class BaseRequest {
    options: BaseRequestOptions;
    search: string;
    constructor(options?: BaseRequestOptions) {
        this.options = options;
    }
}

@Injectable()
export class ClienteApi extends BaseService {
    _http: Http;
    compressionHelper: Compression;
    server: string = "http://localhost/WebAccesApi";
    //baseApiUri: string = "http://inclever.net/XemonApi/api/";
    //baseApiUri: string = "http://192.168.1.6:80/XemonApi/api/";
        baseApiUri: string = "http://192.168.1.10:80/Angular4Api/api/";
    
    
    //baseApiUri: string = "http://localhost/WebAccesApi/api/";
    // baseApiUri: string = "http://inclever.net/WebAccesApi/api/";
    //baseApiUri: string = "http://webaccessapi.azurewebsites.net/api/";
    constructor( @Inject(Http) http: Http) {
        super();
        this._http = http;
        this.compressionHelper = new Compression();
    }

    execGET(resource: string, search?: any, requestOptions?: BaseRequestOptions): Observable<any> {

        let url: string = this.baseApiUri + resource;
        let options: RequestOptionsArgs = {};//RequestOptionsArgs
        let headers: Headers = new Headers();

        if (this.isNull(resource)) {
            return;
        }

        localStorage.setItem("DEV_KEY", "clave");

        let clave = localStorage.getItem("DEV_KEY");

        headers.append("BACKEND", "Db");
        if (this.isNotNull(requestOptions)) {
            // CONFIGURAR BACKEND
            if (this.isNotNull(requestOptions.backendType)) {
                headers.set("BACKEND", <string>requestOptions.backendType);
            }
            if (this.isNotNull(requestOptions.customHttpHeaders)) {
                requestOptions.customHttpHeaders.forEach((h: { header: string, value: string }) => {
                    headers.append(h.header, h.value);
                });
            }
            //COMPRESSION   
            if (this.isNotNull(requestOptions.compress)) {
                if (requestOptions.compress) {
                    headers.append("compress", "true");
                    search = this.compressionHelper.compress(search);
                }
            }
            if(requestOptions.longPath){
                url = this.server + resource;
            }
        }



        headers.append("DEV_KEY", clave)


        options.method = RequestMethod.Get;
        //options.responseType = ResponseContentType.Json;
        options.headers = headers;
        let params: URLSearchParams = new URLSearchParams();
        
        for(let p in search){
            params.set(p, search[p]);
        }      
     

        options.search = params;
        return this._http.request(url, options);
    }
    execPOST(resource: string, search?: string, payload?: any, requestOptions?: BaseRequestOptions): Observable<any> {

        let url: string = this.baseApiUri + resource;
        let options: RequestOptionsArgs = {};
        let headers: Headers = new Headers();
        let body:any;

        if (this.common.isNull(resource)) {
            return;
        }
       

        localStorage.setItem("DEV_KEY", "clave");

        let clave = localStorage.getItem("DEV_KEY");

        headers.append("DEV_KEY", clave)
        headers.append("Content-Type", "application/json");

        options.method = RequestMethod.Post;

        body = JSON.stringify(payload);

         headers.append("BACKEND", "Db");
        if (this.isNotNull(requestOptions)) {
            // CONFIGURAR BACKEND
            if (this.isNotNull(requestOptions.backendType)) {
                headers.set("BACKEND", <string>requestOptions.backendType);
            }
            if (this.isNotNull(requestOptions.customHttpHeaders)) {
                requestOptions.customHttpHeaders.forEach((h: { header: string, value: string }) => {
                    headers.append(h.header, h.value);
                });
            }
            //COMPRESSION   
            if (this.isNotNull(requestOptions.compress)) {
                if (requestOptions.compress) {
                    headers.append("compress", "true");
                    search = this.compressionHelper.compress(search);
                    body= this.compressionHelper.compressBody(body);
                }
            }
            if(requestOptions.longPath){
                url = this.server + resource;
            }
        }

        options.headers = headers;
        //options.search = search;
        options.body = body;

        return this._http.request(url, options);
    }   
    post(resource: string, search?: string, payload?: any, requestOptions?: BaseRequestOptions){
        return this.execPOST(resource, search, payload, requestOptions);
    }
    get(resource: string, search?: string, requestOptions?: BaseRequestOptions){
        return this.execGET(resource, search, requestOptions);
    }
}