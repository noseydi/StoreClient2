import { Component, EventEmitter, Output, output } from '@angular/core';
import { IBrand } from '../../shared/models/brand';
import { IType } from '../../shared/models/type';
import { ShopService } from '../shop.service';
import { shopParams } from '../../shared/models/shopParams';

@Component({
  selector: 'app-shop-filters',
  standalone: false,
  templateUrl: './shop-filters.component.html',
  styleUrl: './shop-filters.component.scss'
})
export class ShopFiltersComponent {
  @Output() updateparams = new EventEmitter<boolean>
 public brands : IBrand[];
  public types : IType[];
  private shopParams : shopParams ;
  constructor (private shopservice: ShopService)
  {}
   onChangeTypes(typeId : number)
  {
    this.shopParams.typeId = typeId;
    this.shopservice.updateShopParams(this.shopParams);
    this.updateparams.emit(true);
  }
  onChangeBrands( brandId : number)
  {
    this.shopParams.brandId = brandId;
    this.shopservice.updateShopParams(this.shopParams);
    this.updateparams.emit(true);
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


ngOnInit() : void {
  this.shopParams = this.shopservice.getShopParams();
  this.getBrands();
  this.getTypes();
}
}


