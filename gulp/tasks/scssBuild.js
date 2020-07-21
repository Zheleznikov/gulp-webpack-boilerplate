'use strict'

const $ = require('gulp-load-plugins')();

const gulp = require('gulp');
// const sass = require('gulp-sass');
// const sourcemaps = require('gulp-sourcemaps');
// const gulpIf = require('gulp-if');
// const autoprefixer = require('gulp-autoprefixer');
// const remember = require('gulp-remember');
// const notify = require('gulp-notify');
const multipipe = require('multipipe');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development'


module.exports = function(options) {
  return function(cb) {
    return multipipe(
      gulp.src(options.src),
      // $.if(isDevelopment, $.sourcemaps.init()),
      $.sass(),
      $.autoprefixer(),
      // $.remember('styles'),
      // $.if(isDevelopment, sourcemaps.write()),
      gulp.dest('build')
    )
    // .on('error', $.notify.onError())
  };

}