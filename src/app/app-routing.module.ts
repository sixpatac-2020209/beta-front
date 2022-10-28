import { UserAdminComponent } from './components/admin/user-admin/user-admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutAdminComponent } from './components/admin/layout-admin/layout-admin.component';
import { LoginComponent } from './components/landingPage/login/login.component';

import { AutorizationsComponent } from './components/admin/autorizations/autorizations.component';
import { OrderProductionsComponent } from './components/admin/order-productions/order-productions.component';
import { PedidosAdminComponent } from './components/admin/pedidos-admin/pedidos-admin.component';
import { HomeAdminComponent } from './components/admin/home-admin/home-admin.component';
import { PedidoComponent } from './components/admin/pedido/pedido.component';
import { OneOrdenComponent } from './components/admin/order-production/one-orden.component';
import { OperariosComponent } from './components/landingPage/operarios/operarios.component';
import { AutorizationComponent } from './components/admin/autorization/autorization.component';
import { OrdenesFabricacionComponent } from './components/admin/ordenes-fabricacion/ordenes-fabricacion.component';
import { OrdenFabricacionComponent } from './components/admin/orden-fabricacion/orden-fabricacion.component';
import { ProgramacionComponent } from './components/admin/programacion/programacion.component';
import { ResultadosComponent } from './components/admin/resultados/resultados.component';
import { LayoutDisenioComponent } from './components/diseño/layout-disenio/layout-disenio.component';
import { LayoutLogisticaComponent } from './components/logistica/layout-logistica/layout-logistica.component';
import { LayoutGerenteComercialComponent } from './components/gerenteComercial/layout-gerente-comercial/layout-gerente-comercial.component';
import { LayoutProduccionComponent } from './components/produccion/layout-produccion/layout-produccion.component';
import { AutorizacionesComponent } from './components/gerenteComercial/autorizaciones/autorizaciones.component';
import { AutorizacionComponent } from './components/gerenteComercial/autorizacion/autorizacion.component';
import { OrdenesProduccionComponent } from './components/gerenteComercial/ordenes-produccion/ordenes-produccion.component';
import { OrdenProduccionComponent } from './components/gerenteComercial/orden-produccion/orden-produccion.component';
import { PedidosComponent } from './components/gerenteComercial/pedidos/pedidos.component';
import { OrdenesFabricacionGerenteComponent } from './components/gerenteComercial/ordenes-fabricacion-gerente/ordenes-fabricacion-gerente.component';
import { OrdenFabricacionGerenteComponent } from './components/gerenteComercial/orden-fabricacion-gerente/orden-fabricacion-gerente.component';
import { PedidoGerenteComponent } from './components/gerenteComercial/pedido-gerente/pedido-gerente.component';
import { ProgramacionGerenteComponent } from './components/gerenteComercial/programacion-gerente/programacion-gerente.component';
import { HomeProduccionComponent } from './components/produccion/home-produccion/home-produccion.component';
import { AutorizacionesProduccionComponent } from './components/produccion/autorizaciones-produccion/autorizaciones-produccion.component';
import { AutorizacionProduccionComponent } from './components/produccion/autorizacion-produccion/autorizacion-produccion.component';
import { OrdenesProduccionProduccionComponent } from './components/produccion/ordenes-produccion-produccion/ordenes-produccion-produccion.component';
import { OrdenProduccionProduccionComponent } from './components/produccion/orden-produccion-produccion/orden-produccion-produccion.component';
import { OrdenesFabricacionProduccionComponent } from './components/produccion/ordenes-fabricacion-produccion/ordenes-fabricacion-produccion.component';
import { OrdenFabricacionProduccionComponent } from './components/produccion/orden-fabricacion-produccion/orden-fabricacion-produccion.component';
import { PedidosDisenioComponent } from './components/diseño/pedidos-disenio/pedidos-disenio.component';
import { PedidoDisenioComponent } from './components/diseño/pedido-disenio/pedido-disenio.component';
import { OrdenesFabricacionDisenioComponent } from './components/diseño/ordenes-fabricacion-disenio/ordenes-fabricacion-disenio.component';
import { OrdenFabricacionDisenioComponent } from './components/diseño/orden-fabricacion-disenio/orden-fabricacion-disenio.component';

const routes: Routes = [
  { path: '', component: OperariosComponent },
  { path: 'login', component: LoginComponent },

  {
    path: 'admin', component: LayoutAdminComponent, children: [
      { path: 'home', component: HomeAdminComponent },
      { path: 'user', component: UserAdminComponent },
      { path: 'autorizaciones', component: AutorizationsComponent },
      { path: 'autorizarOrden/:id', component: AutorizationComponent },
      { path: 'ordenesProduccion', component: OrderProductionsComponent },
      { path: 'ordenProducción/:id', component: OneOrdenComponent },
      { path: 'pedidos', component: PedidosAdminComponent },
      { path: 'pedido/:id', component: PedidoComponent },
      { path: 'ordenesFabricacion', component: OrdenesFabricacionComponent },
      { path: 'ordenFabricacion/:id', component: OrdenFabricacionComponent },
      { path: 'programacion', component: ProgramacionComponent },
      { path: 'resultados/:id', component: ResultadosComponent },
    ]
  },
  {
    path: 'gerenteComercial', component: LayoutGerenteComercialComponent, children: [
      { path: 'autorizaciones', component: AutorizacionesComponent },
      { path: 'autorizarOrden/:id', component: AutorizacionComponent },
      { path: 'ordenesProduccion', component: OrdenesProduccionComponent },
      { path: 'ordenProducción/:id', component: OrdenProduccionComponent },
      { path: 'pedidos', component: PedidosComponent },
      { path: 'pedido/:id', component: PedidoGerenteComponent },
      { path: 'ordenesFabricacion', component: OrdenesFabricacionGerenteComponent },
      { path: 'ordenFabricacion/:id', component: OrdenFabricacionGerenteComponent },
      { path: 'programacion', component: ProgramacionGerenteComponent },
    ]
  },
  {
    path: 'produccion', component: LayoutProduccionComponent, children: [
      { path: 'home', component: HomeAdminComponent },
      { path: 'autorizaciones', component: AutorizacionesProduccionComponent },
      { path: 'autorizarOrden/:id', component: AutorizacionProduccionComponent },
      { path: 'ordenesProduccion', component: OrdenesProduccionProduccionComponent },
      { path: 'ordenProducción/:id', component: OrdenProduccionProduccionComponent },
      { path: 'ordenesFabricacion', component: OrdenesFabricacionProduccionComponent },
      { path: 'ordenFabricacion/:id', component: OrdenFabricacionProduccionComponent },
    ]
  },

  {
    path: 'disenio', component: LayoutDisenioComponent, children: [
      { path: 'pedidos', component: PedidosDisenioComponent },
      { path: 'pedido/:id', component: PedidoDisenioComponent },
      { path: 'ordenesFabricacion', component: OrdenesFabricacionDisenioComponent },
      { path: 'ordenFabricacion/:id', component: OrdenFabricacionDisenioComponent },
    ]
  },
  { path: 'logistica', component: LayoutLogisticaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
