const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: ['@babel/polyfill', path.join(__dirname, '/src/index.js')],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/'
  },
  plugins: [new HtmlWebpackPlugin({template: './src/index.html'})],
  
  devServer: {
    // need public path : build, directory (current path + build) - specifies where in memory the dev server is running
    static :{
      publicPath: 'build',
      directory: path.resolve(__dirname, 'build')
    },
     proxy: [{
      context: ['/','/auth', '/store', '/store/add', '/cart', '/store/checkout'],
      target: 'http://localhost:3000'
      }]
     ,
    port: 8080,
    historyApiFallback: true,
    },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,    
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env', '@babel/react']
        },
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
    },
    {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
    }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
