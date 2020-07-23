'use strict'

const { series, parallel, watch } = require('gulp');
const $ = require('gulp-load-plugins')();



module.exports = function gulpWatch() {
  watch('src/**/*.scss', series('scssBuild'))
    .on('unlink', function(filepath) {
      $.remember.forget('scssBuild', path.resolve(filepath));
      // delete $.cached.caches.scssBuild[path.resolve(filepath)]
    });
  watch('src/images/**/*.*', series('imgBuild'));
  watch('src/**/*.html', series('htmlBuild'));
  watch('src/**/*.js', series('jsBuild'));
};