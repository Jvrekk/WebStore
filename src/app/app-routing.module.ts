import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavRoutes } from './models/NavRoutes.enum';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
