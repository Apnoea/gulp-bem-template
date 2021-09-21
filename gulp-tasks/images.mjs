import gulp from 'gulp'
import cached from 'gulp-cached'
import imagemin, { gifsicle, mozjpeg } from 'gulp-imagemin'
import pngquant from 'imagemin-pngquant'
import browsersync from 'browser-sync'

export default function images() {
  return gulp.src('src/images/**/*.{gif,png,jpg,webp}')
    .pipe(cached('imagesCache'))
    .pipe(imagemin([
      pngquant({ quality: [0.75, 0.75] }),
      gifsicle({ interlaced: true }),
      mozjpeg({ quality: 75, progressive: true })
    ]))
    .pipe(gulp.dest('build/img'))
    .on('end', browsersync.reload)
}
