import { ProvidePlugin } from 'webpack';

/* A webpack plugin that injects modules into the application. */
export const POLYFILLS_CONFIG = {
  plugins: [
    new ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      process: 'process/browser',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
};
