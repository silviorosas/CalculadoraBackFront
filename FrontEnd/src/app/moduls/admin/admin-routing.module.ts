import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component'
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component'

const routes: Routes = [
  { path: '', component: AdminComponent, children: [
    { path: 'nuevo', component: NuevoUsuarioComponent },
    { path: 'listar', component: ListarUsuariosComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
