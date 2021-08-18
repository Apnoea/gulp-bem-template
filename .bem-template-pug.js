var EOL = require('os').EOL

module.exports = function (entity, naming) {
  return [
  `mixin ${naming.stringify(entity)}(mods)
  -
    const baseName = '${naming.stringify(entity)}';
    let allMods = '';
    if (typeof (mods) !== 'undefined' && mods) {
      const modsList = mods.split(',');
      for (const element of modsList) {
        allMods = allMods + ' '
        allMods = element.trim()[0] === '-' ? allMods + baseName + element.trim() : allMods + element.trim() + '__' + baseName
      }
    }

  .${naming.stringify(entity)}(class=allMods)&attributes(attributes)
    block`
  ].join(EOL)
}
