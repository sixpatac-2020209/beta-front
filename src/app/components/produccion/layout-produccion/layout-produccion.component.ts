import { Component, OnInit, ElementRef, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import { DOCUMENT } from '@angular/common'
import { UserRestService } from 'src/app/services/userRest/user-rest.service';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { CredentialsRestService } from 'src/app/services/credentialsRest/credentials-rest.service';

@Component({
  selector: 'app-layout-produccion',
  templateUrl: './layout-produccion.component.html',
  styleUrls: ['./layout-produccion.component.css']
})
export class LayoutProduccionComponent implements OnInit, OnDestroy {

  user: UsuarioModel

  mobileQuery: MediaQueryList;

  constructor(
    public _router: Router,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private router: Router,
      private userRest: UserRestService,
      private credentialRest: CredentialsRestService,
      private elementRef: ElementRef,

  ) {
    this.user = new UsuarioModel('', '', '', '', '', '', '');
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

  }

   ngOnInit(): void {   
    this.userLogin();
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

  private _mobileQueryListener: () => void;

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

}