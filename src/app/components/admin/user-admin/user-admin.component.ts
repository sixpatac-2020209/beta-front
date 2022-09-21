import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.css']
})
export class UserAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showTableUsers : boolean = false
  notFound : boolean = false

  showTable()
  {
    this.showTableUsers =! this.showTableUsers;
  }
}
