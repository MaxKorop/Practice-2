const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.[hash].js',
        clean: true,
    },
    module:{
        rules:[
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.svg$/, 
                use: 'svg-inline-loader'
            },
            { 
                test: /\.css$/, 
                use: [ 'style-loader', 'css-loader' ] 
            },
            { 
                test: /\.(js)$/, 
                use: 'babel-loader' 
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve("index.html")
        }),
        new webpack.EnvironmentPlugin({
            'NODE_ENV': 'production'
        })      
    ],
    mode: "production"
};