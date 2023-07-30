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

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
}
