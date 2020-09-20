module.exports = {
  transpileDependencies: ['vuetify'],

  chainWebpack: config => {
    config.module.rule('eslint').use('eslint-loader').options({
      fix: true
    })
  },

  pwa: {
    name: 'Gracias',
    themeColor: '#BD10E0',
    msTileColor: '#FFFFFF',
    manifestOptions: {
      background_color: '#FFFFFF'
    }
  }
}
