import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const src  = path.resolve(__dirname, 'src')
const dist = path.resolve(__dirname, 'dist')

export default {
  mode: 'development',
  entry: src + '/index.jsx',

  output: {
    path: dist,
    filename: 'bundle.js'
  },

  module: {
    // babel-loaderの対象設定
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { url: false }
          }
        ]
      }
    ]
  },

  // どのWebpackが拡張子を対象とするかどうか
  resolve: {
    extensions: ['.js','.jsx', '.css']
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: src + '/index.html',
      filename: 'index.html'
    })
  ]
}