import { Component, OnInit } from '@angular/core';
import { OrderRestService } from 'src/app/services/ordersRest/order-rest.service';
import Swal from 'sweetalert2'
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(
    private orderRest: OrderRestService
  ) { }

  ngOnInit(): void {
  }
  orders: any

  getOrders() {
    this.orderRest.getPedidos().subscribe({
      next: (res: any) => {
        this.orders = res.returnPedidos
      },
      error: (err) => console.log(err)
    })
  }

}
