import { CgEmailsPage } from './app.po';

describe('cg-emails App', () => {
  let page: CgEmailsPage;

  beforeEach(() => {
    page = new CgEmailsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
