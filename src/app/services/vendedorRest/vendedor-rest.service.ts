import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
//import { CredentialsRestService } from '../credentialsRest/credentials-rest.service';

@Injectable({
  providedIn: 'root'
})
export class VendedorRestService {

  httpOptions = new HttpHeaders({
    'Content-Type': 'application/json',
    //'Authorization': this.credentialReset.getToken(),
  });

  constructor(
    //private credentialReset: CredentialsRestService,
    private http: HttpClient,
  ) { }

  getVendedores() {
    return this.http.get(environment.baseURI + 'vendedores/getVendedores', { headers: this.httpOptions });
  }

  getVendedor(id: string){
    return this.http.get(environment.baseURI + 'vendedores/getVendedor/' + id , {headers: this.httpOptions});
  }

  getVendedorPedidoCorreo(id: string){
    return this.http.get(environment.baseURI + 'vendedores/getVendedorCorreoPedido/' + id , {headers: this.httpOptions});
  }

  getVendedorPedido(id: string){
    return this.http.get(environment.baseURI + 'vendedores/getVendedorPedido/' + id , {headers: this.httpOptions});
  }
}
