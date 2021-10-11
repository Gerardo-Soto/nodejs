const gulp = require('gulp');
const server = require('gulp-server-livereload');

// task name = build
gulp.task('build', function (callback) {
    console.log('Website building...');
    setTimeout(callback, 2000);
});


gulp.task('server', function (cb) {
    gulp.src('www')
        .pipe(server({
            livereload: true,
            open: true,
        }))
})