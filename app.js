const webdriver = require("selenium-webdriver");
const CONFIG = require("./config.json");

if (CONFIG.browsers && CONFIG.browsers.length) {
    CONFIG.browsers.map((browser) => {
        require(browser.driver);
        const driver = new webdriver.Builder("").forBrowser(browser.name).build();
        loadTests(driver);
    });
}

function loadTests(driver) {

    const url = process.argv.slice(2);

    if (url && url.length) {

        driver.get(url[0]);

        driver.findElement(webdriver.By.name("q")).sendKeys("webdriver");
        
        driver.sleep(1000).then(function(){
            driver.findElement(webdriver.By.name("q")).sendKeys(webdriver.Key.ENTER);
        });
        
        driver.sleep(2000).then(function(){
            driver.getTitle().then(function(title) {
                if (title === "webdriver - Google Search") {
                    console.log("Test passed.");
                } else {
                    console.log("Test failed.");
                }
                driver.quit();
            });
        });
    }

}
