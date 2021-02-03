const gulp = require('gulp')
const pug2html = require('./gulp-tasks/pug2html')
const styles = require('./gulp-tasks/styles')
const scripts = require('./gulp-tasks/scripts')
const fonts = require('./gulp-tasks/fonts')
const images = require('./gulp-tasks/images')
const svgs = require('./gulp-tasks/svgs')
const clean = require('./gulp-tasks/clean')
const serve = require('./gulp-tasks/serve')

const build = gulp.series(clean, gulp.parallel(pug2html, styles, scripts, fonts, images, svgs))

module.exports.development = gulp.series(build, serve)
module.exports.production = build
module.exports.scripts = gulp.series(clean, scripts)
