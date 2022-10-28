import { Component, OnInit, } from '@angular/core';
import { DetalleOrdenRestService } from 'src/app/services/detalleOrdenRest/detalle-orden-rest.service';
import { OrdenProduccionRestService } from 'src/app/services/ordenProduccionRest/orden-produccion-rest.service';
import { ResultadosRestService } from 'src/app/services/resultadosRest/resultados-rest.service';

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
    private resultadosRest: ResultadosRestService,
  ) { }

  ngOnInit(): void {
    this.getOrders();
  }

  orders: any;
  articulosOrder: any;
  orderSelected: any;
  articuloSelected: any;
  detallesArticulos: any;

  datoUpdated: any;
  CVE_ORDEN: any

  //---------- FORMS ------------//
  corteVidrioForm: any

  //-----------------------------//
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
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  //corte
  corteVidrio() {
    let params = { corteV: this.detallesArticulos[0].REALIZADO }
    this.detalleRest.corteVidrio(this.articulosOrder[0].CVE_ART, params).subscribe({
      next: (res: any) => {
        Swal.fire({
          icon: 'success',
          title: res.message,
          confirmButtonColor: '#28B463'
        });
        this.corteVidrioForm.reset();
        this.getOrders();

      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: err.error.message || err.error,
          confirmButtonColor: '#E74C3C'
        });
        this.corteVidrioForm.reset();
        this.getOrders();
      },
    })
  }


  corteHoja() {
    let params = { corteH: this.detallesArticulos[1].REALIZADO }
    this.detalleRest.corteHoja(this.articulosOrder[0].CVE_ART, params).subscribe({
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
    let params = { corteM: this.detallesArticulos[2].REALIZADO }
    this.detalleRest.corteMarco(this.articulosOrder[2].CVE_ART, params).subscribe({
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
    let params = { corteC: this.detallesArticulos[3].REALIZADO }
    this.detalleRest.corteCedazo(this.articulosOrder[3].CVE_ART, params).subscribe({
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
    let params = { fusionH: this.detallesArticulos[4].REALIZADO }
    this.detalleRest.fusionHoja(this.articulosOrder[4].CVE_ART, params).subscribe({
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
    let params = { fusionC: this.detallesArticulos[5].REALIZADO }
    this.detalleRest.fusionCedazo(this.articulosOrder[5].CVE_ART, params).subscribe({
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
    let params = { fusionM: this.detallesArticulos[6].REALIZADO }
    this.detalleRest.fusionMarco(this.articulosOrder[6].CVE_ART, params).subscribe({
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
    let params = { limpiezaH: this.detallesArticulos[7].REALIZADO }
    this.detalleRest.limpiezaHoja(this.articulosOrder[7].CVE_ART, params).subscribe({
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
    let params = { limpiezaM: this.detallesArticulos[8].REALIZADO }
    this.detalleRest.limpiezaMarco(this.articulosOrder[8].CVE_ART, params).subscribe({
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
    let params = { colocacionTela: this.detallesArticulos[9].REALIZADO }
    this.detalleRest.colocacionTela(this.articulosOrder[9].CVE_ART, params).subscribe({
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
    let params = { corteBatiente: this.detallesArticulos[10].REALIZADO }
    this.detalleRest.corteBatiente(this.articulosOrder[10].CVE_ART, params).subscribe({
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
    let params = { colocacionBatiente: this.detallesArticulos[11].REALIZADO }
    this.detalleRest.colocacionBatiente(this.articulosOrder[11].CVE_ART, params).subscribe({
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
    let params = { tapajambas: this.detallesArticulos[12].REALIZADO }
    this.detalleRest.tapajambas(this.articulosOrder[12].CVE_ART, params).subscribe({
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
    let params = { reticula: this.detallesArticulos[13].REALIZADO }
    this.detalleRest.reticula(this.articulosOrder[13].CVE_ART, params).subscribe({
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

  updateDetalle(id: string) {
    this.resultadosRest.updateDetalle(id).subscribe({
      next: (res: any) => {
        Swal.fire({
          icon: 'success',
          title: res.message,
          confirmButtonColor: '#28B463'
        });
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

}
