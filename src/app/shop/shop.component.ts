import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShopService } from './shop.service';
import { Subscription } from 'rxjs';
import { IProduct } from '../shared/models/product';
import { IPagination } from '../shared/models/ipagination';

@Component({
  selector: 'app-shop',
  standalone: false,
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class  ShopComponent implements OnInit , OnDestroy {
  public data: IPagination<IProduct> ; 
  private sub$ = new Subscription();
  constructor(private shopservice : ShopService ) {}
  ngOnDestroy(): void {
this.sub$.unsubscribe();
  }
  ngOnInit(): void {
    this.getProducts();
  }
    

  private getProducts() {
    this.shopservice.getProducts().subscribe((res) => {
      this.data = res ;
    });
    this.sub$.add(this.sub$);
  }
  }
