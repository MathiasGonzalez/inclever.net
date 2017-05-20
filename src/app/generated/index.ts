/* tslint:disable */
import { Injectable,Inject } from '@angular/core';
import {ClienteApi, BaseRequestOptions, BaseRequest} from "../services/clienteApi";
import { Http, Response, Headers } from '@angular/http';
import { FirstVisualItems, VisualItem, VisualItemType, AddVisualItems } from './models';

import { Observable} from  "rxjs/RX";
import 'rxjs/Rx';


@Injectable()
/**
 * Created with angular2-swagger-client-generator v
 */
export class ApiClientService {
	domain:string;
  

	clienteAPi: ClienteApi;
    constructor( @Inject(ClienteApi) _clienteAPi: ClienteApi) {
        this.clienteAPi = _clienteAPi;
    }

  /*constructor(public http: Http){
    this.domain = 'http://192.168.1.6/XemonAPI';
  }*/
  /*
	constructor(public http: Http, options?: any) {
		var domain = (typeof options === 'object') ? options.domain : options;
		this.domain = typeof(domain) === 'string' ? domain : 'http://192.168.1.6/XemonAPI';
		
		if(this.domain.length === 0) {
			throw new Error('Domain parameter must be specified as a string.');
		}
		
	}
  */


	/**
  *
	* @method
	* @name Console_GenerateScheme
	* 
	*/
    /*
    Console
	public Console_GenerateScheme() {
    
    public Console_GenerateScheme(request : Console , options?:BaseRequestOptions) {*/
	public Console_GenerateScheme(request : any , options?:BaseRequestOptions) {
		let payload = {};	
		let queryParameters = {};
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');		

		let uri = "/api/Console/GenerateScheme";


		if(!options){
			options= {};
		}
		options.longPath = true;
	  
      /*
		return this.http
			.get(this.domain + uri, { headers: headers, params: queryParameters })
			.map((res: Response) => {
        return res; });
*/
        return this.clienteAPi
            .get(uri, JSON.stringify(request), options)
            .map(res => res.json());

     
	}
	
	/**
  *
	* @method
	* @name VisualItems_First
	* @param {string} InputSearchDate - 
	* @param {integer} InputCantidad - 
	* @param {array} InputItems - 
	* 
	*/
    /*
    VisualItems
	public VisualItems_First(InputSearchDate: string, InputCantidad: number, InputItems: array) {
    
    public VisualItems_First(request : VisualItems , options?:BaseRequestOptions) {*/
	public VisualItems_First(request : any , options?:BaseRequestOptions) {
		let payload = {};	
		let queryParameters = {};
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');		

		let uri = "/api/VisualItems/First";


		if(!options){
			options= {};
		}
		options.longPath = true;
	  
      /*
		return this.http
			.get(this.domain + uri, { headers: headers, params: queryParameters })
			.map((res: Response) => {
        return res; });
*/
        return this.clienteAPi
            .get(uri, JSON.stringify(request), options)
            .map(res => res.json());

     
	}
	
	/**
  *
	* @method
	* @name VisualItems_AddVisualItems
	* @param {AddVisualItems} input - 
	* 
	*/
    /*
    VisualItems
	public VisualItems_AddVisualItems(input: AddVisualItems) {
    
    public VisualItems_AddVisualItems(request : VisualItems , options?:BaseRequestOptions) {*/
	public VisualItems_AddVisualItems(request : any , options?:BaseRequestOptions) {
		let payload = {};	
		let queryParameters = {};
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');		

		let uri = "/api/VisualItems/AddVisualItems";


		if(!options){
			options= {};
		}
		options.longPath = true;
	  
      /*
		return this.http
			.post(this.domain + uri, JSON.stringify(input), { headers: headers, params: queryParameters })
			.map((res: Response) => {
        return res; });
*/
        return this.clienteAPi
            .post(uri, JSON.stringify(request),JSON.stringify(request), options)
            .map(res => res.json());

     
	}
	

}
