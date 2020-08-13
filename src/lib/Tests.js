import React from "react";
import Test from "./Test";
import config from "../../config.json";

export const Tests = () => {

    const url = process.argv.slice(2)[0];
    const results = [];
    const { browsers, tests} = config;

    if (browsers && browsers.length) {
        if (url && url.length) {
            browsers.map((browser) => {
                if (tests && tests.length) {
                    tests.map(async (test) => {
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

    return results

}
