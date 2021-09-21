const EOL = require('os').EOL

module.exports = function (entity, naming) {
  return [
    `.${naming.stringify(entity)} {\n  position: relative;\n}\n`
  ].join(EOL)
}
