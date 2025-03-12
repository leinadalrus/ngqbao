import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProductsComponent } from './pages/products/products.component';
import { MemberLayoutComponent } from './layouts/member-layout/member-layout.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { TradingCardComponent } from './components/trading-card/trading-card.component';
import {
  provideRouter,
  Routes,
  withComponentInputBinding,
} from '@angular/router';
import { provideHttpClient, withFetch, withJsonpSupport } from '@angular/common/http';
import { UserLoginComponent } from './user-login/user-login.component';
import { EditProductComponent } from './pages/products/edit-product/edit-product.component';

const appRoutes: Routes = [
  { path: '', title: 'Dashboard', component: DashboardComponent },
  {
    path: 'DashboardComponent',
    title: 'Dashboard',
    component: DashboardComponent,
  },
  {
    path: 'ProductsComponent',
    title: 'Products',
    component: ProductsComponent,
  },
  { path: '**', title: 'Page Not Found', component: PageNotFoundComponent },
];

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
  providers: [
    provideHttpClient(withFetch(), withJsonpSupport()),
    provideRouter(appRoutes, withComponentInputBinding()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
