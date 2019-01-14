import { Publicaciones } from './../../models/Publicaciones';
import { PublicacionesModule } from './../../tipoPublicaciones/tipoPublicaciones.module';
import { Component, OnInit, Injectable , Input, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';
import { PublicacionService } from '../../services/publicacion.service';
// import {FormBuilder , FormGroup} from '@angular/forms';
import swal from 'sweetalert2';
// import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-list',
  templateUrl: './List.component.html',
  styleUrls: ['./List.component.css']
})
export class ListComponent implements OnInit {
  PublicacionService: any;
  // @Input() set contacto(valor) {
  //   this.crearFormulario();
  //   if (valor) {
  //     this.contactoOriginal = valor;
  //     this.form.patchValue({
  //       Nombre: valor.Nombre,
  //       Texto: valor.Texto,
  //       Prioridad: valor.Prioridad,
  //       Fecha: valor.Fecha,
  //       Tipo: valor.Tipo
  //     })
  //   }
  // }
  // @Output() cerrar = new EventEmitter();
  publicaciones: any;
  // form: FormGroup;
  // contactoOriginal: any;
  Swal: any;
  date: Date;
  constructor(
    private http: HttpClient,
    private publicacionDataService: PublicacionService,
    // private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.buscarPublicaciones();
    // this.crearFormulario();
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
  delatePublicaciones(publicacion: Publicaciones) {
    if (publicacion === undefined) {return; }
    this.publicacionDataService.delatePublicaciones(publicacion)
    .subscribe(
        response => {
          const swalWithBootstrapButtons = swal.mixin({
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            buttonsStyling: false,
          })
          swalWithBootstrapButtons({
            title: '¿Estás seguro?',
            text: '¡No podrás revertir esto!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: '¡Sí, bórralo!',
            cancelButtonText: 'No, cancelalo!',
            reverseButtons: true
          }).then((result) => {
            if (result.value) {
              swalWithBootstrapButtons(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            } else if (
              // Read more about handling dismissals
              result.dismiss === swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons(
                'Cancelled',
                'Your imaginary file is safe :)',
                'error'
              )
            }
          })
        }
    );
  }
  // editPublicaciones(key, publicaciones) {
  //   this.publicaciones.edit (key)
  // }
  // crearFormulario() {
  //   this.form = this.fb.group({
  //     Nombre: '',
  //     Texto: '',
  //     Prioridad: '',
  //     Fecha: '',
  //     Tipo: ''
  //   })
  // }
  //   onGuardar() {
  //     this.PublicacionService.editPublicacion(this.contactoOriginal.$key, this.form.value);
  //     this.onCancelar();
  //   }
  //   onCancelar() {
  //     this.contactoOriginal = null;
  //     this.cerrar.emit();
  //   }
}
