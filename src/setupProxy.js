const { legacyCreateProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    legacyCreateProxyMiddleware({
      target: 'https://cojim-api.onrender.com',
      changeOrigin: true,
    })
  );
  app.use(
    '/hls',
    legacyCreateProxyMiddleware({
      target: 'https://cojim.ng',
      changeOrigin: true,
    })
  );
};