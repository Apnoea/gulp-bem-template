const gulp = require('gulp')
const fonts = require('./fonts')
const images = require('./images')
const svgs = require('./svgs')
const pugMixins = require('./pugMixins')
const pug2html = require('./pug2html')
const styles = require('./styles')
const scripts = require('./scripts')
const server = require('browser-sync')

module.exports = function serve(callback) {
  server.init({
    server: 'build',
    notify: false,
    cors: true
  })

  gulp.watch('src/images/**/*.{gif,jpg,png,webp}', gulp.series(images))
  gulp.watch('src/images/**/*.svg', gulp.series(svgs))
  gulp.watch('src/fonts/**/*', gulp.series(fonts))
  gulp.watch(['src/**/*.pug', '!src/blocks/mixins.pug'], gulp.series(pugMixins, pug2html))
  gulp.watch('src/**/*.scss', gulp.series(styles))
  gulp.watch('src/**/*.js', gulp.series(scripts))

  return callback()
}
