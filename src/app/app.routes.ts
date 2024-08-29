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
