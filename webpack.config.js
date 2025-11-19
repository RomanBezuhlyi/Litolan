const config = {
	mode: 'production', // можна залишити production для source maps/оптимізації CSS
	entry: {
		index: './src/js/index.js',
	},
	output: {
		filename: '[name].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	optimization: {
		minimize: false, // вимикає мінімізацію JS
	},
}

module.exports = config
