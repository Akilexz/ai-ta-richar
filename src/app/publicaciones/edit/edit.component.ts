import { Component, OnInit, Injectable , Input, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';
import { PublicacionService } from '../../services/publicacion.service';
import {FormBuilder , FormGroup} from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './Edit.component.html',
  styleUrls: ['./Edit.component.css']
})
export class EditComponent implements OnInit {
  PublicacionService: any;
  @Input() set contacto(valor) {
    this.crearFormulario();
    if (valor) {
      this.contactoOriginal = valor;
      this.form.patchValue({
        Nombre: valor.Nombre,
        Texto: valor.Texto,
        Prioridad: valor.Prioridad,
        Fecha: valor.Fecha,
        Tipo: valor.Tipo
      })
    }
  }
  @Output() cerrar = new EventEmitter();
  publicaciones: any;
  form: FormGroup;
  contactoOriginal: any;

  constructor(
    private http: HttpClient,
    private publicacionDataService: PublicacionService,
    private fb: FormBuilder
  ) {}
    ngOnInit() {
      this.crearFormulario();
    }
    crearFormulario() {
      this.form = this.fb.group({
        Nombre: '',
        Texto: '',
        Prioridad: '',
        Fecha: '',
        Tipo: ''
      })
    }
    onGuardar() {
      this.PublicacionService.editPublicacion(this.contactoOriginal.$key, this.form.value);
      this.onCancelar();

    }
    onCancelar() {
      this.contactoOriginal = null;
      this.cerrar.emit();
    }
}
