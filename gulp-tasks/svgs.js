const gulp = require('gulp')
const svg = require('gulp-svg-sprite')
const browsersync = require('browser-sync')

module.exports = function svgs() {
  return gulp.src('src/images/**/*.svg')
    .pipe(svg({
      shape: {
        dest: 'svgs'
      },
      mode: {
        stack: {
          sprite: '../sprite.svg'
        }
      }
    }))
    .pipe(gulp.dest('build/img'))
    .on('end', browsersync.reload)
}
