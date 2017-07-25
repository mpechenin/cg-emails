import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ComposeService } from './../../services/compose.service';

@Component({
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposePageComponent implements OnInit {
  to: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ComposeService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.to = params.to;
    });
  }

  sendEmail(email) {
    this.service.sendEmail(email)
      .then(this.closeCompose);
  }

  closeCompose = () => {
    this.router.navigate([{outlets: {compose: 'none'}}]);
  }
}
