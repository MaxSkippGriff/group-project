import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartLoginComponent } from "./route/start-login/start-login.component";

const routes: Routes = [
  { path: "", redirectTo: "/start-login", pathMatch: "full" },
  { path: "start-login", component: StartLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
