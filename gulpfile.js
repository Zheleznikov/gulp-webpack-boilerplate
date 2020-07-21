'use strict'
const { task, series, parallel } = require('gulp');
// const $ = require('gulp-load-plugins')();

const lazyRequireTask = require('./gulp/congif/lazyRequireTask');



lazyRequireTask('scssBuild', '../tasks/scssBuild', {
  src: 'src/index.scss'
})

lazyRequireTask('htmlBuild', '../tasks/htmlBuild', {
  src: 'src/**.html'
})

lazyRequireTask('clean', '../tasks/clean', { src: 'build'})


// function htmlBuild() {
//  return src('src/**.html')
//   .pipe(include())
//   .pipe(dest('build'))
// }

// function scssBuild() {
//   return src('src/index.scss')
//   .pipe($.sass())
//   .pipe(dest('build'))
// }

// exports.htmlBuild = htmlBuild;
// exports.scssBuild = scssBuild;

task('build', parallel('htmlBuild', 'scssBuild'))