import webdriver from "selenium-webdriver"; 

export async const Test = (browser, url, test) => {

    // 1. Load browser
    require(browser.driver);
    const driver = await new webdriver.Builder("").forBrowser(browser.name).build();
    let result;

    try {
        // 2. Load URL
        await driver.get(url);

        // 3. Load test
        result = await require(test.path)(webdriver, driver).then((result) => {
            return [
                { "browser": browser.name },
                { "test": {[test.name]: result} }
            ]; 
        }, (error) => {
            console.log(`Test ${test.name} failed: ${error}`)
            return [];
        });
        
    } catch(error) {
        console.log(error);
    } finally {
        // 4. Quit driver
        await driver.close();
    }

    return Promise.all(result)
};
