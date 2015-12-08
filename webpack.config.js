module.exports = {
  context: __dirname + "/",
  entry: "./app.js",
  html: "./index.html",
  output: {
    filename: "app.js",
    path: __dirname + "./dist",
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"],
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader"],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style!css'
      },
    ],
  },
}
console.log("webpack rocks!");
