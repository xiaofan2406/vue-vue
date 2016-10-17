const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const cssnext = require('postcss-cssnext');
const postcssImport = require('postcss-import');
const path = require('path');

const exampleDir = path.join(__dirname, '../example');


module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client',
    'webpack/hot/dev-server',
    `${exampleDir}/index.js`
  ],
  resolve: {
    extensions: ['', '.js', '.vue', '.json'],
    alias: {
      widgets: `${exampleDir}/widgets`,
      src: path.join(__dirname, '../src'),
      store: `${exampleDir}/store`
    }
  },
  output: {
    path: `${exampleDir}/build`,
    // In development, we always serve from the root. This makes config easier.
    publicPath: '/',
    // Add /* filename */ comments to generated require()s in the output.
    pathinfo: true,
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [{
      test: /\.vue$/,
      loader: 'eslint',
      include: exampleDir
    }, {
      test: /\.js$/,
      include: exampleDir,
      loader: 'eslint'
    }],
    loaders: [{
      test: /\.vue$/,
      loader: 'vue',
      include: exampleDir
    }, {
      test: /\.js$/,
      include: exampleDir,
      loader: 'babel',
      query: {
        cacheDirectory: true
      }
    }, {
      test: /\.css$/,
      loader: 'style!css?-autoprefixer!postcss'
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.(eot|otf|ttf|woff|woff2)(\?.*)?$/,
      loader: 'file',
      query: {
        name: 'fonts/[name].[hash:8].[ext]'
      }
    }, {
      test: /\.(jpg|jpeg|png|gif|svg|ico|webp)(\?.*)?$/,
      loader: 'file',
      query: {
        name: 'media/[name].[hash:8].[ext]'
      }
    }, {
      test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
      loader: 'url',
      query: {
        limit: 10000,
        name: 'media/[name].[hash:8].[ext]'
      }
    }]
  },
  vue: {
    postcss(wp) {
      return [
        postcssImport({
          addDependencyTo: wp
        }),
        cssnext({
          browsers: [
            '>1%',
            'last 2 versions',
            'Firefox ESR',
            'not ie < 9'
          ]
        })
      ];
    }
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: `${exampleDir}/index.html`,
      favicon: `${exampleDir}/favicon.png`
    }),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"development"' }),
    new webpack.HotModuleReplacementPlugin(),
    new CaseSensitivePathsPlugin()
  ],
  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};
