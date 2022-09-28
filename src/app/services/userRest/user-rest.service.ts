import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
//import { CredentialsRestService } from '../credentialsRest/credentials-rest.service';

@Injectable({
  providedIn: 'root'
})
export class UserRestService {

  httpOptions = new HttpHeaders({
    'Content-Type': 'application/json',
    //'Authorization': this.credentialReset.getToken(),
  });

  constructor(
    //private credentialReset: CredentialsRestService,
    private http: HttpClient,
  ) { }

  getUsers() {
    return this.http.get(environment.baseURI + 'user/getUsers', { headers: this.httpOptions });
  }

  getUser(id: string){
    return this.http.get(environment.baseURI + 'user/getUser/'+ id, { headers: this.httpOptions });
  }
}
