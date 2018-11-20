let parseArgv = require("minimist")
let Webpack = require("webpack")

let argv = parseArgv(process.argv)

let mode = argv.mode == "production" ? "production" : "development"
let devtool = argv.mode == "production" ? "" : "eval"

module.exports = {
  mode: mode,

  devtool: devtool,

  target: "web",

  entry: './client/index.js',

  output: {
    // https://webpack.js.org/configuration/output/#output-path
    path: __dirname + '/public',

    // https://webpack.js.org/configuration/output/#output-publicpath
    publicPath: '/',

    // https://webpack.js.org/configuration/output/#output-filename
    filename: 'bundle.js',

    // https://webpack.js.org/configuration/output/#output-chunkfilename
    // chunkFilename: "[name].chunk.js",
  },

  module: {
    rules: [
      // JS: https://github.com/babel/babel-loader
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },

  resolve: {
    alias: {
      path: "path-webpack", // fix broken Webpack polyfill
    },

    // https://webpack.js.org/configuration/resolve/#resolve-extensions
    extensions: [".js", ".jsx", ".json"],
  },

  plugins: [
    new Webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    contentBase: './public',
    hot: true
  }
}
