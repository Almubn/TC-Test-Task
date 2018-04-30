var { Then, When } = require('cucumber');
var assert = require('assert');
var fs = require('fs');
var mzFs = require('mz/fs')
var seleniumWebdriver = require('selenium-webdriver');

const homePage = require('../pageObjects/homePage');
const searchResultsPage = require('../pageObjects/searchResultsPage');
const expect = require('chai').expect;
const { Builder, By, until } = require('selenium-webdriver');
const test = require('selenium-webdriver/testing');

module.exports = function () {
    let driver;
    this.setDefaultTimeout(60 * 1000);

    before(function () {
        return new Builder().forBrowser('chrome').build().then(d => {
            driver = d;
        });
    });

    this.Given(/^I am on the TC home page$/, function () {
        return driver.get(homePage.homePageUrl);
    });

    this.Then(/^Search Bar should be displayed$/, function () {
        return driver.homePage.searchBar.isDisplayed().then(isDisplayed => {
            expect(isDisplayed).to.equal(true, 'Search bar not visible on home page!');
        });
    });

    this.Then(/^Page title is equal to (.*)$/, function (expectedPageTitle) {
        let actualPageTitle = driver.homePage.getHomePageTitle();
        return expect(actualPageTitle).to.equal(expectedPageTitle, 'Page title not match to expected!');
    });

    this.When(/^Click on search button$/, function () {
        return driver.homePage.searchButton.click();
    });

    this.Then(/^Your search Bar should be displayed$/, function () {
        return driver.searchResultsPage.yourSearchBar.isDisplayed().then(isDisplayed => {
            expect(isDisplayed).to.equal(true, 'Your search bar not visible on the search results page!');
        });
    });
};
