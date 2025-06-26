import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-add-product-modal',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './add-product-modal.component.html',
  styleUrl: './add-product-modal.component.scss'
})
export class AddProductModalComponent {
  productName = '';
  environnement = 'VA';

  @Output() cancel = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<{ name: string, env: string }>();

  submit() {
    if (this.productName.trim()) {
      this.confirm.emit({ name: this.productName, env: this.environnement });
    }
  }

  close() {
    this.cancel.emit();
  }
}
