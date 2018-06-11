const  path = require('path');
const  UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve('./dist'),
        filename: "build.js"
    },
    watch: false, //for live build
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    plugins: [
       new UglifyJsPlugin()
    ]
}