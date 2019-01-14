import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';
import { MultimediaService } from '../../services/multimedia.service';
import { Multimedia } from '../../models/Multimedia';

@Component({
  selector: 'app-edit',
  templateUrl: './multimediaEdit.component.html',
  styleUrls: ['./multimediaEdit.component.css']
})
export class MultimediaEditComponent implements OnInit {

  multimedia: any;
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
