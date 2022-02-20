const { src, dest, watch, series } = require('gulp');
// const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

// Compile scss into css
function styles() {
  // return gulp.src('./scss/**/*.scss')
  //     .pipe(sass())
  //     .pipe(gulp.dest('./css'));
console.log('peeee')

  return src('./scss/**/*.scss')
      .pipe(sass().on('error***',sass.logError))
      .pipe(dest('./css'))
      .pipe(browserSync.stream());
}

function watchTask() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  watch('*.html').on('change', browserSync.reload);
  watch(['./scss/**/*.scss'], series(styles));

  //
  // gulp.watch('./scss/**/*.scss', styles);
  // gulp.watch('./*.html').on('change', browserSync.reload);
  // gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}




exports.styles = styles
exports.watch = watchTask
