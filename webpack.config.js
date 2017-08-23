const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./src/js/app.jsx",

    output: {
        path: __dirname + "/src/built",
        filename: "bundle.js",
        publicPath: "/built/"
    },

    resolve: {
        extensions: ['.js', '.jsx', '.scss']
    },

    devServer: {
        port: 9090,
        contentBase: __dirname + "/src/html"
    },

    module: {
        loaders: [
            {
                test: /\.jsx$/,
                use: ["babel-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: ["css-loader?minimize=true", "sass-loader"]
                })
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin("bundle.css"),
    ]
};
