import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
//import { CredentialsRestService } from '../credentialsRest/credentials-rest.service';

@Injectable({
  providedIn: 'root'
})
export class OrderRestService {

  httpOptions = new HttpHeaders({
    'Content-Type': 'application/json',
    //'Authorization': this.credentialReset.getToken(),
  });

  constructor(
    //private credentialReset: CredentialsRestService,
    private http: HttpClient,
  ) { }

  getPedidos() {
    return this.http.get(environment.baseURI + 'pedidos/getPedidos', { headers: this.httpOptions });
  }

  getPedido(id: string){
    return this.http.get(environment.baseURI + 'pedidos/getPedido/' + id , { headers: this.httpOptions })
  }

  getDetallePedido(id: string){
    return this.http.get(environment.baseURI + 'pedidos/getDetallePedido/' + id , { headers: this.httpOptions })
  }

  getPedidoPorMes(params : {}){
    return this.http.post(environment.baseURI + 'pedidos/getPedidosPorMes', params,{headers: this.httpOptions});
  }
}
