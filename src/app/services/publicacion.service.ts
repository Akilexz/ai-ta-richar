import { Publicacion } from './../models/publicacion';
import { Publicaciones } from './../models/Publicaciones';
import { EditComponent } from './../publicaciones/edit/edit.component';

import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Injectable, Type } from '@angular/core';
import { Observable,  } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { from } from 'rxjs/observable/from';
// import { Publicaciones } from '../models/Publicaciones';




const httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'aplication/json' })
};
const API_URL = 'http://localhost:8080/sisEventosWs/getPublicaciones/';
const API_URL_CREATE = 'http://localhost:8080/sisEventosWs/saveOrUpdatePublicaciones/';
const API_URL_DELATE = 'http://localhost:8080/sisEventosWs/deletePublicaciones/';
const API_URL_EDIT = 'http://localhost:8080/sisEventosWs/editPublicaciones/';
@Injectable()

export class PublicacionService {
    constructor(private http: HttpClient) { }
    // contactos(): Observable<any[]> {
    //     return this.http.get<Publicaciones[]>(API_URL);
    // }

    buscarPublicaciones(): Observable<Publicaciones[]> {
        return this.http.get<Publicaciones[]>(API_URL);
    }
    crearOActualizar(publicaciones: Publicaciones): Observable<Publicaciones[]> {
        return this.http.post<Publicaciones[]>(API_URL_CREATE, publicaciones)
    }
    delatePublicaciones(publicaciones: Publicaciones): Observable<Publicaciones[]> {
        return this.http.post<Publicaciones[]>(API_URL_DELATE, publicaciones)
    }
    editPublicaciones(publicaciones: Publicaciones): Observable<Publicaciones[]> {
        return this.http.post<Publicaciones[]>(API_URL_EDIT, publicaciones)

    }
    // updateContacto(key, contacto) {
    //     this.contactos.update(key, contacto);
    // }
}
