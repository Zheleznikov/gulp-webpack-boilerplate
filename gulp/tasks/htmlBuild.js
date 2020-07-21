'use strict'

const { src, dest } = require('gulp');
const include = require('gulp-file-include');

module.exports = (options) => () => src(options.src)
  .pipe(include())
  .pipe(dest('build'));