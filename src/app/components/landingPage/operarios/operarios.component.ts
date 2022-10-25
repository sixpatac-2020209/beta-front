import { Component, OnInit, } from '@angular/core';
import { DetalleOrdenRestService } from 'src/app/services/detalleOrdenRest/detalle-orden-rest.service';
import { OrdenProduccionRestService } from 'src/app/services/ordenProduccionRest/orden-produccion-rest.service';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-operarios',
  templateUrl: './operarios.component.html',
  styleUrls: ['./operarios.component.css']
})
export class OperariosComponent implements OnInit {

  userUpdate: any;
  constructor(
    private detalleRest: DetalleOrdenRestService,
    private orderRest: OrdenProduccionRestService,
  ) { }

  ngOnInit(): void {
    this.getOrders();
  }
  datoUpdate: any
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
        console.log(this.articulosOrder);
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
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
/* 
  //corte
  corteVidrio() {
    this.detalleRest.corteVidrio().subscribe({
      next: (res: any) => {
        Swal.fire({
          icon: 'success',
          title: res.message,
          confirmButtonColor: '#28B463'
        });
        this.getOrders();
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: err.error.message || err.error,
          confirmButtonColor: '#E74C3C'
        });
      },
    })
  }

  corteHoja() {
    this.detalleRest.corteHoja().subscribe({
      next: (res: any) => {
        Swal.fire({
          icon: 'success',
          title: res.message,
          confirmButtonColor: '#28B463'
        });
        this.getOrders();
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: err.error.message || err.error,
          confirmButtonColor: '#E74C3C'
        });
      },
    })
  }

  corteMarco() {
    this.detalleRest.corteMarco().subscribe({
      next: (res: any) => {
        Swal.fire({
          icon: 'success',
          title: res.message,
          confirmButtonColor: '#28B463'
        });
        this.getOrders();
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: err.error.message || err.error,
          confirmButtonColor: '#E74C3C'
        });
      },
    })
  }

  corteCedazo() {
    this.detalleRest.corteCedazo().subscribe({
      next: (res: any) => {
        Swal.fire({
          icon: 'success',
          title: res.message,
          confirmButtonColor: '#28B463'
        });
        this.getOrders();
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: err.error.message || err.error,
          confirmButtonColor: '#E74C3C'
        });
      },
    })
  }

  //fusion
  fusionHoja() {
    this.detalleRest.fusionHoja().subscribe({
      next: (res: any) => {
        Swal.fire({
          icon: 'success',
          title: res.message,
          confirmButtonColor: '#28B463'
        });
        this.getOrders();
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: err.error.message || err.error,
          confirmButtonColor: '#E74C3C'
        });
      },
    })
  }

  fusionCedazo() {
    this.detalleRest.fusionCedazo().subscribe({
      next: (res: any) => {
        Swal.fire({
          icon: 'success',
          title: res.message,
          confirmButtonColor: '#28B463'
        });
        this.getOrders();
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: err.error.message || err.error,
          confirmButtonColor: '#E74C3C'
        });
      },
    })
  }

  fusionMarco() {
    this.detalleRest.fusionMarco().subscribe({
      next: (res: any) => {
        Swal.fire({
          icon: 'success',
          title: res.message,
          confirmButtonColor: '#28B463'
        });
        this.getOrders();
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: err.error.message || err.error,
          confirmButtonColor: '#E74C3C'
        });
      },
    })
  }

  //limpieza
  limpiezaHoja() {
    this.detalleRest.limpiezaHoja().subscribe({
      next: (res: any) => {
        Swal.fire({
          icon: 'success',
          title: res.message,
          confirmButtonColor: '#28B463'
        });
        this.getOrders();
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: err.error.message || err.error,
          confirmButtonColor: '#E74C3C'
        });
      },
    })
  }

  limpiezaMarco() {
    this.detalleRest.limpiezaMarco().subscribe({
      next: (res: any) => {
        Swal.fire({
          icon: 'success',
          title: res.message,
          confirmButtonColor: '#28B463'
        });
        this.getOrders();
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: err.error.message || err.error,
          confirmButtonColor: '#E74C3C'
        });
      },
    })
  }

  colocacionTela() {
    this.detalleRest.colocacionTela().subscribe({
      next: (res: any) => {
        Swal.fire({
          icon: 'success',
          title: res.message,
          confirmButtonColor: '#28B463'
        });
        this.getOrders();
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: err.error.message || err.error,
          confirmButtonColor: '#E74C3C'
        });
      },
    })
  }

  //Accesorios
  corteBatiente() {
    this.detalleRest.corteBatiente().subscribe({
      next: (res: any) => {
        Swal.fire({
          icon: 'success',
          title: res.message,
          confirmButtonColor: '#28B463'
        });
        this.getOrders();
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: err.error.message || err.error,
          confirmButtonColor: '#E74C3C'
        });
      },
    })
  }

  colocacionBatiente() {
    this.detalleRest.colocacionBatiente().subscribe({
      next: (res: any) => {
        Swal.fire({
          icon: 'success',
          title: res.message,
          confirmButtonColor: '#28B463'
        });
        this.getOrders();
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: err.error.message || err.error,
          confirmButtonColor: '#E74C3C'
        });
      },
    })
  }

  tapajambas() {
    this.detalleRest.tapajambas().subscribe({
      next: (res: any) => {
        Swal.fire({
          icon: 'success',
          title: res.message,
          confirmButtonColor: '#28B463'
        });
        this.getOrders();
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: err.error.message || err.error,
          confirmButtonColor: '#E74C3C'
        });
      },
    })
  }

  reticula() {
    this.detalleRest.reticula().subscribe({
      next: (res: any) => {
        Swal.fire({
          icon: 'success',
          title: res.message,
          confirmButtonColor: '#28B463'
        });
        this.getOrders();
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: err.error.message || err.error,
          confirmButtonColor: '#E74C3C'
        });
      },
    })
  }

  //armado
  armado() {
    this.detalleRest.armado().subscribe({
      next: (res: any) => {
        Swal.fire({
          icon: 'success',
          title: res.message,
          confirmButtonColor: '#28B463'
        });
        this.getOrders();
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: err.error.message || err.error,
          confirmButtonColor: '#E74C3C'
        });
      },
    })
  }
 */
}
