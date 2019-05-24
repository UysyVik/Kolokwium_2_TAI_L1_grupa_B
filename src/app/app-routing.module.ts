import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersLMComponent } from './orders-lm/orders-lm.component';

const routes: Routes = [
  { path: 'orders-LM', component: OrdersLMComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
