import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop.component';
import { AppComponent } from '../app.component';
import { ShopDetailComponent } from './shop-detail/shop-detail.component';

const routes: Routes = [
  {
    path:'',
    pathMatch : 'full' ,
    component : ShopComponent
  },
  {
    path : ':id', 
    component : ShopDetailComponent,
    pathMatch : 'full',

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
