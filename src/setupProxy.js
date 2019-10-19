const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use('/api', proxy({
    target: 'http://localhost:9000',
    changeOrigin: true,
    pathRewrite: {
      '^/api': ''
    }
  }))
  app.use('/tag', proxy({
    target: 'http://localhost:9001',
    changeOrigin: true,
    pathRewrite: {
      '^/tag': ''
    }
  }))
}