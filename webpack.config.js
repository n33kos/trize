var path = require('path');
var webpack = require('webpack');

module.exports = [
  {
      entry: './src/trize.js',
      mode: 'production',
      module: {
          rules : [
              {
                  test: /\.js$/,
                  loader: 'babel-loader',
                  query: {
                      presets: ['es2015']
                  }
              }
          ]
      },
      output: {
          path: path.resolve(__dirname, 'dist'),
          filename: `trize.min.js`,
          library: 'trize',
          libraryTarget: 'umd',
          umdNamedDefine: true
      },
      stats: {
          colors: true
      },
      target: 'web',
  },
  {
      entry: './src/trize.js',
      mode: 'production',
      module: {
          rules : [
              {
                  test: /\.js$/,
                  loader: 'babel-loader',
                  query: {
                      presets: ['es2015']
                  }
              }
          ]
      },
      output: {
          path: path.resolve(__dirname, 'dist'),
          filename: `trize.node.js`,
          library: 'trize',
          libraryTarget: 'umd',
          umdNamedDefine: true
      },
      stats: {
          colors: true
      },
      target: 'node',
  }
];
