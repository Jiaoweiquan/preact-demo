var prodConfig = require('./config.prod')

var debugConfig = Object.assign({}, prodConfig, {
    output: Object.assign({}, prodConfig.output, {
        publicPath: './dist/'
    })
})

module.exports = debugConfig