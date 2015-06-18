var gulp = require('gulp');
var csso = require('gulp-csso');
var less = require('gulp-less');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');


gulp.task('css', function() {
    return gulp.src('less/kube.less')
        .pipe(less())
        //.pipe(csso())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('css'));
});

gulp.task('script', function() {
    return gulp.src('js/kube/kube.min.js')
        .pipe(uglify())
        .pipe(concat('all.min.js'))
        .pipe(gulp.dest('js'));
});

gulp.task('watch', function() {
    gulp.watch('less/*.less', ['css']);
});

gulp.task('default', ['watch', 'css', 'script']);