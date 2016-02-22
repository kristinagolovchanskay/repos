var gulp = require('gulp'),
	concatCss = require('gulp-concat-css'),
	cssmin = require('gulp-cssmin'),
	rename = require('gulp-rename');
	watch = require('gulp-watch'),
	stylus = require('gulp-stylus'),
	uglify = require('gulp-uglify');
	imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),

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

gulp.task('concat', function () {
  return gulp.src('./public/css/*.css')
    .pipe(concatCss("bundle.css"))
    .pipe(gulp.dest('./build/'));
});

gulp.task('styl', function() {
    return gulp.src('./public/styl/*.styl')
        .pipe(stylus({
            linenos: false
        }))
        .pipe(concatCss('styl.css'))
        .pipe(gulp.dest('./public/css/'));

});

gulp.task('js', function () {
    return gulp.src('./public/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./public/build/'));
});

gulp.task('image', function () {
    return gulp.src('public/images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('public/images/'));
});
