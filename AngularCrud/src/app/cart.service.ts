import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  itemCount: number = 0;
  items!: Product[];
  constructor() {
    this.items = [];
   }
  addItem(item: Product) {
    this.items.push(item);
    this.itemCount++;
  }
  getCartItems() : Product[] {
    return this.items;
  }
  removeItem(product: Product)
  {
    this.items = this.items.filter(item => item.price !== product.price && item.description !== product.description && item.price !== product.price);
    console.log(this.items.length);
    this.itemCount--;
  }
}
