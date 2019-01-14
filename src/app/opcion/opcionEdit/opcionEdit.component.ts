import { Component, OnInit } from '@angular/core';
import { OpcionService } from '../../services/opcion.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';
import { PublicacionService } from '../../services/publicacion.service';
import { DestinoService } from 'app/services/destino.service';

@Component({
  selector: 'app-edit',
  templateUrl: './opcionEdit.component.html',
  styleUrls: ['./opcionEdit.component.css']
})
export class OpcionEditComponent implements OnInit {

  opcion: any;
  date: Date;
  multimediaDataService: any;
  constructor(private http: HttpClient, private OpcionDataService: OpcionService) { }

  ngOnInit() {
      this.buscarOpcion();

  }
  buscarOpcion() {
      this.multimediaDataService.MultimediaListComponent().subscribe(respuesta => {
          this.opcion = respuesta;
          alert(JSON.stringify(this.opcion));
      },
          err => {
          }
      );
  }
}
