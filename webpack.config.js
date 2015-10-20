var path = require('path')
var webpack = require('webpack')

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
  },
  {
    entry: {
      B: ['./src/B.js']
    },
    output: {
      filename: '[name].js'
    },
    plugins: [
      new webpack.DllPlugin({
        path: path.resolve(__dirname, 'B-manifest.json'),
        name: '[name]_[hash]'
      })
    ]
  },
  {
    entry: {
      C: ['./src/C.js']
    },
    output: {
      filename: '[name].js'
    },
    plugins: [
      new webpack.DllPlugin({
        path: path.resolve(__dirname, 'C-manifest.json'),
        name: '[name]_[hash]'
      })
    ]
  }
]
