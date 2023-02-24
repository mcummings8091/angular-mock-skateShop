import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { StorePageComponent } from './store-page/store-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'store', component: StorePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
