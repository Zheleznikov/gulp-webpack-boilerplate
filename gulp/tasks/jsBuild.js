const { src, dest } = require('gulp');
const $ = require('gulp-load-plugins')();
const named = require('vinyl-named');
const webpackStream = require('webpack-stream');


module.exports = (options) => () => src(options.src)
  .pipe($.plumber({
    errorHanlder: $.notify.onError(err => ({
      title: 'Webpack',
      message: err.message
    }))
  }))
  .pipe(named())
  .pipe(webpackStream(options.webpackConfig))
  .pipe(dest('build'));