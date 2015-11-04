var webpack = require('webpack')
var dllConfig = require('./webpack.dll.config.js')

module.exports = [
  {
    entry: {
      A: './src/A.js'
    },
    output: {
      filename: '[name].js'
    },
    plugins: [
      new webpack.DllReferencePlugin({
        context: '.',
        manifest: require('./B-manifest.json')
      }),
      new webpack.DllReferencePlugin({
        context: '.',
        manifest: require('./C-manifest.json')
      })
    ]
  }
].concat(dllConfig)
