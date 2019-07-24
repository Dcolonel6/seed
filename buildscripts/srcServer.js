import express from "express";
import path from "path";
import open from "open";
import webpack from "webpack";
import config from "../webpack.config.babel.js";
/*eslint-disable no-console*/

const port  = 4200;
const app = express();
const transpiler = webpack(config());

app.use(require("webpack-dev-middleware")(transpiler,{
   noInfo: false,
    publicPath: config().output.publicPath
}));

app.get("/",function(request,response){
  response.sendFile(path.join(__dirname,"../dist/index.html"));
});

app.listen(port,(err)=>{
  err ? console.error(err) : open(`http://localhost:${port}`)
})
