import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { UserRestService } from 'src/app/services/userRest/user-rest.service';

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.css']
})
export class UserAdminComponent implements OnInit {
  user: UsuarioModel;
  users: any;

  constructor(
    private userRest: UserRestService,
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
}
