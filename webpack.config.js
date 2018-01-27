var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    devtool: 'inline-source-map',
    entry: {
      app: './app/index.js',
      vendor: [
        'react',
        'react-dom',
        'prop-types'
      ],
      style: './app/style.js'
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].bundle.js'
    },
    plugins: [
          new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.bundle.js',
            minChunks: Infinity})
    ],
    module: {
        loaders: [
            {
              test: /.js$/,
              loader: 'babel-loader',
              include: path.join(__dirname, 'app'),
              exclude: /node_modules/,
              query: {
                  presets: ['es2015', 'react']
              }
            },
            {
              test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/,
              loader: 'file-loader?name=fonts/[name].[ext]'
            },
            {
              test: /\.(png|jp|svg)$/,
              loader: 'url-loader?limit=8192'
            },
            {
              test: /\.less$/,
              loaders: ["style-loader", "css-loader", "less-loader"]
            }
        ]
    }
};
