var webpack = require("webpack");
module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8888"
      }
    }
  }
};
