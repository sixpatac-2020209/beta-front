import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { OrdenModel } from 'src/app/models/orden.model';
import { EmailRestService } from 'src/app/services/emailRest/email-rest.service';
import { OrdenProduccionRestService } from 'src/app/services/ordenProduccionRest/orden-produccion-rest.service';
import { CredentialsRestService } from 'src/app/services/credentialsRest/credentials-rest.service';
import { AutorizationRestService } from 'src/app/services/autorizationRest/autorization-rest.service';
import Swal from 'sweetalert2';
import { EmailModel } from 'src/app/models/email.model';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { UserRestService } from 'src/app/services/userRest/user-rest.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-one-orden',
  templateUrl: './one-orden.component.html',
  styleUrls: ['./one-orden.component.css']
})
export class OneOrdenComponent implements OnInit {
  CVE_ORDEN: any;
  orden: OrdenModel
  detalles: any;
  detalle: any;
  email: EmailModel
  user: UsuarioModel
  emailForm: any;


  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    private ordenRest: OrdenProduccionRestService,
    private emailRest: EmailRestService,
    private userRest: UserRestService,
    private credentialRest: CredentialsRestService,
    private autorizationRest: AutorizationRestService

  ) {
    this.orden = new OrdenModel('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');
    this.email = new EmailModel('');
    this.user = new UsuarioModel('', '', '', '', '', '', '',)
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(ruta => {
      this.CVE_ORDEN = ruta.get('id');
    });

    this.getOrden(this.CVE_ORDEN);
    this.userLogin()
  }

  userLogin() {
    this.userRest.getUser(this.credentialRest.getIdentity()._id).subscribe({
      next: (res: any) => {
        this.user = res.user;
        console.log(this.user);
      },
      error: (err) => { alert(err.error.message) }
    })
  }

  getOrden(id: string) {
    this.ordenRest.getOrden(id).subscribe({
      next: (res: any) => {
        this.orden = res.returnOrden;
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.ordenRest.getDetalleOrden(id).subscribe({
      next: (res: any) => {
        this.detalles = res.returnDetalle;
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.ordenRest.getImporteOrden(id).subscribe({
      next: (res: any) => {
        this.detalle = res.returnImporte;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

}
