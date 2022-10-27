import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sidebar-gerente-comercial',
  templateUrl: './sidebar-gerente-comercial.component.html',
  styleUrls: ['./sidebar-gerente-comercial.component.css']
})
export class SidebarGerenteComercialComponent implements OnInit {

  constructor(
    private elementRef: ElementRef,
  ) { }

  ngOnInit(): void {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../../../../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);
  }

}
