import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { CredentialsRestService } from '../credentialsRest/credentials-rest.service';

@Injectable({
  providedIn: 'root'
})
export class DetalleOrdenRestService {
  httpOptions = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.credentialReset.getToken(),
  });
  constructor(
    private credentialReset: CredentialsRestService,
    private http: HttpClient,
  ) { }

  getDetalleArticulo(id: string) {
    return this.http.get(environment.baseURI + 'detalleProcesos/getDetalleProceso/' + id, { headers: this.httpOptions.set('Authorization', this.credentialReset.getToken()) })
  }

  /** ------------------------------- PROCESOS ------------------------------- **/
  //Corte
  corteVidrio(id: string, params: {}) {
    return this.http.put(environment.baseURI + 'detalleProcesos/corteVidrio/' + id, params, { headers: this.httpOptions });
  }
  corteHoja(id: string, params: {}) {
    return this.http.put(environment.baseURI + 'detalleProcesos/corteHoja/' + id, params, { headers: this.httpOptions });
  }
  corteMarco(id: string, params: {}) {
    return this.http.put(environment.baseURI + 'detalleProcesos/corteMarco/' + id, params, { headers: this.httpOptions });
  }
  corteCedazo(id: string, params: {}) {
    return this.http.put(environment.baseURI + 'detalleProcesos/corteCedazo/' + id, params, { headers: this.httpOptions });
  }


  //Fusion
  fusionHoja(id: string, params: {}) {
    return this.http.put(environment.baseURI + 'detalleProcesos/fusionHoja/' + id, params, { headers: this.httpOptions });
  }
  fusionCedazo(id: string, params: {}) {
    return this.http.put(environment.baseURI + 'detalleProcesos/fusionCedazo/' + id, params, { headers: this.httpOptions });
  }
  fusionMarco(id: string, params: {}) {
    return this.http.put(environment.baseURI + 'detalleProcesos/fusionMarco/' + id, params, { headers: this.httpOptions });
  }
  //Limpieza
  limpiezaHoja(id: string, params: {}) {
    return this.http.put(environment.baseURI + 'detalleProcesos/limpiezaHoja/' + id, params, { headers: this.httpOptions });
  }
  limpiezaMarco(id: string, params: {}) {
    return this.http.put(environment.baseURI + 'detalleProcesos/limpiezaMarco/' + id, params, { headers: this.httpOptions });
  }
  colocacionTela(id: string, params: {}) {
    return this.http.put(environment.baseURI + 'detalleProcesos/colocacionTela/' + id, params, { headers: this.httpOptions });
  }


  //Accesorios
  corteBatiente(id: string, params: {}) {
    return this.http.put(environment.baseURI + 'detalleProcesos/corteBatiente/' + id, params, { headers: this.httpOptions });
  }
  colocacionBatiente(id: string, params: {}) {
    return this.http.put(environment.baseURI + 'detalleProcesos/colocacionBatiente/' + id, params, { headers: this.httpOptions });
  }
  tapajambas(id: string, params: {}) {
    return this.http.put(environment.baseURI + 'detalleProcesos/tapajambas/' + id, params, { headers: this.httpOptions });
  }
  reticula(id: string, params: {}) {
    return this.http.put(environment.baseURI + 'detalleProcesos/reticula/' + id, params, { headers: this.httpOptions });
  }

}
