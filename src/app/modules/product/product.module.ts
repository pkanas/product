import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductService } from 'src/app/services/product.service';
import { LoaderComponent } from './loader/loader/loader.component';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  providers: [ProductService]
})
export class ProductModule { }
