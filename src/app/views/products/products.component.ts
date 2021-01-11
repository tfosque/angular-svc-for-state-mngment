import { uniqBy } from 'lodash';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/models/product';
import { MenuService } from 'src/app/services/menu/menu.service';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products = new BehaviorSubject<Product[]>([]);
  productCnt = new BehaviorSubject<number>(0);
  selectedProducts = new BehaviorSubject<Product[]>([])

  constructor(
    private readonly menuService: MenuService,
    private readonly productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.productService.getProducts();

    /* set menu */
    this.menuService.setActiveMenu('Products');

    /* subscribe selected products */
    this.productService.selectedProducts$.subscribe(sel => {
      /* TODO Move to service Removes Dups & give user alert that item is already selected */
      this.selectedProducts.next(uniqBy(sel, 'itemOrProductDescription'));
    })
    /* subscribe to products 
      TODO: this can be a returned value don't need subscription here
     */
    this.productService.products$.subscribe(items => {
      this.products.next(items);
      console.log({ items });

    })
    /* subscribe to product get count don't need subscription here just return value */
    this.productService.productCnt$.subscribe(cnt => {
      this.productCnt.next(cnt)
    })
  }

}
