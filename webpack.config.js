const path = require('path'),
  webpack = require('webpack')

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    main: './src/js/index.js',
  },
  output: {
    filename: 'scripts.js',
    chunkFilename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'window.$': 'jquery',
      'jQuery': 'jquery',
      'window.jQuery': 'jquery',
      'jquery': 'jquery',
      'window.jquery': 'jquery'
    })
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
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
