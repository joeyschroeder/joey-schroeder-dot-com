import CleanWebpackPlugin from 'clean-webpack-plugin';

export default path => {
    return { plugins: [ new CleanWebpackPlugin([path], { root: process.cwd() }) ] };
};
