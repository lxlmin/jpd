const { defineConfig } = require('@vue/cli-service')

//精准定位错误
const { sentryWebpackPlugin } = require("@sentry/webpack-plugin");
module.exports = defineConfig({
  transpileDependencies: true,
  //设置正向代理服务器
  devServer:{
    proxy:"http://localhost:3000"
  },
  configureWebpack:{
    devtool: "source-map",
    plugins: [
      sentryWebpackPlugin({
        //组织名称
        org: 'houpu',
        //项目名称
        project: "wyy",
        //密钥
        authToken: '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'
      }),
    ],
  }
  
})
