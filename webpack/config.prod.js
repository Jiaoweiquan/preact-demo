var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var autoprefixer = require('autoprefixer')

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
                test:/\.(css|less)$/, loader: ExtractTextPlugin.extract('style?singleton','css!postcss!less')
            }
        ]
    },

	postcss: () => [
		autoprefixer({ browsers: 'last 2 versions' })
	],   

    plugins: [
		new ExtractTextPlugin('style.css', {
			allChunks: true,
		}),        
        new webpack.DefinePlugin({
            'process.env': {NODE_ENV: JSON.stringify('production')}
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            output: {
		 		comments: false
			},
			compress: {
				warnings: false,
				conditionals: true,
				unused: true,
				comparisons: true,
				sequences: true,
				dead_code: true,
				evaluate: true,
				if_return: true,
				join_vars: true,
				negate_iife: false
			}
        }),
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