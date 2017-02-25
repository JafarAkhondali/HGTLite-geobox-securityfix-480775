var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle_[name].js',
        // publicPath: 'http://localhost:8889/static/assets/dist'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.scss$/,
                include: /src/,
                loader: ExtractTextPlugin.extract('style-loader', ['css-loader', 'sass-loader'])
            },
            {
                test: /\.(eot|woff|ttf|woff2|svg)/,
                loader: "file-loader"
            }
        ]

    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "GeoBox 时空云盘",
            hash: true,
            template: path.resolve(__dirname, 'src/templates/main-contents.html')
        }),
        new CopyWebpackPlugin([
            {
                from: __dirname + '/src/templates/favicon.ico',
                to: __dirname + '/dist'
            }
        ]),
        new ExtractTextPlugin('styles/[name].css')
    ]
};