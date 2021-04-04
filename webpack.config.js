const { VueLoaderPlugin } = require('vue-loader-v16');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './js/script.ts',
  resolve: {
    extensions: ['.ts', '.js', 'vue'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'ts-loader',
          options: {
            appendTsSuffixTo: [/\.vue$/],
          },
        },
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader-v16',
        },
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
};
