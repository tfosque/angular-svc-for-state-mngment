import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MenuService } from 'src/app/services/menu/menu.service';
import { ProductsService } from 'src/app/services/products/products.service';
@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent implements OnInit {
  templateName = '';
  accountHasTemplates = false;
  products = new BehaviorSubject<Product[]>([]);
  constructor(
    private readonly menuService: MenuService,
    private readonly productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.menuService.setActiveMenu('Templates');
    /* grab templates if any*/
  }

}