import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sidebar-logistica',
  templateUrl: './sidebar-logistica.component.html',
  styleUrls: ['./sidebar-logistica.component.css']
})
export class SidebarLogisticaComponent implements OnInit {

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
