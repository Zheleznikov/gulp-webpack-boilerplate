'use strict'
const { task, series, parallel, watch } = require('gulp');
const $ = require('gulp-load-plugins')();
const lazyRequireTask = require('./gulp/congif/lazyRequireTask');

lazyRequireTask('scssBuild', '../tasks/scssBuild', { src: 'src/index.scss'});
lazyRequireTask('htmlBuild', '../tasks/htmlBuild', { src: 'src/**.html' });
lazyRequireTask('imgBuild', '../tasks/imgBuild', { src: 'src/images/**/*.*'});
lazyRequireTask('fullClean', '../tasks/clean', { src: 'build'});
lazyRequireTask('clean', '../tasks/clean', { src: 'build/!(images){,/**}'});
lazyRequireTask('serve', '../tasks/serve');



task('build', series('fullClean', 'imgBuild', parallel('htmlBuild', 'scssBuild')));

task('watch', () => {
  watch('src/**/*.scss', series('scssBuild'))
    .on('unlink', function(filepath) {
      $.remember.forget('scssBuild', path.resolve(filepath));
      // delete $.cached.caches.scssBuild[path.resolve(filepath)]
    });
  watch('src/images/**/*.*', series('imgBuild'));
  watch('src/**/*.html', series('htmlBuild'));
});


task('dev', series('clean', 'imgBuild', parallel('htmlBuild', 'scssBuild', 'watch', 'serve')));