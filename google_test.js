require("geckodriver");
require("chromedriver");

const webdriver = require("selenium-webdriver");
const By = webdriver.By;
const until = webdriver.until;

const driver_ff = new webdriver.Builder("").forBrowser("firefox").build();
const driver_chrome = new webdriver.Builder("").forBrowser("chrome").build();

searchTest(driver_ff);
searchTest(driver_chrome);

function searchTest(driver) {
    driver.get("https://www.google.com");

    driver.findElement(By.name("q")).sendKeys("webdriver");
    
    driver.sleep(1000).then(function(){
        driver.findElement(By.name("q")).sendKeys(webdriver.Key.ENTER);
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
