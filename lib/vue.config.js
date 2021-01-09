module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],

  publicPath: '',

  pluginOptions: {
    cordovaPath: 'src-cordova',
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
}
