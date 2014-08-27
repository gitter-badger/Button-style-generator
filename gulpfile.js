var gulp = require('gulp'),

    concatJS = require('gulp-concat'),
    uglify = require('gulp-uglify'),

    minifyCSS = require('gulp-minify-css'),
    concatCSS = require('gulp-concat-css'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),

    watch = require('gulp-watch');

gulp.task('styles', function () {
    gulp.src('./dev/styles/*.scss')
        .pipe(sass())
        .pipe(concatCSS("styles.css"))
        .pipe(minifyCSS({keepBreaks:false}))
        .pipe(rename({suffix:".min"}))
        .pipe(gulp.dest('./public/assets'));
});

gulp.task('scripts', function () {
    gulp.src('./dev/js/*.js')
        .pipe(concatJS("scripts.js"))
        .pipe(uglify())
        .pipe(rename({suffix:".min"}))
        .pipe(gulp.dest('./public/assets'));
});

gulp.task('watch', function() {
    gulp.watch('./dev/styles/*.scss', ['styles']);
    gulp.watch('./dev/js/*.js', ['scripts']);
});

gulp.task('default', ['watch']);