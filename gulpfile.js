var gulp = require('gulp');

gulp.task('setup', function(done) {
    gulp.src([
        'node_modules/angular2/bundles/js'
    ]).pipe(gulp.dest('web/lib'));
});