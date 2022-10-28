import { Component, OnInit, } from '@angular/core';
import { DetalleOrdenRestService } from 'src/app/services/detalleOrdenRest/detalle-orden-rest.service';
import { OrdenProduccionRestService } from 'src/app/services/ordenProduccionRest/orden-produccion-rest.service';
import { ResultadosRestService } from 'src/app/services/resultadosRest/resultados-rest.service';
import { SpProcesosOperariosRestService } from 'src/app/services/spProcesosOperariosRest/sp-procesos-operarios-rest.service';

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
    private spRest: SpProcesosOperariosRestService,
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
    this.detalleRest.corteVidrio(this.detallesArticulos[0].CVE_ART, params).subscribe({
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


  corteHoja() {
    let params1 = { corteH: this.detallesArticulos[1].REALIZADO }
    console.log(params1);
    this.detalleRest.corteHoja(this.detallesArticulos[1].CVE_ART, params1).subscribe({
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

  corteMarco() {
    let params2 = { corteM: this.detallesArticulos[2].REALIZADO }
    this.detalleRest.corteMarco(this.detallesArticulos[2].CVE_ART, params2).subscribe({
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

  corteCedazo() {
    let params3 = { corteC: this.detallesArticulos[3].REALIZADO }
    this.detalleRest.corteCedazo(this.detallesArticulos[3].CVE_ART, params3).subscribe({
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

  //fusion
  fusionHoja() {
    let params4 = { fusionH: this.detallesArticulos[4].REALIZADO }
    this.detalleRest.fusionHoja(this.detallesArticulos[4].CVE_ART, params4).subscribe({
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

  fusionMarco() {
    let params5 = { fusionM: this.detallesArticulos[5].REALIZADO }
    this.detalleRest.fusionMarco(this.detallesArticulos[5].CVE_ART, params5).subscribe({
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

  fusionCedazo() {
    let params6 = { fusionC: this.detallesArticulos[6].REALIZADO }
    this.detalleRest.fusionCedazo(this.detallesArticulos[6].CVE_ART, params6).subscribe({
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

  //limpieza
  limpiezaHoja() {
    let params7 = { limpiezaH: this.detallesArticulos[7].REALIZADO }
    this.detalleRest.limpiezaHoja(this.detallesArticulos[7].CVE_ART, params7).subscribe({
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

  limpiezaMarco() {
    let params8 = { limpiezaM: this.detallesArticulos[8].REALIZADO }
    this.detalleRest.limpiezaMarco(this.detallesArticulos[8].CVE_ART, params8).subscribe({
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

  colocacionTela() {
    let params9 = { colocacionTela: this.detallesArticulos[9].REALIZADO }
    this.detalleRest.colocacionTela(this.detallesArticulos[9].CVE_ART, params9).subscribe({
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

  //Accesorios
  corteBatiente() {
    let params10 = { corteBatiente: this.detallesArticulos[10].REALIZADO }
    this.detalleRest.corteBatiente(this.detallesArticulos[10].CVE_ART, params10).subscribe({
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

  colocacionBatiente() {
    let params11 = { colocacionBatiente: this.detallesArticulos[11].REALIZADO }
    this.detalleRest.colocacionBatiente(this.detallesArticulos[11].CVE_ART, params11).subscribe({
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

  tapajambas() {
    let params12 = { tapajambas: this.detallesArticulos[12].REALIZADO }
    this.detalleRest.tapajambas(this.detallesArticulos[12].CVE_ART, params12).subscribe({
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

  reticula() {
    let params13 = { reticula: this.detallesArticulos[13].REALIZADO }
    this.detalleRest.reticula(this.detallesArticulos[13].CVE_ART, params13).subscribe({
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

  updateDetalle() {
    this.resultadosRest.updateDetalle(this.detallesArticulos[0].CVE_ORDEN).subscribe({
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

  sp1() {
    let params = { articulo: this.detallesArticulos[0].CVE_ART }
    console.log(params)
    this.spRest.SP1(this.detallesArticulos[0].CVE_ORDEN, params).subscribe({
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

  sp2() {
    let params = { articulo: this.detallesArticulos[0].CVE_ART }
    console.log(params)
    this.spRest.SP2(this.detallesArticulos[0].CVE_ORDEN, params).subscribe({
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

  sp3() {
    let params = { articulo: this.detallesArticulos[0].CVE_ART }
    console.log(params)
    this.spRest.SP3(this.detallesArticulos[0].CVE_ORDEN, params).subscribe({
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

  sp4() {
    let params = { articulo: this.detallesArticulos[0].CVE_ART }
    console.log(params)
    this.spRest.SP4(this.detallesArticulos[0].CVE_ORDEN, params).subscribe({
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

  sp5() {
    let params = { articulo: this.detallesArticulos[0].CVE_ART }
    console.log(params)
    this.spRest.SP5(this.detallesArticulos[0].CVE_ORDEN, params).subscribe({
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

  sp6() {
    let params = { articulo: this.detallesArticulos[0].CVE_ART }
    console.log(params)
    this.spRest.SP6(this.detallesArticulos[0].CVE_ORDEN, params).subscribe({
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

  sp7() {
    let params = { articulo: this.detallesArticulos[0].CVE_ART }
    console.log(params)
    this.spRest.SP7(this.detallesArticulos[0].CVE_ORDEN, params).subscribe({
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

  sp8() {
    let params = { articulo: this.detallesArticulos[0].CVE_ART }
    console.log(params)
    this.spRest.SP8(this.detallesArticulos[0].CVE_ORDEN, params).subscribe({
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

  sp9() {
    let params = { articulo: this.detallesArticulos[0].CVE_ART }
    console.log(params)
    this.spRest.SP9(this.detallesArticulos[0].CVE_ORDEN, params).subscribe({
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

  sp10() {
    let params = { articulo: this.detallesArticulos[0].CVE_ART }
    console.log(params)
    this.spRest.SP10(this.detallesArticulos[0].CVE_ORDEN, params).subscribe({
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

  sp11() {
    let params = { articulo: this.detallesArticulos[0].CVE_ART }
    console.log(params)
    this.spRest.SP11(this.detallesArticulos[0].CVE_ORDEN, params).subscribe({
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

  sp12() {
    let params = { articulo: this.detallesArticulos[0].CVE_ART }
    console.log(params)
    this.spRest.SP12(this.detallesArticulos[0].CVE_ORDEN, params).subscribe({
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

  sp13() {
    let params = { articulo: this.detallesArticulos[0].CVE_ART }
    console.log(params)
    this.spRest.SP13(this.detallesArticulos[0].CVE_ORDEN, params).subscribe({
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

  sp14() {
    let params = { articulo: this.detallesArticulos[0].CVE_ART }
    console.log(params)
    this.spRest.SP14(this.detallesArticulos[0].CVE_ORDEN, params).subscribe({
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
