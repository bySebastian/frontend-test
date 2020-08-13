const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: "./src/Index.js",
    target: "node",
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "App.bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/env", "@babel/react"]
                    }
                },
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: "source-map"
};