import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cg-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.css']
})
export class EmailsComponent {
  @Input() emails: Array<any>;
  @Output() sendEmail = new EventEmitter();
  @Output() openEmail = new EventEmitter();

  openEmailPage = ({id}) => this.openEmail.emit(id);

  compose = () => this.sendEmail.emit();
}
