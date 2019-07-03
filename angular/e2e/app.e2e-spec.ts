import { AniThemeNg4Page } from './app.po';

describe('ani-theme-ng4 App', () => {
  let page: AniThemeNg4Page;

  beforeEach(() => {
    page = new AniThemeNg4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
