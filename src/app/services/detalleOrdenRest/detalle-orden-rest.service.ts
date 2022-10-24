import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DetalleOrdenRestService {
  httpOptions = new HttpHeaders({
    'Content-Type': 'application/json',
    //'Authorization': this.credentialReset.getToken(),
  });
  constructor(
    //private credentialReset: CredentialsRestService,
    private http: HttpClient,
  ) { }

  getDetalleArticulo(id: string) {
    return this.http.get(environment.baseURI + 'detalleProcesos/getDetalleProceso/' + id, { headers: this.httpOptions })
  }
}
