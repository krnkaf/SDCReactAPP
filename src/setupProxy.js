const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({

      target: 'http://localhost:8005',

      changeOrigin: true,
      pathRewrite: {//This will not append /api in api request to backend.
        '^/api': '/'
      },
    })
  );
};