const path = require('path');
const copyWebpackPlugin = require('copy-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports =
{
   mode: 'development',
   devtool: 'cheap-module-source-map',
   entry: {
      popup: path.resolve('src/features/popup/Popup.tsx'),
      options: path.resolve('src/features/options/Options.tsx')
   },
   module: {
      rules: [
         { test: /\.(ts|tsx)$/, use: 'ts-loader', exclude: /node_modules/ },
         {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
         },
         {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
         },
      ]

   },
   resolve: {
      extensions: ['.tsx', '.ts', '.js']
   },
   plugins: [
      new copyWebpackPlugin({
         patterns: [
            { from: path.resolve('src/static/'), to: path.resolve('dist') },
         ]
      }),
      ...getHtmlPlugins([
         'popup',
         'options'
      ]),
      new Dotenv(),
   ],
   output: {
      path: path.join(__dirname, "dist/js"),
      filename: '[name].js'
   },
   // optimization: {
   //    splitChunks: {
   //       chunks: 'all'
   //    }
   // }
}
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