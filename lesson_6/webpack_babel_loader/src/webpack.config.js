module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bandle.js",
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: ["babel-loader"],
      },
    ],
  },
};
