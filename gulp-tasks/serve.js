const gulp = require('gulp')
const images = require('./images')
const svgs = require('./svgs')
const styles = require('./styles')
const scripts = require('./scripts')
const pug2html = require('./pug2html')
const server = require('browser-sync')

module.exports = function serve (cb) {
  server.init({
    server: 'build',
    notify: false,
    cors: true
  })

  gulp.watch('src/images/**/*.{gif,png,jpg,webp}', gulp.parallel(images))
  gulp.watch('src/images/**/*.svg', gulp.parallel(svgs))
  gulp.watch('src/**/*.scss', gulp.parallel(styles))
  gulp.watch('src/js/**/*.js', gulp.parallel(scripts))
  gulp.watch('src/**/*.pug', gulp.parallel(pug2html))

  return cb()
}
