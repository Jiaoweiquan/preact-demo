var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

function cd(p) {
    return path.join(__dirname,'..', p)
}

module.exports = {
    devtool: 'source-map',
    entry:{
        app: [
            cd('src/index.ts'),
            'webpack/hot/only-dev-server',
            'webpack-dev-server/client'
        ],
        vendors: ['preact']
    },
    output: {
        path: cd('dist'),
        filename: '[name].js',
        publicPath: '/'
    },
     module: {
        loaders:[
            { test:/\.tsx?$/, loader:'ts-loader', },
            {
                test:/\.(css|less)$/, loader:'style!css!less'
            }        
        ]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            template:cd('index.template.html'),
            inject:'body',            
            filename:'index.html',
        }),
        new webpack.optimize.CommonsChunkPlugin('vendors','vendors.js')
    ],
    resolve: {
        extensions:['', '.js', '.jsx', '.ts','.tsx'],
        modulesDirectories: ['node_modules', ],
    }
}