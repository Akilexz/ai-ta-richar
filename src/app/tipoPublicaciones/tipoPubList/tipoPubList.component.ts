import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';
import { TipoPublicacionService } from '../../services/tipoPublicacion.service';

@Component({
    selector: 'app-list',
    templateUrl: './tipoPubList.component.html',
    styleUrls: ['./tipoPubList.component.css']
})
export class TipoPubListComponent implements OnInit {

    tipopublicacion: any;
    date: Date;
    multimediaDataService: any;
    buscarTipoPublicacion: any;
    TipoPublicacion: any;
    tipoPublicacion: any;
    constructor(private http: HttpClient, private TipoPublicacionDataService: TipoPublicacionService) { }

    ngOnInit() {
        this.buscarTipoPublicacion();

    }
    buscarPublicacion() {
        this.multimediaDataService.MultimediaListComponent().subscribe(respuesta => {
            this.tipoPublicacion = respuesta;
            alert(JSON.stringify(this.TipoPublicacion));
        },
            err => {
            }
        );
    }
  }
