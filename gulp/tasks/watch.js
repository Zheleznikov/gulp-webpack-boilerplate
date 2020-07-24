'use strict'
const { series, watch } = require('gulp');
const $ = require('gulp-load-plugins')();

const img = require('./transform/img');
const js = require('./transform/js');
const style = require('./transform/style');
const html = require('./transform/html');

module.exports = () => {
  watch('src/**/*.scss', series(style))
    .on('unlink', function(filepath) {
      $.remember.forget(style, path.resolve(filepath));
    });
  watch('src/images/**/*.*', series(img));
  watch('src/**/*.html', series(html));
  watch('src/**/*.js', series(js));
};