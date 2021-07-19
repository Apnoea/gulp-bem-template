const del = require('del')
const cached = require('gulp-cached')

module.exports = function clean(cb) {
  return del('public/*').then(() => {
    cached.caches = {}
    cb()
  })
}
