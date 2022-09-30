import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {
  
  constructor(
    private elementRef: ElementRef
  ) {

  }

  ngOnInit(): void {

    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../../../../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);
  }

}
