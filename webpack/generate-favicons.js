import FaviconsWebpackPlugin from 'favicons-webpack-plugin';

export default ({sourcePath}) => {
    
    return {
        plugins: [
            new FaviconsWebpackPlugin({
                logo: sourcePath,
                background: '#fff',
                emitStats: false,
                inject: true, // Inject the html into the html-webpack-plugin
                persistentCache: true,
                prefix: 'icons/',
                icons: {
                    android: true,
                    appleIcon: true,
                    appleStartup: true,
                    coast: false,
                    favicons: true,
                    firefox: true,
                    opengraph: false,
                    twitter: false,
                    windows: false,
                    yandex: false
                }
            })
        ]
    };
};
