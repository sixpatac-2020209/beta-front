import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { CredentialsRestService } from '../credentialsRest/credentials-rest.service';

@Injectable({
  providedIn: 'root'
})
export class UserRestService {

  httpOptions = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.credentialReset.getToken(),
  });

  constructor(
    private credentialReset: CredentialsRestService,
    private http: HttpClient,
  ) { }


  /** MONGO DB **/
  getUsers() {
    return this.http.get(environment.baseURI + 'user/getUsers', { headers: this.httpOptions.set('Authorization', this.credentialReset.getToken()) });
  }

  getUser(id: string) {
    return this.http.get(environment.baseURI + 'user/getUser/' + id, { headers: this.httpOptions });
  }

  saveUser(params: {}) {
    return this.http.post(environment.baseURI + 'user/saveUser', params, { headers: this.httpOptions.set('Authorization', this.credentialReset.getToken()) });
  }

  updateUser(id: string, params: {}) {
    return this.http.put(environment.baseURI + 'user/updateUser/' + id, params, { headers: this.httpOptions.set('Authorization', this.credentialReset.getToken()) });
  }

  deleteUser(id: string) {
    return this.http.delete(environment.baseURI + 'user/deleteUser/' + id, { headers: this.httpOptions.set('Authorization', this.credentialReset.getToken()) });
  }


  /** SQL SERVER **/
  saveUserSAE(params: {}) {
    return this.http.post(environment.baseURI + 'userSAE/createUserSAE', params, { headers: this.httpOptions.set('Authorization', this.credentialReset.getToken()) });
  }

  updateUserSAE(id: string, params: {}) {
    return this.http.put(environment.baseURI + 'userSAE/updateUserSAE/' + id, params, { headers: this.httpOptions.set('Authorization', this.credentialReset.getToken()) });
  }

  deleteUserSAE(id: string) {
    return this.http.delete(environment.baseURI + 'userSAE/deleteUserSAE/' + id, { headers: this.httpOptions.set('Authorization', this.credentialReset.getToken()) });
  }

}
