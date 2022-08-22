import gulp from 'gulp'
import plumber from 'gulp-plumber'
import cached from 'gulp-cached'
import dependents from 'gulp-dependents'
import pugLinter from 'gulp-pug-linter'
import filter from 'gulp-filter'
import pug from 'gulp-pug'
import browsersync from 'browser-sync'

export default function pug2html() {
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
    .pipe(gulp.dest('build'))
    .on('end', browsersync.reload)
}
