import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { CredentialsRestService } from '../credentialsRest/credentials-rest.service';

@Injectable({
  providedIn: 'root'
})
export class SpProcesosOperariosRestService {
httpOptions = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.credentialReset.getToken(),
  });
  constructor(
    private credentialReset: CredentialsRestService,
    private http: HttpClient,
  ) { }

  SP1(id: string, params:{}) {
    return this.http.put(environment.baseURI + 'sp/SP1/' + id, params, { headers: this.httpOptions })
  }

  SP2(id: string, params:{}) {
    return this.http.put(environment.baseURI + 'sp/SP2/' + id, params, { headers: this.httpOptions })
  }

  SP3(id: string, params:{}) {
    return this.http.put(environment.baseURI + 'sp/SP3/' + id, params, { headers: this.httpOptions })
  }

  SP4(id: string, params:{}) {
    return this.http.put(environment.baseURI + 'sp/SP4/' + id, params, { headers: this.httpOptions })
  }

  SP5(id: string, params:{}) {
    return this.http.put(environment.baseURI + 'sp/SP5/' + id, params, { headers: this.httpOptions })
  }

  SP6(id: string, params:{}) {
    return this.http.put(environment.baseURI + 'sp/SP6/' + id, params, { headers: this.httpOptions })
  }

  SP7(id: string, params:{}) {
    return this.http.put(environment.baseURI + 'sp/SP7/' + id, params, { headers: this.httpOptions })
  }

  SP8(id: string, params:{}) {
    return this.http.put(environment.baseURI + 'sp/SP8/' + id, params, { headers: this.httpOptions })
  }

  SP9(id: string, params:{}) {
    return this.http.put(environment.baseURI + 'sp/SP9/' + id, params, { headers: this.httpOptions })
  }

  SP10(id: string, params:{}) {
    return this.http.put(environment.baseURI + 'sp/SP10/' + id, params, { headers: this.httpOptions })
  }

  SP11(id: string, params:{}) {
    return this.http.put(environment.baseURI + 'sp/SP11/' + id, params, { headers: this.httpOptions })
  }

  SP12(id: string, params:{}) {
    return this.http.put(environment.baseURI + 'sp/SP12/' + id, params, { headers: this.httpOptions })
  }

  SP13(id: string, params:{}) {
    return this.http.put(environment.baseURI + 'sp/SP13/' + id, params, { headers: this.httpOptions })
  }

  SP14(id: string, params:{}) {
    return this.http.put(environment.baseURI + 'sp/SP14/' + id, params, { headers: this.httpOptions })
  }

}
