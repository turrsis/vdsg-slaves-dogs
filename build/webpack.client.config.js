module.exports = require('~common/build/webpackConfig.js').client(
    require('../config.js'),
    require('./webpack.base.config.js'),
    require('~common/build/webpack/webpack.client.template.js')
)
