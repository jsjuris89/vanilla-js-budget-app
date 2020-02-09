const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

// Compile scss into css
gulp.task('style', function(){
    return gulp.src('./scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/css'))
 });

// Watch task
gulp.task('watch', function(){
    gulp.watch('./scss/**/*.scss', gulp.series('style'));
});