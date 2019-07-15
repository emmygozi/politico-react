const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/react", "@babel/env"]
          }
        }
      },
      {
        test: /\.(css|scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        enforce: 'pre'
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name]-[hash:8].[ext]'
            },
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.css', '.scss']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}
