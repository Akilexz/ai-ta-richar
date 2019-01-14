

import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Injectable, Type } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Detalle } from '../models/Detalle'




const httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'aplication/json' })
};
const API_URL = 'http://localhost:8080/sisEventosWs/getDetalleMultimedia/';
const API_URL_CREATE = 'http://localhost:8080/sisEventosWs/saveOrUpdateDetalleMultimedia/';
const API_URL_DELATE = 'http://localhost:8080/sisEventosWs/deleteDetalleMultimedia/';

@Injectable()

export class DetalleService {
    apiUrl: string;
    constructor(private http: HttpClient) { }


    buscarDetalle(): Observable<Detalle[]> {
        return this.http.get<Detalle[]>(API_URL);
    }
    crearOActualizarDestino(detalle: Detalle): Observable<Detalle[]> {
        return this.http.post<Detalle[]>(API_URL_CREATE, detalle);
    }
    delateDetalleMultimedia(detalleMultimedia: Detalle): Observable<Detalle[]> {
        return this.http.post<Detalle[]>(API_URL_DELATE, detalleMultimedia);
    }
}
