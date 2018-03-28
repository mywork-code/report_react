'use strict';
const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
//const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
//const eslintFormatter = require('react-dev-utils/eslintFormatter');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const paths = require('./paths');
const getClientEnvironment = require('./env');
const env = getClientEnvironment('/');
const shouldUseSourceMap = true;
const publicPath = 'http://localhost:3000';

const config = {
  mode: "production",
  // 如果编译中出现错误，终止编译
  bail: true,
  // We generate sourcemaps in production. This is slow but gives good results.
  // You can exclude the *.map files from the build during deployment.
  devtool: shouldUseSourceMap ? 'source-map' : false,
  entry: {
    ayobase: [paths.appSrc]
  },
  output: {
    // The build folder.
    path: paths.appBuild,
    // Generated JS file names (with nested folders).
    // There will be one main bundle, and one file per asynchronous chunk.
    // We don't currently advertise code splitting but Webpack supports it.
    filename: 'js/[name].[chunkhash:8].js',
    chunkFilename: 'js/[name].[chunkhash:8].chunk.js',
    // We inferred the "public path" (such as / or /my-project) from homepage.
    publicPath: publicPath,
    // Point sourcemap entries to original disk location (format as URL on Windows)
    devtoolModuleFilenameTemplate: info => path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
  },
  externals: [{
      react: 'React',
    }, {
    ' react-dom': 'ReactDOM',
  }, {
    ' react-router-dom': 'ReactRouterDOM',
  }],
  resolve: {
    // 告诉 webpack 解析模块时应该搜索的目录。
    modules: [paths.appNodeModules],
    // 自动解析确定的扩展
    extensions: ['.js', '.json','.jsx'],
  },
  module: {
  	strictExportPresence: true,
  	rules: [{
  		oneOf: [{
  			test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/], // 解析图片
        loader: require.resolve('url-loader'),
        options: {
          limit: 10000,
          name: 'images/[name].[hash:8].[ext]',
        },
  		}, {
        test: /\.(js|jsx)$/,
        include: paths.appSrc,
        loader: require.resolve('babel-loader'),
        options: {
          compact: true,
        },
  		}, {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: {
            loader: require.resolve('style-loader'),
            options: {
              hmr: false,
            }, 
          },
          use: [{
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              minimize: true,
              sourceMap: shouldUseSourceMap,
            },
          }, {
            loader: require.resolve('sass-loader'), // compiles Sass to CSS 
            options: {
              includePaths: [paths.appSrc]
            }
          }, {
            loader: require.resolve('postcss-loader'),
            options: {
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
              })],
            }
          }]
        }),
      }, {
        loader: require.resolve('file-loader'),
        exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
        options: {
          name: 'media/[name].[hash:8].[ext]',
        },
      }]
  	}]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new webpack.DefinePlugin(env.stringified),
     
    new ExtractTextPlugin({
      filename: 'css/ayobase.css',
    }),
    new ManifestPlugin({
      fileName: 'asset-manifest.json',
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
}

module.exports = config;