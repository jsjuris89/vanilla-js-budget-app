const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify-es').default;
const rename = require('gulp-rename');

// Compile scss into css
gulp.task('css', function(){
    return gulp.src('./scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/css'))
 });

 gulp.task('js', function() {
     return gulp.src('app.js')
     .pipe(sourcemaps.init())
     .pipe(babel({
         presets: ['@babel/preset-env']
        }))
    //  .pipe(uglify())
    //  .pipe(rename({ suffix: '.min' }))
     .pipe(sourcemaps.write('.'))
     .pipe(gulp.dest('dist'))
 })

// Watch task
gulp.task('watch', function(){
    gulp.watch('./scss/**/*.scss', gulp.series('css'));
    gulp.watch('./*.js', gulp.series('js'));
});