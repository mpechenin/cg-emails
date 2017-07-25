import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'cg-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {
  @Input() email: any;
  @Output() sendEmail = new EventEmitter();
  @Output() deleteEmail = new EventEmitter();

  reply() {
    this.sendEmail.emit(this.email.from);
  }

  delete() {
    this.deleteEmail.emit(this.email.id);
  }
}
