import FaviconsWebpackPlugin from 'favicons-webpack-plugin';

export const getFavicons = ({ sourcePath }) => {
  return {
    plugins: [
      new FaviconsWebpackPlugin({
        logo: sourcePath,
        background: '#fff',
        emitStats: false,
        inject: true, // Inject the html into the html-webpack-plugin
        persistentCache: true,
        prefix: '/',
        favicons: {
          icons: {
            android: true,
            appleIcon: true,
            appleStartup: true,
            coast: false,
            favicons: true,
            firefox: true,
            windows: false,
            yandex: false,
          },
        },
      }),
    ],
  };
};
