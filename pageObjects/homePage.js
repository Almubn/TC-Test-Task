
class HomePage {
    constructor() {
        this.homePageUrl = 'https://www.thomascook.com';
        this.searchBar = element(by.css('div.SearchbarForm-fieldsContainer'));
        this.searchButton = element(by.id('SearchbarForm-submitBtn'));
        this.popup = element(by.css('span.e108742-close.e108742-close-on-click'));
    }

    getHomePageTitle() {
        return browser.getTitle();
    }
}

module.exports = new HomePage();