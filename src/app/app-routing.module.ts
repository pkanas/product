import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './core/app-layout/app-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'product',
        loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule),
        data: { core: { title: 'Product' } }
      },
      {
        path: 'registration',
        loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
        data: { core: { title: 'Login' } }
      },
      {
        path: 'cart',
        loadChildren: () => import('./modules/cart/cart.module').then(m => m.CartModule),
        data: { core: { title: 'Login' } }
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
