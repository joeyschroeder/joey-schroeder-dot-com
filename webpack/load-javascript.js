export default ({ include, exclude }) => {
    
    return {
        module: {
            rules: [
                {
                    test: /\.js$/,
                    include,
                    exclude,
                    loader: 'babel-loader',
                    options: {
                        // Enable caching for improved performance during
                        // development.
                        cacheDirectory: true
                    }
                }
            ]
        }
    };
};
