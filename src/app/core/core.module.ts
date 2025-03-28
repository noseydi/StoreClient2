import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './layers/footer/footer.component';
import { NavbarComponent } from './layers/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './layers/not-found/not-found.component';
import { ServerErrorComponent } from './layers/server-error/server-error.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandlingInterceptor } from './interceptors/error-handler.interceptor';

@NgModule (
    {
        declarations:[
            FooterComponent,
            NavbarComponent,
            NotFoundComponent,
            ServerErrorComponent
        ],
        imports:[
            CommonModule,
            RouterModule
        ],
        exports : [
            FooterComponent,
            NavbarComponent
        ],
        providers :[
            {
                provide : HTTP_INTERCEPTORS , 
                useClass : ErrorHandlingInterceptor,

                multi:true
            
            }
        ]

    }
)
export class CoreModule {

}
