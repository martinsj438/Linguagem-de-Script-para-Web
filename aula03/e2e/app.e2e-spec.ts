import { Aula03Page } from './app.po';

describe('aula03 App', function() {
  let page: Aula03Page;

  beforeEach(() => {
    page = new Aula03Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
