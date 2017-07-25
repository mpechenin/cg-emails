import { Injectable } from '@angular/core';
import uuid from 'uuid/v4';

const me = 'me';

const folders: any = {
  inbox: 'inbox',
  sent: 'sent',
  deleted: 'deleted'
};

let emails: Array<any> = [
  {
    id: uuid(),
    folder: folders.inbox,
    from: 'hello@pechenin.ru',
    to: me,
    subject: 'Hello 1',
    text: `Hello Hello Hello Hello Hello Hello Hello Hello Hello
       Hello Hello Hello Hello Hello Hello Hello Hello Hello
      Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
      Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello`
  },
  {
    id: uuid(),
    folder: folders.inbox,
    from: 'hello@pechenin.ru',
    to: me,
    subject: 'Hello 2',
    text: 'Hello 2'
  },
  {
    id: uuid(),
    folder: folders.inbox,
    from: 'hello@pechenin.ru',
    to: me,
    subject: 'Hello 3',
    text: 'Hello 3'
  },
  {
    id: uuid(),
    folder: folders.inbox,
    from: 'hello@pechenin.ru',
    to: me,
    subject: 'Hello 4',
    text: 'Hello 4'
  },
  {
    id: uuid(),
    folder: folders.inbox,
    from: 'hello@pechenin.ru',
    to: me,
    subject: 'Hello 5',
    text: 'Hello 5'
  }
];

@Injectable()
export class InMemoryDB {
  getFolderEmails(folderType: string): Promise<Array<any>> {
    return new Promise((resolve) => {
      resolve(emails.filter(({folder}) => folder === folderType));
    });
  }

  getEmail(emailId: string): Promise<any> {
    return new Promise((resolve) => {
      resolve(emails.find(({id}) => id === emailId))
    });
  }

  addEmail({to, subject, text}): Promise<any> {
    return new Promise((resolve) => {
      const email = {
        id: uuid(),
        from: me,
        folder: folders.sent,
        to,
        subject,
        text
      };
      emails.push(email);
      console.log(emails);
      resolve(email);
    });
  }

  deleteEmail(emailId: any): Promise<any> {
    return new Promise((resolve) => {
      emails = emails.map((email) => {
        return email.id !== emailId ? email : Object.assign(email, {folder: folders.deleted});
      });
      resolve();
    });
  }
}
