const webdriver = require("selenium-webdriver");
const CONFIG = require("./config.json");
const url = process.argv.slice(2);

if (CONFIG.browsers && CONFIG.browsers.length) {
    if (url && url.length) {
        CONFIG.browsers.map(async (browser) => {
            require(browser.driver);
            const driver = await new webdriver.Builder("").forBrowser(browser.name).build();

            try {
                // 1. Load URL
                await driver.get(url[0]);

                // 2. Load tests
                if (CONFIG.tests && CONFIG.tests.length) {
                    CONFIG.tests.map(async (test) => {
                        try {
                            await require(test.path)(webdriver,driver).then(result => {
                                console.log(`Test ${test.name}: ${result}`);
                            });
                        } catch(error) {
                            console.log(`Test ${test.name} failed: ${error}`);
                        }
                    });
                } else {
                    console.log("ERROR. No tests available.");
                }
            }
            catch(error) {
                console.log(`Error. ${error}`);
            }
            finally {
                // 3. Quit driver
                // await driver.quit();
            }
        });
    } else {
        console.log("ERROR. URL parameter is missing.");
    }
}
