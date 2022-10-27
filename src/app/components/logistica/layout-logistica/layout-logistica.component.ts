import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-logistica',
  templateUrl: './layout-logistica.component.html',
  styleUrls: ['./layout-logistica.component.css']
})
export class LayoutLogisticaComponent implements OnInit {

  constructor(private elementRef: ElementRef,  public  _router: Router) { }

  ngOnInit() {

    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../../../../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);
  }

}
