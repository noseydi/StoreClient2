import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IPagination } from '../shared/models/ipagination';
import { IProduct } from '../shared/models/product';
import {  Observable } from 'rxjs';
import { IType } from '../shared/models/type';
import { IBrand } from '../shared/models/brand';
import { Title } from '@angular/platform-browser';
import {map} from 'rxjs/operators';
import { shopParams } from '../shared/models/shopParams';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
private backendurl = environment.backendurl;
private shopParams = new shopParams()
  constructor( private http : HttpClient) { }

  getShopParams()
  {
    return this.shopParams;
  }
  updateShopParams(params : shopParams)
  {
this.shopParams = params;
 
  }
  getProducts() : Observable<IPagination<IProduct>>
  {
    let params = this.generateShopParams();
 return this.http.get<IPagination<IProduct>>(environment.backendurl+'/products');
  }
  private generateShopParams() {
    let params = new HttpParams();
    if (this.shopParams.search) params = params.append('search', this.shopParams.search);
    if (this.shopParams.brandId && this.shopParams.brandId > 0) params = params.append('brandId', this.shopParams.brandId);
    if (this.shopParams.typeId && this.shopParams.typeId > 0) params = params.append('typeId', this.shopParams.typeId);
    params = params.append('pageIndex', this.shopParams.pageIndex);
    params = params.append('pageSize', this.shopParams.pageSize);
    params = params.append('sort', this.shopParams.sort);
    params = params.append('typeSort', this.shopParams.typeSort);
    console.log();
    return params;
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