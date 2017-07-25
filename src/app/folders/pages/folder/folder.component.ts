import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FoldersService } from './../../services/folders.service';

@Component({
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css']
})
export class FolderPageComponent implements OnInit {
  folderType: string;
  emails: Array<any>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: FoldersService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.folderType = params.folderType;
      this.service.getFolderEmails(this.folderType).then((emails) => {
        this.emails = emails;
      });
    });
  }
}
