const gulp = require('gulp')
const plumber = require('gulp-plumber')
const gulpStylelint = require('gulp-stylelint')
const filter = require('gulp-filter')
const sassGlob = require('gulp-sass-glob')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const rename = require('gulp-rename')
const cleanCSS = require('gulp-clean-css')
const browsersync = require('browser-sync')

module.exports = function styles () {
  return gulp.src('src/**/*.scss')
    .pipe(plumber())
    .pipe(gulpStylelint({
      failAfterError: false,
      reporters: [{ formatter: 'string', console: true }]
    }))
    .pipe(filter('src/styles/style.scss'))
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(autoprefixer({ cascade: false, grid: true }))
    .pipe(cleanCSS({ compatibility: '*', level: 2 }))
    .pipe(rename({ dirname: 'css', suffix: '.min' }))
    .pipe(plumber.stop())
    .pipe(gulp.dest('build'))
    .pipe(browsersync.stream())
}
