const webdriver = require("selenium-webdriver");
const CONFIG = require("./config.json");
const url = process.argv.slice(2);

if (CONFIG.browsers && CONFIG.browsers.length) {
    if (url && url.length) {
        CONFIG.browsers.map((browser) => {
            require(browser.driver);
            const driver = new webdriver.Builder("").forBrowser(browser.name).build();
            loadTests(CONFIG.tests, driver, url[0]);
        });
    } else {
        console.log("Test failed. URL parameter is missing.");
    }
}

function loadTests(tests, driver, url) {
    const by = webdriver.By;
    const until = webdriver.until;

    driver.get(url);

    driver.findElement(by.name("q")).sendKeys("webdriver");

    driver.wait(until.elementLocated(by.name("q")), 10000).then((name) => { name.sendKeys(webdriver.Key.ENTER) });

    driver.wait(until.titleContains("webdriver"), 10000).then((value) => {
        if (value) {
            console.log("Test passed.");
        } else {
            console.log("Test failed.");
        }
        driver.quit();
    });
}
