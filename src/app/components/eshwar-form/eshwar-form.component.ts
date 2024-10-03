import { Component, EventEmitter, Input, Output } from '@angular/core';
import { eshwar } from '../../models/eshwar.module';

@Component({
  selector: 'app-eshwar-form',
  templateUrl: './eshwar-form.component.html',
  styleUrls: ['./eshwar-form.component.css']
})
export class UserFormComponent {
  @Input() user: eshwar | null = null; // Accept user for editing
  @Output() submiteshwar = new EventEmitter<eshwar>();
  @Output() cancel = new EventEmitter<void>(); // Emit when canceled

  // Add the dropdown list array for "Assigned To"
  users = ['User 1', 'User 2', 'User 3', 'User 4', 'User 5', 'User 6', 'User 7', 'User 8', 'User 9', 'User 10'];

  onSubmit(form: any) {
    if (this.user) {
      this.submiteshwar.emit({ ...this.user, ...form.value }); // Emit updated user
    } else {
      this.submiteshwar.emit(form.value); // Emit new user
    }
  }

  cancelForm() {
    this.cancel.emit(); // Emit cancel event
  }
}
