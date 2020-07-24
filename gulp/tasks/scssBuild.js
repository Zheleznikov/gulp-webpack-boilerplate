'use strict'
const $ = require('gulp-load-plugins')();
const { src, dest } = require('gulp');
const multipipe = require('multipipe');
const cssBase64 = require('gulp-inline-base64');

const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

module.exports = (options) => () =>
  multipipe(
    src(options.src),
    // $.cached('scssBuild'),
    $.if(isDev, $.sourcemaps.init()),
    $.sass(),
    $.autoprefixer([
      'Android 2.3',
      'Android >= 4',
      'Chrome >= 20',
      'Firefox >= 24',
      'Explorer >= 8',
      'iOS >= 6',
      'Opera >= 12',
      'Safari >= 6',
    ], { cascade: true, flexbox: true }),
    $.remember('scssBuild'),
    $.if(isProd, $.csso()),
    $.if(isProd, cssBase64({
      baseDir: 'build',
      maxSize: 14 * 1024 // calculation in bytes
    })),
    $.if(isDev, $.sourcemaps.write()),

    dest('build')
  )
  .on('error', $.notify.onError())