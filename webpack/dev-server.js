import path from 'path';
import webpack from'webpack';

export default ({ host, port }) => {

    return {
        devServer: {
            // Enable history API fallback so HTML5 History API based
            // routing works. This is a good default that will come
            // in handy in more complicated setups.
            historyApiFallback: true,
            stats: 'errors-only', // Display only errors to reduce the amount of output.
            host: host, // Defaults to `localhost`
            port: port, // Defaults to 8080
            watchOptions: {
                aggregateTimeout: 300, // Delay the rebuild after the first change
                poll: 1000 // Poll using interval (in ms, accepts boolean too)
            }
        },
        plugins: [
            // ignore node_modules so CPU usage with poll watching drops significantly
            new webpack.WatchIgnorePlugin([ path.join(__dirname, 'node_modules') ]),
            new webpack.NamedModulesPlugin()
        ]
    };
};
