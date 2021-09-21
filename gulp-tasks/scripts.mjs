import gulp from 'gulp'
import webpack from 'webpack-stream'
import webpackConfig from '../webpack.config.mjs'
import eslint from 'gulp-eslint7'
import browsersync from 'browser-sync'

export default function scripts() {
  return gulp.src('src/js/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('build/js'))
    .on('end', browsersync.reload)
}
