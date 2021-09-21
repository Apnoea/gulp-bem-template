import gulp from 'gulp'
import fonts from './fonts.mjs'
import images from './images.mjs'
import svgs from './svgs.mjs'
import pugMixins from './pugMixins.mjs'
import pug2html from './pug2html.mjs'
import styles from './styles.mjs'
import scripts from './scripts.mjs'
import server from 'browser-sync'

export default function serve(callback) {
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
