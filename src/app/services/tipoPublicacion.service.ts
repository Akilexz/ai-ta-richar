
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Injectable, Type } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { TipoPublicacion } from '../models/TipoPublicacion';




const httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'aplication/json' })
};
const API_URL = 'http://localhost:8080/sisEventosWs/getTipoPublicaciones/';
const API_URL_CREATE = 'http://localhost:8080/sisEventosWs/getTipoPublicaciones/';
const API_URL_DELATE = 'http://localhost:8080/sisEventosWs/deleteTipoPublicaciones/';

@Injectable()

export class TipoPublicacionService {
    [x: string]: any;
    apiUrl: string;
    constructor(private http: HttpClient) { }


    buscarTipoPublicaciones(): Observable<TipoPublicacion[]> {
        return this.http.get<TipoPublicacion[]>(API_URL);
    }
    crearOActualizar(tipoPublicacion: TipoPublicacion): Observable<TipoPublicacion[]> {
        return this.http.post<TipoPublicacion[]>(API_URL_CREATE, tipoPublicacion)
    }
    delateTipoPublicacion(tipoPublicacione: TipoPublicacion): Observable<TipoPublicacion[]> {
return this.http.post<TipoPublicacion[]>(API_URL_DELATE, tipoPublicacione)
    }
}
