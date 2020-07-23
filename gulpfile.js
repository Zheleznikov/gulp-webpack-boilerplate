'use strict'

// const WEBPACK_CONFIG = require('./gulp/congif/webpackConfig');
const isDev = require('./gulp/congif/webpackConfig');
const { task, series, parallel } = require('gulp');

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

const lazyRequireTask = require('./gulp/utilites/lazyRequireTask');

lazyRequireTask('scssBuild', '../tasks/scssBuild', { src: 'src/index.scss' });
lazyRequireTask('htmlBuild', '../tasks/htmlBuild', { src: 'src/**.html' });
lazyRequireTask('imgBuild', '../tasks/imgBuild', { src: 'src/images/**/*.*' });
lazyRequireTask('jsBuild', '../tasks/jsBuild', { src: 'src/index.js', webpackConfig });
lazyRequireTask('clean', '../tasks/clean', { src: 'build/!(images){,/**}' });
lazyRequireTask('fullClean', '../tasks/clean', { src: 'build' });
lazyRequireTask('serve', '../tasks/serve');
const gulpWatch = require('./gulp/tasks/watch');


task('dev',
  series(
    'clean',
    'imgBuild',
    parallel('htmlBuild', 'scssBuild', 'jsBuild', gulpWatch, 'serve'))
);

task('build',
  series(
    'fullClean',
    'imgBuild',
    parallel('jsBuild', 'htmlBuild', 'scssBuild'))
);