var gulp    =   require('gulp'),
    watchedFiles    =   [
        'index.html',
        '_includes/**/*.html',
        '_layouts/*.html',
        '_posts/*',
        '_pages/*'
    ];

gulp.task('default', ['build:development', 'browser-sync'], function () {
    gulp.watch('assets/styles/**/*.scss', ['styles'])
    gulp.watch('assets/scripts/**/*.js', ['scripts'])
    gulp.watch(watchedFiles, ['jekyll-rebuild']);
});
