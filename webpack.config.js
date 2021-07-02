const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlagin = require('copy-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	optimization: {
		minimizer: [
		new OptimizeCssAssetsPlugin({}),
		// new UglifyJsPlugin({}) 
		]
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		port: 4200
	},
	plugins: [
		new HTMLPlugin({
			filename: 'index.html',
			template: './src/index.html'
		}),
		new MiniCssExtractPlugin({
			filename: 'style.css'
		}),
		new CopyWebpackPlagin([
			{
				context: path.resolve(__dirname),
				from: 'src/img',
				to: path.resolve(__dirname, './dist/img'),
			  }
		  ])
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
			},
			{
				test: /\.less$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
			},
			{
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
			},

			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},
			{
				test: /\.(jpg|png)$/,
				use: {
				  loader: "file-loader",
				  options: {
					name: 'img/[name].[ext]',
					outputPath: ''
				  }
				}
			  },
			  {
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				use: [
						 {
							 loader: 'file-loader?name=./src/fonts/[name].[ext]'
						 }
					 ]
			}
		]
	}
}