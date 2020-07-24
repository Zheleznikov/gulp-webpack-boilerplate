'use strict'
const { series, parallel } = require('gulp');

const html = require('./gulp/tasks/transform/html');
const {clean, fullClean} = require('./gulp/tasks/clean');
const img = require('./gulp/tasks/transform/img');
const js = require('./gulp/tasks/transform/js');
const style = require('./gulp/tasks/transform/style');
const liveServe = require('./gulp/tasks/liveServe');
const gulpWatch = require('./gulp/tasks/watch');

exports.dev = series(clean, img, parallel(html, style, js, gulpWatch, liveServe));
exports.build = series(fullClean,img, parallel(js, html, style));
