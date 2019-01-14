import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';
import { PublicacionService } from '../../services/publicacion.service';
import { MultimediaService } from '../../services/multimedia.service';
import { Multimedia } from '../../models/Multimedia';
import { FileSelectDirective } from 'ng2-file-upload';
@Component({
    selector: 'app-list',
    templateUrl: './multimediaList.component.html',
    styleUrls: ['./multimediaList.component.css']
})
export class MultimediaListComponent implements OnInit {

    multimedia: any;
    date: Date;
    multimediaDataService: any;
    constructor(private http: HttpClient, private MultimediaDataService: MultimediaService) { }

    ngOnInit() {
        this.buscarMultimedia();

    }
    buscarMultimedia() {
        this.multimediaDataService.MultimediaListComponent().subscribe(respuesta => {
            this.multimedia = respuesta;
            alert(JSON.stringify(this.multimedia));
        },
            err => {
            }
        );
    }
}
