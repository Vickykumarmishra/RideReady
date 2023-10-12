const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api', // Specify the URL path you want to proxy
    createProxyMiddleware({
      target: 'https://brave-red-duckling.cyclic.app', // Replace with the actual API URL
      changeOrigin: true,
    })
  );
};
