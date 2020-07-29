'use strict'
const { src, dest } = require('gulp');
const $ = require('gulp-load-plugins')();
const include = require('gulp-file-include');
const htmlBase64 = require('gulp-inline-image-html');
const inlineImages = require('gulp-inline-images');
const isProd = process.env.NODE_ENV === 'production';

module.exports = () => src('src/audio/**/*.*')
    .pipe(dest('build/audio'));