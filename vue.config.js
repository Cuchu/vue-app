module.exports = {
  lintOnSave: false,
  configureWebpack: { devtool: "source-map" },
  devServer: {
    proxy: "http://localhost:8989",
  },
};
