const Test = require("./lib/test");
const CONFIG = require("./config.json");
const url = process.argv.slice(2)[0];

if (CONFIG.browsers && CONFIG.browsers.length) {
    if (url && url.length) {
        CONFIG.browsers.map((browser) => {
            if (CONFIG.tests && CONFIG.tests.length) {
                CONFIG.tests.map(async (testItem) => {
                    await Test(browser, url, testItem).then(result => {
                        console.log("result", result);
                    });
                });
            } else {
                console.log("ERROR. No tests available.");
            }
        });
    } else {
        console.log("ERROR. URL parameter is missing.");
    }
}
