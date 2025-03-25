import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ShopService } from './shop.service';
import { Subscription } from 'rxjs';
import { IProduct } from '../shared/models/product';
import { IPagination } from '../shared/models/ipagination';
import { IBrand } from '../shared/models/brand';
import { IType } from '../shared/models/type';

@Component({
  selector: 'app-shop',
  standalone: false,
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class  ShopComponent implements OnInit , OnDestroy {
  public data: IPagination<IProduct> ; 
  private sub$ = new Subscription();
  public sidenavOpen : boolean = true  ;
  constructor(private shopservice : ShopService ) {}
updateParams(updated : boolean)
{
if (updated)
{
  this.getProducts();
}
}
  ngOnDestroy(): void {
this.sub$.unsubscribe();
  }
  ngOnInit(): void {
    this.getProducts();

  }
    @HostListener('window:resize')
    public onWindowResize(){
      window.innerWidth<960 ? (this.sidenavOpen = false ) : (this.sidenavOpen = true );
    }



  private getProducts() {
    this.shopservice.getProducts().subscribe((res) => {
      this.data = res ;
    });
    this.sub$.add(this.sub$);
  }
  }
