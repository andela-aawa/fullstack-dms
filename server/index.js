import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import path from 'path';
import http from 'http';

import webpack from 'webpack';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackMiddleware from 'webpack-dev-middleware';

import webpackConfig from '../webpack.conf.dev';

import routes from './config/routes';

dotenv.load();

// Set up the express app
const app = express();
// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

routes(app);

if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(webpackConfig);
  app.use(webpackMiddleware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
  }));
  app.use(webpackHotMiddleware(compiler));
}

// Log requests to the console.
app.use(logger('dev'));

// Set public directory
app.use(express.static(path.resolve(__dirname, '../client/')));

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

const port = parseInt(process.env.PORT, 10) || 3000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Server listening on port ${port}`); /* eslint-disable no-console*/
});

export default app;
