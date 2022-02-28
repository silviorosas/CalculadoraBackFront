import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'admin', loadChildren: () => import('./moduls/admin/admin.module').then(m => m.AdminModule) },
  { path: 'login', loadChildren: () => import('./moduls/login/login.module').then(m => m.LoginModule) },
  { path: 'calculadora', loadChildren: () => import('./moduls/calculadora/calculadora.module').then(m => m.CalculadoraModule) },
  { path: '', redirectTo: 'calculadora', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
