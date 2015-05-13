var gulp            =   require('gulp'),
    browserify      =   require('browserify'),
    concat          =   require('gulp-concat');
    source          =   require('vinyl-source-stream');
    sourcemaps      =   require('gulp-sourcemaps');
    handleErrors    =   require('../util/handleErrors'),
    browserSync     =   require('browser-sync'),
    vendorPaths     =   [
       'node_modules/jquery/dist/jquery.js',
       'node_modules/lodash/index.js'
    ];

// Standard concatenating of vendor scripts for development
gulp.task('vendorScripts', function() {
    return gulp.src(vendorPaths)
        .pipe(sourcemaps.init())
        .pipe(concat('vendor.js'))
        .pipe(sourcemaps.write('.'))
        .on('error', handleErrors)
        .pipe(gulp.dest('_site/public/scripts'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('public/scripts'));
});

// Standard transpiling of custom scripts for development
gulp.task('scripts', function() {
    return browserify('assets/scripts/theme.js', { debug: true})
        .bundle()
        .pipe(source('theme.js'))
        .on('error', handleErrors)
        .pipe(gulp.dest('_site/public/scripts'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('public/scripts'));
});
