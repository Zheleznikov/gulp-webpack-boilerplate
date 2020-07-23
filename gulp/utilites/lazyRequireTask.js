const { task } = require('gulp');

module.exports = function lazyRequireTask(taskName, path, options = {}) {
  options.taskName = taskName;
  task(taskName, function(cb) {
    let task = require(path).call(this, options);
    return task(cb);
  })
}

/* 
Что это?
*/