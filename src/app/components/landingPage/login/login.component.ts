import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScriptLoginService } from 'src/app/services/cargarScripts/script-login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    //private _ScriptsLogin : ScriptLoginService,
  ){
    //_ScriptsLogin.Carga(["app"]);
  }

  ngOnInit( ): void { }

}
