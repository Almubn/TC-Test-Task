const homePage = require('../pageObjects/homePage');
const searchResultsPage = require('../pageObjects/searchResultsPage');
const expect = require('chai').expect;

module.exports = function () {

    this.setDefaultTimeout(60 * 1000);

    this.Given(/^I am on the TC home page$/, function () {
        return browser.get(homePage.homePageUrl);
    });

    this.Then(/^Search Bar should be displayed$/, function () {
        return homePage.searchBar.isDisplayed().then(isDisplayed => {
            expect(isDisplayed).to.equal(true, 'Search bar not visible on home page!');
        });
    });

    this.Then(/^Page title is equal to (.*)$/, function (expectedPageTitle) {
        return homePage.getHomePageTitle().then(actualPageTitle => {
            expect(actualPageTitle).to.equal(expectedPageTitle, 'Page title not match to expected!');
        });
    });

    this.When(/^Click on search button$/, async function () {
        if (await homePage.popup.isDisplayed()) {
            await homePage.popup.click();
        }
        return homePage.searchButton.click();
    });

    this.Then(/^Your search Bar should be displayed$/, function () {
        return searchResultsPage.yourSearchBar.isDisplayed().then(isDisplayed => {
            expect(isDisplayed).to.equal(true, 'Your search bar not visible on the search results page!');
        });
    });
};
