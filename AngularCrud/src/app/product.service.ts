import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products!: Product[];
  constructor() { }
  addingProduct(product: Product) : void {
    console.log(product);
    this.products.push(product)
  }
  getProducts(): Product[] {
    return this.products;
  }
}
