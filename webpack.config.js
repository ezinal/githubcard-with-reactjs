module.exports={
	entry:'./statics/js/main.js',
	output:{
		path: './',
		filename:'index.js'
	},
	devServer:{
		inline:true,
		port:3333
	},
	module:{
		loaders:[
			{ test: /\.scss$/ , loader:'style!css!sass' },
			{
				test:/\.js$/,
				exclude: /node_modules/,
				loader:'babel',
				query:{
					presets:['es2015','react']
				}
			}
		]
	}
}