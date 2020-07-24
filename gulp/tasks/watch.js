'use strict'

const { series, watch } = require('gulp');
const $ = require('gulp-load-plugins')();



module.exports = function gulpWatch() {
  watch('src/**/*.scss', series(style))
    .on('unlink', function(filepath) {
      $.remember.forget(style, path.resolve(filepath));
      // delete $.cached.caches.scssBuild[path.resolve(filepath)]
    });
  watch('src/images/**/*.*', series(img));
  watch('src/**/*.html', series(html));
  watch('src/**/*.js', series(style));
};