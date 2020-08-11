async function Alt (webdriver, driver){

    const searchField = await driver.findElement(webdriver.By.name("q"));
    console.log("q", searchField);

    return Promise.all([searchField]);
};

module.exports = Alt;