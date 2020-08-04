const webdriver = require("selenium-webdriver");
const CONFIG = require("./config.json");
const url = process.argv.slice(2);

if (CONFIG.browsers && CONFIG.browsers.length) {
    if (url && url.length) {
        CONFIG.browsers.map((browser) => {
            require(browser.driver);
            const driver = new webdriver.Builder("").forBrowser(browser.name).build();

            // 1. Load URL
            driver.get(url);

            // 2. Load tests
            if (CONFIG.tests && CONFIG.tests.length) {
                CONFIG.tests.map(test => {
                    require(test.path)(webdriver,driver).then(value => {
                        // TO DO
                        console.log("result", value);
                    }, error => {
                        console.log(`Test Failed: ${error}`);
                    });
                });
            } else {
                console.log("ERROR. No tests available.");
            }

            // 3. Quit driver
            driver.quit();
        });
    } else {
        console.log("ERROR. URL parameter is missing.");
    }
}
