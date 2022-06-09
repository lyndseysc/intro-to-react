const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

//Webpack is a "free and open-source module bundler for JavaScript" aka what it does is goes through all of your files in your app, figures out the dependencies and creates modules for them. https://dev.to/nitsancohen770/what-is-webpack-in-simple-words-31fe

module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index_bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
      // If we wanted to add loaders for different file types, like image files such as jpg or for css files, we would add extra loaders here
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      hash: true,
      filename: 'index.html', //target html
      template: './src/index.html', //source html
    }),
  ],
};
