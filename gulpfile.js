var gulp = require("gulp")
var cleanCSS = require ("gulp-clean-css")
var uglifycss = require('gulp-uglifycss');
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');
var concatCss = require('gulp-concat-css');


var paths = {
  styles: ['*.css'],
  dist: 'dist/'
}

gulp.task('combine-css', function () {
  return gulp.src('*.css')
    .pipe(concatCss("bundle.css"))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ["minify-css", "combine-css", "compress"], function(){

});

gulp.task('minify-css', function() {
  return gulp.src('*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('css', function () {
 gulp.src('*.css')
   .pipe(uglifycss({
     "maxLineLen": 80,
     "uglyComments": true
   }))
   .pipe(gulp.dest('./dist/'));
});


gulp.task('compress', function (cb) {
  pump([
        gulp.src('js/**.js'),
        uglify(),
        gulp.dest('dist')
    ],
    cb
  );
});
