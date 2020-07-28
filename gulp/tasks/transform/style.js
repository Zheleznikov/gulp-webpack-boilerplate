'use strict'
const $ = require('gulp-load-plugins')();
const { src, dest } = require('gulp');
const multipipe = require('multipipe');
const cssBase64 = require('gulp-css-base64');
const modifyUrl = require('gulp-modify-css-urls');

const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

module.exports = () =>
  multipipe(
    src('src/index.scss'),
    // $.cached('scssBuild'),
    $.if(isDev, $.sourcemaps.init()),
    $.sass(),
    modifyUrl({
      modify: (url) => {
        const arrUrl = url.split('/');
        return `./images/${arrUrl[arrUrl.length - 1]}`
      },
    }),
    // $.if(isProd, cssBase64({
    //    maxWeightResource: 1000000,
    //   // baseDir: 'build',
    //   // maxSize: 14 * 1024 // calculation in bytes
    // })),
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
    $.remember('style'),
    $.if(isProd, $.csso()),

    $.if(isDev, $.sourcemaps.write()),

    dest('build')
  )
  .on('error', $.notify.onError())