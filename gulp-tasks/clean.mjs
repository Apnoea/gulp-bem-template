import { deleteAsync } from 'del'
import cached from 'gulp-cached'

export default function clean(callback) {
  return deleteAsync('build/*').then(() => {
    cached.caches = {}
    callback()
  })
}
