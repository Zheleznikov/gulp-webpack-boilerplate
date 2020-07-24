'use strict';
const { src, dest } = require('gulp');
const $ = require('gulp-load-plugins')();
const imagemin = require('gulp-imagemin');

module.exports = () => src('src/images/**/*.*')
      .pipe($.newer('build/images'))
      .pipe(imagemin(
        [
          imagemin.mozjpeg({ quality: 75, progressive: true }),
          imagemin.optipng({ optimizationLevel: 5 }),
          imagemin.gifsicle({ interlaced: true }),
          imagemin.svgo({ plugins: [{ removeViewBox: false }] })
        ], {
          verbose: true
        }
        ))
      .pipe(dest('build/images'));