import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
//import { CredentialsRestService } from '../credentialsRest/credentials-rest.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteRestService {

  httpOptions = new HttpHeaders({
    'Content-Type': 'application/json',
    //'Authorization': this.credentialReset.getToken(),
  });

  constructor(
    //private credentialReset: CredentialsRestService,
    private http: HttpClient,
  ) { }

  getClientes() {
    return this.http.get(environment.baseURI + 'clientes/getClientes', { headers: this.httpOptions });
  }

  getCliente(id:string){
    return this.http.get(environment.baseURI + 'clientes/getCliente/' + id, {headers:this.httpOptions});
  }

}
