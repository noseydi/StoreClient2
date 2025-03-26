import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { SharedModule } from '../shared/shared.module';
import { ShopFiltersComponent } from './shop-filters/shop-filters.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ShopComponent,
    ShopFiltersComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class ShopModule { }
