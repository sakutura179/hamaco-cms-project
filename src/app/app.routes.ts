import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'supply',
    loadChildren: () => import('./features/supply/supply.module').then(m => m.SupplyModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'employee',
    loadChildren: () => import('./features/employee/employee.module').then(m => m.EmployeeModule)
  },
  {
    path: 'department',
    loadChildren: () => import('./features/department/department.module').then(m => m.DepartmentModule)
  },
  {
    path: 'source',
    loadChildren: () => import('./features/source/source.module').then(m => m.SourceModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./features/product/product.module').then(m => m.ProductModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      APP_ROUTES
    )
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
