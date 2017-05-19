var gulp = require("gulp")
var cleanCSS = require ("gulp-clean-css")
var uglifycss = require('gulp-uglifycss');
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');
var concatCss = require('gulp-concat-css');
var concat = require('gulp-concat')


var paths = {
  styles: ['*.css'],
  dist: './'
}

gulp.task('combine-css', function () {
  return gulp.src('*.css')
    .pipe(concatCss("bundle.css"))
    // .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ["html", "png", "combine-css", "js"], function(){

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

gulp.task('html', function() {
  gulp.src('**/*.html')
  .pipe(gulp.dest('./dist'))
})

gulp.task('png', function() {
  gulp.src('imgs/*.png')
  .pipe(gulp.dest('./dist/imgs/'))
})

gulp.task('js', function() {
  gulp.src('js/**/*.js')
  .pipe(concat('bundle.js'))
  .pipe(gulp.dest('./dist'))
})

gulp.task('compress', function (cb) {
  pump([
        gulp.src('js/**.js'),
        uglify(),
        gulp.dest('dist/js')
    ],
    cb
  );
});
