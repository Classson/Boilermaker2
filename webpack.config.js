const { resolve } = require('path')

module.exports = {
  entry: './client/main.js',
  mode: 'development',
  // output: {
  //   path: __dirname, // assumes your bundle.js will also be in the root of your project folder
  //   filename: 'bundle.js'
  // },
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  devtool: 'source-maps',
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
  }
}
