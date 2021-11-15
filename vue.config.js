module.exports = {
    css: {
      loaderOptions: {
        sass: {
          additionalData: `
            @import "./src/assets/scss/_main.scss";
          `
        }
      }
    }
  };