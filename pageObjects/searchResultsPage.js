class SearchResultsPage {
  constructor() {
    this.yourSearchBar = element(by.css('div.SearchbarReadonly'));
  }

  getSearchResultsPageTitle() {
    return getTitle();
  }
}

module.exports = new SearchResultsPage();