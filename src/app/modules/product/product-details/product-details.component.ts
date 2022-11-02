import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductStore } from 'src/app/store/product-store';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  ProductStore = ProductStore;

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  backButton() {
    this._router.navigateByUrl('/product')
  }

  addToCart() {
    ProductStore.setCartProduct(ProductStore.productItem);
    this._router.navigateByUrl('/cart')
  }

  ngOnDestroy() {
    // ProductStore.unsetIndividualProduct();
  }

}
