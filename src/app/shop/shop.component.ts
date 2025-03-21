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
  public brands : IBrand[];
  public types : IType[];
  private sub$ = new Subscription();
  public sidenavOpen : boolean = true  ;
  constructor(private shopservice : ShopService ) {}
  ngOnDestroy(): void {
this.sub$.unsubscribe();
  }
  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();

  }
    @HostListener('window:resize')
    public onWindowResize(){
      window.innerWidth<960 ? (this.sidenavOpen = false ) : (this.sidenavOpen = true );
    }

  private getTypes() {
    this.shopservice.getTypes().subscribe((res) => {
this.types = res ; 
    }
    );
  }

  private getBrands() {
    this.shopservice.getBrands().subscribe((res) => {
this.brands = res ;

    }
    );
  }

  private getProducts() {
    this.shopservice.getProducts().subscribe((res) => {
      this.data = res ;
    });
    this.sub$.add(this.sub$);
  }
  }
