import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { OrdersComponent } from './views/orders/orders.component';
import { AdvertisingComponent } from './views/advertising/advertising.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './views/cart/cart.component';
import { ProductsComponent } from './views/products/products.component';
import { LoginComponent } from './views/login/login.component';
import { AddressBookComponent } from './views/address-book/address-book.component';
import { PerfectOrderComponent } from './views/perfect-order/perfect-order.component';
import { ProfileComponent } from './views/profile/profile.component';
import { PromotionTrackerComponent } from './views/promotion-tracker/promotion-tracker.component';
import { QuotesComponent } from './views/quotes/quotes.component';
import { TemplatesComponent } from './views/templates/templates.component';
import { ProductComponent } from './views/products/product/product.component';
import { StoreComponent } from './views/store/store.component';


const routes: Routes = [
  // secure
  { path: 'proplus', component: AdvertisingComponent },
  { path: 'accounts/:accountId', component: AdvertisingComponent },
  { path: 'accounts/:accountId/templates/:templateId', component: TemplatesComponent },
  { path: 'accounts/:accountId/orders/:orderId', component: OrdersComponent },
  //  unsecure
  { path: 'cart', component: CartComponent },
  { path: 'templates', component: TemplatesComponent },
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
  { path: 'store', component: StoreComponent },
  { path: '', redirectTo: '/proplus', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: PageNotFoundComponent }  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
