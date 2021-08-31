const gulp = require('gulp')
const cached = require('gulp-cached')
const browsersync = require('browser-sync')

module.exports = function fonts() {
  return gulp.src('src/fonts/*')
    .pipe(cached('fontsCache'))
    .pipe(gulp.dest('build/fonts'))
    .on('end', browsersync.reload)
}
