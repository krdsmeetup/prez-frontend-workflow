var path = require('path'),
	webpack = require('webpack'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	ExtractTextPlugin = require('extract-text-webpack-plugin'),
	CleanWebpackPlugin = require('clean-webpack-plugin'),
	WebpackCleanupPlugin = require('webpack-cleanup-plugin'),
	extractCSS = new ExtractTextPlugin('build.[hash:8].css');

var loaders = [
	{
		test: /\.css$/,
		loader: extractCSS.extract('style', 'css')
	},
	{
		test: /\.(jp?eg|png|gif|webp)$/,
		loader: 'file?name=./img/[hash:8].[ext]'
	},
	{
		test: /\.(ttf|eot|woff|woff2)$/,
		loader: 'file?name=./font/[hash:8].[ext]'
	},
	//special loaders
	{
		test: /.*(reveal.js\\plugin).*$/,
		loader: 'file?name=./plugin/[name].[ext]'
	},
	{
		test: /.*(reveal.js\\plugin).*js$/,
		loader: 'uglify'
	},
];

var plugins = [
	new CleanWebpackPlugin('./build'),
	extractCSS,
	new HtmlWebpackPlugin({
		template: path.resolve(__dirname, 'src', 'view', 'index.html')
	})
];

module.exports = {
	entry: path.resolve(__dirname, 'src', 'js', 'index.js'),
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'build.[hash:8].js'
	},
	module: {
		loaders: loaders
	},
	plugins: plugins,
	devServer: {
		contentBase: path.resolve(__dirname, 'build'),
		inline: true,
		noInfo: true,
		compress: true,
		host: '0.0.0.0'
	}
}
