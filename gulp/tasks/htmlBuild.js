'use strict'

const { src, dest } = require('gulp');
const include = require('gulp-file-include');

module.exports = function(options) {
  return function(cb) {
    return src(options.src)
    .pipe(include())
    .pipe(dest('build'))
  };

}