require('module-alias/register')
module.exports = require('~common/build/webpackConfig.js').base(
    require('../config.js'),
    require('~common/build/webpack/webpack.base.template.js')
)