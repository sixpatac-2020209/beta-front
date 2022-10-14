import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router'
import Swal from 'sweetalert2';
import { OrderRestService } from 'src/app/services/ordersRest/order-rest.service';
import { VendedorRestService } from 'src/app/services/vendedorRest/vendedor-rest.service';
import { ClienteRestService } from 'src/app/services/clienteRest/cliente-rest.service';
import { PlantaRestService } from 'src/app/services/plantaRest/planta-rest.service';
import { OrdenProduccionRestService } from 'src/app/services/ordenProduccionRest/orden-produccion-rest.service';
import { SedeModel } from 'src/app/models/sede.model';
import { DetallePedidoModel } from 'src/app/models/detallePedido.model';
import { OrdenModel } from 'src/app/models/orden.model';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  thumbsSwiper: any
  CVE_DOC: any;

  pedido: any;
  detalles: any;
  vendedor: any
  cliente: any;
  plantas: any;

  createOrdenForm: any;
  savePedido: any
  saveCliente: any;
  saveVendedor: any
  ID_SEDE: any;

  detalle: DetallePedidoModel
  planta: SedeModel
  orden: OrdenModel


  constructor(
    public activatedRoute: ActivatedRoute,
    private pedidoRest: OrderRestService,
    private clienteRest: ClienteRestService,
    private vendedorRest: VendedorRestService,
    private OrdenProduccionRest: OrdenProduccionRestService,
    private plantaRest: PlantaRestService
  ) {

    this.planta = new SedeModel('', '');
    this.detalle = new DetallePedidoModel('', '', '', '', '', '', '');
    this.orden = new OrdenModel('', '', '', '');
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(ruta => {
      this.CVE_DOC = ruta.get('id');
    });

    this.getPedido(this.CVE_DOC);
    this.getPlantas();
  }

  getPedido(id: string) {

    this.pedidoRest.getPedido(id).subscribe({
      next: (res: any) => {
        this.pedido = res.returnPedido;
        this.savePedido = res.returnPedidoToOrden

      },
      error: (err) => {
        console.log(err);
      },
    });

    this.vendedorRest.getVendedorPedido(id).subscribe({
      next: (res: any) => {
        this.vendedor = res.returnVendedor;
      },
      error: (err) => {
        console.log(err);
      },
    });

    this.clienteRest.getClientePedido(id).subscribe({
      next: (res: any) => {
        this.cliente = res.returnCliente;
      },
      error: (err) => {
        console.log(err);
      },
    });

    this.pedidoRest.getDetallePedido(id).subscribe({
      next: (res: any) => {
        this.detalles = res.returnDetalle;
      },
      error: (err) => {
        console.log(err);
      },
    })
  }

  getPlantas() {
    this.plantaRest.getPlantas().subscribe({
      next: (res: any) => {
        this.plantas = res.returnSedes;
      },
      error: (err) => console.log(err),
    })
  }

  getPlanta(id: string) {
    this.plantaRest.getPlanta(id).subscribe({
      next: (res: any) => {
        this.planta = res.returnSede;
        this.ID_SEDE = this.planta.ID_SEDE
        console.log(this.ID_SEDE);
      },
      error: (err) => console.log(err),
    })
  }





  createOrden() {
    this.OrdenProduccionRest.createOrden(this.savePedido).subscribe({
      next: (res: any) => {
        Swal.fire({
          icon: 'success',
          title: res.message,
          confirmButtonColor: '#28B463'
        });
      },
      error: (err: any) => {
        Swal.fire({
          icon: 'error',
          title: err.error.message || err.error,
          confirmButtonColor: '#E74C3C'
        });
      },
    })
  }

}
