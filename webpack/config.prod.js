var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

function cd(p) {
    return path.join(__dirname,'..', p)
}

module.exports = {
    entry:{
        app: [
            cd('src/index.ts')
        ],
        vendors: ['preact']
    },
    output: {
        path: cd('dist'),
        filename: '[name].js',
        publicPath: '/preact-demo/dist/'
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
        new webpack.DefinePlugin({
            'process.env': {NODE_ENV: JSON.stringify('production')}
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.CommonsChunkPlugin('vendors','vendors.js'),
        new webpack.optimize.AggressiveMergingPlugin(),
        new HtmlWebpackPlugin({
            template:cd('index.template.html'),
            inject:'body',            
            filename:'../index.html',
        }),
    ],
    resolve: {
        alias: {
            'react': 'preact-compat',
            'react-dom': 'preact-compat'
        },        
        extensions:['', '.js', '.jsx', '.ts','.tsx'],
        modulesDirectories: ['node_modules', ],
    }
}