import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { OrdenModel } from 'src/app/models/orden.model';
import { OrdenProduccionRestService } from 'src/app/services/ordenProduccionRest/orden-produccion-rest.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-one-orden',
  templateUrl: './one-orden.component.html',
  styleUrls: ['./one-orden.component.css']
})
export class OneOrdenComponent implements OnInit {
  CVE_ORDEN: any;
  orden: OrdenModel
  detalles: any;
  detalle: any


  constructor(
    public activatedRoute: ActivatedRoute,
    private ordenRest: OrdenProduccionRestService,
  ) {
    this.orden = new OrdenModel('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(ruta => {
      this.CVE_ORDEN = ruta.get('id');
    });

    this.getOrden(this.CVE_ORDEN);
  }

  getOrden(id: string) {
    this.ordenRest.getOrden(id).subscribe({
      next: (res: any) => {
        this.orden = res.returnOrden;
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.ordenRest.getDetalleOrden(id).subscribe({
      next: (res: any) => {
        this.detalles = res.returnDetalle;
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.ordenRest.getImporteOrden(id).subscribe({
      next: (res: any) => {
        this.detalle = res.returnImporte;
      },
      error: (err) => {
        console.log(err);
      },
    });

  }

  autorizar() {
    let email = localStorage.getItem('email');
    if (email != null && email != undefined) {
      let parseEmail = JSON.parse(email)
      console.log(parseEmail)

    }

  }
}
