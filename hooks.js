
module.exports = function () {
    this.setDefaultTimeout(180 * 1000);

    this.Before(function () {
        console.log('Start test!');
    });

    this.After(function () {
        console.log('Finish test!');
    });

};