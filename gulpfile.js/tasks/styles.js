var gulp            =   require('gulp'),
    sass            =   require('gulp-sass'),
    sourcemaps      =   require('gulp-sourcemaps'),
    autoprefixer    =   require('gulp-autoprefixer'),
    handleErrors    =   require('../util/handleErrors'),
    browserSync     =   require('browser-sync');

// Standard Sass compiling for development
gulp.task('styles', function() {
    return gulp.src('./assets/styles/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({includePaths: '/'}))
        .pipe(autoprefixer({
            browsers: ['last 2 version']
        }))
        .on('error', handleErrors)
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('_site/public/styles'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('public/styles'));
});

// Standard Sass compiling for production
gulp.task('styles:production', function() {
    return gulp.src('./assets/styles/*.scss')
        .pipe(sass({
            includePaths: '/',
            outputStyle: 'compressed'
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 version']
        }))
        .on('error', handleErrors)
        .pipe(gulp.dest('public/styles'));
});
