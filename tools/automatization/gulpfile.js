const gulp = require('gulp');

// task name = build
gulp.task('build', function (callback) {
    console.log('Website building...');
    setTimeout(callback, 2000);
});


