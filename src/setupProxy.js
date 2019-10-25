const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use('/api', proxy({
    target: 'http://localhost:9000',
    changeOrigin: true,
    pathRewrite: {
      '^/api': ''
    }
  }))
  // app.use('/tagchat', proxy({
  //   target: 'http://localhost:9001',
  //   changeOrigin: true,
  //   pathRewrite: {
  //     '^/tagchat': ''
  //   }
  // }))
  app.use('/data', proxy({
    target: 'http://localhost:9003',
    changeOrigin: true,
  }))
 
  app.use('/alarpi', proxy({
    target: 'http://localhost:9002',
    changeOrigin: true,
    pathRewrite: {
      '^/alarpi': ''
    }
  }))
  app.use('/alarapi', proxy({
    target: 'http://118.190.159.138:8080',
    changeOrigin: true,
    pathRewrite: {
      '^/alarapi': ''
    }
  }))
}