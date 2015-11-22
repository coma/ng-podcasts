var gulp         = require('gulp'),
    stylus       = require('gulp-stylus'),
    uglify       = require('gulp-uglify'),
    sequence     = require('run-sequence'),
    browserify   = require('browserify'),
    source       = require('vinyl-source-stream'),
    buffer       = require('vinyl-buffer');

module.exports = function (dir, done) {

    gulp.task('script', function () {

        return browserify({
                entries: [dir.app],
                paths  : [dir.dependencies, dir.src]
            })
            .bundle()
            .pipe(source('app.js'))
            .pipe(buffer())
            .pipe(uglify())
            .pipe(gulp.dest(dir.dist));
    });

    gulp.task('style', function () {

        return gulp
            .src(dir.style)
            .pipe(stylus({
                compress: true
            }))
            .pipe(gulp.dest(dir.dist));
    });

    sequence('clean', ['assets', 'script', 'style'], done);
};
