import path from 'path';
import webpack from 'webpack';

export default {
  devtools: 'eval-source-map',
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client',
    path.join(__dirname, '/client/index.jsx')
  ],
  output: {
    path: '/',
    publicPath: '/'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jquery: 'jquery',
      jQuery: 'jquery'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        include: [
          path.join(__dirname, 'client'),
          path.join(__dirname, 'server/shared')
        ],
        loaders: ['react-hot', 'babel']
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  node: {
    net: 'empty',
    dns: 'empty'
  }
};
