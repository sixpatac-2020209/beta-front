import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sidebar-produccion',
  templateUrl: './sidebar-produccion.component.html',
  styleUrls: ['./sidebar-produccion.component.css']
})
export class SidebarProduccionComponent implements OnInit {

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
