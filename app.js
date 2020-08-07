const { Builder, By, Key, until } = require("selenium-webdriver");
const CONFIG = require("./config.json");
const url = process.argv.slice(2);

if (CONFIG.browsers && CONFIG.browsers.length) {
    if (url && url.length) {
        CONFIG.browsers.map(async (browser) => {
            try {
                // 1. Load browser
                require(browser.driver);
                const driver = await new Builder("").forBrowser(browser.name).build();
                console.log(`BROWSER ${browser.name}`);

                // 2. Load URL
                await driver.get(url[0]);

                // 3. Load tests
                if (CONFIG.tests && CONFIG.tests.length) {
                    CONFIG.tests.map(async (test) => {
                        await require(test.path)(By, Key, until, driver).then(result => {
                            console.log(`Test ${test.name}: ${result}`);
                        }, error => {
                            console.log(`Test ${test.name} failed: ${error}`);
                        });
                    });
                } else {
                    console.log("ERROR. No tests available.");
                }

                // 4. Quit driver
                // await driver.quit();
            }
            catch(error) {
                console.log(`Error. ${error}`);
            }
        });
    } else {
        console.log("ERROR. URL parameter is missing.");
    }
}
