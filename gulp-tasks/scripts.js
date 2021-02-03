const gulp = require('gulp')
const webpack = require('webpack-stream')
const webpackConfig = require('../webpack.config.js')
const eslint = require('gulp-eslint7')
const browsersync = require('browser-sync')

module.exports = function scripts() {
  return gulp.src('src/js/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('build/js'))
    .on('end', browsersync.reload)
}
