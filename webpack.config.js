const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    main: path.resolve(__dirname, './src/js/index.js')
  },
  output: {
    path: path.resolve(__dirname, './build/js'),
    filename: 'scripts.js',
    chunkFilename: '[name].js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-env'] }
        }
      }
    ]
  },
  optimization: process.env.NODE_ENV === 'development' ? {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  } : {},
  performance: {
    hints: false
  }
}
