const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './main.ts',
    output: {
        filename: '[name].[hash].js',
        path: path.join(__dirname, './dist/')
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
        host: 'localhost',
        open: true,
        port: 9527
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                    presets: ['@babel/preset-env']
                    }
                }
            },
            { test: /\.ts$/, loader: "ts-loader" }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './view/index.html')
        })
    ]
}