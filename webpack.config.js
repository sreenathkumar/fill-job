const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: {
    popup: path.resolve("src/features/popup/Popup.tsx"),
    options: path.resolve("src/features/options/Options.tsx"),
    content: path.resolve("src/features/content/Content.ts"),
    background: path.resolve("src/features/background/background.ts"),
  },
  module: {
    rules: [
      { test: /\.(ts|tsx)$/, use: "ts-loader", exclude: /node_modules/ },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve("src/static/"), to: path.resolve("dist") },
      ],
    }),
    ...getHtmlPlugins(["popup", "options"]),
    new Dotenv(),
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "js/[name].js",
  },
};

function getHtmlPlugins(chunks) {
  return chunks.map(
    (chunk) =>
      new HTMLPlugin({
        title: chunk,
        filename: `${chunk}.html`,
        chunks: [chunk],
      })
  );
}
