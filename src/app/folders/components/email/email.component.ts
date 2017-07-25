import { Component, Input } from '@angular/core';

@Component({
  selector: 'cg-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {
  @Input() email: any;
}
