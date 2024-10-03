import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-eshwar-log',
  templateUrl: './eshwar-log.component.html',
  styleUrls: ['./eshwar-log.component.css']
})
export class ConfirmationDialogComponent {
  @Output() confirm = new EventEmitter<boolean>();
  
  onConfirm() {
    this.confirm.emit(true);
  }

  onCancel() {
    this.confirm.emit(false);
  }
}
