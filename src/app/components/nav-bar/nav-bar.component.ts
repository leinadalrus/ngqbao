import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet, Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { ProductsComponent } from '../../pages/products/products.component';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  standalone: false,
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  routes: Routes = [
    { path: "DashboardComponent", component: DashboardComponent },
    { path: "ProductsComponent", component: ProductsComponent }
  ]
  // TODO: Hyperlink URL Referal Location Interface
}
