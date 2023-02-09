/* This is a webpack loader configuration that will be used to transpile our
JavaScript code. */
export const JAVASCRIPT_LOADER_CONFIG = {
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: { babelrc: true, cacheDirectory: true },
        },
      },
    ],
  },
};
