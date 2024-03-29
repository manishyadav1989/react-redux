require('dotenv').config();

const webpack = require('webpack'),
	path = require('path'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	MiniCssExtractPlugin = require('mini-css-extract-plugin'),
	webpackBundleAnalyzer = require('webpack-bundle-analyzer'),
	enviorment = require('./webpack.plugins');

module.exports = {
	mode: process.env.APP_NODE_ENV,
	target: 'web',
	devtool: 'source-map',
	entry: './src/index',
	output: {
		path: path.resolve(__dirname, 'build'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	plugins: [
		new webpackBundleAnalyzer.BundleAnalyzerPlugin({ analyzerMode: 'static' }),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css'
		}),
		new webpack.DefinePlugin(enviorment),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeStyleLinkTypeAttributes: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyCSS: true,
				minifyURLs: true
			}
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
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: () => [require('cssnano')],
							sourceMap: true
						}
					}
				]
			}
		]
	}
};
