import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs';
import {Validadordocumentos} from './validadordocumentos';

@Injectable({
  providedIn: 'root'
})
export class ValidadordocumentosService {

  private url: string = "http://172.22.220.126:8099/api/validarDocumentoPdf?nombreDocumentoPDF=";

  constructor(private http: HttpClient) {
  }

  //optener los pdf en formato base64
  getvalidadorpdf(nombrepdf) {
    return this.http.get(this.url + nombrepdf);
  }
}
