import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NosotrosComponent } from './principal/nosotros/nosotros.component';
import { ContactoComponent } from './principal/contacto/contacto.component';
import { MensajesComponent } from './principal/mensajes/mensajes.component';

const routes: Routes = [
  {
    path: "",
    component: NosotrosComponent
  },
  {
    path: "nosotros",
    component: NosotrosComponent
  },
  {
    path: "contacto",
    component: ContactoComponent
  },
  {
    path: "mensajes/:list",
    component: MensajesComponent
  },
  {
    path: "mensajes/:list/:pais",
    component: MensajesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
