import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import Swal from 'sweetalert2';
import { ResultadosRestService } from 'src/app/services/resultadosRest/resultados-rest.service';
@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {
  CVE_DOC: any;
detallesOrden:any;
  constructor(
    public activatedRoute: ActivatedRoute,
    private resultadosRest : ResultadosRestService, 
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(ruta => {
      this.CVE_DOC = ruta.get('id');
    });

    this.getResultados(this.CVE_DOC);
  }

getResultados(id: string) {

    this.resultadosRest.getDetalleResultados(id).subscribe({
      next: (res: any) => {
        this.detallesOrden = res.returnResultados;
      },
      error: (err) => {
        console.log(err);
      },
    });
}
}
