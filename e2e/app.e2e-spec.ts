import { CfdJetPage } from './app.po';

describe('cfd-jet App', () => {
  let page: CfdJetPage;

  beforeEach(() => {
    page = new CfdJetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
