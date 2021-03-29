module.exports = {
    entry: {
        main: "./src/index.js",
        vendor: "./src/vendor.js"
    },
    module: {
        rules: [
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
