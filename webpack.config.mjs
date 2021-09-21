import path from 'node:path'
import url from 'node:url'
import webpack from 'webpack'

export default {
  mode: process.env.NODE_ENV,
  entry: {
    scripts: path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), './src/js/index.js')
  },
  output: {
    path: path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), './build/js'),
    filename: '[name].js',
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
