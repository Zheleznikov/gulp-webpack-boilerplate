'use strict'
const { series, parallel, watch } = require('gulp');

const html = require('./gulp/tasks/transform/html');
const {clean, fullClean} = require('./gulp/tasks/clean');
const img = require('./gulp/tasks/transform/img');
const js = require('./gulp/tasks/transform/js');
const style = require('./gulp/tasks/transform/style');
const liveServe = require('./gulp/tasks/liveServe');

const gulpWatch = () => {
  watch('src/**/*.scss', series(style))
    .on('unlink', (filepath) => {
      $.remember.forget(style, path.resolve(filepath));
    });
  watch('src/images/**/*.*', series(img));
  watch('src/**/*.html', series(html));
  watch('src/**/*.js', series(js));
};

exports.dev = series(clean, img, parallel(html, style, js, gulpWatch, liveServe));
exports.build = series(fullClean,img, parallel(js, html, style));
