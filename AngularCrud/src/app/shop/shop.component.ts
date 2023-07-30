import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  products!: Product[];
  constructor(private productService: ProductService)
  {
    this.productService = productService;
  }
  tempProduct: Product = {
    title: 'test',
    price: 10,
    description: 'abcd',
  }
  ngOnInit() {
    this.products = this.productService.getProducts();
  }
}
