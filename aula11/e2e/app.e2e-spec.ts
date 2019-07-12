import { Aula11Page } from './app.po';

describe('aula11 App', function() {
  let page: Aula11Page;

  beforeEach(() => {
    page = new Aula11Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
