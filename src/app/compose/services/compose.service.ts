import { Injectable } from '@angular/core';

import { InMemoryDB } from './../../shared/utils/in-memory-db';

@Injectable()
export class ComposeService {

  constructor(
    private db: InMemoryDB
  ) { }

  sendEmail(email): Promise<any> {
    return this.db.addEmail(email);
  }

}
