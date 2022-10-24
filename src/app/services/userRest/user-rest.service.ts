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


  /** MONGO DB **/
  getUsers() {
    return this.http.get(environment.baseURI + 'user/getUsers', { headers: this.httpOptions });
  }

  getUser(id: string) {
    return this.http.get(environment.baseURI + 'user/getUser/' + id, { headers: this.httpOptions });
  }

  saveUser(params: {}) {
    return this.http.post(environment.baseURI + 'user/saveUser', params, { headers: this.httpOptions });
  }

  updateUser(id: string, params: {}) {
    return this.http.put(environment.baseURI + 'user/updateUser/' + id, params, { headers: this.httpOptions });
  }

  deleteUser(id: string) {
    return this.http.delete(environment.baseURI + 'user/deleteUser/' + id, { headers: this.httpOptions });
  }

  /** SQL SERVER **/
saveUserSAE(params: {}) {
    return this.http.post(environment.baseURI + 'user/createUserSAE', params, { headers: this.httpOptions });
  }

  updateUserSAE(id: string, params: {}) {
    return this.http.put(environment.baseURI + 'user/updateUserSAE/' + id, params, { headers: this.httpOptions });
  }

  deleteUserSAE(id: string) {
    return this.http.delete(environment.baseURI + 'user/deleteUserSAE/' + id, { headers: this.httpOptions });
  }

}
