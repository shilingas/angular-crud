import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  constructor(private cartService: CartService) { }
  cart!: Product[];
  itemCount: number = 0;
  totalPrice: number = 0;
  ngOnInit() {
    this.cart = this.cartService.getCartItems();
    this.itemCount = this.cartService.getCartItems().length;
    this.totalPrice = this.cartService.getCartItems().map((x:Product) => x.price).reduce((a: number,b: number) => a+b);
  }
  removeFromCart(product: Product) : void {
    this.cartService.removeItem(product);
    this.itemCount = this.cartService.getCartItems().length;
    this.cart = this.cartService.getCartItems();
  }
  clear(): void {
    this.cart = [];
    this.itemCount = 0;
    this.totalPrice = 0;
  }
}
