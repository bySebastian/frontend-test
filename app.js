const Test = require("./lib/test");
const CONFIG = require("./config.json");
const url = process.argv.slice(2)[0];

if (CONFIG.browsers && CONFIG.browsers.length) {
    if (url && url.length) {
        CONFIG.browsers.map((browser) => {
            try {
                if (CONFIG.tests && CONFIG.tests.length) {
                    CONFIG.tests.map((testItem) => {
                        Test(browser, url, testItem).then(result => {
                            console.log("result", result);
                        });
                    });
                } else {
                    console.log("ERROR. No tests available.");
                }
            }catch(error) {
                console.log(`Error. ${error}`);
            }
        });
    } else {
        console.log("ERROR. URL parameter is missing.");
    }
}
