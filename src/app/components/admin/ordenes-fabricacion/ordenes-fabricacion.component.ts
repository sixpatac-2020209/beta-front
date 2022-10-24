import { Component, OnInit } from '@angular/core';
import { OrdenModel } from 'src/app/models/orden.model';
import { ExportExcelOrdenService } from 'src/app/services/exportData/exportExcelOrden/export-excel-orden.service';
import { OrdenProduccionRestService } from 'src/app/services/ordenProduccionRest/orden-produccion-rest.service';
import { AutorizationRestService } from 'src/app/services/autorizationRest/autorization-rest.service';


@Component({
  selector: 'app-ordenes-fabricacion',
  templateUrl: './ordenes-fabricacion.component.html',
  styleUrls: ['./ordenes-fabricacion.component.css']
})
export class OrdenesFabricacionComponent implements OnInit {
orden: OrdenModel;
  ordenes: any;
  autorizationPipe: any
  notFound: boolean = false;


  constructor(
    private ordenRest: OrdenProduccionRestService,
    private excelService: ExportExcelOrdenService,
    private autorizationRest: AutorizationRestService

  ) {
    this.orden = new OrdenModel('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');
  }

  ngOnInit(): void {
    this.getOrdenes();
  }

  getOrdenes() {
    this.autorizationRest.getAutorizaciones().subscribe({
      next: (res: any) => {
        this.ordenes = res.returnAuth;
        for (let orden of this.ordenes) {
          orden.position = this.ordenes.indexOf(orden) + 1;
        }
      },
      error: (err) => console.log(err),
    });
  }

  getOrden(id: string) {
    this.ordenRest.getOrden(id).subscribe({
      next: (res: any) => {
        this.orden = res.returnOrden;
      },
      error: (err) => {
        alert(err.error.message);
      },
    });
  }

  exportExcel() {
    this.excelService.downloadExcel(this.ordenes);
  }

}
