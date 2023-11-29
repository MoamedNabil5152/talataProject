import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-confirmation-message',
  templateUrl: './confirmation-message.component.html',
  styleUrls: ['./confirmation-message.component.scss'],
})
export class ConfirmationMessageComponent implements OnInit {
  data: any = {};
  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {}
  ngOnInit(): void {
    this.data = this.config?.data;
  }

  closePopup() {
    this.ref.close('Confirm');
  }
}
