const CopyPlugin = require("copy-webpack-plugin")
const ZipPlugin = require('zip-webpack-plugin')


module.exports = {
  entry: {
    content: './content.js',
    background: './background.js',
  },
  mode: 'production',
  plugins: [
    new CopyPlugin({
      patterns: [
        './manifest.json',
        {
          from: './icons',
          to: './icons'
        },
        'LICENSE'
      ],
    }),
    new ZipPlugin({
      filename: 'bundle.zip',
    })
  ],
  output: {
    filename: '[name].js',
    path: `${__dirname}/dist`,
    clean: true
  },
}