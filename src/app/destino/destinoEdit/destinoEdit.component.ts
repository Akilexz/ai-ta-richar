import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';
import { PublicacionService } from '../../services/publicacion.service';
import { DestinoService } from 'app/services/destino.service';
@Component({
  selector: 'app-edit',
  templateUrl: './destinoEdit.component.html',
  styleUrls: ['./destinoEdit.component.css']
})
export class DestinoEditComponent implements OnInit {

  destino: any;
  date: Date;
  constructor(private http: HttpClient, private destinoDataService: DestinoService) { }

  ngOnInit() {
      this.buscarDestino();

  }
  buscarDestino() {
      this.destinoDataService.buscarDestino().subscribe(respuesta => {
          this.destino = respuesta;
          alert(JSON.stringify(this.destino));
      },
          err => {
          }
      );
  }
}

