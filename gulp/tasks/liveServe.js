'use strict'
const browserSync = require('browser-sync').create();

module.exports = () => {
  browserSync.init({
    server: 'build'
  });
  browserSync.watch('build/**/*.*').on('change', browserSync.reload)
};