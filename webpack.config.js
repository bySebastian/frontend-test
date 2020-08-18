const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const { resolve } = require("path");

module.exports = {
    entry: ["./src/Index.js"],
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, './dist')
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devServer: {
        hot: true,
        open: true,
        contentBase: "./dist", 
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/template.html",
            filename: "index.html",
            inject: true
        })
    ]
};