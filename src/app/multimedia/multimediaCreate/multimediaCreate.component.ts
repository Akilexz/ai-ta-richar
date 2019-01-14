import { Component, OnInit } from '@angular/core';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload' ;


const postgrsql = 'http://postgresql/localhost:5432/eventos/';
const API_URL = postgrsql;
;

@Component({
  selector: 'app-create',
  templateUrl: './multimediaCreate.component.html',
  styleUrls: ['./multimediaCreate.component.css']
})
export class MultimediaCreateComponent implements OnInit {

  public uploader: FileUploader = new FileUploader({url: 'URL', itemAlias: 'photo'});

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('ImageUpload:uploaded:', item, status, response);
         alert('File uploaded successfully');
     };
 }
}
