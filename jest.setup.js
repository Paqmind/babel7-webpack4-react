import "@babel/polyfill"
console.log("jest.setup")
global.R = require("@paqmind/ramda")
global.fetch = require('jest-fetch-mock')
