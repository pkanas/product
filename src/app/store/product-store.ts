


import { action, computed, observable } from "mobx-angular";
import { Product } from "../core/model/product-model";


class Store {

    @observable
    private _products: Product[] = [];

    @observable
    private _individualProducts: any;

    @observable
    private _cartData: any;

    @observable
    loaded: boolean = false;

    @observable
    individualLoaded: boolean = false;


    @action
    setProducts(response: Product[]) {
        this._products = response;
        this.loaded = true;
    }

    @action
    setIndividualProduct(response: Product) {
        this._individualProducts = response;
        this.individualLoaded = true;
    }

    @computed
    get allProductItems(): any[] {
        return this._products;
    }

    @computed
    get productItem(): any {
        return this._individualProducts;
    }

    @action
    setCartProduct(response: Product) {
        this._cartData = response;
    }

    @computed
    get cartData(): any {
        return this._cartData;
    }

    @action
    unsetProducts() {
        this.loaded = false;
        this._products = [];
    }

    @action
    unsetIndividualProduct() {
        this.individualLoaded = false;
        this._individualProducts = null as any;
    }

    @action
    unsetCartData() {
        this._cartData = null as any;
    }


}

export const ProductStore = new Store();