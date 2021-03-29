const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: "development",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html"
        })],
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    "style-loader", // step 3: inject styles into DOM
                    "css-loader", // step 2 turns css into commonjs
                    "sass-loader" // step 1: turns sass into css
                ]
            }
        ]
    }
});
