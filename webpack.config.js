const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  mode: 'development',
  module: {
    rules: [
      {
          test: /\.tsx$/,
          enforce: "pre",
          use: [
              {
                  loader: 'tslint-loader'
              }
          ]
      },        
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.mjs$/,
        type: 'javascript/auto'
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.json', 'mjs' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
    //libraryTarget: 'var',
    //library: 'Application'
  }
};