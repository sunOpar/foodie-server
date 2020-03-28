const merge = require('webpack-merge')
const common = require('./webpack.common')

const config = {}

module.exports = merge(common, config)
