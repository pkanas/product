import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { ProductStore } from 'src/app/store/product-store';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  ProductStore = ProductStore;

  constructor(private _productService: ProductService,
    private _router: Router,
    private _cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this._productService.getItems().subscribe(res => {
      this.refresh();
    })
  }

  goToDetailsPage(id: number, product: any) {
    ProductStore.setIndividualProduct(product)
    this._router.navigateByUrl(`product/${id}`)
  }

  refresh() {
    this._cdr.detectChanges();
  }

  ngOnDestroy() {
    ProductStore.unsetProducts();
  }

}
