import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
	{
		path: '',
		component: ProductListComponent,
		data: {
			core: { title: 'Product List' },
			breadcrumb: null
		},
	},
	{
		path: ':id',
		component: ProductDetailsComponent,
		data: {
			core: { title: 'Product Details' },
			breadcrumb: null
		},
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ProductRoutingModule { }
