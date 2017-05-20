
//import {Component} from 'angular2/core';
import {  Http} from "@angular/http";
import {Injectable,Inject} from '@angular/core';
import 'rxjs/add/operator/map';

export class Usuario {
        IdUsuario: number;
        Nombre: string;
        Apellido: string;
        FechaUltAcceso: string;
        FotoUrl: string;
        Telefono: string;
        Email: string;
    }

@Injectable()
export class UsuariosService {

    
    _http:any;

    constructor(@Inject(Http) http: Http) 
    {
        this._http = http;  
    }
    GetUsuario()
    {       
        return this._http.get('http://localhost/DummyApi/api/usuarios')
            .map((responseData:any) => {
                return responseData.json();
            });      
    }
    // PostProducto(Prod){
    //     this._http.post('http://localhost/DummyApi/api/Productos',Prod);
    //     
    // }
    
}