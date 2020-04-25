/**
 * Created by Kaola on 2020-02-17.
 */
module.exports = {
  // 选项...
  publicPath: '/',
  // 设置代理
  devServer: {
    proxy: {
      '/api': {
        target: 'http://url/',
        changeOrigin: true,
        pathRequiresRewrite: {
          '^/api': '/api'
        }
      }
    }
  }
};
