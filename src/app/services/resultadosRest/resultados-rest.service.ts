import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { CredentialsRestService } from '../credentialsRest/credentials-rest.service';

@Injectable({
  providedIn: 'root'
})
export class ResultadosRestService {

  httpOptions = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.credentialReset.getToken(),
  });
  constructor(
    private credentialReset: CredentialsRestService,
    private http: HttpClient,
  ) { }

  createResultados(id: string) {
    return this.http.put(environment.baseURI + 'resultados/createResultados/' + id, { headers: this.httpOptions });
  }

  updateDetalle(id: string) {
    return this.http.put(environment.baseURI + 'resultados/updateDetalle/' + id, { headers: this.httpOptions });
  }

  getFasesHome() {
    return this.http.get(environment.baseURI + 'resultados/getFasesHome', { headers: this.httpOptions });
  }

  getDetalleResultados(id: string) {
    return this.http.get(environment.baseURI + 'resultados/getDetalleResultados/' + id, { headers: this.httpOptions });
  }

}
