import { Component, OnInit } from '@angular/core';
import { VendedorModel } from 'src/app/models/vendedor.model';
import { VendedorRestService } from 'src/app/services/vendedorRest/vendedor-rest.service';

@Component({
  selector: 'app-vendedores-admin',
  templateUrl: './vendedores-admin.component.html',
  styleUrls: ['./vendedores-admin.component.css']
})
export class VendedoresAdminComponent implements OnInit {

  vendedor: VendedorModel;
  vendedores: any;

  //Variables - Mostrar | Ocultar DOM//
  showTableUsers: boolean = false
  notFound: boolean = false

  constructor(
    private vendedorRest: VendedorRestService,
  ) {
    this.vendedor = new VendedorModel();
  }

  ngOnInit(): void {
    this.getVendedores();
  }

  getVendedores() {
    this.vendedorRest.getVendedores().subscribe({
      next: (res: any) => {
        this.vendedores = res.returnVendedores;
        console.log(this.vendedores.length);
      },
      error: (err) => console.log(err)
    })
  }

  getVendedor(id: string) {
    this.vendedorRest.getVendedor(id).subscribe({
      next: (res: any) => {
        this.vendedor = res.vendedorEncontrado;
        console.log(this.vendedor);
      },
      error: (err) => { alert(err.error.message) }
    })
  }

   //Botones de Acciones//
   buttonActions : boolean = false;
   controloClick : number = 0;
   showButtonActions(ID:any, check:any)
   {
     this.controloClick += 1
     let controlCheck =! check.checked
     if(this.controloClick == 1)
     {
       for(let vendedor of this.vendedores)
       {
         if(ID != vendedor.CVE_DOC)
         {
           vendedor.checked =! controlCheck
         }
         else if(ID == vendedor.CVE_DOC)
         {
           vendedor.checked = controlCheck
         }
       }
     }
     else if(this.controloClick == 2)
     {
       for(let vendedor of this.vendedores)
       {
         vendedor.checked = true;
       }
       this.controloClick = 0;
     }
     this.buttonActions =! this.buttonActions;
   }
}
