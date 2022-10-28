import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-orden-operarios',
  templateUrl: './detalle-orden-operarios.component.html',
  styleUrls: ['./detalle-orden-operarios.component.css']
})
export class DetalleOrdenOperariosComponent implements OnInit {

  CVE_ART: any;

  constructor(
    public activatedRoute: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(ruta => {
      this.CVE_ART = ruta.get('id');
    });
    
  }

}
