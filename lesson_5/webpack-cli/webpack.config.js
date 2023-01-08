const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    fileName: "main.js",
    path: path.join(__dirname, "dist"),
  },
};
