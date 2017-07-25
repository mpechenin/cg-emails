import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cg-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.css']
})
export class EmailsComponent {
  @Input() emails: Array<any>;
  @Input() folderType: string;

  constructor(
    private router: Router
  ) {}

  openEmailPage = (email: any) => this.router.navigateByUrl(`folder/${this.folderType}/email/${email.id}`);
}
