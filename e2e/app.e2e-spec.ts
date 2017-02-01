import { TravelAppPage } from './app.po';

describe('travel-app App', function() {
  let page: TravelAppPage;

  beforeEach(() => {
    page = new TravelAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
