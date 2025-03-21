import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { IPagination } from '../shared/models/ipagination';
import { IProduct } from '../shared/models/product';
import {  Observable } from 'rxjs';
import { IType } from '../shared/models/type';
import { IBrand } from '../shared/models/brand';
import { Title } from '@angular/platform-browser';
import {map} from 'rxjs/operators';

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
  getBrands(includeAll=true)
  {
return this.http.get<IBrand[]>(environment.backendurl+'/ProductBrand').pipe(
  map((brands)=>{
if (includeAll)  
    brands = [{
    id: 0, title: 'همه',
    description: '',
    isActive: false,
    summary: '',
    created: '',
    createdBy: undefined,
    lastModified: undefined,
    lastModifiedBy: undefined,
    isDeleted: false
  },...brands  ];
return brands ; 
}) 
);
}
  getTypes(includeAll = true )
  {
return this.http.get<IType[]>(environment.backendurl+'/ProductType').pipe(
  map((types)=>{
    if (includeAll) 
  types = [{
    id: 0, title: 'همه',
    description: '',
    isActive: false,
    summary: '',
    created: '',
    createdBy: undefined,
    lastModified: undefined,
    lastModifiedBy: undefined,
    isDeleted: false
  },...types  ];
return types ; 
}) 
);
  }
}