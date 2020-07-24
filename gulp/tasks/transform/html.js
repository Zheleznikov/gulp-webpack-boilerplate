'use strict'
const { src, dest } = require('gulp');
const $ = require('gulp-load-plugins')();
const include = require('gulp-file-include');
const htmlBase64 = require('gulp-inline-image-html');
const isProd = process.env.NODE_ENV === 'production';

module.exports = () => src('src/index.html')
    .pipe(include())
    .pipe($.if(isProd, htmlBase64('build')))
    .pipe($.if(isProd, $.htmlmin({ collapseWhitespace: true })))
    .pipe(dest('build'));
