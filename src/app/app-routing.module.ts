import { OrdersComponent } from './views/orders/orders.component';
import { AdvertisingComponent } from './views/advertising/advertising.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './views/cart/cart.component';
import { ProductsComponent } from './views/products/products.component';
import { TemplateItemsComponent } from './views/templates/template-items/template-items.component';
import { LoginComponent } from './views/login/login.component';
import { AddressBookComponent } from './views/address-book/address-book.component';
import { PerfectOrderComponent } from './views/perfect-order/perfect-order.component';
import { ProfileComponent } from './views/profile/profile.component';
import { PromotionTrackerComponent } from './views/promotion-tracker/promotion-tracker.component';
import { QuotesComponent } from './views/quotes/quotes.component';
import { TemplatesComponent } from './views/templates/templates.component';
import { ProductComponent } from './views/products/product/product.component';


const routes: Routes = [
  { path: '', component: AdvertisingComponent },
  { path: 'cart', component: CartComponent },
  { path: 'templates', component: TemplateItemsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductComponent },
  { path: 'login', component: LoginComponent },
  { path: 'address-book', component: AddressBookComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'pefect-order', component: PerfectOrderComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'promotion-tracker', component: PromotionTrackerComponent },
  { path: 'quotes', component: QuotesComponent },
  { path: 'templates', component: TemplatesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
