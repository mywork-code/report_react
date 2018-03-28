const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const autoprefixer = require('autoprefixer');
const paths = require('./paths');



const config = {
	// context: path.resolve(__dirname, "../"),
	// 如果您希望在DevTools中查看编译后的输出，您可能需要'eval'。
	devtool: 'cheap-module-source-map',
  mode: 'development',
  entry: [
    require.resolve('react-dev-utils/webpackHotDevClient'),
    paths.appIndexJs,
  ],
  output: {
    // Add /* filename */ comments to generated require()s in the output.
    pathinfo: true,
    // This does not produce a real file. It's just the virtual path that is
    // served by WebpackDevServer in development. This is the JS bundle
    // containing code from all our entry points, and the Webpack runtime.
    filename: 'js/bundle.js',
    // There are also additional JS chunk files if you use code splitting.
    chunkFilename: 'js/[name].chunk.js',
    // This is the URL that app is served from. We use "/" in development.
    publicPath: '/',
    // Point sourcemap entries to original disk location (format as URL on Windows)
    devtoolModuleFilenameTemplate: info => path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
  },
/*  externals: [{
      react: 'React',
    }, {
    ' react-dom': 'ReactDOM',
  }, {
    ' react-router-dom': 'ReactRouterDOM',
  }],*/
  resolve: {
    // 告诉 webpack 解析模块时应该搜索的目录。
    modules: [paths.appNodeModules],
    // 自动解析确定的扩展
    extensions: ['.js', '.json','.jsx'],
  },
  module: {
  	strictExportPresence: true,
  	rules: [{
	  	oneOf: [
	  		{
          test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
          loader: require.resolve('url-loader'),
          options: {
            limit: 10000,
            name: 'images/[name].[hash:8].[ext]',
          },
        },
        {
          test: /\.(js|jsx)$/,
          include: [paths.appSrc, paths.appExample],
          loader: require.resolve('babel-loader'),
          options: {  
            // This is a feature of `babel-loader` for webpack (not Babel itself).
            // It enables caching results in ./node_modules/.cache/babel-loader/
            // directory for faster rebuilds.
            cacheDirectory: true,
          },
        },
        {
        	test: /\.css$/,
        	use: [
        	  require.resolve('style-loader'),
        	  {
              loader: require.resolve('css-loader'),
              options: {
                importLoaders: 1,
              },
            },
            {
              loader: require.resolve('sass-loader'), // compiles Sass to CSS 
              options: {
                includePaths: [paths.appSrc, paths.appExample]
              }
            },
            {
              loader: require.resolve('postcss-loader'),
                options: {
                  // Necessary for external CSS imports to work
                  // https://github.com/facebookincubator/create-react-app/issues/2677
                  ident: 'postcss',
                  plugins: () => [
                    require('postcss-flexbugs-fixes'),
                    autoprefixer({
                      browsers: [
                        '>1%',
                        'last 4 versions',
                        'Firefox ESR',
                        'not ie < 9', // React doesn't support IE8 anyway
                      ],
                      flexbox: 'no-2009',
                    }),
                  ],
                },
             },
        	],
        },
        {
          // Exclude `js` files to keep "css" loader working as it injects
          // its runtime that would otherwise processed through "file" loader.
          // Also exclude `html` and `json` extensions so they get processed
          // by webpacks internal loaders.
          exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
          loader: require.resolve('file-loader'),
          options: {
            name: 'media/[name].[hash:8].[ext]',
          },
        },
	  	]
	  }]
  },
  plugins: [
    // Generates an `index.html` file with the <script> injected.
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
    }),
    // Add module names to factory functions so they appear in browser profiler.
    new webpack.NamedModulesPlugin(),
    // new webpack.DefinePlugin(env.stringified),
    // This is necessary to emit hot updates (currently CSS only):
    new webpack.HotModuleReplacementPlugin(),
        // Watcher doesn't work well if you mistype casing in a path so we use
    // a plugin that prints an error when you attempt to do this.
    // See https://github.com/facebookincubator/create-react-app/issues/240
    new CaseSensitivePathsPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
    // Turn off performance hints during development because we don't do any
  // splitting or minification in interest of speed. These warnings become
  // cumbersome.
  performance: {
    hints: false,
  }
}

module.exports = config;
