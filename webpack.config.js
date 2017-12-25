const path = require('path');

const SRC_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'dist');

const config = {
    entry: SRC_DIR + '/index.js',
    output: {
          path: BUILD_DIR,
          filename: 'bundle.js'
    },
    devtool: 'source-map',
    devServer: {
      contentBase: './dist'
    },
    module: {
      rules: [
          {
              test: /\.js$/,
              include: SRC_DIR,
              loader: 'babel-loader',
              exclude: /node_modules/,
              query: { presets: ['es2015', 'react', 'stage-2'] }
          },
          {
              test: /\.css$/,
              use: ['style-loader', 'css-loader']
          },
          {
              test: /\.(png|svg|jpg|gif)$/,
              use: ['file-loader']
          },
          {
              test: /\.(woff|woff2|eot|ttf|otf)$/,
              use: ['file-loader']
          },
          {
              test: /\.(csv|tsv)$/,
              use: ['csv-loader']
          },
          {
              test: /\.xml$/,
              use: ['xml-loader']
          }
      ]
    }
};

module.exports = config;