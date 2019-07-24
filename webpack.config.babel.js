import path from "path";
export default (prod = false) =>{

  return {
    debug:true,
    devtool: "inline-source-map",
    entry: path.resolve(__dirname,"src/js/index.js"),
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname,"dist"),
      publicPath: "/"
    },
    mode: prod ? "prod": "dev",
    noInfo: false,
    target: "web",
    module:{
      loaders:[
        {
          test: /\*.js$/,
          exclude: /node_modules/,
          loaders: "babel",
          query: {
            presets: ["es2015"]
          }
        },
        {
          test: /\*.css$/,
          loaders: ["style","css"]
        }
      ]
    }

  }

}
