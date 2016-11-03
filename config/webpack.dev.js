const webpack = require('webpack');
const paths = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const postcssImport = require('postcss-import');
const cssnext = require('postcss-cssnext');
const getLocalIP = require('./ip');

const postcss = wp => ([
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
]);

module.exports = {
  devtool: 'eval',
  entry: [
    `${paths.clientDir}/index.js`
  ],
  resolve: {
    extensions: ['', '.js', '.vue', '.json'],
    alias: {
      root: paths.projectDir,
      store: `${paths.clientDir}/store`,
      widgets: `${paths.clientDir}/widgets`,
      src: paths.clientDir // this allows import 'src/...' without knowing the relative path
    }
  },
  output: {
    // For dev, `path` and `filename` are not important because of using webpack-dev-server
    path: paths.buildDir,
    filename: 'bundle.js',
    // In development, we always serve from the root. This makes config easier.
    publicPath: '/',
    // Add /* filename */ comments to generated require()s in the output.
    pathinfo: true
  },
  module: {
    preLoaders: [
      {
        test: /\.vue$/,
        loader: 'eslint',
        include: paths.clientDir
      },
      {
        test: /\.js$/,
        include: paths.clientDir,
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        include: paths.clientDir,
        loader: 'babel',
        query: {
          cacheDirectory: true
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css?-autoprefixer!postcss'
      },
      {
        test: /\.vue$/,
        loader: 'vue',
        include: paths.clientDir
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)(\?.*)?$/,
        loader: 'file',
        query: {
          name: 'fonts/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg|ico|webp)(\?.*)?$/,
        loader: 'file',
        query: {
          name: 'media/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: 'media/[name].[hash:8].[ext]'
        }
      }
    ]
  },
  postcss,
  vue: {
    postcss
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: `${paths.clientDir}/index.html`,
      favicon: `${paths.clientDir}/favicon.png`
    }),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"development"' }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: paths.buildDir,
    historyApiFallback: true,
    hot: true,
    inline: true,
    publicPath: '/',
    stats: 'errors-only',
    watchOptions: {
      ignored: /node_modules/
    },
    host: process.env.HOST || getLocalIP(),
    port: process.env.PORT || 8080
  }
};
