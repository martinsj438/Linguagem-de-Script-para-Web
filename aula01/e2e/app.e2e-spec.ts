import { Aula01Page } from './app.po';

describe('aula01 App', function() {
  let page: Aula01Page;

  beforeEach(() => {
    page = new Aula01Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
