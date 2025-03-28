import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError, Observable, throwError } from 'rxjs';
import { NotFoundComponent } from '../../not-found/not-found.component';
@Injectable()
export class ErrorHandlingInterceptor implements HttpInterceptor
{
  constructor(private toast : ToastrService , private router  : Router ){}
  intercept(request : HttpRequest<unknown> , next : HttpHandler) : Observable<HttpEvent<unknown>>
  {
    return next.handle(request).pipe(catchError((error : HttpErrorResponse ) => {
if (error )
{
const base = error.error ;
switch (base.statusCode)
{
  case 404 :
    this.router.navigateByUrl('/NotFound');
    this.toast.error(base?.message);
    break ;
    case 500 : 
    this.router.navigateByUrl('serverError');
    this.toast.error(base?.message);
    break ;
 default :
 this.toast.error(base?.message);
break ; 
}
}
return throwError(() => {
  console.log(error);
  return error ; 
});
  })
);

  }
}
 

