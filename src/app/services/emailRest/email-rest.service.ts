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

  confirmarOrden(id: string) {
    return this.http.get(environment.baseURI + 'email/confirmarOrden/' + id, { headers: this.httpOptions })
  }

  corregirOrden(id: string) {
    return this.http.get(environment.baseURI + 'email/correccionOrden/' + id, { headers: this.httpOptions })
  }

  rechazarOrden(id: string) {
    return this.http.get(environment.baseURI + 'email/rechazarOrden/' + id, { headers: this.httpOptions })
  }

}
