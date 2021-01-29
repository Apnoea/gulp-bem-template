const gulp = require('gulp')
const changed = require('gulp-changed')
const imagemin = require('gulp-imagemin')
const imageminPngquant = require('imagemin-pngquant')
const browsersync = require('browser-sync')

module.exports = function images () {
  return gulp.src('src/images/**/*.{gif,png,jpg,webp}')
    .pipe(changed('build/img'))
    .pipe(imagemin([
      imageminPngquant({ quality: [0.75, 0.75] }),
      imagemin.gifsicle({ interlaced: true }),
      imagemin.mozjpeg({ quality: 75, progressive: true })
    ]))
    .pipe(gulp.dest('build/img'))
    .on('end', browsersync.reload)
}
