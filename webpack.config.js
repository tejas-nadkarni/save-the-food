var webpack = require('webpack'),
		path = require('path'),
		jsSrcRoot = path.resolve(__dirname, 'src/js'),
		jsPubRoot = path.resolve(__dirname, 'public/js');

module.exports = {
	entry: {
		app: './src/js/app.js',
		vendor:['jquery']
	},
	output: {
		filename: 'bundle.js',
		path: jsPubRoot
	},
	module:{
		loaders : [
			{
				test:/\.js?$/,
				include: jsSrcRoot,
				exclude: '/(node_modules|bower_componemts)/',
				loader: 'babel'
			}
		]
	},
	plugins:[
		new webpack.optimize.CommonsChunkPlugin(/* CommonsChunkPluginunkName= */'vendor', /* filename= */'vendor.bundle.js')
	]

};