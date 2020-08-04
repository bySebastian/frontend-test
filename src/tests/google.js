module.exports = (webdriver, driver) => {

    const keyword = driver.findElement(webdriver.By.name("q")).sendKeys("webdriver");
    const search = driver.wait(webdriver.until.elementLocated(webdriver.By.name("q")), 10000).then((name) => { name.sendKeys(webdriver.Key.ENTER) });
    const result = driver.wait(webdriver.until.titleContains("webdriver"), 10000).then((value) => {
        if (value) {
            console.log("Test passed.");
        } else {
            console.log("Test failed.");
        }
    });

    return Promise.all(keyword, search, result)
}
