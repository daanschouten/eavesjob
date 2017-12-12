const path = require('path');
const webpack = require('webpack');

module.exports = [{
      name: "client",
      entry: {
        app: "./public/js/app",
        browse: "./public/js/browse",
        profile: "./public/js/profile",
        react: "./public/js/components/app.jsx",
        vendor: [
          'react',
          'react-dom',
          'prop-types'
        ]
      },
      output: {
        publicPath: "http://localhost:3000/build/", // Development Server
        // publicPath: "http://example.com/", // Production Server
        path: path.resolve(__dirname, 'public/build'),
        filename: '[name].bundle.js'
      },
      plugins: [
            new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' }),
      ],
      module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          },
          {
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
              presets: ['es2015', 'react']
            }
          },
          {
            test: /\.less$/,
            loaders: ["style-loader", "css-loader", "less-loader"]
          },
          {
            test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
            loader : 'file-loader?name=fonts/[name].[ext]'
          }
        ]
      },
}];
