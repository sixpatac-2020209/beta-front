import { Component, OnInit } from '@angular/core';
import { OrderRestService } from 'src/app/services/ordersRest/order-rest.service';
import { PedidoModel } from 'src/app/models/pedido.model';

@Component({
  selector: 'app-pedidos-admin',
  templateUrl: './pedidos-admin.component.html',
  styleUrls: ['./pedidos-admin.component.css']
})
export class PedidosAdminComponent implements OnInit {
  pedido: PedidoModel;
  pedidos: any;
  constructor(
    private pedidoRest: OrderRestService
  ) {
    this.pedido = new PedidoModel('', '', '', '', '', '', '', '');
  }

  ngOnInit(): void {
    this.getPedidos();
  }
  //Variables - Mostrar | Ocultar DOM//
  showTableUsers: boolean = false
  notFound: boolean = false

  //Botones de Acciones//
  buttonActions: boolean = false;
  controloClick: number = 0;

  getPedidos() {
    this.pedidoRest.getPedidos().subscribe({
      next: (res: any) => {
        this.pedidos = res.returnPedidos;
        console.log(this.pedidos.length);
      },
      error: (err) => console.log(err)
    })
  }

  getPedido(id: string) {
    this.pedidoRest.getPedido(id).subscribe({
      next: (res: any) => {
        this.pedido = res.returnPedido;
        console.log(this.pedido);
      },
      error: (err) => { alert(err.error.message) }
    })
  }




  showButtonActions(ID: any, check: any) {
    this.controloClick += 1
    let controlCheck = !check.checked
    if (this.controloClick == 1) {
      for (let pedido of this.pedidos) {
        if (ID != pedido.CVE_DOC) {
          pedido.checked = !controlCheck
        } else if (ID == pedido.CVE_DOC) {
          pedido.checked = controlCheck
        }
      }
    }
    else if (this.controloClick == 2) {
      for (let pedido of this.pedidos) {
        pedido.checked = true;
      }
      this.controloClick = 0;
    }
    this.buttonActions = !this.buttonActions;
  }
}
