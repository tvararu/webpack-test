var webpack = require('webpack')

module.exports = {
  devtool: null,
  debug: false,
  entry: {
    app: './src/A.js'
  },
  output: {
    filename: '[name].js'
  },
  plugins: [
    new webpack.PrefetchPlugin('./src/C.js')
  ]
}
