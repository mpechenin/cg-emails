import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FoldersService } from './../../services/folders.service';

@Component({
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailPageComponent implements OnInit {
  email: any;
  folderType: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: FoldersService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.folderType = params.folderType;
      this.service.getEmail(params.emailId)
        .then((email) => this.email = email);
    });
  }

  sendEmail(to: string) {
    this.router.navigate([{outlets: {compose: to}}]);
  }

  deleteEmail(emailId: string) {
    this.service.deleteEmail(emailId).then(() => {
      this.router.navigateByUrl(`/folder/${this.folderType}`);
    });
  }
}
