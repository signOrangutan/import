
module.exports = {
    lintOnSave: false,
    css: {
        loaderOptions: {
          sass: {
            prependData: `
                @import "src/assets/css/common.scss";
                @import "src/assets/css/web.scss";
                @import "src/assets/css/wap.scss";
            `
          }
        }
      }

}