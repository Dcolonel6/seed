//this file isnt transpiled so must use native imports

//Register babel to transpile before our test
require("babel-register")();

//Disable webpack features that are not supported in mocha
require.extensions[".css"] = function(){}
