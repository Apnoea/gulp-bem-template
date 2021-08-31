const gulp = require('gulp')
const fs = require('fs')
const through = require('through2')

let doNotEditMsg = '//- ВНИМАНИЕ! Этот файл генерируется автоматически.\n//- Любые изменения будут потеряны при следующей компиляции.\n\n';

let generatePugMixins = () => {
  const source = 'src/blocks/'
  let files  = [];
  return through.obj((file, enc, cb) => {
    file = file.path
    const sourceIndex = file.indexOf(source)
    let pugMixins = doNotEditMsg.replace(/\n /gm,'\n  ');
    file = file.substr(sourceIndex + source.length)
    files.push(file)
    files.sort()
    files.forEach(function(blockName) {
      pugMixins += `include ${blockName}\n`;
    });
    fs.writeFileSync('src/blocks/mixins.pug', pugMixins);
    cb(null, file);
  });
}

module.exports = function pugMixins() {
  return gulp.src(['src/blocks/**/*.pug', '!src/blocks/mixins.pug', '!src/blocks/header/*', '!src/blocks/footer/*'])
    .pipe(generatePugMixins())
}
