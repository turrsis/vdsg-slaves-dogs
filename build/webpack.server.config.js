module.exports = require('~common/build/webpackConfig.js').server(
    require('../config.js'),
    require('./webpack.base.config.js'),
    require('~common/build/webpack/webpack.server.template.js')
)
