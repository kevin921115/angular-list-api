import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./pages/home/home.component").then((m) => m.HomeComponent)
  },
  {
    path: "login",
    loadComponent: () => import("./core/auth/auth.component").then((m) =>m.AuthComponent)
  },
  {
    path: "register",
    loadComponent: () => import("./core/auth/auth.component").then((m) => m.AuthComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
