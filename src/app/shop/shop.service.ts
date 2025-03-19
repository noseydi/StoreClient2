import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { IPagination } from '../shared/models/ipagination';
import { IProduct } from '../shared/models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
private BackendUrl = environment.backendurl;
  constructor( private http : HttpClient) { }
  getProducts() : Observable<IPagination<IProduct>>
  {
 return this.http.get<IPagination<IProduct>>(environment.backendurl+'/products');
  }
}
