import { Aula02Page } from './app.po';

describe('aula02 App', function() {
  let page: Aula02Page;

  beforeEach(() => {
    page = new Aula02Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
