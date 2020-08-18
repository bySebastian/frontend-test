const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: path.join(__dirname, "src/index.js"),
    output: {
        filename: "./dist/bundle.js"
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
            path: path.resolve(__dirname, 'dist'),
            filename: "index.html"
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"), 
        port: 3000
    }
};