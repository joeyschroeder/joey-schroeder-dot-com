export default ({ include, exclude, options }) => {

    return {
        module: {
            rules: [
                {
                    test: /\.js$/,
                    include,
                    exclude,
                    enforce: 'pre',
                    loader: 'eslint-loader',
                    options
                }
            ]
        }
    };
};
