const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const project = require('./project.config');

module.exports = {
	entry: {
		main: './src/index',
		react: [ 'react' ]
	},
	devtool: 'source-map',
	output: {
		path: project.remotePath,
		publicPath: '/',
		filename: 'bundle.js',
		library: '[name]'
	},
	resolve: {
		modulesDirectories: [ 'node_modules' ],
		extensions: ['', '.js', '.jsx']
	},
	module: {
		preLoaders: [
			{
				test: /(\.js$)|(\.jsx$)/,
				loaders: [ 'eslint' ],
				include: [
					path.resolve(__dirname, 'js')
				]
			}
		],
		loaders: [
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'url-loader?name=fonts/[name].[ext]&limit=10000&mimetype=application/font-woff'
			},
			{
				test: /\.(ttf|eot|svg|png|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'file?name=fonts/[name].[ext]'
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('css-loader')
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('css!sass')
			},
			{
				test: /\.(png|jpg|gif)$/,
				loader: 'url-loader?name=images/[name].[ext]'
			},
			{
				test: /\.jsx$/,
				loaders: [ 'babel-loader' ],
				include: path.join(__dirname, 'src')
			},
			{
				test: /\.js$/,
				loader: 'babel',
				include: path.join(__dirname, 'src')
			}
		]
	},
	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'react',
			filename: 'react.js'
		}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		}),
		new ExtractTextPlugin('style/style.min.css', { allChunks: true }),
		new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /ru/),
		new webpack.optimize.UglifyJsPlugin({ mangle: false })
	]
};
