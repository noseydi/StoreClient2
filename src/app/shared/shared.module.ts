import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardShopComponent } from './components/card-shop/card-shop.component';
import {MatSidenavModule} from '@angular/material/sidenav' ;
import {PaginationModule} from 'ngx-bootstrap/pagination'
import { RouterModule } from '@angular/router';
import {ToastrModule} from 'ngx-toastr';

@NgModule (
    {
        declarations:[
        
    CardShopComponent
  ],
        imports:[
            CommonModule,MatSidenavModule , 
            PaginationModule,RouterModule  ,
             ToastrModule.forRoot(
                {
                    positionClass : 'toastr-bottom-right' , 
                    preventDuplicates : true ,
                    progressBar : true ,
                    progressAnimation : 'increasing',
                    timeOut : 5000
                }
            )
            ],
        exports : [
            CardShopComponent, MatSidenavModule , PaginationModule 
            
        ]

    }
)
export class SharedModule {

}
