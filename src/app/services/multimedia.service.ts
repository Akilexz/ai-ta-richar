
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Injectable, Type } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Multimedia } from '../models/Multimedia';




const httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'aplication/json' })
};
const API_URL = 'http://localhost:8080/sisEventosWs/getMultimedia/';
const API_URL_CREATE = 'http://localhost:8080/sisEventosWs/saveOrUpdateMultimedia/';
const API_URL_DELATE = 'http://localhost:8080/sisEventosWs/deleteMultimedia/';
@Injectable()

export class MultimediaService {
    apiUrl: string;
    constructor(private http: HttpClient) { }


    buscarMultimedia(): Observable<Multimedia[]> {
        return this.http.get<Multimedia[]>(API_URL);
    }
    crearOActualizar(multimedia: Multimedia): Observable<Multimedia[]> {
        return this.http.post<Multimedia[]>(API_URL_CREATE, multimedia);
    }
    delateMultimedia(multimedia: Multimedia): Observable<Multimedia[]> {
        return this.http.post<Multimedia[]>(API_URL_DELATE, multimedia);
    }
}

