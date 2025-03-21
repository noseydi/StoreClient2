import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { IPagination } from '../shared/models/ipagination';
import { IProduct } from '../shared/models/product';
import { Observable } from 'rxjs';
import { IType } from '../shared/models/type';
import { IBrand } from '../shared/models/brand';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
private backendurl = environment.backendurl;
  constructor( private http : HttpClient) { }
  getProducts() : Observable<IPagination<IProduct>>
  {
 return this.http.get<IPagination<IProduct>>(environment.backendurl+'/products');
  }
  getBrands()
  {
return this.http.get<IBrand[]>(environment.backendurl+'/ProductBrand'); 
  }
  getTypes()
  {
return this.http.get<IType[]>(environment.backendurl+'/ProductType'); 
  }
}
