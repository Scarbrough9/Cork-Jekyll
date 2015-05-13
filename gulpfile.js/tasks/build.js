var gulp = require('gulp');

gulp.task('build:development', [
  'styles',
  'vendorScripts',
  'scripts',
  'jekyll-build'
]);

gulp.task('build:production', [
  'styles:production',
  'vendorScripts',
  'scripts',
  'jekyll-build'
]);
