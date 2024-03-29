import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

/**
 * It returns a webpack configuration object that enables hot module replacement
 * and react-refresh
 * @param [] - baseDirectory - the base directory of the project
 * @returns An object with a devServer property and a plugins property.
 */
export const buildDevServerConfig = ({ host, port, proxy } = {}) => {
  return {
    devServer: {
      client: {
        overlay: true,
      },
      devMiddleware: {
        stats: 'errors-only',
      },
      historyApiFallback: true,
      host,
      hot: true,
      open: false,
      port,
      proxy,
    },
    plugins: [
      new ReactRefreshWebpackPlugin({
        overlay: false,
      }),
    ],
  };
};
