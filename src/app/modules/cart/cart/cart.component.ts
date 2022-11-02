import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { ProductStore } from 'src/app/store/product-store';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  ProductStore = ProductStore;
  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  backButton() {
    this.location.back()
  }

  delete() {
    ProductStore.unsetCartData();
  }

}
