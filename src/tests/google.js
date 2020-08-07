module.exports = async (By, Key, until, driver) => {    
    const searchField = await driver.findElement(By.name("q"));
    searchField.sendKeys("webdriver");

    driver.wait(until.elementLocated(By.name("q")), 10000).then((name) => { name.sendKeys(Key.ENTER) });
    
    const isCorrectTitle = await until.titleContains("webdriver"); 

    return Promise.all([isCorrectTitle ? "Tests passed." : "Tests failed."]);
};
