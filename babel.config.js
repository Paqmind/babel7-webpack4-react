module.exports = function (api) {
  console.log("!!!")
  api.cache(true)

  let presets = [
    "@babel/preset-env",
    "@babel/preset-react"
  ]

  let plugins = [
    // "@babel/plugin-transform-modules-commonjs",
    "@babel/plugin-syntax-dynamic-import",
    // "babel-plugin-syntax-dynamic-import",
    // "@babel/plugin-proposal-object-rest-spread",
    // "babel-plugin-dynamic-import-node",
    // "transform-object-rest-spread",
  ] // "dynamic-import-node",
  // "syntax-trailing-function-commas"]

  // let env =  {
  //   test: {
  //     presets,
  //     plugins,
  //   },
  // }

  return {
    presets,
    plugins,
    // env,
  }
}
