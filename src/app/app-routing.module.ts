import { AdvertisingComponent } from './views/advertising/advertising.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './views/cart/cart.component';
import { ProductsComponent } from './views/products/products.component';
import { TemplateItemsComponent } from './views/template-items/template-items.component';

const routes: Routes = [
  { path: '', component: AdvertisingComponent },
  { path: 'cart', component: CartComponent },
  { path: 'templates', component: TemplateItemsComponent },
  { path: 'products', component: ProductsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
