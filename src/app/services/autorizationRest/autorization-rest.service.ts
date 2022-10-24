import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutorizationRestService {
  httpOptions = new HttpHeaders({
    'Content-Type': 'application/json',
    //'Authorization': this.credentialReset.getToken(),
  });
  constructor(
    //private credentialReset: CredentialsRestService,
    private http: HttpClient,
  ) { }

  getAutorizaciones() {
    return this.http.get(environment.baseURI + 'autorizaciones/getAutorizaciones', { headers: this.httpOptions })
  }

  getAutorizacion(id: string) {
    return this.http.get(environment.baseURI + 'autorizaciones/getAutorizacion/' + id, { headers: this.httpOptions })
  }

  getDetalleAutorizacion(id: string) {
    return this.http.get(environment.baseURI + 'autorizaciones/getDetalleAutorizacion/' + id, { headers: this.httpOptions })
  }

  getImporteAutorizacion(id: string) {
    return this.http.get(environment.baseURI + 'autorizaciones/getImporteAutorizacion/' + id, { headers: this.httpOptions })
  }

  autorizar(id: string, params: {}) {
    return this.http.put(environment.baseURI + 'autorizaciones/autorizar/' + id, params, { headers: this.httpOptions })
  }
  rechazar(id: string) {
    return this.http.delete(environment.baseURI + 'autorizaciones/rechazar/' + id, { headers: this.httpOptions })
  }

}