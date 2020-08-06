module.exports = (webdriver, driver) => {
    let testResult;
    driver.findElement(webdriver.By.name("q")).sendKeys("webdriver");
    driver.wait(webdriver.until.elementLocated(webdriver.By.name("q")), 10000).then((name) => { name.sendKeys(webdriver.Key.ENTER) });
    driver.wait(webdriver.until.titleContains("webdriver"), 10000).then((value) => {
        if (value) {
            testResult = "Tests passed.";
        } else {
            testResult = "Tests failed.";
        }
    });
    return Promise.all([testResult]);
}
