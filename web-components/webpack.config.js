const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const uglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const stencil = require('@stencil/webpack');
const CopyPlugin = require('copy-webpack-plugin');

//extracts CSS to JS module or CSS file if specified
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// Minifies CSS
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const libraryName = 'veterinaJSBundle';
const outputFile = `${libraryName}.min.js`;


module.exports = {
    entry: './src/index.js',
    output: {
        library: libraryName,
        libraryTarget: 'umd',
        libraryExport: 'default',
        path: path.resolve(__dirname, 'dist'),
        filename: outputFile,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                        },
                    },
                ],
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: [
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 20000, // Convert images < 8kb to base64 strings
                        name: 'img/[hash]-[name].[ext]',
                    },
                }],
            },
        ],
    },
    optimization: {
        minimizer: [new OptimizeCssAssetsPlugin({})],
    },
    plugins: [
        new stencil.StencilPlugin(),
        new uglifyJsPlugin(),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'),
        }),
        new MiniCssExtractPlugin(
            {filename: "dist.css"}
        ),
        new CopyPlugin([
            { from: 'static', to:'static' }
        ]),
        new webpack.HotModuleReplacementPlugin()
    ],
};