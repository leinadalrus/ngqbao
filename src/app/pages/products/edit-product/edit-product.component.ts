import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  standalone: false,
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.scss',
})
export class EditProductComponent {
  private formBuilder = inject(FormBuilder);

  productForm = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
  });

  updateProduct(newTitle: string, newDescription: string) {
    this.productForm.patchValue({
      title: newTitle,
      description: newDescription,
    });
  }

  onSubmit() {
    console.warn(this.productForm.value);
  }
}
