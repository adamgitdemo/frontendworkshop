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
                use: ["style-loader", "css-loader?minimize=true"]
            }
        ]
    }
};
