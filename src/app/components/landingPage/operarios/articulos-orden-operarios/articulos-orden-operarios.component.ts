import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-articulos-orden-operarios',
  templateUrl: './articulos-orden-operarios.component.html',
  styleUrls: ['./articulos-orden-operarios.component.css']
})
export class ArticulosOrdenOperariosComponent implements OnInit {
  CVE_DOC: any;

  constructor(
    public activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(ruta => {
      this.CVE_DOC = ruta.get('id');
    });

  }

}
