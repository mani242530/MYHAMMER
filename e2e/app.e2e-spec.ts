import { AppPage } from './app.po';

describe('myhammer-started', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display header message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Find craftsmen and service providers for every job');
  });
});
