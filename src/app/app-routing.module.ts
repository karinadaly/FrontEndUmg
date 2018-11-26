import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { TipoempaqueComponent} from './components/tipoempaque/tipoempaque.component';
import { ProductoComponent } from './components/producto/producto.component';
import { FacturaComponent } from './components/factura/factura.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import {ProveedorComponent  } from './components/proveedor/proveedor.component';
import {CompraComponent  } from './components/compra/compra.component';
import { TiporegistroComponent } from './components/tiporegistro/tiporegistro.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { CategoriaAgregarComponent } from './components/categoria-agregar/categoria-agregar.component';
import { ClienteAgregarComponent } from './components/cliente-agregar/cliente-agregar.component';
import { ProveedorAgregarComponent } from './components/proveedor-agregar/proveedor-agregar.component';
import { TipoempaqueAgregarComponent } from './components/tipoempaque-agregar/tipoempaque-agregar.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'categorias', component: CategoriaComponent},
  {path: 'tipoempaque', component: TipoempaqueComponent},
  {path: 'producto', component: ProductoComponent},
  {path: 'factura', component: FacturaComponent},
  {path: 'cliente', component: ClienteComponent},
  {path: 'proveedor', component: ProveedorComponent},
  {path: 'compra', component: CompraComponent },
  {path: 'tiporegistro', component: TiporegistroComponent },
  {path: 'inventario', component: InventarioComponent },
  {path: 'categoria-agregar', component: CategoriaAgregarComponent},
  {path: 'cliente-agregar', component: ClienteAgregarComponent},
  {path: 'proveedor-agregar', component: ProveedorAgregarComponent},
  {path: 'tipoempaque-agregar', component: TipoempaqueAgregarComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
