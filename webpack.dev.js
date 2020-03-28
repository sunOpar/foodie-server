const merge = require('webpack-merge')
const webpack = require('webpack')
const common = require('./webpack.common')

const config = {
  devServer: {
    writeToDisk: true,
    hot: true,
  },
  plugins:[
    new webpack.AutomaticPrefetchPlugin()
  ]
}

module.exports = merge(common, config)
