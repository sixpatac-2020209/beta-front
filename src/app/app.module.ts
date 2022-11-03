import { HomeAdminComponent } from './components/admin/home-admin/home-admin.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/*IMPORTACIONES MANUALES*/
import { SwiperModule } from "swiper/angular";

/*IMPORTACIONES MANUALES*/
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { } from "@angular/material/snack-bar";
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from "@angular/material/tooltip";
import {MatSidenavModule} from '@angular/material/sidenav';

import {MatListModule} from '@angular/material/list'

import {
  PerfectScrollbarModule,
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
} from 'ngx-perfect-scrollbar';
import { ClickOutsideModule } from 'ng-click-outside';



const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: false,
};
//

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersProfileComponent } from './pages/users-profile/users-profile.component';
import { PagesFaqComponent } from './pages/pages-faq/pages-faq.component';
import { PagesContactComponent } from './pages/pages-contact/pages-contact.component';
import { PagesRegisterComponent } from './pages/pages-register/pages-register.component';
import { PagesLoginComponent } from './pages/pages-login/pages-login.component';
import { PagesError404Component } from './pages/pages-error404/pages-error404.component';
import { PagesBlankComponent } from './pages/pages-blank/pages-blank.component';
import { LayoutAdminComponent } from './components/admin/layout-admin/layout-admin.component';
import { LoginComponent } from './components/landingPage/login/login.component';
import { SidebarAdminComponent } from './components/admin/sidebar-admin/sidebar-admin.component';
import { UserAdminComponent } from './components/admin/user-admin/user-admin.component';
import { MatOptionModule } from '@angular/material/core';
import { AutorizationsComponent } from './components/admin/autorizations/autorizations.component';
import { OrderProductionsComponent } from './components/admin/order-productions/order-productions.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PedidosAdminComponent } from './components/admin/pedidos-admin/pedidos-admin.component';
import { SearchPedidoPipe } from './pipes/search-pedido.pipe';
import { PedidoComponent } from './components/admin/pedido/pedido.component';
import { OneOrdenComponent } from './components/admin/order-production/one-orden.component';
import { OperariosComponent } from './components/landingPage/operarios/operarios.component';
import { AutorizationComponent } from './components/admin/autorization/autorization.component';
import { SearchOrdenPipe } from './pipes/search-orden.pipe';
import { SearchAutorizationPipe } from './pipes/search-autorization.pipe';
import { OrdenesFabricacionComponent } from './components/admin/ordenes-fabricacion/ordenes-fabricacion.component';
import { OrdenFabricacionComponent } from './components/admin/orden-fabricacion/orden-fabricacion.component';
import { ProgramacionComponent } from './components/admin/programacion/programacion.component';
import { ResultadosComponent } from './components/admin/resultados/resultados.component';
import { LayoutGerenteComercialComponent } from './components/gerenteComercial/layout-gerente-comercial/layout-gerente-comercial.component';
import { LayoutLogisticaComponent } from './components/logistica/layout-logistica/layout-logistica.component';
import { LayoutDisenioComponent } from './components/diseño/layout-disenio/layout-disenio.component';
import { LayoutProduccionComponent } from './components/produccion/layout-produccion/layout-produccion.component';
import { SidebarProduccionComponent } from './components/produccion/sidebar-produccion/sidebar-produccion.component';
import { SidebarDisenioComponent } from './components/diseño/sidebar-disenio/sidebar-disenio.component';
import { SidebarGerenteComercialComponent } from './components/gerenteComercial/sidebar-gerente-comercial/sidebar-gerente-comercial.component';
import { SidebarLogisticaComponent } from './components/logistica/sidebar-logistica/sidebar-logistica.component';
import { PedidosComponent } from './components/gerenteComercial/pedidos/pedidos.component';
import { OrdenesProduccionComponent } from './components/gerenteComercial/ordenes-produccion/ordenes-produccion.component';
import { OrdenProduccionComponent } from './components/gerenteComercial/orden-produccion/orden-produccion.component';
import { AutorizacionesComponent } from './components/gerenteComercial/autorizaciones/autorizaciones.component';
import { AutorizacionComponent } from './components/gerenteComercial/autorizacion/autorizacion.component';
import { OrdenesFabricacionGerenteComponent } from './components/gerenteComercial/ordenes-fabricacion-gerente/ordenes-fabricacion-gerente.component';
import { OrdenFabricacionGerenteComponent } from './components/gerenteComercial/orden-fabricacion-gerente/orden-fabricacion-gerente.component';
import { PedidoGerenteComponent } from './components/gerenteComercial/pedido-gerente/pedido-gerente.component';
import { ProgramacionGerenteComponent } from './components/gerenteComercial/programacion-gerente/programacion-gerente.component';
import { HomeProduccionComponent } from './components/produccion/home-produccion/home-produccion.component';
import { OrdenesFabricacionProduccionComponent } from './components/produccion/ordenes-fabricacion-produccion/ordenes-fabricacion-produccion.component';
import { OrdenFabricacionProduccionComponent } from './components/produccion/orden-fabricacion-produccion/orden-fabricacion-produccion.component';
import { AutorizacionesProduccionComponent } from './components/produccion/autorizaciones-produccion/autorizaciones-produccion.component';
import { AutorizacionProduccionComponent } from './components/produccion/autorizacion-produccion/autorizacion-produccion.component';
import { OrdenesProduccionProduccionComponent } from './components/produccion/ordenes-produccion-produccion/ordenes-produccion-produccion.component';
import { OrdenProduccionProduccionComponent } from './components/produccion/orden-produccion-produccion/orden-produccion-produccion.component';
import { PedidosDisenioComponent } from './components/diseño/pedidos-disenio/pedidos-disenio.component';
import { PedidoDisenioComponent } from './components/diseño/pedido-disenio/pedido-disenio.component';
import { OrdenesFabricacionDisenioComponent } from './components/diseño/ordenes-fabricacion-disenio/ordenes-fabricacion-disenio.component';
import { OrdenFabricacionDisenioComponent } from './components/diseño/orden-fabricacion-disenio/orden-fabricacion-disenio.component';
import { OrdenOperariosComponent } from './components/landingPage/operarios/orden-operarios/orden-operarios.component';
import { DetalleOrdenOperariosComponent } from './components/landingPage/operarios/detalle-orden-operarios/detalle-orden-operarios.component';
import { ArticulosOrdenOperariosComponent } from './components/landingPage/operarios/articulos-orden-operarios/articulos-orden-operarios.component';
import { CorteComponent } from './components/landingPage/operarios/detallesOrden/corte/corte.component';
import { LimpiezaComponent } from './components/landingPage/operarios/detallesOrden/limpieza/limpieza.component';
import { FusionComponent } from './components/landingPage/operarios/detallesOrden/fusion/fusion.component';
import { AccesoriosComponent } from './components/landingPage/operarios/detallesOrden/accesorios/accesorios.component';
import { LayoutOperariosComponent } from './components/landingPage/operarios/layout-operarios/layout-operarios.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent,
    UsersProfileComponent,
    PagesFaqComponent,
    PagesContactComponent,
    PagesRegisterComponent,
    PagesLoginComponent,
    PagesError404Component,
    PagesBlankComponent,
    LayoutAdminComponent,
    LoginComponent,
    SidebarAdminComponent,
    UserAdminComponent,
    AutorizationsComponent,
    OrderProductionsComponent,
    NotFoundComponent,
    PedidosAdminComponent,
    HomeAdminComponent,
    SearchPedidoPipe,
    PedidoComponent,
    OneOrdenComponent,
    OperariosComponent,
    AutorizationComponent,
    SearchOrdenPipe,
    SearchAutorizationPipe,
    OrdenesFabricacionComponent,
    OrdenFabricacionComponent,
    ProgramacionComponent,
    ResultadosComponent,
    LayoutGerenteComercialComponent,
    LayoutLogisticaComponent,
    LayoutDisenioComponent,
    LayoutProduccionComponent,
    SidebarProduccionComponent,
    SidebarDisenioComponent,
    SidebarGerenteComercialComponent,
    SidebarLogisticaComponent,
    PedidosComponent,
    OrdenesProduccionComponent,
    OrdenProduccionComponent,
    AutorizacionesComponent,
    AutorizacionComponent,
    OrdenesFabricacionGerenteComponent,
    OrdenFabricacionGerenteComponent,
    PedidoGerenteComponent,
    ProgramacionGerenteComponent,
    HomeProduccionComponent,
    OrdenesFabricacionProduccionComponent,
    OrdenFabricacionProduccionComponent,
    AutorizacionesProduccionComponent,
    AutorizacionProduccionComponent,
    OrdenesProduccionProduccionComponent,
    OrdenProduccionProduccionComponent,
    PedidosDisenioComponent,
    PedidoDisenioComponent,
    OrdenesFabricacionDisenioComponent,
    OrdenFabricacionDisenioComponent,
    OrdenOperariosComponent,
    DetalleOrdenOperariosComponent,
    ArticulosOrdenOperariosComponent,
    CorteComponent,
    LimpiezaComponent,
    FusionComponent,
    AccesoriosComponent,
    LayoutOperariosComponent,
    PruebasComponent,
  ],
  imports: [
    SwiperModule,
    FormsModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ClickOutsideModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    MatSortModule,
    MatToolbarModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    NgApexchartsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    MatTabsModule,
    MatExpansionModule,
    MatTooltipModule,
    MatOptionModule,
    MatSidenavModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
