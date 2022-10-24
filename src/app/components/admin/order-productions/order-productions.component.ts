import { Component, OnInit } from '@angular/core';
import { OrdenModel } from 'src/app/models/orden.model';
import { ExportExcelOrdenService } from 'src/app/services/exportData/exportExcelOrden/export-excel-orden.service';
import { OrdenProduccionRestService } from 'src/app/services/ordenProduccionRest/orden-produccion-rest.service';

@Component({
  selector: 'app-order-productions',
  templateUrl: './order-productions.component.html',
  styleUrls: ['./order-productions.component.css']
})
export class OrderProductionsComponent implements OnInit {
  orden: OrdenModel;
  ordenes: any;
  ordenPipe: any;
  notFound: boolean = false;


  constructor(
    private ordenRest: OrdenProduccionRestService,
    private excelService: ExportExcelOrdenService,

  ) {
    this.orden = new OrdenModel('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');
  }

  ngOnInit(): void {
    this.getOrdenes();
  }

  getOrdenes() {
    this.ordenRest.getOrdenes().subscribe({
      next: (res: any) => {
        this.ordenes = res.returnOrdenes;
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
