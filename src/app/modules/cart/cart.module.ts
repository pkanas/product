import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { CartRoutingModule } from './cart-routing.module';



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CartRoutingModule,
    CommonModule
  ]
})
export class CartModule { }
