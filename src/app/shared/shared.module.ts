import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardShopComponent } from './components/card-shop/card-shop.component';
import {MatSidenavModule} from '@angular/material/sidenav' ;
import {PaginationModule} from 'ngx-bootstrap/pagination'
@NgModule (
    {
        declarations:[
        
    CardShopComponent
  ],
        imports:[
            CommonModule,MatSidenavModule , PaginationModule
        ],
        exports : [
            CardShopComponent, MatSidenavModule , PaginationModule
        ]

    }
)
export class SharedModule {

}
