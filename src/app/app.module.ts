import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

// Servicios
import {CategoriaService} from './services/categoria.service';
import { TipoempaqueService } from './services/tipoempaque.service';
import { ProductoService } from './services/producto.service';
import { FacturaService } from './services/factura.service';
import { ClienteService } from './services/cliente.service';
import { ProveedorService } from './services/proveedor.service';
import { CompraService } from './services/compra.service';
import { TiporegistroService } from './services/tiporegistro.service';
import { InventarioService } from './services/inventario.service';

// Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { HomeComponent } from './components/home/home.component';
import { TipoempaqueComponent } from './components/tipoempaque/tipoempaque.component';
import { ProductoComponent } from './components/producto/producto.component';
import { FacturaComponent } from './components/factura/factura.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ProveedorComponent } from './components/proveedor/proveedor.component';
import { CompraComponent } from './components/compra/compra.component';
import { TiporegistroComponent } from './components/tiporegistro/tiporegistro.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { CategoriaAgregarComponent } from './components/categoria-agregar/categoria-agregar.component';
import { ClienteAgregarComponent } from './components/cliente-agregar/cliente-agregar.component';
import { ProveedorAgregarComponent } from './components/proveedor-agregar/proveedor-agregar.component';
import { TipoempaqueAgregarComponent } from './components/tipoempaque-agregar/tipoempaque-agregar.component';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoriaComponent,
    HomeComponent,
    TipoempaqueComponent,
    ProductoComponent,
    FacturaComponent,
    ClienteComponent,
    ProveedorComponent,
    CompraComponent,
    TiporegistroComponent,
    InventarioComponent,
    CategoriaAgregarComponent,
    ClienteAgregarComponent,
    ProveedorAgregarComponent,
    TipoempaqueAgregarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
  CategoriaService,
  TipoempaqueService,
  ProductoService,
  FacturaService,
  ClienteService,
  ProveedorService,
  CompraService,
  TiporegistroService,
  InventarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
