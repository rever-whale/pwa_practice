const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const { GenerateSW } = require('workbox-webpack-plugin');

module.exports = {
  entry: {
    index: path.resolve(__dirname, './src/index.js')
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html')
    }),
    new WebpackPwaManifest({
      name: 'React Memo App',
      short_name: 'Memo',
      description: 'Memo App created by React',
      background_color: '#ffffff',
      crossorigin: 'use-credentials',
      theme_color: '#eeeeee',
      icons: [
        {
          src: path.resolve(__dirname, './src/assets/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
        }
      ]
    }),
    new GenerateSW({
      include: [/\.html$/, /\.js$/, /\.png$/]
    }),
    new CleanWebpackPlugin()
  ]
};
