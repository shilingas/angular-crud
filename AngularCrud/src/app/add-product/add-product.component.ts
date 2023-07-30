import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, FormsModule, ReactiveFormsModule]
})
export class AddProductComponent {
  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.fb = fb;
    this.productService = productService;
  }
  currentProduct!: Product;
  formGroup!: FormGroup;
  ngOnInit() {
    this.formGroup = this.fb.group({
      title: [''],
      description: [''],
      price: ['']
    })
  }
  handleProduct(form: FormGroup) {
    this.currentProduct = {
      ...this.currentProduct,
      title: form.value.title,
      description: form.value.description,
      price: form.value.price
    }
    this.productService.addingProduct(this.currentProduct);
  }
}
