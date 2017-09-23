export default paths => {

    return {
        devtool: 'source-map',
        module: {
            rules: [{
                test: /\.scss$/,
                use: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap'],
                include: paths
            }]
        }
    };
};
