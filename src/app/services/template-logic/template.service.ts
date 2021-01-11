import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {
  /* templates */
  private templateItems = new BehaviorSubject<Product[]>([]);
  public templateItems$ = this.templateItems.asObservable();
  /* selected templates */
  private selectedTemplateItems = new BehaviorSubject<Product[]>([]);
  public selectedTemplateItems$ = this.selectedTemplateItems.asObservable();
  /* template cnt */
  private templateCnt = new BehaviorSubject<Product[]>([]);
  public templateCnt$ = this.templateCnt.asObservable();
  constructor() { }

  getTemplateItems() {
    return this.templateItems$;
  }
  addTemplateToCart(templateId: string) {

  }
  addSelectedTemplateItem(item: Product) {
    const items = [...this.templateItems.getValue(), item];
    this.templateItems.next(items);
  }
  addSelectedTemplateItemsToCart(items: Product[]) {

  }
  deleteTemplateItem(item: Product) {

  }
  deleteTemplate(templateId: string) {

  }
}
