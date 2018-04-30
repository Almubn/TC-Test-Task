const homePage = require('../pageObjects/homePage');
const expect = require('chai').expect;

module.exports = function () {
    this.setDefaultTimeout(60 * 1000);

    this.Given(/^I am on the TC home page$/,  function () {
        return browser.get(homePage.homePageUrl);
    });

    this.Then(/^Search Bar should be displayed$/,  function () {
        return homePage.searchBar.isDisplayed().then(isDisplayed => {
            expect(isDisplayed).to.equal(true, 'Search bar not visible on home page!');
        });
    });

    this.Then(/^Page title is equal to (.*)$/,  function (expectedPageTitle) {
        let actualPageTitle = homePage.getHomePageTitle();
        return expect(actualPageTitle).to.equal(expectedPageTitle, 'Page title not match to expected!');
    });

};