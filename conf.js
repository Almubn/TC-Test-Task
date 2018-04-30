
exports.config = {
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    allScriptsTimeout: 1200000,
    getPageTimeout: 1200000,
    cucumberOpts: {
        require: ['./step_definitions/*.js', './hooks.js'],
        //format: ['./allure-formatter'], //possible values are json, progress-bar, progress, summary
        tags: '~@broken'
    },

    params: {
    },

    capabilities: {
        'browserName': 'chrome',
        chromeOptions: {
            args: [
                //"--headless",
                //"--disable-gpu",
                '--start-maximized'
            ]
        }
    },

    specs: ['./features/home_page.feature']
};