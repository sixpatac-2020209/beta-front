import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { DetalleOrdenRestService } from 'src/app/services/detalleOrdenRest/detalle-orden-rest.service';
import { OrdenProduccionRestService } from 'src/app/services/ordenProduccionRest/orden-produccion-rest.service';

@ViewChild(MatSidenav)


@Component({
  selector: 'app-operarios',
  templateUrl: './operarios.component.html',
  styleUrls: ['./operarios.component.css']
})
export class OperariosComponent implements OnInit {
  opened = false
  sidenav!: MatSidenav;
  constructor(
    private detalleRest: DetalleOrdenRestService,
    private orderRest: OrdenProduccionRestService,
    private observer: BreakpointObserver
  ) { }

  ngAfterViewInit() {

    this.observer.observe(['(max-width: 768px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'over';
        this.sidenav.open();
      }
    });
  }

  ngOnInit(): void {
    this.getOrders();
  }

  orders: any;
  articulosOrder: any;
  orderSelected: any;
  articuloSelected: any;
  detallesArticulos: any;

  getOrders() {
    this.orderRest.getOrders().subscribe({
      next: (res: any) => {
        this.orders = res.returnOrders;
      },
      error: (err) => { alert(err.error.message) }
    })
  }

  getOrden(id: string) {
    this.orderRest.getDetalleOrden(id).subscribe({
      next: (res: any) => {
        this.articulosOrder = res.returnDetalle;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getDetalleArticulo(id: string) {
    this.detalleRest.getDetalleArticulo(id).subscribe({
      next: (res: any) => {
        this.detallesArticulos = res.returnDetalleProceso;
        console.log(this.detallesArticulos);
        console.log(this.detallesArticulos[0].DESCRIPCION);
        console.log(this.detallesArticulos[0].REALIZAR);
        console.log(this.detallesArticulos[0].REALIZADO);

        console.log(this.detallesArticulos[1].DESCRIPCION);
        console.log(this.detallesArticulos[1].REALIZAR);
        console.log(this.detallesArticulos[1].REALIZADO);

        console.log(this.detallesArticulos[2].DESCRIPCION);
        console.log(this.detallesArticulos[2].REALIZAR);
        console.log(this.detallesArticulos[2].REALIZADO);

        console.log(this.detallesArticulos[3].DESCRIPCION);
        console.log(this.detallesArticulos[3].REALIZAR);
        console.log(this.detallesArticulos[3].REALIZADO);

        console.log(this.detallesArticulos[4].DESCRIPCION);
        console.log(this.detallesArticulos[4].REALIZAR);
        console.log(this.detallesArticulos[4].REALIZADO);

        console.log(this.detallesArticulos[5].DESCRIPCION);
        console.log(this.detallesArticulos[5].REALIZAR);
        console.log(this.detallesArticulos[5].REALIZADO);

        console.log(this.detallesArticulos[6].DESCRIPCION);
        console.log(this.detallesArticulos[6].REALIZAR);
        console.log(this.detallesArticulos[6].REALIZADO);

        console.log(this.detallesArticulos[7].DESCRIPCION);
        console.log(this.detallesArticulos[7].REALIZAR);
        console.log(this.detallesArticulos[7].REALIZADO);

        console.log(this.detallesArticulos[8].DESCRIPCION);
        console.log(this.detallesArticulos[8].REALIZAR);
        console.log(this.detallesArticulos[8].REALIZADO);

        console.log(this.detallesArticulos[9].DESCRIPCION);
        console.log(this.detallesArticulos[9].REALIZAR);
        console.log(this.detallesArticulos[9].REALIZADO);

        console.log(this.detallesArticulos[10].DESCRIPCION);
        console.log(this.detallesArticulos[10].REALIZAR);
        console.log(this.detallesArticulos[10].REALIZADO);

        console.log(this.detallesArticulos[11].DESCRIPCION);
        console.log(this.detallesArticulos[11].REALIZAR);
        console.log(this.detallesArticulos[11].REALIZADO);

        console.log(this.detallesArticulos[12].DESCRIPCION);
        console.log(this.detallesArticulos[12].REALIZAR);
        console.log(this.detallesArticulos[12].REALIZADO);

        console.log(this.detallesArticulos[13].DESCRIPCION);
        console.log(this.detallesArticulos[13].REALIZAR);
        console.log(this.detallesArticulos[13].REALIZADO);

        console.log(this.detallesArticulos[14].DESCRIPCION);
        console.log(this.detallesArticulos[14].REALIZAR);
        console.log(this.detallesArticulos[14].REALIZADO);

        console.log(this.detallesArticulos[15].DESCRIPCION);
        console.log(this.detallesArticulos[15].REALIZAR);
        console.log(this.detallesArticulos[15].REALIZADO);




      },
      error: (err) => {
        console.log(err);
      },
    });
  }

}
