const path = require('path')
const Dotenv = require('dotenv-webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd'
  },
  // https://github.com/sequelize/sequelize/issues/7509
  target: 'node',
  resolve:{
    extensions: ['.ts', '.js']
  },
  optimization: {
    minimizer: [
      // https://github.com/sidorares/node-mysql2/issues/1016
      new TerserPlugin({
        terserOptions: {
          keep_fnames: true
        }
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    node: '10',
                  },
                },
              ],
              '@babel/preset-typescript',
            ],
          },
        },
      },
    ],
  },
  plugins:[
    new Dotenv(),
  ]
}
