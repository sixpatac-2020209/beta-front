import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';

import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";
import { ActivatedRoute } from '@angular/router'
import Swal from 'sweetalert2';
import { OrderRestService } from 'src/app/services/ordersRest/order-rest.service';
import { VendedorRestService } from 'src/app/services/vendedorRest/vendedor-rest.service';
import { ClienteRestService } from 'src/app/services/clienteRest/cliente-rest.service';
import { PlantaRestService } from 'src/app/services/plantaRest/planta-rest.service';
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
  detalle: DetallePedidoModel
  planta: SedeModel
  orden: OrdenModel

  hideRequiredControl = new FormControl(true);
  floatLabelControl = new FormControl('always' as FloatLabelType);
  options = this._formBuilder.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
  });

  constructor(
    public activatedRoute: ActivatedRoute,
    private pedidoRest: OrderRestService,
    private clienteRest: ClienteRestService,
    private vendedorRest: VendedorRestService,
    private _formBuilder: FormBuilder,
    private plantaRest: PlantaRestService
  ) {

    this.planta = new SedeModel('', '');
    this.detalle = new DetallePedidoModel('', '', '', '', '', '', '');
    this.orden = new OrdenModel('', '', '', '')
  }

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'always';
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(ruta => {
      this.CVE_DOC = ruta.get('id');
    });

    this.getPedido(this.CVE_DOC);
    this.getVendedor(this.CVE_DOC);
    this.getCliente(this.CVE_DOC);
    this.getDetallePedido(this.CVE_DOC);
    this.getPlantas();

  }

  getPedido(id: string) {
    this.pedidoRest.getPedido(id).subscribe({
      next: (res: any) => {
        this.pedido = res.returnPedido;
        let fecha = this.pedido.FECHAELAB.split('T');
        let nuevaFecha = fecha[0]
        this.pedido.FECHAELAB === nuevaFecha
        console.log('NUEVA FECHA:  ', this.pedido.FECHAELAB);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getVendedor(id: string) {
    this.vendedorRest.getVendedorPedido(id).subscribe({
      next: (res: any) => {
        this.vendedor = res.returnVendedor;

      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getCliente(id: string) {
    this.clienteRest.getClientePedido(id).subscribe({
      next: (res: any) => {
        this.cliente = res.returnCliente;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getDetallePedido(id: string) {
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

}