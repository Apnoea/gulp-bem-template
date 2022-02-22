module.exports = {
  root: true,
  modules: {
    'bem-tools': {
      plugins: {
        create: {
          templateFolder: './',
          techsTemplates: {
            pug: '.bem-template-pug',
            scss: '.bem-template-scss'
          },
          techs: ['pug', 'scss'],
          levels: {
            'src/blocks': {
              default: true
            }
          }
        }
      }
    }
  }
}
