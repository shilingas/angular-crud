import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  tempProduct: Product = {
    title: 'test',
    price: 10,
    description: 'abcd',
  }
  products!: Product[];
}
