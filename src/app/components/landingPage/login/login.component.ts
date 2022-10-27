import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { ScriptLoginService } from 'src/app/services/cargarScripts/script-login.service';
import { CredentialsRestService } from 'src/app/services/credentialsRest/credentials-rest.service';
import { UserRestService } from 'src/app/services/userRest/user-rest.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: UsuarioModel

  constructor(

    private router: Router,
    private userRest: CredentialsRestService,
    //private _ScriptsLogin : ScriptLoginService,
  ) {
    //_ScriptsLogin.Carga(["app"]);
    this.user = new UsuarioModel('', '', '', '', '', '', '',);
  }

  ngOnInit(): void { }


    login() {
    this.userRest.login(this.user).subscribe({
      next: (res: any) => {
        localStorage.setItem('identity', JSON.stringify(res.already));
        localStorage.setItem('token', res.token);

        Swal.fire({
          icon: 'success',
          title: res.message,
          html: 'Bienvenido <b>' + res.already.name + '</b>',
          confirmButtonColor: '#28B463'
        })

        const verificarAdmin = res.already.role;
        //VERIFICA A DONDE LLEVARME//
        if (verificarAdmin == 'ADMINISTRADOR' || verificarAdmin == 'IT') { this.router.navigate(['/admin/home']); }

        if (verificarAdmin == 'JEFEPRODUCCION') { this.router.navigate(['/produccion/home']); }

        if (verificarAdmin == 'LOGISTICA') { this.router.navigate(['/logistica/home']); }

        if (verificarAdmin == 'GERENTECOMERCIAL') { this.router.navigate(['/gerenteComercial/pedidos']); }

        if (verificarAdmin == 'DISEÑO') { this.router.navigate(['/disenio/home']); }


      },
      error: (err: any) => {
        Swal.fire({
          icon: 'error',
          title: err.error.message || err.error,
          confirmButtonColor: '#E74C3C'
        });
      },
    })
  }

}
