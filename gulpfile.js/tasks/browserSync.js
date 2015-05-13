var gulp            =   require('gulp'),
    browserSync     =   require('browser-sync');
    watchedFiles    =   [
        '_site/public/styles/*.css',
        '_site/public/scripts/*.js',
        '_site/**/*.html'
    ]

gulp.task('browser-sync', ['styles', 'scripts', 'jekyll-build'], function() {
    browserSync.init(watchedFiles, {
        server: {
            baseDir: '_site'
        }
    });
});
