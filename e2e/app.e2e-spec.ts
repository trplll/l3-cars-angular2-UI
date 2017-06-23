import { L3ProductsPage } from './app.po';

describe('l3-products App', () => {
  let page: L3ProductsPage;

  beforeEach(() => {
    page = new L3ProductsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
