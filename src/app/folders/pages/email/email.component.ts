import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FoldersService } from './../../services/folders.service';

@Component({
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailPageComponent implements OnInit {
  email: any;

  constructor(
    private route: ActivatedRoute,
    private service: FoldersService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.service.getEmail(params.emailId)
        .then((email) => this.email = email);
    });
  }

}
