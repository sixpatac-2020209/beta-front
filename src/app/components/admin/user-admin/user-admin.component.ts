import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { UserRestService } from 'src/app/services/userRest/user-rest.service';
import { ExportExcelService } from '../../../services/exportData/exportExcel/export-excel.service';

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: [
    './user-admin.component.css',
    '../../../../assets/others/assets/scss/style.scss'
  ]
})
export class UserAdminComponent implements OnInit {
  user: UsuarioModel;
  users: any;

  //Variables - Control de Páginas//
  pageCard = 1;
  pageSizeCard = 6;
  page = 1;
  pageSize = 5;
  collectionSize: any

  constructor(
    private userRest: UserRestService,
    private excelService: ExportExcelService,

  ) {
    this.user = new UsuarioModel('', '', '', '', '', '', '');
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userRest.getUsers().subscribe({
      next: (res: any) => {
        this.users = res.users;
        console.log(this.users.length);
        this.collectionSize = this.users.length;
        for (let user of this.users) {
          user.position = this.users.indexOf(user) + 1
        }
        if (this.showTableUsers === true) {
          for (let user of this.users) {
            user.checked = true
          }
          this.users = this.users.map((user: any, i: number) => ({ id: i + 1, ...user }))
            .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
        }
      },
      error: (err) => console.log(err)
    })
  }

  getUser(id: string) {
    this.userRest.getUser(id).subscribe({
      next: (res: any) => {
        this.user = res.user;
        console.log(this.user);
      },
      error: (err) => { alert(err.error.message) }
    })
  }

  //Variables - Mostrar | Ocultar DOM//
  showTableUsers: boolean = false
  notFound: boolean = false

  //Botones de Acciones//
  buttonActions: boolean = false;
  controloClick: number = 0;

  showTable() {
    this.showTableUsers = !this.showTableUsers;
  }

  showButtonActions(ID: any, check: any) {
    this.controloClick += 1
    let controlCheck = !check.checked
    if (this.controloClick == 1) {
      for (let user of this.users) {
        if (ID != user.id) {
          user.checked = !controlCheck
        }
        else if (ID == user.id) {
          user.checked = controlCheck
        }
      }
    }
    else if (this.controloClick == 2) {
      for (let user of this.users) {
        user.checked = true;
      }
      this.controloClick = 0;
    }
    this.buttonActions = !this.buttonActions;
  }

  //Exportar Datos a Excel//
  exportExcel() {
    this.excelService.downloadExcel(this.users)
  }
}
