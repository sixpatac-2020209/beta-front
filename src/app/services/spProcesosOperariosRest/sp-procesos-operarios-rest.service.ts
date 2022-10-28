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
    return this.http.put(environment.baseURI + 'sp/SP1/' + id, params, { headers: this.httpOptions })
  }

  SP3(id: string, params:{}) {
    return this.http.put(environment.baseURI + 'sp/SP1/' + id, params, { headers: this.httpOptions })
  }

  SP4(id: string, params:{}) {
    return this.http.put(environment.baseURI + 'sp/SP1/' + id, params, { headers: this.httpOptions })
  }

  SP5(id: string, params:{}) {
    return this.http.put(environment.baseURI + 'sp/SP1/' + id, params, { headers: this.httpOptions })
  }

  SP6(id: string, params:{}) {
    return this.http.put(environment.baseURI + 'sp/SP1/' + id, params, { headers: this.httpOptions })
  }

  SP7(id: string, params:{}) {
    return this.http.put(environment.baseURI + 'sp/SP1/' + id, params, { headers: this.httpOptions })
  }

  SP8(id: string, params:{}) {
    return this.http.put(environment.baseURI + 'sp/SP1/' + id, params, { headers: this.httpOptions })
  }

  SP9(id: string, params:{}) {
    return this.http.put(environment.baseURI + 'sp/SP1/' + id, params, { headers: this.httpOptions })
  }

  SP10(id: string, params:{}) {
    return this.http.put(environment.baseURI + 'sp/SP1/' + id, params, { headers: this.httpOptions })
  }

  SP11(id: string, params:{}) {
    return this.http.put(environment.baseURI + 'sp/SP1/' + id, params, { headers: this.httpOptions })
  }

  SP12(id: string, params:{}) {
    return this.http.put(environment.baseURI + 'sp/SP1/' + id, params, { headers: this.httpOptions })
  }

  SP13(id: string, params:{}) {
    return this.http.put(environment.baseURI + 'sp/SP1/' + id, params, { headers: this.httpOptions })
  }

  SP14(id: string, params:{}) {
    return this.http.put(environment.baseURI + 'sp/SP1/' + id, params, { headers: this.httpOptions })
  }

}
