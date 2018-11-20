import React from 'react'
import ReactDOM from 'react-dom'
import App from "./App"

// Test object spread
let obj = {}
let obj2 = {...obj}
console.log(obj2)

// Test dynamic load
import("./foo").then(x => x.default).then(console.log)

// Test trailing comma
console.log(1, 2,)

ReactDOM.render(
  <App/>,
  document.getElementById("app")
)

module.hot.accept()
