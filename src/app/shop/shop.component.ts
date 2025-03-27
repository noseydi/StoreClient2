import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild, viewChild } from '@angular/core';
import { ShopService } from './shop.service';
import { Subscription } from 'rxjs';
import { IProduct } from '../shared/models/product';
import { IPagination } from '../shared/models/pagination';
import { IBrand } from '../shared/models/brand';
import { IType } from '../shared/models/type';
import { shopParams } from '../shared/models/shopParams';

@Component({
  selector: 'app-shop',
  standalone: false,
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class  ShopComponent implements OnInit , OnDestroy {
  public data: IPagination<IProduct> ; 
  shopParams : shopParams;
  private sub$ = new Subscription();
  public sidenavOpen : boolean = true  ;
  @ViewChild('search' , {static : false}) searchTerm : ElementRef
  constructor(private shopservice : ShopService ) {}
updateParams(updated : boolean)
{
if (updated)
{
  this.getProducts();
}
else
{
  this.getProducts();

}
}
  ngOnDestroy(): void {
this.sub$.unsubscribe();
  }
  ngOnInit(): void {
    this.onWindowResize();
    this.getProducts();
    this.shopParams = this.shopservice.getShopParams();

  }
  onSearch ()
  {
    this.shopParams.search = this.searchTerm?.nativeElement?.value ;
    this.shopservice.updateShopParams(this.shopParams);
    this.getProducts();
  }
  onReset()
  {
    this.shopParams = new shopParams();
    this.shopservice.updateShopParams(this.shopParams);
    this.searchTerm.nativeElement.value = '' ; 
    this.getProducts();
  }
  onpagechanged(data : any )
  {
    this.shopParams.pageIndex = data.page;
    this.shopservice.updateShopParams(this.shopParams);
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
