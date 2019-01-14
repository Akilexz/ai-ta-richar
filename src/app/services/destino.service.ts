import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Destino } from '../models/Destino';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'aplication/json' })
};
const API_URL = 'http://localhost:8080/sisEventosWs/getDestinos/';
const API_URL_CREATE = 'http://localhost:8080/sisEventosWs/saveOrUpdate/';
const API_URL_DELATE = 'http://localhost:8080/sisEventosWs/deleteDestinos/';
@Injectable()

export class DestinoService {
    apiUrl: string;
    constructor(private http: HttpClient) { }


    buscarDestino(): Observable<Destino[]> {
        return this.http.get<Destino[]>(API_URL);
    }
    crearOActualizarDestino(destino: Destino): Observable<Destino[]> {
        return this.http.post<Destino[]>(API_URL_CREATE, destino);
    }
    delateDestino(destino: Destino): Observable<Destino[]> {
        return this.http.post<Destino[]>(API_URL_DELATE, destino);
    }
}
