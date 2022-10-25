import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { CredentialsRestService } from '../credentialsRest/credentials-rest.service';

@Injectable({
  providedIn: 'root'
})
export class EmailRestService {
  httpOptions = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.credentialReset.getToken(),
  });
  constructor(
    private credentialReset: CredentialsRestService,
    private http: HttpClient,
  ) { }

  confirmarOrden(id: string, params: {}) {
    return this.http.put(environment.baseURI + 'email/confirmarOrden/' + id, params, { headers: this.httpOptions.set('Authorization', this.credentialReset.getToken()) })
  }

  corregirOrden(id: string, params: {}) {
    return this.http.put(environment.baseURI + 'email/correccionOrden/' + id, params, { headers: this.httpOptions.set('Authorization', this.credentialReset.getToken()) })
  }

  rechazarOrden(id: string, params:{}) {
    return this.http.put(environment.baseURI + 'email/rechazarOrden/' + id, params, { headers: this.httpOptions.set('Authorization', this.credentialReset.getToken()) })
  }

}
