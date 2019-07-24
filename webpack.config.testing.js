require('dotenv').config();

const webpack = require('webpack'),
	path = require('path'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	enviorment = require('./webpack.plugins');

module.exports = {
	mode: process.env.APP_NODE_ENV,
	target: 'web',
	devtool: 'cheap-module-source-map',
	entry: './plainReduxTest/plainReduxStoretest',
	output: {
		path: path.resolve(__dirname, 'build'),
		publicPath: '/',
		filename: 'bundletest.js'
	},
	devServer: {
		stats: 'minimal',
		overlay: true,
		historyApiFallback: true,
		disableHostCheck: true,
		headers: { 'Access-Control-Allow-Origin': '*' },
		https: false
	},
	plugins: [
		new webpack.DefinePlugin(enviorment),
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader', 'eslint-loader']
			},
			{
				test: /(\.css)$/,
				use: ['style-loader', 'css-loader']
			}
		]
	}
};
