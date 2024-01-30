const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist/assets"),
    publicPath: "/assets/",
    filename: "bundle.js",
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    // open: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
    ],
  },
};
