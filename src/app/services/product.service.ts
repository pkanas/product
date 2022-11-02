import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../core/model/product-model';
import { ProductStore } from '../store/product-store';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private _http: HttpClient,
  ) { }

  getItems(): Observable<Product[]> {
    return this._http.get<Product[]>('https://fakestoreapi.com/products').pipe(
      map((res: Product[]) => {
        ProductStore.setProducts(res);
        return res;
      })
    );

  }
}
