import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-gerente-comercial',
  templateUrl: './layout-gerente-comercial.component.html',
  styleUrls: ['./layout-gerente-comercial.component.css']
})
export class LayoutGerenteComercialComponent implements OnInit {

  constructor(
    private elementRef: ElementRef,  
    public  _router: Router
    ) { }

  ngOnInit() {

    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../../../../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);
  }

}
