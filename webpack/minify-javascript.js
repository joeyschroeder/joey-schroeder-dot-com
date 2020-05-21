import webpack from 'webpack';

export default ({ useSourceMap }) => {

    return {
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                beautify: false,
                comments: false,
                compress: { warnings: false },
                drop_console: true,
                mangle: {
                    except: ['$'],
                    screw_ie8 : true,
                },
                sourceMap: useSourceMap
            })
        ]
    };
};
