import del from 'del'
import cached from 'gulp-cached'

export default function clean(callback) {
  return del('build/*').then(() => {
    cached.caches = {}
    callback()
  })
}
