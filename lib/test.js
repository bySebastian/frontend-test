const webdriver = require("selenium-webdriver");

async function Test (browser, url, test) {

    // 1. Load browser
    require(browser.driver);
    const driver = await new webdriver.Builder("").forBrowser(browser.name).build();

    // 2. Load URL
    await driver.get(url);

    // 3. Load test
    await require(test.path)(webdriver, driver).then((result) => {
            return {[test.name]: result};   
        }, (error) => {
            console.log(`Test ${test.name} failed: ${error}`)
            return {};
        });

    // 4. Quit driver
    await driver.quit();
    
};

module.exports = Test;