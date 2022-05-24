const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports= {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'index.html'),
    },
    compress: true,
    port: 8080
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './src/index.html',
      hash: true,
    })
  ],
  module: {
    rules: [
      {
        test: /\.js?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
    ],
  },
};