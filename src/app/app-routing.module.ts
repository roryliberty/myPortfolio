import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AboutMeComponent } from "./about-me/about-me.component";
import { HomeComponent } from "./home/home.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutMeComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
