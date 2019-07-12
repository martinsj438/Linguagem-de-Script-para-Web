import { Aula12Page } from './app.po';

describe('aula12 App', function() {
  let page: Aula12Page;

  beforeEach(() => {
    page = new Aula12Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
