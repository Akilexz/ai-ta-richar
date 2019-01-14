import { Component, OnInit, Injectable } from '@angular/core';
import { OpcionService } from '../../services/opcion.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';
import { PublicacionService } from '../../services/publicacion.service';

@Component({
    selector: 'app-list',
    templateUrl: './opcionList.component.html',
    styleUrls: ['./opcionList.component.css']
})
export class OpcionListComponent implements OnInit {

    opcion: any;
    date: Date;
    constructor(private http: HttpClient, private opcionDataService: OpcionService) { }

    ngOnInit() {
        this.buscarOpcion();

    }
    buscarOpcion() {
        this.opcionDataService.buscarOpciones().subscribe(respuesta => {
            this.opcion = respuesta;
            alert(JSON.stringify(this.opcion));
        },
            err => {
            }
        );
    }
}
