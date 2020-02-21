const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;


let htmlWatch = './src/*.html';

let styleSRC = './src/scss/main.scss';
let styleBUILD = './build/css';
let styleWatch = './src/scss/**/*.scss';

let jsSRC = './src/js/app.js';
let jsStats = './src/js/stats.js';
let jsBUILD = './build/js/';
let jsWatch = './src/js/**/*.js'
let jsFiles = [jsSRC, jsStats]


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
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(rename( {suffix: '.min'} ))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(styleBUILD))
        .pipe(browserSync.stream())
});


gulp.task('js', function () {
    return gulp.src(jsFiles)
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        // .pipe(rename({ extname: '.min.js'}))
        // .pipe(uglify())
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