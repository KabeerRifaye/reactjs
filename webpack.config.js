module.exports = {
	entry: './app-client.js', // start with app-client.js
	output: {
		filename: 'public/js/bundle.js'
	},
	module: {
		loaders: [
			{
				exclude: /(node_modules|bower_components)/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	}
};