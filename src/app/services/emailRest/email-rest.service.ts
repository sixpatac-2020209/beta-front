import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailRestService {
  httpOptions = new HttpHeaders({
    'Content-Type': 'application/json',
    //'Authorization': this.credentialReset.getToken(),
  });
  constructor(
    //private credentialReset: CredentialsRestService,
    private http: HttpClient,
  ) { }

  confirmarOrden(id: string, params: {}) {
    return this.http.put(environment.baseURI + 'email/confirmarOrden/' + id, params, { headers: this.httpOptions })
  }

  corregirOrden(id: string, params: {}) {
    return this.http.put(environment.baseURI + 'email/correccionOrden/' + id, params, { headers: this.httpOptions })
  }

  rechazarOrden(id: string, params:{}) {
    return this.http.put(environment.baseURI + 'email/rechazarOrden/' + id, params, { headers: this.httpOptions })
  }

}
