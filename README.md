# webpack2-replace-loader

## About

Simple find and replace loader for webpack2.  Personally using this as a pre-loader for sass/scss/css.  Useful for mirror sites that require several builds with minor css changes.


### Sample Of use

Sample of loader in webpack2 config.  Uses literal find and replace strings.  Object property key is the find string and data is the replace.

```javascript
// inside your webpack.config.js
export.default = {
	...
	module: {
		...
		{
			test: /\.scss$/,
			exclude: /node_modules/,
			use: [
				{
					loader: 'style-loader',
					options: {}
				},
				{
					loader: 'css-loader',
					options: {}
				},
				{
					loader: 'postcss-loader',
					options: {}
				},
				{
					loader: 'sass-loader',
					options: {}
				},
				{
					loader: 'webpack2-replace-loader',
					options: {
						replace: {
							//find: replace
							'#{env}': process.env.NODE_ENV,   //$env: '#{env}';
							'#{path}': 'public/scss',         //@import '#{path}/styles.scss';
							'#{domain}': 'somewhere.com'      //@import '#{path}/#{domain}/styles.scss';
						}
					}
				}
			]
		}
	}
};
```


## License

MIT (http://www.opensource.org/licenses/mit-license.php)
