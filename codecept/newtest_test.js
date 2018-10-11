/* eslint-disable */
Feature('Initial test');

Scenario('Website loaded', (I) => {
    I.amOnPage('http://gui:5000');
    I.see('React')
});
