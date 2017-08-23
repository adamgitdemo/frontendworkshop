const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./src/js/app.jsx",

    output: {
        path: __dirname + "/src/built",
        filename: "bundle.js",
        publicPath: "/built/"
    },

    devServer: {
        port: 9090,
        contentBase: __dirname + "/src/html"
    },

    module: {
        loaders: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: ["css-loader?minimize=true"]
                })
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin("bundle.css"),
    ]
};
