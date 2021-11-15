import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoAdmiComponent } from './modulos/catalogo/catalogo-admi/catalogo-admi.component';
import { CatalogoUsuarioComponent } from './modulos/catalogo/catalogo-usuario/catalogo-usuario.component';

const routes: Routes = [

  {path:'',redirectTo:'/catalogo-admi', pathMatch: 'full'},
  {
    path:'catalogo-admi', 
    component: CatalogoAdmiComponent
  },
  {
    path: 'catalogo-usuario',
    component: CatalogoUsuarioComponent
  }
];


@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
