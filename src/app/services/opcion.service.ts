
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Injectable, Type } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Opcion } from '../models/Opcion';




const httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'aplication/json' })
};
const API_URL = 'http://localhost:8080/sisEventosWs/getOpcion/';
const API_URL_CREATE = 'http://localhost:8080/sisEventosWs/saveOrUpdateOpcion/';
const API_URL_DELATE = 'http://localhost:8080/sisEventosWs/deleteMultimedia/';
@Injectable()

export class OpcionService {
    apiUrl: string;
    constructor(private http: HttpClient) { }


    buscarOpciones(): Observable<Opcion[]> {
        return this.http.get<Opcion[]>(API_URL);
    }
    crearOActualizar(opcion: Opcion): Observable<Opcion[]> {
        return this.http.post<Opcion[]>(API_URL_CREATE, opcion);
    }
    delateOpcion(opcion: Opcion): Observable<Opcion[]> {
        return this.http.post<Opcion[]>(API_URL_DELATE, opcion);
    }
}
