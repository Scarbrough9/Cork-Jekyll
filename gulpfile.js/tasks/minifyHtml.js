var gulp        =   require('gulp'),
    minifyHtml  =   require('gulp-minify-html');

gulp.task('minify-html', function() {
    return gulp.src('./_site/**/*.html')
        .pipe(minifyHtml())
        .pipe(gulp.dest('./_site'));
});
