'use strict'
const browserSync = require('browser-sync').create();

module.exports = function(options) {
  return function(cb) {
    browserSync.init({
      server: 'build'
    });
    browserSync.watch('build/**/*.*').on('change', browserSync.reload)
  };

}