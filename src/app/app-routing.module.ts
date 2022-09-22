import { UserAdminComponent } from './components/admin/user-admin/user-admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { PagesBlankComponent } from './pages/pages-blank/pages-blank.component';
import { PagesContactComponent } from './pages/pages-contact/pages-contact.component';
import { PagesError404Component } from './pages/pages-error404/pages-error404.component';
import { PagesFaqComponent } from './pages/pages-faq/pages-faq.component';
import { PagesLoginComponent } from './pages/pages-login/pages-login.component';
import { PagesRegisterComponent } from './pages/pages-register/pages-register.component';
import { UsersProfileComponent } from './pages/users-profile/users-profile.component';
import { LayoutAdminComponent } from './components/admin/layout-admin/layout-admin.component';
import { LoginComponent } from './components/landingPage/login/login.component';
import { HomeAdminComponent } from './components/admin/home-admin/home-admin.component';
import { AutorizationsComponent } from './components/admin/autorizations/autorizations.component';
import { OrderProductionsComponent } from './components/admin/order-productions/order-productions.component';
import { QualityControlComponent } from './components/admin/quality-control/quality-control.component';
import { DetailsOrderComponent } from './components/admin/details-order/details-order.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'admin', component: LayoutAdminComponent, children: [
      {path: 'home', component: HomeAdminComponent},
      {path: 'user', component: UserAdminComponent},
      {path: 'autorizacion',component: AutorizationsComponent},
      {path: 'ordenesProduccion', component: OrderProductionsComponent},
      {path: 'detallesOrden', component: DetailsOrderComponent},
      {path: 'controlCalidad', component: QualityControlComponent}
    ]
  },
  {path:'**', component: NotFoundComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'pages-blank', component: PagesBlankComponent },
  { path: 'pages-contact', component: PagesContactComponent },
  { path: 'pages-error404', component: PagesError404Component },
  { path: 'pages-faq', component: PagesFaqComponent },
  { path: 'pages-login', component: PagesLoginComponent },
  { path: 'pages-register', component: PagesRegisterComponent },
  { path: 'user-profile', component: UsersProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
