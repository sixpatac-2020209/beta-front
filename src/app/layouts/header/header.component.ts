import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common'
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor
    (
      @Inject(DOCUMENT) private document: Document,
      private router: Router
    ) { }

  ngOnInit(): void {
  }
  sidebarToggle() {
    //toggle sidebar function
    this.document.body.classList.toggle('toggle-sidebar');
  }

  logout() {
    localStorage.removeItem('email');
    this.router.navigate(['/login'])
  }
}
