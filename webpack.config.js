const webpack = require("webpack"),
	path = require("path");

let plugins = [
	new webpack.optimize.OccurrenceOrderPlugin(),
], devtool = false, watch = false;

if (process.env.NODE_ENV === 'production') {
  plugins = plugins.concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
        // NODE_ENV: '"development"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
        warnings: false
      },
      uglifyOptions: {
		compress: {
			unsafe: true,
			inline: true,
			passes: 2,
			keep_fargs: false,
		},
		output: {
			beautify: false,
		},
		mangle: true,
	  },
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}else{
	devtool = '#source-map'
	watch = true
}

module.exports = [{
	entry: [
		"babel-polyfill",
		"./src/js/common.js",
	],
	output: {
		filename: "common.js",
		path: path.resolve(__dirname, "./dist/js/"),
	},
	watch: watch,
	devtool: devtool,
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: "babel-loader",
				query: {
                  "presets": [
                    ["env", {
                      "loose": true,
                    }]
                  ],
                },
				exclude: /(node_modules|bower_components)/,
			},
			{
				test: /\.css$/,
				// loader: "css-loader",
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader",
						options: {
							minimize: true,
						}
					}
				]
			}
		]
	},
	plugins: plugins
}];