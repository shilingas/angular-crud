import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  products!: Product[];
  constructor(private productService: ProductService, private cartService: CartService)
  {
    this.productService = productService;
    this.cartService = cartService;
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
  add(product: Product) {
    this.cartService.addItem(product);
  }
  remove(product: Product) {
    this.cartService.removeItem(product);
  }
}
