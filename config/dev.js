process.env.NODE_ENV = 'development';

const chalk = require('chalk');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const clearConsole = require('./helpers/clear-console');
const formatWebpackMessages = require('./helpers/format-webpack-message');
const getLocalIP = require('./helpers/ip');
const webpackConfig = require('./webpack.dev');


let compiler;
function setupCompiler(host, port, protocol) {
  compiler = webpack(webpackConfig);

  compiler.plugin('invalid', () => {
    clearConsole();
    console.log('Compiling...');
  });

  compiler.plugin('done', (stats) => {
    clearConsole();

    const messages = formatWebpackMessages(stats.toJson({}, true));
    if (!messages.errors.length && !messages.warnings.length) {
      console.log(chalk.green('Compiled successfully!'));
      console.log();
      console.log('The app is running at:');
      console.log();
      console.log(`  ${chalk.cyan(`${protocol}://${host}:${port}/`)}`);
      console.log();
    }

    // If errors exist, only show errors.
    if (messages.errors.length) {
      console.log(chalk.red('Failed to compile.'));
      console.log();
      messages.errors.forEach((message) => {
        console.log(message);
        console.log();
      });
      return;
    }

    // Show warnings if no errors were found.
    if (messages.warnings.length) {
      console.log(chalk.yellow('Compiled with warnings.'));
      console.log();
      messages.warnings.forEach((message) => {
        console.log(message);
        console.log();
      });
    }
  });
}

function runDevServer(host, port, protocol) {
  const devServer = new WebpackDevServer(compiler, {
    // Silence WebpackDevServer's own logs since they're generally not useful.
    // It will still show compile warnings and errors with this setting.
    clientLogLevel: 'none',
    // By default WebpackDevServer also serves files from the current directory.
    // This might be useful in legacy apps. However we already encourage people
    // to use Webpack for importing assets in the code, so we don't need to
    // additionally serve files by their filenames. Otherwise, even if it
    // works in development, those files will be missing in production, unless
    // we explicitly copy them. But even if we copy all the files into
    // the build output (which doesn't seem to be wise because it may contain
    // private information such as files with API keys, for example), we would
    // still have a problem. Since the filenames would be the same every time,
    // browsers would cache their content, and updating file content would not
    // work correctly. This is easily solved by importing assets through Webpack
    // because if it can then append content hashes to filenames in production,
    // just like it does for JS and CSS. And because we configured "html" loader
    // to be used for HTML files, even <link href="./src/something.png"> would
    // get resolved correctly by Webpack and handled both in development and
    // in production without actually serving it by that path.
    contentBase: [],
    historyApiFallback: true,
    hot: true,
    inline: true,
    // It is important to tell WebpackDevServer to use the same "root" path
    // as we specified in the config. In development, we always serve from /.
    publicPath: webpackConfig.output.publicPath,
    // WebpackDevServer is noisy by default so we emit custom message instead
    // by listening to the compiler events with `compiler.plugin` calls above.
    quiet: true,
    watchOptions: {
      ignored: /node_modules/
    },
    // Enable HTTPS if the HTTPS environment variable is set to 'true'
    https: protocol === 'https',
    host
  });

  devServer.listen(port, (err) => {
    if (err) {
      console.log(err);
    } else {
      clearConsole();
      console.log(chalk.cyan('Starting the development server...'));
      console.log();
    }
  });
}

const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
const port = process.env.PORT || 8080;
const host = process.env.HOST || getLocalIP();
setupCompiler(host, port, protocol);
runDevServer(host, port, protocol);
