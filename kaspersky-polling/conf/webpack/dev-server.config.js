const {resolve} = require('path');
const compress = require('koa-compress');
const history = require('connect-history-api-fallback');
const convert = require('koa-connect');
const config = require('../app.config')(false);

const devServerUrl =
  `${config.devServer.useHTTP2 ? 'https' : 'http'}://localhost:${config.devServer.port}${config.app.basePath}`;

module.exports = {
  content: resolve(__dirname, '../..', config.outputDir),
  hot: true,
  port: config.devServer.port,
  host: '0.0.0.0',
  // http2: config.devServer.useHTTP2,
  dev: {
    publicPath: devServerUrl,
  },
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*'
  },
  open: {
    app: 'none',
    path: config.app.basePath.substr(1), // remove the leading slash
  },
  add: (app) => {
    // History API Fallback
    app.use(convert(history()));

    // Gzip compression
    if (config.devServer.enableGzip) {
      app.use(compress());
    }
  },
};