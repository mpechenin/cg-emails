import { Injectable } from '@angular/core';

import { InMemoryDB } from './../../shared/utils/in-memory-db';

@Injectable()
export class FoldersService {

  constructor(
    private db: InMemoryDB
  ) { }

  getFolderEmails(folderType: string): Promise<Array<any>> {
    return this.db.getFolderEmails(folderType);
  }

  getEmail(emailId: string) {
    return this.db.getEmail(emailId);
  }

  deleteEmail(emailId: string) {
    return this.db.deleteEmail(emailId);
  }

}
