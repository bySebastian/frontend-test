async function Google(webdriver, driver) {    
    const searchField = await driver.findElement(webdriver.By.name("q"));
    searchField.sendKeys("webdriver");

    driver.wait(webdriver.until.elementLocated(webdriver.By.name("q")), 10000).then((name) => { name.sendKeys(webdriver.Key.ENTER) });
    
    const isCorrectTitle = await webdriver.until.titleContains("webdriver"); 

    return Promise.all([isCorrectTitle ? "Tests passed." : "Tests failed."]);
};

module.exports = Google;