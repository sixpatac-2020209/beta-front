import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { CredentialsRestService } from '../credentialsRest/credentials-rest.service';
@Injectable({
  providedIn: 'root'
})
export class OrdenFabricacionRestService {

  httpOptions = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.credentialReset.getToken(),
  });
  constructor(
    private credentialReset: CredentialsRestService,
    private http: HttpClient,
  ) { }

  getOrdenesFabricacion() {
    return this.http.get(environment.baseURI + 'ordenesFabricacion/getOrdenesFabricacion', { headers: this.httpOptions.set('Authorization', this.credentialReset.getToken()) });
  }
}
