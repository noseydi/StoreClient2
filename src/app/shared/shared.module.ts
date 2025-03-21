import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardShopComponent } from './components/card-shop/card-shop.component';
import {MatSidenavModule} from '@angular/material/sidenav' ;
@NgModule (
    {
        declarations:[
        
    CardShopComponent
  ],
        imports:[
            CommonModule
        ],
        exports : [
            CardShopComponent, MatSidenavModule
        ]

    }
)
export class SharedModule {

}
