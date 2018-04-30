
class HomePage {
    constructor() {
        this.homePageUrl = 'https://www.thomascook.com';
        this.searchBar = element(by.css('div.SearchbarForm-fieldsContainer'));
        this.searchButton = element(by.id('SearchbarForm-submitBtn'));
    }

    getHomePageTitle() {
        return browser.getTitle();
    }
}

module.exports = new HomePage();