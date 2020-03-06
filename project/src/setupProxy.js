const { createProxyMiddleware } = require("http-proxy-middleware");
const express = require("express");
const app = express();

module.exports = function(app, passport) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:3001",
      changeOrigin: true
    })
  );
};
