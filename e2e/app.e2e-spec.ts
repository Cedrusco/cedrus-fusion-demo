import { FusionDemoPage } from './app.po';

describe('fusion-demo App', () => {
  let page: FusionDemoPage;

  beforeEach(() => {
    page = new FusionDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
