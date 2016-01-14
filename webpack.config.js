var webpack = require('webpack');

var plugins = [
	new webpack.ProvidePlugin({
		'_': 'underscore',
		'Backbone': 'backbone',
		'$': 'jquery',
		'jQuery': 'jquery'
	})
];

module.exports = {
	entry: './src/js/app.js',
	devtool: 'source-map',
	resolve: {
		modulesDirectories: [
			'./src'
		],
		alias: {
			jquery: 'libs/jquery/dist/jquery.min',
			underscore: 'libs/underscore/underscore-min',
			backbone: 'libs/backbone/backbone-min'
		}
	},
	output: {
		publicPath: '.',
		path: './dist',
		filename: 'gallery.bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.ejs/,
				loader: 'text-loader'
			},
			{
				test: /\.css$/,
				loader: "style!css!autoprefixer"
			},
			{
				test: /\.less$/,
				loader: "style!css!autoprefixer!less"
			},
			{
				test:   /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
				loader: 'file?name=[path][name].[ext]'
			},
			{
				test:   /\.js$/,
				loader: 'babel?presets[]=es2015'
			},
			{
				test: /\.js$/,
				loader: "eslint-loader",
				exclude: /(node_modules|src\/libs)/
			}
		]
	},
	plugins: plugins
};
