import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';


@NgModule({
  declarations: [
    AdminComponent,
    NuevoUsuarioComponent,
    ListarUsuariosComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
