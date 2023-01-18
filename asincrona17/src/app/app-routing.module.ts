import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './principal/producto/producto.component';
import { ProductosComponent } from './principal/productos/productos.component';

const routes: Routes = [
  {
    path: "",
    component: ProductosComponent
  },
  {
    path: "productos",
    component: ProductosComponent
  },
  {
    path: "productos/producto/:productos/:id",
    component: ProductoComponent
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
