import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OrderRestService } from 'src/app/services/ordersRest/order-rest.service';
import { PedidoModel } from 'src/app/models/pedido.model';
import { ExportExcelPedidoService } from '../../../services/exportData/exportExcelPedido/export-excel-pedido.service';
import { VendedorRestService } from '../../../services/vendedorRest/vendedor-rest.service';
import { VendedorModel } from '../../../models/vendedor.model';
import { ClienteRestService } from 'src/app/services/clienteRest/cliente-rest.service';
import { ClienteModel } from 'src/app/models/cliente.model';
import Swal from 'sweetalert2';

import { FormControl } from '@angular/forms';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


/** @title Datepicker emulating a Year and month picker */

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ]
})
export class PedidosComponent implements OnInit {

  pedido: PedidoModel;
  vendedor: VendedorModel;
  cliente: ClienteModel
  pedidos: any;
  position: any;
  searchPedido: any;
  pipePedido:any;
  pedidosY: any;
  pedidosPorMes: any;

  normalizedYear: any
  normalizedMonth: any
  datepicker: any
  monthForm: any;

  dateprueba: any;

  constructor(
    private pedidoRest: OrderRestService,
    private excelService: ExportExcelPedidoService,
    private clienteRest: ClienteRestService,
    private vendedorRest: VendedorRestService

  ) {
    this.pedido = new PedidoModel('', '', '', '', '', '', '', '', '', '', '', '');
    this.vendedor = new VendedorModel('', '', '');
    this.cliente = new ClienteModel('', '', '', '', '', '')
  }

  ngOnInit(): void {
    this.getPedidos();
  }


  //Variables - Mostrar | Ocultar DOM//
  showTableUsers: boolean = false;
  notFound: boolean = false;

  //Botones de Acciones//
  buttonActions: boolean = false;
  controloClick: number = 0;

  getPedidos() {
    this.pedidoRest.getPedidos().subscribe({
      next: (res: any) => {
        this.pedidos = res.returnPedidos;
        for (let pedido of this.pedidos) {
          pedido.position = this.pedidos.indexOf(pedido) + 1;
        }
        if (this.showTableUsers === true) {
          for (let pedido of this.pedidos) {
            pedido.checked = true;
          }
          this.pedidos = this.pedidos
        }
      },
      error: (err) => console.log(err),
    });
  }

  getPedido(id: string) {
    this.pedidoRest.getPedido(id).subscribe({
      next: (res: any) => {
        this.pedido = res.returnPedido;
      },
      error: (err) => {
        alert(err.error.message);
      },
    });

    this.pedidoRest.getDetallePedido(id).subscribe({
      next: (res: any) => {
        this.pedido = res.returnPedido;
        console.log(this.pedido);
      },
      error: (err) => {
        alert(err.error.message);
      },
    });

    this.vendedorRest.getVendedorPedidoCorreo(id).subscribe({
      next: (res: any) => {
        this.vendedor = res.returnVendedor;
        console.log(this.vendedor.CORREOE);
      },
      error: (err) => {
        alert(err.error.message);
      },
    });

    this.clienteRest.getClientePedido(id).subscribe({
      next: (res: any) => {
        this.cliente = res.returnCliente;
        console.log(this.cliente)
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

  }

  //Exportar Datos a Excel//
  exportExcel() {
    this.excelService.downloadExcel(this.pedidos);
  }

  getPedidosPorMes(monthForm: any) {
    const { year, month, date } = this.dateprueba._i;
    const newDateBack = `${year}-${month + 1}-${date}`;
    
    let params = { DATED: newDateBack }
    
    this.pedidoRest.getPedidoPorMes(params).subscribe({
      next: (res: any) => {
        this.pedidosPorMes = res.returnPedidosPorMes;
        this.pedidos = this.pedidosPorMes;
        monthForm.reset()
      },
      error: (err: any) => {
        Swal.fire({
          icon: 'error',
          title: err.error.message || err.error,
          confirmButtonColor: '#E74C3C'
        });
        monthForm.reset()
      },
    });
  }

}
