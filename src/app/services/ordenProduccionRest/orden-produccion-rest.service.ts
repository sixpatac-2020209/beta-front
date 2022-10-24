import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdenProduccionRestService {
  httpOptions = new HttpHeaders({
    'Content-Type': 'application/json',
    //'Authorization': this.credentialReset.getToken(),
  });
  constructor(
    //private credentialReset: CredentialsRestService,
    private http: HttpClient,
  ) { }

  getOrdenes() {
    return this.http.get(environment.baseURI + 'ordenes/getOrdenes', { headers: this.httpOptions });
  }

  getOrden(id: string) {
    return this.http.get(environment.baseURI + 'ordenes/getOrden/' + id, { headers: this.httpOptions })
  }

getDetalleOrden(id: string) {
    return this.http.get(environment.baseURI + 'ordenes/getDetalleOrden/' + id, { headers: this.httpOptions })
  }
getImporteOrden(id: string) {
    return this.http.get(environment.baseURI + 'ordenes/getImporteOrden/' + id, { headers: this.httpOptions })
  }

  createOrden(params: {}) {
    return this.http.post(environment.baseURI + 'ordenes/createOrden', params, { headers: this.httpOptions });
  }

  //////////
  getOrders()
  {
    return this.http.get(environment.baseURI + 'ordenes/getOrders', { headers: this.httpOptions } )
  }


}
