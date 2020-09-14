const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

const taskPcSass = () => {
    return (
        gulp
        .src(`${__dirname}/src/scss/pc/*.scss`)

        .pipe(
            sass({
                outputStyle: 'expanded'
            }))
        .pipe(
            gulp.dest(`${__dirname}/dist/pc/css/`)
        )
    );
};

const taskSpSass = () => {
    return (
        gulp
        .src(`${__dirname}/src/scss/sp/*.scss`)
        .pipe(
            sass({
                outputStyle: 'expanded'
            }))
        .pipe(
            gulp.dest(`${__dirname}/dist/sp/css/`)
        )
    );
};

const watchPCSass = () => {
    gulp.watch(`${__dirname}/src/scss/pc/*.scss`, gulp.series(taskPcSass));
};

const watchSpSass = () => {
    gulp.watch(`${__dirname}/src/scss/sp/*.scss`, gulp.series(taskSpSass));
};

exports.default = gulp.parallel(watchPCSass, watchSpSass);