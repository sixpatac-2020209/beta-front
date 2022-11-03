import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common'
import { Router } from '@angular/router';
import { UserRestService } from 'src/app/services/userRest/user-rest.service';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { CredentialsRestService } from 'src/app/services/credentialsRest/credentials-rest.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: UsuarioModel
  constructor
    (
      @Inject(DOCUMENT) private document: Document,
      private router: Router,
      private userRest: UserRestService,
      private credentialRest: CredentialsRestService,
      private elementRef: ElementRef,
    ) {
    this.user = new UsuarioModel('', '', '', '', '', '', '');
  }

  ngOnInit(): void {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../../../../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);
    
    this.userLogin();
  }
  sidebarToggle() {
    //toggle sidebar function
    this.document.body.classList.toggle('toggle-sidebar');
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

  logout() {
    localStorage.removeItem('email');
    localStorage.removeItem('token');
    localStorage.removeItem('identity');
    this.router.navigate(['/login']);
  }
}
