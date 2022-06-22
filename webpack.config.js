const path = require('path');

module.exports = {
	entry: './public/javascripts/getData.js' + './public/javascripts/putData.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
};