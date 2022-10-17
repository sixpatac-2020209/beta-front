import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { ScriptLoginService } from 'src/app/services/cargarScripts/script-login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin:UsuarioModel

  constructor(
private router : Router,
    //private _ScriptsLogin : ScriptLoginService,
  ){
    //_ScriptsLogin.Carga(["app"]);
    this.userLogin = new UsuarioModel('','','','','','','',);
  }

  ngOnInit( ): void { }

login(loginForm : any)
{
//TU FUNCION PARA EL BACKEND
localStorage.setItem('email', JSON.stringify(this.userLogin.email));
this.router.navigate(['/admin/home'])

}

}
