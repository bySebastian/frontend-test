const getTest = require("./lib/test");
const CONFIG = require("./config.json");
const url = process.argv.slice(2)[0];
let results = [];

if (CONFIG.browsers && CONFIG.browsers.length) {
    if (url && url.length) {
        CONFIG.browsers.map((browser) => {
            if (CONFIG.tests && CONFIG.tests.length) {
                CONFIG.tests.map(async (test) => {
                    const result = await getTest(browser, url, test).then(value => {
                        return value;
                    });
                    results.push(result);
                    console.log("result", results);
                });
            } else {
                console.log("ERROR. No tests available.");
            }
        });
    } else {
        console.log("ERROR. URL parameter is missing.");
    }
}
