import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, FormsModule, ReactiveFormsModule]
})
export class AddProductComponent {
  constructor(private fb: FormBuilder) {
    this.fb = fb;
  }
  formGroup!: FormGroup;
  ngOnInit() {
    this.formGroup = this.fb.group({
      title: [''],
      description: [''],
      price: ['']
    })
  }
  handleProduct(form: FormGroup) {
    console.log(form.value);
  }
}
