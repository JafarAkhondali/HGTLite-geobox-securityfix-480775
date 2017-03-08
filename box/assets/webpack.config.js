var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');

// publicPath: 'http://localhost:8889/static/assets/dist'

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle_[name].js'
    },
    node: {fs: 'empty'},
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
            // {
            //     test: /\.(png|jpg|jpeg|gif)$/,
            //     loader: 'url-loader'
            // },
            {
                test: /\.(eot|woff|ttf|woff2|svg|png|json)(\?v=\d+\.\d+\.\d+)?$/,
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
        new ExtractTextPlugin('styles/[name].css'),
        new CopyWebpackPlugin([
            {
                from: __dirname + '/src/res/lib/shp.js',
                to: __dirname + '/dist'
            },
            {
                from: __dirname + '/src/templates/favicon.ico',
                to: __dirname + '/dist'
            },
            {
                from: __dirname + '/dist/af7ae505a9eed503f8b8e6982036873e.woff2',
                to: __dirname + '/dist/styles'
            },
            {
                from: __dirname + '/dist/fee66e712a8a08eef5805a46892932ad.woff',
                to: __dirname + '/dist/styles'
            },
            {
                from: __dirname + '/dist/b06871f281fee6b241d60582ae9369b9.ttf',
                to: __dirname + '/dist/styles'
            }
        ])

    ]
};