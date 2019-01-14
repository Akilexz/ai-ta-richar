import { Validator } from '@angular/forms';
import { Publicaciones } from './../../models/Publicaciones';
import { PublicacionService } from '../../services/publicacion.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { PublicacionesModule } from './../../Publicaciones/Publicaciones.module';
import { Component, OnInit } from '@angular/core';
import { Publicacion } from '../../models/publicacion';
import { TipoPublicacion } from '../../models/TipoPublicacion';



@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css'],



})
export class CreateComponent implements OnInit {
    nombre = '';
    prioridad = '';
    date = '';
    texto = '';
    lista = '';
    Seleccione = '';
    create: any;
    busy: Promise<any>;
    publicaciones: Publicaciones[];
    entidadSeleccionada: any;
    TipoPublicacion: TipoPublicacion;
    Seleccionada: number;
    Publicacion: any;
    TipoPublicacionSeleccionada: number;
    PublicacionService: any;
    crearOActualizar: any;
    constructor(private http: HttpClient, private publicacionDataService: PublicacionService) { }
    estaSeleccionado(porVerificar): boolean {
        if (this.entidadSeleccionada == null) {
            return false;
        }
        return porVerificar.id === this.entidadSeleccionada.id;
    }
    getTipoPublicacion() {
        this.Publicacion = [];
        this.busy = this.PublicacionService
        .getAll()
        .then(entidadesRecuperadas => {
            if ( JSON.stringify(Publicacion) === 'false' ) {
                return;
            }
            this.TipoPublicacion = entidadesRecuperadas;
            this.TipoPublicacionSeleccionada = 0;
        })
        .catch(error => {

        });
    }

    ngOnInit() {
        this.buscarPublicaciones();

    }
    buscarPublicaciones() {
        this.publicacionDataService.buscarPublicaciones().subscribe(respuesta => {
            this.publicaciones = respuesta;
            console.log(this.publicaciones);
        },
            err => {
            }
        );
    }

    selectOption(publicacion) {
        console.log(publicacion);
    }
    savePublicaciones(publicacion)  {
        const newPublicacion: Publicacion = Object.assign({}, this.Publicacion);
        this.PublicacionService.savePublicaciones(newPublicacion);
        this.create.reset();
        this.Publicacion.Publicaciones(['list'])
    }
}
