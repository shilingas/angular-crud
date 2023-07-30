import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  itemCount!: number;
  items!: Product[];
  constructor() {
    this.items = [];
   }
  addItem(item: Product) {
    this.items.push(item);
    this.itemCount++;
  }
  removeItem(product: Product)
  {
    this.itemCount--;
  }
}
