const gulp = require('gulp')
const plumber = require('gulp-plumber')
const cached = require('gulp-cached')
const dependents = require('gulp-dependents')
const pugLinter = require('gulp-pug-linter')
const filter = require('gulp-filter')
const pug = require('gulp-pug')
const htmlValidator = require('gulp-w3c-html-validator')
const browsersync = require('browser-sync')

module.exports = function pug2html() {
  return gulp.src('src/**/*.pug')
    .pipe(plumber())
    .pipe(cached('pugCache'))
    .pipe(dependents({
      '.pug': {
        parserSteps: [/^\s*(?:extends|include)\s+(.+?)\s*$/gm],
        postfixes: ['.pug', '.jade']
      }
    }))
    .pipe(pugLinter({ reporter: 'default' }))
    .pipe(filter('src/*.pug'))
    .pipe(pug({ pretty: true }))
    .pipe(htmlValidator())
    .pipe(gulp.dest('public'))
    .pipe(browsersync.stream())
}
