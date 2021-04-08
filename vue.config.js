
module.exports = {
  lintOnSave: false,

  css: {
    loaderOptions: {
      scss: {
        prependData: `
              @import "src/assets/css/common.scss";
              @import "src/assets/css/web.scss";
              @import "src/assets/css/wap.scss";
          `
      }
    }
  },

  transpileDependencies: [
    'vuetify'
  ]
}
