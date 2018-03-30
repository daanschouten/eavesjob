const path = require('path');
const webpack = require('webpack');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin")
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    devtool: 'source-map',
    entry: {
      app: './app/index.js',
      vendor: [
        'react',
        'react-dom',
        'prop-types',
        'moment',
        'axios'
      ],
      style: './app/style.js'
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].bundle.js'
    },
    module: {
      loaders: [
          {
              test: /.js$/,
              loader: 'babel-loader',
              include: path.join(__dirname, 'app'),
              exclude: /node_modules/,
              query: {
                  presets: ['es2015', 'stage-1', 'react']
              }
          },
          { test: /\.(otf|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
            loader: 'url-loader?name=fonts/[name].[ext]'
          },
          {
            test: /\.(jpg|png|gif|svg|pdf|ico)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: 'img/[name].[ext]'
                    },
                },
            ]
          },
          {
            test: /\.less$/,
            loaders: ["style-loader", "css-loader", "less-loader"]
          }
      ]
    },
    plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            'NODE_ENV': JSON.stringify('production')
          }
        }),
        new webpack.optimize.CommonsChunkPlugin({
          name: 'vendor',
          filename: 'vendor.bundle.js',
          minChunks: Infinity
        }),
        new UglifyJSPlugin({
          uglifyOptions: {
            beautify: false,
            ecma: 6,
            compress: true,
            comments: false
          }
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new CompressionPlugin({
          asset: "[path].gz[query]",
          algorithm: "gzip",
          test: /\.js$|\.css$|\.html$/,
          threshold: 10240,
          minRatio: 0.8
        })
    ]
};
