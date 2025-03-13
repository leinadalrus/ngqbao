import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

// Products
import { ProductsComponent } from './pages/products/products.component';
import { EditProductComponent } from './pages/products/edit-product/edit-product.component';

import { MemberLayoutComponent } from './layouts/member-layout/member-layout.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { TradingCardComponent } from './components/trading-card/trading-card.component';
import { UserLoginComponent } from './pages/user-login/user-login.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ShoppingCartComponent,
    DashboardComponent,
    TradingCardComponent,
    MemberLayoutComponent,
    NavBarComponent,
    PageNotFoundComponent,
    UserLoginComponent,
    EditProductComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
