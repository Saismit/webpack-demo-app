const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: "./src/index.js",
        vendor: "./src/vendor.js"
    },
    plugins: [new HtmlWebpackPlugin({
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
                ],
            },
            {
                test: /\.html$/i,
                loader: "html-loader"
            }/*,
            {
                test: /\.(svg|png|jpg|gif)$/i,
                loader: "file-loader",
                options: {
                    name: "[name].[hash].[ext]",
                    outputPath: "imgs"
                }
            }*/
        ]
    }
};

// module.exports = [
//     "eval",
//     "eval-cheap-source-map",
//     "eval-cheap-module-source-map",
//     "eval-source-map",
//     "cheap-source-map",
//     "cheap-module-source-map",
//     "inline-cheap-source-map",
//     "inline-cheap-module-source-map",
//     "source-map",
//     "inline-source-map",
//     "hidden-source-map",
//     "nosources-source-map"
// ].map(devtool => ({
//     mode: "development",
//     entry: "./src/index.js",
//     output: {
//         path: path.resolve(__dirname, "dist"),
//         filename: `./[name]-${devtool}.js`
//     },
//     devtool,
//     optimization: {
//         runtimeChunk: true
//     }
// }));
