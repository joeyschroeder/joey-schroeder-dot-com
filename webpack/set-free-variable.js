import webpack from 'webpack';

export default (key, value) => {
    const env = {};
    env[key] = JSON.stringify(value);

    return {
        plugins: [ new webpack.DefinePlugin(env) ]
    };
};
