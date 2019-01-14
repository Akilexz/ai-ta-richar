import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';
import { PublicacionService } from '../../services/publicacion.service';
import { DetalleService } from 'app/services/detalle.service';

@Component({
  selector: 'app-edit',
  templateUrl: './detalleEdit.component.html',
  styleUrls: ['./detlleEdit.component.css']
})
export class DetalleEditComponent implements OnInit {

  detalle: any;
    date: Date;
    constructor(private http: HttpClient, private DetalleDataService: DetalleService) { }

    ngOnInit() {
        this.buscarDetalle();

    }
    buscarDetalle() {
        this.DetalleDataService.buscarDetalle().subscribe(respuesta => {
            this.detalle = respuesta;
            alert(JSON.stringify(this.detalle));
        },
            err => {
            }
        );
    }
}
