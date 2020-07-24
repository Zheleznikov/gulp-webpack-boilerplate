const { src, dest } = require('gulp');
const $ = require('gulp-load-plugins')();
const named = require('vinyl-named');
const webpackStream = require('webpack-stream');

const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

const webpackConfig = {
  mode: isDev ? 'development' : 'production',
  module: {
    rules: [{
      test: /\.js$/,
      loader: "babel-loader",
      exclude: /node_modules/
    }]
  }
}

module.exports = () => src('src/index.js')
  .pipe($.plumber({ errorHanlder: $.notify.onError()}))
  .pipe(named())
  .pipe(webpackStream(webpackConfig))
  .pipe(dest('build'));