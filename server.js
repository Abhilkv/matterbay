const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

const app = express();

app.use('/api', createProxyMiddleware({
  target: 'https://englishapi.pinkvilla.com',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '/app-api/v1/photo-gallery-feed-page/page/'
  },
  onProxyReq: (proxyReq, req, res) => {
    const match = req.url.match(/\/page\/(\d+)/);
    const pageNumber = match ? match[1] : 1;
    proxyReq.path = `/app-api/v1/photo-gallery-feed-page/page/${pageNumber}`;
  },
  onProxyRes: (proxyRes, req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
  },
}));

app.listen(3001, () => {
  console.log('Server running on port 3001');
});