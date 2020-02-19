const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;


let htmlWatch = './src/*.html';

let styleSRC = './src/scss/main.scss';
let styleBUILD = './build/css';
let styleWatch = './src/scss/**/*.scss';

let jsSRC = './src/js/app.js';
let jsBUILD = './build/js/';
let jsWatch = './src/js/**/*.js'


gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: ['./src', './build'],
        }
    });
})

// Compile scss into css
gulp.task('style', function () {
    return gulp.src(styleSRC)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(styleBUILD))
        .pipe(browserSync.stream())
});

gulp.task('js', function () {
    return gulp.src(jsSRC)
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(jsBUILD))
        .pipe(browserSync.stream())
})


gulp.task('default', function () {
    gulp.watch(htmlWatch).on('change', reload);
    gulp.watch(styleWatch, gulp.series('style'));
    gulp.watch(jsWatch, gulp.series('js'));
})

// Watch task
gulp.task('watch', gulp.parallel('default', 'browser-sync'));