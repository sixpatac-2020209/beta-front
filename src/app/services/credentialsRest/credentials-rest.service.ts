import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CredentialsRestService {

  httpOptions = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(
    private http: HttpClient
  ) { }

  login(params: {}) {
    let body = JSON.stringify(params); //CONVERTIR A JSON
    return this.http.post(environment.baseURI + 'user/login', body, { headers: this.httpOptions });
  }

  getToken() {
    let globalToken = localStorage.getItem('token');
    localStorage.setItem('outService', 'false');
    let token;
    if (globalToken != undefined) {
      token = globalToken;
    } else {
      token = '';
    }
    return token;
  }

  getIdentity() {
    let globalIdentity = localStorage.getItem('identity');
    let identity;
    if (globalIdentity != undefined) {
      identity = JSON.parse(globalIdentity);
    } else {
      identity = '';
    }
    return identity;
  }
}
