import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu/menu.service';
import { ProductsService } from 'src/app/services/products/products.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  products$ = new BehaviorSubject<Product[]>([]);
  constructor(
    private readonly menuService: MenuService,
    private readonly productService: ProductsService,

  ) { }

  ngOnInit(): void {
    this.menuService.setActiveMenu('Store');

    /* grab products if any*/
    this.productService.getProducts();

    /* grab products if any*/
    this.productService.products$.subscribe(products => {
      this.products$.next(products);
      // console.log('this:products', this.products$.getValue());
    });
  }

}
