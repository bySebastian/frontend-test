async function Alt (webdriver, driver){

    const imgFields = await driver.findElement(webdriver.By.tagName("img"));

    return Promise.all([imgFields]);
};

module.exports = Alt;