import { Component, OnInit, ElementRef } from '@angular/core';
import { OrdenProduccionRestService } from 'src/app/services/ordenProduccionRest/orden-produccion-rest.service';
import { AutorizationRestService } from 'src/app/services/autorizationRest/autorization-rest.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {
  ordenesProduccion: any;
  autorizaciones: any;
  ordenesFabricacion: any;

  cantidadOrdenes: any;
  cantidadPorAutorizar: any;
  cantidadEnProduccion: any;
  cantidadTerminadas: any;

  constructor(
    private elementRef: ElementRef,
    private ordenRest: OrdenProduccionRestService,
        private autorizationRest: AutorizationRestService

  ) {

  }

  ngOnInit(): void {

    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../../../../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);
    
    this.getOrdenesDeProduccion()
    this.getAutorizaciones()
  }

  getOrdenesDeProduccion() {
    this.ordenRest.getOrdenes().subscribe({
      next: (res: any) => {
        this.ordenesProduccion = res.returnOrdenes;
        this.cantidadOrdenes = this.ordenesProduccion.length
        console.log(this.cantidadOrdenes)
      },
      error: (err) => console.log(err),
    });
  }

  getAutorizaciones() {
    this.autorizationRest.getAutorizaciones().subscribe({
      next: (res: any) => {
        this.autorizaciones = res.returnAuth;
        this.cantidadPorAutorizar = this.autorizaciones.length
      },
      error: (err) => console.log(err),
    });
  }

  /* getOrdenesDeFabricacion() {
      this.autorizationRest.getAutorizaciones().subscribe({
        next: (res: any) => {
          this.ordenes = res.returnAuth;
          for (let orden of this.ordenes) {
            orden.position = this.ordenes.indexOf(orden) + 1;
          }
        },
        error: (err) => console.log(err),
      });
    } */

}
