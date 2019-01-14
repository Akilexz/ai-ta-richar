import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FileUploadModule} from 'primeng/fileupload';
import { DestinoService } from 'app/services/destino.service';

@Component({
    selector: 'app-list',
    templateUrl: './destinoList.component.html',
    styleUrls: ['./destinoList.component.css']
})
export class DestinoListComponent implements OnInit {

    destinos: any;

    constructor(private destinoDataService: DestinoService) { }

    ngOnInit() {
        this.buscarDestino();

    }
    buscarDestino() {
        this.destinoDataService.buscarDestino().subscribe(respuesta => {
            this.destinos = respuesta;
            console.log(JSON.stringify(this.destinos));
        },
            () => {
            }
        );
    }
}
