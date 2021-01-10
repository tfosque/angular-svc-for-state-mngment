import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { MainMenuComponent } from './views/main-menu/main-menu.component';
import { CartComponent } from './views/cart/cart.component';
import { SideNavBarComponent } from './views/side-nav-bar/side-nav-bar.component';
import { SearchGlobalComponent } from './views/search-global/search-global.component';
import { OrdersComponent } from './views/orders/orders.component';
import { QuotesComponent } from './views/quotes/quotes.component';
import { AddressBookComponent } from './views/address-book/address-book.component';
import { AccountsComponent } from './views/accounts/accounts.component';
import { DelivertTrackingComponent } from './views/delivert-tracking/delivert-tracking.component';
import { LogoutComponent } from './views/logout/logout.component';
import { ProfileComponent } from './views/profile/profile.component';
import { ChangePasswordComponent } from './views/change-password/change-password.component';
import { ModalsComponent } from './views/modals/modals.component';
import { MyBranchComponent } from './views/my-branch/my-branch.component';
import { PromotinTrackerComponent } from './views/promotin-tracker/promotin-tracker.component';
import { PerfectOrderComponent } from './views/perfect-order/perfect-order.component';
import { SuggestiveSellingComponent } from './views/suggestive-selling/suggestive-selling.component';
import { AdvertisingComponent } from './views/advertising/advertising.component';
import { BecnBlogComponent } from './views/advertising/becn-blog/becn-blog.component';
import { BecnLandingPageComponent } from './views/advertising/becn-landing-page/becn-landing-page.component';
import { SearchComponent } from './services/search/search/search.component';
import { BasicFilterPipe } from './pipes/basic-filter.pipe';
import { CartItemComponent } from './views/cart/cart-item/cart-item.component';
import { FormComponent } from './views/login/form/form.component';
import { LoginFormComponent } from './views/login/login-form/login-form.component';
import { UserNavbarComponent } from './views/main-menu/user-navbar/user-navbar.component';
import { ToolsNavbarComponent } from './views/main-menu/tools-navbar/tools-navbar.component';
import { TemplateRowItemComponent } from './views/template-items/template-row-item/template-row-item.component';
import { ModalComponent } from './views/modals/modal/modal.component';
import { TemplateItemsComponent } from './views/template-items/template-items.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainMenuComponent,
    CartComponent,
    SideNavBarComponent,
    SearchGlobalComponent,
    OrdersComponent,
    QuotesComponent,
    AddressBookComponent,
    AccountsComponent,
    DelivertTrackingComponent,
    LogoutComponent,
    ProfileComponent,
    ChangePasswordComponent,
    ModalsComponent,
    MyBranchComponent,
    PromotinTrackerComponent,
    PerfectOrderComponent,
    SuggestiveSellingComponent,
    AdvertisingComponent,
    BecnBlogComponent,
    BecnLandingPageComponent,
    SearchComponent,
    BasicFilterPipe,
    CartItemComponent,
    FormComponent,
    LoginFormComponent,
    UserNavbarComponent,
    ToolsNavbarComponent,
    TemplateRowItemComponent,
    ModalComponent,
    TemplateItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
