import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavRoutes } from './models/NavRoutes.enum';
import { CartComponent } from './pages/cart/cart.component';
import { ItemListComponent } from './pages/item-list/item-list.component';
import { OrderComponent } from './pages/order/order.component';
import { ItemComponent } from './pages/item/item.component';

const routes: Routes = [
  {path:'cart', component:CartComponent},
  {path:'', component:ItemListComponent},
  {path:'order', component:OrderComponent},
  {path:'item/:id', component:ItemComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
