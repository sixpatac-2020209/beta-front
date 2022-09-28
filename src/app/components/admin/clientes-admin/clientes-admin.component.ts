import { Component, OnInit } from '@angular/core';
import { ClienteModel } from 'src/app/models/cliente.model';
import { ClienteRestService } from 'src/app/services/clienteRest/cliente-rest.service';

@Component({
  selector: 'app-clientes-admin',
  templateUrl: './clientes-admin.component.html',
  styleUrls: ['./clientes-admin.component.css']
})
export class ClientesAdminComponent implements OnInit {
  cliente: ClienteModel;
  clientes: any;

  constructor(
    private clienteRest: ClienteRestService,
  ) {
    this.cliente = new ClienteModel();
  }

  ngOnInit(): void {
    this.getClientes();
  }
  //Variables - Mostrar | Ocultar DOM//
  showTableUsers: boolean = false
  notFound: boolean = false

  //Botones de Acciones//
  buttonActions: boolean = false;
  controloClick: number = 0;

  getClientes() {
    this.clienteRest.getClientes().subscribe({
      next: (res: any) => {
        this.clientes = res.returnClientes;
        console.log(this.clientes.length);
      },
      error: (err) => console.log(err)
    })
  }

  getCliente(id: string) {
    this.clienteRest.getCliente(id).subscribe({
      next: (res: any) => {
        this.cliente = res.clienteEncontrado;
        console.log(this.cliente);
      },
      error: (err) => { alert(err.error.message) }
    })
  }




  showButtonActions(ID: any, check: any) {
    this.controloClick += 1
    let controlCheck = !check.checked
    if (this.controloClick == 1) {
      for (let cliente of this.clientes) {
        if (ID != cliente.CVE_DOC) {
          cliente.checked = !controlCheck
        }
        else if (ID == cliente.CVE_DOC) {
          cliente.checked = controlCheck
        }
      }
    }
    else if (this.controloClick == 2) {
      for (let cliente of this.clientes) {
        cliente.checked = true;
      }
      this.controloClick = 0;
    }
    this.buttonActions = !this.buttonActions;
  }

}
