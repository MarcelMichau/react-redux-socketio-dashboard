const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: [
        'babel-polyfill',
        './app/index.js'
    ],

    output: {
        path: __dirname + '/public',
        filename: 'index_bundle.js'
    },

    devtool : 'cheap-module-eval-source-map',

    module: {
        // preLoaders: [
        //     {
        //         test: /\.js$/,
        //         loaders: ['eslint'],
        //         include: path.join(__dirname, 'app')
        //     }
        // ],
        loaders: [
            { test: /\.js$/, include: path.join(__dirname, 'app'), loader: 'babel', query: { presets: [ 'es2015', 'react' ] } },
            { test: /\.css$/, loader: 'style!css'}
        ]
    },
    
    plugins: [HtmlWebpackPluginConfig]
};