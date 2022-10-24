import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProgramacionRestService {

  httpOptions = new HttpHeaders({
    'Content-Type': 'application/json',
    //'Authorization': this.credentialReset.getToken(),
  });
  constructor(
    //private credentialReset: CredentialsRestService,
    private http: HttpClient,
  ) { }

  programar(id: string, params: {}) {
    return this.http.put(environment.baseURI + 'programaciones/programar/' + id, params, { headers: this.httpOptions })
  }
}
