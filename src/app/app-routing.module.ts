import { NgModule } from '@angular/core';
import { provideRouter, RouterModule, Routes, withComponentInputBinding } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductsComponent } from './pages/products/products.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { provideHttpClient, withFetch, withJsonpSupport } from '@angular/common/http';

const routes: Routes = [
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    provideHttpClient(withFetch(), withJsonpSupport()),
    provideRouter(routes, withComponentInputBinding()),
  ],
})
export class AppRoutingModule { }
