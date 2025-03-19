import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShopService } from './shop.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shop',
  standalone: false,
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class  ShopComponent implements OnInit , OnDestroy {
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
      console.log(res);
    });
    this.sub$.add(this.sub$);
  }
  }
