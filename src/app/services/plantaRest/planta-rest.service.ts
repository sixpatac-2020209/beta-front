import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { CredentialsRestService } from '../credentialsRest/credentials-rest.service';

@Injectable({
  providedIn: 'root'
})
export class PlantaRestService {
  httpOptions = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.credentialReset.getToken(),
  });
  constructor(
    private credentialReset: CredentialsRestService,
    private http: HttpClient,
  ) { }

  getPlantas() {
    return this.http.get(environment.baseURI + 'plantas/getPlantas', { headers: this.httpOptions.set('Authorization', this.credentialReset.getToken()) });
  }

  getPlanta(id: string) {
    return this.http.get(environment.baseURI + 'plantas/getSede/'+ id , { headers: this.httpOptions.set('Authorization', this.credentialReset.getToken()) });
  }
}
