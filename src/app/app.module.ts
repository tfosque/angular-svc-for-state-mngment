import { OrderSummaryService } from './services/orders/order-summary.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

/* Bootstrap 4 Module */
import { Bootstrap4Module } from './modules/bootstrap4/bootstrap4.module';

/* Services */
import { UserInfoService } from './services/user/user-info.service';
import { QuotesService } from './services/quotes/quotes.service';
import { OrdersService } from './services/orders/orders.service';
import { AccountService } from './services/accounts/account.service';
import { MenuService } from './services/menu/menu.service';
import { TemplateService } from './services/template-logic/template.service';
import { CartService } from './services/cart/cart.service';
import { ProductsService } from './services/products/products.service';

/* Pipes */

/* Components */
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
import { PromotionTrackerComponent } from './views/promotion-tracker/promotion-tracker.component';
import { PerfectOrderComponent } from './views/perfect-order/perfect-order.component';
import { SuggestiveSellingComponent } from './views/suggestive-selling/suggestive-selling.component';
import { AdvertisingComponent } from './views/advertising/advertising.component';
import { BecnBlogComponent } from './views/advertising/becn-blog/becn-blog.component';
import { BecnLandingPageComponent } from './views/advertising/becn-landing-page/becn-landing-page.component';
import { BasicFilterPipe } from './pipes/basic-filter.pipe';
import { CartItemComponent } from './views/cart/cart-item/cart-item.component';
import { FormComponent } from './views/login/form/form.component';
import { LoginFormComponent } from './views/login/login-form/login-form.component';
import { UserNavbarComponent } from './views/main-menu/user-navbar/user-navbar.component';
import { ToolsNavbarComponent } from './views/main-menu/tools-navbar/tools-navbar.component';
import { TemplateRowItemComponent } from './views/templates/template-items/template-row-item/template-row-item.component';
import { ModalComponent } from './views/modals/modal/modal.component';
import { TemplateItemsComponent } from './views/templates/template-items/template-items.component';
import { ProductComponent } from './views/products/product/product.component';
import { ProductsComponent } from './views/products/products.component';
import { SuggestiveSellingService } from './services/suggestive-selling/suggestive-selling.service';
import { SearchService } from './services/search/search.service';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './views/notifications/notifications.component';
import { TemplatesComponent } from './views/templates/templates.component';

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
    PromotionTrackerComponent,
    PerfectOrderComponent,
    SuggestiveSellingComponent,
    AdvertisingComponent,
    BecnBlogComponent,
    BecnLandingPageComponent,
    BasicFilterPipe,
    CartItemComponent,
    FormComponent,
    LoginFormComponent,
    UserNavbarComponent,
    ToolsNavbarComponent,
    TemplateRowItemComponent,
    ModalComponent,
    TemplateItemsComponent,
    ProductComponent,
    ProductsComponent,
    NotificationsComponent,
    TemplatesComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Bootstrap4Module
  ],
  providers: [CartService, TemplateService, MenuService, AccountService, OrdersService, QuotesService,
    SearchService, SuggestiveSellingService, TemplateService,
    UserInfoService, ProductsService, OrderSummaryService],
  bootstrap: [AppComponent],
  exports: [CommonModule]
})
export class AppModule { }
