const webdriver = require("selenium-webdriver");

async function Test (browser, url, test) {

    // 1. Load browser
    require(browser.driver);
    const driver = await new webdriver.Builder("").forBrowser(browser.name).build();
    let result;

    // 2. Load URL
    await driver.get(url);

    // 3. Load test
    try {
        await require(test.path)(webdriver, driver).then((result) => {
            result = {[test.name]: result}; 
        }, (error) => {
            console.log(`Test ${test.name} failed: ${error}`)
            result = error;
        });
    } catch(error) {
        console.log(error);
    } finally {
        // 4. Quit driver
        // await driver.quit();
    }

    return Promise.all([result])
};

module.exports = Test;