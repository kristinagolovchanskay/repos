var gulp = require('gulp'),
	concatCss = require('gulp-concat-css'),
	cssmin = require('gulp-cssmin'),
	rename = require('gulp-rename');
	watch = require('gulp-watch'),

gulp.task('css', function () {
  return gulp.src('./public/css/*.css')
    .pipe(concatCss("bundle.css"))
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./build/'));
});

gulp.task('watch', function() {
    gulp.watch("./public/css/*.css", ['css']);
    
});

var gulp = require('gulp'),
	concatCss = require('gulp-concat-css');

gulp.task('concat', function () {
  return gulp.src('./public/css/*.css')
    .pipe(concatCss("bundle.css"))
    .pipe(gulp.dest('./build/'));
});