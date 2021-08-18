const del = require('del')
const cached = require('gulp-cached')

module.exports = function clean(callback) {
  return del('build/*').then(() => {
    cached.caches = {}
    callback()
  })
}
