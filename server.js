var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require("./webpack/config.dev.js")

var compiler = webpack(config)
var server = new WebpackDevServer(compiler, {hot:true, stats:{color:true}})
server.listen(1234, function(err) {
    if(!err) {
        console.log('All is well, listening on port:1234')
    } else {
        console.log('Wrong:', err)
    }
})